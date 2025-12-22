import APIError from "./api-error";

class NotFoundError extends APIError<"NF_ERR"> {
    constructor(message: string) {
        super(message, 404, "NF_ERR");
    }
}

export default NotFoundError;