"use strict"; 

// Find DOM element and hold onto it, so we don't have to search for it
// every time we use it.
const calcForm = document.getElementById("calc-form");


/** Get form values and return as `{amount, years, rate}`.
 *
 * Example output: `{"amount": 10000, "years": 10, "rate": 4.5}`.
 *
 * */

function getFormValues() {
  console.log("getFormValues");

  const loanDetails = {};
  loanDetails.amount = Number(document.getElementById("loan-amount").value);
  loanDetails.years = Number(document.getElementById("loan-years").value);
  loanDetails.rate = Number(document.getElementById("loan-rate").value / 100);

  return loanDetails;
}


/** Calculate monthly payment and return exact amount. */

function calcMonthlyPayment(amount, years, rate) {
  console.log("calcMonthlyPayment, loan deets", amount, years, rate);

  const months = 12;
  const monthlyRate = rate / months;
  const n = Math.floor(years * months);

  const payment = (amount * monthlyRate) / (1 - (1 + monthlyRate) ** (-n));
  return payment;
}


/** Get form values, calculate, convert to 2-decimal places, and update UI. */

function getFormValuesAndDisplayResults() {
  console.log("getFormValuesAndDisplayResults");

  const { amount, years, rate } = getFormValues();
  const payment = calcMonthlyPayment(amount, years, rate);

  console.log("payment", payment);
  const convertedPayment = payment.toFixed(2);

  document.getElementById('calc-monthly-payment').innerText = "$" + convertedPayment;

}


/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  // use the default values in the provided screenshot
  document.getElementById("loan-amount").value = "10000";
  document.getElementById("loan-years").value = "10";
  document.getElementById("loan-rate").value = "4.5";
  getFormValuesAndDisplayResults();
}


/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}
