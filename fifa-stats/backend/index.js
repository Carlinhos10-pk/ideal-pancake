const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

// Endpoint para obter dados de jogadores
app.get('/api/players', async (req, res) => {
    try {
        // Substitua 'URL_DA_API_DO_FIFA' pela URL da API que fornece os dados do FIFA
        const response = await axios.get('URL_DA_API_DO_FIFA');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter dados dos jogadores' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});