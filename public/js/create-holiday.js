// const holidayFormHandler = async (event) => {
//   event.preventDefault();

//   const destination_location = document.querySelector(
//     "input[name='destination-list']"
//   ).value;
//   const dateOne = document.querySelector("input[name='start-date']").value;
//   const dateTwo = document.querySelector("input[name=end-date']").value;
//   const total_budget = document.querySelector(
//     "input[holiday-budget-total']"
//   ).value;
//   const start_date = moment(dateOne).format("DD/MM/YYYY");
//   const end_date = moment(dateTwo).format("DD/MM/YYYY");

//     if (!destination_location) {
//     alert("Please enter a destination");
//     return;
//   } else if (!total_budget) {
//     alert("Please enter a budget total");
//     return;
//   } else if (!dateOne) {
//     alert("Please enter a start date for your holiday");
//     return;
//   } else if (!dateTwo) {
//     alert("Please enter an end date for your holiday");
//     return;
//   } else {
//     //If user enters all info then a message is displayed to confirm their input or to resubmit
//     event.preventDefault();
//     holidayResults.textContent =
//       "You have selected to holiday at " +
//       destination_location +
//       ", from: " +
//       start_date +
//       ", till: " +
//       end_date +
//       " with $" +
//       total_budget +
//       " to spend while on holiday, is that correct?";
//     holidayResults.append();
//     confirmButtonEl.textContent = "Confirm";
//     confirmButtonEl.classList = "confirm-button";
//     holidayResults.appendChild(confirmButtonEl);

//   const response = await fetch("/api/holiday", {
//     method: "POST",
//     body: JSON.stringify({
//       destination_location,
//       start_date,
//       end_date,
//       total_budget,
//     }),
//     headers: { "Content-Type": "application/json" },
//   });
//   if (response.ok) {
//     document.location.replace("/create-holiday");
//   } else {
//     alert("Please try again");
//   }
// };
// };

// document
//   .querySelector("holiday-form")
//   .addEventListener("submit", holidayFormHandler);

const holidaySubmitButton = document.getElementById('holiday-submit-button')

holidaySubmitButton.addEventListener("click", async function (event) {
  event.preventDefault();
  const holidayResults = document.getElementById("holiday-budget-result");
<<<<<<< HEAD
  console.log("holoday results", holidayResults);
=======
  console.log("holiday results", holidayResults);
>>>>>>> 2dd08ff3004006acef22043e1efd7ef95546eb4f
  const destination_location = document
    .getElementById("destination-list")
    .value.trim()
    .toUpperCase();
<<<<<<< HEAD
  console.log("destination location", destination_location);
=======
>>>>>>> 2dd08ff3004006acef22043e1efd7ef95546eb4f
  // const total_budget = document.getElementById("holiday-budget-total").value;
  // console.log("budget", total_budget);
  const dateOne = document.getElementById("start-date").value;
  const dateTwo = document.getElementById("end-date").value;
  const start_date = dateOne;
  const end_date = dateTwo;

  const response = await fetch("/api/holiday", {
    method: "POST",
    body: JSON.stringify({
      destination_location,
      // total_budget,
      start_date,
      end_date,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/holiday");
  } else {
    alert("Please try add your post again");
  }

  //IF statements for when the user does/doesn't enter their input
  if (!destination_location) {
    alert("Please enter a destination");
    return;
  // } else if (!total_budget) {
  //   alert("Please enter a budget total");
  //   return;
  } else if (!dateOne) {
    alert("Please enter a start date for your holiday");
    return;
  } else if (!dateTwo) {
    alert("Please enter an end date for your holiday");
    return;
  } else {
    //If user enters all info then a message is displayed to confirm their input or to resubmit
    event.preventDefault();
    // holidayResults.textContent =
    //   "You have selected to holiday at " +
    //   destination_location +
    //   ", from: " +
    //   start_date +
    //   ", till: " +
    //   end_date +
    //   " with $" +
    //   total_budget +
    //   " to spend while on holiday, is that correct?";
    // holidayResults.append();
<<<<<<< HEAD
    confirmButtonEl.textContent = "Confirm";
    confirmButtonEl.classList = "confirm-button";
    holidayResults.appendChild(confirmButtonEl);
=======
    // confirmButtonEl.textContent = "Confirm";
    // confirmButtonEl.classList = "confirm-button";
    // holidayResults.appendChild(confirmButtonEl);
>>>>>>> 2dd08ff3004006acef22043e1efd7ef95546eb4f
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
