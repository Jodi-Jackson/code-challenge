const question = document.getElementById ("question");
const choices = Array.from(document.getElementsByClassName ("answer-text"));
const scoreText = document.getElementById("score");

let currentQuestion = {}
let acceptingAnswers = false;
let score = 0;

//create questions
let availableQuestions = [
    {
        question: "What is the default behvior called that is used to move declarations to the top of the current scope?",
        choice1: "Sorting",
        choice2: "Arranging",
        choice3: "Hoisting",
        choice4: "Jumping",
        answer: 3

    },
    {
        question: "What are the identifiers called that cannot be used as variables or function names?",
        choice1: "Favorites",
        choice2: "Reserved Words",
        choice3: "Constants",
        choice4: "Concrete Terms",
        answer: 2

    },
    {
        question: "Where is the JavaScript placed inside and HTML document or page?",
        choice1: "In the <body> and <head> sections.",
        choice2: "In the <meta> section.",
        choice3: "In the <footer> section.",
        choice4: "In the <title> section.",
        answer: 1

    },
    {
        question: "What kind of statement is used to execute actions based on a trigger or condition?",
        choice1: "Fired Event",
        choice2: "Conditional statement",
        choice3: "Boolean Variable",
        choice4: "RegExp or Regular Expression",
        answer: 2

    },
    {
        question: "What is the default behvior called that is used to move declarations to the top of the current scope?",
        choice1: "Sorting",
        choice2: "Arranging",
        choice3: "Hoisting",
        choice4: "Jumping",
        answer: 3

    },
    {
        question: "In JavaScript, what element is used to store multiple values in a single variable?",
        choice1: "Strings",
        choice2: "Variables",
        choice3: "Functions",
        choice4: "Arrays",
        answer: 4

    },
    {
        question: "In JavaScript, what element is used to store and manipulate text, usually in multiples?",
        choice1: "Strings",
        choice2: "Arrays",
        choice3: "Variables",
        choice4: "Recorders",
        answer: 1

    },
    {
        question: "What is the format called that is used for storing and transporting data?",
        choice1: "Syntax",
        choice2: "HTML",
        choice3: "Font",
        choice4: "JSON",
        answer: 4

    },
    {
        question: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
        choice1: "Syntax",
        choice2: "Output",
        choice3: "JSON",
        choice4: "Host",
        answer: 1

    }

]
//create constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 8;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions=[
        {
            question: "What is the default behvior called that is used to move declarations to the top of the current scope?",
            choice1: "Sorting",
            choice2: "Arranging",
            choice3: "Hoisting",
            choice4: "Jumping",
            answer: 3
    
        },
        {
            question: "What are the identifiers called that cannot be used as variables or function names?",
            choice1: "Favorites",
            choice2: "Reserved Words",
            choice3: "Constants",
            choice4: "Concrete Terms",
            answer: 2
    
        },
        {
            question: "Where is the JavaScript placed inside and HTML document or page?",
            choice1: "In the <body> and <head> sections.",
            choice2: "In the <meta> section.",
            choice3: "In the <footer> section.",
            choice4: "In the <title> section.",
            answer: 1
    
        },
        {
            question: "What kind of statement is used to execute actions based on a trigger or condition?",
            choice1: "Fired Event",
            choice2: "Conditional statement",
            choice3: "Boolean Variable",
            choice4: "RegExp or Regular Expression",
            answer: 2
    
        },
        {
            question: "What is the default behvior called that is used to move declarations to the top of the current scope?",
            choice1: "Sorting",
            choice2: "Arranging",
            choice3: "Hoisting",
            choice4: "Jumping",
            answer: 3
    
        },
        {
            question: "In JavaScript, what element is used to store multiple values in a single variable?",
            choice1: "Strings",
            choice2: "Variables",
            choice3: "Functions",
            choice4: "Arrays",
            answer: 4
    
        },
        {
            question: "In JavaScript, what element is used to store and manipulate text, usually in multiples?",
            choice1: "Strings",
            choice2: "Arrays",
            choice3: "Variables",
            choice4: "Recorders",
            answer: 1
    
        },
        {
            question: "What is the format called that is used for storing and transporting data?",
            choice1: "Syntax",
            choice2: "HTML",
            choice3: "Font",
            choice4: "JSON",
            answer: 4
    
        },
        {
            question: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
            choice1: "Syntax",
            choice2: "Output",
            choice3: "JSON",
            choice4: "Host",
            answer: 1
    
        }
    ];
    getNewQuestion ();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      return window.location.assign("scores.html")  
    }

   questionCounter++;
   const questionTable =  Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionTable] ;
   question.innerText = currentQuestion.question; 

   choices.forEach ( (choice) => {
       const number = choice.dataset ['number']
       choice.innerText = currentQuestion['choice' + number]
   });

   availableQuestions.splice (questionTable, 1);
   acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener ("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

//animation for correct vs. incorrect answer
        const classToApply = 
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") { incrementScore(CORRECT_BONUS);
        }

                
       selectedChoice.parentElement.classList.add(classToApply);
        //remove class
            setTimeout( () =>{
         selectedChoice.parentElement.classList.remove(classToApply);
         getNewQuestion();
        }, 1000)
       
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};


startGame();


