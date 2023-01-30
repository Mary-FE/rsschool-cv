(function() {
    // Get active blocks
    let service = document.querySelector('#service'),
        buttons = service.querySelector('[data-heading]'),
        content = service.querySelector('[data-content]');

    // Create empty array for active types
    let maxItems = buttons.querySelectorAll('[data-type]').length - 1,
        activeType = new Array(maxItems).fill('');

    // Add 'click' event for buttons
    buttons.addEventListener('click', function(e) {
        if (e.target.closest('[data-type]')) {
            let button = e.target,
                type = button.getAttribute('data-type');

            // Calculate active types
            activeType = getActiveType(type, activeType);

            // [Check]: set/remove active button class
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            } else {
                if (activeType.includes(type)) { button.classList.add('active'); }
            }

            blur(activeType);
        }
    });

    // [Note]:
    // A function that blurs the necessary types
    
    /**
     * @param  { Array } type
     */
    function blur(type) {
        let items = content.querySelectorAll('[data-type]'),
            count = 0;

        // [Check]: if no type is active, then remove the blur
        for (let i = 0; i < type.length; i++) {
            if (type[i] == '') { count++; }
        }

        // [Check]: if no type is active, then remove the blur
        if (count == type.length) {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove('blur');
            }
        } else {
            // [Check]: Otherwise, blur only those that need
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove('blur');
    
                if (!type.includes(items[i].getAttribute('data-type'))) {
                    items[i].classList.add('blur');
                }
            }
        }
    }

    // [Note]:
    // A function that helps to track active types and also returns their array
    
    /**
     * @param  { String } type
     * @param  { Array } array
     * @return { Array }
     */
    function getActiveType(type, array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == '') {
                array.splice(i, 1);
                array.unshift(type);
                return array;
            }

            if (array[i] == type) {
                array.splice(i, 1);
                array.push('');
                return array;
            }
        }

        return array;
    }
})();
