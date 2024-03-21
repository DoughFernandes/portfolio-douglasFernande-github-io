(async function() {
    const profileData = await fetchProfileDate();
    updadeProfileInfo(profileData);
    updadeSoftSkills(profileData);
    updadeHardSkills(profileData);
})();
