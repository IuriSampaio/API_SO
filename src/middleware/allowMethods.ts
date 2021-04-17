import { NextFunction, Request, Response } from "express";

const allowMethods = ( req:Request , res:Response , next:NextFunction ) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Expose-Headers','x-total-count');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Origin','Content-Type,authorization');
    
    next();
};

export default allowMethods;