'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const financeiro = await queryInterface.bulkInsert('setor', [
      {
        nome: 'Financeiro',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('cargo', [
      {
        nome: 'Diretor Financeiro',
        setor_id: financeiro,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Supervisor financeiro',
        setor_id: financeiro,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    const administrativo = await queryInterface.bulkInsert('setor', [
      {
        nome: 'Administrativo',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('cargo', [
      {
        nome: 'Administrativo',
        created_at: new Date(),
        updated_at: new Date(),
        setor_id: administrativo
      },
      {
        nome: 'Assistente administrativo',
        created_at: new Date(),
        updated_at: new Date(),
        setor_id: administrativo
      },
    ], {});

    const recursosHumanos = await queryInterface.bulkInsert('setor', [
      {
        nome: 'Recursos Humanos',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('cargo', [
      {
        nome: 'Consultor de recursos humanos',
        created_at: new Date(),
        updated_at: new Date(),
        setor_id: recursosHumanos
      },
      {
        nome: 'Assistente de departamento de pessoal',
        created_at: new Date(),
        updated_at: new Date(),
        setor_id: recursosHumanos
      },
      {
        nome: 'Analista de cargos',
        created_at: new Date(),
        updated_at: new Date(),
        setor_id: recursosHumanos
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cargo', null, {});
    await queryInterface.bulkDelete('setor', null, {});
  }
};
