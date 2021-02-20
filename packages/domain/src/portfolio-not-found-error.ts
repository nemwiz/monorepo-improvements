import {MonoError} from "@mono/http-client";

export class PortfolioNotFoundError extends MonoError {
    constructor(portfolioId: number) {
        const message = `Requested portfolio with id ${portfolioId} doesn't exist.`;
        super(message);
        this.message = message;
    }
}
