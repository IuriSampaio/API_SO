import { Sequelize } from "sequelize-typescript";
import { Options } from "sequelize";

import Canteiro from './models/Canteiro';
import Funcionario from './models/Funcionario';
import Planta from './models/Planta';

const options: Options = {
    database:'project',
    dialect:'mysql',
    host:process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    logging:console.log
}

const database = new Sequelize(options);

database.addModels([Canteiro,Funcionario,Planta]);

export default database;