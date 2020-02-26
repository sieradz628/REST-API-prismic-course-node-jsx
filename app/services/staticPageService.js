const prismic = require('../config/prismic').query;

const getArticle = (uid) => new Promise ((resolve, reject) => { 
  let query = [ // specific article by its unique id
    `q=[[at(my.article.uid,"${uid}")]]`,
  ];
  prismic(query).then(results => {
    resolve(results);
  });
});

const aboutMe = () => new Promise ((resolve) => { // we don't expect any parameters because we are asking for a specific page about me
  let query = [ 
    `q=[[at(document.type,"about_me")]]`,
  ];
  prismic(query).then(results => {
    resolve(results);
  });
});

module.exports = { 
  getArticle,
  aboutMe
};
