// SELECT ELEMENTS
const balanceEl = document.querySelector(".balance .value");
const savingsTotalEl = document.querySelector(".savings-total");
const expensesTotalEl = document.querySelector(".expense-total");
const savingsEl = document.querySelector("#savings");
const foodEl = document.querySelector("#food");
const entertainmentEl = document.querySelector("#entertainment");
const accomodationEl = document.querySelector("#accomodation");
const transportEl = document.querySelector("#transport");
const allEl = document.querySelector("#all");
const savingsList = document.querySelector("#savings .list");
const foodList = document.querySelector("#food .list");
const entertainmentList = document.querySelector("#entertainment .list");
const accomodationList = document.querySelector("#accomodation .list");
const transportList = document.querySelector("#transport .list");
const allList = document.querySelector("#all .list");

// SELECT BTNS
const savingsBtn = document.querySelector(".tab1");
const foodBtn = document.querySelector(".tab2");
const entertainmentBtn = document.querySelector(".tab3");
const accomodationBtn = document.querySelector(".tab4");
const transportBtn = document.querySelector(".tab5");
const allBtn = document.querySelector(".tab6");

// INPUT BTS
const addSavings = document.querySelector(".add-savings");
const savingsTitle = document.getElementById("savings-title-input");
const savingsAmount = document.getElementById("savings-amount-input");

const addFood = document.querySelector(".add-food");
const foodTitle = document.getElementById("food-title-input");
const foodAmount = document.getElementById("food-amount-input");

const addEntertainment = document.querySelector(".add-entertainment");
const entertainmentTitle = document.getElementById("entertainment-title-input");
const entertainmentAmount = document.getElementById("entertainment-amount-input");

const addAccomodation = document.querySelector(".add-accomodation");
const accomodationTitle = document.getElementById("accomodation-title-input");
const accomodationAmount = document.getElementById("accomodation-amount-input");

const addTransport = document.querySelector(".add-transport");
const transportTitle = document.getElementById("transport-title-input");
const transportAmount = document.getElementById("transport-amount-input");

// VARIABLES
let ENTRY_LIST;
let balance = 0, savings = 0, expenses = 0;
const DELETE = "delete", EDIT = "edit";

// LOOK IF THERE IS SAVED DATA IN LOCALSTORAGE
ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
updateUI();

// EVENT LISTENERS
savingsBtn.addEventListener("click", function () {
    show(savingsEl);
    hide([foodEl, entertainmentEl, accomodationEl, transportEl, allEl]);
    active(savingsBtn);
    inactive([foodBtn, entertainmentBtn, accomodationBtn, transportBtn, allBtn]);
})
foodBtn.addEventListener("click", function () {
    show(foodEl);
    hide([savingsEl, entertainmentEl, accomodationEl, transportEl, allEl]);
    active(foodBtn);
    inactive([savingsBtn, entertainmentBtn, accomodationBtn, transportBtn, allBtn]);
})
entertainmentBtn.addEventListener("click", function () {
    show(entertainmentEl);
    hide([savingsEl, foodEl, accomodationEl, transportEl, allEl]);
    active(entertainmentBtn);
    inactive([savingsBtn, foodBtn, accomodationBtn, transportBtn, allBtn]);
})
accomodationBtn.addEventListener("click", function () {
    show(accomodationEl);
    hide([savingsEl, foodEl, entertainmentEl, transportEl, allEl]);
    active(accomodationBtn);
    inactive([savingsBtn, foodBtn, entertainmentBtn, transportBtn, allBtn]);
})
transportBtn.addEventListener("click", function () {
    show(transportEl);
    hide([savingsEl, foodEl, accomodationEl, entertainmentEl, allEl]);
    active(transportBtn);
    inactive([savingsBtn, foodBtn, accomodationBtn, entertainmentBtn, allBtn]);
})
allBtn.addEventListener("click", function () {
    show(allEl);
    hide([savingsEl, foodEl, accomodationEl, transportEl, transportEl]);
    active(allBtn);
    inactive([savingsBtn, foodBtn, accomodationBtn, transportBtn, transportBtn]);
})

addSavings.addEventListener("click", function () {
    // IF ONE OF THE INPUTS IS EMPTY => EXIT
    if (!savingsTitle.value || !savingsAmount.value) return;

    // SAVE THE ENTRY TO ENTRY_LIST
    let savings = {
        type: "savings",
        title: savingsTitle.value,
        amount: parseInt(savingsAmount.value)
    }
    ENTRY_LIST.push(savings);

    updateUI();
    clearInput([savingsTitle, savingsAmount])
})

addFood.addEventListener("click", function () {
    // IF ONE OF THE INPUTS IS EMPTY => EXIT
    if (!foodTitle.value || !foodAmount.value) return;

    // SAVE THE ENTRY TO ENTRY_LIST
    let food = {
        type: "food",
        title: foodTitle.value,
        amount: parseInt(foodAmount.value)
    }
    ENTRY_LIST.push(food);

    updateUI();
    clearInput([foodTitle, foodAmount])
})

addEntertainment.addEventListener("click", function () {
    // IF ONE OF THE INPUTS IS EMPTY => EXIT
    if (!entertainmentTitle.value || !entertainmentAmount.value) return;

    // SAVE THE ENTRY TO ENTRY_LIST
    let entertainment = {
        type: "entertainment",
        title: entertainmentTitle.value,
        amount: parseInt(entertainmentAmount.value)
    }
    ENTRY_LIST.push(entertainment);

    updateUI();
    clearInput([entertainmentTitle, entertainmentAmount])
})

addAccomodation.addEventListener("click", function () {
    // IF ONE OF THE INPUTS IS EMPTY => EXIT
    if (!accomodationTitle.value || !accomodationAmount.value) return;

    // SAVE THE ENTRY TO ENTRY_LIST
    let accomodation = {
        type: "accomodation",
        title: accomodationTitle.value,
        amount: parseInt(accomodationAmount.value)
    }
    ENTRY_LIST.push(accomodation);

    updateUI();
    clearInput([accomodationTitle, accomodationAmount])
})

addTransport.addEventListener("click", function () {
    // IF ONE OF THE INPUTS IS EMPTY => EXIT
    if (!transportTitle.value || !transportAmount.value) return;

    // SAVE THE ENTRY TO ENTRY_LIST
    let transport = {
        type: "transport",
        title: transportTitle.value,
        amount: parseInt(transportAmount.value)
    }
    ENTRY_LIST.push(transport);

    updateUI();
    clearInput([transportTitle, transportAmount])
})

savingsList.addEventListener("click", deleteOrEdit);
foodList.addEventListener("click", deleteOrEdit);
entertainmentList.addEventListener("click", deleteOrEdit);
accomodationList.addEventListener("click", deleteOrEdit);
transportList.addEventListener("click", deleteOrEdit);
allList.addEventListener("click", deleteOrEdit);

// HELPERS

function deleteOrEdit(event) {
    const targetBtn = event.target;

    const entry = targetBtn.parentNode;

    if (targetBtn.id == DELETE) {
        deleteEntry(entry);
    } else if (targetBtn.id == EDIT) {
        editEntry(entry);
    }
}

function deleteEntry(entry) {
    ENTRY_LIST.splice(entry.id, 1);

    updateUI();
}

function editEntry(entry) {
    console.log(entry)
    let ENTRY = ENTRY_LIST[entry.id];

    if (ENTRY.type == 'savings') {
        savingsAmount.value = ENTRY.amount;
        savingsTitle.value = ENTRY.title;
    } else if (ENTRY.type == "entertainment") {
        entertainmentAmount.value = ENTRY.amount;
        entertainmentTitle.value = ENTRY.title;
    } else if (ENTRY.type == "accomodation") {
        accomodationAmount.value = ENTRY.amount;
        accomodationTitle.value = ENTRY.title;
    } else if (ENTRY.type == "transport") {
        transportAmount.value = ENTRY.amount;
        transportTitle.value = ENTRY.title;
    } else if (ENTRY.type == "food") {
        foodAmount.value = ENTRY.amount;
        foodTitle.value = ENTRY.title;
    }
    deleteEntry(entry);
}

function updateUI() {
    savings = calculateTotal("savings", ENTRY_LIST);
    food = calculateTotal("food", ENTRY_LIST);
    accomodation = calculateTotal("accomodation", ENTRY_LIST);
    entertainment = calculateTotal("entertainment", ENTRY_LIST);
    transport = calculateTotal("transport", ENTRY_LIST);
    expenses = addAllExpenses(food, entertainment, accomodation, transport)
    balance = Math.abs(calculateBalance(savings, expenses));

    // DETERMINE SIGN OF BALANCE
    let sign = (savings >= expenses) ? "$" : "-$";

    // UPDATE UI
    balanceEl.innerHTML = `<small>${sign}</small>${balance}`;
    expensesTotalEl.innerHTML = `<small>$</small>${expenses}`;
    savingsTotalEl.innerHTML = `<small>$</small>${savings}`;

    clearElement([savingsList, foodList, entertainmentList, accomodationList, transportList, allList]);

    ENTRY_LIST.forEach((entry, index) => {
        if (entry.type == "food") {
            showEntry(foodList, entry.type, entry.title, entry.amount, index)
        } else if (entry.type == "entertainment") {
            showEntry(entertainmentList, entry.type, entry.title, entry.amount, index)
        } else if (entry.type == "accomodation") {
            showEntry(accomodationList, entry.type, entry.title, entry.amount, index)
        } else if (entry.type == "transport") {
            showEntry(transportList, entry.type, entry.title, entry.amount, index)
        } else if ( entry.type == "savings" ){
            showEntry(savingsList, entry.type, entry.title, entry.amount, index)
        }
        showEntry(allList, entry.type, entry.title, entry.amount, index)
    });

    localStorage.setItem("entry_list", JSON.stringify(ENTRY_LIST));
}

function showEntry(list, type, title, amount, id) {

    const entry = ` <li id = "${id}" class="${type}">
                        <div class="entry">${title}: $${amount}</div>
                        <div><i id="edit"class="far fa-edit"></i></div>
                        <div><i id="delete" class="fas fa-trash-alt"></i></div>
                    </li>`;

    const position = "afterbegin";

    list.insertAdjacentHTML(position, entry);
}

function clearElement(elements) {
    elements.forEach(element => {
        element.innerHTML = "";
    })
}

function calculateTotal(type, list) {
    let sum = 0;

    list.forEach(entry => {
        if (entry.type == type) {
            sum += entry.amount;
        }
    })

    return sum;
}

function addAllExpenses (food, entertainment, transport, accomodation) {
    return food + entertainment + transport + accomodation;
}

function calculateBalance(savings, expenses) {
    return savings - expenses;
}

function clearInput(inputs) {
    inputs.forEach(input => {
        input.value = "";
    })
}
function show(element) {
    element.classList.remove("hide");
}

function hide(elements) {
    elements.forEach(element => {
        element.classList.add("hide");
    })
}

function active(element) {
    element.classList.add("active");
}

function inactive(elements) {
    elements.forEach(element => {
        element.classList.remove("active");
    })
}