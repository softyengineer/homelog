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
function arrangePhotos(inputint) {
  var elements = document.getElementsByClassName("column");
  var cols = parseInt(inputint);
  var i;
  var iOut;
  for (iOut = 0; iOut < elements.length; iOut++) {
    for (i = 0; i < cols / cols; i++) {
      elements[iOut + i * elements.length].style.flex = 100 / cols + "%";
    }
  }
}
