const express = require("express");
const path = require("path");
const app = express();

// Permite receber dados do formulário (POST)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Permite servir arquivos estáticos (CSS, imagens, JS)
app.use(express.static(__dirname));

// Rota principal → envia o index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Rota que recebe o formulário
app.post("/login", (req, res) => {
    console.log("📩 Dados recebidos do formulário:");
    console.log(req.body);

    res.send("Dados enviados com sucesso!");
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("🚀 Servidor rodando em http://localhost:3000");
});
