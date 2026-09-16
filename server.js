const express = require('express');
const port = 3000;


const app = express();

app.get("/", (req, res) => {
    res.send("Servidor teste rodando...");
});

app.listen(port, () => {
    console.log(`Servidor teste rodando na porta ${port}`);
});