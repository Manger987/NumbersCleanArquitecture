module.exports = {
    PORT: process.env.PORT,
    DB: {
        user: "postgres",
        password: process.env.DB_PASSWORD,//"mysecretpassword",
        database: "School_prod",
        host: process.env.DB_HOST,//"localhost",
        dialect:"postgres"
    }
}