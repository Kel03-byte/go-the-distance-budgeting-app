const holidaySubmitButton=document.getElementById("holiday-submit-button");holidaySubmitButton.addEventListener("click",async function(e){e.preventDefault();var t=document.getElementById("start-date").value,a=document.getElementById("end-date").value,o=document.getElementById("holiday-budget-total").value,e=t,t=a,a=document.getElementById("destination-list").value.trim().toUpperCase();a&&e&&t&&o?(await fetch("/api/holiday",{method:"POST",body:JSON.stringify({destination_location:a,start_date:e,end_date:t,total_budget:o}),headers:{"Content-Type":"application/json"}})).ok?document.location.replace("/holiday"):alert("Please try add your post again"):alert("An input is required!")});let map,latValue,lngValue;function autoComplete(){var e=document.querySelector("#destination-list");const t=new google.maps.places.Autocomplete(e);google.maps.event.addListener(t,"place_changed",function(){const e=t.getPlace();latValue=e.geometry.location.lat(),lngValue=e.geometry.location.lng()})}google.maps.event.addDomListener(window,"load",autoComplete);