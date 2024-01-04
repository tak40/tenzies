/** @format */
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Die from '/components/Die.jsx'

function App() {
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => { 
        console.log("Dice state changed")
    }, [dice])

    
    /**
     * Challenge:
     * 1. Add new state called `tenzies`, default to false. It
     *    represents whether the user has won the game yet or not.
     * 2. Add an effect that runs every time the `dice` state array
     *    changes. For now, just console.log("Dice state changed").
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
