import React, { useState, useRef } from 'react';
import classes from './Check.module.css';

function Check() {
    const NUM_ROWS = 8;
    const NUM_DIGITS = 4;

    const initialInputValues = Array.from({ length: NUM_ROWS }, () =>
        Array(NUM_DIGITS).fill('')
    );

    const [inputValues, setInputValues] = useState(initialInputValues);
    const [disabledRows, setDisabledRows] = useState(() => {
        // Initialize first row: enabled, but all others: disabled
        const initialDisabledRows = Array(NUM_ROWS).fill(true);
        initialDisabledRows[0] = false;
        return initialDisabledRows;
    });

    const handleInputChange = (partIndex, digitIndex, value) => {
        const newInputValues = [...inputValues];
        newInputValues[partIndex][digitIndex] = value;
        setInputValues(newInputValues);
    };

    const handleCheckClick = (partIndex) => {
        if (inputValues[partIndex][0] === document.getElementById('firstNumber').innerHTML) {
            document.getElementsByClassName(0)[partIndex].style.border = '2px solid #00ff00';
        } else if (
            inputValues[partIndex][0] === document.getElementById('secondNumber').innerHTML ||
            inputValues[partIndex][0] === document.getElementById('thirdNumber').innerHTML ||
            inputValues[partIndex][0] === document.getElementById('fourthNumber').innerHTML) {
            document.getElementsByClassName(0)[partIndex].style.border = '2px solid #ffd700';
        } else {
            document.getElementsByClassName(0)[partIndex].style.border = '2px solid #ff0000';
        }

        if (inputValues[partIndex][1] === document.getElementById('secondNumber').innerHTML) {
            document.getElementsByClassName(1)[partIndex].style.border = '2px solid #00ff00';
        } else if (
            inputValues[partIndex][1] === document.getElementById('firstNumber').innerHTML ||
            inputValues[partIndex][1] === document.getElementById('thirdNumber').innerHTML ||
            inputValues[partIndex][1] === document.getElementById('fourthNumber').innerHTML) {
            document.getElementsByClassName(1)[partIndex].style.border = '2px solid #ffd700';
        } else {
            document.getElementsByClassName(1)[partIndex].style.border = '2px solid #ff0000';
        }

        if (inputValues[partIndex][2] === document.getElementById('thirdNumber').innerHTML) {
            document.getElementsByClassName(2)[partIndex].style.border = '2px solid #00ff00';
        } else if (
            inputValues[partIndex][2] === document.getElementById('firstNumber').innerHTML ||
            inputValues[partIndex][2] === document.getElementById('secondNumber').innerHTML ||
            inputValues[partIndex][2] === document.getElementById('fourthNumber').innerHTML) {
            document.getElementsByClassName(2)[partIndex].style.border = '2px solid #ffd700';
        } else {
            document.getElementsByClassName(2)[partIndex].style.border = '2px solid #ff0000';
        }

        if (inputValues[partIndex][3] === document.getElementById('fourthNumber').innerHTML) {
            document.getElementsByClassName(3)[partIndex].style.border = '2px solid #00ff00';
        } else if (
            inputValues[partIndex][3] === document.getElementById('firstNumber').innerHTML ||
            inputValues[partIndex][3] === document.getElementById('secondNumber').innerHTML ||
            inputValues[partIndex][3] === document.getElementById('thirdNumber').innerHTML) {
            document.getElementsByClassName(3)[partIndex].style.border = '2px solid #ffd700';
        } else {
            document.getElementsByClassName(3)[partIndex].style.border = '2px solid #ff0000';
        }

        // set the current row: disabled
        const newDisabledRows = [...disabledRows];
        newDisabledRows[partIndex] = true;
        setDisabledRows(newDisabledRows);

        // set the next row: enabled
        if (partIndex < NUM_ROWS - 1) {
            newDisabledRows[partIndex + 1] = false;
            setDisabledRows(newDisabledRows);
        }
    };

    const inputRefs = useRef(Array(NUM_ROWS).fill().map(() => Array(NUM_DIGITS).fill(null)));

    return (
        <div className={classes.container}>
            <div className={classes.check}>
                {[...Array(NUM_ROWS)].map((_, partIndex) => (
                    <div className={classes.part} key={partIndex}>
                        {[...Array(NUM_DIGITS)].map((_, digitIndex) => (
                            <input
                                key={digitIndex}
                                className={digitIndex}
                                type="text"
                                maxLength="1"
                                onKeyDown={(e) => {
                                    if (!e.key.match(/[0-9]/) && e.key !== 'Backspace') {
                                        e.preventDefault();
                                    }
                                }}
                                onInput={(e) => {
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    handleInputChange(partIndex, digitIndex, e.target.value);
                                }}
                                disabled={disabledRows[partIndex]}
                                value={inputValues[partIndex][digitIndex]}
                                ref={(input) => (inputRefs.current[partIndex][digitIndex] = input)}
                            />
                        ))}
                        <button
                            className={classes.checkBtn}
                            disabled={disabledRows[partIndex]}
                            onClick={() => handleCheckClick(partIndex)}
                        >
                            Check
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Check;