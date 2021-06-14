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
