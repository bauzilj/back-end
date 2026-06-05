import { Prisma } from "@prisma/client";

/* 
    404 not found handler
    Create an error for routes that doesn't exist
*/

const notFound = (req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} not found`)
    error.statusCode = 404;
    next(error);
};

/* 
    Global error handler middleware
    Handles all errors in the appliation and send appropriate reponse
    Provide details error information in development, minimal info in production
*/
const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    //Handle prisma validation error
    if (err instanceof Prisma.PrismaClientValidationError) {
        err.statusCode = 400;
        err.message = "Invalid data provided";
    }

    //Handle prisma unique constraint violations
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
            const field = err.meta?.target?.[0] || "field";
            err.statusCode = 400;
            err.message = `${field} already exist`;
        }


        // Handle record not found
        if (err.code === "P2025") {
            err.statusCode = 400
            err.message = "Record not found";
        }
    }
    //Hadle prisma foreign key constraint violations
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2003") {
            const field = err.meta?.target?.[0] || "field";
            err.statusCode = 400;
            err.message = `Invalid reference: Related record does not exist.`;
        }
    }

    //Send error response
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        //Only include stack trace in development
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });

};

export { notFound, errorHandler };