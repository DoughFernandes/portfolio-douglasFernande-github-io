const iconTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;

iconTheme.addEventListener('click', () => {
    const currentTheme = rootHtml.getAttribute('data-theme');
    const classType = iconTheme.className;

    if(classType === 'fa-regular fa-sun') {
        iconTheme.className = 'fa-solid fa-cloud-moon';
        rootHtml.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); // Salva o tema 'light'

    } else if(classType === 'fa-solid fa-cloud-moon') {
        iconTheme.className = 'fa-regular fa-sun';
        rootHtml.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Salva o tema 'dark'
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        rootHtml.setAttribute('data-theme', savedTheme);
        iconTheme.className = savedTheme === 'dark' ? 'fa-regular fa-sun' : 'fa-solid fa-cloud-moon';
    }
});
