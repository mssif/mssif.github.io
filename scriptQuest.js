let inputComponent = document.getElementsByClassName('inputComponent')[0];

let inputField = document.getElementById('inputField');
let buttonI = document.getElementById('inputValueButton');
let placeForAQuestion = document.getElementById('placeForAQuestion');
let start = document.getElementById('start');
let startTime = 0;
let yourTimeMinutes = 0;
let yourTimeSeconds = 0;


let answerCounter = 0; // Увеличивается при правильном ответе на вопрос
let errorIsActivated = false;

// Т_Т
let arrayForQuestion = [
  {
    header: "Вопрос №1",
    question: `В каком году был построен Саратовский мост?`,
    imageSource: "",
    answer: ["11 июля 1965 г", "1965", "1965 год"],
  }, 
  { 
    header: "Вопрос №2",
    question: "Как называется часть крыла, которую видно на этой картинке? В качестве ответа укажите одно слово.",
    imageSource: "https://avatars.mds.yandex.net/get-images-cbir/101700/GB1UuJTn-gXNuCvK9MBavQ3061/ocr",
    answer: ["Закрылок", "Закрылки", "закрылок", "закрылки"],
  },
  {
    header: "Вопрос №3",
    question: `«угольки на подносе самовара» 
               Как называется книга Булгакова, из которой взята эта цитата?`,
    imageSource: "",
    answer: ["Морфий", "морфий"],
  }, 
  {
    header: "Вопрос №4",
    question: `Какой номер раздела у «Правил оформления» в ГОСТ 34.602-2020?`,
    imageSource: "",
    answer: ["5", "пять", "пятый"],
  }, 
  {
    header: "Вопрос №5",
    question: `Как называется организация, в которой Tim Berners-Lee работал в 1989 году?`,
    imageSource: "",
    answer: ["CERN", "Cern", "cern", "ЦЕРН", "Церн", "церн", "Conseil Européen pour la Recherche Nucléaire", "European Organization for Nuclear Research"],
  }, 
  {
    header: "Вопрос №6",
    question: `До 1991 года этот крупный город, стоящий на Волге, носил другое название.`,
    imageSource: "",
    answer: ["Самара", "Куйбышев"],
  }, 
  {
    header: "Вопрос №7",
    question: `«...в 4 д. л. ,в два столбца, начатое печатанием 1 мая 1828 года...» Как расшифровывается д.л.?`,
    imageSource: "",
    answer: ["Долей листа", "Доля листа", "Долю листа", "долей листа", "доля листа", "долю листа"],
  }, 
];

buttonI.addEventListener('click', buttonIhandler);

  function IncorrectAnswer() {
    inputField.classList.add("errorAnimated");
    setTimeout('inputField.classList.remove("errorAnimated")',  800);
  }
  
  function answerIsCorrect() {
    let answerI = inputField.value;
  
    return arrayForQuestion[answerCounter].answer.includes(answerI);
  }
  
  function buttonIhandler() {
    if (answerCounter < arrayForQuestion.length) {
      if (answerIsCorrect()) {
        placeForAQuestion.classList.add("hideShow");
    
        setTimeout(() => {
          // Скрываем старое сообщение и показываем новое
          placeForAQuestion.innerHTML = `
            <div class="correctAnswer">
              <h2>Правильный ответ!</h2>
            </div>
          `;
    
          setTimeout(() => {
            // Скрываем уведомление
    
            setTimeout(() => {
              if (answerCounter == arrayForQuestion.length) {
                yourTimeMinutes = Math.floor((Date.now() - startTime)/1000/60);
                yourTimeSeconds = Math.floor((Date.now() - startTime)/1000) - yourTimeMinutes * 60;
                if (Math.floor(yourTimeSeconds / 10) == 0) {
                  yourTimeSeconds = '0' + yourTimeSeconds;
                }
                // Все задания выполнены
                placeForAQuestion.innerHTML = `
                <div class="correctAllAnswer">
                  <h2>Вы выполнили все задания!</h2>
                  <p>Время выполнения: ${yourTimeMinutes}:${yourTimeSeconds}</p>
                </div>
              `;
              } else {
                // Показываем следующий вопрос
                if (arrayForQuestion[answerCounter].imageSource == "") {
                  placeForAQuestion.innerHTML = `
                    <div class="taskText">
                      <h2>${arrayForQuestion[answerCounter].header}</h2>
                      <p>${arrayForQuestion[answerCounter].question}</p>
                    </div>
                  `;
                } else {
                  placeForAQuestion.innerHTML = `
                    <div class="taskTextAndImage">
                      <h2>${arrayForQuestion[answerCounter].header}</h2>
                      <div>
                        <p>${arrayForQuestion[answerCounter].question}</p>
                        <img src="${arrayForQuestion[answerCounter].imageSource}">
                      </div>
                    </div>
                  `;
                }
              }
              
              setTimeout(() => {
                placeForAQuestion.classList.remove("hideShow");
              }, 800);
            }, 800);
          }, 800);
        }, 800);
        answerCounter++;
      } else {
        // Неверный ответ
        IncorrectAnswer();
      }
    } else {
      console.log("Когда-нибудь здесь будет возможность пройти квест повторно с дургими заданиями");
    }
      
  }

startButton.addEventListener('click', () => {
  placeForAQuestion.innerHTML = `
    <div class="taskText">
      <h2>${arrayForQuestion[answerCounter].header}</h2>
      <p>${arrayForQuestion[answerCounter].question}</p>
    </div>
  `;
  inputComponent.classList.remove("displayNone");
  placeForAQuestion.classList.remove("displayNone");
  start.classList.add("displayNone");
  startTime = Date.now();
});




