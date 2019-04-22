function fillGeneric() {
  textbox = document.getElementById("js_page_title");
  txt = document.createTextNode("Renovator's logbook - " + document.title);
  textbox.appendChild(txt);
}
