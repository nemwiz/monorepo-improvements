import React, {useState} from 'react';
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";


const App = () => {

    const [activeScreen, setActiveScreen] = useState<number>(1);

    return (
        <>
            <button className={'btn btn-lg'} onClick={()=> setActiveScreen(1)}>Portfolio</button>
            <button className={'btn btn-lg'} onClick={()=> setActiveScreen(2)}>Accounts</button>

            <div className={'active-screen'}>
                {activeScreen === 1 ? <Screen1/> : <Screen2/>}
            </div>
        </>
    )
}

export default App;
