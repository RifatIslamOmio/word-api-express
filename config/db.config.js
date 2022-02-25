module.exports = {
    HOST: "localhost",
    USER: "omio",
    PASSWORD: "123456",
    DB: "vocab_db",
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    }
}
