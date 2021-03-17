"use strict";

const items = document.querySelectorAll('.accordion__item');
items.forEach(item => {
  item.addEventListener('click', () => {
    const title = item.querySelector('.accordion__title');
    const height = title.nextElementSibling.scrollHeight;
    title.classList.toggle('accordion__title--active');

    if (title.classList.contains('accordion__title--active')) {
      title.nextElementSibling.style.maxHeight = `${height}px`;
    } else {
      title.nextElementSibling.style.maxHeight = 0;
    }
  });
});
//# sourceMappingURL=script.js.map
