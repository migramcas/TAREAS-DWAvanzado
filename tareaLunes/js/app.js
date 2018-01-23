/*Funcion para generar el número aleatorio*/
function numAleatorio(a,b){
	return Math.round(Math.random()*(b-a)+parseInt(a));
}


/*funcion para devolver una respuesta*/
function almacenDeRespuestas(opcion){
	if(opcion == 1){
		alert("La respuesta es SÍ. ;D");
		document.write("La respuesta es SÍ. ;D");
		}else if(opcion==2){
			alert("La respuesta es NO. :(");
			document.write("La respuesta es NO. :(");
			}else if(opcion==3){
				alert("La respuesta es PROBABLEMENTE. :'v ");
				document.write("La respuesta es PROBABLEMENTE. :'v ");
				}else if(opcion==4){
					alert("La respuesta es TAL VEZ. :3");
					document.write("La respuesta es TAL VEZ. :3");
					}else if(opcion==5){
						alert("La respuesta es DEFINITIVAMENTE NO. >.<!");
						document.write("La respuesta es DEFINITIVAMENTE NO. >.<!");
						}
}


/*Sección para pedir la pregunta*/
var pregunta= prompt("Por favor, ingresa una pregunta: ", "Escribe tu pregunta aquí");


if (pregunta.length != 0) {
	var numAleatorio= numAleatorio(1,5);
	document.write(pregunta+"	");
	document.write("  --------------------------------------->            ");
	almacenDeRespuestas(numAleatorio);

}else{
	document.write("No se introdujo ninguna cadena. Presione F5 para reiniciar la página.");
}
