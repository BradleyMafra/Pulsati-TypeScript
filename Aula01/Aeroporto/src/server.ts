import express from 'express';
import AppDataSource from './config/Database';
import { AeroportoController } from './controller/AeoroportoController';

AppDataSource.initialize().then(() => {
  console.log('Conectado com sucesso ao banco');
  const app = express();
  app.use(express.json());
  
  app.post('/aeroporto', new AeroportoController().createAirport);
  app.get('/aeroporto/:id', new AeroportoController().getAirport);
  app.get('/aeroportos', new AeroportoController().getAirports);
  app.put('/aeroporto/:id', new AeroportoController().updateAirport);
  app.delete('/aeroporto/:id', new AeroportoController().deleteAirport);

  app.listen(8000);
}).catch(e => console.log('Vish deu ruim ', e))
