console.log('sourced garage.js');
//garage array
var garage = [];

var addCar = function () {
  console.log('in addCar');
  //get user input
  //create car object
  var newCar = {
    year: document.getElementById('yearIn').value,
    make: document.getElementById('makeIn').value,
    model: document.getElementById('modelIn').value,
    picURL: document.getElementById('picURLIn').value,
    description: document.getElementById('descriptionIn').value
  };//end newCar
  //push car into garage
  garage.push( newCar );
  //display cars
  displayCars();
};//end addCar

var displayCars = function () {
  console.log('in displayCars');
  console.log(garage);
  //empty our div element
  document.getElementById('allCars').innerHTML="";
  //for each car in the garage, add a list item with year, make and modelIn
for (var i = 0; i < garage.length; i++) {
  //car information(year,make, model)
  var carInfo = '<h2>' + garage[i].year + ' ' + garage[i].make + ' ' + garage[i].model+ '</h2><img src="' + garage[i].picURL + '">';

  // append car info to output div
  document.getElementById('allCars').innerHTML += carInfo;
  console.log( carInfo );
  }
};//end display cars
