# Tenzies Game - React Basics

## Table of Contents
1. [Introduction](#introduction)
2. [Step-by-Step Guide](#step-by-step-guide)
   - [Step 1: Setting Up index.jsx and App.jsx](#step-1-setting-up-indexjsx-and-appjsx)
   - [Step 2: Setting Up Die.jsx](#step-2-setting-up-diejsx)
   - [Key Concepts Explained](#key-concepts-explained)
   - [Step 3: Generating Random Dice Values](#step-3-generating-random-dice-values)

## Introduction
The Tenzies game is a fun and interactive project to learn React basics. In this game, players roll ten dice and aim to get all dice to show the same number. This README guides you through the process of setting up and developing the game using React.

## Step-by-Step Guide

### Step 1: Setting Up index.jsx and App.jsx

For detailed instructions on this setup, refer to the Scrimba course module: [Tenzies: Setup](https://scrimba.com/learn/frontend/tenzies-setup-co0a9459ea14580c07f072cfd).

- **index.jsx**: This is the entry point of our React application. Here, we render the root React component (`<App />`) into the DOM.
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
- **App.jsx**: The central component of our application. It acts as a container for the game logic and other components.

```jsx
import React from 'react'

function App() {
  // Game logic and state management will go here
  return (
    <main>
      {/* Components and game elements will be rendered here */}
    </main>
  )
}

export default App
```

### Step 2: Setting Up Die.jsx
For detailed instructions on setting up the `Die` component, refer to the Scrimba course module: [Tenzies: Die Components](https://scrimba.com/learn/frontend/tenzies-die-components-co38647cca41846b5b884e953).

- **Die.jsx**: This component represents an individual die in the game. It's a child component used within `App.jsx` and is responsible for displaying the die's value.
  ```jsx
  import React from 'react'

  function Die(props) {
    return (
      <div className="die-face">
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
  }

  export default Die;
  ```

#### Updating App.jsx with Die Component

After creating the `Die` component, we updated `App.jsx` to render multiple instances of the `Die` component. This is a crucial step in building the interactive part of the Tenzies game, where each `Die` represents a dice in the game.

- **App.jsx Changes**: We added a `<div>` with the class `dice-container` to act as a container for the dice. Inside this container, we rendered ten instances of the `Die` component, each with a hardcoded value between 1 and 6 to represent the faces of a die.
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
      );
  }
  ```

### Key Concepts Explained

After setting up the basic components of our Tenzies game, let's dive into some key concepts to understand the structure and functionality of our React application better.

### index.jsx
- **Role**: The entry point of the React application.
- **Functionality**: It renders the root component, `<App />`, into the DOM. This is where our React app starts its execution.

### App.jsx
- **Role**: The central or parent component of the application.
- **Functionality**: It acts as a container for the game's logic and other components. In our case, it holds the `Die` components and manages the game state.

### Die.jsx
- **Role**: A child component used within `App.jsx`.
- **Functionality**: It represents an individual die and displays its value. It's a reusable component that receives its value through props from the `App` component.

### Understanding Props
- **What Are Props?**: Props (short for "properties") are how we pass data from parent to child components in React.
- **Usage in Our Project**: In the Tenzies game, `App.jsx` passes the 'value' of each die to the `Die` component as a prop. This allows the `Die` component to be dynamic and display different values as needed.

These concepts form the foundation of our Tenzies game and are essential for understanding how React applications are structured and function.

### Step 3: Generating Random Dice Values

For detailed instructions on this part of the project, refer to the Scrimba course module: [Tenzies: Generate Array of 10 Random Numbers](https://scrimba.com/learn/frontend/tenzies-generate-array-of-10-random-numbers-cod40451b92865f80528ed9e7).

This step involves creating an array of random dice values, crucial for the Tenzies game. The process consists of three main parts:

1. **Setting Up an Array**:
   - Begin by initializing an empty array. This array will hold the random values for each die.
   ```javascript
   const newDice = [];
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

---


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
