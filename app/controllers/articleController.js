const articleService = require('../services/articleService'); // there we will do all the mathematics

const getAllArticle = async(req, res) => {
  const [article] = await Promise.all([
    articleService.getArticle(),
  ]);
  const context = { // preparing the context for our view
    article
  };
  res.render('Index', context);
};

module.exports = { getAllArticle };
