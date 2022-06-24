var app = angular.module("myApp",[]);
app.directive("about",function() {
  return {
    template : "<br><h1>About us</h1><p> We students of Thiagarjar College of engineering have planned to create a website for all the uers. Considering this pandemic suituation we have planned to make a website named LifeCare where the users can check the free availability of beds in the hospital and to make appointments with the doctors to meet them or to make virtual consultancy. Our website will make a easy path for the users to check about availability of hospitals 24/7.</p>"
  };
});
app.directive("appointmentSection",function() {
  return {
    template : "<br><h1>Appointments</h1><br><br><p>We have set the appiontment features to all the users so that you can see the doctors availabity in our website. then you can fill the form to mention their availability of time and their problem. If the doctor was able to attend that patient, they will give the appointment to that user. If you have to make any appointments you are requested to have a login id and password of our page. If not you can create a account in our signup page.<br><br>Once you have your own login id you have book your appointments. If its only a minor problem you can apply for virtual meeting. Or else you can apply here and get to meet the doctor.</p><br>"
  };
});
app.directive("bedAvailabilitySection",function() {
  return {
    template : "<br><br><h1>Bed Availability</h1><br><br><p>Telehealth, Home Devices Help Increase Bed Capacity in Hospitals.As the COVID-19 virus continues to spread, there is a growing need for remote monitoring of other types of patients. See how senior living centers are implementing this Virtual Exam Room.<br><br>Amidst the pandemic, hospitals throughout INDIA faced with too few beds if nothing is done to improve capacity.We provide telehealth serice of bed status update, that move beyond a simple phone or Skype call to the doctor can help everyday patients get the care they need while leaving more beds available for COVID-19 patients and providing the essential social distancing required to slow the spread of the dangerous virus.<br><br></p>"
  };
});
app.directive("virtualConsultancySection",function() {
  return {
    template : "<h1>Virtual Consultancy</h1><br><p>With the help of live video, audio, and instant messaging, patients can now interface with healthcare providers from the comfort of their own home. This is especially beneficial for those who live in rural communities, who frequently would otherwise need to drive long distances to their local doctor office or to see a specialist.<br><br> Virtual care is a broad term that encompasses all the ways healthcare providers remotely interact with their patients. In addition to treating patients via telemedicine, providers may use live video, audio, and instant messaging to communicate with their patients remotely."
  };
});
