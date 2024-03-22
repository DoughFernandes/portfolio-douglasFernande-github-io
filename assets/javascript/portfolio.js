function updadePortfolio (profileDate){
    const portfolio = document.getElementById('profile.portfolio');

    portfolio.innerHTML = profileDate.portfolio.map(portfolio =>`
        <li>
        <a href="${portfolio.url}" target="_blank">
        <h3 class="title before">${portfolio.name}</h3>
        
            <figure class="figure">
                <img src="${portfolio.imagem}" width="200" alt=""${portfolio.name}">
            </figure>
        </a>

        </li>

    `).join('');
}