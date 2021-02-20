export class MonoError extends Error {
    message: string;
    errorCode: number;

    constructor(message: string) {
        super(message);
        this.message = message;
        this.errorCode = null;
    }
}
