var app = angular.module('myApp', []);
app.service('time',function($interval){
	this.Time = function(){
    return new Date().toLocaleTimeString();
    }

});
app.controller('myCtrl', function($scope, $interval,myFactory,time) {
  $scope.theTime = time.Time();
  $interval(function () {
      $scope.theTime = time.Time();
  }, 1000);
  $scope.checkmail = function() {
    myFactory.checkEmail($scope.email);
  }
  $scope.checkPh = function() {
    myFactory.checkPhone($scope.phone);
  }
});

app.factory('myFactory', function() {
  var factory = {};
  factory.checkAge = function(a) {
    var age = parseInt(a);
    if (age<0) {
      alert("Age cannot be negative");
    }
    else if (age<18) {
      alert("Age less than 18 comes under pediatrician");
    }
  }
  factory.checkEmail = function(email) {
    var ind = email.indexOf('@');
    if (ind==-1 && email!=="") {
      alert("Valid mail id is required");
    }
  }
  factory.checkPhone = function(phone) {
		phone = phone.toString();
    if (phone.length!=10 && phone!=="") {
      alert("Invalid Phone Number");
    }
  }
  return factory;
});
