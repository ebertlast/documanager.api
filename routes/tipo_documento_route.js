var app = require('..').app;
var tipo_docs = require('../models/tipo_documento_model');

try {

    app.get('/tipos_documentos/:tipo_id?', function (req, res) {
        tipo_docs.registros(req.cp, req.params, function (data, err) {
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