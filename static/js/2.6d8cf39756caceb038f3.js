webpackJsonp([2],{MWaW:function(t,i){},uoxT:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=[],s={data:function(){return{url:""}},mounted:function(){this.loadImages()},methods:{loadImages:function(){var t=this,i=0,a=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});function s(s){if(n.push(this.cloneNode().currentSrc),++i>95)return a.close(),void(t.url=n[0]);var e=1e6+i;e=e.toString().slice(1),this.src="static/img/frame-"+e+".jpg"}!function(){var t=new Image;t.addEventListener("load",s);var a=1e6+i;a=a.toString().slice(1),t.src="static/img/frame-"+a+".jpg"}()},drawImage:function(t){t<n.length&&(this.url=n[t])},onScroll:function(t){var i=t.currentTarget.scrollTop;this.drawImage(parseInt(i/30))}}},e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"app-container animation",on:{scroll:this.onScroll}},[i("img",{attrs:{id:"c-jpg",src:this.url}}),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"scroll-container"}},[a("div",{staticClass:"item"},[t._v("Animation1")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation2")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation3")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation4")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation5")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation6")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation7")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation8")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation9")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation10")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation11")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation12")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation13")]),t._v(" "),a("div",{staticClass:"item"},[t._v("Animation14")])])}]};var o=a("VU/8")(s,e,!1,function(t){a("MWaW")},"data-v-662dec6d",null);i.default=o.exports}});