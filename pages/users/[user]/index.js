import { useRouter } from "next/router";  

// this is dashboard i guess? but we need a separate folder for the user
const User = () => {
    const router = useRouter();
    const wtf = router.query["user"]
    console.log(wtf);
    const user = wtf // i see. they don't care about what it is now, but when it reloads it'll be served. oh tf that's so weird.
    return (
        <div>
            <h1>Hi {JSON.stringify(router.query)}</h1>
        </div>
    )

}

const User2 = (req) => {
    const user = req // i see. they don't care about what it is now, but when it reloads it'll be served. oh tf that's so weird.
    return (
        <div>
            <h1>Hi {JSON.stringify(user)}</h1>
        </div>
    )
}

export default User