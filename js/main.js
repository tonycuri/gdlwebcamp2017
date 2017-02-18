var api =  'AIzaSyASwUlsvCAZAUV5pfG8c0xcb31M5ANweMA'; 

function initMap() {
	var latLng = {
		lat: -34.6892452,
		lng: -58.4803431
	}

  var map = new google.maps.Map(document.getElementById('mapa'), {
    'center' : latLng,
    'zoom' : 14,
    'mapTypeId' : google.maps.MapTypeId.ROADMAP,
  });

  var contenido = '<h2>GDLWEBCAMP</h2>' +
  								'<p>Del 10 al 12 de Diciembre</p>' +
  								'<p>Visitanos!!</p>'

  var informacion  = new google.maps.InfoWindow({
  	content: contenido
  });

  var marker =  new google.maps.Marker({
  	position: latLng,
  	map: map,
  	title: ' GDLWEBCAMP'
  });

  marker.addListener('click', function(){
  	informacion.open(map, marker);
  });
}


(function(){
	"use strict";
	
	document.addEventListener('DOMContentLoaded',function(){
		
		//campos datos usuarios
		var nombre = document.getElementById('nombre');
		var apellido = document.getElementById('apellido');
		var email = document.getElementById('email');
		
		var regalo = document.getElementById('regalo');

		// Campos Pases
		var pase_dia = document.getElementById('pase_dia');
		var pase_dosdias = document.getElementById('pase_dosdias');
		var pase_completo = document.getElementById('pase_completo');

		//Botones y divs
		var calcular = document.getElementById('calcular');
		var errorDiv = document.getElementById('error');
		var botonRegistro = document.getElementById('btnRegistro');
		var lista_productos = document.getElementById('lista-productos');
		var suma =  document.getElementById('suma-total');

		//Extras
		var etiquetas = document.getElementById('etiquetas');
		var camisas = document.getElementById('camisa_evento');

		calcular.addEventListener('click', calcularMontos);

		pase_dia.addEventListener('blur', mostrarDias);
		pase_dosdias.addEventListener('blur', mostrarDias);
		pase_completo.addEventListener('blur', mostrarDias);

		nombre.addEventListener('blur', validarCampos);
		apellido.addEventListener('blur', validarCampos);
		email.addEventListener('blur', validarCampos);
		email.addEventListener('blur',validarMail);

		function validarCampos(){
			if(this.value == ''){
				errorDiv.style.display = 'block';
				errorDiv.innerHTML = 'Este campo es obligatorio';
				this.style.border = '1px solid red';
				errorDiv.style.border = '1px solid red';
				errorDiv.style.padding= '0 10px';
			}else{
				errorDiv.style.display = 'none';
				this.style.border = '1px solid #ccc';
			}
		}

		function validarMail(){
			if(this.value.indexOf('@') >-1){
				errorDiv.style.display = 'none';
				this.style.border = '1px solid #ccc';
			}else{
					errorDiv.style.display = 'block';
					errorDiv.innerHTML = 'Debe tener almenos un @';
					this.style.border = '1px solid red';
					errorDiv.style.border = '1px solid red';
					errorDiv.style.padding= '0 10px';
			}
		}

		function calcularMontos(event){
			event.preventDefault();
			if(regalo.value == ''){
				alert('Debes elegir un regalo');
				regalo.focus;
			} else{
				var boletosDia = parseInt(pase_dia.value, 10) || 0,
						boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
						boletoCompleto = parseInt(pase_completo.value, 10) || 0,
						cantCamisas = parseInt(camisas.value, 10) || 0,
						cantEtiquetas = parseInt(etiquetas.value, 10) || 0; 

				var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) *.93) + (cantEtiquetas * 2);

				var listadoProductos = [];

				if(boletosDia >= 1){
					listadoProductos.push(boletosDia + ' Pase por día');
				}
				if(boletos2Dias >= 1){
					listadoProductos.push(boletos2Dias + ' Pase por 2 días');
				}
				if(boletoCompleto >=1){
					listadoProductos.push(boletoCompleto + ' Pase Completo');
				}
				if(cantCamisas >=1){
					listadoProductos.push(cantCamisas + ' Camisas');
				}
				if(cantEtiquetas >=1){
					listadoProductos.push(cantEtiquetas + ' Etiquetas');
				}

				lista_productos.style.display ='block';
				lista_productos.innerHTML = '';
				for(var i = 0; i< listadoProductos.length; i++){
					lista_productos.innerHTML +=listadoProductos[i] + '<br>';
				}
				console.log(totalPagar);
				suma.innerHTML = '$ ' + totalPagar.toFixed(2);
				}
			}

			function mostrarDias(){
				var boletosDia = parseInt(pase_dia.value, 10) || 0,
						boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
						boletoCompleto = parseInt(pase_completo.value, 10) || 0;

						var diasElegidos = [];

						if(boletosDia > 0){
							diasElegidos.push('viernes');
							console.log(diasElegidos);
						}
						if(boletos2Dias>0){
							diasElegidos.push('viernes','sabado');
							console.log(diasElegidos);
						}
						if(boletoCompleto>0){
							diasElegidos.push('viernes','sabado','domingo');
							console.log(diasElegidos);
						}
						for( var i = 0; i < diasElegidos.length; i++){
							document.getElementById(diasElegidos[i]).style.display = 'block';
						}
			}
	});//DOM CONTENT LOADED
})();