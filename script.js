const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButtonNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValue(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Congratulation 🎉🎊, Your Birthday is lucky";
  } else {
    outputBox.innerText = "Oops😔! sadly Your birthday Not Lucky";
  }
}

function checkBirthdayIsLucky() {
  let dob = dateOfBirth.value;
  let sum = calculateSum(dob);
  dob && luckyNumber.value
    ? compareValue(sum, luckyNumber.value)
    : (outputBox.innerText = "Both field is required");
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sumUp = 0;
  for (let i = 0; i < dob.length; i++) {
    sumUp = sumUp + Number(dob.charAt(i));
  }
  return sumUp;
}

checkButtonNumber.addEventListener("click", checkBirthdayIsLucky);
