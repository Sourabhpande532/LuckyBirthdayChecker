const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButtonNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

checkButtonNumber.addEventListener("click", () => {
  console.log(dateOfBirth.value, luckyNumber.value);
});
