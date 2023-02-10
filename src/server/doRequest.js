function getArticle(req, res) {
    textapi.sentiment({
            url: req.body.url
        },
        function(error, response) {
            res.send(response);
        }
    );
}

exports.getArticle = getArticle;