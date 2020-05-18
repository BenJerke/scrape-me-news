const db = require("../models")

module.exports = {

    findArticleById: function (req, res){
        console.log("Finding article by id...");
        db.Article
            .find(req.params.id)
            .populate("comment")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    saveScrape: function (req, res) {
        if (req.body.headline &&
            req.body.summary && 
            req.body.link) {

                let scrape = {
                    headline: req.body.headline,
                    summary: req.body.summary,
                    link: req.body.link,
                    image: req.body.image,
                    authors: req.body.authors
                }

                console.log("Saving a new scrape...")
                console.log(scrape)

                db.Article
                    .create(scrape)
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err))
            } else {
                res.status(422).send("Unable to add scrape. Missing required data.");
            }
    },

    addComment: function (req, res) {

        console.log("comment route hit")
        
        if (req.body.user &&
            req.body.text && 
            req.params.id) {
            
            console.log("comment validation passed")

            let newComment = {
                user: req.body.user,
                text: req.body.text,
                article: req.params.id,
            };

            console.log("Adding comment...")

            db.Comment
                .create(newComment)
                .then(dbModel => db.Article.findOneAndUpdate({ _id: article }, { comment: dbModel._id }, { new: true }))
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))
        
                
        } else {
            res.status(422).send("Unable to add comment. Missing required data.");
        };
    },

    deleteArticle: function (req, res){
        
        console.log("Deleting article at" + req.params.id + " ...");

        db.Article
            .findById({ _id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    deleteComment: function (req, res){

        console.log("Deleting comment at" + req.params.id + " ...");

        db.Comment
            .findById({ _id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    findAllArticles: function (req, res) {
        
        console.log("Finding all articles...")

        db.Article
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};