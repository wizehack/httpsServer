module.exports = function(app, sdpModel) {

    app.get('/expiredAuth', function (req, res) {
        return res.status(400).send({error: 'auth is expired'});
    });

    app.post('/test/initservices', function(req, res){
        var data = sdpModel.initservices();
        return res.status(200).send(data);
    });
}
