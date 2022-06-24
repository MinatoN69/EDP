var app = angular.module("myApp",[]);
app.controller("myController",function($scope) {
  // [["1","G1 Hospitals", "9475632180","24/7","Cardio and Orthopedic Specaility Center","300","120"],
  // ["2","Apollo Hospitals", "9876543210","24/7","Orthopedic Specaility Center","200","80"],
  // ["3","Meenakshi Mission Hospitals", "1234568790","24/7","Cardio Specaility Center","250","180"]];
  $scope.orderfn = function(x) {
    $scope.cate = x;
  }
  // $scope.jumma  = "Hello";
});
app.controller("tableController", function($scope) {
  $scope.details= "<%= data %>";
  console.log($scope.details);
//   $scope.x = [
//   {
//     id:1,
//     hospital_name:"G1 Hositals",
//     phone:"9475632180",
//     working_hours:"24/7",
//     description:"Cardio and Orthopedic Specaility Center",
//     total_beds:300,
//     beds_available:120,
//     fees:111
//   },
//   {
//     id:2,
//     hospital_name:"Apollo Hospitals",
//     phone:"9876543210",
//     working_hours:"24/7",
//     description:"Orthopedic Specaility Center",
//     total_beds:200,
//     beds_available:80,
//     fees:551
//   },
//   {
//     id:3,
//     hospital_name:"Meenakshi Mission Hospitals",
//     phone:"9652336802",
//     working_hours:"24/7",
//     description:"Cardio Specaility Center",
//     total_beds:250,
//     beds_available:180,
//     fees:294
//   },
//   {
//     id:4,
//     hospital_name:"MedIndia Hospitals",
//     phone:"9857413602",
//     working_hours:"24/7",
//     description:"Esophageal Lab and Intensive Digestive Care Unit",
//     total_beds:350,
//     beds_available:124,
//     fees:138
//   },
//   {
//     id:5,
//     hospital_name:"Fortis Malar Hospital",
//     phone:"9854022433",
//     working_hours:"24/7",
//     description:"Distinguished Multi Super-specialty Corporate Hospital",
//     total_beds:568,
//     beds_available:200,
//     fees:442
//   },
//   {
//     id:6,
//     hospital_name:"Aditya Hospital",
//     phone:"9965872236",
//     working_hours:"24/7",
//     description:"Neurosurgeons speciality center",
//     total_beds:310,
//     beds_available:20,
//     fees:301
//   },
//   {
//     id:7,
//     hospital_name:"Ezhil Hospital",
//     phone:"96600254789",
//     working_hours:"24/7",
//     description:"Multi-Speciality hospital",
//     total_beds:421,
//     beds_available:60,
//     fees:257
//   },
//   {
//     id:8,
//     hospital_name:"Gastro Care Hospital",
//     phone:"9652077432",
//     working_hours:"24/7",
//     description:"Gastrointestinal Surgery Clinic",
//     total_beds:622,
//     beds_available:200,
//     fees:423
//   },
//   {
//     id:9,
//     hospital_name:"Karaikal Medical Centre",
//     phone:"9856147563",
//     working_hours:"24/7",
//     description:"General Physician Clinic",
//     total_beds:312,
//     beds_available:50,
//     fees:304
//   },
//   {
//     id:10,
//     hospital_name:"Parvathy Ortho Hospital Private Limited",
//     phone:"9658230147",
//     working_hours:"24/7",
//     description:"Multi-speciality hospital",
//     total_beds:190,
//     beds_available:35,
//     fees:495
//   },
// ];
});

app.filter("fee_filter", function() {
  return function(x) {
    if ((x%10)<5) {
      return x-(x%10);
    }
    else {
      return x-(x%10)+10;
    }
  }
});
