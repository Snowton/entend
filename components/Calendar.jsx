import React from "react";
import styles from "./styles/Calendar.module.css";
import Day from "./Day"

export default function Calendar(props) {

    const NUM = props.num

    // const d = new Date().getDay();
    const num = 7 - new Date().getDay();
    let actual = new Date()
    actual.setDate(new Date().getDate() - NUM + 1)
    const last_num = new Date(actual).getDay()
    // console.log(props.dates[0].date, last_num);

    actual = new Date()
    let arr = []
    let ind = 0
    console.log(props.dates);

    for (let i = NUM - 1; i > -1; i--) {
        console.log(i);
        actual.setDate(new Date().getDate() - i)
        console.log(new Date(actual), "hi");
        const nd = new Date(actual).toJSON().slice(0, 10)
        if (ind < props.dates.length && props.dates[ind].date == nd) arr.push({posts: props.dates[ind]})
        else arr.push({dummy: "nay"})

        while (ind < props.dates.length && props.dates[ind].date.slice(0, 10) <= nd) ind++

        actual = new Date()
    }

    console.log(arr);

    return (
        <div className={styles.past}>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        {
            [...Array(last_num).keys()].map(c => <Day dummy="yes"></Day>)
        }
        {
            arr.map(c => c.posts ? <Day identity={props.identity} posts={c.posts}></Day> : <Day identity={props.identity} dummy={c.dummy}></Day>)
        }
        {
            [...Array(num).keys()].map(c => <Day dummy="yes"></Day>)
        }
        {
            [...Array(6).keys()].map(c => <Day dummy="yes"></Day>)
        }
        </div>
    );
}
