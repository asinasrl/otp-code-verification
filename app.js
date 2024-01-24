const inputs = document.querySelectorAll("input");
const verificationBtn = document.getElementById("ver-btn");
const iconDiv = document.getElementsByClassName("icon")[0];
const successMsg = document.getElementsByClassName("succes")[0];

let nums = "0123456789";

let otp = "";

for (let i = 0; i < 4; i++) {
  let otpLetter = Math.floor(Math.random() * nums.length);
  otp += otpLetter;
}

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key == "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          currentInput.setAttribute("disabled", true);
          currentInput.value = "";
          prevInput.focus();
        }
      });
    }
  });
});

window.addEventListener("load", () => {
  inputs[0].focus();
});

console.log(otp);

verificationBtn.addEventListener("click", () => {
  userOtp = "";
  inputs.forEach((input) => {
    userOtp += input.value;
  });
  if (userOtp === otp) {
    iconDiv.innerHTML = `<i class="fa-solid fa-lock-open fa-2xl"></i>`;
    successMsg.innerHTML = `<span id="text">Login Successfull (Redirecting...)</span>`;
    location.href = "https://github.com/asinasrl";
  } else {
    successMsg.innerHTML = `<span id="wrong">Wrong OTP - Please TRY Again!</span>`;
  }
});
