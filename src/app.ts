import express from 'express';
import allowMethods from './middleware/allowMethods';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(allowMethods);

app.use(routes);

export default app;