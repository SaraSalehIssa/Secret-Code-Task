import React, { useState } from 'react';
import classes from './Start.module.css';

export function getRndInteger() {
    return {
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10),
        num3: Math.floor(Math.random() * 10),
        num4: Math.floor(Math.random() * 10)
    };
}

export default function Start(props) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [num4, setNum4] = useState(0);

    const [disable, setDisable] = useState(false);

    function handleStartBtnClick() {
        const { num1, num2, num3, num4 } = getRndInteger();

        props.setNumbers([num1, num2, num3, num4]);
        setNum1(num1);
        setNum2(num2);
        setNum3(num3);
        setNum4(num4);

        setDisable(true);
    }

    return (
        <div className={classes.container}>
            <div className={classes.start_container}>
                <h2 id='title' className={classes.title}>Secret Code:</h2>
                <p id='secretCode'></p>
                <div className={classes.code}>
                    <span id='firstNumber' className={classes.firstNumber}>{num1}</span>
                    <span id='secondNumber' className={classes.secondNumber}>{num2}</span>
                    <span id='thirdNumber' className={classes.thirdNumber}>{num3}</span>
                    <span id='fourthNumber' className={classes.fourthNumber}>{num4}</span>
                </div>
                <button id='startBtn' className={classes.startBtn} onClick={handleStartBtnClick} disabled={disable}>Start</button>
            </div>
        </div>
    );
}