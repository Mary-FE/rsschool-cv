(function() {
    let accordion = document.querySelector('[data-accordion]');

    accordion.addEventListener('click', function(event) {
        if (event.target.closest('[data-accordion-header]')) {
            let header = event.target.closest('[data-accordion-header]');

            if (header.classList.contains('active')) {
                header.classList.remove('active');
            } else {
                // clear active state
                let items = accordion.querySelectorAll('[data-accordion-header]');

                for(let i = 0; i < items.length; i++) {
                    items[i].classList.remove('active');
                }

                header.classList.add('active');
            }
        }
    });
})();
