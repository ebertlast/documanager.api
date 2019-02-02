exports.dbConfig = {
    server: 'DESKTOP-IL7UVNG',
    database: 'documanager',
    user: 'sa',
    password: '123456',
    port: 1433
};

exports.mailerConfig = {
    service: 'Gmail',
    from: '"Ebert Zerpa" <ebertunerg@gmail.com>',
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
        user: 'ebertunerg@gmail.com',
        pass: '123Enclave.21978'
    }
}

exports.webPort = 3000;//process.env.PORT || 9000;
exports.appName = 'Documanager';

exports.urlDirArchivos = __dirname + '\\archivos\\subidos\\';

exports.JWT_secret = 'd0CuM4NaG3r';
exports.JWT_maxAge = 3600;
exports.JWT_algorithm = 'HS256';