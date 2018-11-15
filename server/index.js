const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;
const url = "/api/messages";
const mc = require('./controllers/messages_controller');

let app = express();

app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

app.get(url, mc.read);
app.post(url, mc.create);
app.put(`${url}/:id`, mc.update);
app.delete(`${url}/:id`, mc.delete);

app.listen(port, "0.0.0.0", () => {
    console.log("server activate!")
})