// script.js

document.addEventListener("DOMContentLoaded", function() {
    var userTypeSelect = document.getElementById('user_type');
    var registrationForm = document.getElementById('registration_form');
  
    // Function to update form action based on user type selection
    function updateAction() {
      var userType = userTypeSelect.value;
  
      if (userType === 'contestant') {
        registrationForm.action = 'studentHomePage.html';
      } else if (userType === 'quiz_master') {
        registrationForm.action = 'quizMakerHomePage.html';
      }
    }
  
    // Event listener for select element change
    userTypeSelect.addEventListener('change', updateAction);
  
    // Initial call to set form action based on default select value
    updateAction();
  });
  