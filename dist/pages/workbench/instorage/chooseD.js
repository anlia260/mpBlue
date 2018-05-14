"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var s=t[o](i),a=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)});e(a)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),Index=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.config={navigationBarTitleText:"待入货品"},r.mixins=[_wxex2.default],r.components={zanToptips:_zanToptips2.default},r.data={goodId:"",barCodeinfo:"",info:{},snText:"",areaList:[],areaId:"",areaSort:"",deviceShow:"",toShelf:[],total:0},r.events={zanTabChange:function(e,t){var n=e.componentId,r=e.selectedId;this[n].selectedId=r,this.getTodoWorks(r),this.$apply()}},r.methods={bindAreaChange:function(e){r.areaSort=e.detail.value,r.areaId=r.areaList[r.areaSort].areaId,r.$apply()},toDetail:function(e){r.toShelf&&r.toShelf.length>0&&(r.$preload("goto","chooseD"),r.$preload("shelfList",r.toShelf),r.$preload("source",1),r.$navigate("./shelflist"))},scanQr:function(e){wx.scanCode({success:function(e){r.goodId=e.result,r.$apply()}})},code:function(e){var t=e.detail.value;r.goodId=t,r.$apply()}},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e,t){this.info=t.preload?t.preload:"",this.deviceShow=this.info.deviceInfo.deviceSn,-1!=this.info.deviceInfo.deviceSn.indexOf("T")&&(this.deviceShow=this.info.deviceInfo.positionSn),this.$apply()}},{key:"onShow",value:function(){this.getArea(),this.geStorageInfo(),this.getToShelf()}},{key:"chooseC",value:function(){this.$preload("work",this.info.work),this.$preload("barCode",this.info.deviceInfo.deviceSn),this.$navigate("./chooseF")}},{key:"getToShelf",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,o,i,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.total=0,t={storageId:this.info.work.busyKey},e.next=4,_service2.default.Apost("storage/getToShelf",t);case 4:n=e.sent,r=n.res,o=n.msg,i=n.state,i&&(this.toShelf=r,this.toShelf.forEach(function(e){s.total+=e.num-e.sorageNum})),this.$apply();case 10:case"end":return e.stop()}},e,this)}));return e}()},{key:"doconfirm",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:wx.showModal({content:"请确认本次入库已经全部完成！",confirmText:"确认",cancelText:"取消",success:function(e){e.confirm&&t.finishAll()}});case 1:case"end":return e.stop()}},e,this)}));return e}()},{key:"finishAll",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.info.work.busyKey){e.next=3;break}return this.showTips("入库信息不存在"),e.abrupt("return",!1);case 3:return t={ucId:this.userInfo.ucId,tk:this.userInfo.token,storageId:this.info.work.busyKey},e.next=6,_service2.default.Apost("storage/finish",t);case 6:n=e.sent,r=n.res,o=n.msg,i=n.state,i?this.backUrl("todo"):this.showTips(o),this.$apply();case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"checkGood",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,o,i,s,a=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.info.deviceInfo){e.next=3;break}return this.showTips("请选择一个容器"),e.abrupt("return",!1);case 3:if(""!==this.areaSort){e.next=6;break}return this.showTips("请选择库区"),e.abrupt("return",!1);case 6:if(""!==this.goodId){e.next=9;break}return this.showTips("请输入货号或者扫码获取货号"),e.abrupt("return",!1);case 9:return t={ucId:this.userInfo.ucId,tk:this.userInfo.token,storageId:this.info.work.busyKey||0,goodNo:this.goodId.toUpperCase(),deviceId:this.info.deviceInfo.deviceId,areaId:this.areaId},e.next=12,_service2.default.Apost("storage/checkGood",t);case 12:n=e.sent,r=n.res,o=n.msg,i=n.state,s=n.code,i?(this.$preload("goodInfo",r),this.$preload("deviceInfo",this.info.deviceInfo),this.$preload("work",this.info.work),this.$preload("areaId",this.areaId),this.$navigate("./chooseE")):2006===s?wx.showModal({content:"此库位已有相同寄存编号的货品，为保证先进先出，请选择更换容器",confirmText:"确认",cancelText:"取消",success:function(e){e.confirm&&a.chooseC()}}):this.showTips(o),this.$apply();case 19:case"end":return e.stop()}},e,this)}));return e}()},{key:"getArea",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,o,i,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:this.info.work.addressId||0},e.next=3,_service2.default.Aget("area/listArea",t);case 3:n=e.sent,r=n.res,o=n.msg,i=n.state,i?(r.forEach(function(e,t){e.areaId==s.info.deviceInfo.areaId&&(s.areaSort=t,s.areaId=s.info.deviceInfo.areaId)}),this.areaList=r):this.showTips(o),this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"geStorageInfo",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,o,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={ucId:this.userInfo.ucId,tk:this.userInfo.token,storageId:this.info.work.busyKey||0},e.next=3,_service2.default.Apost("storage/getStorageInfo",t);case 3:n=e.sent,r=n.res,o=n.msg,i=n.state,i?(s=null,r&&r.num&&(s=this.info.work.workMap.cgOrder+"      已入"+r.storagenum+"件"),this.snText=s):this.showTips(o),this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"setParams",value:function(e){this.params=e,e.deviceInfo&&(this.info.deviceInfo=e.deviceInfo,this.info.deviceInfo.areaId?this.areaId=this.info.deviceInfo.areaId:this.areaId="",this.deviceShow="",e.deviceInfo.deviceSn&&(this.deviceShow=this.info.deviceInfo.deviceSn,-1!=this.info.deviceInfo.deviceSn.indexOf("T")&&(this.deviceShow=this.info.deviceInfo.positionSn))),""===e.goodId&&(this.goodId=e.goodId),this.$apply()}}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/instorage/chooseD"));