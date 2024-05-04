import { Request, Response } from 'express'
import { ComicsService } from './comics.service'

class ComicsController {
    
    async findAll(req: Request, res: Response){
        try{
            const comics = await ComicsService.findAll()
            return res.json(comics)
        }catch(error){
            return error
        }
    }

    async findById(req: Request, res: Response){
        try{
            const comics = await ComicsService.findById(req.params.id)
            return res.json(comics)
        }catch(error){
            return error
        }
    }

    async create(req: Request, res: Response){
        try {
            const comics = await ComicsService.create(req.body)
            return res.json(comics)
        } catch (error) {
            return error
        }
    }

    async update(req: Request, res: Response){
        try{
            const comics = await ComicsService.update(req.params.id, req.body)
            return res.json(comics)
        }catch (error){
            return error
        }
    }

    async delete(req: Request, res: Response){
        try{
            const comics = await ComicsService.delete(req.params.id)
            return res.json(comics)
        }catch (error){
            return error
        }
    }
    
}

export default new ComicsController()