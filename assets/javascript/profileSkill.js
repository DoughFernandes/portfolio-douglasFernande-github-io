function updadeSoftSkills (profileDate){
    const softSkills = document.getElementById('profile.skills.softskills');

    softSkills.innerHTML = profileDate.skills.softSkills.map(skills => `<li>${skills}</li>`).join('');
}