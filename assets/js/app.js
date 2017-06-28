$(document).ready(start);

var lista = "";

function start() {
  crearListaEstudiantes();
}

function crearListaEstudiantes() {
  $.getJSON("http://laboratoria.cuadra.co:9339/api/v1/students/", function(alumnas){
    alumnas.forEach(function(alumna){
      console.log(alumna.name + " " + alumna.pLastName + " " + alumna.mLastName);
      $("<li />").html('<input type="checkbox">' +
      alumna.name + " " +
      alumna.pLastName  + " " +
      alumna.mLastName).appendTo(".lista-alumnas");
    })
  });
}
