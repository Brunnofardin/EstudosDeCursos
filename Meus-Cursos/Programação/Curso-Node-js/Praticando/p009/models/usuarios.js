const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    Nome:{
        type:String, 

    },
    Idade:{
        type:Number,

    },
    Data:{
        type:Date,
        default:Date.now()
    }
})

mongoose.model('Usuarios',UsuarioSchema);

