import { useTheme } from './ThemeContext'

const sounds = {
    classic: {
        roll: new Audio('/roll-classic.wav')
    },
    neon: {
        roll: new Audio('/roll-neon.mp3')
    },
    retro: {
        roll: new Audio('/roll-retro.wav')
    }
}

export const useSound = () => {
    const { theme } = useTheme()

    const playSound = sound => {
        sounds[theme][sound].play()
    }

    return { playSound }
}

