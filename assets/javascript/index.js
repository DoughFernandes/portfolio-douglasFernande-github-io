const sectionButton = document.querySelectorAll('.section .section__button');

sectionButton.forEach((section__button) => {
    section__button.addEventListener('click', () => {
        const section = section__button.parentElement
        const openIs = section.classList.contains('section__open');

        if (openIs) {
            section.classList.remove('section__open');
        } else {
            section.classList.add('section__open');
        }
    })
})