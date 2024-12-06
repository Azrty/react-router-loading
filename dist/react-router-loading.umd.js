(function(p,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react"),require("topbar"),require("react-router")):typeof define=="function"&&define.amd?define(["exports","react","topbar","react-router"],u):(p=typeof globalThis<"u"?globalThis:p||self,u(p["react-router-loading"]={},p.React,p.topbar,p.ReactRouter))})(this,function(p,u,Ne,k){"use strict";const O=u.createContext({start:()=>{},done:()=>{},restart:()=>{}});O.displayName="LoadingContext";const W=u.createContext(!1);W.displayName="LoadingGetterContext";var $={exports:{}},R={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Ae(){if(re)return R;re=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(l,f,d){var g=null;if(d!==void 0&&(g=""+d),f.key!==void 0&&(g=""+f.key),"key"in f){d={};for(var h in f)h!=="key"&&(d[h]=f[h])}else d=f;return f=d.ref,{$$typeof:i,type:l,key:g,ref:f!==void 0?f:null,props:d}}return R.Fragment=n,R.jsx=a,R.jsxs=a,R}var P={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function Oe(){return ne||(ne=1,process.env.NODE_ENV!=="production"&&function(){function i(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ze?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case Je:return"Portal";case de:return"Profiler";case fe:return"StrictMode";case I:return"Suspense";case Z:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case Ee:return(e.displayName||"Context")+".Provider";case ve:return(e._context.displayName||"Context")+".Consumer";case B:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:i(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return i(e(t))}catch{}}return null}function n(e){return""+e}function a(e){try{n(e);var t=!1}catch{t=!0}if(t){t=console;var o=t.error,s=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",s),n(e)}}function l(){}function f(){if(Y===0){pe=console.log,me=console.info,he=console.warn,xe=console.error,Ce=console.group,ye=console.groupCollapsed,Te=console.groupEnd;var e={configurable:!0,enumerable:!0,value:l,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Y++}function d(){if(Y--,Y===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:w({},e,{value:pe}),info:w({},e,{value:me}),warn:w({},e,{value:he}),error:w({},e,{value:xe}),group:w({},e,{value:Ce}),groupCollapsed:w({},e,{value:ye}),groupEnd:w({},e,{value:Te})})}0>Y&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function g(e){if(ee===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);ee=t&&t[1]||"",_e=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+e+_e}function h(e,t){if(!e||te)return"";var o=oe.get(e);if(o!==void 0)return o;te=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var s=null;s=j.H,j.H=null,f();try{var E={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(y){var G=y}Reflect.construct(e,[],T)}else{try{T.call()}catch(y){G=y}e.call(T.prototype)}}else{try{throw Error()}catch(y){G=y}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(y){if(y&&G&&typeof y.stack=="string")return[y.stack,G.stack]}return[null,null]}};E.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(E.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(E.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=E.DetermineComponentFrameRoot(),C=r[0],A=r[1];if(C&&A){var b=C.split(`
`),S=A.split(`
`);for(r=c=0;c<b.length&&!b[c].includes("DetermineComponentFrameRoot");)c++;for(;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;if(c===b.length||r===S.length)for(c=b.length-1,r=S.length-1;1<=c&&0<=r&&b[c]!==S[r];)r--;for(;1<=c&&0<=r;c--,r--)if(b[c]!==S[r]){if(c!==1||r!==1)do if(c--,r--,0>r||b[c]!==S[r]){var L=`
`+b[c].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),typeof e=="function"&&oe.set(e,L),L}while(1<=c&&0<=r);break}}}finally{te=!1,j.H=s,d(),Error.prepareStackTrace=o}return b=(b=e?e.displayName||e.name:"")?g(b):"",typeof e=="function"&&oe.set(e,b),b}function v(e){if(e==null)return"";if(typeof e=="function"){var t=e.prototype;return h(e,!(!t||!t.isReactComponent))}if(typeof e=="string")return g(e);switch(e){case I:return g("Suspense");case Z:return g("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case B:return e=h(e.render,!1),e;case Q:return v(e.type);case K:t=e._payload,e=e._init;try{return v(e(t))}catch{}}return""}function _(){var e=j.A;return e===null?null:e.getOwner()}function x(e){if(be.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function J(e,t){function o(){je||(je=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function N(){var e=i(this.type);return we[e]||(we[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function q(e,t,o,s,E,c){return o=c.ref,e={$$typeof:H,type:e,key:t,props:c,_owner:E},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:N}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function V(e,t,o,s,E,c){if(typeof e=="string"||typeof e=="function"||e===X||e===de||e===fe||e===I||e===Z||e===Ve||typeof e=="object"&&e!==null&&(e.$$typeof===K||e.$$typeof===Q||e.$$typeof===Ee||e.$$typeof===ve||e.$$typeof===B||e.$$typeof===He||e.getModuleId!==void 0)){var r=t.children;if(r!==void 0)if(s)if(D(r)){for(s=0;s<r.length;s++)le(r[s],e);Object.freeze&&Object.freeze(r)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else le(r,e)}else r="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(r+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?s="null":D(e)?s="array":e!==void 0&&e.$$typeof===H?(s="<"+(i(e.type)||"Unknown")+" />",r=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,r);if(be.call(t,"key")){r=i(e);var C=Object.keys(t).filter(function(b){return b!=="key"});s=0<C.length?"{key: someKey, "+C.join(": ..., ")+": ...}":"{key: someKey}",Se[r+s]||(C=0<C.length?"{"+C.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,s,r,C,r),Se[r+s]=!0)}if(r=null,o!==void 0&&(a(o),r=""+o),x(t)&&(a(t.key),r=""+t.key),"key"in t){o={};for(var A in t)A!=="key"&&(o[A]=t[A])}else o=t;return r&&J(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),q(e,r,c,E,_(),o)}function le(e,t){if(typeof e=="object"&&e&&e.$$typeof!==Xe){if(D(e))for(var o=0;o<e.length;o++){var s=e[o];z(s)&&ce(s,t)}else if(z(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=ge&&e[ge]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)z(e.value)&&ce(e.value,t)}}function z(e){return typeof e=="object"&&e!==null&&e.$$typeof===H}function ce(e,t){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,t=Ge(t),!ke[t])){ke[t]=!0;var o="";e&&e._owner!=null&&e._owner!==_()&&(o=null,typeof e._owner.tag=="number"?o=i(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var s=j.getCurrentStack;j.getCurrentStack=function(){var E=v(e.type);return s&&(E+=s()||""),E},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),j.getCurrentStack=s}}function Ge(e){var t="",o=_();return o&&(o=i(o.type))&&(t=`

Check the render method of \``+o+"`."),t||(e=i(e))&&(t=`

Check the top-level render call using <`+e+">."),t}var Fe=u,H=Symbol.for("react.transitional.element"),Je=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),de=Symbol.for("react.profiler"),ve=Symbol.for("react.consumer"),Ee=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Ve=Symbol.for("react.offscreen"),ge=Symbol.iterator,ze=Symbol.for("react.client.reference"),j=Fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be=Object.prototype.hasOwnProperty,w=Object.assign,He=Symbol.for("react.client.reference"),D=Array.isArray,Y=0,pe,me,he,xe,Ce,ye,Te;l.__reactDisabledLog=!0;var ee,_e,te=!1,oe=new(typeof WeakMap=="function"?WeakMap:Map),Xe=Symbol.for("react.client.reference"),je,we={},Se={},ke={};P.Fragment=X,P.jsx=function(e,t,o,s,E){return V(e,t,o,!1,s,E)},P.jsxs=function(e,t,o,s,E){return V(e,t,o,!0,s,E)}}()),P}var ae;function Re(){return ae||(ae=1,process.env.NODE_ENV==="production"?$.exports=Ae():$.exports=Oe()),$.exports}var m=Re();const Pe=({loading:i,...n})=>m.jsx(k.Route,{...n}),Me=()=>m.jsx("div",{style:{position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"white"}});function F(i){const n=[];return u.Children.forEach(i,a=>{if(!u.isValidElement(a))return;if(a.type===u.Fragment){n.push.apply(n,F(a.props.children));return}const l={caseSensitive:a.props.caseSensitive,element:a.props.element,index:a.props.index,path:a.props.path,loading:a.props.loading};a.props.children&&(l.children=F(a.props.children)),n.push(l)}),n}const U=(i,n)=>i.pathname!==n.pathname,Ye=(i,n)=>i.pathname===n.pathname,Le=(i,n)=>i.search!==n.search,se=(i,n)=>{const a=k.matchRoutes(n,i);return!a||a.length===0?!1:a[a.length-1].route.loading},ie=({routes:i,location:n,navigationType:a,hidden:l})=>{const f=k.useRoutes(i,n);return m.jsx("div",{style:l?{display:"none"}:void 0,children:u.useMemo(()=>m.jsx(k.UNSAFE_LocationContext.Provider,{value:{location:n,navigationType:a},children:f}),[n])})},ue="__loading",We=({children:i,loadingScreen:n,maxLoadingTime:a=0})=>{const l=k.useLocation(),f=k.useNavigationType(),d=u.useContext(O),g=u.useContext(W),h=u.useMemo(()=>F(i),[i]),[v,_]=u.useState(()=>({location:se(l,h)?{...l,pathname:ue}:l,navigationType:f})),[x,J]=u.useState(v),N=u.useRef(void 0);return u.useEffect(()=>{if(U(l,x.location)){const q=se(l,h);J({location:{...l},navigationType:f}),q?g?d.restart():d.start():(d.done(),_({location:{...l},navigationType:f}))}Ye(l,v.location)&&(d.done(),Le(l,v.location)&&_({location:{...l},navigationType:f}))},[l]),u.useEffect(()=>{!g&&U(v.location,x.location)&&_(x)},[g]),u.useEffect(()=>{a>0&&(N.current&&(clearTimeout(N.current),N.current=void 0),U(v.location,x.location)&&(N.current=setTimeout(()=>{d.done()},a)))},[v,x]),u.useMemo(()=>m.jsxs(m.Fragment,{children:[v.location.pathname!==ue?m.jsx(ie,{routes:h,location:v.location,navigationType:v.navigationType},v.location.pathname):n?m.jsx(n,{}):m.jsx(Me,{}),U(v.location,x.location)&&m.jsx(ie,{routes:h,location:x.location,navigationType:x.navigationType,hidden:!0},x.location.pathname)]}),[v,x])},$e=({children:i,isLoading:n=!1})=>{const[a,l]=u.useState(n),f=u.useRef(!0),d=u.useCallback(()=>{M.show(),l(!0)},[]),g=u.useCallback(()=>{M.hide(),l(!1)},[]),h=u.useCallback(()=>{M.hide(),M.show()},[]);u.useEffect(()=>{f.current?f.current=!1:n&&!a?d():a&&g()},[n]);const v=u.useMemo(()=>m.jsx(O.Provider,{value:{start:d,done:g,restart:h},children:i}),[]);return m.jsx(W.Provider,{value:a,children:v})},Ue=({children:i,loadingScreen:n,maxLoadingTime:a,isLoading:l})=>m.jsx($e,{isLoading:l,children:m.jsx(We,{loadingScreen:n,maxLoadingTime:a,children:i})}),M=Ne,qe=()=>u.useContext(O);p.LoadingContext=O,p.LoadingGetterContext=W,p.Route=Pe,p.Routes=Ue,p.topbar=M,p.useLoadingContext=qe,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=react-router-loading.umd.js.map
