import { useTheme } from './ThemeContext'
import { useSoundContext } from './SoundContext'

const sounds = {
    classic: {
        roll: new Audio('/roll-classic.wav'),
        hold: new Audio('/hold-classic.mp3')
    },
    neon: {
        roll: new Audio('/roll-neon.mp3'),
        hold: new Audio('/hold-neon.wav')
    },
    retro: {
        roll: new Audio('/roll-retro.wav'),
        hold: new Audio('/hold-retro.mp3')
    }
}

export const useSound = () => {
    const { theme } = useTheme()
    const { soundEnabled } = useSoundContext()

    const playSound = sound => {
        if (soundEnabled) {
            sounds[theme][sound].play()
        }
    }

    return { playSound }
}

