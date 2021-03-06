module.exports = {
    PORT: process.env.PORT,
    DB: {
        user: "postgres",
        password: process.env.DB_PASSWORD,//"mysecretpassword",
        database: "db_QA",
        host:"localhost",
        dialect:"postgres"
    }
}