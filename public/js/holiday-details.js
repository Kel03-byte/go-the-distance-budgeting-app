// Function to have the user to go from Holiday Page to Expense Page

const addExpenseButton = document.getElementById("add-expense-btn");

function goToExpensePage () {
  document.location.replace("/expenses");
}

addExpenseButton.addEventListener('click', goToExpensePage)