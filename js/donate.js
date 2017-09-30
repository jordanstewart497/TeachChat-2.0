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
  var errorDiv = document.querySelectorAll("#donation .errorMessage")[0]; // gets the CSS of the element with the donation id to be connected to the errorMessage class
  var donationMoney = document.getElementsByName("money"); // calls the elements that have the money name
  var fieldsetValidity = true; // Has the form be valid
  var elementCount = donationMoney.length; // counts the array of donationMoney
  try {
    if (!donationMoney[0].checked && !donationMoney[1].checked && !donationMoney[2].checked && !donationMoney[3].checked && !donationMoney[4].checked) { // if any of the radio buttons are not selected
      for (var i = 0; i < elementCount; i++) { // loops through the array of
        donationMoney[i].style.outline = "1px solid red"; // places a red outline
      }
      fieldsetValidity = false; // makes form invalid
    } else {
      for (var i = 0; i < elementCount; i++) { // loops through the array of elementCount
        donationMoney[i].style.outline = ""; // does not have an outline
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
  var errorDiv = document.querySelectorAll("#donation .errorMessage")[0]; // gets the CSS of the element with the donation id to be connected to the errorMessage class
  var amountBox = document.getElementById("amount"); // amountBox variable gets element that ahs the amount id
  var fieldsetValidity = true; // makes the form valid
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

function validateCardInfo() {
  var errorDiv = document.querySelectorAll("#cardinfo .errorMessage")[0];// gets the CSS of the element with the cardinfo id to be connected to the errorMessage class
  var fieldsetValidity = true; // makes the form valid
  var cardType = document.getElementsByName("CardType"); // cardType variable gets the elements that have the CardType name
  var cardNum = document.getElementById("ccNum"); // cardNum variable gets the element that has ccNum id
  var expiredNum = document.querySelectorAll("#cardinfo select"); // gets the CSS of the select elements that are within the element that has the cardinfo id
  var securityCode = document.getElementById("securcode"); // securityCode variable gets the element that has the securcode id
  var elementCount = expiredNum.length; // the elementCount counts the array of expiredNum
  var currentElement; // the currentElement variable
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
    if (cardNum.value === "") { // the input of cardNum is empty
      cardNum.style.background = "rgb(255,0,0)"; // changes the color of the background
      fieldsetValidity = false // males the form invalid
    } else {
      cardNum.style.background = "white"; // leaves the background white
    }
    for (var i = 0; i < elementCount; i++) { // if none of the selects of currentElement are picked
      currentElement = expiredNum[i]; // currentElement
      if (currentElement.selectedIndex === -1) { // currentElement has the array of stateInfo
        currentElement.style.border = "1px solid red"; // places a red outline
        fieldsetValidity = false; // makes form invalid
      } else {
        currentElement.style.border = ""; // does not have an outline
      }
    }
    if (securityCode.value === "") { // if the input of securityCode is empty
      securityCode.style.background = "rgb(255,0,0)"; // places a red outline
      fieldsetValidity = false // makes form invalid
    } else {
      securityCode.style.background = "white"; // does not have an outline
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
  var errorDiv = document.querySelectorAll("#contactinfo .errorMessage")[0];// gets the CSS of the element with the contactinfo id to be connected to the errorMessage class
  var fieldsetValidity = true; // makes the form valid
  var fullName = document.getElementsByName("name"); // fullName variable gets the elements that have the name name
  var address = document.getElementById("address"); // address variable gets the element that has the address id
  var stateInfo = document.querySelectorAll("#contactinfo select"); // gets the CSS of the select that are within the element that has the contactinfo id
  var zipCode = document.getElementById("zipcode"); // zipCode variable gets the element that has the zipcode id
  var elementCount = stateInfo.length; // elementCount variable the array of stateInfo
  var currentElement; // the currentElement variable

  try {
    if (fullName[0].value === "" || fullName[1].value === "") { // error no card checked
      for (var i = 0; i < fullName.length; i++) { // gets the array of cards
        fullName[i].style.background = "rgb(255,0,0)"; // places a outline around the unchecked checkboxes
      }
      fieldsetValidity = false; // sets the form invalid
    } else {
      for (var i = 0; i < fullName.length; i++) { // gets the array of cards
        fullName[i].style.background = "white"; // Removes the outline
      }
    }
    if (address.value === "") {
      address.style.background = "rgb(255,0,0)"; // places a red outline
      fieldsetValidity = false; // makes form invalid
    } else {
      address.style.background = "white"; // does not have an outline
    }
    for (var i = 0; i < elementCount; i++) {  // loops through the array of elementCount
      currentElement = stateInfo[i]; // currentElement has the array of stateInfo
      if (currentElement.selectedIndex === -1) { // if none of the selects of currentElement are picked
        currentElement.style.border = "1px solid red"; // places a red outline
        fieldsetValidity = false; // makes form invalid
      } else {
        currentElement.style.border = ""; // does not have an outline
      }
    }
    if (zipCode.value === "") { //if input for zipCode is empty
      zipCode.style.background = "rgb(255,0,0)"; // places a red outline
      fieldsetValidity = false; // makes form invalid
    } else {
      zipCode.style.background = "white"; // does not have an outline
    }
    if (!document.getElementById("agree").checked) { // the checkbox that has the agree id is not checked
      document.getElementById("agree").style.outline = "1px solid red"; // places a red outline
      fieldsetValidity = false; // makes form invalid
    } else {
      document.getElementById("agree").style.outline = ""; // does not have an outline
    }
    if (fieldsetValidity === false) { // What will happen if the fieldsetValidity isn't valid
      throw "Please insert all of your credit card information"; // throws in the error
    } else { // What will happen if the fieldsetValidity is not false
      errorDiv.style.display = "none"; // does not display the error
      errorDiv.innerHTML = ""; // error is left blank
    }
  } catch (msg) {
    errorDiv.style.display = "block"; // blocks the error
    errorDiv.innerHTML = msg; // shows the error
    formValidity = false; // The form isn't valid
  }
}

function validateForm(evt) { // Depending if the whole form is filled, it will not allow the form to be submitted
  if (evt.preventDefault) {
    evt.preventDefault(); // Will allow the form to submit
  } else {
    evt.returnValue = false; // Turns off the submit button
  }
  formValidity = true; // Makes the form valid

  validateAmount(); //the validateAmount function gets called
  validateOtherAmount(); //the validateOtherAmount function gets called
  validateCardInfo(); //the validateCardInfo function gets called
  validateContactInfo(); //the validateContactInfo function gets called

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
