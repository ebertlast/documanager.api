var app = require('..').app;
var archivo = require('../models/archivo_model');
var settings = require('../settings');
var fs = require('fs');
//var hummus = require('hummus');

//var urlBase = settings.urlDirArchivos;
//var directorio = (+new Date).toString(36).slice(-10).toUpperCase(); // Directorio raíz donde se suben todos los archivos

try {
    app.get('/archivos/download/:dir/:nombre', function (req, res) {
        var filePath = settings.urlDirArchivos + req.params.dir + '\\' + req.params.nombre;
        res.sendFile(filePath);
    });

    app.get('/archivos/:archivo_id?', function (req, res) {
        archivo.seleccionar(req.cp, req.params, function (data, err) {
            if (err) {
                res.status(500).send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status(200).send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.get('/archivos/lote/:lote_id?', function (req, res) {
        archivo.seleccionar(req.cp, req.params, function (data, err) {
            if (err) {
                res.status(500).send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status(200).send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.get('/archivos/cantidad/:que/:cuales', function (req, res) {
        req.params.grupo_id = req.user.grupo_id;
        archivo.cantidad(req.cp, req.params, function (data, err) {
            if (err) {
                res.status(500).send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status(200).send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.post('/archivos/actualizar', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        archivo.cambiar(req.cp, model, function (data, err) {
            if (err) {
                res.status(500).send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status(200).send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.post('/archivos/consultar', function (req, res) {
        var params = JSON.parse(req.body.json).params;
        //console.log(params);
        archivo.consultar(req.cp, params, function (data, err) {
            if (err) {
                res.status(500).send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status(200).send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.put('/archivos/nuevo', function (req, res) {
        var model = JSON.parse(req.body.json).model;
        archivo.agregar(req.cp, model, function (data, err) {
            if (err) {
                res.status(500).send(JSON.stringify({ success: false, error: err }));
            } else {
                res.status(200).send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    app.delete('/archivos/:archivo_id', function (req, res) {
        archivo.borrar(req.cp, req.params, function (data, err) {
            if (err) {
                return res.status(500).send(JSON.stringify({ success: false, error: err }));
            } else {
                return res.status(200).send(JSON.stringify({ success: true, token: req.token, result: data }));
            }
            res.end();
        });
    });

    var mover_archivo = function (urlBase, directorio, archivo, done) {
        var pdfPath = urlBase + directorio + '\\' + archivo.name;
        archivo.mv(pdfPath, function (err) {
            if (err) {
                return done(null, err);
            }

            //const pdfReader = hummus.createReader(pdfPath);
            const stats = fs.statSync(pdfPath);

            var file = {
                archivo_id: (+new Date).toString(36).slice(-10).toUpperCase(),
                nombre: archivo.name,
                paginas: 0,//pdfReader.getPagesCount(),
                peso: stats.size,
                tipo: archivo.mimetype,
                directorio: directorio,
                lote_id: directorio,
            };

            return done(file);

        });
    }

    app.post('/archivos/cargar', function (req, res) {
        //console.log(req.files);

        if (!req.files) {
            return res.status(400).send(JSON.stringify({
                success: false, error: 'Ningún archivo fue cargado.'
            }));
        }

        var files = req.files['files[]']; // Archivos enviados para subir
        var urlBase = settings.urlDirArchivos; // Directorio raíz donde se suben todos los archivos
        var directorio = (+new Date).toString(36).slice(-10).toUpperCase(); // Buscamos un nombre para el nuevo directorio que será el numero de lote

        fs.mkdirSync(urlBase + directorio); // Creamos el directorio
        if (!files.length) { // Si es un solo archivo
            //console.log(files);
            mover_archivo(urlBase, directorio, files, function (data, err) { // Mover el único archivo que hay
                if (err) {
                    return res.status(500).send(JSON.stringify({ success: false, error: err })).end();
                }
                var _archivo = data; // Datos relevantes del archivo para ser registrados en la base de datos
                _archivo.usuario_id = req.user.usuario_id; // Firmar el registro de quien esta subiendolo
                archivo.agregar(req.cp, _archivo, function (data, err) { // Registrarlo en la Base de Datos
                    if (err) { // Notificar el error
                        return res.status(500).send(JSON.stringify({ success: false, error: err })).end();
                    } else { // Notificar el éxito
                        return res.status(200).send(JSON.stringify({ success: true, token: req.token, result: true })).end();
                    }
                });
            })
        } else { // Para multiples archivos
            var aux = 1;
            for (var i = 0; i < files.length; i++) {
                mover_archivo(urlBase, directorio, files[i], function (data, err) { // Mover el archivo que sigue
                    if (err) {
                        return res.status(500).send(JSON.stringify({ success: false, error: err })).end();
                    }
                    var _archivo = data; // Datos relevantes del archivo para ser registrados en la base de datos
                    _archivo.usuario_id = req.user.usuario_id; // Firmar el registro de quien esta subiendolo
                    archivo.agregar(req.cp, _archivo, function (data, err) { // Agregar el archivo a la BD ya movido a su directorio
                        if (err) {
                            return res.status(500).send(JSON.stringify({ success: false, error: err })).end();
                        } else {
                            if (aux++ === files.length) { // Si se han subido todos los archivos se envía la confirmación
                                return res.status(200).send(JSON.stringify({ success: true, token: req.token, result: true })).end();
                            }
                            //console.log(`${aux} === ${files.length}`);
                        }
                    });
                })
            }
        }
    });


} catch (ex) {
    throw (ex);
}