var app = angular.module("myApp",[]);

app.service("myService",function() {
  this.checkBeds = function(a) {
    if (a<0) {
      alert("Beds Count cannot be negative");
    }
  }
  this.checkLogic = function(a,b) {
    if (a<b) {
      alert("Available Beds cannot be greater than Total Beds");
    }
  }
});

app.controller("myCtrl",function($scope,myService) {
  $scope.bedcheck = function(a) {
    myService.checkBeds(a);
  }
  $scope.logiccheck = function(a,b) {
    myService.checkLogic(a,b);
  }
});
