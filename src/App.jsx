/** @format */
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from '/components/Die.jsx'

function App() {
    const [dice, setDice] = useState(allNewDice())

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
