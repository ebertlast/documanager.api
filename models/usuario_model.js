var db = require('../core/db');
//var app = require('../app').app;
var jwt = require('../core/jwt');


exports.ingresar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_usuario @accion=@_accion, @usuario_id=@_usuario_id, @clave=@_clave';
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'S' },
            { nombre: '_usuario_id', tipo: 'varchar', tamanio: 20, valor: params.usuario_id },
            { nombre: '_clave', tipo: 'varchar', tamanio: 8, valor: params.clave },
        ]
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


exports.ingresarDEPRECATED = function (req, res) {
    try {
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'S' },
            { nombre: '_usuario_id', tipo: 'varchar', tamanio: 20, valor: req.params.usuario },
            { nombre: '_clave', tipo: 'varchar', tamanio: 8, valor: req.params.clave },
        ]
        var sqlString = 'EXEC spd_abcs_usuario @accion=@_accion, @usuario_id=@_usuario_id, @clave=@_clave';

        db.execute(sqlString, inputs, null, function (data, err) {
            if (err) {
                res.status(500).send({
                    message: `Error interno ocurrido dentro del servidor: ${err}`
                });
            } else {
                var user = data.recordset[0]
                var token = '';
                if (user) {
                    token = jwt.createJWToken({ sessionData: user });
                }
                //console.log(token);
                res.status('200').send(JSON.stringify({ token: token, result: data }));
            }
            res.end();
        });
    } catch (ex) {
        throw (ex);
    }
};

exports.seleccionar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_usuario @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'S' },
        ]
        if (params.usuario_id) {
            sqlString += ', @usuario_id = @_usuario_id';
            inputs.push(
                { nombre: '_usuario_id', tipo: 'varchar', tamanio: 100, valor: params.usuario_id }
            );
        }
        if (params.email) {
            sqlString += ', @email = @_email';
            inputs.push(
                { nombre: '_email', tipo: 'varchar', tamanio: 100, valor: params.email }
            );
        }
        if (params.clave) {
            sqlString += ', @clave = @_clave';
            inputs.push(
                { nombre: '_clave', tipo: 'varchar', tamanio: 8000, valor: params.clave }
            );
        }
        if (params.nombres) {
            sqlString += ', @nombres = @_nombres';
            inputs.push(
                { nombre: '_nombres', tipo: 'varchar', tamanio: 100, valor: params.nombres }
            );
        }
        if (params.grupo_id) {
            sqlString += ', @grupo_id = @_grupo_id';
            inputs.push(
                { nombre: '_grupo_id', tipo: 'varchar', tamanio: 100, valor: params.grupo_id }
            );
        }
        if (params.avatar) {
            sqlString += ', @avatar = @_avatar';
            inputs.push(
                { nombre: '_avatar', tipo: 'varchar', tamanio: 8000, valor: params.avatar }
            );
        }
        if (typeof params.activo === 'boolean') {
            sqlString += ', @activo = @_activo';
            inputs.push(
                { nombre: '_activo', tipo: 'bit', tamanio: 0, valor: (params.activo) ? 1 : 0 }
            );
        }
        // #endregion

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

exports.borrar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_usuario @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'B' },
        ]
        if (params.usuario_id) {
            sqlString += ', @usuario_id = @_usuario_id';
            inputs.push(
                { nombre: '_usuario_id', tipo: 'varchar', tamanio: 20, valor: params.usuario_id }
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
        var sqlString = 'EXEC spd_abcs_usuario @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'C' },
        ]
        if (params.usuario_id) {
            sqlString += ', @usuario_id = @_usuario_id';
            inputs.push(
                { nombre: '_usuario_id', tipo: 'varchar', tamanio: 100, valor: params.usuario_id }
            );
        }
        if (params.email) {
            sqlString += ', @email = @_email';
            inputs.push(
                { nombre: '_email', tipo: 'varchar', tamanio: 100, valor: params.email }
            );
        }
        if (params.clave) {
            sqlString += ', @clave = @_clave';
            inputs.push(
                { nombre: '_clave', tipo: 'varchar', tamanio: 8000, valor: params.clave }
            );
        }
        if (params.nombres) {
            sqlString += ', @nombres = @_nombres';
            inputs.push(
                { nombre: '_nombres', tipo: 'varchar', tamanio: 100, valor: params.nombres }
            );
        }
        if (params.grupo_id) {
            sqlString += ', @grupo_id = @_grupo_id';
            inputs.push(
                { nombre: '_grupo_id', tipo: 'varchar', tamanio: 100, valor: params.grupo_id }
            );
        }
        if (params.avatar) {
            sqlString += ', @avatar = @_avatar';
            inputs.push(
                { nombre: '_avatar', tipo: 'varchar', tamanio: 8000, valor: params.avatar }
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
        var sqlString = 'EXEC spd_abcs_usuario @accion=@_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'A' },
        ]
        if (params.usuario_id) {
            sqlString += ', @usuario_id = @_usuario_id';
            inputs.push(
                { nombre: '_usuario_id', tipo: 'varchar', tamanio: 100, valor: params.usuario_id }
            );
        }
        if (params.email) {
            sqlString += ', @email = @_email';
            inputs.push(
                { nombre: '_email', tipo: 'varchar', tamanio: 100, valor: params.email }
            );
        }
        if (params.clave) {
            sqlString += ', @clave = @_clave';
            inputs.push(
                { nombre: '_clave', tipo: 'varchar', tamanio: 8000, valor: params.clave }
            );
        }
        if (params.nombres) {
            sqlString += ', @nombres = @_nombres';
            inputs.push(
                { nombre: '_nombres', tipo: 'varchar', tamanio: 100, valor: params.nombres }
            );
        }
        if (params.grupo_id) {
            sqlString += ', @grupo_id = @_grupo_id';
            inputs.push(
                { nombre: '_grupo_id', tipo: 'varchar', tamanio: 100, valor: params.grupo_id }
            );
        }
        if (params.avatar) {
            sqlString += ', @avatar = @_avatar';
            inputs.push(
                { nombre: '_avatar', tipo: 'varchar', tamanio: 8000, valor: params.avatar }
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
