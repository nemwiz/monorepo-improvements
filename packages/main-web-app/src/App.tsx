import React, {useState} from 'react';
import PortfolioScreen from "./PortfolioScreen";


const App = () => {

    const [portfolioId, setPortfolioId] = useState(1);

    return (
        <>
            <div>
                <button onClick={() => {
                    setPortfolioId(1);
                }}>This works
                </button>
                <button onClick={() => {
                    setPortfolioId(2);
                }}>Null portfolio
                </button>
                <button onClick={() => {
                    setPortfolioId(400);
                }}>400
                </button>
                <button onClick={() => {
                    setPortfolioId(401);
                }}>401
                </button>
                <button onClick={() => {
                    setPortfolioId(403);
                }}>403
                </button>
                <button onClick={() => {
                    setPortfolioId(404);
                }}>404
                </button>
                <button onClick={() => {
                    setPortfolioId(500);
                }}>500
                </button>
            </div>


            <PortfolioScreen portfolioId={portfolioId}/>
        </>
    )
}

export default App;
