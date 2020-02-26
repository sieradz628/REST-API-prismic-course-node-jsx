const express = require('express');
router = express.Router();

articleController = require('../controllers/articleController');
staticPageController = require('../controllers/staticPageController');

router.all('/', articleController.getAllArticle); // home page - let there be only Hello and links
router.all('/about-me', staticPageController.aboutMe); // single page about me
router.all('/blog/page/:pageNumber', articleController.getAllArticle);
router.all('/blog/article/:uid', staticPageController.getByArticleUid); // single pages with dynamic links to display individual articles

router.all('*', (req, res) => { res.render('NotFound'); }); // we don't need it but it's nice to have 404

module.exports = router;
