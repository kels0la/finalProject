module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index", {});
    });
    app.get("/bitcoin-story", function(req, res) {
        res.render("bitcoinStory", {});
    });
    app.get("*", function(req, res) {
        res.render("404");
      });
};