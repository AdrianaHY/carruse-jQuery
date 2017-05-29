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
