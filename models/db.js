const Sequelize = require('sequelize');

//Conexao com o banco MySql
const sequelize = new Sequelize('notes', 'root', 'Lucas@71258800', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}