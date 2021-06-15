const holidaySubmitButton = document.getElementById("holiday-submit-button");
const confirmButtonEl = document.createElement("button");

//Event listener to collect user's input
holidaySubmitButton.addEventListener("click", function (event) {
  const holidayResults = document.getElementById("holiday-budget-result");
  const userDestination = document
    .getElementById("destination-list")
    .value.trim()
    .toUpperCase();
  const budgetTotal = document.getElementById("holiday-budget-total").value;
  const dateOne = document.getElementById("start-date").value;
  const dateTwo = document.getElementById("end-date").value;
  const startDate = moment(dateOne).format("DD/MM/YYYY");
  const endDate = moment(dateTwo).format("DD/MM/YYYY");

  //IF statements for when the user does/doesn't enter their input
  if (!userDestination) {
    alert("Please enter a destination");
    return;
  } else if (!budgetTotal) {
    alert("Please enter a budget total");
    return;
  } else if (!dateOne) {
    alert("Please enter a start date for your holiday");
    return;
  } else if (!dateTwo) {
    alert("Please enter an end date for your holiday");
    return;
  } else {
    //If user enters all info then a message is displayed to confirm their input or to resubmit
    event.preventDefault();
    holidayResults.textContent =
      "You have selected to holiday at " +
      userDestination +
      ", from: " +
      startDate +
      ", till: " +
      endDate +
      " with $" +
      budgetTotal +
      " to spend while on holiday, is that correct?";
    holidayResults.append();
    confirmButtonEl.textContent = "Confirm";
    confirmButtonEl.classList = "confirm-button";
    holidayResults.appendChild(confirmButtonEl);
    // When submit is pressed the user is taken to the holiday-details page where they can input expenses
    confirmButtonEl.onclick = location.href = "/api/users/holiday-details";
  }
});

const userDestination = document
  .getElementById("destination-list")
  .value.trim()
  .toUpperCase();

// Auotcomplete for User Destination
let map, latValue, lngValue;

function autoComplete() {
  const locationInput = document.querySelector("#destination-list");
  const autocomplete = new google.maps.places.Autocomplete(locationInput);
  google.maps.event.addListener(autocomplete, "place_changed", function () {
    const city = autocomplete.getPlace();
    latValue = city.geometry.location.lat();
    lngValue = city.geometry.location.lng();
  });
}

google.maps.event.addDomListener(window, "load", autoComplete);
