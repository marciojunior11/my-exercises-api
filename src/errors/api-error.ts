import { ErrorCode } from "./types";

export class APIError<C extends ErrorCode> extends Error {
    statusCode: number;
    errorCode?: C;

    constructor(message: string, statusCode: number, code?: C) {
        super(message);

        this.statusCode = statusCode;
        this.errorCode = code;

        Object.setPrototypeOf(this, APIError.prototype);
    }

    get responseBody() {
        return {
            success: false,
            error: {
                message: this.message,
                errorCode: this.errorCode
            }
        }
    }
}