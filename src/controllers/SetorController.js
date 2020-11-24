const Setor = require('../models/Setor');

module.exports = {
  async get(req, res) {
    const setores = await Setor.findAll();

    return res.json(setores);
  }
}
