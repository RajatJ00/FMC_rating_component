const ratingList = document.querySelectorAll(".rate");

const Main = document.querySelector(".main");

const ThankYou = document.querySelector(".main_thankyou");

const Number = document.querySelector(".rating_number");

let rating_number;
let Rate;
ratingList.forEach(selectedRate => {
    selectedRate.addEventListener("click", (e) => {
        document.querySelector(".selected")?.classList.remove("selected");
        selectedRate.classList.add("selected");

        Rate = e.target.innerHTML;
    });
});

function submit() {

    Main.classList.add("hidden")
    ThankYou.classList.remove("hidden")
    Number.textContent = Rate;
}