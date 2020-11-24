const { Model, DataTypes } = require('sequelize');

class Colaborador extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      cargo_id: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'colaborador',
      freezeTableName: true
    })
  }

  static associate(models) {
    this.belongsTo(models.Cargo, { foreignKey: 'cargo_id', as: 'cargo'})
  }
}

module.exports = Colaborador;
