import { APIError } from "./api-error";

export class ValidationError extends APIError<"VLD_ERR"> {
    constructor(message: string) {
        super(message, 400, "VLD_ERR");
    }
}