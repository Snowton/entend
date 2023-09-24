import Link from "next/link"

function Logged_In_People() {
    return (<div>
        <h3>You're a...</h3>
        <div>
            <Link href="/builder"><h1>Builder</h1></Link>
            <Link href="/mathematician"><h1>Mathematician</h1></Link>
            <Link href="/researcher"><h1>Researcher</h1></Link>
        </div>
    </div>)
}

function Default_Homepage() {
    return (<div>
        <div>
            Sign up for an account, or visit these pages of people being people!
        </div>
    </div>)
}

function App() {
    return (
    <div>
        <Default_Homepage></Default_Homepage>
        <hr></hr>
        <Logged_In_People></Logged_In_People>
    </div>)
}

export default App;