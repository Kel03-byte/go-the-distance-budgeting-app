// Function to add the Expense details (Name and Cost)

const addExpenseBtn = document.querySelector(".add-expense")

addExpenseBtn.onclick = async function (event) {
    event.preventDefault();

    const expense_name = document.querySelector(".expense-name").value;
    const cost = document.querySelector(".cost").value;

    if (expense_name && cost) {
        const response = await fetch("/api/expenses", {
            method: "POST",
            body: JSON.stringify({
                expense_name,
                cost,
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {

            document.location.replace("/expenses");

        } else {
            alert("Please try adding your expense again");
            return
        }
    }
};