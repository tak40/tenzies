/** @format */
import Die from '/components/Die.jsx'

function allNewDice() {
    const randomNumbers = []
    for (let i = 0; i < 10; i++) {
        randomNumbers.push(Math.floor(Math.random() * 6) + 1)
    }
    return randomNumbers
}

console.log(allNewDice())

function App() {
    return (
        <main>
            <div className="dice-container">
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
        </main>
    )
}

export default App
