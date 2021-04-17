import { Request, Response } from "express";
import database from "../database";
import Funcionario from "../models/Funcionario";

const FuncionarioRepository = database.getRepository(Funcionario);

const FuncionarioController = {
    store:async (req:Request, res:Response) => {
        const {nome, age_nasc} = req.body;

        const newFuncionario = await FuncionarioRepository.create({ nome , age_nasc });
    
        res.status(201).send(newFuncionario);
    },
    index:async (req:Request, res:Response) => {
        const AllFuncionarios = await FuncionarioRepository.findAll()
    
        res.status(200).send(AllFuncionarios)
    }
};

export default FuncionarioController;