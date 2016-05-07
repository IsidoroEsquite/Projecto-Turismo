/**
 * Created by informatica on 06/05/2016.
 */
var ruta= require('express').Router();
module.exports = (function (app) {
 var departamento = require('../Controladores/ControladorDepartamento')(app);
    var departamento = require('../Controladores/ControladorSitioTuristico')(app);

    ruta.get('/departamento', Departamento.list);
    ruta.get('/departamento', Departamento.add);
    ruta.get('/departamento', Departamento.edit);
    ruta.get('/departamento', Departamento.delete);
    ruta.get('/departamento', Departamento.departamentoConLugares);

});
