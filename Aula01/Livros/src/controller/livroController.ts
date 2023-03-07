import { json, Request, Response } from 'express';
import AppDataSource from '../config/Database';
import { livro_bradley } from '../model/livroModel';

export class livroController {
    async createLivro(req: Request, res: Response) {
        const { tituloLivro, numeroEdicao, anoLancamento, codigoEditor, codigoAutor }: {
            tituloLivro:string, numeroEdicao:number, anoLancamento:number, codigoEditor:number, codigoAutor:number
        } = req.body;
        const livro = new livro_bradley();
        livro.tituloLivro = tituloLivro;
        livro.numeroEdicao = numeroEdicao;
        livro.anoLancamento = anoLancamento;
        livro.codigoEditor = codigoEditor;
        livro.codigoAutor = codigoAutor;

        const repo = AppDataSource.getRepository(livro_bradley);
        await repo.save(livro);
        res.json(livro);
    };

    async getLivro(req: Request, res: Response) {
        const id = req.params.id;
        const repo = AppDataSource.getRepository(livro_bradley);
        const livro = await repo.findOneBy({ id: parseInt(id, 10) });
        res.json(livro);
    }

    async updateLivro(req: Request, res: Response) {
        const id = req.params.id;
        const { tituloLivro, numeroEdicao, anoLancamento, codigoEditor, codigoAutor } = req.body;
        const repo = AppDataSource.getRepository(livro_bradley);
        const livro = await repo.findOneBy({ id: parseInt(id, 10) });
        livro.tituloLivro = tituloLivro;
        livro.numeroEdicao = numeroEdicao;
        livro.anoLancamento = anoLancamento;
        livro.codigoEditor = codigoEditor;
        livro.codigoAutor = codigoAutor;
        await repo.save(livro);
        res.json(livro);
    }

    async deleteLivro(req: Request, res: Response) {
        const id = req.params.id;
        const repo = AppDataSource.getRepository(livro_bradley);
        await repo.delete(id);
        res.json({ message: "Sucesso ao deletar livro" });
    }

    async getLivros(req: Request, res: Response) {
        const repo = AppDataSource.getRepository(livro_bradley);
        const livros = await repo.find();
        res.json(livros);
    }
}