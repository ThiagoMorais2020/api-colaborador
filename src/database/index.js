const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Setor = require('../models/Setor');
const Cargo = require('../models/Cargo');
const Colaborador = require('../models/Colaborador');

const connection = new Sequelize(dbConfig);

Setor.init(connection);
Cargo.init(connection);
Colaborador.init(connection);

Colaborador.associate(connection.models);
Cargo.associate(connection.models);

module.exports = connection;
