const router = require("express").Router();
const articleController = require("../controllers/articleController")


router.get("/:id")
    .post(articleController.addComment)
    .delete(articleController.deleteComment)


module.exports = router;