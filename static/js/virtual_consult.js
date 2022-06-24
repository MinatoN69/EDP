var app = angular.module("myApp",[]);
app.controller("myController",function($scope) {
  $scope.details= [
    {
      id: 1,
      name: "Sri Krishna",
      phone: "9876543210",
      age: 42,
      description: "Need Dialysis",
      date: "01/10/2021",
      doctor_name: "Dheepan Babu"
    },
    {
	    id: 2,
      name: "Rahul kannan",
      phone: "9685223405",
      age: 22,
      description: "Fever",
      date: "30/03/2021",
      doctor_name: "Karthick"
  	},
    {
      id: 3,
      name: "Jegan",
      phone: "9655230074",
      age: 50,
      description: "Jaundice",
      date: "09/05/2020",
      doctor_name: "Reena"
    },
    {
      id: 4,
      name: "Meena",
      phone: "9658742301",
      age: 29,
      description: "Influenza",
      date: "29/12/2020",
      doctor_name: "Sowmiya"
    },
    {
      id: 5,
      name: "Roshika",
      phone: "9652304478",
      age: 30,
      description: "Common Cold",
      date: "12/04/2021",
      doctor_name: "Rakshitha"
    },
    {
      id: 6,
      name: "Swetha",
      phone: "9965300145",
      age: 26,
      description: "Medical Checkup",
      date: "26/08/2020",
      doctor_name: "Manoj Kumar"
    },
    {
      id: 7,
      name: "Raj Kumar",
      phone: "9965880324",
      age: 60,
      description: "Fever",
      date: "10/03/2021",
      doctor_name: "Malathi"
    },
    {
      id: 8,
      name: "Vignesh Kumar",
      phone: "9003542178",
      age: 58,
      description: "Cold/Fever",
      date: "12/10/2020",
      doctor_name: "Nancy"
    },
    {
      id: 9,
      name: "Aparajithan",
      phone: "9257865478",
      age: 15,
      description: "Chickenpox",
      date: "14/03/2021",
      doctor_name: "Aburshi"
    },
    {
      id: 10,
      name: "Jayshree",
      phone: "9657841320",
      age: 63,
      description: "Malaria",
      date: "27/11/2021",
      doctor_name: "Nandhini"
    }
  ]
    // {
    //   id: ,
    //   name: ,
    //   phone: ,
    //   age: ,
    //   description: ,
    //   date: ,
    //   doctor_name:
    // },
    // {
    //   id: ,
    //   name: ,
    //   phone: ,
    //   age: ,
    //   description: ,
    //   date: ,
    //   doctor_name:
    // },
    // {
    //   id: ,
    //   name: ,
    //   phone: ,
    //   age: ,
    //   description: ,
    //   date: ,
    //   doctor_name:
    // },
    // {
    //   id: ,
    //   name: ,
    //   phone: ,
    //   age: ,
    //   description: ,
    //   date: ,
    //   doctor_name:
    // },
    // {
    //   id: ,
    //   name: ,
    //   phone: ,
    //   age: ,
    //   description: ,
    //   date: ,
    //   doctor_name:
    // },
    // {
    //   id: ,
    //   name: ,
    //   phone: ,
    //   age: ,
    //   description: ,
    //   date: ,
    //   doctor_name:
    // },
    // {
    //   id: ,
    //   name: ,
    //   phone: ,
    //   age: ,
    //   description: ,
    //   date: ,
    //   doctor_name:
    // },
    // {
    //   id: ,
    //   name: ,
    //   phone: ,
    //   age: ,
    //   description: ,
    //   date: ,
    //   doctor_name:
    // },
    // {
    //   id: ,
    //   name: ,
    //   phone: ,
    //   age: ,
    //   description: ,
    //   date: ,
    //   doctor_name:
    // },
    // {
    //   id: ,
    //   name: ,
    //   phone: ,
    //   age: ,
    //   description: ,
    //   date: ,
    //   doctor_name:
    // },
    // {
    //   id: ,
    //   name: ,
    //   phone: ,
    //   age: ,
    //   description: ,
    //   date: ,
    //   doctor_name:
    // },
// ];
  // [["1","G1 Hospitals", "9475632180","24/7","Cardio and Orthopedic Specaility Center","300","120"],
  // ["2","Apollo Hospitals", "9876543210","24/7","Orthopedic Specaility Center","200","80"],
  // ["3","Meenakshi Mission Hospitals", "1234568790","24/7","Cardio Specaility Center","250","180"]];
  $scope.orderfn = function(x) {
    $scope.cate = x;
  }
  // $scope.jumma  = "Hello";
});
