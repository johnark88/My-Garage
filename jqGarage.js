console.log('jqGarage Sourced');

var garage = [];

$( document ).on('click' , '#addCar' ,function (){
  console.log('addCar Click');
  var newCar = {
  year: $('#yearIn').val(),
  make: $('#makeIn').val(),
  model: $('#modelIn').val(),
  picURL: $('#picURLIn').val(),
  description: $('#descriptionIn').val()
};//end New Car
if(newCar.year == ''|| newCar.make == ''|| newCar.model == ' ' ){
  alert('Please fill in the required fields');
}else
{
  $('#carInput > input').each( function () {
  $(this).val('');
});
  garage.push(newCar);
  // displayCars();
  console.log(garage);
  displayCars();
}
});

var displayCars = function() {
  console.log('in displayCars');
  console.log(garage);
$('#allCars').empty();
  for (var i = 0; i < garage.length; i++) {
    // car bold text
    $( '#allCars' ).append( '<p><b>' + garage[ i ].year + ' ' + garage[ i ].make + ' ' + garage[ i ].model + '</b></p>' );
    // car description
    $( '#allCars' ).append( '<p>' + garage[ i ].description + '</p>' );
    // car image
    $( '#allCars' ).append( '<img src="' + garage[ i ].picURL + '">' );

  } // end for
};//end displayCars

$(document).ready(function(){
  $('#hideInputs').click(function (){
    $('#carInput').slideToggle();
  });
  });
