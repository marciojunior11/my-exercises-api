import { APIError } from "./api-error";

class NotFoundError extends APIError<"NFO_ERR"> {
    constructor(message: string) {
        super(message, 404, "NFO_ERR");
    }
}

export { NotFoundError };