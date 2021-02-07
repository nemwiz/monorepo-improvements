import React, {FC, useEffect, useState} from "react";
import {getPortfolios, NewPortfolio, Portfolio} from '@mono/domain';
import Error from "./Error";

const PortfolioScreen: FC<{ portfolioId: number }> = ({portfolioId}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [portfolio, setPortfolio] = useState<Portfolio>(undefined);
    const [error, setError] = useState(undefined);

    useEffect(() => {

        const a: NewPortfolio = {test: 1, dd: '31232'};

        getPortfolios(portfolioId).then(newPortfolio => {
            setPortfolio(newPortfolio);
            setError(undefined);
        }).catch(error => {
            setError(error);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [portfolioId]);

    if (isLoading) {
        return <div>Loading...</div>
    } else if (error) {
        return <Error error={error}/>
    } else {
        return (
            <div>
                {portfolio && portfolio.portfolio !== null ? <div>{portfolio.portfolio} {portfolio.totalWorth}</div> : null}
                {portfolio && portfolio.portfolio === null ? <div>You do not have any portfolios :(</div> : null}
            </div>
        )
    }
};

export default PortfolioScreen;
