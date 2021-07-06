localStorage.setItem("margenvel", 13);
localStorage.setItem("timewhait2", 3);
localStorage.setItem("timewhait", 1);
localStorage.setItem("colorhuevo", "drag-items");
<<<<<<< HEAD
localStorage.setItem("puntos", 0);
localStorage.setItem("muerto",true);
//localStorage.setItem("siguiendo", false);


=======
//localStorage.setItem("siguiendo", false);
>>>>>>> e6fbd49cd17e4c0eba794eaeb72850129a12a3e4

saludo("Parkinson");

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

saludo("Parkinson");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
function saludo(dific){ 
    localStorage.setItem("muerto",true);
    (document.getElementById("myCanvas").getContext("2d")).font = "130px impact";
    (document.getElementById("myCanvas").getContext("2d")).fillStyle = "white";
    (document.getElementById("myCanvas").getContext("2d")).fillText("Click para comenzar!", 250, 500);
    (document.getElementById("myCanvas").getContext("2d")).font = "60px impact";
    (document.getElementById("myCanvas").getContext("2d")).fillStyle = "white";
    (document.getElementById("myCanvas").getContext("2d")).fillText("Dificultad: "+dific, 550, 600);}

/**
 * Pantalla de saludo inicial. Se encarga de cargar el mensaje de bienvenida al entrar a la pagina.
 * @method saludo
 * @param {var} dific -se pasa el texto que se escribira al lado  de Dificultad:
 */
function saludo(dific){ 
    
    localStorage.setItem("muerto",true);
    (document.getElementById("myCanvas").getContext("2d")).font = (130)+"px impact";
    (document.getElementById("myCanvas").getContext("2d")).fillStyle = "white";
    (document.getElementById("myCanvas").getContext("2d")).fillText("Click para comenzar!", 250, 500);
    (document.getElementById("myCanvas").getContext("2d")).font = (60)+"px impact";
    (document.getElementById("myCanvas").getContext("2d")).fillStyle = "white";
    (document.getElementById("myCanvas").getContext("2d")).fillText("Dificultad: "+dific, 550, 600);
    var img = new Image();
    img.src = "imagenes/exit.png";
    (document.getElementById("myCanvas").getContext("2d")).drawImage(img, 0, 35,70,70);
}
/**
 * Setea la dificultad del juego.
 * @method dificultad
 * @param {var} tim - Setea el tiempo limite que tiene el jugador para reaccionar y quedarse quieto.
 * @param {var} vel - Limita la velocidad a la que el jugador puede mover el huevo.
 * @param {var} col - Setea el color del huevo según la dificultad.
 */
function dificultad(tim, vel, col) {                    //se setea la dificultad del juego
    (document.getElementById("myCanvas").getContext("2d")).clearRect(0, 0, canvas.width, canvas.height);
    
    localStorage.setItem("puntos", 0);
    localStorage.setItem("margenvel", vel);
    localStorage.setItem("timewhait2", tim+3);
    localStorage.setItem("timewhait", tim);
    
    switch (col) {
        case 1:
            saludo("Parkinson");
            localStorage.setItem("colorhuevo", "drag-items");
            break;
        case 2:
<<<<<<< HEAD
            saludo("Cirujano");
            localStorage.setItem("colorhuevo", "drag-items2");
            break;
        case 3:
            saludo("Nervios de Acero");
            
=======
            saludo("Nervios de Acero");
            localStorage.setItem("colorhuevo", "drag-items2");
            break;
        case 3:
            saludo("Crujano");
>>>>>>> e6fbd49cd17e4c0eba794eaeb72850129a12a3e4
            localStorage.setItem("colorhuevo", "drag-items3");
            break;
    }

}

/**
 * Muestra los puntos obtenidos en pantalla.
 * @method mostrar_puntos
 */
function mostrar_puntos() {                          //Muestra los Puntos
    (document.getElementById("myCanvas").getContext("2d")).clearRect(200, 0, canvas.width, 70);
    var gradient = (document.getElementById("myCanvas").getContext("2d")).createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("1.0", "white");
    (document.getElementById("myCanvas").getContext("2d")).strokeStyle = gradient;
    (document.getElementById("myCanvas").getContext("2d")).font = "60px Impact";
    (document.getElementById("myCanvas").getContext("2d")).fillStyle = "white";
    (document.getElementById("myCanvas").getContext("2d")).strokeText("Puntos : " + localStorage.getItem("puntos"), 600, 70);
}

<<<<<<< HEAD



/**
 * Temporizador de juego. Cuenta el tiempo que se lleva jugando esa ronda.
 * @method mostrar_tiempo
 */
=======
>>>>>>> e6fbd49cd17e4c0eba794eaeb72850129a12a3e4
async function mostrar_tiempo() {                          //Muestra el tiempo
    if (localStorage.getItem("muerto")=="true"){
        localStorage.setItem("start", seconds = new Date().getTime() / 1000);
    }
    (document.getElementById("myCanvas").getContext("2d")).clearRect(0, 0, 200, 70);
    var gradient = (document.getElementById("myCanvas").getContext("2d")).createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("1.0", "white");
    (document.getElementById("myCanvas").getContext("2d")).strokeStyle = gradient;
    (document.getElementById("myCanvas").getContext("2d")).font = "25px Impact";
    (document.getElementById("myCanvas").getContext("2d")).fillStyle = "white";
    var tiempo= parseInt(localStorage.getItem("segundos"));
<<<<<<< HEAD
    var img = new Image();
    img.src = "imagenes/exit.png";
    (document.getElementById("myCanvas").getContext("2d")).drawImage(img, 0, 35,70,70);

=======
>>>>>>> e6fbd49cd17e4c0eba794eaeb72850129a12a3e4
    if (localStorage.getItem("muerto")!="true"){
    
    localStorage.setItem("segundos", (seconds = new Date().getTime() / 1000)-localStorage.getItem("start"));
    }
    var final=Math.floor(tiempo%60)
    if (final<10){
        final="0"+final
    }
    
    (document.getElementById("myCanvas").getContext("2d")).strokeText(Math.floor(tiempo/60)+":" + final, 10, 30);
}
mostrar_tiempo();
<<<<<<< HEAD


=======
>>>>>>> e6fbd49cd17e4c0eba794eaeb72850129a12a3e4
canvas.onmousedown = function (e) {                        //Detecta cuando se clickea
    var intervalID = window.setInterval(mostrar_tiempo, 1000);
    localStorage.setItem("vidahuevo",100);
    if (localStorage.getItem("muerto")=="true"){
        localStorage.setItem("muerto",false);
    }
    
     
    var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
    var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
    var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
    (document.getElementById("myCanvas").getContext("2d")).clearRect(0, 0, canvas.width, canvas.height);  // (0,0) the top left of the canvas
    var img = document.getElementById(localStorage.getItem("colorhuevo"));
    (document.getElementById("myCanvas").getContext("2d")).drawImage(img, 105, 670, 90, 90);
    var parpado = document.getElementById("parpado");
    (document.getElementById("myCanvas").getContext("2d")).drawImage(parpado, 426, -100);
    var img = document.getElementById(localStorage.getItem("colorhuevo"));
    (document.getElementById("myCanvas").getContext("2d")).drawImage(img, 105, 670, 90, 90);

    mostrar_puntos();
    if (canvasX >= 80 && canvasY < 760 && canvasX <= 180 && canvasY > 590) {  // verifica si se clickea en el nido para obtener el huevo!
        localStorage.setItem("oldx",canvasX);
        localStorage.setItem("oldy",canvasY);
        siguiendo = true;
        canvas.addEventListener("mousemove", seguir);
    }
    if (canvasX >= 0 && canvasY < 105 && canvasX <= 80 && canvasY > 35){//boton salir
        window.history.back();
    
    }
}

<<<<<<< HEAD
=======
canvas.onmouseup = function (e) {                     //se detecta cuando se suelta el click
    var intervalID = window.setInterval(mostrar_tiempo, 1000);
    localStorage.setItem("vidahuevo", 100);
>>>>>>> e6fbd49cd17e4c0eba794eaeb72850129a12a3e4

canvas.onmouseup = function (e) {                       //se detecta cuando se suelta el click
    var intervalID = window.setInterval(mostrar_tiempo, 1000);
    localStorage.setItem("vidahuevo", 100);

    var cRect = canvas.getBoundingClientRect();         // Gets CSS pos, and width/height
    var soltadoX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas
    var soltadoY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make
<<<<<<< HEAD
    if (soltadoX >= 1140 && soltadoY < 600 && soltadoX <= 1380 && soltadoY > 400 && siguiendo && localStorage.getItem("muerto") == "false") {                                // verifica si se solto en el tronco para sumar puntos
=======
    if (soltadoX >= 1140 && soltadoY < 600 && soltadoX <= 1380 && soltadoY > 400 && siguiendo && localStorage.getItem("muerto") == "false") {   // verifica si se solto en el tronco para sumar puntos
>>>>>>> e6fbd49cd17e4c0eba794eaeb72850129a12a3e4
        (document.getElementById("myCanvas").getContext("2d")).clearRect(0, 0, canvas.width, canvas.height);
        var img = document.getElementById(localStorage.getItem("colorhuevo"));
        (document.getElementById("myCanvas").getContext("2d")).drawImage(img, 105, 670, 90, 90);
        localStorage.setItem("puntos",parseInt(localStorage.getItem("puntos"))+1);

        var parpado = document.getElementById("parpado");
        (document.getElementById("myCanvas").getContext("2d")).drawImage(parpado, 426, -100);

        mostrar_puntos();
    } else {
<<<<<<< HEAD
        if (localStorage.getItem("muerto") != "true") { // al soltar el huevo en una posicion que no es la indicada vuelve aa la base
=======
        if (localStorage.getItem("muerto") != "true") {
>>>>>>> e6fbd49cd17e4c0eba794eaeb72850129a12a3e4

            (document.getElementById("myCanvas").getContext("2d")).clearRect(0, 0, canvas.width, canvas.height);
            var img = document.getElementById(localStorage.getItem("colorhuevo"));
            (document.getElementById("myCanvas").getContext("2d")).drawImage(img, 105, 670, 90, 90);
            var parpado = document.getElementById("parpado");
            (document.getElementById("myCanvas").getContext("2d")).drawImage(parpado, 426, -100);
        } else {
            
            localStorage.setItem("puntos", 0);

        }
    }
    siguiendo = false;
    canvas.removeEventListener("mousemove", seguir);

}


/** Esta funcion se encarga de graficar el huevo arrastrandose y detectar la velocidad del jugador, para luego restarle vida al huevo.
 * @method seguir
 * */
function seguir(e) { // Esta funcion sigue el cursor
    var intervalID = window.setInterval(mostrar_tiempo, 1000);
    oldx =parseInt(localStorage.getItem("oldx"));
    oldy =parseInt(localStorage.getItem("oldy"));
               
    var cRect = canvas.getBoundingClientRect();             // Gets CSS pos, and width/height
    var canvasX = Math.round(e.clientX - cRect.left);    // Subtract the 'left' of the canvas
    var canvasY = Math.round(e.clientY - cRect.top);     // from the X/Y positions to make

    (document.getElementById("myCanvas").getContext("2d")).clearRect(0, 300, canvas.width, 900);

    var img = document.getElementById(localStorage.getItem("colorhuevo"));
    (document.getElementById("myCanvas").getContext("2d")).drawImage(img, canvasX, canvasY, 90, 90);


    var seconds = new Date().getTime() / 1000;

    if (oldx != canvasX || oldy != canvasY) {            //DETECTA si hubo un movimiento
        var check = true;
    } else {
        var check = false;
    }
    (document.getElementById("myCanvas").getContext("2d")).clearRect(200, 0, canvas.width, 300);

    sospecha(canvasX, canvasY, seconds, check);       //se llama a la funcion sospecha enviando la posicion del cursor y el tiempo transcurrido, junto a una verificacion de movimiento
    mostrar_puntos();
    if (oldx - canvasX > parseInt(localStorage.getItem("margenvel"))) localStorage.setItem("vidahuevo", parseInt(localStorage.getItem("vidahuevo"))-oldx- canvasX);   // obtiene la velocidad de movimiento y en vase a eso resta vida al huevo
    if (oldx - canvasX < -parseInt(localStorage.getItem("margenvel"))) localStorage.setItem("vidahuevo", parseInt(localStorage.getItem("vidahuevo"))+oldx- canvasX);
    if (oldy - canvasY > parseInt(localStorage.getItem("margenvel"))) vidahuevo = localStorage.setItem("vidahuevo", parseInt(localStorage.getItem("vidahuevo"))-oldy- canvasY);
    if (oldy - canvasY < -parseInt(localStorage.getItem("margenvel"))) vidahuevo = localStorage.setItem("vidahuevo", parseInt(localStorage.getItem("vidahuevo"))+oldy- canvasY);
    if (canvasY < 370) {
        canvas.removeEventListener("mousemove", seguir);
        muerte();
    }
    if (localStorage.getItem("vidahuevo") < 0) {

        canvas.removeEventListener("mousemove", seguir);
        (document.getElementById("myCanvas").getContext("2d")).clearRect(0, 0, canvas.width, canvas.height);
        var img = document.getElementById(localStorage.getItem("colorhuevo"));
        (document.getElementById("myCanvas").getContext("2d")).drawImage(img, 105, 670, 90, 90);
        var brok = document.getElementById("huevor");
        (document.getElementById("myCanvas").getContext("2d")).drawImage(brok, canvasX, canvasY, 90, 90);

        (document.getElementById("myCanvas").getContext("2d")).clearRect(0, 0, canvas.width, 300);
        muerte()


    }
    localStorage.setItem("oldx",canvasX);
    localStorage.setItem("oldy",canvasY);
   

<<<<<<< HEAD
}
=======
};
>>>>>>> e6fbd49cd17e4c0eba794eaeb72850129a12a3e4

/**
 * Esta funcion carga una imagen a modo de  death-cam o pantalla de muerte.
 * @method muerte
 */
function muerte() {                     // se carga la death cam
    mostrar_puntos();
    var img2 = new Image();
    img2.src = "imagenes/death.png";
    img2.onload = function () {
        (document.getElementById("myCanvas").getContext("2d")).drawImage(img2, 0, 0);
    }
    localStorage.setItem("muerto",true);
   
}
localStorage.setItem("sos",0);
localStorage.setItem("tt",0);
/**
 * Realiza las animaciones de sospecha (se mueve el ojo y la lengua ).
 * @method sospecha
 * @param {var} x - posicion del cursor en x.
 * @param {var} y - posicion del cursor en y.
 * @param {var} t - tiempo de ejecución.
 * @param {Boolean} check - Detecta si hay movimiento en el cursor.
 */

localStorage.setItem("sos",0);
localStorage.setItem("tt",0);
function sospecha(x, y, t, check) {      // animaciones de sospecha (se mueve el ojo y la lengua )
    
    var otro = 4;
    if (Math.round(t % 12) == 0) {          //se activa la sospecha y realiza la animacion
        localStorage.setItem("tt",t); 
        animacionojos(x);
        localStorage.setItem("sos",parseInt(localStorage.getItem("sos"))+1);
    }


    if (parseInt(localStorage.getItem("sos")) > 0) {
        if (t - parseInt(localStorage.getItem("tt"))>= parseInt(localStorage.getItem("timewhait"))) {            //le da un tiempo de reaccion al usuario
            if (t - parseInt(localStorage.getItem("tt")) < parseInt(localStorage.getItem("timewhait2"))) {            //se abre el ojo de la serpiente  y verifica que no te muevas

                otro = 0;

                (document.getElementById("myCanvas").getContext("2d")).clearRect(0, 0, canvas.width, 300);
                animacionojos(x);

                if (check) {
                    localStorage.setItem("tt",0);

                    canvas.removeEventListener("mousemove", seguir);
                    muerte();
                }
            } else {
                (document.getElementById("myCanvas").getContext("2d")).clearRect(0, 0, canvas.width, 300);
                localStorage.setItem("sos",0);
            }
        }
    }
    if (otro == 4) {
        var parpado = document.getElementById("parpado");
        (document.getElementById("myCanvas").getContext("2d")).drawImage(parpado, 426, -100);
    } else {
        (document.getElementById("myCanvas").getContext("2d")).clearRect(0, 0, canvas.width, 300);
<<<<<<< HEAD
        animacionojos(x);
=======
        animacionojos(x, y);
>>>>>>> e6fbd49cd17e4c0eba794eaeb72850129a12a3e4
    }
}

/**
 * Esta función carga la animación de los ojos según la posición del cursor.
 * @method animacionojos
 * @param {var} x - Posición del cursor en x
 */
function animacionojos(x) {          // se carga la imagen del ojo  dependiendo la posicion del cursor
    if (x > 777) {

        var ojod = document.getElementById("ojod");
        (document.getElementById("myCanvas").getContext("2d")).drawImage(ojod, 426, -100);
    } else {

        var ojoi = document.getElementById("ojoi");
        (document.getElementById("myCanvas").getContext("2d")).drawImage(ojoi, 426, -100);

    }
    if (x % 4 == 0) {
        var lengua = document.getElementById("lengua");
        (document.getElementById("myCanvas").getContext("2d")).drawImage(lengua, 446, -115);
    }
}
    
    
