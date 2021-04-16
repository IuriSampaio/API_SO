import { Sequelize } from "sequelize-typescript";
import { Options } from "sequelize";

const options: Options = {
    database:'project',
    dialect:'mysql',
    host:process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    logging:console.log,
}

export default new Sequelize(options);