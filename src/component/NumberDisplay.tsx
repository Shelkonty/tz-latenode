import React from 'react';
import { useStreamContext } from '../context/StreamContext';

export const NumberDisplay: React.FC = () => {
    const { numbers, error, isComplete } = useStreamContext();

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <div>
            <h2>Числа:</h2>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            {isComplete && <p>Поток завершен</p>}
        </div>
    );
};