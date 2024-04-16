/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
sr.reveal('.container,.card,.card-body,.card-title,.card-text');



function showError(message) {
    alert(message);
}


function isValidEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function CheckValidity(event) 
{
    event.preventDefault();

    let signInUsernameInput = document.getElementById('signInUsername');
    let signInUsernameValue = signInUsernameInput.value.trim();
    
    if (signInUsernameValue === "") {
        showError("Name is required to send message!");
        return;
    }

    let emailInput = document.getElementById('email');
    let emailValue = emailInput.value.trim();

    if (emailValue === ""){
        showError("Email is required to send message!");
        return;
    }

    if (!isValidEmail(emailValue)) {
        showError("Invalid email address.");
        return;
    }

    let contentInput = document.getElementById('message_content');
    let contentValue = contentInput.value.trim();
    if (contentValue === ""){
        showError("Please type message!");
        return;
    }

    alert("Message sent successfully!");
    document.getElementById("myForm").reset();

}










