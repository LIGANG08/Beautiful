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
      navigationBarTitletext: 'weChat'
    }, _this.data = {
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }]
    }, _this.bindButtonTap = function () {
      var that = this;
      _wepy2.default.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: 60,
        camera: 'back',
        success: function success(res) {
          that.setData({
            src: res.tempFilePath
          });
        }
      });
    }, _this.image = function () {
      _wepy2.default.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          return tempFilePaths;
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxldGV4dCIsImRhdGEiLCJpdGVtcyIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJiaW5kQnV0dG9uVGFwIiwidGhhdCIsImNob29zZVZpZGVvIiwic291cmNlVHlwZSIsIm1heER1cmF0aW9uIiwiY2FtZXJhIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJzcmMiLCJ0ZW1wRmlsZVBhdGgiLCJpbWFnZSIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInRlbXBGaWxlUGF0aHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FDTCxFQUFDQyxNQUFNLEtBQVAsRUFBY0MsT0FBTyxJQUFyQixFQURLLEVBRUwsRUFBQ0QsTUFBTSxLQUFQLEVBQWNDLE9BQU8sSUFBckIsRUFBMkJDLFNBQVMsTUFBcEMsRUFGSyxFQUdMLEVBQUNGLE1BQU0sS0FBUCxFQUFjQyxPQUFPLElBQXJCLEVBSEssRUFJTCxFQUFDRCxNQUFNLEtBQVAsRUFBY0MsT0FBTyxJQUFyQixFQUpLLEVBS0wsRUFBQ0QsTUFBTSxLQUFQLEVBQWNDLE9BQU8sSUFBckIsRUFMSyxFQU1MLEVBQUNELE1BQU0sS0FBUCxFQUFjQyxPQUFPLElBQXJCLEVBTks7QUFERixLLFFBVVBFLGEsR0FBZ0IsWUFBVztBQUN6QixVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxvQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBREc7QUFFZkMscUJBQWEsRUFGRTtBQUdmQyxnQkFBUSxNQUhPO0FBSWZDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJOLGVBQUtPLE9BQUwsQ0FBYTtBQUNYQyxpQkFBS0YsSUFBSUc7QUFERSxXQUFiO0FBR0Q7QUFSYyxPQUFqQjtBQVVELEssUUFDREMsSyxHQUFRLFlBQVc7QUFDakIscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFBTyxDQURRLEVBQ0w7QUFDVkMsa0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZLLEVBRXVCO0FBQ3RDWCxvQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEcsRUFHa0I7QUFDakNHLGlCQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDNUI7QUFDTSxjQUFJUSxnQkFBZ0JSLElBQUlRLGFBQXhCO0FBQ0EsaUJBQU9BLGFBQVA7QUFDRDtBQVJjLE9BQWpCO0FBVUQsSzs7OztFQXRDZ0MsZUFBS0MsSTs7a0JBQW5CeEIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxldGV4dDogJ3dlQ2hhdCdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtuYW1lOiAnVVNBJywgdmFsdWU6ICfnvo7lm70nfSxcbiAgICAgICAge25hbWU6ICdDSE4nLCB2YWx1ZTogJ+S4reWbvScsIGNoZWNrZWQ6ICd0cnVlJ30sXG4gICAgICAgIHtuYW1lOiAnQlJBJywgdmFsdWU6ICflt7Topb8nfSxcbiAgICAgICAge25hbWU6ICdKUE4nLCB2YWx1ZTogJ+aXpeacrCd9LFxuICAgICAgICB7bmFtZTogJ0VORycsIHZhbHVlOiAn6Iux5Zu9J30sXG4gICAgICAgIHtuYW1lOiAnVFVSJywgdmFsdWU6ICfms5Xlm70nfVxuICAgICAgXVxuICAgIH1cbiAgICBiaW5kQnV0dG9uVGFwID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlVmlkZW8oe1xuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICBtYXhEdXJhdGlvbjogNjAsXG4gICAgICAgIGNhbWVyYTogJ2JhY2snLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgICAgc3JjOiByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgaW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgIC8vIOi/lOWbnumAieWumueFp+eJh+eahOacrOWcsOaWh+S7tui3r+W+hOWIl+ihqO+8jHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xuICAgICAgICAgIHZhciB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNcbiAgICAgICAgICByZXR1cm4gdGVtcEZpbGVQYXRoc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19