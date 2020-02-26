const categoryService = require('../services/categoryService');

const getArticle = async(req, res) => {
  const [categoryId] = await Promise.all([
    categoryService.getCategoryId(req.params.categoryName),
  ]);
  const [article] = await Promise.all([
    categoryService.getArticle(categoryId),
  ]);
  const context = {
    article
  };
  res.render('Index', context);
};

module.exports = { getArticle };
