import { Router } from 'express';
import CanteiroController from './controllers/canteiro';
import FuncionarioController from './controllers/funcionario';
import PlantaController from './controllers/planta';

const routes = Router();

routes.get(  '/canteiros' ,  CanteiroController.index)
      .post( '/canteiro'  ,  CanteiroController.store)
      .get(  '/funcionarios',FuncionarioController.index)
      .post( '/funcionarios',FuncionarioController.store)
      .get(  '/planta'    ,  PlantaController.index)
      .post( '/planta'    ,  PlantaController.store);

export default routes;