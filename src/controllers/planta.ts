import { Request, Response } from "express";
import database from "../database";
import Planta from "../models/Planta";

const plantaRepository = database.getRepository(Planta);

const PlantaController = {
    index: async ( req:Request , res:Response ) => {
        const { nome, daily_ligth, agua, peso } = req.body;

        const newPlanta = plantaRepository.create({nome,daily_ligth,agua,peso});

        res.status(201).send(newPlanta)
    },
    store: async ( req:Request , res:Response ) => {
        const allPlantas = plantaRepository.findAll();

        res.status(200).send(allPlantas);
    }
};

export default PlantaController;