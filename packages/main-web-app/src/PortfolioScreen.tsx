import React, {FC, useEffect, useState} from "react";
import {getPortfolios, Portfolio} from '@mono/domain';
import InlineError from "./InlineError";
import {MonoError} from "@mono/http-client";

const PortfolioScreen: FC<{ portfolioId: number }> = ({portfolioId}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [portfolio, setPortfolio] = useState<Portfolio>(undefined);
    const [error, setError] = useState<MonoError>(undefined);

    useEffect(() => {

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
        return <InlineError error={error}/>
    } else {
        return (
            <div className={'portfolio'}>
                {portfolio && portfolio.portfolio !== null ? <div>{portfolio.portfolio} : {portfolio.totalWorth} $</div> : null}
                {portfolio && portfolio.portfolio === null ? <div>You do not have any portfolios :(</div> : null}
            </div>
        )
    }
};

export default PortfolioScreen;
