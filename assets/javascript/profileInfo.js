function updadeProfileInfo (profileData) {
    const title = document.getElementById('header');
    title.innerHTML = `

    <figure class ="box__figure">
        <img class="photo" src="${profileData.photo}" alt="foto de perfil ${profileData.name}">
    </figure>

    <h1 class="title">Transformando Ideias em Realidade:<br>Desenvolvedor Front-End Apaixonado por Criar Experiências Digitais Inovadoras<small>${profileData.name}</small></h1>
     
    <nav title="navegatin" class="information">
        <ul>

            <li class="job" aria-label="job" >
                <img class="information__profile" src="./assets/icons/job.svg" alt="${profileData.job}">${profileData.job}
            </li>
            
            <li aria-label="location">
                <img class="information__profile" src="./assets/icons/location.svg" alt="${profileData.location}">${profileData.location}
            </li>

            <li aria-label="phone">
                <img class="information__profile" src="./assets/icons/phone.svg" alt="${profileData.phone}">
                <a href="whatsapp:(11) 95582-4702">${profileData.phone}</a>
            </li>

            <li aria-label="email">
                <img class="information__profile" src="./assets/icons/email.svg" alt="${profileData.email}">
                <a href="mailto:dfdsf1996@gmail.com">${profileData.email}</a>
            </li>

        </ul>
    </nav>

    `

}