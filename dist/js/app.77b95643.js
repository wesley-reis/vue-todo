(function(e){function t(t){for(var a,r,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"cab04465","chunk-f5191ec8":"c7236270"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-f5191ec8":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-f5191ec8":"e05cf993"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-img",{staticClass:"pt-5 text-center",attrs:{src:n("86d5"),gradient:"to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)",dark:""}},[a("v-avatar",{attrs:{size:"100"}},[a("img",{attrs:{src:"https://avatars.githubusercontent.com/u/69157081?s=400&u=9d3fc91beba00c6aa9dc9ee06852a08d8a7e44ea&v=4",alt:"Wesley"}})]),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[e._v(" Minhas Tarefas ")]),a("v-list-item-subtitle",[e._v(" Lista de tarefas ")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{to:t.to,link:""}},[a("v-list-item-icon",[a("v-icon",{class:t.class},[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"",prominent:"",height:"185",color:"#fcb69f",dark:"",src:n("86d5")},scopedSlots:e._u([{key:"img",fn:function(t){var n=t.props;return[a("v-img",e._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"}},"v-img",n,!1))]}}])},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),a("center",[a("v-app-bar-title",{staticClass:"mt-16"},[a("InputTarefa")],1)],1)],1),a("v-main",[a("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Qual sua tarefa?",placeholder:"Digite sua tarefa",clearable:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleAddTarefa.apply(null,arguments)}},model:{value:e.campoInput,callback:function(t){e.campoInput=t},expression:"campoInput"}})],1)],1)},c=[],s={data:function(){return{campoInput:null}},methods:{handleAddTarefa:function(){this.$store.dispatch("adicionaTarefa",this.campoInput),this.campoInput=null}}},u=s,l=n("2877"),d=n("6544"),f=n.n(d),p=n("62ad"),v=n("8654"),m=Object(l["a"])(u,i,c,!1,null,null,null),h=m.exports;f()(m,{VCol:p["a"],VTextField:v["a"]});var b={components:{InputTarefa:h},data:function(){return{drawer:null,items:[{title:"Tarefas",icon:"mdi-view-dashboard",class:"dash",to:"/"},{title:"Sobre",icon:"mdi-help-box",class:"about",to:"/sobre"}]}}},g=b,w=(n("c7ec"),n("7496")),y=n("40dc"),k=n("5bc1"),T=n("bb78"),_=n("8212"),x=n("ce7e"),I=n("132d"),V=n("adda"),j=n("8860"),O=n("da13"),A=n("5d23"),S=n("34c3"),C=n("f6c4"),E=n("f774"),L=Object(l["a"])(g,r,o,!1,null,"96cb37d0",null),N=L.exports;f()(L,{VApp:w["a"],VAppBar:y["a"],VAppBarNavIcon:k["a"],VAppBarTitle:T["a"],VAvatar:_["a"],VDivider:x["a"],VIcon:I["a"],VImg:V["a"],VList:j["a"],VListItem:O["a"],VListItemContent:A["a"],VListItemIcon:S["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"],VMain:C["a"],VNavigationDrawer:E["a"]});var P=n("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var B=n("8c4f");a["a"].use(B["a"]);var D=[{path:"/",name:"Tarefas",component:function(){return n.e("chunk-f5191ec8").then(n.bind(null,"25f9"))}},{path:"/sobre",name:"Sobre",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],M=new B["a"]({mode:"history",base:"/",routes:D}),F=M,$=n("2f62"),q={tarefas:[]},J=n("af0d"),R=new J["a"]("db"),z=R,H={buscaTarefas:function(e){z.collection("tarefas").get().then((function(t){e.tarefas=t}))},adicionaTarefa:function(e,t){z.collection("tarefas").add({id:(new Date).getTime(),titulo:t,concluido:!1})}},K=n("1da1"),Q=(n("96cf"),{adicionaTarefa:function(e,t){return Object(K["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,a("adicionaTarefa",t);case 3:return n.next=5,a("buscaTarefas");case 5:case"end":return n.stop()}}),n)})))()},editaTarefa:function(e,t){var n=e.commit;z.collection("tarefas").doc({id:t.id}).update({titulo:t.titulo}).then((function(){n("buscaTarefas")}))},concluiTarefa:function(e,t){var n=e.commit;z.collection("tarefas").doc({id:t.id}).update({concluido:!t.concluido}).then((function(){n("buscaTarefas")}))},removeTarefa:function(e,t){var n=e.commit;z.collection("tarefas").doc({id:t}).delete().then((function(){n("buscaTarefas")}))}});a["a"].use($["a"]);var U=new $["a"].Store({state:q,mutations:H,actions:Q,modules:{}}),W=n("f309");a["a"].use(W["a"]);var G=new W["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:F,store:U,vuetify:G,render:function(e){return e(N)}}).$mount("#app")},"86d5":function(e,t,n){e.exports=n.p+"img/bg.13d8bbc8.jpg"},a930:function(e,t,n){},c7ec:function(e,t,n){"use strict";n("a930")}});
//# sourceMappingURL=app.77b95643.js.map