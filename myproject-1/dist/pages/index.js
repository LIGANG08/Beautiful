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
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));


methods = {
  video: function video() {
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
  },
  image: function image() {
    var self = this;
    _wepy2.default.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function success(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        self.src = res.tempFilePaths[0];
        self.setData({
          src: res.tempFilePaths[0]
        });
      }
    });
  },
  audioPlay: function audioPlay() {
    this.audioCtx.play();
  },
  audioPause: function audioPause() {
    this.audioCtx.pause();
  },
  audio14: function audio14() {
    this.audioCtx.seek(14);
  },
  audioStart: function audioStart() {
    this.audioCtx.seek(0);
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxldGV4dCIsImRhdGEiLCJwb3N0ZXIiLCJuYW1lIiwiYXV0aG9yIiwic3JjIiwicGFnZSIsIm1ldGhvZHMiLCJ2aWRlbyIsInRoYXQiLCJjaG9vc2VWaWRlbyIsInNvdXJjZVR5cGUiLCJtYXhEdXJhdGlvbiIsImNhbWVyYSIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwidGVtcEZpbGVQYXRoIiwiaW1hZ2UiLCJzZWxmIiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwidGVtcEZpbGVQYXRocyIsImF1ZGlvUGxheSIsImF1ZGlvQ3R4IiwicGxheSIsImF1ZGlvUGF1c2UiLCJwYXVzZSIsImF1ZGlvMTQiLCJzZWVrIiwiYXVkaW9TdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLHNGQURIO0FBRUxDLFlBQU0sTUFGRDtBQUdMQyxjQUFRLElBSEg7QUFJTEMsV0FBSztBQUpBLEs7Ozs7RUFKMEIsZUFBS0MsSTs7a0JBQW5CUixLOztBQVdqQlMsVUFBVTtBQUNWQyxPQURVLG1CQUNGO0FBQ04sUUFBSUMsT0FBTyxJQUFYO0FBQ0EsbUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsa0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQURHO0FBRWZDLG1CQUFhLEVBRkU7QUFHZkMsY0FBUSxNQUhPO0FBSWZDLGVBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQk4sYUFBS08sT0FBTCxDQUFhO0FBQ1hYLGVBQUtVLElBQUlFO0FBREUsU0FBYjtBQUdEO0FBUmMsS0FBakI7QUFVRCxHQWJTO0FBY1ZDLE9BZFUsbUJBY0Y7QUFDTixRQUFJQyxPQUFPLElBQVg7QUFDQSxtQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxhQUFPLENBRFEsRUFDTDtBQUNWQyxnQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRkssRUFFdUI7QUFDdENYLGtCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FIRyxFQUdrQjtBQUNqQ0csZUFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3ZCO0FBQ0VJLGFBQUtkLEdBQUwsR0FBV1UsSUFBSVEsYUFBSixDQUFrQixDQUFsQixDQUFYO0FBQ0FKLGFBQUtILE9BQUwsQ0FBYTtBQUNYWCxlQUFLVSxJQUFJUSxhQUFKLENBQWtCLENBQWxCO0FBRE0sU0FBYjtBQUdEO0FBVmMsS0FBakI7QUFZRCxHQTVCUztBQTZCUEMsV0E3Qk8sdUJBNkJLO0FBQ2YsU0FBS0MsUUFBTCxDQUFjQyxJQUFkO0FBQ0QsR0EvQlc7QUFnQ1pDLFlBaENZLHdCQWdDQztBQUNYLFNBQUtGLFFBQUwsQ0FBY0csS0FBZDtBQUNELEdBbENXO0FBbUNaQyxTQW5DWSxxQkFtQ0Y7QUFDUixTQUFLSixRQUFMLENBQWNLLElBQWQsQ0FBbUIsRUFBbkI7QUFDRCxHQXJDVztBQXNDWkMsWUF0Q1ksd0JBc0NDO0FBQ1gsU0FBS04sUUFBTCxDQUFjSyxJQUFkLENBQW1CLENBQW5CO0FBQ0Q7QUF4Q1csQ0FBViIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZXRleHQ6ICd3ZUNoYXQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBwb3N0ZXI6ICdodHRwOi8veS5ndGltZy5jbi9tdXNpYy9waG90b19uZXcvVDAwMlIzMDB4MzAwTTAwMDAwM3JzS0Y0NEd5YVNrLmpwZz9tYXhfYWdlPTI1OTIwMDAnLFxuICAgIG5hbWU6ICfmraTml7bmraTliLsnLFxuICAgIGF1dGhvcjogJ+iuuOW3jScsXG4gICAgc3JjOiAnaHR0cDovL3dzLnN0cmVhbS5xcW11c2ljLnFxLmNvbS9NNTAwMDAxVmZ2c0oyMXhGcWIubXAzP2d1aWQ9ZmZmZmZmZmY4MmRlZjRhZjRiMTJiM2NkOTMzN2Q1ZTcmdWluPTM0Njg5NzIyMCZ2a2V5PTYyOTJGNTFFMUUzODRFMDZEQ0JEQzlBQjdDNDlGRDcxM0Q2MzJEMzEzQUM0ODU4QkFDQjhEREQyOTA2N0QzQzYwMTQ4MUQzNkU2MjA1M0JGOERGRUFGNzRDMEE1Q0NGQURENjQ3MTE2MENBRjNFNkEmZnJvbXRhZz00NicsXG4gIH1cbiAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgdmlkZW8oKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlVmlkZW8oe1xuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICBtYXhEdXJhdGlvbjogNjAsXG4gICAgICAgIGNhbWVyYTogJ2JhY2snLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICB0aGF0LnNldERhdGEoe1xuICAgICAgICAgICAgc3JjOiByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIGltYWdlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgY291bnQ6IDEsIC8vIOm7mOiupDlcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooajvvIx0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcbiAgICAgICAgICBzZWxmLnNyYyA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIHNyYzogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgICAgYXVkaW9QbGF5KCkge1xuICAgIHRoaXMuYXVkaW9DdHgucGxheSgpXG4gIH0sXG4gIGF1ZGlvUGF1c2UoKSB7XG4gICAgdGhpcy5hdWRpb0N0eC5wYXVzZSgpXG4gIH0sXG4gIGF1ZGlvMTQoKSB7XG4gICAgdGhpcy5hdWRpb0N0eC5zZWVrKDE0KVxuICB9LFxuICBhdWRpb1N0YXJ0KCkge1xuICAgIHRoaXMuYXVkaW9DdHguc2VlaygwKVxuICB9XG5cbn1cblxuIl19