/** @format */
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeContext'
import { useSound } from './SoundManager'
import { useSoundContext } from './SoundContext'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from '/components/Die.jsx'
import SoundToggle from '../components/SoundToggle'
import ClassicEndGame from './EndGameEffects/ClassicEndGame'
import NeonEndGame from './EndGameEffects/NeonEndGame'
import RetroEndGame from './EndGameEffects/RetroEndGame'

function App() {
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const { playSound } = useSound()

    // New timer state
    const [timer, setTimer] = useState(0)
    const [timerRunning, setTimerRunning] = useState(false)

    // Start the timer when the first roll happens and stop when the game ends
    useEffect(() => {
        if (tenzies) {
            setTimerRunning(false)
        }
    }, [tenzies])

    useEffect(() => {
        let interval
        if (timerRunning) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 10)
            }, 10)
        }
        return () => clearInterval(interval)
    }, [timerRunning])

    // Format the time for display
    const formatTime = () => {
        const milliseconds = Math.floor((timer % 1000) / 10)
        const seconds = Math.floor(timer / 1000)

        const formattedSeconds = seconds.toString().padStart(2, '0')
        const formattedMilliseconds = milliseconds.toString().padStart(2, '0')

        return `${formattedSeconds}:${formattedMilliseconds}`
    }
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
                    playSound('hold')
                    return { ...die, isHeld: !die.isHeld }
                }
                return die
            })
        )
    }

    function rollNewDice() {
        if (!tenzies) {
            if (!timerRunning) {
                setTimerRunning(true)
            }
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
            setTimer(0) // Reset timer for new game
            setTimerRunning(false)
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

    let EndGameComponent

    switch (theme) {
        case 'classic':
            EndGameComponent = ClassicEndGame
            break
        case 'neon':
            EndGameComponent = NeonEndGame
            break
        case 'retro':
            EndGameComponent = RetroEndGame
            break
        default:
            EndGameComponent = null
    }

    return (
        <main className={`theme-${theme}`}>
            {tenzies && EndGameComponent && <EndGameComponent />}
            <h1 className="title">Tenzies</h1>
            <div className="control-panel">
                <div className="control-panel-item timer">
                    ⏲️
                    <span>{formatTime()}</span>
                </div>
                <div className='control-panel-btns'>
                    <SoundToggle />
                    <div>
                        <button
                            className="control-panel-icon theme-toggle"
                            onClick={handleThemeToggle}
                        >
                            🎨
                        </button>
                    </div>
                </div>
            </div>
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
