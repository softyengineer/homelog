function fillGeneric() {
  textbox = document.getElementById("js_title");
  txt = document.createTextNode("A DIY renovation logbook");
  textbox.appendChild(txt);
  fillFooter1();
  fillFooter2();
}
function fillFooter1() {
  textbox = document.getElementById("js_footer");
  txt = document.createTextNode("Buy Bitcoin using BISQ");
  textbox.appendChild(txt);
}
function fillFooter2() {
  textbox = document.getElementById("js_footer2");
  txt = document.createTextNode("Buy Bitcoin from LocalBitcoins");
  textbox.appendChild(txt);
}
function arrangePhotos() {
  var elements = document.getElementsByClassName("column");
  var i;
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}
