import { Request, Response } from "express";
import database from "../database";
import Funcionario from "../models/Funcionario";

const FuncionarioRepository = database.getRepository(Funcionario);

interface body{
    nome:string;
    age_nasc:string;
}

const FuncionarioController = {
    store:async (req:Request, res:Response) => {
        const {nome, age_nasc} = req.body as body;

        let age_nasc_formated = age_nasc;

        if( age_nasc && age_nasc.indexOf('/') !== -1){

            age_nasc_formated = age_nasc_formated.split('/').toString()
            
            age_nasc_formated = age_nasc_formated[2]+"-"+age_nasc_formated[1]+"-"+age_nasc_formated[0];

        }

        try {

            age_nasc_formated = new Date(age_nasc_formated).toISOString();
            
        } catch (error) {

            return res.status(400).send({error:"Data não formatada corretamente"})
            
        }

        const newFuncionario = await FuncionarioRepository.create({ nome , age_nasc:age_nasc_formated });
    
        return newFuncionario ? res.status(201).send(newFuncionario) : res.status(500).send({error:"server error"})  ;
    },
    index:async (req:Request, res:Response) => {
        const AllFuncionarios = await FuncionarioRepository.findAll();
    
        return AllFuncionarios ? res.status(200).send(AllFuncionarios) : res.status(401).send({error:"Não existem funcionarios cadastrados"}) ;
    }
};

export default FuncionarioController;