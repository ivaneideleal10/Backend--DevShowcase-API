const express = require("express");

const profileRoutes = require("./src/routes/profileRoutes");
const technologyRoutes = require("./src/routes/technologyRoutes");
const projectRoutes = require("./src/routes/projectRoutes");

const app = express();

app.use(express.json());

app.use("/api", profileRoutes);
app.use("/api", technologyRoutes);
app.use("/api", projectRoutes);

app.get("/", (req, res) => {
    res.json({
        mensagem: "DevShowcase API funcionando!"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});