/**
 * Created by informatica on 06/05/2016.
 */
module.exports = function (app){
    return {
        add: function (req, res) {
            var Departamento = app.get('departamento');
            Departamento.create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion
            }).then(function (departamento) {
                res.json(departamento)
            });
        },
        list: function (req, res) {
            var Departamento = app.get('departamento');
            Departamento.findAll().then(function (departamentos) {
                res.json(departamentos);

            });
        },
        edit: function (res, req) {
            var Departamento = app.get('departamento');
            Departamento.find(req.body.id_departamento).then(function (departamento) {
                if (departamento) {
                    departamento.updateAttributes({
                        nombre: req.body.nombre,
                        descripcion: req.body.descripcion
                    });
                } else {
                    res.status(404).({message: 'departamento no encontrado'})
                }

            });
            /*minuto 32.08*/
        },
        delete: function (res, req) {
            var departamento = app.get('departamento');
            Departamento.destroy({
                where: {
                    id_departamento: req.body.id_departamento
                }
            }).then(function (departamento) {
                re.json(departamento);
            });
        },
        prueba: function (res, req) {
            var Departamento = app.get('departamento');
            Departamento.find(req.body.id_departamento).then(function (departamento) {
                if (departamento) {
                    res.json(departamento);
                } else {
                    res.status(404).({message: 'departamento no encontrado'})
                }
            });
        },
        departamentoConLugares: function (req, res) {
            var Departamento = app.get('departamento');
            var SitioTuristico = app.get('sitioTuristico');
            Departamento.find({
                where: {id_departamento: req.params.id},
                include: [SitioTuristico]
            }).then(function (departamento) {
                res.json(departamento);
            });
        }
    }
}
