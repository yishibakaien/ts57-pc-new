webpackJsonp([5],{1022:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(945),r=a.n(n),o=a(964);e.default={data:function(){return{classData:o.a.cargo,Filter:{sort:"111"},searchForm:{keyWord:"",startTime:"",endTime:""},checkbox:{hideList:!1,data:{id:1}},list:[{products:[{src:"/static/images/tuijian.jpg",id:222,name:"111",price:"222"},{src:"/static/images/tuijian.jpg",id:222,name:"111",price:"222"}],address:"addaasdf",price:"53435",author:"庄志勇",listNum:"2017080122223333"},{products:[{src:"/static/images/tuijian.jpg",id:222,name:"111",price:"222"},{src:"/static/images/tuijian.jpg",id:222,name:"111",price:"222"}],address:"addaasdf",price:"53435"}]}},components:{tsTitle:r.a},computed:{logistics:function(){return"卖家包邮"}},methods:{hanleFilterSort:function(t){console.log(t)},submitForm:function(t){console.log(t)},handleHideList:function(){this.checkbox.hideList&&console.log(this.checkbox.hideList)}}}},1023:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(945),r=a.n(n);e.default={components:{tsTitle:r.a}}},1024:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(945),r=a.n(n);e.default={components:{tsTitle:r.a}}},1025:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:""}}},1026:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(30),r=a.n(n),o=a(29),i=a.n(o),s=a(219);e.default={components:{tsHeader:s.d,tsNav:s.e,search:s.f},data:function(){return{title:"账户信息",navItems:[{context:"大货订单",path:"cargo"},{context:"剪版订单",path:"cutVersion"},{context:"剪样订单",path:"cuttings"}]}},created:function(){var t=this;return i()(r.a.mark(function e(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()}}},1102:function(t,e,a){e=t.exports=a(830)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"CuttingsManager.vue",sourceRoot:""}])},1114:function(t,e,a){e=t.exports=a(830)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"CutVersionManager.vue",sourceRoot:""}])},1135:function(t,e,a){e=t.exports=a(830)(),e.push([t.i,'.order[data-v-55c6c67f]{width:100%}.order-container[data-v-55c6c67f]{width:1200px;margin:50px auto;background:#fff}.order-container-nav[data-v-55c6c67f]{float:left;width:256px;min-height:728px;background:#fff;text-align:center}.order-container-nav h1[data-v-55c6c67f]{margin:50px 0;font-size:24px;font-weight:400;color:#333}.order-container-nav h1[data-v-55c6c67f]:after{content:"";display:block;margin:15px auto 30px;width:85%;height:1px;background:#eaeaea}.order-container-nav li[data-v-55c6c67f]{margin-bottom:20px;font-size:16px;color:#333;cursor:pointer;text-align:left}.order-container-nav li .active span[data-v-55c6c67f]{position:relative;color:#5296fd}.order-container-nav li .active span[data-v-55c6c67f]:after{content:"";display:block;position:absolute;left:-16px;top:-2px;width:4px;height:20px;background:#5296fd}.order-container-nav li span[data-v-55c6c67f]{margin-left:86px}.order-container-nav li span[data-v-55c6c67f]:hover{color:#5296fd}.order-container-item[data-v-55c6c67f]{float:left;padding:0 20px;width:904px;min-height:728px;background:#fff}',"",{version:3,sources:["/Users/hezhicheng/ts57_PC/src/pages/order/index.vue"],names:[],mappings:"AACA,wBACE,UAAY,CACb,AACD,kCACI,aAAc,AACd,iBAAkB,AAClB,eAAiB,CACpB,AACD,sCACM,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,gBAAiB,AACjB,iBAAmB,CACxB,AACD,yCACQ,cAAe,AACf,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACnB,AACD,+CACU,WAAY,AACZ,cAAe,AACf,sBAAuB,AACvB,UAAW,AACX,WAAY,AACZ,kBAAoB,CAC7B,AACD,yCACQ,mBAAoB,AACpB,eAAgB,AAChB,WAAY,AACZ,eAAgB,AAChB,eAAiB,CACxB,AACD,sDACU,kBAAmB,AACnB,aAAe,CACxB,AACD,4DACY,WAAY,AACZ,cAAe,AACf,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,UAAW,AACX,YAAa,AACb,kBAAoB,CAC/B,AACD,8CACU,gBAAkB,CAC3B,AACD,oDACY,aAAe,CAC1B,AACD,uCACM,WAAY,AACZ,eAAgB,AAChB,YAAa,AACb,iBAAkB,AAClB,eAAiB,CACtB",file:"index.vue",sourcesContent:["\n.order[data-v-55c6c67f] {\n  width: 100%;\n}\n.order-container[data-v-55c6c67f] {\n    width: 1200px;\n    margin: 50px auto;\n    background: #fff;\n}\n.order-container-nav[data-v-55c6c67f] {\n      float: left;\n      width: 256px;\n      min-height: 728px;\n      background: #fff;\n      text-align: center;\n}\n.order-container-nav h1[data-v-55c6c67f] {\n        margin: 50px 0;\n        font-size: 24px;\n        font-weight: 400;\n        color: #333;\n}\n.order-container-nav h1[data-v-55c6c67f]::after {\n          content: '';\n          display: block;\n          margin: 15px auto 30px;\n          width: 85%;\n          height: 1px;\n          background: #eaeaea;\n}\n.order-container-nav li[data-v-55c6c67f] {\n        margin-bottom: 20px;\n        font-size: 16px;\n        color: #333;\n        cursor: pointer;\n        text-align: left;\n}\n.order-container-nav li .active span[data-v-55c6c67f] {\n          position: relative;\n          color: #5296fd;\n}\n.order-container-nav li .active span[data-v-55c6c67f]::after {\n            content: '';\n            display: block;\n            position: absolute;\n            left: -16px;\n            top: -2px;\n            width: 4px;\n            height: 20px;\n            background: #5296fd;\n}\n.order-container-nav li span[data-v-55c6c67f] {\n          margin-left: 86px;\n}\n.order-container-nav li span[data-v-55c6c67f]:hover {\n            color: #5296fd;\n}\n.order-container-item[data-v-55c6c67f] {\n      float: left;\n      padding: 0 20px;\n      width: 904px;\n      min-height: 728px;\n      background: #fff;\n}\n"],sourceRoot:""}])},1152:function(t,e,a){e=t.exports=a(830)(),e.push([t.i,".order-cargo-wrap--searchBox[data-v-6a9e56ae]{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;padding:10px 0;width:100%;color:#333;border:1px solid #e5e5e5}.order-cargo-wrap--checkBox[data-v-6a9e56ae]{margin:10px 0}.order-cargo-wrap--contentBox[data-v-6a9e56ae]{margin-bottom:50px}.order-cargo-wrap--contentBox .title[data-v-6a9e56ae]{font-size:14px;color:#666}.order-cargo-wrap--contentBox .title .column[data-v-6a9e56ae]{margin-left:60px}.order-cargo-wrap--contentBox .detail[data-v-6a9e56ae]{margin-left:8px;color:#666;font-size:14px}.order-cargo-wrap--contentBox .detail-item[data-v-6a9e56ae]{display:block}.order-cargo-wrap--contentBox .detail-num[data-v-6a9e56ae]{margin-bottom:15px}","",{version:3,sources:["/Users/hezhicheng/ts57_PC/src/pages/order/children/CargoManager.vue"],names:[],mappings:"AACA,8CACE,+BAAgC,AACrB,4BAA6B,AAChC,uBAAwB,AAChC,eAAyB,AACzB,WAAY,AACZ,WAAY,AACZ,wBAA0B,CAC3B,AACD,6CACE,aAAe,CAChB,AACD,+CACE,kBAAoB,CACrB,AACD,sDACI,eAAgB,AAChB,UAAY,CACf,AACD,8DACM,gBAAkB,CACvB,AACD,uDACI,gBAAiB,AACjB,WAAY,AACZ,cAAgB,CACnB,AACD,4DACM,aAAe,CACpB,AACD,2DACM,kBAAoB,CACzB",file:"CargoManager.vue",sourcesContent:["\n.order-cargo-wrap--searchBox[data-v-6a9e56ae] {\n  -webkit-box-sizing: content-box;\n             -moz-box-sizing: content-box;\n          box-sizing: content-box;\n  padding: 10px 0 10px 0px;\n  width: 100%;\n  color: #333;\n  border: 1px solid #e5e5e5;\n}\n.order-cargo-wrap--checkBox[data-v-6a9e56ae] {\n  margin: 10px 0;\n}\n.order-cargo-wrap--contentBox[data-v-6a9e56ae] {\n  margin-bottom: 50px;\n}\n.order-cargo-wrap--contentBox .title[data-v-6a9e56ae] {\n    font-size: 14px;\n    color: #666;\n}\n.order-cargo-wrap--contentBox .title .column[data-v-6a9e56ae] {\n      margin-left: 60px;\n}\n.order-cargo-wrap--contentBox .detail[data-v-6a9e56ae] {\n    margin-left: 8px;\n    color: #666;\n    font-size: 14px;\n}\n.order-cargo-wrap--contentBox .detail-item[data-v-6a9e56ae] {\n      display: block;\n}\n.order-cargo-wrap--contentBox .detail-num[data-v-6a9e56ae] {\n      margin-bottom: 15px;\n}\n"],sourceRoot:""}])},1156:function(t,e,a){e=t.exports=a(830)(),e.push([t.i,".order-title[data-v-71a3bb98]{margin-bottom:30px;border-bottom:1px solid #eaeaea}.order-title h2[data-v-71a3bb98]{display:inline-block;padding:0 15px;margin-top:50px;margin-bottom:15px;width:200px;font-size:24px;font-weight:400;color:#333}","",{version:3,sources:["/Users/hezhicheng/ts57_PC/src/pages/order/component/order-title.vue"],names:[],mappings:"AACA,8BACE,mBAAoB,AACpB,+BAAiC,CAClC,AACD,iCACI,qBAAsB,AACtB,eAAgB,AAChB,gBAAiB,AACjB,mBAAoB,AACpB,YAAa,AACb,eAAgB,AAChB,gBAAiB,AACjB,UAAY,CACf",file:"order-title.vue",sourcesContent:["\n.order-title[data-v-71a3bb98] {\n  margin-bottom: 30px;\n  border-bottom: 1px solid #eaeaea;\n}\n.order-title h2[data-v-71a3bb98] {\n    display: inline-block;\n    padding: 0 15px;\n    margin-top: 50px;\n    margin-bottom: 15px;\n    width: 200px;\n    font-size: 24px;\n    font-weight: 400;\n    color: #333;\n}\n"],sourceRoot:""}])},1213:function(t,e,a){var n=a(1102);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(831)("77e6a9ae",n,!0)},1225:function(t,e,a){var n=a(1114);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(831)("17645ae9",n,!0)},1246:function(t,e,a){var n=a(1135);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(831)("01eb1c89",n,!0)},1263:function(t,e,a){var n=a(1152);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(831)("40efffba",n,!0)},1267:function(t,e,a){var n=a(1156);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(831)("25f8bb58",n,!0)},1361:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-cargo"},[a("ts-title",{attrs:{title:"剪样订单管理"}})],1)},staticRenderFns:[]}},1373:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-cargo"},[a("ts-title",{attrs:{title:"剪版订单管理"}})],1)},staticRenderFns:[]}},1393:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("ts-header",[a("search")],1),t._v(" "),a("ts-nav"),t._v(" "),a("div",{staticClass:"order-container clearfix"},[a("div",{staticClass:"order-container-nav"},[a("h1",[t._v("订单管理")]),t._v(" "),a("ul",t._l(t.navItems,function(e){return a("li",{class:{"nav-b":e.isBorder}},[a("router-link",{attrs:{to:e.path}},[a("span",[t._v("\n\t\t\t\t\t\t"+t._s(e.context)+"\n\t\t\t\t\t\t")])])],1)}))]),t._v(" "),a("div",{staticClass:"order-container-item"},[a("div",{staticClass:"item-box"},[a("router-view")],1)])])],1)},staticRenderFns:[]}},1408:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-cargo"},[a("ts-title",{attrs:{title:"大货订单管理"}}),t._v(" "),a("div",{staticClass:"order-cargo-wrap"},[a("ts-filter",{attrs:{title:"订单分类"}},[a("ts-radio-group",{on:{change:t.hanleFilterSort},model:{value:t.Filter.sort,callback:function(e){t.Filter.sort=e},expression:"Filter.sort"}},t._l(t.classData,function(e){return a("ts-radio",{attrs:{label:e.label}},[t._v(t._s(e.name)),a("span",{staticStyle:{color:"#4C93FD"}},[t._v(t._s(e.label))])])}))],1),t._v(" "),a("div",{staticClass:"order-cargo-wrap--searchBox"},[a("ts-form",{ref:"searchForm",attrs:{model:t.searchForm,rules:t.rules,inline:"","label-width":"85px"}},[a("ts-form-item",{staticStyle:{margin:"0 0 0 20px"},attrs:{label:"订单关键词",prop:"keyWord"}},[a("ts-input",{attrs:{placeholder:"货品名称 / 订单号"},model:{value:t.searchForm.keyWord,callback:function(e){t.searchForm.keyWord=e},expression:"searchForm.keyWord"}})],1),t._v(" "),a("ts-form-item",{staticStyle:{"margin-bottom":"0",width:"260px"},attrs:{label:"下单时间",prop:"startTime"}},[a("ts-date-picker",{attrs:{placeholder:"选择起始时间",backward:""},model:{value:t.searchForm.startTime,callback:function(e){t.searchForm.startTime=e},expression:"searchForm.startTime"}})],1),t._v(" "),a("label",{staticStyle:{padding:"5px 10px 0 0","line-height":"35px"}},[t._v("至")]),t._v(" "),a("ts-form-item",{staticStyle:{"margin-bottom":"0",width:"185px"},attrs:{prop:"endTime",marginLeft:!1}},[a("ts-date-picker",{attrs:{placeholder:"选择结束时间",backward:""},model:{value:t.searchForm.endTime,callback:function(e){t.searchForm.endTime=e},expression:"searchForm.endTime"}})],1),t._v(" "),a("ts-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("searchForm")}}},[t._v("搜索")])],1)],1),t._v(" "),a("div",{staticClass:"order-cargo-wrap--checkBox"},[a("ts-checkbox",{attrs:{label:t.checkbox.data.id},on:{change:t.handleHideList},model:{value:t.checkbox.hideList,callback:function(e){t.checkbox.hideList=e},expression:"checkbox.hideList"}},[t._v("隐藏关闭的交易订单")])],1),t._v(" "),a("div",{staticClass:"order-cargo-wrap--contentBox"},[a("ts-menu-table",{staticStyle:{"margin-bottom":"15px"},attrs:{header:!1}},[a("ts-menu-table-item",{attrs:{width:"260"}},[t._v("订单详情")]),t._v(" "),a("ts-menu-table-item",{attrs:{width:"114"}},[t._v("运费")]),t._v(" "),a("ts-menu-table-item",{attrs:{width:"80"}},[t._v("备货期")]),t._v(" "),a("ts-menu-table-item",{attrs:{width:"140"}},[t._v("金额")]),t._v(" "),a("ts-menu-table-item",{attrs:{width:"80"}},[t._v("订单状态")]),t._v(" "),a("ts-menu-table-item",{attrs:{width:"100"}},[t._v("操作")])],1),t._v(" "),a("ts-menu",{attrs:{prop:t.list}},t._l(t.list,function(e){return a("ts-menu-table",{attrs:{content:""}},[a("div",{staticClass:"title",slot:"header-left"},[a("span",[t._v("\n\t\t\t\t\t\t\t"+t._s(e.author)+"\n\t\t\t\t\t\t")]),t._v(" "),a("span",{staticClass:"column"},[t._v("订单号："+t._s(e.listNum))]),t._v(" "),a("span",{staticClass:"column"},[t._v("下单时间："+t._s(e.time))])]),t._v(" "),a("ts-menu-table-item",{staticStyle:{padding:"0"},attrs:{width:"260"}},t._l(e.products,function(e){return a("ts-row",{staticStyle:{display:"block"}},[a("ts-col",{staticClass:"clearfix",staticStyle:{"text-align":"left"},attrs:{span:12}},[a("ts-image",{staticClass:"fl",attrs:{width:"80",height:"80",src:e.src}}),t._v(" "),a("div",{staticClass:"detail fl"},[a("span",{staticClass:"detail-item detail-num"},[t._v(t._s("#"+e.id))]),t._v(" "),a("span",{staticClass:"detail-item"},[t._v("大货交易价：¥ "),a("em",[t._v(t._s(e.price+" / ")+t._s(e.danwei||"码"))])]),t._v(" "),a("span",{staticClass:"detail-item"},[t._v("数量："+t._s(e.price)+t._s(e.danwei||"码")),a("em")])])],1)],1)})),t._v(" "),a("ts-menu-table-item",{attrs:{width:"114"}},[t._v(t._s(t.logistics))]),t._v(" "),a("ts-menu-table-item",{attrs:{width:"80"}},[t._v(t._s(e.price+"天"))]),t._v(" "),a("ts-menu-table-item",{attrs:{width:"140"}},[t._v(t._s(e.price))]),t._v(" "),a("ts-menu-table-item",{attrs:{width:"80"}},[t._v(t._s(e.price))]),t._v(" "),a("ts-menu-table-item",{attrs:{width:"100"}},[t._v(t._s(e.price))])],1)}))],1)],1)],1)},staticRenderFns:[]}},1414:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-title"},[a("h2",[t._v(t._s(t.title))])])},staticRenderFns:[]}},866:function(t,e,a){a(1263);var n=a(1)(a(1022),a(1408),"data-v-6a9e56ae",null);t.exports=n.exports},867:function(t,e,a){a(1225);var n=a(1)(a(1023),a(1373),"data-v-33c4ac8a",null);t.exports=n.exports},868:function(t,e,a){a(1213);var n=a(1)(a(1024),a(1361),"data-v-20042f1d",null);t.exports=n.exports},869:function(t,e,a){a(1246);var n=a(1)(a(1026),a(1393),"data-v-55c6c67f",null);t.exports=n.exports},945:function(t,e,a){a(1267);var n=a(1)(a(1025),a(1414),"data-v-71a3bb98",null);t.exports=n.exports},964:function(t,e,a){"use strict";var n={cargo:[{label:"111",name:"全部订单"},{label:"222",name:"待确认"},{label:"333",name:"待付款"},{label:"444",name:"待发货"},{label:"555",name:"已发货"},{label:"666",name:"售后中"},{label:"777",name:"已成交"}],cuttings:[{label:"111",name:"全部订单"},{label:"333",name:"待付款"},{label:"444",name:"待发版"},{label:"555",name:"已发版"},{label:"777",name:"已成交"},{label:"666",name:"售后中"}],cutVersion:[{label:"111",name:"全部订单"},{label:"333",name:"待寄样"},{label:"777",name:"已寄样"},{label:"666",name:"已完成"}]};e.a=n}});
//# sourceMappingURL=5.bf98bb4186ecfdb460a7.js.map