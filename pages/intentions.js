// set today's intentions
import clientPromise from "../lib/mongodb";

import IntentionsSetting from "../components/IntentionsSetting"; 
import {getDate} from "../components/necessities.js"; 

export const getServerSideProps = async () => {
    try {
        const client = await clientPromise;
        const db = client.db("entend");
        const posts = await db.collection("intentions").findOne({date: getDate()});
        return { props: {post: JSON.parse(JSON.stringify(posts))} }
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
}

const IntentionsForm = (props) => {
    return <IntentionsSetting post={props.post}></IntentionsSetting>
}
  
export default IntentionsForm