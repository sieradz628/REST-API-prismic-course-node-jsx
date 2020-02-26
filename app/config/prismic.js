const axios = require('axios');

const endPoint = 'your endPoint';
const token = 'your token';

const fixQuery = (query) => {
  return query
    .replace(/\[/g, '%5B')
    .replace(/\]/g, '%5D')
    .replace(/\,/g, '%2C')
    .replace(/\"/g, '%22')
    .replace(/\s/g, '+');
}
// as we will be passing arrays, let us add a function that will prepare our requests
// including character corrections in the URL query(fixQuery)
const prepareQuery = (queries) => {
  return queries.map(query => {
    return `&${fixQuery(query)}`
  });
};

const query = (queries) => new Promise(resolve => {
  axios.get(`${endPoint}?access_token=${token}`) // by default, we ask about our token
    .then(responseToken => {
      const preparedQuery = prepareQuery(queries); // all queries will be as arrays, so we will prepare the request for them
      const requestUrl = `${endPoint}/documents/search?ref=${responseToken.data.refs[0].ref}&access_token=${token}&format=json${preparedQuery.join('')}`;
        axios.get(requestUrl)
          .then(result => {
            resolve(result); // we return our result
          }).catch(err => {
          });
    }).catch(err => {
    });
});
// we only export our function for the request 
module.exports = {
  query
};
