// Creating our Saved model
module.exports = function(sequelize, DataType) {
    var Saved = sequelize.define("Saved", {
      id: {
        autoIncrement: true,
        type: DataType.INTEGER,
        primaryKey: true
      },
      category: {
        type: DataType.STRING,
        allowNull: false, 
        validate: {
          len: [1]
        }
      },
      title: {
        type: DataType.STRING,
        allowNull: false, 
        validate: {
          len: [1]
        }
      },
      article: {
        type: DataType.STRING,
        allowNull: false, 
        validate: {
          len: [1]
        }
      }
    }, {
      timestamps: true,
      createdAt: true
    });
  
    return Saved;
  };