"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function o(r,i){try{var a=t[r](i),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});e(s)}return o("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../mixins/service.js"),_service2=_interopRequireDefault(_service),_wxex=require("./../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_zanToptips=require("./../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_zanLoadmore=require("./../../components/zan-loadmore.js"),_zanLoadmore2=_interopRequireDefault(_zanLoadmore),Index=function(e){function t(){var e,n,o,r;_classCallCheck(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.config={navigationBarTitleText:"选择容器或者库位"},o.components={zanToptips:_zanToptips2.default,zanLoadmore:_zanLoadmore2.default},o.mixins=[_wxex2.default],o.data={areaList:[],areaId:"",potisonList:[],positionId:"",positionSn:"",deviceList:[],barCodeinfo:"",test:"",flag:1,focusinfo:!0,workId:""},o.events={},o.methods={code:function(e){var t=e.detail.value;o.barCodeinfo=t,o.$apply()},scanQr:function(e){wx.scanCode({success:function(e){console.log(e),o.barCodeinfo=e.result,o.$apply(),o.checkDevice()}})}},r=n,_possibleConstructorReturn(o,r)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e,t){console.log(this.userInfo),this.focusinfo=!0,this.$apply()}},{key:"onHide",value:function(){this.params=null,this.$apply()}},{key:"checkDevice",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,o,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:2,barCode:this.barCodeinfo.toUpperCase()},e.next=3,_service2.default.Aget("device/getInfo",t);case 3:n=e.sent,o=n.res,r=n.msg,i=n.state,i?1===o.type?(this.$preload("deviceInfo",o.deviceInfo),this.$navigate("./device/detail")):(this.$preload("positionInfo",o.position),this.$navigate("./saoyisao/devices")):this.showTips(r),this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"setParams",value:function(e){this.params=e,e.deviceSn&&(this.barCodeinfo=e.deviceSn),this.$apply()}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/scanindex"));