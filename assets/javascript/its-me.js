function updadeItsMe(p){
    const itsMe = document.getElementById('its__me');

    itsMe.innerHTML = `

        <figure class="its__me__figure">
            <img class="its__me__figure__photo" src="${p.photo}" alt="profile photo">
        </figure>

        <section title="sobre mim" class="section__about-me">
            <p>${p.itsMe}</p>
    
            <div>
                <i class="fa-solid fa-language"></i>
                ${p.languages.map((language) => `
                <span>${language}</span>
                `).join(' | ')}
    
            </div>
        </section>

        ${p.professionalExperience.map((experience) => `

            <section title="Experiências" class="section__experience">
                <h3>${experience.name}</h3>
                <small>${experience.period}</small>
        
                <p>${experience.description}</p>

                <ul>
                    ${experience.skills.map((skill) => `
                        <li>${skill}</li>    
                    `).join('')}
                </ul>
            </section>
        
        `).join('')}

        ${p.Education.map((education) => `
            <section title="Cursos" class="section__courses">

                <div class="course__section">

                    <button id="buttonClick" type="button" aria-label="Open courses button">
                        <span>${education.plataform}</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>

                    

                    <div id="open" class="section__content">
                        <h4>${education.name}</h4>
                        <small>${education.period}</small>

                        <ul>

                             ${education.description.map((Description) => `
                             <li>
                                <h5>${Description.name}</h5>

                                ${Description.details.map((Details) => `
                                    <span>${Details}</span>
                                `).join(' / ')}
                                
                            </li>
                            `).join('')}           
                                
                        </ul>

                        <button class="btn btn__href" type="button">
                            <a href="${education.url}" target="_blank">
                                    <span alt="Projetos">${education.plataform}</span>
                                <i class="fa-solid fa-window-restore"></i>
                            </a>
                        </button>

                    </div>  
                </div>
            </section>
        
        `).join('')}

        <section title="Contatos" class="section__contat">
                <h2>Contate-me</h2>
                
                <p>
                    Estou disponível para serviços e novas conexões. Contate-me via e-mail e conecte-se comigo através das minhas redes sociais.
                </p>
    
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
                        <a href="whatsapp:${p.phone}" title="WhatsApp">
                            <i class="fa-solid fa-phone"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:${p.email}" title="E-mail">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                    </li>
                </ul>
    
            </section>

    `
}