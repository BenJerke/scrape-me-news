const router = require("express").Router();
const articleRoute = require("./articleRoute");
const commentRoute = require ("./commentRoute");


router.use("/articles/", articleRoute);
router.use("/comment/", commentRoute);


module.exports = router;


console.log(router)