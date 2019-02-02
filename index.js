'use strict';

try {
    // #region Exigencias Varias
    var express = require('express'); // Servidor rápido express https://www.npmjs.com/package/express
    var settings = require('./settings'); // Configuraciones del proyecto
    var jwt = require('./core/jwt'); //Json Web Tokens https://www.npmjs.com/package/jsonwebtoken
    var bodyParser = require('body-parser'); // Convertir a objetos json lo que envían por el Body https://www.npmjs.com/package/body-parser
    var cors = require('cors')  // Compartición de Recursos entre Diferentes Orígenes - Cross-Origin Resource Sharing (CORS) https://www.npmjs.com/package/cors
    var sql = require('mssql'); // Base de datos https://www.npmjs.com/package/mssql
    const fileUpload = require('express-fileupload'); // Subida de archivos https://www.npmjs.com/package/express-fileupload
    // #endregion

    // #region Construir express y publicarlo
    var app = express();
    exports.app = app;
    // #endregion

    // #region Construir Pool de conexiones SQL
    var cp = new sql.ConnectionPool(settings.dbConfig); // Para tener una solo pool de conexiones a SQL Server
    // #endregion

    // #region Convertir a objetos json todo lo que llega por el body a traves de http
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    // #endregion

    app.use(fileUpload());

    // #region Headers Permitidos
    app.use(cors());
    //app.use(function (req, res, next) {

    //    // Website you wish to allow to connect
    //    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    //    res.setHeader('Access-Control-Allow-Origin', '*');

    //    // Request methods you wish to allow
    //    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    //    // Request headers you wish to allow
    //    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    //    //res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, authorization');
    //    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    //    //res.setHeader('Access-Control-Request-Headers', 'authorization')
    //    // Set to true if you need the website to include cookies in the requests sent
    //    // to the API (e.g. in case you use sessions)
    //    res.setHeader('Access-Control-Allow-Credentials', true);

    //    // Pass to next layer of middleware
    //    next();
    //});
    // #endregion

    // #region Middleware
    app.use(function (req, res, next) {
        var supervisar = true;
        req.cp = cp;
        if (req.originalUrl.indexOf('/usuarios/ingresar/') !== -1) {
            supervisar = false;
        }
        //if (req.originalUrl.indexOf('/archivos/subidos/') !== -1) {
        //    supervisar = false;
        //}
        var token = (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') ? req.headers.authorization.split(' ')[1] : '';
        //supervisar = false;
        if (supervisar) {
            if (token === '') {
                res
                    .status(403)
                    .json({ success: false, logout: true, message: "Token de autenticacion no proporcionado. Debes iniciar sesion." })
                    .end()
                    ;
            } else {
                jwt.verifyJWTToken(token)
                    .then((decodedToken) => {
                        req.user = decodedToken.data;
                        req.token = jwt.createJWToken({ sessionData: req.user });
                        next();
                    })
                    .catch((err) => {
                        console.log(err);
                        res
                            .status(403)
                            .json({ success: false, logout: true, message: `Vuelve a iniciar sesion. ${err}`, logout: true });
                    });
            }
        }
        else {
            next();
        }
    });
    // #endregion

    // #region Rutas
    require('./routes');
    // #endregion
    
    //app.get('/archivos/download/:directorio/:archivo_id', function (req, res) {
    //    var filePath = __dirname + "\\test.pdf";
    //    filePath = settings.urlDirArchivos + req.directorio + '\\' + req.archivo_id;
    //    console.log(filePath);
    //    res.sendFile(filePath);

    //    //fs.readFile(__dirname + filePath, function (err, data) {
    //    //    if (err) {
    //    //        console.log(err);
    //    //    }
    //    //    //res.contentType("application/pdf");
    //    //    //res.setHeader('Content-Disposition', 'inline;filename="sample.pdf"');
    //    //    ////res.attachment('filename="ebert.pdf"')
    //    //    //res.send(data);

    //    //});
    //});

    // #region B O R R A R
    //var hummus = require('hummus');
    //var pdfPath = __dirname + '/test.pdf';
    ////pdfPath = __dirname + '/archivos/subidos/jcqaump6/Psico-Cibernetica (Maxwell Maltz).pdf';
    //var pdfReader = hummus.createReader(pdfPath);
    //var paginas = pdfReader.getPagesCount();
    //console.log(paginas);
    //console.log(pdfReader.toPDFStream());

    var fs = require('fs');
    //const stats = fs.statSync(pdfPath)
    //var peso = stats.size
    //console.log(peso);


    // #endregion


    // #region Conectar a SQL Server y Montar el Servidor
    cp.connect()
        .then(function () {
            app.listen(settings.webPort, function () {
                console.log(`Servidor NodeJS escuchando el puerto ${settings.webPort}`);
            });
        })
        .catch(function (err) {
            console.error('Error creating connection pool', err);
        });
    // #endregion

} catch (ex) {
    console.log(ex);
}