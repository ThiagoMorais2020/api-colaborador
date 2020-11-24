const { Model, DataTypes } = require('sequelize');

class Cargo extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'cargo',
      freezeTableName: true
    })
  }

  static associate(models) {
    this.belongsTo(models.Setor, { foreignKey: 'setor_id', as: 'setor'})
  }
}

module.exports = Cargo;
