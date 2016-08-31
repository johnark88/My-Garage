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
}else{

garage.push(newCar);
// displayCars();
console.log(garage);
displayCars();
}
});
// $(document).on('click', '#hideInputs', function () {
//   console.log('in hide click');
//   $('#yearIn').val('');
//   $('#carInput').slideToggle();
// });

var displayCars = function() {
  console.log('in displayCars');
  console.log(garage);
$('#allCars').empty();
for (var i = 0; i < garage.length; i++) {
  // car bold text
    $( '#allCars' ).html( '<p><b>' + garage[ i ].year + ' ' + garage[ i ].make + ' ' + garage[ i ].model + '</b></p>' );
    // car description
    $( '#allCars' ).html( '<p>' + garage[ i ].description + '</p>' );
    // car image
    $( '#allCars' ).html( '<img src="' + garage[ i ].picURL + '">' );
  } // end for
};//end displayCars
