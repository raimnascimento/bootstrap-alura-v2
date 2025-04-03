const inputCheck = document.querySelector('#modoNoturno');
const elemento = document.querySelector('body');

inputCheck.addEventListener("click", () => {
    const modo = inputCheck.checked ? 'dark' : 'light';
    elemento.setAttribute('data-bs-theme', modo);
})