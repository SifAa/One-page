const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const resultShow = document.querySelector('.rshow');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // Check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // show result on page
    scrollTo(0,0);
    
    result.classList.remove('d-none');  
    
    let output = 0;
    const timer = setInterval(() => {
        resultShow.textContent = `${output}%`;
        if (output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});

// window object (global object) it is automatically inferred