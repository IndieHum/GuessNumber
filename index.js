const Input = document.getElementById("input");
const Button = document.getElementById("button");
const Message = document.querySelector(".answer-container");
const LifeNode = document.querySelector(".life-container");
const Heart = document.querySelectorAll(".heart");

let TheNumber = null;

function NumberToGuess() {
    TheNumber = Math.trunc(Math.random() * 100);
}

function ValidateNumber() {
    if (Input.value <= 100 && Input.value >= 1) {
        if (TheNumber > Input.value) {
            ShowMessage("No, Number is BIGGER than this.", "incorrect");
            LifeCounter();
        } else if (TheNumber < Input.value) {
            ShowMessage("No, Number is SMALLER than this.", "incorrect");
            LifeCounter();
        } else {
            ShowMessage(
                `Yes, you guessed right. Answer: ${TheNumber}`,
                "correct"
            );
            Button.disabled = true;
            Input.disabled = true;
            setTimeout(() => {
                alert("Refresh to play again");
            }, 1000);
        }
        Input.value = "";
    } else {
        LifeCounter();
        alert("guess number between 1 to 100");
    }
}

function ShowMessage(mes, status) {
    Message.innerText = "";
    Message.classList.remove("incorrect");

    Message.style.visibility = "visible";
    Message.classList.add(`${status}`);
    Message.innerText = `${mes}`;
}

function LifeCounter() {
    if (LifeNode.children.length == 1) {
        LifeNode.children[0].remove();
        Button.disabled = true;
        Input.disabled = true;
        alert(`You Loose Answer Was ${TheNumber}`);
    } else {
        LifeNode.children[0].remove();
    }
}

window.addEventListener("load", NumberToGuess);
Button.addEventListener("click", ValidateNumber);
