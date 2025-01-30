sap.ui.define([
    "sap/ui/core/mvc/Controller"
    //,"sap/m/MessageBox"
  ],
    function (Controller) {
      "use strict";
  
      return Controller.extend("djp.controller.App", {
  
        // onSayHello: function () {
        //   MessageBox.information("Hello World");
        // }

        onInit: function () {
          this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        }
  
      });
    });