"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(o,i){try{var r=t[o](i),s=r.value}catch(e){return void n(e)}if(!r.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}return a("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_zanQuantity=require("./../../../components/zan-quantity.js"),_zanQuantity2=_interopRequireDefault(_zanQuantity),_zanDialog=require("./../../../components/zan-dialog.js"),_zanDialog2=_interopRequireDefault(_zanDialog),Index=function(e){function t(){var e,n,a,o;_classCallCheck(this,t);for(var i=arguments.length,r=Array(i),s=0;s<i;s++)r[s]=arguments[s];return n=a=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),a.config={navigationBarTitleText:"入库-确认数量"},a.mixins=[_wxex2.default],a.$repeat={},a.$props={zanQuantity:{"xmlns:v-bind":"","v-bind:quantity.sync":"innum","v-bind:min.once":"min","v-bind:max.sync":"max",componentId:"innum"}},a.$events={},a.components={zanToptips:_zanToptips2.default,zanDialog:_zanDialog2.default,zanQuantity:_zanQuantity2.default},a.data={barCode:"",areaId:"",areaList:[],innum:0,showPop:!1,min:0,max:20,goodInfo:null,choice:1,flag:1,doNum:0},a.events={zanTabChange:function(e,t){var n=e.componentId,a=e.selectedId;this[n].selectedId=a,this.getTodoWorks(a),this.$apply()},zanQuantityChange:function(e,t){var n=e.componentId,a=e.quantity;this[n]=a,this.$apply()}},a.methods={hidePop:function(e){a.showPop=!1,a.$apply()},bindAreaChange:function(e){a.areaId=e.detail.value,a.$apply()},code:function(e){var t=e.detail.value;a.barCode=t,a.$apply()},setContainer:function(e){a.checkDevice()},scanQr:function(e){wx.scanCode({success:function(e){a.barCode=e.result,a.$apply()}})},handleSubmit:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,a,o,i,r,s,u,c,d=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=getCurrentPages(),this.hideC=!0,a=this,2!=this.choice){e.next=6;break}return this.showPop=!0,e.abrupt("return",!1);case 6:if(this.areaId){e.next=9;break}return this.showTips("请选择库区"),e.abrupt("return",!1);case 9:o={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:this.work.addressId,storageId:this.goodInfo.storageId,areaId:this.areaId,goodNo:this.goodInfo.goodNo.toUpperCase(),deviceId:this.deviceInfo.deviceId},Object.keys(t.detail.value).forEach(function(e){o[e]=parseFloat(t.detail.value[e])}),i=Object.assign({},o,{innum:this.innum}),i.weight||(i.weight=0),i.height||(i.height=0),i.width||(i.width=0),i.length||(i.length=0),r=this.goodInfo,s=r.num,u=r.sorageNum,c=Object.assign({},this.deviceInfo),this.innum<this.max?wx.showActionSheet({itemList:["容器已满，需更换","缺货"],success:function(e){e.cancel||(i.type=e.tapIndex+2,d.flag=i.type,d.saveStorage(i))}}):(i.type=1,this.flag=i.type,this.saveStorage(i));case 19:case"end":return e.stop()}},e,this)}));return e}()},o=n,_possibleConstructorReturn(a,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e,t){this.work=t.preload?t.preload.work:{},this.goodInfo=t.preload?t.preload.goodInfo:{},this.deviceInfo=t.preload?t.preload.deviceInfo:{},this.areaId=t.preload?t.preload.areaId:{};var n=this.goodInfo,a=n.num,o=n.sorageNum;this.max=a-o,this.$apply()}},{key:"saveStorage",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,a,o,i,r,s,u,c,d,h=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中",mask:!0}),e.next=3,_service2.default.Apost("storage/saveStorage",t);case 3:n=e.sent,a=n.res,o=n.msg,i=n.state,r=n.code,wx.hideLoading(),s=Object.assign({},this.deviceInfo),i?1==a?(this.showPop=!0,this.barCode="",this.choice=2,this.areaId="",s.areaId="",this.deviceInfo=s,this.doNum+=t.innum,this.max=this.goodInfo.num-this.goodInfo.sorageNum-this.doNum,this.innum=0):2==a?(u=this.backUrl("chooseD",!0),c=u.delta,d=u.targetPage,2===this.deviceInfo.typeId?d.setParams({goodId:"",deviceInfo:{}}):d.setParams({goodId:"",deviceInfo:this.deviceInfo}),this.backUrl("chooseD")):3==a&&setTimeout(function(){var e=h.backUrl("todo",!0),t=e.delta;e.targetPage.setParams({reload:!0}),wx.navigateBack({delta:t})},1e3):(2005===r&&(this.showPop=!0,this.barCode=""),this.showTips(o)),this.$apply();case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"checkDevice",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,a,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:this.work.addressId,barCode:this.barCode.toUpperCase()},e.next=3,_service2.default.Aget("device/getDevice",t);case 3:n=e.sent,a=n.res,o=n.msg,i=n.state,i?(this.deviceInfo=a,this.areaId=a.areaId?a.areaId:this.areaId,this.showPop=!1,this.choice=1):this.showTips(o),this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"setParams",value:function(e){this.params=e,e.deviceInfo&&(this.deviceInfo=e.deviceInfo,this.barCodeinfo=e.deviceInfo.deviceSn),this.$apply()}}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/instorage/chooseE"));