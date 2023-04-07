import Sequelize from 'sequelize';

export const sequelize = new Sequelize("camera","root","root",{
    host:"127.0.0.1",
    dialect:"mysql"
})

await sequelize.authenticate()

console.log("Testing the database connection..");