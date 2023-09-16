const express = require("express");
const path = require("path");
const history = require("connect-history-api-fallback");

const app = express();

app.use(history());

// app.use(express.static("dist"));
app.use(express.static(path.resolve(__dirname, "/dist")));

app.get("*", function(req, res) {
    res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});