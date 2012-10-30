$(function() {
  
  mostrarproductos();
  $('#btnaddprod').click(function() {
    
    var name = $('#producto').val();
    
  
    $.ajax({
      type: "POST",
      url: "/productos/add",
      data: JSON.stringify({ producto: name}),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data) {
        //alert(data.status);
		mostrarproductos();
      },
      error: function(err) {
        var msg = 'Status: ' + err.status + ': ' + err.responseText;
        alert(msg);
      }
    });
    return false;
  });
  
  $('#btnlistarprod').click(function() {
    
    var name = $('#producto').val();
    
  
    $.ajax({
      type: "POST",
      url: "/listarproductospost",
      data: JSON.stringify({ producto: name}),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data) {
        //alert( data.producto[1].idproducto+ data.producto[1].nomproducto);
		$.each(data.producto,function(index,value) 
				{
							var dia=data.producto[index].idproducto;
							var reunion=data.producto[index].nomproducto;
		
							$('#productos').append("<li>"+reunion+"</li>");
							
				});
				
				
		
      },
      error: function(err) {
        var msg = 'Status: ' + err.status + ': ' + err.responseText;
        alert(msg);
      }
    });
    return false;
  });
  

});


function mostrarproductos(){
  var name = $('#producto').val();
    
  
    $.ajax({
      type: "POST",
      url: "/listarproductospost",
      data: JSON.stringify({ producto: name}),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data) {
        //alert( data.producto[1].idproducto+ data.producto[1].nomproducto);
		$('#productos').text("");
		$.each(data.producto,function(index,value) 
				{
							var dia=data.producto[index].idproducto;
							var reunion=data.producto[index].nomproducto;
		
							$('#productos').append("<li>"+reunion+"</li>");
							
				});
				
				
		
      },
      error: function(err) {
        var msg = 'Status: ' + err.status + ': ' + err.responseText;
        alert(msg);
      }
    });
    return false;
  
  
  };
  
  
  
  
  function llegada_combo_hora(data)
		{
				$("#horaini").append("<option id='0' >Seleccionar Hora Inicio</option>");
				//$("#horafin").append("<option id='0' >Seleccionar Hora Fin</option>");
				$.each(data,function(index,value) 
				{
					var etiqueta=data[index].etiqueta;
					var valor=data[index].valor;
					$("#horaini").append("<option id='"+valor+"' >"+etiqueta+"</option>");
					$("#horafin").append("<option id='"+valor+"' >"+etiqueta+"</option>");
				});
		};