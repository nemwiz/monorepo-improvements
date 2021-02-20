import React, {FC, useState} from "react";
import PortfolioScreen from "./PortfolioScreen";

const Screen1: FC = () => {

    const [portfolioId, setPortfolioId] = useState(1);

    return (
        <>
            <div className={'button-stack'}>
                <button className={'sub-button green'} onClick={() => {
                    setPortfolioId(1);
                }}>Working portfolio
                </button>
                {/*<button className={'sub-button orange'} onClick={() => {*/}
                {/*    setPortfolioId(2);*/}
                {/*}}>Null portfolio*/}
                {/*</button>*/}
                {/*<button className={'sub-button orange'} onClick={() => {*/}
                {/*    setPortfolioId(400);*/}
                {/*}}>Throw 400*/}
                {/*</button>*/}
                {/*<button className={'sub-button red'} onClick={() => {*/}
                {/*    setPortfolioId(401);*/}
                {/*}}>401*/}
                {/*</button>*/}
                {/*<button className={'sub-button orange'} onClick={() => {*/}
                {/*    setPortfolioId(403);*/}
                {/*}}>403*/}
                {/*</button>*/}
                <button className={'sub-button orange'} onClick={() => {
                    setPortfolioId(404);
                }}>Portfolio throws 404 oops...
                </button>
                {/*<button className={'sub-button red'} onClick={() => {*/}
                {/*    setPortfolioId(500);*/}
                {/*}}>500*/}
                {/*</button>*/}

                <PortfolioScreen portfolioId={portfolioId}/>
            </div>
        </>
    )
};

export default Screen1;
