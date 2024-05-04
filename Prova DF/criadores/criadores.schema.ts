import { Schema, model } from 'mongoose'

const criadoresSchema = new Schema({
    nome: String,
    funcao: String,
    quadrinhos: String
}, {
    timestamps: true
})

export default model('Criadores', criadoresSchema)