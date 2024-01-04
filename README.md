<!-- @format -->

# Tenzies Game - React Basics

## Table of Contents

1. [Introduction](#introduction)
2. [Step-by-Step Guide](#step-by-step-guide)
    - [Step 1: Setting Up index.jsx and App.jsx](#step-1-setting-up-indexjsx-and-appjsx)
    - [Step 2: Setting Up Die.jsx](#step-2-setting-up-diejsx)
    - [Key Concepts Explained](#key-concepts-explained)
    - [Step 3: Generating Random Dice Values](#step-3-generating-random-dice-values)
    - [Step 4: Mapping Array to Die Components](#step-4-mapping-array-to-die-components)
    - [Step 5: Adding a Roll Dice Button](#step-5-adding-a-roll-dice-button)
    - [Step 6: Changing Dice to Objects](#step-6-changing-dice-to-objects)
    - [Step 7: Styling Held Dice](#step-7-styling-held-dice)
    - [Step 8: Holding Dice Functionality](#step-8-holding-dice-functionality)
        - [Part 1 of Holding Dice Functionality](#part-1-of-holding-dice-functionality)
        - [Part 2 of Holding Dice Functionality](#part-2-of-holding-dice-functionality)
        - [Part 3 of Holding Dice Functionality](#part-3-of-holding-dice-functionality)
    - [Step 9: Implementing Game End Logic](#step-9-implementing-game-end-logic)
        - [Part 1: Implementing Game End Logic (useEffect Introduction)](#part-1-implementing-game-end-logic-useeffect-introduction)
        - [Understanding `useEffect`](#understanding-useeffect)
        - [Part 2: Completing the Game End Logic (useEffect)](#part-2-completing-the-game-end-logic-useeffect)

## Introduction

The Tenzies game is a fun and interactive project to learn React basics. In this game, players roll ten dice and aim to get all dice to show the same number. This README guides you through the process of setting up and developing the game using React.

## Step-by-Step Guide

### Step 1: Setting Up index.jsx and App.jsx

For detailed instructions on this setup, refer to the Scrimba course module: [Tenzies: Setup](https://scrimba.com/learn/frontend/tenzies-setup-co0a9459ea14580c07f072cfd).

-   **index.jsx**: This is the entry point of our React application. Here, we render the root React component (`<App />`) into the DOM.

    ```jsx
    import React from 'react'
    import ReactDOM from 'react-dom'
    import App from './App'

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    )
    ```

-   **App.jsx**: The central component of our application. It acts as a container for the game logic and other components.

```jsx
import React from 'react'

function App() {
    // Game logic and state management will go here
    return (
        <main>{/* Components and game elements will be rendered here */}</main>
    )
}

export default App
```

### Step 2: Setting Up Die.jsx

For detailed instructions on setting up the `Die` component, refer to the Scrimba course module: [Tenzies: Die Components](https://scrimba.com/learn/frontend/tenzies-die-components-co38647cca41846b5b884e953).

-   **Die.jsx**: This component represents an individual die in the game. It's a child component used within `App.jsx` and is responsible for displaying the die's value.

    ```jsx
    import React from 'react'

    function Die(props) {
        return (
            <div className="die-face">
                <h2 className="die-num">{props.value}</h2>
            </div>
        )
    }

    export default Die
    ```

#### Updating App.jsx with Die Component

After creating the `Die` component, we updated `App.jsx` to render multiple instances of the `Die` component. This is a crucial step in building the interactive part of the Tenzies game, where each `Die` represents a dice in the game.

-   **App.jsx Changes**: We added a `<div>` with the class `dice-container` to act as a container for the dice. Inside this container, we rendered ten instances of the `Die` component, each with a hardcoded value between 1 and 6 to represent the faces of a die.

    ```jsx
    export default function App() {
        return (
            <main>
                <div className="dice-container">
                    <Die value="1" />
                    <Die value="2" />
                    <Die value="3" />
                    <Die value="4" />
                    <Die value="5" />
                    <Die value="6" />
                    <Die value="1" />
                    <Die value="1" />
                    <Die value="1" />
                    <Die value="1" />
                </div>
            </main>
        )
    }
    ```

### Key Concepts Explained

After setting up the basic components of our Tenzies game, let's dive into some key concepts to understand the structure and functionality of our React application better.

### index.jsx

-   **Role**: The entry point of the React application.
-   **Functionality**: It renders the root component, `<App />`, into the DOM. This is where our React app starts its execution.

### App.jsx

-   **Role**: The central or parent component of the application.
-   **Functionality**: It acts as a container for the game's logic and other components. In our case, it holds the `Die` components and manages the game state.

### Die.jsx

-   **Role**: A child component used within `App.jsx`.
-   **Functionality**: It represents an individual die and displays its value. It's a reusable component that receives its value through props from the `App` component.

### Understanding Props

-   **What Are Props?**: Props (short for "properties") are how we pass data from parent to child components in React.
-   **Usage in Our Project**: In the Tenzies game, `App.jsx` passes the 'value' of each die to the `Die` component as a prop. This allows the `Die` component to be dynamic and display different values as needed.

These concepts form the foundation of our Tenzies game and are essential for understanding how React applications are structured and function.

### Step 3: Generating Random Dice Values

For detailed instructions on this part of the project, refer to the Scrimba course module: [Tenzies: Generate Array of 10 Random Numbers](https://scrimba.com/learn/frontend/tenzies-generate-array-of-10-random-numbers-cod40451b92865f80528ed9e7).

This step involves creating an array of random dice values, crucial for the Tenzies game. The process consists of three main parts:

1. **Setting Up an Array**:

    - Begin by initializing an empty array. This array will hold the random values for each die.

    ```javascript
    const newDice = []
    ```

2. **Looping Ten Times**:

Implement a loop to generate a value for each of the ten dice.  
The loop iterates ten times, corresponding to the ten dice in the game.

```javascript
for (let i = 0; i < 10; i++) {
    // Random number generation is done in the next step
}
```

3. **Generating Random Numbers**:

Inside the loop, generate a random number between 1 and 6 for each die.
Use `Math.ceil(Math.random() * 6)` to ensure the number is an integer between 1 and 6.

```javascript
function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
}
console.log(allNewDice())
```

After the loop completes, `newDice` contains ten random dice values.
The function `allNewDice` encapsulates this logic and can be called to generate a new set of dice values whenever needed in the game. Logging the result to the console helps verify that the function works correctly.

### Step 4: Mapping Array to Die Components

For detailed instructions on this part of the project, refer to the Scrimba course module: [Tenzies: Map Array to Die Components](https://scrimba.com/learn/frontend/tenzies-map-array-to-die-components-co68a43f78661a7a3f8411dd0).

This step involves integrating React state into our application to manage the dice values and dynamically render the `Die` components based on this state.

1. **Creating State with `useState`**:

    - Introduce state to the application using the `useState` hook from React, which holds our array of dice values.

    ```jsx
    const [dice, setDice] = React.useState(allNewDice())
    ```

2. **Initializing State with `allNewDice` Function**:

    - Initialize the state by calling `allNewDice`, ensuring that the app loads with a new set of dice values.

    ```jsx
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }
    ```

3. **Mapping Over State to Render Die Components**:

    - The `map` method is used to iterate over the dice state array, creating a `Die` component for each value.

    ```jsx
    const diceElements = dice.map(die => <Die value={die} />)
    ```

4. **Rendering Die Components**:

    - Render the array of `Die` components (`diceElements`) inside the `dice-container` div, which replaces the previously manually-written ten `Die` elements.

    ```jsx
    return (
        <main>
            <div className="dice-container">{diceElements}</div>
        </main>
    )
    ```

With these changes, the app now dynamically generates and displays dice values, demonstrating a fundamental aspect of React: managing and rendering stateful data.

### Step 5: Adding a Roll Dice Button

For detailed instructions on this part of the project, refer to the Scrimba course module: [Tenzies: Roll Dice Button](https://scrimba.com/learn/frontend/tenzies-roll-dice-button-co0a84282a4902d4d2324b7fd).

This step involves adding interactivity to our Tenzies game by implementing a button that enables the user to roll all ten dice.

1. **Adding a Button Element**:

    - A new button is added to the JSX in `App` which, when clicked, triggers a new roll of the dice.

    ```jsx
    <button className="roll-dice" onClick={rollDice}>
        Roll
    </button>
    ```

2. **Creating the `rollDice` Function**:

    - Define a function named `rollDice` that generates a new array of random numbers by calling `allNewDice`, then updates the `dice` state with this new array.

    ```jsx
    function rollDice() {
        setDice(allNewDice())
    }
    ```

3. **Updating State to Re-render the Dice**:

    - When the `dice` state is updated with the new array, React re-renders the `Die` components with the new values.

    ```jsx
    const [dice, setDice] = React.useState(allNewDice())
    ```

    - The `diceElements` constant is a mapped array of `Die` components that is rendered within the `dice-container` div, and now responds to the roll button click event.

4. **Finalizing the Button and Functionality**:

    - The button is styled with the class `roll-dice` for visual consistency and is placed outside the `dice-container` but within the `<main>` element for proper layout.

    - The complete `App` component with the roll button looks like this:

    ```jsx
    export default function App() {
        const [dice, setDice] = React.useState(allNewDice())

        function allNewDice() {
            const newDice = []
            for (let i = 0; i < 10; i++) {
                newDice.push(Math.ceil(Math.random() * 6))
            }
            return newDice
        }

        function rollDice() {
            setDice(allNewDice())
        }

        const diceElements = dice.map(die => <Die value={die} />)

        return (
            <main>
                <div className="dice-container">{diceElements}</div>
                <button className="roll-dice" onClick={rollDice}>
                    Roll
                </button>
            </main>
        )
    }
    ```

With the addition of the roll button, the Tenzies game is now interactive. Users can re-roll the dice, bringing the game closer to functionality.

### Step 6: Changing Dice to Objects

For more detail on updating the dice to objects, view the Scrimba module: [Tenzies: Change Dice to Objects](https://scrimba.com/learn/frontend/tenzies-change-dice-to-objects-cBqReJTz).

This step transforms our array of dice values into an array of objects to enrich the state with more data per die.

1. **Updating the State Structure**:

    - The state now holds an array of objects instead of just numbers. Each object has a `value` key for the die's number, an `isHeld` key for whether the die is held, and an `id` for React's list rendering optimization.

    ```jsx
    const [dice, setDice] = React.useState(allNewDice())
    ```

    - Here's the updated `allNewDice` function:

    ```jsx
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
    ```

2. **Rolling New Dice**:

    - The `rollDice` function calls `allNewDice` to update the state with a new array of dice objects.

    ```jsx
    function rollDice() {
        setDice(allNewDice())
    }
    ```

3. **Mapping Over Object Array for Rendering**:

    - When mapping over the dice array to create `Die` components, we pass additional props for `isHeld` and a `key` using the object's `id`.

    ```jsx
    const diceElements = dice.map(die => <Die key={die.id} value={die.value} />)
    ```

4. **Rendering the Component**:

    - The JSX structure includes the `diceElements` within the `dice-container` and the roll button, as before.

    ```jsx
    return (
        <main>
            <div className="dice-container">{diceElements}</div>
            <button className="roll-dice" onClick={rollDice}>
                Roll
            </button>
        </main>
    )
    ```

With the dice now represented as objects, we can manage more complex state and interactions, such as "holding" a die to keep its value between rolls.

### Step 7: Styling Held Dice

For more detailed instructions on how to style held dice, take a look at the Scrimba module: [Tenzies: Styling Held Dice](https://scrimba.com/learn/frontend/tenzies-styling-held-dice-co95f459e817fd41c6bf0f54d).

This step involves adding conditional styling to the `Die` components. The goal is to visually indicate which dice have been selected, or "held," by the player.

1. **Adding Conditional Styling**:

    - Modify the `Die` component to apply different styles based on its `isHeld` state.

    - Use a ternary operator within the `style` prop to change the background color.

    ```jsx
    export default function Die(props) {
        const styles = {
            backgroundColor: props.isHeld ? '#59E391' : 'white',
        }
        return (
            <div className="die-face" style={styles}>
                <h2 className="die-num">{props.value}</h2>
            </div>
        )
    }
    ```

2. **Passing `isHeld` Prop to Die Component**:

    - Ensure that each `Die` component receives the `isHeld` prop so it can determine its own styling.

    ```jsx
    const diceElements = dice.map(die => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} />
    ))
    ```

3. **Implementing the Roll Function**:

    - When the "Roll" button is clicked, the `rollDice` function updates the dice state without affecting the `isHeld` property.

    ```jsx
    function rollDice() {
        setDice(allNewDice())
    }
    ```

4. **Rendering the Components**:

    - Render the `diceElements` within the `dice-container` div and include the "Roll" button.

    ```jsx
    return (
        <main>
            <div className="dice-container">{diceElements}</div>
            <button className="roll-dice" onClick={rollDice}>
                Roll
            </button>
        </main>
    )
    ```

By applying these changes, we give visual feedback to the user, making the game more intuitive and visually appealing.

### Step 8: Holding Dice Functionality

### Part 1 of Holding Dice Functionality

For a detailed guide on the first part of implementing the dice holding functionality, visit the Scrimba module: [Tenzies: Hold Dice Part 1](https://scrimba.com/learn/frontend/tenzies-hold-dice-part-1-co29e4e94aec702f97ffb9ce4).

In this part, we start building the functionality to allow players to 'hold' certain dice between rolls. The challenge is to create a function `holdDice` that logs the ID of the clicked die.

1. **Creating the `holdDice` Function**:

    - The `holdDice` function is designed to identify which die has been clicked.

    - Initially, it simply logs the ID of the die to the console.

    ```jsx
    function holdDice(id) {
        console.log(id)
    }
    ```

2. **Passing `holdDice` to Die Components**:

    - To link each `Die` component with the `holdDice` function, the function is passed as a prop.

    - The `map` function creates each `Die` component, passing in a custom callback to `holdDice` that includes the die's unique ID.

    ```jsx
    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ))
    ```

3. **Setting up the Die Component**:

    - The `Die` component receives the `holdDice` prop and attaches it to the `onClick` event handler of the die's div.

    - This ensures that clicking a die will execute the `holdDice` function with its specific ID.

    ```jsx
    export default function Die(props) {
        const styles = {
            backgroundColor: props.isHeld ? '#59E391' : 'white',
        }
        return (
            <div className="die-face" style={styles} onClick={props.holdDice}>
                <h2 className="die-num">{props.value}</h2>
            </div>
        )
    }
    ```

4. **Complete App Component Structure**:

    - The `App` component maintains the overall state and logic, including the `holdDice` function and the rendering of dice elements.

    ```jsx
    export default function App() {
        // State and function definitions

        return (
            <main>
                <div className="dice-container">{diceElements}</div>
                <button className="roll-dice" onClick={rollDice}>
                    Roll
                </button>
            </main>
        )
    }
    ```

In this initial part of the feature implementation, we establish the foundational connection between the dice and the function that will eventually control their 'held' state.

### Part 2 of Holding Dice Functionality

Explore more about updating the hold dice functionality in this Scrimba module: [Tenzies: Hold Dice Part 2](https://scrimba.com/learn/frontend/tenzies-hold-dice-part-2-cof4842fcb65b330ef2bf07f3).

In this part, we enhance the `holdDice` function to actually change the state of the dice, specifically toggling their `isHeld` property.

1. **Enhancing the `holdDice` Function**:

    - The `holdDice` function is updated to modify the `isHeld` property of the die that matches the passed ID.

    - This is achieved using the `map` method over the current dice state, updating the `isHeld` property of the die that was clicked.

    ```jsx
    function holdDice(id) {
        setDice(oldDice =>
            oldDice.map(die => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die
            })
        )
    }
    ```

2. **Mapping Over Dice State for Die Components**:

    - Each `Die` component is created with a unique ID, value, and `isHeld` status.

    - The `holdDice` function is passed down to each `Die` component, tied to its specific ID.

    ```jsx
    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ))
    ```

3. **Rendering the Components**:

    - The `App` component now includes logic to manage both rolling new dice and holding individual dice.

    - The rendered UI includes the dice container and the roll button, all reacting dynamically to state changes.

    ```jsx
    return (
        <main>
            <div className="dice-container">{diceElements}</div>
            <button className="roll-dice" onClick={rollDice}>
                Roll
            </button>
        </main>
    )
    ```

This update to the `holdDice` function is a significant step towards making the Tenzies game interactive. It allows players to select and hold dice between rolls, adding strategic depth to the game.

### Part 3 of Holding Dice Functionality

For further details on the final part of implementing the dice holding functionality, refer to the Scrimba module: [Tenzies: Hold Dice Part 3](https://scrimba.com/learn/frontend/tenzies-hold-dice-part-3-co14645439b478cc8343d4ffe).

In this part, we refine the `rollDice` function to account for dice that are being held and should not be rerolled.

1. **Refining the `rollDice` Function**:

    - The `rollDice` function is updated to reroll only the dice that are not held.

    - We map over the existing dice, and for each one, we check if it's held. If not, we generate a new die.

    ```jsx
    function rollDice() {
        setDice(oldDice =>
            oldDice.map(die => {
                return die.isHeld ? die : generateNewDie()
            })
        )
    }
    ```

2. **Generating a New Die**:

    - We introduce a new function `generateNewDie` to create a single new die, maintaining the structure of our dice objects.

    ```jsx
    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        }
    }
    ```

3. **Updating the `allNewDice` Function**:

    - `allNewDice` now uses `generateNewDie` to create each new die, ensuring consistency in how dice are created.

    ```jsx
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    ```

4. **Rendering Die Components and Roll Button**:

    - Each `Die` component is rendered with its value, held status, and a function to toggle its hold state.

    - The 'Roll' button is provided to trigger a new roll of the dice that are not held.

    ```jsx
    return (
        <main>
            <div className="dice-container">{diceElements}</div>
            <button className="roll-dice" onClick={rollDice}>
                Roll
            </button>
        </main>
    )
    ```

With the completion of Part 3, the dice rolling and holding functionality in the Tenzies game is fully functional. Players can now choose to 'hold' certain dice while rerolling the others, adding an important aspect of gameplay strategy.

### Step 9: Implementing Game End Logic

### Part 1: Implementing Game End Logic (useEffect Introduction)

Learn more about beginning the end game logic in this Scrimba module: [Tenzies: End Game Part 1](https://scrimba.com/learn/frontend/tenzies-end-game-part-1-co86d4dd2862c6bda5b935d4f).

This step introduces the concept of game completion (winning the game) and the use of the `useEffect` hook to react to state changes.

1. **Introducing New State `tenzies`**:

    - A new piece of state, `tenzies`, is added to track whether the player has won the game. It's initially set to `false`.

    ```jsx
    const [tenzies, setTenzies] = React.useState(false)
    ```

2. **Using the `useEffect` Hook**:

    - `useEffect` is utilized to perform side effects in the component, such as reacting to state changes.

    - In this case, `useEffect` runs every time the `dice` state changes, logging a message to the console. This is a setup for future logic to check for game completion.

    ```jsx
    React.useEffect(() => {
        console.log('Dice state changed')
    }, [dice])
    ```

3. **Remaining Component Logic**:

    - The rest of the component remains focused on managing the dice states and rendering the game UI.

    - The `rollDice` and `holdDice` functions control the dice behavior, and the `diceElements` array creates the visual representation of each die.

4. **Rendering the Game UI**:

    - The game UI includes a title, instructions, the dice container, and the roll button.

    ```jsx
    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className="dice-container">{diceElements}</div>
            <button className="roll-dice" onClick={rollDice}>
                Roll
            </button>
        </main>
    )
    ```

### Understanding `useEffect`

-   **What Is `useEffect`?**

    -   `useEffect` is a React hook that allows you to perform side effects in your components. Side effects are operations that can affect other components or can't be done during rendering, like fetching data, directly interacting with the DOM, or subscribing to some external input.

-   **Reacting to State Changes**:

    -   One common use of `useEffect` is to respond to changes in the component's state or props. You specify which values `useEffect` should watch, and it runs whenever those values change.

-   **Why Use `useEffect`?**
    -   `useEffect` provides a clear separation between mutating state (which happens during rendering) and side effects, making your component logic cleaner and more predictable.

This introduction of `useEffect` is the groundwork for implementing the logic to determine when the game has been won, enhancing the interactivity and complexity of the Tenzies game.

### Part 2: Completing the Game End Logic (useEffect)

For an in-depth look at finalizing the end game logic, check out the Scrimba module: [Tenzies: End Game Part 2](https://scrimba.com/learn/frontend/tenzies-end-game-part-2-coda448ae89bf4c2861487e00).

In this part, we use the `useEffect` hook to add the logic needed to determine when the player has won the game.

1. **Implementing Winning Logic in `useEffect`**:

    - Within `useEffect`, we add logic to check two conditions:
        1. All dice are held.
        2. All dice have the same value.
    - If both conditions are met, we conclude the player has won the game and set `tenzies` to `true`.

    ```jsx
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log('You won!')
        }
    }, [dice])
    ```

2. **Maintaining the Dice Logic**:

    - The `generateNewDie`, `allNewDice`, `rollDice`, and `holdDice` functions continue to manage the dice states and behavior.

3. **Rendering the Dice and UI**:

    - Each `Die` component is created with its respective properties, and the game UI is rendered with the current state of the dice.

    - The rendered UI includes the game title, instructions, dice container, and the roll button.

    ```jsx
    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className="dice-container">{diceElements}</div>
            <button className="roll-dice" onClick={rollDice}>
                Roll
            </button>
        </main>
    )
    ```

With this implementation, the Tenzies game now has a functional end condition, enhancing the gameplay experience. Players can strive to meet the winning criteria, making the game more engaging and rewarding.

---

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
