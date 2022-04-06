
// Función para definir comportamiento del reloj
let reloj = () => {
	time = new Date();
	horas = time.getHours();
	minutos = time.getMinutes();
	segundos = time.getSeconds();
    
    if (horas >= 12) {
     	porcentajeHoras = horas / 12 * 360;
    }  else {
    	porcentajeHoras = horas / 24 * 360;
    }

    // minutos actual / 60 minutos * 30° (Distancia 1 a 1)
    porcentajeHoras += minutos / 60 * 30;

    // minutos actual / 60 segundos * 360°
    porcentajeMinutos = minutos / 60 * 360;
    porcentajeSegundos = segundos / 60 * 360;
    
    // Rota por hora
    document.getElementById("horas").style.transform = `rotate(${porcentajeHoras}deg)`;

    // Rota por minutos
    document.getElementById("minutos").style.transform = "rotate("+ porcentajeMinutos +"deg)";

    // Rota por segundos
    document.getElementById("segundos").style.transform = "rotate("+ porcentajeSegundos +"deg)";
    
    // Digito hora
    document.getElementById("hora-digital").innerHTML = horas + ":" + minutos + ":" + segundos; 
}

// Intervalo que activa la función reloj
setInterval(reloj, 1000);