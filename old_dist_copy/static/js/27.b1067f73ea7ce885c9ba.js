webpackJsonp([27],{1054:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(155),n=e.n(i),o=e(105),s=e.n(o),l=e(30),r=e.n(l),A=e(29),c=e.n(A),d=e(28);t.default={data:function(){return{loading:!1,albumPicsList:{},picNum:"",Params:{pageNo:1,pageSize:10,id:""},checkAll:"",chooseImg:{list:[],status:!0},ConfirmDialog:{noShowDialog:!1,show:!1,id:[]},Cookie:{key:"showDelMaterialDialog",value:1,day:7},Edit:{text:"编辑",status:!1}}},watch:{Edit:{handler:function(a){a.text=a.status?"取消":"编辑"},deep:!0},albumPicsList:{handler:function(a){0===a.list.length&&this.Params.pageNo>1&&this.Params.pageNo--},deep:!0},Params:{handler:function(a){var t=this;return c()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.indexLoad();case 1:case"end":return a.stop()}},a,t)}))()},deep:!0},chooseImg:{handler:function(a){a.status=a.list.length<=0},deep:!0}},computed:{getalbumPicsList:function(){if(this.albumPicsList.list)return this.albumPicsList.list.length}},created:function(){this.Params.id=this.$route.params.id,this.cookie.get(this.Cookie.key)||this.cookie.set(this.Cookie.key,this.Cookie.value,this.Cookie.day,"/")},methods:{indexLoad:function(){var a=this;return c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.checkAll=!1,a.chooseImg.list=[],t.next=4,e.i(d._13)(a.Params);case 4:return a.albumPicsList=t.sent.data.data,t.next=7,e.i(d._14)({id:a.$route.params.id});case 7:a.picNum=t.sent.data.data;case 8:case"end":return t.stop()}},t,a)}))()},handleUploadPhoto:function(){this.loading=!0},handleChooseAll:function(a){this.chooseImg.list=a.target.checked?this.albumPicsList.list.map(function(a){return a.id}):[]},handleGotoWarehouseAdd:function(a){var t=s()({},a,{folder:this.$route.query.name});sessionStorage["warehouse-pic"]=n()(t),this.$router.push({path:"/warehouseManage/addwarehouse",query:{status:"rucang"}})},handleChangeCurrent:function(a){var t=this;return c()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.Params.pageNo=a;case 1:case"end":return e.stop()}},e,t)}))()},handleChangePageSize:function(a){var t=this;return c()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.Params.pageSize=a;case 1:case"end":return e.stop()}},e,t)}))()},handleDelAlbumPic:function(){var a=this;return c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.i(d._15)({ids:a.chooseImg.list.toString()});case 2:a.chooseImg.list=[],a.ConfirmDialog.show=!1,a.indexLoad();case 5:case"end":return t.stop()}},t,a)}))()},handleShowDialog:function(){var a=this;return c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:"1"===a.cookie.get(a.Cookie.key)?a.ConfirmDialog.show=!0:a.handleDelAlbumPic();case 1:case"end":return t.stop()}},t,a)}))()},handleCancelDelMaterial:function(){this.ConfirmDialog.show=!1,this.cookie.set(this.Cookie.key,this.Cookie.value,this.Cookie.day,"/")},handleNoShowDialog:function(a){this.cookie.set(this.Cookie.key,a,this.Cookie.day,"/")},uploadImg:function(a){var t=this;return c()(r.a.mark(function i(){var n;return r.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t.Params.pageNo=1,n=a.map(function(a){return{picName:a.name,picUrl:a.storeAs}}),i.next=4,e.i(d._16)({id:t.$route.params.id,pics:n});case 4:return i.next=6,t.indexLoad();case 6:t.loading=!1;case 7:case"end":return i.stop()}},i,t)}))()}}}},1161:function(a,t,e){t=a.exports=e(830)(),t.push([a.i,".material-footer[data-v-791ca682]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-moz-box;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;-moz-box-align:center;align-items:center}.material-footer--pagation[data-v-791ca682]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;-moz-box-flex:1;flex:1;text-align:right}.material-add--icon[data-v-791ca682]{font-size:30px;vertical-align:middle;cursor:pointer;margin:4px}.material-add--icon[data-v-791ca682]:hover:before{color:#4c93fd}.material-dialog p[data-v-791ca682]{text-align:center}.material-dialog--title[data-v-791ca682]{font-size:18px;font-weight:500;margin-bottom:10px}.material-dialog--tip[data-v-791ca682]{font-size:14px}.material-dialog--tip i[data-v-791ca682]{font-size:smaller;color:#3f3f3f}.material-empty[data-v-791ca682]{display:table;margin:20px auto;color:#666}.material-img[data-v-791ca682]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:-moz-box;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.material-img-wrapper[data-v-791ca682]{margin:0 18px 18px 0;display:inline-block}.material-img-container[data-v-791ca682]{position:relative}.material-img-container:hover .material-img-tip[data-v-791ca682]{display:block}.material-img-checkbox[data-v-791ca682]{top:10px;left:10px;position:absolute}.material-img-title[data-v-791ca682]{max-width:150px;color:#666;font-size:13px;margin:0 auto;text-align:center;word-break:break-all;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.material-img-tip[data-v-791ca682]{right:0;bottom:0;left:0;position:absolute;display:inline-block;height:28px;line-height:28px;background:rgba(0,0,0,.4);color:#fff;display:none;cursor:pointer;text-align:center}.icon-dangkou[data-v-791ca682]:before{color:#fff}","",{version:3,sources:["/Users/hezhicheng/ts57_PC/src/pages/shopManager/children/material/add.vue"],names:[],mappings:"AACA,kCACI,oBAAoB,AACpB,qBAAqB,AACrB,oBAAoB,AACpB,iBAAiB,AACjB,aAAa,AACb,yBAAyB,AACzB,2BAA2B,AACvB,sBAAsB,AACf,sBAAsB,AACzB,kBAAmB,CAC9B,AACD,4CACI,mBAAmB,AACnB,eAAe,AACX,WAAW,AACJ,gBAAgB,AACnB,OAAO,AACf,gBAAkB,CACrB,AAGD,qCACI,eAAgB,AAChB,sBAAuB,AACvB,eAAgB,AAChB,UAAY,CACf,AACD,kDACI,aAAc,CACjB,AACD,oCACI,iBAAkB,CACrB,AACD,yCACI,eAAgB,AAChB,gBAAiB,AACjB,kBAAoB,CACvB,AACD,uCACI,cAAgB,CACnB,AACD,yCACI,kBAAmB,AACnB,aAAe,CAClB,AACD,iCACI,cAAc,AACd,iBAAiB,AACjB,UAAW,CACd,AACD,+BACI,oBAAoB,AACpB,qBAAqB,AACrB,oBAAoB,AACpB,iBAAiB,AACjB,aAAa,AACb,uBAAuB,AACnB,mBAAmB,AACf,cAAe,CAC1B,AACD,uCACI,qBAAsB,AACtB,oBAAsB,CACzB,AACD,yCACI,iBAAmB,CACtB,AACD,iEACI,aAAc,CACjB,AACD,wCACI,SAAS,AACT,UAAU,AACV,iBAAkB,CACrB,AACD,qCACI,gBAAiB,AACjB,WAAY,AACZ,eAAgB,AAChB,cAAe,AACf,kBAAmB,AACnB,qBAAsB,AACtB,gBAAgB,AAChB,0BAA0B,AACvB,uBAAuB,AAC1B,oBAAoB,AACpB,4BAA4B,AAC5B,oBAAqB,CACxB,AACD,mCACI,QAAQ,AACR,SAAS,AACT,OAAO,AACP,kBAAmB,AACnB,qBAAsB,AACtB,YAAY,AACZ,iBAAiB,AACjB,0BAA2B,AAC3B,WAAW,AACX,aAAc,AACd,eAAgB,AAChB,iBAAmB,CACtB,AAGD,sCACI,UAAW,CACd",file:"add.vue",sourcesContent:["\n.material-footer[data-v-791ca682]{\n    display:-webkit-box;\n    display:-webkit-flex;\n    display:-ms-flexbox;\n    display:-moz-box;\n    display:flex;\n    -webkit-box-align:center;\n    -webkit-align-items:center;\n        -ms-flex-align:center;\n               -moz-box-align:center;\n            align-items:center;\n}\n.material-footer--pagation[data-v-791ca682]{\n    -webkit-box-flex:1;\n    -webkit-flex:1;\n        -ms-flex:1;\n               -moz-box-flex:1;\n            flex:1;\n    text-align: right;\n}\n.material-add[data-v-791ca682]{\n}\n.material-add--icon[data-v-791ca682]{\n    font-size: 30px;\n    vertical-align: middle;\n    cursor: pointer;\n    margin: 4px;\n}\n.material-add--icon[data-v-791ca682]:hover:before{\n    color:#4c93fd;\n}\n.material-dialog p[data-v-791ca682]{\n    text-align:center;\n}\n.material-dialog--title[data-v-791ca682]{\n    font-size: 18px;\n    font-weight: 500;\n    margin-bottom: 10px;\n}\n.material-dialog--tip[data-v-791ca682]{\n    font-size: 14px;\n}\n.material-dialog--tip i[data-v-791ca682]{\n    font-size: smaller;\n    color: #3F3F3F;\n}\n.material-empty[data-v-791ca682]{\n    display:table;\n    margin:20px auto;\n    color:#666;\n}\n.material-img[data-v-791ca682]{\n    display:-webkit-box;\n    display:-webkit-flex;\n    display:-ms-flexbox;\n    display:-moz-box;\n    display:flex;\n    -webkit-flex-wrap:wrap;\n        -ms-flex-wrap:wrap;\n            flex-wrap:wrap;\n}\n.material-img-wrapper[data-v-791ca682]{\n    margin: 0 18px 18px 0;\n    display: inline-block;\n}\n.material-img-container[data-v-791ca682]{\n    position: relative;\n}\n.material-img-container:hover .material-img-tip[data-v-791ca682]{\n    display:block;\n}\n.material-img-checkbox[data-v-791ca682]{\n    top:10px;\n    left:10px;\n    position:absolute;\n}\n.material-img-title[data-v-791ca682]{\n    max-width: 150px;\n    color: #666;\n    font-size: 13px;\n    margin: 0 auto;\n    text-align: center;\n    word-break: break-all;\n    overflow:hidden;\n    -o-text-overflow:ellipsis;\n       text-overflow:ellipsis;\n    display:-webkit-box;\n    -webkit-box-orient:vertical;\n    -webkit-line-clamp:2;\n}\n.material-img-tip[data-v-791ca682]{\n    right:0;\n    bottom:0;\n    left:0;\n    position: absolute;\n    display: inline-block;\n    height:28px;\n    line-height:28px;\n    background:rgba(0,0,0,0.4);\n    color:#fff;\n    display: none;\n    cursor: pointer;\n    text-align: center;\n}\n.icon-dangkou[data-v-791ca682]{\n}\n.icon-dangkou[data-v-791ca682]:before{\n    color:#fff;\n}\n"],sourceRoot:""}])},1272:function(a,t,e){var i=e(1161);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e(831)("f7af6a58",i,!0)},1419:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ts-section",{directives:[{name:"loading",rawName:"v-loading.body",value:a.loading,expression:"loading",modifiers:{body:!0}}],attrs:{"element-loading-text":"正在上传中"}},[e("div",{slot:"title"},[a._v("\n    "+a._s(a.$route.query.name)+"\n  ")]),a._v(" "),e("div",{slot:"menu"},[a.picNum>0?e("label",[e("i",{staticClass:"icon-fangda material-add--icon"}),a._v(" "),e("ts-aliupload",{attrs:{fileType:"2",id:"addMaterial",multiple:""},on:{begin:a.handleUploadPhoto,doUpload:a.uploadImg}})],1):a._e(),a._v(" "),e("ts-button",{class:a.Edit.status?"":"button-blue",attrs:{type:a.Edit.status?"cancel":"primary"},on:{click:function(t){a.Edit.status=!a.Edit.status}}},[a._v(a._s(a.Edit.text))])],1),a._v(" "),a.getalbumPicsList<=0?e("p",{staticClass:"material-empty"},[a._v("该文件夹暂无花型图片，点击页面右上角 "),e("i",{staticClass:"icon-fangda"}),a._v(" 添加本地花型图片")]):a._e(),a._v(" "),e("ts-checkbox-group",{staticClass:"material-img",model:{value:a.chooseImg.list,callback:function(t){a.chooseImg.list=t},expression:"chooseImg.list"}},a._l(a.albumPicsList.list,function(t){return e("span",{staticClass:"material-img-wrapper"},[e("div",{staticClass:"material-img-container"},[e("ts-checkbox",{directives:[{name:"show",rawName:"v-show",value:a.Edit.status,expression:"Edit.status"}],staticClass:"material-img-checkbox",attrs:{label:t.id}},[a._v(a._s(t.text))]),a._v(" "),e("ts-image",{key:t.id,attrs:{type:"local",src:t.picUrl,width:"160",height:"160"}}),a._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.Edit.status,expression:"!Edit.status"}],staticClass:"material-img-tip",on:{click:function(e){a.handleGotoWarehouseAdd(t)}}},[e("i",{staticClass:"logo icon-dangkou"}),a._v("\n            入仓\n        ")])],1),a._v(" "),e("span",{staticClass:"material-img-title"},[a._v(a._s(t.picName))])])})),a._v(" "),e("div",{staticClass:"material-footer",slot:"footer"},[a.Edit.status?e("ts-button",{attrs:{type:"primary",disabled:a.chooseImg.status},on:{click:a.handleShowDialog}},[a._v("删除")]):a._e(),a._v(" "),a.Edit.status?e("ts-checkbox",{staticStyle:{"margin-left":"10px"},on:{change:a.handleChooseAll},model:{value:a.checkAll,callback:function(t){a.checkAll=t},expression:"checkAll"}},[a._v("全选")]):a._e(),a._v(" "),e("ts-pagination",{staticClass:"material-footer--pagation",attrs:{current:a.albumPicsList.pageNO,total:a.albumPicsList.totalPage},on:{change:a.handleChangeCurrent,"page-size-change":a.handleChangePageSize}})],1),a._v(" "),e("ts-dialog",{staticClass:"material-dialog",attrs:{width:"30%",title:"提示"},on:{confirm:a.handleDelAlbumPic,cancel:a.handleCancelDelMaterial},model:{value:a.ConfirmDialog.show,callback:function(t){a.ConfirmDialog.show=t},expression:"ConfirmDialog.show"}},[e("p",{staticClass:"material-dialog--title"},[a._v("确认将选中花型素材删除？")]),a._v(" "),e("p",[e("ts-radio",{attrs:{type:"origin",label:"0"},nativeOn:{change:function(t){a.handleNoShowDialog(t)}},model:{value:a.ConfirmDialog.noShowDialog,callback:function(t){a.ConfirmDialog.noShowDialog=t},expression:"ConfirmDialog.noShowDialog"}},[e("span",{staticClass:"material-dialog--tip"},[a._v("不再提示"),e("i",[a._v("(素材相关数据删除后无法恢复)")])])])],1)])],1)},staticRenderFns:[]}},889:function(a,t,e){e(1272);var i=e(1)(e(1054),e(1419),"data-v-791ca682",null);a.exports=i.exports}});
//# sourceMappingURL=27.b1067f73ea7ce885c9ba.js.map