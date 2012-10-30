var mysql = require('mysql');
var database='app8818825';
var table='productos';


var client=mysql.createClient({
    
	user:'app8818825',
	password:'piscoday',
	host:'instance30374.db.xeround.com',
    port: 19678
  
    

});
client.query('USE '+ database);




exports.listarproductosjson = function(req, res) {
  client.query(
		'SELECT id_prod as idproducto, nom_prod as nomproducto FROM ' + table + ' order by id_prod',
		function(err,results,fields){
			if(err){
				throw err;
			}

			res.json({producto: results});
		
		});
};

exports.listaproductosingular = function(req, res) {
	client.query(
		'SELECT * FROM '+ table + ' WHERE id_prod=" ' + req.params.id +'"',
		function(err,results,fields){
			if(err){
				throw err;
			}
			
			res.render('producto_singular',{
				producto:results,
				title: results[0].nom_prod
			})
		
		})
};

exports.agregarproducto = function(req, res) {
  	res.render('form_productos',{title: 'Ingresar producto'})
};


exports.grabarmensajes = function(req, res) {
  	var nombre=req.body.producto;
	
	client.query(
	'INSERT INTO '+ table+' '+
	'SET nom_prod = ?',
	[nombre],
	function(err,results,fields){
			if(err){
				throw err;
			}
			
				res.json({status: 1});
		
		}	);
	


	//res.redirect('/productos')
};


exports.listarproductospost = function(req, res) {
  client.query(
		'SELECT * FROM ' + table,
		function(err,results,fields){
			if(err){
				throw err;
                console.log('Error casiano');
			}

			res.render('form_productos',{
				productos:results,
				title: 'Lista de Productos'
			});
			
			
		
		});
};