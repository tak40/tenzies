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

---

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
