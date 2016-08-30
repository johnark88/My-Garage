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
  //alert the user if needed fields are left blank
  if(newCar.year == ''|| newCar.make == ''|| newCar.model ==' ' ){
    alert('Please fill in the required fields');
  }else{
    //continue if neede fields are filled in
    document.getElementById('carInput').reset();
    //push car into garage
    garage.push( newCar );
    //display cars
    displayCars();
  }
};//end addCar

//used to clear input fields



var displayCars = function () {
  console.log('in displayCars');
  console.log(garage);
  //empty our div element
  document.getElementById('allCars').innerHTML="";
  //for each car in the garage, add a list item with year, make and modelIn
for (var i = 0; i < garage.length; i++) {
  //car information(year,make, model)
var carInfo = '<h2>' + garage[i].year + ' ' + garage[i].make + ' '
+ garage[i].model + '</h2><img src="' + garage[i].picURL + '"><p>'
+ garage[i].description + ' <button onClick="takeOut( ' + i + ' )"> Take me out for a drive </button></p>';
  // append car info to output div
document.getElementById('allCars').innerHTML += carInfo;
}//end for
};//end display cars

var takeOut = function (index) {
console.log('lets take out '+ garage[index].year + ' ' + garage[index].model);
//splice the car at this index from out array
garage.splice(index,1);
//show cars in garage
displayCars();
};//end take out


//Sets focus back to first text box in the form -- First Name.
function setFocus() {
    document.getElementById("yearIn").focus();
}//end setFocus
