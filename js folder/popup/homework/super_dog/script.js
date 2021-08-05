window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('#button-with-hash'),
    modal = document.querySelector('#modal');

    modal.style.display = "none";

    btn.addEventListener('click', () => {
    modal.style.display = "block";
    })
})