const idSectionButton = document.getElementById('section__button');

idSectionButton.addEventListener('click', () => {
    const idSection = document.getElementById('section');
    const idSectionContent = document.getElementById('section__content').style;
    
    if(idSectionContent.display === 'none'){

        idSectionContent.display = 'flex';
        idSection.classList.add('section__open');

    }else{
        idSectionContent.display = 'none';
        idSection.classList.remove('section__open');
    }
    
});