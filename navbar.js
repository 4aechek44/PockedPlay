// =====================
// НАВБАР
// =====================
// Этот файл вставляет навбар на любую страницу где подключён.
// Подключить: <script src="navbar.js"></script> в <head> любой страницы.
 
// HTML навбара — чтобы изменить кнопки, меняй только здесь
const navHTML = `
<nav id="main-nav">
    <button class="nav-home"><a href="index.html">Главная</a></button>
    <button class="nav-games"><a href="gamehub.html">Игры</a></button>
</nav>
`;
 
// Ждём пока страница загрузится, потом вставляем навбар
document.addEventListener('DOMContentLoaded', () => {
 
    // Вставляем навбар в самое начало <body>
    document.body.insertAdjacentHTML('afterbegin', navHTML);
 
    // Подсвечиваем кнопку текущей страницы
    // window.location.pathname — это путь к текущему файлу, например "/snake.html"
    // .split('/').pop() — берём только имя файла без пути
    const page = window.location.pathname.split('/').pop() || 'index.html';
 
    // Перебираем все ссылки в навбаре
    document.querySelectorAll('#main-nav button a').forEach(link => {
        // Если href кнопки совпадает с именем текущей страницы — выделяем её
        if (link.getAttribute('href') === page) {
            link.parentElement.style.outline = '2px solid #333';
        }
    });
 
});