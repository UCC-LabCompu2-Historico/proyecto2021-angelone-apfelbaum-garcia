
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var oldx=0;
var oldy=0;
var vidahuevo;
var puntos= 0;
var muerto;
var sos=0;
var tt=0;
var timewhait=1;
var timewhait2=3;
var margenvel=13;
var colorhuevo= "drag-items";
var siguiendo=false;

function dificultad(tim,vel,col){                    //se setea la dificultad del juego
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "130px impact";
    ctx.fillStyle = "white";
    ctx.fillText("Click para comenzar!", 250, 500);
    puntos=0;
    timewhait=tim;
    timewhait2=timewhait+3;
    margenvel=vel;
    switch  (col){
        case 1:
            colorhuevo= "drag-items";
            break;
        case 2:
            colorhuevo= "drag-items2";
            break;
        case 3:
            colorhuevo= "drag-items3";
            break;
    }

}

ctx.font = "130px impact";
ctx.fillStyle = "white";
ctx.fillText("Click para comenzar!", 250, 500);

function mostrar_puntos(){                          //Muestra los Puntos 
    ctx.clearRect(0, 0, canvas.width, 70);
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("1.0", "white");
    ctx.strokeStyle = gradient;
    ctx.font = "60px Impact";
    ctx.fillStyle = "white";
    ctx.strokeText("Puntos : "+puntos, 600, 70);
}

canvas.onmousedown = function (e){                        //Detecta cuando se clickea 
    vidahuevo=100;
    muerto=false;
    var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
    var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
    var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
                                                                ctx.clearRect(0, 0, canvas.width, canvas.height);  // (0,0) the top left of the canvas
   var img = document.getElementById(colorhuevo);
    ctx.drawImage(img, 105, 670,90, 90)
    var parpado = document.getElementById("parpado");
    ctx.drawImage(parpado, 426, -100);
    var img = document.getElementById(colorhuevo);
    ctx.drawImage(img, 105, 670,90, 90)

    mostrar_puntos();
    if (canvasX>=80 && canvasY<760  && canvasX<=180 && canvasY>590){  // verifica si se clickea en el nido para obtener el huevo!
    oldx=canvasX;
    oldy=canvasY;    
    siguiendo=true;
    canvas.addEventListener("mousemove", seguir);            
    }}
    
canvas.onmouseup = function(e){                     //se detecta cuando se suelta el clikc
        vidahuevo=100;
         
        var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
        var soltadoX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
        var soltadoY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
        if (soltadoX>=1140 && soltadoY<600  && soltadoX<=1380 && soltadoY>400 && siguiendo&& muerto==false){   // verifica si se solto en el tronco para sumar puntos
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var img = document.getElementById(colorhuevo);
            ctx.drawImage(img, 105, 670,90, 90)
            puntos=puntos+1;
            
            var parpado = document.getElementById("parpado");
            ctx.drawImage(parpado, 426, -100)
            
            mostrar_puntos();
        }
        else{
            if(muerto!=true){
                   
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var img = document.getElementById(colorhuevo);
            ctx.drawImage(img, 105, 670,90, 90)
            var parpado = document.getElementById("parpado");
            ctx.drawImage(parpado, 426, -100)
            }
            else{
                
                puntos= 0;
            }
        }
        siguiendo=false; 
        canvas.removeEventListener("mousemove", seguir);
        
    }



function seguir(e){                                        // Esta funcion sigue el cursor
    var cRect = canvas.getBoundingClientRect();            // Gets CSS pos, and width/height
        var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
        var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  
        
        ctx.clearRect(0, 300, canvas.width, 900);  s

        var img = document.getElementById(colorhuevo);
        ctx.drawImage(img, canvasX, canvasY,90, 90)

        
        var seconds = new Date().getTime() / 1000;

        if (oldx!=canvasX || oldy!=canvasY){            //DETECTA si hubo un movimiento
            var check=true;
        }
        else{
            var check=false;
        }
        ctx.clearRect(0, 0, canvas.width, 300);
        
        sospecha(canvasX, canvasY,seconds,check);       //se llama a la funcion sospecha enviando la posicion del cursor y el tiempo transcurrido, junto a una verificacion de movimiento
        mostrar_puntos();
        
        if(oldx-canvasX>margenvel)vidahuevo=vidahuevo-oldx-canvasX;   // obtiene la velocidad de movimiento y en vase a eso resta vida al huevo
        if(oldx-canvasX<-margenvel) vidahuevo=vidahuevo+oldx-canvasX;
        if(oldy-canvasY>margenvel )vidahuevo=vidahuevo-oldy-canvasY;
        if(oldy-canvasY<-margenvel)vidahuevo=vidahuevo+oldy-canvasY;
        if(canvasY<370){
            canvas.removeEventListener("mousemove", seguir);
            muerte();
        }
        if (vidahuevo<0){
            
        canvas.removeEventListener("mousemove", seguir);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var img = document.getElementById(colorhuevo);
        ctx.drawImage(img, 105, 670,90, 90)    
        var brok = document.getElementById("huevor");
        ctx.drawImage(brok, canvasX, canvasY,90, 90);

        ctx.clearRect(0, 0, canvas.width,300);
        muerte()
        
        
          
    }
        oldx=canvasX;
        oldy=canvasY;
        

};

function muerte(){                     // se carga la death cam

    mostrar_puntos();
    var img2 = new Image();
    img2.src = "imagenes/death.png";
    img2.onload = function() {
    ctx.drawImage(img2, 0, 0);}    
    
    
    muerto=true;
    }
    
function sospecha(x, y,t,check){      // animaciones de sospecha (se mueve el ojo y la lengua ) 
    var otro=4;
    if (Math.round(t%12)==0 ){          //se activa la sospecha y realiza la animacion
        tt=t;
        animacionojos(x);
        sos+=1;
    }

    
    if(sos>0){                              
        if(t-tt>=timewhait){            //le da un tiempo de reaccion al usuario
            if(t-tt<timewhait2){            //se abre el ojo de la serpiente  y verifica que no te muevas      
                
                otro=0;
                
                ctx.clearRect(0, 0, canvas.width, 300);
                animacionojos(x);
                
                if (check){
                    tt=0;
                    
                    canvas.removeEventListener("mousemove", seguir);
                    muerte();
                }
            }
            else{
                
                ctx.clearRect(0, 0, canvas.width, 300);
                sos=0;
            }
        }
    }
    if(otro==4){
        var parpado = document.getElementById("parpado");
        ctx.drawImage(parpado, 426, -100);
    }   
    else{
        ctx.clearRect(0, 0, canvas.width, 300);
            animacionojos(x,y);
    }
}
function animacionojos(x){          // se carga la imagen del ojo  dependiendo la posicion del cursor
        if(x>777){   
            
            var ojod = document.getElementById("ojod");
            ctx.drawImage(ojod, 426, -100);
        }
        else{
            
            var ojoi = document.getElementById("ojoi");
            ctx.drawImage(ojoi, 426, -100);

        }
        if(x%4==0){
            var lengua = document.getElementById("lengua");
            ctx.drawImage(lengua, 446, -115);
        }
    }
    
    








  