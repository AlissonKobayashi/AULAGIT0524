import personagensModel from './personagens.schema'

export class PersonagensService {
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

    async create(personagem: any) {
        const createdPersonagens = personagensModel.create(personagem)

        return createdPersonagens
    }
}