'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChangeView = function () {
  function ChangeView() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 750 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 667 : _ref$y,
      _ref$selector = _ref.selector,
      selector = _ref$selector === undefined ? '#app' : _ref$selector;

    _classCallCheck(this, ChangeView);

    this.x = x;
    this.y = y;
    this.box = 'body';
    this.selector = selector;
    /* 获取高度 */
    var b = document.createElement('div');
    b.id = 'app-h';
    b.css = this.css;
    b.css({
      width: '100vw',
      height: '100vh',
      display: 'block',
      top: '0',
      left: '0',
      position: 'absolute',
      'z-index': '-999'
    });
    document.querySelector('body').append(b);
  }

  _createClass(ChangeView, [{
    key: 'qSelector',
    value: function qSelector(s) {
      var t = document.querySelector(s);
      t.css = this.css;
      return t;
    }
  }, {
    key: 'css',
    value: function css(obj) {
      for (var i in obj) {
        this.style[i] = obj[i];
      }
      return this;
    }
  }, {
    key: 'start',
    value: function start() {
      var w = window.screen.width;
      var h = window.screen.height;
      var tempH = document.querySelector('#app-h').clientHeight;
      h = tempH;
      console.log('--w,h--', w, h, tempH);
      var scale = w / this.x;
      if (scale > 1) {
        console.warn('不支持放大');
      }
      this.qSelector(this.box).css({
        width: w + 'px',
        height: h + 'px',
        overflow: 'hidden'
      });

      this.qSelector(this.selector).css({
        'transform-origin': '0 0 0',
        width: this.x + 'px',
        height: h / scale + 'px',
        'transform': 'scale(' + scale + ')'
      });
    }
  }]);

  return ChangeView;
}();