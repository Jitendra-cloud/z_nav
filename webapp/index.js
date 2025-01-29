//sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
sap.ui.define(["sap/ui/core/ComponentContainer"], function (ComponentContainer) {
  "use strict";

  // XMLView.create({
  //   id: "App",
  //   viewName: "djp.view.App"
  // }).then(function (oView) {
  //   oView.placeAt("content");
  // });

  var oContainer = new ComponentContainer({
    id: "container",
    name: "djp",
    manifest: true,
    async: true,
    settings: {
      id: "djp"
    }
  });
  oContainer.placeAt("content");

});