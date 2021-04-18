import { Request, Response } from "express";
import database from "../database";
import Canteiro from "../models/Canteiro";
import Colhido from "../models/Colhido";
import Funcionario from "../models/Funcionario";
import Planta from "../models/Planta";


const colhidoRepository = database.getRepository(Colhido);

const ColhidoController = {
    index:async (req:Request,res:Response) => {
        const allColheitas = await colhidoRepository.findAll({include:[Planta,Funcionario,Canteiro]});
    
        return res.status(200).send(allColheitas);
    },
    store:async (req:Request,res:Response) => {
        const {peso,quantidade,planta_id, funcionario_id, canteiro_id} = req.body;

        const newColheita = await colhidoRepository.create({peso,quantidade,planta_id, funcionario_id, canteiro_id});

        return newColheita ? res.status(201).send(newColheita) : res.status(400);
    },
};

export default ColhidoController;