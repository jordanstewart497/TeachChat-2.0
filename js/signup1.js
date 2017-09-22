  //////////////////////////////////////////////
//    signup.js                                 //
//                                              //
//    Author: Diego Diaz                        //
//    Date: 09/20/17                            //
//                                              //
//                                              //
//    Filename: signup1.js                      //
//                                              //
  //////////////////////////////////////////////


"use strict"


var formValidity = true;

function onload() {
  removeSelectDefaults();
  createEventListeners();
}

function removeSelectDefaults() {
  var emptyBoxes = document.getElementsByTagName("select");
  for (var i = 0; i < emptyBoxes.length; i++) {
    emptyBoxes[i].selectedIndex = -1;
  }
}

function formValid() {
  var selectElements = document.querySelectorAll("#creStu input");
    var errorDiv = document.getElementById("errorText");
    var fieldsetValidity = true;
    var elementCount = selectElements.length;
    var currentElement;
  // creates an array using querySelectorAll from the contactinfo fieldset
    try {
      for (var i = 0; i < elementCount; i++) {
        currentElement = selectElements[i];
        if (currentElement.value === "") {
          currentElement.style.background = "rgb(255,100,100)";
          fieldsetValidity = false;
        } else {
          currentElement.style.background = "white";
        }
      }
      currentElement = document.querySelectorAll("#creStu input");
      if (currentElement.selectedIndex === -1) {
        currentElement.style.border = "1px solid red";
        fieldsetValidity = false;
      } else {
        currentElement.style.border = "";
      }
    } catch (msg) {
      errorDiv.style.display = "block";
      errorDiv.innerHTML = msg;
      formValidity = false;
    }
  }

  function validateSelect() {
  // billingAddress
  var selectElements = document.getElementsByTagName("select");
  var fieldsetValidity = true;
  var elementCount = selectElements.length;
  var currentElement;

  try {
    for (var i = 0; i < elementCount; i++) {
      currentElement = selectElements[i];
      if (currentElement.selectedIndex === -1) {
        currentElement.style.border = "1px solid red";
        fieldsetValidity = false;
      } else {
        currentElement.style.border = "";
      }
    }

  } catch (msg) {
    formValidity = false;
  }
}

function validateRatio() {
// billingAddress
var selectElements = document.getElementsByClassName("ratio");
var fieldsetValidity = true;
var elementCount = selectElements.length;
var currentElement;

try {
  for (var i = 0; i < elementCount; i++) {
    currentElement = selectElements[i];
    if (currentElement.selectedIndex === -1) {
      currentElement.style.border = "1px solid red";
      fieldsetValidity = false;
    } else {
      currentElement.style.border = "";
    }
  }

} catch (msg) {
  formValidity = false;
}
}

  // This is used to validate the form
function validateForm(evt) {
  if (evt.preventDefault) {
    evt.preventDefault();
  } else {
    evt.returnValue = false;
  }
  formValidity = true;

  formValid();
  validateSelect();
  removeSelectDefaults();
  validateRatio();

  if (formValidity === true) {
    document.getElementById("errorText").innerHTML = "";
    document.getElementById("errorText").style.display = "none";
    document.getElementsByTagName("form")[0].submit();
  }
  else {
    document.getElementById("errorText").innerHTML = "Please fix the errors stated below and resubmit your information.";
  document.getElementById("errorText").style.display = "block";
  scroll(0, 0);
  }
}
function createEventListeners() {
  var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
      form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
      form.attachEvent("onsubmit", validateForm);
    }
}

if (window.addEventListener) {
  window.addEventListener("load", onload, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", onload);
}
