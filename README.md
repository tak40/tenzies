# Tenzies Game - React Basics

## Table of Contents
1. [Introduction](#introduction)
2. [Step-by-Step Guide](#step-by-step-guide)
   - [Step 1: Setting Up index.jsx and App.jsx](#step-1-setting-up-indexjsx-and-appjsx)
   - [Step 2: Setting Up Die.jsx](#step-2-setting-up-diejsx)

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





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
