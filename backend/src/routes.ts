import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import multer from 'multer';
import uploadConfig from './config/upload';

// Variáveis de ambiente
const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.get('/orphanages/list', OrphanagesController.index);
routes.get('/orphanage/:id', OrphanagesController.show);

   
export default routes;  