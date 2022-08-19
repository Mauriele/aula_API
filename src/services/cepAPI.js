const axios = require('axios');

const cepAPI = axios.create({
    baseURL: 'https://brasilapi.com.br/api',
    timeout: 5000
});

module.exports = cepAPI;