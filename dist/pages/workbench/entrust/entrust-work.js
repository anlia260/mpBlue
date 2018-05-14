"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,s){try{var a=t[o](s),i=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_zanTab=require("./../../../components/zan-tab.js"),_zanTab2=_interopRequireDefault(_zanTab),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_constant=require("./../../../mixins/constant.js"),Index=function(e){function t(){var e,r,n,o;_classCallCheck(this,t);for(var s=arguments.length,a=Array(s),i=0;i<s;i++)a[i]=arguments[i];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.config={navigationBarTitleText:"待办事务"},n.mixins=[_wxex2.default],n.components={zanTab:_zanTab2.default,zanToptips:_zanToptips2.default},n.data={list:[],userWorkId:null,workMate:null,checkItem:null},n.events={},n.methods={checkItem:function(e){n.userWorkId=e.userWorkId,n.checkItem=e}},o=r,_possibleConstructorReturn(n,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e,t){console.log(this.workMate),this.getEntrustList()}},{key:"parseTime",value:function(e){return e.replace(/-/g,"/")}},{key:"getEntrustList",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n,o,s,a,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=["托盘","箱子"],wx.showLoading({title:"加载中",mask:!0}),r=this.$parent.globalData.userInfo,n={ucId:r.ucId,tk:r.token},e.next=6,_service2.default.Aget("entrust/getToDoWork",n);case 6:o=e.sent,s=o.res,a=o.state,wx.hideLoading(),a?(this.list=[],s.forEach(function(e){if(21==e.busyType){var r=e.workMap,n=r.deviceType,o=r.deviceSn,s=r.areaName;e.showText=t[n-1]+"："+o+"，"+s}else 20==e.busyType?e.showText="单号："+e.busySn:22==e.busyType?e.showText="出库单："+e.busySn:23==e.busyType?e.showText="出库单："+e.busySn:25==e.busyType?e.showText="货品："+e.workMap.GoodNo:26==e.busyType?1===e.workMap.status?e.showText="拣货箱："+e.workMap.deviceSn:e.showText="货号："+e.workMap.goodNo+"，"+e.workMap.addressName+"，"+e.workMap.packageNum+"号箱":27==e.busyType&&(e.showText="货品："+e.workMap.GoodNo);var a=_constant.WorkTypes.find(function(t){return t.id===e.busyType});e.busyTypeText=a?a.title:"";var u=Number.parseInt(new Date-new Date(i.parseTime(e.createTime)))/1e3/60;e.beforeTime=u<60?Number.parseInt(u)+"分钟前":u<1440?Number.parseInt(u/60)+"小时前":Number.parseInt(u/60/24)+"天前";var c=i.list.find(function(t){return t.id===e.permCompanyId});c?c.list.push(e):i.list.push({id:e.permCompanyId,name:e.permCompanyName,list:[e]})})):this.list=[],this.$apply();case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"toggleActionsheet",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.checkItem){e.next=3;break}return this.showTips("请选择一个事务"),e.abrupt("return",!1);case 3:t="",_constant.WorkTypes.forEach(function(e,n){r.checkItem.busyType==e.id&&(console.log("this.addressIndex===>"+n),t=e.title)}),this.$preload("type",2),this.$preload("checkItem",this.checkItem),this.$preload("entrustName",t+"委托"),this.$navigate("./card-workmate");case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"entrustPerm",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,o,s,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_service2.default.Apost("entrust/entrustWork",t);case 2:r=e.sent,n=r.res,o=r.state,s=r.msg,a=r.code,o?this.backUrl("card-workmate-info"):this.showTips(s),this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/entrust/entrust-work"));