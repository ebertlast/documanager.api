﻿var db = require('../core/db');

exports.seleccionar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_serie @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'S' },
        ]
        if (params.serie_id) {
            sqlString += ', @serie_id = @_serie_id';
            inputs.push(
                { nombre: '_serie_id', tipo: 'varchar', tamanio: 100, valor: params.serie_id }
            );
        }
        if (params.tipo_id) {
            sqlString += ', @tipo_id = @_tipo_id';
            inputs.push(
                { nombre: '_tipo_id', tipo: 'varchar', tamanio: 2, valor: params.tipo_id }
            );
        }
        if (params.identificacion) {
            sqlString += ', @identificacion = @_identificacion';
            inputs.push(
                { nombre: '_identificacion', tipo: 'varchar', tamanio: 100, valor: params.identificacion }
            );
        }
        if (params.sede_id) {
            sqlString += ', @sede_id = @_sede_id';
            inputs.push(
                { nombre: '_sede_id', tipo: 'varchar', tamanio: 50, valor: params.sede_id }
            );
        }
        if (params.denominacion) {
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 500, valor: params.denominacion }
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
        var sqlString = 'EXEC spd_abcs_serie @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'B' },
        ]
        if (params.serie_id) {
            sqlString += ', @serie_id = @_serie_id';
            inputs.push(
                { nombre: '_serie_id', tipo: 'varchar', tamanio: 100, valor: params.serie_id }
            );
        }
        if (params.tipo_id) {
            sqlString += ', @tipo_id = @_tipo_id';
            inputs.push(
                { nombre: '_tipo_id', tipo: 'varchar', tamanio: 2, valor: params.tipo_id }
            );
        }
        if (params.identificacion) {
            sqlString += ', @identificacion = @_identificacion';
            inputs.push(
                { nombre: '_identificacion', tipo: 'varchar', tamanio: 100, valor: params.identificacion }
            );
        }
        if (params.sede_id) {
            sqlString += ', @sede_id = @_sede_id';
            inputs.push(
                { nombre: '_sede_id', tipo: 'varchar', tamanio: 50, valor: params.sede_id }
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
        var sqlString = 'EXEC spd_abcs_serie @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'C' },
        ]
        if (params.serie_id) {
            sqlString += ', @serie_id = @_serie_id';
            inputs.push(
                { nombre: '_serie_id', tipo: 'varchar', tamanio: 100, valor: params.serie_id }
            );
        }
        if (params.tipo_id) {
            sqlString += ', @tipo_id = @_tipo_id';
            inputs.push(
                { nombre: '_tipo_id', tipo: 'varchar', tamanio: 2, valor: params.tipo_id }
            );
        }
        if (params.identificacion) {
            sqlString += ', @identificacion = @_identificacion';
            inputs.push(
                { nombre: '_identificacion', tipo: 'varchar', tamanio: 100, valor: params.identificacion }
            );
        }
        if (params.sede_id) {
            sqlString += ', @sede_id = @_sede_id';
            inputs.push(
                { nombre: '_sede_id', tipo: 'varchar', tamanio: 50, valor: params.sede_id }
            );
        }
        if (params.denominacion) {
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 500, valor: params.denominacion }
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
        var sqlString = 'EXEC spd_abcs_serie @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'A' },
        ]
        if (params.serie_id) {
            sqlString += ', @serie_id = @_serie_id';
            inputs.push(
                { nombre: '_serie_id', tipo: 'varchar', tamanio: 100, valor: params.serie_id }
            );
        }
        if (params.tipo_id) {
            sqlString += ', @tipo_id = @_tipo_id';
            inputs.push(
                { nombre: '_tipo_id', tipo: 'varchar', tamanio: 2, valor: params.tipo_id }
            );
        }
        if (params.identificacion) {
            sqlString += ', @identificacion = @_identificacion';
            inputs.push(
                { nombre: '_identificacion', tipo: 'varchar', tamanio: 100, valor: params.identificacion }
            );
        }
        if (params.sede_id) {
            sqlString += ', @sede_id = @_sede_id';
            inputs.push(
                { nombre: '_sede_id', tipo: 'varchar', tamanio: 50, valor: params.sede_id }
            );
        }
        if (params.denominacion) {
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 500, valor: params.denominacion }
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
