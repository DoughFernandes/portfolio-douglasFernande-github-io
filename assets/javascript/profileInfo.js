function updadeProfileInfo (profileData) {
    const title = document.getElementById('header');
    title.innerHTML = `

    <img class="photo" src="${profileData.photo}" alt="foto de perfil ${profileData.name}">

    <h1 class="title">Transformando Ideias em Realidade: Desenvolvedor Front-End Apaixonado por Criar Experiências Digitais Inovadoras <small>${profileData.name}</small></h1>
     
    <nav title="navegatin" class="information">
        <ul>

            <li class="job before" aria-label="job" >
               <span>${profileData.job}</span>
            </li>
            
            <li class="location before" aria-label="location">
                <span">${profileData.location}</span>
            </li>

            <li class="phone before"  aria-label="phone">
                <a href="whatsapp:(11) 95582-4702">${profileData.phone}</a>
            </li>

            <li class="email before" aria-label="email">
                <a href="mailto:dfdsf1996@gmail.com">${profileData.email}</a>
            </li>

        </ul>
    </nav>

    `

}