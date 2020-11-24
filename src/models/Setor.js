// import Model from "sequelize";
const { Model, DataTypes } = require('sequelize');

class Setor extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'setor',
      freezeTableName: true
    })
  }
}

module.exports = Setor;
