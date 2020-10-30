'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Document.belongsTo(models.Subject);
      // define association here
    }
  };
  Document.init({
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
    modelName: 'Document',
  });
  return Document;
};