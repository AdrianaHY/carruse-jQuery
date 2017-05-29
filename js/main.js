// funciones para carrusel
$(document).ready(function(){
  //para que escondas todas las imágenes excepto la primera
  $("img").hide();
  $("#imagenUno").show();
  //para que cada punto muestre una imagenUno
  //span1
  $(".dot1").click(function(){
    $("img").hide();
    $("#imagenUno").show();
  });
  //span2
  $(".dot2").click(function(){
    $("img").hide();
    $("#imagenDos").show();
  });
  //span3
  $(".dot3").click(function(){
    $("img").hide();
    $("#imagenTres").show();
  });
  //span4
  $(".dot4").click(function(){
    $("img").hide();
    $("#imagenCuatro").show();
  });
  //span5
  $(".dot5").click(function(){
    $("img").hide();
    $("#imagenCinco").show();
  });
});

//funciones para las flechitas
var contadorSiguiente=0;
var contadorAnterior=0;
$("#siguiente").click(function(){
  if(contadorSiguiente==0){
    $("img").hide();
    $("#imagenUno").next().show();
    contadorSiguiente++;
  }
  else if(contadorSiguiente==1){
    $("img").hide();
    $("#imagenDos").next().show();
    contadorSiguiente++;
  }
  else if(contadorSiguiente==2){
    $("img").hide();
    $("#imagenTres").next().show();
    contadorSiguiente++;
  }
  else if(contadorSiguiente==3){
    $("img").hide();
    $("#imagenCuatro").next().show();
    contadorSiguiente;
  }
  else if(contadorSiguiente==4){
    $("img").hide();
    $("#imagenCinco").next().show();
    contadorSiguiente++;
  }
});

//anterior
$("#anterior").click(function(){
  if(contadorAnterior==0){
    $("img").hide();
    $("#imagenCinco").show();
    contadorAnterior++;
  }
  else if(contadorAnterior==1){
    $("img").hide();
    $("#imagenUno").show();
    contadorAnterior++;
  }
  else if(contadorAnterior==2){
    $("img").hide();
    $("#imagenDos").show();
    contadorAnterior++;
  }
  else if(contadorAnterior==3){
    $("img").hide();
    $("#imagenTres").show();
    contadorAnterior++;
  }
  else if(contadorAnterior==4){
    $("img").hide();
    $("#imagenCuatro").show();
    contadorAnterior++;
  }
});
