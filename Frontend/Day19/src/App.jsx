import React, { useState } from 'react';

const App = () => {
    const state = useState();
    const [count, setCount] = useState(0);


    const IncNum = () => {
        setCount(count + 1);
        
    }

    


    return (
        <>
            <button onClick={IncNum}>{count}</button>
            {/* <button onClick={IncNum1}>{count1}</button>
            <button onClick={IncNum2}>{count}</button>
            <button onClick={IncNum3}>{count}</button> */}
        </>
    );
};
export default App;