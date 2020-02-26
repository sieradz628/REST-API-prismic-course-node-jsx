///////////////
//JSscope.com//
///////////////

const express = require('express'),
bodyParser = require('body-parser'),
axios = require('axios');


const app =  express();

// Configure app for bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//API Routes
const router = express.Router();
app.use('/', router);

router.get('/', function(req, res,) {
  // say hello
  res.json({message: "Welcome to our prismic"});

  const endPoint = 'endPoint';
  const token = 'token';

  const fixQuery = (query) => {
    return query
      .replace(/\[/g, '%5B')
      .replace(/\]/g, '%5D')
      .replace(/\,/g, '%2C')
      .replace(/\"/g, '%22')
      .replace(/\s/g, '+');
  }

  axios.get(`${endPoint}?access_token=${token}`)  // asking for our ref
    .then(responseToken => {
      // prepare a request
      const requestUrl = `${endPoint}/documents/search?ref=${responseToken.data.refs[0].ref}&access_token=${token}&format=json${fixQuery(`[at(document.type,"article")]`)}`;
      axios.get(requestUrl)
          .then(result => {
            // using map() we will receive all our articles in the console
            result.data.results.map(el => {
              console.log(el)
            });
          }).catch(err => {
            console.log(err);
          });
    }).catch(err => {
      console.log(err);
    });
});

app.listen(3000);      
