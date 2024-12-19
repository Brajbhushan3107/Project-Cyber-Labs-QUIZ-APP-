let users = [];
let quizzes = [];
let currentUser = null;

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    users.push({ username, password, quizHistory: [] });
    alert('User registered successfully!');
}
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; currentUser = users.find(user => user.username === username && user.password === password);
    if (currentUser) {
        alert('Login successful!');
        document.getElementById('auth').style.display = 'none'; document.getElementById('quiz-section').style.display = 'block'; loadQuiz();
    }
    else {
        alert('Invalid credentials. Please try again.');

    }
}
function loadQuiz() {
    document.getElementById('quiz-title').innerText = 'Sample Quiz';
    document.getElementById('questions').innerHTML = `
     <div>
      <p>Question 1: How many players are there in a squad of cricket team ?</p> 
      <input type="radio" name="q1" value="15"> 15
       <input type="radio" name="q1" value="11"> 11
       <input type="radio" name="q1" value="9"> 9
       <input type="radio" name="q1" value="7"> 7
     </div>
     <div>
      <p>Question 2: What is the value of log100 ?</p>
      <input type="radio" name="q2" value="1">1   <input type="radio" name="q2" value="2"> 2 <input type="radio" name="q2" value="3">3<input type="radio" name="q2" value="4"> 4
      <p>Question 3: What is the fullform of HTML?</p>
      <input type="text" name="q2" placeholder="Write full form"> 
      </div> `;

}
function submitQuiz() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
    };
    let score =0;
    if (answers.q1 === '15') score++;
    if (answers.q2 === '2') score++;
    if (answers.q3 === 'Hyper Text Markup Language') score++;
    currentUser.totalScore += score;
    currentUser.quizHistory.push({ answers, score });
    alert('Quiz submitted successfully!');
}

    
//  Javascipt of updating leaderboard  remaining by tonight .
// i'll try to complete it in preceding days.