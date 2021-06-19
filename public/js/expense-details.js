// Function to add the Expense details (Name, Cost and Category)

const submitButton = document.getElementById("submitButton")

submitButton.onclick = async function (event) {
    event.preventDefault();

    const expense_name = document.getElementById("expense_name").value;
    const cost = document.getElementById("cost").value;
    const category = document.getElementById("category").value;

    if (expense_name && cost && category) {
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

            const nameListEl = $('#name-list')
            const amountListEl = $('#amount-list')
            const categoryListEl = $('#category-list')

            const expenseNameItem = $("<ul><li>" + expense_name + "</li></ul>");
            const expenseAmountItem = $("<ul><li>" + cost + "</li></ul>");
            const expenseCategoryItem = $("<ul><li>" + category + "</li></ul>");

            expenseNameItem.appendTo(nameListEl);
            expenseAmountItem.appendTo(amountListEl);
            expenseCategoryItem.appendTo(categoryListEl);

            $(expense_name);
            $(cost);
            $(category);

            document.location.replace("/expenses");

        } else {
            alert("Please try add your post again");
            return
        }
    }
    if (!expense_name) {
        alert('Please add a name for your expense')
        return
    } else if (!cost) {
        alert('Please add the cost of your expense')
        return
    } else if (!category) {
        alert('Please pick a category for your expense')
        return
    }
};