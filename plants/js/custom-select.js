(function() {
    'use strict';

    const info = {
        '0': {
            'city': 'Canandaigua, NY',
            'phone': '+1 585 393 0001',
            'address': '151 Charlotte Street',
        },

        '1': {
            'city': 'New York City',
            'phone': '+1 212 456 0002',
            'address': '9 East 91st Street',
        },

        '2': {
            'city': 'Yonkers, NY',
            'phone': '+1 914 678 0003',
            'address': '511 Warburton Ave',
        },

        '3': {
            'city': 'Sherrill, NY',
            'phone': '+1 315 908 0004',
            'address': '14 WEST Noyes BLVD',
        },
    }

    let select = document.querySelector('[data-select]'),
        label = select.querySelector('[data-label]'),
        options = select.querySelector('[data-options]'),

        infoBox = document.querySelector('[data-select-information]'),
        infoCity = infoBox.querySelector('[data-select="city"]'),
        infoPhone = infoBox.querySelector('[data-select="phone"]'),
        infoAddress = infoBox.querySelector('[data-select="address"]'),
        infoCall = infoBox.querySelector('[data-select="call"]');

    // Add Events
    // #1 - open select for choose some value
    label.addEventListener('click', function() {
        select.classList.toggle('open');
    });

    document.body.addEventListener('click', function(e) {
        if (!e.target.closest('[data-label]')) {
            select.classList.remove('open');
        }
    });

    // #2 - open select for choose some value
    options.addEventListener('click', function(e) {
        if (e.target.closest('[data-select-item]')) {
            select.classList.add('selected');

            let active = e.target.closest('[data-select-item]').getAttribute('data-select-item');
            
            setInformation(active);
        }
    });

    function setInformation(index) {
        label.textContent = info[index]['city'];
        infoCity.textContent = info[index]['city'];
        infoPhone.textContent = info[index]['phone'];
        infoAddress.textContent = info[index]['address'];
        infoCall.href = `tel: ${info[index]['phone']}`;
    }
})();
