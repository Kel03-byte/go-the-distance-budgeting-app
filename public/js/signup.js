const signUpButton = document.getElementById("sign-up-button");
const userNameInput = document.querySelector("#username");
const userEmailInput = document.querySelector("#email");
const userPasswordInput = document.querySelector("#password");

const signupFormHandler = async (event) => {
  event.preventDefault();
  const username = userNameInput.value.trim().toUpperCase();
  const password = userPasswordInput.value;
  const email = userEmailInput.value;
  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        email,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/create-holiday");
    } else {
      alert("Unable to sign up!");
    }
  }
};

signUpButton.addEventListener("click", signupFormHandler);
