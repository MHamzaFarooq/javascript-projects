let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#result");
  console.log(height.value, weight.value);

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please enter a valid value";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter a valid";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `Your BMI is ${bmi} (Under weight)`;
    }
    if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `Your BMI is ${bmi} (Normal range)`;
    }
    if (bmi > 24.9) {
      result.innerHTML = `Your BMI is ${bmi} (Over weight)`;
    }
  }
});
