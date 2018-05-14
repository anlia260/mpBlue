"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function s(o,i){try{var r=t[o](i),a=r.value}catch(e){return void n(e)}if(!r.done)return Promise.resolve(a).then(function(e){s("next",e)},function(e){s("throw",e)});e(a)}return s("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_constant=require("./../../mixins/constant.js"),_wxex=require("./../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_service=require("./../../mixins/service.js"),_service2=_interopRequireDefault(_service),_zanToptips=require("./../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),app=getApp(),Index=function(e){function t(){var e,n,s,o,i=this;_classCallCheck(this,t);for(var r=arguments.length,a=Array(r),u=0;u<r;u++)a[u]=arguments[u];return n=s=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),s.config={navigationBarTitleText:"新增地址"},s.mixins=[_wxex2.default],s.components={zanToptips:_zanToptips2.default},s.data={addForm:{ucId:null,tk:null,companyId:null,addressName:"",tel:"",address:"",addressType:1},AddressTypes:[],condition:!1,provinces:[],citys:[],countys:[],province:"",city:"",county:"",cityData:null,values:[0,0,0],value:[0,0,0],isedit:!1,ispro:!1,iscity:!1,iscounty:!1},s.methods={handleBack:function(){_wepy2.default.navigateBack({})},inputName:function(e){s.addForm.addressName=e.detail.value},inputPhone:function(e){s.addForm.tel=e.detail.value},inputAddress:function(e){s.addForm.address=e.detail.value},handleSubmit:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,o,r,a,u,c,d,l,p,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=getCurrentPages(),o=Object.assign(s.addForm,{provinceId:s.provinces[s.values[0]].zoneCode,cityId:s.citys[s.values[1]].zoneCode,districtId:s.countys[s.values[2]]?s.countys[s.values[2]].zoneCode:0},t.detail.value),""!==o.addressName){e.next=5;break}return s.showTips("请输入地址名称"),e.abrupt("return",!1);case 5:if(""!==o.addressType){e.next=8;break}return s.showTips("请选择地址类型"),e.abrupt("return",!1);case 8:if(!o.tel){e.next=12;break}if(/^1[3|4|5|8][0-9]\d{4,8}$/.test(o.tel)||/^0\d{2,3}\d{7,8}(-\d{1,6})?$/.test(o.tel)){e.next=12;break}return s.showTips("请输入正确电话号码或者手机号码"),e.abrupt("return",!1);case 12:if(""!==o.address){e.next=15;break}return s.showTips("请输入详细地址"),e.abrupt("return",!1);case 15:if(!o.addressId){e.next=26;break}return console.info(o),e.next=19,_service2.default.Apost("company/updateAddress",o);case 19:r=e.sent,a=r.res,u=r.msg,c=r.state,c?wx.showToast({title:"编辑成功",icon:"success",duration:2e3,success:function(){s.backUrl("address")}}):s.showTips("保存地址信息失败"),e.next=33;break;case 26:return e.next=28,_service2.default.Apost("company/addAddress",o);case 28:d=e.sent,l=d.res,p=d.msg,v=d.state,v?wx.showToast({title:"添加成功",icon:"success",duration:2e3,success:function(){s.backUrl("address")}}):s.showTips("保存地址信息失败");case 33:case"end":return e.stop()}},e,i)}));return e}(),open:function(){s.condition=!s.condition,console.log(s.values),console.log(s.provinces),s.provinces&&s.provinces[s.values[0]]&&(s.province=s.provinces[s.values[0]].zoneName),s.citys&&s.citys[s.values[1]]&&(s.city=s.citys[s.values[1]].zoneName),s.countys&&s.countys[s.values[2]]&&(s.county=s.countys[s.values[2]].zoneName)},bindChange:function(e){var t=e.detail.value,n=s.values;return t[0]!=n[0]?(s.loadCity(s.provinces[t[0]].zoneCode),s.province=s.provinces[t[0]].zoneName,void(s.values=t)):t[1]!=n[1]?(s.loadCounty(s.citys[t[1]].zoneCode),s.city=s.citys[t[1]].zoneName,void(s.values=t)):t[2]!=n[2]?(s.county=s.countys[t[2]].zoneName,void(s.values=t)):void 0}},o=n,_possibleConstructorReturn(s,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e,t){var n="新增地址";this.AddressTypes=_constant.AddressTypes;var s=this.$parent.globalData.userInfo;if(t.preload){var o=Object.assign({},t.preload.address);console.info(o),this.addForm.companyId=o.companyId,this.addForm.addressName=o.addressName,this.addForm.tel=o.tel,this.addForm.address=o.address,this.addForm.addressType=o.addressType,this.addForm.addressId=o.addressId,this.province=o.province,this.city=o.cityName,this.county=o.districtName,this.value=[o.provinceId,o.cityId,o.districtId],this.isedit=!0,n="编辑地址"}else this.addForm.companyId=s.companyId;this.addForm.addressType=1,this.addForm.ucId=s.ucId,this.addForm.tk=s.token,this.loadProvince(),wx.setNavigationBarTitle({title:n}),this.$apply()}},{key:"loadProvince",value:function(){var e=this;_service2.default.requestGet("zone/province",null,function(t,n){var s=[];if(n){s=t.data.data;var o=s[0].zoneCode,i=s.findIndex(function(t){return t.zoneCode===e.value[0]});i=i>=0?i:0;var r=e;setTimeout(function(){r.values[0]=i},0),e.isedit&&!e.ispro?(o=e.value[0],e.province=s[i].zoneName):e.ispro&&(e.province=s[0].zoneName),e.value[0]=o,e.provinces=s,e.loadCity(o),!e.isedit&&e.ispro&&(e.iscity=!0),e.ispro=!0}else console.info("err");e.$apply()})}},{key:"loadCity",value:function(e){var t=this;_service2.default.requestGet("zone/city/"+e,null,function(e,n){var s=[];if(n){s=e.data.data;var o=s[0].zoneCode,i=s.findIndex(function(e){return e.zoneCode===t.value[1]});console.log(s),i=i>=0?i:0;var r=t;setTimeout(function(){r.values[1]=i},0),t.isedit&&!t.iscity?(o=t.value[1],t.city=s[i].zoneName):(t.values[1]=0,t.iscity&&(t.city=s[0].zoneName)),t.loadCounty(o),!t.isedit&&t.iscity&&(t.iscounty=!0),t.iscity=!0}else console.info("err");t.citys=s,t.$apply()})}},{key:"loadCounty",value:function(e){var t=this;_service2.default.requestGet("zone/district/"+e,null,function(e,n){var s=[];if(n)if((s=e.data.data)&&s.length>0)if(t.isedit&&!t.iscounty){var o=s.findIndex(function(e){return e.zoneCode===t.value[2]});o=o>=0?o:0;var i=t;setTimeout(function(){i.values[2]=o},0),t.county=s[o].zoneName,t.iscounty=!0}else t.iscounty&&(t.county=s[0]?s[0].zoneName:"");else t.county="",t.values[2]=0;else console.info("err");t.countys=s,t.$apply()})}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/mine/address-add"));