(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-mine"],{"4f18":function(t,a,e){"use strict";e.r(a);var i=e("dd0c"),n=e("f93c");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("8e1b");var o,d=e("f0c5"),r=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"eaf0d81a",null,!1,i["a"],o);a["default"]=r.exports},"4f7d":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{}},methods:{}};a.default=i},"8e1b":function(t,a,e){"use strict";var i=e("ee77"),n=e.n(i);n.a},"9ff3":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".top_box[data-v-eaf0d81a]{width:100%;padding:%?40?% %?30?% %?30?% %?30?%;display:flex;box-sizing:border-box;border-bottom:%?1?% solid #eee}.top_1[data-v-eaf0d81a]{display:flex;flex-direction:column;width:70%;justify-content:space-between;height:%?140?%;box-sizing:border-box;padding:%?10?% %?20?%;margin:0 %?30?%}.top_1_1[data-v-eaf0d81a]{font-size:%?40?%;letter-spacing:%?2?%}.top_1_2[data-v-eaf0d81a]{font-size:%?30?%;color:#919191;line-height:%?42?%}.top_2[data-v-eaf0d81a]{width:30%;height:%?140?%;display:flex;justify-content:center;align-items:center}.avator[data-v-eaf0d81a]{width:%?140?%;height:%?140?%;border-radius:%?70?%;overflow:hidden}.avator uni-image[data-v-eaf0d81a]{width:%?140?%;height:%?140?%}.center_box[data-v-eaf0d81a]{width:100%;padding:%?20?% 0;height:%?200?%;display:flex;align-items:center;justify-content:space-around;box-sizing:border-box}.center_1[data-v-eaf0d81a]{width:%?160?%;height:%?160?%;display:flex;flex-direction:column;align-items:center;justify-content:center}.center_1 uni-view[data-v-eaf0d81a]{font-size:%?26?%;padding-top:%?20?%}.center_1 uni-image[data-v-eaf0d81a]{width:%?60?%;height:%?60?%}.blank[data-v-eaf0d81a]{width:100%;height:%?20?%;background:#f4f4f4}.bottom_box[data-v-eaf0d81a]{width:100%;display:flex;box-sizing:border-box;padding:0 %?40?%;flex-direction:column}.bottom_card[data-v-eaf0d81a]{position:relative;padding:%?0?% %?15?%;width:100%;height:%?124?%;display:flex;align-items:center;justify-content:space-between;border-bottom:%?1?% solid #eee;border-radius:%?20?%;background:#fff}.bottom_card uni-button[data-v-eaf0d81a]{width:100%;height:100%;position:absolute;left:0;top:0;opacity:.01}.bottom_card uni-image[data-v-eaf0d81a]{width:%?14?%;height:%?18?%}.bottom_1[data-v-eaf0d81a]{display:flex;height:100%;align-items:center}.bottom_1 uni-image[data-v-eaf0d81a]{width:%?40?%;height:%?40?%}.bottom_1 uni-view[data-v-eaf0d81a]{font-size:%?30?%;letter-spacing:%?3?%;padding-left:%?30?%}.share_contain[data-v-eaf0d81a]{display:flex;flex-direction:column;align-items:center}.share_box[data-v-eaf0d81a]{display:flex;align-items:center;padding:%?10?% %?20?% %?25?% %?20?%;box-sizing:border-box;width:%?500?%;justify-content:space-around}.share_one[data-v-eaf0d81a]{display:flex;position:relative;flex-direction:column;align-items:center}.share_one uni-image[data-v-eaf0d81a]{width:%?70?%;height:%?70?%}.share_one uni-view[data-v-eaf0d81a]{padding-top:%?20?%;font-size:%?26?%}.share_title[data-v-eaf0d81a]{font-size:%?30?%;letter-spacing:%?3?%;padding:%?16?%}.share_border[data-v-eaf0d81a]{margin-top:%?20?%;display:flex;box-sizing:border-box;height:%?6?%;width:%?60?%;border-radius:%?3?%;border-bottom:%?6?% solid #fbbd08}.share_button[data-v-eaf0d81a]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:.01;border:none}.share_button[data-v-eaf0d81a]::after{border:none}.share_bor[data-v-eaf0d81a]{height:%?60?%;width:%?1?%;border-left:%?1?% solid #e7e7e7}",""]),t.exports=a},dd0c:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("v-uni-view",{staticClass:"top_box"},[e("v-uni-view",{staticClass:"top_1"},[t.isLogin?e("v-uni-view",{staticClass:"top_1_1"},[e("v-uni-open-data",{attrs:{type:"userNickName"}})],1):e("v-uni-view",{staticClass:"top_1_1"},[e("v-uni-button",{attrs:{"open-type":"getUserInfo",bindgetuserinfo:"login",type:"mini"}},[t._v("点击登录")])],1),t.isLogin?t._e():e("v-uni-view",{staticClass:"top_1_2"},[t._v("一秒登录，体验所有功能")]),t.isLogin?e("v-uni-view",{staticClass:"top_1_2",attrs:{bindtap:"go","data-go":"/pages/edit/edit","data-status":"1"}},[t._v("点击修改资料")]):t._e()],1),e("v-uni-view",{staticClass:"top_2"},[e("v-uni-view",{staticClass:"avator"},[t.isLogin?e("v-uni-open-data",{attrs:{type:"userAvatarUrl"}}):t._e(),t.isLogin?t._e():e("v-uni-image",{attrs:{src:"/static/mine/user.png"}})],1)],1)],1),e("v-uni-view",{staticClass:"center_box"},[e("v-uni-view",{staticClass:"center_1",attrs:{"data-go":"/pages/sell/list/list","data-status":"1"}},[e("v-uni-image",{attrs:{src:"/static/mine/history.png"}}),e("v-uni-view",[t._v("我的发布")])],1),e("v-uni-view",{staticClass:"center_1",attrs:{bindtap:"go","data-go":"/pages/order/list/list","data-status":"1"}},[e("v-uni-image",{attrs:{src:"/static/mine/used1.png"}}),e("v-uni-view",[t._v("我的二手")])],1),e("v-uni-view",{staticClass:"center_1",attrs:{bindtap:"go","data-go":"/pages/help/help"}},[e("v-uni-image",{attrs:{src:"/static/mine/help.png"}}),e("v-uni-view",[t._v("帮助中心")])],1)],1),e("v-uni-view",{staticClass:"blank"}),e("v-uni-view",{staticClass:"bottom_box"},[e("v-uni-view",{staticClass:"bottom_card",attrs:{bindtap:"go","data-go":"/pages/kefu/kefu","data-status":"1"}},[e("v-uni-view",{staticClass:"bottom_1"},[e("v-uni-image",{attrs:{src:"/static/mine/kefu.png"}}),e("v-uni-view",[t._v("联系客服")])],1),e("v-uni-image",{attrs:{src:"/static/mine/right-arrow.png"}})],1),e("v-uni-view",{staticClass:"bottom_card"},[e("v-uni-view",{staticClass:"bottom_1"},[e("v-uni-image",{attrs:{src:"/static/mine/feedback.png"}}),e("v-uni-view",[t._v("问题反馈")])],1),e("v-uni-image",{attrs:{src:"/static/mine/right-arrow.png"}}),e("v-uni-button",{attrs:{"open-type":"feedback"}})],1),e("v-uni-view",{staticClass:"bottom_card",attrs:{bindtap:"showShare"}},[e("v-uni-view",{staticClass:"bottom_1"},[e("v-uni-image",{attrs:{src:"/static/mine/share1.png"}}),e("v-uni-view",[t._v("好用分享")])],1),e("v-uni-image",{attrs:{src:"/static/mine/right-arrow.png"}})],1),e("v-uni-view",{staticClass:"bottom_card",attrs:{bindtap:"go","data-go":"/pages/about/about"}},[e("v-uni-view",{staticClass:"bottom_1"},[e("v-uni-image",{attrs:{src:"/static/mine/guanyu.png"}}),e("v-uni-view",[t._v("关于程序")])],1),e("v-uni-image",{attrs:{src:"/static/mine/right-arrow.png"}})],1)],1)],1)},s=[]},ee77:function(t,a,e){var i=e("9ff3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("f140e2d4",i,!0,{sourceMap:!1,shadowMode:!1})},f93c:function(t,a,e){"use strict";e.r(a);var i=e("4f7d"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a}}]);