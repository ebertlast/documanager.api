var db = require('../core/db');
var fs = require('fs');
//var scissors = require('scissors');
//var pdfjsLib = require('pdfjs-dist');
//var hummus = require('hummus');

exports.seleccionar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_archivo @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'S' },
        ]
        if (params.archivo_id) {
            sqlString += ', @archivo_id = @_archivo_id';
            inputs.push(
                { nombre: '_archivo_id', tipo: 'varchar', tamanio: 100, valor: params.archivo_id }
            );
        }
        if (params.nombre) {
            sqlString += ', @nombre = @_nombre';
            inputs.push(
                { nombre: '_nombre', tipo: 'varchar', tamanio: 500, valor: params.nombre }
            );
        }
        //if (params.paginas) {
        //    sqlString += ', @paginas = @_paginas';
        //    inputs.push(
        //        { nombre: '_paginas', tipo: 'int', tamanio: 0, valor: params.paginas }
        //    );
        //}
        //if (params.peso) {
        //    sqlString += ', @peso = @_peso';
        //    inputs.push(
        //        { nombre: '_peso', tipo: 'varchar', tamanio: 15, valor: params.peso }
        //    );
        //}
        //if (params.tipo) {
        //    sqlString += ', @tipo = @_tipo';
        //    inputs.push(
        //        { nombre: '_tipo', tipo: 'varchar', tamanio: 25, valor: params.tipo }
        //    );
        //}
        if (params.directorio) {
            sqlString += ', @directorio = @_directorio';
            inputs.push(
                { nombre: '_directorio', tipo: 'varchar', tamanio: 8000, valor: params.directorio }
            );
        }
        if (params.usuario_id) {
            sqlString += ', @usuario_id = @_usuario_id';
            inputs.push(
                { nombre: '_usuario_id', tipo: 'varchar', tamanio: 100, valor: params.usuario_id }
            );
        }
        if (params.consecutivo_tipo) {
            sqlString += ', @consecutivo_tipo = @_consecutivo_tipo';
            inputs.push(
                { nombre: '_consecutivo_tipo', tipo: 'int', tamanio: 0, valor: params.consecutivo_tipo }
            );
        }
        if (params.fecha_archivo) {
            sqlString += ', @fecha_archivo = @_fecha_archivo';
            inputs.push(
                { nombre: '_fecha_archivo', tipo: 'datetime', tamanio: 0, valor: params.fecha_archivo }
            );
        }
        if (params.lote_id) {
            sqlString += ', @lote_id = @_lote_id';
            inputs.push(
                { nombre: '_lote_id', tipo: 'varchar', tamanio: 20, valor: params.lote_id }
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

/**
* No esta permitido borrar archivos
*/
exports.borrar = function (cp, params, done) {
    try {
        return done(null, 'No se permite borrar archivos');
        var sqlString = 'EXEC spd_abcs_archivo @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'B' },
        ]
        if (params.archivo_id) {
            sqlString += ', @archivo_id = @_archivo_id';
            inputs.push(
                { nombre: '_archivo_id', tipo: 'varchar', tamanio: 100, valor: params.archivo_id }
            );
        }
        if (params.nombre) {
            sqlString += ', @nombre = @_nombre';
            inputs.push(
                { nombre: '_nombre', tipo: 'varchar', tamanio: 500, valor: params.nombre }
            );
        }
        if (params.paginas) {
            sqlString += ', @paginas = @_paginas';
            inputs.push(
                { nombre: '_paginas', tipo: 'int', tamanio: 0, valor: params.paginas }
            );
        }
        if (params.peso) {
            sqlString += ', @peso = @_peso';
            inputs.push(
                { nombre: '_peso', tipo: 'varchar', tamanio: 15, valor: params.peso }
            );
        }
        if (params.tipo) {
            sqlString += ', @tipo = @_tipo';
            inputs.push(
                { nombre: '_tipo', tipo: 'varchar', tamanio: 25, valor: params.tipo }
            );
        }
        if (params.directorio) {
            sqlString += ', @directorio = @_directorio';
            inputs.push(
                { nombre: '_directorio', tipo: 'varchar', tamanio: 8000, valor: params.directorio }
            );
        }
        if (params.usuario_id) {
            sqlString += ', @usuario_id = @_usuario_id';
            inputs.push(
                { nombre: '_usuario_id', tipo: 'varchar', tamanio: 100, valor: params.usuario_id }
            );
        }
        if (params.consecutivo_tipo) {
            sqlString += ', @consecutivo_tipo = @_consecutivo_tipo';
            inputs.push(
                { nombre: '_consecutivo_tipo', tipo: 'int', tamanio: 0, valor: params.consecutivo_tipo }
            );
        }
        if (params.fecha_archivo) {
            sqlString += ', @fecha_archivo = @_fecha_archivo';
            inputs.push(
                { nombre: '_fecha_archivo', tipo: 'datetime', tamanio: 0, valor: params.fecha_archivo }
            );
        }
        if (params.lote_id) {
            sqlString += ', @lote_id = @_lote_id';
            inputs.push(
                { nombre: '_lote_id', tipo: 'varchar', tamanio: 20, valor: params.lote_id }
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
        var sqlString = 'EXEC spd_abcs_archivo @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'C' },
        ]
        if (params.archivo_id) {
            sqlString += ', @archivo_id = @_archivo_id';
            inputs.push(
                { nombre: '_archivo_id', tipo: 'varchar', tamanio: 100, valor: params.archivo_id }
            );
        }
        if (params.nombre) {
            sqlString += ', @nombre = @_nombre';
            inputs.push(
                { nombre: '_nombre', tipo: 'varchar', tamanio: 500, valor: params.nombre }
            );
        }
        if (params.paginas) {
            sqlString += ', @paginas = @_paginas';
            inputs.push(
                { nombre: '_paginas', tipo: 'int', tamanio: 0, valor: params.paginas }
            );
        }
        if (params.peso) {
            sqlString += ', @peso = @_peso';
            inputs.push(
                { nombre: '_peso', tipo: 'varchar', tamanio: 15, valor: params.peso }
            );
        }
        if (params.tipo) {
            sqlString += ', @tipo = @_tipo';
            inputs.push(
                { nombre: '_tipo', tipo: 'varchar', tamanio: 25, valor: params.tipo }
            );
        }
        if (params.directorio) {
            sqlString += ', @directorio = @_directorio';
            inputs.push(
                { nombre: '_directorio', tipo: 'varchar', tamanio: 8000, valor: params.directorio }
            );
        }
        if (params.usuario_id) {
            sqlString += ', @usuario_id = @_usuario_id';
            inputs.push(
                { nombre: '_usuario_id', tipo: 'varchar', tamanio: 100, valor: params.usuario_id }
            );
        }
        if (params.consecutivo_tipo) {
            sqlString += ', @consecutivo_tipo = @_consecutivo_tipo';
            inputs.push(
                { nombre: '_consecutivo_tipo', tipo: 'int', tamanio: 0, valor: params.consecutivo_tipo }
            );
        }
        var archivo
        if (params.fecha_archivo) {
            //console.log(params.archivo_id, ":", params.fecha_archivo);
            const dia = params.fecha_archivo.toString().split("/")[0];
            const mes = params.fecha_archivo.toString().split("/")[1];
            const anio = params.fecha_archivo.toString().split("/")[2];
            const fecha = new Date(mes + "-" + dia + "-" + anio)
            //console.log(params.archivo_id, ":", fecha);

            sqlString += ', @fecha_archivo = @_fecha_archivo';
            inputs.push(
                { nombre: '_fecha_archivo', tipo: 'datetime', tamanio: 10, valor: fecha }
            );
        }
        if (params.lote_id) {
            sqlString += ', @lote_id = @_lote_id';
            inputs.push(
                { nombre: '_lote_id', tipo: 'varchar', tamanio: 20, valor: params.lote_id }
            );
        }
        // #endregion
        //console.log(sqlString);
        //console.log(inputs);
        //return done(null, "Pruebas de Desarrollo");
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
        var sqlString = 'EXEC spd_abcs_archivo @accion = @_accion';

        // #region Parametros
        var inputs = [
            { nombre: '_accion', tipo: 'varchar', tamanio: 1, valor: 'A' },
        ]
        if (params.archivo_id) {
            sqlString += ', @archivo_id = @_archivo_id';
            inputs.push(
                { nombre: '_archivo_id', tipo: 'varchar', tamanio: 100, valor: params.archivo_id }
            );
        }
        if (params.nombre) {
            sqlString += ', @nombre = @_nombre';
            inputs.push(
                { nombre: '_nombre', tipo: 'varchar', tamanio: 500, valor: params.nombre }
            );
        }
        if (params.paginas) {
            sqlString += ', @paginas = @_paginas';
            inputs.push(
                { nombre: '_paginas', tipo: 'int', tamanio: 0, valor: params.paginas }
            );
        }
        if (params.peso) {
            sqlString += ', @peso = @_peso';
            inputs.push(
                { nombre: '_peso', tipo: 'varchar', tamanio: 15, valor: params.peso }
            );
        }
        if (params.tipo) {
            sqlString += ', @tipo = @_tipo';
            inputs.push(
                { nombre: '_tipo', tipo: 'varchar', tamanio: 25, valor: params.tipo }
            );
        }
        if (params.directorio) {
            sqlString += ', @directorio = @_directorio';
            inputs.push(
                { nombre: '_directorio', tipo: 'varchar', tamanio: 8000, valor: params.directorio }
            );
        }
        if (params.usuario_id) {
            sqlString += ', @usuario_id = @_usuario_id';
            inputs.push(
                { nombre: '_usuario_id', tipo: 'varchar', tamanio: 100, valor: params.usuario_id }
            );
        }
        if (params.consecutivo_tipo) {
            sqlString += ', @consecutivo_tipo = @_consecutivo_tipo';
            inputs.push(
                { nombre: '_consecutivo_tipo', tipo: 'int', tamanio: 0, valor: params.consecutivo_tipo }
            );
        }
        if (params.fecha_archivo) {
            sqlString += ', @fecha_archivo = @_fecha_archivo';
            inputs.push(
                { nombre: '_fecha_archivo', tipo: 'datetime', tamanio: 0, valor: params.fecha_archivo }
            );
        }
        if (params.lote_id) {
            sqlString += ', @lote_id = @_lote_id';
            inputs.push(
                { nombre: '_lote_id', tipo: 'varchar', tamanio: 20, valor: params.lote_id }
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

exports.cantidad = function (cp, params, done) {
    try {

        var sqlString = 'SELECT dbo.fnd_cantidades(@etiquetas,@cuales,@grupo_id) AS cantidad';

        // #region Parametros
        var inputs = [
            { nombre: 'etiquetas', tipo: 'bit', tamanio: 1, valor: (params.que === 'archivos' || params.que === 'ARCHIVOS') ? 0 : 1 },
            { nombre: 'cuales', tipo: 'int', tamanio: 0, valor: params.cuales },
            { nombre: 'grupo_id', tipo: 'varchar', tamanio: 100, valor: params.grupo_id },
        ]
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

exports.consultar = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_filtrar_archivos';

        // #region Parametros
        var inputs = []
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

        if (params.serie_id) {
            sqlString += ', @serie_id = @_serie_id';
            inputs.push(
                { nombre: '_serie_id', tipo: 'varchar', tamanio: 100, valor: params.serie_id }
            );
        }

        if (params.subserie_id) {
            sqlString += ', @subserie_id = @_subserie_id';
            inputs.push(
                { nombre: '_subserie_id', tipo: 'varchar', tamanio: 100, valor: params.subserie_id }
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
