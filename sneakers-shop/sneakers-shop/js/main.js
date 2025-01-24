// Бургер
(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }})


// Свайпер Gallery

new Swiper('.gallery__slider', {

    spaceBetween: 40,
    slidesPerView: 4,

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },

});

// Дроп даун каталога

document.getElementById("dropdownButton").addEventListener("click", function() {
    document.getElementById("dropdown").classList.toggle("show");
});


// Закрыть выпадающий список при клике вне его
window.onclick = function(event) {
    if (!event.target.matches('#dropdownButton')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}




document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.button__drop'); // Все кнопки фильтра
    const catalogItems = document.querySelectorAll('.catalog__nike, .catalog__adidas, .catalog__new-balance'); // Все каталоги

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter'); // Получаем значение data-filter

            // Убираем активный класс со всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Добавляем активный класс нажатой кнопке
            this.classList.add('active');

            // Скрываем все каталоги
            catalogItems.forEach(item => item.classList.remove('active'));

            // Показываем только выбранный каталог
            const targetCatalog = document.querySelector(filter);
            if (targetCatalog) {
                targetCatalog.classList.add('active');
            }
        });
    });

    // По умолчанию показываем первый каталог
    if (filterButtons.length > 0) {
        filterButtons[0].click(); // Автоматически нажимаем первую кнопку
    }
});