"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var s=t[o](i),a=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(a).then(function(e){n("next",e)},function(e){n("throw",e)});e(a)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_wxex=require("./../../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_zanToptips=require("./../../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),Index=function(e){function t(){var e,r,n,o;_classCallCheck(this,t);for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.config={navigationBarTitleText:"扫描或填写货号"},n.components={zanToptips:_zanToptips2.default},n.mixins=[_wxex2.default],n.data={barCodeinfo:"",focusinfo:!0},n.events={},n.methods={code:function(e){var t=e.detail.value;n.barCodeinfo=t,n.$apply()},scanQr:function(e){wx.scanCode({success:function(e){console.log("res:"+e),n.barCodeinfo=e.result}})}},o=r,_possibleConstructorReturn(n,o)}return _inherits(t,e),_createClass(t,[{key:"checkDevice",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:this.work.addressId,barCode:this.barCodeinfo},e.next=3,_service2.default.Aget("device/getDevice",t);case 3:r=e.sent,n=r.res,o=r.msg,i=r.state,i?(this.$preload("deviceInfo",n),this.$preload("work",this.work),this.$preload("barCode",this.barCodeinfo),this.$preload("goto","chooseD"),this.$navigate("./chooseD")):this.showTips(o),this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);exports.default=Index;