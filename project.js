const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")


const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-buttons")

let shuffledQuestions, currectQuestionIndex
let quizScore = 0;

startButton.addEventListener("click", startGame)

nextButton.addEventListener("click", () => {
    currectQuestionIndex++
    setnextQuestion()

})




function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currectQuestionIndex = 0;
    questionContainerElement.classList.remove("hide")
    setnextQuestion()
    quizScore = 0
}

function setnextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currectQuestionIndex])



}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach((answer) => {
        const button = document.createElement("button")
        button.innerText = answer.text;
        button.classList.add("btn")
        button.dataset.correct = answer.correct
        button.addEventListener("click", selectAnswer)
        answerButtonElement.appendChild(button)

    })
}


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)

    }
}

function selectAnswer(e) {
    const selectedButton = e.target

    Array.from(answerButtonElement.children).forEach((button) => {
        setStatusClass(button)
    })
    if (shuffledQuestions.leght > currectQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "restart"
        startButton.classList.remove("hide")
    }
    if (selectedButton.dataset.correct == "true") {
        quizScore++
    }
    document.getElementById("right-answers").innerText = `Score: ${quizScore}`
}

function setStatusClass(element) {
    clearStatusClass(element)
    if (element.dataset.correct === "true") {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}




function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
const questions = [
    {
        question: "Was gibt 1+1?",
        answer: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false },



        ],

    },
    {
        question: "Was gibt 2-1?",
        answer: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false },



        ],

    },

]


