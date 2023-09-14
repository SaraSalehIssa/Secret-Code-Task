import React, { useState } from 'react';
import classes from './Check.module.css';

export default function Check() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [num4, setNum4] = useState(0);

    function getInputInteger() {
        setNum1(document.getElementById('num1'));
        setNum2(document.getElementById('num2'));
        setNum3(document.getElementById('num3'));
        setNum4(document.getElementById('num4'));
    }


    return <>
        <div className={classes.container}>
            <div className={classes.check}>
                <div className={classes.part}>
                    <input
                        className={classes.num1}
                        id='num1'
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
                    />
                    <input
                        className={classes.num2}
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
                    />
                    <input
                        className={classes.num3}
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
                    />
                    <input
                        className={classes.num4}
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
                    />
                    <button className={classes.checkBtn} onClick={getInputInteger}>Check</button>
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
