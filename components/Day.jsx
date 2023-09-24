import React from "react";
import styles from "./styles/Calendar.module.css";

export default function Day(props) {
    if (props.dummy) return <div className={styles.dummy}> </div>

    let doo = false
    for (let i of props.posts.intentions) {
        if (i.done && (props.identity === i.intention[0])) doo = true
    }


    return (
        <div className={doo ? styles.yay : styles.nay}>
        </div>
    );
}
