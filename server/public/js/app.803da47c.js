(function(t){function e(e){for(var a,s,i=e[0],c=e[1],u=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"08e7":function(t,e,n){"use strict";var a=n("abd6"),r=n.n(a);r.a},"08e9":function(t,e,n){},"19d7":function(t,e,n){"use strict";var a=n("08e9"),r=n.n(a);r.a},2326:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Home"),n("BookAppointment"),n("Appointment"),n("Footer"),n("GoTopButton")],1)},o=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar"},[n("div",{staticClass:"inner-width"},[n("a",{staticClass:"logo",attrs:{href:"/"}}),n("button",{staticClass:"menu-toggler"},[n("span"),n("span"),n("span")]),n("div",{staticClass:"navbar-menu"},[n("a",{attrs:{href:"#"}},[t._v("Home")]),n("a",{attrs:{href:"#"}},[t._v("Sign-Up")]),n("a",{attrs:{href:"#"}},[t._v("Login")])])])])}],c={name:"Navbar",mounted:function(){var t=document.querySelector(".navbar");window.addEventListener("scroll",(function(){window.scrollY>20?t.classList.add("sticky"):t.classList.remove("sticky")}));var e=document.querySelector(".menu-toggler"),n=document.querySelector(".navbar-menu");window.addEventListener("click",(function(){e.classList.toggle("active"),n.classList.toggle("active")}))}},u=c,l=(n("da38"),n("2877")),p=Object(l["a"])(u,s,i,!1,null,"4d1b976c",null),f=p.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"home"}},[n("div",{staticClass:"inner-width"},[n("div",{staticClass:"content"},[n("h1",[t._v("Hi I'm")]),n("div",{staticClass:"sm"},[n("a",{staticClass:"fab fa-facebook-f",attrs:{href:"#"}}),n("a",{staticClass:"fab fa-twitter",attrs:{href:"#"}}),n("a",{staticClass:"fab fa-instagram",attrs:{href:"#"}}),n("a",{staticClass:"fab fa-snapchat-ghost",attrs:{href:"#"}})]),n("div",{staticClass:"buttons"},[n("a",{attrs:{href:"#"}},[t._v("Contact")]),n("a",{attrs:{href:"#"}},[t._v("Book an Appointment")])])])])])}],v={name:"Home"},h=v,b=(n("81bc"),Object(l["a"])(h,d,m,!1,null,"3d3da7a5",null)),g=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"contact"}},[n("div",{staticClass:"inner-width"},[n("h1",{staticClass:"section-title"},[t._v("Appointment Form")]),n("form",{staticClass:"contact-form",attrs:{action:"#"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"nameZone",attrs:{type:"text",id:"name",placeholder:"Enter Your Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"phoneZone",attrs:{type:"text",id:"phone",placeholder:"Enter Your Phone Number"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.appointmentdate,expression:"appointmentdate"}],staticClass:"dateZone",attrs:{type:"date",id:"date",placeholder:"Enter Your Appointment Date"},domProps:{value:t.appointmentdate},on:{input:function(e){e.target.composing||(t.appointmentdate=e.target.value)}}}),n("input",{staticClass:"btn",attrs:{type:"submit",value:"Book It!"},on:{click:t.bookAppointment}})])])])},C=[],w=(n("b0c0"),n("96cf"),n("1da1")),y=(n("d81d"),n("d3b7"),n("5530")),x=n("d4ec"),k=n("bee2"),O=n("bc3a"),j=n.n(O),A="appointments/",E=function(){function t(){Object(x["a"])(this,t)}return Object(k["a"])(t,null,[{key:"getAppointment",value:function(){return new Promise(function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e,n){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get(A);case 3:a=t.sent,r=a.data,e(r.map((function(t){return Object(y["a"])({},t)}))),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),n(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"insertAppointment",value:function(t,e,n){return j.a.post(A,{name:t,phone:e,appointmentdate:n})}},{key:"deleteAppointment",value:function(t){return j.a.delete("".concat(A).concat(t))}}]),t}(),P=E,T={name:"Appointment",data:function(){return{appointments:[],error:"",name:"",phone:"",appointmentdate:null}},methods:{bookAppointment:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P.insertAppointment(t.name,t.phone,t.appointmentdate);case 2:location.reload();case 3:case"end":return e.stop()}}),e)})))()}}},$=T,N=(n("19d7"),Object(l["a"])($,_,C,!1,null,"245ff627",null)),S=N.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"dark",attrs:{id:"appointments"}},[n("div",{staticClass:"inner-width"},[n("h1",{staticClass:"section-title"},[t._v(" Current Appointments ")]),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{staticClass:"appointments"},t._l(t.appointments,(function(e,a){return n("div",{key:e._id,staticClass:"appointment",attrs:{item:e,index:a}},[n("i",{staticClass:"icon fas fa-user-tie"}),n("table",[n("tr",[n("td",{staticClass:"left"},[t._v("Name:")]),n("td",{staticClass:"right"},[t._v(t._s(e.name))])]),n("tr",[n("td",{staticClass:"left"},[t._v("Phone:")]),n("td",{staticClass:"right"},[t._v(t._s(e.phone))])]),n("tr",[n("td",{staticClass:"left"},[t._v("Date:")]),n("td",{staticClass:"right"},[t._v(t._s(e.appointmentdate))])])])])})),0)])])},L=[],R={name:"Appointment",data:function(){return{appointments:[],error:"",name:"",phone:"",appointmentdate:null}},created:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.getAppointment();case 3:t.appointments=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},H=R,Y=(n("9271"),Object(l["a"])(H,B,L,!1,null,"06ce2355",null)),F=Y.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"inner-width"},[n("div",{staticClass:"copyright"},[t._v(" © 2020 | Created & Designed By Tera Abbu ")]),n("div",{staticClass:"sm"},[n("a",{staticClass:"fab fa-facebook-f",attrs:{href:"#"}}),n("a",{staticClass:"fab fa-twitter",attrs:{href:"#"}}),n("a",{staticClass:"fab fa-instagram",attrs:{href:"#"}}),n("a",{staticClass:"fab fa-snapchat-ghost",attrs:{href:"#"}})])])])}],D={name:"Footer"},G=D,I=(n("08e7"),Object(l["a"])(G,M,q,!1,null,"d9047a2e",null)),Z=I.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"goTop fas fa-arrow-up"})},U=[],z=n("1157"),K=n.n(z),Q={name:"GoTopButton",mounted:function(){K()(document).ready((function(){K()(window).scroll((function(){this.scrollY>20?K()(".goTop").fadeIn():K()(".goTop").fadeOut()})),K()(".goTop").click((function(){scroll(0,0)}))}))}},V=Q,W=(n("f9dc"),Object(l["a"])(V,J,U,!1,null,"e38ad8de",null)),X=W.exports,tt={name:"App",components:{Navbar:f,Home:g,BookAppointment:S,Appointment:F,Footer:Z,GoTopButton:X}},et=tt,nt=(n("034f"),Object(l["a"])(et,r,o,!1,null,null,null)),at=nt.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(at)}}).$mount("#app")},"59f6":function(t,e,n){},"81bc":function(t,e,n){"use strict";var a=n("bf62"),r=n.n(a);r.a},"85ec":function(t,e,n){},9271:function(t,e,n){"use strict";var a=n("2326"),r=n.n(a);r.a},abd6:function(t,e,n){},bf62:function(t,e,n){},c4e8:function(t,e,n){},da38:function(t,e,n){"use strict";var a=n("59f6"),r=n.n(a);r.a},f9dc:function(t,e,n){"use strict";var a=n("c4e8"),r=n.n(a);r.a}});
//# sourceMappingURL=app.803da47c.js.map