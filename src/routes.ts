import { Router } from 'express';
import CanteiroController from './controllers/canteiro';
import ColhidoController from './controllers/colhido';
import FuncionarioController from './controllers/funcionario';
import PlantaController from './controllers/planta';
import PlantioController from './controllers/plantio';

const routes = Router();

routes.get(  '/canteiros' ,  CanteiroController.index)
      .post( '/canteiro'  ,  CanteiroController.store)
      .get(  '/funcionarios',FuncionarioController.index)
      .post( '/funcionarios',FuncionarioController.store)
      .get(  '/planta'    ,  PlantaController.index)
      .post( '/planta'    ,  PlantaController.store)
      .get(  '/plantio'   ,  PlantioController.index)
      .post( '/plantio'   ,  PlantioController.store)
      .get(  '/colhido'   ,  ColhidoController.index)
      .post( '/colhido'   ,  ColhidoController.store);

export default routes;