"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_constant=require("./../../../mixins/constant.js"),Constnat=_interopRequireWildcard(_constant),_qiniuUploader=require("./../../../utils/qiniuUploader.js"),_qiniuUploader2=_interopRequireDefault(_qiniuUploader),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),Index=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.config={navigationBarTitleText:"新增地址"},r.components={zanToptips:_zanToptips2.default},r.data={addForm:{ucId:null,tk:null,companyName:"",exName:"",logo:{}}},r.methods={formReset:function(){console.log("form发生了reset事件")},handleBack:function(){_wepy2.default.navigateBack({})},handleInputChange:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=_slicedToArray(t,2),o=r[0],a=r[1];this.addForm[o]=a.detail.value,this.$apply()},handleSubmit:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o,a,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=getCurrentPages(),r=Object.assign({},this.addForm,t.detail.value),r.logo=r.logo.imageURL,o=r.companyId?"company/updateCompany":"company/addCompany",e.next=6,_service2.default.Apost(o,r);case 6:a=e.sent,i=a.res,s=a.state,s?wx.showToast({title:"添加成功",icon:"success",duration:2e3,success:function(){if(n.length>1){n[n.length-3].onLoad()}wx.navigateBack({delta:2})}}):this.showTopTips(i,"error");case 10:case"end":return e.stop()}},e,this)}));return e}()},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),_createClass(t,[{key:"showTopTips",value:function(e,t){this.$invoke("zanToptips","showZanTopTips",{content:e,type:t,options:1e3})}},{key:"chooseImage",value:function(e){var t=this;wx.chooseImage({sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){wx.showToast({title:"正在上传",icon:"loading"});var n=e.tempFilePaths[0];_qiniuUploader2.default.upload(n,function(e){wx.showToast({title:"添加成功",icon:"success",duration:1e3,success:function(){t.addForm.logo=e,t.$apply()}})},function(e){t.showTopTips(JSON.stringify(e),"error")})}})}},{key:"previewImage",value:function(e){wx.previewImage({current:e.currentTarget.id,urls:[this.addForm.logo.imageURL]})}},{key:"onLoad",value:function(){function e(e,n){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n){var r,o,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.$parent.globalData.userInfo,this.addForm.ucId=r.ucId,this.addForm.tk=r.token,o=n.preload?"编辑公司信息":"新增公司信息",wx.setNavigationBarTitle({title:o}),n.preload&&(a=Object.assign({},n.preload.company),this.addForm.companyId=a.companyId,this.addForm.companyName=a.companyName,this.addForm.exName=a.exName,this.addForm.logo={imageURL:a.logo}),e.next=8,_service2.default.Aget("/user/getUpToken",{ucId:r.ucId,tk:r.token});case 8:i=e.sent,this.initQiniu(i),this.$apply();case 11:case"end":return e.stop()}},e,this)}));return e}()},{key:"initQiniu",value:function(e){var t=e.state,n=e.res;if(t){var r={region:"ECN",uptoken:n,domain:Constnat.PLATFORM.IMAGE_DOMAIN,shouldUseQiniuFileName:!1};_qiniuUploader2.default.init(r)}}}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/mine/company/add"));