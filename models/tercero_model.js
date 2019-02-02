var db = require('../core/db');

exports.seleccionar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_tercero @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'S' },
        ]
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
        var sqlString = 'EXEC spd_abcs_tercero @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'B' },
        ]
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
        var sqlString = 'EXEC spd_abcs_tercero @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'C' },
        ]
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
        if (params.razon_social) {
            sqlString += ', @razon_social = @_razon_social';
            inputs.push(
                { nombre: '_razon_social', tipo: 'varchar', tamanio: 256, valor: params.razon_social }
            );
        }
        if (params.direccion) {
            sqlString += ', @direccion = @_direccion';
            inputs.push(
                { nombre: '_direccion', tipo: 'varchar', tamanio: 500, valor: params.direccion }
            );
        }
        if (params.email) {
            sqlString += ', @email = @_email';
            inputs.push(
                { nombre: '_email', tipo: 'varchar', tamanio: 150, valor: params.email }
            );
        }
        if (params.telefono) {
            sqlString += ', @telefono = @_telefono';
            inputs.push(
                { nombre: '_telefono', tipo: 'varchar', tamanio: 50, valor: params.telefono }
            );
        }
        if (params.logo) {
            sqlString += ', @logo = @_logo';
            inputs.push(
                { nombre: '_logo', tipo: 'varchar', tamanio: 8000, valor: params.logo }
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
        var sqlString = 'EXEC spd_abcs_tercero @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'A' },
        ]
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
        if (params.razon_social) {
            sqlString += ', @razon_social = @_razon_social';
            inputs.push(
                { nombre: '_razon_social', tipo: 'varchar', tamanio: 256, valor: params.razon_social }
            );
        }
        if (params.direccion) {
            sqlString += ', @direccion = @_direccion';
            inputs.push(
                { nombre: '_direccion', tipo: 'varchar', tamanio: 500, valor: params.direccion }
            );
        }
        if (params.email) {
            sqlString += ', @email = @_email';
            inputs.push(
                { nombre: '_email', tipo: 'varchar', tamanio: 150, valor: params.email }
            );
        }
        if (params.telefono) {
            sqlString += ', @telefono = @_telefono';
            inputs.push(
                { nombre: '_telefono', tipo: 'varchar', tamanio: 50, valor: params.telefono }
            );
        }
        if (params.logo) {
            sqlString += ', @logo = @_logo';
            inputs.push(
                { nombre: '_logo', tipo: 'varchar', tamanio: 8000, valor: params.logo }
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
