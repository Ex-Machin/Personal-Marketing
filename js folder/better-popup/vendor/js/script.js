document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('.main-button'),
        modal = document.querySelector('#openModal'),
        closeButton = document.querySelector('.close');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    })

    modal.addEventListener("click", (e) => {
        if(e.target.classList[0]=="overlay") {
            modal.style.display="none" 
        }
    })
})