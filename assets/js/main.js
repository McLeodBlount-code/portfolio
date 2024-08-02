/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// Get all the navigation links
const navLinks = document.querySelectorAll('.nav__menu a');

const setActiveLink = () => {
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    const sectionId = linkHref.split('#')[1]; // Extract the section identifier from the href
    
    // If on the home page and the link is for the home section
    if ((currentPath === '/' && linkHref === '#home') ||
        (currentPath.includes(sectionId) && sectionId)) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
};

// Call setActiveLink on page load
window.addEventListener('DOMContentLoaded', setActiveLink);

// Optionally, call setActiveLink on history navigation for SPAs
window.addEventListener('popstate', setActiveLink);


// Call setActiveLink on page load
window.addEventListener('DOMContentLoaded', setActiveLink);

// Optionally, call setActiveLink on history navigation for SPAs
window.addEventListener('popstate', setActiveLink);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
