import { Schema, model } from 'mongoose'

const comicsSchema = new Schema({
    titulo: String,
    descricao: String,
    dataPublicacao: Date,
    //tem uma entidade capa, porem nao entendi como usar ela aqui
}, {
    timestamps: true
})

export default model('Comics', comicsSchema)