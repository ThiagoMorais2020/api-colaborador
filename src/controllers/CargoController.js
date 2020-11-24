const Cargo = require('../models/Cargo');
const Setor = require('../models/Setor');

module.exports = {
  async get(req, res) {
    const { setor_id } = req.params;
    const cargos = await Cargo.findAll({
      include: [{
        model: Setor,
        as: 'setor',
        required: true,
        where: {
          id: setor_id
        }
      }]
    });

    return res.json(cargos);
  }
}
