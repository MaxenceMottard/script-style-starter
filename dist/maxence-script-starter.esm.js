var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var ToggleState = function () {
    function ToggleState(btnSelector) {
        var _this = this;

        classCallCheck(this, ToggleState);

        this.handleClick = function (e) {
            e.stopPropagation();
            e.preventDefault();

            if (_this.isOpen) {
                _this.close(e);
            } else {
                _this.open(e);
            }
        };

        this.openCb = function (e) {};

        this.closeCb = function (e) {};

        this.isOpen = false;
        this.btns = document.querySelectorAll(btnSelector);

        window.addEventListener('click', function (e) {
            if (_this.isOpen) {
                _this.close(e);
            }
        });

        this.btns.forEach(function (btn) {
            _this.addEventOnButton(btn);
        });
    }

    createClass(ToggleState, [{
        key: 'addEventOnButton',
        value: function addEventOnButton(button) {
            if (!button) {
                return;
            }

            button.addEventListener('click', this.handleClick);
        }
    }, {
        key: 'open',
        value: function open(e) {
            this.openCb(e);
            this.isOpen = true;
        }
    }, {
        key: 'close',
        value: function close(e) {
            this.closeCb(e);
            this.isOpen = false;
        }
    }]);
    return ToggleState;
}();

var MenuBehaviour = function (_ToggleState) {
    inherits(MenuBehaviour, _ToggleState);

    function MenuBehaviour(elementSelector, btnSelector) {
        classCallCheck(this, MenuBehaviour);

        var _this = possibleConstructorReturn(this, (MenuBehaviour.__proto__ || Object.getPrototypeOf(MenuBehaviour)).call(this, btnSelector));

        _this.escape = function (e) {

            if (!_this.isOpen) {
                return;
            }

            if (e.key !== 'Escape') {
                return;
            }

            _this.close(e);
        };

        _this.selectorToString = function (selector) {
            var string = selector.replace('.', '');
            string = string.replace('#', '');

            return string;
        };

        var element = document.querySelector(elementSelector);
        var elementName = _this.selectorToString(elementSelector);
        _this.bodyClassOpen = 'js-' + elementName + '--open';
        _this.bodyClassClose = 'js-' + elementName + '--close';

        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
        document.addEventListener('keydown', _this.escape);
        return _this;
    }

    createClass(MenuBehaviour, [{
        key: 'open',
        value: function open(e) {
            get(MenuBehaviour.prototype.__proto__ || Object.getPrototypeOf(MenuBehaviour.prototype), 'open', this).call(this, e);
            document.body.classList.add(this.bodyClassOpen);
            document.body.classList.remove(this.bodyClassClose);
        }
    }, {
        key: 'close',
        value: function close(e) {
            get(MenuBehaviour.prototype.__proto__ || Object.getPrototypeOf(MenuBehaviour.prototype), 'close', this).call(this, e);
            document.body.classList.remove(this.bodyClassOpen);
            document.body.classList.add(this.bodyClassClose);
        }
    }]);
    return MenuBehaviour;
}(ToggleState);

var ModalBehaviour = function (_MenuBehaviour) {
    inherits(ModalBehaviour, _MenuBehaviour);

    function ModalBehaviour(elementSelector, openBtnSelector, closeBtnSelector) {
        classCallCheck(this, ModalBehaviour);

        var _this = possibleConstructorReturn(this, (ModalBehaviour.__proto__ || Object.getPrototypeOf(ModalBehaviour)).call(this, elementSelector, openBtnSelector));

        _this.closeButton = document.querySelector(closeBtnSelector);

        get(ModalBehaviour.prototype.__proto__ || Object.getPrototypeOf(ModalBehaviour.prototype), "addEventOnButton", _this).call(_this, _this.closeButton);
        return _this;
    }

    return ModalBehaviour;
}(MenuBehaviour);

var SearchModalBehaviour = function (_ModalBehaviour) {
    inherits(SearchModalBehaviour, _ModalBehaviour);

    function SearchModalBehaviour(elementSelector, openBtnSelector, closeBtnSelector) {
        classCallCheck(this, SearchModalBehaviour);

        var _this = possibleConstructorReturn(this, (SearchModalBehaviour.__proto__ || Object.getPrototypeOf(SearchModalBehaviour)).call(this, elementSelector, openBtnSelector, closeBtnSelector));

        _this.inputSearch = document.querySelector(elementSelector).querySelector('input[type=search]');
        return _this;
    }

    createClass(SearchModalBehaviour, [{
        key: "open",
        value: function open(e) {
            get(SearchModalBehaviour.prototype.__proto__ || Object.getPrototypeOf(SearchModalBehaviour.prototype), "open", this).call(this, e);
            this.inputSearch.focus();
        }
    }]);
    return SearchModalBehaviour;
}(ModalBehaviour);

export { MenuBehaviour, ModalBehaviour, SearchModalBehaviour };
