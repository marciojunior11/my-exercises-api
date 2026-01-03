import { APIError } from "./api-error";

export class NotFoundError extends APIError<"NFO_ERR"> {
    constructor(message: string) {
        super(message, 404, "NFO_ERR");
    }
}