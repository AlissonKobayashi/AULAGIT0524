import { Request, Response } from 'express'
import { CriadoresService } from './criadores.service'

class CriadoresController {
    
    async findAll(req: Request, res: Response){
        try{
            const criador = await CriadoresService.findAll()
            return res.json(criador)
        }catch(error){
            return error
        }
    }

    async findById(req: Request, res: Response){
        try{
            const criador = await CriadoresService.findById(req.params.id)
            return res.json(criador)
        }catch(error){
            return error
        }
    }

    async create(req: Request, res: Response){
        try {
            const criador = await CriadoresService.create(req.body)
            return res.json(criador)
        } catch (error) {
            return error
        }
    }

    async update(req: Request, res: Response){
        try{
            const criador = await CriadoresService.update(req.params.id, req.body)
            return res.json(criador)
        }catch (error){
            return error
        }
    }

    async delete(req: Request, res: Response){
        try{
            const criador = await CriadoresService.delete(req.params.id)
            return res.json(criador)
        }catch (error){
            return error
        }
    }
    
}

export default new CriadoresController()