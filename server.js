const express = require("express");
const history = require("connect-history-api-fallback");

const app = express();

app.use(history());

app.use(express.static("dist"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});