import React, { useState } from 'react';
import classes from './Check.module.css';

export default function Check() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [num4, setNum4] = useState(0);

    function getInputInteger() {
        console.log(num1);
        console.log(num2);
        console.log(num3);
        console.log(num4);

        if (num1 === document.getElementById('firstNumber').innerHTML) {
            document.getElementById('number1').style.border = '2px solid #00ff00';
        } else if (
            num1 === document.getElementById('secondNumber').innerHTML ||
            num1 === document.getElementById('thirdNumber').innerHTML ||
            num1 === document.getElementById('fourthNumber').innerHTML) {
            document.getElementById('number1').style.border = '2px solid #ffd700';
        } else {
            document.getElementById('number1').style.border = '2px solid #ff0000';
        }

        if (num2 === document.getElementById('secondNumber').innerHTML) {
            document.getElementById('number2').style.border = '2px solid #00ff00';
        } else if (
            num2 === document.getElementById('firstNumber').innerHTML ||
            num2 === document.getElementById('thirdNumber').innerHTML ||
            num2 === document.getElementById('fourthNumber').innerHTML) {
            document.getElementById('number2').style.border = '2px solid #ffd700';
        } else {
            document.getElementById('number2').style.border = '2px solid #ff0000';
        }

        if (num3 === document.getElementById('thirdNumber').innerHTML) {
            document.getElementById('number3').style.border = '2px solid #00ff00';
        } else if (
            num3 === document.getElementById('firstNumber').innerHTML ||
            num3 === document.getElementById('secondNumber').innerHTML ||
            num3 === document.getElementById('fourthNumber').innerHTML) {
            document.getElementById('number3').style.border = '2px solid #ffd700';
        } else {
            document.getElementById('number3').style.border = '2px solid #ff0000';
        }

        if (num4 === document.getElementById('fourthNumber').innerHTML) {
            document.getElementById('number4').style.border = '2px solid #00ff00';
        } else if (
            num4 === document.getElementById('firstNumber').innerHTML ||
            num4 === document.getElementById('secondNumber').innerHTML ||
            num4 === document.getElementById('thirdNumber').innerHTML) {
            document.getElementById('number4').style.border = '2px solid #ffd700';
        } else {
            document.getElementById('number4').style.border = '2px solid #ff0000';
        }
    }

    return <>
        <div className={classes.container}>
            <div className={classes.check}>
                <div className={classes.part}>
                    <input
                        className={classes.number1}
                        id='number1'
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        onChange={e => setNum1(e.target.value)}
                        disabled={false}
                    />
                    <input
                        className={classes.number2}
                        id='number2'
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        onChange={e => setNum2(e.target.value)}
                        disabled={false}
                    />
                    <input
                        className={classes.number3}
                        id='number3'
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        onChange={e => setNum3(e.target.value)}
                        disabled={false}
                    />
                    <input
                        className={classes.number4}
                        id='number4'
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        onChange={e => setNum4(e.target.value)}
                        disabled={false}
                    />
                    <button className={classes.checkBtn} disabled={false} onClick={getInputInteger}>Check</button>
                </div>
                <div className={classes.part}>
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <button className={classes.checkBtn} disabled={true}>Check</button>
                </div>
                <div className={classes.part}>
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <button className={classes.checkBtn} disabled={true}>Check</button>
                </div>
                <div className={classes.part}>
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <button className={classes.checkBtn} disabled={true}>Check</button>
                </div>
                <div className={classes.part}>
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <button className={classes.checkBtn} disabled={true}>Check</button>
                </div>
                <div className={classes.part}>
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <button className={classes.checkBtn} disabled={true}>Check</button>
                </div>
                <div className={classes.part}>
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <button className={classes.checkBtn} disabled={true}>Check</button>
                </div>
                <div className={classes.part}>
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <input
                        className={classes.num}
                        type="text"
                        maxLength="1"
                        onKeyDown={(e) => {
                            if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                e.preventDefault();
                            }
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        disabled={true}
                    />
                    <button className={classes.checkBtn} disabled={true}>Check</button>
                </div>
            </div>
        </div>
    </>
}