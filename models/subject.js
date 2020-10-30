'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subject.hasMany(models.Document);
      Subject.hasMany(models.PastPapers);
      Subject.hasMany(models.Book);
      Subject.hasMany(models.Slide);
      // define association here
    }
  };
  Subject.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    year: {
      type:DataTypes.STRING,
      allowNull:false
    },
    branch: {
      type:DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};