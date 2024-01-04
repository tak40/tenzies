/** @format */
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Die from '/components/Die.jsx'

function App() {
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const allSame = dice.every(die => die.value === dice[0].value)
        if (allHeld && allSame) {
            setTenzies(true)
            console.log('You won!')
        }
    }, [dice])

    /**
     * Challenge: Check the dice array for these winning conditions:
     * 1. All dice are held, and
     * 2. all dice have the same value
     *
     * If both conditions are true, set `tenzies` to true and log
     * "You won!" to the console
     */

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid(),
            })
        }
        return newDice
    }

    function holdDice(id) {
        setDice(prevDice =>
            prevDice.map(die => {
                if (die.id === id) {
                    return { ...die, isHeld: !die.isHeld }
                }
                return die
            })
        )
    }

    function rollNewDice() {
        setDice(prevDice =>
            prevDice.map(die => {
                return die.isHeld
                    ? die
                    : {
                          ...die,
                          value: Math.ceil(Math.random() * 6),
                      }
            })
        )
    }

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ))

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className="dice-container">{diceElements}</div>
            <button onClick={rollNewDice}>Roll</button>
        </main>
    )
}

export default App
