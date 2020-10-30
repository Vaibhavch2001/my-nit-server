'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
     Book.belongsTo(models.Subject);
    }
  };
  Book.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type:DataTypes.STRING
    },
    link:  {
        allowNull: false,
        type:DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};