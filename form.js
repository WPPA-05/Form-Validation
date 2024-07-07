const formEl = document.querySelector("#signUpForm");
const userName = document.querySelector("#name");
const password = document.querySelector("#pwd");
const btnEl = document.querySelector("button");
const userNameForm = document.querySelector(".username");
const pwdForm = document.querySelector(".password");

formEl.addEventListener("submit", (event) => {
   event.preventDefault();
  if(userName.value === "" && password.value === "" ){
     createError("Username",userNameForm);
     createError("Password", pwdForm);
}else {
    alert("You have successfully signed Up")
}
});
userNameForm.addEventListener("input", () => {
    let renderedError = document.querySelector(".error");
    userNameForm.removeChild(renderedError);
});
pwdForm.addEventListener("input", () => {
    let renderedError = document.querySelector(".error");
    pwdForm.removeChild(renderedError);
})

const createError = (message,parentEl) => {
    const Error = document.createElement("span");
    Error.textContent = `${message} is required`;
    Error.classList.add("error");
    parentEl.append(Error)
}

