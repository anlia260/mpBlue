"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../mixins/service.js"),_service2=_interopRequireDefault(_service),app=getApp(),Index=function(e){function t(){var e,r,n,o;_classCallCheck(this,t);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.config={navigationBarTitleText:"名片详情"},n.components={},n.mixins=[],n.data={cardInfo:null,parterId:null},n.computed={},n.methods={handleBack:function(){_wepy2.default.navigateBack()},handleSubmit:function(e){},callMumber:function(e){e&&wx.makePhoneCall({phoneNumber:e,success:function(){console.log("拨打电话成功！")},fail:function(){console.log("拨打电话失败！")}})}},n.events={},o=r,_possibleConstructorReturn(n,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){var t=this,r=e.id,n=e.parterId;if(this.parterId=n,r){var o=this.$parent.globalData.userInfo;_service2.default.requestGet("/card/getContactDetail",{tk:o.token,ucId:o.ucId,parterId:r,myparterId:n},function(e,r){r&&(t.cardInfo=e.data.data,t.$apply())})}else console.log("无ID")}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/cardcase/card-info"));