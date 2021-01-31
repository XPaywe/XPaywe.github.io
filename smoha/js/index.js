class Translator {
  constructor() {
    this._lang = "ar";
    this._elements = document.querySelectorAll("[data-i18n]");
  }

  load(lang = null) {
    if (lang) {
      this._lang = lang;
    }

    fetch(`./i18n/${this._lang}.json`)
      .then((res) => res.json())
      .then((translation) => {
        this.translate(translation);
      })
      .catch((e) => {
        console.log(e);
        console.error(`Could not load ${this._lang}.json.`);
      });
  }

  translate(translation) {
    this._elements.forEach((element) => {
      var keys = element.dataset.i18n.split(".");
      var text = keys.reduce((obj, i) => obj[i], translation);
      if (text) {
        element.innerHTML = text;
      }
    });
  }
}

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
