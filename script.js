var name = prompt("Masukkan nama kamu");
document.getElementById("nama").innerText = name;

function validateForm() {
  var name = document.forms["message-form"]["full-name"].value;
  var date = document.forms["message-form"]["birthday-date"].value;
  var gender = document.forms["message-form"]["gender"].value;
  var messages = document.forms["message-form"]["messages"].value;

  if (name == "" || date == "" || gender == "" || messages == "") {
    alert("input tidak boleh kosong");
    return false;
  }

  document.getElementById("sender-full-name").innerText = name;
  document.getElementById("sender-birth-date").innerText = date;
  document.getElementById("sender-gender").innerText = gender;
  document.getElementById("sender-messages").innerText = messages;
  return false;
}
