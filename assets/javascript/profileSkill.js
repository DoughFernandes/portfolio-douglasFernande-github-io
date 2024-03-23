function updadeSoftSkills (profileDate){
    const softSkills = document.getElementById('profile.skills.softskills');

    softSkills.innerHTML = profileDate.skills.softSkills.map(skills => `<li aria-label="Habilidade">${skills}</li>`).join('');
}