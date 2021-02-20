import React, {FC, useEffect, useState} from "react";
import {Account} from "@mono/domain";
import {getAccounts} from "@mono/domain";
import ModalError from "./ModalError";
import {MonoError} from "@mono/http-client";

const AccountScreen: FC<{accountId: number}> = ({accountId}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [account, setAccount] = useState<Account>(undefined);
    const [error, setError] = useState<MonoError>(undefined);

    useEffect(() => {
        getAccounts(accountId).then(newAccount => {
            setAccount(newAccount);
            setError(undefined);
        }).catch(error => {
            setError(error);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [accountId]);

    if (isLoading) {
        return <div>Loading...</div>
    } else if (error) {
        return <ModalError error={error}/>
    } else {
        return (
            <div className={'portfolio'}>
                 <div>Your account {account.account} has a balance of {account.balance}$</div>
            </div>
        )
    }
};

export default AccountScreen;
