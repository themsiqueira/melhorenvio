import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Integração melhor envio' }));

export default routes;
