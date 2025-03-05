import { Sequelize } from "sequelize";

//nama db, nama user, password
const db = new Sequelize("tcc","root","",{
    host: "localhost",
    dialect: "mysql"
})

export default db