/**
 * Created by informatica on 06/05/2016.
 */

/**
 * Created by informatica on 06/05/2016.
 */

module.exports = function (app){
    return {
        add: function (req, res) {
            var Usuario = app.get('usuario');
            Usuario.create({
                nombre: req.body.nombre,
                correo: req.body.correo,
                nick: req.body.nick,
                password: req.body.password
            }).then(function (usuario) {
                res.json(usuario)
            });
        },
        list: function (req, res) {
            var Usuario = app.get('usuario');
            Usuario.findAll().then(function (usuarios) {
                res.json(usuarios);

            });
        },
        edit: function (res, req) {
            var Usuario = app.get('usuario');
            Usuario.find(req.body.id_usuario).then(function (usuario) {
                if (usuario) {
                    usuario.updateAttributes({
                        nombre: req.body.nombre,
                        correo: req.body.correo,
                        nick: req.body.nick,
                        password: req.body.password
                    });
                } else {
                    res.status(404).send({message: 'Usuario no encontrado'})
                }

            });

        },
        delete: function (res, req) {
            var usuario = app.get('usuario');
            Usuario.destroy({
                where: {
                    id_usuario: req.body.id_usuario
                }
            }).then(function (usuario) {
                re.json(usuario);
            });
        },
        prueba: function (res, req) {
            var Usuario = app.get('usuario');
            Usuario.find(req.body.id_usuario).then(function (usuario) {
                if (usuario) {
                    res.json(usuario);
                } else {
                    res.status(404).send({message: 'Usuario no encontrado'})
                }
            });
        },
       
    }
}
