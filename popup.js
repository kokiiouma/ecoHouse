let modal = document.querySelector('.modal');
let openModalBtn = document.querySelector('.open-modal-btn');
let openModalBtn2 = document.querySelector('.open-modal-btn-2');

openModalBtn.onclick = function() {
    modal.classList.add('open');
};

openModalBtn2.onclick = function() {
    modal.classList.add('open');
};

document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});