(function(e){function t(t){for(var r,i,n=t[0],l=t[1],c=t[2],d=0,m=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,n=1;n<s.length;n++){var l=s[n];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1051:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"wrapper-content"},[s("section",[s("div",{staticClass:"container"},[s("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalLogin=!e.modalLogin}}},[e._v("Login")]),s("modalLogin",{directives:[{name:"show",rawName:"v-show",value:e.modalLogin,expression:"modalLogin"}],on:{close:function(t){e.modalLogin=!1},switch:function(t){e.modalLogin=!1,e.modalRegister=!0}}}),s("button",{staticClass:"btn btnPrimary",on:{click:function(t){e.modalRegister=!e.modalRegister}}},[e._v("Register")]),s("modalRegister",{directives:[{name:"show",rawName:"v-show",value:e.modalRegister,expression:"modalRegister"}],on:{close:function(t){e.modalRegister=!1},switch:function(t){e.modalRegister=!1,e.modalLogin=!0}}})],1)])])])},a=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("modals",{attrs:{title:"Login"},on:{close:e.onClose}},[s("div",{attrs:{slot:"body"},slot:"body"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[s("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[s("label",[e._v("Email")]),e.$v.email.required?e._e():s("p",{staticClass:"errorText"},[e._v(" Email is required ")]),e.$v.email.minLength?e._e():s("p",{staticClass:"errorText"},[e._v(" Email is not correct ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},domProps:{value:e.email},on:{change:e.$v.email.$touch,input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("div",{staticClass:"form-item",class:{errorInput:e.$v.password.$error}},[s("label",[e._v("Password")]),e.$v.password.required?e._e():s("p",{staticClass:"errorText"},[e._v(" Password is required ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"password"},domProps:{value:e.password},on:{change:e.$v.password.$touch,input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("button",{staticClass:"btn btnPrimary"},[e._v("Login")])])]),s("div",{attrs:{slot:"switch"},slot:"switch"},[s("button",{staticClass:"btn btnWhite",on:{click:function(t){return e.$emit("switch")}}},[e._v("I want to register")])])])},n=[],l=s("b5ae"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal__wrapper",on:{click:function(t){return e.$emit("close")}}},[s("div",{staticClass:"modal-content",on:{click:function(e){e.stopPropagation()}}},[s("div",{staticClass:"modal-header"},[s("span",{staticClass:"modal-title"},[e._v(" "+e._s(e.title)+" ")]),s("span",{staticClass:"button-close",on:{click:function(t){return e.$emit("close")}}},[e._v("×")])]),s("div",{staticClass:"modal-body"},[e._t("body",(function(){return[e._v(" Default body ")]})),e._t("switch",(function(){return[e._v(" Switch login/register")]}))],2)])])])},u=[],d=(s("b0c0"),{props:{title:{type:String,required:!0}},mounted:function(){var e=this;document.body.addEventListener("keyup",(function(t){"Escape"===t.key&&(e.$emit("close"),e.name="",e.email="",e.password="")}))},computed:{},methods:{}}),m=d,p=(s("c07e"),s("2877")),v=Object(p["a"])(m,c,u,!1,null,"6fa4749a",null),f=v.exports,w={components:{Modals:f},data:function(){return{email:"",password:""}},validations:{email:{required:l["required"],email:l["email"]},password:{required:l["required"]}},methods:{onSubmit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={email:this.email,password:this.password};console.log(e),this.email="",this.password="",this.$v.$reset(),this.$emit("close")}},onClose:function(){this.email="",this.password="",this.$v.$reset(),this.$emit("close")}}},h=w,g=(s("e58d"),Object(p["a"])(h,i,n,!1,null,null,null)),$=g.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("modals",{attrs:{title:"Register"},on:{close:e.onClose}},[s("div",{attrs:{slot:"body"},slot:"body"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[s("div",{staticClass:"form-item",class:{errorInput:e.$v.email.$error}},[s("label",[e._v("Email")]),e.$v.email.required?e._e():s("p",{staticClass:"errorText"},[e._v(" Email is required ")]),e.$v.email.minLength?e._e():s("p",{staticClass:"errorText"},[e._v(" Email is not correct ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:e.$v.email.$error},domProps:{value:e.email},on:{change:e.$v.email.$touch,input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("div",{staticClass:"form-item",class:{errorInput:e.$v.password.$error}},[s("label",[e._v("Password")]),e.$v.password.required?e._e():s("p",{staticClass:"errorText"},[e._v(" Password is required ")]),e.$v.password.minLength?e._e():s("p",{staticClass:"errorText"},[e._v(" Password must have at least "+e._s(e.$v.password.$params.minLength.min)+" symbols ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],class:{error:e.$v.password.$error},attrs:{type:"password"},domProps:{value:e.password},on:{change:e.$v.password.$touch,input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("div",{staticClass:"form-item",class:{errorInput:e.$v.repeatPassword.$error}},[s("label",[e._v("Repeat password")]),e.$v.repeatPassword.sameAsPassword?e._e():s("p",{staticClass:"errorText"},[e._v(" Password is not the same! ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],class:{error:e.$v.repeatPassword.$error},attrs:{type:"password"},domProps:{value:e.repeatPassword},on:{change:e.$v.repeatPassword.$touch,input:function(t){t.target.composing||(e.repeatPassword=t.target.value)}}})]),s("button",{staticClass:"btn btnPrimary"},[e._v("Register")])])]),s("div",{attrs:{slot:"switch"},slot:"switch"},[s("button",{staticClass:"btn btnWhite",on:{click:function(t){return e.$emit("switch")}}},[e._v("I want to login")])])])},_=[],y={components:{Modals:f},data:function(){return{email:"",password:"",repeatPassword:""}},validations:{email:{required:l["required"],email:l["email"]},password:{required:l["required"],minLength:Object(l["minLength"])(6)},repeatPassword:{required:l["required"],sameAsPassword:Object(l["sameAs"])("password")}},methods:{onSubmit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={email:this.email,password:this.password};console.log(e),this.email="",this.password="",this.repeatPassword="",this.$v.$reset(),this.$emit("close")}},onClose:function(){this.email="",this.password="",this.repeatPassword="",this.$v.$reset(),this.$emit("close")}}},P=y,C=(s("8c99"),Object(p["a"])(P,b,_,!1,null,null,null)),x=C.exports,L={components:{modalLogin:$,modalRegister:x},data:function(){return{modalFirst:!1,modalSecond:{show:!1,name:"",email:""},modalLogin:!1,modalRegister:!1}},methods:{}},q=L,O=Object(p["a"])(q,o,a,!1,null,null,null),j=O.exports,R=(s("c1c3"),s("1dce")),k=s.n(R);r["a"].use(k.a),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"8c99":function(e,t,s){"use strict";s("1051")},c07e:function(e,t,s){"use strict";s("ce35")},c1c3:function(e,t,s){},ce35:function(e,t,s){},cf8d:function(e,t,s){},e58d:function(e,t,s){"use strict";s("cf8d")}});