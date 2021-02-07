import {UIErrorType} from "./ui-error-type";

export class MonoError extends Error {
    message: string;
    type: UIErrorType;

    constructor(message: string) {
        super(message);
        this.message = message;
    }

    setUiType(type: UIErrorType) {
        this.type = type;
    }
}
