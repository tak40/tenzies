/** @format */
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeContext'
import { useSound } from './SoundManager'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from '/components/Die.jsx'

function App() {
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const { playSound } = useSound()

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const allSame = dice.every(die => die.value === dice[0].value)
        if (allHeld && allSame) {
            setTenzies(true)
        }
    }, [dice])

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
        if (!tenzies) {
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
            playSound('roll')
        } else {
            setDice(allNewDice())
            setTenzies(false)
        }
    }

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ))

    const handleThemeToggle = () => {
        toggleTheme(
            theme === 'classic'
                ? 'neon'
                : theme === 'neon'
                ? 'retro'
                : 'classic'
        )
    }

    return (
        <main className={`theme-${theme}`}>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <button onClick={handleThemeToggle}>Toggle Theme</button>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className="dice-container">{diceElements}</div>
            <button onClick={rollNewDice}>
                {tenzies ? 'New Game' : 'Roll'}
            </button>
        </main>
    )
}

export default App
