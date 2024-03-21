function updadeProfileInfo (profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.textContent = profileData.name;

    const job = document.getElementById('profile.job');
    job.textContent = profileData.job;

    const location = document.getElementById('profile.location');
    location.textContent = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.textContent = profileData.phone;
    phone.href = `tel:${profileData.phone}`;

    const email = document.getElementById('profile.email');
    email.textContent = profileData.email;
    email.href = `mailto:${profileData.email}`;

}