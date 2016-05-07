/**
 * Created by informatica on 06/05/2016.
 */
(function() {
    var express = require('express');
    var bodyParser = require('bodyParser');
    var mysql = require('mysql');
    var Sequelize = require('sequelize');

    var sequelize = new Sequelize('DB_Turismo', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 20,
            min: 0
        }
    });


    /*
     Declaraciones de los modelos
     */

    var Usuario = sequelize.define('usuario', {
        idusuario: {type: Sequelize.INTEGER, primarKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false},
        telefono: {type: Sequelize.INT, allowNull: false},
        correo: {type: Sequelize.STRING, allowNull: false},
        nick: {type: Sequelize.STRING, allowNull: false},
        contraseña: {type: Sequelize.STRING, allowNull: false},
        direccion: {type: Sequelize.STRING, allowNull: false},
    });

    var Departamento = sequelize.define('departamento',{
        idDepartamento: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false},
        descripcion: {type: Sequelize.STRING, allowNull: false},
    });

    var SitioTuristico = sequelize.define('sitioTuristico', {
        idSitioTuristico: {type: Sequelize.INTEGER, primarKey: true, autoIncrement: true},
        nombre: {type: Sequelize.STRING, allowNull: false},
        telefono: {type: Sequelize.INT, allowNull: false},
        descripcion: {type: Sequelize.STRING, allowNull: false},
        direccion: {type: Sequelize.STRING, allowNull: false},
        id_departameto:{type: Sequelize.INTEGER, references: {
            model: Departamento,
            key:'id_departamento'
        }}
    });
    Departamento.hasMany(SitioTuristico,{foreignKey: 'id_sitioTuristico'});
    SitioTuristico.belongsTo(Departamento,{foreignkey: 'id_sitioTuristico'});

    sequelize.sync({ force: true});
    var puerto=3000
    var conf=requeire('./config');
    var app=exoress();
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use('/api/v1', require('./routes')(app));
    app.use(morgan('dev'));
    app.set('departamento', Departamento);
    app.listen(puerto,function(){
        console.log("Servidor Iniciado en el puerto: " + puerto);
        console.log("Debug del server: ");
    });


})();