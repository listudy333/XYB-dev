(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine2-mine2"],{"0f56":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"head"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.Islogin,expression:"Islogin"}],staticClass:"profile"},[i("v-uni-image",{staticClass:"image",attrs:{src:"https://gitee.com/jerry-mall/static/raw/master/images/touxiang.jpg"}}),i("v-uni-view",{staticClass:"jerry"},[i("v-uni-text",[t._v("文山学")])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.Islogin,expression:"!Islogin"}],staticClass:"profile profile2"},[i("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("立即登录")])],1),i("v-uni-view",{staticClass:"infomation",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.mine.apply(void 0,arguments)}}},[i("ul",[i("li",{staticClass:"myli_01"},[i("v-uni-text",{staticClass:"text"},[t._v("我的")]),i("v-uni-view",{staticClass:"li_flex"},[i("v-uni-view",{staticClass:"icon_01",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.myshow.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"http://127.0.0.1/imageServer/XYB-dev/bysell.png"}}),i("li",[i("v-uni-text",[t._v("信息")])],1)],1),i("v-uni-view",{staticClass:"icon_01",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.xiajia.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"http://127.0.0.1/imageServer/XYB-dev/yixiajia.png"}}),i("li",[i("v-uni-text",[t._v("二手")])],1)],1),i("v-uni-view",{staticClass:"icon_01",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shouchu.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"http://http://127.0.0.1/imageServer/XYB-dev/out.png"}}),i("li",[i("v-uni-text",[t._v("帮助")])],1)],1)],1)],1),i("li",{staticClass:"my",staticStyle:{"margin-top":"50rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.mycollect.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"http://127.0.0.1/imageServer/XYB-dev/mycollect.png"}}),i("v-uni-text",[t._v("我的收藏")]),i("v-uni-view",{staticClass:"square"})],1),i("li",{staticClass:"my",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.mypaper.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"http://127.0.0.1/imageServer/XYB-dev/zhitiao.png"}}),i("v-uni-text",[t._v("我扔的纸条")]),i("v-uni-view",{staticClass:"square",staticStyle:{"margin-left":"464rpx"}})],1),i("li",{staticClass:"my",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.myadvice.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"http://127.0.0.1/imageServer/XYB-dev/yijianfankui.png"}}),i("v-uni-text",[t._v("需求中心")]),i("v-uni-view",{staticClass:"square"})],1),i("li",{staticClass:"my",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.myabout.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"http://127.0.0.1/imageServer/XYB-dev/guanyuwom.png"}}),i("v-uni-text",[t._v("关于我们")]),i("v-uni-view",{staticClass:"square"})],1)])]),t.Islogin?i("v-uni-view",{staticClass:"bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.unistall.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("退出登录")])],1):t._e(),i("v-uni-view",{staticClass:"footer"},[i("v-uni-text",[t._v("2022 @ right")])],1)],1)},r=[]},"26cb":function(t,e,i){"use strict";(function(e){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function i(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:n});else{var i=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,i.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},o=n.__VUE_DEVTOOLS_GLOBAL_HOOK__;function r(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var i=a(e,(function(e){return e.original===t}));if(i)return i.copy;var n=Array.isArray(t)?[]:{};return e.push({original:t,copy:n}),Object.keys(t).forEach((function(i){n[i]=c(t[i],e)})),n}function s(t,e){Object.keys(t).forEach((function(i){return e(t[i],i)}))}function u(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var i=t.state;this.state=("function"===typeof i?i():i)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){s(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&s(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&s(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&s(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var v=function(t){this.register([],t,!1)};function h(t,e,i){if(e.update(i),i.modules)for(var n in i.modules){if(!e.getChild(n))return void 0;h(t.concat(n),e.getChild(n),i.modules[n])}}v.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},v.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,i){return e=e.getChild(i),t+(e.namespaced?i+"/":"")}),"")},v.prototype.update=function(t){h([],this.root,t)},v.prototype.register=function(t,e,i){var n=this;void 0===i&&(i=!0);var o=new d(e,i);if(0===t.length)this.root=o;else{var r=this.get(t.slice(0,-1));r.addChild(t[t.length-1],o)}e.modules&&s(e.modules,(function(e,o){n.register(t.concat(o),e,i)}))},v.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),i=t[t.length-1],n=e.getChild(i);n&&n.runtime&&e.removeChild(i)},v.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),i=t[t.length-1];return!!e&&e.hasChild(i)};var m;var g=function(t){var e=this;void 0===t&&(t={}),!m&&"undefined"!==typeof window&&window.Vue&&A(window.Vue);var i=t.plugins;void 0===i&&(i=[]);var n=t.strict;void 0===n&&(n=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new m,this._makeLocalGettersCache=Object.create(null);var o=this,a=this,c=a.dispatch,s=a.commit;this.dispatch=function(t,e){return c.call(o,t,e)},this.commit=function(t,e,i){return s.call(o,t,e,i)},this.strict=n;var u=this._modules.root.state;x(this,u,[],this._modules.root),w(this,u),i.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:m.config.devtools;l&&r(this)},y={state:{configurable:!0}};function b(t,e,i){return e.indexOf(t)<0&&(i&&i.prepend?e.unshift(t):e.push(t)),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var i=t.state;x(t,i,[],t._modules.root,!0),w(t,i,e)}function w(t,e,i){var n=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var o=t._wrappedGetters,r={};s(o,(function(e,i){r[i]=f(e,t),Object.defineProperty(t.getters,i,{get:function(){return t._vm[i]},enumerable:!0})}));var a=m.config.silent;m.config.silent=!0,t._vm=new m({data:{$$state:e},computed:r}),m.config.silent=a,t.strict&&M(t),n&&(i&&t._withCommit((function(){n._data.$$state=null})),m.nextTick((function(){return n.$destroy()})))}function x(t,e,i,n,o){var r=!i.length,a=t._modules.getNamespace(i);if(n.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=n),!r&&!o){var c=O(e,i.slice(0,-1)),s=i[i.length-1];t._withCommit((function(){m.set(c,s,n.state)}))}var u=n.context=C(t,a,i);n.forEachMutation((function(e,i){var n=a+i;$(t,n,e,u)})),n.forEachAction((function(e,i){var n=e.root?i:a+i,o=e.handler||e;E(t,n,o,u)})),n.forEachGetter((function(e,i){var n=a+i;j(t,n,e,u)})),n.forEachChild((function(n,r){x(t,e,i.concat(r),n,o)}))}function C(t,e,i){var n=""===e,o={dispatch:n?t.dispatch:function(i,n,o){var r=S(i,n,o),a=r.payload,c=r.options,s=r.type;return c&&c.root||(s=e+s),t.dispatch(s,a)},commit:n?t.commit:function(i,n,o){var r=S(i,n,o),a=r.payload,c=r.options,s=r.type;c&&c.root||(s=e+s),t.commit(s,a,c)}};return Object.defineProperties(o,{getters:{get:n?function(){return t.getters}:function(){return k(t,e)}},state:{get:function(){return O(t.state,i)}}}),o}function k(t,e){if(!t._makeLocalGettersCache[e]){var i={},n=e.length;Object.keys(t.getters).forEach((function(o){if(o.slice(0,n)===e){var r=o.slice(n);Object.defineProperty(i,r,{get:function(){return t.getters[o]},enumerable:!0})}})),t._makeLocalGettersCache[e]=i}return t._makeLocalGettersCache[e]}function $(t,e,i,n){var o=t._mutations[e]||(t._mutations[e]=[]);o.push((function(e){i.call(t,n.state,e)}))}function E(t,e,i,n){var o=t._actions[e]||(t._actions[e]=[]);o.push((function(e){var o=i.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},e);return l(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):o}))}function j(t,e,i,n){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return i(n.state,n.getters,t.state,t.getters)})}function M(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function O(t,e){return e.reduce((function(t,e){return t[e]}),t)}function S(t,e,i){return u(t)&&t.type&&(i=e,e=t,t=t.type),{type:t,payload:e,options:i}}function A(t){m&&t===m||(m=t,i(m))}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(t){0},g.prototype.commit=function(t,e,i){var n=this,o=S(t,e,i),r=o.type,a=o.payload,c=(o.options,{type:r,payload:a}),s=this._mutations[r];s&&(this._withCommit((function(){s.forEach((function(t){t(a)}))})),this._subscribers.slice().forEach((function(t){return t(c,n.state)})))},g.prototype.dispatch=function(t,e){var i=this,n=S(t,e),o=n.type,r=n.payload,a={type:o,payload:r},c=this._actions[o];if(c){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(a,i.state)}))}catch(u){0}var s=c.length>1?Promise.all(c.map((function(t){return t(r)}))):c[0](r);return new Promise((function(t,e){s.then((function(e){try{i._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(a,i.state)}))}catch(u){0}t(e)}),(function(t){try{i._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(a,i.state,t)}))}catch(u){0}e(t)}))}))}},g.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},g.prototype.subscribeAction=function(t,e){var i="function"===typeof t?{before:t}:t;return b(i,this._actionSubscribers,e)},g.prototype.watch=function(t,e,i){var n=this;return this._watcherVM.$watch((function(){return t(n.state,n.getters)}),e,i)},g.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},g.prototype.registerModule=function(t,e,i){void 0===i&&(i={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),x(this,this.state,t,this._modules.get(t),i.preserveState),w(this,this.state)},g.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var i=O(e.state,t.slice(0,-1));m.delete(i,t[t.length-1])})),_(this)},g.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},g.prototype[[104,111,116,85,112,100,97,116,101].map(t=>String.fromCharCode(t)).join("")]=function(t){this._modules.update(t),_(this,!0)},g.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(g.prototype,y);var G=X((function(t,e){var i={};return Y(e).forEach((function(e){var n=e.key,o=e.val;i[n]=function(){var e=this.$store.state,i=this.$store.getters;if(t){var n=H(this.$store,"mapState",t);if(!n)return;e=n.context.state,i=n.context.getters}return"function"===typeof o?o.call(this,e,i):e[o]},i[n].vuex=!0})),i})),N=X((function(t,e){var i={};return Y(e).forEach((function(e){var n=e.key,o=e.val;i[n]=function(){var e=[],i=arguments.length;while(i--)e[i]=arguments[i];var n=this.$store.commit;if(t){var r=H(this.$store,"mapMutations",t);if(!r)return;n=r.context.commit}return"function"===typeof o?o.apply(this,[n].concat(e)):n.apply(this.$store,[o].concat(e))}})),i})),P=X((function(t,e){var i={};return Y(e).forEach((function(e){var n=e.key,o=e.val;o=t+o,i[n]=function(){if(!t||H(this.$store,"mapGetters",t))return this.$store.getters[o]},i[n].vuex=!0})),i})),B=X((function(t,e){var i={};return Y(e).forEach((function(e){var n=e.key,o=e.val;i[n]=function(){var e=[],i=arguments.length;while(i--)e[i]=arguments[i];var n=this.$store.dispatch;if(t){var r=H(this.$store,"mapActions",t);if(!r)return;n=r.context.dispatch}return"function"===typeof o?o.apply(this,[n].concat(e)):n.apply(this.$store,[o].concat(e))}})),i})),L=function(t){return{mapState:G.bind(null,t),mapGetters:P.bind(null,t),mapMutations:N.bind(null,t),mapActions:B.bind(null,t)}};function Y(t){return z(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function z(t){return Array.isArray(t)||u(t)}function X(t){return function(e,i){return"string"!==typeof e?(i=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,i)}}function H(t,e,i){var n=t._modulesNamespaceMap[i];return n}function I(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var i=t.filter;void 0===i&&(i=function(t,e,i){return!0});var n=t.transformer;void 0===n&&(n=function(t){return t});var o=t.mutationTransformer;void 0===o&&(o=function(t){return t});var r=t.actionFilter;void 0===r&&(r=function(t,e){return!0});var a=t.actionTransformer;void 0===a&&(a=function(t){return t});var s=t.logMutations;void 0===s&&(s=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var f=c(t.state);"undefined"!==typeof l&&(s&&t.subscribe((function(t,r){var a=c(r);if(i(t,f,a)){var s=F(),u=o(t),d="mutation "+t.type+s;V(l,d,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",n(f)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",n(a)),q(l)}f=a})),u&&t.subscribeAction((function(t,i){if(r(t,i)){var n=F(),o=a(t),c="action "+t.type+n;V(l,c,e),l.log("%c action","color: #03A9F4; font-weight: bold",o),q(l)}})))}}function V(t,e,i){var n=i?t.groupCollapsed:t.group;try{n.call(t,e)}catch(o){t.log(e)}}function q(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function F(){var t=new Date;return" @ "+R(t.getHours(),2)+":"+R(t.getMinutes(),2)+":"+R(t.getSeconds(),2)+"."+R(t.getMilliseconds(),3)}function T(t,e){return new Array(e+1).join(t)}function R(t,e){return T("0",e-t.toString().length)+t}var D={Store:g,install:A,version:"3.6.2",mapState:G,mapMutations:N,mapGetters:P,mapActions:B,createNamespacedHelpers:L,createLogger:I};t.exports=D}).call(this,i("c8ba"))},5305:function(t,e,i){var n=i("cd68");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("745f37ac",n,!0,{sourceMap:!1,shadowMode:!1})},"718f":function(t,e,i){"use strict";var n=i("5305"),o=i.n(n);o.a},"90ae":function(t,e,i){"use strict";i.r(e);var n=i("ad80"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},ad80:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("26cb");var n={data:function(){return{Islogin:!1}},methods:{}};e.default=n},bcf9:function(t,e,i){"use strict";i.r(e);var n=i("0f56"),o=i("90ae");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("718f");var a,c=i("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"619d5bca",null,!1,n["a"],a);e["default"]=s.exports},cd68:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-619d5bca]{background-color:#eee}.profile2[data-v-619d5bca]{text-align:center}.profile2 uni-button[data-v-619d5bca]{-webkit-transform:translateY(%?75?%);transform:translateY(%?75?%);width:%?400?%;border-radius:%?200?%;height:%?80?%;line-height:%?80?%;text-align:center;background-color:#3385ff;color:#fff;font-size:13px}.profile[data-v-619d5bca]{background-color:#fff;width:100%;height:%?230?%;line-height:%?230?%}.profile uni-view[data-v-619d5bca]{display:inline-block}.profile .image0[data-v-619d5bca]{width:%?65?%;height:%?65?%;margin-left:%?200?%}.profile .jerry[data-v-619d5bca]{display:inline-block;margin-left:%?35?%;position:relative}.profile .jerry uni-text[data-v-619d5bca]:nth-child(2){color:#afafaf;font-size:%?12?%;position:relative;top:%?46?%;left:%?-76?%}.profile .image[data-v-619d5bca]{width:%?150?%;height:%?150?%;border-radius:%?75?%;overflow:hidden;vertical-align:middle}ul li[data-v-619d5bca]{list-style:none}ul[data-v-619d5bca]{list-style:none;padding:0}.infomation[data-v-619d5bca]{margin-top:%?20?%;background-color:#fff}.myli_01 .text[data-v-619d5bca]{font-size:%?13?%;margin-left:%?55?%}.myli_01 .li_flex[data-v-619d5bca]{margin-left:%?70?%;display:flex;flex:1;margin-top:%?15?%}.myli_01 .li_flex uni-image[data-v-619d5bca]{width:%?110?%;height:%?110?%}.myli_01 .li_flex uni-view[data-v-619d5bca]{width:32%}.myli_01 .li_flex .icon_01 li[data-v-619d5bca]{margin-left:%?17?%}.myli_01 .li_flex .icon_01 li uni-text[data-v-619d5bca]{font-size:13px}.my[data-v-619d5bca]{height:%?80?%;line-height:%?80?%;width:100%;border-bottom:1px solid #eee}.my uni-image[data-v-619d5bca]{margin-left:%?55?%;width:%?30?%;height:%?30?%;vertical-align:middle}.my uni-text[data-v-619d5bca]{margin-left:%?25?%;font-size:13px;color:#a7a7a7}.my .square[data-v-619d5bca]{display:inline-block;border:1px solid #a7a7a7;border-bottom:0;border-left:0;width:%?20?%;height:%?20?%;-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:%?490?%}.bottom[data-v-619d5bca]{margin-top:%?20?%;line-height:%?80?%;text-align:center;height:%?80?%;background-color:#fff;width:100%}.bottom uni-text[data-v-619d5bca]{font-size:13px;color:#a7a7a7}.footer[data-v-619d5bca]{margin-top:%?20?%;width:100%;height:%?50?%;line-height:%?50?%;text-align:center}.footer uni-text[data-v-619d5bca]{font-size:11px;color:#a7a7a7}body.?%PAGE?%[data-v-619d5bca]{background-color:#eee}',""]),t.exports=e}}]);