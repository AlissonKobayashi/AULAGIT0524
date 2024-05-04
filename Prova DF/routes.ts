import { Router } from 'express'
import comicsController from './comics/comics.controller'
import criadoresController from './criadores/criadores.controller'
import personagensController from './personagens/personagens.controller'

const routes = Router()
routes.post('/comics', comicsController.create)
routes.get('/comics', comicsController.findAll)
routes.get('/comics/:id', comicsController.findById)
routes.put('/comics/:id', comicsController.update)
routes.delete('/comics/:id', comicsController.delete)

routes.post('/criadores', criadoresController.create)
routes.get('/criadores', criadoresController.findAll)
routes.get('/criadores/:id', criadoresController.findById)
routes.put('/criadores/:id', criadoresController.update)
routes.delete('/criadores/:id', criadoresController.delete)

routes.post('/personagens', personagensController.create)
routes.get('/personagens', personagensController.findAll)
routes.get('/personagens/:id', personagensController.findById)
routes.put('/personagens/:id', personagensController.update)
routes.delete('/personagens/:id', personagensController.delete)

export {
    routes
}