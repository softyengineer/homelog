document.body.onload = insertHtml();
document.body.onload = fillGeneric();
document.body.onload = fillFooter1();
document.body.onload = fillFooter2();

function fillGeneric() {
  textbox = document.getElementById("js_title");
  txt = document.createTextNode("A DIY renovation logbook");
  textbox.appendChild(txt);
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
function insertHtml() {
  //get page
  var path = window.location.pathname;
  var page = path.split("/").pop();
  switch (page) {
    case index:
      var index = document.createTextNode("active");
      break;
    default:
  }
  var first = document.createTextNode(
    '<ul class="nav">\n' + '<li class="nav"><a class="'
  );
  var second = document.createTextNode(
    '" href="./index.html">Home</a></li>\n' + '<li class="nav"><a class="'
  );
  var third = document.createTextNode(
    '" href="./photos.html">Photos</a></li>\n' + '<li class="nav"><a class="'
  );
  var fourth = document.createTextNode(
    '" href="./diary.html">Diary</a></li>\n' +
      '<li style="float:right">\n' +
      '<a id="js_title" class="blank" href="./info.html"></a></li></ul>\n' +
      "</li>\n" +
      "</ul>\n"
  );

  var newDiv = document.createElement("div");

  var nav = document.createTextNode("");
  nav += first;
  nav += second;
  nav += third;
  nav += fourth;
  newDiv.appendChild(nav);

  // document.getElementById("top").appendChild(nav);
  document.getElementById("top").innerHTML = nav;
}
