import express from 'express';
import allowMethods from './middleware/allowMethods';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(allowMethods);
app.use(cors());

app.use(routes);

export default app;