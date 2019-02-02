var app = require('..').app;
var serie = require('../models/serie_model');

try {

    app.get('/series/:serie_id?', function (req, res) {
        serie.seleccionar(req.cp, req.params, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.post('/series/consultar', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        serie.seleccionar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.post('/series/actualizar', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        serie.cambiar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.put('/series/nuevo', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        serie.agregar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.delete('/series/:serie_id/:tipo_id/:identificacion/:sede_id', function (req, res) {
        serie.borrar(req.cp, req.params, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

} catch (ex) {
    throw (ex);
}