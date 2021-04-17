import database from "../database";
import Canteiro from "../models/Canteiro";
import { Request,Response } from "express";

const CanteiroRepo = database.getRepository(Canteiro);

interface ICanteiroBody{
    nome:string|null;
    luz_diaria:number|null;
    agua_diaria:number|null;
}

const CanteiroController = {

    store: async (req:Request,res:Response) => {
        const {nome , luz_diaria , agua_diaria } = req.body as ICanteiroBody;
       
        const newCanteiro = await CanteiroRepo.create({nome,daily_ligth:luz_diaria,daily_whater:agua_diaria});

        res.status(201).json(newCanteiro);
    },
    index: async (req:Request, res:Response) => {
        const allCanteiros = await CanteiroRepo.findAll();

        res.status(200).send(allCanteiros);
    }

};

export default CanteiroController;