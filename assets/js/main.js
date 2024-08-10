/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle','nav-menu');

/*===== DROPDOWN MENU TOGGLE =====*/
const dropdownToggle = document.querySelectorAll('.nav__item--dropdown');

dropdownToggle.forEach(dropdown => {
    const link = dropdown.querySelector('.nav__link');

    link.addEventListener('click', (e) => {
        // Prevent default action and allow dropdown to toggle on click
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
});

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When a nav__link without a dropdown is clicked, remove the show class
    if (!this.parentElement.classList.contains('nav__item--dropdown')) {
        navMenu.classList.remove('show');
    }
}

// Add event listeners to nav links
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// Get all the navigation links
const navLinks = document.querySelectorAll('.nav__menu a');

const setActiveLink = () => {
  navLinks.forEach(link => {
    if (link.classList.contains('active-link')) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
};

// Call setActiveLink on page load
window.addEventListener('DOMContentLoaded', setActiveLink);


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

<script>
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var jsonData = {};

    formData.forEach(function(value, key){
        jsonData[key] = value;
    });

    fetch(this.action, {
      method: 'POST',
      body: JSON.stringify(jsonData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        alert('Message sent successfully!');
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    })
    .catch(error => {
      alert('There was an error sending your message. Please try again.');
    });
  });
</script>

