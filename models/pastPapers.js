'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PastPapers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     PastPapers.belongsTo(models.Subject);
      // define association here
    }
  };
  PastPapers.init({
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
    isVerified: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue:0
    },
  }, {
    sequelize,
    modelName: 'PastPapers',
  });
  return PastPapers;
};