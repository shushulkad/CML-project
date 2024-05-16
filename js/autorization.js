function validateForm() {
  var email = document.querySelector('.field[type="email"]').value;
  var password = document.querySelector('.field[type="password"]').value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Пожалуйста, заполните все поля");
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Пожалуйста, введите корректный адрес электронной почты");
    return false;
  }
  return true;
}

function performLogin() {
  if (validateForm()) {
    var email = document.querySelector('.field[type="email"]').value;
    var password = document.querySelector('.field[type="password"]').value;
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);

    alert("Вход выполнен успешно");

    var isLoggedIn = true;

    if (isLoggedIn) {
      var subscribeLink = document.querySelector('a[href="subscribe.html"]');
      subscribeLink.style.pointerEvents = "auto";
      subscribeLink.style.opacity = 1;

      document.getElementById("pop_up").style.display = "none";
    } else {
      console.log("Вход не выполнен. Перенаправление на форму входа.");
      window.location.replace("#pop_up");
    }
  }
}

function performLogout() {
  // Очистка данных из sessionStorage
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("password");

  alert("Выход выполнен успешно");

  var buttonExit = document.getElementById("button_exit");
  buttonExit.textContent = "Войти";
  buttonExit.id = "button_enter";
  buttonExit.onclick = openLoginForm;

  var subscribeLink = document.querySelector('a[href="subscribe.html"]');
  subscribeLink.style.pointerEvents = "none"; // Запрещаем доступ к ссылке
  subscribeLink.style.opacity = 0.5; // Устанавливаем полупрозрачность ссылке
}

// Функция открытия формы входа
function openLoginForm() {
  alert("Войдите в аккаунт");
  document.getElementById("pop_up").style.display = "flex";
}

// Функция проверки статуса входа
function checkLoginStatus() {
  var email = sessionStorage.getItem("email");
  var password = sessionStorage.getItem("password");

  if (email && password) {
    console.log("Вход выполнен.");
    var subscribeLink = document.querySelector('a[href="subscribe.html"]');
    subscribeLink.style.pointerEvents = "auto"; // Разрешаем доступ к ссылке
    subscribeLink.style.opacity = 1; // Возвращаем нормальную непрозрачность ссылке

    // Закрываем окно входа
    document.getElementById("pop_up").style.display = "none";
  } else {
    console.log("Вход не выполнен. Перенаправление на форму входа.");
    window.location.replace("#pop_up");
  }
}

// Обработчик события загрузки страницы
window.onload = function () {
  checkLoginStatus();

  var subscribeLink = document.querySelector('a[href="subscribe.html"]');
  subscribeLink.onclick = function (event) {
    var email = sessionStorage.getItem("email");
    var password = sessionStorage.getItem("password");

    if (!email || !password) {
      event.preventDefault(); // Предотвращаем переход по ссылке
      openLoginForm(); // Открываем форму входа
    }
  };

  // Обработчик события отправки формы
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы
    performLogin(); // Выполняем вход
  });

  // Обработчик события выхода
  document
    .getElementById("button_exit")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Предотвращаем переход по ссылке
      performLogout(); // Выполняем выход
    });
};
