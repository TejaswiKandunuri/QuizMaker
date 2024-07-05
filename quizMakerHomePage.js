document.getElementById('create-test-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Add Questions!');
});

let testName = document.getElementById('test-name').value;

// Store input value in localStorage
localStorage.setItem('data', testName);
