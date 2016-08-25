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
  //empty our ul element
  document.getElementById('allCars').innerHTML="";
  //for each car in the garage, add a list item with year, make and modelIn
for (var i = 0; i < garage.length; i++) {
  //car information(year,make, model)
  var carInfo = garage[i].year + ' ' + garage[i].make + ' ' + garage[i].model;
  //put carInfo inside a list item through a textNode
  //create the li
  var listItem = document.createElement('li');
  // create textNode
  var textNode = document.createTextNode( carInfo );
  //append textNode as child li
  listItem.appendChild( textNode );
  // append list item to ul
  document.getElementById('allCars').appendChild( listItem );
  console.log( carInfo );
  }
};//end display cars
