(function() {
    let report_plants1 = `
1. Вёрстка валидная +10;
2. Вёрстка семантическая +20;
3. Вёрстка соответствует макету +48;
4. Требования к css + 12;
5. Интерактивность, реализуемая через css +20;

Итоговая оценка после cross-check: 100/100.`;

    let report_plants2 = `
1. Вёрстка соответствует макету. Ширина экрана 768px +24;
2. Вёрстка соответствует макету. Ширина экрана 380px +24;
3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15;
4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px);

Итоговая оценка после cross-check: 75/75.`;

    let report_plants3 = `
1. При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50;
2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50;
3. В разделе contacts реализован select с выбором городов +25;

Итого: 100/100.`;

    console.group('Plants#1 for Desktop:');
        console.log(report_plants1);
    console.groupEnd();

    console.group('Plants#2 for Mobile, Tablet:');
        console.log(report_plants2);
    console.groupEnd();

    console.group('Plants#3 adding functionality using JavaScript:');
    console.log(report_plants3);
console.groupEnd();
})();
