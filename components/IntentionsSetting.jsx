import { useState, useCallback, useRef } from "react";
import styles from "./styles/IntentionsSetting.module.css"
import {modifyIntentions, getDate} from "./necessities.js"
import { renderToString } from 'react-dom/server';

const IntentionsSetting = (props) => {
    console.log("!!!", props.post);
    // assume number of identities is 5
    const ini = props.post ? props.post.intentions : [{intention: [""], done: false, reflection: ""}]
    const [value, setValue] = useState(ini.map(c => c.intention));
    const [objects, setObjects] = useState(ini.map(({done, reflection}) => ({done, reflection})));

    const value_to_div = (value) => {
        return value.map((curr) => curr.length >= 2 ? <span><span className={styles["iden_" + curr[0]]}>{curr[0]}) {curr[1]}</span>{"\n"}</span> : <span>{curr[0]}{"\n"}</span>)
    }

    const value_to_textarea = (value) => {
        const rrr = (value.reduce((acc, curr) => acc + curr.join(") ") + "\n", ""))
        return rrr.substring(0, rrr.length - 1)
    }
  
    const handleChange = (event) => {
        const tx = event.target.value
        const protos = tx.split("\n")
        const past = value_to_textarea(value).split("\n")

        if (protos.length != past.length) {
            let i = 0
            while (protos[i] == past[i]) i++
            if (protos.length > past.length) setObjects(curr => {
                // console.log(curr);
                // console.log(curr.splice(i, 0, {done: false, reflection: ""}));
                curr.splice(i, 0, {done: false, reflection: ""})
                return curr
            })
            else setObjects(curr => curr.splice(i, 1))
        }

        setValue(curr => {
            return protos.map(c => {
                const splitted = c.split(") ");
                return splitted.length > 1 ? [splitted[0], splitted.splice(1).join(") ")] : [splitted[0]];
            })
        });
    }
  
    const handleSubmit = async (event) => {
        // event.preventDefault();
        let intentions = []
        console.log(value, objects);
        for (let i = 0; i < value.length; i ++) intentions.push({intention: value[i], done: objects[i].done, reflection: objects[i].reflection})
        modifyIntentions(intentions)
    }

    const secondRef = useRef(null);

    const handleScroll = useCallback((e) => {
        const secondElement = secondRef.current;
        secondElement.scrollTop = e.target.scrollTop;
      }, []);

    return (
        <section className={styles.section}>
            <textarea onBlur={handleSubmit} onScroll={handleScroll} className={styles.ghost} onInput={handleChange} value={value_to_textarea(value)}></textarea>
            <div ref={secondRef} className={styles.showtime} placeholder="yo" aria-hidden="true">{value_to_div(value)}</div>
        </section>
    );
}

export default IntentionsSetting