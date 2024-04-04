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
    updadePortfolio(profileData);
})();