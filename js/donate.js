/*
    Capstone Project

    Author: Edgar Marquez
    Date: 9.21.17

    Filename: donate.js
*/

"use strict"; // executes strict mode

// global variable
var formValidity = true; // Tells the form that it is valid

function removeSelectDefaults() { // Removes the default from the select to be removed
  var emptySelect = document.getElementsByTagName("select"); // calls the select elements
  for (var i = 0; i < emptySelect.length; i++) { // counts the array of emptySelect
    emptySelect[i].selectedIndex = -1; // places the select to be empty
  }
}

function setUpPage() { // calls the functions that are within it
  removeSelectDefaults(); // calls the removeSelectDefaults function
  createEventListeners(); // calls the createEventListeners function
}

function validateAmount() {
  var errorDiv = document.querySelectorAll("#donation .errorMessage")[0];
  var donationMoney = document.getElementsByName("money"); // calls the elements that have the money name
  var fieldsetValidity = true; // Has the form be valid
  var elementCount = donationMoney.length;
  try {
    if (!donationMoney[0].checked && !donationMoney[1].checked && !donationMoney[2].checked && !donationMoney[3].checked && !donationMoney[4].checked) {
      for (var i = 0; i < elementCount; i++) {
        donationMoney[i].style.outline = "1px solid red";
      }
      fieldsetValidity = false;
    } else {
      for (var i = 0; i < elementCount; i++) {
        donationMoney[i].style.outline = "";
      }
    }
    if (fieldsetValidity === false) { // What will happen if the fieldsetValidity is set to false
      throw "Please select an amount"; // throws the error in
    } else { // What will happen if the fieldsetValidity is not false
      errorDiv.style.display = "none"; // does not display the error
      errorDiv.innerHTML = ""; // leave the error blank
    }
  } catch (msg) { // Catches the mistakes that was in the fieldsets
    errorDiv.style.display = "block"; // blocks the error
    errorDiv.innerHTML = msg; // shows the error
    formValidity = false; // The form isn't valid
  }
}

function validateOtherAmount() {
  var errorDiv = document.querySelectorAll("#donation .errorMessage")[0];
  var amountBox = document.getElementById("amount");
  var fieldsetValidity = true;
  try {
    if (document.getElementById("other").checked && amountBox.value === "") {
      fieldsetValidity = false; // form is invalid
      amountBox.style.background = "rgb(255,0,0)"; // changes the background color
    } else {
      amountBox.style.background = "white"; // leaves the background white
      formValidity = true;
    }
    if (fieldsetValidity === false) { // What will happen if the fieldsetValidity isn't valid
      throw "Please enter your amount"; // throws in the error
    } else { // What will happen if the fieldsetValidity is not false
      errorDiv.style.display = "none"; // does not display the error
      errorDiv.innerHTML = ""; // error is left blank
    }
  } catch (msg) { // Catches the mistakes that was in the fieldsets
    errorDiv.style.display = "block"; // blocks the error
    errorDiv.innerHTML = msg; // shows the error
    formValidity = false; // The form isn't valid
  }
}
// console.log(validateOtherAmount);

function validateCardInfo() {
  var errorDiv = document.querySelectorAll("#cardinfo .errorMessage")[0];
  var fieldsetValidity = true;
  var cardType = document.getElementsByName("CardType");
  var cardNum = document.getElementById("ccNum");
  var expiredNum = document.querySelectorAll("#cardinfo select");
  var securityCode = document.getElementById("securcode");
  var elementCount = expiredNum.length;
  var currentElement;
  try {
    if (!cardType[0].checked && !cardType[1].checked && !cardType[2].checked && !cardType[3].checked) { // error no card checked
      for (var i = 0; i < cardType.length; i++) { // gets the array of cards
        cardType[i].style.outline = "1px solid red"; // places a outline around the unchecked checkboxes
      }
      fieldsetValidity = false; // sets the form invalid
    } else {
      for (var i = 0; i < cardType.length; i++) { // gets the array of cards
        cardType[i].style.outline = ""; // Removes the outline
      }
    }
    if (cardNum.value === "") {
      cardNum.style.background = "rgb(255,0,0)";
      fieldsetValidity = false
    }
    else {
      cardNum.style.background = "white";
    }
    for (var i = 0; i < elementCount; i++) {
      currentElement = expiredNum[i];
      if (currentElement.selectedIndex === -1) {
        currentElement.style.border = "1px solid red";
        fieldsetValidity = false;
      }
      else {
        currentElement.style.border = "";
      }
    }
    if (securityCode.value === "") {
      securityCode.style.background = "rgb(255,0,0)";
      fieldsetValidity = false
    }
    else {
      securityCode.style.background = "white";
    }
    if (fieldsetValidity === false) { // What will happen if the fieldsetValidity isn't valid
      throw "Please insert all of your credit card information"; // throws in the error
    } else { // What will happen if the fieldsetValidity is not false
      errorDiv.style.display = "none"; // does not display the error
      errorDiv.innerHTML = ""; // error is left blank
    }
  } catch (msg) { // Catches the mistakes that was in the fieldsets
    errorDiv.style.display = "block"; // blocks the error
    errorDiv.innerHTML = msg; // shows the error
    formValidity = false; // The form isn't valid
  }
}

function validateContactInfo() {
  var errorDiv = document.querySelectorAll("#contactinfo .errorMessage");
  var fieldsetValidity = true;
  var fullName = document.getElementsByName("name");
  var address = document.getElementById("address");
  var stateInfo = document.querySelectorAll("#contactinfo select");
  var zipCode = document.getElementById("zipcode");
  var agreeBox = document.getElementById("agree");
  var elementCount = stateInfo.length;
  var currentElement;
}

function validateForm(evt) { // Depending if the whole form is filled, it will not allow the form to be submitted
  if (evt.preventDefault) {
    evt.preventDefault(); // Will allow the form to submit
  } else {
    evt.returnValue = false; // Turns off the submit button
  }
  formValidity = true; // Makes the form valid

  validateAmount();
  validateOtherAmount();
  validateCardInfo();
  validateContactInfo();

  if (formValidity === true) { // form is valid
    document.getElementById("errorText").innerHTML = ""; // Won't display a message
    document.getElementById("errorText").style.display = "none"; // Doesn't display the element, making invisible
    document.getElementsByTagName("form")[0].submit(); // Will allow the form to be submitted
  } else { // form is not valid
    document.getElementById("errorText").innerHTML = "Please fill out the form completely"; // Displays the message if the form is not valid
    document.getElementById("errorText").style.display = "block"; // The element blocks the form
    scroll(0, 0); // Will auto scroll to top of the page
  }
}

function createEventListeners() {
  var form = document.getElementsByTagName("form")[0]; // calls the first tag element "form" from the array
  if (form.addEventListener) {
    form.addEventListener("submit", validateForm, false); // listens for the form to be submitted
  } else if (form.attachEvent) {
    form.attachEvent("onsubmit", validateForm); // adds the event when the form is submitted
  }
}

if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); // listens for the window to load
} else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage); // adds event when window is loaded up
}
