var db = require('../core/db');

exports.seleccionar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_convencion @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'S' },
        ]
        if (params.convencion_id) {
            sqlString += ', @convencion_id = @_convencion_id';
            inputs.push(
                { nombre: '_convencion_id', tipo: 'varchar', tamanio: 2, valor: params.convencion_id }
            );
        }
        if (params.denominacion) {
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 100, valor: params.denominacion }
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
        var sqlString = 'EXEC spd_abcs_convencion @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'B' },
        ]
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
        var sqlString = 'EXEC spd_abcs_convencion @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'C' },
        ]
        if (params.convencion_id) {
            sqlString += ', @convencion_id = @_convencion_id';
            inputs.push(
                { nombre: '_convencion_id', tipo: 'varchar', tamanio: 2, valor: params.convencion_id }
            );
        }
        if (params.denominacion) {
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 100, valor: params.denominacion }
            );
        }
        sqlString += ', @activo = @_activo';
        inputs.push(
            { nombre: '_activo', tipo: 'bit', tamanio: 1, valor: (params.activo) ? 1 : 0 }
        );
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
        var sqlString = 'EXEC spd_abcs_convencion @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'A' },
        ]
        if (params.convencion_id) {
            sqlString += ', @convencion_id = @_convencion_id';
            inputs.push(
                { nombre: '_convencion_id', tipo: 'varchar', tamanio: 2, valor: params.convencion_id }
            );
        }
        if (params.denominacion) {
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 100, valor: params.denominacion }
            );
        }
        sqlString += ', @activo = @_activo';
        inputs.push(
            { nombre: '_activo', tipo: 'bit', tamanio: 1, valor: (params.activo) ? 1 : 0 }
        );
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
