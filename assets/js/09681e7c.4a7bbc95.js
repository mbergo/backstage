/*! For license information please see 09681e7c.4a7bbc95.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[178691],{557184:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=t(824246),o=t(511151);const s={id:"plugin-kubernetes.eventsprops.namespace",title:"EventsProps.namespace",description:"API reference for EventsProps.namespace"},u=void 0,c={unversionedId:"reference/plugin-kubernetes.eventsprops.namespace",id:"reference/plugin-kubernetes.eventsprops.namespace",title:"EventsProps.namespace",description:"API reference for EventsProps.namespace",source:"@site/../docs/reference/plugin-kubernetes.eventsprops.namespace.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes.eventsprops.namespace",permalink:"/docs/reference/plugin-kubernetes.eventsprops.namespace",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes.eventsprops.namespace.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes.eventsprops.namespace",title:"EventsProps.namespace",description:"API reference for EventsProps.namespace"}},a={},i=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes.eventsprops",children:(0,n.jsx)(r.code,{children:"EventsProps"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes.eventsprops.namespace",children:(0,n.jsx)(r.code,{children:"namespace"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"namespace: string;\n"})})]})}const p=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,u,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var i in s=Object(arguments[a]))t.call(s,i)&&(c[i]=s[i]);if(r){u=r(s);for(var f=0;f<u.length;f++)n.call(s,u[f])&&(c[u[f]]=s[u[f]])}}return c}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),r.Fragment=s("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,s={},i=null,f=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,n)&&!a.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:f,props:s,_owner:u.current}}r.jsx=i,r.jsxs=i},541535:(e,r,t)=>{var n=t(862525),o=60103,s=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var u=60109,c=60110,a=60112;r.Suspense=60113;var i=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),s=p("react.portal"),r.Fragment=p("react.fragment"),r.StrictMode=p("react.strict_mode"),r.Profiler=p("react.profiler"),u=p("react.provider"),c=p("react.context"),a=p("react.forward_ref"),r.Suspense=p("react.suspense"),i=p("react.memo"),f=p("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}function m(){}function b(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var g=b.prototype=new m;g.constructor=b,n(g,h.prototype),g.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,t){var n,s={},u=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(u=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(s[n]=r[n]);var a=arguments.length-2;if(1===a)s.children=t;else if(1<a){for(var i=Array(a),f=0;f<a;f++)i[f]=arguments[f+2];s.children=i}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===s[n]&&(s[n]=a[n]);return{$$typeof:o,type:e,key:u,ref:c,props:s,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case s:a=!0}}if(a)return u=u(a=e),e=""===n?"."+P(a,0):n,Array.isArray(u)?(t="",null!=e&&(t=e.replace(E,"$&/")+"/"),S(u,r,t,"",(function(e){return e}))):null!=u&&(w(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,t+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),r.push(u)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=n+P(c=e[i],i);a+=S(c,r,t,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(c=e.next()).done;)a+=S(c=c.value,r,t,f=n+P(c,i++),u);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function x(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:x,forEach:function(e,r,t){x(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return x(e,(function(){r++})),r},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var s=n({},e.props),u=e.key,c=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,a=_.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in r)j.call(r,f)&&!k.hasOwnProperty(f)&&(s[f]=void 0===r[f]&&void 0!==i?i[f]:r[f])}var f=arguments.length-2;if(1===f)s.children=t;else if(1<f){i=Array(f);for(var p=0;p<f;p++)i[p]=arguments[p+2];s.children=i}return{$$typeof:o,type:e.type,key:u,ref:c,props:s,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var r=O.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:i,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return R().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,t){return R().useReducer(e,r,t)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>c,ah:()=>s});var n=t(667294);const o=n.createContext({});function s(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function c({components:e,children:r,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||u:s(e),n.createElement(o.Provider,{value:c},r)}}}]);