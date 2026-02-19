const questions = document.querySelectorAll('.card__questionSection__questionAndAnswerContainer__questionContainer')
const answers = document.querySelectorAll('.card__questionSection__questionAndAnswerContainer__answer')

const showSvgIcon = document.querySelectorAll('.card__questionSection__questionAndAnswerContainer__questionContainer__showSvgIcon')
const hideSvgIcon = document.querySelectorAll('.card__questionSection__questionAndAnswerContainer__questionContainer__hideSvgIcon')

function showOrHideAnswers(index) {
    if (answers[index].classList.contains('hidden')) {

        answers[index].classList.remove('hidden')

        showSvgIcon[index].classList.add('hidden')
        hideSvgIcon[index].classList.remove('hidden')

    } else {

        answers[index].classList.add('hidden')

        showSvgIcon[index].classList.remove('hidden')
        hideSvgIcon[index].classList.add('hidden')
    }
}

questions.forEach((question, index) => {

    question.addEventListener('click', function () {

        showOrHideAnswers(index)

    })

})

questions.forEach((question, index) => {

    question.addEventListener('keydown', function (e) {

        if (e.key === 'Enter' || e.key === ' '){
            
            e.preventDefault()

            showOrHideAnswers(index)

        }
    })

})


