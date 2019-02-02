var db = require('../core/db');

exports.seleccionar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_tipo @accion = @_accion';

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
        if (params.denominacion) {
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 100, valor: params.denominacion }
            );
        }
        if (params.consecutivo) {
            sqlString += ', @consecutivo = @_consecutivo';
            inputs.push(
                { nombre: '_consecutivo', tipo: 'int', tamanio: 0, valor: params.consecutivo }
            );
        }
        if (params.retencion_gestion) {
            sqlString += ', @retencion_gestion = @_retencion_gestion';
            inputs.push(
                { nombre: '_retencion_gestion', tipo: 'smallint', tamanio: 0, valor: params.retencion_gestion }
            );
        }
        if (params.retencion_central) {
            sqlString += ', @retencion_central = @_retencion_central';
            inputs.push(
                { nombre: '_retencion_central', tipo: 'smallint', tamanio: 0, valor: params.retencion_central }
            );
        }
        //sqlString += ', @soporte_electronico = @_soporte_electronico';
        //inputs.push(
        //    { nombre: '_soporte_electronico', tipo: 'bit', tamanio: 0, valor: (params.soporte_electronico) ? 1 : 0 }
        //);
        //sqlString += ', @soporte_fisico = @_soporte_fisico';
        //inputs.push(
        //    { nombre: '_soporte_fisico', tipo: 'bit', tamanio: 0, valor: (params.soporte_fisico) ? 1 : 0 }
        //);
        if (params.procedimiento) {
            sqlString += ', @procedimiento = @_procedimiento';
            inputs.push(
                { nombre: '_procedimiento', tipo: 'varchar', tamanio: 8000, valor: params.procedimiento }
            );
        }
        sqlString += ', @activo = @_activo';
        inputs.push(
            { nombre: '_activo', tipo: 'bit', tamanio: 0, valor: (params.activo) ? 1 : 0 }
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

exports.borrar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_tipo @accion = @_accion';

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
        var sqlString = 'EXEC spd_abcs_tipo @accion=@_accion';

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
        if (params.denominacion) {
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 100, valor: params.denominacion }
            );
        }
        if (params.consecutivo) {
            sqlString += ', @consecutivo = @_consecutivo';
            inputs.push(
                { nombre: '_consecutivo', tipo: 'int', tamanio: 0, valor: params.consecutivo }
            );
        }
        if (params.retencion_gestion) {
            sqlString += ', @retencion_gestion = @_retencion_gestion';
            inputs.push(
                { nombre: '_retencion_gestion', tipo: 'smallint', tamanio: 0, valor: params.retencion_gestion }
            );
        }
        if (params.retencion_central) {
            sqlString += ', @retencion_central = @_retencion_central';
            inputs.push(
                { nombre: '_retencion_central', tipo: 'smallint', tamanio: 0, valor: params.retencion_central }
            );
        }
        if (typeof params.soporte_electronico === 'boolean') {
            sqlString += ', @soporte_electronico = @_soporte_electronico';
            inputs.push(
                { nombre: '_soporte_electronico', tipo: 'bit', tamanio: 0, valor: (params.soporte_electronico) ? 1 : 0 }
            );
        }
        if (typeof params.soporte_fisico === 'boolean') {
            sqlString += ', @soporte_fisico = @_soporte_fisico';
            inputs.push(
                { nombre: '_soporte_fisico', tipo: 'bit', tamanio: 0, valor: (params.soporte_fisico) ? 1 : 0 }
            );
        }
        if (params.procedimiento) {
            sqlString += ', @procedimiento = @_procedimiento';
            inputs.push(
                { nombre: '_procedimiento', tipo: 'varchar', tamanio: 8000, valor: params.procedimiento }
            );
        }
        if (typeof params.activo === 'boolean') {
            sqlString += ', @activo = @_activo';
            inputs.push(
                { nombre: '_activo', tipo: 'bit', tamanio: 0, valor: (params.activo) ? 1 : 0 }
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
        var sqlString = 'EXEC spd_abcs_tipo @accion=@_accion';

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
        if (params.denominacion) {
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 100, valor: params.denominacion }
            );
        }
        if (params.consecutivo) {
            sqlString += ', @consecutivo = @_consecutivo';
            inputs.push(
                { nombre: '_consecutivo', tipo: 'int', tamanio: 0, valor: params.consecutivo }
            );
        }
        if (params.retencion_gestion) {
            sqlString += ', @retencion_gestion = @_retencion_gestion';
            inputs.push(
                { nombre: '_retencion_gestion', tipo: 'smallint', tamanio: 0, valor: params.retencion_gestion }
            );
        }
        if (params.retencion_central) {
            sqlString += ', @retencion_central = @_retencion_central';
            inputs.push(
                { nombre: '_retencion_central', tipo: 'smallint', tamanio: 0, valor: params.retencion_central }
            );
        }
        if (typeof params.soporte_electronico === 'boolean') {
            sqlString += ', @soporte_electronico = @_soporte_electronico';
            inputs.push(
                { nombre: '_soporte_electronico', tipo: 'bit', tamanio: 0, valor: (params.soporte_electronico) ? 1 : 0 }
            );
        }
        if (typeof params.soporte_fisico === 'boolean') {
            sqlString += ', @soporte_fisico = @_soporte_fisico';
            inputs.push(
                { nombre: '_soporte_fisico', tipo: 'bit', tamanio: 0, valor: (params.soporte_fisico) ? 1 : 0 }
            );
        }
        if (params.procedimiento) {
            sqlString += ', @procedimiento = @_procedimiento';
            inputs.push(
                { nombre: '_procedimiento', tipo: 'varchar', tamanio: 8000, valor: params.procedimiento }
            );
        }
        if (typeof params.activo === 'boolean') {
            sqlString += ', @activo = @_activo';
            inputs.push(
                { nombre: '_activo', tipo: 'bit', tamanio: 0, valor: (params.activo) ? 1 : 0 }
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
