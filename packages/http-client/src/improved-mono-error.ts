import {MonoError} from "./mono-error";

export class ImprovedMonoError extends MonoError {

    constructor(errorCode: number) {
        super('');
        this.errorCode = errorCode;
    }
}
