var btn = document.getElementById("status");

function myFunction() {
  if (btn.innerHTML=="Saya belum hafal") btn.innerHTML = "Yes! saya sudah hafal";
  else btn.innerHTML = "Saya belum hafal";
  window.localStorage.setItem('btnLabel', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('btnLabel');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
