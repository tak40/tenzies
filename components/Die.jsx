/** @format */

// function Die(props) {
//     const dieStyle = { backgroundColor: props.isHeld ? '#59E391' : 'white' }

//     return (
//         <div className="die" style={dieStyle} onClick={props.holdDice}>
//             <h2 className="die-num">{props.value}</h2>
//         </div>
//     )
// }

function Die({ value, isHeld, holdDice }) {
    const renderDots = () => {
        // Define what the dot pattern looks like for each value
        const patterns = {
            1: [<div className="dot center-dot"></div>],
            2: [
                <div className="dot top-left"></div>,
                <div className="dot bottom-right"></div>,
            ],
            3: [
                <div className="dot top-left"></div>,
                <div className="dot center-dot"></div>,
                <div className="dot bottom-right"></div>,
            ],
            4: [
                <div className="dot top-left"></div>,
                <div className="dot top-right"></div>,
                <div className="dot bottom-left"></div>,
                <div className="dot bottom-right"></div>,
            ],
            5: [
                <div className="dot top-left"></div>,
                <div className="dot top-right"></div>,
                <div className="dot center-dot"></div>,
                <div className="dot bottom-left"></div>,
                <div className="dot bottom-right"></div>,
            ],
            6: [
                <div className="dot top-left"></div>,
                <div className="dot top-right"></div>,
                <div className="dot middle-left"></div>,
                <div className="dot middle-right"></div>,
                <div className="dot bottom-left"></div>,
                <div className="dot bottom-right"></div>,
            ],
        }
        // Return the pattern that matches the current value
        return patterns[value]
    }

    return (
        <div className={`die ${isHeld ? 'held' : ''}`} onClick={holdDice}>
            {renderDots()}
        </div>
    )
}

export default Die
