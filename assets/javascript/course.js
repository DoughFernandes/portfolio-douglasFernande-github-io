function updadeCourse (profileDate){
    const course = document.getElementById('profile.course');

    course.innerHTML = profileDate.Education.map(course =>`
    
    <section class="courses__content">
        <h3 aria-label="plataforma">${course.plataform}</h3>
        <h4 aria-label="nome do curso">${course.name}</h4>
            <small aria-label="data do curso">${course.period}</small>
         <p aria-label="descrição">
            ${course.description}
        </p>
        <a href="${course.url}">Você pode ver mais aqui.</a>
    </section>
    

    `).join('');
}