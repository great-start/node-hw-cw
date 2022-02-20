
class NotFoundPageControllers {

    renderPage(req, res) {
        res.render('notFound', {message: 'Page not found'});
    }
}


module.exports = new NotFoundPageControllers();