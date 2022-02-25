const dbConfig = require("../config/db.config")

const { Sequelize, DataTypes } = require('sequelize')
const { pool } = require("../config/db.config")

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: 0,
        pool: dbConfig.pool
    }
)

sequelize.authenticate()
    .then(() => {
        console.log("DB Connected!")
    })
    .catch(err => {
        console.error(err)
    })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.words = require("./word.model")(sequelize, DataTypes) //model

db.sequelize.sync({ force: false })
    .then(() => {
        console.log("Re-Sync done!")
    })

module.exports = db