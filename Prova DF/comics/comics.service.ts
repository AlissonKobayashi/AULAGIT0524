import comicsModel from './comics.schema'

export class ComicsService {
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

    async create(comics: any) {
        const createdComics = comicsModel.create(comics)

        return createdComics
    }
}