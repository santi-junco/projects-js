const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");

const maskNumber = "#### #### #### ####";
const maskDate = "##/##";
const maskCVV = "***";

let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

function handleInputEvent(inputElement, mask, numberArray) {
  inputElement.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      return;
    }
    e.preventDefault();
    handleInput(mask, e.key, numberArray);
    inputElement.value = numberArray.join("");
  });
}

function handleInput(mask, key, arr) {
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  if (key === "Backspace" && arr.length > 0) {
    arr.pop();
    return;
  }

  if (numbers.includes(key) && arr.length + 1 <= mask.length) {
    if (
      mask[arr.length] === "-" ||
      mask[arr.length] === "/" ||
      mask[arr.length] === " "
    ) {
      arr.push(mask[arr.length], key);
    } else {
      arr.push(key);
    }
  }
}

handleInputEvent(inputCard, maskNumber, cardNumber);
handleInputEvent(inputDate, maskDate, dateNumber);
handleInputEvent(inputCVV, maskCVV, cvvNumber);
