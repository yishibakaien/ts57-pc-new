webpackJsonp([14],{1016:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(219),i=n(28),s=n(221);e.default={data:function(){return{param:{businessId:"",businessType:3},yesOrNo:!1}},components:{collection:a.l},props:{obj:{type:Object}},watch:{obj:function(t){1===t.isFavorite?this.yesOrNo=!0:this.yesOrNo=!1}},methods:{goSupplyListPage:function(t){this.goto("/shop/"+t.companyId+"/supplies")},collectionMethod:function(){var t=this;this.param.businessId=this.obj.id,n.i(i._30)(this.param).then(function(e){0===e.data.code&&(n.i(s.a)({type:"success",message:e.data.message}),t.yesOrNo=!t.yesOrNo)}).catch()}}}},1017:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(219),i=n(28);e.default={data:function(){return{userType:!1,pageNum:1,pageMax:10,paramListSupply:{pageNo:1,pageSize:8,userId:""},obj:{}}},props:{item:{type:Object}},watch:{item:function(t){var e=this;1===this.$store.state.user.userInfo.userType&&(this.userType=!0),2===this.$store.state.user.userInfo.userType&&(this.userType=!1),this.paramListSupply.userId=this.item.userId,n.i(i._57)(this.paramListSupply).then(function(t){0===t.data.code&&(e.obj=t.data.data,e.pageNum=t.data.data.pageNO,e.pageMax=t.data.data.totalPage)}).catch()}},components:{pageBar:a.j},created:function(){},methods:{listUserCompanySupplysMethod:function(){var t=this;this.paramListSupply.userId=this.item.userId,n.i(i._57)(this.paramListSupply).then(function(e){0===e.data.code&&(t.obj=e.data.data,t.pageNum=e.data.data.pageNO,t.pageMax=e.data.data.totalPage)}).catch()},selectFirstPage:function(){this.paramListSupply.pageNo=1,this.listUserCompanySupplysMethod()},selectLastPage:function(){var t=this;t.paramListSupply.pageNo=t.pageMax,this.listUserCompanySupplysMethod()},upPage:function(){var t=this;t.pageNum<=1||(--t.pageNum,t.paramListSupply.pageNo=t.pageNum,this.listUserCompanySupplysMethod())},downPage:function(){var t=this;t.pageNum>=t.pageMax||(++t.pageNum,t.paramListSupply.pageNo=t.pageNum,this.listUserCompanySupplysMethod())},goDetail:function(t){this.goto("/supplyDetailPage?supplyId="+this.obj.list[t].id)},goStore:function(){this.goto("/shop/"+this.item.companyId)}}}},1018:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(63),i=n.n(a),s=n(219),o=n(1327),p=n.n(o),A=n(1328),l=n.n(A),r=n(28),c=n(47);e.default={data:function(){return{param:{id:""},resData:{},pageData:""}},components:{vHeader:s.d,vNav:s.e,search:s.f,supplyContent:p.a,supplyList:l.a},computed:i()({},n.i(c.a)(["userInfo"])),created:function(){1===this.userInfo.userType?this.$router.push("/"):this.getCompanySupplyMethod(),this.$route.query.pageData&&(this.pageData=this.$route.query.pageData)},methods:{getCompanySupplyMethod:function(){var t=this;this.param.id=this.$route.query.supplyId,n.i(r._56)(this.param.id).then(function(e){0===e.data.code&&(t.resData=e.data.data)}).catch()}}}},1121:function(t,e,n){e=t.exports=n(830)(),e.push([t.i,".supply-detail-box[data-v-396c0a2b]{width:100%;min-height:700px;background:#fff}.supply-detail-box .supply-detail-wrap[data-v-396c0a2b]{margin:0 auto;width:1200px}.supply-detail-wrap[data-v-396c0a2b]{padding-bottom:60px}.supply-detail-nav[data-v-396c0a2b]{padding:30px 0}.supply-detail-nav a[data-v-396c0a2b],.supply-detail-nav span[data-v-396c0a2b]{font-size:16px;color:#999}.supply-detail-nav a[data-v-396c0a2b]:hover{color:#4c93fd}","",{version:3,sources:["/Users/hezhicheng/ts57_PC/src/pages/homePage/supplyListPage/supplyDetailPage/supplyDetailPage.vue"],names:[],mappings:"AACA,oCACE,WAAY,AACZ,iBAAkB,AAClB,eAAiB,CAClB,AACD,wDACI,cAAe,AACf,YAAc,CACjB,AACD,qCACE,mBAAqB,CACtB,AACD,oCACE,cAAgB,CACjB,AACD,+EACI,eAAgB,AAChB,UAAY,CACf,AACD,4CACI,aAAe,CAClB",file:"supplyDetailPage.vue",sourcesContent:["\n.supply-detail-box[data-v-396c0a2b] {\n  width: 100%;\n  min-height: 700px;\n  background: #fff;\n}\n.supply-detail-box .supply-detail-wrap[data-v-396c0a2b] {\n    margin: 0 auto;\n    width: 1200px;\n}\n.supply-detail-wrap[data-v-396c0a2b] {\n  padding-bottom: 60px;\n}\n.supply-detail-nav[data-v-396c0a2b] {\n  padding: 30px 0;\n}\n.supply-detail-nav a[data-v-396c0a2b], .supply-detail-nav span[data-v-396c0a2b] {\n    font-size: 16px;\n    color: #999;\n}\n.supply-detail-nav a[data-v-396c0a2b]:hover {\n    color: #4C93FD;\n}\n"],sourceRoot:""}])},1125:function(t,e,n){e=t.exports=n(830)(),e.push([t.i,".list-content[data-v-40a7bc12]{margin-bottom:20px;padding:20px 40px 20px 20px;width:760px;height:520px;border:1px solid #e5e5e5}.list-content .content-img[data-v-40a7bc12]{margin-right:20px;width:420px}.list-content .content-img img[data-v-40a7bc12]{width:100%;height:423px;border:1px solid #d1d1d1}.list-content .content-info[data-v-40a7bc12]{padding-top:30px;width:320px}.list-content .content-info .content-info-desc[data-v-40a7bc12]{margin:10px 0 20px;font-size:18px;color:#000;line-height:24px;letter-spacing:1px}.list-content .content-info .content-info-class[data-v-40a7bc12]{font-size:14px;color:#333}.list-content .content-info .content-info-class span[data-v-40a7bc12]{display:inline-block;width:105px;color:#666;line-height:24px;letter-spacing:1px}.list-content .content-info .content-info-user[data-v-40a7bc12]{margin:20px 0 0;line-height:40px;border:1px solid #e5e5e5;border-left:0;border-right:0}.list-content .content-info .btn[data-v-40a7bc12]{margin-top:50px;width:320px;height:48px;border:0;color:#fff;font-size:20px}.list-content .content-info .btn-yes[data-v-40a7bc12]{background:#4c93fd}.list-content .sucessList[data-v-40a7bc12]{margin-top:50px;width:320px;font-size:24px;color:#ff8300;text-align:center}.list-content .sucessList i[data-v-40a7bc12]{display:block;margin-bottom:20px;font-size:35px}","",{version:3,sources:["/Users/hezhicheng/ts57_PC/src/pages/homePage/supplyListPage/supplyDetailPage/supply-content.vue"],names:[],mappings:"AACA,+BAEE,mBAAoB,AACpB,4BAA6B,AAC7B,YAAa,AACb,aAAc,AACd,wBAA0B,CAC3B,AACD,4CACI,kBAAmB,AACnB,WAAa,CAChB,AACD,gDACM,WAAY,AACZ,aAAc,AACd,wBAA0B,CAC/B,AACD,6CACI,iBAAkB,AAClB,WAAa,CAKhB,AACD,gEACM,mBAAoB,AACpB,eAAgB,AAChB,WAAY,AACZ,iBAAkB,AAClB,kBAAoB,CACzB,AACD,iEACM,eAAgB,AAChB,UAAY,CACjB,AACD,sEACQ,qBAAsB,AACtB,YAAa,AACb,WAAY,AACZ,iBAAkB,AAClB,kBAAoB,CAC3B,AACD,gEACM,gBAAiB,AACjB,iBAAkB,AAClB,yBAA0B,AAC1B,cAAe,AACf,cAAgB,CACrB,AACD,kDACM,gBAAiB,AACjB,YAAa,AACb,YAAa,AACb,SAAU,AACV,WAAY,AACZ,cAAgB,CACrB,AACD,sDACM,kBAAoB,CACzB,AACD,2CACI,gBAAiB,AACjB,YAAa,AACb,eAAgB,AAChB,cAAe,AACf,iBAAmB,CACtB,AACD,6CACM,cAAe,AACf,mBAAoB,AACpB,cAAgB,CACrB",file:"supply-content.vue",sourcesContent:["\n.list-content[data-v-40a7bc12] {\n  /*position: relative;*/\n  margin-bottom: 20px;\n  padding: 20px 40px 20px 20px;\n  width: 760px;\n  height: 520px;\n  border: 1px solid #e5e5e5;\n}\n.list-content .content-img[data-v-40a7bc12] {\n    margin-right: 20px;\n    width: 420px;\n}\n.list-content .content-img img[data-v-40a7bc12] {\n      width: 100%;\n      height: 423px;\n      border: 1px solid #d1d1d1;\n}\n.list-content .content-info[data-v-40a7bc12] {\n    padding-top: 30px;\n    width: 320px;\n    /*.moreSupply {\r\n            position: absolute;\r\n            bottom: 150px;\r\n        }*/\n}\n.list-content .content-info .content-info-desc[data-v-40a7bc12] {\n      margin: 10px 0 20px;\n      font-size: 18px;\n      color: #000;\n      line-height: 24px;\n      letter-spacing: 1px;\n}\n.list-content .content-info .content-info-class[data-v-40a7bc12] {\n      font-size: 14px;\n      color: #333;\n}\n.list-content .content-info .content-info-class span[data-v-40a7bc12] {\n        display: inline-block;\n        width: 105px;\n        color: #666;\n        line-height: 24px;\n        letter-spacing: 1px;\n}\n.list-content .content-info .content-info-user[data-v-40a7bc12] {\n      margin: 20px 0 0;\n      line-height: 40px;\n      border: 1px solid #e5e5e5;\n      border-left: 0;\n      border-right: 0;\n}\n.list-content .content-info .btn[data-v-40a7bc12] {\n      margin-top: 50px;\n      width: 320px;\n      height: 48px;\n      border: 0;\n      color: #fff;\n      font-size: 20px;\n}\n.list-content .content-info .btn-yes[data-v-40a7bc12] {\n      background: #4C93FD;\n}\n.list-content .sucessList[data-v-40a7bc12] {\n    margin-top: 50px;\n    width: 320px;\n    font-size: 24px;\n    color: #ff8300;\n    text-align: center;\n}\n.list-content .sucessList i[data-v-40a7bc12] {\n      display: block;\n      margin-bottom: 20px;\n      font-size: 35px;\n}\n"],sourceRoot:""}])},1186:function(t,e,n){e=t.exports=n(830)(),e.push([t.i,".supply-list[data-v-e80d22e0]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:360px;border:1px solid #e5e5e5}.supply-list .title[data-v-e80d22e0]{background:#f8f8f8;border-bottom:1px solid #e5e5e5}.supply-list .title .buyNum[data-v-e80d22e0]{color:#999;font-size:14px}.supply-list .title .buyNum em[data-v-e80d22e0]{color:#4c93fd}.supply-list .title1[data-v-e80d22e0]{height:110px}.supply-list .title1 img[data-v-e80d22e0]{margin:15px;width:80px;height:80px;-webkit-border-radius:50%;border-radius:50%}.supply-list .title1 .name[data-v-e80d22e0]{padding-top:25px;color:#333;line-height:24px;font-size:16px}.supply-list .title1 .mobile[data-v-e80d22e0]{color:#333;font-size:14px;line-height:22px}.supply-list .title1 .buyNum[data-v-e80d22e0]{line-height:22px}.supply-list .title1 .entryShop[data-v-e80d22e0]{position:relative;left:20px;padding:3px 7px;color:#fff;font-size:12px;background:#4c93fd;cursor:pointer}.supply-list .title2[data-v-e80d22e0]{height:50px;padding-left:25px;line-height:50px}.supply-list .content[data-v-e80d22e0]{padding-bottom:80px}.supply-list .content .listImg[data-v-e80d22e0]{position:relative;margin:15px 0 0 15px;width:156px;height:156px;display:inline-block;cursor:pointer}.supply-list .content .listImg img[data-v-e80d22e0]{width:100%;height:100%}.supply-list .content .forbideen[data-v-e80d22e0]{cursor:not-allowed}.supply-list .content .listImgBg[data-v-e80d22e0]{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;color:#fff;font-size:16px;line-height:150px;text-align:center;background:rgba(0,0,0,.4)}","",{version:3,sources:["/Users/hezhicheng/ts57_PC/src/pages/homePage/supplyListPage/supplyDetailPage/supply-list.vue"],names:[],mappings:"AACA,8BACE,8BAA+B,AACpB,2BAA4B,AAC/B,sBAAuB,AAC/B,YAAa,AAEb,wBAA0B,CAC3B,AACD,qCACI,mBAAoB,AACpB,+BAAiC,CACpC,AACD,6CACM,WAAY,AACZ,cAAgB,CACrB,AACD,gDACQ,aAAe,CACtB,AACD,sCACI,YAAc,CACjB,AACD,0CACM,YAAa,AACb,WAAY,AACZ,YAAa,AACb,0BAA2B,AACnB,iBAAmB,CAChC,AACD,4CACM,iBAAkB,AAClB,WAAY,AACZ,iBAAkB,AAClB,cAAgB,CACrB,AACD,8CACM,WAAY,AACZ,eAAgB,AAChB,gBAAkB,CACvB,AACD,8CACM,gBAAkB,CACvB,AACD,iDACM,kBAAmB,AACnB,UAAW,AACX,gBAAiB,AACjB,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,cAAgB,CACrB,AACD,sCACI,YAAa,AACb,kBAAmB,AACnB,gBAAkB,CACrB,AACD,uCACI,mBAAqB,CACxB,AACD,gDACM,kBAAmB,AACnB,qBAAsB,AACtB,YAAa,AACb,aAAc,AACd,qBAAsB,AACtB,cAAgB,CACrB,AACD,oDACQ,WAAY,AACZ,WAAa,CACpB,AACD,kDACM,kBAAoB,CACzB,AACD,kDACM,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,WAAY,AACZ,YAAa,AACb,WAAY,AACZ,eAAgB,AAChB,kBAAmB,AACnB,kBAAmB,AACnB,yBAA+B,CACpC",file:"supply-list.vue",sourcesContent:["\n.supply-list[data-v-e80d22e0] {\n  -webkit-box-sizing: border-box;\n             -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 360px;\n  /*height: 870px;*/\n  border: 1px solid #e5e5e5;\n}\n.supply-list .title[data-v-e80d22e0] {\n    background: #F8F8F8;\n    border-bottom: 1px solid #e5e5e5;\n}\n.supply-list .title .buyNum[data-v-e80d22e0] {\n      color: #999;\n      font-size: 14px;\n}\n.supply-list .title .buyNum em[data-v-e80d22e0] {\n        color: #4c93fd;\n}\n.supply-list .title1[data-v-e80d22e0] {\n    height: 110px;\n}\n.supply-list .title1 img[data-v-e80d22e0] {\n      margin: 15px;\n      width: 80px;\n      height: 80px;\n      -webkit-border-radius: 50%;\n              border-radius: 50%;\n}\n.supply-list .title1 .name[data-v-e80d22e0] {\n      padding-top: 25px;\n      color: #333;\n      line-height: 24px;\n      font-size: 16px;\n}\n.supply-list .title1 .mobile[data-v-e80d22e0] {\n      color: #333;\n      font-size: 14px;\n      line-height: 22px;\n}\n.supply-list .title1 .buyNum[data-v-e80d22e0] {\n      line-height: 22px;\n}\n.supply-list .title1 .entryShop[data-v-e80d22e0] {\n      position: relative;\n      left: 20px;\n      padding: 3px 7px;\n      color: #fff;\n      font-size: 12px;\n      background: #4C93FD;\n      cursor: pointer;\n}\n.supply-list .title2[data-v-e80d22e0] {\n    height: 50px;\n    padding-left: 25px;\n    line-height: 50px;\n}\n.supply-list .content[data-v-e80d22e0] {\n    padding-bottom: 80px;\n}\n.supply-list .content .listImg[data-v-e80d22e0] {\n      position: relative;\n      margin: 15px 0 0 15px;\n      width: 156px;\n      height: 156px;\n      display: inline-block;\n      cursor: pointer;\n}\n.supply-list .content .listImg img[data-v-e80d22e0] {\n        width: 100%;\n        height: 100%;\n}\n.supply-list .content .forbideen[data-v-e80d22e0] {\n      cursor: not-allowed;\n}\n.supply-list .content .listImgBg[data-v-e80d22e0] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      width: 100%;\n      height: 100%;\n      color: #FFF;\n      font-size: 16px;\n      line-height: 150px;\n      text-align: center;\n      background: rgba(0, 0, 0, 0.4);\n}\n"],sourceRoot:""}])},1232:function(t,e,n){var a=n(1121);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(831)("42993989",a,!0)},1236:function(t,e,n){var a=n(1125);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(831)("1ebcdcc6",a,!0)},1297:function(t,e,n){var a=n(1186);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(831)("21cd9a82",a,!0)},1327:function(t,e,n){n(1236);var a=n(1)(n(1016),n(1383),"data-v-40a7bc12",null);t.exports=a.exports},1328:function(t,e,n){n(1297);var a=n(1)(n(1017),n(1446),"data-v-e80d22e0",null);t.exports=a.exports},1379:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"supply-detail-page"},[n("v-header",[n("search")],1),t._v(" "),n("v-nav"),t._v(" "),n("div",{staticClass:"supply-detail-box"},[n("div",{staticClass:"supply-detail-wrap clearfix"},[n("div",{staticClass:"supply-detail-nav"},[n("router-link",{attrs:{to:"homePage"}},[t._v("首页")]),t._v(" >\r\n        "),n("router-link",{attrs:{to:{path:"/supplyOrBuy",query:{type:2,pageData:t.pageData}}}},[t._v("厂家供应")]),t._v(" >\r\n        "),n("span",[t._v("供应详情")])],1),t._v(" "),n("div",{staticClass:"supply-detail-left fl"},[n("supply-content",{attrs:{obj:t.resData}})],1),t._v(" "),n("div",{staticClass:"supply-detail-right fr"},[n("supply-list",{attrs:{item:t.resData}})],1)])])],1)},staticRenderFns:[]}},1383:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-content"},[n("div",{staticClass:"fl content-img"},[n("magnifier",{attrs:{imgSrc:t.obj.productPicUrl}}),t._v(" "),n("collection",{staticStyle:{margin:"28px 10px 0 160px",display:"inline-block"},attrs:{yes:t.yesOrNo},on:{clickMethod:t.collectionMethod}}),t._v(" "),n("span",{staticStyle:{"font-size":"13px",position:"relative",top:"-2px"}},[t._v("浏览量："+t._s(t.obj.viewCount))])],1),t._v(" "),n("div",{staticClass:"fl content-info"},[n("p",{staticClass:"content-info-desc"},[t._v(t._s(t.obj.supplyDesc))]),t._v(" "),n("p",{staticClass:"content-info-class"},[n("span",[t._v("供应类型：")]),t._v(t._s(t._f("buyShape")(t.obj.supplyShape))+" - "+t._s(t._f("type")(t.obj.supplyType))+"\r\n    ")]),t._v(" "),n("p",{staticClass:"content-info-class"},[n("span",[t._v("供应数量：")]),t._v(t._s(t.obj.supplyNum)+t._s(t._f("unit")(t.obj.supplyUnit))+"\r\n    ")]),t._v(" "),n("p",{staticClass:"content-info-class"},[n("span",[t._v("发布时间：")]),t._v(t._s(t._f("customTime")(t.obj.updateDate))+"\r\n    ")]),t._v(" "),n("p",{staticClass:"content-info-class content-info-user"},[n("span",[t._v("供应厂家：")]),t._v(t._s(t.obj.userName))]),t._v(" "),n("button",{staticClass:"moreSupply btn btn-yes",on:{click:function(e){t.goSupplyListPage(t.obj)}}},[t._v("更多供应")])])])},staticRenderFns:[]}},1446:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"supply-list"},[t.userType?n("div",{staticClass:"title title2"},[n("p",{staticClass:"buyNum"},[t._v("我的所有供应："),n("em",[t._v(t._s(t.obj.totalNum)+"个")])])]):n("div",{staticClass:"title title1"},[n("img",{directives:[{name:"errorImg",rawName:"v-errorImg"}],staticClass:"fl",attrs:{src:t.item.userHeadIcon,alt:"用户头像"}}),t._v(" "),n("p",{staticClass:"name"},[t._v(t._s(t.item.userName))]),t._v(" "),n("p",{staticClass:"buyNum"},[t._v("Ta的总供应数："),n("em",[t._v(t._s(t.obj.totalNum)+"个")]),t._v(" "),n("span",{staticClass:"entryShop",on:{click:t.goStore}},[t._v("进店逛逛")])]),t._v(" "),n("p",[t._v("电话："+t._s(t.obj.userMobile))])]),t._v(" "),n("div",{staticClass:"content"},[t._l(t.obj.list,function(e,a){return n("div",{staticClass:"listImg",on:{click:function(e){t.goDetail(a)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.productPicUrl,expression:"e.productPicUrl"}],attrs:{alt:"花型展示图片"}}),t._v(" "),1!==e.supplyStatus?n("div",{staticClass:"listImgBg",class:{forbideen:1!==e.supplyStatus}},[t._v("\r\n        "+t._s(t._f("supplyStatus")(e.supplyStatus))+"\r\n      ")]):t._e()])}),t._v(" "),n("pageBar",{staticStyle:{"margin-right":"20px"},attrs:{showOpt:!0,pageNum:t.pageNum,pageMax:t.pageMax},on:{upPage:t.upPage,downPage:t.downPage,selectFirstPage:t.selectFirstPage,selectLastPage:t.selectLastPage}})],2)])},staticRenderFns:[]}},863:function(t,e,n){n(1232);var a=n(1)(n(1018),n(1379),"data-v-396c0a2b",null);t.exports=a.exports}});
//# sourceMappingURL=14.4927b359df6f57e923af.js.map