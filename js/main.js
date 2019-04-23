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
  var columns;
  var rows;
  var perColumn = 10;

  for (columns = 0; columns < cols; columns++) {
    for (rows = 0; rows < elements.length; rows++) {
      elements[columns * elements.length + rows].style.flex = 100 / cols + "%";
    }
  }
}
