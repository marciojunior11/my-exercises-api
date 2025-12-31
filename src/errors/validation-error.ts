import { APIError } from "./api-error";

class ValidationError extends APIError<"VLD_ERR"> {
    constructor(message: string) {
        super(message, 400, "VLD_ERR");
    }
}

export { ValidationError };