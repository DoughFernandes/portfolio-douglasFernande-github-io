function updadeProfileInfo (p) {
    const title = document.getElementById('section__primary');
    title.innerHTML = `
        <figure>
            <img src="${p.photo}" alt="profile logo">
        </figure>

        <h1><b>Soluções Criativas & </b>Desenvolvimento de software Front-end.</h1>
        <small>${p.name}, ${p.location}.</small>

        <ul alt="Media-social">
        <li>
            <a href="${p.github}" title="github" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>
        </li>
        <li>
            <a href="${p.linkedin}" title="linkedin" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </li>
        <li>
            <a href="whatsapp:${p.phone}" title="WhatsApp" target="_blank">
                <i class="fa-solid fa-phone"></i>
            </a>
        </li>
        <li>
            <a href="mailto:${p.email}" title="E-mail" target="_blank">
                <i class="fa-solid fa-envelope"></i>
            </a>
        </li>
    </ul>
    `
}
function updadeHardSkills (p){
    const hardSkills = document.getElementById('hardSkills');

    hardSkills.innerHTML = p.skills.hardSkills.map(skills => `
        <li><img src="${skills.logo}" alt="${skills.name}" title ="${skills.name}"></li>

    `).join('');
}

function updadePortfolio (p){
    const portfolio = document.getElementById('ProjectsList');

    portfolio.innerHTML = p.portfolio.map(portfolio =>`
    <div title="${portfolio.name}" class="p__list__primary">

        <figure class="l__primary__img">
            <img src="${portfolio.imagem}" alt="${portfolio.name}">
        </figure>

        <h3>${portfolio.name}</h3>
        <h5>${portfolio.info}</h5>

        <ul class="l__primary__details">
      
          ${portfolio.description.map((description) => `
                <li>${description}</li>
            `).join('')}

        </ul>

        <div class="l__primary__icons">

            ${portfolio.tools.map((tools) => `
                <img src="${tools.logo}" alt="${tools.name}">
            `).join('')}

        </div>

        <button class="btn" type="button" title="button">
            <a href="${portfolio.url}" target="_blank">
                <span alt="Projetos">${portfolio.name}</span>
                <i class="fa-solid fa-window-restore"></i>
            </a>
        </button>

    </div>

    `).join('');
}

(async function () {
    const profileData = await fetchProfileDate();
    updadeProfileInfo(profileData);
    updadeHardSkills(profileData);
    updadePortfolio(profileData);
    updadeItsMe(profileData);
})();


const section = document.getElementById('buttonClick');

section.addEventListener('click', () => {
    const sectionOpen = document.getElementById('open');
    const verficarSection = sectionOpen.classList.contains('section__content__open')

    if(verficarSection){
        sectionOpen.classList.remove('section__content__open');
    }else{
        sectionOpen.classList.add('section__content__open');
    }
});
