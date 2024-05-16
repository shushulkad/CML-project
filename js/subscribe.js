document.addEventListener("DOMContentLoaded", function() {
    var videoElement = document.getElementById('video');

    if (videoElement) {
        videoElement.addEventListener('play', checkLoginStatus);
    
        function checkLoginStatus() {
            var email = sessionStorage.getItem("email");
            var text = sessionStorage.getItem("text");
    
            if (!email || !text) {
                videoElement.pause();
                videoElement.removeAttribute('controls');
                window.location.href = "subscribe.html"; // Перенаправление на страницу subscribe.html
            } else {
                videoElement.setAttribute('controls', 'true');
            }
        }
    
        videoElement.addEventListener('click', function(event) {
            var email = sessionStorage.getItem("email");
            var text = sessionStorage.getItem("text");
    
            if (!email || !text) {
                event.preventDefault();
                openLoginForm();
            }
        });
    }
    
        // Обработчик события отправки формы
        document.querySelector("form").addEventListener("submit", function (event) {
            event.preventDefault(); // Предотвращаем отправку формы
            performLogin(); // Выполняем вход
          });
        
          // Обработчик события выхода
          document.getElementById("button_exit").addEventListener("click", function (event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
            performLogout(); // Выполняем выход
          });
        
          checkLoginStatus();
        
          
});

function openLoginForm() {
    window.location.href = "subscribe.html"; // Замените "login.html" на путь к вашей странице

}

function showSuccessMessage() {
    alert("Подписка оформлена успешно!");
}

function performSubscription() {
    var email = sessionStorage.getItem("email");
    var text = sessionStorage.getItem("text");

    // Предположим, что здесь происходит проверка и сохранение данных подписки.
    // Мы будем использовать простую проверку наличия данных в sessionStorage.

    if (email && text) {
        // Подписка успешно оформлена
        showSuccessMessage();
    } else {
        // Обработка ошибки при оформлении подписки
        // Здесь вы можете выполнить определенные действия для обработки ошибки,
        // например, отобразить сообщение об ошибке на странице.
    }
}

// Обработчик события отправки формы
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    performLogin(); // Выполняем вход
});

// Обработчик события выхода
document.getElementById("button_exit").addEventListener("click", function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    performLogout(); // Выполняем выход
});