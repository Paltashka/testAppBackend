const express = require("express");
const cors = require("cors");

const app = express();
const db = require('./database');

db();

const http = require("http").createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:4200"
}));

const { tableRouter } = require('./router');

app.use('/table', tableRouter.table);

app.all("*", (req, res) => {
    res.status("404").json(404);
});

http.listen(3000, () => {
    console.log('Listening on port 3000');
});