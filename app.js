let cities = ["mumbai", "delhi", "gujrat", "haryana", "varanasi"];

function randomCity() {
  let city = Math.floor(Math.random() * cities.length);
  return cities[city];
}
function submitData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let sahar = randomCity();

  let displayData = document.getElementById("showData");
  displayData.innerHTML =
    "User name " + name + "email " + email + "city " + sahar;
}
