import React, { useState } from 'react';
import classes from './Start.module.css';

export default function Start() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [num4, setNum4] = useState(0);

    function getRndInteger() {
        setNum1(Math.floor(Math.random() * 10));
        setNum2(Math.floor(Math.random() * 10));
        setNum3(Math.floor(Math.random() * 10));
        setNum4(Math.floor(Math.random() * 10));
    }

    return <>
        <div className={classes.container}>
            <div className={classes.start_container}>
                <h2 className={classes.title}>Secret Code:</h2>
                <div className={classes.code}>
                    <span className={classes.firstNumber}>{num1}</span>
                    <span className={classes.secondNumber}>{num2}</span>
                    <span className={classes.thirdNumber}>{num3}</span>
                    <span className={classes.fourthNumber}>{num4}</span>
                </div>
                <button className={classes.startBtn} onClick={getRndInteger}>Start</button>
            </div>
        </div>
    </>
}
