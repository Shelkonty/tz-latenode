import React from 'react';
import { StreamProvider } from './context/StreamContext';
import { Controls } from './component/Controls';
import { NumberDisplay } from './component/NumberDisplay';

const App: React.FC = () => {
    return (
        <StreamProvider>
            <div>
                <h1>Numeric Stream App</h1>
                <Controls />
                <NumberDisplay />
            </div>
        </StreamProvider>
    );
};

export default App;