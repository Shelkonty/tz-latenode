import { useState, useCallback } from 'react';
import NumericStream from '../numericStream/NumericStream.ts';
console.log(NumericStream);

export const useNumericStream = () => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isComplete, setIsComplete] = useState(false);

    const startStream = useCallback((waitForAll: boolean) => {
        const stream = new NumericStream();
        setNumbers([]);
        setError(null);
        setIsComplete(false);

        stream.setDataHandler((nextNumber) => {
            if (!waitForAll) {
                setNumbers((prev) => [...prev, nextNumber]);
            }
        });

        stream.setErrorHandler((error) => {
            setError(error.message);
        });

        stream.setEndHandler(() => {
            if (waitForAll) {
                setNumbers(() => [...Array(10)].map((_, i) => i + 1));
            }
            setIsComplete(true);
        });

        stream.start();
    }, []);

    return { numbers, error, isComplete, startStream };
};