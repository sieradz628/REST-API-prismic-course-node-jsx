const prismic = require('../config/prismic').query;

const getArticle = () => new Promise ((resolve) => {
  let query = [ // let's ask for articles sorted by date
    `q=[[at(document.type,"article")]]`,
    `orderings=[document.first_publication_date desc]`
  ];
  prismic(query).then(results => {
    resolve(results);
  });
});

module.exports = { getArticle };
