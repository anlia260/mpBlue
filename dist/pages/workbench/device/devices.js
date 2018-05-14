"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(i,o){try{var a=t[i](o),s=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_zanLoadmore=require("./../../../components/zan-loadmore.js"),_zanLoadmore2=_interopRequireDefault(_zanLoadmore),Index=function(e){function t(){var e,r,n,i;_classCallCheck(this,t);for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.config={navigationBarTitleText:"空闲位置"},n.mixins=[_wxex2.default],n.components={zanToptips:_zanToptips2.default,zanLoadmore:_zanLoadmore2.default},n.data={areaList:[],areaSort:"",areaId:"",potisonList:[],positionId:"",deviceList:[],barCode:"",positionSn:"",addressId:""},n.events={},n.methods={bindAreaChange:function(e){var t=e.detail.value;n.areaSort=e.detail.value,n.positionId="",n.barCode="",n.getPosition(n.areaList[t].areaId),n.$apply()},bindDeviceChange:function(e,t){n.barCode=e.deviceSn,n.positionId=t.positionId,n.positionSn=t.positionSn,n.checkDevice()},unbind:function(e,t){wx.showModal({content:"确认库位没有容器:"+e.deviceSn+" 吗?",title:"确认",confirmText:"确认",cancelText:"取消",success:function(r){r.confirm&&n.unbind(n.areaId,t.positionId,e.deviceId)}})}},i=r,_possibleConstructorReturn(n,i)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e,t){this.preload=t.preload?t.preload:"",this.goto=t.preload?t.preload.goto:"",this.$apply()}},{key:"onShow",value:function(){this.getArea()}},{key:"unbind",value:function(){function e(e,r,n){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r,n){var i,o,a,s,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={addressId:this.preload.addressId,positionId:r,areaId:t,deviceId:n},e.next=3,_service2.default.Apost("position/unbindDevice",i);case 3:o=e.sent,a=o.res,s=o.msg,u=o.state,u?this.getPosition(this.areaId):this.showTips(s),this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"checkDevice",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,i,o,a,s,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:this.preload.addressId,barCode:this.barCode},e.next=3,_service2.default.Aget("device/getDevice",t);case 3:r=e.sent,n=r.res,i=r.msg,o=r.state,o?(a=this.backUrl(this.goto,!0),s=a.delta,u=a.targetPage,u.setParams({deviceSn:n.deviceSn}),wx.navigateBack({delta:s})):this.showTips(i),this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"getPosition",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:this.preload.addressId||0,areaId:t||""},e.next=3,_service2.default.Aget("position/listEmptyPosition",r);case 3:n=e.sent,i=n.res,o=n.state,o?this.potisonList=i:(this.potisonList=[],this.showTips("没有符合条件的库位信息")),this.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"getArea",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:this.preload.addressId},e.next=3,_service2.default.Aget("position/listEmptyArea",r);case 3:n=e.sent,i=n.res,o=n.state,o?(this.areaList=i,this.areaSort=0,this.areaId=i[0].areaId,this.getPosition(i[0].areaId)):this.showTips(i),this.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/device/devices"));