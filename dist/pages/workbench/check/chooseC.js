"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var s=t[o](i),a=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)});e(a)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_zanLoadmore=require("./../../../components/zan-loadmore.js"),_zanLoadmore2=_interopRequireDefault(_zanLoadmore),Index=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.config={navigationBarTitleText:"盘点-选取容器"},r.mixins=[_wxex2.default],r.components={zanToptips:_zanToptips2.default,zanLoadmore:_zanLoadmore2.default},r.data={isChoose:!1,areaList:[],areaId:"",potisonList:[],positionId:"",deviceList:[],barCode:"",showDevice:!1,focusinfo:!0},r.events={},r.methods={code:function(e){var t=e.detail.value;r.barCode=t,r.$apply()},bindAreaChange:function(e){r.areaId=e.detail.value,r.positionId="",r.barCode="",r.getPosition(e.detail.value),r.$apply()},bindDeviceChange:function(e,t){r.barCode=e.deviceSn,r.positionId=t.positionId,r.positionSn=t.positionSn,r.isChoose=!r.isChoose,r.$apply()},bindPosChange:function(e,t){r.barCode=e.positionSn,r.isChoose=!r.isChoose,r.$apply()},handleChoose:function(e){r.barCode?r.checkDevice():r.showTips("所选容器不存在"),r.$apply()},handleHide:function(e){r.isChoose=!r.isChoose,r.$apply()},setContainer:function(e){r.checkDevice()}},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e,t){var n=this.$parent.globalData.userInfo;this.info=t.preload?t.preload:{},this.goto="./sureNum",this.userInfo=n,this.$apply(),this.getArea(),this.focusinfo=ture,this.scanQr()}},{key:"scanQr",value:function(){var e=this;wx.scanCode({success:function(t){console.log(t),e.focusinfo=!1,e.barCode=t.result,e.$apply()}})}},{key:"checkDevice",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:this.info.work.addressId,barCode:this.barCode.toUpperCase()},e.next=3,_service2.default.Aget("device/getDevice",t);case 3:n=e.sent,r=n.res,o=n.state,o?(this.$preload("work",this.info.work),this.$preload("deviceInfo",r),this.$navigate(this.goto)):this.showTips(r),this.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"getPosition",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:this.info.work.addressId||0,areaId:t?this.areaList[t].areaId:""},e.next=3,_service2.default.Aget("position/listEmptyPosition",n);case 3:r=e.sent,o=r.res,i=r.state,i?this.potisonList=o:this.showTips(o),this.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"getArea",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:this.info.work.addressId},e.next=3,_service2.default.Aget("position/listEmptyArea",n);case 3:r=e.sent,o=r.res,i=r.state,i?(this.areaList=o,this.areaId=0,this.getPosition(o[0].areaId)):this.showTips(o),this.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/check/chooseC"));