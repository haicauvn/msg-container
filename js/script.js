// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
// ''
//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

const totalTime = 10 * 60 * 1000; 
const questions = [
    {
        question: 'Câu 1: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 2: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời2',
                checked : false
            },
            {
                text : 'B: Câu trả lời2',
                checked : false
            },{
                text : 'C: Câu trả lời2',
                checked : false
            },{
                text : 'D: Câu trả lời2',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 3: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 4: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 5: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 6: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 7: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 8: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 9: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 10: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
      question: 'Câu 11: Câu hỏi 1?',
      answers: [
          {
              text : 'A: Câu trả lời',
              checked : false
          },
          {
              text : 'B: Câu trả lời',
              checked : false
          },{
              text : 'C: Câu trả lời',
              checked : false
          },{
              text : 'D: Câu trả lời',
              checked : false
          },
      ],
  }
]

window.onload = function () {
    // Archive question
    if(!localStorage.getItem('questions')) {
      localStorage.setItem('questions', JSON.stringify(questions));
    }

    // Start button and remaining of time
    const btnStart = document.querySelector('#save-btn');
    const labelTime = document.querySelector('#time');
    var timeBegin = localStorage.getItem('timeBegin');
    var runTime = function() {
        if (timeBegin) {
            btnStart.innerText = 'Submit';
            setInterval(function() {
                showRemainTime();
            }, 1000) 
        } else {
            labelTime.innerText = '20 : 00';
        }
    }
    runTime();
    btnStart.addEventListener('click', function() {
        if (!timeBegin) {
            btnStart.innerHTML = 'Submit';
            localStorage.setItem('timeBegin', new Date());
            timeBegin = localStorage.getItem('timeBegin');
            runTime();
            showQuestion(0);
        } else {
            // TODO: Submit
        }
    })

    var showRemainTime = function() {
        let containTime = totalTime - (new Date() - new Date(timeBegin))
        labelTime.innerText = '' + timeTransformToText(containTime)
    }

    var timeTransformToText = function(ms) {
        if(ms < 0) {
            return '00 : 00';
        }
        let totalMs = Math.floor((+ms)/1000);
        let minusDuration = Math.floor(totalMs/60);
        if(minusDuration < 10) {
            minusDuration = '0' + minusDuration;
        }
        let secondsDuration = Math.floor(totalMs - minusDuration*60);
        if(secondsDuration < 10) {
            secondsDuration = '0' + secondsDuration;
        }
        return `${minusDuration} : ${secondsDuration}`;
    }
    

    /**
     * Load questions 
     */
    
    const questionList = document.querySelector('.question-list ul');
    // localStorage.getItem()
    
    
    var showListQuestion = function() {
      let questionStorage = JSON.parse(localStorage.getItem('questions'));
      questionStorage.forEach((element, index) => {
        let liElement = document.createElement('li');
        liElement.classList.add('question-item-list');
        liElement.classList.add('btn');
        liElement.classList.add('btn-secondary');
        liElement.innerText = '' + (index+1);
        questionList.appendChild(liElement);
        liElement.addEventListener('click', function(){
          showQuestion(index);
        });
      });
    }
    showListQuestion();
    
    var showQuestion = function(indexQuestion) {
        // validate start status
        if(!checkStartedStastus()) {
          return;
        }

        let questionStorage = JSON.parse(localStorage.getItem('questions'));
        if(indexQuestion < 0 || indexQuestion > questionStorage.length -1) {
          return;
        }
        let textQuestion= document.querySelector('#id-question #text-question');
        let textAnswers= document.querySelector('#id-question #text-answers');
        textAnswers.innerHTML = '';
        textQuestion.innerText = questionStorage[indexQuestion].question;
        questionStorage[indexQuestion].answers.forEach((e, indexAnswer) => {
          let liElement = document.createElement('li');
          let answerCheckbox = document.createElement('input');
          answerCheckbox.setAttribute('type', 'checkbox')
          answerCheckbox.checked = e.checked;
          liElement.appendChild(answerCheckbox);
          let textElement = document.createElement('p');
          textElement.style.display = 'inline';
          textElement.classList.add('text-answer')
          textElement.innerText = e.text;
          liElement.appendChild(textElement);
          answerCheckbox.addEventListener('click', function(event) {
            checkedAnswer(indexQuestion, indexAnswer, event.target.checked);
          })
          textAnswers.appendChild(liElement);
        })

        // Active style for item list
        let itemList = document.querySelectorAll('.question-list li');
        itemList.forEach(e => {
          e.classList.remove('btn-info');
        })
        itemList[indexQuestion].classList.add('btn-info');
        fillStyleList();

        //  Save Index
        localStorage.setItem('currentIndex', indexQuestion);
    }
    var checkedAnswer = function(indexQuestion, indexAnswer, checked) {
      let questionStorage = JSON.parse(localStorage.getItem('questions'));
      questionStorage[indexQuestion].answers[indexAnswer].checked = checked;
      localStorage.setItem('questions', JSON.stringify(questionStorage));
      
    }

    // Next and Previous Button
    const btnPrevious = document.querySelector('#prev-btn');
    btnPrevious.addEventListener('click', function() {
      // validate start status
      if(!checkStartedStastus()) {
        return;
      }
      let currentIndex = +localStorage.getItem('currentIndex');
      showQuestion(--currentIndex);
    })

    const btnNext = document.querySelector('#next-btn');
    btnNext.addEventListener('click', function() {
      // validate start status
      if(!checkStartedStastus()) {
        return;
      }
      let currentIndex = +localStorage.getItem('currentIndex');
      showQuestion(++currentIndex);
    })

    function checkStartedStastus() {
      return !(localStorage.getItem('timeBegin') === null);
    }

    var fillStyleList = function() {
      let questionStorage = JSON.parse(localStorage.getItem('questions'));
      let itemList = document.querySelectorAll('.question-list li');

      itemList.forEach(item => {
        item.classList.remove('btn-primary');
        if(!item.classList.contains('btn-secondary')) {
          item.classList.add('btn-secondary');
        }
      })
      questionStorage.forEach((question, index) => {
        question.answers.forEach(answer => {
          if(answer.checked === true) {
            console.log(answer);
            itemList[index].classList.remove('btn-secondary');
            itemList[index].classList.add('btn-primary');
            return;
          }
        })
      })
    }

    // Init when reload page
    if(localStorage.getItem('questions')) {
      showQuestion(localStorage.getItem('currentIndex'))
    }

}

