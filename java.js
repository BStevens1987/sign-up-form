var passConfirm = function () {
  if (document.getElementById("pass").value == document.getElementById("cpass").value) 
  {
    document.getElementById("message").style.color = "Green";
    document.getElementById("message").innerHTML = "Passwords match!";
  }
  else {
    document.getElementById("message").style.color = "Red";
    document.getElementById("message").innerHTML = "Passwords do NOT match!";
  }
};