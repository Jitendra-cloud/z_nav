sap.ui.define(["sap/m/Text"], function (Text) {
  "use strict";

  new Text({
    text: "Hello World 2,  Hello World 2,  Hello World 3,  Hello World 4,  Hello World 5,  Hello World 6", width: "20%",
    maxLines: 2, textAlign: sap.ui.core.TextAlign.Center
  }).placeAt("content");

  new Text({
    text: "Hello World 7,  Hello World 8,  Hello World 9,  Hello World 10,  Hello World 11,  Hello World 12", width: "20%",
    maxLines: 2, textAlign: sap.ui.core.TextAlign.Center
  }).placeAt("content");

});