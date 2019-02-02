var db = require('../core/db');

exports.seleccionar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_disposicion @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'S' },
        ]
        if (params.tipo_id) {
            sqlString += ', @tipo_id = @_tipo_id';
            inputs.push(
                { nombre: '_tipo_id', tipo: 'varchar', tamanio: 100, valor: params.tipo_id }
            );
        }
        if (params.consecutivo) {
            sqlString += ', @consecutivo = @_consecutivo';
            inputs.push(
                { nombre: '_consecutivo', tipo: 'int', tamanio: 0, valor: params.consecutivo }
            );
        }
        if (params.convencion_id) {
            sqlString += ', @convencion_id = @_convencion_id';
            inputs.push(
                { nombre: '_convencion_id', tipo: 'varchar', tamanio: 2, valor: params.convencion_id }
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

exports.borrar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_disposicion @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'B' },
        ]
        if (params.tipo_id) {
            sqlString += ', @tipo_id = @_tipo_id';
            inputs.push(
                { nombre: '_tipo_id', tipo: 'varchar', tamanio: 100, valor: params.tipo_id }
            );
        }
        if (params.consecutivo) {
            sqlString += ', @consecutivo = @_consecutivo';
            inputs.push(
                { nombre: '_consecutivo', tipo: 'int', tamanio: 0, valor: params.consecutivo }
            );
        }
        if (params.convencion_id) {
            sqlString += ', @convencion_id = @_convencion_id';
            inputs.push(
                { nombre: '_convencion_id', tipo: 'varchar', tamanio: 2, valor: params.convencion_id }
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
        var sqlString = 'EXEC spd_abcs_disposicion @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'C' },
        ]
        if (params.tipo_id) {
            sqlString += ', @tipo_id = @_tipo_id';
            inputs.push(
                { nombre: '_tipo_id', tipo: 'varchar', tamanio: 100, valor: params.tipo_id }
            );
        }
        if (params.consecutivo) {
            sqlString += ', @consecutivo = @_consecutivo';
            inputs.push(
                { nombre: '_consecutivo', tipo: 'int', tamanio: 0, valor: params.consecutivo }
            );
        }
        if (params.convencion_id) {
            sqlString += ', @convencion_id = @_convencion_id';
            inputs.push(
                { nombre: '_convencion_id', tipo: 'varchar', tamanio: 2, valor: params.convencion_id }
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
        var sqlString = 'EXEC spd_abcs_disposicion @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'A' },
        ]
        if (params.tipo_id) {
            sqlString += ', @tipo_id = @_tipo_id';
            inputs.push(
                { nombre: '_tipo_id', tipo: 'varchar', tamanio: 100, valor: params.tipo_id }
            );
        }
        if (params.consecutivo) {
            sqlString += ', @consecutivo = @_consecutivo';
            inputs.push(
                { nombre: '_consecutivo', tipo: 'int', tamanio: 0, valor: params.consecutivo }
            );
        }
        if (params.convencion_id) {
            sqlString += ', @convencion_id = @_convencion_id';
            inputs.push(
                { nombre: '_convencion_id', tipo: 'varchar', tamanio: 2, valor: params.convencion_id }
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
