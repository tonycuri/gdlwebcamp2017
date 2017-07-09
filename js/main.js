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
		
	if(document.getElementById('calcular')){

	
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
	}	
	});//DOM CONTENT LOADED
})();

$(function(){
	//Letering
	$('.nombre-sitio').lettering();

	//menu fijo
	var windowHeight = $(window).height();
	var barraAltura = $('.barra').innerHeight();

	
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll > windowHeight){
			$('.barra').addClass('fixed');
			$('body').css({'margin-top': barraAltura+'px'});
		}else{
			$('.barra').removeClass('fixed');
			$('body').css({'margin-top':'0px'});
		}
		
	});

	//Menu responsive
	$('.menu-movil').on('click',function(){
		$('.navegacion-principal').slideToggle();
	});

	//programa de conferencias
	$('.programa-evento .info-curso:first').show();
	$('.menu-programa a:first').addClass('activo');

	$('.menu-programa a').on('click',function(){
		$('.menu-programa a').removeClass('activo');
		$(this).addClass('activo');
		$('.ocultar').hide();

		var enlace = $(this).attr('href');
		$(enlace).fadeIn(1000);

		return false;
	});

	//Animacion de los numeros
	$('.resumen-evento li:nth-child(1) p').animateNumber({number: 6},1200);
	$('.resumen-evento li:nth-child(2) p').animateNumber({number: 15},1200);
	$('.resumen-evento li:nth-child(3) p').animateNumber({number: 3},1500);
	$('.resumen-evento li:nth-child(4) p').animateNumber({number: 9},1500);

	//Cuenta regresiva utilizamos countdown y ponemos la fecha y hora a la que queremos llegar
	$('.cuenta-regresiva').countdown('2017/12/25 19:00:00', function(event){
		$('#dias').html(event.strftime('%D'));
		$('#horas').html(event.strftime('%H'));
		$('#minutos').html(event.strftime('%M'));
		$('#segundos').html(event.strftime('%S'));

	});
});
