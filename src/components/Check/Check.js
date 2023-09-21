import React, { useState, useEffect, useRef } from 'react';
import classes from './Check.module.css';
import { getRndInteger } from '../Start/Start';

function Check(props) {
    const NUM_ROWS = 8;
    const NUM_DIGITS = 4;
    var newNumber = [];

    const initialInputValues = Array.from({ length: NUM_ROWS }, () =>
        Array(NUM_DIGITS).fill('')
    );

    const [inputValues, setInputValues] = useState(initialInputValues);
    const [disabledRows, setDisabledRows] = useState([]);

    const [randomNum, setRandomNum] = useState([]);

    useEffect(() => {
        // Initialize first row: enabled, but all others: disabled
        const initialDisabledRows = Array(NUM_ROWS).fill(true);
        initialDisabledRows[0] = false;
        setDisabledRows(initialDisabledRows);

        setRandomNum(props.numbers);
    }, [props.numbers, randomNum]);

    const handleInputChange = (partIndex, digitIndex, value) => {
        const newInputValues = [...inputValues];
        newInputValues[partIndex][digitIndex] = value;
        setInputValues(newInputValues);
    };

    useEffect(() => {
        if (newNumber.length !== 0) {
            setRandomNum(newNumber);
        }
    }, [newNumber, randomNum]);

    const handleCheckClick = (partIndex) => {
        for (let digitIndex = 0; digitIndex < NUM_DIGITS; digitIndex++) {
            const inputValue = parseInt(inputValues[partIndex][digitIndex]);
            const randomNumDigit = randomNum[digitIndex];
            const element = document.getElementsByClassName(digitIndex)[partIndex];

            if (inputValue === randomNumDigit) {
                element.style.border = '2px solid #00ff00';
            } else if (randomNum.includes(inputValue)) {
                element.style.border = '2px solid #ffd700';
            } else {
                element.style.border = '2px solid #ff0000';
            }
        }

        const isWinningGuess = Array.from({ length: NUM_DIGITS }).every((_, i) =>
            parseInt(inputValues[partIndex][i]) === randomNum[i]
        );

        // Set the current row as disabled
        const newDisabledRows = [...disabledRows];
        newDisabledRows[partIndex] = true;
        setDisabledRows(newDisabledRows);

        // Set the next row as enabled
        if (partIndex < NUM_ROWS - 1) {
            newDisabledRows[partIndex + 1] = false;
            setDisabledRows(newDisabledRows);
        }

        if (isWinningGuess) {

            document.getElementById('title').innerHTML = 'You won!';

            for (let i = 0; i < NUM_DIGITS; i++) {
                document.getElementById(`Number${i + 1}`).innerHTML = randomNum[i];
                document.getElementById(`Number${i + 1}`).style.display = 'inline';
            }

            document.getElementById('startBtn').innerHTML = 'Start Again';
            document.getElementById('startBtn').disabled = false;
            document.getElementById('startBtn').onclick = resetGame;

        } else if (!isWinningGuess && partIndex === NUM_ROWS - 1) {

            document.getElementById('title').innerHTML = 'You lost!';
            document.getElementById('secretCode').innerHTML = 'The secret code:';

            for (let i = 0; i < NUM_DIGITS; i++) {
                document.getElementById(`Number${i + 1}`).innerHTML = randomNum[i];
                document.getElementById(`Number${i + 1}`).style.display = 'inline';
            }


            document.getElementById('startBtn').innerHTML = 'Start Again';
            document.getElementById('startBtn').disabled = false;
            document.getElementById('startBtn').onclick = resetGame;
        }
    };

    const inputRefs = useRef(Array(NUM_ROWS).fill().map(() => Array(NUM_DIGITS).fill(null)));

    const resetGame = () => {
        // Reset input values
        setInputValues(initialInputValues);

        // Ser Disable attribute for all rows
        const initialDisabledRows = Array(NUM_ROWS).fill(true);
        initialDisabledRows[0] = false;
        setDisabledRows(initialDisabledRows);

        // Hide the secret code
        for (let i = 0; i < NUM_DIGITS; i++) {
            document.getElementById(`Number${i + 1}`).style.display = 'none';
        }

        // Generate a new secret code (you need to implement this function)
        newNumber = getRndInteger();
        props.setNumbers([newNumber.num1, newNumber.num2, newNumber.num3, newNumber.num4]);

        // Reset the title
        document.getElementById('title').innerHTML = 'Secret Code';

        // Hide the secret code button and disable it
        document.getElementById('secretCode').style.display = 'none';

        // Disable the start again button
        document.getElementById('startBtn').disabled = true;

        for (let j = 0; j < NUM_DIGITS; j++) {
            for (let i = 0; i < NUM_ROWS; i++) {
                document.getElementsByClassName(j)[i].style.border = '1px solid #000';
            }
        }
    };

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