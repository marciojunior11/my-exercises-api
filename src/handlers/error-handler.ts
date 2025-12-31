import config from "@/config";
import { APIError } from "@/errors/api-error";
import { getErrorMessage } from "@/utils";
import { Request, Response, NextFunction } from "express"

export const apiErrorHandler = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.headersSent || config.debug) {
        next(error);
        return;
    }

    if (error instanceof APIError) {
        res.status(error.statusCode).json(error.responseBody);
        return;
    }

    next(error);
};

export const internalServerErrorHandler = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.headersSent || config.debug) {
        next(error);
        return;
    }

    res.status(500).json({
        success: false,
        error: {
            message: getErrorMessage(error) || "Ocorreu um erro interno no servidor.",
        }
    });
};