const staticPageService = require('../services/staticPageService');

const getByArticleUid = async(req, res) => { 
  const [article] = await Promise.all([
    staticPageService.getArticle(req.params.uid), // in general - link from our Index.jsx we get uid to use dynamic links in routes.js
  ]);
  const context = {
    article
  };
  // we make sure that the given article exists if there is no data we render 404
  article.data.results.length>0 ? res.render('Article', context) : res.render('NotFound'); 
};

const aboutMe = async(req, res) => {
  const [article] = await Promise.all([
    staticPageService.aboutMe(),
  ]);
  const context = {
    article
  };
  res.render('Article', context);
};

module.exports = { 
  getByArticleUid,
  aboutMe
};
