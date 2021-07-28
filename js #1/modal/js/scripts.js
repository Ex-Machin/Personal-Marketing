// let, const and functions (all here)

// let - we can change
// const - cannot
// var - old syntax

// camelCase
// addEventListener ('click')('mouseover')...
// adding script-tag / writing all script in tag script but without src
// you've already done it if tried to copy some CDN-file(bootstrap)

// https://getbootstrap.com/docs/5.0/getting-started/introduction/

const modal = document.querySelector("#myModal"),
    btn = document.querySelector("#myBtn"),
    closeBtn = document.querySelector(".close");

btn.addEventListener('click', () => {
    modal.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});