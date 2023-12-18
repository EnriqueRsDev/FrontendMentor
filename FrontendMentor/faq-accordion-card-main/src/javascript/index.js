const questions = document.querySelectorAll('.faq');

// for (let question of questions) {
//     question.addEventListener('click', () => {
//         if(question.classList.contains('faq')) {
//             question.classList.toggle('faq-open')
//         }
//     })
// }

for (let question of questions) {
    question.addEventListener('click', () => {
        if(question.classList.contains('faq-open')) {
            // Si la pregunta actual ya está abierta, la cerramos
            question.classList.remove('faq-open');
        } else {
            // Si la pregunta actual está cerrada, la abrimos y cerramos las demás
            for (let otherQuestion of questions) {
                if (otherQuestion !== question && otherQuestion.classList.contains('faq-open')) {
                    otherQuestion.classList.remove('faq-open');
                }
            }
            question.classList.add('faq-open');
        }
    });
}