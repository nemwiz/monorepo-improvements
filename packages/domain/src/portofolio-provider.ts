import {get} from '@mono/http-client';
import {Portfolio} from "./portfolio";

export const getPortfolios = async (portfolioId: number): Promise<Portfolio> => {
    const portfolios = await get<Portfolio>(`http://localhost:4000/portfolios/${portfolioId}`);
    return portfolios;
}
