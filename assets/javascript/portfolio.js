function updadePortfolio (profileDate){
    const portfolio = document.getElementById('profile.portfolio');

    portfolio.innerHTML = profileDate.portfolio.map(portfolio =>`
        <li>
            <h3 class="title before">${portfolio.name}</h3>
            <a href="${portfolio.url}" target="_blank">
                <img src="${portfolio.img}" alt="${portfolio.name}">
            </a>

        </li>
        </ul>

    `).join('');
}