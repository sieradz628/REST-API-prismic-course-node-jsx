///////////////
//JSscope.com//
///////////////

const express = require('express'),
bodyParser = require('body-parser'),
router = require('./app/config/routes');


const app =  express();

app.set('trust proxy', 1);
app.set("views", __dirname + "/app/views");
app.set("view engine", "jsx");
app.engine('jsx', require('express-react-views').createEngine());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(router);

app.listen(3000);      
