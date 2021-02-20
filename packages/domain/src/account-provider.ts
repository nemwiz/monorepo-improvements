import {get} from '@mono/http-client';
import {Account} from "./account";

export const getAccounts = async (accountId: number): Promise<Account> => {
    const account = await get<Account>(`http://localhost:4000/accounts/${accountId}`);
    return account;
}
