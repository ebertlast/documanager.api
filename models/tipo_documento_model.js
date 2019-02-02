var db = require('../core/db');

exports.registros = function (cp, params, done) {
    try {
        var sqlString = 'EXEC spd_abcs_tipo_documento @accion = @_accion';

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
            sqlString += ', @denominacion = @_denominacion';
            inputs.push(
                { nombre: '_denominacion', tipo: 'varchar', tamanio: 100, valor: params.identificacion }
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
