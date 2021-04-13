import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  // const mysqlConection: ConnectionConfig = {
  //   host: process.env.MYSQL_HOST || '127.0.0.1',
  //   port: Number(process.env.MYSQL_PORT) || 3306,
  //   user: process.env.MYSQL_USER || 'root',
  //   password: process.env.MYSQL_PASSWORD || 'bcd127',
  //   database: process.env.MYSQL_DB || 'project',
  // };
});

export default routes;