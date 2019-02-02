var app = require('..').app;
var ususu = require('../models/usuario_model');
var jwt = require('../core/jwt');
var settings = require('../settings');
var mailer = require('../core/mailer');

try {

    app.get('/usuarios/ingresar/:usuario_id/:clave', function (req, res) {

        ususu.ingresar(req.cp, req.params, function (data, err) {
            if (err) {
                return res.status('500').send(JSON.stringify({ success: false, error: err })).end();
            } else {
                //console.log(data);
                var user = data.recordset[0];
                if (typeof (user) === "undefined") {
                    return res.status('200').send(JSON.stringify({ success: false, data: data, message: 'Datos de autenticación incorrectos' })).end();
                } else {
                    user.clave = req.params.clave;
                    var token = '';
                    if (user) {
                        token = jwt.createJWToken({ sessionData: user });
                    }
                    return res.status('200').send(JSON.stringify({ success: true, token: token, result: data })).end();
                }
            }
        });
    });

    app.post('/usuarios/cambiarclave/:clave', function (req, res) {
        if (req.user.clave !== req.params.clave) {
            return res.status('401').send(JSON.stringify({ success: false, message: 'Su clave actual no coincide con la de se cuenta. Si ha olvidado se clave, siga el enlace de su recuperación' })).end();
        } else {
            //console.log(req.user.email);
            var model = JSON.parse(req.body.json).model;
            var _model = {
                usuario_id: model.usuario_id,
                email: model.email,
                clave: model.clave,
            }
            ususu.cambiar(req.cp, _model, function (data, err) {
                if (err) {
                    return res.status('500').send(JSON.stringify({ success: false, error: err })).end();
                } else {
                    // #region Enviar Email de Confirmación
                    //console.log(_model.email, ' - ', _model.clave);
                    var mailOptions = {
                        from: settings.mailerConfig.from,
                        to: `"${req.user.nombres.toLowerCase().replace(/(^|\s)[a-z]/g, function (a) { return a.toUpperCase(); })}" <${_model.email}>`,
                        subject: `Cambio de Clave en ${settings.appName}`,
                        html: `Sus datos de usuario de ${settings.appName} han cambiado y para acceder al sistema su usuario es: <b>${req.user.usuario_id}</b> y su clave: <b>${model.clave}</b>`,
                        text: `Sus datos de usuario de ${settings.appName} han cambiado y para acceder al sistema su usuario es: ${req.user.usuario_id} y su clave: ${model.clave}`
                    };

                    mailer.sendmail(mailOptions, function (data, err) {
                        if (err) {
                            return res.status('500').send(JSON.stringify({ success: false, error: err })).end();
                        } else {

                            var user = req.user;
                            user.clave = model.clave;
                            var token = '';
                            if (user) {
                                token = jwt.createJWToken({ sessionData: user });
                            }
                            //console.log(user);
                            //console.log(token);
                            return res.status('200').send(JSON.stringify({ success: true, token: token, result: true })).end();
                        }
                    });
                    // #endregion
                }
            });

        }

        //ususu.ingresar(req.cp, req.params, function (data, err) {
        //    if (err) {
        //        res.status('500').send(JSON.stringify({ success: false, error: err }));
        //    } else {
        //        res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data }));
        //    }
        //    res.end();

        //});
    });

    app.get('/usuarios/:usuario_id?', function (req, res) {
        ususu.seleccionar(req.cp, req.params, function (data, err) {
            if (err) {
                return res.status('500').send(JSON.stringify({ success: false, error: err })).end();
            } else {
                return res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data })).end();
            }
        });
    });

    app.get('/usuarios/usuarioexiste/:usuario_id?', function (req, res) {
        ususu.seleccionar(req.cp, req.params, function (data, err) {
            if (err) {
                return res.status('500').send(JSON.stringify({ success: false, error: err })).end();
            } else {
                //console.log(data);
                return res.status('200').send(JSON.stringify({ success: true, token: req.token, result: ((data.rowsAffected * 1) > 0) })).end();
            }
        });
    });

    app.post('/usuarios/actualizar', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        ususu.cambiar(req.cp, model, function (data, err) {
            if (err) {
                return res.status('500').send(JSON.stringify({ success: false, error: err })).end();
            } else {
                return res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data })).end();
            }
        });
    });

    app.put('/usuarios/nuevo', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        model.clave = (+new Date).toString(36).slice(-10).toUpperCase();
        var email = model.email;
        var nombres = model.nombres;
        var usuario_id = model.usuario_id;
        var clave = model.clave;
        //console.log(model);
        ususu.agregar(req.cp, model, function (data, err) {
            if (err) {
                return res.status('500').send(JSON.stringify({ success: false, error: err })).end();
            } else {
                // #region Enviar Email de Confirmación
                //console.log(_model.email, ' - ', _model.clave);
                var mailOptions = {
                    from: settings.mailerConfig.from,
                    to: `"${nombres.toLowerCase().replace(/(^|\s)[a-z]/g, function (a) { return a.toUpperCase(); })}" <${email}>`,
                    subject: `Bienvenido a ${settings.appName}`,
                    html: `Su usuario para acceder al sistema es: <b>${usuario_id}</b> y su clave: <b>${clave}</b>`,
                    text: `Su usuario para acceder al sistema es: ${usuario_id} y su clave: ${clave}`,
                };
                //console.log(mailOptions);

                //var data_success = data;
                mailer.sendmail(mailOptions, function (data, err) {
                    if (err) {
                        return res.status('500').send(JSON.stringify({ success: false, error: err })).end();
                    } else {
                        return res.status('200').send(JSON.stringify({ success: true, token: req.token, result: true })).end();
                    }
                });
                // #endregion

            }
        });
    });

    app.delete('/usuarios/:usuario_id', function (req, res) {
        //console.log(req.params);
        ususu.borrar(req.cp, req.params, function (data, err) {
            if (err) {
                return res.status('500').send(JSON.stringify({ success: false, error: err })).end();
            } else {
                return res.status('200').send(JSON.stringify({ success: true, token: req.token, result: data })).end();
            }
        });
    });

} catch (ex) {
    throw (ex);
}