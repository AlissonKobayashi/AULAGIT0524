import criadoresModel from './criadores.schema'

export class CriadoresService {
    static delete(id: string) {
        throw new Error('Method not implemented.')
    }
    static update(id: string, body: any) {
        throw new Error('Method not implemented.')
    }
    static create(body: any) {
        throw new Error('Method not implemented.')
    }
    static findById(id: string) {
        throw new Error('Method not implemented.')
    }
    static findAll() {
        throw new Error('Method not implemented.')
    }

    async create(criador: any) {
        const createdComics = criadoresModel.create(criador)

        return createdComics
    }
}