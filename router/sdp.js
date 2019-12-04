module.exports = function(app, db) {

    app.get('/expiredAuth', function (req, res) {
        return res.status(400).send({error: 'auth is expired'});
    });

    app.post('/test/initservices', function(req, res){
        var err = {
            code: 500,
            text: 'Internal Error'
        };

        var data = db.read('./model/data.json');
        var httpCode = 200;

        if(data) {
            return res.status(200).send(JSON.parse(data));
        } else {
            err
            return res.status(500).send(err);
        }
    });
}
