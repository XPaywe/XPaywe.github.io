import Translator from "./translator.js";

var translator = new Translator();

document.querySelector("form").addEventListener("click", function (evt) {
  if (evt.target.tagName === "INPUT") {
    translator.load(evt.target.value);
  }

  if (document.documentElement.lang !== this._lang) {
    document.documentElement.lang = this._lang;
  }

  if (evt.target.value === "ar") {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }
});
