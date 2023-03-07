import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Usuario } from "../model/Usuario";

export class UsuarioController {
  async create(req: Request, res: Response) {
    const { nome, sobrenome }: { 
      nome: string, sobrenome: string
    } = req.body;
    const usuario = new Usuario();
    usuario.nome = nome;
    usuario.sobrenome = sobrenome;

    const repo = AppDataSource.getRepository(Usuario);
    await repo.save(usuario);

    res.json(usuario);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Usuario);
    const usuario = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(usuario);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, sobrenome } = req.body;

    const repo = AppDataSource.getRepository(Usuario);
    const usuario = await repo.findOneBy({ codigo: parseInt(id, 10) });
    usuario.nome = nome;
    usuario.sobrenome = sobrenome;

    await repo.save(usuario);
    res.json(usuario);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Usuario);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar usuario" });
  }
}
