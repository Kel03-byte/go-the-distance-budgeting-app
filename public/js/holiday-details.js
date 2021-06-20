// Here is where we get the user to go from Holiday Page to Expense Page

const goToExpsPageBtn = document.getElementById('add-expense-btn');

function goToExpensePage () {
  document.location.replace('/expenses');
}

goToExpsPageBtn.addEventListener('click', goToExpensePage)