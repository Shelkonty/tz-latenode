import React, { useState } from 'react';
import { useStreamContext } from '../context/StreamContext';

export const Controls: React.FC = () => {
    const [waitForAll, setWaitForAll] = useState(false);
    const { startStream } = useStreamContext();

    const handleStart = () => {
        startStream(waitForAll);
    };

    return (
        <div>
            <button onClick={handleStart}>Показать результат</button>
            <label>
                <input
                    type="checkbox"
                    checked={waitForAll}
                    onChange={(e) => setWaitForAll(e.target.checked)}
                />
                Дождаться всех данных
            </label>
        </div>
    );
};