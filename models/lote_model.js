var db = require('../core/db');

exports.seleccionar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_lote @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'S' },
        ]
        if (params.lote_id) {
            sqlString += ', @lote_id = @_lote_id';
            inputs.push(
                { nombre: '_lote_id', tipo: 'varchar', tamanio: 20, valor: params.lote_id }
            );
        }
        
        if (params.archivo_id) {
            sqlString += ', @archivo_id = @_archivo_id';
            inputs.push(
                { nombre: '_archivo_id', tipo: 'varchar', tamanio: 100, valor: params.archivo_id }
            );
        }
        if (params.usuario_id) {
            sqlString += ', @usuario_id = @_usuario_id';
            inputs.push(
                { nombre: '_usuario_id', tipo: 'varchar', tamanio: 100, valor: params.usuario_id }
            );
        }
        if (typeof params.procesado === 'boolean') {
            sqlString += ', @procesado = @_procesado';
            inputs.push(
                { nombre: '_procesado', tipo: 'bit', tamanio: 1, valor: (params.procesado) ? 1 : 0 }
            );
        }

        //console.log(sqlString);
        //console.log(inputs);
        // #endregion

        db.execute(cp, sqlString, inputs, null, function (data, err) {
            if (err) {
                return done(null, err);
            }
            done(data);
        });
    } catch (ex) {
        throw (ex);
    }
};

exports.borrar = function (cp, params, done) {
    try {
        return done(null, 'No se permite borrar archivos');
        var sqlString = 'EXEC spd_abcs_lote @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'B' },
        ]
        if (params.lote_id) {
            sqlString += ', @lote_id = @_lote_id';
            inputs.push(
                { nombre: '_lote_id', tipo: 'varchar', tamanio: 20, valor: params.lote_id }
            );
        }

        if (params.archivo_id) {
            sqlString += ', @archivo_id = @_archivo_id';
            inputs.push(
                { nombre: '_archivo_id', tipo: 'varchar', tamanio: 100, valor: params.archivo_id }
            );
        }
        if (params.usuario_id) {
            sqlString += ', @usuario_id = @_usuario_id';
            inputs.push(
                { nombre: '_usuario_id', tipo: 'varchar', tamanio: 100, valor: params.usuario_id }
            );
        }
        if (typeof params.procesado === 'boolean') {
            sqlString += ', @procesado = @_procesado';
            inputs.push(
                { nombre: '_procesado', tipo: 'bit', tamanio: 1, valor: (params.procesado) ? 1 : 0 }
            );
        }

        // #endregion

        db.execute(cp, sqlString, inputs, null, function (data, err) {
            if (err) {
                return done(null, err);
            }
            done(data);
        });
    } catch (ex) {
        throw (ex);
    }
};

exports.cambiar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_lote @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'C' },
        ]
        if (params.lote_id) {
            sqlString += ', @lote_id = @_lote_id';
            inputs.push(
                { nombre: '_lote_id', tipo: 'varchar', tamanio: 20, valor: params.lote_id }
            );
        }

        if (params.archivo_id) {
            sqlString += ', @archivo_id = @_archivo_id';
            inputs.push(
                { nombre: '_archivo_id', tipo: 'varchar', tamanio: 100, valor: params.archivo_id }
            );
        }
        if (params.usuario_id) {
            sqlString += ', @usuario_id = @_usuario_id';
            inputs.push(
                { nombre: '_usuario_id', tipo: 'varchar', tamanio: 100, valor: params.usuario_id }
            );
        }
        if (typeof params.procesado === 'boolean') {
            sqlString += ', @procesado = @_procesado';
            inputs.push(
                { nombre: '_procesado', tipo: 'bit', tamanio: 1, valor: (params.procesado) ? 1 : 0 }
            );
        }

        // #endregion

        db.execute(cp, sqlString, inputs, null, function (data, err) {
            if (err) {
                return done(null, err);
            }
            done(data);
        });
    } catch (ex) {
        throw (ex);
    }
};

exports.agregar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_lote @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'A' },
        ]
        if (params.lote_id) {
            sqlString += ', @lote_id = @_lote_id';
            inputs.push(
                { nombre: '_lote_id', tipo: 'varchar', tamanio: 20, valor: params.lote_id }
            );
        }

        if (params.archivo_id) {
            sqlString += ', @archivo_id = @_archivo_id';
            inputs.push(
                { nombre: '_archivo_id', tipo: 'varchar', tamanio: 100, valor: params.archivo_id }
            );
        }
        if (params.usuario_id) {
            sqlString += ', @usuario_id = @_usuario_id';
            inputs.push(
                { nombre: '_usuario_id', tipo: 'varchar', tamanio: 100, valor: params.usuario_id }
            );
        }
        if (typeof params.procesado === 'boolean') {
            sqlString += ', @procesado = @_procesado';
            inputs.push(
                { nombre: '_procesado', tipo: 'bit', tamanio: 1, valor: (params.procesado) ? 1 : 0 }
            );
        }

        // #endregion

        db.execute(cp, sqlString, inputs, null, function (data, err) {
            if (err) {
                return done(null, err);
            }
            done(data);
        });
    } catch (ex) {
        throw (ex);
    }
};

exports.procesar = function (cp, done) {
    try {
        var sqlString = 'EXEC spd_procesar_lotes';
        db.execute(cp, sqlString, null, null, function (data, err) {
            if (err) {
                return done(null, err);
            }
            done(data);
        });
    } catch (ex) {
        throw (ex);
    }
};

