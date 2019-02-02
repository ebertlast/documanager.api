var app = require('..').app;
var tablas = require('../models/tabla_generica_model');

try {

    // #region Gets
    app.get('/tablas/tablas/:tabla?', function (req, res) {
        tablas.seleccionar(req.cp, req.params, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.get('/tablas/campos/:tabla/:campo?', function (req, res) {
        tablas.seleccionar(req.cp, req.params, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.get('/tablas/codigos/:tabla/:campo/:codigo?', function (req, res) {
        tablas.seleccionar(req.cp, req.params, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.get('/tablas/solotablas', function (req, res) {
        tablas.tablas(req.cp, req.user, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.get('/tablas/solocampos/:tabla', function (req, res) {
        params = {
            grupo_id: req.user.grupo_id,
            tabla: req.params.tabla
        }
        tablas.campos(req.cp, params, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.get('/tablas/solocodigos/:tabla/:campo', function (req, res) {
        params = {
            grupo_id: req.user.grupo_id,
            tabla: req.params.tabla,
            campo: req.params.campo
        }
        tablas.campos(req.cp, params, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });
    // #endregion

    app.post('/tablas/consultar', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        model.grupo_id = req.user.grupo_id;
        tablas.seleccionar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.post('/tablas/actualizar', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        tablas.cambiar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.put('/tablas/nuevo', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        model.grupo_id = req.user.grupo_id;
        tablas.agregar(req.cp, model, function (data, err) {
            if (err) {
                res.status('500').send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.delete('/tablas/:tabla/:campo/:codigo', function (req, res) {
        req.params.grupo_id = req.user.grupo_id;
        tablas.borrar(req.cp, req.params, function (data, err) {
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