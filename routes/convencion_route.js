var app = require('..').app;
var convencion = require('../models/convencion_model');

try {

    app.post('/convenciones/consultar', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        convencion.seleccionar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.post('/convenciones/actualizar', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        convencion.cambiar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.put('/convenciones/nuevo', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        convencion.agregar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.delete('/convenciones/:convencion_id', function (req, res) {
        convencion.borrar(req.cp, req.params, function (data, err) {
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