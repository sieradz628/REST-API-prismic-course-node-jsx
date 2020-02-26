const express = require('express');
router = express.Router();

articleController = require('../controllers/articleController');
staticPageController = require('../controllers/staticPageController');
categoryController = require('../controllers/categoryController');

router.all('/', articleController.getAllArticle); // home page - let there be only Hello and links
router.all('/about-me', staticPageController.aboutMe); // single page about me
router.all('/blog/article/:uid', staticPageController.getByArticleUid); // single pages with dynamic links to display individual articles
router.all('/blog/category/:categoryName', categoryController.getArticle); // list of items for the given category

router.all('*', (req, res) => { res.render('NotFound'); }); // we don't need it but it's nice to have 404

module.exports = router;
