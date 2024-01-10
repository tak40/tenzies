/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './ThemeContext' 
import { SoundProvider } from './SoundContext' 
import App from './App.jsx'
import './style.css'

// Wrap the App component with ThemeProvider to provide the theme context
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SoundProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </SoundProvider>
    </React.StrictMode>
)
