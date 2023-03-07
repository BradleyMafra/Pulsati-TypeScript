import express from 'express';
import AppDataSource from './config/Database';
import { livroController } from './controller/livroController';

AppDataSource.initialize().then(() => {
  console.log('Conectado com sucesso ao banco');
  const app = express();
  app.use(express.json());
  
  app.post('/livro', new livroController().createLivro);
  app.get('/livro/:id', new livroController().getLivro);
  app.get('/livros', new livroController().getLivros);
  app.put('/livro/:id', new livroController().updateLivro);
  app.delete('/livro/:id', new livroController().deleteLivro);

  app.listen(8000);
}).catch(e => console.log('Vish deu ruim ', e))