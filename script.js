function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var bmi = weight / (height * height);
  var abc = document.getElementById("bmiRemarks").innerHTML;

  if (bmi <= 18.5) {
    document.getElementById("bmiRemarks").value = "You Are Underweight";
    document.getElementById("bmiRemarks").style.color = "red";
  }
  else if (bmi > 18.5 && bmi <= 25.0) {
    document.getElementById("bmiRemarks").value = "You Are Of Normal Range";
    document.getElementById("bmiRemarks").style.color = "green";
  }
  else {
    document.getElementById("bmiRemarks").value = "You Are Overweight";
    document.getElementById("bmiRemarks").style.color = "red";
  }
  document.getElementById("bmiNum").value = bmi;
}

function resetButton() {
  document.getElementById("bmiRemarks").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("bmiNum").value = "";
}