import { useSoundContext } from "../src/SoundContext";

const SoundToggle = () => {
    const { soundEnabled, toggleSound } = useSoundContext();

    return (
        <button onClick={toggleSound} className='sound-btn'>
            {soundEnabled ? "🔊" : "🔇"}
        </button>
    )
}

export default SoundToggle;