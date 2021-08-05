document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('.main-button'),
        modal = document.querySelector('#openModal');

    button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "block"
    });

})
