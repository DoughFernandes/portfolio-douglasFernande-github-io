const iconTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;


iconTheme.addEventListener('click', () => {
    const currentTheme = rootHtml.getAttribute('data-theme');
    const classType = iconTheme.className;

    if(classType === 'fa-regular fa-sun'){
        iconTheme.className = 'fa-solid fa-cloud-moon';
        rootHtml.setAttribute('data-theme',"light");

    }if(classType === 'fa-solid fa-cloud-moon'){
        iconTheme.className = 'fa-regular fa-sun'
        rootHtml.setAttribute('data-theme',"dark");
    }
});