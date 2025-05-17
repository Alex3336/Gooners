document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modalbox");
    const modalShadow = document.querySelector(".modal-shadow");
    const saveBtn = document.querySelector(".modalbutton");
    const closeBtn = document.querySelector(".btnclose");
    const input = document.querySelector("#username");
    const nameDisplay = document.querySelector(".js-userName");
    modal.style.display = "block";

    const savedName = localStorage.getItem("userName");
    if (savedName) {
        nameDisplay.textContent = `Вітаємо, ${savedName}!`;
    }

    saveBtn.addEventListener("click", () => {
        const name = input.value.trim();
        if (name) {
            localStorage.setItem("userName", name);
            nameDisplay.textContent = `Вітаємо, ${name}!`;
            modal.style.display = "none";
            modalShadow.style.display = "none"
        }
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modalShadow.style.display = "none"
    });
});
