const LogInButton = document.getElementById("log-in-button");
const userNameInput = document.querySelector("#user-login");
const userPasswordInput = document.getElementById("password");

const loginFormHandler = async (event) => {
  event.preventDefault();
  const username = userNameInput.value.trim();
  console.log("username", username);
  const password = userPasswordInput.value;
  console.log("password", password);

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/holiday");
    } else {
      alert("Unable to login!");
    }
  }
};

LogInButton.addEventListener("click", loginFormHandler);
