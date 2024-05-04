import { Schema, model } from 'mongoose'

const personagensSchema = new Schema({
    nome: String,
    funcao: String,
    url: String
}, {
    timestamps: true
})

export default model('Personagem', personagensSchema)