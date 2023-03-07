import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Aeroporto_Bradley } from "../model/AeroportoModel";

export class AeroportoController {
    async createAirport(req: Request, res: Response) {
        const { nome, codigo, endereco }: {
            nome:string, codigo:number,endereco:string
        } = req.body;
        const aeroporto = new Aeroporto_Bradley();
        aeroporto.nome = nome;
        aeroporto.codigo = codigo;
        aeroporto.endereco = endereco;
        
        const repo = AppDataSource.getRepository(Aeroporto_Bradley);
        await repo.save(aeroporto);

        res.json(aeroporto);
    };

    async getAirport(req: Request, res: Response) {
        const id = req.params.id;
    
        const repo = AppDataSource.getRepository(Aeroporto_Bradley);
        const aeroporto = await repo.findOneBy({ id: parseInt(id, 10) });
    
        res.json(aeroporto);
      }
    
      async updateAirport(req: Request, res: Response) {
        const id = req.params.id;
        const { nome, endereco, codigo} = req.body;
    
        const repo = AppDataSource.getRepository(Aeroporto_Bradley);
        const aeroporto = await repo.findOneBy({ id: parseInt(id, 10) });
        aeroporto.nome = nome;
        aeroporto.codigo = codigo;
        aeroporto.endereco = endereco;
    
        await repo.save(aeroporto);
        res.json(aeroporto);
      }
    
      async deleteAirport(req: Request, res: Response) {
        const id = req.params.id;
    
        const repo = AppDataSource.getRepository(Aeroporto_Bradley);
        await repo.delete(id);
        res.json({ message: "Sucesso ao deletar aeroporto" });
      }

      async getAirports(req: Request, res: Response) {
        const repo = AppDataSource.getRepository(Aeroporto_Bradley);
        const aeroportos = await repo.find();
        res.json(aeroportos);
      }
}