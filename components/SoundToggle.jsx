import { useSoundContext } from "../src/SoundContext";

const SoundToggle = () => {
    const { soundEnabled, toggleSound } = useSoundContext();

    return (
        <button onClick={toggleSound}>
            {soundEnabled ? "🔊" : "🔇"}
        </button>
    )
}

export default SoundToggle;