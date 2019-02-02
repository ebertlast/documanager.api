var sqlDb = require('mssql');
var settings = require('../settings');

exports.connect = function () {
    return (async function () {
        try {
            var pool = await sqlDb.connect(settings.dbConfig);
            return pool;
        } catch (err) {
            throw (err);
        }
    })();
}

exports.query = function (cp, sql, callback) {
    (async function () {
        try {
            //console.log("sql connecting......")
            //var pool = await sqlDb.connect(settings.dbConfig);
            //var result = await pool.request().query(sql);
            var request = await new sqlDb.Request(cp);
            var result = await request.query(sql);
            callback(result);
            //console.log(result)
        } catch (err) {
            callback(null, err);
        } finally {
            if (sqlDb) {
                sqlDb.close();
            }
        }
    })()
}

exports.execute = function (_cp, _sql, _inputs, _outputs, callback) {

    (async function () {
        try {

            //var pool = await sqlDb.connect(settings.dbConfig);
            //var pool = _conn;
            //var request = await pool.request();
            var request = await new sqlDb.Request(_cp);

            // #region Entradas
            if (_inputs && _inputs.length > 0) {
                _inputs.forEach(function (item, index, array) {
                    //console.log(item, index);
                    //console.log(`${item.nombre} - ${item.tipo} - ${item.tamanio} - ${item.valor}`);
                    switch (item.tipo.toUpperCase()) {
                        case 'BIT':
                            request.input(item.nombre, sqlDb.Bit, item.valor);
                            break;
                        case 'SMALLINT':
                            request.input(item.nombre, sqlDb.SmallInt, item.valor);
                            break;
                        case 'VARBINARY':
                            request.input(item.nombre, sqlDb.VarBinary, item.valor);
                            break;
                        case 'BIGINT':
                            request.input(item.nombre, sqlDb.BigInt, item.valor);
                            break;
                        case 'INT':
                            request.input(item.nombre, sqlDb.Int, item.valor);
                            break;
                        case 'CHAR':
                            request.input(item.nombre, sqlDb.Char(item.tamanio), item.valor);
                            break;
                        case 'DECIMAL':
                            request.input(item.nombre, sqlDb.Decimal(item.tamanio,2), item.valor);
                            break;
                        case 'DATETIME':
                            request.input(item.nombre, sqlDb.DateTime, item.valor);
                            break;
                        case 'DATE':
                            request.input(item.nombre, sqlDb.Date, item.valor);
                            break;
                        case 'TIME':
                            request.input(item.nombre, sqlDb.Time, item.valor);
                            break;
                        case 'DATETIME2':
                            request.input(item.nombre, sqlDb.DateTime2, item.valor);
                            break;
                        default:
                            request.input(item.nombre, sqlDb.VarChar(item.tamanio), item.valor);
                    }
                });
            }
            // #endregion

            // #region Salidas
            if (_outputs) {
                _outputs.forEach(function (item, index, array) {
                    switch (item.tipo) {
                        case 'BIT':
                            request.input(item.nombre, sqlDb.Bit, item.valor);
                            break;
                        case 'SMALLINT':
                            request.input(item.nombre, sqlDb.SmallInt, item.valor);
                            break;
                        case 'VARBINARY':
                            request.input(item.nombre, sqlDb.VarBinary, item.valor);
                            break;
                        case 'BIGINT':
                            request.input(item.nombre, sqlDb.BigInt, item.valor);
                            break;
                        case 'INT':
                            request.input(item.nombre, sqlDb.Int, item.valor);
                            break;
                        case 'CHAR':
                            request.input(item.nombre, sqlDb.Char(item.tamanio), item.valor);
                            break;
                        case 'DECIMAL':
                            request.input(item.nombre, sqlDb.Decimal(item.tamanio, 2), item.valor);
                            break;
                        case 'DATETIME':
                            request.input(item.nombre, sqlDb.DateTime, item.valor);
                            break;
                        case 'DATE':
                            request.input(item.nombre, sqlDb.Date, item.valor);
                            break;
                        case 'TIME':
                            request.input(item.nombre, sqlDb.Time, item.valor);
                            break;
                        case 'DATETIME2':
                            request.input(item.nombre, sqlDb.DateTime2, item.valor);
                            break;
                        default:
                            request.output(item.nombre, sqlDb.VarChar(item.tamanio), item.valor);
                    }
                });
            }
            // #endregion

            var result = await request.query(_sql);
            callback(result);
        } catch (err) {
            //console.log(err);
            callback(null, err);
        }
        //finally {
        //    if (sqlDb) {
        //        sqlDb.close();
        //    }
        //}
    })()
}

sqlDb.on('error', err => {
    throw (err);
})