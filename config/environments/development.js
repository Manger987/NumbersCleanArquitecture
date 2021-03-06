module.exports = {
    PORT: 3000,//process.env.PORT,
    DB: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "mssql",
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
            acquire: 10000,
            evict: 10000,
            handleDisconnects: true
        },
        dialectOptions: {
            options: {
                validateBulkLoadParameters: true
            }
        },
    }
}