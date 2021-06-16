// Here is where we want to add expenses and have them displayed in a table

const expenseModal = document.getElementById("expenseModal");
const addExpenseButton = document.getElementById("addExpenseButton");
const closeButton = document.getElementsByClassName("closeButton")[0];

addExpenseButton.onclick = function () {
    expenseModal.style.display = "block";
}

closeButton.onclick = function () {
    expenseModal.style.display = "none";
}

const submitButton = document.getElementById("submitButton")

//On submitting the expense values the inputted information is then saved to local storage and displayed in the table
submitButton.onclick = async function (event) {
    event.preventDefault();
    const expense_name = document.getElementById("expense_name").value;

    const cost = document.getElementById("cost").value;

    const category = document.getElementById("category").value;

    const response = await fetch("/api/expenses", {
        method: "POST",
        body: JSON.stringify({
          expense_name,
          cost,
          category,
        }),
        headers: { "Content-Type": "application/json" },
      });
    
      if (response.ok) {
        document.location.replace("/holiday");
      } else {
        alert("Please try add your post again");
      }


    if (!expense_name) {
        displayModal();
        return
    } else if (!cost) {
        displayModal();
    } else if (!category) {
        displayModal();
        return
    } else {

        const nameListEl = $('#name-list')

        const expenseNameItem = $("<ul><li>" + expense_name + "</li></ul>");

        expenseNameItem.appendTo(nameListEl);

        $(expense_name);



        const amountListEl = $('#amount-list')

        const expenseAmountItem = $("<ul><li>" + cost + "</li></ul>");

        expenseAmountItem.appendTo(amountListEl);

        $(cost);



        const categoryListEl = $('#category-list')

        const expenseCategoryItem = $("<ul><li>" + category + "</li></ul>");

        expenseCategoryItem.appendTo(categoryListEl);

        $(category);


        expenseModal.style.display = "none";
    }

};


