var mysql = require('mysql');
var database='node_app';
var table='productos';

var client=mysql.createClient({
	user:'root',
	password:'',
	host:'localhost'

});
client.query('USE '+ database);

exports.index = function(req, res) {
  client.query(
		'SELECT * FROM ' + table,
		function(err,results,fields){
			if(err){
				throw err;
			}
			
			res.render('lista_productos',{
				productos:results,
				title: 'Lista de Productos'
			})
		
		})
};

exports.agregarproducto = function(req, res) {
  	res.render('form_productos',{title: 'Ingresar producto'})
};


exports.grabarmensajes = function(req, res) {
  	var nombre=req.body.producto.nombre;
	
	client.query(
	'INSERT INTO '+ table+' '+
	'SET nom_prod = ?',
	[nombre]
	);

	res.redirect('/productos')
};
