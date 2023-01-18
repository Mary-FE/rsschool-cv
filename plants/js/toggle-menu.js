(function () {
    let burger = document.querySelector('.header__burger'),
        navigation = burger.closest('nav'),
        overlay = document.querySelector('.navigation-overlay'),
        navList = document.querySelector('.header__navigation');

    burger.addEventListener('click', function(event) {
        navigation.classList.toggle('open');
    });

    overlay.addEventListener('click', function(event) {
        burger.click();
    });

    navList.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' ) {
            burger.click();
        }
    });
})();
