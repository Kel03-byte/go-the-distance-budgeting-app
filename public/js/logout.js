// When button is clicked the user is logged out and redirected to the homepage

const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Log out unsuccessful");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
