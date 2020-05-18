const router = require("express").Router();
const articleController = require("../controllers/articleController")

router.route("/:id")
    .get(articleController.findArticleById)
    .delete(articleController.deleteArticle)

router.route("/")
    .get(articleController.findAllArticles)
    .post(articleController.saveScrape)

module.exports = router;




