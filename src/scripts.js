function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-input");
  console.log(searchInput.value);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let seachFormElement = document.querySelector("form");
seachFormElement.addEventListener("submit", handleSearchSubmit);
