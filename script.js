// array questions
const questions = [
  "Какой тип сайта Вам нужен?",
  "Какой планируется дизайн у проекта?",
  "Текстовый контент на сайт?",
  "Напишите с чем связана ваша деятельность или выберите из вариантов",
  "Что в первую очередь важно для Вас?",
  "Есть ли действующие соц сети или сайт?",
  "Нужна ли настройка рекламы?",
  "Регион или город на который работаете или планируете работать?",
  "Выберите бонус за прохождение опроса",
  "Спасибо за завку! В течений следующих нескольких часов вам придет ответ!",
];

let quizBtn = document.getElementsByClassName("quiz__btn");
let quizBtnPrev = quizBtn[0];
let quizBtnNext = quizBtn[1];
// quizBtnNext.attributes[0].value;

// progress bar
let progressBar = document.getElementsByClassName("progress__bar")[0];
let progressBarValueNow = progressBar.ariaValueNow;

// quiz questions
let quizQuestion = document.getElementsByClassName("quiz__question")[0];
let quizQuestionItem = quizQuestion.children;
let quizQuestionItemId = quizQuestionItem[0];

let numbersBtnClicks = [];
let numbersBtn = 1;

quizBtnNext.onclick = () => {
  function addItem() {
    if (numbersBtnClicks.length <= 8) {
      quizQuestionItemId.textContent = `${
        questions[numbersBtnClicks.push(numbersBtn)]
      }`;

      // console.dir(numbersBtnClicks);
    } else {
      return;
    }
  }
  addItem();
};

quizBtnPrev.onclick = () => {
  function removeItem() {
    if ((numbersBtnClicks.length <= 8) & (numbersBtnClicks.length > 1)) {
      numbersBtnClicks.pop(numbersBtn);
      quizQuestionItemId.textContent = `${
        questions[numbersBtnClicks.length - 1]
      }`;
      // console.log(numbersBtnClicks.length);
    } else {
      return;
    }
  }
  removeItem();
};

// let arrade = [1, 2, 3, 4, 5, 6, 7, 8];
// quizQuestionItemId.textContent = `${questions[arrade[2]]}`; // test

// if quiz has a question from question array then add progress bar value;
if (quizQuestionItemId.textContent == `${questions[0]}`) {
  progressBarValueNow = 0;
}
if (quizQuestionItemId.textContent == `${questions[1]}`) {
  progressBarValueNow = 12;
}
if (quizQuestionItemId.textContent == `${questions[2]}`) {
  progressBarValueNow = 25;
}
if (quizQuestionItemId.textContent == `${questions[3]}`) {
  progressBarValueNow = 37;
}
if (quizQuestionItemId.textContent == `${questions[4]}`) {
  progressBarValueNow = 50;
}
if (quizQuestionItemId.textContent == `${questions[5]}`) {
  progressBarValueNow = 62;
}
if (quizQuestionItemId.textContent == `${questions[6]}`) {
  progressBarValueNow = 75;
}
if (quizQuestionItemId.textContent == `${questions[7]}`) {
  progressBarValueNow = 87;
}
if (quizQuestionItemId.textContent == `${questions[8]}`) {
  progressBarValueNow = 100;
}

// progress bar
if (progressBarValueNow >= 0) {
  progressBar.style.background = "black";
  progressBar.innerHTML = `${progressBarValueNow}%`;
}
if (progressBarValueNow >= 25) {
  progressBar.style.background = "#FEF9A7";
  progressBar.style.color = "#0e0e0e";
  progressBar.innerHTML = `${progressBarValueNow}%`;
}
if (progressBarValueNow >= 50) {
  progressBar.style.background = "#FAC213";
  progressBar.innerHTML = `${progressBarValueNow}%`;
}
if (progressBarValueNow >= 75) {
  progressBar.style.background = "#F77E21";
  progressBar.style.color = "#fff";
  progressBar.innerHTML = `${progressBarValueNow}%`;
}
if (progressBarValueNow == 100) {
  progressBar.style.background = "#D61C4E";
  progressBar.innerHTML = `${progressBarValueNow}%`;
}
