import database from "../database";
import Plantio from "../models/Plantio";
import { Request,Response } from "express";
import Planta from "../models/Planta";
import Funcionario from "../models/Funcionario";
import Canteiro from "../models/Canteiro";

const plantioRepository = database.getRepository(Plantio);

const PlantioController = {
    index:async (req:Request,res:Response) => {
        const allPlantios = await plantioRepository.findAll({include:[Planta,Funcionario,Canteiro]});
    
        return res.status(200).send(allPlantios);
    },
    store:async (req:Request,res:Response) => {
        const {data,sementes,planta_id, funcionario_id, canteiro_id} = req.body;

        let data_formated = data;
        
        if( data && data.indexOf('/') !== -1){

            data_formated = data.split('/').toString()
            
            data_formated = data_formated[2]+"-"+data_formated[1]+"-"+data_formated[0];

        }

        
        try {

            data_formated = new Date(data).toISOString();
            
        } catch (error) {

            return res.status(400).send({error:"Data não formatada corretamente"})
            
        }


        data_formated = new Date(data_formated).toISOString();

        const newPlantio = await plantioRepository.create({data:data_formated,sementes,planta_id, funcionario_id, canteiro_id});

        return newPlantio ? res.status(201).send(newPlantio) : res.status(400);
    },
};

export default PlantioController;