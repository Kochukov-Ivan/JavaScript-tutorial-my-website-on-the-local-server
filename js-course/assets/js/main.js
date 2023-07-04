console.log("Привет, мир!");

// получаем элемент из дерева DOM, и присваиваем его в константу
const menuBurger = document.querySelector(".menu-open");

// при клике на бургер
menuBurger.addEventListener("click", (event) => {
  // добавляем класс на боди
  document.body.classList.add("is-menu-visible");
});

const menuClose = document.querySelector(".close");

// при клике на крестик
menuClose.addEventListener("click", (event) => {
  // закрываем меню, удаляем класс из боди
  document.body.classList.remove("is-menu-visible");
});

// валидация формы
function validate(event) {
  const errorContainer = document.getElementById("errors");
  // очищаем все ошибки перед новой валидацией формы
  errorContainer.innerHTML = "";

  let valid = true;

  // проверка имени
  const nameField = document.getElementById("name");
  if (!nameField.value || nameField.value.length < 3) {
    errorContainer.innerHTML +=
      '<p style="color: #f2849e;-webkit-font-smoothing: antialiased;"><strong>Поле имени ни разу не ОК</strong></p>';
    valid = false;
  }

  // проверка емайл
  const emailField = document.getElementById("email");
  const re =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!emailField.value || !re.test(String(emailField.value).toLowerCase())) {
    errorContainer.innerHTML +=
      '<p style="color: #f2849e;-webkit-font-smoothing: antialiased;"><strong>Ваш емайл не заполнен или некорректен.</strong></p>';
    valid = false;
  }

  // проверка сообщения
  let msgField = document.getElementById("message");
  if (!msgField.value || msgField.value.length < 10) {
    errorContainer.innerHTML +=
      '<p style="color: #f2849e;-webkit-font-smoothing: antialiased;"><strong>Поле сообщения не заполнено</strong></p>';
    valid = false;
  }

  // если была хотя бы одна ошибка
  if (false === valid) {
    event.preventDefault();
  }

  return valid;
}

const myForm = document.getElementById("contactform");

myForm.addEventListener("submit", validate);
