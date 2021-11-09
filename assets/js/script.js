$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip()

  $("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente...");
  });

  $(".cambioColor").dblclick(function(){
    $(this).toggleClass("rojo");
  });

  $(".cardDesap .card-title").click(function(){
    $(this).siblings(".card-text").toggle(); //sibling llama al hermano
  });
});