var btn = document.getElementById("114");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('114', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('114');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
