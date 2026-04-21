import { createContext, useContext, useState } from 'react';

export const CaptainDataContext = createContext();

// 1. Rename to CaptainProvider
 const CaptainProvider = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    console.log("CaptainProvider is mounted!");

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

// 2. Add this hook back in so components can use it
export const useCaptain = () => {
    const context = useContext(CaptainDataContext);
    if (!context) {
        throw new Error("useCaptain must be used within a CaptainProvider");
    }
    return context;
};

export default CaptainProvider;