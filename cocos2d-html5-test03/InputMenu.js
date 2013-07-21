// Generated by CoffeeScript 1.4.0
(function() {

  window.InputMenu = (function() {

    function InputMenu() {}

    InputMenu.prototype.gameController = null;

    InputMenu.prototype.onDidLoadFromCCB = function() {
      cc.log("Input Menu loaded");
      return this.init();
    };

    InputMenu.prototype.init = function() {
      cc.log(this);
      return this.rootNode.setPosition(this.rootNode.getAnchorPointInPoints());
    };

    InputMenu.prototype.onKeyboardSelect = function() {
      var b;
      b = this.gameController.keyboardEnabled;
      this.gameController.keyboardEnabled = !b;
      return this.selectInputHandler(b, this.keyboardMenuItem);
    };

    InputMenu.prototype.onMouseSelect = function() {
      var b;
      b = this.gameController.mouseEnabled;
      this.gameController.mouseEnabled = !b;
      return this.selectInputHandler(b, this.mouseMenuItem);
    };

    InputMenu.prototype.onTouchSelect = function() {
      var b;
      b = this.gameController.touchEnabled;
      this.gameController.touchEnabled = !b;
      return this.selectInputHandler(b, this.touchMenuItem);
    };

    InputMenu.prototype.onAccelerometerSelect = function() {
      var b;
      b = this.gameController.accelerometerEnabled;
      this.gameController.accelerometerEnabled = !b;
      return this.selectInputHandler(b, this.accelerometerMenuItem);
    };

    InputMenu.prototype.selectInputHandler = function(flag, item) {
      if (flag) {
        item.unselected();
      } else {
        item.selected();
      }
      return this.gameController.enableInputHandlers();
    };

    return InputMenu;

  })();

}).call(this);
