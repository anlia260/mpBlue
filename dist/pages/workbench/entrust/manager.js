"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var u=t[o](i),s=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_zanLoadmore=require("./../../../components/zan-loadmore.js"),_zanLoadmore2=_interopRequireDefault(_zanLoadmore),Index=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var i=arguments.length,u=Array(i),s=0;s<i;s++)u[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.config={navigationBarTitleText:"委托管理"},r.mixins=[_wxex2.default],r.components={},r.data={entrustInfo:{entrustMeAccepted:0,entrustMeNoAccepted:0,iEntrustItAccepted:0,iEntrustItNoAccepted:0}},r.events={},r.methods={entrustInfo:function(e){wx.navigateTo({url:"entrust-list?status="+e})},entrustInfoForMe:function(e){wx.navigateTo({url:"entrust-list-forme?status="+e})}},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){this.getEntrustNum()}},{key:"getEntrustNum",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中",mask:!0}),t=this.$parent.globalData.userInfo,n={ucId:t.ucId,tk:t.token},e.next=5,_service2.default.Aget("/entrust/EntrustNum",n);case 5:r=e.sent,o=r.res,i=r.state,wx.hideLoading(),i?(this.entrustInfo=o,console.log(this.entrustInfo)):this.showTips(o),this.$apply();case 11:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/entrust/manager"));