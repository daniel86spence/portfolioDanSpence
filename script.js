//set variables for document targets for each nav option
let aboutNav = document.getElementById('about_link');
let projectNav = document.getElementById('projects_link');
let contactNav = document.getElementById('contact_link');

//set variables for each of the 3 html sections 'about', 'projects' and 'contact'
let aboutSection = document.getElementById('about');
let projectSection = document.getElementById('projects');
let contactSection = document.getElementById('contact');

//create functions to switch between each of the 3 main pages with an onclick event, switching the display to none/block on which nav option is selected
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
