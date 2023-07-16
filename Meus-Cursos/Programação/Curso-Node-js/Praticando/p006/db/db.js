const sequelize = require('sequelize');
const conexaobd03 = new sequelize('bancoteste03','root','123456789',{

    host:'localhost',
    dialect:'mysql',

})
module.exports = {
    sequelize,
    conexaobd03
}