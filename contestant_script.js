let questions = JSON.parse(localStorage.getItem('questions')) || [];
let userScore = 0;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let unattemptedQuestions = questions.length;
let selectedOption = null;

function loadQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const question = questions[index];
    if (!question) return;

    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    const questionTitle = document.createElement('div');
    questionTitle.classList.add('question-title');
    questionTitle.innerText = `${index + 1}. ${question.title}`;
    questionElement.appendChild(questionTitle);

    const options = document.createElement('div');
    options.classList.add('options');

    ['A', 'B', 'C', 'D'].forEach(optionKey => {
        const optionElement = document.createElement('button');
        optionElement.classList.add('option');
        optionElement.innerText = `${optionKey}) ${question.options[optionKey]}`;
        optionElement.onclick = () => selectOption(optionKey, index, optionElement);
        options.appendChild(optionElement);
    });

    questionElement.appendChild(options);
    questionContainer.appendChild(questionElement);

    document.getElementById('clear-response').style.display = 'inline-block';
    if (index === questions.length - 1) {
        document.getElementById('next-question').style.display = 'none';
        document.getElementById('submit-test').style.display = 'inline-block';
    } else {
        document.getElementById('next-question').style.display = 'inline-block';
        document.getElementById('submit-test').style.display = 'none';
    }
}

function selectOption(optionKey, questionIndex, optionElement) {
    const question = questions[questionIndex];
    selectedOption = optionElement;
    if (question.correctOption === optionKey) {
        userScore += parseInt(question.score, 10);
        correctAnswers++;
    } else {
        wrongAnswers++;
    }

    unattemptedQuestions--;
    disableOptions();
}

function disableOptions() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.disabled = true);
}

function clearResponse() {
    if (selectedOption) {
        selectedOption.disabled = false;
        userScore = Math.max(0, userScore - parseInt(questions[currentQuestionIndex].score, 10));
        correctAnswers--;
        unattemptedQuestions++;
        selectedOption = null;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    }
}

function submitTest() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const scoreElement = document.createElement('div');
    scoreElement.innerHTML = `
        <h2>Test Completed</h2>
        <p>Your Score: ${userScore}</p>
        <p>Correct Answers: ${correctAnswers}</p>
        <p>Wrong Answers: ${wrongAnswers}</p>
        <p>Unattempted Questions: ${unattemptedQuestions}</p>
    `;

    let emoji;
    if (userScore >= (questions.length * 0.7)) {
        emoji = '🎉🥳 Great Job!🎉🥳';
    } else if (userScore >= (questions.length * 0.5)) {
        emoji = '😊😁Good Job!😊😁';
    } else {
        emoji = '😞🥲 Improve and Retake the Test!😞🥲';
    }

    scoreElement.innerHTML += `<p>${emoji}</p>`;

    questionContainer.appendChild(scoreElement);
    document.getElementById('control-buttons').style.display = 'none';
}

window.onload = () => {
    if (questions.length > 0) {
        loadQuestion(0);
    } else {
        document.getElementById('question-container').innerHTML = '<p>No questions available.</p>';
    }
};
