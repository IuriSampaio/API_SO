import { Router, Request, Response } from 'express';
import { createConnection, ConnectionConfig } from 'mysql';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  const mysqlConection: ConnectionConfig = {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: Number(process.env.MYSQL_PORT) || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'bcd127',
    database: process.env.MYSQL_DB || 'project',
  }

  const connection = createConnection(mysqlConection);

  connection.connect();

  connection.createQuery('CREATE TABLE canteiro(id int not null auto_incement primary key,name varchar);', (err, res, fields) => {
    if (err) throw err;

    console.log("TABELA CRIADA")
  });

  connection.createQuery('INSERT INTO canteiro ("nome")', (err, res, fields) => {
    if (err) throw err;

    console.log(res)
  });

  connection.createQuery('SELECT * FROM canteiro', (err, res, fields) => {
    if (err) throw err;

    console.log(res)
  });

});

export default routes;