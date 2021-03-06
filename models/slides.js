'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    static associate(models) {
     Slide.belongsTo(models.Subject);
    }
  };
  Slide.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    isVerified: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue:0
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
    modelName: 'Slide',
  });
  return Slide;
};