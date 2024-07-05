document.getElementById("quizMasterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Fetch values from input fields
    var email = document.getElementById("quizMasterEmail").value;
    var password = document.getElementById("quizMasterPassword").value;
    
    // Perform authentication logic here (e.g., send request to server)
    console.log("Quiz Master Login - Email: " + email + ", Password: " + password);
    // Redirect or perform further actions based on authentication result
  });
  
  document.getElementById("contestantForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Fetch values from input fields
    var email = document.getElementById("contestantEmail").value;
    var password = document.getElementById("contestantPassword").value;
    
    // Perform authentication logic here (e.g., send request to server)
    console.log("Contestant Login - Email: " + email + ", Password: " + password);
    // Redirect or perform further actions based on authentication result
  });
  