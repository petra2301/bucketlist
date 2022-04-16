const letsgoBtn = document.querySelector("#letsgo");
const countrySelect = document.querySelector("#countrySelect");

letsgoBtn.addEventListener("click", checkCountry);

function checkCountry() {
    console.log(countrySelect.value);
    fetchNorwayPlaces();
};

function fetchNorwayPlaces() {
    fetch('/places/norwayplaces/places/norwayplaces', {
    //     headers: {
    //       "Content-Type": "application/json; charset=utf-8",
    //     },
         method: "GET",
       }
      )
      .then(response => console.log(response));
    // .then((jsonResponse) => {
    //     console.log(jsonResponse)
    // });
};