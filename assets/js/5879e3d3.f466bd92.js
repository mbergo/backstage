/*! For license information please see 5879e3d3.f466bd92.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[663698],{128293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(824246),o=t(511151);const i={id:"frontend-plugin-api.createapiextension",title:"createApiExtension()",description:"API reference for createApiExtension()"},a=void 0,c={unversionedId:"reference/frontend-plugin-api.createapiextension",id:"reference/frontend-plugin-api.createapiextension",title:"createApiExtension()",description:"API reference for createApiExtension()",source:"@site/../docs/reference/frontend-plugin-api.createapiextension.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.createapiextension",permalink:"/docs/reference/frontend-plugin-api.createapiextension",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.createapiextension.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.createapiextension",title:"createApiExtension()",description:"API reference for createApiExtension()"}},s={},u=[{value:"Parameters",id:"parameters",level:2}];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createapiextension",children:(0,r.jsx)(n.code,{children:"createApiExtension"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function createApiExtension<TConfig extends {}, TInputs extends Record<string, {\n    extensionData: AnyExtensionDataMap;\n}>>(options: ({\n    api: AnyApiRef;\n    factory: (options: {\n        config: TConfig;\n        inputs: ExtensionDataInputValues<TInputs>;\n    }) => AnyApiFactory;\n} | {\n    factory: AnyApiFactory;\n}) & {\n    configSchema?: PortableSchema<TConfig>;\n    inputs?: TInputs;\n}): import("../wiring").Extension<TConfig>;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsxs)(n.td,{children:["({ api: ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.anyapiref",children:"AnyApiRef"}),"; factory: (options: { config: TConfig; inputs: ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondatainputvalues",children:"ExtensionDataInputValues"}),"<TInputs>; }) => ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.anyapifactory",children:"AnyApiFactory"}),"; } | { factory: ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.anyapifactory",children:"AnyApiFactory"}),"; }) & { configSchema?: ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.portableschema",children:"PortableSchema"}),"<TConfig>; inputs?: TInputs; }"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:['import("../wiring").',(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extension",children:"Extension"}),"<TConfig>"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))t.call(i,u)&&(c[u]=i[u]);if(n){a=n(i);for(var f=0;f<a.length;f++)r.call(i,a[f])&&(c[a[f]]=i[a[f]])}}return c}},371426:(e,n,t)=>{t(862525);var r=t(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,i={},u=null,f=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(f=n.ref),n)c.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:f,props:i,_owner:a.current}}n.jsx=u,n.jsxs=u},541535:(e,n,t)=>{var r=t(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,c=60110,s=60112;n.Suspense=60113;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),i=p("react.portal"),n.Fragment=p("react.fragment"),n.StrictMode=p("react.strict_mode"),n.Profiler=p("react.profiler"),a=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),n.Suspense=p("react.suspense"),u=p("react.memo"),f=p("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}function m(){}function x(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var v=x.prototype=new m;v.constructor=x,r(v,g.prototype),v.isPureReactComponent=!0;var j={current:null},b=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,n,t){var r,i={},a=null,c=null;if(null!=n)for(r in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(a=""+n.key),n)b.call(n,r)&&!_.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(1===s)i.children=t;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function k(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,t,r,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===r?"."+k(s,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),S(a,n,t,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),n.push(a)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=r+k(c=e[u],u);s+=S(c,n,t,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(c=e.next()).done;)s+=S(c=c.value,n,t,f=r+k(c,u++),a);else if("object"===c)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return s}function C(e,n,t){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function A(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},n.Component=g,n.PureComponent=x,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,n.cloneElement=function(e,n,t){if(null==e)throw Error(d(267,e));var i=r({},e.props),a=e.key,c=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,s=j.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in n)b.call(n,f)&&!_.hasOwnProperty(f)&&(i[f]=void 0===n[f]&&void 0!==u?u[f]:n[f])}var f=arguments.length-2;if(1===f)i.children=t;else if(1<f){u=Array(f);for(var p=0;p<f;p++)u[p]=arguments[p+2];i.children=u}return{$$typeof:o,type:e.type,key:a,ref:c,props:i,_owner:s}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:c,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=E,n.createFactory=function(e){var n=E.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=w,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:A}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return R().useCallback(e,n)},n.useContext=function(e,n){return R().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return R().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return R().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return R().useLayoutEffect(e,n)},n.useMemo=function(e,n){return R().useMemo(e,n)},n.useReducer=function(e,n,t){return R().useReducer(e,n,t)},n.useRef=function(e){return R().useRef(e)},n.useState=function(e){return R().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:c},n)}}}]);