let time = 17000;
let die = false;

function typeWriter(element, text) {
  let i = 0;
  let timeClick = 0;
  let timerId = 0;
  element.innerHTML = "|"; // Отображаем курсор
  
  type();
  // Асинхронность пугает
  function type() {
    if (i < text.length) {
      if (die == false) {
        element.innerHTML = element.innerHTML.slice(0, -1) + text.charAt(i) + "|"; // Выводим на экран следующую букву
        i = i + 1;
        let randomValue = randomIntFromRange(120, 200);
        timeClick = timeClick + randomValue;
        setTimeout(() => {type()}, randomValue); // Имитируем ручной ввод
      }
      if (die == true) {
        element.innerHTML = "Умеете ли вы искать информацию в интернете?|";
        clearInterval(timerId);
        return;
      }
    } else {
      if (die == false) {
        i = 0;
        element.innerHTML = element.innerHTML.slice(0, -1); // Удаляем последний элемент - |
        element.innerHTML += "<span id='cursor'>|</span>"; // Добавляем inline элемент для мерцания
        const cursor = document.getElementById("cursor"); // Получаем его через id
        timerId = setInterval(() => {
          cursor.style.opacity = (cursor.style.opacity === "1") ? "0" : "1"; // Переключаем стили курсора
        }, 600);
        setTimeout(() => {clearInterval(timerId)}, time - timeClick);  
      }
      if (die == true) {
        element.innerHTML = "Умеете ли вы искать информацию в интернете?|";
        clearInterval(timerId);
        return;
      }
    } 
  }
}

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const element = document.getElementById("motto");
const text = "Умеете ли вы искать информацию в интернете?";

typeWriter(element, text);
let timerIDmain = setInterval("typeWriter(element, text)", time);

window.addEventListener('focus',  function() {
  die = false;
  element.innerHTML = "|";
  typeWriter(element, text);
  timerIDmain = setInterval("typeWriter(element, text)", time);
});

window.addEventListener('blur',  function() {
  die = true;
  clearInterval(timerIDmain);
  element.innerHTML = "Умеете ли вы искать информацию в интернете?|";
});
