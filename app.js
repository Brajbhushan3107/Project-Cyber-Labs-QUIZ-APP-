let users = [];
let quizzes = [];
let currentUser = null;

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    users.push({ username, password, quizHistory: [], totalScore: 0 });
    alert('Welcome aboard! You have been successfully registered.');
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    currentUser = users.find(user => user.username === username && user.password === password);
    if (currentUser) {
        alert('Login successful! Time to take a quiz.');
        document.getElementById('auth').style.display = 'none';
        document.getElementById('quiz-section').style.display = 'block';
        loadQuiz();
    } else {
        alert('Oops! Invalid credentials. Please try again.');
    }
}

function loadQuiz() {
    document.getElementById('quiz-title').innerText = 'Sample Quiz';
    document.getElementById('questions').innerHTML = `
        <div>
            <p>Question 1: What is log10000?</p>
            <input type="radio" name="q1" value="3"> 3
            <input type="radio" name="q1" value="4"> 4

        </div>
        <div>
            <p>Question 2: What is the capital of France?</p>
            <input type="radio" name="q2" value="Berlin"> Berlin
            <input type="radio" name="q2" value="Paris"> Paris
                       
        </div>
        <div>
        <p>Question 3: Where is iit ism?</p>
        <input type="radio" name="q3" value="karnatka">Karnatka
            <input type="radio" name="q3" value="Jharkhand"> Jharkhand
            <p>Question 4: Who is the father of CS?</p>
             <input type="radio" name="q4" value="Alan Turing">Alan Turing 
              <input type="radio" name="q4" value="charles Babage">chales Babage
              <p>Question 5: Who had invented the JS?</p>
              <input type="radio" name="q5" value="Brandan Eich">Brandan Eich
              <input type="radio" name="q5" value="Hakom Wium Lie">Hakom Wium Lie
              
                          
    `;
}

function submitQuiz() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q2"]:checked').value,
        q4: document.querySelector('input[name="q2"]:checked').value,
        q5: document.querySelector('input[name="q2"]:checked').value,

    };
    let score = 0;
    if (answers.q1 === '4') score++;
    if (answers.q2 === 'Paris') score++;
    if (answers.q3 === 'Jharkhand') score++;
    if (answers.q4 === 'Alan Turing') score++;
    if (answers.q5 === 'Bradan Eich') score++;
    currentUser.totalScore += score;
    currentUser.quizHistory.push({ answers, score });
    alert('Great job! Your quiz has been submitted successfully.');

    // Update and display leaderboard
    updateLeaderboard();
}

function updateLeaderboard() {
    users.sort((a, b) => b.totalScore - a.totalScore);
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    users.forEach((user, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${user.username} - ${user.totalScore} points`;
        leaderboardList.appendChild(listItem);
    });
    document.getElementById('leaderboard').style.display = 'block';
}

