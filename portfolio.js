/*
============================================
; Title: Personal Portfolio
; Author: Justin Singleton
; Date: 2019
; Description: This application is to be
; the personal portfolio for myself and
; show off the work I've been doing as a
; Web Developer.
;===========================================
*/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
