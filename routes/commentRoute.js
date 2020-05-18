const router = require("express").Router();
const articleController = require("../controllers/articleController")


router.route("/:id")
    .post(articleController.addComment)
    .delete(articleController.deleteComment)


module.exports = router;