let aboutNav = document.getElementById('about_link');
let aboutSection = document.getElementById('about');

let projectNav = document.getElementById('projects_link');
let projectSection = document.getElementById('projects');

let contactNav = document.getElementById('contact_link');
let contactSection = document.getElementById('contact');

aboutNav.onclick = function() {
    aboutSection.style.display = 'block';
    projectSection.style.display = 'none';
    contactSection.style.display = 'none';
};

projectNav.onclick = function() {
    projectSection.style.display = 'block';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
};

contactNav.onclick = function() {
    contactSection.style.display = 'block';
    projectSection.style.display = 'none';
    aboutSection.style.display = 'none';
};
