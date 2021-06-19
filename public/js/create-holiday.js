// Function to add the Holiday details (Where, Date leaving, Date returning and Total Budgeted Amount)

const holidaySubmitButton = document.getElementById("holiday-submit-button");

holidaySubmitButton.addEventListener("click", async function (event) {
  event.preventDefault();

  const dateOne = document.getElementById("start-date").value;
  const dateTwo = document.getElementById("end-date").value;
  const total_budget = document.getElementById("holiday-budget-total").value;
  const start_date = dateOne;
  const end_date = dateTwo;
  const destination_location = document
    .getElementById("destination-list")
    .value.trim()
    .toUpperCase();

  if (destination_location && start_date && end_date && total_budget) {
    const response = await fetch("/api/holiday", {
      method: "POST",
      body: JSON.stringify({
        destination_location,
        start_date,
        end_date,
        total_budget,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/holiday");
    } else {
      alert("Please try add your post again");
    };
  } else {
    alert('An input is required!')
    return
  };
})


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