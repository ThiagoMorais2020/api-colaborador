const Colaborador = require('../models/Colaborador');
const Cargo = require('../models/Cargo');
const Setor = require('../models/Setor');

module.exports = {
  async store(req, res) {
    const { nome, cpf, cargo_id } = req.body;
    const colaborador = await Colaborador.create({ nome, cpf, cargo_id });

    return res.json({colaborador});
  },

  async update(req, res) {
    const { nome, cpf, cargo_id } = req.body;
    const { id } = req.params;
    const colaborador = await Colaborador.findByPk(id).then((record) => {
      if (record) {
        record.update({nome, cpf, cargo_id })
      }
    })
    return res.json(colaborador);
  },

  async get(req, res) {
    const { sort } = req.query;
    let choiceOrder = [];

    if (sort === 'setor') {
      choiceOrder = [Cargo, Setor, 'nome', 'desc']
    }

    if (sort === 'cargo') {
      choiceOrder = [Cargo, 'nome', 'desc']
    }

    const colaborador = await Colaborador.findAll({
      include: [{
        model: Cargo,
        as: 'cargo',
        required: true,
        include: {
          model: Setor,
          as: 'setor',
          required: true,
        }
      }],
      order: choiceOrder.length ? [choiceOrder] : []
    })



    return res.json(colaborador);
  },

  async getById(req, resp) {
    const { id } = req.params;
    const colaborador = await Colaborador.findByPk(id, {
      include: [{
        model: Cargo,
        as: 'cargo',
        required: true,
      }],
    });

    return resp.json(colaborador);
  },

  async delete(req, resp) {
    const { id } = req.params;
    const colaborador = Colaborador.findByPk(id);

    if (!colaborador) {
      return resp.status(400).json({ error: 'Colaborador não encontrado' });
    }

    await Colaborador.destroy({
      where: {
        id
      }
    });

    return resp.status(200).json({ error: 'Colaborador removido' });
  }
}
