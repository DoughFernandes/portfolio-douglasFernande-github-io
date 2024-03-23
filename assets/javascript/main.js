(async function () {
    const profileData = await fetchProfileDate();
    updadeProfileInfo(profileData);
    updadeSoftSkills(profileData);
    updadeHardSkills(profileData);
    updadeLanguages(profileData);
    updadePortfolio(profileData);
    updadeExperience(profileData);
    updadeCourse(profileData);
})();
