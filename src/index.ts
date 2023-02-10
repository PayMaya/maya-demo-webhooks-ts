import express, { NextFunction, Request, Response } from "express";
import webhooksRouter from "./routes/webhooks";

const app = express();
app.use(express.json());

const endpointPrefix = '/api/v1';

app.use(`${endpointPrefix}/webhooks`, webhooksRouter);

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    res.status(400).send({
        message: err?.message
    });
});

app.use((req,res) => {
    res.status(404).send({
        message: 'Error - resource not found'
    });
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});