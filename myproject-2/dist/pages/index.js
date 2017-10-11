'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitletext: '礼物说'
    }, _this.data = {
      color: 'red',
      camera: '../pages/images/相机_.png',
      hat: '../pages/images/帽子.png',
      watch: '../pages/images/手表.png',
      glasses: '../pages/images/眼镜.png',
      coat: '../pages/images/外套.png',
      billfold: '../pages/images/钱包-2.png'
    }, _this.methods = {
      boy: function boy() {
        var self = this;
        self.color = 'red';
        self.camera = '../pages/images/相机_.png';
        self.hat = '../pages/images/帽子.png';
        self.watch = '../pages/images/手表.png';
        self.glasses = '../pages/images/眼镜.png';
        self.coat = '../pages/images/外套.png';
        self.billfold = '../pages/images/钱包-2.png';
      },
      girl: function girl() {
        var self = this;
        self.camera = '../pages/images/相机_.png';
        self.hat = '../pages/images/首饰.png';
        self.watch = '../pages/images/化妆品.png';
        self.glasses = '../pages/images/妈妈良品.png';
        self.coat = '../pages/images/外套.png';
        self.billfold = '../pages/images/钱包-2.png';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxldGV4dCIsImRhdGEiLCJjb2xvciIsImNhbWVyYSIsImhhdCIsIndhdGNoIiwiZ2xhc3NlcyIsImNvYXQiLCJiaWxsZm9sZCIsIm1ldGhvZHMiLCJib3kiLCJzZWxmIiwiZ2lybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxLQURGO0FBRUxDLGNBQVEseUJBRkg7QUFHTEMsV0FBSyx3QkFIQTtBQUlMQyxhQUFPLHdCQUpGO0FBS0xDLGVBQVMsd0JBTEo7QUFNTEMsWUFBTSx3QkFORDtBQU9MQyxnQkFBVTtBQVBMLEssUUFTUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS1QsS0FBTCxHQUFhLEtBQWI7QUFDQVMsYUFBS1IsTUFBTCxHQUFjLHlCQUFkO0FBQ0FRLGFBQUtQLEdBQUwsR0FBVyx3QkFBWDtBQUNBTyxhQUFLTixLQUFMLEdBQWEsd0JBQWI7QUFDQU0sYUFBS0wsT0FBTCxHQUFlLHdCQUFmO0FBQ0FLLGFBQUtKLElBQUwsR0FBWSx3QkFBWjtBQUNBSSxhQUFLSCxRQUFMLEdBQWdCLDBCQUFoQjtBQUNELE9BVk87QUFXUkksVUFYUSxrQkFXRDtBQUNMLFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLUixNQUFMLEdBQWMseUJBQWQ7QUFDQVEsYUFBS1AsR0FBTCxHQUFXLHdCQUFYO0FBQ0FPLGFBQUtOLEtBQUwsR0FBYSx5QkFBYjtBQUNBTSxhQUFLTCxPQUFMLEdBQWUsMEJBQWY7QUFDQUssYUFBS0osSUFBTCxHQUFZLHdCQUFaO0FBQ0FJLGFBQUtILFFBQUwsR0FBZ0IsMEJBQWhCO0FBQ0Q7QUFuQk8sSzs7OztFQWJ1QixlQUFLSyxJOztrQkFBbkJmLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGV0ZXh0OiAn56S854mp6K+0J1xuICB9XG4gIGRhdGEgPSB7XG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGNhbWVyYTogJy4uL3BhZ2VzL2ltYWdlcy/nm7jmnLpfLnBuZycsXG4gICAgaGF0OiAnLi4vcGFnZXMvaW1hZ2VzL+W4veWtkC5wbmcnLFxuICAgIHdhdGNoOiAnLi4vcGFnZXMvaW1hZ2VzL+aJi+ihqC5wbmcnLFxuICAgIGdsYXNzZXM6ICcuLi9wYWdlcy9pbWFnZXMv55y86ZWcLnBuZycsXG4gICAgY29hdDogJy4uL3BhZ2VzL2ltYWdlcy/lpJblpZcucG5nJyxcbiAgICBiaWxsZm9sZDogJy4uL3BhZ2VzL2ltYWdlcy/pkrHljIUtMi5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBib3koKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sb3IgPSAncmVkJ1xuICAgICAgc2VsZi5jYW1lcmEgPSAnLi4vcGFnZXMvaW1hZ2VzL+ebuOacul8ucG5nJ1xuICAgICAgc2VsZi5oYXQgPSAnLi4vcGFnZXMvaW1hZ2VzL+W4veWtkC5wbmcnXG4gICAgICBzZWxmLndhdGNoID0gJy4uL3BhZ2VzL2ltYWdlcy/miYvooagucG5nJ1xuICAgICAgc2VsZi5nbGFzc2VzID0gJy4uL3BhZ2VzL2ltYWdlcy/nnLzplZwucG5nJ1xuICAgICAgc2VsZi5jb2F0ID0gJy4uL3BhZ2VzL2ltYWdlcy/lpJblpZcucG5nJ1xuICAgICAgc2VsZi5iaWxsZm9sZCA9ICcuLi9wYWdlcy9pbWFnZXMv6ZKx5YyFLTIucG5nJ1xuICAgIH0sXG4gICAgZ2lybCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jYW1lcmEgPSAnLi4vcGFnZXMvaW1hZ2VzL+ebuOacul8ucG5nJ1xuICAgICAgc2VsZi5oYXQgPSAnLi4vcGFnZXMvaW1hZ2VzL+mmlumlsC5wbmcnXG4gICAgICBzZWxmLndhdGNoID0gJy4uL3BhZ2VzL2ltYWdlcy/ljJblpoblk4EucG5nJ1xuICAgICAgc2VsZi5nbGFzc2VzID0gJy4uL3BhZ2VzL2ltYWdlcy/lpojlpojoia/lk4EucG5nJ1xuICAgICAgc2VsZi5jb2F0ID0gJy4uL3BhZ2VzL2ltYWdlcy/lpJblpZcucG5nJ1xuICAgICAgc2VsZi5iaWxsZm9sZCA9ICcuLi9wYWdlcy9pbWFnZXMv6ZKx5YyFLTIucG5nJ1xuICAgIH1cbiAgfVxufVxuIl19