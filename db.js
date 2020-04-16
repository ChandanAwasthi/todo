const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/todos.db'
});

const todosTable = db.define('todosTable', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    task: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(500),
        allowNull: true
    },
    due: {
        type: Sequelize.STRING(20),
        allowNull: true
       
       },
    priority: {
        type: Sequelize.STRING(20),        
        allowNull: false
        
    },
    done: {
        type: Sequelize.BOOLEAN,     //Complete is to be true and incomplete is false.
        defaultValue: false
    }
});

const notes = db.define("notes",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    note:{
        type: Sequelize.STRING(200),
         },
});
todosTable.hasMany(notes,{
    foreignKey: 'main_id',
    allowNull: false
  })



 module.exports = {
     db, todosTable, notes
 }

