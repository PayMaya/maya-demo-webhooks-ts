import { NextFunction, Request, Response } from "express";

/* 
    For this demo, this function logs the incoming request received from
    Checkout API. 

    For your application, please process this request depending on your needs
    (e.g. Save transaction result to the database)
*/ 

export function processSuccessfulWebhook() {
    return processWebhook('success');
};

export function processFailedWebhook() {
    return processWebhook('failure');
};

export function processCancelledWebhook() {
    return processWebhook('cancelled');
};

function processWebhook(status: string) {
    return (req:Request,res:Response,next:NextFunction) => {
        try {
            console.log(JSON.stringify(req.body, null, 2));
            res.json({ message: `Transcation Status Received: ${status}` });
        } catch (error) {
            return next(new Error('Error processing request'));
        }
    }
};