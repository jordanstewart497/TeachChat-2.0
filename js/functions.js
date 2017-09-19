// functions
// Used for the contact page
window.onload = startForm;
//startForm()
   //Sets up and initializes the form2 Web form.
function startForm(){
  document.forms[0].onsubmit = checkForm;
  document.forms[0].onsubmit = validateEmail;
}
//checkForm()
//   Checks the form to ensure that all required fields have been
//   entered by the user.
function checkForm(){
  if (document.forms[0].fname.value.length == 0) {
    alert("You must enter a first name");
    return false;
  } else if (document.forms[0].lname.value.length == 0){
    alert("You must enter a last name");
    return false;
  }
}
  //validates email
  function validateEmail() {
      var x = document.forms["theEmail"]["email"].value;
      var atSym = x.indexOf("@");
      var dotSym = x.lastIndexOf(".");
      if (atSym<1 || dotSym<atSym+2 || dotSym+2>=x.length) {
          alert("Not a valid e-mail address, please try again");
          return false;
      }
  }
