const prismic = require('../config/prismic').query;

const getCategoryId = (categoryName) => new Promise ((resolve, reject) => {
  let query = [`q=[[at(document.type,"category")]]`, `q=[[at(my.category.name,"${categoryName}")]]`];
  prismic(query).then(results => {
    resolve(results.data.results[0].id);
  });
});

const getArticle = (categoryId) => new Promise ((resolve) => {
  let query = [
    `q=[[at(document.type,"article")]]`,
    `q=[[at(my.article.categories.category,"${categoryId}")]]`
  ];
  prismic(query).then(results => {
    resolve(results);
  });
});

module.exports = { 
  getArticle,
  getCategoryId 
};
