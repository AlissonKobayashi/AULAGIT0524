import { Request, Response } from 'express'
import { PersonagensService } from './personagens.service'

class PersonagensController {
    
    async findAll(req: Request, res: Response){
        try{
            const personagem = await PersonagensService.findAll()
            return res.json(personagem)
        }catch(error){
            return error
        }
    }

    async findById(req: Request, res: Response){
        try{
            const personagem = await PersonagensService.findById(req.params.id)
            return res.json(personagem)
        }catch(error){
            return error
        }
    }

    async create(req: Request, res: Response){
        try {
            const personagem = await PersonagensService.create(req.body)
            return res.json(personagem)
        } catch (error) {
            return error
        }
    }

    async update(req: Request, res: Response){
        try{
            const personagem = await PersonagensService.update(req.params.id, req.body)
            return res.json(personagem)
        }catch (error){
            return error
        }
    }

    async delete(req: Request, res: Response){
        try{
            const personagem = await PersonagensService.delete(req.params.id)
            return res.json(personagem)
        }catch (error){
            return error
        }
    }
    
}

export default new PersonagensController()