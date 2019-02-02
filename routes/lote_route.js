var app = require('..').app;
var lote = require('../models/lote_model');

try {
    app.get('/lotes/sinprocesar/:usuario_id?', function (req, res) {
        req.params.procesado = false;
        if (!req.params.usuario_id) {
            req.params.usuario_id = req.user.usuario_id;
        }
        //console.log('ebert');
        //console.log(req.params);

        lote.seleccionar(req.cp, req.params, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.get('/lotes/:lote_id?', function (req, res) {
        lote.seleccionar(req.cp, req.params, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });
    
    app.post('/lotes/actualizar', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        lote.cambiar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.post('/lotes/procesar', function (req, res) {
        lote.procesar(req.cp, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.put('/lotes/nuevo', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        lote.agregar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.delete('/lotes/:lote_id', function (req, res) {
        lote.borrar(req.cp, req.params, function (data, err) {
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