import Translator from "./translator.js";

var translator = new Translator();

document.querySelector("#ar").addEventListener("click", function (evt) {
  translator.load("ar");
  if (document.documentElement.lang !== this._lang) {
    document.documentElement.lang = this._lang;
  }
  document.documentElement.dir = "rtl";
});

document.querySelector("#en").addEventListener("click", function (evt) {
  translator.load("en");
  if (document.documentElement.lang !== this._lang) {
    document.documentElement.lang = this._lang;
  }
  document.documentElement.dir = "ltr";
});
