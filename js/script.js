var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

function tripInfo() {
  var totalBudget = Number(prompt("What is your total budget?"));
  var accommodation = Number(prompt("What are your accommodation costs?"));
  var numDays = Number(prompt("How many days does your trip last?"));

  calculateDailyBudget(totalBudget, accommodation, numDays);
}

function calculateDailyBudget(totalBudget, accommodation, numDays) {
  var daily = ((totalBudget - accommodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You have $${daily} to spend per day!!`;
}

tripInfoButton.addEventListener("click", function () {
  tripInfo();
});
