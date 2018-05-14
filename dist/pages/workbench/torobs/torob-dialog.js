"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var a=t[o](i),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),torobDialog=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.props={},r.data={showDialog:!1,content:{},mate:{},animationData:{}},r.methods={toggleDialog:function(e,t){var n=this,r=e.content,o=void 0===r?"":r,i=e.mate,a=void 0===i?"":i;this.content=o,this.mate=a,this.showDialog=!this.showDialog;var s=_wepy2.default.createAnimation({duration:400,timingFunction:"ease"});this.animation=s,wx.createSelectorQuery().select(".zan-dialog__container").boundingClientRect(function(e){n.showDialog?s.translateY().step():s.translateY("100%").step(),n.animationData=s.export(),n.$apply()}).exec()},handleEntrust:function(e){var t=r,n=t.mate,o=t.content,i={entrustUcId:n.ucId,userWorkId:o.userWorkId,endTime:o.expireTime||"",entrustName:o.busyTypeText};r.entrustWork(i)}},r.showTips=function(e){r.$emit("show-tips",e)},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),_createClass(t,[{key:"entrustWork",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o,i,a,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_service2.default.Apost("entrust/entrustWork",t).catch(function(e){console.log(e),s.showTips(e)});case 2:n=e.sent,r=n.res,o=n.state,i=n.msg,a=n.code,200==a?this.$emit("entrust-work-ok"):this.showTips(i),this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.component);exports.default=torobDialog;