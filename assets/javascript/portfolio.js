function updadePortfolio (profileDate){
    const portfolio = document.getElementById('profile.portfolio');

    portfolio.innerHTML = profileDate.portfolio.map(portfolio =>`
        <li>
        <a href="${portfolio.url}" target="_blank">
        <h3 class="title">${portfolio.name}</h3>
        
        <figure class="figure">
            <img src="${portfolio.imagem}" alt=""${portfolio.name}">
        </figure>

        <span>${portfolio.description}</span>

        </li>

    `).join('');
}