import React from "react";
import { useState } from "react";
import {modifyIntentions, getDate} from "./necessities.js"

const Reflect = (props) => {
    const relevant = props.post.intentions.filter(c => c.intention[0] == "1")
    const [done, setDone] = useState(relevant.map(c => c.done))
    const [refl, setRefl] = useState(relevant.map(c => c.reflection))
    // const [dummy, setDummy] = useState(false)

    const handleSubmit = async (event) => {
        // event.preventDefault();
        let ind = 0
        let i = 0
        const yo = props.post.intentions.slice()
        console.log(relevant.length);
        while (ind < relevant.length) {
            if (yo[i].intention[0] === "1") {
                yo[i].done = done[ind]
                yo[i].reflection = refl[ind]
                console.log(yo[i], refl[ind]);
                ind++
                i++
            } else i++
        }

        console.log(yo);
        
        modifyIntentions(yo)
    }

    // const handleDummy = () => {
    //     setDummy(c => !c)
    // }

    const handleChangeCheckbox = (e) => {
        setDone(curr => {
            let blah = curr.slice()
            blah[e.target.value] = !curr[e.target.value]
            return blah
        })
    }

    const handleChangeTextarea = (e) => {
        setRefl(curr => {
            let blah = curr.slice()
            blah[e.target.name] = e.target.value
            return blah
        })
    }

    return (<div>{
            props.post.date === getDate() ? <div>
                {relevant.map((c, i) => 
                <div><div><input onBlur={handleSubmit} type="checkbox" onChange={handleChangeCheckbox} checked={done[i]} value={i}></input>{c.intention[1]}</div>
                <div>reflect 
                <textarea name={i} onBlur={handleSubmit} onChange={handleChangeTextarea} value={refl[i]}></textarea></div>
                </div>
                )}

            {/* <input type="checkbox" onChange={handleDummy} checked={dummy}></input> */}
            </div>
            : <div>set today's !!! </div>
        }</div>)
}

export default Reflect