import { Request, Response } from "express";
import database from "../database";
import Funcionario from "../models/Funcionario";

const FuncionarioRepository = database.getRepository(Funcionario);

const FuncionarioController = {
    store:async (req:Request, res:Response) => {
        const {nome, age_nasc} = req.body;

        let age_nasc_formated = age_nasc.slice('/');
        
        age_nasc_formated = age_nasc_formated[2]+"-"+age_nasc_formated[1]+"-"+age_nasc_formated[0];

        age_nasc_formated = new Date(age_nasc_formated).toISOString();

        const newFuncionario = await FuncionarioRepository.create({ nome , age_nasc:age_nasc_formated });
    
        res.status(201).send(newFuncionario);
    },
    index:async (req:Request, res:Response) => {
        const AllFuncionarios = await FuncionarioRepository.findAll();
    
        res.status(200).send(AllFuncionarios);
    }
};

export default FuncionarioController;