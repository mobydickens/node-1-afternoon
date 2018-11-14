const express = require('express');
const bodyParser = require('express');
const port = 3001;
const mc = require('./controllers/messages_controller');

const app = express();
const baseUrl = "/api/messages";

app.use(bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ));

app.get(baseUrl, mc.read);

app.post(baseUrl, mc.create);

app.put(`${baseUrl}/:id`, mc.update);

app.delete(`${baseUrl}/:id`, mc.delete);

app.listen(port, () => {
    console.log(`port ${port} is awake!`)
})