var app = require('..').app;
var tercero = require('../models/tercero_model');

try {

    app.get('/terceros/:tipo_id?', function (req, res) {
        tercero.seleccionar(req.cp, req.params, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.get('/terceros/poridentificacion/:tipo_id/:identificacion?', function (req, res) {
        tercero.seleccionar(req.cp, req.params, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.post('/terceros/actualizar', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        tercero.cambiar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.put('/terceros/nuevo', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        tercero.agregar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.delete('/terceros/:tipo_id/:identificacion', function (req, res) {
        tercero.borrar(req.cp, req.params, function (data, err) {
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