const questions = document.querySelectorAll('.card__questionSection__questionAndAnswerContainer__questionContainer')
const answers = document.querySelectorAll('.card__questionSection__questionAndAnswerContainer__answer')

const showSvgIcon = document.querySelectorAll('.card__questionSection__questionAndAnswerContainer__questionContainer__showSvgIcon')
const hideSvgIcon = document.querySelectorAll('.card__questionSection__questionAndAnswerContainer__questionContainer__hideSvgIcon')

function showOrHideAnswers(index) {

    const isHidden = answers[index].classList.contains('hidden')

    answers[index].classList.toggle('hidden')

    showSvgIcon[index].classList.toggle('hidden')
    hideSvgIcon[index].classList.toggle('hidden')

    questions[index].setAttribute('aria-expanded', String(isHidden))
}

questions.forEach((question, index) => {

    question.addEventListener('click', function () {

        showOrHideAnswers(index)

    })

})