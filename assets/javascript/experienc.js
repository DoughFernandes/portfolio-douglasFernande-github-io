function updadeExperience (profileDate){
    const experience = document.getElementById('profile.experience');

    experience.innerHTML = profileDate.professionalExperience.map(experience =>`
        <li>
            <h3>${experience.name}</h3>
            <small>${experience.period}</small>
            <p>${experience.description}</p>
        </li>

    `).join('');
}