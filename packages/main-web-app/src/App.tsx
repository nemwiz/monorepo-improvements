import React, {useEffect} from 'react';
import {getPortfolios} from "@mono/domain";

const App = () => {


    useEffect(() => {
        getPortfolios(1).then(portfolios => {
            console.log('portfolios', portfolios);
        });
    }, []);

    return (
        <div>fqweqwe</div>
    )
}

export default App;
