/*! For license information please see f2d7e49c.f93e1ce7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[881857],{541441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(824246),o=r(511151);const a={id:"test-utils.createtestappwrapper",title:"createTestAppWrapper()",description:"API reference for createTestAppWrapper()"},s=void 0,c={unversionedId:"reference/test-utils.createtestappwrapper",id:"reference/test-utils.createtestappwrapper",title:"createTestAppWrapper()",description:"API reference for createTestAppWrapper()",source:"@site/../docs/reference/test-utils.createtestappwrapper.md",sourceDirName:"reference",slug:"/reference/test-utils.createtestappwrapper",permalink:"/docs/reference/test-utils.createtestappwrapper",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/test-utils.createtestappwrapper.md",tags:[],version:"current",frontMatter:{id:"test-utils.createtestappwrapper",title:"createTestAppWrapper()",description:"API reference for createTestAppWrapper()"}},i={},u=[{value:"Parameters",id:"parameters",level:2}];function p(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils",children:(0,n.jsx)(t.code,{children:"@backstage/test-utils"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.createtestappwrapper",children:(0,n.jsx)(t.code,{children:"createTestAppWrapper"})})]}),"\n",(0,n.jsx)(t.p,{children:"Creates a Wrapper component that wraps a component inside a Backstage test app, providing a mocked theme and app context, along with mocked APIs."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function createTestAppWrapper(options?: TestAppOptions): (props: {\n    children: ReactNode;\n}) => JSX.Element;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/test-utils.testappoptions",children:"TestAppOptions"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," Additional options for the rendering."]})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"(props: { children: ReactNode; }) => JSX.Element"})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(p,e)})):p(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,s,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var u in a=Object(arguments[i]))r.call(a,u)&&(c[u]=a[u]);if(t){s=t(a);for(var p=0;p<s.length;p++)n.call(a,s[p])&&(c[s[p]]=a[s[p]])}}return c}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,a={},u=null,p=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(p=t.ref),t)c.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:p,props:a,_owner:s.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,c=60110,i=60112;t.Suspense=60113;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),s=l("react.provider"),c=l("react.context"),i=l("react.forward_ref"),t.Suspense=l("react.suspense"),u=l("react.memo"),p=l("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function v(){}function j(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var b=j.prototype=new v;b.constructor=j,n(b,m.prototype),b.isPureReactComponent=!0;var _={current:null},g=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},s=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)g.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var u=Array(i),p=0;p<i;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:s,ref:c,props:a,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return s=s(i=e),e=""===n?"."+S(i,0):n,Array.isArray(s)?(r="",null!=e&&(r=e.replace(k,"$&/")+"/"),E(s,t,r,"",(function(e){return e}))):null!=s&&(O(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(k,"$&/")+"/")+e)),t.push(s)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=n+S(c=e[u],u);i+=E(c,t,r,p,s)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(c=e.next()).done;)i+=E(c=c.value,t,r,p=n+S(c,u++),s);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function C(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function A(){var e=R.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var a=n({},e.props),s=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=_.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)g.call(t,p)&&!w.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){u=Array(p);for(var l=0;l<p;l++)u[l]=arguments[l+2];a.children=u}return{$$typeof:o,type:e.type,key:s,ref:c,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return A().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,r){return A().useReducer(e,t,r)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>a});var n=r(667294);const o=n.createContext({});function a(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||s:a(e),n.createElement(o.Provider,{value:c},t)}}}]);