var db = require('../core/db');

exports.seleccionar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_tabla_generica @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'S' },
        ]
        if (params.tabla) {
            sqlString += ', @tabla = @_tabla';
            inputs.push(
                { nombre: '_tabla', tipo: 'varchar', tamanio: 20, valor: params.tabla }
            );
        }
        if (params.campo) {
            sqlString += ', @campo = @_campo';
            inputs.push(
                { nombre: '_campo', tipo: 'varchar', tamanio: 20, valor: params.campo }
            );
        }
        if (params.codigo) {
            sqlString += ', @codigo = @_codigo';
            inputs.push(
                { nombre: '_codigo', tipo: 'varchar', tamanio: 20, valor: params.codigo }
            );
        }
        if (params.dato) {
            sqlString += ', @dato = @_dato';
            inputs.push(
                { nombre: '_dato', tipo: 'varchar', tamanio: 8000, valor: params.dato }
            );
        }
        if (params.observacion) {
            sqlString += ', @observacion = @_observacion';
            inputs.push(
                { nombre: '_observacion', tipo: 'varchar', tamanio: 8000, valor: params.observacion }
            );
        }
        if (params.cantidad) {
            sqlString += ', @cantidad = @_cantidad';
            inputs.push(
                { nombre: '_cantidad', tipo: 'int', tamanio: 0, valor: params.cantidad }
            );
        }
        if (params.valor) {
            sqlString += ', @valor = @_valor';
            inputs.push(
                { nombre: '_valor', tipo: 'decimal', tamanio: 14, valor: params.valor }
            );
        }
        if (params.grupo_id) {
            sqlString += ', @grupo_id = @_grupo_id';
            inputs.push(
                { nombre: '_grupo_id', tipo: 'varchar', tamanio: 20, valor: params.grupo_id }
            );
        }
        if (params.tipo) {
            sqlString += ', @tipo = @_tipo';
            inputs.push(
                { nombre: '_tipo', tipo: 'varchar', tamanio: 10, valor: params.tipo }
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

exports.tablas = function (cp, params, done) {
    try {
        var sqlString = `SELECT DISTINCT tabla from tabla_generica WHERE grupo_id = '${params.grupo_id}'`;

        db.query(cp, sqlString, function (data, err) {
            if (err) {
                return done(null, err);
            }
            done(data);
        });
    } catch (ex) {
        throw (ex);
    }
};

exports.campos = function (cp, params, done) {
    try {
        var sqlString = `SELECT DISTINCT campo from tabla_generica WHERE grupo_id = '${params.grupo_id}' AND tabla = '${params.tabla}'`;

        db.query(cp, sqlString, function (data, err) {
            if (err) {
                return done(null, err);
            }
            done(data);
        });
    } catch (ex) {
        throw (ex);
    }
};

exports.codigos = function (cp, params, done) {
    try {
        var sqlString = `SELECT DISTINCT campo from tabla_generica WHERE grupo_id = '${params.grupo_id}' AND tabla = '${params.tabla}' AND campo = '${params.campo}'`;
        console.log(sqlString);
        db.query(cp, sqlString, function (data, err) {
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
        var sqlString = 'EXEC spd_abcs_tabla_generica @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'B' },
        ]
        if (params.tabla) {
            sqlString += ', @tabla = @_tabla';
            inputs.push(
                { nombre: '_tabla', tipo: 'varchar', tamanio: 20, valor: params.tabla }
            );
        }
        if (params.campo) {
            sqlString += ', @campo = @_campo';
            inputs.push(
                { nombre: '_campo', tipo: 'varchar', tamanio: 20, valor: params.campo }
            );
        }
        if (params.codigo) {
            sqlString += ', @codigo = @_codigo';
            inputs.push(
                { nombre: '_codigo', tipo: 'varchar', tamanio: 20, valor: params.codigo }
            );
        }
        if (params.grupo_id) {
            sqlString += ', @grupo_id = @_grupo_id';
            inputs.push(
                { nombre: '_grupo_id', tipo: 'varchar', tamanio: 20, valor: params.grupo_id }
            );
        }
        //if (params.dato) {
        //    sqlString += ', @dato = @_dato';
        //    inputs.push(
        //        { nombre: '_dato', tipo: 'varchar', tamanio: 8000, valor: params.dato }
        //    );
        //}
        //if (params.observacion) {
        //    sqlString += ', @observacion = @_observacion';
        //    inputs.push(
        //        { nombre: '_observacion', tipo: 'varchar', tamanio: 8000, valor: params.observacion }
        //    );
        //}
        //if (params.cantidad) {
        //    sqlString += ', @cantidad = @_cantidad';
        //    inputs.push(
        //        { nombre: '_cantidad', tipo: 'int', tamanio: 0, valor: params.cantidad }
        //    );
        //}
        //if (params.valor) {
        //    sqlString += ', @valor = @_valor';
        //    inputs.push(
        //        { nombre: '_valor', tipo: 'decimal', tamanio: 14, valor: params.valor }
        //    );
        //}
        //if (params.tipo) {
        //    sqlString += ', @tipo = @_tipo';
        //    inputs.push(
        //        { nombre: '_tipo', tipo: 'varchar', tamanio: 10, valor: params.tipo }
        //    );
        //}
        // #endregion
        //console.log(sqlString);
        //console.log(inputs);
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
        var sqlString = 'EXEC spd_abcs_tabla_generica @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'C' },
        ]
        if (params.tabla) {
            sqlString += ', @tabla = @_tabla';
            inputs.push(
                { nombre: '_tabla', tipo: 'varchar', tamanio: 20, valor: params.tabla }
            );
        }
        if (params.campo) {
            sqlString += ', @campo = @_campo';
            inputs.push(
                { nombre: '_campo', tipo: 'varchar', tamanio: 20, valor: params.campo }
            );
        }
        if (params.codigo) {
            sqlString += ', @codigo = @_codigo';
            inputs.push(
                { nombre: '_codigo', tipo: 'varchar', tamanio: 20, valor: params.codigo }
            );
        }
        if (params.dato) {
            sqlString += ', @dato = @_dato';
            inputs.push(
                { nombre: '_dato', tipo: 'varchar', tamanio: 8000, valor: params.dato }
            );
        }
        if (params.observacion) {
            sqlString += ', @observacion = @_observacion';
            inputs.push(
                { nombre: '_observacion', tipo: 'varchar', tamanio: 8000, valor: params.observacion }
            );
        }
        if (params.cantidad) {
            sqlString += ', @cantidad = @_cantidad';
            inputs.push(
                { nombre: '_cantidad', tipo: 'int', tamanio: 0, valor: params.cantidad }
            );
        }
        if (params.valor) {
            sqlString += ', @valor = @_valor';
            inputs.push(
                { nombre: '_valor', tipo: 'decimal', tamanio: 14, valor: params.valor }
            );
        }
        if (params.grupo_id) {
            sqlString += ', @grupo_id = @_grupo_id';
            inputs.push(
                { nombre: '_grupo_id', tipo: 'varchar', tamanio: 20, valor: params.grupo_id }
            );
        }
        if (params.tipo) {
            sqlString += ', @tipo = @_tipo';
            inputs.push(
                { nombre: '_tipo', tipo: 'varchar', tamanio: 10, valor: params.tipo }
            );
        }
        // #endregion
        //console.log(sqlString)
        //console.log(inputs)
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
        var sqlString = 'EXEC spd_abcs_tabla_generica @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'A' },
        ]
        if (params.tabla) {
            sqlString += ', @tabla = @_tabla';
            inputs.push(
                { nombre: '_tabla', tipo: 'varchar', tamanio: 20, valor: params.tabla }
            );
        }
        if (params.campo) {
            sqlString += ', @campo = @_campo';
            inputs.push(
                { nombre: '_campo', tipo: 'varchar', tamanio: 20, valor: params.campo }
            );
        }
        if (params.codigo) {
            sqlString += ', @codigo = @_codigo';
            inputs.push(
                { nombre: '_codigo', tipo: 'varchar', tamanio: 20, valor: params.codigo }
            );
        }
        if (params.dato) {
            sqlString += ', @dato = @_dato';
            inputs.push(
                { nombre: '_dato', tipo: 'varchar', tamanio: 8000, valor: params.dato }
            );
        }
        if (params.observacion) {
            sqlString += ', @observacion = @_observacion';
            inputs.push(
                { nombre: '_observacion', tipo: 'varchar', tamanio: 8000, valor: params.observacion }
            );
        }
        if (params.cantidad) {
            sqlString += ', @cantidad = @_cantidad';
            inputs.push(
                { nombre: '_cantidad', tipo: 'int', tamanio: 0, valor: params.cantidad }
            );
        }
        if (params.valor) {
            sqlString += ', @valor = @_valor';
            inputs.push(
                { nombre: '_valor', tipo: 'decimal', tamanio: 14, valor: params.valor }
            );
        }
        if (params.grupo_id) {
            sqlString += ', @grupo_id = @_grupo_id';
            inputs.push(
                { nombre: '_grupo_id', tipo: 'varchar', tamanio: 20, valor: params.grupo_id }
            );
        }
        if (params.tipo) {
            sqlString += ', @tipo = @_tipo';
            inputs.push(
                { nombre: '_tipo', tipo: 'varchar', tamanio: 10, valor: params.tipo }
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
