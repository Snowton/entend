import { useRouter } from "next/router";  
import my_user from "../../my_user.js"
import styles from "./index.module.css"
import { useEffect } from "react";
import Calendar from "../../components/Calendar.jsx"
import Reflect from "../../components/Reflect.jsx"
import clientPromise from "../../lib/mongodb";
import Link from "next/link"

// const getDate = () => {
//     return new Date().toJSON().slice(0, 10)
// }

const num_dates = 30;

const getDate = () => {
    return new Date().toJSON().slice(0, 10)
}

// same as in intentions.js
export const getServerSideProps = async () => {
    // const res = await fetch('https://api.github.com/repos/vercel/next.js')
    // const repo = await res.json()
    try {
        const client = await clientPromise;
        const db = client.db("entend");
        const nd = new Date().setDate(new Date().getDate() - num_dates)
        const ndq = new Date(nd).toJSON().slice(0, 10)

        const posts = await db.collection("intentions").find({"date": {$gte: ndq}}).sort({date: -1}).limit(num_dates).toArray();
        console.log(posts);
        return { props: {post: JSON.parse(JSON.stringify(posts))} }
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
}

const Identity = (props) => {
    const router = useRouter();
    const identity = router.query["identity"]
    console.log(props.post);
    

    // TODO: get reasons to be identity from api. use angela's worksheet, atomic habits
    return (
        <div>
            <h1 className={styles.big}>You're a {identity}</h1>
            <div>this is a pictorial representation of how many days in the past month you've been a {identity}</div> {/* inspired by github */}
            <Calendar num={num_dates} identity={"1"} dates={props.post.slice().reverse()}></Calendar> { /* we're only going to have one identity right now, because we don't have a way of adding more */ }
            <div>Why? [insert reasons gotten above]</div>
            <h1>today's <Link href="/intentions">intentions</Link></h1>
            <Reflect post={props.post[0]}></Reflect>
            <h1>other things</h1>
            <div>RSS feeds/other news (ai generated?). way to remind you the world is big. can be distracting though.</div>
            <div>Current goal: {my_user.people[identity].goals[0].goal} by {my_user.people[identity].goals[0].completion_date}</div>
            <div>Past goals completed (some map code)</div>
            <div>
                <h1>Past intentions</h1>
                {
                    props.post.slice(1).map(cu => <div>
                        <h3>{cu.date.slice(0, 10)}</h3>
                        {cu.intentions.filter(c => c.intention[0] == "1").reduce((a, c) => a + c.intention[1] + "\n", "")}
                        </div>)
                }
            </div>
        </div>
    )

    // TODO: will have a default ordering of the above based on personal vs public. also toggleable privacy
}

export default Identity