'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
            navigationBarTitletext: '上拉弹层'
        }, _this.data = {
            animationData: "",
            showModalStatus: false,
            imageHeight: 0,
            imageWidth: 0
            // var app = getApp();
        }, _this.methods = {
            //let animationShowHeight = 300;     
            imageLoad: function imageLoad(e) {
                this.setData({ imageHeight: e.detail.height, imageWidth: e.detail.width });
            },
            showModal: function showModal() {
                // 显示遮罩层  
                var animation = wx.createAnimation({
                    duration: 200,
                    timingFunction: "linear",
                    delay: 0
                });
                this.animation = animation;
                animation.translateY(animationShowHeight).step();
                this.setData({
                    animationData: animation.export(),
                    showModalStatus: true
                });
                setTimeout(function () {
                    animation.translateY(0).step();
                    this.setData({
                        animationData: animation.export()
                    });
                }.bind(this), 200);
            },
            hideModal: function hideModal() {
                // 隐藏遮罩层  
                var animation = wx.createAnimation({
                    duration: 200,
                    timingFunction: "linear",
                    delay: 0
                });
                this.animation = animation;
                animation.translateY(animationShowHeight).step();
                this.setData({
                    animationData: animation.export()
                });
                setTimeout(function () {
                    animation.translateY(0).step();
                    this.setData({
                        animationData: animation.export(),
                        showModalStatus: false
                    });
                }.bind(this), 200);
            },
            onShow: function onShow() {
                var that = this;
                wx.getSystemInfo({
                    success: function success(res) {
                        animationShowHeight = res.windowHeight;
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onload',
        value: function onload() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/excise'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2lzZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZXRleHQiLCJkYXRhIiwiYW5pbWF0aW9uRGF0YSIsInNob3dNb2RhbFN0YXR1cyIsImltYWdlSGVpZ2h0IiwiaW1hZ2VXaWR0aCIsIm1ldGhvZHMiLCJpbWFnZUxvYWQiLCJlIiwic2V0RGF0YSIsImRldGFpbCIsImhlaWdodCIsIndpZHRoIiwic2hvd01vZGFsIiwiYW5pbWF0aW9uIiwid3giLCJjcmVhdGVBbmltYXRpb24iLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwiZGVsYXkiLCJ0cmFuc2xhdGVZIiwiYW5pbWF0aW9uU2hvd0hlaWdodCIsInN0ZXAiLCJleHBvcnQiLCJzZXRUaW1lb3V0IiwiYmluZCIsImhpZGVNb2RhbCIsIm9uU2hvdyIsInRoYXQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLEksR0FBTztBQUNIQywyQkFBZSxFQURaO0FBRUhDLDZCQUFpQixLQUZkO0FBR0hDLHlCQUFhLENBSFY7QUFJSEMsd0JBQVk7QUFFaEI7QUFOTyxTLFFBT1BDLE8sR0FBVTtBQUNOO0FBQ0FDLHVCQUFXLG1CQUFTQyxDQUFULEVBQVk7QUFDbkIscUJBQUtDLE9BQUwsQ0FBYSxFQUFFTCxhQUFhSSxFQUFFRSxNQUFGLENBQVNDLE1BQXhCLEVBQWdDTixZQUFZRyxFQUFFRSxNQUFGLENBQVNFLEtBQXJELEVBQWI7QUFDSCxhQUpLO0FBS05DLHVCQUFXLHFCQUFXO0FBQ2xCO0FBQ0Esb0JBQUlDLFlBQVlDLEdBQUdDLGVBQUgsQ0FBbUI7QUFDL0JDLDhCQUFVLEdBRHFCO0FBRS9CQyxvQ0FBZ0IsUUFGZTtBQUcvQkMsMkJBQU87QUFId0IsaUJBQW5CLENBQWhCO0FBS0EscUJBQUtMLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0FBLDBCQUFVTSxVQUFWLENBQXFCQyxtQkFBckIsRUFBMENDLElBQTFDO0FBQ0EscUJBQUtiLE9BQUwsQ0FBYTtBQUNUUCxtQ0FBZVksVUFBVVMsTUFBVixFQUROO0FBRVRwQixxQ0FBaUI7QUFGUixpQkFBYjtBQUlBcUIsMkJBQVcsWUFBVztBQUNsQlYsOEJBQVVNLFVBQVYsQ0FBcUIsQ0FBckIsRUFBd0JFLElBQXhCO0FBQ0EseUJBQUtiLE9BQUwsQ0FBYTtBQUNUUCx1Q0FBZVksVUFBVVMsTUFBVjtBQUROLHFCQUFiO0FBR0gsaUJBTFUsQ0FLVEUsSUFMUyxDQUtKLElBTEksQ0FBWCxFQUtjLEdBTGQ7QUFNSCxhQXhCSztBQXlCTkMsdUJBQVcscUJBQVc7QUFDbEI7QUFDQSxvQkFBSVosWUFBWUMsR0FBR0MsZUFBSCxDQUFtQjtBQUMvQkMsOEJBQVUsR0FEcUI7QUFFL0JDLG9DQUFnQixRQUZlO0FBRy9CQywyQkFBTztBQUh3QixpQkFBbkIsQ0FBaEI7QUFLQSxxQkFBS0wsU0FBTCxHQUFpQkEsU0FBakI7QUFDQUEsMEJBQVVNLFVBQVYsQ0FBcUJDLG1CQUFyQixFQUEwQ0MsSUFBMUM7QUFDQSxxQkFBS2IsT0FBTCxDQUFhO0FBQ1RQLG1DQUFlWSxVQUFVUyxNQUFWO0FBRE4saUJBQWI7QUFHQUMsMkJBQVcsWUFBVztBQUNsQlYsOEJBQVVNLFVBQVYsQ0FBcUIsQ0FBckIsRUFBd0JFLElBQXhCO0FBQ0EseUJBQUtiLE9BQUwsQ0FBYTtBQUNUUCx1Q0FBZVksVUFBVVMsTUFBVixFQUROO0FBRVRwQix5Q0FBaUI7QUFGUixxQkFBYjtBQUlILGlCQU5VLENBTVRzQixJQU5TLENBTUosSUFOSSxDQUFYLEVBTWMsR0FOZDtBQU9ILGFBNUNLO0FBNkNORSxvQkFBUSxrQkFBVztBQUNmLG9CQUFJQyxPQUFPLElBQVg7QUFDQWIsbUJBQUdjLGFBQUgsQ0FBaUI7QUFDYkMsNkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNuQlYsOENBQXNCVSxJQUFJQyxZQUExQjtBQUNIO0FBSFksaUJBQWpCO0FBS0g7QUFwREssUzs7Ozs7aUNBc0RELENBQUc7Ozs7RUFqRW1CLGVBQUtDLEk7O2tCQUFuQm5DLEsiLCJmaWxlIjoiZXhjaXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxldGV4dDogJ+S4iuaLieW8ueWxgidcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgICAgYW5pbWF0aW9uRGF0YTogXCJcIixcbiAgICAgICAgc2hvd01vZGFsU3RhdHVzOiBmYWxzZSxcbiAgICAgICAgaW1hZ2VIZWlnaHQ6IDAsXG4gICAgICAgIGltYWdlV2lkdGg6IDBcbiAgICB9XG4gICAgLy8gdmFyIGFwcCA9IGdldEFwcCgpO1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIC8vbGV0IGFuaW1hdGlvblNob3dIZWlnaHQgPSAzMDA7ICAgICBcbiAgICAgICAgaW1hZ2VMb2FkOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBpbWFnZUhlaWdodDogZS5kZXRhaWwuaGVpZ2h0LCBpbWFnZVdpZHRoOiBlLmRldGFpbC53aWR0aCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd01vZGFsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIOaYvuekuumBrue9qeWxgiAgXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICAgIGRlbGF5OiAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICAgICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKGFuaW1hdGlvblNob3dIZWlnaHQpLnN0ZXAoKVxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KCksXG4gICAgICAgICAgICAgICAgc2hvd01vZGFsU3RhdHVzOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgwKS5zdGVwKClcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCAyMDApXG4gICAgICAgIH0sXG4gICAgICAgIGhpZGVNb2RhbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyDpmpDol4/pga7nvanlsYIgIFxuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogXCJsaW5lYXJcIixcbiAgICAgICAgICAgICAgICBkZWxheTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoYW5pbWF0aW9uU2hvd0hlaWdodCkuc3RlcCgpXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsU3RhdHVzOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIDIwMClcbiAgICAgICAgfSxcbiAgICAgICAgb25TaG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TaG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgIH1cbiAgICBvbmxvYWQoKSB7IH1cbn1cbiJdfQ==