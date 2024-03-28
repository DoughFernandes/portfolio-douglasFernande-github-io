function updadeItsMe (p){
    const itsMe = document.getElementById('its__me');

    itsMe.innerHTML = `
    
       <figure class="its__me__figure">
                <img class="its__me__figure__photo" src="./assets/data/imgs/avatar doug.png" alt="profile photo">
            </figure>

            <section title="sobre mim" class="section__about-me">
                
                <h2>Sobre mim</h2>
    
                <p>
                    Douglas Fernandes. Sou um desenvolvedor Front-End apaixonado e dedicado, especializado na criação de interfaces de usuário interativas e eficientes. Com um forte entendimento de JavaScript, CSS3 e HTML5 e outras tecnologias, estou sempre buscando novas tecnologias e abordagens para melhorar a experiência do usuário.
                </p>
    
                <div>
                    <i class="fa-solid fa-language"></i>
                    <span>Inglês: A2 Básico | Português: Nativo</span>
    
                </div>
            </section>
    
            <section title="Experiências" class="section__experience">
                <h2>Experiências</h2>
                <h3>Nipo center .LTDA</h3>
                <small>2019 - 2023</small>
    
                <p>
                    Atendimento ao cliente , auxiliar de produção, recebebimento organização e distribuição de mercadoria, cadastro e orientação ao cliente.
                </p>
    
                <ul>
                    <li>Atendimento e recebimento das mercadorias do cliente</li>
                    <li>Organização e distribuição para digitalização</li>
                </ul>
            </section>
    
            <section title="Cursos" class="section__courses">
                <h2>Courses</h2>
    
                <div class="course__section">
    
                    <button type="button" aria-label="Open courses button">
                        <span>Digital innovation tecnologica</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
        
                    <div class="section__content ">
                       <small>2023 - em progresso ...</small>
    
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dignissimos totam molestias repellendus facere at excepturi officiis dolorum et quam dolor dolorem, culpa, aut officia neque ipsum inventore iste a?
                        </p>
    
                       <ul>
                            <li>habilidade desenvolvida</li>
                            <li>habilidade desenvolvida</li>
                            <li>habilidade desenvolvida</li>
                       </ul>
                    </div>
                    
                </div>
    
                <div class="course__section">
    
                    <button type="button" aria-label="Open courses button">
                        <span>Digital innovation tecnologica</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    
                </div>
                
            </section>
    
            <section title="Contatos" class="section__contat">
                <h2>Contate-me</h2>
                
                <p>
                    Estou disponível para serviços e novas conexões. Contate-me via e-mail e conecte-se comigo através das minhas redes sociais.
                </p>
    
                <ul alt="Media-social">
                    <li>
                        <a href="#" title="github">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="linkedin">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="whatsapp:(11) 95582-4702" title="WhatsApp">
                            <i class="fa-solid fa-phone"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:dfdsf1996@gmail.com" title="E-mail">
                            <i class="fa-solid fa-envelope"></i>
                        </a>
                    </li>
                </ul>
    
            </section>
    
    `;
}