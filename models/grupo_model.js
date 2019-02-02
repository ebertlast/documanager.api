var db = require('../core/db');

exports.seleccionar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_grupo @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'S' },
        ]
        if (params.grupo_id) {
            sqlString += ', @grupo_id = @_grupo_id';
            inputs.push(
                { nombre: '_grupo_id', tipo: 'varchar', tamanio: 20, valor: params.grupo_id }
            );
        }
        if (params.denominacion) {
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 200, valor: params.denominacion }
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
                { nombre: '_sede_id', tipo: 'varchar', tamanio: 100, valor: params.sede_id }
            );
        }
        //sqlString += ', @activo = @_activo';
        //inputs.push(
        //    { nombre: '_activo', tipo: 'bit', tamanio: 100, valor: (params.activo) ? 1 : 0 }
        //);
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
        var sqlString = 'EXEC spd_abcs_grupo @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'B' },
        ]
        if (params.grupo_id) {
            sqlString += ', @grupo_id = @_grupo_id';
            inputs.push(
                { nombre: '_grupo_id', tipo: 'varchar', tamanio: 20, valor: params.grupo_id }
            );
        }
        //if (params.denominacion) {
        //    sqlString += ', @denominacion = @_denominacion';
        //    inputs.push(
        //        { nombre: '_denominacion', tipo: 'varchar', tamanio: 200, valor: params.denominacion }
        //    );
        //}
        //if (params.tipo_id) {
        //    sqlString += ', @tipo_id = @_tipo_id';
        //    inputs.push(
        //        { nombre: '_tipo_id', tipo: 'varchar', tamanio: 2, valor: params.tipo_id }
        //    );
        //}
        //if (params.identificacion) {
        //    sqlString += ', @identificacion = @_identificacion';
        //    inputs.push(
        //        { nombre: '_identificacion', tipo: 'varchar', tamanio: 100, valor: params.identificacion }
        //    );
        //}
        //if (params.sede_id) {
        //    sqlString += ', @sede_id = @_sede_id';
        //    inputs.push(
        //        { nombre: '_sede_id', tipo: 'varchar', tamanio: 100, valor: params.sede_id }
        //    );
        //}
        //sqlString += ', @activo = @_activo';
        //inputs.push(
        //    { nombre: '_activo', tipo: 'bit', tamanio: 100, valor: (params.activo) ? 1 : 0 }
        //);
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
        var sqlString = 'EXEC spd_abcs_grupo @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'C' },
        ]
        if (params.grupo_id) {
            sqlString += ', @grupo_id = @_grupo_id';
            inputs.push(
                { nombre: '_grupo_id', tipo: 'varchar', tamanio: 20, valor: params.grupo_id }
            );
        }
        if (params.denominacion) {
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 200, valor: params.denominacion }
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
                { nombre: '_sede_id', tipo: 'varchar', tamanio: 100, valor: params.sede_id }
            );
        }
        sqlString += ', @activo = @_activo';
        inputs.push(
            { nombre: '_activo', tipo: 'bit', tamanio: 100, valor: (params.activo) ? 1 : 0 }
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
        var sqlString = 'EXEC spd_abcs_grupo @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'A' },
        ]
        if (params.grupo_id) {
            sqlString += ', @grupo_id = @_grupo_id';
            inputs.push(
                { nombre: '_grupo_id', tipo: 'varchar', tamanio: 20, valor: params.grupo_id }
            );
        }
        if (params.denominacion) {
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 200, valor: params.denominacion }
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
                { nombre: '_sede_id', tipo: 'varchar', tamanio: 100, valor: params.sede_id }
            );
        }
        sqlString += ', @activo = @_activo';
        inputs.push(
            { nombre: '_activo', tipo: 'bit', tamanio: 100, valor: (params.activo) ? 1 : 0 }
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
