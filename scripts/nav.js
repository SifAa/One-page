var quizbtn = document.querySelector('#quiz-btn');
var todobtn = document.querySelector('#todo-btn')
var quizpage = document.querySelector('#quiz-page')
var todopage = document.querySelector('#todo-page')
var nav = document.querySelector('.navigation-btn')

quizbtn.addEventListener('click', function () {
    quizpage.classList.remove('d-none');
    todopage.classList.add('d-none');
    quizbtn.disabled = true;
    todobtn.disabled = false;
    nav.classList.remove('bg-dark');
    nav.classList.add('bg-light');
});

todobtn.addEventListener('click', function () {
    quizpage.classList.add('d-none');
    todopage.classList.remove('d-none');
    quizbtn.disabled = false;
    todobtn.disabled = true;
    nav.classList.add('bg-dark');
    nav.classList.remove('bg-light');
});