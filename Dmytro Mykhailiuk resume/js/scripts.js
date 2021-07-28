/*!
* Start Bootstrap - Resume v7.0.2 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Changing languages
    const changeToRussian = document.querySelector('.change-to-russian'),
        changeToEnglish = document.querySelector('.change-to-english'),
        ruLanguange = document.querySelectorAll('.ru'),
        enLanguage = document.querySelectorAll('.en');

    changeToRussian.addEventListener('click', () => {
        ruLanguange.forEach(ru => {
            ru.style.display = "block";
        })
        enLanguage.forEach(en => {
            en.style.display = "none";
        })
        changeToEnglish.style.display = "block"
        changeToRussian.style.display = "none"
    })

    changeToEnglish.addEventListener('click', () => {
        ruLanguange.forEach(ru => {
            ru.style.display = "none";
        })
        enLanguage.forEach(en => {
            en.style.display = "block";
        })

        changeToEnglish.style.display = "none"
        changeToRussian.style.display = "block"
    })


});
