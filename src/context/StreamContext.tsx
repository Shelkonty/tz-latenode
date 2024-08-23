import React, { createContext, useContext } from 'react';
import { useNumericStream } from '../hooks/useNumericStream';

const StreamContext = createContext<ReturnType<typeof useNumericStream> | null>(null);

export const StreamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const streamState = useNumericStream();
    return <StreamContext.Provider value={streamState}>{children}</StreamContext.Provider>;
};

export const useStreamContext = () => {
    const context = useContext(StreamContext);
    if (!context) {
        throw new Error('useStreamContext must be used within a StreamProvider');
    }
    return context;
};