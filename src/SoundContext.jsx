import { createContext, useContext, useState } from "react";

const SoundContext = createContext();

export const useSoundContext = () => useContext(SoundContext);

export const SoundProvider = ({ children }) => {
    const [soundEnabled, setSoundEnabled] = useState(true);

    const toggleSound = () => {
        setSoundEnabled((prev) => !prev);
    }

    return (
        <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
            {children}
        </SoundContext.Provider>
    )
}