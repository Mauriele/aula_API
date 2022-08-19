const cepAPI = require('../services/cepAPI');

const cepController = {
    show: async (request, response) => {
        const {codigo} = request.params;

        const endereco = await cepAPI.get(`/cep/v2/${codigo}`);

        console.log(endereco);

        response.json(endereco.data);
    }
}

module.exports = cepController;