function updadeHardSkills (profileDate){
    const hardSkills = document.getElementById('profile.skills.hardSkills');

    hardSkills.innerHTML = profileDate.skills.hardSkills.map(skills => `
        <img src="${skills.logo}" alt="${skills.name}" title ="${skills.name}">
    `).join('');
}