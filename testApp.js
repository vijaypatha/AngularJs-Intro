//delete this after practice
(function() {
var app = angular.module('familyTest',[]);// module and app name
app.controller('famController', function() {
  this.products = family; //attaching famController to data in object family.
});
var family = [
  {
    name: "Vijay Patha",
    age: 30,
    education: "MBA",
    Interest:"Entrepreuship"
  }
  {
    name: "Heidi Patha",
    age: 25.
    education: "Economics",
    Interest: "execution of ideas"
  }
];

} )();
