import React, {FC, useState} from "react";
import AccountScreen from "./AccountScreen";

const Screen2: FC = () => {
    
    const [accountId, setAccountId] = useState(1)
    
    return (
        <>
            <div className={'button-stack'}>
                <button className={'sub-button green'} onClick={() => {
                    setAccountId(1);
                }}>Show me account 1
                </button>
                <button className={'sub-button green'} onClick={() => {
                    setAccountId(2);
                }}>Show me account 2
                </button>
                <button className={'sub-button orange'} onClick={() => {
                    setAccountId(404);
                }}>Account 404 error
                </button>

                <AccountScreen accountId={accountId}/>
            </div>
        </>
    )
};

export default Screen2;
