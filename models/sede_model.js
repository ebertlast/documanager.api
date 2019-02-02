var db = require('../core/db');

exports.seleccionar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_sede @accion = @_accion';

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

exports.borrar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_sede @accion = @_accion';

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
        var sqlString = 'EXEC spd_abcs_sede @accion=@_accion';

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
        if (params.sede_id) {
            sqlString += ', @sede_id = @_sede_id';
            inputs.push(
                { nombre: '_sede_id', tipo: 'varchar', tamanio: 50, valor: params.sede_id }
            );
        }
        if (params.razon_social) {
            sqlString += ', @razon_social = @_razon_social';
            inputs.push(
                { nombre: '_razon_social', tipo: 'varchar', tamanio: 256, valor: params.razon_social }
            );
        }
        // console.log(params.activa);
        // if (params.activa) {
        sqlString += ', @activa = @_activa';
        inputs.push(
            { nombre: '_activa', tipo: 'bit', tamanio: 1, valor: (params.activa) ? 1 : 0 }
        );
        // }

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
        var sqlString = 'EXEC spd_abcs_sede @accion=@_accion';

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
        if (params.sede_id) {
            sqlString += ', @sede_id = @_sede_id';
            inputs.push(
                { nombre: '_sede_id', tipo: 'varchar', tamanio: 50, valor: params.sede_id }
            );
        }
        if (params.razon_social) {
            sqlString += ', @razon_social = @_razon_social';
            inputs.push(
                { nombre: '_razon_social', tipo: 'varchar', tamanio: 256, valor: params.razon_social }
            );
        }
        //if (params.activa) {
            sqlString += ', @activa = @_activa';
            inputs.push(
                { nombre: '_activa', tipo: 'bit', tamanio: 1, valor: (params.activa) ? 1 : 0  }
            );
        //}
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
