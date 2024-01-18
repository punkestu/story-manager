(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))g(f);new MutationObserver(f=>{for(const v of f)if(v.type==="childList")for(const A of v.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&g(A)}).observe(document,{childList:!0,subtree:!0});function u(f){const v={};return f.integrity&&(v.integrity=f.integrity),f.referrerPolicy&&(v.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?v.credentials="include":f.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function g(f){if(f.ep)return;f.ep=!0;const v=u(f);fetch(f.href,v)}})();var Nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var h2={exports:{}},cp={},p2={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=Symbol.for("react.element"),QN=Symbol.for("react.portal"),JN=Symbol.for("react.fragment"),XN=Symbol.for("react.strict_mode"),eP=Symbol.for("react.profiler"),tP=Symbol.for("react.provider"),nP=Symbol.for("react.context"),oP=Symbol.for("react.forward_ref"),iP=Symbol.for("react.suspense"),rP=Symbol.for("react.memo"),sP=Symbol.for("react.lazy"),ny=Symbol.iterator;function aP(s){return s===null||typeof s!="object"?null:(s=ny&&s[ny]||s["@@iterator"],typeof s=="function"?s:null)}var g2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m2=Object.assign,f2={};function Xl(s,l,u){this.props=s,this.context=l,this.refs=f2,this.updater=u||g2}Xl.prototype.isReactComponent={};Xl.prototype.setState=function(s,l){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,l,"setState")};Xl.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function k2(){}k2.prototype=Xl.prototype;function Qf(s,l,u){this.props=s,this.context=l,this.refs=f2,this.updater=u||g2}var Jf=Qf.prototype=new k2;Jf.constructor=Qf;m2(Jf,Xl.prototype);Jf.isPureReactComponent=!0;var oy=Array.isArray,b2=Object.prototype.hasOwnProperty,Xf={current:null},w2={key:!0,ref:!0,__self:!0,__source:!0};function v2(s,l,u){var g,f={},v=null,A=null;if(l!=null)for(g in l.ref!==void 0&&(A=l.ref),l.key!==void 0&&(v=""+l.key),l)b2.call(l,g)&&!w2.hasOwnProperty(g)&&(f[g]=l[g]);var E=arguments.length-2;if(E===1)f.children=u;else if(1<E){for(var b=Array(E),B=0;B<E;B++)b[B]=arguments[B+2];f.children=b}if(s&&s.defaultProps)for(g in E=s.defaultProps,E)f[g]===void 0&&(f[g]=E[g]);return{$$typeof:Hd,type:s,key:v,ref:A,props:f,_owner:Xf.current}}function lP(s,l){return{$$typeof:Hd,type:s.type,key:l,ref:s.ref,props:s.props,_owner:s._owner}}function ek(s){return typeof s=="object"&&s!==null&&s.$$typeof===Hd}function cP(s){var l={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(u){return l[u]})}var iy=/\/+/g;function Im(s,l){return typeof s=="object"&&s!==null&&s.key!=null?cP(""+s.key):l.toString(36)}function Ch(s,l,u,g,f){var v=typeof s;(v==="undefined"||v==="boolean")&&(s=null);var A=!1;if(s===null)A=!0;else switch(v){case"string":case"number":A=!0;break;case"object":switch(s.$$typeof){case Hd:case QN:A=!0}}if(A)return A=s,f=f(A),s=g===""?"."+Im(A,0):g,oy(f)?(u="",s!=null&&(u=s.replace(iy,"$&/")+"/"),Ch(f,l,u,"",function(B){return B})):f!=null&&(ek(f)&&(f=lP(f,u+(!f.key||A&&A.key===f.key?"":(""+f.key).replace(iy,"$&/")+"/")+s)),l.push(f)),1;if(A=0,g=g===""?".":g+":",oy(s))for(var E=0;E<s.length;E++){v=s[E];var b=g+Im(v,E);A+=Ch(v,l,u,b,f)}else if(b=aP(s),typeof b=="function")for(s=b.call(s),E=0;!(v=s.next()).done;)v=v.value,b=g+Im(v,E++),A+=Ch(v,l,u,b,f);else if(v==="object")throw l=String(s),Error("Objects are not valid as a React child (found: "+(l==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":l)+"). If you meant to render a collection of children, use an array instead.");return A}function ih(s,l,u){if(s==null)return s;var g=[],f=0;return Ch(s,g,"","",function(v){return l.call(u,v,f++)}),g}function dP(s){if(s._status===-1){var l=s._result;l=l(),l.then(function(u){(s._status===0||s._status===-1)&&(s._status=1,s._result=u)},function(u){(s._status===0||s._status===-1)&&(s._status=2,s._result=u)}),s._status===-1&&(s._status=0,s._result=l)}if(s._status===1)return s._result.default;throw s._result}var Un={current:null},_h={transition:null},uP={ReactCurrentDispatcher:Un,ReactCurrentBatchConfig:_h,ReactCurrentOwner:Xf};Ge.Children={map:ih,forEach:function(s,l,u){ih(s,function(){l.apply(this,arguments)},u)},count:function(s){var l=0;return ih(s,function(){l++}),l},toArray:function(s){return ih(s,function(l){return l})||[]},only:function(s){if(!ek(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};Ge.Component=Xl;Ge.Fragment=JN;Ge.Profiler=eP;Ge.PureComponent=Qf;Ge.StrictMode=XN;Ge.Suspense=iP;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uP;Ge.cloneElement=function(s,l,u){if(s==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+s+".");var g=m2({},s.props),f=s.key,v=s.ref,A=s._owner;if(l!=null){if(l.ref!==void 0&&(v=l.ref,A=Xf.current),l.key!==void 0&&(f=""+l.key),s.type&&s.type.defaultProps)var E=s.type.defaultProps;for(b in l)b2.call(l,b)&&!w2.hasOwnProperty(b)&&(g[b]=l[b]===void 0&&E!==void 0?E[b]:l[b])}var b=arguments.length-2;if(b===1)g.children=u;else if(1<b){E=Array(b);for(var B=0;B<b;B++)E[B]=arguments[B+2];g.children=E}return{$$typeof:Hd,type:s.type,key:f,ref:v,props:g,_owner:A}};Ge.createContext=function(s){return s={$$typeof:nP,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},s.Provider={$$typeof:tP,_context:s},s.Consumer=s};Ge.createElement=v2;Ge.createFactory=function(s){var l=v2.bind(null,s);return l.type=s,l};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(s){return{$$typeof:oP,render:s}};Ge.isValidElement=ek;Ge.lazy=function(s){return{$$typeof:sP,_payload:{_status:-1,_result:s},_init:dP}};Ge.memo=function(s,l){return{$$typeof:rP,type:s,compare:l===void 0?null:l}};Ge.startTransition=function(s){var l=_h.transition;_h.transition={};try{s()}finally{_h.transition=l}};Ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ge.useCallback=function(s,l){return Un.current.useCallback(s,l)};Ge.useContext=function(s){return Un.current.useContext(s)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(s){return Un.current.useDeferredValue(s)};Ge.useEffect=function(s,l){return Un.current.useEffect(s,l)};Ge.useId=function(){return Un.current.useId()};Ge.useImperativeHandle=function(s,l,u){return Un.current.useImperativeHandle(s,l,u)};Ge.useInsertionEffect=function(s,l){return Un.current.useInsertionEffect(s,l)};Ge.useLayoutEffect=function(s,l){return Un.current.useLayoutEffect(s,l)};Ge.useMemo=function(s,l){return Un.current.useMemo(s,l)};Ge.useReducer=function(s,l,u){return Un.current.useReducer(s,l,u)};Ge.useRef=function(s){return Un.current.useRef(s)};Ge.useState=function(s){return Un.current.useState(s)};Ge.useSyncExternalStore=function(s,l,u){return Un.current.useSyncExternalStore(s,l,u)};Ge.useTransition=function(){return Un.current.useTransition()};Ge.version="18.2.0";p2.exports=Ge;var _e=p2.exports;const yh=Yf(_e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hP=_e,pP=Symbol.for("react.element"),gP=Symbol.for("react.fragment"),mP=Object.prototype.hasOwnProperty,fP=hP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kP={key:!0,ref:!0,__self:!0,__source:!0};function A2(s,l,u){var g,f={},v=null,A=null;u!==void 0&&(v=""+u),l.key!==void 0&&(v=""+l.key),l.ref!==void 0&&(A=l.ref);for(g in l)mP.call(l,g)&&!kP.hasOwnProperty(g)&&(f[g]=l[g]);if(s&&s.defaultProps)for(g in l=s.defaultProps,l)f[g]===void 0&&(f[g]=l[g]);return{$$typeof:pP,type:s,key:v,ref:A,props:f,_owner:fP.current}}cp.Fragment=gP;cp.jsx=A2;cp.jsxs=A2;h2.exports=cp;var Q=h2.exports,nf={},C2={exports:{}},_o={},_2={exports:{}},y2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(s){function l(ke,pe){var ge=ke.length;ke.push(pe);e:for(;0<ge;){var ot=ge-1>>>1,mt=ke[ot];if(0<f(mt,pe))ke[ot]=pe,ke[ge]=mt,ge=ot;else break e}}function u(ke){return ke.length===0?null:ke[0]}function g(ke){if(ke.length===0)return null;var pe=ke[0],ge=ke.pop();if(ge!==pe){ke[0]=ge;e:for(var ot=0,mt=ke.length,lo=mt>>>1;ot<lo;){var qn=2*(ot+1)-1,X=ke[qn],Ln=qn+1,We=ke[Ln];if(0>f(X,ge))Ln<mt&&0>f(We,X)?(ke[ot]=We,ke[Ln]=ge,ot=Ln):(ke[ot]=X,ke[qn]=ge,ot=qn);else if(Ln<mt&&0>f(We,ge))ke[ot]=We,ke[Ln]=ge,ot=Ln;else break e}}return pe}function f(ke,pe){var ge=ke.sortIndex-pe.sortIndex;return ge!==0?ge:ke.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;s.unstable_now=function(){return v.now()}}else{var A=Date,E=A.now();s.unstable_now=function(){return A.now()-E}}var b=[],B=[],O=1,D=null,y=3,M=!1,V=!1,W=!1,G=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(ke){for(var pe=u(B);pe!==null;){if(pe.callback===null)g(B);else if(pe.startTime<=ke)g(B),pe.sortIndex=pe.expirationTime,l(b,pe);else break;pe=u(B)}}function Y(ke){if(W=!1,H(ke),!V)if(u(b)!==null)V=!0,Re(ne);else{var pe=u(B);pe!==null&&tt(Y,pe.startTime-ke)}}function ne(ke,pe){V=!1,W&&(W=!1,F(z),z=-1),M=!0;var ge=y;try{for(H(pe),D=u(b);D!==null&&(!(D.expirationTime>pe)||ke&&!Ne());){var ot=D.callback;if(typeof ot=="function"){D.callback=null,y=D.priorityLevel;var mt=ot(D.expirationTime<=pe);pe=s.unstable_now(),typeof mt=="function"?D.callback=mt:D===u(b)&&g(b),H(pe)}else g(b);D=u(b)}if(D!==null)var lo=!0;else{var qn=u(B);qn!==null&&tt(Y,qn.startTime-pe),lo=!1}return lo}finally{D=null,y=ge,M=!1}}var ue=!1,te=null,z=-1,re=5,fe=-1;function Ne(){return!(s.unstable_now()-fe<re)}function Ue(){if(te!==null){var ke=s.unstable_now();fe=ke;var pe=!0;try{pe=te(!0,ke)}finally{pe?Ve():(ue=!1,te=null)}}else ue=!1}var Ve;if(typeof R=="function")Ve=function(){R(Ue)};else if(typeof MessageChannel<"u"){var sn=new MessageChannel,St=sn.port2;sn.port1.onmessage=Ue,Ve=function(){St.postMessage(null)}}else Ve=function(){G(Ue,0)};function Re(ke){te=ke,ue||(ue=!0,Ve())}function tt(ke,pe){z=G(function(){ke(s.unstable_now())},pe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ke){ke.callback=null},s.unstable_continueExecution=function(){V||M||(V=!0,Re(ne))},s.unstable_forceFrameRate=function(ke){0>ke||125<ke?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<ke?Math.floor(1e3/ke):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return u(b)},s.unstable_next=function(ke){switch(y){case 1:case 2:case 3:var pe=3;break;default:pe=y}var ge=y;y=pe;try{return ke()}finally{y=ge}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ke,pe){switch(ke){case 1:case 2:case 3:case 4:case 5:break;default:ke=3}var ge=y;y=ke;try{return pe()}finally{y=ge}},s.unstable_scheduleCallback=function(ke,pe,ge){var ot=s.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?ot+ge:ot):ge=ot,ke){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=ge+mt,ke={id:O++,callback:pe,priorityLevel:ke,startTime:ge,expirationTime:mt,sortIndex:-1},ge>ot?(ke.sortIndex=ge,l(B,ke),u(b)===null&&ke===u(B)&&(W?(F(z),z=-1):W=!0,tt(Y,ge-ot))):(ke.sortIndex=mt,l(b,ke),V||M||(V=!0,Re(ne))),ke},s.unstable_shouldYield=Ne,s.unstable_wrapCallback=function(ke){var pe=y;return function(){var ge=y;y=pe;try{return ke.apply(this,arguments)}finally{y=ge}}}})(y2);_2.exports=y2;var bP=_2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x2=_e,Co=bP;function de(s){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+s,u=1;u<arguments.length;u++)l+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+s+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E2=new Set,xd={};function Ia(s,l){Gl(s,l),Gl(s+"Capture",l)}function Gl(s,l){for(xd[s]=l,s=0;s<l.length;s++)E2.add(l[s])}var xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=Object.prototype.hasOwnProperty,wP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ry={},sy={};function vP(s){return of.call(sy,s)?!0:of.call(ry,s)?!1:wP.test(s)?sy[s]=!0:(ry[s]=!0,!1)}function AP(s,l,u,g){if(u!==null&&u.type===0)return!1;switch(typeof l){case"function":case"symbol":return!0;case"boolean":return g?!1:u!==null?!u.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function CP(s,l,u,g){if(l===null||typeof l>"u"||AP(s,l,u,g))return!0;if(g)return!1;if(u!==null)switch(u.type){case 3:return!l;case 4:return l===!1;case 5:return isNaN(l);case 6:return isNaN(l)||1>l}return!1}function Wn(s,l,u,g,f,v,A){this.acceptsBooleans=l===2||l===3||l===4,this.attributeName=g,this.attributeNamespace=f,this.mustUseProperty=u,this.propertyName=s,this.type=l,this.sanitizeURL=v,this.removeEmptyString=A}var yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){yn[s]=new Wn(s,0,!1,s,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var l=s[0];yn[l]=new Wn(l,1,!1,s[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(s){yn[s]=new Wn(s,2,!1,s.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){yn[s]=new Wn(s,2,!1,s,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){yn[s]=new Wn(s,3,!1,s.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(s){yn[s]=new Wn(s,3,!0,s,null,!1,!1)});["capture","download"].forEach(function(s){yn[s]=new Wn(s,4,!1,s,null,!1,!1)});["cols","rows","size","span"].forEach(function(s){yn[s]=new Wn(s,6,!1,s,null,!1,!1)});["rowSpan","start"].forEach(function(s){yn[s]=new Wn(s,5,!1,s.toLowerCase(),null,!1,!1)});var tk=/[\-:]([a-z])/g;function nk(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var l=s.replace(tk,nk);yn[l]=new Wn(l,1,!1,s,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var l=s.replace(tk,nk);yn[l]=new Wn(l,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(s){var l=s.replace(tk,nk);yn[l]=new Wn(l,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(s){yn[s]=new Wn(s,1,!1,s.toLowerCase(),null,!1,!1)});yn.xlinkHref=new Wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(s){yn[s]=new Wn(s,1,!1,s.toLowerCase(),null,!0,!0)});function ok(s,l,u,g){var f=yn.hasOwnProperty(l)?yn[l]:null;(f!==null?f.type!==0:g||!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(CP(l,u,f,g)&&(u=null),g||f===null?vP(l)&&(u===null?s.removeAttribute(l):s.setAttribute(l,""+u)):f.mustUseProperty?s[f.propertyName]=u===null?f.type===3?!1:"":u:(l=f.attributeName,g=f.attributeNamespace,u===null?s.removeAttribute(l):(f=f.type,u=f===3||f===4&&u===!0?"":""+u,g?s.setAttributeNS(g,l,u):s.setAttribute(l,u))))}var Ir=x2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rh=Symbol.for("react.element"),Sl=Symbol.for("react.portal"),Il=Symbol.for("react.fragment"),ik=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),D2=Symbol.for("react.provider"),S2=Symbol.for("react.context"),rk=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),af=Symbol.for("react.suspense_list"),sk=Symbol.for("react.memo"),as=Symbol.for("react.lazy"),I2=Symbol.for("react.offscreen"),ay=Symbol.iterator;function id(s){return s===null||typeof s!="object"?null:(s=ay&&s[ay]||s["@@iterator"],typeof s=="function"?s:null)}var Dt=Object.assign,Tm;function hd(s){if(Tm===void 0)try{throw Error()}catch(u){var l=u.stack.trim().match(/\n( *(at )?)/);Tm=l&&l[1]||""}return`
`+Tm+s}var Mm=!1;function Bm(s,l){if(!s||Mm)return"";Mm=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(B){var g=B}Reflect.construct(s,[],l)}else{try{l.call()}catch(B){g=B}s.call(l.prototype)}else{try{throw Error()}catch(B){g=B}s()}}catch(B){if(B&&g&&typeof B.stack=="string"){for(var f=B.stack.split(`
`),v=g.stack.split(`
`),A=f.length-1,E=v.length-1;1<=A&&0<=E&&f[A]!==v[E];)E--;for(;1<=A&&0<=E;A--,E--)if(f[A]!==v[E]){if(A!==1||E!==1)do if(A--,E--,0>E||f[A]!==v[E]){var b=`
`+f[A].replace(" at new "," at ");return s.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",s.displayName)),b}while(1<=A&&0<=E);break}}}finally{Mm=!1,Error.prepareStackTrace=u}return(s=s?s.displayName||s.name:"")?hd(s):""}function _P(s){switch(s.tag){case 5:return hd(s.type);case 16:return hd("Lazy");case 13:return hd("Suspense");case 19:return hd("SuspenseList");case 0:case 2:case 15:return s=Bm(s.type,!1),s;case 11:return s=Bm(s.type.render,!1),s;case 1:return s=Bm(s.type,!0),s;default:return""}}function lf(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case Il:return"Fragment";case Sl:return"Portal";case rf:return"Profiler";case ik:return"StrictMode";case sf:return"Suspense";case af:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case S2:return(s.displayName||"Context")+".Consumer";case D2:return(s._context.displayName||"Context")+".Provider";case rk:var l=s.render;return s=s.displayName,s||(s=l.displayName||l.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case sk:return l=s.displayName||null,l!==null?l:lf(s.type)||"Memo";case as:l=s._payload,s=s._init;try{return lf(s(l))}catch{}}return null}function yP(s){var l=s.type;switch(s.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=l.render,s=s.displayName||s.name||"",l.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lf(l);case 8:return l===ik?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function As(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function T2(s){var l=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function xP(s){var l=T2(s)?"checked":"value",u=Object.getOwnPropertyDescriptor(s.constructor.prototype,l),g=""+s[l];if(!s.hasOwnProperty(l)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var f=u.get,v=u.set;return Object.defineProperty(s,l,{configurable:!0,get:function(){return f.call(this)},set:function(A){g=""+A,v.call(this,A)}}),Object.defineProperty(s,l,{enumerable:u.enumerable}),{getValue:function(){return g},setValue:function(A){g=""+A},stopTracking:function(){s._valueTracker=null,delete s[l]}}}}function sh(s){s._valueTracker||(s._valueTracker=xP(s))}function M2(s){if(!s)return!1;var l=s._valueTracker;if(!l)return!0;var u=l.getValue(),g="";return s&&(g=T2(s)?s.checked?"true":"false":s.value),s=g,s!==u?(l.setValue(s),!0):!1}function zh(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function cf(s,l){var u=l.checked;return Dt({},l,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??s._wrapperState.initialChecked})}function ly(s,l){var u=l.defaultValue==null?"":l.defaultValue,g=l.checked!=null?l.checked:l.defaultChecked;u=As(l.value!=null?l.value:u),s._wrapperState={initialChecked:g,initialValue:u,controlled:l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null}}function B2(s,l){l=l.checked,l!=null&&ok(s,"checked",l,!1)}function df(s,l){B2(s,l);var u=As(l.value),g=l.type;if(u!=null)g==="number"?(u===0&&s.value===""||s.value!=u)&&(s.value=""+u):s.value!==""+u&&(s.value=""+u);else if(g==="submit"||g==="reset"){s.removeAttribute("value");return}l.hasOwnProperty("value")?uf(s,l.type,u):l.hasOwnProperty("defaultValue")&&uf(s,l.type,As(l.defaultValue)),l.checked==null&&l.defaultChecked!=null&&(s.defaultChecked=!!l.defaultChecked)}function cy(s,l,u){if(l.hasOwnProperty("value")||l.hasOwnProperty("defaultValue")){var g=l.type;if(!(g!=="submit"&&g!=="reset"||l.value!==void 0&&l.value!==null))return;l=""+s._wrapperState.initialValue,u||l===s.value||(s.value=l),s.defaultValue=l}u=s.name,u!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,u!==""&&(s.name=u)}function uf(s,l,u){(l!=="number"||zh(s.ownerDocument)!==s)&&(u==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+u&&(s.defaultValue=""+u))}var pd=Array.isArray;function Fl(s,l,u,g){if(s=s.options,l){l={};for(var f=0;f<u.length;f++)l["$"+u[f]]=!0;for(u=0;u<s.length;u++)f=l.hasOwnProperty("$"+s[u].value),s[u].selected!==f&&(s[u].selected=f),f&&g&&(s[u].defaultSelected=!0)}else{for(u=""+As(u),l=null,f=0;f<s.length;f++){if(s[f].value===u){s[f].selected=!0,g&&(s[f].defaultSelected=!0);return}l!==null||s[f].disabled||(l=s[f])}l!==null&&(l.selected=!0)}}function hf(s,l){if(l.dangerouslySetInnerHTML!=null)throw Error(de(91));return Dt({},l,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function dy(s,l){var u=l.value;if(u==null){if(u=l.children,l=l.defaultValue,u!=null){if(l!=null)throw Error(de(92));if(pd(u)){if(1<u.length)throw Error(de(93));u=u[0]}l=u}l==null&&(l=""),u=l}s._wrapperState={initialValue:As(u)}}function N2(s,l){var u=As(l.value),g=As(l.defaultValue);u!=null&&(u=""+u,u!==s.value&&(s.value=u),l.defaultValue==null&&s.defaultValue!==u&&(s.defaultValue=u)),g!=null&&(s.defaultValue=""+g)}function uy(s){var l=s.textContent;l===s._wrapperState.initialValue&&l!==""&&l!==null&&(s.value=l)}function P2(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pf(s,l){return s==null||s==="http://www.w3.org/1999/xhtml"?P2(l):s==="http://www.w3.org/2000/svg"&&l==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var ah,O2=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(l,u,g,f){MSApp.execUnsafeLocalFunction(function(){return s(l,u,g,f)})}:s}(function(s,l){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=l;else{for(ah=ah||document.createElement("div"),ah.innerHTML="<svg>"+l.valueOf().toString()+"</svg>",l=ah.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;l.firstChild;)s.appendChild(l.firstChild)}});function Ed(s,l){if(l){var u=s.firstChild;if(u&&u===s.lastChild&&u.nodeType===3){u.nodeValue=l;return}}s.textContent=l}var fd={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},EP=["Webkit","ms","Moz","O"];Object.keys(fd).forEach(function(s){EP.forEach(function(l){l=l+s.charAt(0).toUpperCase()+s.substring(1),fd[l]=fd[s]})});function L2(s,l,u){return l==null||typeof l=="boolean"||l===""?"":u||typeof l!="number"||l===0||fd.hasOwnProperty(s)&&fd[s]?(""+l).trim():l+"px"}function z2(s,l){s=s.style;for(var u in l)if(l.hasOwnProperty(u)){var g=u.indexOf("--")===0,f=L2(u,l[u],g);u==="float"&&(u="cssFloat"),g?s.setProperty(u,f):s[u]=f}}var DP=Dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gf(s,l){if(l){if(DP[s]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(de(137,s));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(de(60));if(typeof l.dangerouslySetInnerHTML!="object"||!("__html"in l.dangerouslySetInnerHTML))throw Error(de(61))}if(l.style!=null&&typeof l.style!="object")throw Error(de(62))}}function mf(s,l){if(s.indexOf("-")===-1)return typeof l.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function ak(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var kf=null,Vl=null,Hl=null;function hy(s){if(s=qd(s)){if(typeof kf!="function")throw Error(de(280));var l=s.stateNode;l&&(l=gp(l),kf(s.stateNode,s.type,l))}}function j2(s){Vl?Hl?Hl.push(s):Hl=[s]:Vl=s}function R2(){if(Vl){var s=Vl,l=Hl;if(Hl=Vl=null,hy(s),l)for(s=0;s<l.length;s++)hy(l[s])}}function F2(s,l){return s(l)}function V2(){}var Nm=!1;function H2(s,l,u){if(Nm)return s(l,u);Nm=!0;try{return F2(s,l,u)}finally{Nm=!1,(Vl!==null||Hl!==null)&&(V2(),R2())}}function Dd(s,l){var u=s.stateNode;if(u===null)return null;var g=gp(u);if(g===null)return null;u=g[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(g=!g.disabled)||(s=s.type,g=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!g;break e;default:s=!1}if(s)return null;if(u&&typeof u!="function")throw Error(de(231,l,typeof u));return u}var bf=!1;if(xr)try{var rd={};Object.defineProperty(rd,"passive",{get:function(){bf=!0}}),window.addEventListener("test",rd,rd),window.removeEventListener("test",rd,rd)}catch{bf=!1}function SP(s,l,u,g,f,v,A,E,b){var B=Array.prototype.slice.call(arguments,3);try{l.apply(u,B)}catch(O){this.onError(O)}}var kd=!1,jh=null,Rh=!1,wf=null,IP={onError:function(s){kd=!0,jh=s}};function TP(s,l,u,g,f,v,A,E,b){kd=!1,jh=null,SP.apply(IP,arguments)}function MP(s,l,u,g,f,v,A,E,b){if(TP.apply(this,arguments),kd){if(kd){var B=jh;kd=!1,jh=null}else throw Error(de(198));Rh||(Rh=!0,wf=B)}}function Ta(s){var l=s,u=s;if(s.alternate)for(;l.return;)l=l.return;else{s=l;do l=s,l.flags&4098&&(u=l.return),s=l.return;while(s)}return l.tag===3?u:null}function U2(s){if(s.tag===13){var l=s.memoizedState;if(l===null&&(s=s.alternate,s!==null&&(l=s.memoizedState)),l!==null)return l.dehydrated}return null}function py(s){if(Ta(s)!==s)throw Error(de(188))}function BP(s){var l=s.alternate;if(!l){if(l=Ta(s),l===null)throw Error(de(188));return l!==s?null:s}for(var u=s,g=l;;){var f=u.return;if(f===null)break;var v=f.alternate;if(v===null){if(g=f.return,g!==null){u=g;continue}break}if(f.child===v.child){for(v=f.child;v;){if(v===u)return py(f),s;if(v===g)return py(f),l;v=v.sibling}throw Error(de(188))}if(u.return!==g.return)u=f,g=v;else{for(var A=!1,E=f.child;E;){if(E===u){A=!0,u=f,g=v;break}if(E===g){A=!0,g=f,u=v;break}E=E.sibling}if(!A){for(E=v.child;E;){if(E===u){A=!0,u=v,g=f;break}if(E===g){A=!0,g=v,u=f;break}E=E.sibling}if(!A)throw Error(de(189))}}if(u.alternate!==g)throw Error(de(190))}if(u.tag!==3)throw Error(de(188));return u.stateNode.current===u?s:l}function W2(s){return s=BP(s),s!==null?q2(s):null}function q2(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var l=q2(s);if(l!==null)return l;s=s.sibling}return null}var G2=Co.unstable_scheduleCallback,gy=Co.unstable_cancelCallback,NP=Co.unstable_shouldYield,PP=Co.unstable_requestPaint,Ht=Co.unstable_now,OP=Co.unstable_getCurrentPriorityLevel,lk=Co.unstable_ImmediatePriority,Z2=Co.unstable_UserBlockingPriority,Fh=Co.unstable_NormalPriority,LP=Co.unstable_LowPriority,$2=Co.unstable_IdlePriority,dp=null,Zi=null;function zP(s){if(Zi&&typeof Zi.onCommitFiberRoot=="function")try{Zi.onCommitFiberRoot(dp,s,void 0,(s.current.flags&128)===128)}catch{}}var fi=Math.clz32?Math.clz32:FP,jP=Math.log,RP=Math.LN2;function FP(s){return s>>>=0,s===0?32:31-(jP(s)/RP|0)|0}var lh=64,ch=4194304;function gd(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function Vh(s,l){var u=s.pendingLanes;if(u===0)return 0;var g=0,f=s.suspendedLanes,v=s.pingedLanes,A=u&268435455;if(A!==0){var E=A&~f;E!==0?g=gd(E):(v&=A,v!==0&&(g=gd(v)))}else A=u&~f,A!==0?g=gd(A):v!==0&&(g=gd(v));if(g===0)return 0;if(l!==0&&l!==g&&!(l&f)&&(f=g&-g,v=l&-l,f>=v||f===16&&(v&4194240)!==0))return l;if(g&4&&(g|=u&16),l=s.entangledLanes,l!==0)for(s=s.entanglements,l&=g;0<l;)u=31-fi(l),f=1<<u,g|=s[u],l&=~f;return g}function VP(s,l){switch(s){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HP(s,l){for(var u=s.suspendedLanes,g=s.pingedLanes,f=s.expirationTimes,v=s.pendingLanes;0<v;){var A=31-fi(v),E=1<<A,b=f[A];b===-1?(!(E&u)||E&g)&&(f[A]=VP(E,l)):b<=l&&(s.expiredLanes|=E),v&=~E}}function vf(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function K2(){var s=lh;return lh<<=1,!(lh&4194240)&&(lh=64),s}function Pm(s){for(var l=[],u=0;31>u;u++)l.push(s);return l}function Ud(s,l,u){s.pendingLanes|=l,l!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,l=31-fi(l),s[l]=u}function UP(s,l){var u=s.pendingLanes&~l;s.pendingLanes=l,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=l,s.mutableReadLanes&=l,s.entangledLanes&=l,l=s.entanglements;var g=s.eventTimes;for(s=s.expirationTimes;0<u;){var f=31-fi(u),v=1<<f;l[f]=0,g[f]=-1,s[f]=-1,u&=~v}}function ck(s,l){var u=s.entangledLanes|=l;for(s=s.entanglements;u;){var g=31-fi(u),f=1<<g;f&l|s[g]&l&&(s[g]|=l),u&=~f}}var lt=0;function Y2(s){return s&=-s,1<s?4<s?s&268435455?16:536870912:4:1}var Q2,dk,J2,X2,ex,Af=!1,dh=[],ps=null,gs=null,ms=null,Sd=new Map,Id=new Map,cs=[],WP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function my(s,l){switch(s){case"focusin":case"focusout":ps=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":Sd.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":Id.delete(l.pointerId)}}function sd(s,l,u,g,f,v){return s===null||s.nativeEvent!==v?(s={blockedOn:l,domEventName:u,eventSystemFlags:g,nativeEvent:v,targetContainers:[f]},l!==null&&(l=qd(l),l!==null&&dk(l)),s):(s.eventSystemFlags|=g,l=s.targetContainers,f!==null&&l.indexOf(f)===-1&&l.push(f),s)}function qP(s,l,u,g,f){switch(l){case"focusin":return ps=sd(ps,s,l,u,g,f),!0;case"dragenter":return gs=sd(gs,s,l,u,g,f),!0;case"mouseover":return ms=sd(ms,s,l,u,g,f),!0;case"pointerover":var v=f.pointerId;return Sd.set(v,sd(Sd.get(v)||null,s,l,u,g,f)),!0;case"gotpointercapture":return v=f.pointerId,Id.set(v,sd(Id.get(v)||null,s,l,u,g,f)),!0}return!1}function tx(s){var l=wa(s.target);if(l!==null){var u=Ta(l);if(u!==null){if(l=u.tag,l===13){if(l=U2(u),l!==null){s.blockedOn=l,ex(s.priority,function(){J2(u)});return}}else if(l===3&&u.stateNode.current.memoizedState.isDehydrated){s.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}s.blockedOn=null}function xh(s){if(s.blockedOn!==null)return!1;for(var l=s.targetContainers;0<l.length;){var u=Cf(s.domEventName,s.eventSystemFlags,l[0],s.nativeEvent);if(u===null){u=s.nativeEvent;var g=new u.constructor(u.type,u);ff=g,u.target.dispatchEvent(g),ff=null}else return l=qd(u),l!==null&&dk(l),s.blockedOn=u,!1;l.shift()}return!0}function fy(s,l,u){xh(s)&&u.delete(l)}function GP(){Af=!1,ps!==null&&xh(ps)&&(ps=null),gs!==null&&xh(gs)&&(gs=null),ms!==null&&xh(ms)&&(ms=null),Sd.forEach(fy),Id.forEach(fy)}function ad(s,l){s.blockedOn===l&&(s.blockedOn=null,Af||(Af=!0,Co.unstable_scheduleCallback(Co.unstable_NormalPriority,GP)))}function Td(s){function l(f){return ad(f,s)}if(0<dh.length){ad(dh[0],s);for(var u=1;u<dh.length;u++){var g=dh[u];g.blockedOn===s&&(g.blockedOn=null)}}for(ps!==null&&ad(ps,s),gs!==null&&ad(gs,s),ms!==null&&ad(ms,s),Sd.forEach(l),Id.forEach(l),u=0;u<cs.length;u++)g=cs[u],g.blockedOn===s&&(g.blockedOn=null);for(;0<cs.length&&(u=cs[0],u.blockedOn===null);)tx(u),u.blockedOn===null&&cs.shift()}var Ul=Ir.ReactCurrentBatchConfig,Hh=!0;function ZP(s,l,u,g){var f=lt,v=Ul.transition;Ul.transition=null;try{lt=1,uk(s,l,u,g)}finally{lt=f,Ul.transition=v}}function $P(s,l,u,g){var f=lt,v=Ul.transition;Ul.transition=null;try{lt=4,uk(s,l,u,g)}finally{lt=f,Ul.transition=v}}function uk(s,l,u,g){if(Hh){var f=Cf(s,l,u,g);if(f===null)Wm(s,l,g,Uh,u),my(s,g);else if(qP(f,s,l,u,g))g.stopPropagation();else if(my(s,g),l&4&&-1<WP.indexOf(s)){for(;f!==null;){var v=qd(f);if(v!==null&&Q2(v),v=Cf(s,l,u,g),v===null&&Wm(s,l,g,Uh,u),v===f)break;f=v}f!==null&&g.stopPropagation()}else Wm(s,l,g,null,u)}}var Uh=null;function Cf(s,l,u,g){if(Uh=null,s=ak(g),s=wa(s),s!==null)if(l=Ta(s),l===null)s=null;else if(u=l.tag,u===13){if(s=U2(l),s!==null)return s;s=null}else if(u===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;s=null}else l!==s&&(s=null);return Uh=s,null}function nx(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OP()){case lk:return 1;case Z2:return 4;case Fh:case LP:return 16;case $2:return 536870912;default:return 16}default:return 16}}var us=null,hk=null,Eh=null;function ox(){if(Eh)return Eh;var s,l=hk,u=l.length,g,f="value"in us?us.value:us.textContent,v=f.length;for(s=0;s<u&&l[s]===f[s];s++);var A=u-s;for(g=1;g<=A&&l[u-g]===f[v-g];g++);return Eh=f.slice(s,1<g?1-g:void 0)}function Dh(s){var l=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&l===13&&(s=13)):s=l,s===10&&(s=13),32<=s||s===13?s:0}function uh(){return!0}function ky(){return!1}function yo(s){function l(u,g,f,v,A){this._reactName=u,this._targetInst=f,this.type=g,this.nativeEvent=v,this.target=A,this.currentTarget=null;for(var E in s)s.hasOwnProperty(E)&&(u=s[E],this[E]=u?u(v):v[E]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?uh:ky,this.isPropagationStopped=ky,this}return Dt(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=uh)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=uh)},persist:function(){},isPersistent:uh}),l}var ec={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pk=yo(ec),Wd=Dt({},ec,{view:0,detail:0}),KP=yo(Wd),Om,Lm,ld,up=Dt({},Wd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gk,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==ld&&(ld&&s.type==="mousemove"?(Om=s.screenX-ld.screenX,Lm=s.screenY-ld.screenY):Lm=Om=0,ld=s),Om)},movementY:function(s){return"movementY"in s?s.movementY:Lm}}),by=yo(up),YP=Dt({},up,{dataTransfer:0}),QP=yo(YP),JP=Dt({},Wd,{relatedTarget:0}),zm=yo(JP),XP=Dt({},ec,{animationName:0,elapsedTime:0,pseudoElement:0}),eO=yo(XP),tO=Dt({},ec,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),nO=yo(tO),oO=Dt({},ec,{data:0}),wy=yo(oO),iO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aO(s){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(s):(s=sO[s])?!!l[s]:!1}function gk(){return aO}var lO=Dt({},Wd,{key:function(s){if(s.key){var l=iO[s.key]||s.key;if(l!=="Unidentified")return l}return s.type==="keypress"?(s=Dh(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?rO[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gk,charCode:function(s){return s.type==="keypress"?Dh(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Dh(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),cO=yo(lO),dO=Dt({},up,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vy=yo(dO),uO=Dt({},Wd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gk}),hO=yo(uO),pO=Dt({},ec,{propertyName:0,elapsedTime:0,pseudoElement:0}),gO=yo(pO),mO=Dt({},up,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),fO=yo(mO),kO=[9,13,27,32],mk=xr&&"CompositionEvent"in window,bd=null;xr&&"documentMode"in document&&(bd=document.documentMode);var bO=xr&&"TextEvent"in window&&!bd,ix=xr&&(!mk||bd&&8<bd&&11>=bd),Ay=" ",Cy=!1;function rx(s,l){switch(s){case"keyup":return kO.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sx(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Tl=!1;function wO(s,l){switch(s){case"compositionend":return sx(l);case"keypress":return l.which!==32?null:(Cy=!0,Ay);case"textInput":return s=l.data,s===Ay&&Cy?null:s;default:return null}}function vO(s,l){if(Tl)return s==="compositionend"||!mk&&rx(s,l)?(s=ox(),Eh=hk=us=null,Tl=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return ix&&l.locale!=="ko"?null:l.data;default:return null}}var AO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _y(s){var l=s&&s.nodeName&&s.nodeName.toLowerCase();return l==="input"?!!AO[s.type]:l==="textarea"}function ax(s,l,u,g){j2(g),l=Wh(l,"onChange"),0<l.length&&(u=new pk("onChange","change",null,u,g),s.push({event:u,listeners:l}))}var wd=null,Md=null;function CO(s){bx(s,0)}function hp(s){var l=Nl(s);if(M2(l))return s}function _O(s,l){if(s==="change")return l}var lx=!1;if(xr){var jm;if(xr){var Rm="oninput"in document;if(!Rm){var yy=document.createElement("div");yy.setAttribute("oninput","return;"),Rm=typeof yy.oninput=="function"}jm=Rm}else jm=!1;lx=jm&&(!document.documentMode||9<document.documentMode)}function xy(){wd&&(wd.detachEvent("onpropertychange",cx),Md=wd=null)}function cx(s){if(s.propertyName==="value"&&hp(Md)){var l=[];ax(l,Md,s,ak(s)),H2(CO,l)}}function yO(s,l,u){s==="focusin"?(xy(),wd=l,Md=u,wd.attachEvent("onpropertychange",cx)):s==="focusout"&&xy()}function xO(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return hp(Md)}function EO(s,l){if(s==="click")return hp(l)}function DO(s,l){if(s==="input"||s==="change")return hp(l)}function SO(s,l){return s===l&&(s!==0||1/s===1/l)||s!==s&&l!==l}var bi=typeof Object.is=="function"?Object.is:SO;function Bd(s,l){if(bi(s,l))return!0;if(typeof s!="object"||s===null||typeof l!="object"||l===null)return!1;var u=Object.keys(s),g=Object.keys(l);if(u.length!==g.length)return!1;for(g=0;g<u.length;g++){var f=u[g];if(!of.call(l,f)||!bi(s[f],l[f]))return!1}return!0}function Ey(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function Dy(s,l){var u=Ey(s);s=0;for(var g;u;){if(u.nodeType===3){if(g=s+u.textContent.length,s<=l&&g>=l)return{node:u,offset:l-s};s=g}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=Ey(u)}}function dx(s,l){return s&&l?s===l?!0:s&&s.nodeType===3?!1:l&&l.nodeType===3?dx(s,l.parentNode):"contains"in s?s.contains(l):s.compareDocumentPosition?!!(s.compareDocumentPosition(l)&16):!1:!1}function ux(){for(var s=window,l=zh();l instanceof s.HTMLIFrameElement;){try{var u=typeof l.contentWindow.location.href=="string"}catch{u=!1}if(u)s=l.contentWindow;else break;l=zh(s.document)}return l}function fk(s){var l=s&&s.nodeName&&s.nodeName.toLowerCase();return l&&(l==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||l==="textarea"||s.contentEditable==="true")}function IO(s){var l=ux(),u=s.focusedElem,g=s.selectionRange;if(l!==u&&u&&u.ownerDocument&&dx(u.ownerDocument.documentElement,u)){if(g!==null&&fk(u)){if(l=g.start,s=g.end,s===void 0&&(s=l),"selectionStart"in u)u.selectionStart=l,u.selectionEnd=Math.min(s,u.value.length);else if(s=(l=u.ownerDocument||document)&&l.defaultView||window,s.getSelection){s=s.getSelection();var f=u.textContent.length,v=Math.min(g.start,f);g=g.end===void 0?v:Math.min(g.end,f),!s.extend&&v>g&&(f=g,g=v,v=f),f=Dy(u,v);var A=Dy(u,g);f&&A&&(s.rangeCount!==1||s.anchorNode!==f.node||s.anchorOffset!==f.offset||s.focusNode!==A.node||s.focusOffset!==A.offset)&&(l=l.createRange(),l.setStart(f.node,f.offset),s.removeAllRanges(),v>g?(s.addRange(l),s.extend(A.node,A.offset)):(l.setEnd(A.node,A.offset),s.addRange(l)))}}for(l=[],s=u;s=s.parentNode;)s.nodeType===1&&l.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<l.length;u++)s=l[u],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var TO=xr&&"documentMode"in document&&11>=document.documentMode,Ml=null,_f=null,vd=null,yf=!1;function Sy(s,l,u){var g=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;yf||Ml==null||Ml!==zh(g)||(g=Ml,"selectionStart"in g&&fk(g)?g={start:g.selectionStart,end:g.selectionEnd}:(g=(g.ownerDocument&&g.ownerDocument.defaultView||window).getSelection(),g={anchorNode:g.anchorNode,anchorOffset:g.anchorOffset,focusNode:g.focusNode,focusOffset:g.focusOffset}),vd&&Bd(vd,g)||(vd=g,g=Wh(_f,"onSelect"),0<g.length&&(l=new pk("onSelect","select",null,l,u),s.push({event:l,listeners:g}),l.target=Ml)))}function hh(s,l){var u={};return u[s.toLowerCase()]=l.toLowerCase(),u["Webkit"+s]="webkit"+l,u["Moz"+s]="moz"+l,u}var Bl={animationend:hh("Animation","AnimationEnd"),animationiteration:hh("Animation","AnimationIteration"),animationstart:hh("Animation","AnimationStart"),transitionend:hh("Transition","TransitionEnd")},Fm={},hx={};xr&&(hx=document.createElement("div").style,"AnimationEvent"in window||(delete Bl.animationend.animation,delete Bl.animationiteration.animation,delete Bl.animationstart.animation),"TransitionEvent"in window||delete Bl.transitionend.transition);function pp(s){if(Fm[s])return Fm[s];if(!Bl[s])return s;var l=Bl[s],u;for(u in l)if(l.hasOwnProperty(u)&&u in hx)return Fm[s]=l[u];return s}var px=pp("animationend"),gx=pp("animationiteration"),mx=pp("animationstart"),fx=pp("transitionend"),kx=new Map,Iy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _s(s,l){kx.set(s,l),Ia(l,[s])}for(var Vm=0;Vm<Iy.length;Vm++){var Hm=Iy[Vm],MO=Hm.toLowerCase(),BO=Hm[0].toUpperCase()+Hm.slice(1);_s(MO,"on"+BO)}_s(px,"onAnimationEnd");_s(gx,"onAnimationIteration");_s(mx,"onAnimationStart");_s("dblclick","onDoubleClick");_s("focusin","onFocus");_s("focusout","onBlur");_s(fx,"onTransitionEnd");Gl("onMouseEnter",["mouseout","mouseover"]);Gl("onMouseLeave",["mouseout","mouseover"]);Gl("onPointerEnter",["pointerout","pointerover"]);Gl("onPointerLeave",["pointerout","pointerover"]);Ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ia("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var md="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NO=new Set("cancel close invalid load scroll toggle".split(" ").concat(md));function Ty(s,l,u){var g=s.type||"unknown-event";s.currentTarget=u,MP(g,l,void 0,s),s.currentTarget=null}function bx(s,l){l=(l&4)!==0;for(var u=0;u<s.length;u++){var g=s[u],f=g.event;g=g.listeners;e:{var v=void 0;if(l)for(var A=g.length-1;0<=A;A--){var E=g[A],b=E.instance,B=E.currentTarget;if(E=E.listener,b!==v&&f.isPropagationStopped())break e;Ty(f,E,B),v=b}else for(A=0;A<g.length;A++){if(E=g[A],b=E.instance,B=E.currentTarget,E=E.listener,b!==v&&f.isPropagationStopped())break e;Ty(f,E,B),v=b}}}if(Rh)throw s=wf,Rh=!1,wf=null,s}function kt(s,l){var u=l[If];u===void 0&&(u=l[If]=new Set);var g=s+"__bubble";u.has(g)||(wx(l,s,2,!1),u.add(g))}function Um(s,l,u){var g=0;l&&(g|=4),wx(u,s,g,l)}var ph="_reactListening"+Math.random().toString(36).slice(2);function Nd(s){if(!s[ph]){s[ph]=!0,E2.forEach(function(u){u!=="selectionchange"&&(NO.has(u)||Um(u,!1,s),Um(u,!0,s))});var l=s.nodeType===9?s:s.ownerDocument;l===null||l[ph]||(l[ph]=!0,Um("selectionchange",!1,l))}}function wx(s,l,u,g){switch(nx(l)){case 1:var f=ZP;break;case 4:f=$P;break;default:f=uk}u=f.bind(null,l,u,s),f=void 0,!bf||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(f=!0),g?f!==void 0?s.addEventListener(l,u,{capture:!0,passive:f}):s.addEventListener(l,u,!0):f!==void 0?s.addEventListener(l,u,{passive:f}):s.addEventListener(l,u,!1)}function Wm(s,l,u,g,f){var v=g;if(!(l&1)&&!(l&2)&&g!==null)e:for(;;){if(g===null)return;var A=g.tag;if(A===3||A===4){var E=g.stateNode.containerInfo;if(E===f||E.nodeType===8&&E.parentNode===f)break;if(A===4)for(A=g.return;A!==null;){var b=A.tag;if((b===3||b===4)&&(b=A.stateNode.containerInfo,b===f||b.nodeType===8&&b.parentNode===f))return;A=A.return}for(;E!==null;){if(A=wa(E),A===null)return;if(b=A.tag,b===5||b===6){g=v=A;continue e}E=E.parentNode}}g=g.return}H2(function(){var B=v,O=ak(u),D=[];e:{var y=kx.get(s);if(y!==void 0){var M=pk,V=s;switch(s){case"keypress":if(Dh(u)===0)break e;case"keydown":case"keyup":M=cO;break;case"focusin":V="focus",M=zm;break;case"focusout":V="blur",M=zm;break;case"beforeblur":case"afterblur":M=zm;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=by;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=QP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=hO;break;case px:case gx:case mx:M=eO;break;case fx:M=gO;break;case"scroll":M=KP;break;case"wheel":M=fO;break;case"copy":case"cut":case"paste":M=nO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=vy}var W=(l&4)!==0,G=!W&&s==="scroll",F=W?y!==null?y+"Capture":null:y;W=[];for(var R=B,H;R!==null;){H=R;var Y=H.stateNode;if(H.tag===5&&Y!==null&&(H=Y,F!==null&&(Y=Dd(R,F),Y!=null&&W.push(Pd(R,Y,H)))),G)break;R=R.return}0<W.length&&(y=new M(y,V,null,u,O),D.push({event:y,listeners:W}))}}if(!(l&7)){e:{if(y=s==="mouseover"||s==="pointerover",M=s==="mouseout"||s==="pointerout",y&&u!==ff&&(V=u.relatedTarget||u.fromElement)&&(wa(V)||V[Er]))break e;if((M||y)&&(y=O.window===O?O:(y=O.ownerDocument)?y.defaultView||y.parentWindow:window,M?(V=u.relatedTarget||u.toElement,M=B,V=V?wa(V):null,V!==null&&(G=Ta(V),V!==G||V.tag!==5&&V.tag!==6)&&(V=null)):(M=null,V=B),M!==V)){if(W=by,Y="onMouseLeave",F="onMouseEnter",R="mouse",(s==="pointerout"||s==="pointerover")&&(W=vy,Y="onPointerLeave",F="onPointerEnter",R="pointer"),G=M==null?y:Nl(M),H=V==null?y:Nl(V),y=new W(Y,R+"leave",M,u,O),y.target=G,y.relatedTarget=H,Y=null,wa(O)===B&&(W=new W(F,R+"enter",V,u,O),W.target=H,W.relatedTarget=G,Y=W),G=Y,M&&V)t:{for(W=M,F=V,R=0,H=W;H;H=Dl(H))R++;for(H=0,Y=F;Y;Y=Dl(Y))H++;for(;0<R-H;)W=Dl(W),R--;for(;0<H-R;)F=Dl(F),H--;for(;R--;){if(W===F||F!==null&&W===F.alternate)break t;W=Dl(W),F=Dl(F)}W=null}else W=null;M!==null&&My(D,y,M,W,!1),V!==null&&G!==null&&My(D,G,V,W,!0)}}e:{if(y=B?Nl(B):window,M=y.nodeName&&y.nodeName.toLowerCase(),M==="select"||M==="input"&&y.type==="file")var ne=_O;else if(_y(y))if(lx)ne=DO;else{ne=xO;var ue=yO}else(M=y.nodeName)&&M.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(ne=EO);if(ne&&(ne=ne(s,B))){ax(D,ne,u,O);break e}ue&&ue(s,y,B),s==="focusout"&&(ue=y._wrapperState)&&ue.controlled&&y.type==="number"&&uf(y,"number",y.value)}switch(ue=B?Nl(B):window,s){case"focusin":(_y(ue)||ue.contentEditable==="true")&&(Ml=ue,_f=B,vd=null);break;case"focusout":vd=_f=Ml=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,Sy(D,u,O);break;case"selectionchange":if(TO)break;case"keydown":case"keyup":Sy(D,u,O)}var te;if(mk)e:{switch(s){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Tl?rx(s,u)&&(z="onCompositionEnd"):s==="keydown"&&u.keyCode===229&&(z="onCompositionStart");z&&(ix&&u.locale!=="ko"&&(Tl||z!=="onCompositionStart"?z==="onCompositionEnd"&&Tl&&(te=ox()):(us=O,hk="value"in us?us.value:us.textContent,Tl=!0)),ue=Wh(B,z),0<ue.length&&(z=new wy(z,s,null,u,O),D.push({event:z,listeners:ue}),te?z.data=te:(te=sx(u),te!==null&&(z.data=te)))),(te=bO?wO(s,u):vO(s,u))&&(B=Wh(B,"onBeforeInput"),0<B.length&&(O=new wy("onBeforeInput","beforeinput",null,u,O),D.push({event:O,listeners:B}),O.data=te))}bx(D,l)})}function Pd(s,l,u){return{instance:s,listener:l,currentTarget:u}}function Wh(s,l){for(var u=l+"Capture",g=[];s!==null;){var f=s,v=f.stateNode;f.tag===5&&v!==null&&(f=v,v=Dd(s,u),v!=null&&g.unshift(Pd(s,v,f)),v=Dd(s,l),v!=null&&g.push(Pd(s,v,f))),s=s.return}return g}function Dl(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function My(s,l,u,g,f){for(var v=l._reactName,A=[];u!==null&&u!==g;){var E=u,b=E.alternate,B=E.stateNode;if(b!==null&&b===g)break;E.tag===5&&B!==null&&(E=B,f?(b=Dd(u,v),b!=null&&A.unshift(Pd(u,b,E))):f||(b=Dd(u,v),b!=null&&A.push(Pd(u,b,E)))),u=u.return}A.length!==0&&s.push({event:l,listeners:A})}var PO=/\r\n?/g,OO=/\u0000|\uFFFD/g;function By(s){return(typeof s=="string"?s:""+s).replace(PO,`
`).replace(OO,"")}function gh(s,l,u){if(l=By(l),By(s)!==l&&u)throw Error(de(425))}function qh(){}var xf=null,Ef=null;function Df(s,l){return s==="textarea"||s==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Sf=typeof setTimeout=="function"?setTimeout:void 0,LO=typeof clearTimeout=="function"?clearTimeout:void 0,Ny=typeof Promise=="function"?Promise:void 0,zO=typeof queueMicrotask=="function"?queueMicrotask:typeof Ny<"u"?function(s){return Ny.resolve(null).then(s).catch(jO)}:Sf;function jO(s){setTimeout(function(){throw s})}function qm(s,l){var u=l,g=0;do{var f=u.nextSibling;if(s.removeChild(u),f&&f.nodeType===8)if(u=f.data,u==="/$"){if(g===0){s.removeChild(f),Td(l);return}g--}else u!=="$"&&u!=="$?"&&u!=="$!"||g++;u=f}while(u);Td(l)}function fs(s){for(;s!=null;s=s.nextSibling){var l=s.nodeType;if(l===1||l===3)break;if(l===8){if(l=s.data,l==="$"||l==="$!"||l==="$?")break;if(l==="/$")return null}}return s}function Py(s){s=s.previousSibling;for(var l=0;s;){if(s.nodeType===8){var u=s.data;if(u==="$"||u==="$!"||u==="$?"){if(l===0)return s;l--}else u==="/$"&&l++}s=s.previousSibling}return null}var tc=Math.random().toString(36).slice(2),Gi="__reactFiber$"+tc,Od="__reactProps$"+tc,Er="__reactContainer$"+tc,If="__reactEvents$"+tc,RO="__reactListeners$"+tc,FO="__reactHandles$"+tc;function wa(s){var l=s[Gi];if(l)return l;for(var u=s.parentNode;u;){if(l=u[Er]||u[Gi]){if(u=l.alternate,l.child!==null||u!==null&&u.child!==null)for(s=Py(s);s!==null;){if(u=s[Gi])return u;s=Py(s)}return l}s=u,u=s.parentNode}return null}function qd(s){return s=s[Gi]||s[Er],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function Nl(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(de(33))}function gp(s){return s[Od]||null}var Tf=[],Pl=-1;function ys(s){return{current:s}}function bt(s){0>Pl||(s.current=Tf[Pl],Tf[Pl]=null,Pl--)}function gt(s,l){Pl++,Tf[Pl]=s.current,s.current=l}var Cs={},On=ys(Cs),ro=ys(!1),ya=Cs;function Zl(s,l){var u=s.type.contextTypes;if(!u)return Cs;var g=s.stateNode;if(g&&g.__reactInternalMemoizedUnmaskedChildContext===l)return g.__reactInternalMemoizedMaskedChildContext;var f={},v;for(v in u)f[v]=l[v];return g&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=l,s.__reactInternalMemoizedMaskedChildContext=f),f}function so(s){return s=s.childContextTypes,s!=null}function Gh(){bt(ro),bt(On)}function Oy(s,l,u){if(On.current!==Cs)throw Error(de(168));gt(On,l),gt(ro,u)}function vx(s,l,u){var g=s.stateNode;if(l=l.childContextTypes,typeof g.getChildContext!="function")return u;g=g.getChildContext();for(var f in g)if(!(f in l))throw Error(de(108,yP(s)||"Unknown",f));return Dt({},u,g)}function Zh(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||Cs,ya=On.current,gt(On,s),gt(ro,ro.current),!0}function Ly(s,l,u){var g=s.stateNode;if(!g)throw Error(de(169));u?(s=vx(s,l,ya),g.__reactInternalMemoizedMergedChildContext=s,bt(ro),bt(On),gt(On,s)):bt(ro),gt(ro,u)}var Ar=null,mp=!1,Gm=!1;function Ax(s){Ar===null?Ar=[s]:Ar.push(s)}function VO(s){mp=!0,Ax(s)}function xs(){if(!Gm&&Ar!==null){Gm=!0;var s=0,l=lt;try{var u=Ar;for(lt=1;s<u.length;s++){var g=u[s];do g=g(!0);while(g!==null)}Ar=null,mp=!1}catch(f){throw Ar!==null&&(Ar=Ar.slice(s+1)),G2(lk,xs),f}finally{lt=l,Gm=!1}}return null}var Ol=[],Ll=0,$h=null,Kh=0,jo=[],Ro=0,xa=null,Cr=1,_r="";function ka(s,l){Ol[Ll++]=Kh,Ol[Ll++]=$h,$h=s,Kh=l}function Cx(s,l,u){jo[Ro++]=Cr,jo[Ro++]=_r,jo[Ro++]=xa,xa=s;var g=Cr;s=_r;var f=32-fi(g)-1;g&=~(1<<f),u+=1;var v=32-fi(l)+f;if(30<v){var A=f-f%5;v=(g&(1<<A)-1).toString(32),g>>=A,f-=A,Cr=1<<32-fi(l)+f|u<<f|g,_r=v+s}else Cr=1<<v|u<<f|g,_r=s}function kk(s){s.return!==null&&(ka(s,1),Cx(s,1,0))}function bk(s){for(;s===$h;)$h=Ol[--Ll],Ol[Ll]=null,Kh=Ol[--Ll],Ol[Ll]=null;for(;s===xa;)xa=jo[--Ro],jo[Ro]=null,_r=jo[--Ro],jo[Ro]=null,Cr=jo[--Ro],jo[Ro]=null}var Ao=null,vo=null,_t=!1,mi=null;function _x(s,l){var u=Fo(5,null,null,0);u.elementType="DELETED",u.stateNode=l,u.return=s,l=s.deletions,l===null?(s.deletions=[u],s.flags|=16):l.push(u)}function zy(s,l){switch(s.tag){case 5:var u=s.type;return l=l.nodeType!==1||u.toLowerCase()!==l.nodeName.toLowerCase()?null:l,l!==null?(s.stateNode=l,Ao=s,vo=fs(l.firstChild),!0):!1;case 6:return l=s.pendingProps===""||l.nodeType!==3?null:l,l!==null?(s.stateNode=l,Ao=s,vo=null,!0):!1;case 13:return l=l.nodeType!==8?null:l,l!==null?(u=xa!==null?{id:Cr,overflow:_r}:null,s.memoizedState={dehydrated:l,treeContext:u,retryLane:1073741824},u=Fo(18,null,null,0),u.stateNode=l,u.return=s,s.child=u,Ao=s,vo=null,!0):!1;default:return!1}}function Mf(s){return(s.mode&1)!==0&&(s.flags&128)===0}function Bf(s){if(_t){var l=vo;if(l){var u=l;if(!zy(s,l)){if(Mf(s))throw Error(de(418));l=fs(u.nextSibling);var g=Ao;l&&zy(s,l)?_x(g,u):(s.flags=s.flags&-4097|2,_t=!1,Ao=s)}}else{if(Mf(s))throw Error(de(418));s.flags=s.flags&-4097|2,_t=!1,Ao=s}}}function jy(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Ao=s}function mh(s){if(s!==Ao)return!1;if(!_t)return jy(s),_t=!0,!1;var l;if((l=s.tag!==3)&&!(l=s.tag!==5)&&(l=s.type,l=l!=="head"&&l!=="body"&&!Df(s.type,s.memoizedProps)),l&&(l=vo)){if(Mf(s))throw yx(),Error(de(418));for(;l;)_x(s,l),l=fs(l.nextSibling)}if(jy(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));e:{for(s=s.nextSibling,l=0;s;){if(s.nodeType===8){var u=s.data;if(u==="/$"){if(l===0){vo=fs(s.nextSibling);break e}l--}else u!=="$"&&u!=="$!"&&u!=="$?"||l++}s=s.nextSibling}vo=null}}else vo=Ao?fs(s.stateNode.nextSibling):null;return!0}function yx(){for(var s=vo;s;)s=fs(s.nextSibling)}function $l(){vo=Ao=null,_t=!1}function wk(s){mi===null?mi=[s]:mi.push(s)}var HO=Ir.ReactCurrentBatchConfig;function pi(s,l){if(s&&s.defaultProps){l=Dt({},l),s=s.defaultProps;for(var u in s)l[u]===void 0&&(l[u]=s[u]);return l}return l}var Yh=ys(null),Qh=null,zl=null,vk=null;function Ak(){vk=zl=Qh=null}function Ck(s){var l=Yh.current;bt(Yh),s._currentValue=l}function Nf(s,l,u){for(;s!==null;){var g=s.alternate;if((s.childLanes&l)!==l?(s.childLanes|=l,g!==null&&(g.childLanes|=l)):g!==null&&(g.childLanes&l)!==l&&(g.childLanes|=l),s===u)break;s=s.return}}function Wl(s,l){Qh=s,vk=zl=null,s=s.dependencies,s!==null&&s.firstContext!==null&&(s.lanes&l&&(io=!0),s.firstContext=null)}function Ho(s){var l=s._currentValue;if(vk!==s)if(s={context:s,memoizedValue:l,next:null},zl===null){if(Qh===null)throw Error(de(308));zl=s,Qh.dependencies={lanes:0,firstContext:s}}else zl=zl.next=s;return l}var va=null;function _k(s){va===null?va=[s]:va.push(s)}function xx(s,l,u,g){var f=l.interleaved;return f===null?(u.next=u,_k(l)):(u.next=f.next,f.next=u),l.interleaved=u,Dr(s,g)}function Dr(s,l){s.lanes|=l;var u=s.alternate;for(u!==null&&(u.lanes|=l),u=s,s=s.return;s!==null;)s.childLanes|=l,u=s.alternate,u!==null&&(u.childLanes|=l),u=s,s=s.return;return u.tag===3?u.stateNode:null}var ls=!1;function yk(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ex(s,l){s=s.updateQueue,l.updateQueue===s&&(l.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function yr(s,l){return{eventTime:s,lane:l,tag:0,payload:null,callback:null,next:null}}function ks(s,l,u){var g=s.updateQueue;if(g===null)return null;if(g=g.shared,Ye&2){var f=g.pending;return f===null?l.next=l:(l.next=f.next,f.next=l),g.pending=l,Dr(s,u)}return f=g.interleaved,f===null?(l.next=l,_k(g)):(l.next=f.next,f.next=l),g.interleaved=l,Dr(s,u)}function Sh(s,l,u){if(l=l.updateQueue,l!==null&&(l=l.shared,(u&4194240)!==0)){var g=l.lanes;g&=s.pendingLanes,u|=g,l.lanes=u,ck(s,u)}}function Ry(s,l){var u=s.updateQueue,g=s.alternate;if(g!==null&&(g=g.updateQueue,u===g)){var f=null,v=null;if(u=u.firstBaseUpdate,u!==null){do{var A={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};v===null?f=v=A:v=v.next=A,u=u.next}while(u!==null);v===null?f=v=l:v=v.next=l}else f=v=l;u={baseState:g.baseState,firstBaseUpdate:f,lastBaseUpdate:v,shared:g.shared,effects:g.effects},s.updateQueue=u;return}s=u.lastBaseUpdate,s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=l}function Jh(s,l,u,g){var f=s.updateQueue;ls=!1;var v=f.firstBaseUpdate,A=f.lastBaseUpdate,E=f.shared.pending;if(E!==null){f.shared.pending=null;var b=E,B=b.next;b.next=null,A===null?v=B:A.next=B,A=b;var O=s.alternate;O!==null&&(O=O.updateQueue,E=O.lastBaseUpdate,E!==A&&(E===null?O.firstBaseUpdate=B:E.next=B,O.lastBaseUpdate=b))}if(v!==null){var D=f.baseState;A=0,O=B=b=null,E=v;do{var y=E.lane,M=E.eventTime;if((g&y)===y){O!==null&&(O=O.next={eventTime:M,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var V=s,W=E;switch(y=l,M=u,W.tag){case 1:if(V=W.payload,typeof V=="function"){D=V.call(M,D,y);break e}D=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=W.payload,y=typeof V=="function"?V.call(M,D,y):V,y==null)break e;D=Dt({},D,y);break e;case 2:ls=!0}}E.callback!==null&&E.lane!==0&&(s.flags|=64,y=f.effects,y===null?f.effects=[E]:y.push(E))}else M={eventTime:M,lane:y,tag:E.tag,payload:E.payload,callback:E.callback,next:null},O===null?(B=O=M,b=D):O=O.next=M,A|=y;if(E=E.next,E===null){if(E=f.shared.pending,E===null)break;y=E,E=y.next,y.next=null,f.lastBaseUpdate=y,f.shared.pending=null}}while(!0);if(O===null&&(b=D),f.baseState=b,f.firstBaseUpdate=B,f.lastBaseUpdate=O,l=f.shared.interleaved,l!==null){f=l;do A|=f.lane,f=f.next;while(f!==l)}else v===null&&(f.shared.lanes=0);Da|=A,s.lanes=A,s.memoizedState=D}}function Fy(s,l,u){if(s=l.effects,l.effects=null,s!==null)for(l=0;l<s.length;l++){var g=s[l],f=g.callback;if(f!==null){if(g.callback=null,g=u,typeof f!="function")throw Error(de(191,f));f.call(g)}}}var Dx=new x2.Component().refs;function Pf(s,l,u,g){l=s.memoizedState,u=u(g,l),u=u==null?l:Dt({},l,u),s.memoizedState=u,s.lanes===0&&(s.updateQueue.baseState=u)}var fp={isMounted:function(s){return(s=s._reactInternals)?Ta(s)===s:!1},enqueueSetState:function(s,l,u){s=s._reactInternals;var g=Hn(),f=ws(s),v=yr(g,f);v.payload=l,u!=null&&(v.callback=u),l=ks(s,v,f),l!==null&&(ki(l,s,f,g),Sh(l,s,f))},enqueueReplaceState:function(s,l,u){s=s._reactInternals;var g=Hn(),f=ws(s),v=yr(g,f);v.tag=1,v.payload=l,u!=null&&(v.callback=u),l=ks(s,v,f),l!==null&&(ki(l,s,f,g),Sh(l,s,f))},enqueueForceUpdate:function(s,l){s=s._reactInternals;var u=Hn(),g=ws(s),f=yr(u,g);f.tag=2,l!=null&&(f.callback=l),l=ks(s,f,g),l!==null&&(ki(l,s,g,u),Sh(l,s,g))}};function Vy(s,l,u,g,f,v,A){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(g,v,A):l.prototype&&l.prototype.isPureReactComponent?!Bd(u,g)||!Bd(f,v):!0}function Sx(s,l,u){var g=!1,f=Cs,v=l.contextType;return typeof v=="object"&&v!==null?v=Ho(v):(f=so(l)?ya:On.current,g=l.contextTypes,v=(g=g!=null)?Zl(s,f):Cs),l=new l(u,v),s.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=fp,s.stateNode=l,l._reactInternals=s,g&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=f,s.__reactInternalMemoizedMaskedChildContext=v),l}function Hy(s,l,u,g){s=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(u,g),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(u,g),l.state!==s&&fp.enqueueReplaceState(l,l.state,null)}function Of(s,l,u,g){var f=s.stateNode;f.props=u,f.state=s.memoizedState,f.refs=Dx,yk(s);var v=l.contextType;typeof v=="object"&&v!==null?f.context=Ho(v):(v=so(l)?ya:On.current,f.context=Zl(s,v)),f.state=s.memoizedState,v=l.getDerivedStateFromProps,typeof v=="function"&&(Pf(s,l,v,u),f.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(l=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),l!==f.state&&fp.enqueueReplaceState(f,f.state,null),Jh(s,u,f,g),f.state=s.memoizedState),typeof f.componentDidMount=="function"&&(s.flags|=4194308)}function cd(s,l,u){if(s=u.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(de(309));var g=u.stateNode}if(!g)throw Error(de(147,s));var f=g,v=""+s;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===v?l.ref:(l=function(A){var E=f.refs;E===Dx&&(E=f.refs={}),A===null?delete E[v]:E[v]=A},l._stringRef=v,l)}if(typeof s!="string")throw Error(de(284));if(!u._owner)throw Error(de(290,s))}return s}function fh(s,l){throw s=Object.prototype.toString.call(l),Error(de(31,s==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":s))}function Uy(s){var l=s._init;return l(s._payload)}function Ix(s){function l(F,R){if(s){var H=F.deletions;H===null?(F.deletions=[R],F.flags|=16):H.push(R)}}function u(F,R){if(!s)return null;for(;R!==null;)l(F,R),R=R.sibling;return null}function g(F,R){for(F=new Map;R!==null;)R.key!==null?F.set(R.key,R):F.set(R.index,R),R=R.sibling;return F}function f(F,R){return F=vs(F,R),F.index=0,F.sibling=null,F}function v(F,R,H){return F.index=H,s?(H=F.alternate,H!==null?(H=H.index,H<R?(F.flags|=2,R):H):(F.flags|=2,R)):(F.flags|=1048576,R)}function A(F){return s&&F.alternate===null&&(F.flags|=2),F}function E(F,R,H,Y){return R===null||R.tag!==6?(R=Xm(H,F.mode,Y),R.return=F,R):(R=f(R,H),R.return=F,R)}function b(F,R,H,Y){var ne=H.type;return ne===Il?O(F,R,H.props.children,Y,H.key):R!==null&&(R.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===as&&Uy(ne)===R.type)?(Y=f(R,H.props),Y.ref=cd(F,R,H),Y.return=F,Y):(Y=Ph(H.type,H.key,H.props,null,F.mode,Y),Y.ref=cd(F,R,H),Y.return=F,Y)}function B(F,R,H,Y){return R===null||R.tag!==4||R.stateNode.containerInfo!==H.containerInfo||R.stateNode.implementation!==H.implementation?(R=ef(H,F.mode,Y),R.return=F,R):(R=f(R,H.children||[]),R.return=F,R)}function O(F,R,H,Y,ne){return R===null||R.tag!==7?(R=_a(H,F.mode,Y,ne),R.return=F,R):(R=f(R,H),R.return=F,R)}function D(F,R,H){if(typeof R=="string"&&R!==""||typeof R=="number")return R=Xm(""+R,F.mode,H),R.return=F,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case rh:return H=Ph(R.type,R.key,R.props,null,F.mode,H),H.ref=cd(F,null,R),H.return=F,H;case Sl:return R=ef(R,F.mode,H),R.return=F,R;case as:var Y=R._init;return D(F,Y(R._payload),H)}if(pd(R)||id(R))return R=_a(R,F.mode,H,null),R.return=F,R;fh(F,R)}return null}function y(F,R,H,Y){var ne=R!==null?R.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return ne!==null?null:E(F,R,""+H,Y);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case rh:return H.key===ne?b(F,R,H,Y):null;case Sl:return H.key===ne?B(F,R,H,Y):null;case as:return ne=H._init,y(F,R,ne(H._payload),Y)}if(pd(H)||id(H))return ne!==null?null:O(F,R,H,Y,null);fh(F,H)}return null}function M(F,R,H,Y,ne){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return F=F.get(H)||null,E(R,F,""+Y,ne);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case rh:return F=F.get(Y.key===null?H:Y.key)||null,b(R,F,Y,ne);case Sl:return F=F.get(Y.key===null?H:Y.key)||null,B(R,F,Y,ne);case as:var ue=Y._init;return M(F,R,H,ue(Y._payload),ne)}if(pd(Y)||id(Y))return F=F.get(H)||null,O(R,F,Y,ne,null);fh(R,Y)}return null}function V(F,R,H,Y){for(var ne=null,ue=null,te=R,z=R=0,re=null;te!==null&&z<H.length;z++){te.index>z?(re=te,te=null):re=te.sibling;var fe=y(F,te,H[z],Y);if(fe===null){te===null&&(te=re);break}s&&te&&fe.alternate===null&&l(F,te),R=v(fe,R,z),ue===null?ne=fe:ue.sibling=fe,ue=fe,te=re}if(z===H.length)return u(F,te),_t&&ka(F,z),ne;if(te===null){for(;z<H.length;z++)te=D(F,H[z],Y),te!==null&&(R=v(te,R,z),ue===null?ne=te:ue.sibling=te,ue=te);return _t&&ka(F,z),ne}for(te=g(F,te);z<H.length;z++)re=M(te,F,z,H[z],Y),re!==null&&(s&&re.alternate!==null&&te.delete(re.key===null?z:re.key),R=v(re,R,z),ue===null?ne=re:ue.sibling=re,ue=re);return s&&te.forEach(function(Ne){return l(F,Ne)}),_t&&ka(F,z),ne}function W(F,R,H,Y){var ne=id(H);if(typeof ne!="function")throw Error(de(150));if(H=ne.call(H),H==null)throw Error(de(151));for(var ue=ne=null,te=R,z=R=0,re=null,fe=H.next();te!==null&&!fe.done;z++,fe=H.next()){te.index>z?(re=te,te=null):re=te.sibling;var Ne=y(F,te,fe.value,Y);if(Ne===null){te===null&&(te=re);break}s&&te&&Ne.alternate===null&&l(F,te),R=v(Ne,R,z),ue===null?ne=Ne:ue.sibling=Ne,ue=Ne,te=re}if(fe.done)return u(F,te),_t&&ka(F,z),ne;if(te===null){for(;!fe.done;z++,fe=H.next())fe=D(F,fe.value,Y),fe!==null&&(R=v(fe,R,z),ue===null?ne=fe:ue.sibling=fe,ue=fe);return _t&&ka(F,z),ne}for(te=g(F,te);!fe.done;z++,fe=H.next())fe=M(te,F,z,fe.value,Y),fe!==null&&(s&&fe.alternate!==null&&te.delete(fe.key===null?z:fe.key),R=v(fe,R,z),ue===null?ne=fe:ue.sibling=fe,ue=fe);return s&&te.forEach(function(Ue){return l(F,Ue)}),_t&&ka(F,z),ne}function G(F,R,H,Y){if(typeof H=="object"&&H!==null&&H.type===Il&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case rh:e:{for(var ne=H.key,ue=R;ue!==null;){if(ue.key===ne){if(ne=H.type,ne===Il){if(ue.tag===7){u(F,ue.sibling),R=f(ue,H.props.children),R.return=F,F=R;break e}}else if(ue.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===as&&Uy(ne)===ue.type){u(F,ue.sibling),R=f(ue,H.props),R.ref=cd(F,ue,H),R.return=F,F=R;break e}u(F,ue);break}else l(F,ue);ue=ue.sibling}H.type===Il?(R=_a(H.props.children,F.mode,Y,H.key),R.return=F,F=R):(Y=Ph(H.type,H.key,H.props,null,F.mode,Y),Y.ref=cd(F,R,H),Y.return=F,F=Y)}return A(F);case Sl:e:{for(ue=H.key;R!==null;){if(R.key===ue)if(R.tag===4&&R.stateNode.containerInfo===H.containerInfo&&R.stateNode.implementation===H.implementation){u(F,R.sibling),R=f(R,H.children||[]),R.return=F,F=R;break e}else{u(F,R);break}else l(F,R);R=R.sibling}R=ef(H,F.mode,Y),R.return=F,F=R}return A(F);case as:return ue=H._init,G(F,R,ue(H._payload),Y)}if(pd(H))return V(F,R,H,Y);if(id(H))return W(F,R,H,Y);fh(F,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,R!==null&&R.tag===6?(u(F,R.sibling),R=f(R,H),R.return=F,F=R):(u(F,R),R=Xm(H,F.mode,Y),R.return=F,F=R),A(F)):u(F,R)}return G}var Kl=Ix(!0),Tx=Ix(!1),Gd={},$i=ys(Gd),Ld=ys(Gd),zd=ys(Gd);function Aa(s){if(s===Gd)throw Error(de(174));return s}function xk(s,l){switch(gt(zd,l),gt(Ld,s),gt($i,Gd),s=l.nodeType,s){case 9:case 11:l=(l=l.documentElement)?l.namespaceURI:pf(null,"");break;default:s=s===8?l.parentNode:l,l=s.namespaceURI||null,s=s.tagName,l=pf(l,s)}bt($i),gt($i,l)}function Yl(){bt($i),bt(Ld),bt(zd)}function Mx(s){Aa(zd.current);var l=Aa($i.current),u=pf(l,s.type);l!==u&&(gt(Ld,s),gt($i,u))}function Ek(s){Ld.current===s&&(bt($i),bt(Ld))}var xt=ys(0);function Xh(s){for(var l=s;l!==null;){if(l.tag===13){var u=l.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Zm=[];function Dk(){for(var s=0;s<Zm.length;s++)Zm[s]._workInProgressVersionPrimary=null;Zm.length=0}var Ih=Ir.ReactCurrentDispatcher,$m=Ir.ReactCurrentBatchConfig,Ea=0,Et=null,on=null,un=null,ep=!1,Ad=!1,jd=0,UO=0;function Mn(){throw Error(de(321))}function Sk(s,l){if(l===null)return!1;for(var u=0;u<l.length&&u<s.length;u++)if(!bi(s[u],l[u]))return!1;return!0}function Ik(s,l,u,g,f,v){if(Ea=v,Et=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Ih.current=s===null||s.memoizedState===null?ZO:$O,s=u(g,f),Ad){v=0;do{if(Ad=!1,jd=0,25<=v)throw Error(de(301));v+=1,un=on=null,l.updateQueue=null,Ih.current=KO,s=u(g,f)}while(Ad)}if(Ih.current=tp,l=on!==null&&on.next!==null,Ea=0,un=on=Et=null,ep=!1,l)throw Error(de(300));return s}function Tk(){var s=jd!==0;return jd=0,s}function qi(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Et.memoizedState=un=s:un=un.next=s,un}function Uo(){if(on===null){var s=Et.alternate;s=s!==null?s.memoizedState:null}else s=on.next;var l=un===null?Et.memoizedState:un.next;if(l!==null)un=l,on=s;else{if(s===null)throw Error(de(310));on=s,s={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},un===null?Et.memoizedState=un=s:un=un.next=s}return un}function Rd(s,l){return typeof l=="function"?l(s):l}function Km(s){var l=Uo(),u=l.queue;if(u===null)throw Error(de(311));u.lastRenderedReducer=s;var g=on,f=g.baseQueue,v=u.pending;if(v!==null){if(f!==null){var A=f.next;f.next=v.next,v.next=A}g.baseQueue=f=v,u.pending=null}if(f!==null){v=f.next,g=g.baseState;var E=A=null,b=null,B=v;do{var O=B.lane;if((Ea&O)===O)b!==null&&(b=b.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),g=B.hasEagerState?B.eagerState:s(g,B.action);else{var D={lane:O,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};b===null?(E=b=D,A=g):b=b.next=D,Et.lanes|=O,Da|=O}B=B.next}while(B!==null&&B!==v);b===null?A=g:b.next=E,bi(g,l.memoizedState)||(io=!0),l.memoizedState=g,l.baseState=A,l.baseQueue=b,u.lastRenderedState=g}if(s=u.interleaved,s!==null){f=s;do v=f.lane,Et.lanes|=v,Da|=v,f=f.next;while(f!==s)}else f===null&&(u.lanes=0);return[l.memoizedState,u.dispatch]}function Ym(s){var l=Uo(),u=l.queue;if(u===null)throw Error(de(311));u.lastRenderedReducer=s;var g=u.dispatch,f=u.pending,v=l.memoizedState;if(f!==null){u.pending=null;var A=f=f.next;do v=s(v,A.action),A=A.next;while(A!==f);bi(v,l.memoizedState)||(io=!0),l.memoizedState=v,l.baseQueue===null&&(l.baseState=v),u.lastRenderedState=v}return[v,g]}function Bx(){}function Nx(s,l){var u=Et,g=Uo(),f=l(),v=!bi(g.memoizedState,f);if(v&&(g.memoizedState=f,io=!0),g=g.queue,Mk(Lx.bind(null,u,g,s),[s]),g.getSnapshot!==l||v||un!==null&&un.memoizedState.tag&1){if(u.flags|=2048,Fd(9,Ox.bind(null,u,g,f,l),void 0,null),hn===null)throw Error(de(349));Ea&30||Px(u,l,f)}return f}function Px(s,l,u){s.flags|=16384,s={getSnapshot:l,value:u},l=Et.updateQueue,l===null?(l={lastEffect:null,stores:null},Et.updateQueue=l,l.stores=[s]):(u=l.stores,u===null?l.stores=[s]:u.push(s))}function Ox(s,l,u,g){l.value=u,l.getSnapshot=g,zx(l)&&jx(s)}function Lx(s,l,u){return u(function(){zx(l)&&jx(s)})}function zx(s){var l=s.getSnapshot;s=s.value;try{var u=l();return!bi(s,u)}catch{return!0}}function jx(s){var l=Dr(s,1);l!==null&&ki(l,s,1,-1)}function Wy(s){var l=qi();return typeof s=="function"&&(s=s()),l.memoizedState=l.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rd,lastRenderedState:s},l.queue=s,s=s.dispatch=GO.bind(null,Et,s),[l.memoizedState,s]}function Fd(s,l,u,g){return s={tag:s,create:l,destroy:u,deps:g,next:null},l=Et.updateQueue,l===null?(l={lastEffect:null,stores:null},Et.updateQueue=l,l.lastEffect=s.next=s):(u=l.lastEffect,u===null?l.lastEffect=s.next=s:(g=u.next,u.next=s,s.next=g,l.lastEffect=s)),s}function Rx(){return Uo().memoizedState}function Th(s,l,u,g){var f=qi();Et.flags|=s,f.memoizedState=Fd(1|l,u,void 0,g===void 0?null:g)}function kp(s,l,u,g){var f=Uo();g=g===void 0?null:g;var v=void 0;if(on!==null){var A=on.memoizedState;if(v=A.destroy,g!==null&&Sk(g,A.deps)){f.memoizedState=Fd(l,u,v,g);return}}Et.flags|=s,f.memoizedState=Fd(1|l,u,v,g)}function qy(s,l){return Th(8390656,8,s,l)}function Mk(s,l){return kp(2048,8,s,l)}function Fx(s,l){return kp(4,2,s,l)}function Vx(s,l){return kp(4,4,s,l)}function Hx(s,l){if(typeof l=="function")return s=s(),l(s),function(){l(null)};if(l!=null)return s=s(),l.current=s,function(){l.current=null}}function Ux(s,l,u){return u=u!=null?u.concat([s]):null,kp(4,4,Hx.bind(null,l,s),u)}function Bk(){}function Wx(s,l){var u=Uo();l=l===void 0?null:l;var g=u.memoizedState;return g!==null&&l!==null&&Sk(l,g[1])?g[0]:(u.memoizedState=[s,l],s)}function qx(s,l){var u=Uo();l=l===void 0?null:l;var g=u.memoizedState;return g!==null&&l!==null&&Sk(l,g[1])?g[0]:(s=s(),u.memoizedState=[s,l],s)}function Gx(s,l,u){return Ea&21?(bi(u,l)||(u=K2(),Et.lanes|=u,Da|=u,s.baseState=!0),l):(s.baseState&&(s.baseState=!1,io=!0),s.memoizedState=u)}function WO(s,l){var u=lt;lt=u!==0&&4>u?u:4,s(!0);var g=$m.transition;$m.transition={};try{s(!1),l()}finally{lt=u,$m.transition=g}}function Zx(){return Uo().memoizedState}function qO(s,l,u){var g=ws(s);if(u={lane:g,action:u,hasEagerState:!1,eagerState:null,next:null},$x(s))Kx(l,u);else if(u=xx(s,l,u,g),u!==null){var f=Hn();ki(u,s,g,f),Yx(u,l,g)}}function GO(s,l,u){var g=ws(s),f={lane:g,action:u,hasEagerState:!1,eagerState:null,next:null};if($x(s))Kx(l,f);else{var v=s.alternate;if(s.lanes===0&&(v===null||v.lanes===0)&&(v=l.lastRenderedReducer,v!==null))try{var A=l.lastRenderedState,E=v(A,u);if(f.hasEagerState=!0,f.eagerState=E,bi(E,A)){var b=l.interleaved;b===null?(f.next=f,_k(l)):(f.next=b.next,b.next=f),l.interleaved=f;return}}catch{}finally{}u=xx(s,l,f,g),u!==null&&(f=Hn(),ki(u,s,g,f),Yx(u,l,g))}}function $x(s){var l=s.alternate;return s===Et||l!==null&&l===Et}function Kx(s,l){Ad=ep=!0;var u=s.pending;u===null?l.next=l:(l.next=u.next,u.next=l),s.pending=l}function Yx(s,l,u){if(u&4194240){var g=l.lanes;g&=s.pendingLanes,u|=g,l.lanes=u,ck(s,u)}}var tp={readContext:Ho,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},ZO={readContext:Ho,useCallback:function(s,l){return qi().memoizedState=[s,l===void 0?null:l],s},useContext:Ho,useEffect:qy,useImperativeHandle:function(s,l,u){return u=u!=null?u.concat([s]):null,Th(4194308,4,Hx.bind(null,l,s),u)},useLayoutEffect:function(s,l){return Th(4194308,4,s,l)},useInsertionEffect:function(s,l){return Th(4,2,s,l)},useMemo:function(s,l){var u=qi();return l=l===void 0?null:l,s=s(),u.memoizedState=[s,l],s},useReducer:function(s,l,u){var g=qi();return l=u!==void 0?u(l):l,g.memoizedState=g.baseState=l,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:l},g.queue=s,s=s.dispatch=qO.bind(null,Et,s),[g.memoizedState,s]},useRef:function(s){var l=qi();return s={current:s},l.memoizedState=s},useState:Wy,useDebugValue:Bk,useDeferredValue:function(s){return qi().memoizedState=s},useTransition:function(){var s=Wy(!1),l=s[0];return s=WO.bind(null,s[1]),qi().memoizedState=s,[l,s]},useMutableSource:function(){},useSyncExternalStore:function(s,l,u){var g=Et,f=qi();if(_t){if(u===void 0)throw Error(de(407));u=u()}else{if(u=l(),hn===null)throw Error(de(349));Ea&30||Px(g,l,u)}f.memoizedState=u;var v={value:u,getSnapshot:l};return f.queue=v,qy(Lx.bind(null,g,v,s),[s]),g.flags|=2048,Fd(9,Ox.bind(null,g,v,u,l),void 0,null),u},useId:function(){var s=qi(),l=hn.identifierPrefix;if(_t){var u=_r,g=Cr;u=(g&~(1<<32-fi(g)-1)).toString(32)+u,l=":"+l+"R"+u,u=jd++,0<u&&(l+="H"+u.toString(32)),l+=":"}else u=UO++,l=":"+l+"r"+u.toString(32)+":";return s.memoizedState=l},unstable_isNewReconciler:!1},$O={readContext:Ho,useCallback:Wx,useContext:Ho,useEffect:Mk,useImperativeHandle:Ux,useInsertionEffect:Fx,useLayoutEffect:Vx,useMemo:qx,useReducer:Km,useRef:Rx,useState:function(){return Km(Rd)},useDebugValue:Bk,useDeferredValue:function(s){var l=Uo();return Gx(l,on.memoizedState,s)},useTransition:function(){var s=Km(Rd)[0],l=Uo().memoizedState;return[s,l]},useMutableSource:Bx,useSyncExternalStore:Nx,useId:Zx,unstable_isNewReconciler:!1},KO={readContext:Ho,useCallback:Wx,useContext:Ho,useEffect:Mk,useImperativeHandle:Ux,useInsertionEffect:Fx,useLayoutEffect:Vx,useMemo:qx,useReducer:Ym,useRef:Rx,useState:function(){return Ym(Rd)},useDebugValue:Bk,useDeferredValue:function(s){var l=Uo();return on===null?l.memoizedState=s:Gx(l,on.memoizedState,s)},useTransition:function(){var s=Ym(Rd)[0],l=Uo().memoizedState;return[s,l]},useMutableSource:Bx,useSyncExternalStore:Nx,useId:Zx,unstable_isNewReconciler:!1};function Ql(s,l){try{var u="",g=l;do u+=_P(g),g=g.return;while(g);var f=u}catch(v){f=`
Error generating stack: `+v.message+`
`+v.stack}return{value:s,source:l,stack:f,digest:null}}function Qm(s,l,u){return{value:s,source:null,stack:u??null,digest:l??null}}function Lf(s,l){try{console.error(l.value)}catch(u){setTimeout(function(){throw u})}}var YO=typeof WeakMap=="function"?WeakMap:Map;function Qx(s,l,u){u=yr(-1,u),u.tag=3,u.payload={element:null};var g=l.value;return u.callback=function(){op||(op=!0,Gf=g),Lf(s,l)},u}function Jx(s,l,u){u=yr(-1,u),u.tag=3;var g=s.type.getDerivedStateFromError;if(typeof g=="function"){var f=l.value;u.payload=function(){return g(f)},u.callback=function(){Lf(s,l)}}var v=s.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(u.callback=function(){Lf(s,l),typeof g!="function"&&(bs===null?bs=new Set([this]):bs.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})}),u}function Gy(s,l,u){var g=s.pingCache;if(g===null){g=s.pingCache=new YO;var f=new Set;g.set(l,f)}else f=g.get(l),f===void 0&&(f=new Set,g.set(l,f));f.has(u)||(f.add(u),s=dL.bind(null,s,l,u),l.then(s,s))}function Zy(s){do{var l;if((l=s.tag===13)&&(l=s.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return s;s=s.return}while(s!==null);return null}function $y(s,l,u,g,f){return s.mode&1?(s.flags|=65536,s.lanes=f,s):(s===l?s.flags|=65536:(s.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(l=yr(-1,1),l.tag=2,ks(u,l,1))),u.lanes|=1),s)}var QO=Ir.ReactCurrentOwner,io=!1;function Vn(s,l,u,g){l.child=s===null?Tx(l,null,u,g):Kl(l,s.child,u,g)}function Ky(s,l,u,g,f){u=u.render;var v=l.ref;return Wl(l,f),g=Ik(s,l,u,g,v,f),u=Tk(),s!==null&&!io?(l.updateQueue=s.updateQueue,l.flags&=-2053,s.lanes&=~f,Sr(s,l,f)):(_t&&u&&kk(l),l.flags|=1,Vn(s,l,g,f),l.child)}function Yy(s,l,u,g,f){if(s===null){var v=u.type;return typeof v=="function"&&!Fk(v)&&v.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(l.tag=15,l.type=v,Xx(s,l,v,g,f)):(s=Ph(u.type,null,g,l,l.mode,f),s.ref=l.ref,s.return=l,l.child=s)}if(v=s.child,!(s.lanes&f)){var A=v.memoizedProps;if(u=u.compare,u=u!==null?u:Bd,u(A,g)&&s.ref===l.ref)return Sr(s,l,f)}return l.flags|=1,s=vs(v,g),s.ref=l.ref,s.return=l,l.child=s}function Xx(s,l,u,g,f){if(s!==null){var v=s.memoizedProps;if(Bd(v,g)&&s.ref===l.ref)if(io=!1,l.pendingProps=g=v,(s.lanes&f)!==0)s.flags&131072&&(io=!0);else return l.lanes=s.lanes,Sr(s,l,f)}return zf(s,l,u,g,f)}function eE(s,l,u){var g=l.pendingProps,f=g.children,v=s!==null?s.memoizedState:null;if(g.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(Rl,wo),wo|=u;else{if(!(u&1073741824))return s=v!==null?v.baseLanes|u:u,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:s,cachePool:null,transitions:null},l.updateQueue=null,gt(Rl,wo),wo|=s,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},g=v!==null?v.baseLanes:u,gt(Rl,wo),wo|=g}else v!==null?(g=v.baseLanes|u,l.memoizedState=null):g=u,gt(Rl,wo),wo|=g;return Vn(s,l,f,u),l.child}function tE(s,l){var u=l.ref;(s===null&&u!==null||s!==null&&s.ref!==u)&&(l.flags|=512,l.flags|=2097152)}function zf(s,l,u,g,f){var v=so(u)?ya:On.current;return v=Zl(l,v),Wl(l,f),u=Ik(s,l,u,g,v,f),g=Tk(),s!==null&&!io?(l.updateQueue=s.updateQueue,l.flags&=-2053,s.lanes&=~f,Sr(s,l,f)):(_t&&g&&kk(l),l.flags|=1,Vn(s,l,u,f),l.child)}function Qy(s,l,u,g,f){if(so(u)){var v=!0;Zh(l)}else v=!1;if(Wl(l,f),l.stateNode===null)Mh(s,l),Sx(l,u,g),Of(l,u,g,f),g=!0;else if(s===null){var A=l.stateNode,E=l.memoizedProps;A.props=E;var b=A.context,B=u.contextType;typeof B=="object"&&B!==null?B=Ho(B):(B=so(u)?ya:On.current,B=Zl(l,B));var O=u.getDerivedStateFromProps,D=typeof O=="function"||typeof A.getSnapshotBeforeUpdate=="function";D||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(E!==g||b!==B)&&Hy(l,A,g,B),ls=!1;var y=l.memoizedState;A.state=y,Jh(l,g,A,f),b=l.memoizedState,E!==g||y!==b||ro.current||ls?(typeof O=="function"&&(Pf(l,u,O,g),b=l.memoizedState),(E=ls||Vy(l,u,E,g,y,b,B))?(D||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(l.flags|=4194308)):(typeof A.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=g,l.memoizedState=b),A.props=g,A.state=b,A.context=B,g=E):(typeof A.componentDidMount=="function"&&(l.flags|=4194308),g=!1)}else{A=l.stateNode,Ex(s,l),E=l.memoizedProps,B=l.type===l.elementType?E:pi(l.type,E),A.props=B,D=l.pendingProps,y=A.context,b=u.contextType,typeof b=="object"&&b!==null?b=Ho(b):(b=so(u)?ya:On.current,b=Zl(l,b));var M=u.getDerivedStateFromProps;(O=typeof M=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(E!==D||y!==b)&&Hy(l,A,g,b),ls=!1,y=l.memoizedState,A.state=y,Jh(l,g,A,f);var V=l.memoizedState;E!==D||y!==V||ro.current||ls?(typeof M=="function"&&(Pf(l,u,M,g),V=l.memoizedState),(B=ls||Vy(l,u,B,g,y,V,b)||!1)?(O||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(g,V,b),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(g,V,b)),typeof A.componentDidUpdate=="function"&&(l.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof A.componentDidUpdate!="function"||E===s.memoizedProps&&y===s.memoizedState||(l.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||E===s.memoizedProps&&y===s.memoizedState||(l.flags|=1024),l.memoizedProps=g,l.memoizedState=V),A.props=g,A.state=V,A.context=b,g=B):(typeof A.componentDidUpdate!="function"||E===s.memoizedProps&&y===s.memoizedState||(l.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||E===s.memoizedProps&&y===s.memoizedState||(l.flags|=1024),g=!1)}return jf(s,l,u,g,v,f)}function jf(s,l,u,g,f,v){tE(s,l);var A=(l.flags&128)!==0;if(!g&&!A)return f&&Ly(l,u,!1),Sr(s,l,v);g=l.stateNode,QO.current=l;var E=A&&typeof u.getDerivedStateFromError!="function"?null:g.render();return l.flags|=1,s!==null&&A?(l.child=Kl(l,s.child,null,v),l.child=Kl(l,null,E,v)):Vn(s,l,E,v),l.memoizedState=g.state,f&&Ly(l,u,!0),l.child}function nE(s){var l=s.stateNode;l.pendingContext?Oy(s,l.pendingContext,l.pendingContext!==l.context):l.context&&Oy(s,l.context,!1),xk(s,l.containerInfo)}function Jy(s,l,u,g,f){return $l(),wk(f),l.flags|=256,Vn(s,l,u,g),l.child}var Rf={dehydrated:null,treeContext:null,retryLane:0};function Ff(s){return{baseLanes:s,cachePool:null,transitions:null}}function oE(s,l,u){var g=l.pendingProps,f=xt.current,v=!1,A=(l.flags&128)!==0,E;if((E=A)||(E=s!==null&&s.memoizedState===null?!1:(f&2)!==0),E?(v=!0,l.flags&=-129):(s===null||s.memoizedState!==null)&&(f|=1),gt(xt,f&1),s===null)return Bf(l),s=l.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?(l.mode&1?s.data==="$!"?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(A=g.children,s=g.fallback,v?(g=l.mode,v=l.child,A={mode:"hidden",children:A},!(g&1)&&v!==null?(v.childLanes=0,v.pendingProps=A):v=vp(A,g,0,null),s=_a(s,g,u,null),v.return=l,s.return=l,v.sibling=s,l.child=v,l.child.memoizedState=Ff(u),l.memoizedState=Rf,s):Nk(l,A));if(f=s.memoizedState,f!==null&&(E=f.dehydrated,E!==null))return JO(s,l,A,g,E,f,u);if(v){v=g.fallback,A=l.mode,f=s.child,E=f.sibling;var b={mode:"hidden",children:g.children};return!(A&1)&&l.child!==f?(g=l.child,g.childLanes=0,g.pendingProps=b,l.deletions=null):(g=vs(f,b),g.subtreeFlags=f.subtreeFlags&14680064),E!==null?v=vs(E,v):(v=_a(v,A,u,null),v.flags|=2),v.return=l,g.return=l,g.sibling=v,l.child=g,g=v,v=l.child,A=s.child.memoizedState,A=A===null?Ff(u):{baseLanes:A.baseLanes|u,cachePool:null,transitions:A.transitions},v.memoizedState=A,v.childLanes=s.childLanes&~u,l.memoizedState=Rf,g}return v=s.child,s=v.sibling,g=vs(v,{mode:"visible",children:g.children}),!(l.mode&1)&&(g.lanes=u),g.return=l,g.sibling=null,s!==null&&(u=l.deletions,u===null?(l.deletions=[s],l.flags|=16):u.push(s)),l.child=g,l.memoizedState=null,g}function Nk(s,l){return l=vp({mode:"visible",children:l},s.mode,0,null),l.return=s,s.child=l}function kh(s,l,u,g){return g!==null&&wk(g),Kl(l,s.child,null,u),s=Nk(l,l.pendingProps.children),s.flags|=2,l.memoizedState=null,s}function JO(s,l,u,g,f,v,A){if(u)return l.flags&256?(l.flags&=-257,g=Qm(Error(de(422))),kh(s,l,A,g)):l.memoizedState!==null?(l.child=s.child,l.flags|=128,null):(v=g.fallback,f=l.mode,g=vp({mode:"visible",children:g.children},f,0,null),v=_a(v,f,A,null),v.flags|=2,g.return=l,v.return=l,g.sibling=v,l.child=g,l.mode&1&&Kl(l,s.child,null,A),l.child.memoizedState=Ff(A),l.memoizedState=Rf,v);if(!(l.mode&1))return kh(s,l,A,null);if(f.data==="$!"){if(g=f.nextSibling&&f.nextSibling.dataset,g)var E=g.dgst;return g=E,v=Error(de(419)),g=Qm(v,g,void 0),kh(s,l,A,g)}if(E=(A&s.childLanes)!==0,io||E){if(g=hn,g!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(g.suspendedLanes|A)?0:f,f!==0&&f!==v.retryLane&&(v.retryLane=f,Dr(s,f),ki(g,s,f,-1))}return Rk(),g=Qm(Error(de(421))),kh(s,l,A,g)}return f.data==="$?"?(l.flags|=128,l.child=s.child,l=uL.bind(null,s),f._reactRetry=l,null):(s=v.treeContext,vo=fs(f.nextSibling),Ao=l,_t=!0,mi=null,s!==null&&(jo[Ro++]=Cr,jo[Ro++]=_r,jo[Ro++]=xa,Cr=s.id,_r=s.overflow,xa=l),l=Nk(l,g.children),l.flags|=4096,l)}function Xy(s,l,u){s.lanes|=l;var g=s.alternate;g!==null&&(g.lanes|=l),Nf(s.return,l,u)}function Jm(s,l,u,g,f){var v=s.memoizedState;v===null?s.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:g,tail:u,tailMode:f}:(v.isBackwards=l,v.rendering=null,v.renderingStartTime=0,v.last=g,v.tail=u,v.tailMode=f)}function iE(s,l,u){var g=l.pendingProps,f=g.revealOrder,v=g.tail;if(Vn(s,l,g.children,u),g=xt.current,g&2)g=g&1|2,l.flags|=128;else{if(s!==null&&s.flags&128)e:for(s=l.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&Xy(s,u,l);else if(s.tag===19)Xy(s,u,l);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===l)break e;for(;s.sibling===null;){if(s.return===null||s.return===l)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}g&=1}if(gt(xt,g),!(l.mode&1))l.memoizedState=null;else switch(f){case"forwards":for(u=l.child,f=null;u!==null;)s=u.alternate,s!==null&&Xh(s)===null&&(f=u),u=u.sibling;u=f,u===null?(f=l.child,l.child=null):(f=u.sibling,u.sibling=null),Jm(l,!1,f,u,v);break;case"backwards":for(u=null,f=l.child,l.child=null;f!==null;){if(s=f.alternate,s!==null&&Xh(s)===null){l.child=f;break}s=f.sibling,f.sibling=u,u=f,f=s}Jm(l,!0,u,null,v);break;case"together":Jm(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function Mh(s,l){!(l.mode&1)&&s!==null&&(s.alternate=null,l.alternate=null,l.flags|=2)}function Sr(s,l,u){if(s!==null&&(l.dependencies=s.dependencies),Da|=l.lanes,!(u&l.childLanes))return null;if(s!==null&&l.child!==s.child)throw Error(de(153));if(l.child!==null){for(s=l.child,u=vs(s,s.pendingProps),l.child=u,u.return=l;s.sibling!==null;)s=s.sibling,u=u.sibling=vs(s,s.pendingProps),u.return=l;u.sibling=null}return l.child}function XO(s,l,u){switch(l.tag){case 3:nE(l),$l();break;case 5:Mx(l);break;case 1:so(l.type)&&Zh(l);break;case 4:xk(l,l.stateNode.containerInfo);break;case 10:var g=l.type._context,f=l.memoizedProps.value;gt(Yh,g._currentValue),g._currentValue=f;break;case 13:if(g=l.memoizedState,g!==null)return g.dehydrated!==null?(gt(xt,xt.current&1),l.flags|=128,null):u&l.child.childLanes?oE(s,l,u):(gt(xt,xt.current&1),s=Sr(s,l,u),s!==null?s.sibling:null);gt(xt,xt.current&1);break;case 19:if(g=(u&l.childLanes)!==0,s.flags&128){if(g)return iE(s,l,u);l.flags|=128}if(f=l.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),gt(xt,xt.current),g)break;return null;case 22:case 23:return l.lanes=0,eE(s,l,u)}return Sr(s,l,u)}var rE,Vf,sE,aE;rE=function(s,l){for(var u=l.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===l)break;for(;u.sibling===null;){if(u.return===null||u.return===l)return;u=u.return}u.sibling.return=u.return,u=u.sibling}};Vf=function(){};sE=function(s,l,u,g){var f=s.memoizedProps;if(f!==g){s=l.stateNode,Aa($i.current);var v=null;switch(u){case"input":f=cf(s,f),g=cf(s,g),v=[];break;case"select":f=Dt({},f,{value:void 0}),g=Dt({},g,{value:void 0}),v=[];break;case"textarea":f=hf(s,f),g=hf(s,g),v=[];break;default:typeof f.onClick!="function"&&typeof g.onClick=="function"&&(s.onclick=qh)}gf(u,g);var A;u=null;for(B in f)if(!g.hasOwnProperty(B)&&f.hasOwnProperty(B)&&f[B]!=null)if(B==="style"){var E=f[B];for(A in E)E.hasOwnProperty(A)&&(u||(u={}),u[A]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(xd.hasOwnProperty(B)?v||(v=[]):(v=v||[]).push(B,null));for(B in g){var b=g[B];if(E=f!=null?f[B]:void 0,g.hasOwnProperty(B)&&b!==E&&(b!=null||E!=null))if(B==="style")if(E){for(A in E)!E.hasOwnProperty(A)||b&&b.hasOwnProperty(A)||(u||(u={}),u[A]="");for(A in b)b.hasOwnProperty(A)&&E[A]!==b[A]&&(u||(u={}),u[A]=b[A])}else u||(v||(v=[]),v.push(B,u)),u=b;else B==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,E=E?E.__html:void 0,b!=null&&E!==b&&(v=v||[]).push(B,b)):B==="children"?typeof b!="string"&&typeof b!="number"||(v=v||[]).push(B,""+b):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(xd.hasOwnProperty(B)?(b!=null&&B==="onScroll"&&kt("scroll",s),v||E===b||(v=[])):(v=v||[]).push(B,b))}u&&(v=v||[]).push("style",u);var B=v;(l.updateQueue=B)&&(l.flags|=4)}};aE=function(s,l,u,g){u!==g&&(l.flags|=4)};function dd(s,l){if(!_t)switch(s.tailMode){case"hidden":l=s.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?s.tail=null:u.sibling=null;break;case"collapsed":u=s.tail;for(var g=null;u!==null;)u.alternate!==null&&(g=u),u=u.sibling;g===null?l||s.tail===null?s.tail=null:s.tail.sibling=null:g.sibling=null}}function Bn(s){var l=s.alternate!==null&&s.alternate.child===s.child,u=0,g=0;if(l)for(var f=s.child;f!==null;)u|=f.lanes|f.childLanes,g|=f.subtreeFlags&14680064,g|=f.flags&14680064,f.return=s,f=f.sibling;else for(f=s.child;f!==null;)u|=f.lanes|f.childLanes,g|=f.subtreeFlags,g|=f.flags,f.return=s,f=f.sibling;return s.subtreeFlags|=g,s.childLanes=u,l}function eL(s,l,u){var g=l.pendingProps;switch(bk(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(l),null;case 1:return so(l.type)&&Gh(),Bn(l),null;case 3:return g=l.stateNode,Yl(),bt(ro),bt(On),Dk(),g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null),(s===null||s.child===null)&&(mh(l)?l.flags|=4:s===null||s.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,mi!==null&&(Kf(mi),mi=null))),Vf(s,l),Bn(l),null;case 5:Ek(l);var f=Aa(zd.current);if(u=l.type,s!==null&&l.stateNode!=null)sE(s,l,u,g,f),s.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!g){if(l.stateNode===null)throw Error(de(166));return Bn(l),null}if(s=Aa($i.current),mh(l)){g=l.stateNode,u=l.type;var v=l.memoizedProps;switch(g[Gi]=l,g[Od]=v,s=(l.mode&1)!==0,u){case"dialog":kt("cancel",g),kt("close",g);break;case"iframe":case"object":case"embed":kt("load",g);break;case"video":case"audio":for(f=0;f<md.length;f++)kt(md[f],g);break;case"source":kt("error",g);break;case"img":case"image":case"link":kt("error",g),kt("load",g);break;case"details":kt("toggle",g);break;case"input":ly(g,v),kt("invalid",g);break;case"select":g._wrapperState={wasMultiple:!!v.multiple},kt("invalid",g);break;case"textarea":dy(g,v),kt("invalid",g)}gf(u,v),f=null;for(var A in v)if(v.hasOwnProperty(A)){var E=v[A];A==="children"?typeof E=="string"?g.textContent!==E&&(v.suppressHydrationWarning!==!0&&gh(g.textContent,E,s),f=["children",E]):typeof E=="number"&&g.textContent!==""+E&&(v.suppressHydrationWarning!==!0&&gh(g.textContent,E,s),f=["children",""+E]):xd.hasOwnProperty(A)&&E!=null&&A==="onScroll"&&kt("scroll",g)}switch(u){case"input":sh(g),cy(g,v,!0);break;case"textarea":sh(g),uy(g);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(g.onclick=qh)}g=f,l.updateQueue=g,g!==null&&(l.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=P2(u)),s==="http://www.w3.org/1999/xhtml"?u==="script"?(s=A.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof g.is=="string"?s=A.createElement(u,{is:g.is}):(s=A.createElement(u),u==="select"&&(A=s,g.multiple?A.multiple=!0:g.size&&(A.size=g.size))):s=A.createElementNS(s,u),s[Gi]=l,s[Od]=g,rE(s,l,!1,!1),l.stateNode=s;e:{switch(A=mf(u,g),u){case"dialog":kt("cancel",s),kt("close",s),f=g;break;case"iframe":case"object":case"embed":kt("load",s),f=g;break;case"video":case"audio":for(f=0;f<md.length;f++)kt(md[f],s);f=g;break;case"source":kt("error",s),f=g;break;case"img":case"image":case"link":kt("error",s),kt("load",s),f=g;break;case"details":kt("toggle",s),f=g;break;case"input":ly(s,g),f=cf(s,g),kt("invalid",s);break;case"option":f=g;break;case"select":s._wrapperState={wasMultiple:!!g.multiple},f=Dt({},g,{value:void 0}),kt("invalid",s);break;case"textarea":dy(s,g),f=hf(s,g),kt("invalid",s);break;default:f=g}gf(u,f),E=f;for(v in E)if(E.hasOwnProperty(v)){var b=E[v];v==="style"?z2(s,b):v==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&O2(s,b)):v==="children"?typeof b=="string"?(u!=="textarea"||b!=="")&&Ed(s,b):typeof b=="number"&&Ed(s,""+b):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(xd.hasOwnProperty(v)?b!=null&&v==="onScroll"&&kt("scroll",s):b!=null&&ok(s,v,b,A))}switch(u){case"input":sh(s),cy(s,g,!1);break;case"textarea":sh(s),uy(s);break;case"option":g.value!=null&&s.setAttribute("value",""+As(g.value));break;case"select":s.multiple=!!g.multiple,v=g.value,v!=null?Fl(s,!!g.multiple,v,!1):g.defaultValue!=null&&Fl(s,!!g.multiple,g.defaultValue,!0);break;default:typeof f.onClick=="function"&&(s.onclick=qh)}switch(u){case"button":case"input":case"select":case"textarea":g=!!g.autoFocus;break e;case"img":g=!0;break e;default:g=!1}}g&&(l.flags|=4)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return Bn(l),null;case 6:if(s&&l.stateNode!=null)aE(s,l,s.memoizedProps,g);else{if(typeof g!="string"&&l.stateNode===null)throw Error(de(166));if(u=Aa(zd.current),Aa($i.current),mh(l)){if(g=l.stateNode,u=l.memoizedProps,g[Gi]=l,(v=g.nodeValue!==u)&&(s=Ao,s!==null))switch(s.tag){case 3:gh(g.nodeValue,u,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&gh(g.nodeValue,u,(s.mode&1)!==0)}v&&(l.flags|=4)}else g=(u.nodeType===9?u:u.ownerDocument).createTextNode(g),g[Gi]=l,l.stateNode=g}return Bn(l),null;case 13:if(bt(xt),g=l.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(_t&&vo!==null&&l.mode&1&&!(l.flags&128))yx(),$l(),l.flags|=98560,v=!1;else if(v=mh(l),g!==null&&g.dehydrated!==null){if(s===null){if(!v)throw Error(de(318));if(v=l.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(de(317));v[Gi]=l}else $l(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;Bn(l),v=!1}else mi!==null&&(Kf(mi),mi=null),v=!0;if(!v)return l.flags&65536?l:null}return l.flags&128?(l.lanes=u,l):(g=g!==null,g!==(s!==null&&s.memoizedState!==null)&&g&&(l.child.flags|=8192,l.mode&1&&(s===null||xt.current&1?rn===0&&(rn=3):Rk())),l.updateQueue!==null&&(l.flags|=4),Bn(l),null);case 4:return Yl(),Vf(s,l),s===null&&Nd(l.stateNode.containerInfo),Bn(l),null;case 10:return Ck(l.type._context),Bn(l),null;case 17:return so(l.type)&&Gh(),Bn(l),null;case 19:if(bt(xt),v=l.memoizedState,v===null)return Bn(l),null;if(g=(l.flags&128)!==0,A=v.rendering,A===null)if(g)dd(v,!1);else{if(rn!==0||s!==null&&s.flags&128)for(s=l.child;s!==null;){if(A=Xh(s),A!==null){for(l.flags|=128,dd(v,!1),g=A.updateQueue,g!==null&&(l.updateQueue=g,l.flags|=4),l.subtreeFlags=0,g=u,u=l.child;u!==null;)v=u,s=g,v.flags&=14680066,A=v.alternate,A===null?(v.childLanes=0,v.lanes=s,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=A.childLanes,v.lanes=A.lanes,v.child=A.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=A.memoizedProps,v.memoizedState=A.memoizedState,v.updateQueue=A.updateQueue,v.type=A.type,s=A.dependencies,v.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),u=u.sibling;return gt(xt,xt.current&1|2),l.child}s=s.sibling}v.tail!==null&&Ht()>Jl&&(l.flags|=128,g=!0,dd(v,!1),l.lanes=4194304)}else{if(!g)if(s=Xh(A),s!==null){if(l.flags|=128,g=!0,u=s.updateQueue,u!==null&&(l.updateQueue=u,l.flags|=4),dd(v,!0),v.tail===null&&v.tailMode==="hidden"&&!A.alternate&&!_t)return Bn(l),null}else 2*Ht()-v.renderingStartTime>Jl&&u!==1073741824&&(l.flags|=128,g=!0,dd(v,!1),l.lanes=4194304);v.isBackwards?(A.sibling=l.child,l.child=A):(u=v.last,u!==null?u.sibling=A:l.child=A,v.last=A)}return v.tail!==null?(l=v.tail,v.rendering=l,v.tail=l.sibling,v.renderingStartTime=Ht(),l.sibling=null,u=xt.current,gt(xt,g?u&1|2:u&1),l):(Bn(l),null);case 22:case 23:return jk(),g=l.memoizedState!==null,s!==null&&s.memoizedState!==null!==g&&(l.flags|=8192),g&&l.mode&1?wo&1073741824&&(Bn(l),l.subtreeFlags&6&&(l.flags|=8192)):Bn(l),null;case 24:return null;case 25:return null}throw Error(de(156,l.tag))}function tL(s,l){switch(bk(l),l.tag){case 1:return so(l.type)&&Gh(),s=l.flags,s&65536?(l.flags=s&-65537|128,l):null;case 3:return Yl(),bt(ro),bt(On),Dk(),s=l.flags,s&65536&&!(s&128)?(l.flags=s&-65537|128,l):null;case 5:return Ek(l),null;case 13:if(bt(xt),s=l.memoizedState,s!==null&&s.dehydrated!==null){if(l.alternate===null)throw Error(de(340));$l()}return s=l.flags,s&65536?(l.flags=s&-65537|128,l):null;case 19:return bt(xt),null;case 4:return Yl(),null;case 10:return Ck(l.type._context),null;case 22:case 23:return jk(),null;case 24:return null;default:return null}}var bh=!1,Pn=!1,nL=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function jl(s,l){var u=s.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(g){jt(s,l,g)}else u.current=null}function Hf(s,l,u){try{u()}catch(g){jt(s,l,g)}}var e2=!1;function oL(s,l){if(xf=Hh,s=ux(),fk(s)){if("selectionStart"in s)var u={start:s.selectionStart,end:s.selectionEnd};else e:{u=(u=s.ownerDocument)&&u.defaultView||window;var g=u.getSelection&&u.getSelection();if(g&&g.rangeCount!==0){u=g.anchorNode;var f=g.anchorOffset,v=g.focusNode;g=g.focusOffset;try{u.nodeType,v.nodeType}catch{u=null;break e}var A=0,E=-1,b=-1,B=0,O=0,D=s,y=null;t:for(;;){for(var M;D!==u||f!==0&&D.nodeType!==3||(E=A+f),D!==v||g!==0&&D.nodeType!==3||(b=A+g),D.nodeType===3&&(A+=D.nodeValue.length),(M=D.firstChild)!==null;)y=D,D=M;for(;;){if(D===s)break t;if(y===u&&++B===f&&(E=A),y===v&&++O===g&&(b=A),(M=D.nextSibling)!==null)break;D=y,y=D.parentNode}D=M}u=E===-1||b===-1?null:{start:E,end:b}}else u=null}u=u||{start:0,end:0}}else u=null;for(Ef={focusedElem:s,selectionRange:u},Hh=!1,Ce=l;Ce!==null;)if(l=Ce,s=l.child,(l.subtreeFlags&1028)!==0&&s!==null)s.return=l,Ce=s;else for(;Ce!==null;){l=Ce;try{var V=l.alternate;if(l.flags&1024)switch(l.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var W=V.memoizedProps,G=V.memoizedState,F=l.stateNode,R=F.getSnapshotBeforeUpdate(l.elementType===l.type?W:pi(l.type,W),G);F.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var H=l.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(Y){jt(l,l.return,Y)}if(s=l.sibling,s!==null){s.return=l.return,Ce=s;break}Ce=l.return}return V=e2,e2=!1,V}function Cd(s,l,u){var g=l.updateQueue;if(g=g!==null?g.lastEffect:null,g!==null){var f=g=g.next;do{if((f.tag&s)===s){var v=f.destroy;f.destroy=void 0,v!==void 0&&Hf(l,u,v)}f=f.next}while(f!==g)}}function bp(s,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&s)===s){var g=u.create;u.destroy=g()}u=u.next}while(u!==l)}}function Uf(s){var l=s.ref;if(l!==null){var u=s.stateNode;switch(s.tag){case 5:s=u;break;default:s=u}typeof l=="function"?l(s):l.current=s}}function lE(s){var l=s.alternate;l!==null&&(s.alternate=null,lE(l)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(l=s.stateNode,l!==null&&(delete l[Gi],delete l[Od],delete l[If],delete l[RO],delete l[FO])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function cE(s){return s.tag===5||s.tag===3||s.tag===4}function t2(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||cE(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Wf(s,l,u){var g=s.tag;if(g===5||g===6)s=s.stateNode,l?u.nodeType===8?u.parentNode.insertBefore(s,l):u.insertBefore(s,l):(u.nodeType===8?(l=u.parentNode,l.insertBefore(s,u)):(l=u,l.appendChild(s)),u=u._reactRootContainer,u!=null||l.onclick!==null||(l.onclick=qh));else if(g!==4&&(s=s.child,s!==null))for(Wf(s,l,u),s=s.sibling;s!==null;)Wf(s,l,u),s=s.sibling}function qf(s,l,u){var g=s.tag;if(g===5||g===6)s=s.stateNode,l?u.insertBefore(s,l):u.appendChild(s);else if(g!==4&&(s=s.child,s!==null))for(qf(s,l,u),s=s.sibling;s!==null;)qf(s,l,u),s=s.sibling}var Cn=null,gi=!1;function ss(s,l,u){for(u=u.child;u!==null;)dE(s,l,u),u=u.sibling}function dE(s,l,u){if(Zi&&typeof Zi.onCommitFiberUnmount=="function")try{Zi.onCommitFiberUnmount(dp,u)}catch{}switch(u.tag){case 5:Pn||jl(u,l);case 6:var g=Cn,f=gi;Cn=null,ss(s,l,u),Cn=g,gi=f,Cn!==null&&(gi?(s=Cn,u=u.stateNode,s.nodeType===8?s.parentNode.removeChild(u):s.removeChild(u)):Cn.removeChild(u.stateNode));break;case 18:Cn!==null&&(gi?(s=Cn,u=u.stateNode,s.nodeType===8?qm(s.parentNode,u):s.nodeType===1&&qm(s,u),Td(s)):qm(Cn,u.stateNode));break;case 4:g=Cn,f=gi,Cn=u.stateNode.containerInfo,gi=!0,ss(s,l,u),Cn=g,gi=f;break;case 0:case 11:case 14:case 15:if(!Pn&&(g=u.updateQueue,g!==null&&(g=g.lastEffect,g!==null))){f=g=g.next;do{var v=f,A=v.destroy;v=v.tag,A!==void 0&&(v&2||v&4)&&Hf(u,l,A),f=f.next}while(f!==g)}ss(s,l,u);break;case 1:if(!Pn&&(jl(u,l),g=u.stateNode,typeof g.componentWillUnmount=="function"))try{g.props=u.memoizedProps,g.state=u.memoizedState,g.componentWillUnmount()}catch(E){jt(u,l,E)}ss(s,l,u);break;case 21:ss(s,l,u);break;case 22:u.mode&1?(Pn=(g=Pn)||u.memoizedState!==null,ss(s,l,u),Pn=g):ss(s,l,u);break;default:ss(s,l,u)}}function n2(s){var l=s.updateQueue;if(l!==null){s.updateQueue=null;var u=s.stateNode;u===null&&(u=s.stateNode=new nL),l.forEach(function(g){var f=hL.bind(null,s,g);u.has(g)||(u.add(g),g.then(f,f))})}}function hi(s,l){var u=l.deletions;if(u!==null)for(var g=0;g<u.length;g++){var f=u[g];try{var v=s,A=l,E=A;e:for(;E!==null;){switch(E.tag){case 5:Cn=E.stateNode,gi=!1;break e;case 3:Cn=E.stateNode.containerInfo,gi=!0;break e;case 4:Cn=E.stateNode.containerInfo,gi=!0;break e}E=E.return}if(Cn===null)throw Error(de(160));dE(v,A,f),Cn=null,gi=!1;var b=f.alternate;b!==null&&(b.return=null),f.return=null}catch(B){jt(f,l,B)}}if(l.subtreeFlags&12854)for(l=l.child;l!==null;)uE(l,s),l=l.sibling}function uE(s,l){var u=s.alternate,g=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(hi(l,s),Wi(s),g&4){try{Cd(3,s,s.return),bp(3,s)}catch(W){jt(s,s.return,W)}try{Cd(5,s,s.return)}catch(W){jt(s,s.return,W)}}break;case 1:hi(l,s),Wi(s),g&512&&u!==null&&jl(u,u.return);break;case 5:if(hi(l,s),Wi(s),g&512&&u!==null&&jl(u,u.return),s.flags&32){var f=s.stateNode;try{Ed(f,"")}catch(W){jt(s,s.return,W)}}if(g&4&&(f=s.stateNode,f!=null)){var v=s.memoizedProps,A=u!==null?u.memoizedProps:v,E=s.type,b=s.updateQueue;if(s.updateQueue=null,b!==null)try{E==="input"&&v.type==="radio"&&v.name!=null&&B2(f,v),mf(E,A);var B=mf(E,v);for(A=0;A<b.length;A+=2){var O=b[A],D=b[A+1];O==="style"?z2(f,D):O==="dangerouslySetInnerHTML"?O2(f,D):O==="children"?Ed(f,D):ok(f,O,D,B)}switch(E){case"input":df(f,v);break;case"textarea":N2(f,v);break;case"select":var y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!v.multiple;var M=v.value;M!=null?Fl(f,!!v.multiple,M,!1):y!==!!v.multiple&&(v.defaultValue!=null?Fl(f,!!v.multiple,v.defaultValue,!0):Fl(f,!!v.multiple,v.multiple?[]:"",!1))}f[Od]=v}catch(W){jt(s,s.return,W)}}break;case 6:if(hi(l,s),Wi(s),g&4){if(s.stateNode===null)throw Error(de(162));f=s.stateNode,v=s.memoizedProps;try{f.nodeValue=v}catch(W){jt(s,s.return,W)}}break;case 3:if(hi(l,s),Wi(s),g&4&&u!==null&&u.memoizedState.isDehydrated)try{Td(l.containerInfo)}catch(W){jt(s,s.return,W)}break;case 4:hi(l,s),Wi(s);break;case 13:hi(l,s),Wi(s),f=s.child,f.flags&8192&&(v=f.memoizedState!==null,f.stateNode.isHidden=v,!v||f.alternate!==null&&f.alternate.memoizedState!==null||(Lk=Ht())),g&4&&n2(s);break;case 22:if(O=u!==null&&u.memoizedState!==null,s.mode&1?(Pn=(B=Pn)||O,hi(l,s),Pn=B):hi(l,s),Wi(s),g&8192){if(B=s.memoizedState!==null,(s.stateNode.isHidden=B)&&!O&&s.mode&1)for(Ce=s,O=s.child;O!==null;){for(D=Ce=O;Ce!==null;){switch(y=Ce,M=y.child,y.tag){case 0:case 11:case 14:case 15:Cd(4,y,y.return);break;case 1:jl(y,y.return);var V=y.stateNode;if(typeof V.componentWillUnmount=="function"){g=y,u=y.return;try{l=g,V.props=l.memoizedProps,V.state=l.memoizedState,V.componentWillUnmount()}catch(W){jt(g,u,W)}}break;case 5:jl(y,y.return);break;case 22:if(y.memoizedState!==null){i2(D);continue}}M!==null?(M.return=y,Ce=M):i2(D)}O=O.sibling}e:for(O=null,D=s;;){if(D.tag===5){if(O===null){O=D;try{f=D.stateNode,B?(v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(E=D.stateNode,b=D.memoizedProps.style,A=b!=null&&b.hasOwnProperty("display")?b.display:null,E.style.display=L2("display",A))}catch(W){jt(s,s.return,W)}}}else if(D.tag===6){if(O===null)try{D.stateNode.nodeValue=B?"":D.memoizedProps}catch(W){jt(s,s.return,W)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===s)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===s)break e;for(;D.sibling===null;){if(D.return===null||D.return===s)break e;O===D&&(O=null),D=D.return}O===D&&(O=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:hi(l,s),Wi(s),g&4&&n2(s);break;case 21:break;default:hi(l,s),Wi(s)}}function Wi(s){var l=s.flags;if(l&2){try{e:{for(var u=s.return;u!==null;){if(cE(u)){var g=u;break e}u=u.return}throw Error(de(160))}switch(g.tag){case 5:var f=g.stateNode;g.flags&32&&(Ed(f,""),g.flags&=-33);var v=t2(s);qf(s,v,f);break;case 3:case 4:var A=g.stateNode.containerInfo,E=t2(s);Wf(s,E,A);break;default:throw Error(de(161))}}catch(b){jt(s,s.return,b)}s.flags&=-3}l&4096&&(s.flags&=-4097)}function iL(s,l,u){Ce=s,hE(s)}function hE(s,l,u){for(var g=(s.mode&1)!==0;Ce!==null;){var f=Ce,v=f.child;if(f.tag===22&&g){var A=f.memoizedState!==null||bh;if(!A){var E=f.alternate,b=E!==null&&E.memoizedState!==null||Pn;E=bh;var B=Pn;if(bh=A,(Pn=b)&&!B)for(Ce=f;Ce!==null;)A=Ce,b=A.child,A.tag===22&&A.memoizedState!==null?r2(f):b!==null?(b.return=A,Ce=b):r2(f);for(;v!==null;)Ce=v,hE(v),v=v.sibling;Ce=f,bh=E,Pn=B}o2(s)}else f.subtreeFlags&8772&&v!==null?(v.return=f,Ce=v):o2(s)}}function o2(s){for(;Ce!==null;){var l=Ce;if(l.flags&8772){var u=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:Pn||bp(5,l);break;case 1:var g=l.stateNode;if(l.flags&4&&!Pn)if(u===null)g.componentDidMount();else{var f=l.elementType===l.type?u.memoizedProps:pi(l.type,u.memoizedProps);g.componentDidUpdate(f,u.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}var v=l.updateQueue;v!==null&&Fy(l,v,g);break;case 3:var A=l.updateQueue;if(A!==null){if(u=null,l.child!==null)switch(l.child.tag){case 5:u=l.child.stateNode;break;case 1:u=l.child.stateNode}Fy(l,A,u)}break;case 5:var E=l.stateNode;if(u===null&&l.flags&4){u=E;var b=l.memoizedProps;switch(l.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&u.focus();break;case"img":b.src&&(u.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(l.memoizedState===null){var B=l.alternate;if(B!==null){var O=B.memoizedState;if(O!==null){var D=O.dehydrated;D!==null&&Td(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}Pn||l.flags&512&&Uf(l)}catch(y){jt(l,l.return,y)}}if(l===s){Ce=null;break}if(u=l.sibling,u!==null){u.return=l.return,Ce=u;break}Ce=l.return}}function i2(s){for(;Ce!==null;){var l=Ce;if(l===s){Ce=null;break}var u=l.sibling;if(u!==null){u.return=l.return,Ce=u;break}Ce=l.return}}function r2(s){for(;Ce!==null;){var l=Ce;try{switch(l.tag){case 0:case 11:case 15:var u=l.return;try{bp(4,l)}catch(b){jt(l,u,b)}break;case 1:var g=l.stateNode;if(typeof g.componentDidMount=="function"){var f=l.return;try{g.componentDidMount()}catch(b){jt(l,f,b)}}var v=l.return;try{Uf(l)}catch(b){jt(l,v,b)}break;case 5:var A=l.return;try{Uf(l)}catch(b){jt(l,A,b)}}}catch(b){jt(l,l.return,b)}if(l===s){Ce=null;break}var E=l.sibling;if(E!==null){E.return=l.return,Ce=E;break}Ce=l.return}}var rL=Math.ceil,np=Ir.ReactCurrentDispatcher,Pk=Ir.ReactCurrentOwner,Vo=Ir.ReactCurrentBatchConfig,Ye=0,hn=null,Jt=null,_n=0,wo=0,Rl=ys(0),rn=0,Vd=null,Da=0,wp=0,Ok=0,_d=null,oo=null,Lk=0,Jl=1/0,vr=null,op=!1,Gf=null,bs=null,wh=!1,hs=null,ip=0,yd=0,Zf=null,Bh=-1,Nh=0;function Hn(){return Ye&6?Ht():Bh!==-1?Bh:Bh=Ht()}function ws(s){return s.mode&1?Ye&2&&_n!==0?_n&-_n:HO.transition!==null?(Nh===0&&(Nh=K2()),Nh):(s=lt,s!==0||(s=window.event,s=s===void 0?16:nx(s.type)),s):1}function ki(s,l,u,g){if(50<yd)throw yd=0,Zf=null,Error(de(185));Ud(s,u,g),(!(Ye&2)||s!==hn)&&(s===hn&&(!(Ye&2)&&(wp|=u),rn===4&&ds(s,_n)),ao(s,g),u===1&&Ye===0&&!(l.mode&1)&&(Jl=Ht()+500,mp&&xs()))}function ao(s,l){var u=s.callbackNode;HP(s,l);var g=Vh(s,s===hn?_n:0);if(g===0)u!==null&&gy(u),s.callbackNode=null,s.callbackPriority=0;else if(l=g&-g,s.callbackPriority!==l){if(u!=null&&gy(u),l===1)s.tag===0?VO(s2.bind(null,s)):Ax(s2.bind(null,s)),zO(function(){!(Ye&6)&&xs()}),u=null;else{switch(Y2(g)){case 1:u=lk;break;case 4:u=Z2;break;case 16:u=Fh;break;case 536870912:u=$2;break;default:u=Fh}u=vE(u,pE.bind(null,s))}s.callbackPriority=l,s.callbackNode=u}}function pE(s,l){if(Bh=-1,Nh=0,Ye&6)throw Error(de(327));var u=s.callbackNode;if(ql()&&s.callbackNode!==u)return null;var g=Vh(s,s===hn?_n:0);if(g===0)return null;if(g&30||g&s.expiredLanes||l)l=rp(s,g);else{l=g;var f=Ye;Ye|=2;var v=mE();(hn!==s||_n!==l)&&(vr=null,Jl=Ht()+500,Ca(s,l));do try{lL();break}catch(E){gE(s,E)}while(!0);Ak(),np.current=v,Ye=f,Jt!==null?l=0:(hn=null,_n=0,l=rn)}if(l!==0){if(l===2&&(f=vf(s),f!==0&&(g=f,l=$f(s,f))),l===1)throw u=Vd,Ca(s,0),ds(s,g),ao(s,Ht()),u;if(l===6)ds(s,g);else{if(f=s.current.alternate,!(g&30)&&!sL(f)&&(l=rp(s,g),l===2&&(v=vf(s),v!==0&&(g=v,l=$f(s,v))),l===1))throw u=Vd,Ca(s,0),ds(s,g),ao(s,Ht()),u;switch(s.finishedWork=f,s.finishedLanes=g,l){case 0:case 1:throw Error(de(345));case 2:ba(s,oo,vr);break;case 3:if(ds(s,g),(g&130023424)===g&&(l=Lk+500-Ht(),10<l)){if(Vh(s,0)!==0)break;if(f=s.suspendedLanes,(f&g)!==g){Hn(),s.pingedLanes|=s.suspendedLanes&f;break}s.timeoutHandle=Sf(ba.bind(null,s,oo,vr),l);break}ba(s,oo,vr);break;case 4:if(ds(s,g),(g&4194240)===g)break;for(l=s.eventTimes,f=-1;0<g;){var A=31-fi(g);v=1<<A,A=l[A],A>f&&(f=A),g&=~v}if(g=f,g=Ht()-g,g=(120>g?120:480>g?480:1080>g?1080:1920>g?1920:3e3>g?3e3:4320>g?4320:1960*rL(g/1960))-g,10<g){s.timeoutHandle=Sf(ba.bind(null,s,oo,vr),g);break}ba(s,oo,vr);break;case 5:ba(s,oo,vr);break;default:throw Error(de(329))}}}return ao(s,Ht()),s.callbackNode===u?pE.bind(null,s):null}function $f(s,l){var u=_d;return s.current.memoizedState.isDehydrated&&(Ca(s,l).flags|=256),s=rp(s,l),s!==2&&(l=oo,oo=u,l!==null&&Kf(l)),s}function Kf(s){oo===null?oo=s:oo.push.apply(oo,s)}function sL(s){for(var l=s;;){if(l.flags&16384){var u=l.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var g=0;g<u.length;g++){var f=u[g],v=f.getSnapshot;f=f.value;try{if(!bi(v(),f))return!1}catch{return!1}}}if(u=l.child,l.subtreeFlags&16384&&u!==null)u.return=l,l=u;else{if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function ds(s,l){for(l&=~Ok,l&=~wp,s.suspendedLanes|=l,s.pingedLanes&=~l,s=s.expirationTimes;0<l;){var u=31-fi(l),g=1<<u;s[u]=-1,l&=~g}}function s2(s){if(Ye&6)throw Error(de(327));ql();var l=Vh(s,0);if(!(l&1))return ao(s,Ht()),null;var u=rp(s,l);if(s.tag!==0&&u===2){var g=vf(s);g!==0&&(l=g,u=$f(s,g))}if(u===1)throw u=Vd,Ca(s,0),ds(s,l),ao(s,Ht()),u;if(u===6)throw Error(de(345));return s.finishedWork=s.current.alternate,s.finishedLanes=l,ba(s,oo,vr),ao(s,Ht()),null}function zk(s,l){var u=Ye;Ye|=1;try{return s(l)}finally{Ye=u,Ye===0&&(Jl=Ht()+500,mp&&xs())}}function Sa(s){hs!==null&&hs.tag===0&&!(Ye&6)&&ql();var l=Ye;Ye|=1;var u=Vo.transition,g=lt;try{if(Vo.transition=null,lt=1,s)return s()}finally{lt=g,Vo.transition=u,Ye=l,!(Ye&6)&&xs()}}function jk(){wo=Rl.current,bt(Rl)}function Ca(s,l){s.finishedWork=null,s.finishedLanes=0;var u=s.timeoutHandle;if(u!==-1&&(s.timeoutHandle=-1,LO(u)),Jt!==null)for(u=Jt.return;u!==null;){var g=u;switch(bk(g),g.tag){case 1:g=g.type.childContextTypes,g!=null&&Gh();break;case 3:Yl(),bt(ro),bt(On),Dk();break;case 5:Ek(g);break;case 4:Yl();break;case 13:bt(xt);break;case 19:bt(xt);break;case 10:Ck(g.type._context);break;case 22:case 23:jk()}u=u.return}if(hn=s,Jt=s=vs(s.current,null),_n=wo=l,rn=0,Vd=null,Ok=wp=Da=0,oo=_d=null,va!==null){for(l=0;l<va.length;l++)if(u=va[l],g=u.interleaved,g!==null){u.interleaved=null;var f=g.next,v=u.pending;if(v!==null){var A=v.next;v.next=f,g.next=A}u.pending=g}va=null}return s}function gE(s,l){do{var u=Jt;try{if(Ak(),Ih.current=tp,ep){for(var g=Et.memoizedState;g!==null;){var f=g.queue;f!==null&&(f.pending=null),g=g.next}ep=!1}if(Ea=0,un=on=Et=null,Ad=!1,jd=0,Pk.current=null,u===null||u.return===null){rn=1,Vd=l,Jt=null;break}e:{var v=s,A=u.return,E=u,b=l;if(l=_n,E.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var B=b,O=E,D=O.tag;if(!(O.mode&1)&&(D===0||D===11||D===15)){var y=O.alternate;y?(O.updateQueue=y.updateQueue,O.memoizedState=y.memoizedState,O.lanes=y.lanes):(O.updateQueue=null,O.memoizedState=null)}var M=Zy(A);if(M!==null){M.flags&=-257,$y(M,A,E,v,l),M.mode&1&&Gy(v,B,l),l=M,b=B;var V=l.updateQueue;if(V===null){var W=new Set;W.add(b),l.updateQueue=W}else V.add(b);break e}else{if(!(l&1)){Gy(v,B,l),Rk();break e}b=Error(de(426))}}else if(_t&&E.mode&1){var G=Zy(A);if(G!==null){!(G.flags&65536)&&(G.flags|=256),$y(G,A,E,v,l),wk(Ql(b,E));break e}}v=b=Ql(b,E),rn!==4&&(rn=2),_d===null?_d=[v]:_d.push(v),v=A;do{switch(v.tag){case 3:v.flags|=65536,l&=-l,v.lanes|=l;var F=Qx(v,b,l);Ry(v,F);break e;case 1:E=b;var R=v.type,H=v.stateNode;if(!(v.flags&128)&&(typeof R.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(bs===null||!bs.has(H)))){v.flags|=65536,l&=-l,v.lanes|=l;var Y=Jx(v,E,l);Ry(v,Y);break e}}v=v.return}while(v!==null)}kE(u)}catch(ne){l=ne,Jt===u&&u!==null&&(Jt=u=u.return);continue}break}while(!0)}function mE(){var s=np.current;return np.current=tp,s===null?tp:s}function Rk(){(rn===0||rn===3||rn===2)&&(rn=4),hn===null||!(Da&268435455)&&!(wp&268435455)||ds(hn,_n)}function rp(s,l){var u=Ye;Ye|=2;var g=mE();(hn!==s||_n!==l)&&(vr=null,Ca(s,l));do try{aL();break}catch(f){gE(s,f)}while(!0);if(Ak(),Ye=u,np.current=g,Jt!==null)throw Error(de(261));return hn=null,_n=0,rn}function aL(){for(;Jt!==null;)fE(Jt)}function lL(){for(;Jt!==null&&!NP();)fE(Jt)}function fE(s){var l=wE(s.alternate,s,wo);s.memoizedProps=s.pendingProps,l===null?kE(s):Jt=l,Pk.current=null}function kE(s){var l=s;do{var u=l.alternate;if(s=l.return,l.flags&32768){if(u=tL(u,l),u!==null){u.flags&=32767,Jt=u;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{rn=6,Jt=null;return}}else if(u=eL(u,l,wo),u!==null){Jt=u;return}if(l=l.sibling,l!==null){Jt=l;return}Jt=l=s}while(l!==null);rn===0&&(rn=5)}function ba(s,l,u){var g=lt,f=Vo.transition;try{Vo.transition=null,lt=1,cL(s,l,u,g)}finally{Vo.transition=f,lt=g}return null}function cL(s,l,u,g){do ql();while(hs!==null);if(Ye&6)throw Error(de(327));u=s.finishedWork;var f=s.finishedLanes;if(u===null)return null;if(s.finishedWork=null,s.finishedLanes=0,u===s.current)throw Error(de(177));s.callbackNode=null,s.callbackPriority=0;var v=u.lanes|u.childLanes;if(UP(s,v),s===hn&&(Jt=hn=null,_n=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||wh||(wh=!0,vE(Fh,function(){return ql(),null})),v=(u.flags&15990)!==0,u.subtreeFlags&15990||v){v=Vo.transition,Vo.transition=null;var A=lt;lt=1;var E=Ye;Ye|=4,Pk.current=null,oL(s,u),uE(u,s),IO(Ef),Hh=!!xf,Ef=xf=null,s.current=u,iL(u),PP(),Ye=E,lt=A,Vo.transition=v}else s.current=u;if(wh&&(wh=!1,hs=s,ip=f),v=s.pendingLanes,v===0&&(bs=null),zP(u.stateNode),ao(s,Ht()),l!==null)for(g=s.onRecoverableError,u=0;u<l.length;u++)f=l[u],g(f.value,{componentStack:f.stack,digest:f.digest});if(op)throw op=!1,s=Gf,Gf=null,s;return ip&1&&s.tag!==0&&ql(),v=s.pendingLanes,v&1?s===Zf?yd++:(yd=0,Zf=s):yd=0,xs(),null}function ql(){if(hs!==null){var s=Y2(ip),l=Vo.transition,u=lt;try{if(Vo.transition=null,lt=16>s?16:s,hs===null)var g=!1;else{if(s=hs,hs=null,ip=0,Ye&6)throw Error(de(331));var f=Ye;for(Ye|=4,Ce=s.current;Ce!==null;){var v=Ce,A=v.child;if(Ce.flags&16){var E=v.deletions;if(E!==null){for(var b=0;b<E.length;b++){var B=E[b];for(Ce=B;Ce!==null;){var O=Ce;switch(O.tag){case 0:case 11:case 15:Cd(8,O,v)}var D=O.child;if(D!==null)D.return=O,Ce=D;else for(;Ce!==null;){O=Ce;var y=O.sibling,M=O.return;if(lE(O),O===B){Ce=null;break}if(y!==null){y.return=M,Ce=y;break}Ce=M}}}var V=v.alternate;if(V!==null){var W=V.child;if(W!==null){V.child=null;do{var G=W.sibling;W.sibling=null,W=G}while(W!==null)}}Ce=v}}if(v.subtreeFlags&2064&&A!==null)A.return=v,Ce=A;else e:for(;Ce!==null;){if(v=Ce,v.flags&2048)switch(v.tag){case 0:case 11:case 15:Cd(9,v,v.return)}var F=v.sibling;if(F!==null){F.return=v.return,Ce=F;break e}Ce=v.return}}var R=s.current;for(Ce=R;Ce!==null;){A=Ce;var H=A.child;if(A.subtreeFlags&2064&&H!==null)H.return=A,Ce=H;else e:for(A=R;Ce!==null;){if(E=Ce,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:bp(9,E)}}catch(ne){jt(E,E.return,ne)}if(E===A){Ce=null;break e}var Y=E.sibling;if(Y!==null){Y.return=E.return,Ce=Y;break e}Ce=E.return}}if(Ye=f,xs(),Zi&&typeof Zi.onPostCommitFiberRoot=="function")try{Zi.onPostCommitFiberRoot(dp,s)}catch{}g=!0}return g}finally{lt=u,Vo.transition=l}}return!1}function a2(s,l,u){l=Ql(u,l),l=Qx(s,l,1),s=ks(s,l,1),l=Hn(),s!==null&&(Ud(s,1,l),ao(s,l))}function jt(s,l,u){if(s.tag===3)a2(s,s,u);else for(;l!==null;){if(l.tag===3){a2(l,s,u);break}else if(l.tag===1){var g=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof g.componentDidCatch=="function"&&(bs===null||!bs.has(g))){s=Ql(u,s),s=Jx(l,s,1),l=ks(l,s,1),s=Hn(),l!==null&&(Ud(l,1,s),ao(l,s));break}}l=l.return}}function dL(s,l,u){var g=s.pingCache;g!==null&&g.delete(l),l=Hn(),s.pingedLanes|=s.suspendedLanes&u,hn===s&&(_n&u)===u&&(rn===4||rn===3&&(_n&130023424)===_n&&500>Ht()-Lk?Ca(s,0):Ok|=u),ao(s,l)}function bE(s,l){l===0&&(s.mode&1?(l=ch,ch<<=1,!(ch&130023424)&&(ch=4194304)):l=1);var u=Hn();s=Dr(s,l),s!==null&&(Ud(s,l,u),ao(s,u))}function uL(s){var l=s.memoizedState,u=0;l!==null&&(u=l.retryLane),bE(s,u)}function hL(s,l){var u=0;switch(s.tag){case 13:var g=s.stateNode,f=s.memoizedState;f!==null&&(u=f.retryLane);break;case 19:g=s.stateNode;break;default:throw Error(de(314))}g!==null&&g.delete(l),bE(s,u)}var wE;wE=function(s,l,u){if(s!==null)if(s.memoizedProps!==l.pendingProps||ro.current)io=!0;else{if(!(s.lanes&u)&&!(l.flags&128))return io=!1,XO(s,l,u);io=!!(s.flags&131072)}else io=!1,_t&&l.flags&1048576&&Cx(l,Kh,l.index);switch(l.lanes=0,l.tag){case 2:var g=l.type;Mh(s,l),s=l.pendingProps;var f=Zl(l,On.current);Wl(l,u),f=Ik(null,l,g,s,f,u);var v=Tk();return l.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,so(g)?(v=!0,Zh(l)):v=!1,l.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,yk(l),f.updater=fp,l.stateNode=f,f._reactInternals=l,Of(l,g,s,u),l=jf(null,l,g,!0,v,u)):(l.tag=0,_t&&v&&kk(l),Vn(null,l,f,u),l=l.child),l;case 16:g=l.elementType;e:{switch(Mh(s,l),s=l.pendingProps,f=g._init,g=f(g._payload),l.type=g,f=l.tag=gL(g),s=pi(g,s),f){case 0:l=zf(null,l,g,s,u);break e;case 1:l=Qy(null,l,g,s,u);break e;case 11:l=Ky(null,l,g,s,u);break e;case 14:l=Yy(null,l,g,pi(g.type,s),u);break e}throw Error(de(306,g,""))}return l;case 0:return g=l.type,f=l.pendingProps,f=l.elementType===g?f:pi(g,f),zf(s,l,g,f,u);case 1:return g=l.type,f=l.pendingProps,f=l.elementType===g?f:pi(g,f),Qy(s,l,g,f,u);case 3:e:{if(nE(l),s===null)throw Error(de(387));g=l.pendingProps,v=l.memoizedState,f=v.element,Ex(s,l),Jh(l,g,null,u);var A=l.memoizedState;if(g=A.element,v.isDehydrated)if(v={element:g,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},l.updateQueue.baseState=v,l.memoizedState=v,l.flags&256){f=Ql(Error(de(423)),l),l=Jy(s,l,g,u,f);break e}else if(g!==f){f=Ql(Error(de(424)),l),l=Jy(s,l,g,u,f);break e}else for(vo=fs(l.stateNode.containerInfo.firstChild),Ao=l,_t=!0,mi=null,u=Tx(l,null,g,u),l.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if($l(),g===f){l=Sr(s,l,u);break e}Vn(s,l,g,u)}l=l.child}return l;case 5:return Mx(l),s===null&&Bf(l),g=l.type,f=l.pendingProps,v=s!==null?s.memoizedProps:null,A=f.children,Df(g,f)?A=null:v!==null&&Df(g,v)&&(l.flags|=32),tE(s,l),Vn(s,l,A,u),l.child;case 6:return s===null&&Bf(l),null;case 13:return oE(s,l,u);case 4:return xk(l,l.stateNode.containerInfo),g=l.pendingProps,s===null?l.child=Kl(l,null,g,u):Vn(s,l,g,u),l.child;case 11:return g=l.type,f=l.pendingProps,f=l.elementType===g?f:pi(g,f),Ky(s,l,g,f,u);case 7:return Vn(s,l,l.pendingProps,u),l.child;case 8:return Vn(s,l,l.pendingProps.children,u),l.child;case 12:return Vn(s,l,l.pendingProps.children,u),l.child;case 10:e:{if(g=l.type._context,f=l.pendingProps,v=l.memoizedProps,A=f.value,gt(Yh,g._currentValue),g._currentValue=A,v!==null)if(bi(v.value,A)){if(v.children===f.children&&!ro.current){l=Sr(s,l,u);break e}}else for(v=l.child,v!==null&&(v.return=l);v!==null;){var E=v.dependencies;if(E!==null){A=v.child;for(var b=E.firstContext;b!==null;){if(b.context===g){if(v.tag===1){b=yr(-1,u&-u),b.tag=2;var B=v.updateQueue;if(B!==null){B=B.shared;var O=B.pending;O===null?b.next=b:(b.next=O.next,O.next=b),B.pending=b}}v.lanes|=u,b=v.alternate,b!==null&&(b.lanes|=u),Nf(v.return,u,l),E.lanes|=u;break}b=b.next}}else if(v.tag===10)A=v.type===l.type?null:v.child;else if(v.tag===18){if(A=v.return,A===null)throw Error(de(341));A.lanes|=u,E=A.alternate,E!==null&&(E.lanes|=u),Nf(A,u,l),A=v.sibling}else A=v.child;if(A!==null)A.return=v;else for(A=v;A!==null;){if(A===l){A=null;break}if(v=A.sibling,v!==null){v.return=A.return,A=v;break}A=A.return}v=A}Vn(s,l,f.children,u),l=l.child}return l;case 9:return f=l.type,g=l.pendingProps.children,Wl(l,u),f=Ho(f),g=g(f),l.flags|=1,Vn(s,l,g,u),l.child;case 14:return g=l.type,f=pi(g,l.pendingProps),f=pi(g.type,f),Yy(s,l,g,f,u);case 15:return Xx(s,l,l.type,l.pendingProps,u);case 17:return g=l.type,f=l.pendingProps,f=l.elementType===g?f:pi(g,f),Mh(s,l),l.tag=1,so(g)?(s=!0,Zh(l)):s=!1,Wl(l,u),Sx(l,g,f),Of(l,g,f,u),jf(null,l,g,!0,s,u);case 19:return iE(s,l,u);case 22:return eE(s,l,u)}throw Error(de(156,l.tag))};function vE(s,l){return G2(s,l)}function pL(s,l,u,g){this.tag=s,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=g,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fo(s,l,u,g){return new pL(s,l,u,g)}function Fk(s){return s=s.prototype,!(!s||!s.isReactComponent)}function gL(s){if(typeof s=="function")return Fk(s)?1:0;if(s!=null){if(s=s.$$typeof,s===rk)return 11;if(s===sk)return 14}return 2}function vs(s,l){var u=s.alternate;return u===null?(u=Fo(s.tag,l,s.key,s.mode),u.elementType=s.elementType,u.type=s.type,u.stateNode=s.stateNode,u.alternate=s,s.alternate=u):(u.pendingProps=l,u.type=s.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=s.flags&14680064,u.childLanes=s.childLanes,u.lanes=s.lanes,u.child=s.child,u.memoizedProps=s.memoizedProps,u.memoizedState=s.memoizedState,u.updateQueue=s.updateQueue,l=s.dependencies,u.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},u.sibling=s.sibling,u.index=s.index,u.ref=s.ref,u}function Ph(s,l,u,g,f,v){var A=2;if(g=s,typeof s=="function")Fk(s)&&(A=1);else if(typeof s=="string")A=5;else e:switch(s){case Il:return _a(u.children,f,v,l);case ik:A=8,f|=8;break;case rf:return s=Fo(12,u,l,f|2),s.elementType=rf,s.lanes=v,s;case sf:return s=Fo(13,u,l,f),s.elementType=sf,s.lanes=v,s;case af:return s=Fo(19,u,l,f),s.elementType=af,s.lanes=v,s;case I2:return vp(u,f,v,l);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case D2:A=10;break e;case S2:A=9;break e;case rk:A=11;break e;case sk:A=14;break e;case as:A=16,g=null;break e}throw Error(de(130,s==null?s:typeof s,""))}return l=Fo(A,u,l,f),l.elementType=s,l.type=g,l.lanes=v,l}function _a(s,l,u,g){return s=Fo(7,s,g,l),s.lanes=u,s}function vp(s,l,u,g){return s=Fo(22,s,g,l),s.elementType=I2,s.lanes=u,s.stateNode={isHidden:!1},s}function Xm(s,l,u){return s=Fo(6,s,null,l),s.lanes=u,s}function ef(s,l,u){return l=Fo(4,s.children!==null?s.children:[],s.key,l),l.lanes=u,l.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},l}function mL(s,l,u,g,f){this.tag=l,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pm(0),this.expirationTimes=Pm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pm(0),this.identifierPrefix=g,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Vk(s,l,u,g,f,v,A,E,b){return s=new mL(s,l,u,E,b),l===1?(l=1,v===!0&&(l|=8)):l=0,v=Fo(3,null,null,l),s.current=v,v.stateNode=s,v.memoizedState={element:g,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},yk(v),s}function fL(s,l,u){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sl,key:g==null?null:""+g,children:s,containerInfo:l,implementation:u}}function AE(s){if(!s)return Cs;s=s._reactInternals;e:{if(Ta(s)!==s||s.tag!==1)throw Error(de(170));var l=s;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(so(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(de(171))}if(s.tag===1){var u=s.type;if(so(u))return vx(s,u,l)}return l}function CE(s,l,u,g,f,v,A,E,b){return s=Vk(u,g,!0,s,f,v,A,E,b),s.context=AE(null),u=s.current,g=Hn(),f=ws(u),v=yr(g,f),v.callback=l??null,ks(u,v,f),s.current.lanes=f,Ud(s,f,g),ao(s,g),s}function Ap(s,l,u,g){var f=l.current,v=Hn(),A=ws(f);return u=AE(u),l.context===null?l.context=u:l.pendingContext=u,l=yr(v,A),l.payload={element:s},g=g===void 0?null:g,g!==null&&(l.callback=g),s=ks(f,l,A),s!==null&&(ki(s,f,A,v),Sh(s,f,A)),A}function sp(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function l2(s,l){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var u=s.retryLane;s.retryLane=u!==0&&u<l?u:l}}function Hk(s,l){l2(s,l),(s=s.alternate)&&l2(s,l)}function kL(){return null}var _E=typeof reportError=="function"?reportError:function(s){console.error(s)};function Uk(s){this._internalRoot=s}Cp.prototype.render=Uk.prototype.render=function(s){var l=this._internalRoot;if(l===null)throw Error(de(409));Ap(s,l,null,null)};Cp.prototype.unmount=Uk.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var l=s.containerInfo;Sa(function(){Ap(null,s,null,null)}),l[Er]=null}};function Cp(s){this._internalRoot=s}Cp.prototype.unstable_scheduleHydration=function(s){if(s){var l=X2();s={blockedOn:null,target:s,priority:l};for(var u=0;u<cs.length&&l!==0&&l<cs[u].priority;u++);cs.splice(u,0,s),u===0&&tx(s)}};function Wk(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function _p(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function c2(){}function bL(s,l,u,g,f){if(f){if(typeof g=="function"){var v=g;g=function(){var B=sp(A);v.call(B)}}var A=CE(l,g,s,0,null,!1,!1,"",c2);return s._reactRootContainer=A,s[Er]=A.current,Nd(s.nodeType===8?s.parentNode:s),Sa(),A}for(;f=s.lastChild;)s.removeChild(f);if(typeof g=="function"){var E=g;g=function(){var B=sp(b);E.call(B)}}var b=Vk(s,0,!1,null,null,!1,!1,"",c2);return s._reactRootContainer=b,s[Er]=b.current,Nd(s.nodeType===8?s.parentNode:s),Sa(function(){Ap(l,b,u,g)}),b}function yp(s,l,u,g,f){var v=u._reactRootContainer;if(v){var A=v;if(typeof f=="function"){var E=f;f=function(){var b=sp(A);E.call(b)}}Ap(l,A,s,f)}else A=bL(u,l,s,f,g);return sp(A)}Q2=function(s){switch(s.tag){case 3:var l=s.stateNode;if(l.current.memoizedState.isDehydrated){var u=gd(l.pendingLanes);u!==0&&(ck(l,u|1),ao(l,Ht()),!(Ye&6)&&(Jl=Ht()+500,xs()))}break;case 13:Sa(function(){var g=Dr(s,1);if(g!==null){var f=Hn();ki(g,s,1,f)}}),Hk(s,1)}};dk=function(s){if(s.tag===13){var l=Dr(s,134217728);if(l!==null){var u=Hn();ki(l,s,134217728,u)}Hk(s,134217728)}};J2=function(s){if(s.tag===13){var l=ws(s),u=Dr(s,l);if(u!==null){var g=Hn();ki(u,s,l,g)}Hk(s,l)}};X2=function(){return lt};ex=function(s,l){var u=lt;try{return lt=s,l()}finally{lt=u}};kf=function(s,l,u){switch(l){case"input":if(df(s,u),l=u.name,u.type==="radio"&&l!=null){for(u=s;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+l)+'][type="radio"]'),l=0;l<u.length;l++){var g=u[l];if(g!==s&&g.form===s.form){var f=gp(g);if(!f)throw Error(de(90));M2(g),df(g,f)}}}break;case"textarea":N2(s,u);break;case"select":l=u.value,l!=null&&Fl(s,!!u.multiple,l,!1)}};F2=zk;V2=Sa;var wL={usingClientEntryPoint:!1,Events:[qd,Nl,gp,j2,R2,zk]},ud={findFiberByHostInstance:wa,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vL={bundleType:ud.bundleType,version:ud.version,rendererPackageName:ud.rendererPackageName,rendererConfig:ud.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=W2(s),s===null?null:s.stateNode},findFiberByHostInstance:ud.findFiberByHostInstance||kL,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vh.isDisabled&&vh.supportsFiber)try{dp=vh.inject(vL),Zi=vh}catch{}}_o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wL;_o.createPortal=function(s,l){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wk(l))throw Error(de(200));return fL(s,l,null,u)};_o.createRoot=function(s,l){if(!Wk(s))throw Error(de(299));var u=!1,g="",f=_E;return l!=null&&(l.unstable_strictMode===!0&&(u=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(f=l.onRecoverableError)),l=Vk(s,1,!1,null,null,u,!1,g,f),s[Er]=l.current,Nd(s.nodeType===8?s.parentNode:s),new Uk(l)};_o.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var l=s._reactInternals;if(l===void 0)throw typeof s.render=="function"?Error(de(188)):(s=Object.keys(s).join(","),Error(de(268,s)));return s=W2(l),s=s===null?null:s.stateNode,s};_o.flushSync=function(s){return Sa(s)};_o.hydrate=function(s,l,u){if(!_p(l))throw Error(de(200));return yp(null,s,l,!0,u)};_o.hydrateRoot=function(s,l,u){if(!Wk(s))throw Error(de(405));var g=u!=null&&u.hydratedSources||null,f=!1,v="",A=_E;if(u!=null&&(u.unstable_strictMode===!0&&(f=!0),u.identifierPrefix!==void 0&&(v=u.identifierPrefix),u.onRecoverableError!==void 0&&(A=u.onRecoverableError)),l=CE(l,null,s,1,u??null,f,!1,v,A),s[Er]=l.current,Nd(s),g)for(s=0;s<g.length;s++)u=g[s],f=u._getVersion,f=f(u._source),l.mutableSourceEagerHydrationData==null?l.mutableSourceEagerHydrationData=[u,f]:l.mutableSourceEagerHydrationData.push(u,f);return new Cp(l)};_o.render=function(s,l,u){if(!_p(l))throw Error(de(200));return yp(null,s,l,!1,u)};_o.unmountComponentAtNode=function(s){if(!_p(s))throw Error(de(40));return s._reactRootContainer?(Sa(function(){yp(null,null,s,!1,function(){s._reactRootContainer=null,s[Er]=null})}),!0):!1};_o.unstable_batchedUpdates=zk;_o.unstable_renderSubtreeIntoContainer=function(s,l,u,g){if(!_p(u))throw Error(de(200));if(s==null||s._reactInternals===void 0)throw Error(de(38));return yp(s,l,u,!1,g)};_o.version="18.2.0-next-9e3b772b8-20220608";function yE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yE)}catch(s){console.error(s)}}yE(),C2.exports=_o;var AL=C2.exports,xE,d2=AL;xE=nf.createRoot=d2.createRoot,nf.hydrateRoot=d2.hydrateRoot;const Zd=_e.createContext(["",()=>{}]),xp=_e.createContext([-1,()=>{}]),Ep=_e.createContext([-1,()=>{}]),$d=_e.createContext([[],()=>{}]),Kd=_e.createContext([{},()=>{}]),Yd=_e.createContext([!1,()=>{}]);function CL({children:s}){return Q.jsx("div",{id:"modal",className:"absolute bg-gray-600 bg-opacity-50 left-0 top-0 w-full h-full flex",children:Q.jsx("div",{className:"w-full h-full flex items-center justify-center z-50",children:s})})}function qk(){const s=_e.useContext(xp)[1],l=_e.useContext(Ep)[1],u=_e.useContext(Zd)[1],g=_e.useContext(Kd)[1],f=_e.useContext($d)[1],v=_e.useContext(Yd)[1];return Q.jsx("aside",{className:"w-1/6 px-2",children:Q.jsx("button",{className:"font-medium text-lg underline",onClick:()=>{s(-1),l(-1),g({}),f([]),v(!1),u("home")},children:"Home"})})}function _L({controller:s}){const l=_e.useContext(xp)[1],u=_e.useContext(Zd)[1],g=_e.useContext(Kd)[1],f=_e.useContext($d)[1],v=_e.useContext(Yd)[1],[A,E]=_e.useState([]),[b,B]=_e.useState(""),[O,D]=_e.useState("none"),[y,M]=_e.useState("none"),[V,W]=_e.useState("none"),[G,F]=_e.useState("none"),[R,H]=_e.useState(!1);_e.useEffect(()=>{s.get().then(z=>{E(z)})},[s]),_e.useEffect(()=>{s.get({category:y,states:G},b).then(z=>{E(z)})},[y,G,b,s]);const Y=()=>{H(!R)},ne=()=>{D("none"),W("none"),M("none"),F("none"),Y()},ue=()=>{D(y),W(G),Y()},te=()=>{M(O),F(V),Y()};return Q.jsxs("main",{className:"flex",children:[R&&Q.jsx(CL,{children:Q.jsxs("div",{className:"bg-white p-4 w-1/4 flex flex-col gap-4",children:[Q.jsx("h1",{className:"font-bold text-2xl",children:"Filter"}),Q.jsxs("div",{className:"flex flex-col",children:[Q.jsx("label",{htmlFor:"category_filter",children:"Category"}),Q.jsxs("select",{id:"category_filter",className:"border-2 px-2 py-1 rounded-lg",onChange:z=>D(z.target.value),value:O||"",children:[Q.jsx("option",{value:"none",children:"None"}),Q.jsx("option",{value:"Financial",children:"Financial"}),Q.jsx("option",{value:"Technology",children:"Technology"}),Q.jsx("option",{value:"Health",children:"Health"})]})]}),Q.jsxs("div",{className:"flex flex-col",children:[Q.jsx("label",{htmlFor:"status_filter",children:"Status"}),Q.jsxs("select",{id:"status_filter",className:"border-2 px-2 py-1 rounded-lg",onChange:z=>W(z.target.value),value:V||"",children:[Q.jsx("option",{value:"none",children:"None"}),Q.jsx("option",{value:"Publish",children:"Publish"}),Q.jsx("option",{value:"Draft",children:"Draft"})]})]}),Q.jsxs("div",{className:"flex justify-between mt-8",children:[Q.jsx("button",{type:"button",className:"px-2 py-1 rounded-lg bg-gray-300 text-gray-800",onClick:ne,children:"Reset"}),Q.jsxs("div",{className:"flex gap-2",children:[Q.jsx("button",{type:"button",className:"px-2 py-1 rounded-lg bg-gray-300 text-gray-800",onClick:ue,children:"Cancel"}),Q.jsx("button",{type:"button",className:"px-2 py-1 rounded-lg bg-blue-500 text-white",onClick:te,children:"Filter"})]})]})]})}),Q.jsx(qk,{}),Q.jsxs("aside",{className:"flex-grow",children:[Q.jsxs("section",{id:"head",className:"flex justify-between items-center",children:[Q.jsx("h1",{className:"font-bold text-3xl",children:"List Story"}),Q.jsxs("div",{className:"flex gap-2",children:[Q.jsx("input",{type:"text",className:"border-2 px-4 py-1 rounded-lg",id:"search",placeholder:"Search by writer's name/title story",onChange:z=>{B(z.target.value)},value:b}),Q.jsx("button",{type:"button",className:"px-2 py-1 bg-gray-300 text-gray-800 rounded-lg",onClick:Y,children:"Filter"}),Q.jsx("button",{type:"button",className:"px-2 py-1 bg-blue-500 text-white rounded-lg",onClick:()=>u("story"),children:"Add Story"})]})]}),Q.jsxs("table",{className:"w-full mt-4 bg-white",children:[Q.jsx("thead",{children:Q.jsxs("tr",{children:[Q.jsx("th",{className:"border-2 p-1",children:"Title"}),Q.jsx("th",{className:"border-2 p-1",children:"Author"}),Q.jsx("th",{className:"border-2 p-1",children:"Category"}),Q.jsx("th",{className:"border-2 p-1",children:"Tags"}),Q.jsx("th",{className:"border-2 p-1",children:"Status"}),Q.jsx("th",{className:"border-2 p-1",children:"Action"})]})}),Q.jsx("tbody",{children:A.map((z,re)=>Q.jsxs("tr",{children:[Q.jsx("td",{className:"text-center border-2",children:z.title}),Q.jsx("td",{className:"text-center border-2",children:z.author}),Q.jsx("td",{className:"text-center border-2",children:z.category}),Q.jsx("td",{className:"text-center border-2",children:Q.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:z.tags.map((fe,Ne)=>Q.jsx("div",{className:"px-2 py-1 rounded-lg bg-slate-200",children:fe},Ne))})}),Q.jsx("td",{className:"text-center border-2 px-1",children:Q.jsx("div",{className:"px-2 py-1 rounded-lg bg-slate-200",children:z.states})}),Q.jsxs("td",{className:"text-center border py-1 flex justify-center gap-2",children:[Q.jsx("button",{className:"px-2 py-1 rounded-lg bg-blue-500 text-white",onClick:async()=>{const fe=await s.getOne(z.id);g(fe),f(fe.chapters),v(!0),u("story")},children:"Detail"}),Q.jsx("button",{className:"px-2 py-1 rounded-lg bg-yellow-400 text-gray-800",onClick:async()=>{l(z.id);const fe=await s.getOne(z.id);g(fe),f(fe.chapters),u("story")},children:"Edit"})]})]},re))})]})]})]})}var EE={exports:{}};/*!
* sweetalert2 v11.10.3
* Released under the MIT License.
*/(function(s,l){(function(u,g){s.exports=g()})(Nn,function(){function u(S,k){var C=S==null?null:typeof Symbol<"u"&&S[Symbol.iterator]||S["@@iterator"];if(C!=null){var I,q,ee,me,Me=[],oe=!0,ct=!1;try{if(ee=(C=C.call(S)).next,k===0){if(Object(C)!==C)return;oe=!1}else for(;!(oe=(I=ee.call(C)).done)&&(Me.push(I.value),Me.length!==k);oe=!0);}catch(Xs){ct=!0,q=Xs}finally{try{if(!oe&&C.return!=null&&(me=C.return(),Object(me)!==me))return}finally{if(ct)throw q}}return Me}}function g(S,k){if(typeof S!="object"||!S)return S;var C=S[Symbol.toPrimitive];if(C!==void 0){var I=C.call(S,k||"default");if(typeof I!="object")return I;throw new TypeError("@@toPrimitive must return a primitive value.")}return(k==="string"?String:Number)(S)}function f(S){var k=g(S,"string");return typeof k=="symbol"?k:String(k)}function v(S){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},v(S)}function A(S,k){if(!(S instanceof k))throw new TypeError("Cannot call a class as a function")}function E(S,k){for(var C=0;C<k.length;C++){var I=k[C];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(S,f(I.key),I)}}function b(S,k,C){return k&&E(S.prototype,k),C&&E(S,C),Object.defineProperty(S,"prototype",{writable:!1}),S}function B(S,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(k&&k.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),k&&D(S,k)}function O(S){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(C){return C.__proto__||Object.getPrototypeOf(C)},O(S)}function D(S,k){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(I,q){return I.__proto__=q,I},D(S,k)}function y(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function M(S,k,C){return y()?M=Reflect.construct.bind():M=function(q,ee,me){var Me=[null];Me.push.apply(Me,ee);var oe=Function.bind.apply(q,Me),ct=new oe;return me&&D(ct,me.prototype),ct},M.apply(null,arguments)}function V(S){if(S===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S}function W(S,k){if(k&&(typeof k=="object"||typeof k=="function"))return k;if(k!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return V(S)}function G(S){var k=y();return function(){var I=O(S),q;if(k){var ee=O(this).constructor;q=Reflect.construct(I,arguments,ee)}else q=I.apply(this,arguments);return W(this,q)}}function F(S,k){for(;!Object.prototype.hasOwnProperty.call(S,k)&&(S=O(S),S!==null););return S}function R(){return typeof Reflect<"u"&&Reflect.get?R=Reflect.get.bind():R=function(k,C,I){var q=F(k,C);if(q){var ee=Object.getOwnPropertyDescriptor(q,C);return ee.get?ee.get.call(arguments.length<3?k:I):ee.value}},R.apply(this,arguments)}function H(S,k){return ue(S)||u(S,k)||z(S,k)||Ne()}function Y(S){return ne(S)||te(S)||z(S)||fe()}function ne(S){if(Array.isArray(S))return re(S)}function ue(S){if(Array.isArray(S))return S}function te(S){if(typeof Symbol<"u"&&S[Symbol.iterator]!=null||S["@@iterator"]!=null)return Array.from(S)}function z(S,k){if(S){if(typeof S=="string")return re(S,k);var C=Object.prototype.toString.call(S).slice(8,-1);if(C==="Object"&&S.constructor&&(C=S.constructor.name),C==="Map"||C==="Set")return Array.from(S);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return re(S,k)}}function re(S,k){(k==null||k>S.length)&&(k=S.length);for(var C=0,I=new Array(k);C<k;C++)I[C]=S[C];return I}function fe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(S,k){var C=sn(S,k,"get");return St(S,C)}function Ve(S,k,C){var I=sn(S,k,"set");return Re(S,I,C),C}function sn(S,k,C){if(!k.has(S))throw new TypeError("attempted to "+C+" private field on non-instance");return k.get(S)}function St(S,k){return k.get?k.get.call(S):k.value}function Re(S,k,C){if(k.set)k.set.call(S,C);else{if(!k.writable)throw new TypeError("attempted to set read only private field");k.value=C}}function tt(S,k){if(k.has(S))throw new TypeError("Cannot initialize the same private elements twice on an object")}function ke(S,k,C){tt(S,k),k.set(S,C)}var pe=100,ge={},ot=function(){ge.previousActiveElement instanceof HTMLElement?(ge.previousActiveElement.focus(),ge.previousActiveElement=null):document.body&&document.body.focus()},mt=function(k){return new Promise(function(C){if(!k)return C();var I=window.scrollX,q=window.scrollY;ge.restoreFocusTimeout=setTimeout(function(){ot(),C()},pe),window.scrollTo(I,q)})},lo="swal2-",qn=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],X=qn.reduce(function(S,k){return S[k]=lo+k,S},{}),Ln=["success","warning","info","question","error"],We=Ln.reduce(function(S,k){return S[k]=lo+k,S},{}),Ki="SweetAlert2:",wi=function(k){return k.charAt(0).toUpperCase()+k.slice(1)},It=function(k){console.warn("".concat(Ki," ").concat(v(k)==="object"?k.join(" "):k))},an=function(k){console.error("".concat(Ki," ").concat(k))},Es=[],Ma=function(k){Es.includes(k)||(Es.push(k),It(k))},$e=function(k,C){Ma('"'.concat(k,'" is deprecated and will be removed in the next major release. Please use "').concat(C,'" instead.'))},vi=function(k){return typeof k=="function"?k():k},Ds=function(k){return k&&typeof k.toPromise=="function"},Yi=function(k){return Ds(k)?k.toPromise():Promise.resolve(k)},Qi=function(k){return k&&Promise.resolve(k)===k},Ut=function(){return document.body.querySelector(".".concat(X.container))},Ai=function(k){var C=Ut();return C?C.querySelector(k):null},Tt=function(k){return Ai(".".concat(k))},Ie=function(){return Tt(X.popup)},Rt=function(){return Tt(X.icon)},Ba=function(){return Tt(X["icon-content"])},Na=function(){return Tt(X.title)},pn=function(){return Tt(X["html-container"])},Wt=function(){return Tt(X.image)},Wo=function(){return Tt(X["progress-steps"])},Tr=function(){return Tt(X["validation-message"])},Gn=function(){return Ai(".".concat(X.actions," .").concat(X.confirm))},Zn=function(){return Ai(".".concat(X.actions," .").concat(X.cancel))},qo=function(){return Ai(".".concat(X.actions," .").concat(X.deny))},Pa=function(){return Tt(X["input-label"])},xo=function(){return Ai(".".concat(X.loader))},Go=function(){return Tt(X.actions)},co=function(){return Tt(X.footer)},Mt=function(){return Tt(X["timer-progress-bar"])},wt=function(){return Tt(X.close)},Oa=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Ci=function(){var k=Ie();if(!k)return[];var C=k.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),I=Array.from(C).sort(function(me,Me){var oe=parseInt(me.getAttribute("tabindex")||"0"),ct=parseInt(Me.getAttribute("tabindex")||"0");return oe>ct?1:oe<ct?-1:0}),q=k.querySelectorAll(Oa),ee=Array.from(q).filter(function(me){return me.getAttribute("tabindex")!=="-1"});return Y(new Set(I.concat(ee))).filter(function(me){return fn(me)})},Mr=function(){return $n(document.body,X.shown)&&!$n(document.body,X["toast-shown"])&&!$n(document.body,X["no-backdrop"])},_i=function(){var k=Ie();return k?$n(k,X.toast):!1},nc=function(){var k=Ie();return k?k.hasAttribute("data-loading"):!1},gn=function(k,C){if(k.textContent="",C){var I=new DOMParser,q=I.parseFromString(C,"text/html"),ee=q.querySelector("head");ee&&Array.from(ee.childNodes).forEach(function(Me){k.appendChild(Me)});var me=q.querySelector("body");me&&Array.from(me.childNodes).forEach(function(Me){Me instanceof HTMLVideoElement||Me instanceof HTMLAudioElement?k.appendChild(Me.cloneNode(!0)):k.appendChild(Me)})}},$n=function(k,C){if(!C)return!1;for(var I=C.split(/\s+/),q=0;q<I.length;q++)if(!k.classList.contains(I[q]))return!1;return!0},oc=function(k,C){Array.from(k.classList).forEach(function(I){!Object.values(X).includes(I)&&!Object.values(We).includes(I)&&!Object.values(C.showClass||{}).includes(I)&&k.classList.remove(I)})},Bt=function(k,C,I){if(oc(k,C),C.customClass&&C.customClass[I]){if(typeof C.customClass[I]!="string"&&!C.customClass[I].forEach){It("Invalid type of customClass.".concat(I,'! Expected string or iterable object, got "').concat(v(C.customClass[I]),'"'));return}ze(k,C.customClass[I])}},vt=function(k,C){if(!C)return null;switch(C){case"select":case"textarea":case"file":return k.querySelector(".".concat(X.popup," > .").concat(X[C]));case"checkbox":return k.querySelector(".".concat(X.popup," > .").concat(X.checkbox," input"));case"radio":return k.querySelector(".".concat(X.popup," > .").concat(X.radio," input:checked"))||k.querySelector(".".concat(X.popup," > .").concat(X.radio," input:first-child"));case"range":return k.querySelector(".".concat(X.popup," > .").concat(X.range," input"));default:return k.querySelector(".".concat(X.popup," > .").concat(X.input))}},yi=function(k){if(k.focus(),k.type!=="file"){var C=k.value;k.value="",k.value=C}},xi=function(k,C,I){!k||!C||(typeof C=="string"&&(C=C.split(/\s+/).filter(Boolean)),C.forEach(function(q){Array.isArray(k)?k.forEach(function(ee){I?ee.classList.add(q):ee.classList.remove(q)}):I?k.classList.add(q):k.classList.remove(q)}))},ze=function(k,C){xi(k,C,!0)},Kn=function(k,C){xi(k,C,!1)},Eo=function(k,C){for(var I=Array.from(k.children),q=0;q<I.length;q++){var ee=I[q];if(ee instanceof HTMLElement&&$n(ee,C))return ee}},Zo=function(k,C,I){I==="".concat(parseInt(I))&&(I=parseInt(I)),I||parseInt(I)===0?k.style.setProperty(C,typeof I=="number"?"".concat(I,"px"):I):k.style.removeProperty(C)},Nt=function(k){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";k&&(k.style.display=C)},qt=function(k){k&&(k.style.display="none")},mn=function(k){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";k&&new MutationObserver(function(){Ji(k,k.innerHTML,C)}).observe(k,{childList:!0,subtree:!0})},Ei=function(k,C,I,q){var ee=k.querySelector(C);ee&&ee.style.setProperty(I,q)},Ji=function(k,C){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";C?Nt(k,I):qt(k)},fn=function(k){return!!(k&&(k.offsetWidth||k.offsetHeight||k.getClientRects().length))},Br=function(){return!fn(Gn())&&!fn(qo())&&!fn(Zn())},La=function(k){return k.scrollHeight>k.clientHeight},Do=function(k){var C=window.getComputedStyle(k),I=parseFloat(C.getPropertyValue("animation-duration")||"0"),q=parseFloat(C.getPropertyValue("transition-duration")||"0");return I>0||q>0},Xi=function(k){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,I=Mt();I&&fn(I)&&(C&&(I.style.transition="none",I.style.width="100%"),setTimeout(function(){I.style.transition="width ".concat(k/1e3,"s linear"),I.style.width="0%"},10))},za=function(){var k=Mt();if(k){var C=parseInt(window.getComputedStyle(k).width);k.style.removeProperty("transition"),k.style.width="100%";var I=parseInt(window.getComputedStyle(k).width),q=C/I*100;k.style.width="".concat(q,"%")}},$o=function(){return typeof window>"u"||typeof document>"u"},ic=`
 <div aria-labelledby="`.concat(X.title,'" aria-describedby="').concat(X["html-container"],'" class="').concat(X.popup,`" tabindex="-1">
   <button type="button" class="`).concat(X.close,`"></button>
   <ul class="`).concat(X["progress-steps"],`"></ul>
   <div class="`).concat(X.icon,`"></div>
   <img class="`).concat(X.image,`" />
   <h2 class="`).concat(X.title,'" id="').concat(X.title,`"></h2>
   <div class="`).concat(X["html-container"],'" id="').concat(X["html-container"],`"></div>
   <input class="`).concat(X.input,'" id="').concat(X.input,`" />
   <input type="file" class="`).concat(X.file,`" />
   <div class="`).concat(X.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(X.select,'" id="').concat(X.select,`"></select>
   <div class="`).concat(X.radio,`"></div>
   <label class="`).concat(X.checkbox,`">
     <input type="checkbox" id="`).concat(X.checkbox,`" />
     <span class="`).concat(X.label,`"></span>
   </label>
   <textarea class="`).concat(X.textarea,'" id="').concat(X.textarea,`"></textarea>
   <div class="`).concat(X["validation-message"],'" id="').concat(X["validation-message"],`"></div>
   <div class="`).concat(X.actions,`">
     <div class="`).concat(X.loader,`"></div>
     <button type="button" class="`).concat(X.confirm,`"></button>
     <button type="button" class="`).concat(X.deny,`"></button>
     <button type="button" class="`).concat(X.cancel,`"></button>
   </div>
   <div class="`).concat(X.footer,`"></div>
   <div class="`).concat(X["timer-progress-bar-container"],`">
     <div class="`).concat(X["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Ko=function(){var k=Ut();return k?(k.remove(),Kn([document.documentElement,document.body],[X["no-backdrop"],X["toast-shown"],X["has-column"]]),!0):!1},xn=function(){ge.currentInstance.resetValidationMessage()},rc=function(){var k=Ie(),C=Eo(k,X.input),I=Eo(k,X.file),q=k.querySelector(".".concat(X.range," input")),ee=k.querySelector(".".concat(X.range," output")),me=Eo(k,X.select),Me=k.querySelector(".".concat(X.checkbox," input")),oe=Eo(k,X.textarea);C.oninput=xn,I.onchange=xn,me.onchange=xn,Me.onchange=xn,oe.oninput=xn,q.oninput=function(){xn(),ee.value=q.value},q.onchange=function(){xn(),ee.value=q.value}},sc=function(k){return typeof k=="string"?document.querySelector(k):k},ja=function(k){var C=Ie();C.setAttribute("role",k.toast?"alert":"dialog"),C.setAttribute("aria-live",k.toast?"polite":"assertive"),k.toast||C.setAttribute("aria-modal","true")},Ra=function(k){window.getComputedStyle(k).direction==="rtl"&&ze(Ut(),X.rtl)},ac=function(k){var C=Ko();if($o()){an("SweetAlert2 requires document to initialize");return}var I=document.createElement("div");I.className=X.container,C&&ze(I,X["no-transition"]),gn(I,ic);var q=sc(k.target);q.appendChild(I),ja(k),Ra(q),rc()},Nr=function(k,C){k instanceof HTMLElement?C.appendChild(k):v(k)==="object"?Pr(k,C):k&&gn(C,k)},Pr=function(k,C){k.jquery?Yo(C,k):gn(C,k.toString())},Yo=function(k,C){if(k.textContent="",0 in C)for(var I=0;I in C;I++)k.appendChild(C[I].cloneNode(!0));else k.appendChild(C.cloneNode(!0))},En=function(){if($o())return!1;var S=document.createElement("div");return typeof S.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof S.style.animation<"u"?"animationend":!1}(),Di=function(k,C){var I=Go(),q=xo();!I||!q||(!C.showConfirmButton&&!C.showDenyButton&&!C.showCancelButton?qt(I):Nt(I),Bt(I,C,"actions"),lc(I,q,C),gn(q,C.loaderHtml||""),Bt(q,C,"loader"))};function lc(S,k,C){var I=Gn(),q=qo(),ee=Zn();!I||!q||!ee||(Ss(I,"confirm",C),Ss(q,"deny",C),Ss(ee,"cancel",C),cc(I,q,ee,C),C.reverseButtons&&(C.toast?(S.insertBefore(ee,I),S.insertBefore(q,I)):(S.insertBefore(ee,k),S.insertBefore(q,k),S.insertBefore(I,k))))}function cc(S,k,C,I){if(!I.buttonsStyling){Kn([S,k,C],X.styled);return}ze([S,k,C],X.styled),I.confirmButtonColor&&(S.style.backgroundColor=I.confirmButtonColor,ze(S,X["default-outline"])),I.denyButtonColor&&(k.style.backgroundColor=I.denyButtonColor,ze(k,X["default-outline"])),I.cancelButtonColor&&(C.style.backgroundColor=I.cancelButtonColor,ze(C,X["default-outline"]))}function Ss(S,k,C){var I=wi(k);Ji(S,C["show".concat(I,"Button")],"inline-block"),gn(S,C["".concat(k,"ButtonText")]||""),S.setAttribute("aria-label",C["".concat(k,"ButtonAriaLabel")]||""),S.className=X[k],Bt(S,C,"".concat(k,"Button"))}var Is=function(k,C){var I=wt();I&&(gn(I,C.closeButtonHtml||""),Bt(I,C,"closeButton"),Ji(I,C.showCloseButton),I.setAttribute("aria-label",C.closeButtonAriaLabel||""))},dc=function(k,C){var I=Ut();I&&(Fa(I,C.backdrop),Va(I,C.position),Qo(I,C.grow),Bt(I,C,"container"))};function Fa(S,k){typeof k=="string"?S.style.background=k:k||ze([document.documentElement,document.body],X["no-backdrop"])}function Va(S,k){k&&(k in X?ze(S,X[k]):(It('The "position" parameter is not valid, defaulting to "center"'),ze(S,X.center)))}function Qo(S,k){k&&ze(S,X["grow-".concat(k)])}var Qe={innerParams:new WeakMap,domCache:new WeakMap},uc=["input","file","range","select","radio","checkbox","textarea"],hc=function(k,C){var I=Ie();if(I){var q=Qe.innerParams.get(k),ee=!q||C.input!==q.input;uc.forEach(function(me){var Me=Eo(I,X[me]);Me&&(pc(me,C.inputAttributes),Me.className=X[me],ee&&qt(Me))}),C.input&&(ee&&er(C),Ts(C))}},er=function(k){if(k.input){if(!Xe[k.input]){an("Unexpected type of input! Expected ".concat(Object.keys(Xe).join(" | "),', got "').concat(k.input,'"'));return}var C=Jo(k.input),I=Xe[k.input](C,k);Nt(C),k.inputAutoFocus&&setTimeout(function(){yi(I)})}},it=function(k){for(var C=0;C<k.attributes.length;C++){var I=k.attributes[C].name;["id","type","value","style"].includes(I)||k.removeAttribute(I)}},pc=function(k,C){var I=vt(Ie(),k);if(I){it(I);for(var q in C)I.setAttribute(q,C[q])}},Ts=function(k){var C=Jo(k.input);v(k.customClass)==="object"&&ze(C,k.customClass.input)},Or=function(k,C){(!k.placeholder||C.inputPlaceholder)&&(k.placeholder=C.inputPlaceholder)},ln=function(k,C,I){if(I.inputLabel){var q=document.createElement("label"),ee=X["input-label"];q.setAttribute("for",k.id),q.className=ee,v(I.customClass)==="object"&&ze(q,I.customClass.inputLabel),q.innerText=I.inputLabel,C.insertAdjacentElement("beforebegin",q)}},Jo=function(k){return Eo(Ie(),X[k]||X.input)},uo=function(k,C){["string","number"].includes(v(C))?k.value="".concat(C):Qi(C)||It('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(v(C),'"'))},Xe={};Xe.text=Xe.email=Xe.password=Xe.number=Xe.tel=Xe.url=Xe.search=Xe.date=Xe["datetime-local"]=Xe.time=Xe.week=Xe.month=function(S,k){return uo(S,k.inputValue),ln(S,S,k),Or(S,k),S.type=k.input,S},Xe.file=function(S,k){return ln(S,S,k),Or(S,k),S},Xe.range=function(S,k){var C=S.querySelector("input"),I=S.querySelector("output");return uo(C,k.inputValue),C.type=k.input,uo(I,k.inputValue),ln(C,S,k),S},Xe.select=function(S,k){if(S.textContent="",k.inputPlaceholder){var C=document.createElement("option");gn(C,k.inputPlaceholder),C.value="",C.disabled=!0,C.selected=!0,S.appendChild(C)}return ln(S,S,k),S},Xe.radio=function(S){return S.textContent="",S},Xe.checkbox=function(S,k){var C=vt(Ie(),"checkbox");C.value="1",C.checked=!!k.inputValue;var I=S.querySelector("span");return gn(I,k.inputPlaceholder),C},Xe.textarea=function(S,k){uo(S,k.inputValue),Or(S,k),ln(S,S,k);var C=function(q){return parseInt(window.getComputedStyle(q).marginLeft)+parseInt(window.getComputedStyle(q).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var I=parseInt(window.getComputedStyle(Ie()).width),q=function(){if(document.body.contains(S)){var me=S.offsetWidth+C(S);me>I?Ie().style.width="".concat(me,"px"):Zo(Ie(),"width",k.width)}};new MutationObserver(q).observe(S,{attributes:!0,attributeFilter:["style"]})}}),S};var tr=function(k,C){var I=pn();I&&(mn(I),Bt(I,C,"htmlContainer"),C.html?(Nr(C.html,I),Nt(I,"block")):C.text?(I.textContent=C.text,Nt(I,"block")):qt(I),hc(k,C))},gc=function(k,C){var I=co();I&&(mn(I),Ji(I,C.footer,"block"),C.footer&&Nr(C.footer,I),Bt(I,C,"footer"))},nr=function(k,C){var I=Qe.innerParams.get(k),q=Rt();if(q){if(I&&C.icon===I.icon){Ha(q,C),Lr(q,C);return}if(!C.icon&&!C.iconHtml){qt(q);return}if(C.icon&&Object.keys(We).indexOf(C.icon)===-1){an('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(C.icon,'"')),qt(q);return}Nt(q),Ha(q,C),Lr(q,C),ze(q,C.showClass&&C.showClass.icon)}},Lr=function(k,C){for(var I=0,q=Object.entries(We);I<q.length;I++){var ee=H(q[I],2),me=ee[0],Me=ee[1];C.icon!==me&&Kn(k,Me)}ze(k,C.icon&&We[C.icon]),Ns(k,C),Ms(),Bt(k,C,"icon")},Ms=function(){var k=Ie();if(k)for(var C=window.getComputedStyle(k).getPropertyValue("background-color"),I=k.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),q=0;q<I.length;q++)I[q].style.backgroundColor=C},Bs=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Si=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Ha=function(k,C){if(!(!C.icon&&!C.iconHtml)){var I=k.innerHTML,q="";if(C.iconHtml)q=or(C.iconHtml);else if(C.icon==="success")q=Bs,I=I.replace(/ style=".*?"/g,"");else if(C.icon==="error")q=Si;else if(C.icon){var ee={question:"?",warning:"!",info:"i"};q=or(ee[C.icon])}I.trim()!==q.trim()&&gn(k,q)}},Ns=function(k,C){if(C.iconColor){k.style.color=C.iconColor,k.style.borderColor=C.iconColor;for(var I=0,q=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];I<q.length;I++){var ee=q[I];Ei(k,ee,"backgroundColor",C.iconColor)}Ei(k,".swal2-success-ring","borderColor",C.iconColor)}},or=function(k){return'<div class="'.concat(X["icon-content"],'">').concat(k,"</div>")},mc=function(k,C){var I=Wt();if(I){if(!C.imageUrl){qt(I);return}Nt(I,""),I.setAttribute("src",C.imageUrl),I.setAttribute("alt",C.imageAlt||""),Zo(I,"width",C.imageWidth),Zo(I,"height",C.imageHeight),I.className=X.image,Bt(I,C,"image")}},fc=function(k,C){var I=Ut(),q=Ie();if(!(!I||!q)){if(C.toast){Zo(I,"width",C.width),q.style.width="100%";var ee=xo();ee&&q.insertBefore(ee,Rt())}else Zo(q,"width",C.width);Zo(q,"padding",C.padding),C.color&&(q.style.color=C.color),C.background&&(q.style.background=C.background),qt(Tr()),Ps(q,C)}},Ps=function(k,C){var I=C.showClass||{};k.className="".concat(X.popup," ").concat(fn(k)?I.popup:""),C.toast?(ze([document.documentElement,document.body],X["toast-shown"]),ze(k,X.toast)):ze(k,X.modal),Bt(k,C,"popup"),typeof C.customClass=="string"&&ze(k,C.customClass),C.icon&&ze(k,X["icon-".concat(C.icon)])},kc=function(k,C){var I=Wo();if(I){var q=C.progressSteps,ee=C.currentProgressStep;if(!q||q.length===0||ee===void 0){qt(I);return}Nt(I),I.textContent="",ee>=q.length&&It("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),q.forEach(function(me,Me){var oe=zr(me);if(I.appendChild(oe),Me===ee&&ze(oe,X["active-progress-step"]),Me!==q.length-1){var ct=Ua(C);I.appendChild(ct)}})}},zr=function(k){var C=document.createElement("li");return ze(C,X["progress-step"]),gn(C,k),C},Ua=function(k){var C=document.createElement("li");return ze(C,X["progress-step-line"]),k.progressStepsDistance&&Zo(C,"width",k.progressStepsDistance),C},Os=function(k,C){var I=Na();I&&(mn(I),Ji(I,C.title||C.titleText,"block"),C.title&&Nr(C.title,I),C.titleText&&(I.innerText=C.titleText),Bt(I,C,"title"))},Xo=function(k,C){fc(k,C),dc(k,C),kc(k,C),nr(k,C),mc(k,C),Os(k,C),Is(k,C),tr(k,C),Di(k,C),gc(k,C);var I=Ie();typeof C.didRender=="function"&&I&&C.didRender(I)},Wa=function(){return fn(Ie())},ir=function(){var k;return(k=Gn())===null||k===void 0?void 0:k.click()},qa=function(){var k;return(k=qo())===null||k===void 0?void 0:k.click()},rt=function(){var k;return(k=Zn())===null||k===void 0?void 0:k.click()},Ii=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),rr=function(k){k.keydownTarget&&k.keydownHandlerAdded&&(k.keydownTarget.removeEventListener("keydown",k.keydownHandler,{capture:k.keydownListenerCapture}),k.keydownHandlerAdded=!1)},Ga=function(k,C,I){rr(k),C.toast||(k.keydownHandler=function(q){return Ls(C,q,I)},k.keydownTarget=C.keydownListenerCapture?window:Ie(),k.keydownListenerCapture=C.keydownListenerCapture,k.keydownTarget.addEventListener("keydown",k.keydownHandler,{capture:k.keydownListenerCapture}),k.keydownHandlerAdded=!0)},So=function(k,C){var I,q=Ci();if(q.length){k=k+C,k===q.length?k=0:k===-1&&(k=q.length-1),q[k].focus();return}(I=Ie())===null||I===void 0||I.focus()},Ti=["ArrowRight","ArrowDown"],Mi=["ArrowLeft","ArrowUp"],Ls=function(k,C,I){k&&(C.isComposing||C.keyCode===229||(k.stopKeydownPropagation&&C.stopPropagation(),C.key==="Enter"?jr(C,k):C.key==="Tab"?bc(C):[].concat(Ti,Mi).includes(C.key)?zs(C.key):C.key==="Escape"&&wc(C,k,I)))},jr=function(k,C){if(vi(C.allowEnterKey)){var I=vt(Ie(),C.input);if(k.target&&I&&k.target instanceof HTMLElement&&k.target.outerHTML===I.outerHTML){if(["textarea","file"].includes(C.input))return;ir(),k.preventDefault()}}},bc=function(k){for(var C=k.target,I=Ci(),q=-1,ee=0;ee<I.length;ee++)if(C===I[ee]){q=ee;break}k.shiftKey?So(q,-1):So(q,1),k.stopPropagation(),k.preventDefault()},zs=function(k){var C=Go(),I=Gn(),q=qo(),ee=Zn();if(!(!C||!I||!q||!ee)){var me=[I,q,ee];if(!(document.activeElement instanceof HTMLElement&&!me.includes(document.activeElement))){var Me=Ti.includes(k)?"nextElementSibling":"previousElementSibling",oe=document.activeElement;if(oe){for(var ct=0;ct<C.children.length;ct++){if(oe=oe[Me],!oe)return;if(oe instanceof HTMLButtonElement&&fn(oe))break}oe instanceof HTMLButtonElement&&oe.focus()}}}},wc=function(k,C,I){vi(C.allowEscapeKey)&&(k.preventDefault(),I(Ii.esc))},Io={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},js=function(){var k=Array.from(document.body.children);k.forEach(function(C){C===Ut()||C.contains(Ut())||(C.hasAttribute("aria-hidden")&&C.setAttribute("data-previous-aria-hidden",C.getAttribute("aria-hidden")||""),C.setAttribute("aria-hidden","true"))})},Rr=function(){var k=Array.from(document.body.children);k.forEach(function(C){C.hasAttribute("data-previous-aria-hidden")?(C.setAttribute("aria-hidden",C.getAttribute("data-previous-aria-hidden")||""),C.removeAttribute("data-previous-aria-hidden")):C.removeAttribute("aria-hidden")})},Fr=typeof window<"u"&&!!window.GestureEvent,Bi=function(){if(Fr&&!$n(document.body,X.iosfix)){var k=document.body.scrollTop;document.body.style.top="".concat(k*-1,"px"),ze(document.body,X.iosfix),Vr()}},Vr=function(){var k=Ut();if(k){var C;k.ontouchstart=function(I){C=Za(I)},k.ontouchmove=function(I){C&&(I.preventDefault(),I.stopPropagation())}}},Za=function(k){var C=k.target,I=Ut(),q=pn();return!I||!q||$a(k)||Ka(k)?!1:C===I||!La(I)&&C instanceof HTMLElement&&C.tagName!=="INPUT"&&C.tagName!=="TEXTAREA"&&!(La(q)&&q.contains(C))},$a=function(k){return k.touches&&k.touches.length&&k.touches[0].touchType==="stylus"},Ka=function(k){return k.touches&&k.touches.length>1},Ya=function(){if($n(document.body,X.iosfix)){var k=parseInt(document.body.style.top,10);Kn(document.body,X.iosfix),document.body.style.top="",document.body.scrollTop=k*-1}},Ni=function(){var k=document.createElement("div");k.className=X["scrollbar-measure"],document.body.appendChild(k);var C=k.getBoundingClientRect().width-k.clientWidth;return document.body.removeChild(k),C},Pi=null,Qa=function(k){Pi===null&&(document.body.scrollHeight>window.innerHeight||k==="scroll")&&(Pi=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Pi+Ni(),"px"))},Ja=function(){Pi!==null&&(document.body.style.paddingRight="".concat(Pi,"px"),Pi=null)};function Rs(S,k,C,I){_i()?nl(S,I):(mt(C).then(function(){return nl(S,I)}),rr(ge)),Fr?(k.setAttribute("style","display:none !important"),k.removeAttribute("class"),k.innerHTML=""):k.remove(),Mr()&&(Ja(),Ya(),Rr()),To()}function To(){Kn([document.documentElement,document.body],[X.shown,X["height-auto"],X["no-backdrop"],X["toast-shown"]])}function zn(S){S=Fs(S);var k=Io.swalPromiseResolve.get(this),C=Xa(this);this.isAwaitingPromise?S.isDismissed||(ei(this),k(S)):C&&k(S)}var Xa=function(k){var C=Ie();if(!C)return!1;var I=Qe.innerParams.get(k);if(!I||$n(C,I.hideClass.popup))return!1;Kn(C,I.showClass.popup),ze(C,I.hideClass.popup);var q=Ut();return Kn(q,I.showClass.backdrop),ze(q,I.hideClass.backdrop),tl(k,C,I),!0};function el(S){var k=Io.swalPromiseReject.get(this);ei(this),k&&k(S)}var ei=function(k){k.isAwaitingPromise&&(delete k.isAwaitingPromise,Qe.innerParams.get(k)||k._destroy())},Fs=function(k){return typeof k>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},k)},tl=function(k,C,I){var q=Ut(),ee=En&&Do(C);typeof I.willClose=="function"&&I.willClose(C),ee?Vs(k,C,q,I.returnFocus,I.didClose):Rs(k,q,I.returnFocus,I.didClose)},Vs=function(k,C,I,q,ee){En&&(ge.swalCloseEventFinishedCallback=Rs.bind(null,k,I,q,ee),C.addEventListener(En,function(me){me.target===C&&(ge.swalCloseEventFinishedCallback(),delete ge.swalCloseEventFinishedCallback)}))},nl=function(k,C){setTimeout(function(){typeof C=="function"&&C.bind(k.params)(),k._destroy&&k._destroy()})},Mo=function(k){var C=Ie();if(C||new tn,C=Ie(),!!C){var I=xo();_i()?qt(Rt()):Hs(C,k),Nt(I),C.setAttribute("data-loading","true"),C.setAttribute("aria-busy","true"),C.focus()}},Hs=function(k,C){var I=Go(),q=xo();!I||!q||(!C&&fn(Gn())&&(C=Gn()),Nt(I),C&&(qt(C),q.setAttribute("data-button-to-replace",C.className),I.insertBefore(q,C)),ze([k,I],X.loading))},vc=function(k,C){C.input==="select"||C.input==="radio"?qs(k,C):["text","email","number","tel","textarea"].some(function(I){return I===C.input})&&(Ds(C.inputValue)||Qi(C.inputValue))&&(Mo(Gn()),Gs(k,C))},ol=function(k,C){var I=k.getInput();if(!I)return null;switch(C.input){case"checkbox":return Us(I);case"radio":return il(I);case"file":return Ws(I);default:return C.inputAutoTrim?I.value.trim():I.value}},Us=function(k){return k.checked?1:0},il=function(k){return k.checked?k.value:null},Ws=function(k){return k.files&&k.files.length?k.getAttribute("multiple")!==null?k.files:k.files[0]:null},qs=function(k,C){var I=Ie();if(I){var q=function(me){C.input==="select"?Hr(I,Zs(me),C):C.input==="radio"&&rl(I,Zs(me),C)};Ds(C.inputOptions)||Qi(C.inputOptions)?(Mo(Gn()),Yi(C.inputOptions).then(function(ee){k.hideLoading(),q(ee)})):v(C.inputOptions)==="object"?q(C.inputOptions):an("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(v(C.inputOptions)))}},Gs=function(k,C){var I=k.getInput();I&&(qt(I),Yi(C.inputValue).then(function(q){I.value=C.input==="number"?"".concat(parseFloat(q)||0):"".concat(q),Nt(I),I.focus(),k.hideLoading()}).catch(function(q){an("Error in inputValue promise: ".concat(q)),I.value="",Nt(I),I.focus(),k.hideLoading()}))};function Hr(S,k,C){var I=Eo(S,X.select);if(I){var q=function(me,Me,oe){var ct=document.createElement("option");ct.value=oe,gn(ct,Me),ct.selected=Ur(oe,C.inputValue),me.appendChild(ct)};k.forEach(function(ee){var me=ee[0],Me=ee[1];if(Array.isArray(Me)){var oe=document.createElement("optgroup");oe.label=me,oe.disabled=!1,I.appendChild(oe),Me.forEach(function(ct){return q(oe,ct[1],ct[0])})}else q(I,Me,me)}),I.focus()}}function rl(S,k,C){var I=Eo(S,X.radio);if(I){k.forEach(function(ee){var me=ee[0],Me=ee[1],oe=document.createElement("input"),ct=document.createElement("label");oe.type="radio",oe.name=X.radio,oe.value=me,Ur(me,C.inputValue)&&(oe.checked=!0);var Xs=document.createElement("span");gn(Xs,Me),Xs.className=X.label,ct.appendChild(oe),ct.appendChild(Xs),I.appendChild(ct)});var q=I.querySelectorAll("input");q.length&&q[0].focus()}}var Zs=function S(k){var C=[];return k instanceof Map?k.forEach(function(I,q){var ee=I;v(ee)==="object"&&(ee=S(ee)),C.push([q,ee])}):Object.keys(k).forEach(function(I){var q=k[I];v(q)==="object"&&(q=S(q)),C.push([I,q])}),C},Ur=function(k,C){return!!C&&C.toString()===k.toString()},sr=void 0,$s=function(k){var C=Qe.innerParams.get(k);k.disableButtons(),C.input?et(k,"confirm"):ti(k,!0)},sl=function(k){var C=Qe.innerParams.get(k);k.disableButtons(),C.returnInputValueOnDeny?et(k,"deny"):Ks(k,!1)},al=function(k,C){k.disableButtons(),C(Ii.cancel)},et=function(k,C){var I=Qe.innerParams.get(k);if(!I.input){an('The "input" parameter is needed to be set when using returnInputValueOn'.concat(wi(C)));return}var q=k.getInput(),ee=ol(k,I);I.inputValidator?Ac(k,ee,C):q&&!q.checkValidity()?(k.enableButtons(),k.showValidationMessage(I.validationMessage)):C==="deny"?Ks(k,ee):ti(k,ee)},Ac=function(k,C,I){var q=Qe.innerParams.get(k);k.disableInput();var ee=Promise.resolve().then(function(){return Yi(q.inputValidator(C,q.validationMessage))});ee.then(function(me){k.enableButtons(),k.enableInput(),me?k.showValidationMessage(me):I==="deny"?Ks(k,C):ti(k,C)})},Ks=function(k,C){var I=Qe.innerParams.get(k||sr);if(I.showLoaderOnDeny&&Mo(qo()),I.preDeny){k.isAwaitingPromise=!0;var q=Promise.resolve().then(function(){return Yi(I.preDeny(C,I.validationMessage))});q.then(function(ee){ee===!1?(k.hideLoading(),ei(k)):k.close({isDenied:!0,value:typeof ee>"u"?C:ee})}).catch(function(ee){return Oi(k||sr,ee)})}else k.close({isDenied:!0,value:C})},Yn=function(k,C){k.close({isConfirmed:!0,value:C})},Oi=function(k,C){k.rejectPromise(C)},ti=function(k,C){var I=Qe.innerParams.get(k||sr);if(I.showLoaderOnConfirm&&Mo(),I.preConfirm){k.resetValidationMessage(),k.isAwaitingPromise=!0;var q=Promise.resolve().then(function(){return Yi(I.preConfirm(C,I.validationMessage))});q.then(function(ee){fn(Tr())||ee===!1?(k.hideLoading(),ei(k)):Yn(k,typeof ee>"u"?C:ee)}).catch(function(ee){return Oi(k||sr,ee)})}else Yn(k,C)};function Li(){var S=Qe.innerParams.get(this);if(S){var k=Qe.domCache.get(this);qt(k.loader),_i()?S.icon&&Nt(Rt()):Wr(k),Kn([k.popup,k.actions],X.loading),k.popup.removeAttribute("aria-busy"),k.popup.removeAttribute("data-loading"),k.confirmButton.disabled=!1,k.denyButton.disabled=!1,k.cancelButton.disabled=!1}}var Wr=function(k){var C=k.popup.getElementsByClassName(k.loader.getAttribute("data-button-to-replace"));C.length?Nt(C[0],"inline-block"):Br()&&qt(k.actions)};function ar(){var S=Qe.innerParams.get(this),k=Qe.domCache.get(this);return k?vt(k.popup,S.input):null}function qr(S,k,C){var I=Qe.domCache.get(S);k.forEach(function(q){I[q].disabled=C})}function Gr(S,k){var C=Ie();if(!(!C||!S))if(S.type==="radio")for(var I=C.querySelectorAll('[name="'.concat(X.radio,'"]')),q=0;q<I.length;q++)I[q].disabled=k;else S.disabled=k}function Zr(){qr(this,["confirmButton","denyButton","cancelButton"],!1)}function Bo(){qr(this,["confirmButton","denyButton","cancelButton"],!0)}function $r(){Gr(this.getInput(),!1)}function Kr(){Gr(this.getInput(),!0)}function Ys(S){var k=Qe.domCache.get(this),C=Qe.innerParams.get(this);gn(k.validationMessage,S),k.validationMessage.className=X["validation-message"],C.customClass&&C.customClass.validationMessage&&ze(k.validationMessage,C.customClass.validationMessage),Nt(k.validationMessage);var I=this.getInput();I&&(I.setAttribute("aria-invalid","true"),I.setAttribute("aria-describedby",X["validation-message"]),yi(I),ze(I,X.inputerror))}function P(){var S=Qe.domCache.get(this);S.validationMessage&&qt(S.validationMessage);var k=this.getInput();k&&(k.removeAttribute("aria-invalid"),k.removeAttribute("aria-describedby"),Kn(k,X.inputerror))}var N={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},U=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],$={},ae=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],we=function(k){return Object.prototype.hasOwnProperty.call(N,k)},Ae=function(k){return U.indexOf(k)!==-1},be=function(k){return $[k]},Le=function(k){we(k)||It('Unknown parameter "'.concat(k,'"'))},Pe=function(k){ae.includes(k)&&It('The parameter "'.concat(k,'" is incompatible with toasts'))},kn=function(k){var C=be(k);C&&$e(k,C)},Xt=function(k){k.backdrop===!1&&k.allowOutsideClick&&It('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var C in k)Le(C),k.toast&&Pe(C),kn(C)};function yt(S){var k=Ie(),C=Qe.innerParams.get(this);if(!k||$n(k,C.hideClass.popup)){It("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var I=He(S),q=Object.assign({},C,I);Xo(this,q),Qe.innerParams.set(this,q),Object.defineProperties(this,{params:{value:Object.assign({},this.params,S),writable:!1,enumerable:!0}})}var He=function(k){var C={};return Object.keys(k).forEach(function(I){Ae(I)?C[I]=k[I]:It("Invalid parameter to update: ".concat(I))}),C};function Qn(){var S=Qe.domCache.get(this),k=Qe.innerParams.get(this);if(!k){ft(this);return}S.popup&&ge.swalCloseEventFinishedCallback&&(ge.swalCloseEventFinishedCallback(),delete ge.swalCloseEventFinishedCallback),typeof k.didDestroy=="function"&&k.didDestroy(),Dn(this)}var Dn=function(k){ft(k),delete k.params,delete ge.keydownHandler,delete ge.keydownTarget,delete ge.currentInstance},ft=function(k){k.isAwaitingPromise?(Gt(Qe,k),k.isAwaitingPromise=!0):(Gt(Io,k),Gt(Qe,k),delete k.isAwaitingPromise,delete k.disableButtons,delete k.enableButtons,delete k.getInput,delete k.disableInput,delete k.enableInput,delete k.hideLoading,delete k.disableLoading,delete k.showValidationMessage,delete k.resetValidationMessage,delete k.close,delete k.closePopup,delete k.closeModal,delete k.closeToast,delete k.rejectPromise,delete k.update,delete k._destroy)},Gt=function(k,C){for(var I in k)k[I].delete(C)},Zt=Object.freeze({__proto__:null,_destroy:Qn,close:zn,closeModal:zn,closePopup:zn,closeToast:zn,disableButtons:Bo,disableInput:Kr,disableLoading:Li,enableButtons:Zr,enableInput:$r,getInput:ar,handleAwaitingPromise:ei,hideLoading:Li,rejectPromise:el,resetValidationMessage:P,showValidationMessage:Ys,update:yt}),jn=function(k,C,I){k.toast?$t(k,C,I):(Sn(C),Cc(C),ll(k,C,I))},$t=function(k,C,I){C.popup.onclick=function(){k&&(Yr(k)||k.timer||k.input)||I(Ii.close)}},Yr=function(k){return!!(k.showConfirmButton||k.showDenyButton||k.showCancelButton||k.showCloseButton)},lr=!1,Sn=function(k){k.popup.onmousedown=function(){k.container.onmouseup=function(C){k.container.onmouseup=function(){},C.target===k.container&&(lr=!0)}}},Cc=function(k){k.container.onmousedown=function(){k.popup.onmouseup=function(C){k.popup.onmouseup=function(){},(C.target===k.popup||C.target instanceof HTMLElement&&k.popup.contains(C.target))&&(lr=!0)}}},ll=function(k,C,I){C.container.onclick=function(q){if(lr){lr=!1;return}q.target===C.container&&vi(k.allowOutsideClick)&&I(Ii.backdrop)}},Qs=function(k){return v(k)==="object"&&k.jquery},ie=function(k){return k instanceof Element||Qs(k)},Se=function(k){var C={};return v(k[0])==="object"&&!ie(k[0])?Object.assign(C,k[0]):["title","html","icon"].forEach(function(I,q){var ee=k[q];typeof ee=="string"||ie(ee)?C[I]=ee:ee!==void 0&&an("Unexpected type of ".concat(I,'! Expected "string" or "Element", got ').concat(v(ee)))}),C};function Fe(){for(var S=this,k=arguments.length,C=new Array(k),I=0;I<k;I++)C[I]=arguments[I];return M(S,C)}function Rn(S){var k=function(C){B(q,C);var I=G(q);function q(){return A(this,q),I.apply(this,arguments)}return b(q,[{key:"_main",value:function(me,Me){return R(O(q.prototype),"_main",this).call(this,me,Object.assign({},S,Me))}}]),q}(this);return k}var ho=function(){return ge.timeout&&ge.timeout.getTimerLeft()},Fn=function(){if(ge.timeout)return za(),ge.timeout.stop()},ye=function(){if(ge.timeout){var k=ge.timeout.start();return Xi(k),k}},bn=function(){var k=ge.timeout;return k&&(k.running?Fn():ye())},Kt=function(k){if(ge.timeout){var C=ge.timeout.increase(k);return Xi(C,!0),C}},In=function(){return!!(ge.timeout&&ge.timeout.isRunning())},en=!1,Te={};function At(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Te[S]=this,en||(document.body.addEventListener("click",ni),en=!0)}var ni=function(k){for(var C=k.target;C&&C!==document;C=C.parentNode)for(var I in Te){var q=C.getAttribute(I);if(q){Te[I].fire({template:q});return}}},Qr=Object.freeze({__proto__:null,argsToParams:Se,bindClickHandler:At,clickCancel:rt,clickConfirm:ir,clickDeny:qa,enableLoading:Mo,fire:Fe,getActions:Go,getCancelButton:Zn,getCloseButton:wt,getConfirmButton:Gn,getContainer:Ut,getDenyButton:qo,getFocusableElements:Ci,getFooter:co,getHtmlContainer:pn,getIcon:Rt,getIconContent:Ba,getImage:Wt,getInputLabel:Pa,getLoader:xo,getPopup:Ie,getProgressSteps:Wo,getTimerLeft:ho,getTimerProgressBar:Mt,getTitle:Na,getValidationMessage:Tr,increaseTimer:Kt,isDeprecatedParameter:be,isLoading:nc,isTimerRunning:In,isUpdatableParameter:Ae,isValidParameter:we,isVisible:Wa,mixin:Rn,resumeTimer:ye,showLoading:Mo,stopTimer:Fn,toggleTimer:bn}),cl=function(){function S(k,C){A(this,S),this.callback=k,this.remaining=C,this.running=!1,this.start()}return b(S,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(C){var I=this.running;return I&&this.stop(),this.remaining+=C,I&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),S}(),_c=["swal-title","swal-html","swal-footer"],Js=function(k){var C=typeof k.template=="string"?document.querySelector(k.template):k.template;if(!C)return{};var I=C.content;Sp(I);var q=Object.assign(cr(I),Qd(I),yc(I),Jd(I),Xd(I),eu(I),Dp(I,_c));return q},cr=function(k){var C={},I=Array.from(k.querySelectorAll("swal-param"));return I.forEach(function(q){zi(q,["name","value"]);var ee=q.getAttribute("name"),me=q.getAttribute("value");typeof N[ee]=="boolean"?C[ee]=me!=="false":v(N[ee])==="object"?C[ee]=JSON.parse(me):C[ee]=me}),C},Qd=function(k){var C={},I=Array.from(k.querySelectorAll("swal-function-param"));return I.forEach(function(q){var ee=q.getAttribute("name"),me=q.getAttribute("value");C[ee]=new Function("return ".concat(me))()}),C},yc=function(k){var C={},I=Array.from(k.querySelectorAll("swal-button"));return I.forEach(function(q){zi(q,["type","color","aria-label"]);var ee=q.getAttribute("type");C["".concat(ee,"ButtonText")]=q.innerHTML,C["show".concat(wi(ee),"Button")]=!0,q.hasAttribute("color")&&(C["".concat(ee,"ButtonColor")]=q.getAttribute("color")),q.hasAttribute("aria-label")&&(C["".concat(ee,"ButtonAriaLabel")]=q.getAttribute("aria-label"))}),C},Jd=function(k){var C={},I=k.querySelector("swal-image");return I&&(zi(I,["src","width","height","alt"]),I.hasAttribute("src")&&(C.imageUrl=I.getAttribute("src")),I.hasAttribute("width")&&(C.imageWidth=I.getAttribute("width")),I.hasAttribute("height")&&(C.imageHeight=I.getAttribute("height")),I.hasAttribute("alt")&&(C.imageAlt=I.getAttribute("alt"))),C},Xd=function(k){var C={},I=k.querySelector("swal-icon");return I&&(zi(I,["type","color"]),I.hasAttribute("type")&&(C.icon=I.getAttribute("type")),I.hasAttribute("color")&&(C.iconColor=I.getAttribute("color")),C.iconHtml=I.innerHTML),C},eu=function(k){var C={},I=k.querySelector("swal-input");I&&(zi(I,["type","label","placeholder","value"]),C.input=I.getAttribute("type")||"text",I.hasAttribute("label")&&(C.inputLabel=I.getAttribute("label")),I.hasAttribute("placeholder")&&(C.inputPlaceholder=I.getAttribute("placeholder")),I.hasAttribute("value")&&(C.inputValue=I.getAttribute("value")));var q=Array.from(k.querySelectorAll("swal-input-option"));return q.length&&(C.inputOptions={},q.forEach(function(ee){zi(ee,["value"]);var me=ee.getAttribute("value"),Me=ee.innerHTML;C.inputOptions[me]=Me})),C},Dp=function(k,C){var I={};for(var q in C){var ee=C[q],me=k.querySelector(ee);me&&(zi(me,[]),I[ee.replace(/^swal-/,"")]=me.innerHTML.trim())}return I},Sp=function(k){var C=_c.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(k.children).forEach(function(I){var q=I.tagName.toLowerCase();C.includes(q)||It("Unrecognized element <".concat(q,">"))})},zi=function(k,C){Array.from(k.attributes).forEach(function(I){C.indexOf(I.name)===-1&&It(['Unrecognized attribute "'.concat(I.name,'" on <').concat(k.tagName.toLowerCase(),">."),"".concat(C.length?"Allowed attributes are: ".concat(C.join(", ")):"To set the value, use HTML within the element.")])})},xc=10,tu=function(k){var C=Ut(),I=Ie();typeof k.willOpen=="function"&&k.willOpen(I);var q=window.getComputedStyle(document.body),ee=q.overflowY;ou(C,I,k),setTimeout(function(){Ec(C,I)},xc),Mr()&&(Ip(C,k.scrollbarPadding,ee),js()),!_i()&&!ge.previousActiveElement&&(ge.previousActiveElement=document.activeElement),typeof k.didOpen=="function"&&setTimeout(function(){return k.didOpen(I)}),Kn(C,X["no-transition"])},nu=function S(k){var C=Ie();if(!(k.target!==C||!En)){var I=Ut();C.removeEventListener(En,S),I.style.overflowY="auto"}},Ec=function(k,C){En&&Do(C)?(k.style.overflowY="hidden",C.addEventListener(En,nu)):k.style.overflowY="auto"},Ip=function(k,C,I){Bi(),C&&I!=="hidden"&&Qa(I),setTimeout(function(){k.scrollTop=0})},ou=function(k,C,I){ze(k,I.showClass.backdrop),I.animation?(C.style.setProperty("opacity","0","important"),Nt(C,"grid"),setTimeout(function(){ze(C,I.showClass.popup),C.style.removeProperty("opacity")},xc)):Nt(C,"grid"),ze([document.documentElement,document.body],X.shown),I.heightAuto&&I.backdrop&&!I.toast&&ze([document.documentElement,document.body],X["height-auto"])},iu={email:function(k,C){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(k)?Promise.resolve():Promise.resolve(C||"Invalid email address")},url:function(k,C){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(k)?Promise.resolve():Promise.resolve(C||"Invalid URL")}};function Tp(S){S.inputValidator||(S.input==="email"&&(S.inputValidator=iu.email),S.input==="url"&&(S.inputValidator=iu.url))}function qe(S){(!S.target||typeof S.target=="string"&&!document.querySelector(S.target)||typeof S.target!="string"&&!S.target.appendChild)&&(It('Target parameter is not valid, defaulting to "body"'),S.target="body")}function Mp(S){Tp(S),S.showLoaderOnConfirm&&!S.preConfirm&&It(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),qe(S),typeof S.title=="string"&&(S.title=S.title.split(`
`).join("<br />")),ac(S)}var wn,ji=new WeakMap,Ct=function(){function S(){if(A(this,S),ke(this,ji,{writable:!0,value:void 0}),!(typeof window>"u")){wn=this;for(var k=arguments.length,C=new Array(k),I=0;I<k;I++)C[I]=arguments[I];var q=Object.freeze(this.constructor.argsToParams(C));this.params=q,this.isAwaitingPromise=!1,Ve(this,ji,this._main(wn.params))}}return b(S,[{key:"_main",value:function(C){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Xt(Object.assign({},I,C)),ge.currentInstance){var q=Io.swalPromiseResolve.get(ge.currentInstance),ee=ge.currentInstance.isAwaitingPromise;ge.currentInstance._destroy(),ee||q({isDismissed:!0}),Mr()&&Rr()}ge.currentInstance=wn;var me=pt(C,I);Mp(me),Object.freeze(me),ge.timeout&&(ge.timeout.stop(),delete ge.timeout),clearTimeout(ge.restoreFocusTimeout);var Me=Bp(wn);return Xo(wn,me),Qe.innerParams.set(wn,me),Dc(wn,Me,me)}},{key:"then",value:function(C){return Ue(this,ji).then(C)}},{key:"finally",value:function(C){return Ue(this,ji).finally(C)}}]),S}(),Dc=function(k,C,I){return new Promise(function(q,ee){var me=function(oe){k.close({isDismissed:!0,dismiss:oe})};Io.swalPromiseResolve.set(k,q),Io.swalPromiseReject.set(k,ee),C.confirmButton.onclick=function(){$s(k)},C.denyButton.onclick=function(){sl(k)},C.cancelButton.onclick=function(){al(k,me)},C.closeButton.onclick=function(){me(Ii.close)},jn(I,C,me),Ga(ge,I,me),vc(k,I),tu(I),Np(ge,I,me),ru(C,I),setTimeout(function(){C.container.scrollTop=0})})},pt=function(k,C){var I=Js(k),q=Object.assign({},N,C,I,k);return q.showClass=Object.assign({},N.showClass,q.showClass),q.hideClass=Object.assign({},N.hideClass,q.hideClass),q.animation===!1&&(q.showClass={backdrop:"swal2-noanimation"},q.hideClass={}),q},Bp=function(k){var C={popup:Ie(),container:Ut(),actions:Go(),confirmButton:Gn(),denyButton:qo(),cancelButton:Zn(),loader:xo(),closeButton:wt(),validationMessage:Tr(),progressSteps:Wo()};return Qe.domCache.set(k,C),C},Np=function(k,C,I){var q=Mt();qt(q),C.timer&&(k.timeout=new cl(function(){I("timer"),delete k.timeout},C.timer),C.timerProgressBar&&(Nt(q),Bt(q,C,"timerProgressBar"),setTimeout(function(){k.timeout&&k.timeout.running&&Xi(C.timer)})))},ru=function(k,C){if(!C.toast){if(!vi(C.allowEnterKey)){po();return}Pp(k,C)||So(-1,1)}},Pp=function(k,C){return C.focusDeny&&fn(k.denyButton)?(k.denyButton.focus(),!0):C.focusCancel&&fn(k.cancelButton)?(k.cancelButton.focus(),!0):C.focusConfirm&&fn(k.confirmButton)?(k.confirmButton.focus(),!0):!1},po=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var Ft=new Date,Yt=localStorage.getItem("swal-initiation");Yt?(Ft.getTime()-Date.parse(Yt))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var S=document.createElement("audio");S.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",S.loop=!0,document.body.appendChild(S),setTimeout(function(){S.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(Ft))}Ct.prototype.disableButtons=Bo,Ct.prototype.enableButtons=Zr,Ct.prototype.getInput=ar,Ct.prototype.disableInput=Kr,Ct.prototype.enableInput=$r,Ct.prototype.hideLoading=Li,Ct.prototype.disableLoading=Li,Ct.prototype.showValidationMessage=Ys,Ct.prototype.resetValidationMessage=P,Ct.prototype.close=zn,Ct.prototype.closePopup=zn,Ct.prototype.closeModal=zn,Ct.prototype.closeToast=zn,Ct.prototype.rejectPromise=el,Ct.prototype.update=yt,Ct.prototype._destroy=Qn,Object.assign(Ct,Qr),Object.keys(Zt).forEach(function(S){Ct[S]=function(){if(wn&&wn[S]){var k;return(k=wn)[S].apply(k,arguments)}return null}}),Ct.DismissReason=Ii,Ct.version="11.10.3";var tn=Ct;return tn.default=tn,tn}),typeof Nn<"u"&&Nn.Sweetalert2&&(Nn.swal=Nn.sweetAlert=Nn.Swal=Nn.SweetAlert=Nn.Sweetalert2),typeof document<"u"&&function(u,g){var f=u.createElement("style");if(u.getElementsByTagName("head")[0].appendChild(f),f.styleSheet)f.styleSheet.disabled||(f.styleSheet.cssText=g);else try{f.innerHTML=g}catch{f.innerText=g}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(EE);var yL=EE.exports;const Oh=Yf(yL),u2=[{key:"title",getter:s=>s.getTitle()},{key:"html",getter:s=>s.getHtmlContainer()},{key:"confirmButtonText",getter:s=>s.getConfirmButton()},{key:"denyButtonText",getter:s=>s.getDenyButton()},{key:"cancelButtonText",getter:s=>s.getCancelButton()},{key:"footer",getter:s=>s.getFooter()},{key:"closeButtonHtml",getter:s=>s.getCloseButton()},{key:"iconHtml",getter:s=>s.getIconContent()},{key:"loaderHtml",getter:s=>s.getLoader()}],tf=()=>{};function Lh(s){function l(f){const v={},A={},E=u2.map(b=>b.key);return Object.entries(f).forEach(b=>{let[B,O]=b;E.includes(B)&&yh.isValidElement(O)?(v[B]=O,A[B]=" "):A[B]=O}),[v,A]}function u(f,v){Object.entries(v).forEach(A=>{let[E,b]=A;const O=u2.find(y=>y.key===E).getter(s),D=xE(O);D.render(b),f.__roots.push(D)})}function g(f){f.__roots.forEach(v=>{v.unmount()}),f.__roots=[]}return class extends s{static argsToParams(f){if(yh.isValidElement(f[0])||yh.isValidElement(f[1])){const v={};return["title","html","icon"].forEach((A,E)=>{f[E]!==void 0&&(v[A]=f[E])}),v}else return s.argsToParams(f)}_main(f,v){this.__roots=[],this.__params=Object.assign({},v,f);const[A,E]=l(this.__params),b=E.willOpen||tf,B=E.didOpen||tf,O=E.didDestroy||tf;return super._main(Object.assign({},E,{willOpen:D=>{u(this,A),b(D)},didOpen:D=>{setTimeout(()=>{B(D)})},didDestroy:D=>{O(D),g(this)}}))}update(f){Object.assign(this.__params,f),g(this);const[v,A]=l(this.__params);super.update(A),u(this,v)}}}function xL({controller:s}){const[l,u]=_e.useContext(xp),g=_e.useContext(Ep)[1],[f,v]=_e.useContext($d),A=_e.useContext(Zd)[1],[E,b]=_e.useContext(Kd),[B,O]=_e.useContext(Yd),[D,y]=_e.useState(E.title||""),[M,V]=_e.useState(E.author||""),[W,G]=_e.useState(E.synopsis||""),[F,R]=_e.useState(E.coverImage||""),[H,Y]=_e.useState(E.category||"Financial"),[ne,ue]=_e.useState(E.states||"Draft"),[te,z]=_e.useState(E.tags||[]),[re,fe]=_e.useState(E.tagBuffer||"");_e.useEffect(()=>{b({title:D,author:M,synopsis:W,coverImage:F,category:H,states:ne,tags:te,tagBuffer:re})},[D,M,W,F,H,ne,te,re,b]);const Ne=()=>{Lh(Oh).fire({title:Q.jsx("p",{children:"There is a missing value"})})},Ue=()=>{Lh(Oh).fire({title:Q.jsx("p",{children:"There is a invalid value"})})},Ve=()=>Lh(Oh).fire({title:Q.jsx("p",{children:"Are you sure you want to cancel adding the story without saving the data?"}),showCancelButton:!0}),sn=async()=>{if(D===""||M===""||W===""||F===""){Ne();return}if(l<0){if((await s.create({title:D,author:M,synopsis:W,coverImage:F,category:H,states:ne,tags:te,chapters:f})).status!=="OK"){Ue();return}}else{if((await s.update(l,{title:D,author:M,synopsis:W,coverImage:F,category:H,states:ne,tags:te,chapters:f})).status!=="OK"){Ue();return}u(-1)}b({}),v([]),A("home")},St=async()=>{(await Ve()).isDismissed||(u(-1),b({}),v([]),A("home"))};return Q.jsxs("main",{className:"flex",children:[Q.jsx(qk,{}),Q.jsxs("aside",{className:"flex-grow",children:[Q.jsx("section",{id:"head",className:"flex justify-between items-center",children:Q.jsxs("h1",{className:"font-bold text-3xl",children:[!B&&(l<0?"Add":"Edit")," Story"]})}),Q.jsxs("section",{className:"bg-white w-full mt-4 p-4",children:[Q.jsxs("div",{className:"flex",children:[Q.jsxs("div",{className:"flex flex-col gap-2 w-1/2 p-1",children:[Q.jsx("label",{htmlFor:"title",children:"Title"}),Q.jsx("input",{type:"text",id:"title",className:"border-2 px-2 py-1 rounded-lg",placeholder:"Title",value:D,onChange:Re=>y(Re.target.value),disabled:B})]}),Q.jsxs("div",{className:"flex flex-col gap-2 w-1/2 p-1",children:[Q.jsx("label",{htmlFor:"author",children:"Writer Name"}),Q.jsx("input",{type:"text",id:"author",className:"border-2 px-2 py-1 rounded-lg",placeholder:"Writer Name",value:M,onChange:Re=>V(Re.target.value),disabled:B})]})]}),Q.jsxs("div",{className:"flex flex-col gap-2 w-full p-1",children:[Q.jsx("label",{htmlFor:"synopsis",children:"Synopsis"}),Q.jsx("textarea",{id:"synopsis",rows:"10",className:"border-2 px-2 py-1 rounded-lg",placeholder:"Synopsis",value:W,onChange:Re=>G(Re.target.value),disabled:B})]}),Q.jsxs("div",{className:"flex",children:[Q.jsxs("div",{className:"flex flex-col gap-2 w-1/2 p-1",children:[Q.jsx("label",{htmlFor:"category",children:"Category"}),Q.jsxs("select",{id:"category",className:"border-2 px-2 py-1 rounded-lg",value:H,onChange:Re=>Y(Re.target.value),disabled:B,children:[Q.jsx("option",{value:"Financial",children:"Financial"}),Q.jsx("option",{value:"Technology",children:"Technology"}),Q.jsx("option",{value:"Health",children:"Health"})]})]}),Q.jsxs("div",{className:"flex flex-col gap-2 w-1/2 p-1",children:[Q.jsx("label",{htmlFor:"tags",children:"Tags"}),Q.jsxs("div",{className:"border-2 px-2 py-1 rounded-lg flex flex-wrap gap-2",children:[te.map((Re,tt)=>Q.jsx("div",{className:"px-2 rounded bg-blue-300 text-white",children:Q.jsxs("button",{type:"button",onClick:()=>{B||z(te.filter((ke,pe)=>pe!==tt))},children:[Re,!B&&" x"]})},tt)),!B&&Q.jsx("input",{type:"text",id:"tags",placeholder:"Tags",className:"flex-grow",onChange:Re=>fe(Re.target.value),value:re,onKeyDown:Re=>{Re.key==="Enter"&&re!==""&&(z([...te,re]),fe(""))}})]})]})]}),Q.jsxs("div",{className:"flex",children:[Q.jsxs("div",{className:"flex flex-col gap-2 w-1/2 p-1",children:[Q.jsx("label",{htmlFor:"coverImage",children:"Cover Image"}),Q.jsx("input",{type:"text",id:"coverImage",className:"border-2 px-2 py-1 rounded-lg",placeholder:"Cover Image URL",value:F,onChange:Re=>R(Re.target.value),disabled:B})]}),Q.jsxs("div",{className:"flex flex-col gap-2 w-1/2 p-1",children:[Q.jsx("label",{htmlFor:"states",children:"States"}),Q.jsxs("select",{id:"states",className:"border-2 px-2 py-1 rounded-lg",value:ne,onChange:Re=>ue(Re.target.value),disabled:B,children:[Q.jsx("option",{value:"Draft",children:"Draft"}),Q.jsx("option",{value:"Publish",children:"Publish"})]})]})]}),Q.jsx("hr",{className:"w-full my-2"}),Q.jsx("div",{className:"flex justify-end mt-2",children:Q.jsx("button",{type:"button",className:"px-2 py-1 bg-blue-500 text-white rounded-lg",onClick:()=>A("chapter"),children:"Add Chapter"})}),Q.jsxs("table",{className:"mt-4 w-full",children:[Q.jsx("thead",{children:Q.jsxs("tr",{children:[Q.jsx("th",{className:"border-2 p-1",children:"Title"}),Q.jsx("th",{className:"border-2 p-1",children:"Last Updated"}),Q.jsx("th",{className:"border-2 p-1",children:"Action"})]})}),Q.jsx("tbody",{children:f.map((Re,tt)=>Q.jsxs("tr",{children:[Q.jsx("td",{className:"text-center border-2",children:Re.title}),Q.jsx("td",{className:"text-center border-2",children:Re.lastUpdated.toISOString()}),Q.jsx("td",{className:"text-center border-2 py-1 flex justify-center gap-2",children:B?Q.jsx("button",{className:"px-2 py-1 bg-blue-500 text-white rounded-lg",onClick:()=>{b({...E,chapter:f[tt]}),A("chapter")},children:"Detail"}):Q.jsxs(Q.Fragment,{children:[Q.jsx("button",{className:"px-2 py-1 rounded-lg bg-yellow-400 text-gray-800",onClick:()=>{const ke=f.filter((pe,ge)=>ge!==tt);v(ke)},children:"Delete"}),Q.jsx("button",{className:"px-2 py-1 rounded-lg bg-yellow-400 text-gray-800",onClick:()=>{g(tt),b({...E,chapter:f[tt]}),A("chapter")},children:"Edit"})]})})]},tt))})]})]}),Q.jsx("div",{className:"flex justify-end mt-4 gap-2",children:B?Q.jsx("button",{className:"px-2 py-1 bg-blue-500 text-white rounded-lg",onClick:()=>{O(!1),b({}),v([]),A("home")},children:"Back"}):Q.jsxs(Q.Fragment,{children:[Q.jsx("button",{type:"button",className:"px-2 py-1 bg-gray-300 text-gray-800 rounded-lg",onClick:St,children:"Cancel"}),Q.jsx("button",{type:"button",className:"px-2 py-1 bg-blue-500 text-white rounded-lg",onClick:sn,children:"Save"})]})})]})]})}var ap={exports:{}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */ap.exports;(function(s,l){(function(u,g){s.exports=g(_e)})(self,u=>(()=>{var g={703:(E,b,B)=>{var O=B(414);function D(){}function y(){}y.resetWarningCache=D,E.exports=function(){function M(G,F,R,H,Y,ne){if(ne!==O){var ue=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ue.name="Invariant Violation",ue}}function V(){return M}M.isRequired=M;var W={array:M,bigint:M,bool:M,func:M,number:M,object:M,string:M,symbol:M,any:M,arrayOf:V,element:M,elementType:M,instanceOf:V,node:M,objectOf:V,oneOf:V,oneOfType:V,shape:V,exact:V,checkPropTypes:y,resetWarningCache:D};return W.PropTypes=W,W}},697:(E,b,B)=>{E.exports=B(703)()},414:E=>{E.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:E=>{E.exports=u}},f={};function v(E){var b=f[E];if(b!==void 0)return b.exports;var B=f[E]={exports:{}};return g[E](B,B.exports,v),B.exports}v.n=E=>{var b=E&&E.__esModule?()=>E.default:()=>E;return v.d(b,{a:b}),b},v.d=(E,b)=>{for(var B in b)v.o(b,B)&&!v.o(E,B)&&Object.defineProperty(E,B,{enumerable:!0,get:b[B]})},v.o=(E,b)=>Object.prototype.hasOwnProperty.call(E,b),v.r=E=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(E,"__esModule",{value:!0})};var A={};return(()=>{v.r(A),v.d(A,{CKEditor:()=>Bo,CKEditorContext:()=>Gr,useMultiRootEditor:()=>Ys});var E=v(787),b=v.n(E),B=v(697),O=v.n(B);const D=new Array(256).fill("").map((P,N)=>("0"+N.toString(16)).slice(-2));class y{constructor(N){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof N.crashNumberLimit=="number"?N.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof N.minimumNonErrorTimePeriod=="number"?N.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=U=>{const $="error"in U?U.error:U.reason;$ instanceof Error&&this._handleError($,U)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(N,U){this._listeners[N]||(this._listeners[N]=[]),this._listeners[N].push(U)}off(N,U){this._listeners[N]=this._listeners[N].filter($=>$!==U)}_fire(N,...U){const $=this._listeners[N]||[];for(const ae of $)ae.apply(this,[null,...U])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(N,U){if(this._shouldReactToError(N)){this.crashes.push({message:N.message,stack:N.stack,filename:U instanceof ErrorEvent?U.filename:void 0,lineno:U instanceof ErrorEvent?U.lineno:void 0,colno:U instanceof ErrorEvent?U.colno:void 0,date:this._now()});const $=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:N,causesRestart:$}),$?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(N){return N.is&&N.is("CKEditorError")&&N.context!==void 0&&N.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(N)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function M(P,N=new Set){const U=[P],$=new Set;let ae=0;for(;U.length>ae;){const we=U[ae++];if(!$.has(we)&&V(we)&&!N.has(we))if($.add(we),Symbol.iterator in we)try{for(const Ae of we)U.push(Ae)}catch{}else for(const Ae in we)Ae!=="defaultValue"&&U.push(we[Ae])}return $}function V(P){const N=Object.prototype.toString.call(P),U=typeof P;return!(U==="number"||U==="boolean"||U==="string"||U==="symbol"||U==="function"||N==="[object Date]"||N==="[object RegExp]"||N==="[object Module]"||P==null||P._watchdogExcluded||P instanceof EventTarget||P instanceof Event)}function W(P,N,U=new Set){if(P===N&&typeof($=P)=="object"&&$!==null)return!0;var $;const ae=M(P,U),we=M(N,U);for(const Ae of ae)if(we.has(Ae))return!0;return!1}const G=function(P){var N=typeof P;return P!=null&&(N=="object"||N=="function")},F=typeof Nn=="object"&&Nn&&Nn.Object===Object&&Nn;var R=typeof self=="object"&&self&&self.Object===Object&&self;const H=F||R||Function("return this")(),Y=function(){return H.Date.now()};var ne=/\s/;const ue=function(P){for(var N=P.length;N--&&ne.test(P.charAt(N)););return N};var te=/^\s+/;const z=function(P){return P&&P.slice(0,ue(P)+1).replace(te,"")},re=H.Symbol;var fe=Object.prototype,Ne=fe.hasOwnProperty,Ue=fe.toString,Ve=re?re.toStringTag:void 0;const sn=function(P){var N=Ne.call(P,Ve),U=P[Ve];try{P[Ve]=void 0;var $=!0}catch{}var ae=Ue.call(P);return $&&(N?P[Ve]=U:delete P[Ve]),ae};var St=Object.prototype.toString;const Re=function(P){return St.call(P)};var tt=re?re.toStringTag:void 0;const ke=function(P){return P==null?P===void 0?"[object Undefined]":"[object Null]":tt&&tt in Object(P)?sn(P):Re(P)},pe=function(P){return P!=null&&typeof P=="object"},ge=function(P){return typeof P=="symbol"||pe(P)&&ke(P)=="[object Symbol]"};var ot=/^[-+]0x[0-9a-f]+$/i,mt=/^0b[01]+$/i,lo=/^0o[0-7]+$/i,qn=parseInt;const X=function(P){if(typeof P=="number")return P;if(ge(P))return NaN;if(G(P)){var N=typeof P.valueOf=="function"?P.valueOf():P;P=G(N)?N+"":N}if(typeof P!="string")return P===0?P:+P;P=z(P);var U=mt.test(P);return U||lo.test(P)?qn(P.slice(2),U?2:8):ot.test(P)?NaN:+P};var Ln=Math.max,We=Math.min;const Ki=function(P,N,U){var $,ae,we,Ae,be,Le,Pe=0,kn=!1,Xt=!1,yt=!0;if(typeof P!="function")throw new TypeError("Expected a function");function He(Zt){var jn=$,$t=ae;return $=ae=void 0,Pe=Zt,Ae=P.apply($t,jn)}function Qn(Zt){var jn=Zt-Le;return Le===void 0||jn>=N||jn<0||Xt&&Zt-Pe>=we}function Dn(){var Zt=Y();if(Qn(Zt))return ft(Zt);be=setTimeout(Dn,function(jn){var $t=N-(jn-Le);return Xt?We($t,we-(jn-Pe)):$t}(Zt))}function ft(Zt){return be=void 0,yt&&$?He(Zt):($=ae=void 0,Ae)}function Gt(){var Zt=Y(),jn=Qn(Zt);if($=arguments,ae=this,Le=Zt,jn){if(be===void 0)return function($t){return Pe=$t,be=setTimeout(Dn,N),kn?He($t):Ae}(Le);if(Xt)return clearTimeout(be),be=setTimeout(Dn,N),He(Le)}return be===void 0&&(be=setTimeout(Dn,N)),Ae}return N=X(N)||0,G(U)&&(kn=!!U.leading,we=(Xt="maxWait"in U)?Ln(X(U.maxWait)||0,N):we,yt="trailing"in U?!!U.trailing:yt),Gt.cancel=function(){be!==void 0&&clearTimeout(be),Pe=0,$=Le=ae=be=void 0},Gt.flush=function(){return be===void 0?Ae:ft(Y())},Gt},wi=function(P,N,U){var $=!0,ae=!0;if(typeof P!="function")throw new TypeError("Expected a function");return G(U)&&($="leading"in U?!!U.leading:$,ae="trailing"in U?!!U.trailing:ae),Ki(P,N,{leading:$,maxWait:N,trailing:ae})},It=function(P,N){return function(U){return P(N(U))}},an=It(Object.getPrototypeOf,Object);var Es=Function.prototype,Ma=Object.prototype,$e=Es.toString,vi=Ma.hasOwnProperty,Ds=$e.call(Object);const Yi=function(P){if(!pe(P)||ke(P)!="[object Object]")return!1;var N=an(P);if(N===null)return!0;var U=vi.call(N,"constructor")&&N.constructor;return typeof U=="function"&&U instanceof U&&$e.call(U)==Ds},Qi=function(P){return pe(P)&&P.nodeType===1&&!Yi(P)},Ut=function(){this.__data__=[],this.size=0},Ai=function(P,N){return P===N||P!=P&&N!=N},Tt=function(P,N){for(var U=P.length;U--;)if(Ai(P[U][0],N))return U;return-1};var Ie=Array.prototype.splice;const Rt=function(P){var N=this.__data__,U=Tt(N,P);return!(U<0)&&(U==N.length-1?N.pop():Ie.call(N,U,1),--this.size,!0)},Ba=function(P){var N=this.__data__,U=Tt(N,P);return U<0?void 0:N[U][1]},Na=function(P){return Tt(this.__data__,P)>-1},pn=function(P,N){var U=this.__data__,$=Tt(U,P);return $<0?(++this.size,U.push([P,N])):U[$][1]=N,this};function Wt(P){var N=-1,U=P==null?0:P.length;for(this.clear();++N<U;){var $=P[N];this.set($[0],$[1])}}Wt.prototype.clear=Ut,Wt.prototype.delete=Rt,Wt.prototype.get=Ba,Wt.prototype.has=Na,Wt.prototype.set=pn;const Wo=Wt,Tr=function(){this.__data__=new Wo,this.size=0},Gn=function(P){var N=this.__data__,U=N.delete(P);return this.size=N.size,U},Zn=function(P){return this.__data__.get(P)},qo=function(P){return this.__data__.has(P)},Pa=function(P){if(!G(P))return!1;var N=ke(P);return N=="[object Function]"||N=="[object GeneratorFunction]"||N=="[object AsyncFunction]"||N=="[object Proxy]"},xo=H["__core-js_shared__"];var Go=function(){var P=/[^.]+$/.exec(xo&&xo.keys&&xo.keys.IE_PROTO||"");return P?"Symbol(src)_1."+P:""}();const co=function(P){return!!Go&&Go in P};var Mt=Function.prototype.toString;const wt=function(P){if(P!=null){try{return Mt.call(P)}catch{}try{return P+""}catch{}}return""};var Oa=/^\[object .+?Constructor\]$/,Ci=Function.prototype,Mr=Object.prototype,_i=Ci.toString,nc=Mr.hasOwnProperty,gn=RegExp("^"+_i.call(nc).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const $n=function(P){return!(!G(P)||co(P))&&(Pa(P)?gn:Oa).test(wt(P))},oc=function(P,N){return P==null?void 0:P[N]},Bt=function(P,N){var U=oc(P,N);return $n(U)?U:void 0},vt=Bt(H,"Map"),yi=Bt(Object,"create"),xi=function(){this.__data__=yi?yi(null):{},this.size=0},ze=function(P){var N=this.has(P)&&delete this.__data__[P];return this.size-=N?1:0,N};var Kn=Object.prototype.hasOwnProperty;const Eo=function(P){var N=this.__data__;if(yi){var U=N[P];return U==="__lodash_hash_undefined__"?void 0:U}return Kn.call(N,P)?N[P]:void 0};var Zo=Object.prototype.hasOwnProperty;const Nt=function(P){var N=this.__data__;return yi?N[P]!==void 0:Zo.call(N,P)},qt=function(P,N){var U=this.__data__;return this.size+=this.has(P)?0:1,U[P]=yi&&N===void 0?"__lodash_hash_undefined__":N,this};function mn(P){var N=-1,U=P==null?0:P.length;for(this.clear();++N<U;){var $=P[N];this.set($[0],$[1])}}mn.prototype.clear=xi,mn.prototype.delete=ze,mn.prototype.get=Eo,mn.prototype.has=Nt,mn.prototype.set=qt;const Ei=mn,Ji=function(){this.size=0,this.__data__={hash:new Ei,map:new(vt||Wo),string:new Ei}},fn=function(P){var N=typeof P;return N=="string"||N=="number"||N=="symbol"||N=="boolean"?P!=="__proto__":P===null},Br=function(P,N){var U=P.__data__;return fn(N)?U[typeof N=="string"?"string":"hash"]:U.map},La=function(P){var N=Br(this,P).delete(P);return this.size-=N?1:0,N},Do=function(P){return Br(this,P).get(P)},Xi=function(P){return Br(this,P).has(P)},za=function(P,N){var U=Br(this,P),$=U.size;return U.set(P,N),this.size+=U.size==$?0:1,this};function $o(P){var N=-1,U=P==null?0:P.length;for(this.clear();++N<U;){var $=P[N];this.set($[0],$[1])}}$o.prototype.clear=Ji,$o.prototype.delete=La,$o.prototype.get=Do,$o.prototype.has=Xi,$o.prototype.set=za;const ic=$o,Ko=function(P,N){var U=this.__data__;if(U instanceof Wo){var $=U.__data__;if(!vt||$.length<199)return $.push([P,N]),this.size=++U.size,this;U=this.__data__=new ic($)}return U.set(P,N),this.size=U.size,this};function xn(P){var N=this.__data__=new Wo(P);this.size=N.size}xn.prototype.clear=Tr,xn.prototype.delete=Gn,xn.prototype.get=Zn,xn.prototype.has=qo,xn.prototype.set=Ko;const rc=xn,sc=function(P,N){for(var U=-1,$=P==null?0:P.length;++U<$&&N(P[U],U,P)!==!1;);return P},ja=function(){try{var P=Bt(Object,"defineProperty");return P({},"",{}),P}catch{}}(),Ra=function(P,N,U){N=="__proto__"&&ja?ja(P,N,{configurable:!0,enumerable:!0,value:U,writable:!0}):P[N]=U};var ac=Object.prototype.hasOwnProperty;const Nr=function(P,N,U){var $=P[N];ac.call(P,N)&&Ai($,U)&&(U!==void 0||N in P)||Ra(P,N,U)},Pr=function(P,N,U,$){var ae=!U;U||(U={});for(var we=-1,Ae=N.length;++we<Ae;){var be=N[we],Le=$?$(U[be],P[be],be,U,P):void 0;Le===void 0&&(Le=P[be]),ae?Ra(U,be,Le):Nr(U,be,Le)}return U},Yo=function(P,N){for(var U=-1,$=Array(P);++U<P;)$[U]=N(U);return $},En=function(P){return pe(P)&&ke(P)=="[object Arguments]"};var Di=Object.prototype,lc=Di.hasOwnProperty,cc=Di.propertyIsEnumerable;const Ss=En(function(){return arguments}())?En:function(P){return pe(P)&&lc.call(P,"callee")&&!cc.call(P,"callee")},Is=Array.isArray,dc=function(){return!1};var Fa=l&&!l.nodeType&&l,Va=Fa&&!0&&s&&!s.nodeType&&s,Qo=Va&&Va.exports===Fa?H.Buffer:void 0;const Qe=(Qo?Qo.isBuffer:void 0)||dc;var uc=/^(?:0|[1-9]\d*)$/;const hc=function(P,N){var U=typeof P;return!!(N=N??9007199254740991)&&(U=="number"||U!="symbol"&&uc.test(P))&&P>-1&&P%1==0&&P<N},er=function(P){return typeof P=="number"&&P>-1&&P%1==0&&P<=9007199254740991};var it={};it["[object Float32Array]"]=it["[object Float64Array]"]=it["[object Int8Array]"]=it["[object Int16Array]"]=it["[object Int32Array]"]=it["[object Uint8Array]"]=it["[object Uint8ClampedArray]"]=it["[object Uint16Array]"]=it["[object Uint32Array]"]=!0,it["[object Arguments]"]=it["[object Array]"]=it["[object ArrayBuffer]"]=it["[object Boolean]"]=it["[object DataView]"]=it["[object Date]"]=it["[object Error]"]=it["[object Function]"]=it["[object Map]"]=it["[object Number]"]=it["[object Object]"]=it["[object RegExp]"]=it["[object Set]"]=it["[object String]"]=it["[object WeakMap]"]=!1;const pc=function(P){return pe(P)&&er(P.length)&&!!it[ke(P)]},Ts=function(P){return function(N){return P(N)}};var Or=l&&!l.nodeType&&l,ln=Or&&!0&&s&&!s.nodeType&&s,Jo=ln&&ln.exports===Or&&F.process;const uo=function(){try{var P=ln&&ln.require&&ln.require("util").types;return P||Jo&&Jo.binding&&Jo.binding("util")}catch{}}();var Xe=uo&&uo.isTypedArray;const tr=Xe?Ts(Xe):pc;var gc=Object.prototype.hasOwnProperty;const nr=function(P,N){var U=Is(P),$=!U&&Ss(P),ae=!U&&!$&&Qe(P),we=!U&&!$&&!ae&&tr(P),Ae=U||$||ae||we,be=Ae?Yo(P.length,String):[],Le=be.length;for(var Pe in P)!N&&!gc.call(P,Pe)||Ae&&(Pe=="length"||ae&&(Pe=="offset"||Pe=="parent")||we&&(Pe=="buffer"||Pe=="byteLength"||Pe=="byteOffset")||hc(Pe,Le))||be.push(Pe);return be};var Lr=Object.prototype;const Ms=function(P){var N=P&&P.constructor;return P===(typeof N=="function"&&N.prototype||Lr)},Bs=It(Object.keys,Object);var Si=Object.prototype.hasOwnProperty;const Ha=function(P){if(!Ms(P))return Bs(P);var N=[];for(var U in Object(P))Si.call(P,U)&&U!="constructor"&&N.push(U);return N},Ns=function(P){return P!=null&&er(P.length)&&!Pa(P)},or=function(P){return Ns(P)?nr(P):Ha(P)},mc=function(P,N){return P&&Pr(N,or(N),P)},fc=function(P){var N=[];if(P!=null)for(var U in Object(P))N.push(U);return N};var Ps=Object.prototype.hasOwnProperty;const kc=function(P){if(!G(P))return fc(P);var N=Ms(P),U=[];for(var $ in P)($!="constructor"||!N&&Ps.call(P,$))&&U.push($);return U},zr=function(P){return Ns(P)?nr(P,!0):kc(P)},Ua=function(P,N){return P&&Pr(N,zr(N),P)};var Os=l&&!l.nodeType&&l,Xo=Os&&!0&&s&&!s.nodeType&&s,Wa=Xo&&Xo.exports===Os?H.Buffer:void 0,ir=Wa?Wa.allocUnsafe:void 0;const qa=function(P,N){if(N)return P.slice();var U=P.length,$=ir?ir(U):new P.constructor(U);return P.copy($),$},rt=function(P,N){var U=-1,$=P.length;for(N||(N=Array($));++U<$;)N[U]=P[U];return N},Ii=function(P,N){for(var U=-1,$=P==null?0:P.length,ae=0,we=[];++U<$;){var Ae=P[U];N(Ae,U,P)&&(we[ae++]=Ae)}return we},rr=function(){return[]};var Ga=Object.prototype.propertyIsEnumerable,So=Object.getOwnPropertySymbols;const Ti=So?function(P){return P==null?[]:(P=Object(P),Ii(So(P),function(N){return Ga.call(P,N)}))}:rr,Mi=function(P,N){return Pr(P,Ti(P),N)},Ls=function(P,N){for(var U=-1,$=N.length,ae=P.length;++U<$;)P[ae+U]=N[U];return P},jr=Object.getOwnPropertySymbols?function(P){for(var N=[];P;)Ls(N,Ti(P)),P=an(P);return N}:rr,bc=function(P,N){return Pr(P,jr(P),N)},zs=function(P,N,U){var $=N(P);return Is(P)?$:Ls($,U(P))},wc=function(P){return zs(P,or,Ti)},Io=function(P){return zs(P,zr,jr)},js=Bt(H,"DataView"),Rr=Bt(H,"Promise"),Fr=Bt(H,"Set"),Bi=Bt(H,"WeakMap");var Vr="[object Map]",Za="[object Promise]",$a="[object Set]",Ka="[object WeakMap]",Ya="[object DataView]",Ni=wt(js),Pi=wt(vt),Qa=wt(Rr),Ja=wt(Fr),Rs=wt(Bi),To=ke;(js&&To(new js(new ArrayBuffer(1)))!=Ya||vt&&To(new vt)!=Vr||Rr&&To(Rr.resolve())!=Za||Fr&&To(new Fr)!=$a||Bi&&To(new Bi)!=Ka)&&(To=function(P){var N=ke(P),U=N=="[object Object]"?P.constructor:void 0,$=U?wt(U):"";if($)switch($){case Ni:return Ya;case Pi:return Vr;case Qa:return Za;case Ja:return $a;case Rs:return Ka}return N});const zn=To;var Xa=Object.prototype.hasOwnProperty;const el=function(P){var N=P.length,U=new P.constructor(N);return N&&typeof P[0]=="string"&&Xa.call(P,"index")&&(U.index=P.index,U.input=P.input),U},ei=H.Uint8Array,Fs=function(P){var N=new P.constructor(P.byteLength);return new ei(N).set(new ei(P)),N},tl=function(P,N){var U=N?Fs(P.buffer):P.buffer;return new P.constructor(U,P.byteOffset,P.byteLength)};var Vs=/\w*$/;const nl=function(P){var N=new P.constructor(P.source,Vs.exec(P));return N.lastIndex=P.lastIndex,N};var Mo=re?re.prototype:void 0,Hs=Mo?Mo.valueOf:void 0;const vc=function(P){return Hs?Object(Hs.call(P)):{}},ol=function(P,N){var U=N?Fs(P.buffer):P.buffer;return new P.constructor(U,P.byteOffset,P.length)},Us=function(P,N,U){var $=P.constructor;switch(N){case"[object ArrayBuffer]":return Fs(P);case"[object Boolean]":case"[object Date]":return new $(+P);case"[object DataView]":return tl(P,U);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ol(P,U);case"[object Map]":case"[object Set]":return new $;case"[object Number]":case"[object String]":return new $(P);case"[object RegExp]":return nl(P);case"[object Symbol]":return vc(P)}};var il=Object.create;const Ws=function(){function P(){}return function(N){if(!G(N))return{};if(il)return il(N);P.prototype=N;var U=new P;return P.prototype=void 0,U}}(),qs=function(P){return typeof P.constructor!="function"||Ms(P)?{}:Ws(an(P))},Gs=function(P){return pe(P)&&zn(P)=="[object Map]"};var Hr=uo&&uo.isMap;const rl=Hr?Ts(Hr):Gs,Zs=function(P){return pe(P)&&zn(P)=="[object Set]"};var Ur=uo&&uo.isSet;const sr=Ur?Ts(Ur):Zs;var $s="[object Arguments]",sl="[object Function]",al="[object Object]",et={};et[$s]=et["[object Array]"]=et["[object ArrayBuffer]"]=et["[object DataView]"]=et["[object Boolean]"]=et["[object Date]"]=et["[object Float32Array]"]=et["[object Float64Array]"]=et["[object Int8Array]"]=et["[object Int16Array]"]=et["[object Int32Array]"]=et["[object Map]"]=et["[object Number]"]=et[al]=et["[object RegExp]"]=et["[object Set]"]=et["[object String]"]=et["[object Symbol]"]=et["[object Uint8Array]"]=et["[object Uint8ClampedArray]"]=et["[object Uint16Array]"]=et["[object Uint32Array]"]=!0,et["[object Error]"]=et[sl]=et["[object WeakMap]"]=!1;const Ac=function P(N,U,$,ae,we,Ae){var be,Le=1&U,Pe=2&U,kn=4&U;if($&&(be=we?$(N,ae,we,Ae):$(N)),be!==void 0)return be;if(!G(N))return N;var Xt=Is(N);if(Xt){if(be=el(N),!Le)return rt(N,be)}else{var yt=zn(N),He=yt==sl||yt=="[object GeneratorFunction]";if(Qe(N))return qa(N,Le);if(yt==al||yt==$s||He&&!we){if(be=Pe||He?{}:qs(N),!Le)return Pe?bc(N,Ua(be,N)):Mi(N,mc(be,N))}else{if(!et[yt])return we?N:{};be=Us(N,yt,Le)}}Ae||(Ae=new rc);var Qn=Ae.get(N);if(Qn)return Qn;Ae.set(N,be),sr(N)?N.forEach(function(ft){be.add(P(ft,U,$,ft,N,Ae))}):rl(N)&&N.forEach(function(ft,Gt){be.set(Gt,P(ft,U,$,Gt,N,Ae))});var Dn=Xt?void 0:(kn?Pe?Io:wc:Pe?zr:or)(N);return sc(Dn||N,function(ft,Gt){Dn&&(ft=N[Gt=ft]),Nr(be,Gt,P(ft,U,$,Gt,N,Ae))}),be},Ks=function(P,N){return Ac(P,5,N=typeof N=="function"?N:void 0)};class Yn extends y{constructor(N,U={}){super(U),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=wi(this._save.bind(this),typeof U.saveInterval=="number"?U.saveInterval:5e3),N&&(this._creator=($,ae)=>N.create($,ae)),this._destructor=$=>$.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(N){this._creator=N}setDestructor(N){this._destructor=N}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(N=>{console.error("An error happened during the editor destroying.",N)}).then(()=>{const N={},U=[],$=this._config.rootsAttributes||{},ae={};for(const[Ae,be]of Object.entries(this._data.roots))be.isLoaded?(N[Ae]="",ae[Ae]=$[Ae]||{}):U.push(Ae);const we={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:U,rootsAttributes:ae,_watchdogInitialData:this._data};return delete we.initialData,we.extraPlugins.push(Oi),this._initUsingData?this.create(N,we,we.context):Qi(this._elementOrData)?this.create(this._elementOrData,we,we.context):this.create(this._editables,we,we.context)}).then(()=>{this._fire("restart")})}create(N=this._elementOrData,U=this._config,$){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=N,this._initUsingData=typeof N=="string"||Object.keys(N).length>0&&typeof Object.values(N)[0]=="string",this._config=this._cloneEditorConfiguration(U)||{},this._config.context=$,this._creator(N,this._config))).then(ae=>{this._editor=ae,ae.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=ae.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const N=this._editor;return this._editor=null,N.model.document.off("change:data",this._throttledSave),this._destructor(N)})}_save(){const N=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=N}catch(U){console.error(U,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(N){this._excludedProps=N}_getData(){const N=this._editor,U=N.model.document.roots.filter(be=>be.isAttached()&&be.rootName!="$graveyard"),{plugins:$}=N,ae=$.has("CommentsRepository")&&$.get("CommentsRepository"),we=$.has("TrackChanges")&&$.get("TrackChanges"),Ae={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};U.forEach(be=>{Ae.roots[be.rootName]={content:JSON.stringify(Array.from(be.getChildren())),attributes:JSON.stringify(Array.from(be.getAttributes())),isLoaded:be._isLoaded}});for(const be of N.model.markers)be._affectsData&&(Ae.markers[be.name]={rangeJSON:be.getRange().toJSON(),usingOperation:be._managedUsingOperations,affectsData:be._affectsData});return ae&&(Ae.commentThreads=JSON.stringify(ae.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),we&&(Ae.suggestions=JSON.stringify(we.getSuggestions({toJSON:!0,skipNotAttached:!0}))),Ae}_getEditables(){const N={};for(const U of this.editor.model.document.getRootNames()){const $=this.editor.ui.getEditableElement(U);$&&(N[U]=$)}return N}_isErrorComingFromThisItem(N){return W(this._editor,N.context,this._excludedProps)}_cloneEditorConfiguration(N){return Ks(N,(U,$)=>Qi(U)||$==="context"?U:void 0)}}class Oi{constructor(N){this.editor=N,this._data=N.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",N=>{N.stop(),this.editor.model.enqueueChange({isUndoable:!1},U=>{this._restoreCollaborationData(),this._restoreEditorData(U)}),this.editor.data.fire("ready")},{priority:999})}_createNode(N,U){if("name"in U){const $=N.createElement(U.name,U.attributes);if(U.children)for(const ae of U.children)$._appendChild(this._createNode(N,ae));return $}return N.createText(U.data,U.attributes)}_restoreEditorData(N){const U=this.editor;Object.entries(this._data.roots).forEach(([$,{content:ae,attributes:we}])=>{const Ae=JSON.parse(ae),be=JSON.parse(we),Le=U.model.document.getRoot($);for(const[Pe,kn]of be)N.setAttribute(Pe,kn,Le);for(const Pe of Ae){const kn=this._createNode(N,Pe);N.insert(kn,Le,"end")}}),Object.entries(this._data.markers).forEach(([$,ae])=>{const{document:we}=U.model,{rangeJSON:{start:Ae,end:be},...Le}=ae,Pe=we.getRoot(Ae.root),kn=N.createPositionFromPath(Pe,Ae.path,Ae.stickiness),Xt=N.createPositionFromPath(Pe,be.path,be.stickiness),yt=N.createRange(kn,Xt);N.addMarker($,{range:yt,...Le})})}_restoreCollaborationData(){const N=JSON.parse(this._data.commentThreads),U=JSON.parse(this._data.suggestions);N.forEach($=>{const ae=this.editor.config.get("collaboration.channelId"),we=this.editor.plugins.get("CommentsRepository");we.hasCommentThread($.threadId)&&we.getCommentThread($.threadId).remove(),we.addCommentThread({channelId:ae,...$})}),U.forEach($=>{const ae=this.editor.plugins.get("TrackChangesEditing");ae.hasSuggestion($.id)?ae.getSuggestion($.id).attributes=$.attributes:ae.addSuggestionData($)})}}const ti=Symbol("MainQueueId");class Li extends y{constructor(N,U={}){super(U),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Wr,this._watchdogConfig=U,this._creator=$=>N.create($),this._destructor=$=>$.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(N){this._creator=N}setDestructor(N){this._destructor=N}get context(){return this._context}create(N={}){return this._actionQueues.enqueue(ti,()=>(this._contextConfig=N,this._create()))}getItem(N){return this._getWatchdog(N)._item}getItemState(N){return this._getWatchdog(N).state}add(N){const U=ar(N);return Promise.all(U.map($=>this._actionQueues.enqueue($.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let ae;if(this._watchdogs.has($.id))throw new Error(`Item with the given id is already added: '${$.id}'.`);if($.type==="editor")return ae=new Yn(null,this._watchdogConfig),ae.setCreator($.creator),ae._setExcludedProperties(this._contextProps),$.destructor&&ae.setDestructor($.destructor),this._watchdogs.set($.id,ae),ae.on("error",(we,{error:Ae,causesRestart:be})=>{this._fire("itemError",{itemId:$.id,error:Ae}),be&&this._actionQueues.enqueue($.id,()=>new Promise(Le=>{const Pe=()=>{ae.off("restart",Pe),this._fire("itemRestart",{itemId:$.id}),Le()};ae.on("restart",Pe)}))}),ae.create($.sourceElementOrData,$.config,this._context);throw new Error(`Not supported item type: '${$.type}'.`)})))}remove(N){const U=ar(N);return Promise.all(U.map($=>this._actionQueues.enqueue($,()=>{const ae=this._getWatchdog($);return this._watchdogs.delete($),ae.destroy()})))}destroy(){return this._actionQueues.enqueue(ti,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ti,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(N=>{console.error("An error happened during destroying the context or items.",N)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(N=>(this._context=N,this._contextProps=M(this._context),Promise.all(Array.from(this._watchdogs.values()).map(U=>(U._setExcludedProperties(this._contextProps),U.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const N=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(U=>U.destroy())).then(()=>this._destructor(N))})}_getWatchdog(N){const U=this._watchdogs.get(N);if(!U)throw new Error(`Item with the given id was not registered: ${N}.`);return U}_isErrorComingFromThisItem(N){for(const U of this._watchdogs.values())if(U._isErrorComingFromThisItem(N))return!1;return W(this._context,N.context)}}class Wr{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(N){this._onEmptyCallbacks.push(N)}enqueue(N,U){const $=N===ti;this._activeActions++,this._queues.get(N)||this._queues.set(N,Promise.resolve());const ae=($?Promise.all(this._queues.values()):Promise.all([this._queues.get(ti),this._queues.get(N)])).then(U),we=ae.catch(()=>{});return this._queues.set(N,we),ae.finally(()=>{this._activeActions--,this._queues.get(N)===we&&this._activeActions===0&&this._onEmptyCallbacks.forEach(Ae=>Ae())})}}function ar(P){return Array.isArray(P)?P:[P]}const qr=b().createContext("contextWatchdog");class Gr extends b().Component{constructor(N,U){super(N,U),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(N){return this._shouldComponentUpdate(N)}async _shouldComponentUpdate(N){return N.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(N.config)),N.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(N.config),!0):this.props.children!==N.children}render(){return b().createElement(qr.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(N){this.contextWatchdog=new Li(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(U,$)=>{this.props.onError($.error,{phase:"runtime",willContextRestart:$.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(N).catch(U=>{this.props.onError(U,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Gr.defaultProps={isLayoutReady:!0,onError:(P,N)=>console.error(P,N)},Gr.propTypes={id:O().string,isLayoutReady:O().bool,context:O().func,watchdogConfig:O().object,config:O().object,onReady:O().func,onError:O().func};const Zr="Lock from React integration (@ckeditor/ckeditor5-react)";class Bo extends b().Component{constructor(N){super(N),this.editorDestructionInProgress=null,this.domContainer=b().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:U}=window;if(U){const[$]=U.split(".").map(Number);$<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(N){return!!this.editor&&(N.id!==this.props.id||N.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(N)&&this.editor.data.set(N.data),"disabled"in N&&(N.disabled?this.editor.enableReadOnlyMode(Zr):this.editor.disableReadOnlyMode(Zr)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return b().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof Li?this.watchdog=new $r(this.context):this.watchdog=new Bo._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((N,U)=>this._createEditor(N,U)),this.watchdog.on("error",(N,{error:U,causesRestart:$})=>{(this.props.onError||console.error)(U,{phase:"runtime",willEditorRestart:$})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(N=>{(this.props.onError||console.error)(N,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(N,U){return this.props.editor.create(N,U).then($=>{"disabled"in this.props&&this.props.disabled&&$.enableReadOnlyMode(Zr);const ae=$.model.document,we=$.editing.view.document;return ae.on("change:data",Ae=>{this.props.onChange&&this.props.onChange(Ae,$)}),we.on("focus",Ae=>{this.props.onFocus&&this.props.onFocus(Ae,$)}),we.on("blur",Ae=>{this.props.onBlur&&this.props.onBlur(Ae,$)}),setTimeout(()=>{this.props.onReady&&this.props.onReady($)}),$})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(N=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,N()):this.instance?(await this.instance.destroy(),this.instance=null,N()):void N())})}_shouldUpdateEditor(N){return this.props.data!==N.data&&this.editor.data.get()!==N.data}_getConfig(){const N=this.props.config||{};return this.props.data&&N.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...N,initialData:N.initialData||this.props.data||""}}}Bo.contextType=qr,Bo.propTypes={editor:O().func.isRequired,data:O().string,config:O().object,disableWatchdog:O().bool,watchdogConfig:O().object,onChange:O().func,onReady:O().func,onFocus:O().func,onBlur:O().func,onError:O().func,disabled:O().bool,id:O().any},Bo._EditorWatchdog=Yn;class $r{constructor(N){this._contextWatchdog=N,this._id=function(){const U=4294967296*Math.random()>>>0,$=4294967296*Math.random()>>>0,ae=4294967296*Math.random()>>>0,we=4294967296*Math.random()>>>0;return"e"+D[U>>0&255]+D[U>>8&255]+D[U>>16&255]+D[U>>24&255]+D[$>>0&255]+D[$>>8&255]+D[$>>16&255]+D[$>>24&255]+D[ae>>0&255]+D[ae>>8&255]+D[ae>>16&255]+D[ae>>24&255]+D[we>>0&255]+D[we>>8&255]+D[we>>16&255]+D[we>>24&255]}()}setCreator(N){this._creator=N}create(N,U){return this._contextWatchdog.add({sourceElementOrData:N,config:U,creator:this._creator,id:this._id,type:"editor"})}on(N,U){this._contextWatchdog.on("itemError",($,{itemId:ae,error:we})=>{ae===this._id&&U(null,{error:we,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}const Kr="Lock from React integration (@ckeditor/ckeditor5-react)",Ys=P=>{let N=null;const U=(0,E.useRef)(null),$=(0,E.useContext)(qr),[ae,we]=(0,E.useState)(null),[Ae,be]=(0,E.useState)(P.data),[Le,Pe]=(0,E.useState)(P.rootsAttributes||{}),[kn,Xt]=(0,E.useState)([]),yt=(0,E.useRef)(!0),He=(0,E.useRef)(null),Qn=b().createElement("div",{ref:He});(0,E.useEffect)(()=>((async()=>(await U.current,P.isLayoutReady!==!1&&jn()))(),()=>{Zt().then(()=>{U.current=null})}),[P.isLayoutReady]),(0,E.useEffect)(()=>{ae&&(P.disabled?ae.enableReadOnlyMode(Kr):ae.disableReadOnlyMode(Kr))},[P.disabled]),(0,E.useEffect)(()=>{const ie=He.current;if(ae&&!U.current){const Se=ae.getFullData();be({...Se}),Pe({...ae.getRootsAttributes()}),Xt([...Object.keys(Se).map(Fe=>ft(ae,Fe))]),ie&&ie.appendChild(ae.ui.view.toolbar.element)}return()=>{ie&&ie.firstChild&&ie.removeChild(ie.firstChild)}},[ae&&ae.id]);const Dn=()=>{const ie=P.config||{};return P.data&&ie.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{...ie,rootsAttributes:Le}},ft=(ie,Se)=>b().createElement("div",{id:Se,key:Se,ref:Fe=>{if(Fe){const Rn=ie.ui.view.createEditable(Se,Fe);ie.ui.addEditable(Rn),ie.editing.view.forceRender()}}}),Gt=(ie,Se)=>P.editor.create(ie,Se).then(Fe=>{P.disabled&&P.disabled&&Fe.enableReadOnlyMode(Kr);const Rn=Fe.model.document,ho=Fe.editing.view.document;return Rn.on("change:data",Fn=>((ye,bn)=>{const Kt=ye.model.document,In={},en={};Kt.differ.getChanges().forEach(Te=>{let At;if(At=Te.type=="insert"||Te.type=="remove"?Te.position.root:Te.range.root,!At.isAttached())return;const{rootName:ni}=At;In[ni]=ye.getData({rootName:ni})}),Kt.differ.getChangedRoots().forEach(Te=>{if(Te.state)return void(In[Te.name]!==void 0&&delete In[Te.name]);const At=Te.name;en[At]=ye.getRootAttributes(At)}),Object.keys(In).length&&be(Te=>({...Te,...In})),Object.keys(en).length&&Pe(Te=>({...Te,...en})),P.onChange&&P.onChange(bn,ye)})(Fe,Fn)),Fe.on("addRoot",(Fn,ye)=>((bn,Kt,In)=>{const en=In.rootName,Te=ft(bn,en);be(At=>({...At,[en]:bn.getData({rootName:en})})),Pe(At=>({...At,[en]:bn.getRootAttributes(en)})),Xt(At=>[...At,Te])})(Fe,0,ye)),Fe.on("detachRoot",(Fn,ye)=>((bn,Kt,In)=>{const en=In.rootName;Xt(Te=>Te.filter(At=>At.props.id!==en)),be(Te=>{const{[en]:At,...ni}=Te;return{...ni}}),Pe(Te=>{const{[en]:At,...ni}=Te;return{...ni}}),bn.detachEditable(In)})(Fe,0,ye)),ho.on("focus",Fn=>{P.onFocus&&P.onFocus(Fn,Fe)}),ho.on("blur",Fn=>{P.onBlur&&P.onBlur(Fn,Fe)}),we(Fe),P.onReady&&P.onReady(Fe),Fe}),Zt=async()=>{we(null),be({}),Pe({}),Xt([]),U.current=new Promise(ie=>{setTimeout(async()=>N?(await N.destroy(),N=null,ie()):ae?(await ae.destroy(),ie()):void ie())})},jn=async()=>{P.disableWatchdog?await Gt(P.data,Dn()):N||(N=$ instanceof Li?new $r($):new Yn(P.editor,P.watchdogConfig),N.setCreator((ie,Se)=>Gt(ie,Se)),N.on("error",(ie,{error:Se,causesRestart:Fe})=>{(P.onError||console.error)(Se,{phase:"runtime",willEditorRestart:Fe})}),await N.create(Ae,Dn()).catch(ie=>{(P.onError||console.error)(ie,{phase:"initialization",willEditorRestart:!1})}))};(0,E.useEffect)(()=>{if(ae&&yt.current){yt.current=!1;const ie=Object.keys(Ae),Se=Object.keys(Le);if(!ie.every(Kt=>Se.includes(Kt)))throw new Error("`data` and `attributes` objects must have the same keys (roots).");const Fe=ae.getFullData(),Rn=ae.getRootsAttributes(),{addedKeys:ho,removedKeys:Fn}=$t(Fe,Ae||{}),ye=ie.some(Kt=>Fe[Kt]!==void 0&&JSON.stringify(Fe[Kt])!==JSON.stringify(Ae[Kt])),bn=Se.filter(Kt=>JSON.stringify(Rn[Kt])!==JSON.stringify(Le[Kt]));ae.model.change(Kt=>{Yr(ho),lr(Fn),ye&&Sn(),bn.length&&Cc(Kt,bn)})}},[Ae,Le]);const $t=(ie,Se)=>{const Fe=Object.keys(ie),Rn=Object.keys(Se);return{addedKeys:Rn.filter(ho=>!Fe.includes(ho)),removedKeys:Fe.filter(ho=>!Rn.includes(ho))}},Yr=ie=>{ie.forEach(Se=>{ae.addRoot(Se,{data:Ae[Se]||"",attributes:(Le==null?void 0:Le[Se])||{},isUndoable:!0})})},lr=ie=>{ie.forEach(Se=>{ae.detachRoot(Se,!0)})},Sn=()=>{ae.data.set(Ae,{suppressErrorInCollaboration:!0})},Cc=(ie,Se)=>{Se.forEach(Fe=>{Object.keys(Le[Fe]).forEach(Rn=>{ae.registerRootAttribute(Rn)}),ie.clearAttributes(ae.model.document.getRoot(Fe)),ie.setAttributes(Le[Fe],ae.model.document.getRoot(Fe))})},ll=(0,E.useCallback)(ie=>{yt.current=!0,be(ie)},[be]),Qs=(0,E.useCallback)(ie=>{yt.current=!0,Pe(ie)},[Pe]);return{editor:ae,editableElements:kn,toolbarElement:Qn,data:Ae,setData:ll,attributes:Le,setAttributes:Qs}}})(),A})())})(ap,ap.exports);var EL=ap.exports,lp={exports:{}};lp.exports;(function(s,l){(function(u){const g=u.en=u.en||{};g.dictionary=Object.assign(g.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(u,g){s.exports=g()}(self,()=>(()=>{var u={4959:(A,E,b)=>{const B=b(1103),O={};for(const y of Object.keys(B))O[B[y]]=y;const D={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};A.exports=D;for(const y of Object.keys(D)){if(!("channels"in D[y]))throw new Error("missing channels property: "+y);if(!("labels"in D[y]))throw new Error("missing channel labels property: "+y);if(D[y].labels.length!==D[y].channels)throw new Error("channel and label counts mismatch: "+y);const{channels:M,labels:V}=D[y];delete D[y].channels,delete D[y].labels,Object.defineProperty(D[y],"channels",{value:M}),Object.defineProperty(D[y],"labels",{value:V})}D.rgb.hsl=function(y){const M=y[0]/255,V=y[1]/255,W=y[2]/255,G=Math.min(M,V,W),F=Math.max(M,V,W),R=F-G;let H,Y;F===G?H=0:M===F?H=(V-W)/R:V===F?H=2+(W-M)/R:W===F&&(H=4+(M-V)/R),H=Math.min(60*H,360),H<0&&(H+=360);const ne=(G+F)/2;return Y=F===G?0:ne<=.5?R/(F+G):R/(2-F-G),[H,100*Y,100*ne]},D.rgb.hsv=function(y){let M,V,W,G,F;const R=y[0]/255,H=y[1]/255,Y=y[2]/255,ne=Math.max(R,H,Y),ue=ne-Math.min(R,H,Y),te=function(z){return(ne-z)/6/ue+.5};return ue===0?(G=0,F=0):(F=ue/ne,M=te(R),V=te(H),W=te(Y),R===ne?G=W-V:H===ne?G=.3333333333333333+M-W:Y===ne&&(G=.6666666666666666+V-M),G<0?G+=1:G>1&&(G-=1)),[360*G,100*F,100*ne]},D.rgb.hwb=function(y){const M=y[0],V=y[1];let W=y[2];const G=D.rgb.hsl(y)[0],F=1/255*Math.min(M,Math.min(V,W));return W=1-.00392156862745098*Math.max(M,Math.max(V,W)),[G,100*F,100*W]},D.rgb.cmyk=function(y){const M=y[0]/255,V=y[1]/255,W=y[2]/255,G=Math.min(1-M,1-V,1-W);return[100*((1-M-G)/(1-G)||0),100*((1-V-G)/(1-G)||0),100*((1-W-G)/(1-G)||0),100*G]},D.rgb.keyword=function(y){const M=O[y];if(M)return M;let V,W=1/0;for(const R of Object.keys(B)){const H=B[R],Y=(F=H,((G=y)[0]-F[0])**2+(G[1]-F[1])**2+(G[2]-F[2])**2);Y<W&&(W=Y,V=R)}var G,F;return V},D.keyword.rgb=function(y){return B[y]},D.rgb.xyz=function(y){let M=y[0]/255,V=y[1]/255,W=y[2]/255;return M=M>.04045?((M+.055)/1.055)**2.4:M/12.92,V=V>.04045?((V+.055)/1.055)**2.4:V/12.92,W=W>.04045?((W+.055)/1.055)**2.4:W/12.92,[100*(.4124*M+.3576*V+.1805*W),100*(.2126*M+.7152*V+.0722*W),100*(.0193*M+.1192*V+.9505*W)]},D.rgb.lab=function(y){const M=D.rgb.xyz(y);let V=M[0],W=M[1],G=M[2];return V/=95.047,W/=100,G/=108.883,V=V>.008856?V**.3333333333333333:7.787*V+.13793103448275862,W=W>.008856?W**.3333333333333333:7.787*W+.13793103448275862,G=G>.008856?G**.3333333333333333:7.787*G+.13793103448275862,[116*W-16,500*(V-W),200*(W-G)]},D.hsl.rgb=function(y){const M=y[0]/360,V=y[1]/100,W=y[2]/100;let G,F,R;if(V===0)return R=255*W,[R,R,R];G=W<.5?W*(1+V):W+V-W*V;const H=2*W-G,Y=[0,0,0];for(let ne=0;ne<3;ne++)F=M+.3333333333333333*-(ne-1),F<0&&F++,F>1&&F--,R=6*F<1?H+6*(G-H)*F:2*F<1?G:3*F<2?H+(G-H)*(.6666666666666666-F)*6:H,Y[ne]=255*R;return Y},D.hsl.hsv=function(y){const M=y[0];let V=y[1]/100,W=y[2]/100,G=V;const F=Math.max(W,.01);return W*=2,V*=W<=1?W:2-W,G*=F<=1?F:2-F,[M,100*(W===0?2*G/(F+G):2*V/(W+V)),100*((W+V)/2)]},D.hsv.rgb=function(y){const M=y[0]/60,V=y[1]/100;let W=y[2]/100;const G=Math.floor(M)%6,F=M-Math.floor(M),R=255*W*(1-V),H=255*W*(1-V*F),Y=255*W*(1-V*(1-F));switch(W*=255,G){case 0:return[W,Y,R];case 1:return[H,W,R];case 2:return[R,W,Y];case 3:return[R,H,W];case 4:return[Y,R,W];case 5:return[W,R,H]}},D.hsv.hsl=function(y){const M=y[0],V=y[1]/100,W=y[2]/100,G=Math.max(W,.01);let F,R;R=(2-V)*W;const H=(2-V)*G;return F=V*G,F/=H<=1?H:2-H,F=F||0,R/=2,[M,100*F,100*R]},D.hwb.rgb=function(y){const M=y[0]/360;let V=y[1]/100,W=y[2]/100;const G=V+W;let F;G>1&&(V/=G,W/=G);const R=Math.floor(6*M),H=1-W;F=6*M-R,1&R&&(F=1-F);const Y=V+F*(H-V);let ne,ue,te;switch(R){default:case 6:case 0:ne=H,ue=Y,te=V;break;case 1:ne=Y,ue=H,te=V;break;case 2:ne=V,ue=H,te=Y;break;case 3:ne=V,ue=Y,te=H;break;case 4:ne=Y,ue=V,te=H;break;case 5:ne=H,ue=V,te=Y}return[255*ne,255*ue,255*te]},D.cmyk.rgb=function(y){const M=y[0]/100,V=y[1]/100,W=y[2]/100,G=y[3]/100;return[255*(1-Math.min(1,M*(1-G)+G)),255*(1-Math.min(1,V*(1-G)+G)),255*(1-Math.min(1,W*(1-G)+G))]},D.xyz.rgb=function(y){const M=y[0]/100,V=y[1]/100,W=y[2]/100;let G,F,R;return G=3.2406*M+-1.5372*V+-.4986*W,F=-.9689*M+1.8758*V+.0415*W,R=.0557*M+-.204*V+1.057*W,G=G>.0031308?1.055*G**.4166666666666667-.055:12.92*G,F=F>.0031308?1.055*F**.4166666666666667-.055:12.92*F,R=R>.0031308?1.055*R**.4166666666666667-.055:12.92*R,G=Math.min(Math.max(0,G),1),F=Math.min(Math.max(0,F),1),R=Math.min(Math.max(0,R),1),[255*G,255*F,255*R]},D.xyz.lab=function(y){let M=y[0],V=y[1],W=y[2];return M/=95.047,V/=100,W/=108.883,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,V=V>.008856?V**.3333333333333333:7.787*V+.13793103448275862,W=W>.008856?W**.3333333333333333:7.787*W+.13793103448275862,[116*V-16,500*(M-V),200*(V-W)]},D.lab.xyz=function(y){let M,V,W;V=(y[0]+16)/116,M=y[1]/500+V,W=V-y[2]/200;const G=V**3,F=M**3,R=W**3;return V=G>.008856?G:(V-.13793103448275862)/7.787,M=F>.008856?F:(M-.13793103448275862)/7.787,W=R>.008856?R:(W-.13793103448275862)/7.787,M*=95.047,V*=100,W*=108.883,[M,V,W]},D.lab.lch=function(y){const M=y[0],V=y[1],W=y[2];let G;return G=360*Math.atan2(W,V)/2/Math.PI,G<0&&(G+=360),[M,Math.sqrt(V*V+W*W),G]},D.lch.lab=function(y){const M=y[0],V=y[1],W=y[2]/360*2*Math.PI;return[M,V*Math.cos(W),V*Math.sin(W)]},D.rgb.ansi16=function(y,M=null){const[V,W,G]=y;let F=M===null?D.rgb.hsv(y)[2]:M;if(F=Math.round(F/50),F===0)return 30;let R=30+(Math.round(G/255)<<2|Math.round(W/255)<<1|Math.round(V/255));return F===2&&(R+=60),R},D.hsv.ansi16=function(y){return D.rgb.ansi16(D.hsv.rgb(y),y[2])},D.rgb.ansi256=function(y){const M=y[0],V=y[1],W=y[2];return M===V&&V===W?M<8?16:M>248?231:Math.round((M-8)/247*24)+232:16+36*Math.round(M/255*5)+6*Math.round(V/255*5)+Math.round(W/255*5)},D.ansi16.rgb=function(y){let M=y%10;if(M===0||M===7)return y>50&&(M+=3.5),M=M/10.5*255,[M,M,M];const V=.5*(1+~~(y>50));return[(1&M)*V*255,(M>>1&1)*V*255,(M>>2&1)*V*255]},D.ansi256.rgb=function(y){if(y>=232){const V=10*(y-232)+8;return[V,V,V]}let M;return y-=16,[Math.floor(y/36)/5*255,Math.floor((M=y%36)/6)/5*255,M%6/5*255]},D.rgb.hex=function(y){const M=(((255&Math.round(y[0]))<<16)+((255&Math.round(y[1]))<<8)+(255&Math.round(y[2]))).toString(16).toUpperCase();return"000000".substring(M.length)+M},D.hex.rgb=function(y){const M=y.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!M)return[0,0,0];let V=M[0];M[0].length===3&&(V=V.split("").map(G=>G+G).join(""));const W=parseInt(V,16);return[W>>16&255,W>>8&255,255&W]},D.rgb.hcg=function(y){const M=y[0]/255,V=y[1]/255,W=y[2]/255,G=Math.max(Math.max(M,V),W),F=Math.min(Math.min(M,V),W),R=G-F;let H,Y;return H=R<1?F/(1-R):0,Y=R<=0?0:G===M?(V-W)/R%6:G===V?2+(W-M)/R:4+(M-V)/R,Y/=6,Y%=1,[360*Y,100*R,100*H]},D.hsl.hcg=function(y){const M=y[1]/100,V=y[2]/100,W=V<.5?2*M*V:2*M*(1-V);let G=0;return W<1&&(G=(V-.5*W)/(1-W)),[y[0],100*W,100*G]},D.hsv.hcg=function(y){const M=y[1]/100,V=y[2]/100,W=M*V;let G=0;return W<1&&(G=(V-W)/(1-W)),[y[0],100*W,100*G]},D.hcg.rgb=function(y){const M=y[0]/360,V=y[1]/100,W=y[2]/100;if(V===0)return[255*W,255*W,255*W];const G=[0,0,0],F=M%1*6,R=F%1,H=1-R;let Y=0;switch(Math.floor(F)){case 0:G[0]=1,G[1]=R,G[2]=0;break;case 1:G[0]=H,G[1]=1,G[2]=0;break;case 2:G[0]=0,G[1]=1,G[2]=R;break;case 3:G[0]=0,G[1]=H,G[2]=1;break;case 4:G[0]=R,G[1]=0,G[2]=1;break;default:G[0]=1,G[1]=0,G[2]=H}return Y=(1-V)*W,[255*(V*G[0]+Y),255*(V*G[1]+Y),255*(V*G[2]+Y)]},D.hcg.hsv=function(y){const M=y[1]/100,V=M+y[2]/100*(1-M);let W=0;return V>0&&(W=M/V),[y[0],100*W,100*V]},D.hcg.hsl=function(y){const M=y[1]/100,V=y[2]/100*(1-M)+.5*M;let W=0;return V>0&&V<.5?W=M/(2*V):V>=.5&&V<1&&(W=M/(2*(1-V))),[y[0],100*W,100*V]},D.hcg.hwb=function(y){const M=y[1]/100,V=M+y[2]/100*(1-M);return[y[0],100*(V-M),100*(1-V)]},D.hwb.hcg=function(y){const M=y[1]/100,V=1-y[2]/100,W=V-M;let G=0;return W<1&&(G=(V-W)/(1-W)),[y[0],100*W,100*G]},D.apple.rgb=function(y){return[y[0]/65535*255,y[1]/65535*255,y[2]/65535*255]},D.rgb.apple=function(y){return[y[0]/255*65535,y[1]/255*65535,y[2]/255*65535]},D.gray.rgb=function(y){return[y[0]/100*255,y[0]/100*255,y[0]/100*255]},D.gray.hsl=function(y){return[0,0,y[0]]},D.gray.hsv=D.gray.hsl,D.gray.hwb=function(y){return[0,100,y[0]]},D.gray.cmyk=function(y){return[0,0,0,y[0]]},D.gray.lab=function(y){return[y[0],0,0]},D.gray.hex=function(y){const M=255&Math.round(y[0]/100*255),V=((M<<16)+(M<<8)+M).toString(16).toUpperCase();return"000000".substring(V.length)+V},D.rgb.gray=function(y){return[(y[0]+y[1]+y[2])/3/255*100]}},841:(A,E,b)=>{const B=b(4959),O=b(9325),D={};Object.keys(B).forEach(y=>{D[y]={},Object.defineProperty(D[y],"channels",{value:B[y].channels}),Object.defineProperty(D[y],"labels",{value:B[y].labels});const M=O(y);Object.keys(M).forEach(V=>{const W=M[V];D[y][V]=function(G){const F=function(...R){const H=R[0];if(H==null)return H;H.length>1&&(R=H);const Y=G(R);if(typeof Y=="object")for(let ne=Y.length,ue=0;ue<ne;ue++)Y[ue]=Math.round(Y[ue]);return Y};return"conversion"in G&&(F.conversion=G.conversion),F}(W),D[y][V].raw=function(G){const F=function(...R){const H=R[0];return H==null?H:(H.length>1&&(R=H),G(R))};return"conversion"in G&&(F.conversion=G.conversion),F}(W)})}),A.exports=D},9325:(A,E,b)=>{const B=b(4959);function O(M){const V=function(){const G={},F=Object.keys(B);for(let R=F.length,H=0;H<R;H++)G[F[H]]={distance:-1,parent:null};return G}(),W=[M];for(V[M].distance=0;W.length;){const G=W.pop(),F=Object.keys(B[G]);for(let R=F.length,H=0;H<R;H++){const Y=F[H],ne=V[Y];ne.distance===-1&&(ne.distance=V[G].distance+1,ne.parent=G,W.unshift(Y))}}return V}function D(M,V){return function(W){return V(M(W))}}function y(M,V){const W=[V[M].parent,M];let G=B[V[M].parent][M],F=V[M].parent;for(;V[F].parent;)W.unshift(V[F].parent),G=D(B[V[F].parent][F],G),F=V[F].parent;return G.conversion=W,G}A.exports=function(M){const V=O(M),W={},G=Object.keys(V);for(let F=G.length,R=0;R<F;R++){const H=G[R];V[H].parent!==null&&(W[H]=y(H,V))}return W}},1103:A=>{A.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8603:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const M=y},3062:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const M=y},443:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const M=y},903:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const M=y},3143:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=y},4717:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const M=y},9315:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const M=y},8733:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const M=y},3508:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const M=y},2640:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const M=y},3535:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const M=y},2873:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const M=y},6270:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const M=y},5083:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const M=y},4036:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const M=y},3773:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const M=y},3689:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const M=y},1905:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=y},9773:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const M=y},2347:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const M=y},7754:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const M=y},111:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const M=y},5730:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const M=y},4564:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const M=y},6082:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const M=y},2417:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const M=y},1199:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const M=y},4652:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const M=y},7442:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const M=y},9292:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=y},7368:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=y},4070:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const M=y},9247:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const M=y},1613:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const M=y},6306:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const M=y},2128:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const M=y},5087:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const M=y},4101:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const M=y},3881:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const M=y},6237:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=y},7341:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const M=y},6945:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const M=y},3210:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}
`],sourceRoot:""}]);const M=y},8157:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=y},4906:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const M=y},5332:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const M=y},8010:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const M=y},6781:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const M=y},3398:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const M=y},4157:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const M=y},6049:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-base-background);border:1px solid var(--ck-color-base-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCXC,eDqBD,CAVA,mECPE,qCDiBF,CAVA,cAIC,6CAA8C,CAE9C,0CAA2C,CAG3C,4CAA6C,CEtB7C,oCAA8B,CFoB9B,sCAAuC,CACvC,oCAED,CAEA,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-base-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=y},6342:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const M=y},5485:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=y},3949:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=y},7686:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=y},7339:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const M=y},9688:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=y},8847:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const M=y},8960:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const M=y},6574:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const M=y},4879:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=y},3662:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const M=y},2577:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD+GD,CA1GA,2FCDE,qCD2GF,CAvGC,mEACC,UAoCD,CAlCC,gFACC,KAgCD,CAjCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBA4BF,CAjCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAqBF,CAjCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,4WAGE,+HAYF,CAfA,4WAOE,wIAQF,CAfA,wVAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=y},1046:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item .ck-button{text-align:left}[dir=rtl] .ck.ck-list__item .ck-button{text-align:right}.ck.ck-list__item .ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,oJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cAgED,CA9DC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UA6CD,CA/CA,uCAME,eAyCF,CA/CA,uCAUE,gBAqCF,CA/CA,6BAgBC,qCA+BD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=y},8793:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=y},4650:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const M=y},7676:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=y},5868:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=y},6764:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const M=y},6770:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const M=y},498:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);const M=y},8182:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const M=y},9695:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const M=y},5542:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=y},3332:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-dialog) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDRnC,mBAAoB,CAEpB,sCACD,CCOC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CACrB,wCAAyC,CAFzC,wBAGD,CApBD,gCAuBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const M=y},4793:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CC3GhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJ2GD,CIrGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const M=y},3488:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=y},8506:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const M=y},4921:(A,E,b)=>{b.d(E,{Z:()=>M});var B=b(1799),O=b.n(B),D=b(2609),y=b.n(D)()(O());y.push([A.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const M=y},2609:A=>{A.exports=function(E){var b=[];return b.toString=function(){return this.map(function(B){var O=E(B);return B[2]?"@media ".concat(B[2]," {").concat(O,"}"):O}).join("")},b.i=function(B,O,D){typeof B=="string"&&(B=[[null,B,""]]);var y={};if(D)for(var M=0;M<this.length;M++){var V=this[M][0];V!=null&&(y[V]=!0)}for(var W=0;W<B.length;W++){var G=[].concat(B[W]);D&&y[G[0]]||(O&&(G[2]?G[2]="".concat(O," and ").concat(G[2]):G[2]=O),b.push(G))}},b}},1799:A=>{function E(B,O){return function(D){if(Array.isArray(D))return D}(B)||function(D,y){var M=D&&(typeof Symbol<"u"&&D[Symbol.iterator]||D["@@iterator"]);if(M!=null){var V,W,G=[],F=!0,R=!1;try{for(M=M.call(D);!(F=(V=M.next()).done)&&(G.push(V.value),!y||G.length!==y);F=!0);}catch(H){R=!0,W=H}finally{try{F||M.return==null||M.return()}finally{if(R)throw W}}return G}}(B,O)||function(D,y){if(D){if(typeof D=="string")return b(D,y);var M=Object.prototype.toString.call(D).slice(8,-1);if(M==="Object"&&D.constructor&&(M=D.constructor.name),M==="Map"||M==="Set")return Array.from(D);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return b(D,y)}}(B,O)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function b(B,O){(O==null||O>B.length)&&(O=B.length);for(var D=0,y=new Array(O);D<O;D++)y[D]=B[D];return y}A.exports=function(B){var O=E(B,4),D=O[1],y=O[3];if(!y)return D;if(typeof btoa=="function"){var M=btoa(unescape(encodeURIComponent(JSON.stringify(y)))),V="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(M),W="/*# ".concat(V," */"),G=y.sources.map(function(F){return"/*# sourceURL=".concat(y.sourceRoot||"").concat(F," */")});return[D].concat(G).concat([W]).join(`
`)}return[D].join(`
`)}},6062:(A,E,b)=>{var B,O=function(){return B===void 0&&(B=!!(window&&document&&document.all&&!window.atob)),B},D=function(){var te={};return function(z){if(te[z]===void 0){var re=document.querySelector(z);if(window.HTMLIFrameElement&&re instanceof window.HTMLIFrameElement)try{re=re.contentDocument.head}catch{re=null}te[z]=re}return te[z]}}(),y=[];function M(te){for(var z=-1,re=0;re<y.length;re++)if(y[re].identifier===te){z=re;break}return z}function V(te,z){for(var re={},fe=[],Ne=0;Ne<te.length;Ne++){var Ue=te[Ne],Ve=z.base?Ue[0]+z.base:Ue[0],sn=re[Ve]||0,St="".concat(Ve," ").concat(sn);re[Ve]=sn+1;var Re=M(St),tt={css:Ue[1],media:Ue[2],sourceMap:Ue[3]};Re!==-1?(y[Re].references++,y[Re].updater(tt)):y.push({identifier:St,updater:ue(tt,z),references:1}),fe.push(St)}return fe}function W(te){var z=document.createElement("style"),re=te.attributes||{};if(re.nonce===void 0){var fe=b.nc;fe&&(re.nonce=fe)}if(Object.keys(re).forEach(function(Ue){z.setAttribute(Ue,re[Ue])}),typeof te.insert=="function")te.insert(z);else{var Ne=D(te.insert||"head");if(!Ne)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Ne.appendChild(z)}return z}var G,F=(G=[],function(te,z){return G[te]=z,G.filter(Boolean).join(`
`)});function R(te,z,re,fe){var Ne=re?"":fe.media?"@media ".concat(fe.media," {").concat(fe.css,"}"):fe.css;if(te.styleSheet)te.styleSheet.cssText=F(z,Ne);else{var Ue=document.createTextNode(Ne),Ve=te.childNodes;Ve[z]&&te.removeChild(Ve[z]),Ve.length?te.insertBefore(Ue,Ve[z]):te.appendChild(Ue)}}function H(te,z,re){var fe=re.css,Ne=re.media,Ue=re.sourceMap;if(Ne?te.setAttribute("media",Ne):te.removeAttribute("media"),Ue&&typeof btoa<"u"&&(fe+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Ue))))," */")),te.styleSheet)te.styleSheet.cssText=fe;else{for(;te.firstChild;)te.removeChild(te.firstChild);te.appendChild(document.createTextNode(fe))}}var Y=null,ne=0;function ue(te,z){var re,fe,Ne;if(z.singleton){var Ue=ne++;re=Y||(Y=W(z)),fe=R.bind(null,re,Ue,!1),Ne=R.bind(null,re,Ue,!0)}else re=W(z),fe=H.bind(null,re,z),Ne=function(){(function(Ve){if(Ve.parentNode===null)return!1;Ve.parentNode.removeChild(Ve)})(re)};return fe(te),function(Ve){if(Ve){if(Ve.css===te.css&&Ve.media===te.media&&Ve.sourceMap===te.sourceMap)return;fe(te=Ve)}else Ne()}}A.exports=function(te,z){(z=z||{}).singleton||typeof z.singleton=="boolean"||(z.singleton=O());var re=V(te=te||[],z);return function(fe){if(fe=fe||[],Object.prototype.toString.call(fe)==="[object Array]"){for(var Ne=0;Ne<re.length;Ne++){var Ue=M(re[Ne]);y[Ue].references--}for(var Ve=V(fe,z),sn=0;sn<re.length;sn++){var St=M(re[sn]);y[St].references===0&&(y[St].updater(),y.splice(St,1))}re=Ve}}}}},g={};function f(A){var E=g[A];if(E!==void 0)return E.exports;var b=g[A]={id:A,exports:{}};return u[A](b,b.exports,f),b.exports}f.n=A=>{var E=A&&A.__esModule?()=>A.default:()=>A;return f.d(E,{a:E}),E},f.d=(A,E)=>{for(var b in E)f.o(E,b)&&!f.o(A,b)&&Object.defineProperty(A,b,{enumerable:!0,get:E[b]})},f.o=(A,E)=>Object.prototype.hasOwnProperty.call(A,E),f.nc=void 0;var v={};return(()=>{function A({emitter:o,activator:e,callback:t,contextElements:n}){o.listenTo(document,"mousedown",(i,r)=>{if(!e())return;const a=typeof r.composedPath=="function"?r.composedPath():[],c=typeof n=="function"?n():n;for(const d of c)if(d.contains(r.target)||a.includes(d))return;t()})}function E(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function b({view:o}){o.listenTo(o.element,"submit",(e,t)=>{t.preventDefault(),o.fire("submit")},{useCapture:!0})}f.d(v,{default:()=>Sm});const B=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var O;const D={isMac:y(B),isWindows:(O=B,O.indexOf("windows")>-1),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(B),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(B),isiOS:function(o){return!!o.match(/iphone|ipad/i)||y(o)&&navigator.maxTouchPoints>0}(B),isAndroid:function(o){return o.indexOf("android")>-1}(B),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(B),features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};function y(o){return o.indexOf("macintosh")>-1}function M(o,e,t,n){t=t||function(d,h){return d===h};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(e)?e:Array.prototype.slice.call(e),a=function(d,h,p){const m=V(d,h,p);if(m===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const w=W(d,m),_=W(h,m),x=V(w,_,p),T=d.length-x,L=h.length-x;return{firstIndex:m,lastIndexOld:T,lastIndexNew:L}}(i,r,t);return n?function(d,h){const{firstIndex:p,lastIndexOld:m,lastIndexNew:w}=d;if(p===-1)return Array(h).fill("equal");let _=[];return p>0&&(_=_.concat(Array(p).fill("equal"))),w-p>0&&(_=_.concat(Array(w-p).fill("insert"))),m-p>0&&(_=_.concat(Array(m-p).fill("delete"))),w<h&&(_=_.concat(Array(h-w).fill("equal"))),_}(a,r.length):function(d,h){const p=[],{firstIndex:m,lastIndexOld:w,lastIndexNew:_}=h;return _-m>0&&p.push({index:m,type:"insert",values:d.slice(m,_)}),w-m>0&&p.push({index:m+(_-m),type:"delete",howMany:w-m}),p}(r,a)}function V(o,e,t){for(let n=0;n<Math.max(o.length,e.length);n++)if(o[n]===void 0||e[n]===void 0||!t(o[n],e[n]))return n;return-1}function W(o,e){return o.slice(e).reverse()}function G(o,e,t){t=t||function(T,L){return T===L};const n=o.length,i=e.length;if(n>200||i>200||n+i>300)return G.fastDiff(o,e,t,!0);let r,a;if(i<n){const T=o;o=e,e=T,r="delete",a="insert"}else r="insert",a="delete";const c=o.length,d=e.length,h=d-c,p={},m={};function w(T){const L=(m[T-1]!==void 0?m[T-1]:-1)+1,j=m[T+1]!==void 0?m[T+1]:-1,Z=L>j?-1:1;p[T+Z]&&(p[T]=p[T+Z].slice(0)),p[T]||(p[T]=[]),p[T].push(L>j?r:a);let K=Math.max(L,j),le=K-T;for(;le<c&&K<d&&t(o[le],e[K]);)le++,K++,p[T].push("equal");return K}let _,x=0;do{for(_=-x;_<h;_++)m[_]=w(_);for(_=h+x;_>h;_--)m[_]=w(_);m[h]=w(h),x++}while(m[h]!==d);return p[h].slice(1)}G.fastDiff=M;const F=function(){return function o(){o.called=!0}};class R{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=F(),this.off=F()}}const H=new Array(256).fill("").map((o,e)=>("0"+e.toString(16)).slice(-2));function Y(){const o=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+H[o>>0&255]+H[o>>8&255]+H[o>>16&255]+H[o>>24&255]+H[e>>0&255]+H[e>>8&255]+H[e>>16&255]+H[e>>24&255]+H[t>>0&255]+H[t>>8&255]+H[t>>16&255]+H[t>>24&255]+H[n>>0&255]+H[n>>8&255]+H[n>>16&255]+H[n>>24&255]}const ne={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function ue(o,e){const t=ne.get(e.priority);for(let n=0;n<o.length;n++)if(ne.get(o[n].priority)<t)return void o.splice(n,0,e);o.push(e)}const te="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class z extends Error{constructor(e,t,n){super(function(i,r){const a=new WeakSet,c=(p,m)=>{if(typeof m=="object"&&m!==null){if(a.has(m))return`[object ${m.constructor.name}]`;a.add(m)}return m},d=r?` ${JSON.stringify(r,c)}`:"",h=Ne(i);return i+d+h}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new z(e.message,t);throw n.stack=e.stack,n}}function re(o,e){console.warn(...Ue(o,e))}function fe(o,e){console.error(...Ue(o,e))}function Ne(o){return`
Read more: ${te}#error-${o}`}function Ue(o,e){const t=Ne(o);return e?[o,e,t]:[o,t]}const Ve="41.0.0",sn=new Date(2024,0,17);if(globalThis.CKEDITOR_VERSION)throw new z("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=Ve;const St=Symbol("listeningTo"),Re=Symbol("emitterId"),tt=Symbol("delegations"),ke=pe(Object);function pe(o){return o?class extends o{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let i=!1;this.listenTo(this,e,(r,...a)=>{i||(i=!0,r.off(),t.call(this,r,...a))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,i={}){let r,a;this[St]||(this[St]={});const c=this[St];ot(e)||ge(e);const d=ot(e);(r=c[d])||(r=c[d]={emitter:e,callbacks:{}}),(a=r.callbacks[t])||(a=r.callbacks[t]=[]),a.push(n),function(h,p,m,w,_){p._addEventListener?p._addEventListener(m,w,_):h._addEventListener.call(p,m,w,_)}(this,e,t,n,i)}stopListening(e,t,n){const i=this[St];let r=e&&ot(e);const a=i&&r?i[r]:void 0,c=a&&t?a.callbacks[t]:void 0;if(!(!i||e&&!a||t&&!c))if(n)Ln(this,e,t,n),c.indexOf(n)!==-1&&(c.length===1?delete a.callbacks[t]:Ln(this,e,t,n));else if(c){for(;n=c.pop();)Ln(this,e,t,n);delete a.callbacks[t]}else if(a){for(t in a.callbacks)this.stopListening(e,t);delete i[r]}else{for(r in i)this.stopListening(i[r].emitter);delete this[St]}}fire(e,...t){try{const n=e instanceof R?e:new R(this,e),i=n.name;let r=qn(this,i);if(n.path.push(this),r){const c=[n,...t];r=Array.from(r);for(let d=0;d<r.length&&(r[d].callback.apply(this,c),n.off.called&&(delete n.off.called,this._removeEventListener(i,r[d].callback)),!n.stop.called);d++);}const a=this[tt];if(a){const c=a.get(i),d=a.get("*");c&&X(c,n,t),d&&X(d,n,t)}return n.return}catch(n){z.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[tt]||(this[tt]=new Map),e.forEach(i=>{const r=this[tt].get(i);r?r.set(t,n):this[tt].set(i,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[tt])if(e)if(t){const n=this[tt].get(e);n&&n.delete(t)}else this[tt].delete(e);else this[tt].clear()}_addEventListener(e,t,n){(function(a,c){const d=mt(a);if(d[c])return;let h=c,p=null;const m=[];for(;h!==""&&!d[h];)d[h]={callbacks:[],childEvents:[]},m.push(d[h]),p&&d[h].childEvents.push(p),p=h,h=h.substr(0,h.lastIndexOf(":"));if(h!==""){for(const w of m)w.callbacks=d[h].callbacks.slice();d[h].childEvents.push(p)}})(this,e);const i=lo(this,e),r={callback:t,priority:ne.get(n.priority)};for(const a of i)ue(a,r)}_removeEventListener(e,t){const n=lo(this,e);for(const i of n)for(let r=0;r<i.length;r++)i[r].callback==t&&(i.splice(r,1),r--)}}:ke}function ge(o,e){o[Re]||(o[Re]=e||Y())}function ot(o){return o[Re]}function mt(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function lo(o,e){const t=mt(o)[e];if(!t)return[];let n=[t.callbacks];for(let i=0;i<t.childEvents.length;i++){const r=lo(o,t.childEvents[i]);n=n.concat(r)}return n}function qn(o,e){let t;return o._events&&(t=o._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?qn(o,e.substr(0,e.lastIndexOf(":"))):null}function X(o,e,t){for(let[n,i]of o){i?typeof i=="function"&&(i=i(e.name)):i=e.name;const r=new R(e.source,i);r.path=[...e.path],n.fire(r,...t)}}function Ln(o,e,t,n){e._removeEventListener?e._removeEventListener(t,n):o._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{pe[o]=ke.prototype[o]});const We=function(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")},Ki=Symbol("observableProperties"),wi=Symbol("boundObservables"),It=Symbol("boundProperties"),an=Symbol("decoratedMethods"),Es=Symbol("decoratedOriginal"),Ma=$e(pe());function $e(o){return o?class extends o{set(e,t){if(We(e))return void Object.keys(e).forEach(i=>{this.set(i,e[i])},this);vi(this);const n=this[Ki];if(e in this&&!n.has(e))throw new z("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(i){const r=n.get(e);let a=this.fire(`set:${e}`,e,i,r);a===void 0&&(a=i),r===a&&n.has(e)||(n.set(e,a),this.fire(`change:${e}`,e,a,r))}}),this[e]=t}bind(...e){if(!e.length||!Qi(e))throw new z("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new z("observable-bind-duplicate-properties",this);vi(this);const t=this[It];e.forEach(i=>{if(t.has(i))throw new z("observable-bind-rebind",this)});const n=new Map;return e.forEach(i=>{const r={property:i,to:[]};t.set(i,r),n.set(i,r)}),{to:Ds,toMany:Yi,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[Ki])return;const t=this[It],n=this[wi];if(e.length){if(!Qi(e))throw new z("observable-unbind-wrong-properties",this);e.forEach(i=>{const r=t.get(i);r&&(r.to.forEach(([a,c])=>{const d=n.get(a),h=d[c];h.delete(r),h.size||delete d[c],Object.keys(d).length||(n.delete(a),this.stopListening(a,"change"))}),t.delete(i))})}else n.forEach((i,r)=>{this.stopListening(r,"change")}),n.clear(),t.clear()}decorate(e){vi(this);const t=this[e];if(!t)throw new z("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,i)=>{n.return=t.apply(this,i)}),this[e]=function(...n){return this.fire(e,n)},this[e][Es]=t,this[an]||(this[an]=[]),this[an].push(e)}stopListening(e,t,n){if(!e&&this[an]){for(const i of this[an])this[i]=this[i][Es];delete this[an]}super.stopListening(e,t,n)}}:Ma}function vi(o){o[Ki]||(Object.defineProperty(o,Ki,{value:new Map}),Object.defineProperty(o,wi,{value:new Map}),Object.defineProperty(o,It,{value:new Map}))}function Ds(...o){const e=function(...r){if(!r.length)throw new z("observable-bind-to-parse-error",null);const a={to:[]};let c;return typeof r[r.length-1]=="function"&&(a.callback=r.pop()),r.forEach(d=>{if(typeof d=="string")c.properties.push(d);else{if(typeof d!="object")throw new z("observable-bind-to-parse-error",null);c={observable:d,properties:[]},a.to.push(c)}}),a}(...o),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new z("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new z("observable-bind-to-extra-callback",this);var i;e.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new z("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),i=this._observable,this._to.forEach(r=>{const a=i[wi];let c;a.get(r.observable)||i.listenTo(r.observable,"change",(d,h)=>{c=a.get(r.observable)[h],c&&c.forEach(p=>{Ut(i,p.property)})})}),function(r){let a;r._bindings.forEach((c,d)=>{r._to.forEach(h=>{a=h.properties[c.callback?0:r._bindProperties.indexOf(d)],c.to.push([h.observable,a]),function(p,m,w,_){const x=p[wi],T=x.get(w),L=T||{};L[_]||(L[_]=new Set),L[_].add(m),T||x.set(w,L)}(r._observable,c,h.observable,a)})})}(this),this._bindProperties.forEach(r=>{Ut(this._observable,r)})}function Yi(o,e,t){if(this._bindings.size>1)throw new z("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const r=n.map(a=>[a,i]);return Array.prototype.concat.apply([],r)}(o,e),t)}function Qi(o){return o.every(e=>typeof e=="string")}function Ut(o,e){const t=o[It].get(e);let n;t.callback?n=t.callback.apply(o,t.to.map(i=>i[0][i[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,e)?o[e]=n:o.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{$e[o]=Ma.prototype[o]});class Ai{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function Tt(o){let e=0;for(const t of o)e++;return e}function Ie(o,e){const t=Math.min(o.length,e.length);for(let n=0;n<t;n++)if(o[n]!=e[n])return n;return o.length==e.length?"same":o.length<e.length?"prefix":"extension"}function Rt(o){return!(!o||!o[Symbol.iterator])}const Ba=typeof Nn=="object"&&Nn&&Nn.Object===Object&&Nn;var Na=typeof self=="object"&&self&&self.Object===Object&&self;const pn=Ba||Na||Function("return this")(),Wt=pn.Symbol;var Wo=Object.prototype,Tr=Wo.hasOwnProperty,Gn=Wo.toString,Zn=Wt?Wt.toStringTag:void 0;const qo=function(o){var e=Tr.call(o,Zn),t=o[Zn];try{o[Zn]=void 0;var n=!0}catch{}var i=Gn.call(o);return n&&(e?o[Zn]=t:delete o[Zn]),i};var Pa=Object.prototype.toString;const xo=function(o){return Pa.call(o)};var Go=Wt?Wt.toStringTag:void 0;const co=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":Go&&Go in Object(o)?qo(o):xo(o)},Mt=Array.isArray,wt=function(o){return o!=null&&typeof o=="object"},Oa=function(o){return typeof o=="string"||!Mt(o)&&wt(o)&&co(o)=="[object String]"};function Ci(o,e,t={},n=[]){const i=t&&t.xmlns,r=i?o.createElementNS(i,e):o.createElement(e);for(const a in t)r.setAttribute(a,t[a]);!Oa(n)&&Rt(n)||(n=[n]);for(let a of n)Oa(a)&&(a=o.createTextNode(a)),r.appendChild(a);return r}const Mr=function(o,e){return function(t){return o(e(t))}},_i=Mr(Object.getPrototypeOf,Object);var nc=Function.prototype,gn=Object.prototype,$n=nc.toString,oc=gn.hasOwnProperty,Bt=$n.call(Object);const vt=function(o){if(!wt(o)||co(o)!="[object Object]")return!1;var e=_i(o);if(e===null)return!0;var t=oc.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&$n.call(t)==Bt},yi=function(){this.__data__=[],this.size=0},xi=function(o,e){return o===e||o!=o&&e!=e},ze=function(o,e){for(var t=o.length;t--;)if(xi(o[t][0],e))return t;return-1};var Kn=Array.prototype.splice;const Eo=function(o){var e=this.__data__,t=ze(e,o);return!(t<0)&&(t==e.length-1?e.pop():Kn.call(e,t,1),--this.size,!0)},Zo=function(o){var e=this.__data__,t=ze(e,o);return t<0?void 0:e[t][1]},Nt=function(o){return ze(this.__data__,o)>-1},qt=function(o,e){var t=this.__data__,n=ze(t,o);return n<0?(++this.size,t.push([o,e])):t[n][1]=e,this};function mn(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}mn.prototype.clear=yi,mn.prototype.delete=Eo,mn.prototype.get=Zo,mn.prototype.has=Nt,mn.prototype.set=qt;const Ei=mn,Ji=function(){this.__data__=new Ei,this.size=0},fn=function(o){var e=this.__data__,t=e.delete(o);return this.size=e.size,t},Br=function(o){return this.__data__.get(o)},La=function(o){return this.__data__.has(o)},Do=function(o){if(!We(o))return!1;var e=co(o);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Xi=pn["__core-js_shared__"];var za=function(){var o=/[^.]+$/.exec(Xi&&Xi.keys&&Xi.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const $o=function(o){return!!za&&za in o};var ic=Function.prototype.toString;const Ko=function(o){if(o!=null){try{return ic.call(o)}catch{}try{return o+""}catch{}}return""};var xn=/^\[object .+?Constructor\]$/,rc=Function.prototype,sc=Object.prototype,ja=rc.toString,Ra=sc.hasOwnProperty,ac=RegExp("^"+ja.call(Ra).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Nr=function(o){return!(!We(o)||$o(o))&&(Do(o)?ac:xn).test(Ko(o))},Pr=function(o,e){return o==null?void 0:o[e]},Yo=function(o,e){var t=Pr(o,e);return Nr(t)?t:void 0},En=Yo(pn,"Map"),Di=Yo(Object,"create"),lc=function(){this.__data__=Di?Di(null):{},this.size=0},cc=function(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e};var Ss=Object.prototype.hasOwnProperty;const Is=function(o){var e=this.__data__;if(Di){var t=e[o];return t==="__lodash_hash_undefined__"?void 0:t}return Ss.call(e,o)?e[o]:void 0};var dc=Object.prototype.hasOwnProperty;const Fa=function(o){var e=this.__data__;return Di?e[o]!==void 0:dc.call(e,o)},Va=function(o,e){var t=this.__data__;return this.size+=this.has(o)?0:1,t[o]=Di&&e===void 0?"__lodash_hash_undefined__":e,this};function Qo(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}Qo.prototype.clear=lc,Qo.prototype.delete=cc,Qo.prototype.get=Is,Qo.prototype.has=Fa,Qo.prototype.set=Va;const Qe=Qo,uc=function(){this.size=0,this.__data__={hash:new Qe,map:new(En||Ei),string:new Qe}},hc=function(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null},er=function(o,e){var t=o.__data__;return hc(e)?t[typeof e=="string"?"string":"hash"]:t.map},it=function(o){var e=er(this,o).delete(o);return this.size-=e?1:0,e},pc=function(o){return er(this,o).get(o)},Ts=function(o){return er(this,o).has(o)},Or=function(o,e){var t=er(this,o),n=t.size;return t.set(o,e),this.size+=t.size==n?0:1,this};function ln(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}ln.prototype.clear=uc,ln.prototype.delete=it,ln.prototype.get=pc,ln.prototype.has=Ts,ln.prototype.set=Or;const Jo=ln,uo=function(o,e){var t=this.__data__;if(t instanceof Ei){var n=t.__data__;if(!En||n.length<199)return n.push([o,e]),this.size=++t.size,this;t=this.__data__=new Jo(n)}return t.set(o,e),this.size=t.size,this};function Xe(o){var e=this.__data__=new Ei(o);this.size=e.size}Xe.prototype.clear=Ji,Xe.prototype.delete=fn,Xe.prototype.get=Br,Xe.prototype.has=La,Xe.prototype.set=uo;const tr=Xe,gc=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n&&e(o[t],t,o)!==!1;);return o},nr=function(){try{var o=Yo(Object,"defineProperty");return o({},"",{}),o}catch{}}(),Lr=function(o,e,t){e=="__proto__"&&nr?nr(o,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):o[e]=t};var Ms=Object.prototype.hasOwnProperty;const Bs=function(o,e,t){var n=o[e];Ms.call(o,e)&&xi(n,t)&&(t!==void 0||e in o)||Lr(o,e,t)},Si=function(o,e,t,n){var i=!t;t||(t={});for(var r=-1,a=e.length;++r<a;){var c=e[r],d=n?n(t[c],o[c],c,t,o):void 0;d===void 0&&(d=o[c]),i?Lr(t,c,d):Bs(t,c,d)}return t},Ha=function(o,e){for(var t=-1,n=Array(o);++t<o;)n[t]=e(t);return n},Ns=function(o){return wt(o)&&co(o)=="[object Arguments]"};var or=Object.prototype,mc=or.hasOwnProperty,fc=or.propertyIsEnumerable;const Ps=Ns(function(){return arguments}())?Ns:function(o){return wt(o)&&mc.call(o,"callee")&&!fc.call(o,"callee")},kc=function(){return!1};var zr=l&&!l.nodeType&&l,Ua=zr&&!0&&s&&!s.nodeType&&s,Os=Ua&&Ua.exports===zr?pn.Buffer:void 0;const Xo=(Os?Os.isBuffer:void 0)||kc;var Wa=/^(?:0|[1-9]\d*)$/;const ir=function(o,e){var t=typeof o;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&Wa.test(o))&&o>-1&&o%1==0&&o<e},qa=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var rt={};rt["[object Float32Array]"]=rt["[object Float64Array]"]=rt["[object Int8Array]"]=rt["[object Int16Array]"]=rt["[object Int32Array]"]=rt["[object Uint8Array]"]=rt["[object Uint8ClampedArray]"]=rt["[object Uint16Array]"]=rt["[object Uint32Array]"]=!0,rt["[object Arguments]"]=rt["[object Array]"]=rt["[object ArrayBuffer]"]=rt["[object Boolean]"]=rt["[object DataView]"]=rt["[object Date]"]=rt["[object Error]"]=rt["[object Function]"]=rt["[object Map]"]=rt["[object Number]"]=rt["[object Object]"]=rt["[object RegExp]"]=rt["[object Set]"]=rt["[object String]"]=rt["[object WeakMap]"]=!1;const Ii=function(o){return wt(o)&&qa(o.length)&&!!rt[co(o)]},rr=function(o){return function(e){return o(e)}};var Ga=l&&!l.nodeType&&l,So=Ga&&!0&&s&&!s.nodeType&&s,Ti=So&&So.exports===Ga&&Ba.process;const Mi=function(){try{var o=So&&So.require&&So.require("util").types;return o||Ti&&Ti.binding&&Ti.binding("util")}catch{}}();var Ls=Mi&&Mi.isTypedArray;const jr=Ls?rr(Ls):Ii;var bc=Object.prototype.hasOwnProperty;const zs=function(o,e){var t=Mt(o),n=!t&&Ps(o),i=!t&&!n&&Xo(o),r=!t&&!n&&!i&&jr(o),a=t||n||i||r,c=a?Ha(o.length,String):[],d=c.length;for(var h in o)!e&&!bc.call(o,h)||a&&(h=="length"||i&&(h=="offset"||h=="parent")||r&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||ir(h,d))||c.push(h);return c};var wc=Object.prototype;const Io=function(o){var e=o&&o.constructor;return o===(typeof e=="function"&&e.prototype||wc)},js=Mr(Object.keys,Object);var Rr=Object.prototype.hasOwnProperty;const Fr=function(o){if(!Io(o))return js(o);var e=[];for(var t in Object(o))Rr.call(o,t)&&t!="constructor"&&e.push(t);return e},Bi=function(o){return o!=null&&qa(o.length)&&!Do(o)},Vr=function(o){return Bi(o)?zs(o):Fr(o)},Za=function(o,e){return o&&Si(e,Vr(e),o)},$a=function(o){var e=[];if(o!=null)for(var t in Object(o))e.push(t);return e};var Ka=Object.prototype.hasOwnProperty;const Ya=function(o){if(!We(o))return $a(o);var e=Io(o),t=[];for(var n in o)(n!="constructor"||!e&&Ka.call(o,n))&&t.push(n);return t},Ni=function(o){return Bi(o)?zs(o,!0):Ya(o)},Pi=function(o,e){return o&&Si(e,Ni(e),o)};var Qa=l&&!l.nodeType&&l,Ja=Qa&&!0&&s&&!s.nodeType&&s,Rs=Ja&&Ja.exports===Qa?pn.Buffer:void 0,To=Rs?Rs.allocUnsafe:void 0;const zn=function(o,e){if(e)return o.slice();var t=o.length,n=To?To(t):new o.constructor(t);return o.copy(n),n},Xa=function(o,e){var t=-1,n=o.length;for(e||(e=Array(n));++t<n;)e[t]=o[t];return e},el=function(o,e){for(var t=-1,n=o==null?0:o.length,i=0,r=[];++t<n;){var a=o[t];e(a,t,o)&&(r[i++]=a)}return r},ei=function(){return[]};var Fs=Object.prototype.propertyIsEnumerable,tl=Object.getOwnPropertySymbols;const Vs=tl?function(o){return o==null?[]:(o=Object(o),el(tl(o),function(e){return Fs.call(o,e)}))}:ei,nl=function(o,e){return Si(o,Vs(o),e)},Mo=function(o,e){for(var t=-1,n=e.length,i=o.length;++t<n;)o[i+t]=e[t];return o},Hs=Object.getOwnPropertySymbols?function(o){for(var e=[];o;)Mo(e,Vs(o)),o=_i(o);return e}:ei,vc=function(o,e){return Si(o,Hs(o),e)},ol=function(o,e,t){var n=e(o);return Mt(o)?n:Mo(n,t(o))},Us=function(o){return ol(o,Vr,Vs)},il=function(o){return ol(o,Ni,Hs)},Ws=Yo(pn,"DataView"),qs=Yo(pn,"Promise"),Gs=Yo(pn,"Set"),Hr=Yo(pn,"WeakMap");var rl="[object Map]",Zs="[object Promise]",Ur="[object Set]",sr="[object WeakMap]",$s="[object DataView]",sl=Ko(Ws),al=Ko(En),et=Ko(qs),Ac=Ko(Gs),Ks=Ko(Hr),Yn=co;(Ws&&Yn(new Ws(new ArrayBuffer(1)))!=$s||En&&Yn(new En)!=rl||qs&&Yn(qs.resolve())!=Zs||Gs&&Yn(new Gs)!=Ur||Hr&&Yn(new Hr)!=sr)&&(Yn=function(o){var e=co(o),t=e=="[object Object]"?o.constructor:void 0,n=t?Ko(t):"";if(n)switch(n){case sl:return $s;case al:return rl;case et:return Zs;case Ac:return Ur;case Ks:return sr}return e});const Oi=Yn;var ti=Object.prototype.hasOwnProperty;const Li=function(o){var e=o.length,t=new o.constructor(e);return e&&typeof o[0]=="string"&&ti.call(o,"index")&&(t.index=o.index,t.input=o.input),t},Wr=pn.Uint8Array,ar=function(o){var e=new o.constructor(o.byteLength);return new Wr(e).set(new Wr(o)),e},qr=function(o,e){var t=e?ar(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.byteLength)};var Gr=/\w*$/;const Zr=function(o){var e=new o.constructor(o.source,Gr.exec(o));return e.lastIndex=o.lastIndex,e};var Bo=Wt?Wt.prototype:void 0,$r=Bo?Bo.valueOf:void 0;const Kr=function(o){return $r?Object($r.call(o)):{}},Ys=function(o,e){var t=e?ar(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.length)},P=function(o,e,t){var n=o.constructor;switch(e){case"[object ArrayBuffer]":return ar(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return qr(o,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ys(o,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return Zr(o);case"[object Symbol]":return Kr(o)}};var N=Object.create;const U=function(){function o(){}return function(e){if(!We(e))return{};if(N)return N(e);o.prototype=e;var t=new o;return o.prototype=void 0,t}}(),$=function(o){return typeof o.constructor!="function"||Io(o)?{}:U(_i(o))},ae=function(o){return wt(o)&&Oi(o)=="[object Map]"};var we=Mi&&Mi.isMap;const Ae=we?rr(we):ae,be=function(o){return wt(o)&&Oi(o)=="[object Set]"};var Le=Mi&&Mi.isSet;const Pe=Le?rr(Le):be;var kn="[object Arguments]",Xt="[object Function]",yt="[object Object]",He={};He[kn]=He["[object Array]"]=He["[object ArrayBuffer]"]=He["[object DataView]"]=He["[object Boolean]"]=He["[object Date]"]=He["[object Float32Array]"]=He["[object Float64Array]"]=He["[object Int8Array]"]=He["[object Int16Array]"]=He["[object Int32Array]"]=He["[object Map]"]=He["[object Number]"]=He[yt]=He["[object RegExp]"]=He["[object Set]"]=He["[object String]"]=He["[object Symbol]"]=He["[object Uint8Array]"]=He["[object Uint8ClampedArray]"]=He["[object Uint16Array]"]=He["[object Uint32Array]"]=!0,He["[object Error]"]=He[Xt]=He["[object WeakMap]"]=!1;const Qn=function o(e,t,n,i,r,a){var c,d=1&t,h=2&t,p=4&t;if(n&&(c=r?n(e,i,r,a):n(e)),c!==void 0)return c;if(!We(e))return e;var m=Mt(e);if(m){if(c=Li(e),!d)return Xa(e,c)}else{var w=Oi(e),_=w==Xt||w=="[object GeneratorFunction]";if(Xo(e))return zn(e,d);if(w==yt||w==kn||_&&!r){if(c=h||_?{}:$(e),!d)return h?vc(e,Pi(c,e)):nl(e,Za(c,e))}else{if(!He[w])return r?e:{};c=P(e,w,d)}}a||(a=new tr);var x=a.get(e);if(x)return x;a.set(e,c),Pe(e)?e.forEach(function(L){c.add(o(L,t,n,L,e,a))}):Ae(e)&&e.forEach(function(L,j){c.set(j,o(L,t,n,j,e,a))});var T=m?void 0:(p?h?il:Us:h?Ni:Vr)(e);return gc(T||e,function(L,j){T&&(L=e[j=L]),Bs(c,j,o(L,t,n,j,e,a))}),c},Dn=function(o,e){return Qn(o,5,e=typeof e=="function"?e:void 0)},ft=function(o){return wt(o)&&o.nodeType===1&&!vt(o)};class Gt{constructor(e,t){this._config={},t&&this.define(Zt(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,i=!1){if(vt(t))return void this._setObjectToTarget(e,t,i);const r=t.split(".");t=r.pop();for(const a of r)vt(e[a])||(e[a]={}),e=e[a];if(vt(n))return vt(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,i);i&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const i of n){if(!vt(e[i])){e=null;break}e=e[i]}return e?Zt(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(i=>{this._setToTarget(e,i,t[i],n)})}}function Zt(o){return Dn(o,jn)}function jn(o){return ft(o)||typeof o=="function"?o:void 0}function $t(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function Yr(o){const e=Object.prototype.toString.apply(o);return e=="[object Window]"||e=="[object global]"}const lr=Sn(pe());function Sn(o){return o?class extends o{listenTo(e,t,n,i={}){if($t(e)||Yr(e)){const r={capture:!!i.useCapture,passive:!!i.usePassive},a=this._getProxyEmitter(e,r)||new Cc(e,r);this.listenTo(a,t,n,i)}else super.listenTo(e,t,n,i)}stopListening(e,t,n){if($t(e)||Yr(e)){const i=this._getAllProxyEmitters(e);for(const r of i)this.stopListening(r,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,i){const r=n[St];return r&&r[i]?r[i].emitter:null}(this,ll(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:lr}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Sn[o]=lr.prototype[o]});class Cc extends pe(){constructor(e,t){super(),ge(this,ll(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),pe().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){pe().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function ll(o,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=Y())}(o);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let Qs;try{Qs={window,document}}catch{Qs={window:{},document:{}}}const ie=Qs;function Se(o){return Object.prototype.toString.call(o)=="[object Text]"}function Fe(o){return Object.prototype.toString.apply(o)=="[object Range]"}function Rn(o){const e=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function ho(o){return o&&o.parentNode?o.offsetParent===ie.document.body?null:o.offsetParent:null}const Fn=["top","right","bottom","left","width","height"];class ye{constructor(e){const t=Fe(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),In(e)||t)if(t){const n=ye.getDomRangeRects(e);bn(this,ye.getBoundingRect(n))}else bn(this,e.getBoundingClientRect());else if(Yr(e)){const{innerWidth:n,innerHeight:i}=e;bn(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else bn(this,e)}clone(){return new ye(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const n=new ye(t);return n._source=this._source,n}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(Kt(e))return t;let n,i=e,r=e.parentNode||e.commonAncestorContainer;for(;r&&!Kt(r);){const c=((a=r)instanceof HTMLElement?a.ownerDocument.defaultView.getComputedStyle(a).overflow:"visible")==="visible";i instanceof HTMLElement&&en(i)==="absolute"&&(n=i);const d=en(r);if(c||n&&(d==="relative"&&c||d!=="relative")){i=r,r=r.parentNode;continue}const h=new ye(r),p=t.getIntersection(h);if(!p)return null;p.getArea()<t.getArea()&&(t=p),i=r,r=r.parentNode}var a;return t}isEqual(e){for(const t of Fn)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=ie.window,n=this.clone().moveBy(e,t);if(In(n._source)){const i=ho(n._source);i&&function(r,a){const c=new ye(a),d=Rn(a);let h=0,p=0;h-=c.left,p-=c.top,h+=a.scrollLeft,p+=a.scrollTop,h-=d.left,p-=d.top,r.moveBy(h,p)}(n,i)}return n}excludeScrollbarsAndBorders(){const e=this._source;let t,n,i;if(Yr(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,i=e.getComputedStyle(e.document.documentElement).direction;else{const r=Rn(e);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,i=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,i==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const i of n)t.push(new ye(i));else{let i=e.startContainer;Se(i)&&(i=i.parentNode);const r=new ye(i.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of e)n++,t.left=Math.min(t.left,i.left),t.top=Math.min(t.top,i.top),t.right=Math.max(t.right,i.right),t.bottom=Math.max(t.bottom,i.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new ye(t))}}function bn(o,e){for(const t of Fn)o[t]=e[t]}function Kt(o){return!!In(o)&&o===o.ownerDocument.body}function In(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function en(o){return o instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).position:"static"}const Te=class{constructor(o,e){Te._observerInstance||Te._createObserver(),this._element=o,this._callback=e,Te._addElementCallback(o,e),Te._observerInstance.observe(o)}get element(){return this._element}destroy(){Te._deleteElementCallback(this._element,this._callback)}static _addElementCallback(o,e){Te._elementCallbacks||(Te._elementCallbacks=new Map);let t=Te._elementCallbacks.get(o);t||(t=new Set,Te._elementCallbacks.set(o,t)),t.add(e)}static _deleteElementCallback(o,e){const t=Te._getElementCallbacks(o);t&&(t.delete(e),t.size||(Te._elementCallbacks.delete(o),Te._observerInstance.unobserve(o))),Te._elementCallbacks&&!Te._elementCallbacks.size&&(Te._observerInstance=null,Te._elementCallbacks=null)}static _getElementCallbacks(o){return Te._elementCallbacks?Te._elementCallbacks.get(o):null}static _createObserver(){Te._observerInstance=new ie.window.ResizeObserver(o=>{for(const e of o){const t=Te._getElementCallbacks(e.target);if(t)for(const n of t)n(e)}})}};let At=Te;function ni(o,e){o instanceof HTMLTextAreaElement&&(o.value=e),o.innerHTML=e}function Qr(o){return e=>e+o}function cl(o){let e=0;for(;o.previousSibling;)o=o.previousSibling,e++;return e}function _c(o,e,t){o.insertBefore(t,o.childNodes[e]||null)}function Js(o){return o&&o.nodeType===Node.COMMENT_NODE}function cr(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}At._observerInstance=null,At._elementCallbacks=null;var Qd=Math.pow;function yc({element:o,target:e,positions:t,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){Do(e)&&(e=e()),Do(n)&&(n=n());const a=ho(o),c=function(w){w=Object.assign({top:0,bottom:0,left:0,right:0},w);const _=new ye(ie.window);return _.top+=w.top,_.height-=w.top,_.bottom-=w.bottom,_.height-=w.bottom,_}(r),d=new ye(o),h=Jd(e,c);let p;if(!h||!c.getIntersection(h))return null;const m={targetRect:h,elementRect:d,positionedElementAncestor:a,viewportRect:c};if(n||i){if(n){const w=Jd(n,c);w&&(m.limiterRect=w)}p=function(w,_){const{elementRect:x}=_,T=x.getArea(),L=w.map(K=>new Xd(K,_)).filter(K=>!!K.name);let j=0,Z=null;for(const K of L){const{limiterIntersectionArea:le,viewportIntersectionArea:ve}=K;if(le===T)return K;const Ee=Qd(ve,2)+Qd(le,2);Ee>j&&(j=Ee,Z=K)}return Z}(t,m)}else p=new Xd(t[0],m);return p}function Jd(o,e){const t=new ye(o).getVisible();return t?t.getIntersection(e):null}class Xd{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!n)return;const{left:i,top:r,name:a,config:c}=n;this.name=a,this.config=c,this._positioningFunctionCoordinates={left:i,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function eu(o){const e=o.parentNode;e&&e.removeChild(o)}function Dp({window:o,rect:e,alignToTop:t,forceScroll:n,viewportOffset:i}){const r=e.clone().moveBy(0,i.bottom),a=e.clone().moveBy(0,-i.top),c=new ye(o).excludeScrollbarsAndBorders(),d=t&&n,h=[a,r].every(x=>c.contains(x));let{scrollX:p,scrollY:m}=o;const w=p,_=m;d?m-=c.top-e.top+i.top:h||(xc(a,c)?m-=c.top-e.top+i.top:zi(r,c)&&(m+=t?e.top-c.top-i.top:e.bottom-c.bottom+i.bottom)),h||(tu(e,c)?p-=c.left-e.left+i.left:nu(e,c)&&(p+=e.right-c.right+i.right)),p==w&&m===_||o.scrollTo(p,m)}function Sp({parent:o,getRect:e,alignToTop:t,forceScroll:n,ancestorOffset:i=0,limiterElement:r}){const a=Ec(o),c=t&&n;let d,h,p;const m=r||a.document.body;for(;o!=m;)h=e(),d=new ye(o).excludeScrollbarsAndBorders(),p=d.contains(h),c?o.scrollTop-=d.top-h.top+i:p||(xc(h,d)?o.scrollTop-=d.top-h.top+i:zi(h,d)&&(o.scrollTop+=t?h.top-d.top-i:h.bottom-d.bottom+i)),p||(tu(h,d)?o.scrollLeft-=d.left-h.left+i:nu(h,d)&&(o.scrollLeft+=h.right-d.right+i)),o=o.parentNode}function zi(o,e){return o.bottom>e.bottom}function xc(o,e){return o.top<e.top}function tu(o,e){return o.left<e.left}function nu(o,e){return o.right>e.right}function Ec(o){return Fe(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function Ip(o){if(Fe(o)){let e=o.commonAncestorContainer;return Se(e)&&(e=e.parentNode),e}return o.parentNode}function ou(o,e){const t=Ec(o),n=new ye(o);if(t===e)return n;{let i=t;for(;i!=e;){const r=i.frameElement,a=new ye(r).excludeScrollbarsAndBorders();n.moveBy(a.left,a.top),i=i.parent}}return n}const iu={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},Tp={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},qe=function(){const o={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)o[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)o[e-48]=e;for(let e=112;e<=123;e++)o["f"+(e-111)]=e;for(const e of"`-=[];',./\\")o[e]=e.charCodeAt(0);return o}(),Mp=Object.fromEntries(Object.entries(qe).map(([o,e])=>[e,o.charAt(0).toUpperCase()+o.slice(1)]));function wn(o){let e;if(typeof o=="string"){if(e=qe[o.toLowerCase()],!e)throw new z("keyboard-unknown-key",null,{key:o})}else e=o.keyCode+(o.altKey?qe.alt:0)+(o.ctrlKey?qe.ctrl:0)+(o.shiftKey?qe.shift:0)+(o.metaKey?qe.cmd:0);return e}function ji(o){return typeof o=="string"&&(o=function(e){return e.split("+").map(t=>t.trim())}(o)),o.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return wn(t.slice(0,-1));const n=wn(t);return(D.isMac||D.isiOS)&&n==qe.ctrl?qe.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Ct(o){let e=ji(o);return Object.entries(D.isMac||D.isiOS?iu:Tp).reduce((t,[n,i])=>(e&qe[n]&&(e&=~qe[n],t+=i),t),"")+(e?Mp[e]:"")}function Dc(o,e){const t=e==="ltr";switch(o){case qe.arrowleft:return t?"left":"right";case qe.arrowright:return t?"right":"left";case qe.arrowup:return"up";case qe.arrowdown:return"down"}}function pt(o){return Array.isArray(o)?o:[o]}function Bp(o,e,t=1){if(typeof t!="number")throw new z("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(ie.window.CKEDITOR_TRANSLATIONS).length;n===1&&(o=Object.keys(ie.window.CKEDITOR_TRANSLATIONS)[0]);const i=e.id||e.string;if(n===0||!function(d,h){return!!ie.window.CKEDITOR_TRANSLATIONS[d]&&!!ie.window.CKEDITOR_TRANSLATIONS[d].dictionary[h]}(o,i))return t!==1?e.plural:e.string;const r=ie.window.CKEDITOR_TRANSLATIONS[o].dictionary,a=ie.window.CKEDITOR_TRANSLATIONS[o].getPluralForm||(d=>d===1?0:1),c=r[i];return typeof c=="string"?c:c[Number(a(t))]}ie.window.CKEDITOR_TRANSLATIONS||(ie.window.CKEDITOR_TRANSLATIONS={});const Np=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function ru(o){return Np.includes(o)?"rtl":"ltr"}class Pp{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=ru(this.uiLanguage),this.contentLanguageDirection=ru(this.contentLanguage),this.t=(n,i)=>this._t(n,i)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=pt(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(a,c)=>c<r.length?r[c]:a)}(Bp(this.uiLanguage,e,n),t)}}class po extends pe(){constructor(e={},t={}){super();const n=Rt(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of e)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new z("collection-add-item-invalid-index",this);let n=0;for(const i of e){const r=this._getItemIdBeforeAdding(i),a=t+n;this._items.splice(a,0,i),this._itemMap.set(r,i),this.fire("add",i,a),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new z("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}forEach(e,t){this._items.forEach(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new z("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(i,r,a)=>{const c=t._bindToCollection==this,d=t._bindToInternalToExternalMap.get(r);if(c&&d)this._bindToExternalToInternalMap.set(r,d),this._bindToInternalToExternalMap.set(d,r);else{const h=e(r);if(!h)return void this._skippedIndexesFromExternal.push(a);let p=a;for(const m of this._skippedIndexesFromExternal)a>m&&p--;for(const m of t._skippedIndexesFromExternal)p>=m&&p++;this._bindToExternalToInternalMap.set(r,h),this._bindToInternalToExternalMap.set(h,r),this.add(h,p);for(let m=0;m<t._skippedIndexesFromExternal.length;m++)p<=t._skippedIndexesFromExternal[m]&&t._skippedIndexesFromExternal[m]++}};for(const i of t)n(0,i,t.getIndex(i));this.listenTo(t,"add",n),this.listenTo(t,"remove",(i,r,a)=>{const c=this._bindToExternalToInternalMap.get(r);c&&this.remove(c),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((d,h)=>(a<h&&d.push(h-1),a>h&&d.push(h),d),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new z("collection-add-invalid-id",this);if(this.get(n))throw new z("collection-add-item-already-exists",this)}else e[t]=n=Y();return n}_remove(e){let t,n,i,r=!1;const a=this._idProperty;if(typeof e=="string"?(n=e,i=this._itemMap.get(n),r=!i,i&&(t=this._items.indexOf(i))):typeof e=="number"?(t=e,i=this._items[t],r=!i,i&&(n=i[a])):(i=e,n=i[a],t=this._items.indexOf(i),r=t==-1||!this._itemMap.get(n)),r)throw new z("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const c=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(c),this.fire("remove",i,t),[i,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Ft(o){const e=o.next();return e.done?null:e.value}class Yt extends Sn($e()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new z("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class tn{constructor(){this._listener=new(Sn())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+wn(n),n)})}set(e,t,n={}){const i=ji(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(a,c)=>{t(c,()=>{c.preventDefault(),c.stopPropagation(),a.stop()}),a.return=!0},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+wn(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function S(o){return Rt(o)?new Map(o):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(o)}function k(o,e){let t;function n(...i){n.cancel(),t=setTimeout(()=>o(...i),e)}return n.cancel=()=>{clearTimeout(t)},n}function C(o,e){return!!(t=o.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(e));var t}function I(o,e){return!!(t=o.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const q=function(){const o=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],e=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+o.map(n=>n.source).join("|")+")";return new RegExp(`${e}|${t}(?:‍${t})*`,"ug")}();function ee(o,e){const t=String(o).matchAll(q);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class me extends po{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new z("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const i of e)n.delegate(i).to(t);this.on("add",(n,i)=>{for(const r of e)i.delegate(r).to(t)}),this.on("remove",(n,i)=>{for(const r of e)i.stopDelegating(r,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}remove(e){return super.remove(e)}}var Me=f(6062),oe=f.n(Me),ct=f(4793),Xs={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(ct.Z,Xs),ct.Z.locals;class xe extends Sn($e()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new po,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e,n.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=oi.bind(this,this)}createCollection(e){const t=new me(e);return this._viewCollections.add(t),t}registerChild(e){Rt(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){Rt(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new oi(e)}extendTemplate(e){oi.extend(this.template,e)}render(){if(this.isRendered)throw new z("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}class oi extends pe(){constructor(e){super(),Object.assign(this,Kk($k(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new z("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)au(n)?yield n:Op(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,i)=>new DE({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:i}),if:(n,i,r)=>new Gk({observable:e,emitter:t,attribute:n,valueIfTrue:i,callback:r})}}static extend(e,t){if(e._isRendered)throw new z("template-extend-render",[this,e]);Xk(e,Kk($k(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new z("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),su(this.text)?this._bindToObservable({schema:this.text,updater:SE(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,n=e.revertData;for(const i in this.attributes){const r=t.getAttribute(i),a=this.attributes[i];n&&(n.attributes[i]=r);const c=eb(a)?a[0].ns:null;if(su(a)){const d=eb(a)?a[0].value:a;n&&tb(i)&&d.unshift(r),this._bindToObservable({schema:d,updater:IE(t,i,c),data:e})}else if(i=="style"&&typeof a[0]!="string")this._renderStyleAttribute(a[0],e);else{n&&r&&tb(i)&&a.unshift(r);const d=a.map(h=>h&&h.value||h).reduce((h,p)=>h.concat(p),[]).reduce(Qk,"");dl(d)||t.setAttributeNS(c,i,d)}}}_renderStyleAttribute(e,t){const n=t.node;for(const i in e){const r=e[i];su(r)?this._bindToObservable({schema:[r],updater:TE(n,i),data:t}):n.style[i]=r}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,i=e.isApplying;let r=0;for(const a of this.children)if(Lp(a)){if(!i){a.setParent(t);for(const c of a)n.appendChild(c.element)}}else if(au(a))i||(a.isRendered||a.render(),n.appendChild(a.element));else if($t(a))n.appendChild(a);else if(i){const c={children:[],bindings:[],attributes:{}};e.revertData.children.push(c),a._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:c})}else n.appendChild(a.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(i=>{const[r,a]=t.split("@");return i.activateDomEventListener(r,a,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const i=n.revertData;Zk(e,t,n);const r=e.filter(a=>!dl(a)).filter(a=>a.observable).map(a=>a.activateAttributeListener(e,t,n));i&&i.bindings.push(r)}_revertTemplateFromNode(e,t){for(const i of t.bindings)for(const r of i)r();if(t.text)return void(e.textContent=t.text);const n=e;for(const i in t.attributes){const r=t.attributes[i];r===null?n.removeAttribute(i):n.setAttribute(i,r)}for(let i=0;i<t.children.length;++i)this._revertTemplateFromNode(n.childNodes[i],t.children[i])}}class Sc{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const i=()=>Zk(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,i),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,i)}}}class DE extends Sc{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){const i=(r,a)=>{t&&!a.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(a):this.observable.fire(this.eventNameOrFunction,a))};return this.emitter.listenTo(n.node,e,i),()=>{this.emitter.stopListening(n.node,e,i)}}}class Gk extends Sc{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!dl(super.getValue(e))&&(this.valueIfTrue||!0)}}function su(o){return!!o&&(o.value&&(o=o.value),Array.isArray(o)?o.some(su):o instanceof Sc)}function Zk(o,e,{node:t}){const n=function(r,a){return r.map(c=>c instanceof Sc?c.getValue(a):c)}(o,t);let i;i=o.length==1&&o[0]instanceof Gk?n[0]:n.reduce(Qk,""),dl(i)?e.remove():e.set(i)}function SE(o){return{set(e){o.textContent=e},remove(){o.textContent=""}}}function IE(o,e,t){return{set(n){o.setAttributeNS(t,e,n)},remove(){o.removeAttributeNS(t,e)}}}function TE(o,e){return{set(t){o.style[e]=t},remove(){o.style[e]=null}}}function $k(o){return Dn(o,e=>{if(e&&(e instanceof Sc||Op(e)||au(e)||Lp(e)))return e})}function Kk(o){if(typeof o=="string"?o=function(e){return{text:[e]}}(o):o.text&&function(e){e.text=pt(e.text)}(o),o.on&&(o.eventListeners=function(e){for(const t in e)Yk(e,t);return e}(o.on),delete o.on),!o.text){o.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=pt(t[n].value)),Yk(t,n)}(o.attributes);const e=[];if(o.children)if(Lp(o.children))e.push(o.children);else for(const t of o.children)Op(t)||au(t)||$t(t)?e.push(t):e.push(new oi(t));o.children=e}return o}function Yk(o,e){o[e]=pt(o[e])}function Qk(o,e){return dl(e)?o:dl(o)?e:`${o} ${e}`}function Jk(o,e){for(const t in e)o[t]?o[t].push(...e[t]):o[t]=e[t]}function Xk(o,e){if(e.attributes&&(o.attributes||(o.attributes={}),Jk(o.attributes,e.attributes)),e.eventListeners&&(o.eventListeners||(o.eventListeners={}),Jk(o.eventListeners,e.eventListeners)),e.text&&o.text.push(...e.text),e.children&&e.children.length){if(o.children.length!=e.children.length)throw new z("ui-template-extend-children-mismatch",o);let t=0;for(const n of e.children)Xk(o.children[t++],n)}}function dl(o){return!o&&o!==0}function au(o){return o instanceof xe}function Op(o){return o instanceof oi}function Lp(o){return o instanceof me}function eb(o){return We(o[0])&&o[0].ns}function tb(o){return o=="class"||o=="style"}class ME extends me{constructor(e,t=[]){super(t),this.locale=e}get bodyCollectionContainer(){return this._bodyCollectionContainer}attachToDom(){this._bodyCollectionContainer=new oi({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=Ci(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var nb=f(6574),BE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(nb.Z,BE),nb.Z.locals;const ob=class extends xe{constructor(){super();const o=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.set("isVisible",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon",o.if("isVisible","ck-hidden",e=>!e),"ck-reset_all-excluded",o.if("isColorInherited","ck-icon_inherit-color")],viewBox:o.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const o=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=o.getAttribute("viewBox");e&&(this.viewBox=e);for(const{name:t,value:n}of Array.from(o.attributes))ob.presentationalAttributeNames.includes(t)&&this.element.setAttribute(t,n);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;o.childNodes.length>0;)this.element.appendChild(o.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(o=>{o.style.fill=this.fillColor})}};let Jr=ob;Jr.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];class NE extends xe{constructor(){super(),this.set({style:void 0,text:void 0,id:void 0});const e=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:e.to("style"),id:e.to("id")},children:[{text:e.to("text")}]})}}var ib=f(4906),PE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(ib.Z,PE),ib.Z.locals;class nt extends xe{constructor(e,t=new NE){super(e),this._focusDelayed=null;const n=this.bindTemplate,i=Y();this.set("ariaLabel",void 0),this.set("ariaLabelledBy",`ck-editor__aria-label_${i}`),this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("role",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._setupLabelView(t),this.iconView=new Jr,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const r={tag:"button",attributes:{class:["ck","ck-button",n.to("class"),n.if("isEnabled","ck-disabled",a=>!a),n.if("isVisible","ck-hidden",a=>!a),n.to("isOn",a=>a?"ck-on":"ck-off"),n.if("withText","ck-button_with-text"),n.if("withKeystroke","ck-button_with-keystroke")],role:n.to("role"),type:n.to("type",a=>a||"button"),tabindex:n.to("tabindex"),"aria-label":n.to("ariaLabel"),"aria-labelledby":n.to("ariaLabelledBy"),"aria-disabled":n.if("isEnabled",!0,a=>!a),"aria-pressed":n.to("isOn",a=>!!this.isToggleable&&String(!!a)),"data-cke-tooltip-text":n.to("_tooltipString"),"data-cke-tooltip-position":n.to("tooltipPosition")},children:this.children,on:{click:n.to(a=>{this.isEnabled?this.fire("execute"):a.preventDefault()})}};D.isSafari&&(this._focusDelayed||(this._focusDelayed=k(()=>this.focus(),0)),r.on.mousedown=n.to(()=>{this._focusDelayed()}),r.on.mouseup=n.to(()=>{this._focusDelayed.cancel()})),this.setTemplate(r)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}destroy(){this._focusDelayed&&this._focusDelayed.cancel(),super.destroy()}_setupLabelView(e){return e.bind("text","style","id").to(this,"label","labelStyle","ariaLabelledBy"),e}_createKeystrokeView(){const e=new xe;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>Ct(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=Ct(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var rb=f(5332),OE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(rb.Z,OE),rb.Z.locals;class lu extends nt{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new xe;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}const zp='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';var sb=f(8010),LE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(sb.Z,LE),sb.Z.locals;class zE extends xe{constructor(e,t){super(e);const n=this.bindTemplate;this.set("isCollapsed",!1),this.set("label",""),this.buttonView=this._createButtonView(),this.children=this.createCollection(),this.set("_collapsibleAriaLabelUid",void 0),t&&this.children.addMany(t),this.setTemplate({tag:"div",attributes:{class:["ck","ck-collapsible",n.if("isCollapsed","ck-collapsible_collapsed")]},children:[this.buttonView,{tag:"div",attributes:{class:["ck","ck-collapsible__children"],role:"region",hidden:n.if("isCollapsed","hidden"),"aria-labelledby":n.to("_collapsibleAriaLabelUid")},children:this.children}]})}render(){super.render(),this._collapsibleAriaLabelUid=this.buttonView.labelView.element.id}focus(){this.buttonView.focus()}_createButtonView(){const e=new nt(this.locale),t=e.bindTemplate;return e.set({withText:!0,icon:zp}),e.extendTemplate({attributes:{"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("label").to(this),e.bind("isOn").to(this,"isCollapsed",n=>!n),e.on("execute",()=>{this.isCollapsed=!this.isCollapsed}),e}}var ab=f(6781),jE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(ab.Z,jE),ab.Z.locals,f(1103),f(841);var lb=f(3662),RE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(lb.Z,RE),lb.Z.locals;class jp extends xe{constructor(e){super(e),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${Y()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}var cb=f(2577),FE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(cb.Z,FE),cb.Z.locals;class cu extends xe{constructor(e,t){super(e);const n=`ck-labeled-field-view-${Y()}`,i=`ck-labeled-field-view-status-${Y()}`;this.fieldView=t(this,n,i),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(i),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(a,c)=>a||c);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",a=>!a),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(e){const t=new jp(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new xe(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",i=>!i)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(e){this.fieldView.focus(e)}}class VE extends xe{constructor(e){super(e),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new Yt,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0);const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}reset(){this.value=this.element.value="",this._updateIsEmpty()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}var db=f(4879),HE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(db.Z,HE),db.Z.locals;class UE extends VE{constructor(e){super(e),this.set("inputMode","text");const t=this.bindTemplate;this.extendTemplate({attributes:{inputmode:t.to("inputMode")}})}}class WE extends UE{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var ub=f(8182),qE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(ub.Z,qE),ub.Z.locals;class GE extends xe{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")],tabindex:"-1"},children:this.children,on:{selectstart:t.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(){if(this.children.length){const e=this.children.first;typeof e.focus=="function"?e.focus():re("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var hb=f(5485),ZE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(hb.Z,ZE),hb.Z.locals;const Rp=class extends xe{constructor(o,e,t){super(o);const n=this.bindTemplate;this.buttonView=e,this.panelView=t,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new tn,this.focusTracker=new Yt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",n.to("class"),n.if("isEnabled","ck-disabled",i=>!i)],id:n.to("id"),"aria-describedby":n.to("ariaDescribedById")},children:[e,t]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":n.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.on("change:isOpen",(e,t,n)=>{if(n)if(this.panelPosition==="auto"){const i=Rp._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=i?i.name:this._panelPositions[0].name}else this.panelView.position=this.panelPosition}),this.keystrokes.listenTo(this.element);const o=(e,t)=>{this.isOpen&&(this.isOpen=!1,t())};this.keystrokes.set("arrowdown",(e,t)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,t())}),this.keystrokes.set("arrowright",(e,t)=>{this.isOpen&&t()}),this.keystrokes.set("arrowleft",o),this.keystrokes.set("esc",o)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:o,north:e,southEast:t,southWest:n,northEast:i,northWest:r,southMiddleEast:a,southMiddleWest:c,northMiddleEast:d,northMiddleWest:h}=Rp.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[t,n,a,c,o,i,r,d,h,e]:[n,t,c,a,o,r,i,h,d,e]}};let Fp=Rp;Fp.defaultPanelPositions={south:(o,e)=>({top:o.bottom,left:o.left-(e.width-o.width)/2,name:"s"}),southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,e)=>({top:o.bottom,left:o.left-e.width+o.width,name:"sw"}),southMiddleEast:(o,e)=>({top:o.bottom,left:o.left-(e.width-o.width)/4,name:"sme"}),southMiddleWest:(o,e)=>({top:o.bottom,left:o.left-3*(e.width-o.width)/4,name:"smw"}),north:(o,e)=>({top:o.top-e.height,left:o.left-(e.width-o.width)/2,name:"n"}),northEast:(o,e)=>({top:o.top-e.height,left:o.left,name:"ne"}),northWest:(o,e)=>({top:o.top-e.height,left:o.left-e.width+o.width,name:"nw"}),northMiddleEast:(o,e)=>({top:o.top-e.height,left:o.left-(e.width-o.width)/4,name:"nme"}),northMiddleWest:(o,e)=>({top:o.top-e.height,left:o.left-3*(e.width-o.width)/4,name:"nmw"})},Fp._getOptimalPosition=yc;class $E extends nt{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",t=>String(t))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Jr;return e.content=zp,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}class No extends pe(){constructor(e){if(super(),this.focusables=e.focusables,this.focusTracker=e.focusTracker,this.keystrokeHandler=e.keystrokeHandler,this.actions=e.actions,e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const i of n)e.keystrokeHandler.set(i,(r,a)=>{this[t](),a()})}this.on("forwardCycle",()=>this.focusFirst(),{priority:"low"}),this.on("backwardCycle",()=>this.focusLast(),{priority:"low"})}get first(){return this.focusables.find(Vp)||null}get last(){return this.focusables.filter(Vp).slice(-1)[0]||null}get next(){return this._getDomFocusableItem(1)}get previous(){return this._getDomFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const i=t.element===this.focusTracker.focusedElement;return i&&(e=n),i}),e)}focusFirst(){this._focus(this.first,1)}focusLast(){this._focus(this.last,-1)}focusNext(){const e=this.next;e&&this.focusables.getIndex(e)===this.current||e===this.first?this.fire("forwardCycle"):this._focus(e,1)}focusPrevious(){const e=this.previous;e&&this.focusables.getIndex(e)===this.current||e===this.last?this.fire("backwardCycle"):this._focus(e,-1)}_focus(e,t){e&&this.focusTracker.focusedElement!==e.element&&e.focus(t)}_getDomFocusableItem(e){const t=this.focusables.length;if(!t)return null;const n=this.current;if(n===null)return this[e===1?"first":"last"];let i=this.focusables.get(n),r=(n+t+e)%t;do{const a=this.focusables.get(r);if(Vp(a)){i=a;break}r=(r+t+e)%t}while(r!==n);return i}}function Vp(o){return Ic(o)&&cr(o.element)}function Ic(o){return!(!("focus"in o)||typeof o.focus!="function")}class pb extends xe{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class KE extends xe{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}var YE=Object.defineProperty,gb=Object.getOwnPropertySymbols,QE=Object.prototype.hasOwnProperty,JE=Object.prototype.propertyIsEnumerable,mb=(o,e,t)=>e in o?YE(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,fb=(o,e)=>{for(var t in e||(e={}))QE.call(e,t)&&mb(o,t,e[t]);if(gb)for(var t of gb(e))JE.call(e,t)&&mb(o,t,e[t]);return o};function kb(o){if(Array.isArray(o))return{items:o,removeItems:[]};const e={items:[],removeItems:[]};return o?fb(fb({},e),o):e}class ce extends $e(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",bb,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",bb),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function bb(o){o.return=!1,o.stop()}class je extends $e(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const n=e.model.document.selection,i=n.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(n);(e.isReadOnly||this._isEnabledBasedOnSelection&&!i)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",wb,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",wb),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function wb(o){o.return=!1,o.stop()}class vb extends je{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){ue(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class Ab extends pe(){constructor(e,t=[],n=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const i of t)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new z("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const i=this,r=this._context;(function x(T,L=new Set){T.forEach(j=>{d(j)&&(L.has(j)||(L.add(j),j.pluginName&&!i._availablePlugins.has(j.pluginName)&&i._availablePlugins.set(j.pluginName,j),j.requires&&x(j.requires,L)))})})(e),w(e);const a=[...function x(T,L=new Set){return T.map(j=>d(j)?j:i._availablePlugins.get(j)).reduce((j,Z)=>L.has(Z)?j:(L.add(Z),Z.requires&&(w(Z.requires,Z),x(Z.requires,L).forEach(K=>j.add(K))),j.add(Z)),new Set)}(e.filter(x=>!p(x,t)))];(function(x,T){for(const L of T){if(typeof L!="function")throw new z("plugincollection-replace-plugin-invalid-type",null,{pluginItem:L});const j=L.pluginName;if(!j)throw new z("plugincollection-replace-plugin-missing-name",null,{pluginItem:L});if(L.requires&&L.requires.length)throw new z("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:j});const Z=i._availablePlugins.get(j);if(!Z)throw new z("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:j});const K=x.indexOf(Z);if(K===-1){if(i._contextPlugins.has(Z))return;throw new z("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:j})}if(Z.requires&&Z.requires.length)throw new z("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:j});x.splice(K,1,L),i._availablePlugins.set(j,L)}})(a,n);const c=a.map(x=>{let T=i._contextPlugins.get(x);return T=T||new x(r),i._add(x,T),T});return _(c,"init").then(()=>_(c,"afterInit")).then(()=>c);function d(x){return typeof x=="function"}function h(x){return d(x)&&!!x.isContextPlugin}function p(x,T){return T.some(L=>L===x||m(x)===L||m(L)===x)}function m(x){return d(x)?x.pluginName||x.name:x}function w(x,T=null){x.map(L=>d(L)?L:i._availablePlugins.get(L)||L).forEach(L=>{(function(j,Z){if(!d(j))throw Z?new z("plugincollection-soft-required",r,{missingPlugin:j,requiredBy:m(Z)}):new z("plugincollection-plugin-not-found",r,{plugin:j})})(L,T),function(j,Z){if(h(Z)&&!h(j))throw new z("plugincollection-context-required",r,{plugin:m(j),requiredBy:m(Z)})}(L,T),function(j,Z){if(Z&&p(j,t))throw new z("plugincollection-required",r,{plugin:m(j),requiredBy:m(Z)})}(L,T)})}function _(x,T){return x.reduce((L,j)=>j[T]?i._contextPlugins.has(j)?L:L.then(j[T].bind(j)):L,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new z("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class Cb{constructor(e){this._contextOwner=null,this.config=new Gt(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new Ab(this,t);const n=this.config.get("language")||{};this.locale=new Pp({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new po}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new z("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new z("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new z("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class du extends $e(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class XE extends tn{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const i=t;t=(r,a)=>{this.editor.execute(i),a()}}super.set(e,t,n)}}var _b=f(4717),e5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(_b.Z,e5),_b.Z.locals;const uu=new WeakMap;let yb=!1;function xb({view:o,element:e,text:t,isDirectHost:n=!0,keepOnFocus:i=!1}){const r=o.document;function a(c){uu.get(r).set(e,{text:c,isDirectHost:n,keepOnFocus:i,hostElement:n?e:null}),o.change(d=>Hp(r,d))}uu.has(r)||(uu.set(r,new Map),r.registerPostFixer(c=>Hp(r,c)),r.on("change:isComposing",()=>{o.change(c=>Hp(r,c))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(c,d,h)=>{a(h)}),e.placeholder?a(e.placeholder):t&&a(t),t&&function(){yb||re("enableplaceholder-deprecated-text-option"),yb=!0}()}function t5(o,e){return!!e.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",e),!0)}function Hp(o,e){const t=uu.get(o),n=[];let i=!1;for(const[r,a]of t)a.isDirectHost&&(n.push(r),Eb(e,r,a)&&(i=!0));for(const[r,a]of t){if(a.isDirectHost)continue;const c=n5(r);c&&(n.includes(c)||(a.hostElement=c,Eb(e,r,a)&&(i=!0)))}return i}function Eb(o,e,t){const{text:n,isDirectHost:i,hostElement:r}=t;let a=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),a=!0),(i||e.childCount==1)&&function(c,d){if(!c.isAttached()||Array.from(c.getChildren()).some(m=>!m.is("uiElement")))return!1;const h=c.document,p=h.selection.anchor;return!(h.isComposing&&p&&p.parent===c||!d&&h.isFocused&&(!p||p.parent===c))}(r,t.keepOnFocus)?function(c,d){return!d.hasClass("ck-placeholder")&&(c.addClass("ck-placeholder",d),!0)}(o,r)&&(a=!0):t5(o,r)&&(a=!0),a}function n5(o){if(o.childCount){const e=o.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class ea{is(){throw new Error("is() method is abstract")}}const Db=function(o){return Qn(o,4)};class ta extends pe(ea){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new z("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=Ie(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Db(this);return delete e.parent,e}}ta.prototype.is=function(o){return o==="node"||o==="view:node"};class dt extends ta{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof dt&&(this===e||this.data===e.data)}_clone(){return new dt(this.document,this.data)}}dt.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class Ri extends ea{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new z("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new z("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}Ri.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class ii{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const i=Sb(t,n);if(i)return{element:t,pattern:n,match:i}}return null}matchAll(...e){const t=[];for(const n of e)for(const i of this._patterns){const r=Sb(n,i);r&&t.push({element:n,pattern:i,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Sb(o,e){if(typeof e=="function")return e(o);const t={};return e.name&&(t.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(e.name,o.name),!t.name)||e.attributes&&(t.attributes=function(n,i){const r=new Set(i.getAttributeKeys());return vt(n)?(n.style!==void 0&&re("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&re("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),Up(n,r,a=>i.getAttribute(a))}(e.attributes,o),!t.attributes)||e.classes&&(t.classes=function(n,i){return Up(n,i.getClassNames(),()=>{})}(e.classes,o),!t.classes)||e.styles&&(t.styles=function(n,i){return Up(n,i.getStyleNames(!0),r=>i.getStyle(r))}(e.styles,o),!t.styles)?null:t}function Up(o,e,t){const n=function(a){return Array.isArray(a)?a.map(c=>vt(c)?(c.key!==void 0&&c.value!==void 0||re("matcher-pattern-missing-key-or-value",c),[c.key,c.value]):[c,!0]):vt(a)?Object.entries(a):[[a,!0]]}(o),i=Array.from(e),r=[];if(n.forEach(([a,c])=>{i.forEach(d=>{(function(h,p){return h===!0||h===p||h instanceof RegExp&&p.match(h)})(a,d)&&function(h,p,m){if(h===!0)return!0;const w=m(p);return h===w||h instanceof RegExp&&!!String(w).match(h)}(c,d,t)&&r.push(d)})}),n.length&&!(r.length<n.length))return r}const hu=function(o){return typeof o=="symbol"||wt(o)&&co(o)=="[object Symbol]"};var o5=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i5=/^\w*$/;const r5=function(o,e){if(Mt(o))return!1;var t=typeof o;return!(t!="number"&&t!="symbol"&&t!="boolean"&&o!=null&&!hu(o))||i5.test(o)||!o5.test(o)||e!=null&&o in Object(e)};function Wp(o,e){if(typeof o!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],r=t.cache;if(r.has(i))return r.get(i);var a=o.apply(this,n);return t.cache=r.set(i,a)||r,a};return t.cache=new(Wp.Cache||Jo),t}Wp.Cache=Jo;const s5=Wp,a5=function(o){var e=s5(o,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e};var l5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c5=/\\(\\)?/g,d5=a5(function(o){var e=[];return o.charCodeAt(0)===46&&e.push(""),o.replace(l5,function(t,n,i,r){e.push(i?r.replace(c5,"$1"):n||t)}),e});const u5=d5,h5=function(o,e){for(var t=-1,n=o==null?0:o.length,i=Array(n);++t<n;)i[t]=e(o[t],t,o);return i};var Ib=Wt?Wt.prototype:void 0,Tb=Ib?Ib.toString:void 0;const p5=function o(e){if(typeof e=="string")return e;if(Mt(e))return h5(e,o)+"";if(hu(e))return Tb?Tb.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},qp=function(o){return o==null?"":p5(o)},Gp=function(o,e){return Mt(o)?o:r5(o,e)?[o]:u5(qp(o))},g5=function(o){var e=o==null?0:o.length;return e?o[e-1]:void 0},Zp=function(o){if(typeof o=="string"||hu(o))return o;var e=o+"";return e=="0"&&1/o==-1/0?"-0":e},Mb=function(o,e){for(var t=0,n=(e=Gp(e,o)).length;o!=null&&t<n;)o=o[Zp(e[t++])];return t&&t==n?o:void 0},Bb=function(o,e,t){var n=-1,i=o.length;e<0&&(e=-e>i?0:i+e),(t=t>i?i:t)<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+e];return r},m5=function(o,e){return e.length<2?o:Mb(o,Bb(e,0,-1))},f5=function(o,e){return e=Gp(e,o),(o=m5(o,e))==null||delete o[Zp(g5(e))]},k5=function(o,e){return o==null||f5(o,e)},pu=function(o,e,t){var n=o==null?void 0:Mb(o,e);return n===void 0?t:n},$p=function(o,e,t){(t!==void 0&&!xi(o[e],t)||t===void 0&&!(e in o))&&Lr(o,e,t)},b5=function(o){return function(e,t,n){for(var i=-1,r=Object(e),a=n(e),c=a.length;c--;){var d=a[o?c:++i];if(t(r[d],d,r)===!1)break}return e}}(),w5=function(o){return wt(o)&&Bi(o)},Kp=function(o,e){if((e!=="constructor"||typeof o[e]!="function")&&e!="__proto__")return o[e]},v5=function(o){return Si(o,Ni(o))},A5=function(o,e,t,n,i,r,a){var c=Kp(o,t),d=Kp(e,t),h=a.get(d);if(h)$p(o,t,h);else{var p=r?r(c,d,t+"",o,e,a):void 0,m=p===void 0;if(m){var w=Mt(d),_=!w&&Xo(d),x=!w&&!_&&jr(d);p=d,w||_||x?Mt(c)?p=c:w5(c)?p=Xa(c):_?(m=!1,p=zn(d,!0)):x?(m=!1,p=Ys(d,!0)):p=[]:vt(d)||Ps(d)?(p=c,Ps(c)?p=v5(c):We(c)&&!Do(c)||(p=$(d))):m=!1}m&&(a.set(d,p),i(p,d,n,r,a),a.delete(d)),$p(o,t,p)}},C5=function o(e,t,n,i,r){e!==t&&b5(t,function(a,c){if(r||(r=new tr),We(a))A5(e,t,c,n,o,i,r);else{var d=i?i(Kp(e,c),a,c+"",e,t,r):void 0;d===void 0&&(d=a),$p(e,c,d)}},Ni)},na=function(o){return o},_5=function(o,e,t){switch(t.length){case 0:return o.call(e);case 1:return o.call(e,t[0]);case 2:return o.call(e,t[0],t[1]);case 3:return o.call(e,t[0],t[1],t[2])}return o.apply(e,t)};var Nb=Math.max;const y5=function(o,e,t){return e=Nb(e===void 0?o.length-1:e,0),function(){for(var n=arguments,i=-1,r=Nb(n.length-e,0),a=Array(r);++i<r;)a[i]=n[e+i];i=-1;for(var c=Array(e+1);++i<e;)c[i]=n[i];return c[e]=t(a),_5(o,this,c)}},x5=function(o){return function(){return o}},E5=nr?function(o,e){return nr(o,"toString",{configurable:!0,enumerable:!1,value:x5(e),writable:!0})}:na;var D5=Date.now;const S5=function(o){var e=0,t=0;return function(){var n=D5(),i=16-(n-t);if(t=n,i>0){if(++e>=800)return arguments[0]}else e=0;return o.apply(void 0,arguments)}}(E5),I5=function(o,e){return S5(y5(o,e,na),o+"")},T5=function(o,e,t){if(!We(t))return!1;var n=typeof e;return!!(n=="number"?Bi(t)&&ir(e,t.length):n=="string"&&e in t)&&xi(t[e],o)},Pb=function(o){return I5(function(e,t){var n=-1,i=t.length,r=i>1?t[i-1]:void 0,a=i>2?t[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,a&&T5(t[0],t[1],a)&&(r=i<3?void 0:r,i=1),e=Object(e);++n<i;){var c=t[n];c&&o(e,c,n,r)}return e})},Ob=Pb(function(o,e,t){C5(o,e,t)}),M5=function(o,e,t,n){if(!We(o))return o;for(var i=-1,r=(e=Gp(e,o)).length,a=r-1,c=o;c!=null&&++i<r;){var d=Zp(e[i]),h=t;if(d==="__proto__"||d==="constructor"||d==="prototype")return o;if(i!=a){var p=c[d];(h=n?n(p,d,c):void 0)===void 0&&(h=We(p)?p:ir(e[i+1])?[]:{})}Bs(c,d,h),c=c[d]}return o},B5=function(o,e,t){return o==null?o:M5(o,e,t)};class N5{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=function(n){let i=null,r=0,a=0,c=null;const d=new Map;if(n==="")return d;n.charAt(n.length-1)!=";"&&(n+=";");for(let h=0;h<n.length;h++){const p=n.charAt(h);if(i===null)switch(p){case":":c||(c=n.substr(r,h-r),a=h+1);break;case'"':case"'":i=p;break;case";":{const m=n.substr(a,h-a);c&&d.set(c.trim(),m.trim()),c=null,r=h+1;break}}else p===i&&(i=null)}return d}(e);for(const[n,i]of t)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(We(e))for(const[n,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Yp(e);k5(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!We(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),i=pu(this._styles,n);i&&!Object.keys(i).length&&this.remove(n)}}class P5{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(We(t))Qp(n,Yp(e),t);else if(this._normalizers.has(e)){const i=this._normalizers.get(e),{path:r,value:a}=i(t);Qp(n,r,a)}else Qp(n,e,t)}getNormalized(e,t){if(!e)return Ob({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return pu(t,n);const i=n(e,t);if(i)return i}return pu(t,Yp(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(i=>{const r=this.getNormalized(i,e);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...t,...Object.keys(e)]);return Array.from(n)}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Yp(o){return o.replace("-",".")}function Qp(o,e,t){let n=t;We(t)&&(n=Ob({},pu(o,e),t)),B5(o,e,n)}class go extends ta{constructor(e,t,n,i){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(r){const a=S(r);for(const[c,d]of a)d===null?a.delete(c):typeof d!="string"&&a.set(c,String(d));return a}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");Lb(this._classes,r),this._attrs.delete("class")}this._styles=new N5(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof go))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new ii(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(r,a){return typeof a=="string"?[new dt(r,a)]:(Rt(a)||(a=[a]),Array.from(a).map(c=>typeof c=="string"?new dt(r,c):c instanceof Ri?new dt(r,c.data):c))}(this.document,t);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?Lb(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of pt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of pt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of pt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Lb(o,e){const t=e.split(/\s+/);o.clear(),t.forEach(n=>o.add(n))}go.prototype.is=function(o,e){return e?e===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Tc extends go{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=O5}}function O5(){const o=[...this.getChildren()],e=o[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of o)if(!t.is("uiElement"))return null;return this.childCount}Tc.prototype.is=function(o,e){return e?e===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class gu extends $e(Tc){constructor(e,t,n,i){super(e,t,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",r=>r&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}gu.prototype.is=function(o,e){return e?e===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const zb=Symbol("rootName");class jb extends gu{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(zb)}set rootName(e){this._setCustomProperty(zb,e)}set _name(e){this.name=e}}jb.prototype.is=function(o,e){return e?e===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class oa{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new z("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new z("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=he._createAt(e.startPosition):this._position=he._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,n;do n=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof dt){if(e.isAtEnd)return this._position=he._createAfter(n),this._next();i=n.data[e.offset]}else i=n.getChild(e.offset);if(i instanceof go){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new he(i,0);return this._position=e,this._formatReturnValue("elementStart",i,t,e,1)}if(i instanceof dt){if(this.singleCharacters)return e=new he(i,0),this._position=e,this._next();let r,a=i.data.length;return i==this._boundaryEndParent?(a=this.boundaries.end.offset,r=new Ri(i,0,a),e=he._createAfter(r)):(r=new Ri(i,0,i.data.length),e.offset++),this._position=e,this._formatReturnValue("text",r,t,e,a)}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const a=new Ri(n,e.offset,r);return e.offset+=r,this._position=e,this._formatReturnValue("text",a,t,e,r)}return e=he._createAfter(n),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof dt){if(e.isAtStart)return this._position=he._createBefore(n),this._previous();i=n.data[e.offset-1]}else i=n.getChild(e.offset-1);if(i instanceof go)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",i,t,e,1)):(e=new he(i,i.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,t,e));if(i instanceof dt){if(this.singleCharacters)return e=new he(i,i.data.length),this._position=e,this._previous();let r,a=i.data.length;if(i==this._boundaryStartParent){const c=this.boundaries.start.offset;r=new Ri(i,c,i.data.length-c),a=r.data.length,e=he._createBefore(r)}else r=new Ri(i,0,i.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",r,t,e,a)}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const c=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-c}e.offset-=r;const a=new Ri(n,e.offset,r);return this._position=e,this._formatReturnValue("text",a,t,e,r)}return e=he._createBefore(n),this._position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,i,r){return t instanceof Ri&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=he._createAfter(t.textNode):(i=he._createAfter(t.textNode),this._position=i)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=he._createBefore(t.textNode):(i=he._createBefore(t.textNode),this._position=i))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:i,length:r}}}}class he extends ea{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof gu);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=he._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new oa(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const i=Ie(t,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return t[i]<n[i]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new oa(e)}clone(){return new he(this.parent,this.offset)}static _createAt(e,t){if(e instanceof he)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new z("view-createpositionat-offset-required",n)}return new he(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new he(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new z("view-position-after-root",e,{root:e});return new he(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new he(e.textNode,e.offsetInText);if(!e.parent)throw new z("view-position-before-root",e,{root:e});return new he(e.parent,e.index)}}he.prototype.is=function(o){return o==="position"||o==="view:position"};class De extends ea{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new oa({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(mu,{direction:"backward"}),t=this.end.getLastMatchingPosition(mu);return e.parent.is("$text")&&e.isAtStart&&(e=he._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=he._createAfter(t.parent)),new De(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(mu);if(e.isAfter(this.end)||e.isEqual(this.end))return new De(e,e);let t=this.end.getLastMatchingPosition(mu,{direction:"backward"});const n=e.nodeAfter,i=t.nodeBefore;return n&&n.is("$text")&&(e=new he(n,0)),i&&i.is("$text")&&(t=new he(i,i.data.length)),new De(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new De(this.start,e.start)),this.containsPosition(e.end)&&t.push(new De(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new De(t,n)}return null}getWalker(e={}){return e.boundaries=this,new oa(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new De(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new oa(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new oa(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,i){return new this(new he(e,t),new he(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(he._createBefore(e),t)}}function mu(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}De.prototype.is=function(o){return o==="range"||o==="view:range"};class ri extends pe(ea){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Tt(this.getRanges());if(t!=Tt(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of e.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,i]=e;if(typeof n=="object"&&(i=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(i);else if(t instanceof ri||t instanceof Jp)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof De)this._setRanges([t],i&&i.backward),this._setFakeOptions(i);else if(t instanceof he)this._setRanges([new De(t)]),this._setFakeOptions(i);else if(t instanceof ta){const r=!!i&&!!i.backward;let a;if(n===void 0)throw new z("view-selection-setto-required-second-parameter",this);a=n=="in"?De._createIn(t):n=="on"?De._createOn(t):new De(he._createAt(t,n)),this._setRanges([a],r),this._setFakeOptions(i)}else{if(!Rt(t))throw new z("view-selection-setto-not-selectable",this);this._setRanges(t,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new z("view-selection-setfocus-no-ranges",this);const n=he._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new De(n,i),!0):this._addRange(new De(i,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof De))throw new z("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new z("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new De(e.start,e.end))}}ri.prototype.is=function(o){return o==="selection"||o==="view:selection"};class Jp extends pe(ea){constructor(...e){super(),this._selection=new ri,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Jp.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class ul extends R{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Xp=Symbol("bubbling contexts");function eg(o){return class extends o{fire(e,...t){try{const n=e instanceof R?e:new R(this,e),i=tg(this);if(!i.size)return;if(Mc(n,"capturing",this),hl(i,"$capture",n,...t))return n.return;const r=n.startRange||this.selection.getFirstRange(),a=r?r.getContainedElement():null,c=!!a&&!!Rb(i,a);let d=a||function(h){if(!h)return null;const p=h.start.parent,m=h.end.parent,w=p.getPath(),_=m.getPath();return w.length>_.length?p:m}(r);if(Mc(n,"atTarget",d),!c){if(hl(i,"$text",n,...t))return n.return;Mc(n,"bubbling",d)}for(;d;){if(d.is("rootElement")){if(hl(i,"$root",n,...t))return n.return}else if(d.is("element")&&hl(i,d.name,n,...t))return n.return;if(hl(i,d,n,...t))return n.return;d=d.parent,Mc(n,"bubbling",d)}return Mc(n,"bubbling",this),hl(i,"$document",n,...t),n.return}catch(n){z.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const i=pt(n.context||"$document"),r=tg(this);for(const a of i){let c=r.get(a);c||(c=new(pe()),r.set(a,c)),this.listenTo(c,e,t,n)}}_removeEventListener(e,t){const n=tg(this);for(const i of n.values())this.stopListening(i,e,t)}}}{const o=eg(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{eg[e]=o.prototype[e]})}function Mc(o,e,t){o instanceof ul&&(o._eventPhase=e,o._currentTarget=t)}function hl(o,e,t,...n){const i=typeof e=="string"?o.get(e):Rb(o,e);return!!i&&(i.fire(t,...n),t.stop.called)}function Rb(o,e){for(const[t,n]of o)if(typeof t=="function"&&t(e))return n;return null}function tg(o){return o[Xp]||(o[Xp]=new Map),o[Xp]}class fu extends eg($e()){constructor(e){super(),this._postFixers=new Set,this.selection=new Jp,this.roots=new po({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.forEach(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class ia extends go{constructor(e,t,n,i){super(e,t,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=L5}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new z("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function L5(){if(ng(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(ng(o)>1)return null;o=o.parent}return!o||ng(o)>1?null:this.childCount}function ng(o){return Array.from(o.getChildren()).filter(e=>!e.is("uiElement")).length}ia.DEFAULT_PRIORITY=10,ia.prototype.is=function(o,e){return e?e===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class og extends go{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=z5}_insertChild(e,t){if(t&&(t instanceof ta||Array.from(t).length>0))throw new z("view-emptyelement-cannot-add",[this,t]);return 0}}function z5(){return null}og.prototype.is=function(o,e){return e?e===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ku extends go{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=R5}_insertChild(e,t){if(t&&(t instanceof ta||Array.from(t).length>0))throw new z("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function j5(o){o.document.on("arrowKey",(e,t)=>function(n,i,r){if(i.keyCode==qe.arrowright){const a=i.domTarget.ownerDocument.defaultView.getSelection(),c=a.rangeCount==1&&a.getRangeAt(0).collapsed;if(c||i.shiftKey){const d=a.focusNode,h=a.focusOffset,p=r.domPositionToView(d,h);if(p===null)return;let m=!1;const w=p.getLastMatchingPosition(_=>(_.item.is("uiElement")&&(m=!0),!(!_.item.is("uiElement")&&!_.item.is("attributeElement"))));if(m){const _=r.viewPositionToDom(w);c?a.collapse(_.parent,_.offset):a.extend(_.parent,_.offset)}}}}(0,t,o.domConverter),{priority:"low"})}function R5(){return null}ku.prototype.is=function(o,e){return e?e===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ig extends go{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=F5}_insertChild(e,t){if(t&&(t instanceof ta||Array.from(t).length>0))throw new z("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function F5(){return null}ig.prototype.is=function(o,e){return e?e===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ra extends pe(ea){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(r,a){return typeof a=="string"?[new dt(r,a)]:(Rt(a)||(a=[a]),Array.from(a).map(c=>typeof c=="string"?new dt(r,c):c instanceof Ri?new dt(r,c.data):c))}(this.document,t);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}ra.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class Fb{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new ra(this.document,e)}createText(e){return new dt(this.document,e)}createAttributeElement(e,t,n={}){const i=new ia(this.document,e,t);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(e,t,n={},i={}){let r=null;vt(n)?i=n:r=n;const a=new Tc(this.document,e,t,r);return i.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),a}createEditableElement(e,t,n={}){const i=new gu(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(e,t,n={}){const i=new og(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(e,t,n){const i=new ku(this.document,e,t);return n&&(i.render=n),i}createRawElement(e,t,n,i={}){const r=new ig(this.document,e,t);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){vt(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof he?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new z("view-writer-break-non-container-element",this.document);if(!t.parent)throw new z("view-writer-break-root",this.document);if(e.isAtStart)return he._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(he._createAfter(t),n);const i=new De(e,he._createAt(t,"end")),r=new he(n,0);this.move(i,r)}return he._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const a=n.parent,c=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new he(a,c))}const i=n.getChild(t-1),r=n.getChild(t);if(!i||!r)return e;if(i.is("$text")&&r.is("$text"))return Hb(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const a=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new he(i,a))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new z("view-writer-merge-containers-invalid-position",this.document);const i=t.getChild(t.childCount-1),r=i instanceof dt?he._createAt(i,"end"):he._createAt(t,"end");return this.move(De._createIn(n),he._createAt(t,"end")),this.remove(De._createOn(n)),r}insert(e,t){Ub(t=Rt(t)?[...t]:[t],this.document);const n=t.reduce((a,c)=>{const d=a[a.length-1],h=!c.is("uiElement");return d&&d.breakAttributes==h?d.nodes.push(c):a.push({breakAttributes:h,nodes:[c]}),a},[]);let i=null,r=e;for(const{nodes:a,breakAttributes:c}of n){const d=this._insertNodes(r,a,c);i||(i=d.start),r=d.end}return i?new De(i,r):new De(e)}remove(e){const t=e instanceof De?e:De._createOn(e);if(Bc(t,this.document),t.isCollapsed)return new ra(this.document);const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,a=i.offset-n.offset,c=r._removeChildren(n.offset,a);for(const h of c)this._removeFromClonedElementsGroup(h);const d=this.mergeAttributes(n);return t.start=d,t.end=d.clone(),new ra(this.document,c)}clear(e,t){Bc(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let a;if(r.is("element")&&t.isSimilar(r))a=De._createOn(r);else if(!i.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const c=r.getAncestors().find(d=>d.is("element")&&t.isSimilar(d));c&&(a=De._createIn(c))}a&&(a.end.isAfter(e.end)&&(a.end=e.end),a.start.isBefore(e.start)&&(a.start=e.start),this.remove(a))}}move(e,t){let n;if(t.isAfter(e.end)){const i=(t=this._breakAttributes(t,!0)).parent,r=i.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=i.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof ia))throw new z("view-writer-wrap-invalid-attribute",this.document);if(Bc(e,this.document),e.isCollapsed){let i=e.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(a=>!a.is("uiElement")))&&(i=i.getLastMatchingPosition(a=>a.item.is("uiElement"))),i=this._wrapPosition(i,t);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(e.start)&&this.setSelection(i),new De(i)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof ia))throw new z("view-writer-unwrap-invalid-attribute",this.document);if(Bc(e,this.document),e.isCollapsed)return e;const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,a=this._unwrapChildren(r,n.offset,i.offset,t),c=this.mergeAttributes(a.start);c.isEqual(a.start)||a.end.offset--;const d=this.mergeAttributes(a.end);return new De(c,d)}rename(e,t){const n=new Tc(this.document,e,t.getAttributes());return this.insert(he._createAfter(t),n),this.move(De._createIn(t),he._createAt(n,0)),this.remove(De._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return he._createAt(e,t)}createPositionAfter(e){return he._createAfter(e)}createPositionBefore(e){return he._createBefore(e)}createRange(e,t){return new De(e,t)}createRangeOn(e){return De._createOn(e)}createRangeIn(e){return De._createIn(e)}createSelection(...e){return new ri(...e)}createSlot(e="children"){if(!this._slotFactory)throw new z("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let i,r;if(i=n?rg(e):e.parent.is("$text")?e.parent.parent:e.parent,!i)throw new z("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(e,!0):e.parent.is("$text")?sg(e):e;const a=i._insertChild(r.offset,t);for(const p of t)this._addToClonedElementsGroup(p);const c=r.getShiftedBy(a),d=this.mergeAttributes(r);d.isEqual(r)||c.offset--;const h=this.mergeAttributes(c);return new De(d,h)}_wrapChildren(e,t,n,i){let r=t;const a=[];for(;r<n;){const d=e.getChild(r),h=d.is("$text"),p=d.is("attributeElement");if(p&&this._wrapAttributeElement(i,d))a.push(new he(e,r));else if(h||!p||V5(i,d)){const m=i._clone();d._remove(),m._appendChild(d),e._insertChild(r,m),this._addToClonedElementsGroup(m),a.push(new he(e,r))}else this._wrapChildren(d,0,d.childCount,i);r++}let c=0;for(const d of a)d.offset-=c,d.offset!=t&&(this.mergeAttributes(d).isEqual(d)||(c++,n--));return De._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,i){let r=t;const a=[];for(;r<n;){const d=e.getChild(r);if(d.is("attributeElement"))if(d.isSimilar(i)){const h=d.getChildren(),p=d.childCount;d._remove(),e._insertChild(r,h),this._removeFromClonedElementsGroup(d),a.push(new he(e,r),new he(e,r+p)),r+=p,n+=p-1}else this._unwrapAttributeElement(i,d)?(a.push(new he(e,r),new he(e,r+1)),r++):(this._unwrapChildren(d,0,d.childCount,i),r++);else r++}let c=0;for(const d of a)d.offset-=c,!(d.offset==t||d.offset==n)&&(this.mergeAttributes(d).isEqual(d)||(c++,n--));return De._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,a=this._wrapChildren(r,n.offset,i.offset,t),c=this.mergeAttributes(a.start);c.isEqual(a.start)||a.end.offset--;const d=this.mergeAttributes(a.end);return new De(c,d)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Vb(e.clone());e.parent.is("$text")&&(e=sg(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const i=new De(e,e.getShiftedBy(1));this.wrap(i,t);const r=new he(n.parent,n.index);n._remove();const a=r.nodeBefore,c=r.nodeAfter;return a instanceof dt&&c instanceof dt?Hb(a,c):Vb(r)}_wrapAttributeElement(e,t){if(!Wb(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Wb(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,i=e.end;if(Bc(e,this.document),e.isCollapsed){const d=this._breakAttributes(e.start,t);return new De(d,d)}const r=this._breakAttributes(i,t),a=r.parent.childCount,c=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-a,new De(c,r)}_breakAttributes(e,t=!1){const n=e.offset,i=e.parent;if(e.parent.is("emptyElement"))throw new z("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new z("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new z("view-writer-cannot-break-raw-element",this.document);if(!t&&i.is("$text")&&ag(i.parent)||ag(i))return e.clone();if(i.is("$text"))return this._breakAttributes(sg(e),t);if(n==i.childCount){const r=new he(i.parent,i.index+1);return this._breakAttributes(r,t)}if(n===0){const r=new he(i.parent,i.index);return this._breakAttributes(r,t)}{const r=i.index+1,a=i._clone();i.parent._insertChild(r,a),this._addToClonedElementsGroup(a);const c=i.childCount-n,d=i._removeChildren(n,c);a._appendChild(d);const h=new he(i.parent,r);return this._breakAttributes(h,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const i of e.getChildren())this._addToClonedElementsGroup(i);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const i of e.getChildren())this._removeFromClonedElementsGroup(i);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function rg(o){let e=o.parent;for(;!ag(e);){if(!e)return;e=e.parent}return e}function V5(o,e){return o.priority<e.priority||!(o.priority>e.priority)&&o.getIdentity()<e.getIdentity()}function Vb(o){const e=o.nodeBefore;if(e&&e.is("$text"))return new he(e,e.data.length);const t=o.nodeAfter;return t&&t.is("$text")?new he(t,0):o}function sg(o){if(o.offset==o.parent.data.length)return new he(o.parent.parent,o.parent.index+1);if(o.offset===0)return new he(o.parent.parent,o.parent.index);const e=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new dt(o.root.document,e)),new he(o.parent.parent,o.parent.index+1)}function Hb(o,e){const t=o.data.length;return o._data+=e.data,e._remove(),new he(o,t)}const H5=[dt,ia,Tc,og,ig,ku];function Ub(o,e){for(const t of o){if(!H5.some(n=>t instanceof n))throw new z("view-writer-insert-invalid-node-type",e);t.is("$text")||Ub(t.getChildren(),e)}}function ag(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function Bc(o,e){const t=rg(o.start),n=rg(o.end);if(!t||!n||t!==n)throw new z("view-writer-invalid-range-container",e)}function Wb(o,e){return o.id===null&&e.id===null}const qb=o=>o.createTextNode(" "),Gb=o=>{const e=o.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},Zb=o=>{const e=o.createElement("br");return e.dataset.ckeFiller="true",e},si=7,Nc="⁠".repeat(si);function mo(o){return typeof o=="string"?o.substr(0,si)===Nc:Se(o)&&o.data.substr(0,si)===Nc}function Pc(o){return o.data.length==si&&mo(o)}function $b(o){const e=typeof o=="string"?o:o.data;return mo(o)?e.slice(si):e}function U5(o,e){if(e.keyCode==qe.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,i=t.getRangeAt(0).startOffset;mo(n)&&i<=si&&t.collapse(n,0)}}}var Kb=f(9315),W5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Kb.Z,W5),Kb.Z.locals;class q5 extends $e(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),D.isBlink&&!D.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new z("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!D.isAndroid)return;let e=null;const t=!(D.isBlink&&!D.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=he._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),i=n.parent.ownerDocument;mo(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Yb(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.childNodes),i=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),r=this._diffNodeLists(n,i),a=this._findUpdateActions(r,n,i,G5);if(a.indexOf("update")!==-1){const c={equal:0,insert:0,delete:0};for(const d of a)if(d==="update"){const h=c.equal+c.insert,p=c.equal+c.delete,m=e.getChild(h);!m||m.is("uiElement")||m.is("rawElement")||this._updateElementMappings(m,n[p]),eu(i[h]),c.equal++}else c[d]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?he._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Se(t.parent)&&mo(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!mo(e))throw new z("view-renderer-filler-was-lost",this);Pc(e)?e.remove():e.data=e.data.substr(si),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(a){if(a.getAttribute("contenteditable")=="false")return!1;const c=a.findAncestor(d=>d.hasAttribute("contenteditable"));return!c||c.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const i=e.nodeBefore,r=e.nodeAfter;return!(i instanceof dt||r instanceof dt)&&(!D.isAndroid||!i&&!r)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let i=this.domConverter.viewToDom(e).data;const r=t.inlineFillerPosition;r&&r.parent==e.parent&&r.offset==e.index&&(i=Nc+i),Qb(n,i)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(r=>r.name),i=e.getAttributeKeys();for(const r of i)this.domConverter.setDomElementAttribute(t,r,e.getAttribute(r),e);for(const r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(D.isAndroid){let m=null;for(const w of Array.from(n.childNodes)){if(m&&Se(m)&&Se(w)){n.normalize();break}m=w}}const i=t.inlineFillerPosition,r=n.childNodes,a=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));i&&i.parent===e&&Yb(n.ownerDocument,a,i.offset);const c=this._diffNodeLists(r,a),d=this._findUpdateActions(c,r,a,Z5);let h=0;const p=new Set;for(const m of d)m==="delete"?(p.add(r[h]),eu(r[h])):m!=="equal"&&m!=="update"||h++;h=0;for(const m of d)m==="insert"?(_c(n,h,a[h]),h++):m==="update"?(Qb(r[h],a[h].data),h++):m==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(a[h])),h++);for(const m of p)m.parentNode||this.domConverter.unbindDomElement(m)}_diffNodeLists(e,t){return e=function(n,i){const r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(e,this._fakeSelectionContainer),G(e,t,$5.bind(null,this.domConverter))}_findUpdateActions(e,t,n,i){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let r=[],a=[],c=[];const d={equal:0,insert:0,delete:0};for(const h of e)h==="insert"?c.push(n[d.equal+d.insert]):h==="delete"?a.push(t[d.equal+d.delete]):(r=r.concat(G(a,c,i).map(p=>p==="equal"?"update":p)),r.push("equal"),a=[],c=[]),d[h]++;return r.concat(G(a,c,i).map(h=>h==="equal"?"update":h))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(D.isBlink&&!D.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&D.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(a){const c=a.createElement("div");return c.className="ck-fake-selection-container",Object.assign(c.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),c.textContent=" ",c}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=t.getSelection(),r=t.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(n.parent,n.offset,i.parent,i.offset),D.isGecko&&function(r,a){const c=r.parent;if(c.nodeType!=Node.ELEMENT_NODE||r.offset!=c.childNodes.length-1)return;const d=c.childNodes[r.offset];d&&d.tagName=="BR"&&a.addRange(a.getRangeAt(0))}(i,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Yb(o,e,t){const n=e instanceof Array?e:e.childNodes,i=n[t];if(Se(i))return i.data=Nc+i.data,i;{const r=o.createTextNode(Nc);return Array.isArray(e)?n.splice(t,0,r):_c(e,t,r),r}}function G5(o,e){return $t(o)&&$t(e)&&!Se(o)&&!Se(e)&&!Js(o)&&!Js(e)&&o.tagName.toLowerCase()===e.tagName.toLowerCase()}function Z5(o,e){return $t(o)&&$t(e)&&Se(o)&&Se(e)}function $5(o,e,t){return e===t||(Se(e)&&Se(t)?e.data===t.data:!(!o.isBlockFiller(e)||!o.isBlockFiller(t)))}function Qb(o,e){const t=o.data;if(t==e)return;const n=M(t,e);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const K5=Zb(ie.document),Y5=qb(ie.document),Q5=Gb(ie.document),bu="data-ck-unsafe-attribute-",Jb="data-ck-unsafe-element";class wu{constructor(e,{blockFillerMode:t,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new ii,this._inlineObjectElementMatcher=new ii,this._elementsWithTemporaryCustomProperties=new Set,this.document=e,this.renderingMode=n,this.blockFillerMode=t||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?ie.document:ie.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new ri(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const a=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),c=[];let d;for(;d=a.nextNode();)c.push(d);for(const h of c){for(const m of h.getAttributeNames())this.setDomElementAttribute(h,m,h.getAttribute(m));const p=h.tagName.toLowerCase();this._shouldRenameElement(p)&&(tw(p),h.replaceWith(this._createReplacementDomElement(p,h)))}for(;e.firstChild;)e.firstChild.remove();e.append(i)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{const n=e;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let i;if(n.is("documentFragment"))i=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(i,n);else{if(n.is("uiElement"))return i=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),t.bind&&this.bindElements(i,n),i;this._shouldRenameElement(n.name)?(tw(n.name),i=this._createReplacementDomElement(n.name)):i=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(i,this),t.bind&&this.bindElements(i,n);for(const r of n.getAttributeKeys())this.setDomElementAttribute(i,r,n.getAttribute(r),n)}if(t.withChildren!==!1)for(const r of this.viewChildrenToDom(n,t))i.appendChild(r);return i}}setDomElementAttribute(e,t,n,i){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(t);r||re("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),function(a){try{ie.document.createAttribute(a)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(bu+t)&&r&&e.removeAttribute(bu+t),e.setAttribute(r?t:bu+t,n)):re("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:n})}removeDomElementAttribute(e,t){t!=Jb&&(e.removeAttribute(t),e.removeAttribute(bu+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const r of e.getChildren()){n===i&&(yield this._getBlockFiller());const a=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!Ft(r.getAttributes());a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,t):(a&&re("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,t)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),i=this._domDocument.createRange();return i.setStart(t.parent,t.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let i=e.offset;return mo(n)&&(i+=si),{parent:n,offset:i}}{let n,i,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const a=e.nodeBefore;if(i=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(a),!i)return null;n=i.parentNode,r=i.nextSibling}return Se(r)&&mo(r)?{parent:r,offset:si}:{parent:n,offset:i?cl(i)+1:0}}}domToView(e,t={}){const n=[],i=this._domToView(e,t,n),r=i.next().value;return r?(i.next(),this._processDomInlineNodes(null,n,t),r.is("$text")&&r.data.length==0?null:r):null}*domChildrenToView(e,t={},n=[]){for(let i=0;i<e.childNodes.length;i++){const r=e.childNodes[i],a=this._domToView(r,t,n),c=a.next().value;c!==null&&(this._isBlockViewElement(c)&&this._processDomInlineNodes(e,n,t),yield c,a.next())}this._processDomInlineNodes(e,n,t)}domSelectionToView(e){if(function(i){if(!D.isGecko||!i.rangeCount)return!1;const r=i.getRangeAt(0).startContainer;try{Object.prototype.toString.call(r)}catch{return!0}return!1}(e))return new ri([]);if(e.rangeCount===1){let i=e.getRangeAt(0).startContainer;Se(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let i=0;i<e.rangeCount;i++){const r=e.getRangeAt(i),a=this.domRangeToView(r);a&&n.push(a)}return new ri(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new De(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,cl(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return he._createBefore(n);if(Se(e)){if(Pc(e))return this.domPositionToView(e.parentNode,cl(e));const i=this.findCorrespondingViewText(e);let r=t;return i?(mo(e)&&(r-=si,r=r<0?0:r),new he(i,r)):null}if(t===0){const i=this.mapDomToView(e);if(i)return new he(i,0)}else{const i=e.childNodes[t-1];if(Se(i)&&Pc(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,cl(i));const r=Se(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new he(r.parent,r.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Pc(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof dt?r:null}}else{const i=this.mapDomToView(e.parentNode);if(i){const r=i.getChild(0);return r instanceof dt?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:i}=ie.window,r=[];Xb(t,a=>{const{scrollLeft:c,scrollTop:d}=a;r.push([c,d])}),t.focus(),Xb(t,a=>{const[c,d]=r.shift();a.scrollLeft=c,a.scrollTop=d}),ie.window.scrollTo(n,i)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(t);n&&n.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(K5):!(e.tagName!=="BR"||!ew(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(Q5)||function(t,n){return t.isEqualNode(Y5)&&ew(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=function(n){const i=[];let r=n;for(;r&&r.nodeType!=Node.DOCUMENT_NODE;)i.unshift(r),r=r.parentNode;return i}(e);for(t.pop();t.length;){const n=t.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_clearTemporaryCustomProperties(){for(const e of this._elementsWithTemporaryCustomProperties)e._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return qb(this._domDocument);case"markedNbsp":return Gb(this._domDocument);case"br":return Zb(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Se(e)&&mo(e)&&t<si||this.isElement(e)&&mo(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(e,t,n){if(this.isBlockFiller(e))return null;const i=this.getHostViewElement(e);if(i)return i;if(Js(e)&&t.skipComments)return null;if(Se(e)){if(Pc(e))return null;{const r=e.data;if(r==="")return null;const a=new dt(this.document,r);return n.push(a),a}}{let r=this.mapDomToView(e);if(r)return this._isInlineObjectElement(r)&&n.push(r),r;if(this.isDocumentFragment(e))r=new ra(this.document),t.bind&&this.bindDocumentFragments(e,r);else{r=this._createViewElement(e,t),t.bind&&this.bindElements(e,r);const c=e.attributes;if(c)for(let d=c.length,h=0;h<d;h++)r._setAttribute(c[h].name,c[h].value);if(this._isViewElementWithRawContent(r,t))return r._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(r)||n.push(r),r;if(Js(e))return r._setCustomProperty("$rawContent",e.data),r}yield r;const a=[];if(t.withChildren!==!1)for(const c of this.domChildrenToView(e,t,a))r._appendChild(c);if(this._isInlineObjectElement(r))n.push(r);else for(const c of a)n.push(c)}}_processDomInlineNodes(e,t,n){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let i=!1;for(let r=0;r<t.length;r++){const a=t[r];if(!a.is("$text")){i=!1;continue}let c,d=!1;if(J5(a,this.preElements))c=$b(a.data);else{c=a.data.replace(/[ \n\t\r]{1,}/g," "),d=/[^\S\u00A0]/.test(c.charAt(c.length-1));const h=r>0?t[r-1]:null,p=r+1<t.length?t[r+1]:null,m=!h||h.is("element")&&h.name=="br"||i,w=!p&&!mo(a.data);n.withChildren!==!1&&(m&&(c=c.replace(/^ /,"")),w&&(c=c.replace(/ $/,""))),c=$b(c),c=c.replace(/ \u00A0/g,"  ");const _=p&&p.is("element")&&p.name!="br",x=p&&p.is("$text")&&p.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(c)||!p||_||x)&&(c=c.replace(/\u00A0$/," ")),(m||h&&h.is("element")&&h.name!="br")&&(c=c.replace(/^\u00A0/," "))}c.length==0&&a.parent?(a._remove(),t.splice(r,1),r--):(a._data=c,i=d)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!i||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const n=new oa({startPosition:t?he._createAfter(e):he._createBefore(e),direction:t?"forward":"backward"});for(const i of n){if(i.item.is("element","br"))return null;if(this._isInlineObjectElement(i.item))return i.item;if(i.item.is("containerElement"))return null;if(i.item.is("$textProxy"))return i.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(Js(e))return new ku(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new go(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Jb,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const i of t.getAttributeNames())n.setAttribute(i,t.getAttribute(i))}return n}}function J5(o,e){return o.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function Xb(o,e){let t=o;for(;t;)e(t),t=t.parentElement}function ew(o,e){const t=o.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function tw(o){o==="script"&&re("domconverter-unsafe-script-element-detected"),o==="style"&&re("domconverter-unsafe-style-element-detected")}class Fi extends Sn(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const nw=Pb(function(o,e){Si(e,Ni(e),o)});class pl{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,nw(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Xr extends Fi{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,n){this.isEnabled&&this.document.fire(e,new pl(this.view,t,n))}}class X5 extends Xr{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return wn(this)}};this.fire(e.type,e,t)}}const lg=function(){return pn.Date.now()};var eD=/\s/;const tD=function(o){for(var e=o.length;e--&&eD.test(o.charAt(e)););return e};var nD=/^\s+/;const oD=function(o){return o&&o.slice(0,tD(o)+1).replace(nD,"")};var iD=/^[-+]0x[0-9a-f]+$/i,rD=/^0b[01]+$/i,sD=/^0o[0-7]+$/i,aD=parseInt;const ow=function(o){if(typeof o=="number")return o;if(hu(o))return NaN;if(We(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=We(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=oD(o);var t=rD.test(o);return t||sD.test(o)?aD(o.slice(2),t?2:8):iD.test(o)?NaN:+o};var lD=Math.max,cD=Math.min;const Oc=function(o,e,t){var n,i,r,a,c,d,h=0,p=!1,m=!1,w=!0;if(typeof o!="function")throw new TypeError("Expected a function");function _(Z){var K=n,le=i;return n=i=void 0,h=Z,a=o.apply(le,K)}function x(Z){var K=Z-d;return d===void 0||K>=e||K<0||m&&Z-h>=r}function T(){var Z=lg();if(x(Z))return L(Z);c=setTimeout(T,function(K){var le=e-(K-d);return m?cD(le,r-(K-h)):le}(Z))}function L(Z){return c=void 0,w&&n?_(Z):(n=i=void 0,a)}function j(){var Z=lg(),K=x(Z);if(n=arguments,i=this,d=Z,K){if(c===void 0)return function(le){return h=le,c=setTimeout(T,e),p?_(le):a}(d);if(m)return clearTimeout(c),c=setTimeout(T,e),_(d)}return c===void 0&&(c=setTimeout(T,e)),a}return e=ow(e)||0,We(t)&&(p=!!t.leading,r=(m="maxWait"in t)?lD(ow(t.maxWait)||0,e):r,w="trailing"in t?!!t.trailing:w),j.cancel=function(){c!==void 0&&clearTimeout(c),h=0,n=d=i=c=void 0},j.flush=function(){return c===void 0?a:L(lg())},j};class dD extends Fi{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Oc(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new ri(t.getRanges(),{backward:t.isBackward,fake:!1});e!=qe.arrowleft&&e!=qe.arrowup||n.setTo(n.getFirstPosition()),e!=qe.arrowright&&e!=qe.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const uD=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},hD=function(o){return this.__data__.has(o)};function vu(o){var e=-1,t=o==null?0:o.length;for(this.__data__=new Jo;++e<t;)this.add(o[e])}vu.prototype.add=vu.prototype.push=uD,vu.prototype.has=hD;const pD=vu,gD=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n;)if(e(o[t],t,o))return!0;return!1},mD=function(o,e){return o.has(e)},iw=function(o,e,t,n,i,r){var a=1&t,c=o.length,d=e.length;if(c!=d&&!(a&&d>c))return!1;var h=r.get(o),p=r.get(e);if(h&&p)return h==e&&p==o;var m=-1,w=!0,_=2&t?new pD:void 0;for(r.set(o,e),r.set(e,o);++m<c;){var x=o[m],T=e[m];if(n)var L=a?n(T,x,m,e,o,r):n(x,T,m,o,e,r);if(L!==void 0){if(L)continue;w=!1;break}if(_){if(!gD(e,function(j,Z){if(!mD(_,Z)&&(x===j||i(x,j,t,n,r)))return _.push(Z)})){w=!1;break}}else if(x!==T&&!i(x,T,t,n,r)){w=!1;break}}return r.delete(o),r.delete(e),w},fD=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n,i){t[++e]=[i,n]}),t},kD=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n){t[++e]=n}),t};var rw=Wt?Wt.prototype:void 0,cg=rw?rw.valueOf:void 0;const bD=function(o,e,t,n,i,r,a){switch(t){case"[object DataView]":if(o.byteLength!=e.byteLength||o.byteOffset!=e.byteOffset)return!1;o=o.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=e.byteLength||!r(new Wr(o),new Wr(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return xi(+o,+e);case"[object Error]":return o.name==e.name&&o.message==e.message;case"[object RegExp]":case"[object String]":return o==e+"";case"[object Map]":var c=fD;case"[object Set]":var d=1&n;if(c||(c=kD),o.size!=e.size&&!d)return!1;var h=a.get(o);if(h)return h==e;n|=2,a.set(o,e);var p=iw(c(o),c(e),n,i,r,a);return a.delete(o),p;case"[object Symbol]":if(cg)return cg.call(o)==cg.call(e)}return!1};var wD=Object.prototype.hasOwnProperty;const vD=function(o,e,t,n,i,r){var a=1&t,c=Us(o),d=c.length;if(d!=Us(e).length&&!a)return!1;for(var h=d;h--;){var p=c[h];if(!(a?p in e:wD.call(e,p)))return!1}var m=r.get(o),w=r.get(e);if(m&&w)return m==e&&w==o;var _=!0;r.set(o,e),r.set(e,o);for(var x=a;++h<d;){var T=o[p=c[h]],L=e[p];if(n)var j=a?n(L,T,p,e,o,r):n(T,L,p,o,e,r);if(!(j===void 0?T===L||i(T,L,t,n,r):j)){_=!1;break}x||(x=p=="constructor")}if(_&&!x){var Z=o.constructor,K=e.constructor;Z==K||!("constructor"in o)||!("constructor"in e)||typeof Z=="function"&&Z instanceof Z&&typeof K=="function"&&K instanceof K||(_=!1)}return r.delete(o),r.delete(e),_};var sw="[object Arguments]",aw="[object Array]",Au="[object Object]",lw=Object.prototype.hasOwnProperty;const AD=function(o,e,t,n,i,r){var a=Mt(o),c=Mt(e),d=a?aw:Oi(o),h=c?aw:Oi(e),p=(d=d==sw?Au:d)==Au,m=(h=h==sw?Au:h)==Au,w=d==h;if(w&&Xo(o)){if(!Xo(e))return!1;a=!0,p=!1}if(w&&!p)return r||(r=new tr),a||jr(o)?iw(o,e,t,n,i,r):bD(o,e,d,t,n,i,r);if(!(1&t)){var _=p&&lw.call(o,"__wrapped__"),x=m&&lw.call(e,"__wrapped__");if(_||x){var T=_?o.value():o,L=x?e.value():e;return r||(r=new tr),i(T,L,t,n,r)}}return!!w&&(r||(r=new tr),vD(o,e,t,n,i,r))},cw=function o(e,t,n,i,r){return e===t||(e==null||t==null||!wt(e)&&!wt(t)?e!=e&&t!=t:AD(e,t,n,i,o,r))},CD=function(o,e,t){var n=(t=typeof t=="function"?t:void 0)?t(o,e):void 0;return n===void 0?cw(o,e,void 0,t):!!n};class dw extends Fi{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,i=new Set;for(const a of e){const c=t.mapDomToView(a.target);c&&(c.is("uiElement")||c.is("rawElement")||a.type!=="childList"||this._isBogusBrMutation(a)||i.add(c))}for(const a of e){const c=t.mapDomToView(a.target);if((!c||!c.is("uiElement")&&!c.is("rawElement"))&&a.type==="characterData"){const d=t.findCorrespondingViewText(a.target);d&&!i.has(d.parent)?n.add(d):!d&&mo(a.target)&&i.add(t.mapDomToView(a.target.parentNode))}}let r=!1;for(const a of n)r=!0,this.renderer.markToSync("text",a);for(const a of i){const c=t.mapViewToDom(a),d=Array.from(a.getChildren()),h=Array.from(t.domChildrenToView(c,{withChildren:!1}));CD(d,h,_D)||(r=!0,this.renderer.markToSync("children",a))}r&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function _D(o,e){if(!Array.isArray(o))return o===e||!(!o.is("$text")||!e.is("$text"))&&o.data===e.data}class Cu extends Xr{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,i)=>{const r=t.selection.editableElement;r!==null&&r!==i.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class yD extends Fi{constructor(e){super(e),this.mutationObserver=e.getObserver(dw),this.focusObserver=e.getObserver(Cu),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Oc(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Oc(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(i,r)=>{this.document.isComposing&&!D.isAndroid||(this._handleSelectionChange(r,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(i)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(i))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class xD extends Xr{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class uw{constructor(e,t={}){this._files=t.cacheFiles?hw(e):null,this._native=e}get files(){return this._files||(this._files=hw(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,n){this._native.setDragImage(e,t,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function hw(o){const e=Array.from(o.files||[]),t=Array.from(o.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class ED extends Xr{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,i=n.document;let r=null,a=null,c=[];if(e.dataTransfer&&(r=new uw(e.dataTransfer)),e.data!==null?a=e.data:r&&(a=r.getData("text/plain")),i.selection.isFake)c=Array.from(i.selection.getRanges());else if(t.length)c=t.map(d=>{const h=n.domConverter.domPositionToView(d.startContainer,d.startOffset),p=n.domConverter.domPositionToView(d.endContainer,d.endOffset);return h?n.createRange(h,p):p?n.createRange(p):void 0}).filter(d=>!!d);else if(D.isAndroid){const d=e.target.ownerDocument.defaultView.getSelection();c=Array.from(n.domConverter.domSelectionToView(d).getRanges())}if(D.isAndroid&&e.inputType=="insertCompositionText"&&a&&a.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(c[0].end)]});else if(e.inputType=="insertText"&&a&&a.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],n],on:{dragstart:i.to(r=>r.preventDefault())}}]})}}function uv(o,e,t){return(n,i)=>{const r=new ye(o);if(r.width<tT||r.height<eT)return null;let a;a=e.position==="inside"?r.bottom-i.height:r.bottom-i.height/2,a-=e.verticalOffset;const c=t(r,i),d=n.clone().moveTo(c,a).getIntersection(i.clone().moveTo(c,a)).getVisible();return!d||d.getArea()<i.getArea()?null:{top:a,left:c,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function hv(o){const e=o.config.get("ui.poweredBy"),t=e&&e.position||"border";return XI({position:t,label:nT,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var pv=f(3210),rT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(pv.Z,rT),pv.Z.locals;const gv="polite";class sT{constructor(e){this.editor=e}announce(e,t,n=gv){const i=this.editor;this.view||(this.view=new aT(i.locale),i.ui.view.body.add(this.view));let r=this.view.regionViews.find(a=>a.regionName===e);r||(r=new lT(this.view.locale),this.view.regionViews.add(r)),r.set({regionName:e,text:t,politeness:n})}}class aT extends xe{constructor(e){super(e),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class lT extends xe{constructor(e){super(e);const t=this.bindTemplate;this.set("regionName",""),this.set("text",""),this.set("politeness",gv),this.setTemplate({tag:"div",attributes:{role:"region","data-region":t.to("regionName"),"aria-live":t.to("politeness")},children:[{text:t.to("text")}]})}}var cT=Object.defineProperty,mv=Object.getOwnPropertySymbols,dT=Object.prototype.hasOwnProperty,uT=Object.prototype.propertyIsEnumerable,fv=(o,e,t)=>e in o?cT(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;class hT extends $e(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new MI(e),this.focusTracker=new Yt,this.tooltipManager=new Nu(e),this.poweredBy=new oT(e),this.ariaLiveAnnouncer=new sT(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,i;e.keystrokes.set("Alt+F10",(r,a)=>{const c=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(c)&&!Array.from(t.domRoots.values()).includes(c)&&(n=c);const d=this._getCurrentFocusedToolbarDefinition();d&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let h=0;h<i.length;h++){const p=i.shift();if(i.push(p),p!==d&&this._focusFocusableCandidateToolbar(p)){d&&d.options.afterBlur&&d.options.afterBlur();break}}a()}),e.keystrokes.set("Esc",(r,a)=>{const c=this._getCurrentFocusedToolbarDefinition();c&&(n?(n.focus(),n=null):e.editing.view.focus(),c.options.afterBlur&&c.options.afterBlur(),a())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=t;(cr(n.element)||i.beforeFocus)&&e.push(t)}return e.sort((t,n)=>kv(t)-kv(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!cr(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const n=((i,r)=>{for(var a in r||(r={}))dT.call(r,a)&&fv(i,a,r[a]);if(mv)for(var a of mv(r))uT.call(r,a)&&fv(i,a,r[a]);return i})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=n.top,t.viewportOffset.bottom+=n.bottom,t.viewportOffset.left+=n.left,t.viewportOffset.right+=n.right}}function kv(o){const{toolbarView:e,options:t}=o;let n=10;return cr(e.element)&&n--,t.isContextual&&n--,n}var bv=f(9688),pT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(bv.Z,pT),bv.Z.locals;class gT extends xe{constructor(e){super(e),this.body=new ME(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class mT extends gT{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new jp;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class fT extends xe{constructor(e,t,n){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(i=>{const r=e.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",r),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}e.isRenderingInProgress?function n(i){e.once("change:isRenderingInProgress",(r,a,c)=>{c?n(i):t(i)})}(this):t(this)}}class kT extends fT{constructor(e,t,n,i={}){super(e,t,n);const r=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}class jg extends du{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class wv extends $e(){constructor(e,t){super(),t&&nw(this,t),e&&this.set(e)}}var vv=f(4650),bT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(vv.Z,bT),vv.Z.locals;var Av=f(7676),wT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Av.Z,wT),Av.Z.locals;const Ou=Qr("px");class Lu extends ce{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new z("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new z("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new z("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new eo(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new vT(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[r,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new AT(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class vT extends xe{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Yt,this.buttonPrevView=this._createButtonView(t("Previous"),Be.previousArrow),this.buttonNextView=this._createButtonView(t("Next"),Be.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new nt(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class AT extends xe{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",Ou),left:n.to("left",Ou),width:n.to("width",Ou),height:n.to("height",Ou)}},children:this.content}),this.on("change:numberOfPanels",(i,r,a,c)=>{a>c?this._addPanels(a-c):this._removePanels(c-a),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new xe;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:i}=new ye(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:i})}}}var Cv=f(5868),CT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Cv.Z,CT),Cv.Z.locals;const bl=Qr("px");class _T extends xe{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new oi({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?bl(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new oi({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?bl(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",n=>n&&bl(n)),bottom:t.to("_stickyBottomOffset",n=>n&&bl(n)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(ie.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const e=new ye(this.limiterElement);let t=e.getVisible();if(t){const n=new ye(ie.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,t=t.getIntersection(n)}if(t&&e.top<t.top){const n=t.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>t.bottom){const i=Math.max(e.bottom-t.bottom,0)+this.limiterBottomOffset;e.bottom-i>e.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(i):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<e.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=bl(-ie.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=bl(-ie.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new ye(this.contentPanelElement)}}class yT extends cu{constructor(e,t){const n=e.t,i=Object.assign({},{showResetButton:!0,showIcon:!0,creator:Tu},t);super(e,i.creator),this.label=t.label,this._viewConfig=i,this._viewConfig.showIcon&&(this.iconView=new Jr,this.iconView.content=Be.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new nt(e),this.resetButtonView.set({label:n("Clear"),icon:Be.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",r=>!r),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class xT extends xe{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class ET extends xe{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new Yt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new No({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var _v=/[\\^$.*+?()[\]{}|]/g,DT=RegExp(_v.source);const yv=function(o){return(o=qp(o))&&DT.test(o)?o.replace(_v,"\\$&"):o};var xv=f(6770),ST={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(xv.Z,ST),xv.Z.locals;var IT=Object.defineProperty,Ev=Object.getOwnPropertySymbols,TT=Object.prototype.hasOwnProperty,MT=Object.prototype.propertyIsEnumerable,Dv=(o,e,t)=>e in o?IT(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;class BT extends xe{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new Yt,this.keystrokes=new tn,this.resultsView=new ET(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new xT,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new No({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:i,totalItemsCount:r})=>{this.resultsCount=i,this.totalItemsCount=r}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(yv(e),"ig"):null,n=this.filteredView.filter(t);this.fire("search",((i,r)=>{for(var a in r||(r={}))TT.call(r,a)&&Dv(i,a,r[a]);if(Ev)for(var a of Ev(r))MT.call(r,a)&&Dv(i,a,r[a]);return i})({query:e},n))}_createSearchTextQueryView(){const e=new yT(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function n(i,{query:r,resultsCount:a,totalItemsCount:c}){return typeof i=="function"?i(r,a,c):i}this.on("search",(i,r)=>{if(r.resultsCount)t.set({isVisible:!1});else{const a=this._config.infoView&&this._config.infoView.text;let c,d;r.totalItemsCount?a&&a.notFound?(c=a.notFound.primary,d=a.notFound.secondary):(c=e("No results found"),d=""):a&&a.noSearchableItems?(c=a.noSearchableItems.primary,d=a.noSearchableItems.secondary):(c=e("No searchable items"),d=""),t.set({primaryText:n(c,r),secondaryText:n(d,r),isVisible:!0})}})}}var Sv=f(8157),NT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Sv.Z,NT),Sv.Z.locals;const Rg=class extends BT{constructor(o,e){super(o,e),this._config=e;const t=Qr("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",i=>!i),n.to("_position",i=>`ck-search__results_${i}`)],style:{width:n.to("_width",t)}}}),this.focusTracker.on("change:isFocused",(i,r,a)=>{this._updateResultsVisibility(),a?this.resultsView.element.scrollTop=0:e.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(i,r)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,r())}),this.listenTo(ie.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(i,{value:r})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=r,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new ye(this.queryView.fieldView.element).width;const o=Rg._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:Rg.defaultResultsPositions});this.resultsView._position=o?o.name:"s"}_updateResultsVisibility(){const o=this._config.queryMinChars===void 0?0:this._config.queryMinChars,e=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&e>=o}};let Iv=Rg;Iv.defaultResultsPositions=[o=>({top:o.bottom,left:o.left,name:"s"}),(o,e)=>({top:o.top-e.height,left:o.left,name:"n"})],Iv._getOptimalPosition=yc;var Tv=f(8960),PT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Tv.Z,PT),Tv.Z.locals;var Mv=f(498),OT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Mv.Z,OT),Mv.Z.locals;var Bv=f(9695),LT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Bv.Z,LT),Bv.Z.locals;class zT extends hT{constructor(e,t){super(e),this.view=t,this._toolbarConfig=kb(e.config.get("toolbar")),this._elementReplacer=new Ai,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,i=t.editing.view,r=n.editable,a=i.document.getRoot();r.name=a.rootName,n.render();const c=r.element;this.setEditableElement(r.name,c),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(c),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),i=e.sourceElement;let r;const a=e.config.get("placeholder");a&&(r=typeof a=="string"?a:a[this.view.editable.name]),!r&&i&&i.tagName.toLowerCase()==="textarea"&&(r=i.getAttribute("placeholder")),r&&(n.placeholder=r),xb({view:t,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,n){const i=this.view.stickyPanel;if(i.isSticky){const r=new ye(i.element).height;t.viewportOffset.top+=r}else{const r=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(i,"change:isSticky",r),setTimeout(()=>{this.stopListening(i,"change:isSticky",r)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const e=this.view.stickyPanel,t=this.editor.plugins.get("Dialog");t.on("show",()=>{const n=t.view;n.on("moveTo",(i,r)=>{if(!e.isSticky||n.wasMoved)return;const a=new ye(e.contentPanelElement);r[1]<a.bottom+Pg.defaultOffset&&(r[1]=a.bottom+Pg.defaultOffset)},{priority:"high"})},{priority:"low"})}}var Nv=f(3143),jT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Nv.Z,jT),Nv.Z.locals;class RT extends mT{constructor(e,t,n={}){super(e),this.stickyPanel=new _T(e),this.toolbar=new _g(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new kT(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Pv{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const n="error"in t?t.error:t.reason;n instanceof Error&&this._handleError(n,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(n=>n!==t)}_fire(e,...t){const n=this._listeners[e]||[];for(const i of n)i.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Fg(o,e=new Set){const t=[o],n=new Set;let i=0;for(;t.length>i;){const r=t[i++];if(!n.has(r)&&FT(r)&&!e.has(r))if(n.add(r),Symbol.iterator in r)try{for(const a of r)t.push(a)}catch{}else for(const a in r)a!=="defaultValue"&&t.push(r[a])}return n}function FT(o){const e=Object.prototype.toString.call(o),t=typeof o;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||o==null||o._watchdogExcluded||o instanceof EventTarget||o instanceof Event)}function Ov(o,e,t=new Set){if(o===e&&typeof(n=o)=="object"&&n!==null)return!0;var n;const i=Fg(o,t),r=Fg(e,t);for(const a of i)if(r.has(a))return!0;return!1}var VT=Object.defineProperty,HT=Object.defineProperties,UT=Object.getOwnPropertyDescriptors,zu=Object.getOwnPropertySymbols,Lv=Object.prototype.hasOwnProperty,zv=Object.prototype.propertyIsEnumerable,jv=(o,e,t)=>e in o?VT(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Vg=(o,e)=>{for(var t in e||(e={}))Lv.call(e,t)&&jv(o,t,e[t]);if(zu)for(var t of zu(e))zv.call(e,t)&&jv(o,t,e[t]);return o};class Rv extends Pv{constructor(e,t={}){super(t),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=Pu(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(n,i)=>e.create(n,i)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],n=this._config.rootsAttributes||{},i={};for(const[d,h]of Object.entries(this._data.roots))h.isLoaded?(e[d]="",i[d]=n[d]||{}):t.push(d);const r=(a=Vg({},this._config),c={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:i,_watchdogInitialData:this._data},HT(a,UT(c)));var a,c;return delete r.initialData,r.extraPlugins.push(WT),this._initUsingData?this.create(e,r,r.context):ft(this._elementOrData)?this.create(this._elementOrData,r,r.context):this.create(this._editables,r,r.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,n){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=n,this._creator(e,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(c=>c.isAttached()&&c.rootName!="$graveyard"),{plugins:n}=e,i=n.has("CommentsRepository")&&n.get("CommentsRepository"),r=n.has("TrackChanges")&&n.get("TrackChanges"),a={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(c=>{a.roots[c.rootName]={content:JSON.stringify(Array.from(c.getChildren())),attributes:JSON.stringify(Array.from(c.getAttributes())),isLoaded:c._isLoaded}});for(const c of e.model.markers)c._affectsData&&(a.markers[c.name]={rangeJSON:c.getRange().toJSON(),usingOperation:c._managedUsingOperations,affectsData:c._affectsData});return i&&(a.commentThreads=JSON.stringify(i.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),r&&(a.suggestions=JSON.stringify(r.getSuggestions({toJSON:!0,skipNotAttached:!0}))),a}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(t);n&&(e[t]=n)}return e}_isErrorComingFromThisItem(e){return Ov(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return Dn(e,(t,n)=>ft(t)||n==="context"?t:void 0)}}class WT{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const n=e.createElement(t.name,t.attributes);if(t.children)for(const i of t.children)n._appendChild(this._createNode(e,i));return n}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([n,{content:i,attributes:r}])=>{const a=JSON.parse(i),c=JSON.parse(r),d=t.model.document.getRoot(n);for(const[h,p]of c)e.setAttribute(h,p,d);for(const h of a){const p=this._createNode(e,h);e.insert(p,d,"end")}}),Object.entries(this._data.markers).forEach(([n,i])=>{const{document:r}=t.model,a=i,{rangeJSON:{start:c,end:d}}=a,h=((x,T)=>{var L={};for(var j in x)Lv.call(x,j)&&T.indexOf(j)<0&&(L[j]=x[j]);if(x!=null&&zu)for(var j of zu(x))T.indexOf(j)<0&&zv.call(x,j)&&(L[j]=x[j]);return L})(a,["rangeJSON"]),p=r.getRoot(c.root),m=e.createPositionFromPath(p,c.path,c.stickiness),w=e.createPositionFromPath(p,d.path,d.stickiness),_=e.createRange(m,w);e.addMarker(n,Vg({range:_},h))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(n=>{const i=this.editor.config.get("collaboration.channelId"),r=this.editor.plugins.get("CommentsRepository");r.hasCommentThread(n.threadId)&&r.getCommentThread(n.threadId).remove(),r.addCommentThread(Vg({channelId:i},n))}),t.forEach(n=>{const i=this.editor.plugins.get("TrackChangesEditing");i.hasSuggestion(n.id)?i.getSuggestion(n.id).attributes=n.attributes:i.addSuggestionData(n)})}}const Gc=Symbol("MainQueueId");class qT{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const n=e===Gc;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const i=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(Gc),this._queues.get(e)])).then(t),r=i.catch(()=>{});return this._queues.set(e,r),i.finally(()=>{this._activeActions--,this._queues.get(e)===r&&this._activeActions===0&&this._onEmptyCallbacks.forEach(a=>a())})}}function Fv(o){return Array.isArray(o)?o:[o]}class ju extends Du(Cg(dI)){constructor(e,t={}){if(!Ru(e)&&t.initialData!==void 0)throw new z("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return Ru(r)?(a=r,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):r;var a}(e)),Ru(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new RT(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new zT(this,i),function(r){if(!Do(r.updateSourceElement))throw new z("attachtoform-missing-elementapi-interface",r);const a=r.sourceElement;if(function(c){return!!c&&c.tagName.toLowerCase()==="textarea"}(a)&&a.form){let c;const d=a.form,h=()=>r.updateSourceElement();Do(d.submit)&&(c=d.submit,d.submit=()=>{h(),c.apply(d)}),d.addEventListener("submit",h),r.on("destroy",()=>{d.removeEventListener("submit",h),c&&(d.submit=c)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const i=new this(e,t);n(i.initPlugins().then(()=>i.ui.init(Ru(e)?e:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function Ru(o){return ft(o)}ju.Context=Cb,ju.EditorWatchdog=Rv,ju.ContextWatchdog=class extends Pv{constructor(o,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new qT,this._watchdogConfig=e,this._creator=t=>o.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}get context(){return this._context}create(o={}){return this._actionQueues.enqueue(Gc,()=>(this._contextConfig=o,this._create()))}getItem(o){return this._getWatchdog(o)._item}getItemState(o){return this._getWatchdog(o).state}add(o){const e=Fv(o);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return n=new Rv(null,this._watchdogConfig),n.setCreator(t.creator),n._setExcludedProperties(this._contextProps),t.destructor&&n.setDestructor(t.destructor),this._watchdogs.set(t.id,n),n.on("error",(i,{error:r,causesRestart:a})=>{this._fire("itemError",{itemId:t.id,error:r}),a&&this._actionQueues.enqueue(t.id,()=>new Promise(c=>{const d=()=>{n.off("restart",d),this._fire("itemRestart",{itemId:t.id}),c()};n.on("restart",d)}))}),n.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(o){const e=Fv(o);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const n=this._getWatchdog(t);return this._watchdogs.delete(t),n.destroy()})))}destroy(){return this._actionQueues.enqueue(Gc,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Gc,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(o=>{console.error("An error happened during destroying the context or items.",o)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(o=>(this._context=o,this._contextProps=Fg(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const o=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(o))})}_getWatchdog(o){const e=this._watchdogs.get(o);if(!e)throw new Error(`Item with the given id was not registered: ${o}.`);return e}_isErrorComingFromThisItem(o){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(o))return!1;return Ov(this._context,o.context)}};class Zc extends Xr{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function n(i){return(r,a)=>{a.preventDefault();const c=a.dropRange?[a.dropRange]:null,d=new R(t,i);t.fire(d,{dataTransfer:a.dataTransfer,method:r.name,targetRanges:c,target:a.target,domEvent:a.domEvent}),d.stop.called&&a.stopPropagation()}}this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",i={dataTransfer:new uw(t,{cacheFiles:n})};e.type!="drop"&&e.type!="dragover"||(i.dropRange=function(r,a){const c=a.target.ownerDocument,d=a.clientX,h=a.clientY;let p;return c.caretRangeFromPoint&&c.caretRangeFromPoint(d,h)?p=c.caretRangeFromPoint(d,h):a.rangeParent&&(p=c.createRange(),p.setStart(a.rangeParent,a.rangeOffset),p.collapse(!0)),p?r.domConverter.domRangeToView(p):null}(this.view,e)),this.fire(e.type,e,i)}}const Vv=["figcaption","li"],Hv=["ol","ul"];function Uv(o){if(o.is("$text")||o.is("$textProxy"))return o.data;if(o.is("element","img")&&o.hasAttribute("alt"))return o.getAttribute("alt");if(o.is("element","br"))return`
`;let e="",t=null;for(const n of o.getChildren())e+=GT(n,t)+Uv(n),t=n;return e}function GT(o,e){return e?o.is("element","li")&&!o.isEmpty&&o.getChild(0).is("containerElement")||Hv.includes(o.name)&&Hv.includes(e.name)?`

`:o.is("containerElement")||e.is("containerElement")?Vv.includes(o.name)||Vv.includes(e.name)?`
`:`
