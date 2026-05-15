/*! For license information please see main.640a4dd9.js.LICENSE.txt */
(()=>{"use strict";var e={4(e,t,n){var r=n(853),i=n(43),o=n(950);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(a(188))}function h(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=h(e)))return t;e=e.sibling}return null}var p=Object.assign,f=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),y=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),k=Symbol.for("react.lazy");Symbol.for("react.scope");var A=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var T=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var L=Symbol.iterator;function F(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var I=Symbol.for("react.client.reference");function O(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===I?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case x:return"Fragment";case b:return"Profiler";case C:return"StrictMode";case E:return"Suspense";case j:return"SuspenseList";case A:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case y:return e.displayName||"Context";case v:return(e._context.displayName||"Context")+".Consumer";case w:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case S:return null!==(t=e.displayName||null)?t:O(e.type)||"Memo";case k:t=e._payload,e=e._init;try{return O(e(t))}catch(Ae){}}return null}var R=Array.isArray,N=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},$=[],D=-1;function B(e){return{current:e}}function M(e){0>D||(e.current=$[D],$[D]=null,D--)}function H(e,t){D++,$[D]=e.current,e.current=t}var G,W,U=B(null),_=B(null),Z=B(null),Y=B(null);function Q(e,t){switch(H(Z,t),H(_,e),H(U,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Cu(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=bu(t=Cu(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(U),H(U,e)}function V(){M(U),M(_),M(Z)}function q(e){null!==e.memoizedState&&H(Y,e);var t=U.current,n=bu(t,e.type);t!==n&&(H(_,e),H(U,n))}function J(e){_.current===e&&(M(U),M(_)),Y.current===e&&(M(Y),uh._currentValue=z)}function X(e){if(void 0===G)try{throw Error()}catch(Ae){var t=Ae.stack.trim().match(/\n( *(at )?)/);G=t&&t[1]||"",W=-1<Ae.stack.indexOf("\n    at")?" (<anonymous>)":-1<Ae.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+G+e+W}var K=!1;function ee(e,t){if(!e||K)return"";K=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(Ae){var r=Ae}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(a){if(a&&r&&"string"===typeof a.stack)return[a.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),a=o[0],l=o[1];if(a&&l){var s=a.split("\n"),c=l.split("\n");for(i=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===s.length||i===c.length)for(r=s.length-1,i=c.length-1;1<=r&&0<=i&&s[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(s[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||s[r]!==c[i]){var d="\n"+s[r].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}}while(1<=r&&0<=i);break}}}finally{K=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?X(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return X(e.type);case 16:return X("Lazy");case 13:return e.child!==t&&null!==t?X("Suspense Fallback"):X("Suspense");case 19:return X("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return X("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(Ae){return"\nError generating stack: "+Ae.message+"\n"+Ae.stack}}var re=Object.prototype.hasOwnProperty,ie=r.unstable_scheduleCallback,oe=r.unstable_cancelCallback,ae=r.unstable_shouldYield,le=r.unstable_requestPaint,se=r.unstable_now,ce=r.unstable_getCurrentPriorityLevel,de=r.unstable_ImmediatePriority,ue=r.unstable_UserBlockingPriority,he=r.unstable_NormalPriority,pe=r.unstable_LowPriority,fe=r.unstable_IdlePriority,ge=r.log,me=r.unstable_setDisableYieldValue,xe=null,Ce=null;function be(e){if("function"===typeof ge&&me(e),Ce&&"function"===typeof Ce.setStrictMode)try{Ce.setStrictMode(xe,e)}catch(t){}}var ve=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ye(e)/we|0)|0},ye=Math.log,we=Math.LN2;var Ee=256,je=262144,Se=4194304;function ke(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Te(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,o=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~o)?i=ke(r):0!==(a&=l)?i=ke(a):n||0!==(n=l&~e)&&(i=ke(n)):0!==(l=r&~o)?i=ke(l):0!==a?i=ke(a):n||0!==(n=r&~e)&&(i=ke(n)),0===i?0:0!==t&&t!==i&&0===(t&o)&&((o=i&-i)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:i}function Le(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Fe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ie(){var e=Se;return 0===(62914560&(Se<<=1))&&(Se=4194304),e}function Oe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Re(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ne(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ve(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Pe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ze(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:$e(n))&(e.suspendedLanes|t))?0:n}function $e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Be(){var e=P.p;return 0!==e?e:void 0===(e=window.event)?32:Ah(e.type)}function Me(e,t){var n=P.p;try{return P.p=e,t()}finally{P.p=n}}var He=Math.random().toString(36).slice(2),Ge="__reactFiber$"+He,We="__reactProps$"+He,Ue="__reactContainer$"+He,_e="__reactEvents$"+He,Ze="__reactListeners$"+He,Ye="__reactHandles$"+He,Qe="__reactResources$"+He,Ve="__reactMarker$"+He;function qe(e){delete e[Ge],delete e[We],delete e[_e],delete e[Ze],delete e[Ye]}function Je(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ue]||n[Ge]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=$u(e);null!==e;){if(n=e[Ge])return n;e=$u(e)}return t}n=(e=n).parentNode}return null}function Xe(e){if(e=e[Ge]||e[Ue]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Ke(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(a(33))}function et(e){var t=e[Qe];return t||(t=e[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Ve]=!0}var nt=new Set,rt={};function it(e,t){ot(e,t),ot(e+"Capture",t)}function ot(e,t){for(rt[e]=t,e=0;e<t.length;e++)nt.add(t[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},st={};function ct(e,t,n){if(i=t,re.call(st,i)||!re.call(lt,i)&&(at.test(i)?st[i]=!0:(lt[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function dt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ut(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function pt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ft(e){if(!e._valueTracker){var t=pt(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function mt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var xt=/[\n"\\]/g;function Ct(e){return e.replace(xt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function bt(e,t,n,r,i,o,a,l){e.name="",null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a?e.type=a:e.removeAttribute("type"),null!=t?"number"===a?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ht(t)):e.value!==""+ht(t)&&(e.value=""+ht(t)):"submit"!==a&&"reset"!==a||e.removeAttribute("value"),null!=t?yt(e,a,ht(t)):null!=n?yt(e,a,ht(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=o&&(e.defaultChecked=!!o),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ht(l):e.removeAttribute("name")}function vt(e,t,n,r,i,o,a,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return void ft(e);n=null!=n?""+ht(n):"",t=null!=t?""+ht(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.name=a),ft(e)}function yt(e,t,n){"number"===t&&mt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function wt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function Et(e,t,n){null==t||((t=""+ht(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ht(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function jt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(a(92));if(R(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ht(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),ft(e)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function At(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Tt(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(a(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&At(e,i,r)}else for(var o in t)t.hasOwnProperty(o)&&At(e,o,t[o])}function Lt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ft=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),It=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ot(e){return It.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rt(){}var Nt=null;function Pt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var zt=null,$t=null;function Dt(e){var t=Xe(e);if(t&&(e=t.stateNode)){var n=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[We]||null;if(!i)throw Error(a(90));bt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&gt(r)}break e;case"textarea":Et(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&wt(e,!!n.multiple,t,!1)}}}var Bt=!1;function Mt(e,t,n){if(Bt)return e(t,n);Bt=!0;try{return e(t)}finally{if(Bt=!1,(null!==zt||null!==$t)&&(ed(),zt&&(t=zt,e=$t,$t=zt=null,Dt(t),e)))for(t=0;t<e.length;t++)Dt(e[t])}}function Ht(e,t){var n=e.stateNode;if(null===n)return null;var r=n[We]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Gt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Wt=!1;if(Gt)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){Wt=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch(Xh){Wt=!1}var _t=null,Zt=null,Yt=null;function Qt(){if(Yt)return Yt;var e,t,n=Zt,r=n.length,i="value"in _t?_t.value:_t.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Yt=i.slice(e,1<t?1-t:void 0)}function Vt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function qt(){return!0}function Jt(){return!1}function Xt(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?qt:Jt,this.isPropagationStopped=Jt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),t}var Kt,en,tn,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rn=Xt(nn),on=p({},nn,{view:0,detail:0}),an=Xt(on),ln=p({},on,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&"mousemove"===e.type?(Kt=e.screenX-tn.screenX,en=e.screenY-tn.screenY):en=Kt=0,tn=e),Kt)},movementY:function(e){return"movementY"in e?e.movementY:en}}),sn=Xt(ln),cn=Xt(p({},ln,{dataTransfer:0})),dn=Xt(p({},on,{relatedTarget:0})),un=Xt(p({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),hn=Xt(p({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),pn=Xt(p({},nn,{data:0})),fn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=mn[e])&&!!t[e]}function Cn(){return xn}var bn=Xt(p({},on,{key:function(e){if(e.key){var t=fn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Vt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?gn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?Vt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Vt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),vn=Xt(p({},ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),yn=Xt(p({},on,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),wn=Xt(p({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),En=Xt(p({},ln,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),jn=Xt(p({},nn,{newState:0,oldState:0})),Sn=[9,13,27,32],kn=Gt&&"CompositionEvent"in window,An=null;Gt&&"documentMode"in document&&(An=document.documentMode);var Tn=Gt&&"TextEvent"in window&&!An,Ln=Gt&&(!kn||An&&8<An&&11>=An),Fn=String.fromCharCode(32),In=!1;function On(e,t){switch(e){case"keyup":return-1!==Sn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Nn=!1;var Pn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Pn[e.type]:"textarea"===t}function $n(e,t,n,r){zt?$t?$t.push(r):$t=[r]:zt=r,0<(t=iu(t,"onChange")).length&&(n=new rn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Bn=null;function Mn(e){qd(e,0)}function Hn(e){if(gt(Ke(e)))return e}function Gn(e,t){if("change"===e)return t}var Wn=!1;if(Gt){var Un;if(Gt){var _n="oninput"in document;if(!_n){var Zn=document.createElement("div");Zn.setAttribute("oninput","return;"),_n="function"===typeof Zn.oninput}Un=_n}else Un=!1;Wn=Un&&(!document.documentMode||9<document.documentMode)}function Yn(){Dn&&(Dn.detachEvent("onpropertychange",Qn),Bn=Dn=null)}function Qn(e){if("value"===e.propertyName&&Hn(Bn)){var t=[];$n(t,Bn,e,Pt(e)),Mt(Mn,t)}}function Vn(e,t,n){"focusin"===e?(Yn(),Bn=n,(Dn=t).attachEvent("onpropertychange",Qn)):"focusout"===e&&Yn()}function qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Hn(Bn)}function Jn(e,t){if("click"===e)return Hn(t)}function Xn(e,t){if("input"===e||"change"===e)return Hn(t)}var Kn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function er(e,t){if(Kn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!re.call(t,i)||!Kn(e[i],t[i]))return!1}return!0}function tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nr(e,t){var n,r=tr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=tr(r)}}function rr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?rr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ir(e){for(var t=mt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=mt((e=t.contentWindow).document)}return t}function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ar=Gt&&"documentMode"in document&&11>=document.documentMode,lr=null,sr=null,cr=null,dr=!1;function ur(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;dr||null==lr||lr!==mt(r)||("selectionStart"in(r=lr)&&or(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},cr&&er(cr,r)||(cr=r,0<(r=iu(sr,"onSelect")).length&&(t=new rn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},fr={},gr={};function mr(e){if(fr[e])return fr[e];if(!pr[e])return e;var t,n=pr[e];for(t in n)if(n.hasOwnProperty(t)&&t in gr)return fr[e]=n[t];return e}Gt&&(gr=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);var xr=mr("animationend"),Cr=mr("animationiteration"),br=mr("animationstart"),vr=mr("transitionrun"),yr=mr("transitionstart"),wr=mr("transitioncancel"),Er=mr("transitionend"),jr=new Map,Sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){jr.set(e,t),it(t,[e])}Sr.push("scrollEnd");var Ar="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},Tr=[],Lr=0,Fr=0;function Ir(){for(var e=Lr,t=Fr=Lr=0;t<e;){var n=Tr[t];Tr[t++]=null;var r=Tr[t];Tr[t++]=null;var i=Tr[t];Tr[t++]=null;var o=Tr[t];if(Tr[t++]=null,null!==r&&null!==i){var a=r.pending;null===a?i.next=i:(i.next=a.next,a.next=i),r.pending=i}0!==o&&Pr(n,i,o)}}function Or(e,t,n,r){Tr[Lr++]=e,Tr[Lr++]=t,Tr[Lr++]=n,Tr[Lr++]=r,Fr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Rr(e,t,n,r){return Or(e,t,n,r),zr(e)}function Nr(e,t){return Or(e,null,null,t),zr(e)}function Pr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(i=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,i&&null!==t&&(i=31-ve(n),null===(r=(e=o.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),o):null}function zr(e){if(50<_c)throw _c=0,Zc=null,Error(a(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var $r={};function Dr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Br(e,t,n,r){return new Dr(e,t,n,r)}function Mr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Hr(e,t){var n=e.alternate;return null===n?((n=Br(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Gr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wr(e,t,n,r,i,o){var l=0;if(r=e,"function"===typeof e)Mr(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,U.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case A:return(e=Br(31,n,t,i)).elementType=A,e.lanes=o,e;case x:return Ur(n.children,i,o,t);case C:l=8,i|=24;break;case b:return(e=Br(12,n,t,2|i)).elementType=b,e.lanes=o,e;case E:return(e=Br(13,n,t,i)).elementType=E,e.lanes=o,e;case j:return(e=Br(19,n,t,i)).elementType=j,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case y:l=10;break e;case v:l=9;break e;case w:l=11;break e;case S:l=14;break e;case k:l=16,r=null;break e}l=29,n=Error(a(130,null===e?"null":typeof e,"")),r=null}return(t=Br(l,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Ur(e,t,n,r){return(e=Br(7,e,r,t)).lanes=n,e}function _r(e,t,n){return(e=Br(6,e,null,t)).lanes=n,e}function Zr(e){var t=Br(18,null,null,0);return t.stateNode=e,t}function Yr(e,t,n){return(t=Br(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qr=new WeakMap;function Vr(e,t){if("object"===typeof e&&null!==e){var n=Qr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},Qr.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var qr=[],Jr=0,Xr=null,Kr=0,ei=[],ti=0,ni=null,ri=1,ii="";function oi(e,t){qr[Jr++]=Kr,qr[Jr++]=Xr,Xr=e,Kr=t}function ai(e,t,n){ei[ti++]=ri,ei[ti++]=ii,ei[ti++]=ni,ni=e;var r=ri;e=ii;var i=32-ve(r)-1;r&=~(1<<i),n+=1;var o=32-ve(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,ri=1<<32-ve(t)+i|n<<i|r,ii=o+e}else ri=1<<o|n<<i|r,ii=e}function li(e){null!==e.return&&(oi(e,1),ai(e,1,0))}function si(e){for(;e===Xr;)Xr=qr[--Jr],qr[Jr]=null,Kr=qr[--Jr],qr[Jr]=null;for(;e===ni;)ni=ei[--ti],ei[ti]=null,ii=ei[--ti],ei[ti]=null,ri=ei[--ti],ei[ti]=null}function ci(e,t){ei[ti++]=ri,ei[ti++]=ii,ei[ti++]=ni,ri=t.id,ii=t.overflow,ni=e}var di=null,ui=null,hi=!1,pi=null,fi=!1,gi=Error(a(519));function mi(e){throw wi(Vr(Error(a(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),gi}function xi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ge]=e,t[We]=r,n){case"dialog":Jd("cancel",t),Jd("close",t);break;case"iframe":case"object":case"embed":Jd("load",t);break;case"video":case"audio":for(n=0;n<Qd.length;n++)Jd(Qd[n],t);break;case"source":Jd("error",t);break;case"img":case"image":case"link":Jd("error",t),Jd("load",t);break;case"details":Jd("toggle",t);break;case"input":Jd("invalid",t),vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Jd("invalid",t);break;case"textarea":Jd("invalid",t),jt(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||du(t.textContent,n)?(null!=r.popover&&(Jd("beforetoggle",t),Jd("toggle",t)),null!=r.onScroll&&Jd("scroll",t),null!=r.onScrollEnd&&Jd("scrollend",t),null!=r.onClick&&(t.onclick=Rt),t=!0):t=!1,t||mi(e,!0)}function Ci(e){for(di=e.return;di;)switch(di.tag){case 5:case 31:case 13:return void(fi=!1);case 27:case 3:return void(fi=!0);default:di=di.return}}function bi(e){if(e!==di)return!1;if(!hi)return Ci(e),hi=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||vu(e.type,e.memoizedProps)),t=!t),t&&ui&&mi(e),Ci(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));ui=zu(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));ui=zu(e)}else 27===n?(n=ui,Au(e.type)?(e=Pu,Pu=null,ui=e):ui=n):ui=di?Nu(e.stateNode.nextSibling):null;return!0}function vi(){ui=di=null,hi=!1}function yi(){var e=pi;return null!==e&&(null===Ic?Ic=e:Ic.push.apply(Ic,e),pi=null),e}function wi(e){null===pi?pi=[e]:pi.push(e)}var Ei=B(null),ji=null,Si=null;function ki(e,t,n){H(Ei,t._currentValue),t._currentValue=n}function Ai(e){e._currentValue=Ei.current,M(Ei)}function Ti(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Li(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var o=i.dependencies;if(null!==o){var l=i.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=i;for(var c=0;c<t.length;c++)if(s.context===t[c]){o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),Ti(o.return,n,e),r||(l=null);break e}o=s.next}}else if(18===i.tag){if(null===(l=i.return))throw Error(a(341));l.lanes|=n,null!==(o=l.alternate)&&(o.lanes|=n),Ti(l,n,e),l=null}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===e){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}}function Fi(e,t,n,r){e=null;for(var i=t,o=!1;null!==i;){if(!o)if(0!==(524288&i.flags))o=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var l=i.alternate;if(null===l)throw Error(a(387));if(null!==(l=l.memoizedProps)){var s=i.type;Kn(i.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(i===Y.current){if(null===(l=i.alternate))throw Error(a(387));l.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(uh):e=[uh])}i=i.return}null!==e&&Li(t,e,n,r),t.flags|=262144}function Ii(e){for(e=e.firstContext;null!==e;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oi(e){ji=e,Si=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Ri(e){return Pi(ji,e)}function Ni(e,t){return null===ji&&Oi(e),Pi(e,t)}function Pi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Si){if(null===e)throw Error(a(308));Si=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Si=Si.next=t;return n}var zi="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},$i=r.unstable_scheduleCallback,Di=r.unstable_NormalPriority,Bi={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mi(){return{controller:new zi,data:new Map,refCount:0}}function Hi(e){e.refCount--,0===e.refCount&&$i(Di,function(){e.controller.abort()})}var Gi=null,Wi=0,Ui=0,_i=null;function Zi(){if(0===--Wi&&null!==Gi){null!==_i&&(_i.status="fulfilled");var e=Gi;Gi=null,Ui=0,_i=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Yi=N.S;N.S=function(e,t){Nc=se(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Gi){var n=Gi=[];Wi=0,Ui=Wd(),_i={status:"pending",value:void 0,then:function(e){n.push(e)}}}Wi++,t.then(Zi,Zi)}(0,t),null!==Yi&&Yi(e,t)};var Qi=B(null);function Vi(){var e=Qi.current;return null!==e?e:gc.pooledCache}function qi(e,t){H(Qi,null===t?Qi.current:t.pool)}function Ji(){var e=Vi();return null===e?null:{parent:Bi._currentValue,pool:e}}var Xi=Error(a(460)),Ki=Error(a(474)),eo=Error(a(542)),to={then:function(){}};function no(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ro(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Rt,Rt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw lo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Rt,Rt);else{if(null!==(e=gc)&&100<e.shellSuspendCounter)throw Error(a(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw lo(e=t.reason),e}throw oo=t,Xi}}function io(e){try{return(0,e._init)(e._payload)}catch(Ae){if(null!==Ae&&"object"===typeof Ae&&"function"===typeof Ae.then)throw oo=Ae,Xi;throw Ae}}var oo=null;function ao(){if(null===oo)throw Error(a(459));var e=oo;return oo=null,e}function lo(e){if(e===Xi||e===eo)throw Error(a(483))}var so=null,co=0;function uo(e){var t=co;return co+=1,null===so&&(so=[]),ro(so,e,t)}function ho(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function po(e,t){if(t.$$typeof===f)throw Error(a(525));throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Hr(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=_r(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===x?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===k&&io(o)===t.type)?(ho(t=i(t,n.props),n),t.return=e,t):(ho(t=Wr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function d(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Yr(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,o){return null===t||7!==t.tag?((t=Ur(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=_r(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case g:return ho(n=Wr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Yr(t,e.mode,n)).return=e,t;case k:return h(e,t=io(t),n)}if(R(t)||F(t))return(t=Ur(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return h(e,uo(t),n);if(t.$$typeof===y)return h(e,Ni(e,t),n);po(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case g:return n.key===i?c(e,t,n,r):null;case m:return n.key===i?d(e,t,n,r):null;case k:return p(e,t,n=io(n),r)}if(R(n)||F(n))return null!==i?null:u(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,uo(n),r);if(n.$$typeof===y)return p(e,t,Ni(e,n),r);po(e,n)}return null}function f(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case g:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case m:return d(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return f(e,t,n,r=io(r),i)}if(R(r)||F(r))return u(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return f(e,t,n,uo(r),i);if(r.$$typeof===y)return f(e,t,n,Ni(t,r),i);po(t,r)}return null}function C(s,c,d,u){if("object"===typeof d&&null!==d&&d.type===x&&null===d.key&&(d=d.props.children),"object"===typeof d&&null!==d){switch(d.$$typeof){case g:e:{for(var b=d.key;null!==c;){if(c.key===b){if((b=d.type)===x){if(7===c.tag){n(s,c.sibling),(u=i(c,d.props.children)).return=s,s=u;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===k&&io(b)===c.type){n(s,c.sibling),ho(u=i(c,d.props),d),u.return=s,s=u;break e}n(s,c);break}t(s,c),c=c.sibling}d.type===x?((u=Ur(d.props.children,s.mode,u,d.key)).return=s,s=u):(ho(u=Wr(d.type,d.key,d.props,null,s.mode,u),d),u.return=s,s=u)}return l(s);case m:e:{for(b=d.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(s,c.sibling),(u=i(c,d.children||[])).return=s,s=u;break e}n(s,c);break}t(s,c),c=c.sibling}(u=Yr(d,s.mode,u)).return=s,s=u}return l(s);case k:return C(s,c,d=io(d),u)}if(R(d))return function(i,a,l,s){for(var c=null,d=null,u=a,g=a=0,m=null;null!==u&&g<l.length;g++){u.index>g?(m=u,u=null):m=u.sibling;var x=p(i,u,l[g],s);if(null===x){null===u&&(u=m);break}e&&u&&null===x.alternate&&t(i,u),a=o(x,a,g),null===d?c=x:d.sibling=x,d=x,u=m}if(g===l.length)return n(i,u),hi&&oi(i,g),c;if(null===u){for(;g<l.length;g++)null!==(u=h(i,l[g],s))&&(a=o(u,a,g),null===d?c=u:d.sibling=u,d=u);return hi&&oi(i,g),c}for(u=r(u);g<l.length;g++)null!==(m=f(u,i,g,l[g],s))&&(e&&null!==m.alternate&&u.delete(null===m.key?g:m.key),a=o(m,a,g),null===d?c=m:d.sibling=m,d=m);return e&&u.forEach(function(e){return t(i,e)}),hi&&oi(i,g),c}(s,c,d,u);if(F(d)){if("function"!==typeof(b=F(d)))throw Error(a(150));return function(i,l,s,c){if(null==s)throw Error(a(151));for(var d=null,u=null,g=l,m=l=0,x=null,C=s.next();null!==g&&!C.done;m++,C=s.next()){g.index>m?(x=g,g=null):x=g.sibling;var b=p(i,g,C.value,c);if(null===b){null===g&&(g=x);break}e&&g&&null===b.alternate&&t(i,g),l=o(b,l,m),null===u?d=b:u.sibling=b,u=b,g=x}if(C.done)return n(i,g),hi&&oi(i,m),d;if(null===g){for(;!C.done;m++,C=s.next())null!==(C=h(i,C.value,c))&&(l=o(C,l,m),null===u?d=C:u.sibling=C,u=C);return hi&&oi(i,m),d}for(g=r(g);!C.done;m++,C=s.next())null!==(C=f(g,i,m,C.value,c))&&(e&&null!==C.alternate&&g.delete(null===C.key?m:C.key),l=o(C,l,m),null===u?d=C:u.sibling=C,u=C);return e&&g.forEach(function(e){return t(i,e)}),hi&&oi(i,m),d}(s,c,d=b.call(d),u)}if("function"===typeof d.then)return C(s,c,uo(d),u);if(d.$$typeof===y)return C(s,c,Ni(s,d),u);po(s,d)}return"string"===typeof d&&""!==d||"number"===typeof d||"bigint"===typeof d?(d=""+d,null!==c&&6===c.tag?(n(s,c.sibling),(u=i(c,d)).return=s,s=u):(n(s,c),(u=_r(d,s.mode,u)).return=s,s=u),l(s)):n(s,c)}return function(e,t,n,r){try{co=0;var i=C(e,t,n,r);return so=null,i}catch(Ae){if(Ae===Xi||Ae===eo)throw Ae;var o=Br(29,Ae,null,e.mode);return o.lanes=r,o.return=e,o}}}var go=fo(!0),mo=fo(!1),xo=!1;function Co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&fc)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=zr(e),Pr(e,null,n),t}return Or(e,r,t,n),zr(e)}function wo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pe(e,n)}}function Eo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var jo=!1;function So(){if(jo){if(null!==_i)throw _i}}function ko(e,t,n,r){jo=!1;var i=e.updateQueue;xo=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var s=l,c=s.next;s.next=null,null===a?o=c:a.next=c,a=s;var d=e.alternate;null!==d&&((l=(d=d.updateQueue).lastBaseUpdate)!==a&&(null===l?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(null!==o){var u=i.baseState;for(a=0,d=c=s=null,l=o;;){var h=-536870913&l.lane,f=h!==l.lane;if(f?(xc&h)===h:(r&h)===h){0!==h&&h===Ui&&(jo=!0),null!==d&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var g=e,m=l;h=t;var x=n;switch(m.tag){case 1:if("function"===typeof(g=m.payload)){u=g.call(x,u,h);break e}u=g;break e;case 3:g.flags=-65537&g.flags|128;case 0:if(null===(h="function"===typeof(g=m.payload)?g.call(x,u,h):g)||void 0===h)break e;u=p({},u,h);break e;case 2:xo=!0}}null!==(h=l.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=i.callbacks)?i.callbacks=[h]:f.push(h))}else f={lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===d?(c=d=f,s=u):d=d.next=f,a|=h;if(null===(l=l.next)){if(null===(l=i.shared.pending))break;l=(f=l).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}null===d&&(s=u),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,null===o&&(i.shared.lanes=0),Sc|=a,e.lanes=a,e.memoizedState=u}}function Ao(e,t){if("function"!==typeof e)throw Error(a(191,e));e.call(t)}function To(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Ao(n[e],t)}var Lo=B(null),Fo=B(0);function Io(e,t){H(Fo,e=Ec),H(Lo,t),Ec=e|t.baseLanes}function Oo(){H(Fo,Ec),H(Lo,Lo.current)}function Ro(){Ec=Fo.current,M(Lo),M(Fo)}var No=B(null),Po=null;function zo(e){var t=e.alternate;H(Ho,1&Ho.current),H(No,e),null===Po&&(null===t||null!==Lo.current||null!==t.memoizedState)&&(Po=e)}function $o(e){H(Ho,Ho.current),H(No,e),null===Po&&(Po=e)}function Do(e){22===e.tag?(H(Ho,Ho.current),H(No,e),null===Po&&(Po=e)):Bo()}function Bo(){H(Ho,Ho.current),H(No,No.current)}function Mo(e){M(No),Po===e&&(Po=null),M(Ho)}var Ho=B(0);function Go(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Ou(n)||Ru(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=0,Uo=null,_o=null,Zo=null,Yo=!1,Qo=!1,Vo=!1,qo=0,Jo=0,Xo=null,Ko=0;function ea(){throw Error(a(321))}function ta(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kn(e[n],t[n]))return!1;return!0}function na(e,t,n,r,i,o){return Wo=o,Uo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=null===e||null===e.memoizedState?xl:Cl,Vo=!1,o=n(r,i),Vo=!1,Qo&&(o=ia(t,n,r,i)),ra(e),o}function ra(e){N.H=ml;var t=null!==_o&&null!==_o.next;if(Wo=0,Zo=_o=Uo=null,Yo=!1,Jo=0,Xo=null,t)throw Error(a(300));null===e||Nl||null!==(e=e.dependencies)&&Ii(e)&&(Nl=!0)}function ia(e,t,n,r){Uo=e;var i=0;do{if(Qo&&(Xo=null),Jo=0,Qo=!1,25<=i)throw Error(a(301));if(i+=1,Zo=_o=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}N.H=bl,o=t(n,r)}while(Qo);return o}function oa(){var e=N.H,t=e.useState()[0];return t="function"===typeof t.then?ua(t):t,e=e.useState()[0],(null!==_o?_o.memoizedState:null)!==e&&(Uo.flags|=1024),t}function aa(){var e=0!==qo;return qo=0,e}function la(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function sa(e){if(Yo){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Yo=!1}Wo=0,Zo=_o=Uo=null,Qo=!1,Jo=qo=0,Xo=null}function ca(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Zo?Uo.memoizedState=Zo=e:Zo=Zo.next=e,Zo}function da(){if(null===_o){var e=Uo.alternate;e=null!==e?e.memoizedState:null}else e=_o.next;var t=null===Zo?Uo.memoizedState:Zo.next;if(null!==t)Zo=t,_o=e;else{if(null===e){if(null===Uo.alternate)throw Error(a(467));throw Error(a(310))}e={memoizedState:(_o=e).memoizedState,baseState:_o.baseState,baseQueue:_o.baseQueue,queue:_o.queue,next:null},null===Zo?Uo.memoizedState=Zo=e:Zo=Zo.next=e}return Zo}function ua(e){var t=Jo;return Jo+=1,null===Xo&&(Xo=[]),e=ro(Xo,e,t),t=Uo,null===(null===Zo?t.memoizedState:Zo.next)&&(t=t.alternate,N.H=null===t||null===t.memoizedState?xl:Cl),e}function ha(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return ua(e);if(e.$$typeof===y)return Ri(e)}throw Error(a(438,String(e)))}function pa(e){var t=null,n=Uo.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Uo.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Uo.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function fa(e,t){return"function"===typeof t?t(e):t}function ga(e){return ma(da(),_o,e)}function ma(e,t,n){var r=e.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=n;var i=e.baseQueue,o=r.pending;if(null!==o){if(null!==i){var l=i.next;i.next=o.next,o.next=l}t.baseQueue=i=o,r.pending=null}if(o=e.baseState,null===i)e.memoizedState=o;else{var s=l=null,c=null,d=t=i.next,u=!1;do{var h=-536870913&d.lane;if(h!==d.lane?(xc&h)===h:(Wo&h)===h){var p=d.revertLane;if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),h===Ui&&(u=!0);else{if((Wo&p)===p){d=d.next,p===Ui&&(u=!0);continue}h={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},null===c?(s=c=h,l=o):c=c.next=h,Uo.lanes|=p,Sc|=p}h=d.action,Vo&&n(o,h),o=d.hasEagerState?d.eagerState:n(o,h)}else p={lane:h,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},null===c?(s=c=p,l=o):c=c.next=p,Uo.lanes|=h,Sc|=h;d=d.next}while(null!==d&&d!==t);if(null===c?l=o:c.next=s,!Kn(o,e.memoizedState)&&(Nl=!0,u&&null!==(n=_i)))throw n;e.memoizedState=o,e.baseState=l,e.baseQueue=c,r.lastRenderedState=o}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function xa(e){var t=da(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var l=i=i.next;do{o=e(o,l.action),l=l.next}while(l!==i);Kn(o,t.memoizedState)||(Nl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ca(e,t,n){var r=Uo,i=da(),o=hi;if(o){if(void 0===n)throw Error(a(407));n=n()}else n=t();var l=!Kn((_o||i).memoizedState,n);if(l&&(i.memoizedState=n,Nl=!0),i=i.queue,Wa(ya.bind(null,r,i,e),[e]),i.getSnapshot!==t||l||null!==Zo&&1&Zo.memoizedState.tag){if(r.flags|=2048,Da(9,{destroy:void 0},va.bind(null,r,i,n,t),null),null===gc)throw Error(a(349));o||0!==(127&Wo)||ba(r,t,n)}return n}function ba(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Uo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Uo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function va(e,t,n,r){t.value=n,t.getSnapshot=r,wa(t)&&Ea(e)}function ya(e,t,n){return n(function(){wa(t)&&Ea(e)})}function wa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kn(e,n)}catch(r){return!0}}function Ea(e){var t=Nr(e,2);null!==t&&Vc(t,e,2)}function ja(e){var t=ca();if("function"===typeof e){var n=e;if(e=n(),Vo){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},t}function Sa(e,t,n,r){return e.baseState=n,ma(e,_o,"function"===typeof r?r:fa)}function ka(e,t,n,r,i){if(pl(e))throw Error(a(485));if(null!==(e=t.action)){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==N.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,Aa(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Aa(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var o=N.T,a={};N.T=a;try{var l=n(i,r),s=N.S;null!==s&&s(a,l),Ta(e,t,l)}catch(c){Fa(e,t,c)}finally{null!==o&&null!==a.types&&(o.types=a.types),N.T=o}}else try{Ta(e,t,o=n(i,r))}catch(d){Fa(e,t,d)}}function Ta(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){La(e,t,n)},function(n){return Fa(e,t,n)}):La(e,t,n)}function La(e,t,n){t.status="fulfilled",t.value=n,Ia(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Aa(e,n)))}function Fa(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,Ia(t),t=t.next}while(t!==r)}e.action=null}function Ia(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Oa(e,t){return t}function Ra(e,t){if(hi){var n=gc.formState;if(null!==n){e:{var r=Uo;if(hi){if(ui){t:{for(var i=ui,o=fi;8!==i.nodeType;){if(!o){i=null;break t}if(null===(i=Nu(i.nextSibling))){i=null;break t}}i="F!"===(o=i.data)||"F"===o?i:null}if(i){ui=Nu(i.nextSibling),r="F!"===i.data;break e}}mi(r)}r=!1}r&&(t=n[0])}}return(n=ca()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},n.queue=r,n=dl.bind(null,Uo,r),r.dispatch=n,r=ja(!1),o=hl.bind(null,Uo,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=ca()).queue=i,n=ka.bind(null,Uo,i,o,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Na(e){return Pa(da(),_o,e)}function Pa(e,t,n){if(t=ma(e,t,Oa)[0],e=ga(fa)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=ua(t)}catch(Ae){if(Ae===Xi)throw eo;throw Ae}else r=t;var i=(t=da()).queue,o=i.dispatch;return n!==t.memoizedState&&(Uo.flags|=2048,Da(9,{destroy:void 0},za.bind(null,i,n),null)),[r,o,e]}function za(e,t){e.action=t}function $a(e){var t=da(),n=_o;if(null!==n)return Pa(t,n,e);da(),t=t.memoizedState;var r=(n=da()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Da(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=Uo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Uo.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ba(){return da().memoizedState}function Ma(e,t,n,r){var i=ca();Uo.flags|=e,i.memoizedState=Da(1|t,{destroy:void 0},n,void 0===r?null:r)}function Ha(e,t,n,r){var i=da();r=void 0===r?null:r;var o=i.memoizedState.inst;null!==_o&&null!==r&&ta(r,_o.memoizedState.deps)?i.memoizedState=Da(t,o,n,r):(Uo.flags|=e,i.memoizedState=Da(1|t,o,n,r))}function Ga(e,t){Ma(8390656,8,e,t)}function Wa(e,t){Ha(2048,8,e,t)}function Ua(e){var t=da().memoizedState;return function(e){Uo.flags|=4;var t=Uo.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Uo.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&fc))throw Error(a(440));return t.impl.apply(void 0,arguments)}}function _a(e,t){return Ha(4,2,e,t)}function Za(e,t){return Ha(4,4,e,t)}function Ya(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Qa(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Ha(4,4,Ya.bind(null,t,e),n)}function Va(){}function qa(e,t){var n=da();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&ta(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ja(e,t){var n=da();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&ta(t,r[1]))return r[0];if(r=e(),Vo){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function Xa(e,t,n){return void 0===n||0!==(1073741824&Wo)&&0===(261930&xc)?e.memoizedState=t:(e.memoizedState=n,e=Qc(),Uo.lanes|=e,Sc|=e,n)}function Ka(e,t,n,r){return Kn(n,t)?n:null!==Lo.current?(e=Xa(e,n,r),Kn(e,t)||(Nl=!0),e):0===(42&Wo)||0!==(1073741824&Wo)&&0===(261930&xc)?(Nl=!0,e.memoizedState=n):(e=Qc(),Uo.lanes|=e,Sc|=e,t)}function el(e,t,n,r,i){var o=P.p;P.p=0!==o&&8>o?o:8;var a=N.T,l={};N.T=l,hl(e,!1,t,n);try{var s=i(),c=N.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then){var d=function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r);ul(e,t,d,Yc())}else ul(e,t,r,Yc())}catch(u){ul(e,t,{then:function(){},status:"rejected",reason:u},Yc())}finally{P.p=o,null!==a&&null!==l.types&&(a.types=l.types),N.T=a}}function tl(){}function nl(e,t,n,r){if(5!==e.tag)throw Error(a(476));var i=rl(e).queue;el(e,i,t,z,null===n?tl:function(){return il(e),n(r)})}function rl(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:z},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function il(e){var t=rl(e);null===t.next&&(t=e.alternate.memoizedState),ul(e,t.next.queue,{},Yc())}function ol(){return Ri(uh)}function al(){return da().memoizedState}function ll(){return da().memoizedState}function sl(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Yc(),r=yo(t,e=vo(n),n);return null!==r&&(Vc(r,t,n),wo(r,t,n)),t={cache:Mi()},void(e.payload=t)}t=t.return}}function cl(e,t,n){var r=Yc();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},pl(e)?fl(t,n):null!==(n=Rr(e,t,n,r))&&(Vc(n,e,r),gl(n,t,r))}function dl(e,t,n){ul(e,t,n,Yc())}function ul(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(pl(e))fl(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Kn(l,a))return Or(e,t,i,0),null===gc&&Ir(),!1}catch(s){}if(null!==(n=Rr(e,t,i,r)))return Vc(n,e,r),gl(n,t,r),!0}return!1}function hl(e,t,n,r){if(r={lane:2,revertLane:Wd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pl(e)){if(t)throw Error(a(479))}else null!==(t=Rr(e,n,r,2))&&Vc(t,e,2)}function pl(e){var t=e.alternate;return e===Uo||null!==t&&t===Uo}function fl(e,t){Qo=Yo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gl(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pe(e,n)}}var ml={readContext:Ri,use:ha,useCallback:ea,useContext:ea,useEffect:ea,useImperativeHandle:ea,useLayoutEffect:ea,useInsertionEffect:ea,useMemo:ea,useReducer:ea,useRef:ea,useState:ea,useDebugValue:ea,useDeferredValue:ea,useTransition:ea,useSyncExternalStore:ea,useId:ea,useHostTransitionStatus:ea,useFormState:ea,useActionState:ea,useOptimistic:ea,useMemoCache:ea,useCacheRefresh:ea};ml.useEffectEvent=ea;var xl={readContext:Ri,use:ha,useCallback:function(e,t){return ca().memoizedState=[e,void 0===t?null:t],e},useContext:Ri,useEffect:Ga,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Ma(4194308,4,Ya.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ma(4194308,4,e,t)},useInsertionEffect:function(e,t){Ma(4,2,e,t)},useMemo:function(e,t){var n=ca();t=void 0===t?null:t;var r=e();if(Vo){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ca();if(void 0!==n){var i=n(t);if(Vo){be(!0);try{n(t)}finally{be(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=cl.bind(null,Uo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ca().memoizedState=e},useState:function(e){var t=(e=ja(e)).queue,n=dl.bind(null,Uo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Va,useDeferredValue:function(e,t){return Xa(ca(),e,t)},useTransition:function(){var e=ja(!1);return e=el.bind(null,Uo,e.queue,!0,!1),ca().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Uo,i=ca();if(hi){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===gc)throw Error(a(349));0!==(127&xc)||ba(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ga(ya.bind(null,r,o,e),[e]),r.flags|=2048,Da(9,{destroy:void 0},va.bind(null,r,o,n,t),null),n},useId:function(){var e=ca(),t=gc.identifierPrefix;if(hi){var n=ii;t="_"+t+"R_"+(n=(ri&~(1<<32-ve(ri)-1)).toString(32)+n),0<(n=qo++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Ko++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ol,useFormState:Ra,useActionState:Ra,useOptimistic:function(e){var t=ca();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=hl.bind(null,Uo,!0,n),n.dispatch=t,[e,t]},useMemoCache:pa,useCacheRefresh:function(){return ca().memoizedState=sl.bind(null,Uo)},useEffectEvent:function(e){var t=ca(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&fc))throw Error(a(440));return n.impl.apply(void 0,arguments)}}},Cl={readContext:Ri,use:ha,useCallback:qa,useContext:Ri,useEffect:Wa,useImperativeHandle:Qa,useInsertionEffect:_a,useLayoutEffect:Za,useMemo:Ja,useReducer:ga,useRef:Ba,useState:function(){return ga(fa)},useDebugValue:Va,useDeferredValue:function(e,t){return Ka(da(),_o.memoizedState,e,t)},useTransition:function(){var e=ga(fa)[0],t=da().memoizedState;return["boolean"===typeof e?e:ua(e),t]},useSyncExternalStore:Ca,useId:al,useHostTransitionStatus:ol,useFormState:Na,useActionState:Na,useOptimistic:function(e,t){return Sa(da(),0,e,t)},useMemoCache:pa,useCacheRefresh:ll};Cl.useEffectEvent=Ua;var bl={readContext:Ri,use:ha,useCallback:qa,useContext:Ri,useEffect:Wa,useImperativeHandle:Qa,useInsertionEffect:_a,useLayoutEffect:Za,useMemo:Ja,useReducer:xa,useRef:Ba,useState:function(){return xa(fa)},useDebugValue:Va,useDeferredValue:function(e,t){var n=da();return null===_o?Xa(n,e,t):Ka(n,_o.memoizedState,e,t)},useTransition:function(){var e=xa(fa)[0],t=da().memoizedState;return["boolean"===typeof e?e:ua(e),t]},useSyncExternalStore:Ca,useId:al,useHostTransitionStatus:ol,useFormState:$a,useActionState:$a,useOptimistic:function(e,t){var n=da();return null!==_o?Sa(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:pa,useCacheRefresh:ll};function vl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}bl.useEffectEvent=Ua;var yl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Yc(),i=vo(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=yo(e,i,r))&&(Vc(t,e,r),wo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Yc(),i=vo(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=yo(e,i,r))&&(Vc(t,e,r),wo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yc(),r=vo(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=yo(e,r,n))&&(Vc(t,e,n),wo(t,e,n))}};function wl(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!er(n,r)||!er(i,o))}function El(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yl.enqueueReplaceState(t,t.state,null)}function jl(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}function Sl(e){Ar(e)}function kl(e){console.error(e)}function Al(e){Ar(e)}function Tl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ll(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Fl(e,t,n){return(n=vo(n)).tag=3,n.payload={element:null},n.callback=function(){Tl(e,t)},n}function Il(e){return(e=vo(e)).tag=3,e}function Ol(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var o=r.value;e.payload=function(){return i(o)},e.callback=function(){Ll(t,n,r)}}var a=n.stateNode;null!==a&&"function"===typeof a.componentDidCatch&&(e.callback=function(){Ll(t,n,r),"function"!==typeof i&&(null===$c?$c=new Set([this]):$c.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Rl=Error(a(461)),Nl=!1;function Pl(e,t,n,r){t.child=null===e?mo(t,null,n,r):go(t,e.child,n,r)}function zl(e,t,n,r,i){n=n.render;var o=t.ref;if("ref"in r){var a={};for(var l in r)"ref"!==l&&(a[l]=r[l])}else a=r;return Oi(t),r=na(e,t,n,a,o,i),l=aa(),null===e||Nl?(hi&&l&&li(t),t.flags|=1,Pl(e,t,r,i),t.child):(la(e,t,i),os(e,t,i))}function $l(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Mr(o)||void 0!==o.defaultProps||null!==n.compare?((e=Wr(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Dl(e,t,o,r,i))}if(o=e.child,!as(e,i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:er)(a,r)&&e.ref===t.ref)return os(e,t,i)}return t.flags|=1,(e=Hr(o,r)).ref=t.ref,e.return=t,t.child=e}function Dl(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(er(o,r)&&e.ref===t.ref){if(Nl=!1,t.pendingProps=r=o,!as(e,i))return t.lanes=e.lanes,os(e,t,i);0!==(131072&e.flags)&&(Nl=!0)}}return _l(e,t,n,r,i)}function Bl(e,t,n,r){var i=r.children,o=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(o=null!==o?o.baseLanes|n:n,null!==e){for(r=t.child=e.child,i=0;null!==r;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~o}else r=0,t.child=null;return Hl(e,t,o,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,Hl(e,t,null!==o?o.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&qi(0,null!==o?o.cachePool:null),null!==o?Io(t,o):Oo(),Do(t)}else null!==o?(qi(0,o.cachePool),Io(t,o),Bo(),t.memoizedState=null):(null!==e&&qi(0,null),Oo(),Bo());return Pl(e,t,i,n),t.child}function Ml(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hl(e,t,n,r,i){var o=Vi();return o=null===o?null:{parent:Bi._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&qi(0,null),Oo(),Do(t),null!==e&&Fi(e,t,r,!0),t.childLanes=i,null}function Gl(e,t){return(t=es({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Wl(e,t,n){return go(t,e.child,null,n),(e=Gl(t,t.pendingProps)).flags|=2,Mo(t),t.memoizedState=null,e}function Ul(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(a(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function _l(e,t,n,r,i){return Oi(t),n=na(e,t,n,r,void 0,i),r=aa(),null===e||Nl?(hi&&r&&li(t),t.flags|=1,Pl(e,t,n,i),t.child):(la(e,t,i),os(e,t,i))}function Zl(e,t,n,r,i,o){return Oi(t),t.updateQueue=null,n=ia(t,r,n,i),ra(e),r=aa(),null===e||Nl?(hi&&r&&li(t),t.flags|=1,Pl(e,t,n,o),t.child):(la(e,t,o),os(e,t,o))}function Yl(e,t,n,r,i){if(Oi(t),null===t.stateNode){var o=$r,a=n.contextType;"object"===typeof a&&null!==a&&(o=Ri(a)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=yl,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},Co(t),a=n.contextType,o.context="object"===typeof a&&null!==a?Ri(a):$r,o.state=t.memoizedState,"function"===typeof(a=n.getDerivedStateFromProps)&&(vl(t,n,a,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(a=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),a!==o.state&&yl.enqueueReplaceState(o,o.state,null),ko(t,r,o,i),So(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=jl(n,l);o.props=s;var c=o.context,d=n.contextType;a=$r,"object"===typeof d&&null!==d&&(a=Ri(d));var u=n.getDerivedStateFromProps;d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||c!==a)&&El(t,o,r,a),xo=!1;var h=t.memoizedState;o.state=h,ko(t,r,o,i),So(),c=t.memoizedState,l||h!==c||xo?("function"===typeof u&&(vl(t,n,u,r),c=t.memoizedState),(s=xo||wl(t,n,s,r,h,c,a))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=a,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,bo(e,t),d=jl(n,a=t.memoizedProps),o.props=d,u=t.pendingProps,h=o.context,c=n.contextType,s=$r,"object"===typeof c&&null!==c&&(s=Ri(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(a!==u||h!==s)&&El(t,o,r,s),xo=!1,h=t.memoizedState,o.state=h,ko(t,r,o,i),So();var p=t.memoizedState;a!==u||h!==p||xo||null!==e&&null!==e.dependencies&&Ii(e.dependencies)?("function"===typeof l&&(vl(t,n,l,r),p=t.memoizedState),(d=xo||wl(t,n,d,r,h,p,s)||null!==e&&null!==e.dependencies&&Ii(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=s,r=d):("function"!==typeof o.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Ul(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=go(t,e.child,null,i),t.child=go(t,null,n,i)):Pl(e,t,n,i),t.memoizedState=o.state,e=t.child):e=os(e,t,i),e}function Ql(e,t,n,r){return vi(),t.flags|=256,Pl(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ql(e){return{baseLanes:e,cachePool:Ji()}}function Jl(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Tc),e}function Xl(e,t,n){var r,i=t.pendingProps,o=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Ho.current)),r&&(o=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(hi){if(o?zo(t):Bo(),(e=ui)?null!==(e=null!==(e=Iu(e,fi))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ni?{id:ri,overflow:ii}:null,retryLane:536870912,hydrationErrors:null},(n=Zr(e)).return=t,t.child=n,di=t,ui=null):e=null,null===e)throw mi(t);return Ru(e)?t.lanes=32:t.lanes=536870912,null}var s=i.children;return i=i.fallback,o?(Bo(),s=es({mode:"hidden",children:s},o=t.mode),i=Ur(i,o,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,(i=t.child).memoizedState=ql(n),i.childLanes=Jl(e,r,n),t.memoizedState=Vl,Ml(null,i)):(zo(t),Kl(t,s))}var c=e.memoizedState;if(null!==c&&null!==(s=c.dehydrated)){if(l)256&t.flags?(zo(t),t.flags&=-257,t=ts(e,t,n)):null!==t.memoizedState?(Bo(),t.child=e.child,t.flags|=128,t=null):(Bo(),s=i.fallback,o=t.mode,i=es({mode:"visible",children:i.children},o),(s=Ur(s,o,n,null)).flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,go(t,e.child,null,n),(i=t.child).memoizedState=ql(n),i.childLanes=Jl(e,r,n),t.memoizedState=Vl,t=Ml(null,i));else if(zo(t),Ru(s)){if(r=s.nextSibling&&s.nextSibling.dataset)var d=r.dgst;r=d,(i=Error(a(419))).stack="",i.digest=r,wi({value:i,source:null,stack:null}),t=ts(e,t,n)}else if(Nl||Fi(e,t,n,!1),r=0!==(n&e.childLanes),Nl||r){if(null!==(r=gc)&&(0!==(i=ze(r,n))&&i!==c.retryLane))throw c.retryLane=i,Nr(e,i),Vc(r,e,i),Rl;Ou(s)||ld(),t=ts(e,t,n)}else Ou(s)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,ui=Nu(s.nextSibling),di=t,hi=!0,pi=null,fi=!1,null!==e&&ci(t,e),(t=Kl(t,i.children)).flags|=4096);return t}return o?(Bo(),s=i.fallback,o=t.mode,d=(c=e.child).sibling,(i=Hr(c,{mode:"hidden",children:i.children})).subtreeFlags=65011712&c.subtreeFlags,null!==d?s=Hr(d,s):(s=Ur(s,o,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,Ml(null,i),i=t.child,null===(s=e.child.memoizedState)?s=ql(n):(null!==(o=s.cachePool)?(c=Bi._currentValue,o=o.parent!==c?{parent:c,pool:c}:o):o=Ji(),s={baseLanes:s.baseLanes|n,cachePool:o}),i.memoizedState=s,i.childLanes=Jl(e,r,n),t.memoizedState=Vl,Ml(e.child,i)):(zo(t),e=(n=e.child).sibling,(n=Hr(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Kl(e,t){return(t=es({mode:"visible",children:t},e.mode)).return=e,e.child=t}function es(e,t){return(e=Br(22,e,null,t)).lanes=0,e}function ts(e,t,n){return go(t,e.child,null,n),(e=Kl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ns(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ti(e.return,t,n)}function rs(e,t,n,r,i,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i,a.treeForkCount=o)}function is(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;r=r.children;var a=Ho.current,l=0!==(2&a);if(l?(a=1&a|2,t.flags|=128):a&=1,H(Ho,a),Pl(e,t,r,n),r=hi?Kr:0,!l&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ns(e,n,t);else if(19===e.tag)ns(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Go(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rs(t,!1,i,n,o,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Go(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rs(t,!0,n,null,o,r);break;case"together":rs(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function os(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Sc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Fi(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Hr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Hr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function as(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ii(e))}function ls(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Nl=!0;else{if(!as(e,n)&&0===(128&t.flags))return Nl=!1,function(e,t,n){switch(t.tag){case 3:Q(t,t.stateNode.containerInfo),ki(0,Bi,e.memoizedState.cache),vi();break;case 27:case 5:q(t);break;case 4:Q(t,t.stateNode.containerInfo);break;case 10:ki(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,$o(t),null;break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(zo(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Xl(e,t,n):(zo(t),null!==(e=os(e,t,n))?e.sibling:null);zo(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Fi(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return is(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Ho,Ho.current),r)break;return null;case 22:return t.lanes=0,Bl(e,t,n,t.pendingProps);case 24:ki(0,Bi,e.memoizedState.cache)}return os(e,t,n)}(e,t,n);Nl=0!==(131072&e.flags)}else Nl=!1,hi&&0!==(1048576&t.flags)&&ai(t,Kr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=io(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var i=e.$$typeof;if(i===w){t.tag=11,t=zl(null,t,e,r,n);break e}if(i===S){t.tag=14,t=$l(null,t,e,r,n);break e}}throw t=O(e)||e,Error(a(306,t,""))}Mr(e)?(r=jl(e,r),t.tag=1,t=Yl(null,t,e,r,n)):(t.tag=0,t=_l(null,t,e,r,n))}return t;case 0:return _l(e,t,t.type,t.pendingProps,n);case 1:return Yl(e,t,r=t.type,i=jl(r,t.pendingProps),n);case 3:e:{if(Q(t,t.stateNode.containerInfo),null===e)throw Error(a(387));r=t.pendingProps;var o=t.memoizedState;i=o.element,bo(e,t),ko(t,r,null,n);var l=t.memoizedState;if(r=l.cache,ki(0,Bi,r),r!==o.cache&&Li(t,[Bi],n,!0),So(),r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ql(e,t,r,n);break e}if(r!==i){wi(i=Vr(Error(a(424)),t)),t=Ql(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ui=Nu(e.firstChild),di=t,hi=!0,pi=null,fi=!0,n=mo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(vi(),r===i){t=os(e,t,n);break e}Pl(e,t,r,n)}t=t.child}return t;case 26:return Ul(e,t),null===e?(n=Zu(t.type,null,t.pendingProps,null))?t.memoizedState=n:hi||(n=t.type,e=t.pendingProps,(r=xu(Z.current).createElement(n))[Ge]=t,r[We]=e,pu(r,n,e),tt(r),t.stateNode=r):t.memoizedState=Zu(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return q(t),null===e&&hi&&(r=t.stateNode=Du(t.type,t.pendingProps,Z.current),di=t,fi=!0,i=ui,Au(t.type)?(Pu=i,ui=Nu(r.firstChild)):ui=i),Pl(e,t,t.pendingProps.children,n),Ul(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&hi&&((i=r=ui)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ve])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===o)return e}if(null===(e=Nu(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,fi))?(t.stateNode=r,di=t,ui=Nu(r.firstChild),fi=!1,i=!0):i=!1),i||mi(t)),q(t),i=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,r=o.children,vu(i,o)?r=null:null!==l&&vu(i,l)&&(t.flags|=32),null!==t.memoizedState&&(i=na(e,t,oa,null,null,n),uh._currentValue=i),Ul(e,t),Pl(e,t,r,n),t.child;case 6:return null===e&&hi&&((e=n=ui)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Nu(e.nextSibling)))return null}return e}(n,t.pendingProps,fi))?(t.stateNode=n,di=t,ui=null,e=!0):e=!1),e||mi(t)),null;case 13:return Xl(e,t,n);case 4:return Q(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=go(t,null,r,n):Pl(e,t,r,n),t.child;case 11:return zl(e,t,t.type,t.pendingProps,n);case 7:return Pl(e,t,t.pendingProps,n),t.child;case 8:case 12:return Pl(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ki(0,t.type,r.value),Pl(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Oi(t),r=r(i=Ri(i)),t.flags|=1,Pl(e,t,r,n),t.child;case 14:return $l(e,t,t.type,t.pendingProps,n);case 15:return Dl(e,t,t.type,t.pendingProps,n);case 19:return is(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,i=0!==(128&t.flags);if(t.flags&=-129,null===e){if(hi){if("hidden"===r.mode)return e=Gl(t,r),t.lanes=536870912,Ml(null,e);if($o(t),(e=ui)?null!==(e=null!==(e=Iu(e,fi))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ni?{id:ri,overflow:ii}:null,retryLane:536870912,hydrationErrors:null},(n=Zr(e)).return=t,t.child=n,di=t,ui=null):e=null,null===e)throw mi(t);return t.lanes=536870912,null}return Gl(t,r)}var o=e.memoizedState;if(null!==o){var l=o.dehydrated;if($o(t),i)if(256&t.flags)t.flags&=-257,t=Wl(e,t,n);else{if(null===t.memoizedState)throw Error(a(558));t.child=e.child,t.flags|=128,t=null}else if(Nl||Fi(e,t,n,!1),i=0!==(n&e.childLanes),Nl||i){if(null!==(r=gc)&&0!==(l=ze(r,n))&&l!==o.retryLane)throw o.retryLane=l,Nr(e,l),Vc(r,e,l),Rl;ld(),t=Wl(e,t,n)}else e=o.treeContext,ui=Nu(l.nextSibling),di=t,hi=!0,pi=null,fi=!1,null!==e&&ci(t,e),(t=Gl(t,r)).flags|=4096;return t}return(e=Hr(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Bl(e,t,n,t.pendingProps);case 24:return Oi(t),r=Ri(Bi),null===e?(null===(i=Vi())&&(i=gc,o=Mi(),i.pooledCache=o,o.refCount++,null!==o&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:r,cache:i},Co(t),ki(0,Bi,i)):(0!==(e.lanes&n)&&(bo(e,t),ko(t,null,null,n),So()),i=e.memoizedState,o=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),ki(0,Bi,r)):(r=o.cache,ki(0,Bi,r),r!==i.cache&&Li(t,[Bi],n,!0))),Pl(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function ss(e){e.flags|=4}function cs(e,t,n,r,i){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&i)===i)if(e.stateNode.complete)e.flags|=8192;else{if(!id())throw oo=to,Ki;e.flags|=8192}}else e.flags&=-16777217}function ds(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!oh(t)){if(!id())throw oo=to,Ki;e.flags|=8192}}function us(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ie():536870912,e.lanes|=t,Lc|=t)}function hs(e,t){if(!hi)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ps(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fs(e,t,n){var r=t.pendingProps;switch(si(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return ps(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ai(Bi),V(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(bi(t)?ss(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,yi())),ps(t),null;case 26:var i=t.type,o=t.memoizedState;return null===e?(ss(t),null!==o?(ps(t),ds(t,o)):(ps(t),cs(t,i,0,0,n))):o?o!==e.memoizedState?(ss(t),ps(t),ds(t,o)):(ps(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&ss(t),ps(t),cs(t,i,0,0,n)),null;case 27:if(J(t),n=Z.current,i=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return ps(t),null}e=U.current,bi(t)?xi(t):(e=Du(i,r,n),t.stateNode=e,ss(t))}return ps(t),null;case 5:if(J(t),i=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return ps(t),null}if(o=U.current,bi(t))xi(t);else{var l=xu(Z.current);switch(o){case 1:o=l.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:o=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":o=l.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":o=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":(o=l.createElement("div")).innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o="string"===typeof r.is?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o="string"===typeof r.is?l.createElement(i,{is:r.is}):l.createElement(i)}}o[Ge]=t,o[We]=r;e:for(l=t.child;null!==l;){if(5===l.tag||6===l.tag)o.appendChild(l.stateNode);else if(4!==l.tag&&27!==l.tag&&null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;null===l.sibling;){if(null===l.return||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=o;e:switch(pu(o,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ss(t)}}return ps(t),cs(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(e=Z.current,bi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=di))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Ge]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||du(e.nodeValue,n)))||mi(t,!0)}else(e=xu(e).createTextNode(r))[Ge]=t,t.stateNode=e}return ps(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=bi(t),null!==n){if(null===e){if(!r)throw Error(a(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(a(557));e[Ge]=t}else vi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ps(t),e=!1}else n=yi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Mo(t),t):(Mo(t),null);if(0!==(128&t.flags))throw Error(a(558))}return ps(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=bi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[Ge]=t}else vi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ps(t),i=!1}else i=yi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(Mo(t),t):(Mo(t),null)}return Mo(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool),o=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),us(t,t.updateQueue),ps(t),null);case 4:return V(),null===e&&eu(t.stateNode.containerInfo),ps(t),null;case 10:return Ai(t.type),ps(t),null;case 19:if(M(Ho),null===(r=t.memoizedState))return ps(t),null;if(i=0!==(128&t.flags),null===(o=r.rendering))if(i)hs(r,!1);else{if(0!==jc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=Go(e))){for(t.flags|=128,hs(r,!1),e=o.updateQueue,t.updateQueue=e,us(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Gr(n,e),n=n.sibling;return H(Ho,1&Ho.current|2),hi&&oi(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&se()>Pc&&(t.flags|=128,i=!0,hs(r,!1),t.lanes=4194304)}else{if(!i)if(null!==(e=Go(o))){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,us(t,e),hs(r,!0),null===r.tail&&"hidden"===r.tailMode&&!o.alternate&&!hi)return ps(t),null}else 2*se()-r.renderingStartTime>Pc&&536870912!==n&&(t.flags|=128,i=!0,hs(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=r.last)?e.sibling=o:t.child=o,r.last=o)}return null!==r.tail?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=se(),e.sibling=null,n=Ho.current,H(Ho,i?1&n|2:1&n),hi&&oi(t,r.treeForkCount),e):(ps(t),null);case 22:case 23:return Mo(t),Ro(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(ps(t),6&t.subtreeFlags&&(t.flags|=8192)):ps(t),null!==(n=t.updateQueue)&&us(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&M(Qi),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ai(Bi),ps(t),null;case 25:case 30:return null}throw Error(a(156,t.tag))}function gs(e,t){switch(si(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ai(Bi),V(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return J(t),null;case 31:if(null!==t.memoizedState){if(Mo(t),null===t.alternate)throw Error(a(340));vi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Mo(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));vi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return M(Ho),null;case 4:return V(),null;case 10:return Ai(t.type),null;case 22:case 23:return Mo(t),Ro(),null!==e&&M(Qi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return Ai(Bi),null;default:return null}}function ms(e,t){switch(si(t),t.tag){case 3:Ai(Bi),V();break;case 26:case 27:case 5:J(t);break;case 4:V();break;case 31:null!==t.memoizedState&&Mo(t);break;case 13:Mo(t);break;case 19:M(Ho);break;case 10:Ai(t.type);break;case 22:case 23:Mo(t),Ro(),null!==e&&M(Qi);break;case 24:Ai(Bi)}}function xs(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var o=n.create,a=n.inst;r=o(),a.destroy=r}n=n.next}while(n!==i)}}catch(l){jd(t,t.return,l)}}function Cs(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var o=i.next;r=o;do{if((r.tag&e)===e){var a=r.inst,l=a.destroy;if(void 0!==l){a.destroy=void 0,i=t;var s=n,c=l;try{c()}catch(d){jd(i,s,d)}}}r=r.next}while(r!==o)}}catch(d){jd(t,t.return,d)}}function bs(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{To(t,n)}catch(r){jd(e,e.return,r)}}}function vs(e,t,n){n.props=jl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){jd(e,t,r)}}function ys(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(i){jd(e,t,i)}}function ws(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){jd(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){jd(e,t,o)}else n.current=null}function Es(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){jd(e,e.return,i)}}function js(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,l=null,s=null,c=null,d=null,u=null;for(f in n){var h=n[f];if(n.hasOwnProperty(f)&&null!=h)switch(f){case"checked":case"value":break;case"defaultValue":c=h;default:r.hasOwnProperty(f)||uu(e,t,f,null,r,h)}}for(var p in r){var f=r[p];if(h=n[p],r.hasOwnProperty(p)&&(null!=f||null!=h))switch(p){case"type":o=f;break;case"name":i=f;break;case"checked":d=f;break;case"defaultChecked":u=f;break;case"value":l=f;break;case"defaultValue":s=f;break;case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(a(137,t));break;default:f!==h&&uu(e,t,p,f,r,h)}}return void bt(e,l,s,c,d,u,o,i);case"select":for(o in f=l=s=p=null,n)if(c=n[o],n.hasOwnProperty(o)&&null!=c)switch(o){case"value":break;case"multiple":f=c;default:r.hasOwnProperty(o)||uu(e,t,o,null,r,c)}for(i in r)if(o=r[i],c=n[i],r.hasOwnProperty(i)&&(null!=o||null!=c))switch(i){case"value":p=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:o!==c&&uu(e,t,i,o,r,c)}return t=s,n=l,r=f,void(null!=p?wt(e,!!n,p,!1):!!r!==!!n&&(null!=t?wt(e,!!n,t,!0):wt(e,!!n,n?[]:"",!1)));case"textarea":for(s in f=p=null,n)if(i=n[s],n.hasOwnProperty(s)&&null!=i&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:uu(e,t,s,null,r,i)}for(l in r)if(i=r[l],o=n[l],r.hasOwnProperty(l)&&(null!=i||null!=o))switch(l){case"value":p=i;break;case"defaultValue":f=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(a(91));break;default:i!==o&&uu(e,t,l,i,r,o)}return void Et(e,p,f);case"option":for(var g in n)if(p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g))if("selected"===g)e.selected=!1;else uu(e,t,g,null,r,p);for(c in r)if(p=r[c],f=n[c],r.hasOwnProperty(c)&&p!==f&&(null!=p||null!=f))if("selected"===c)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else uu(e,t,c,p,r,f);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var m in n)p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m)&&uu(e,t,m,null,r,p);for(d in r)if(p=r[d],f=n[d],r.hasOwnProperty(d)&&p!==f&&(null!=p||null!=f))switch(d){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(a(137,t));break;default:uu(e,t,d,p,r,f)}return;default:if(Lt(t)){for(var x in n)p=n[x],n.hasOwnProperty(x)&&void 0!==p&&!r.hasOwnProperty(x)&&hu(e,t,x,void 0,r,p);for(u in r)p=r[u],f=n[u],!r.hasOwnProperty(u)||p===f||void 0===p&&void 0===f||hu(e,t,u,p,r,f);return}}for(var C in n)p=n[C],n.hasOwnProperty(C)&&null!=p&&!r.hasOwnProperty(C)&&uu(e,t,C,null,r,p);for(h in r)p=r[h],f=n[h],!r.hasOwnProperty(h)||p===f||null==p&&null==f||uu(e,t,h,p,r,f)}(r,e.type,n,t),r[We]=t}catch(i){jd(e,e.return,i)}}function Ss(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Au(e.type)||4===e.tag}function ks(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Ss(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Au(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function As(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Rt));else if(4!==r&&(27===r&&Au(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(As(e,t,n),e=e.sibling;null!==e;)As(e,t,n),e=e.sibling}function Ts(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&Au(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Ts(e,t,n),e=e.sibling;null!==e;)Ts(e,t,n),e=e.sibling}function Ls(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);pu(t,r,n),t[Ge]=e,t[We]=n}catch(o){jd(e,e.return,o)}}var Fs=!1,Is=!1,Os=!1,Rs="function"===typeof WeakSet?WeakSet:Set,Ns=null;function Ps(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Vs(e,n),4&r&&xs(5,n);break;case 1:if(Vs(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(a){jd(n,n.return,a)}else{var i=jl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){jd(n,n.return,l)}}64&r&&bs(n),512&r&&ys(n,n.return);break;case 3:if(Vs(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{To(e,t)}catch(a){jd(n,n.return,a)}}break;case 27:null===t&&4&r&&Ls(n);case 26:case 5:Vs(e,n),null===t&&4&r&&Es(n),512&r&&ys(n,n.return);break;case 12:Vs(e,n);break;case 31:Vs(e,n),4&r&&Hs(e,n);break;case 13:Vs(e,n),4&r&&Gs(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Td.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||Fs)){t=null!==t&&null!==t.memoizedState||Is,i=Fs;var o=Is;Fs=r,(Is=t)&&!o?Js(e,n,0!==(8772&n.subtreeFlags)):Vs(e,n),Fs=i,Is=o}break;case 30:break;default:Vs(e,n)}}function zs(e){var t=e.alternate;null!==t&&(e.alternate=null,zs(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $s=null,Ds=!1;function Bs(e,t,n){for(n=n.child;null!==n;)Ms(e,t,n),n=n.sibling}function Ms(e,t,n){if(Ce&&"function"===typeof Ce.onCommitFiberUnmount)try{Ce.onCommitFiberUnmount(xe,n)}catch(o){}switch(n.tag){case 26:Is||ws(n,t),Bs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Is||ws(n,t);var r=$s,i=Ds;Au(n.type)&&($s=n.stateNode,Ds=!1),Bs(e,t,n),Bu(n.stateNode),$s=r,Ds=i;break;case 5:Is||ws(n,t);case 6:if(r=$s,i=Ds,$s=null,Bs(e,t,n),Ds=i,null!==($s=r))if(Ds)try{(9===$s.nodeType?$s.body:"HTML"===$s.nodeName?$s.ownerDocument.body:$s).removeChild(n.stateNode)}catch(a){jd(n,t,a)}else try{$s.removeChild(n.stateNode)}catch(a){jd(n,t,a)}break;case 18:null!==$s&&(Ds?(Tu(9===(e=$s).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),_h(e)):Tu($s,n.stateNode));break;case 4:r=$s,i=Ds,$s=n.stateNode.containerInfo,Ds=!0,Bs(e,t,n),$s=r,Ds=i;break;case 0:case 11:case 14:case 15:Cs(2,n,t),Is||Cs(4,n,t),Bs(e,t,n);break;case 1:Is||(ws(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&vs(n,t,r)),Bs(e,t,n);break;case 21:Bs(e,t,n);break;case 22:Is=(r=Is)||null!==n.memoizedState,Bs(e,t,n),Is=r;break;default:Bs(e,t,n)}}function Hs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{_h(e)}catch(n){jd(t,t.return,n)}}}function Gs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{_h(e)}catch(n){jd(t,t.return,n)}}function Ws(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Rs),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Rs),t;default:throw Error(a(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ld.bind(null,e,t);t.then(r,r)}})}function Us(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(Au(s.type)){$s=s.stateNode,Ds=!1;break e}break;case 5:$s=s.stateNode,Ds=!1;break e;case 3:case 4:$s=s.stateNode.containerInfo,Ds=!0;break e}s=s.return}if(null===$s)throw Error(a(160));Ms(o,l,i),$s=null,Ds=!1,null!==(o=i.alternate)&&(o.return=null),i.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)Zs(t,e),t=t.sibling}var _s=null;function Zs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Us(t,e),Ys(e),4&r&&(Cs(3,e,e.return),xs(3,e),Cs(5,e,e.return));break;case 1:Us(t,e),Ys(e),512&r&&(Is||null===n||ws(n,n.return)),64&r&&Fs&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=_s;if(Us(t,e),Ys(e),512&r&&(Is||null===n||ws(n,n.return)),4&r){var o=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(o=i.getElementsByTagName("title")[0])||o[Ve]||o[Ge]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=i.createElement(r),i.head.insertBefore(o,i.querySelector("head > title"))),pu(o,r,n),o[Ge]=e,tt(o),r=o;break e;case"link":var l=rh("link","href",i).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((o=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}pu(o=i.createElement(r),r,n),i.head.appendChild(o);break;case"meta":if(l=rh("meta","content",i).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((o=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}pu(o=i.createElement(r),r,n),i.head.appendChild(o);break;default:throw Error(a(468,r))}o[Ge]=e,tt(o),r=o}e.stateNode=r}else ih(i,e.type,e.stateNode);else e.stateNode=Xu(i,r,e.memoizedProps);else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?ih(i,e.type,e.stateNode):Xu(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&js(e,e.memoizedProps,n.memoizedProps)}break;case 27:Us(t,e),Ys(e),512&r&&(Is||null===n||ws(n,n.return)),null!==n&&4&r&&js(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Us(t,e),Ys(e),512&r&&(Is||null===n||ws(n,n.return)),32&e.flags){i=e.stateNode;try{St(i,"")}catch(g){jd(e,e.return,g)}}4&r&&null!=e.stateNode&&js(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(Os=!0);break;case 6:if(Us(t,e),Ys(e),4&r){if(null===e.stateNode)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(g){jd(e,e.return,g)}}break;case 3:if(nh=null,i=_s,_s=Gu(t.containerInfo),Us(t,e),_s=i,Ys(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{_h(t.containerInfo)}catch(g){jd(e,e.return,g)}Os&&(Os=!1,Qs(e));break;case 4:r=_s,_s=Gu(e.stateNode.containerInfo),Us(t,e),Ys(e),_s=r;break;case 12:default:Us(t,e),Ys(e);break;case 31:case 19:Us(t,e),Ys(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ws(e,r)));break;case 13:Us(t,e),Ys(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Rc=se()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ws(e,r)));break;case 22:i=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,d=Fs,u=Is;if(Fs=d||i,Is=u||c,Us(t,e),Is=u,Fs=d,Ys(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||c||Fs||Is||qs(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(o=c.stateNode,i)"function"===typeof(l=o.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var h=c.memoizedProps.style,p=void 0!==h&&null!==h&&h.hasOwnProperty("display")?h.display:null;s.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(g){jd(c,c.return,g)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(g){jd(c,c.return,g)}}}else if(18===t.tag){if(null===n){c=t;try{var f=c.stateNode;i?Lu(f,!0):Lu(c.stateNode,!1)}catch(g){jd(c,c.return,g)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ws(e,n))));case 30:case 21:}}function Ys(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(Ss(r)){n=r;break}r=r.return}if(null==n)throw Error(a(160));switch(n.tag){case 27:var i=n.stateNode;Ts(e,ks(e),i);break;case 5:var o=n.stateNode;32&n.flags&&(St(o,""),n.flags&=-33),Ts(e,ks(e),o);break;case 3:case 4:var l=n.stateNode.containerInfo;As(e,ks(e),l);break;default:throw Error(a(161))}}catch(s){jd(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Qs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Qs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Vs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Ps(e,t.alternate,t),t=t.sibling}function qs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Cs(4,t,t.return),qs(t);break;case 1:ws(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&vs(t,t.return,n),qs(t);break;case 27:Bu(t.stateNode);case 26:case 5:ws(t,t.return),qs(t);break;case 22:null===t.memoizedState&&qs(t);break;default:qs(t)}e=e.sibling}}function Js(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,o=t,a=o.flags;switch(o.tag){case 0:case 11:case 15:Js(i,o,n),xs(4,o);break;case 1:if(Js(i,o,n),"function"===typeof(i=(r=o).stateNode).componentDidMount)try{i.componentDidMount()}catch(c){jd(r,r.return,c)}if(null!==(i=(r=o).updateQueue)){var l=r.stateNode;try{var s=i.shared.hiddenCallbacks;if(null!==s)for(i.shared.hiddenCallbacks=null,i=0;i<s.length;i++)Ao(s[i],l)}catch(c){jd(r,r.return,c)}}n&&64&a&&bs(o),ys(o,o.return);break;case 27:Ls(o);case 26:case 5:Js(i,o,n),n&&null===r&&4&a&&Es(o),ys(o,o.return);break;case 12:Js(i,o,n);break;case 31:Js(i,o,n),n&&4&a&&Hs(i,o);break;case 13:Js(i,o,n),n&&4&a&&Gs(i,o);break;case 22:null===o.memoizedState&&Js(i,o,n),ys(o,o.return);break;case 30:break;default:Js(i,o,n)}t=t.sibling}}function Xs(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Hi(n))}function Ks(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Hi(e))}function ec(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)tc(e,t,n,r),t=t.sibling}function tc(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ec(e,t,n,r),2048&i&&xs(9,t);break;case 1:case 31:case 13:default:ec(e,t,n,r);break;case 3:ec(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Hi(e)));break;case 12:if(2048&i){ec(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,a=o.id,l=o.onPostCommit;"function"===typeof l&&l(a,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){jd(t,t.return,s)}}else ec(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,a=t.alternate,null!==t.memoizedState?2&o._visibility?ec(e,t,n,r):rc(e,t):2&o._visibility?ec(e,t,n,r):(o._visibility|=2,nc(e,t,n,r,0!==(10256&t.subtreeFlags)||!1)),2048&i&&Xs(a,t);break;case 24:ec(e,t,n,r),2048&i&&Ks(t.alternate,t)}}function nc(e,t,n,r,i){for(i=i&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var o=e,a=t,l=n,s=r,c=a.flags;switch(a.tag){case 0:case 11:case 15:nc(o,a,l,s,i),xs(8,a);break;case 23:break;case 22:var d=a.stateNode;null!==a.memoizedState?2&d._visibility?nc(o,a,l,s,i):rc(o,a):(d._visibility|=2,nc(o,a,l,s,i)),i&&2048&c&&Xs(a.alternate,a);break;case 24:nc(o,a,l,s,i),i&&2048&c&&Ks(a.alternate,a);break;default:nc(o,a,l,s,i)}t=t.sibling}}function rc(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:rc(n,r),2048&i&&Xs(r.alternate,r);break;case 24:rc(n,r),2048&i&&Ks(r.alternate,r);break;default:rc(n,r)}t=t.sibling}}var ic=8192;function oc(e,t,n){if(e.subtreeFlags&ic)for(e=e.child;null!==e;)ac(e,t,n),e=e.sibling}function ac(e,t,n){switch(e.tag){case 26:oc(e,t,n),e.flags&ic&&null!==e.memoizedState&&function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var i=Yu(r.href),o=t.querySelector(Qu(i));if(o)return null!==(t=o._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=lh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,void tt(o);o=t.ownerDocument||t,r=Vu(r),(i=Mu.get(i))&&eh(r,i),tt(o=o.createElement("link"));var a=o;a._p=new Promise(function(e,t){a.onload=e,a.onerror=t}),pu(o,"link",r),n.instance=o}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=lh.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,_s,e.memoizedState,e.memoizedProps);break;case 5:default:oc(e,t,n);break;case 3:case 4:var r=_s;_s=Gu(e.stateNode.containerInfo),oc(e,t,n),_s=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=ic,ic=16777216,oc(e,t,n),ic=r):oc(e,t,n))}}function lc(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function sc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ns=r,uc(r,e)}lc(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)cc(e),e=e.sibling}function cc(e){switch(e.tag){case 0:case 11:case 15:sc(e),2048&e.flags&&Cs(9,e,e.return);break;case 3:case 12:default:sc(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,dc(e)):sc(e)}}function dc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ns=r,uc(r,e)}lc(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Cs(8,t,t.return),dc(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,dc(t));break;default:dc(t)}e=e.sibling}}function uc(e,t){for(;null!==Ns;){var n=Ns;switch(n.tag){case 0:case 11:case 15:Cs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Hi(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Ns=r;else e:for(n=e;null!==Ns;){var i=(r=Ns).sibling,o=r.return;if(zs(r),r===n){Ns=null;break e}if(null!==i){i.return=o,Ns=i;break e}Ns=o}}}var hc={getCacheForType:function(e){var t=Ri(Bi),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ri(Bi).controller.signal}},pc="function"===typeof WeakMap?WeakMap:Map,fc=0,gc=null,mc=null,xc=0,Cc=0,bc=null,vc=!1,yc=!1,wc=!1,Ec=0,jc=0,Sc=0,kc=0,Ac=0,Tc=0,Lc=0,Fc=null,Ic=null,Oc=!1,Rc=0,Nc=0,Pc=1/0,zc=null,$c=null,Dc=0,Bc=null,Mc=null,Hc=0,Gc=0,Wc=null,Uc=null,_c=0,Zc=null;function Yc(){return 0!==(2&fc)&&0!==xc?xc&-xc:null!==N.T?Wd():Be()}function Qc(){if(0===Tc)if(0===(536870912&xc)||hi){var e=je;0===(3932160&(je<<=1))&&(je=262144),Tc=e}else Tc=536870912;return null!==(e=No.current)&&(e.flags|=32),Tc}function Vc(e,t,n){(e!==gc||2!==Cc&&9!==Cc)&&null===e.cancelPendingCommit||(nd(e,0),Kc(e,xc,Tc,!1)),Re(e,n),0!==(2&fc)&&e===gc||(e===gc&&(0===(2&fc)&&(kc|=n),4===jc&&Kc(e,xc,Tc,!1)),zd(e))}function qc(e,t,n){if(0!==(6&fc))throw Error(a(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||Le(e,t),i=r?function(e,t){var n=fc;fc|=2;var r=od(),i=ad();gc!==e||xc!==t?(zc=null,Pc=se()+500,nd(e,t)):yc=Le(e,t);e:for(;;)try{if(0!==Cc&&null!==mc){t=mc;var o=bc;t:switch(Cc){case 1:Cc=0,bc=null,pd(e,t,o,1);break;case 2:case 9:if(no(o)){Cc=0,bc=null,hd(t);break}t=function(){2!==Cc&&9!==Cc||gc!==e||(Cc=7),zd(e)},o.then(t,t);break e;case 3:Cc=7;break e;case 4:Cc=5;break e;case 7:no(o)?(Cc=0,bc=null,hd(t)):(Cc=0,bc=null,pd(e,t,o,7));break;case 5:var l=null;switch(mc.tag){case 26:l=mc.memoizedState;case 5:case 27:var s=mc;if(l?oh(l):s.stateNode.complete){Cc=0,bc=null;var c=s.sibling;if(null!==c)mc=c;else{var d=s.return;null!==d?(mc=d,fd(d)):mc=null}break t}}Cc=0,bc=null,pd(e,t,o,5);break;case 6:Cc=0,bc=null,pd(e,t,o,6);break;case 8:td(),jc=6;break e;default:throw Error(a(462))}}dd();break}catch(u){rd(e,u)}return Si=ji=null,N.H=r,N.A=i,fc=n,null!==mc?0:(gc=null,xc=0,Ir(),jc)}(e,t):sd(e,t,!0),o=r;;){if(0===i){yc&&!r&&Kc(e,t,0,!1);break}if(n=e.current.alternate,!o||Xc(n)){if(2===i){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;i=Fc;var c=s.current.memoizedState.isDehydrated;if(c&&(nd(s,l).flags|=256),2!==(l=sd(s,l,!1))){if(wc&&!c){s.errorRecoveryDisabledLanes|=o,kc|=o,i=4;break e}o=Ic,Ic=i,null!==o&&(null===Ic?Ic=o:Ic.push.apply(Ic,o))}i=l}if(o=!1,2!==i)continue}}if(1===i){nd(e,0),Kc(e,t,0,!0);break}e:{switch(r=e,o=i){case 0:case 1:throw Error(a(345));case 4:if((4194048&t)!==t)break;case 6:Kc(r,t,Tc,!vc);break e;case 2:Ic=null;break;case 3:case 5:break;default:throw Error(a(329))}if((62914560&t)===t&&10<(i=Rc+300-se())){if(Kc(r,t,Tc,!vc),0!==Te(r,0,!0))break e;Hc=t,r.timeoutHandle=wu(Jc.bind(null,r,n,Ic,zc,Oc,t,Tc,kc,Lc,vc,o,"Throttled",-0,0),i)}else Jc(r,n,Ic,zc,Oc,t,Tc,kc,Lc,vc,o,null,-0,0)}break}i=sd(e,t,!1),o=!1}zd(e)}function Jc(e,t,n,r,i,o,a,l,s,c,d,u,h,p){if(e.timeoutHandle=-1,8192&(u=t.subtreeFlags)||16785408===(16785408&u)){ac(t,o,u={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt});var f=(62914560&o)===o?Rc-se():(4194048&o)===o?Nc-se():0;if(f=function(e,t){return e.stylesheets&&0===e.count&&ch(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===ah&&(ah=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var i=n[r],o=i.transferSize,a=i.initiatorType,l=i.duration;if(o&&l&&fu(a)){for(a=0,l=i.responseEnd,r+=1;r<n.length;r++){var s=n[r],c=s.startTime;if(c>l)break;var d=s.transferSize,u=s.initiatorType;d&&fu(u)&&(a+=d*((s=s.responseEnd)<l?1:(l-c)/(s-c)))}if(--r,t+=8*(o+a)/(i.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var i=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>ah?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}(u,f),null!==f)return Hc=o,e.cancelPendingCommit=f(md.bind(null,e,t,o,n,r,i,a,l,s,d,u,null,h,p)),void Kc(e,o,a,!c)}md(e,t,o,n,r,i,a,l,s)}function Xc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Kn(o(),i))return!1}catch(a){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kc(e,t,n,r){t&=~Ac,t&=~kc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var o=31-ve(i),a=1<<o;r[o]=-1,i&=~a}0!==n&&Ne(e,n,t)}function ed(){return 0!==(6&fc)||($d(0,!1),!1)}function td(){if(null!==mc){if(0===Cc)var e=mc.return;else Si=ji=null,sa(e=mc),so=null,co=0,e=mc;for(;null!==e;)ms(e.alternate,e),e=e.return;mc=null}}function nd(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,Eu(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Hc=0,td(),gc=e,mc=n=Hr(e.current,null),xc=t,Cc=0,bc=null,vc=!1,yc=Le(e,t),wc=!1,Lc=Tc=Ac=kc=Sc=jc=0,Ic=Fc=null,Oc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-ve(r),o=1<<i;t|=e[i],r&=~o}return Ec=t,Ir(),n}function rd(e,t){Uo=null,N.H=ml,t===Xi||t===eo?(t=ao(),Cc=3):t===Ki?(t=ao(),Cc=4):Cc=t===Rl?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,bc=t,null===mc&&(jc=1,Tl(e,Vr(t,e.current)))}function id(){var e=No.current;return null===e||((4194048&xc)===xc?null===Po:((62914560&xc)===xc||0!==(536870912&xc))&&e===Po)}function od(){var e=N.H;return N.H=ml,null===e?ml:e}function ad(){var e=N.A;return N.A=hc,e}function ld(){jc=4,vc||(4194048&xc)!==xc&&null!==No.current||(yc=!0),0===(134217727&Sc)&&0===(134217727&kc)||null===gc||Kc(gc,xc,Tc,!1)}function sd(e,t,n){var r=fc;fc|=2;var i=od(),o=ad();gc===e&&xc===t||(zc=null,nd(e,t)),t=!1;var a=jc;e:for(;;)try{if(0!==Cc&&null!==mc){var l=mc,s=bc;switch(Cc){case 8:td(),a=6;break e;case 3:case 2:case 9:case 6:null===No.current&&(t=!0);var c=Cc;if(Cc=0,bc=null,pd(e,l,s,c),n&&yc){a=0;break e}break;default:c=Cc,Cc=0,bc=null,pd(e,l,s,c)}}cd(),a=jc;break}catch(d){rd(e,d)}return t&&e.shellSuspendCounter++,Si=ji=null,fc=r,N.H=i,N.A=o,null===mc&&(gc=null,xc=0,Ir()),a}function cd(){for(;null!==mc;)ud(mc)}function dd(){for(;null!==mc&&!ae();)ud(mc)}function ud(e){var t=ls(e.alternate,e,Ec);e.memoizedProps=e.pendingProps,null===t?fd(e):mc=t}function hd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zl(n,t,t.pendingProps,t.type,void 0,xc);break;case 11:t=Zl(n,t,t.pendingProps,t.type.render,t.ref,xc);break;case 5:sa(t);default:ms(n,t),t=ls(n,t=mc=Gr(t,Ec),Ec)}e.memoizedProps=e.pendingProps,null===t?fd(e):mc=t}function pd(e,t,n,r){Si=ji=null,sa(t),so=null,co=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Fi(t,n,i,!0),null!==(n=No.current)){switch(n.tag){case 31:case 13:return null===Po?ld():null===n.alternate&&0===jc&&(jc=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===to?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),Sd(e,r,i)),!1;case 22:return n.flags|=65536,r===to?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),Sd(e,r,i)),!1}throw Error(a(435,n.tag))}return Sd(e,r,i),ld(),!1}if(hi)return null!==(t=No.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==gi&&wi(Vr(e=Error(a(422),{cause:r}),n))):(r!==gi&&wi(Vr(t=Error(a(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=Vr(r,n),Eo(e,i=Fl(e.stateNode,r,i)),4!==jc&&(jc=2)),!1;var o=Error(a(520),{cause:r});if(o=Vr(o,n),null===Fc?Fc=[o]:Fc.push(o),4!==jc&&(jc=2),null===t)return!0;r=Vr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,Eo(n,e=Fl(n.stateNode,r,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===$c||!$c.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,Ol(i=Il(i),e,n,r),Eo(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,xc))return jc=1,Tl(e,Vr(n,e.current)),void(mc=null)}catch(o){if(null!==i)throw mc=i,o;return jc=1,Tl(e,Vr(n,e.current)),void(mc=null)}32768&t.flags?(hi||1===r?e=!0:yc||0!==(536870912&xc)?e=!1:(vc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=No.current)&&13===r.tag&&(r.flags|=16384))),gd(t,e)):fd(t)}function fd(e){var t=e;do{if(0!==(32768&t.flags))return void gd(t,vc);e=t.return;var n=fs(t.alternate,t,Ec);if(null!==n)return void(mc=n);if(null!==(t=t.sibling))return void(mc=t);mc=t=e}while(null!==t);0===jc&&(jc=5)}function gd(e,t){do{var n=gs(e.alternate,e);if(null!==n)return n.flags&=32767,void(mc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(mc=e);mc=e=n}while(null!==e);jc=6,mc=null}function md(e,t,n,r,i,o,l,s,c){e.cancelPendingCommit=null;do{yd()}while(0!==Dc);if(0!==(6&fc))throw Error(a(327));if(null!==t){if(t===e.current)throw Error(a(177));if(o=t.lanes|t.childLanes,function(e,t,n,r,i,o){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var d=31-ve(n),u=1<<d;l[d]=0,s[d]=-1;var h=c[d];if(null!==h)for(c[d]=null,d=0;d<h.length;d++){var p=h[d];null!==p&&(p.lane&=-536870913)}n&=~u}0!==r&&Ne(e,r,0),0!==o&&0===i&&0!==e.tag&&(e.suspendedLanes|=o&~(a&~t))}(e,n,o|=Fr,l,s,c),e===gc&&(mc=gc=null,xc=0),Mc=t,Bc=e,Hc=n,Gc=o,Wc=i,Uc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,ie(he,function(){return wd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=N.T,N.T=null,i=P.p,P.p=2,l=fc,fc|=4;try{!function(e,t){if(e=e.containerInfo,gu=vh,or(e=ir(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(m){n=null;break e}var l=0,s=-1,c=-1,d=0,u=0,h=e,p=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(s=l+i),h!==o||0!==r&&3!==h.nodeType||(c=l+r),3===h.nodeType&&(l+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===n&&++d===i&&(s=l),p===o&&++u===r&&(c=l),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(mu={focusedElem:e,selectionRange:n},vh=!1,Ns=t;null!==Ns;)if(e=(t=Ns).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Ns=e;else for(;null!==Ns;){switch(o=(t=Ns).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(i=e[n]).ref.impl=i.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var g=jl(n.type,i);e=r.getSnapshotBeforeUpdate(g,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(x){jd(n,n.return,x)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))Fu(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fu(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(a(163))}if(null!==(e=t.sibling)){e.return=t.return,Ns=e;break}Ns=t.return}}(e,t)}finally{fc=l,P.p=i,N.T=r}}Dc=1,xd(),Cd(),bd()}}function xd(){if(1===Dc){Dc=0;var e=Bc,t=Mc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=N.T,N.T=null;var r=P.p;P.p=2;var i=fc;fc|=4;try{Zs(t,e);var o=mu,a=ir(e.containerInfo),l=o.focusedElem,s=o.selectionRange;if(a!==l&&l&&l.ownerDocument&&rr(l.ownerDocument.documentElement,l)){if(null!==s&&or(l)){var c=s.start,d=s.end;if(void 0===d&&(d=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(d,l.value.length);else{var u=l.ownerDocument||document,h=u&&u.defaultView||window;if(h.getSelection){var p=h.getSelection(),f=l.textContent.length,g=Math.min(s.start,f),m=void 0===s.end?g:Math.min(s.end,f);!p.extend&&g>m&&(a=m,m=g,g=a);var x=nr(l,g),C=nr(l,m);if(x&&C&&(1!==p.rangeCount||p.anchorNode!==x.node||p.anchorOffset!==x.offset||p.focusNode!==C.node||p.focusOffset!==C.offset)){var b=u.createRange();b.setStart(x.node,x.offset),p.removeAllRanges(),g>m?(p.addRange(b),p.extend(C.node,C.offset)):(b.setEnd(C.node,C.offset),p.addRange(b))}}}}for(u=[],p=l;p=p.parentNode;)1===p.nodeType&&u.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<u.length;l++){var v=u[l];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}vh=!!gu,mu=gu=null}finally{fc=i,P.p=r,N.T=n}}e.current=t,Dc=2}}function Cd(){if(2===Dc){Dc=0;var e=Bc,t=Mc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=N.T,N.T=null;var r=P.p;P.p=2;var i=fc;fc|=4;try{Ps(e,t.alternate,t)}finally{fc=i,P.p=r,N.T=n}}Dc=3}}function bd(){if(4===Dc||3===Dc){Dc=0,le();var e=Bc,t=Mc,n=Hc,r=Uc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Dc=5:(Dc=0,Mc=Bc=null,vd(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&($c=null),De(n),t=t.stateNode,Ce&&"function"===typeof Ce.onCommitFiberRoot)try{Ce.onCommitFiberRoot(xe,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=N.T,i=P.p,P.p=2,N.T=null;try{for(var o=e.onRecoverableError,a=0;a<r.length;a++){var l=r[a];o(l.value,{componentStack:l.stack})}}finally{N.T=t,P.p=i}}0!==(3&Hc)&&yd(),zd(e),i=e.pendingLanes,0!==(261930&n)&&0!==(42&i)?e===Zc?_c++:(_c=0,Zc=e):_c=0,$d(0,!1)}}function vd(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Hi(t)))}function yd(){return xd(),Cd(),bd(),wd()}function wd(){if(5!==Dc)return!1;var e=Bc,t=Gc;Gc=0;var n=De(Hc),r=N.T,i=P.p;try{P.p=32>n?32:n,N.T=null,n=Wc,Wc=null;var o=Bc,l=Hc;if(Dc=0,Mc=Bc=null,Hc=0,0!==(6&fc))throw Error(a(331));var s=fc;if(fc|=4,cc(o.current),tc(o,o.current,l,n),fc=s,$d(0,!1),Ce&&"function"===typeof Ce.onPostCommitFiberRoot)try{Ce.onPostCommitFiberRoot(xe,o)}catch(c){}return!0}finally{P.p=i,N.T=r,vd(e,t)}}function Ed(e,t,n){t=Vr(n,t),null!==(e=yo(e,t=Fl(e.stateNode,t,2),2))&&(Re(e,2),zd(e))}function jd(e,t,n){if(3===e.tag)Ed(e,e,n);else for(;null!==t;){if(3===t.tag){Ed(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===$c||!$c.has(r))){e=Vr(n,e),null!==(r=yo(t,n=Il(2),2))&&(Ol(n,r,t,e),Re(r,2),zd(r));break}}t=t.return}}function Sd(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pc;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(wc=!0,i.add(n),e=kd.bind(null,e,t,n),t.then(e,e))}function kd(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,gc===e&&(xc&n)===n&&(4===jc||3===jc&&(62914560&xc)===xc&&300>se()-Rc?0===(2&fc)&&nd(e,0):Ac|=n,Lc===xc&&(Lc=0)),zd(e)}function Ad(e,t){0===t&&(t=Ie()),null!==(e=Nr(e,t))&&(Re(e,t),zd(e))}function Td(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ad(e,n)}function Ld(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}null!==r&&r.delete(t),Ad(e,n)}var Fd=null,Id=null,Od=!1,Rd=!1,Nd=!1,Pd=0;function zd(e){e!==Id&&null===e.next&&(null===Id?Fd=Id=e:Id=Id.next=e),Rd=!0,Od||(Od=!0,Su(function(){0!==(6&fc)?ie(de,Dd):Bd()}))}function $d(e,t){if(!Nd&&Rd){Nd=!0;do{for(var n=!1,r=Fd;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var o=0;else{var a=r.suspendedLanes,l=r.pingedLanes;o=(1<<31-ve(42|e)+1)-1,o=201326741&(o&=i&~(a&~l))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,Gd(r,o))}else o=xc,0===(3&(o=Te(r,r===gc?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||Le(r,o)||(n=!0,Gd(r,o));r=r.next}}while(n);Nd=!1}}function Dd(){Bd()}function Bd(){Rd=Od=!1;var e=0;0!==Pd&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==yu&&(yu=e,!0);return yu=null,!1}()&&(e=Pd);for(var t=se(),n=null,r=Fd;null!==r;){var i=r.next,o=Md(r,t);0===o?(r.next=null,null===n?Fd=i:n.next=i,null===i&&(Id=n)):(n=r,(0!==e||0!==(3&o))&&(Rd=!0)),r=i}0!==Dc&&5!==Dc||$d(e,!1),0!==Pd&&(Pd=0)}function Md(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var a=31-ve(o),l=1<<a,s=i[a];-1===s?0!==(l&n)&&0===(l&r)||(i[a]=Fe(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(n=xc,n=Te(e,e===(t=gc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===Cc||9===Cc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&oe(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Le(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&oe(r),De(n)){case 2:case 8:n=ue;break;case 32:default:n=he;break;case 268435456:n=fe}return r=Hd.bind(null,e),n=ie(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&oe(r),e.callbackPriority=2,e.callbackNode=null,2}function Hd(e,t){if(0!==Dc&&5!==Dc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(yd()&&e.callbackNode!==n)return null;var r=xc;return 0===(r=Te(e,e===gc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(qc(e,r,t),Md(e,se()),null!=e.callbackNode&&e.callbackNode===n?Hd.bind(null,e):null)}function Gd(e,t){if(yd())return null;qc(e,t,!0)}function Wd(){if(0===Pd){var e=Ui;0===e&&(e=Ee,0===(261888&(Ee<<=1))&&(Ee=256)),Pd=e}return Pd}function Ud(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Ot(""+e)}function _d(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Zd=0;Zd<Sr.length;Zd++){var Yd=Sr[Zd];kr(Yd.toLowerCase(),"on"+(Yd[0].toUpperCase()+Yd.slice(1)))}kr(xr,"onAnimationEnd"),kr(Cr,"onAnimationIteration"),kr(br,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(vr,"onTransitionRun"),kr(yr,"onTransitionStart"),kr(wr,"onTransitionCancel"),kr(Er,"onTransitionEnd"),ot("onMouseEnter",["mouseout","mouseover"]),ot("onMouseLeave",["mouseout","mouseover"]),ot("onPointerEnter",["pointerout","pointerover"]),ot("onPointerLeave",["pointerout","pointerover"]),it("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),it("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),it("onBeforeInput",["compositionend","keypress","textInput","paste"]),it("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qd));function qd(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;o=l,i.currentTarget=c;try{o(i)}catch(d){Ar(d)}i.currentTarget=null,o=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;o=l,i.currentTarget=c;try{o(i)}catch(d){Ar(d)}i.currentTarget=null,o=s}}}}function Jd(e,t){var n=t[_e];void 0===n&&(n=t[_e]=new Set);var r=e+"__bubble";n.has(r)||(tu(t,e,2,!1),n.add(r))}function Xd(e,t,n){var r=0;t&&(r|=4),tu(n,e,r,t)}var Kd="_reactListening"+Math.random().toString(36).slice(2);function eu(e){if(!e[Kd]){e[Kd]=!0,nt.forEach(function(t){"selectionchange"!==t&&(Vd.has(t)||Xd(t,!1,e),Xd(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Kd]||(t[Kd]=!0,Xd("selectionchange",!1,t))}}function tu(e,t,n,r){switch(Ah(t)){case 2:var i=yh;break;case 8:i=wh;break;default:i=Eh}n=i.bind(null,t,n,e),i=void 0,!Wt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nu(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===i)break;if(4===a)for(a=r.return;null!==a;){var c=a.tag;if((3===c||4===c)&&a.stateNode.containerInfo===i)return;a=a.return}for(;null!==l;){if(null===(a=Je(l)))return;if(5===(c=a.tag)||6===c||26===c||27===c){r=o=a;continue e}l=l.parentNode}}r=r.return}Mt(function(){var r=o,i=Pt(n),a=[];e:{var l=jr.get(e);if(void 0!==l){var c=rn,d=e;switch(e){case"keypress":if(0===Vt(n))break e;case"keydown":case"keyup":c=bn;break;case"focusin":d="focus",c=dn;break;case"focusout":d="blur",c=dn;break;case"beforeblur":case"afterblur":c=dn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=cn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=yn;break;case xr:case Cr:case br:c=un;break;case Er:c=wn;break;case"scroll":case"scrollend":c=an;break;case"wheel":c=En;break;case"copy":case"cut":case"paste":c=hn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=vn;break;case"toggle":case"beforetoggle":c=jn}var u=0!==(4&t),h=!u&&("scroll"===e||"scrollend"===e),p=u?null!==l?l+"Capture":null:l;u=[];for(var f,g=r;null!==g;){var m=g;if(f=m.stateNode,5!==(m=m.tag)&&26!==m&&27!==m||null===f||null===p||null!=(m=Ht(g,p))&&u.push(ru(g,m,f)),h)break;g=g.return}0<u.length&&(l=new c(l,d,null,n,i),a.push({event:l,listeners:u}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Nt||!(d=n.relatedTarget||n.fromElement)||!Je(d)&&!d[Ue])&&(c||l)&&(l=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=r,null!==(d=(d=n.relatedTarget||n.toElement)?Je(d):null)&&(h=s(d),u=d.tag,d!==h||5!==u&&27!==u&&6!==u)&&(d=null)):(c=null,d=r),c!==d)){if(u=sn,m="onMouseLeave",p="onMouseEnter",g="mouse","pointerout"!==e&&"pointerover"!==e||(u=vn,m="onPointerLeave",p="onPointerEnter",g="pointer"),h=null==c?l:Ke(c),f=null==d?l:Ke(d),(l=new u(m,g+"leave",c,n,i)).target=h,l.relatedTarget=f,m=null,Je(i)===r&&((u=new u(p,g+"enter",d,n,i)).target=f,u.relatedTarget=h,m=u),h=m,c&&d)e:{for(u=ou,g=d,f=0,m=p=c;m;m=u(m))f++;m=0;for(var x=g;x;x=u(x))m++;for(;0<f-m;)p=u(p),f--;for(;0<m-f;)g=u(g),m--;for(;f--;){if(p===g||null!==g&&p===g.alternate){u=p;break e}p=u(p),g=u(g)}u=null}else u=null;null!==c&&au(a,l,c,u,!1),null!==d&&null!==h&&au(a,h,d,u,!0)}if("select"===(c=(l=r?Ke(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var C=Gn;else if(zn(l))if(Wn)C=Xn;else{C=qn;var b=Vn}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Lt(r.elementType)&&(C=Gn):C=Jn;switch(C&&(C=C(e,r))?$n(a,C,n,i):(b&&b(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&yt(l,"number",l.value)),b=r?Ke(r):window,e){case"focusin":(zn(b)||"true"===b.contentEditable)&&(lr=b,sr=r,cr=null);break;case"focusout":cr=sr=lr=null;break;case"mousedown":dr=!0;break;case"contextmenu":case"mouseup":case"dragend":dr=!1,ur(a,n,i);break;case"selectionchange":if(ar)break;case"keydown":case"keyup":ur(a,n,i)}var v;if(kn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Nn?On(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Ln&&"ko"!==n.locale&&(Nn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Nn&&(v=Qt()):(Zt="value"in(_t=i)?_t.value:_t.textContent,Nn=!0)),0<(b=iu(r,y)).length&&(y=new pn(y,e,null,n,i),a.push({event:y,listeners:b}),v?y.data=v:null!==(v=Rn(n))&&(y.data=v))),(v=Tn?function(e,t){switch(e){case"compositionend":return Rn(t);case"keypress":return 32!==t.which?null:(In=!0,Fn);case"textInput":return(e=t.data)===Fn&&In?null:e;default:return null}}(e,n):function(e,t){if(Nn)return"compositionend"===e||!kn&&On(e,t)?(e=Qt(),Yt=Zt=_t=null,Nn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ln&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(y=iu(r,"onBeforeInput")).length&&(b=new pn("onBeforeInput","beforeinput",null,n,i),a.push({event:b,listeners:y}),b.data=v)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var o=Ud((i[We]||null).action),a=r.submitter;a&&null!==(t=(t=a[We]||null)?Ud(t.formAction):a.getAttribute("formAction"))&&(o=t,a=null);var l=new rn("action","action",null,r,i);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Pd){var e=a?_d(i,a):new FormData(i);nl(n,{pending:!0,data:e,method:i.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=a?_d(i,a):new FormData(i),nl(n,{pending:!0,data:e,method:i.method,action:o},o,e))},currentTarget:i}]})}}(a,e,r,n,i)}qd(a,t)})}function ru(e,t,n){return{instance:e,listener:t,currentTarget:n}}function iu(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===o||(null!=(i=Ht(e,n))&&r.unshift(ru(e,i,o)),null!=(i=Ht(e,t))&&r.push(ru(e,i,o))),3===e.tag)return r;e=e.return}return[]}function ou(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function au(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,i?null!=(c=Ht(n,o))&&a.unshift(ru(n,c,s)):i||null!=(c=Ht(n,o))&&a.push(ru(n,c,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var lu=/\r\n?/g,su=/\u0000|\uFFFD/g;function cu(e){return("string"===typeof e?e:""+e).replace(lu,"\n").replace(su,"")}function du(e,t){return t=cu(t),cu(e)===t}function uu(e,t,n,r,i,o){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":dt(e,"class",r);break;case"tabIndex":dt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":dt(e,n,r);break;case"style":Tt(e,r,o);break;case"data":if("object"!==t){dt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Ot(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&uu(e,t,"name",i.name,i,null),uu(e,t,"formEncType",i.formEncType,i,null),uu(e,t,"formMethod",i.formMethod,i,null),uu(e,t,"formTarget",i.formTarget,i,null)):(uu(e,t,"encType",i.encType,i,null),uu(e,t,"method",i.method,i,null),uu(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Ot(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Rt);break;case"onScroll":null!=r&&Jd("scroll",e);break;case"onScrollEnd":null!=r&&Jd("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Ot(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Jd("beforetoggle",e),Jd("toggle",e),ct(e,"popover",r);break;case"xlinkActuate":ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ut(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ut(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ut(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ut(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ct(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&ct(e,n=Ft.get(n)||n,r)}}function hu(e,t,n,r,i,o){switch(n){case"style":Tt(e,r,o);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(a(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Jd("scroll",e);break;case"onScrollEnd":null!=r&&Jd("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:rt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(o=null!=(o=e[We]||null)?o[n]:null)&&e.removeEventListener(t,o,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):ct(e,n,r):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function pu(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Jd("error",e),Jd("load",e);var r,i=!1,o=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:uu(e,t,r,l,n,null)}}return o&&uu(e,t,"srcSet",n.srcSet,n,null),void(i&&uu(e,t,"src",n.src,n,null));case"input":Jd("invalid",e);var s=r=l=o=null,c=null,d=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(null!=u)switch(i){case"name":o=u;break;case"type":l=u;break;case"checked":c=u;break;case"defaultChecked":d=u;break;case"value":r=u;break;case"defaultValue":s=u;break;case"children":case"dangerouslySetInnerHTML":if(null!=u)throw Error(a(137,t));break;default:uu(e,t,i,u,n,null)}}return void vt(e,r,s,c,d,l,o,!1);case"select":for(o in Jd("invalid",e),i=l=r=null,n)if(n.hasOwnProperty(o)&&null!=(s=n[o]))switch(o){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":i=s;default:uu(e,t,o,s,n,null)}return t=r,n=l,e.multiple=!!i,void(null!=t?wt(e,!!i,t,!1):null!=n&&wt(e,!!i,n,!0));case"textarea":for(l in Jd("invalid",e),r=o=i=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":i=s;break;case"defaultValue":o=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(a(91));break;default:uu(e,t,l,s,n,null)}return void jt(e,i,o,r);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))if("selected"===c)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else uu(e,t,c,i,n,null);return;case"dialog":Jd("beforetoggle",e),Jd("toggle",e),Jd("cancel",e),Jd("close",e);break;case"iframe":case"object":Jd("load",e);break;case"video":case"audio":for(i=0;i<Qd.length;i++)Jd(Qd[i],e);break;case"image":Jd("error",e),Jd("load",e);break;case"details":Jd("toggle",e);break;case"embed":case"source":case"link":Jd("error",e),Jd("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in n)if(n.hasOwnProperty(d)&&null!=(i=n[d]))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:uu(e,t,d,i,n,null)}return;default:if(Lt(t)){for(u in n)n.hasOwnProperty(u)&&(void 0!==(i=n[u])&&hu(e,t,u,i,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(i=n[s])&&uu(e,t,s,i,n,null))}function fu(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var gu=null,mu=null;function xu(e){return 9===e.nodeType?e:e.ownerDocument}function Cu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bu(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function vu(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var yu=null;var wu="function"===typeof setTimeout?setTimeout:void 0,Eu="function"===typeof clearTimeout?clearTimeout:void 0,ju="function"===typeof Promise?Promise:void 0,Su="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ju?function(e){return ju.resolve(null).then(e).catch(ku)}:wu;function ku(e){setTimeout(function(){throw e})}function Au(e){return"head"===e}function Tu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)||"/&"===n){if(0===r)return e.removeChild(i),void _h(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Bu(e.ownerDocument.documentElement);else if("head"===n){Bu(n=e.ownerDocument.head);for(var o=n.firstChild;o;){var a=o.nextSibling,l=o.nodeName;o[Ve]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=a}}else"body"===n&&Bu(e.ownerDocument.body);n=i}while(n);_h(t)}function Lu(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Fu(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Fu(n),qe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Iu(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Nu(e.nextSibling)))return null}return e}function Ou(e){return"$?"===e.data||"$~"===e.data}function Ru(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Nu(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Pu=null;function zu(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Nu(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function $u(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Du(e,t,n){switch(t=xu(n),e){case"html":if(!(e=t.documentElement))throw Error(a(452));return e;case"head":if(!(e=t.head))throw Error(a(453));return e;case"body":if(!(e=t.body))throw Error(a(454));return e;default:throw Error(a(451))}}function Bu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qe(e)}var Mu=new Map,Hu=new Set;function Gu(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Wu=P.d;P.d={f:function(){var e=Wu.f(),t=ed();return e||t},r:function(e){var t=Xe(e);null!==t&&5===t.tag&&"form"===t.type?il(t):Wu.r(e)},D:function(e){Wu.D(e),_u("dns-prefetch",e,null)},C:function(e,t){Wu.C(e,t),_u("preconnect",e,t)},L:function(e,t,n){Wu.L(e,t,n);var r=Uu;if(r&&e&&t){var i='link[rel="preload"][as="'+Ct(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Ct(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+Ct(n.imageSizes)+'"]')):i+='[href="'+Ct(e)+'"]';var o=i;switch(t){case"style":o=Yu(e);break;case"script":o=qu(e)}Mu.has(o)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Mu.set(o,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(Qu(o))||"script"===t&&r.querySelector(Ju(o))||(pu(t=r.createElement("link"),"link",e),tt(t),r.head.appendChild(t)))}},m:function(e,t){Wu.m(e,t);var n=Uu;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+Ct(r)+'"][href="'+Ct(e)+'"]',o=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=qu(e)}if(!Mu.has(o)&&(e=p({rel:"modulepreload",href:e},t),Mu.set(o,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ju(o)))return}pu(r=n.createElement("link"),"link",e),tt(r),n.head.appendChild(r)}}},X:function(e,t){Wu.X(e,t);var n=Uu;if(n&&e){var r=et(n).hoistableScripts,i=qu(e),o=r.get(i);o||((o=n.querySelector(Ju(i)))||(e=p({src:e,async:!0},t),(t=Mu.get(i))&&th(e,t),tt(o=n.createElement("script")),pu(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(i,o))}},S:function(e,t,n){Wu.S(e,t,n);var r=Uu;if(r&&e){var i=et(r).hoistableStyles,o=Yu(e);t=t||"default";var a=i.get(o);if(!a){var l={loading:0,preload:null};if(a=r.querySelector(Qu(o)))l.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mu.get(o))&&eh(e,n);var s=a=r.createElement("link");tt(s),pu(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Ku(a,t,r)}a={type:"stylesheet",instance:a,count:1,state:l},i.set(o,a)}}},M:function(e,t){Wu.M(e,t);var n=Uu;if(n&&e){var r=et(n).hoistableScripts,i=qu(e),o=r.get(i);o||((o=n.querySelector(Ju(i)))||(e=p({src:e,async:!0,type:"module"},t),(t=Mu.get(i))&&th(e,t),tt(o=n.createElement("script")),pu(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(i,o))}}};var Uu="undefined"===typeof document?null:document;function _u(e,t,n){var r=Uu;if(r&&"string"===typeof t&&t){var i=Ct(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),Hu.has(i)||(Hu.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(pu(t=r.createElement("link"),"link",e),tt(t),r.head.appendChild(t)))}}function Zu(e,t,n,r){var i,o,l,s,c=(c=Z.current)?Gu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Yu(n.href),(r=(n=et(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Yu(n.href);var d=et(c).hoistableStyles,u=d.get(e);if(u||(c=c.ownerDocument||c,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,u),(d=c.querySelector(Qu(e)))&&!d._p&&(u.instance=d,u.state.loading=5),Mu.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mu.set(e,n),d||(i=c,o=e,l=n,s=u.state,i.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=i.createElement("link"),s.preload=o,o.addEventListener("load",function(){return s.loading|=1}),o.addEventListener("error",function(){return s.loading|=2}),pu(o,"link",l),tt(o),i.head.appendChild(o))))),t&&null===r)throw Error(a(528,""));return u}if(t&&null!==r)throw Error(a(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=qu(n),(r=(n=et(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Yu(e){return'href="'+Ct(e)+'"'}function Qu(e){return'link[rel="stylesheet"]['+e+"]"}function Vu(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function qu(e){return'[src="'+Ct(e)+'"]'}function Ju(e){return"script[async]"+e}function Xu(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Ct(n.href)+'"]');if(r)return t.instance=r,tt(r),r;var i=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return tt(r=(e.ownerDocument||e).createElement("style")),pu(r,"style",i),Ku(r,n.precedence,e),t.instance=r;case"stylesheet":i=Yu(n.href);var o=e.querySelector(Qu(i));if(o)return t.state.loading|=4,t.instance=o,tt(o),o;r=Vu(n),(i=Mu.get(i))&&eh(r,i),tt(o=(e.ownerDocument||e).createElement("link"));var l=o;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),pu(o,"link",r),t.state.loading|=4,Ku(o,n.precedence,e),t.instance=o;case"script":return o=qu(n.src),(i=e.querySelector(Ju(o)))?(t.instance=i,tt(i),i):(r=n,(i=Mu.get(o))&&th(r=p({},n),i),tt(i=(e=e.ownerDocument||e).createElement("script")),pu(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(a(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Ku(r,n.precedence,e));return t.instance}function Ku(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,o=i,a=0;a<r.length;a++){var l=r[a];if(l.dataset.precedence===t)o=l;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function eh(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function th(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var nh=null;function rh(e,t,n){if(null===nh){var r=new Map,i=nh=new Map;i.set(n,r)}else(r=(i=nh).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var o=n[i];if(!(o[Ve]||o[Ge]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var a=o.getAttribute(t)||"";a=e+a;var l=r.get(a);l?l.push(o):r.set(a,[o])}}return r}function ih(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function oh(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var ah=0;function lh(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)ch(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var sh=null;function ch(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,sh=new Map,t.forEach(dh,e),sh=null,lh.call(e))}function dh(e,t){if(!(4&t.state.loading)){var n=sh.get(e);if(n)var r=n.get(null);else{n=new Map,sh.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var a=i[o];"LINK"!==a.nodeName&&"not all"===a.getAttribute("media")||(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}a=(i=t.instance).getAttribute("data-precedence"),(o=n.get(a)||r)===r&&n.set(null,i),n.set(a,i),this.count++,r=lh.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),o?o.parentNode.insertBefore(i,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var uh={$$typeof:y,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function hh(e,t,n,r,i,o,a,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oe(0),this.hiddenUpdates=Oe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function ph(e,t,n,r,i,o,a,l,s,c,d,u){return e=new hh(e,t,n,a,s,c,d,u,l),t=1,!0===o&&(t|=24),o=Br(3,null,null,t),e.current=o,o.stateNode=e,(t=Mi()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},Co(o),e}function fh(e){return e?e=$r:$r}function gh(e,t,n,r,i,o){i=fh(i),null===r.context?r.context=i:r.pendingContext=i,(r=vo(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=yo(e,r,t))&&(Vc(n,0,t),wo(n,e,t))}function mh(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function xh(e,t){mh(e,t),(e=e.alternate)&&mh(e,t)}function Ch(e){if(13===e.tag||31===e.tag){var t=Nr(e,67108864);null!==t&&Vc(t,0,67108864),xh(e,67108864)}}function bh(e){if(13===e.tag||31===e.tag){var t=Yc(),n=Nr(e,t=$e(t));null!==n&&Vc(n,0,t),xh(e,t)}}var vh=!0;function yh(e,t,n,r){var i=N.T;N.T=null;var o=P.p;try{P.p=2,Eh(e,t,n,r)}finally{P.p=o,N.T=i}}function wh(e,t,n,r){var i=N.T;N.T=null;var o=P.p;try{P.p=8,Eh(e,t,n,r)}finally{P.p=o,N.T=i}}function Eh(e,t,n,r){if(vh){var i=jh(r);if(null===i)nu(e,t,r,Sh,n),zh(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Lh=$h(Lh,e,t,n,r,i),!0;case"dragenter":return Fh=$h(Fh,e,t,n,r,i),!0;case"mouseover":return Ih=$h(Ih,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Oh.set(o,$h(Oh.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Rh.set(o,$h(Rh.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(zh(e,r),4&t&&-1<Ph.indexOf(e)){for(;null!==i;){var o=Xe(i);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var a=ke(o.pendingLanes);if(0!==a){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;a;){var s=1<<31-ve(a);l.entanglements[1]|=s,a&=~s}zd(o),0===(6&fc)&&(Pc=se()+500,$d(0,!1))}}break;case 31:case 13:null!==(l=Nr(o,2))&&Vc(l,0,2),ed(),xh(o,2)}if(null===(o=jh(r))&&nu(e,t,r,Sh,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else nu(e,t,r,null,n)}}function jh(e){return kh(e=Pt(e))}var Sh=null;function kh(e){if(Sh=null,null!==(e=Je(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(31===n){if(null!==(e=d(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sh=e,null}function Ah(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case de:return 2;case ue:return 8;case he:case pe:return 32;case fe:return 268435456;default:return 32}default:return 32}}var Th=!1,Lh=null,Fh=null,Ih=null,Oh=new Map,Rh=new Map,Nh=[],Ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zh(e,t){switch(e){case"focusin":case"focusout":Lh=null;break;case"dragenter":case"dragleave":Fh=null;break;case"mouseover":case"mouseout":Ih=null;break;case"pointerover":case"pointerout":Oh.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rh.delete(t.pointerId)}}function $h(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=Xe(t))&&Ch(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Dh(e){var t=Je(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void Me(e.priority,function(){bh(n)})}else if(31===t){if(null!==(t=d(n)))return e.blockedOn=t,void Me(e.priority,function(){bh(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Bh(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=jh(e.nativeEvent);if(null!==n)return null!==(t=Xe(n))&&Ch(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Nt=r,n.target.dispatchEvent(r),Nt=null,t.shift()}return!0}function Mh(e,t,n){Bh(e)&&n.delete(t)}function Hh(){Th=!1,null!==Lh&&Bh(Lh)&&(Lh=null),null!==Fh&&Bh(Fh)&&(Fh=null),null!==Ih&&Bh(Ih)&&(Ih=null),Oh.forEach(Mh),Rh.forEach(Mh)}function Gh(e,t){e.blockedOn===t&&(e.blockedOn=null,Th||(Th=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Hh)))}var Wh=null;function Uh(e){Wh!==e&&(Wh=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wh===e&&(Wh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===kh(r||n))continue;break}var o=Xe(n);null!==o&&(e.splice(t,3),t-=3,nl(o,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function _h(e){function t(t){return Gh(t,e)}null!==Lh&&Gh(Lh,e),null!==Fh&&Gh(Fh,e),null!==Ih&&Gh(Ih,e),Oh.forEach(t),Rh.forEach(t);for(var n=0;n<Nh.length;n++){var r=Nh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Nh.length&&null===(n=Nh[0]).blockedOn;)Dh(n),null===n.blockedOn&&Nh.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],o=n[r+1],a=i[We]||null;if("function"===typeof o)a||Uh(n);else if(a){var l=null;if(o&&o.hasAttribute("formAction")){if(i=o,a=o[We]||null)l=a.formAction;else if(null!==kh(i))continue}else l=a.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Uh(n)}}}function Zh(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==i&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==i&&(i(),i=null)}}}function Yh(e){this._internalRoot=e}function Qh(e){this._internalRoot=e}Qh.prototype.render=Yh.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));gh(t.current,Yc(),e,t,null,null)},Qh.prototype.unmount=Yh.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;gh(e.current,2,null,e,null,null),ed(),t[Ue]=null}},Qh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Be();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nh.length&&0!==t&&t<Nh[n].priority;n++);Nh.splice(n,0,e),0===n&&Dh(e)}};var Vh=i.version;if("19.2.5"!==Vh)throw Error(a(527,Vh,"19.2.5"));P.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return u(i),e;if(o===r)return u(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=o;break}if(c===r){l=!0,r=i,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=i;break}if(c===r){l=!0,r=o,n=i;break}c=c.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?h(e):null)?null:e.stateNode};var qh={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.5"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{xe=Jh.inject(qh),Ce=Jh}catch(Kh){}}t.createRoot=function(e,t){if(!l(e))throw Error(a(299));var n=!1,r="",i=Sl,o=kl,s=Al;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=ph(e,1,!1,null,0,n,r,null,i,o,s,Zh),e[Ue]=t.current,eu(e),new Yh(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(a(299));var r=!1,i="",o=Sl,s=kl,c=Al,d=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(d=n.formState)),(t=ph(e,1,!0,t,0,r,i,d,o,s,c,Zh)).context=fh(null),n=t.current,(i=vo(r=$e(r=Yc()))).callback=null,yo(n,i,r),n=r,t.current.lanes=n,Re(t,n),zd(t),e[Ue]=t.current,eu(e),new Qh(t)},t.version="19.2.5"},672(e,t,n){var r=n(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=a.p;try{if(s.T=null,a.p=2,e)return e()}finally{s.T=t,a.p=n,a.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,a.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&a.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},t.requestFormReset=function(e){a.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.2.5"},391(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},288(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),f=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,x={};function C(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||g}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||g}C.prototype.isReactComponent={},C.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=C.prototype;var y=v.prototype=new b;y.constructor=v,m(y,C.prototype),y.isPureReactComponent=!0;var w=Array.isArray;function E(){}var j={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function k(e,t,r){var i=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==i?i:null,props:r}}function A(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function L(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function F(e,t,i,o,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,d=!1;if(null===e)d=!0;else switch(l){case"bigint":case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case n:case r:d=!0;break;case h:return F((d=e._init)(e._payload),t,i,o,a)}}if(d)return a=a(e),d=""===o?"."+L(e,0):o,w(a)?(i="",null!=d&&(i=d.replace(T,"$&/")+"/"),F(a,t,i,"",function(e){return e})):null!=a&&(A(a)&&(s=a,c=i+(null==a.key||e&&e.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+d,a=k(s.type,c,s.props)),t.push(a)),1;d=0;var u,p=""===o?".":o+":";if(w(e))for(var g=0;g<e.length;g++)d+=F(o=e[g],t,i,l=p+L(o,g),a);else if("function"===typeof(g=null===(u=e)||"object"!==typeof u?null:"function"===typeof(u=f&&u[f]||u["@@iterator"])?u:null))for(e=g.call(e),g=0;!(o=e.next()).done;)d+=F(o=o.value,t,i,l=p+L(o,g++),a);else if("object"===l){if("function"===typeof e.then)return F(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(E,E):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,o,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return d}function I(e,t,n){if(null==e)return e;var r=[],i=0;return F(e,r,"","",function(e){return t.call(n,e,i++)}),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},N={map:I,forEach:function(e,t,n){I(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return I(e,function(){t++}),t},toArray:function(e){return I(e,function(e){return e})||[]},only:function(e){if(!A(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=p,t.Children=N,t.Component=C,t.Fragment=i,t.Profiler=a,t.PureComponent=v,t.StrictMode=o,t.Suspense=d,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return j.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),i=e.key;if(null!=t)for(o in void 0!==t.key&&(i=""+t.key),t)!S.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var a=Array(o),l=0;l<o;l++)a[l]=arguments[l+2];r.children=a}return k(e.type,i,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,i={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return k(e,o,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=A,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=j.T,n={};j.T=n;try{var r=e(),i=j.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(E,R)}catch(o){R(o)}finally{null!==t&&null!==n.types&&(t.types=n.types),j.T=t}},t.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},t.use=function(e){return j.H.use(e)},t.useActionState=function(e,t,n){return j.H.useActionState(e,t,n)},t.useCallback=function(e,t){return j.H.useCallback(e,t)},t.useContext=function(e){return j.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return j.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return j.H.useEffect(e,t)},t.useEffectEvent=function(e){return j.H.useEffectEvent(e)},t.useId=function(){return j.H.useId()},t.useImperativeHandle=function(e,t,n){return j.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return j.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return j.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return j.H.useMemo(e,t)},t.useOptimistic=function(e,t){return j.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return j.H.useReducer(e,t,n)},t.useRef=function(e){return j.H.useRef(e)},t.useState=function(e){return j.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return j.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return j.H.useTransition()},t.version="19.2.5"},43(e,t,n){e.exports=n(288)},579(e,t,n){e.exports=n(799)},896(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var l=2*(r+1)-1,s=e[l],c=l+1,d=e[c];if(0>o(s,n))c<i&&0>o(d,s)?(e[r]=d,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<i&&0>o(d,n)))break e;e[r]=d,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],d=[],u=1,h=null,p=3,f=!1,g=!1,m=!1,x=!1,C="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function y(e){for(var t=r(d);null!==t;){if(null===t.callback)i(d);else{if(!(t.startTime<=e))break;i(d),t.sortIndex=t.expirationTime,n(c,t)}t=r(d)}}function w(e){if(m=!1,y(e),!g)if(null!==r(c))g=!0,j||(j=!0,E());else{var t=r(d);null!==t&&O(w,t.startTime-e)}}var E,j=!1,S=-1,k=5,A=-1;function T(){return!!x||!(t.unstable_now()-A<k)}function L(){if(x=!1,j){var e=t.unstable_now();A=e;var n=!0;try{e:{g=!1,m&&(m=!1,b(S),S=-1),f=!0;var o=p;try{t:{for(y(e),h=r(c);null!==h&&!(h.expirationTime>e&&T());){var a=h.callback;if("function"===typeof a){h.callback=null,p=h.priorityLevel;var l=a(h.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){h.callback=l,y(e),n=!0;break t}h===r(c)&&i(c),y(e)}else i(c);h=r(c)}if(null!==h)n=!0;else{var s=r(d);null!==s&&O(w,s.startTime-e),n=!1}}break e}finally{h=null,p=o,f=!1}n=void 0}}finally{n?E():j=!1}}}if("function"===typeof v)E=function(){v(L)};else if("undefined"!==typeof MessageChannel){var F=new MessageChannel,I=F.port2;F.port1.onmessage=L,E=function(){I.postMessage(null)}}else E=function(){C(L,0)};function O(e,n){S=C(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){x=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:u++,callback:i,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>a?(e.sortIndex=o,n(d,e),null===r(c)&&e===r(d)&&(m?(b(S),S=-1):m=!0,O(w,o-a))):(e.sortIndex=l,n(c,e),g||f||(g=!0,j||(j=!0,E()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853(e,t,n){e.exports=n(896)},872(e,t,n){e.exports=n.p+"static/media/guestbook.412c38f5721cd283dd85.png"},495(e,t,n){e.exports=n.p+"static/media/likes.cf86fc2d7cb05bb4cab4.png"},985(e,t,n){e.exports=n.p+"static/media/my-fail-log.c2f097477eb086efa97d.png"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&r;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>a[e]=()=>r[e]);return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,r)=>(n.f[r](e,t),t),[])),n.u=e=>"static/js/"+e+".a87527cc.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="reactapp:";n.l=(r,i,o,a)=>{if(e[r])e[r].push(i);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+o){l=u;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[i];var h=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach(e=>e(n)),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((n,r)=>i=e[t]=[n,r]);r.push(i[2]=o);var a=n.p+n.u(t),l=new Error;n.l(a,r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,i[1](l)}},"chunk-"+t,t)}};var t=(t,r)=>{var i,o,[a,l,s]=r,c=0;if(a.some(t=>0!==e[t])){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)s(n)}for(t&&t(r);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=globalThis.webpackChunkreactapp=globalThis.webpackChunkreactapp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var r=n(43),i=n.t(r,2),o=n(391),a="-ms-",l="-moz-",s="-webkit-",c="comm",d="rule",u="decl",h="@keyframes",p=Math.abs,f=String.fromCharCode,g=Object.assign;function m(e){return e.trim()}function x(e,t){return(e=t.exec(e))?e[0]:e}function C(e,t,n){return e.replace(t,n)}function b(e,t,n){return e.indexOf(t,n)}function v(e,t){return 0|e.charCodeAt(t)}function y(e,t,n){return e.slice(t,n)}function w(e){return e.length}function E(e){return e.length}function j(e,t){return t.push(e),e}function S(e,t){return e.filter(function(e){return!x(e,t)})}var k,A,T=1,L=1,F=0,I=0,O=0,R="";function N(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:T,column:L,length:a,return:"",siblings:l}}function P(e,t){return g(N("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function z(e){for(;e.root;)e=P(e.root,{children:[e]});j(e,e.siblings)}function $(){return O=I>0?v(R,--I):0,L--,10===O&&(L=1,T--),O}function D(){return O=I<F?v(R,I++):0,L++,10===O&&(L=1,T++),O}function B(){return v(R,I)}function M(){return I}function H(e,t){return y(R,e,t)}function G(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W(e){return T=L=1,F=w(R=e),I=0,[]}function U(e){return R="",e}function _(e){return m(H(I-1,Q(91===e?e+2:40===e?e+1:e)))}function Z(e){for(;(O=B())&&O<33;)D();return G(e)>2||G(O)>3?"":" "}function Y(e,t){for(;--t&&D()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return H(e,M()+(t<6&&32==B()&&32==D()))}function Q(e){for(;D();)switch(O){case e:return I;case 34:case 39:34!==e&&39!==e&&Q(O);break;case 40:41===e&&Q(e);break;case 92:D()}return I}function V(e,t){for(;D()&&e+O!==57&&(e+O!==84||47!==B()););return"/*"+H(t,I-1)+"*"+f(47===e?e:D())}function q(e){for(;!G(B());)D();return H(e,I)}function J(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function X(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case u:return e.return=e.return||e.value;case c:return"";case h:return e.return=e.value+"{"+J(e.children,r)+"}";case d:if(!w(e.value=e.props.join(",")))return""}return w(n=J(e.children,r))?e.return=e.value+"{"+n+"}":""}function K(e,t,n){switch(function(e,t){return 45^v(e,0)?(((t<<2^v(e,0))<<2^v(e,1))<<2^v(e,2))<<2^v(e,3):0}(e,t)){case 5103:return s+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return s+e+e;case 4855:return s+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return s+e+l+e+a+e+e;case 5936:switch(v(e,t+11)){case 114:return s+e+a+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return s+e+a+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return s+e+a+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return s+e+a+e+e;case 6165:return s+e+a+"flex-"+e+e;case 5187:return s+e+C(e,/(\w+).+(:[^]+)/,s+"box-$1$2"+a+"flex-$1$2")+e;case 5443:return s+e+a+"flex-item-"+C(e,/flex-|-self/g,"")+(x(e,/flex-|baseline/)?"":a+"grid-row-"+C(e,/flex-|-self/g,""))+e;case 4675:return s+e+a+"flex-line-pack"+C(e,/align-content|flex-|-self/g,"")+e;case 5548:return s+e+a+C(e,"shrink","negative")+e;case 5292:return s+e+a+C(e,"basis","preferred-size")+e;case 6060:return s+"box-"+C(e,"-grow","")+s+e+a+C(e,"grow","positive")+e;case 4554:return s+C(e,/([^-])(transform)/g,"$1"+s+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,s+"$1"),/(image-set)/,s+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,s+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,s+"box-pack:$3"+a+"flex-pack:$3"),/space-between/,"justify")+s+e+e;case 4200:if(!x(e,/flex-|baseline/))return a+"grid-column-align"+y(e,t)+e;break;case 2592:case 3360:return a+C(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,x(e.props,/grid-\w+-end/)})?~b(e+(n=n[t].value),"span",0)?e:a+C(e,"-start","")+e+a+"grid-row-span:"+(~b(n,"span",0)?x(n,/\d+/):+x(n,/\d+/)-+x(e,/\d+/))+";":a+C(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return x(e.props,/grid-\w+-start/)})?e:a+C(C(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,s+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(w(e)-1-t>6)switch(v(e,t+1)){case 109:if(45!==v(e,t+4))break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+s+"$2-$3$1"+l+(108==v(e,t+3)?"$3":"$2-$3"))+e;case 115:return~b(e,"stretch",0)?K(C(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return C(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,o,l,s){return a+n+":"+r+s+(i?a+n+"-span:"+(o?l:+l-+r)+s:"")+e});case 4949:if(121===v(e,t+6))return C(e,":",":"+s)+e;break;case 6444:switch(v(e,45===v(e,14)?18:11)){case 120:return C(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+s+(45===v(e,14)?"inline-":"")+"box$3$1"+s+"$2$3$1"+a+"$2box$3")+e;case 100:return C(e,":",":"+a)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return C(e,"scroll-","scroll-snap-")+e}return e}function ee(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case u:return void(e.return=K(e.value,e.length,n));case h:return J([P(e,{value:C(e.value,"@","@"+s)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(x(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":z(P(e,{props:[C(t,/:(read-\w+)/,":-moz-$1")]})),z(P(e,{props:[t]})),g(e,{props:S(n,r)});break;case"::placeholder":z(P(e,{props:[C(t,/:(plac\w+)/,":"+s+"input-$1")]})),z(P(e,{props:[C(t,/:(plac\w+)/,":-moz-$1")]})),z(P(e,{props:[C(t,/:(plac\w+)/,a+"input-$1")]})),z(P(e,{props:[t]})),g(e,{props:S(n,r)})}return""})}}function te(e){return U(ne("",null,null,null,[""],e=W(e),0,[0],e))}function ne(e,t,n,r,i,o,a,l,s){for(var c=0,d=0,u=a,h=0,g=0,m=0,x=1,E=1,S=1,k=0,A="",T=i,L=o,F=r,I=A;E;)switch(m=k,k=D()){case 40:if(108!=m&&58==v(I,u-1)){-1!=b(I+=C(_(k),"&","&\f"),"&\f",p(c?l[c-1]:0))&&(S=-1);break}case 34:case 39:case 91:I+=_(k);break;case 9:case 10:case 13:case 32:I+=Z(m);break;case 92:I+=Y(M()-1,7);continue;case 47:switch(B()){case 42:case 47:j(ie(V(D(),M()),t,n,s),s),5!=G(m||1)&&5!=G(B()||1)||!w(I)||" "===y(I,-1,void 0)||(I+=" ");break;default:I+="/"}break;case 123*x:l[c++]=w(I)*S;case 125*x:case 59:case 0:switch(k){case 0:case 125:E=0;case 59+d:-1==S&&(I=C(I,/\f/g,"")),g>0&&(w(I)-u||0===x&&47===m)&&j(g>32?oe(I+";",r,n,u-1,s):oe(C(I," ","")+";",r,n,u-2,s),s);break;case 59:I+=";";default:if(j(F=re(I,t,n,c,d,i,l,A,T=[],L=[],u,o),o),123===k)if(0===d)ne(I,t,F,F,T,o,u,l,L);else{switch(h){case 99:if(110===v(I,3))break;case 108:if(97===v(I,2))break;default:d=0;case 100:case 109:case 115:}d?ne(e,F,F,r&&j(re(e,F,F,0,0,i,l,A,i,T=[],u,L),L),i,L,u,l,r?T:L):ne(I,F,F,F,[""],L,0,l,L)}}c=d=g=0,x=S=1,A=I="",u=a;break;case 58:u=1+w(I),g=m;default:if(x<1)if(123==k)--x;else if(125==k&&0==x++&&125==$())continue;switch(I+=f(k),k*x){case 38:S=d>0?1:(I+="\f",-1);break;case 44:l[c++]=(w(I)-1)*S,S=1;break;case 64:45===B()&&(I+=_(D())),h=B(),d=u=w(A=I+=q(M())),k++;break;case 45:45===m&&2==w(I)&&(x=0)}}return o}function re(e,t,n,r,i,o,a,l,s,c,u,h){for(var f=i-1,g=0===i?o:[""],x=E(g),b=0,v=0,w=0;b<r;++b)for(var j=0,S=y(e,f+1,f=p(v=a[b])),k=e;j<x;++j)(k=m(v>0?g[j]+" "+S:C(S,/&\f/g,g[j])))&&(s[w++]=k);return N(e,t,n,0===i?d:l,s,c,u,h)}function ie(e,t,n,r){return N(e,t,n,c,f(O),y(e,2,-2),0,r)}function oe(e,t,n,r,i){return N(e,t,n,u,y(e,0,r),y(e,r+1,-1),r,i)}const ae="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",le="active",se="data-styled-version",ce="6.4.1",de="/*!sc*/\n",ue="undefined"!=typeof window&&"undefined"!=typeof document;function he(e){if("undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}){const t={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}[e];if(void 0!==t&&""!==t)return"false"!==t}}const pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!==(A=null!==(k=he("REACT_APP_SC_DISABLE_SPEEDY"))&&void 0!==k?k:he("SC_DISABLE_SPEEDY"))&&void 0!==A?A:"undefined"==typeof process||void 0==={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}||!1),fe="sc-keyframes-",ge={};function me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${n.length>0?` Args: ${n.join(", ")}`:""}`)}let xe=new Map,Ce=new Map,be=1;const ve=e=>{if(xe.has(e))return xe.get(e);for(;Ce.has(be);)be++;const t=be++;return xe.set(e,t),Ce.set(t,e),t},ye=e=>Ce.get(e),we=(e,t)=>{be=t+1,xe.set(e,t),Ce.set(t,e)},Ee=(new Set,Object.freeze([])),je=Object.freeze({});function Se(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:je;return e.theme!==n.theme&&e.theme||t||n.theme}const ke=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ae=/(^-|-$)/g;function Te(e){return e.replace(ke,"-").replace(Ae,"")}const Le=/(a)(d)/gi,Fe=e=>String.fromCharCode(e+(e>25?39:97));function Ie(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Fe(t%52)+n;return(Fe(t%52)+n).replace(Le,"$1-$2")}const Oe=5381,Re=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Ne=e=>Re(Oe,e);function Pe(e){return Ie(Ne(e)>>>0)}function ze(e){return e.displayName||e.name||"Component"}function $e(e){return"string"==typeof e&&!0}function De(e){return $e(e)?`styled.${e}`:`Styled(${ze(e)})`}const Be=Symbol.for("react.memo"),Me=Symbol.for("react.forward_ref"),He={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Ge={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},We={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ue={[Me]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Be]:We};function _e(e){return("type"in(t=e)&&t.type.$$typeof)===Be?We:"$$typeof"in e?Ue[e.$$typeof]:He;var t}const Ze=Object.defineProperty,Ye=Object.getOwnPropertyNames,Qe=Object.getOwnPropertySymbols,Ve=Object.getOwnPropertyDescriptor,qe=Object.getPrototypeOf,Je=Object.prototype;function Xe(e,t,n){if("string"!=typeof t){const r=qe(t);r&&r!==Je&&Xe(e,r,n);const i=Ye(t).concat(Qe(t)),o=_e(e),a=_e(t);for(let l=0;l<i.length;++l){const r=i[l];if(!(r in Ge||n&&n[r]||a&&r in a||o&&r in o)){const n=Ve(t,r);try{Ze(e,r,n)}catch(e){}}}}return e}function Ke(e){return"function"==typeof e}function et(e){return"object"==typeof e&&"styledComponentId"in e}function tt(e,t){return e&&t?e+" "+t:e||t||""}function nt(e,t){return e.join(t||"")}function rt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function it(e,t){if(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&!rt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=it(e[n],t[n]);else if(rt(t))for(const n in t)e[n]=it(e[n],t[n]);return e}function ot(e,t){Object.defineProperty(e,"toString",{value:t})}const at=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const t=this.groupSizes,n=t.length;let r=n;for(;e>=r;)if(r<<=1,r<0)throw me(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,o=t.length;i<o;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let o=r;o<i;o++)t+=this.tag.getRule(o)+de;return t}},lt=`style[${ae}][${se}="${ce}"]`,st=new RegExp(`^${ae}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),ct=e=>"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,dt=e=>{if(!e)return document;if(ct(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(ct(t))return t}return document},ut=(e,t,n)=>{const r=n.split(",");let i;for(let o=0,a=r.length;o<a;o++)(i=r[o])&&e.registerName(t,i)},ht=(e,t)=>{var n;const r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(de),i=[];for(let o=0,a=r.length;o<a;o++){const t=r[o].trim();if(!t)continue;const n=t.match(st);if(n){const t=0|parseInt(n[1],10),r=n[2];0!==t&&(we(r,t),ut(e,r,n[3]),e.getTag().insertRules(t,i)),i.length=0}else i.push(t)}},pt=e=>{const t=dt(e.options.target).querySelectorAll(lt);for(let n=0,r=t.length;n<r;n++){const r=t[n];r&&r.getAttribute(ae)!==le&&(ht(e,r),r.parentNode&&r.parentNode.removeChild(r))}};let ft=!1;function gt(){if(!1!==ft)return ft;if("undefined"!=typeof document){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return ft=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return ft=t.getAttribute("content")||void 0}return ft=n.nc}const mt=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),o=(e=>{const t=Array.from(e.querySelectorAll(`style[${ae}]`));return t[t.length-1]})(r),a=void 0!==o?o.nextSibling:null;i.setAttribute(ae,le),i.setAttribute(se,ce);const l=t||gt();return l&&i.setAttribute("nonce",l),r.insertBefore(i,a),i},xt=class{constructor(e,t){this.element=mt(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;const n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets;for(let r=0,i=n.length;r<i;r++){const t=n[r];if(t.ownerNode===e)return t}throw me(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Ct=class{constructor(e,t){this.element=mt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let bt=ue;const vt={isServer:!ue,useCSSOMInjection:!pe};class yt{static registerId(e){return ve(e)}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.options=Object.assign(Object.assign({},vt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ue&&bt&&(bt=!1,pt(this)),ot(this,()=>(e=>{const t=e.getTag(),{length:n}=t;let r="";for(let i=0;i<n;i++){const n=ye(i);if(void 0===n)continue;const o=e.names.get(n);if(void 0===o||!o.size)continue;const a=t.getGroup(i);if(0===a.length)continue;const l=ae+".g"+i+'[id="'+n+'"]';let s="";for(const e of o)e.length>0&&(s+=e+",");r+=a+l+'{content:"'+s+'"}'+de}return r})(this))}rehydrate(){!this.server&&ue&&pt(this)}reconstructWithOptions(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=new yt(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return n.keyframeIds=new Set(this.keyframeIds),!this.server&&ue&&e.target!==this.options.target&&dt(this.options.target)!==dt(e.target)&&pt(n),n}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(e=>{let{useCSSOMInjection:t,target:n,nonce:r}=e;return t?new xt(n,r):new Ct(n,r)})(this.options),new at(e)));var e}hasNameForId(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r}registerName(e,t){ve(e),e.startsWith(fe)&&this.keyframeIds.add(e);const n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(ve(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(ve(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const wt=new WeakSet,Et={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function jt(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Et||e.startsWith("--")?String(t).trim():t+"px"}const St=47;function kt(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const At=Symbol.for("sc-keyframes");function Tt(e){return Ke(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Lt=e=>null==e||!1===e||""===e,Ft=Symbol.for("react.client.reference");function It(e){return e.$$typeof===Ft}function Ot(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Lt(r)&&(Array.isArray(r)&&wt.has(r)||Ke(r)?t.push(kt(n)+":",r,";"):rt(r)?(t.push(n+" {"),Ot(r,t),t.push("}")):t.push(kt(n)+": "+jt(n,r)+";"))}}function Rt(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];if(Lt(e))return i;const o=typeof e;if("string"===o)return i.push(e),i;if("function"===o){if(It(e))return i;if(Tt(e)&&t){return Rt(e(t),t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let o=0;o<e.length;o++)Rt(e[o],t,n,r,i);return i}return et(e)?(i.push(`.${e.styledComponentId}`),i):function(e){return"object"==typeof e&&null!==e&&At in e}(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):It(e)?i:rt(e)?(Ot(e,i),i):(i.push(e.toString()),i)}const Nt=Ne(ce);class Pt{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=Re(Nt,t),this.baseStyle=n,yt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";{let i="";for(let r=0;r<this.rules.length;r++){const o=this.rules[r];if("string"==typeof o)i+=o;else if(o)if(Tt(o)){const r=o(e);"string"==typeof r?i+=r:null!=r&&!1!==r&&(i+=nt(Rt(r,e,t,n)))}else i+=nt(Rt(o,e,t,n))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const e=n.hash?n.hash+i:i;let o=this.dynamicNameCache.get(e);if(!o){if(o=Ie(Re(Re(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){const e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,o)}if(!t.hasNameForId(this.componentId,o)){const e=n(i,"."+o,void 0,this.componentId);t.insertRules(this.componentId,o,e)}r=tt(r,o)}}return r}}const zt=/&/g;function $t(e,t){let n=0;for(;--t>=0&&92===e.charCodeAt(t);)n++;return!(1&~n)}function Dt(e){const t=e.length;let n="",r=0,i=0,o=0,a=!1,l=!1;for(let s=0;s<t;s++){const c=e.charCodeAt(s);if(0!==o||a||c!==St||42!==e.charCodeAt(s+1))if(a)42===c&&e.charCodeAt(s+1)===St&&(a=!1,s++);else if(34!==c&&39!==c||$t(e,s)){if(0===o)if(123===c)i++;else if(125===c){if(i--,i<0){l=!0;let n=s+1;for(;n<t;){const t=e.charCodeAt(n);if(59===t||10===t)break;n++}n<t&&59===e.charCodeAt(n)&&n++,i=0,s=n-1,r=n;continue}0===i&&(n+=e.substring(r,s+1),r=s+1)}else 59===c&&0===i&&(n+=e.substring(r,s+1),r=s+1)}else 0===o?o=c:o===c&&(o=0);else a=!0,s++}return l||0!==i||0!==o?(r<t&&0===i&&0===o&&(n+=e.substring(r)),n):e}function Bt(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const o=e[i];if("rule"===o.type){o.value=(n+o.value).replaceAll(",",r);const e=o.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];o.props=t}Array.isArray(o.children)&&"@keyframes"!==o.type&&Bt(o.children,t)}return e}function Mt(){let e,t,n,{options:r=je,plugins:i=Ee}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je;const o=(n,r,i)=>i.startsWith(t)&&i.endsWith(t)&&i.replaceAll(t,"").length>0?`.${e}`:n,a=i.slice();a.push(e=>{e.type===d&&e.value.includes("&")&&(n||(n=new RegExp(`\\${t}\\b`,"g")),e.props[0]=e.props[0].replace(zt,t).replace(n,o))}),r.prefix&&a.push(ee),a.push(X);let l=[];const s=function(e){var t=E(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}(a.concat((h=e=>l.push(e),function(e){e.root||(e=e.return)&&h(e)}))),c=function(i){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&",t=o,n=void 0;const c=function(e){const t=-1!==e.indexOf("//"),n=-1!==e.indexOf("}");if(!t&&!n)return e;if(!t)return Dt(e);const r=e.length;let i="",o=0,a=0,l=0,s=0,c=0,d=!1;for(;a<r;){const t=e.charCodeAt(a);if(34!==t&&39!==t||$t(e,a))if(0===l)if(t===St&&a+1<r&&42===e.charCodeAt(a+1)){for(a+=2;a+1<r&&(42!==e.charCodeAt(a)||e.charCodeAt(a+1)!==St);)a++;a+=2}else if(40!==t)if(41!==t)if(s>0)a++;else if(42===t&&a+1<r&&e.charCodeAt(a+1)===St)i+=e.substring(o,a),a+=2,o=a,d=!0;else if(t===St&&a+1<r&&e.charCodeAt(a+1)===St){for(i+=e.substring(o,a);a<r&&10!==e.charCodeAt(a);)a++;o=a,d=!0}else 123===t?c++:125===t&&c--,a++;else s>0&&s--,a++;else s++,a++;else a++;else 0===l?l=t:l===t&&(l=0),a++}return d?(o<r&&(i+=e.substring(o)),0===c?i:Dt(i)):0===c?e:Dt(e)}(i);let d=te(a||o?a+" "+o+" { "+c+" }":c);return r.namespace&&(d=Bt(d,r.namespace)),l=[],J(d,s),l},u=r;var h;let p=Oe;for(let d=0;d<i.length;d++)i[d].name||me(15),p=Re(p,i[d].name);return(null==u?void 0:u.namespace)&&(p=Re(p,u.namespace)),(null==u?void 0:u.prefix)&&(p=Re(p,"p")),c.hash=p!==Oe?p.toString():"",c}const Ht=new yt,Gt=Mt(),Wt=r.createContext({shouldForwardProp:void 0,styleSheet:Ht,stylis:Gt,stylisPlugins:void 0});Wt.Consumer;function Ut(){return r.useContext(Wt)}const _t=r.createContext(void 0);_t.Consumer;function Zt(e){const t=r.useContext(_t),n=r.useMemo(()=>function(e,t){if(!e)throw me(14);if(Ke(e)){return e(t)}if(Array.isArray(e)||"object"!=typeof e)throw me(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?r.createElement(_t.Provider,{value:n},e.children):null}const Yt=Object.prototype.hasOwnProperty,Qt={};function Vt(e,t){const n="string"!=typeof e?"sc":Te(e);Qt[n]=(Qt[n]||0)+1;const r=n+"-"+Pe(ce+n+Qt[n]);return t?t+"-"+r:r}function qt(e,t,n){const i=et(e),o=e,a=!$e(e),{attrs:l=Ee,componentId:s=Vt(t.displayName,t.parentComponentId),displayName:c=De(e)}=t,d=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||s,u=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l;let{shouldForwardProp:h}=t;if(i&&o.shouldForwardProp){const e=o.shouldForwardProp;if(t.shouldForwardProp){const n=t.shouldForwardProp;h=(t,r)=>e(t,r)&&n(t,r)}else h=e}const p=new Pt(n,d,i?o.componentStyle:void 0);function f(e,t){return function(e,t,n){const{attrs:i,componentStyle:o,defaultProps:a,foldedComponentIds:l,styledComponentId:s,target:c}=e,d=r.useContext(_t),u=Ut(),h=e.shouldForwardProp||u.shouldForwardProp,p=Se(t,d,a)||je;let f,g;{const e=r.useRef(null),n=e.current;if(null!==n&&n[1]===p&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===o&&function(e,t,n){const r=e,i=t;let o=0;for(const a in i)if(Yt.call(i,a)&&(o++,r[a]!==i[a]))return!1;return o===n}(n[0],t,n[4]))f=n[5],g=n[6];else{f=function(e,t,n){const r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let o=0;o<e.length;o++){const n=e[o],a=Ke(n)?n(i?Object.assign({},r):r):n;for(const e in a)"className"===e?r.className=tt(r.className,a[e]):"style"===e?r.style=Object.assign(Object.assign({},r.style),a[e]):e in t&&void 0===t[e]||(r[e]=a[e])}return"className"in t&&"string"==typeof t.className&&(r.className=tt(r.className,t.className)),r}(i,t,p),g=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(o,f,u.styleSheet,u.stylis);let n=0;for(const e in t)Yt.call(t,e)&&n++;e.current=[t,p,u.styleSheet,u.stylis,n,f,g,o]}}const m=f.as||c,x=function(e,t,n,r){const i={};for(const o in e)void 0===e[o]||"$"===o[0]||"as"===o||"theme"===o&&e.theme===n||("forwardedAs"===o?i.as=e.forwardedAs:r&&!r(o,t)||(i[o]=e[o]));return i}(f,m,p,h);let C=tt(l,s);return g&&(C+=" "+g),f.className&&(C+=" "+f.className),x[$e(m)&&m.includes("-")?"class":"className"]=C,n&&(x.ref=n),(0,r.createElement)(m,x)}(g,e,t)}f.displayName=c;let g=r.forwardRef(f);return g.attrs=u,g.componentStyle=p,g.displayName=c,g.shouldForwardProp=h,g.foldedComponentIds=i?tt(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=d,g.target=i?o.target:e,Object.defineProperty(g,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=i?function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(const i of n)it(e,i,!0);return e}({},o.defaultProps,e):e}}),ot(g,()=>`.${g.styledComponentId}`),a&&Xe(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}var Jt=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Xt(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const Kt=e=>(wt.add(e),e);function en(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Ke(e)||rt(e))return Kt(Rt(Xt(Ee,[e,...n])));const i=e;return 0===n.length&&1===i.length&&"string"==typeof i[0]?Rt(i):Kt(Rt(Xt(i,n)))}function tn(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:je;if(!t)throw me(1,t);const r=function(r){for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];return e(t,n,en(r,...o))};return r.attrs=r=>tn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>tn(e,t,Object.assign(Object.assign({},n),r)),r}const nn=e=>tn(qt,e),rn=nn;Jt.forEach(e=>{rn[e]=nn(e)});class on{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){const n=e[t];if(Ke(n)&&!et(n))return!1}return!0}(e),yt.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){const i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{const o=this.computeRules(e,t,n,r);n.insertRules(i,o.name,o.rules)}return}const o=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&o){const t=o.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){const i=nt(Rt(this.rules,t,n,r)),o={name:this.componentId+e,rules:r(i,"")};return this.instanceRules.set(e,o),o}rebuildGroup(e){const t=this.componentId;e.clearRules(t);for(const n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}}function an(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];const o=en(e,...n),a=`sc-global-${Pe(JSON.stringify(o))}`,l=new on(o,a),s=e=>{const t=Ut(),n=r.useContext(_t);let i;{const e=r.useRef(null);null===e.current&&(e.current=t.styleSheet.allocateGSInstance(a)),i=e.current}t.styleSheet.server&&c(i,e,t.styleSheet,n,t.stylis);{const o=l.isStatic?[i,t.styleSheet,l]:[i,e,t.styleSheet,n,t.stylis,l],s=r.useRef(l);r.useLayoutEffect(()=>{t.styleSheet.server||(s.current!==l&&(t.styleSheet.clearRules(a),s.current=l),c(i,e,t.styleSheet,n,t.stylis))},o),r.useLayoutEffect(()=>()=>{t.styleSheet.server||l.removeStyles(i,t.styleSheet)},[i,t.styleSheet,l])}return t.styleSheet.server&&l.instanceRules.delete(i),null};function c(e,t,n,r,i){if(l.isStatic)l.renderStyles(e,ge,n,i);else{const o=Object.assign(Object.assign({},t),{theme:Se(t,r,s.defaultProps)});l.renderStyles(e,o,n,i)}}return r.memo(s)}var ln;class sn{constructor(e,t){var n=this;this[ln]=!0,this.inject=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Gt;const r=n.getName(t);if(!e.hasNameForId(n.id,r)){const i=t(n.rules,r,"@keyframes");e.insertRules(n.id,r,i)}},this.name=e,this.id=fe+e,this.rules=t,ve(this.id),ot(this,()=>{throw me(12,String(this.name))})}getName(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt;return e.hash?this.name+Ie(+e.hash>>>0):this.name}}function cn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=nt(en(e,...n)),o=Pe(i);return new sn(o,i)}ln=At;var dn=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},un=en(hn||(hn=dn(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));an(pn||(pn=dn(["",""],["",""])),un);var hn,pn;const fn=an`
  ${un}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /*
    100 Thin
    200 Extra Light
    300 Light
    400 Regular
    500 Medium
    600 Semi Bold
    700 Bold
    800 Extra Bold
    900 Black
  */

  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-Thin.woff2) format('woff2');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-ExtraLight.woff2) format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-Light.woff2) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-Regular.woff2) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-Medium.woff2) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-SemiBold.woff2) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-Bold.woff2) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-ExtraBold.woff2) format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-Black.woff2) format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'pretendard', sans-serif;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    letter-spacing: -0.02em;
    line-height: 1.3;
    text-decoration: none;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: 'pretendard', sans-serif;
  }

  a {
    /* text-decoration: none;
    color: inherit; */
  }
`,gn=fn,mn={PALETTE:{primary:{light:"#DBEAFE",main:"#027DF0"},secondary:{main:"#00B53F",light:"#D1FFE1"},third:{main:"#AB47FF",light:"#F3E8FF"},fourth:{main:"#F53102",light:"#FFE4E6"},fifth:{main:"#FF34C5",light:"#FFEBFA"},yellow:"#F5EE03",white:"#FFFFFF",black:"#333333"},GRADIENT:{lightBlue:"linear-gradient(135deg, #A7B5FF 0%, #4359FC 100%)",deepBlue:"linear-gradient(135deg, #4359FC 0%, #0014A9 100%)",blue:"linear-gradient(135deg, #5B6EFD 0%, #0014A9 100%)"},GRAYSCALE:{1:"#F2F2F2",2:"#E6E6E6",3:"#D9D9D9",4:"#CCCCCC",5:"#C0C0C0",6:"#B3B3B3",7:"#A6A6A6",8:"#999999",9:"#8D8D8D",10:"#555555"},TEXT_COLOR:{basic:"#333333",primary:"#4359FC",secondary:"#129D1B",warning:"#FF8004"},FONT_SIZE:{h1:"80px",h2:"60px",h3:"45px",h3_2:"36px",h4:"32px",h5:"28px",h6:"24px",h7:"20px",h8:"16px",h9:"14px",h10:"12px",h11:"10px"},FONT_WEIGHT:{regular:"400",bold:"700",extrabold:"800"},FONT_LINE:{h1:"98px",h2:"78px",h3:"60px",h3_2:"48px",h4:"46px",h5:"38px",h6:"34px",h7:"30px",h8:"24px",h9:"22px",h10:"20px"}},xn=mn;var Cn,bn=n(950),vn=n.t(bn,2);function yn(){return yn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yn.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Cn||(Cn={}));const wn="popstate";function En(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function jn(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function Sn(e,t){return{usr:e.state,key:e.key,idx:t}}function kn(e,t,n,r){return void 0===n&&(n=null),yn({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?Tn(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function An(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Tn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ln(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Cn.Pop,s=null,c=d();function d(){return(a.state||{idx:null}).idx}function u(){l=Cn.Pop;let e=d(),t=null==e?null:e-c;c=e,s&&s({action:l,location:p.location,delta:t})}function h(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:An(e);return n=n.replace(/ $/,"%20"),En(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,a.replaceState(yn({},a.state,{idx:c}),""));let p={get action(){return l},get location(){return e(i,a)},listen(e){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(wn,u),s=e,()=>{i.removeEventListener(wn,u),s=null}},createHref:e=>t(i,e),createURL:h,encodeLocation(e){let t=h(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=Cn.Push;let r=kn(p.location,e,t);n&&n(r,e),c=d()+1;let u=Sn(r,c),h=p.createHref(r);try{a.pushState(u,"",h)}catch(f){if(f instanceof DOMException&&"DataCloneError"===f.name)throw f;i.location.assign(h)}o&&s&&s({action:l,location:p.location,delta:1})},replace:function(e,t){l=Cn.Replace;let r=kn(p.location,e,t);n&&n(r,e),c=d();let i=Sn(r,c),u=p.createHref(r);a.replaceState(i,"",u),o&&s&&s({action:l,location:p.location,delta:0})},go:e=>a.go(e)};return p}var Fn;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(Fn||(Fn={}));const In=new Set(["lazy","caseSensitive","path","id","index","children"]);function On(e,t,n,r){return void 0===n&&(n=[]),void 0===r&&(r={}),e.map((e,i)=>{let o=[...n,String(i)],a="string"===typeof e.id?e.id:o.join("-");if(En(!0!==e.index||!e.children,"Cannot specify children on an index route"),En(!r[a],'Found a route id collision on id "'+a+"\".  Route id's must be globally unique within Data Router usages"),function(e){return!0===e.index}(e)){let n=yn({},e,t(e),{id:a});return r[a]=n,n}{let n=yn({},e,t(e),{id:a,children:void 0});return r[a]=n,e.children&&(n.children=On(e.children,t,o,r)),n}})}function Rn(e,t,n){return void 0===n&&(n="/"),Nn(e,t,n,!1)}function Nn(e,t,n,r){let i=Qn(("string"===typeof t?Tn(t):t).pathname||"/",n);if(null==i)return null;let o=Pn(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let a=null;for(let l=0;null==a&&l<o.length;++l){let e=Yn(i);a=_n(o[l],e,r)}return a}function Pn(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(En(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let l=nr([r,a.relativePath]),s=n.concat(a);e.children&&e.children.length>0&&(En(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),Pn(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:Un(l,e.index),routesMeta:s})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of zn(e.path))i(e,t,r);else i(e,t)}),t}function zn(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=zn(r.join("/")),l=[];return l.push(...a.map(e=>""===e?o:[o,e].join("/"))),i&&l.push(...a),l.map(t=>e.startsWith("/")&&""===t?"/":t)}const $n=/^:[\w-]+$/,Dn=3,Bn=2,Mn=1,Hn=10,Gn=-2,Wn=e=>"*"===e;function Un(e,t){let n=e.split("/"),r=n.length;return n.some(Wn)&&(r+=Gn),t&&(r+=Bn),n.filter(e=>!Wn(e)).reduce((e,t)=>e+($n.test(t)?Dn:""===t?Mn:Hn),r)}function _n(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===o?t:t.slice(o.length)||"/",d=Zn({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),u=e.route;if(!d&&s&&n&&!r[r.length-1].route.index&&(d=Zn({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:nr([o,d.pathname]),pathnameBase:rr(nr([o,d.pathnameBase])),route:u}),"/"!==d.pathnameBase&&(o=nr([o,d.pathnameBase]))}return a}function Zn(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);jn("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=l[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=i&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:a,pattern:e}}function Yn(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return jn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Qn(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}const Vn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function qn(e,t){void 0===t&&(t="/");let n,{pathname:r,search:i="",hash:o=""}="string"===typeof e?Tn(e):e;if(r)if(a=r,Vn.test(a))n=r;else{if(r.includes("//")){let e=r;r=r.replace(/\/\/+/g,"/"),jn(!1,"Pathnames cannot have embedded double slashes - normalizing "+e+" -> "+r)}n=r.startsWith("/")?Jn(r.substring(1),"/"):Jn(r,t)}else n=t;var a;return{pathname:n,search:ir(i),hash:or(o)}}function Jn(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function Xn(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Kn(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function er(e,t){let n=Kn(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function tr(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=Tn(e):(i=yn({},e),En(!i.pathname||!i.pathname.includes("?"),Xn("?","pathname","search",i)),En(!i.pathname||!i.pathname.includes("#"),Xn("#","pathname","hash",i)),En(!i.search||!i.search.includes("#"),Xn("#","search","hash",i)));let o,a=""===e||""===i.pathname,l=a?"/":i.pathname;if(null==l)o=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=qn(i,o),c=l&&"/"!==l&&l.endsWith("/"),d=(a||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!c&&!d||(s.pathname+="/"),s}const nr=e=>e.join("/").replace(/\/\/+/g,"/"),rr=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ir=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",or=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;class ar{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function lr(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const sr=["post","put","patch","delete"],cr=new Set(sr),dr=["get",...sr],ur=new Set(dr),hr=new Set([301,302,303,307,308]),pr=new Set([307,308]),fr={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},gr={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},mr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},xr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cr=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)}),br="remix-router-transitions";function vr(e){const t=e.window?e.window:"undefined"!==typeof window?window:void 0,n="undefined"!==typeof t&&"undefined"!==typeof t.document&&"undefined"!==typeof t.document.createElement,r=!n;let i;if(En(e.routes.length>0,"You must provide a non-empty routes array to createRouter"),e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let t=e.detectErrorBoundary;i=e=>({hasErrorBoundary:t(e)})}else i=Cr;let o,a,l,s={},c=On(e.routes,i,void 0,s),d=e.basename||"/",u=e.dataStrategy||Fr,h=e.patchRoutesOnNavigation,p=yn({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),f=null,g=new Set,m=null,x=null,C=null,b=null!=e.hydrationData,v=Rn(c,e.history.location,d),y=!1,w=null;if(null==v&&!h){let t=Ur(404,{pathname:e.history.location.pathname}),{matches:n,route:r}=Wr(c);v=n,w={[r.id]:t}}if(v&&!e.hydrationData){fe(v,c,e.history.location.pathname).active&&(v=null)}if(v)if(v.some(e=>e.route.lazy))a=!1;else if(v.some(e=>e.route.loader))if(p.v7_partialHydration){let t=e.hydrationData?e.hydrationData.loaderData:null,n=e.hydrationData?e.hydrationData.errors:null;if(n){let e=v.findIndex(e=>void 0!==n[e.route.id]);a=v.slice(0,e+1).every(e=>!Sr(e.route,t,n))}else a=v.every(e=>!Sr(e.route,t,n))}else a=null!=e.hydrationData;else a=!0;else if(a=!1,v=[],p.v7_partialHydration){let t=fe(null,c,e.history.location.pathname);t.active&&t.matches&&(y=!0,v=t.matches)}let E,j,S={historyAction:e.history.action,location:e.history.location,matches:v,initialized:a,navigation:fr,restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||w,fetchers:new Map,blockers:new Map},k=Cn.Pop,A=!1,T=!1,L=new Map,F=null,I=!1,O=!1,R=[],N=new Set,P=new Map,z=0,$=-1,D=new Map,B=new Set,M=new Map,H=new Map,G=new Set,W=new Map,U=new Map;function _(e,t){void 0===t&&(t={}),S=yn({},S,e);let n=[],r=[];p.v7_fetcherPersist&&S.fetchers.forEach((e,t)=>{"idle"===e.state&&(G.has(t)?r.push(t):n.push(t))}),G.forEach(e=>{S.fetchers.has(e)||P.has(e)||r.push(e)}),[...g].forEach(e=>e(S,{deletedFetchers:r,viewTransitionOpts:t.viewTransitionOpts,flushSync:!0===t.flushSync})),p.v7_fetcherPersist?(n.forEach(e=>S.fetchers.delete(e)),r.forEach(e=>ne(e))):r.forEach(e=>G.delete(e))}function Z(t,n,r){var i,a;let l,{flushSync:s}=void 0===r?{}:r,d=null!=S.actionData&&null!=S.navigation.formMethod&&ei(S.navigation.formMethod)&&"loading"===S.navigation.state&&!0!==(null==(i=t.state)?void 0:i._isRedirect);l=n.actionData?Object.keys(n.actionData).length>0?n.actionData:null:d?S.actionData:null;let u=n.loaderData?Mr(S.loaderData,n.loaderData,n.matches||[],n.errors):S.loaderData,h=S.blockers;h.size>0&&(h=new Map(h),h.forEach((e,t)=>h.set(t,mr)));let p,f=!0===A||null!=S.navigation.formMethod&&ei(S.navigation.formMethod)&&!0!==(null==(a=t.state)?void 0:a._isRedirect);if(o&&(c=o,o=void 0),I||k===Cn.Pop||(k===Cn.Push?e.history.push(t,t.state):k===Cn.Replace&&e.history.replace(t,t.state)),k===Cn.Pop){let e=L.get(S.location.pathname);e&&e.has(t.pathname)?p={currentLocation:S.location,nextLocation:t}:L.has(t.pathname)&&(p={currentLocation:t,nextLocation:S.location})}else if(T){let e=L.get(S.location.pathname);e?e.add(t.pathname):(e=new Set([t.pathname]),L.set(S.location.pathname,e)),p={currentLocation:S.location,nextLocation:t}}_(yn({},n,{actionData:l,loaderData:u,historyAction:k,location:t,initialized:!0,navigation:fr,revalidation:"idle",restoreScrollPosition:pe(t,n.matches||S.matches),preventScrollReset:f,blockers:h}),{viewTransitionOpts:p,flushSync:!0===s}),k=Cn.Pop,A=!1,T=!1,I=!1,O=!1,R=[]}async function Y(t,n,r){E&&E.abort(),E=null,k=t,I=!0===(r&&r.startUninterruptedRevalidation),function(e,t){if(m&&C){let n=he(e,t);m[n]=C()}}(S.location,S.matches),A=!0===(r&&r.preventScrollReset),T=!0===(r&&r.enableViewTransition);let i=o||c,a=r&&r.overrideNavigation,l=null!=r&&r.initialHydration&&S.matches&&S.matches.length>0&&!y?S.matches:Rn(i,n,d),s=!0===(r&&r.flushSync);if(l&&S.initialized&&!O&&function(e,t){if(e.pathname!==t.pathname||e.search!==t.search)return!1;if(""===e.hash)return""!==t.hash;if(e.hash===t.hash)return!0;if(""!==t.hash)return!0;return!1}(S.location,n)&&!(r&&r.submission&&ei(r.submission.formMethod)))return void Z(n,{matches:l},{flushSync:s});let u=fe(l,i,n.pathname);if(u.active&&u.matches&&(l=u.matches),!l){let{error:e,notFoundMatches:t,route:r}=de(n.pathname);return void Z(n,{matches:t,loaderData:{},errors:{[r.id]:e}},{flushSync:s})}E=new AbortController;let h,f=Pr(e.history,n,E.signal,r&&r.submission);if(r&&r.pendingError)h=[Gr(l).route.id,{type:Fn.error,error:r.pendingError}];else if(r&&r.submission&&ei(r.submission.formMethod)){let t=await async function(t,n,r,i,o,a){void 0===a&&(a={});X();let l,s=function(e,t){let n={state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text};return n}(n,r);if(_({navigation:s},{flushSync:!0===a.flushSync}),o){let e=await ge(i,n.pathname,t.signal);if("aborted"===e.type)return{shortCircuited:!0};if("error"===e.type){let t=Gr(e.partialMatches).route.id;return{matches:e.partialMatches,pendingActionResult:[t,{type:Fn.error,error:e.error}]}}if(!e.matches){let{notFoundMatches:e,error:t,route:r}=de(n.pathname);return{matches:e,pendingActionResult:[r.id,{type:Fn.error,error:t}]}}i=e.matches}let c=oi(i,n);if(c.route.action||c.route.lazy){if(l=(await q("action",S,t,[c],i,null))[c.route.id],t.signal.aborted)return{shortCircuited:!0}}else l={type:Fn.error,error:Ur(405,{method:t.method,pathname:n.pathname,routeId:c.route.id})};if(qr(l)){let n;if(a&&null!=a.replace)n=a.replace;else{n=Nr(l.response.headers.get("Location"),new URL(t.url),d,e.history)===S.location.pathname+S.location.search}return await V(t,l,!0,{submission:r,replace:n}),{shortCircuited:!0}}if(Qr(l))throw Ur(400,{type:"defer-action"});if(Vr(l)){let e=Gr(i,c.route.id);return!0!==(a&&a.replace)&&(k=Cn.Push),{matches:i,pendingActionResult:[e.route.id,l]}}return{matches:i,pendingActionResult:[c.route.id,l]}}(f,n,r.submission,l,u.active,{replace:r.replace,flushSync:s});if(t.shortCircuited)return;if(t.pendingActionResult){let[e,r]=t.pendingActionResult;if(Vr(r)&&lr(r.error)&&404===r.error.status)return E=null,void Z(n,{matches:t.matches,loaderData:{},errors:{[e]:r.error}})}l=t.matches||l,h=t.pendingActionResult,a=li(n,r.submission),s=!1,u.active=!1,f=Pr(e.history,f.url,f.signal)}let{shortCircuited:g,matches:x,loaderData:b,errors:v}=await async function(t,n,r,i,a,l,s,u,h,f,g){let m=a||li(n,l),x=l||s||ai(m),C=!I&&(!p.v7_partialHydration||!h);if(i){if(C){let e=Q(g);_(yn({navigation:m},void 0!==e?{actionData:e}:{}),{flushSync:f})}let e=await ge(r,n.pathname,t.signal);if("aborted"===e.type)return{shortCircuited:!0};if("error"===e.type){let t=Gr(e.partialMatches).route.id;return{matches:e.partialMatches,loaderData:{},errors:{[t]:e.error}}}if(!e.matches){let{error:e,notFoundMatches:t,route:r}=de(n.pathname);return{matches:t,loaderData:{},errors:{[r.id]:e}}}r=e.matches}let b=o||c,[v,y]=jr(e.history,S,r,x,n,p.v7_partialHydration&&!0===h,p.v7_skipActionErrorRevalidation,O,R,N,G,M,B,b,d,g);if(ue(e=>!(r&&r.some(t=>t.route.id===e))||v&&v.some(t=>t.route.id===e)),$=++z,0===v.length&&0===y.length){let e=oe();return Z(n,yn({matches:r,loaderData:{},errors:g&&Vr(g[1])?{[g[0]]:g[1].error}:null},Hr(g),e?{fetchers:new Map(S.fetchers)}:{}),{flushSync:f}),{shortCircuited:!0}}if(C){let e={};if(!i){e.navigation=m;let t=Q(g);void 0!==t&&(e.actionData=t)}y.length>0&&(e.fetchers=function(e){return e.forEach(e=>{let t=S.fetchers.get(e.key),n=si(void 0,t?t.data:void 0);S.fetchers.set(e.key,n)}),new Map(S.fetchers)}(y)),_(e,{flushSync:f})}y.forEach(e=>{re(e.key),e.controller&&P.set(e.key,e.controller)});let w=()=>y.forEach(e=>re(e.key));E&&E.signal.addEventListener("abort",w);let{loaderResults:j,fetcherResults:k}=await J(S,r,v,y,t);if(t.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",w);y.forEach(e=>P.delete(e.key));let A=_r(j);if(A)return await V(t,A.result,!0,{replace:u}),{shortCircuited:!0};if(A=_r(k),A)return B.add(A.key),await V(t,A.result,!0,{replace:u}),{shortCircuited:!0};let{loaderData:T,errors:L}=Br(S,r,j,g,y,k,W);W.forEach((e,t)=>{e.subscribe(n=>{(n||e.done)&&W.delete(t)})}),p.v7_partialHydration&&h&&S.errors&&(L=yn({},S.errors,L));let F=oe(),D=ae($),H=F||D||y.length>0;return yn({matches:r,loaderData:T,errors:L},H?{fetchers:new Map(S.fetchers)}:{})}(f,n,l,u.active,a,r&&r.submission,r&&r.fetcherSubmission,r&&r.replace,r&&!0===r.initialHydration,s,h);g||(E=null,Z(n,yn({matches:x||l},Hr(h),{loaderData:b,errors:v})))}function Q(e){return e&&!Vr(e[1])?{[e[0]]:e[1].data}:S.actionData?0===Object.keys(S.actionData).length?null:S.actionData:void 0}async function V(r,i,o,a){let{submission:l,fetcherSubmission:s,preventScrollReset:c,replace:u}=void 0===a?{}:a;i.response.headers.has("X-Remix-Revalidate")&&(O=!0);let h=i.response.headers.get("Location");En(h,"Expected a Location header on the redirect Response"),h=Nr(h,new URL(r.url),d,e.history);let p=kn(S.location,h,{_isRedirect:!0});if(n){let n=!1;if(i.response.headers.has("X-Remix-Reload-Document"))n=!0;else if(xr.test(h)){const r=e.history.createURL(h);n=r.origin!==t.location.origin||null==Qn(r.pathname,d)}if(n)return void(u?t.location.replace(h):t.location.assign(h))}E=null;let f=!0===u||i.response.headers.has("X-Remix-Replace")?Cn.Replace:Cn.Push,{formMethod:g,formAction:m,formEncType:x}=S.navigation;!l&&!s&&g&&m&&x&&(l=ai(S.navigation));let C=l||s;if(pr.has(i.response.status)&&C&&ei(C.formMethod))await Y(f,p,{submission:yn({},C,{formAction:h}),preventScrollReset:c||A,enableViewTransition:o?T:void 0});else{let e=li(p,l);await Y(f,p,{overrideNavigation:e,fetcherSubmission:s,preventScrollReset:c||A,enableViewTransition:o?T:void 0})}}async function q(e,t,n,r,o,a){let l,c={};try{l=await Ir(u,e,t,n,r,o,a,s,i)}catch(h){return r.forEach(e=>{c[e.route.id]={type:Fn.error,error:h}}),c}for(let[i,s]of Object.entries(l))if(Yr(s)){let e=s.result;c[i]={type:Fn.redirect,response:Rr(e,n,i,o,d,p.v7_relativeSplatPath)}}else c[i]=await Or(s);return c}async function J(t,n,r,i,o){let a=t.matches,l=q("loader",t,o,r,n,null),s=Promise.all(i.map(async n=>{if(n.matches&&n.match&&n.controller){let r=(await q("loader",t,Pr(e.history,n.path,n.controller.signal),[n.match],n.matches,n.key))[n.match.route.id];return{[n.key]:r}}return Promise.resolve({[n.key]:{type:Fn.error,error:Ur(404,{pathname:n.path})}})})),c=await l,d=(await s).reduce((e,t)=>Object.assign(e,t),{});return await Promise.all([ti(n,c,o.signal,a,t.loaderData),ni(n,d,i)]),{loaderResults:c,fetcherResults:d}}function X(){O=!0,R.push(...ue()),M.forEach((e,t)=>{P.has(t)&&N.add(t),re(t)})}function K(e,t,n){void 0===n&&(n={}),S.fetchers.set(e,t),_({fetchers:new Map(S.fetchers)},{flushSync:!0===(n&&n.flushSync)})}function ee(e,t,n,r){void 0===r&&(r={});let i=Gr(S.matches,t);ne(e),_({errors:{[i.route.id]:n},fetchers:new Map(S.fetchers)},{flushSync:!0===(r&&r.flushSync)})}function te(e){return H.set(e,(H.get(e)||0)+1),G.has(e)&&G.delete(e),S.fetchers.get(e)||gr}function ne(e){let t=S.fetchers.get(e);!P.has(e)||t&&"loading"===t.state&&D.has(e)||re(e),M.delete(e),D.delete(e),B.delete(e),p.v7_fetcherPersist&&G.delete(e),N.delete(e),S.fetchers.delete(e)}function re(e){let t=P.get(e);t&&(t.abort(),P.delete(e))}function ie(e){for(let t of e){let e=ci(te(t).data);S.fetchers.set(t,e)}}function oe(){let e=[],t=!1;for(let n of B){let r=S.fetchers.get(n);En(r,"Expected fetcher: "+n),"loading"===r.state&&(B.delete(n),e.push(n),t=!0)}return ie(e),t}function ae(e){let t=[];for(let[n,r]of D)if(r<e){let e=S.fetchers.get(n);En(e,"Expected fetcher: "+n),"loading"===e.state&&(re(n),D.delete(n),t.push(n))}return ie(t),t.length>0}function le(e){S.blockers.delete(e),U.delete(e)}function se(e,t){let n=S.blockers.get(e)||mr;En("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state);let r=new Map(S.blockers);r.set(e,t),_({blockers:r})}function ce(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===U.size)return;U.size>1&&jn(!1,"A router only supports one blocker at a time");let i=Array.from(U.entries()),[o,a]=i[i.length-1],l=S.blockers.get(o);return l&&"proceeding"===l.state?void 0:a({currentLocation:t,nextLocation:n,historyAction:r})?o:void 0}function de(e){let t=Ur(404,{pathname:e}),n=o||c,{matches:r,route:i}=Wr(n);return ue(),{notFoundMatches:r,route:i,error:t}}function ue(e){let t=[];return W.forEach((n,r)=>{e&&!e(r)||(n.cancel(),t.push(r),W.delete(r))}),t}function he(e,t){if(x){let n=x(e,t.map(e=>function(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}(e,S.loaderData)));return n||e.key}return e.key}function pe(e,t){if(m){let n=he(e,t),r=m[n];if("number"===typeof r)return r}return null}function fe(e,t,n){if(h){if(!e){return{active:!0,matches:Nn(t,n,d,!0)||[]}}if(Object.keys(e[0].params).length>0){return{active:!0,matches:Nn(t,n,d,!0)}}}return{active:!1,matches:null}}async function ge(e,t,n,r){if(!h)return{type:"success",matches:e};let a=e;for(;;){let e=null==o,u=o||c,p=s;try{await h({signal:n,path:t,matches:a,fetcherKey:r,patch:(e,t)=>{n.aborted||Tr(e,t,u,p,i)}})}catch(l){return{type:"error",error:l,partialMatches:a}}finally{e&&!n.aborted&&(c=[...c])}if(n.aborted)return{type:"aborted"};let f=Rn(u,t,d);if(f)return{type:"success",matches:f};let g=Nn(u,t,d,!0);if(!g||a.length===g.length&&a.every((e,t)=>e.route.id===g[t].route.id))return{type:"success",matches:null};a=g}}return l={get basename(){return d},get future(){return p},get state(){return S},get routes(){return c},get window(){return t},initialize:function(){if(f=e.history.listen(t=>{let{action:n,location:r,delta:i}=t;if(j)return j(),void(j=void 0);jn(0===U.size||null!=i,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let o=ce({currentLocation:S.location,nextLocation:r,historyAction:n});if(o&&null!=i){let t=new Promise(e=>{j=e});return e.history.go(-1*i),void se(o,{state:"blocked",location:r,proceed(){se(o,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),t.then(()=>e.history.go(i))},reset(){let e=new Map(S.blockers);e.set(o,mr),_({blockers:e})}})}return Y(n,r)}),n){!function(e,t){try{let n=e.sessionStorage.getItem(br);if(n){let e=JSON.parse(n);for(let[n,r]of Object.entries(e||{}))r&&Array.isArray(r)&&t.set(n,new Set(r||[]))}}catch(n){}}(t,L);let e=()=>function(e,t){if(t.size>0){let r={};for(let[e,n]of t)r[e]=[...n];try{e.sessionStorage.setItem(br,JSON.stringify(r))}catch(n){jn(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}(t,L);t.addEventListener("pagehide",e),F=()=>t.removeEventListener("pagehide",e)}return S.initialized||Y(Cn.Pop,S.location,{initialHydration:!0}),l},subscribe:function(e){return g.add(e),()=>g.delete(e)},enableScrollRestoration:function(e,t,n){if(m=e,C=t,x=n||null,!b&&S.navigation===fr){b=!0;let e=pe(S.location,S.matches);null!=e&&_({restoreScrollPosition:e})}return()=>{m=null,C=null,x=null}},navigate:async function t(n,r){if("number"===typeof n)return void e.history.go(n);let i=yr(S.location,S.matches,d,p.v7_prependBasename,n,p.v7_relativeSplatPath,null==r?void 0:r.fromRouteId,null==r?void 0:r.relative),{path:o,submission:a,error:l}=wr(p.v7_normalizeFormMethod,!1,i,r),s=S.location,c=kn(S.location,o,r&&r.state);c=yn({},c,e.history.encodeLocation(c));let u=r&&null!=r.replace?r.replace:void 0,h=Cn.Push;!0===u?h=Cn.Replace:!1===u||null!=a&&ei(a.formMethod)&&a.formAction===S.location.pathname+S.location.search&&(h=Cn.Replace);let f=r&&"preventScrollReset"in r?!0===r.preventScrollReset:void 0,g=!0===(r&&r.flushSync),m=ce({currentLocation:s,nextLocation:c,historyAction:h});if(!m)return await Y(h,c,{submission:a,pendingError:l,preventScrollReset:f,replace:r&&r.replace,enableViewTransition:r&&r.viewTransition,flushSync:g});se(m,{state:"blocked",location:c,proceed(){se(m,{state:"proceeding",proceed:void 0,reset:void 0,location:c}),t(n,r)},reset(){let e=new Map(S.blockers);e.set(m,mr),_({blockers:e})}})},fetch:function(t,n,i,a){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");re(t);let l=!0===(a&&a.flushSync),s=o||c,u=yr(S.location,S.matches,d,p.v7_prependBasename,i,p.v7_relativeSplatPath,n,null==a?void 0:a.relative),h=Rn(s,u,d),f=fe(h,s,u);if(f.active&&f.matches&&(h=f.matches),!h)return void ee(t,n,Ur(404,{pathname:u}),{flushSync:l});let{path:g,submission:m,error:x}=wr(p.v7_normalizeFormMethod,!0,u,a);if(x)return void ee(t,n,x,{flushSync:l});let C=oi(h,g),b=!0===(a&&a.preventScrollReset);m&&ei(m.formMethod)?async function(t,n,r,i,a,l,s,u,h){function f(e){if(!e.route.action&&!e.route.lazy){let e=Ur(405,{method:h.formMethod,pathname:r,routeId:n});return ee(t,n,e,{flushSync:s}),!0}return!1}if(X(),M.delete(t),!l&&f(i))return;let g=S.fetchers.get(t);K(t,function(e,t){let n={state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0};return n}(h,g),{flushSync:s});let m=new AbortController,x=Pr(e.history,r,m.signal,h);if(l){let e=await ge(a,new URL(x.url).pathname,x.signal,t);if("aborted"===e.type)return;if("error"===e.type)return void ee(t,n,e.error,{flushSync:s});if(!e.matches)return void ee(t,n,Ur(404,{pathname:r}),{flushSync:s});if(f(i=oi(a=e.matches,r)))return}P.set(t,m);let C=z,b=await q("action",S,x,[i],a,t),v=b[i.route.id];if(x.signal.aborted)return void(P.get(t)===m&&P.delete(t));if(p.v7_fetcherPersist&&G.has(t)){if(qr(v)||Vr(v))return void K(t,ci(void 0))}else{if(qr(v))return P.delete(t),$>C?void K(t,ci(void 0)):(B.add(t),K(t,si(h)),V(x,v,!1,{fetcherSubmission:h,preventScrollReset:u}));if(Vr(v))return void ee(t,n,v.error)}if(Qr(v))throw Ur(400,{type:"defer-action"});let y=S.navigation.location||S.location,w=Pr(e.history,y,m.signal),j=o||c,A="idle"!==S.navigation.state?Rn(j,S.navigation.location,d):S.matches;En(A,"Didn't find any matches after fetcher action");let T=++z;D.set(t,T);let L=si(h,v.data);S.fetchers.set(t,L);let[F,I]=jr(e.history,S,A,h,y,!1,p.v7_skipActionErrorRevalidation,O,R,N,G,M,B,j,d,[i.route.id,v]);I.filter(e=>e.key!==t).forEach(e=>{let t=e.key,n=S.fetchers.get(t),r=si(void 0,n?n.data:void 0);S.fetchers.set(t,r),re(t),e.controller&&P.set(t,e.controller)}),_({fetchers:new Map(S.fetchers)});let H=()=>I.forEach(e=>re(e.key));m.signal.addEventListener("abort",H);let{loaderResults:U,fetcherResults:Y}=await J(S,A,F,I,w);if(m.signal.aborted)return;m.signal.removeEventListener("abort",H),D.delete(t),P.delete(t),I.forEach(e=>P.delete(e.key));let Q=_r(U);if(Q)return V(w,Q.result,!1,{preventScrollReset:u});if(Q=_r(Y),Q)return B.add(Q.key),V(w,Q.result,!1,{preventScrollReset:u});let{loaderData:te,errors:ne}=Br(S,A,U,void 0,I,Y,W);if(S.fetchers.has(t)){let e=ci(v.data);S.fetchers.set(t,e)}ae(T),"loading"===S.navigation.state&&T>$?(En(k,"Expected pending action"),E&&E.abort(),Z(S.navigation.location,{matches:A,loaderData:te,errors:ne,fetchers:new Map(S.fetchers)})):(_({errors:ne,loaderData:Mr(S.loaderData,te,A,ne),fetchers:new Map(S.fetchers)}),O=!1)}(t,n,g,C,h,f.active,l,b,m):(M.set(t,{routeId:n,path:g}),async function(t,n,r,i,o,a,l,s,c){let d=S.fetchers.get(t);K(t,si(c,d?d.data:void 0),{flushSync:l});let u=new AbortController,h=Pr(e.history,r,u.signal);if(a){let e=await ge(o,new URL(h.url).pathname,h.signal,t);if("aborted"===e.type)return;if("error"===e.type)return void ee(t,n,e.error,{flushSync:l});if(!e.matches)return void ee(t,n,Ur(404,{pathname:r}),{flushSync:l});i=oi(o=e.matches,r)}P.set(t,u);let p=z,f=await q("loader",S,h,[i],o,t),g=f[i.route.id];Qr(g)&&(g=await ri(g,h.signal,!0)||g);P.get(t)===u&&P.delete(t);if(h.signal.aborted)return;if(G.has(t))return void K(t,ci(void 0));if(qr(g))return $>p?void K(t,ci(void 0)):(B.add(t),void await V(h,g,!1,{preventScrollReset:s}));if(Vr(g))return void ee(t,n,g.error);En(!Qr(g),"Unhandled fetcher deferred data"),K(t,ci(g.data))}(t,n,g,C,h,f.active,l,b,m))},revalidate:function(){X(),_({revalidation:"loading"}),"submitting"!==S.navigation.state&&("idle"!==S.navigation.state?Y(k||S.historyAction,S.navigation.location,{overrideNavigation:S.navigation,enableViewTransition:!0===T}):Y(S.historyAction,S.location,{startUninterruptedRevalidation:!0}))},createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:te,deleteFetcher:function(e){let t=(H.get(e)||0)-1;t<=0?(H.delete(e),G.add(e),p.v7_fetcherPersist||ne(e)):H.set(e,t),_({fetchers:new Map(S.fetchers)})},dispose:function(){f&&f(),F&&F(),g.clear(),E&&E.abort(),S.fetchers.forEach((e,t)=>ne(t)),S.blockers.forEach((e,t)=>le(t))},getBlocker:function(e,t){let n=S.blockers.get(e)||mr;return U.get(e)!==t&&U.set(e,t),n},deleteBlocker:le,patchRoutes:function(e,t){let n=null==o;Tr(e,t,o||c,s,i),n&&(c=[...c],_({}))},_internalFetchControllers:P,_internalActiveDeferreds:W,_internalSetRoutes:function(e){s={},o=On(e,i,void 0,s)}},l}Symbol("deferred");function yr(e,t,n,r,i,o,a,l){let s,c;if(a){s=[];for(let e of t)if(s.push(e),e.route.id===a){c=e;break}}else s=t,c=t[t.length-1];let d=tr(i||".",er(s,o),Qn(e.pathname,n)||e.pathname,"path"===l);if(null==i&&(d.search=e.search,d.hash=e.hash),(null==i||""===i||"."===i)&&c){let e=ii(d.search);if(c.route.index&&!e)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&e){let e=new URLSearchParams(d.search),t=e.getAll("index");e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();d.search=n?"?"+n:""}}return r&&"/"!==n&&(d.pathname="/"===d.pathname?n:nr([n,d.pathname])),An(d)}function wr(e,t,n,r){if(!r||!function(e){return null!=e&&("formData"in e&&null!=e.formData||"body"in e&&void 0!==e.body)}(r))return{path:n};if(r.formMethod&&!Kr(r.formMethod))return{path:n,error:Ur(405,{method:r.formMethod})};let i,o,a=()=>({path:n,error:Ur(400,{type:"invalid-body"})}),l=r.formMethod||"get",s=e?l.toUpperCase():l.toLowerCase(),c=Zr(n);if(void 0!==r.body){if("text/plain"===r.formEncType){if(!ei(s))return a();let e="string"===typeof r.body?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((e,t)=>{let[n,r]=t;return""+e+n+"="+r+"\n"},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:c,formEncType:r.formEncType,formData:void 0,json:void 0,text:e}}}if("application/json"===r.formEncType){if(!ei(s))return a();try{let e="string"===typeof r.body?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:c,formEncType:r.formEncType,formData:void 0,json:e,text:void 0}}}catch(h){return a()}}}if(En("function"===typeof FormData,"FormData is not available in this environment"),r.formData)i=zr(r.formData),o=r.formData;else if(r.body instanceof FormData)i=zr(r.body),o=r.body;else if(r.body instanceof URLSearchParams)i=r.body,o=$r(i);else if(null==r.body)i=new URLSearchParams,o=new FormData;else try{i=new URLSearchParams(r.body),o=$r(i)}catch(h){return a()}let d={formMethod:s,formAction:c,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:o,json:void 0,text:void 0};if(ei(d.formMethod))return{path:n,submission:d};let u=Tn(n);return t&&u.search&&ii(u.search)&&i.append("index",""),u.search="?"+i,{path:An(u),submission:d}}function Er(e,t,n){void 0===n&&(n=!1);let r=e.findIndex(e=>e.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function jr(e,t,n,r,i,o,a,l,s,c,d,u,h,p,f,g){let m=g?Vr(g[1])?g[1].error:g[1].data:void 0,x=e.createURL(t.location),C=e.createURL(i),b=n;o&&t.errors?b=Er(n,Object.keys(t.errors)[0],!0):g&&Vr(g[1])&&(b=Er(n,g[0]));let v=g?g[1].statusCode:void 0,y=a&&v&&v>=400,w=b.filter((e,n)=>{let{route:i}=e;if(i.lazy)return!0;if(null==i.loader)return!1;if(o)return Sr(i,t.loaderData,t.errors);if(function(e,t,n){let r=!t||n.route.id!==t.route.id,i=void 0===e[n.route.id];return r||i}(t.loaderData,t.matches[n],e)||s.some(t=>t===e.route.id))return!0;let a=t.matches[n],c=e;return Ar(e,yn({currentUrl:x,currentParams:a.params,nextUrl:C,nextParams:c.params},r,{actionResult:m,actionStatus:v,defaultShouldRevalidate:!y&&(l||x.pathname+x.search===C.pathname+C.search||x.search!==C.search||kr(a,c))}))}),E=[];return u.forEach((e,i)=>{if(o||!n.some(t=>t.route.id===e.routeId)||d.has(i))return;let a=Rn(p,e.path,f);if(!a)return void E.push({key:i,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});let s=t.fetchers.get(i),u=oi(a,e.path),g=!1;h.has(i)?g=!1:c.has(i)?(c.delete(i),g=!0):g=s&&"idle"!==s.state&&void 0===s.data?l:Ar(u,yn({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:C,nextParams:n[n.length-1].params},r,{actionResult:m,actionStatus:v,defaultShouldRevalidate:!y&&l})),g&&E.push({key:i,routeId:e.routeId,path:e.path,matches:a,match:u,controller:new AbortController})}),[w,E]}function Sr(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=null!=t&&void 0!==t[e.id],i=null!=n&&void 0!==n[e.id];return!(!r&&i)&&("function"===typeof e.loader&&!0===e.loader.hydrate||!r&&!i)}function kr(e,t){let n=e.route.path;return e.pathname!==t.pathname||null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ar(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"===typeof n)return n}return t.defaultShouldRevalidate}function Tr(e,t,n,r,i){var o;let a;if(e){let t=r[e];En(t,"No route found to patch children into: routeId = "+e),t.children||(t.children=[]),a=t.children}else a=n;let l=On(t.filter(e=>!a.some(t=>Lr(e,t))),i,[e||"_","patch",String((null==(o=a)?void 0:o.length)||"0")],r);a.push(...l)}function Lr(e,t){return"id"in e&&"id"in t&&e.id===t.id||e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive&&(!(e.children&&0!==e.children.length||t.children&&0!==t.children.length)||e.children.every((e,n)=>{var r;return null==(r=t.children)?void 0:r.some(t=>Lr(e,t))}))}async function Fr(e){let{matches:t}=e,n=t.filter(e=>e.shouldLoad),r=await Promise.all(n.map(e=>e.resolve()));return r.reduce((e,t,r)=>Object.assign(e,{[n[r].route.id]:t}),{})}async function Ir(e,t,n,r,i,o,a,l,s,c){let d=o.map(e=>e.route.lazy?async function(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];En(i,"No route found in manifest");let o={};for(let a in r){let e=void 0!==i[a]&&"hasErrorBoundary"!==a;jn(!e,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+a+'" will be ignored.'),e||In.has(a)||(o[a]=r[a])}Object.assign(i,o),Object.assign(i,yn({},t(i),{lazy:void 0}))}(e.route,s,l):void 0),u=o.map((e,n)=>{let o=d[n],a=i.some(t=>t.route.id===e.route.id);return yn({},e,{shouldLoad:a,resolve:async n=>(n&&"GET"===r.method&&(e.route.lazy||e.route.loader)&&(a=!0),a?async function(e,t,n,r,i,o){let a,l,s=r=>{let a,s=new Promise((e,t)=>a=t);l=()=>a(),t.signal.addEventListener("abort",l);let c=i=>"function"!==typeof r?Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "'+e+'" [routeId: '+n.route.id+"]")):r({request:t,params:n.params,context:o},...void 0!==i?[i]:[]),d=(async()=>{try{return{type:"data",result:await(i?i(e=>c(e)):c())}}catch(e){return{type:"error",result:e}}})();return Promise.race([d,s])};try{let i=n.route[e];if(r)if(i){let e,[t]=await Promise.all([s(i).catch(t=>{e=t}),r]);if(void 0!==e)throw e;a=t}else{if(await r,i=n.route[e],!i){if("action"===e){let e=new URL(t.url),r=e.pathname+e.search;throw Ur(405,{method:t.method,pathname:r,routeId:n.route.id})}return{type:Fn.data,result:void 0}}a=await s(i)}else{if(!i){let e=new URL(t.url);throw Ur(404,{pathname:e.pathname+e.search})}a=await s(i)}En(void 0!==a.result,"You defined "+("action"===e?"an action":"a loader")+' for route "'+n.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(c){return{type:Fn.error,result:c}}finally{l&&t.signal.removeEventListener("abort",l)}return a}(t,r,e,o,n,c):Promise.resolve({type:Fn.data,result:void 0}))})}),h=await e({matches:u,request:r,params:o[0].params,fetcherKey:a,context:c});try{await Promise.all(d)}catch(p){}return h}async function Or(e){let{result:t,type:n}=e;if(Xr(t)){let e;try{let n=t.headers.get("Content-Type");e=n&&/\bapplication\/json\b/.test(n)?null==t.body?null:await t.json():await t.text()}catch(u){return{type:Fn.error,error:u}}return n===Fn.error?{type:Fn.error,error:new ar(t.status,t.statusText,e),statusCode:t.status,headers:t.headers}:{type:Fn.data,data:e,statusCode:t.status,headers:t.headers}}var r,i,o,a,l,s,c,d;return n===Fn.error?Jr(t)?t.data instanceof Error?{type:Fn.error,error:t.data,statusCode:null==(o=t.init)?void 0:o.status,headers:null!=(a=t.init)&&a.headers?new Headers(t.init.headers):void 0}:{type:Fn.error,error:new ar((null==(r=t.init)?void 0:r.status)||500,void 0,t.data),statusCode:lr(t)?t.status:void 0,headers:null!=(i=t.init)&&i.headers?new Headers(t.init.headers):void 0}:{type:Fn.error,error:t,statusCode:lr(t)?t.status:void 0}:function(e){let t=e;return t&&"object"===typeof t&&"object"===typeof t.data&&"function"===typeof t.subscribe&&"function"===typeof t.cancel&&"function"===typeof t.resolveData}(t)?{type:Fn.deferred,deferredData:t,statusCode:null==(l=t.init)?void 0:l.status,headers:(null==(s=t.init)?void 0:s.headers)&&new Headers(t.init.headers)}:Jr(t)?{type:Fn.data,data:t.data,statusCode:null==(c=t.init)?void 0:c.status,headers:null!=(d=t.init)&&d.headers?new Headers(t.init.headers):void 0}:{type:Fn.data,data:t}}function Rr(e,t,n,r,i,o){let a=e.headers.get("Location");if(En(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!xr.test(a)){let l=r.slice(0,r.findIndex(e=>e.route.id===n)+1);a=yr(new URL(t.url),l,i,!0,a,o),e.headers.set("Location",a)}return e}function Nr(e,t,n,r){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(xr.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r);if(i.includes(o.protocol))throw new Error("Invalid redirect location");let a=null!=Qn(o.pathname,n);if(o.origin===t.origin&&a)return o.pathname+o.search+o.hash}try{let t=r.createURL(e);if(i.includes(t.protocol))throw new Error("Invalid redirect location")}catch(o){}return e}function Pr(e,t,n,r){let i=e.createURL(Zr(t)).toString(),o={signal:n};if(r&&ei(r.formMethod)){let{formMethod:e,formEncType:t}=r;o.method=e.toUpperCase(),"application/json"===t?(o.headers=new Headers({"Content-Type":t}),o.body=JSON.stringify(r.json)):"text/plain"===t?o.body=r.text:"application/x-www-form-urlencoded"===t&&r.formData?o.body=zr(r.formData):o.body=r.formData}return new Request(i,o)}function zr(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,"string"===typeof r?r:r.name);return t}function $r(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Dr(e,t,n,r,i){let o,a={},l=null,s=!1,c={},d=n&&Vr(n[1])?n[1].error:void 0;return e.forEach(n=>{if(!(n.route.id in t))return;let u=n.route.id,h=t[u];if(En(!qr(h),"Cannot handle redirect results in processLoaderData"),Vr(h)){let t=h.error;if(void 0!==d&&(t=d,d=void 0),l=l||{},i)l[u]=t;else{let n=Gr(e,u);null==l[n.route.id]&&(l[n.route.id]=t)}a[u]=void 0,s||(s=!0,o=lr(h.error)?h.error.status:500),h.headers&&(c[u]=h.headers)}else Qr(h)?(r.set(u,h.deferredData),a[u]=h.deferredData.data,null==h.statusCode||200===h.statusCode||s||(o=h.statusCode),h.headers&&(c[u]=h.headers)):(a[u]=h.data,h.statusCode&&200!==h.statusCode&&!s&&(o=h.statusCode),h.headers&&(c[u]=h.headers))}),void 0!==d&&n&&(l={[n[0]]:d},a[n[0]]=void 0),{loaderData:a,errors:l,statusCode:o||200,loaderHeaders:c}}function Br(e,t,n,r,i,o,a){let{loaderData:l,errors:s}=Dr(t,n,r,a,!1);return i.forEach(t=>{let{key:n,match:r,controller:i}=t,a=o[n];if(En(a,"Did not find corresponding fetcher result"),!i||!i.signal.aborted)if(Vr(a)){let t=Gr(e.matches,null==r?void 0:r.route.id);s&&s[t.route.id]||(s=yn({},s,{[t.route.id]:a.error})),e.fetchers.delete(n)}else if(qr(a))En(!1,"Unhandled fetcher revalidation redirect");else if(Qr(a))En(!1,"Unhandled fetcher deferred data");else{let t=ci(a.data);e.fetchers.set(n,t)}}),{loaderData:l,errors:s}}function Mr(e,t,n,r){let i=yn({},t);for(let o of n){let n=o.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(i[n]=t[n]):void 0!==e[n]&&o.route.loader&&(i[n]=e[n]),r&&r.hasOwnProperty(n))break}return i}function Hr(e){return e?Vr(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Gr(e,t){let n=t?e.slice(0,e.findIndex(e=>e.route.id===t)+1):[...e];return n.reverse().find(e=>!0===e.route.hasErrorBoundary)||e[0]}function Wr(e){let t=1===e.length?e[0]:e.find(e=>e.index||!e.path||"/"===e.path)||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ur(e,t){let{pathname:n,routeId:r,method:i,type:o,message:a}=void 0===t?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return 400===e?(l="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===o?s="defer() is not supported in actions":"invalid-body"===o&&(s="Unable to encode submission body")):403===e?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):404===e?(l="Not Found",s='No route matches URL "'+n+'"'):405===e&&(l="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new ar(e||500,l,new Error(s),!0)}function _r(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[e,r]=t[n];if(qr(r))return{key:e,result:r}}}function Zr(e){return An(yn({},"string"===typeof e?Tn(e):e,{hash:""}))}function Yr(e){return Xr(e.result)&&hr.has(e.result.status)}function Qr(e){return e.type===Fn.deferred}function Vr(e){return e.type===Fn.error}function qr(e){return(e&&e.type)===Fn.redirect}function Jr(e){return"object"===typeof e&&null!=e&&"type"in e&&"data"in e&&"init"in e&&"DataWithResponseInit"===e.type}function Xr(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"object"===typeof e.headers&&"undefined"!==typeof e.body}function Kr(e){return ur.has(e.toLowerCase())}function ei(e){return cr.has(e.toLowerCase())}async function ti(e,t,n,r,i){let o=Object.entries(t);for(let a=0;a<o.length;a++){let[l,s]=o[a],c=e.find(e=>(null==e?void 0:e.route.id)===l);if(!c)continue;let d=r.find(e=>e.route.id===c.route.id),u=null!=d&&!kr(d,c)&&void 0!==(i&&i[c.route.id]);Qr(s)&&u&&await ri(s,n,!1).then(e=>{e&&(t[l]=e)})}}async function ni(e,t,n){for(let r=0;r<n.length;r++){let{key:i,routeId:o,controller:a}=n[r],l=t[i],s=e.find(e=>(null==e?void 0:e.route.id)===o);s&&(Qr(l)&&(En(a,"Expected an AbortController for revalidating fetcher deferred result"),await ri(l,a.signal,!0).then(e=>{e&&(t[i]=e)})))}}async function ri(e,t,n){if(void 0===n&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Fn.data,data:e.deferredData.unwrappedData}}catch(r){return{type:Fn.error,error:r}}return{type:Fn.data,data:e.deferredData.data}}}function ii(e){return new URLSearchParams(e).getAll("index").some(e=>""===e)}function oi(e,t){let n="string"===typeof t?Tn(t).search:t.search;if(e[e.length-1].route.index&&ii(n||""))return e[e.length-1];let r=Kn(e);return r[r.length-1]}function ai(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(t&&n&&r)return null!=i?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i}:null!=o?{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0}:void 0!==a?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}:void 0}function li(e,t){if(t){return{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}return{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function si(e,t){if(e){return{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}}return{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function ci(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function di(){return di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},di.apply(this,arguments)}const ui=r.createContext(null);const hi=r.createContext(null);const pi=r.createContext(null);const fi=r.createContext(null);const gi=r.createContext({outlet:null,matches:[],isDataRoute:!1});const mi=r.createContext(null);function xi(){return null!=r.useContext(fi)}function Ci(){return xi()||En(!1),r.useContext(fi).location}function bi(e){r.useContext(pi).static||r.useLayoutEffect(e)}function vi(){let{isDataRoute:e}=r.useContext(gi);return e?function(){let{router:e}=Oi(Fi.UseNavigateStable),t=Ni(Ii.UseNavigateStable),n=r.useRef(!1);bi(()=>{n.current=!0});let i=r.useCallback(function(r,i){void 0===i&&(i={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,di({fromRouteId:t},i)))},[e,t]);return i}():function(){xi()||En(!1);let e=r.useContext(ui),{basename:t,future:n,navigator:i}=r.useContext(pi),{matches:o}=r.useContext(gi),{pathname:a}=Ci(),l=JSON.stringify(er(o,n.v7_relativeSplatPath)),s=r.useRef(!1);return bi(()=>{s.current=!0}),r.useCallback(function(n,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof n)return void i.go(n);let o=tr(n,JSON.parse(l),a,"path"===r.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:nr([t,o.pathname])),(r.replace?i.replace:i.push)(o,r.state,r)},[t,i,l,a,e])}()}const yi=r.createContext(null);function wi(){let{matches:e}=r.useContext(gi),t=e[e.length-1];return t?t.params:{}}function Ei(e,t){let{relative:n}=void 0===t?{}:t,{future:i}=r.useContext(pi),{matches:o}=r.useContext(gi),{pathname:a}=Ci(),l=JSON.stringify(er(o,i.v7_relativeSplatPath));return r.useMemo(()=>tr(e,JSON.parse(l),a,"path"===n),[e,l,a,n])}function ji(e,t,n,i){xi()||En(!1);let{navigator:o}=r.useContext(pi),{matches:a}=r.useContext(gi),l=a[a.length-1],s=l?l.params:{},c=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let d,u=Ci();if(t){var h;let e="string"===typeof t?Tn(t):t;"/"===c||(null==(h=e.pathname)?void 0:h.startsWith(c))||En(!1),d=e}else d=u;let p=d.pathname||"/",f=p;if("/"!==c){let e=c.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(e.length).join("/")}let g=Rn(e,{pathname:f});let m=Li(g&&g.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:nr([c,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:nr([c,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,i);return t&&m?r.createElement(fi.Provider,{value:{location:di({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Cn.Pop}},m):m}function Si(){let e=function(){var e;let t=r.useContext(mi),n=Ri(Ii.UseRouteError),i=Ni(Ii.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[i]}(),t=lr(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,null)}const ki=r.createElement(Si,null);class Ai extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(gi.Provider,{value:this.props.routeContext},r.createElement(mi.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ti(e){let{routeContext:t,match:n,children:i}=e,o=r.useContext(ui);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(gi.Provider,{value:t},i)}function Li(e,t,n,i){var o;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===i&&(i=null),null==e){var a;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(a=i)&&a.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let l=e,s=null==(o=n)?void 0:o.errors;if(null!=s){let e=l.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]));e>=0||En(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(n&&i&&i.v7_partialHydration)for(let r=0;r<l.length;r++){let e=l[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=r),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight((e,i,o)=>{let a,u=!1,h=null,p=null;var f;n&&(a=s&&i.route.id?s[i.route.id]:void 0,h=i.route.errorElement||ki,c&&(d<0&&0===o?(f="route-fallback",!1||Pi[f]||(Pi[f]=!0),u=!0,p=null):d===o&&(u=!0,p=i.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,o+1)),m=()=>{let t;return t=a?h:u?p:i.route.Component?r.createElement(i.route.Component,null):i.route.element?i.route.element:e,r.createElement(Ti,{match:i,routeContext:{outlet:e,matches:g,isDataRoute:null!=n},children:t})};return n&&(i.route.ErrorBoundary||i.route.errorElement||0===o)?r.createElement(Ai,{location:n.location,revalidation:n.revalidation,component:h,error:a,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Fi=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Fi||{}),Ii=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ii||{});function Oi(e){let t=r.useContext(ui);return t||En(!1),t}function Ri(e){let t=r.useContext(hi);return t||En(!1),t}function Ni(e){let t=function(){let e=r.useContext(gi);return e||En(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||En(!1),n.route.id}const Pi={};function zi(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}i.startTransition;function $i(e){return function(e){let t=r.useContext(gi).outlet;return t?r.createElement(yi.Provider,{value:e},t):t}(e.context)}function Di(e){let{basename:t="/",children:n=null,location:i,navigationType:o=Cn.Pop,navigator:a,static:l=!1,future:s}=e;xi()&&En(!1);let c=t.replace(/^\/*/,"/"),d=r.useMemo(()=>({basename:c,navigator:a,static:l,future:di({v7_relativeSplatPath:!1},s)}),[c,s,a,l]);"string"===typeof i&&(i=Tn(i));let{pathname:u="/",search:h="",hash:p="",state:f=null,key:g="default"}=i,m=r.useMemo(()=>{let e=Qn(u,c);return null==e?null:{location:{pathname:e,search:h,hash:p,state:f,key:g},navigationType:o}},[c,u,h,p,f,g,o]);return null==m?null:r.createElement(pi.Provider,{value:d},r.createElement(fi.Provider,{children:n,value:m}))}new Promise(()=>{});r.Component;function Bi(e){let t={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:r.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:r.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:r.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(this,arguments)}function Hi(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const Gi=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Wi=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(Xf){}function Ui(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Mi({},t,{errors:_i(t.errors)})),t}function _i(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&"RouteErrorResponse"===i.__type)n[r]=new ar(i.status,i.statusText,i.data,!0===i.internal);else if(i&&"Error"===i.__type){if(i.__subType){let e=window[i.__subType];if("function"===typeof e)try{let t=new e(i.message);t.stack="",n[r]=t}catch(Xf){}}if(null==n[r]){let e=new Error(i.message);e.stack="",n[r]=e}}else n[r]=i;return n}const Zi=r.createContext({isTransitioning:!1});const Yi=r.createContext(new Map);const Qi=i.startTransition,Vi=vn.flushSync;i.useId;function qi(e){Vi?Vi(e):e()}class Ji{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}})}}function Xi(e){let{fallbackElement:t,router:n,future:i}=e,[o,a]=r.useState(n.state),[l,s]=r.useState(),[c,d]=r.useState({isTransitioning:!1}),[u,h]=r.useState(),[p,f]=r.useState(),[g,m]=r.useState(),x=r.useRef(new Map),{v7_startTransition:C}=i||{},b=r.useCallback(e=>{C?function(e){Qi?Qi(e):e()}(e):e()},[C]),v=r.useCallback((e,t)=>{let{deletedFetchers:r,flushSync:i,viewTransitionOpts:o}=t;e.fetchers.forEach((e,t)=>{void 0!==e.data&&x.current.set(t,e.data)}),r.forEach(e=>x.current.delete(e));let l=null==n.window||null==n.window.document||"function"!==typeof n.window.document.startViewTransition;if(o&&!l){if(i){qi(()=>{p&&(u&&u.resolve(),p.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:o.currentLocation,nextLocation:o.nextLocation})});let t=n.window.document.startViewTransition(()=>{qi(()=>a(e))});return t.finished.finally(()=>{qi(()=>{h(void 0),f(void 0),s(void 0),d({isTransitioning:!1})})}),void qi(()=>f(t))}p?(u&&u.resolve(),p.skipTransition(),m({state:e,currentLocation:o.currentLocation,nextLocation:o.nextLocation})):(s(e),d({isTransitioning:!0,flushSync:!1,currentLocation:o.currentLocation,nextLocation:o.nextLocation}))}else i?qi(()=>a(e)):b(()=>a(e))},[n.window,p,u,x,b]);r.useLayoutEffect(()=>n.subscribe(v),[n,v]),r.useEffect(()=>{c.isTransitioning&&!c.flushSync&&h(new Ji)},[c]),r.useEffect(()=>{if(u&&l&&n.window){let e=l,t=u.promise,r=n.window.document.startViewTransition(async()=>{b(()=>a(e)),await t});r.finished.finally(()=>{h(void 0),f(void 0),s(void 0),d({isTransitioning:!1})}),f(r)}},[b,l,u,n.window]),r.useEffect(()=>{u&&l&&o.location.key===l.location.key&&u.resolve()},[u,p,o.location,l]),r.useEffect(()=>{!c.isTransitioning&&g&&(s(g.state),d({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),m(void 0))},[c.isTransitioning,g]),r.useEffect(()=>{},[]);let y=r.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})}),[n]),w=n.basename||"/",E=r.useMemo(()=>({router:n,navigator:y,static:!1,basename:w}),[n,y,w]),j=r.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return r.useEffect(()=>zi(i,n.future),[i,n.future]),r.createElement(r.Fragment,null,r.createElement(ui.Provider,{value:E},r.createElement(hi.Provider,{value:o},r.createElement(Yi.Provider,{value:x.current},r.createElement(Zi.Provider,{value:c},r.createElement(Di,{basename:w,location:o.location,navigationType:o.historyAction,navigator:y,future:j},o.initialized||n.future.v7_partialHydration?r.createElement(Ki,{routes:n.routes,future:n.future,state:o}):t))))),null)}const Ki=r.memo(eo);function eo(e){let{routes:t,future:n,state:r}=e;return ji(t,void 0,r,n)}const to="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,no=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ro=r.forwardRef(function(e,t){let n,{onClick:i,relative:o,reloadDocument:a,replace:l,state:s,target:c,to:d,preventScrollReset:u,viewTransition:h}=e,p=Hi(e,Gi),{basename:f}=r.useContext(pi),g=!1;if("string"===typeof d&&no.test(d)&&(n=d,to))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=Qn(t.pathname,f);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:g=!0}catch(Xf){}let m=function(e,t){let{relative:n}=void 0===t?{}:t;xi()||En(!1);let{basename:i,navigator:o}=r.useContext(pi),{hash:a,pathname:l,search:s}=Ei(e,{relative:n}),c=l;return"/"!==i&&(c="/"===l?i:nr([i,l])),o.createHref({pathname:c,search:s,hash:a})}(d,{relative:o}),x=function(e,t){let{target:n,replace:i,state:o,preventScrollReset:a,relative:l,viewTransition:s}=void 0===t?{}:t,c=vi(),d=Ci(),u=Ei(e,{relative:l});return r.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==i?i:An(d)===An(u);c(e,{replace:n,state:o,preventScrollReset:a,relative:l,viewTransition:s})}},[d,c,u,i,o,n,e,a,l,s])}(d,{replace:l,state:s,target:c,preventScrollReset:u,relative:o,viewTransition:h});return r.createElement("a",Mi({},p,{href:n||m,onClick:g||a?i:function(e){i&&i(e),e.defaultPrevented||x(e)},ref:t,target:c}))});const io=r.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,viewTransition:c,children:d}=e,u=Hi(e,Wi),h=Ei(s,{relative:u.relative}),p=Ci(),f=r.useContext(hi),{navigator:g,basename:m}=r.useContext(pi),x=null!=f&&function(e,t){void 0===t&&(t={});let n=r.useContext(Zi);null==n&&En(!1);let{basename:i}=lo(oo.useViewTransitionState),o=Ei(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=Qn(n.currentLocation.pathname,i)||n.currentLocation.pathname,l=Qn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return null!=Zn(o.pathname,l)||null!=Zn(o.pathname,a)}(h)&&!0===c,C=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,b=p.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;i||(b=b.toLowerCase(),v=v?v.toLowerCase():null,C=C.toLowerCase()),v&&m&&(v=Qn(v,m)||v);const y="/"!==C&&C.endsWith("/")?C.length-1:C.length;let w,E=b===C||!a&&b.startsWith(C)&&"/"===b.charAt(y),j=null!=v&&(v===C||!a&&v.startsWith(C)&&"/"===v.charAt(C.length)),S={isActive:E,isPending:j,isTransitioning:x},k=E?n:void 0;w="function"===typeof o?o(S):[o,E?"active":null,j?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let A="function"===typeof l?l(S):l;return r.createElement(ro,Mi({},u,{"aria-current":k,className:w,ref:t,style:A,to:s,viewTransition:c}),"function"===typeof d?d(S):d)});var oo,ao;function lo(e){let t=r.useContext(ui);return t||En(!1),t}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(oo||(oo={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ao||(ao={}));const so=e=>{let t;const n=new Set,r=(e,r)=>{const i="function"===typeof e?e(t):e;if(!Object.is(i,t)){const e=t;t=(null!=r?r:"object"!==typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,o={setState:r,getState:i,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e))},a=t=e(r,i,o);return o},co=e=>e;const uo=e=>{const t=(e=>e?so(e):so)(e),n=e=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:co;const n=r.useSyncExternalStore(e.subscribe,r.useCallback(()=>t(e.getState()),[e,t]),r.useCallback(()=>t(e.getInitialState()),[e,t]));return r.useDebugValue(n),n}(t,e);return Object.assign(n,t),n},ho=e=>e?uo(e):uo;function po(e,t){return function(){return Object.assign({},e,t(...arguments))}}function fo(e,t){let n;try{n=e()}catch(Xf){return}const r={getItem:e=>{var r;const i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(r=n.getItem(e))?r:null;return o instanceof Promise?o.then(i):i(o)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,null==t?void 0:t.replacer)),removeItem:e=>n.removeItem(e)};return r}const go=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then:e=>go(e)(n),catch(e){return this}}}catch(Xf){return{then(e){return this},catch:t=>go(t)(Xf)}}},mo=(e,t)=>(n,r,i)=>{let o={storage:fo(()=>window.localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},a=!1,l=0;const s=new Set,c=new Set;let d=o.storage;if(!d)return e(function(){console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...arguments)},r,i);const u=()=>{const e=o.partialize({...r()});return d.setItem(o.name,{state:e,version:o.version})},h=i.setState;i.setState=(e,t)=>(h(e,t),u());const p=e(function(){return n(...arguments),u()},r,i);let f;i.getInitialState=()=>p;const g=()=>{var e,t;if(!d)return;const i=++l;a=!1,s.forEach(e=>{var t;return e(null!=(t=r())?t:p)});const h=(null==(t=o.onRehydrateStorage)?void 0:t.call(o,null!=(e=r())?e:p))||void 0;return go(d.getItem.bind(d))(o.name).then(e=>{if(e){if("number"!==typeof e.version||e.version===o.version)return[!1,e.state];if(o.migrate){const t=o.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var t;if(i!==l)return;const[a,s]=e;return f=o.merge(s,null!=(t=r())?t:p),n(f,!0),a?u():void 0}).then(()=>{i===l&&(null==h||h(r(),void 0),f=r(),a=!0,c.forEach(e=>e(f)))}).catch(e=>{i===l&&(null==h||h(void 0,e))})};return i.persist={setOptions:e=>{o={...o,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>g(),hasHydrated:()=>a,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},o.skipHydration||g(),f||p};const xo=ho(mo(po({user:null,isAuthenticated:!0},e=>({setIsAuthenticated:t=>e({isAuthenticated:t}),setUser:t=>e({user:t})})),{name:"auth-storage",partialize:e=>({isAuthenticated:e.isAuthenticated,user:e.user})}));var Co=n(579);const bo=()=>{const{isAuthenticated:e}=xo();return(0,Co.jsxs)("div",{children:[(0,Co.jsxs)("header",{className:"root-header",children:[(0,Co.jsx)("div",{className:"root-header-logo",children:(0,Co.jsx)(ro,{to:"/",children:(0,Co.jsx)("img",{src:"/assets\\picture\\logo.png",alt:"FailLog"})})}),(0,Co.jsxs)("nav",{className:"root-header-nav",children:[(0,Co.jsx)(ro,{to:"/fail-logs",children:"\ud398\uc77c\ub85c\uadf8"}),(0,Co.jsx)(ro,{to:"/projects",children:"\ud504\ub85c\uc81d\ud2b8"}),(0,Co.jsx)(ro,{to:"/chronology",children:"\uc131\uc7a5\uc5f0\ub300\uae30"}),(0,Co.jsx)(ro,{to:"/community",children:"\ucee4\ubba4\ub2c8\ud2f0"}),(0,Co.jsx)(ro,{to:"/my-page/profile",children:"\ub9c8\uc774\ud398\uc774\uc9c0"})]}),(0,Co.jsx)("div",{className:"root-header-actions",children:e?(0,Co.jsx)("button",{className:"root-header-btn",children:"\ub85c\uadf8\uc544\uc6c3"}):(0,Co.jsx)(ro,{to:"/login",className:"root-header-btn",children:"\ub85c\uadf8\uc778"})})]}),(0,Co.jsx)("main",{children:(0,Co.jsx)($i,{})}),(0,Co.jsx)("footer",{className:"root-footer",children:(0,Co.jsxs)("div",{className:"root-footer-inner",children:[(0,Co.jsxs)("p",{className:"root-footer-logo",children:[(0,Co.jsx)("span",{className:"root-footer-logo-fail",children:"Fail"}),(0,Co.jsx)("span",{className:"root-footer-logo-log",children:"Log"})]}),(0,Co.jsxs)("div",{className:"root-footer-nav",children:[(0,Co.jsx)(ro,{to:"/terms",children:"\uc774\uc6a9\uc57d\uad00"}),(0,Co.jsx)(ro,{to:"/privacy",children:"\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68"}),(0,Co.jsx)(ro,{to:"/support",children:"\uace0\uac1d\uc13c\ud130"})]}),(0,Co.jsxs)("div",{className:"root-footer-info",children:[(0,Co.jsx)("p",{children:"\ubc95\uc778\uba85 : FailLog | \ub300\ud45c\uc790 : 000 | \uc0ac\uc5c5\uc790 \ub4f1\ub85d\ubc88\ud638 : 000-00-00000 | \uc0ac\uc5c5 \uc18c\uc7ac\uc9c0 : \uc11c\uc6b8 \uac15\ub0a8\uad6c \ud14c\ud5e4\ub780\ub85c 146"}),(0,Co.jsx)("p",{children:"\uc774\uba54\uc77c : FailLog@FailLog.co.kr | \ud329\uc2a4 : 02-538-0021"})]}),(0,Co.jsx)("p",{className:"root-footer-copy",children:"\xa9 2026 FailLog. All rights reserved."})]})})]})},vo=()=>(0,Co.jsx)($i,{});const yo=[{label:"\ud398\uc77c\ub85c\uadf8",desc:"\ubaa8\ub450\uc758 \uae30\ub85d\ub4e4\uc744\n\ud55c\ub208\uc5d0 \ubaa8\uc544\ubcf4\uae30",path:"/fail-logs",icon:n.p+"static/media/file_1324039.e7fb08dc067d5316833c5225b5e8379b.svg",iconBg:"linear-gradient(135deg, #F53102, #FF34C5)"},{label:"\ud504\ub85c\uc81d\ud2b8",desc:"\uc0c8\ub85c\uc6b4 \uc2e4\ud328 \uacbd\ud5d8\uc744\n\uad6c\uc870\ud654\ud558\uc5ec \uae30\ub85d\ud558\uc138\uc694",path:"/projects",icon:n.p+"static/media/routine_4088138.3c9e8faed99eea1300a2ba09c0cfd14c.svg",iconBg:"linear-gradient(135deg, #FF34C5, #F5EE03)"},{label:"\uc131\uc7a5 \uc5f0\ub300\uae30",desc:"\uc790\uc2e0\uc758 \ubc1c\uc804 \uacfc\uc815\uc744\n\ud655\uc778\ud558\uae30",path:"/chronology",icon:n.p+"static/media/graph_1357731.b2006abbb82c22f55fd640824798427c.svg",iconBg:"linear-gradient(135deg, #F5EE03, #00B53F)"},{label:"\ucee4\ubba4\ub2c8\ud2f0",desc:"\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc\n\uc18c\ud1b5\ud558\uae30",path:"/community",icon:n.p+"static/media/crm_304575.67a14f165db07ed97b71b212385a307a.svg",iconBg:"linear-gradient(135deg, #00B53F, #027DF0)"},{label:"\ub9c8\uc774\ud398\uc774\uc9c0",desc:"\ub0b4 \uc815\ubcf4\n\uad00\ub9ac\ud558\uae30",path:"/mypage",icon:n.p+"static/media/feedback_2512312.b29375fa99cf1f61f11f738c9153fd87.svg",iconBg:"linear-gradient(135deg, #027DF0, #9333EA)"}],wo={};wo.Container=rn.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 40px;
    min-height: calc(100vh - 64px);
    background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
`,wo.TitleSection=rn.div`
    text-align: center;
    margin-bottom: 60px;

    .main-menu-title {
        font-size: ${xn.FONT_SIZE.h1};
        font-weight: ${xn.FONT_WEIGHT.bold};
        color: ${xn.PALETTE.black};
        margin: 0 0 40px 0;
        line-height: 1.2;
    }

    .main-menu-subtitle {
        font-size: ${xn.FONT_SIZE.h3_2};
        font-weight: ${xn.FONT_WEIGHT.regular};
        color: ${xn.PALETTE.black};
        margin: 0;
        line-height: 1.6;
    }
`,wo.GradientText=rn.span`
    background: linear-gradient(90deg, #027df0, #ab47ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`,wo.CardWrapper=rn.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`,wo.Card=rn.div`
    width: 200px;
    height: 240px;
    background: ${xn.PALETTE.white};
    border: 1.5px solid ${xn.GRAYSCALE[4]};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    cursor: pointer;
    padding: 24px 16px;
    box-sizing: border-box;
    transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);

    &:hover {
        border-color: ${xn.PALETTE.third.main};
        transform: translateY(-10px);
        box-shadow: 0 8px 24px rgba(124, 58, 237, 0.15);
    }
`,wo.CardIconBox=rn.div`
    width: 80px;
    height: 80px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: ${e=>{let{$iconBg:t}=e;return t}};

    img {
        width: 50px;
        height: 50px;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }
`,wo.CardLabel=rn.p`
    font-size: ${xn.FONT_SIZE.h6};
    font-weight: ${xn.FONT_WEIGHT.bold};
    color: ${xn.PALETTE.black};
    margin: 0;
    text-align: center;
`,wo.CardDesc=rn.p`
    font-size: ${xn.FONT_SIZE.h8};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: ${xn.GRAYSCALE[10]};
    margin: 0;
    text-align: center;
    line-height: 1.5;
`;const Eo=()=>{const e=vi();return(0,Co.jsxs)(wo.Container,{children:[(0,Co.jsxs)(wo.TitleSection,{children:[(0,Co.jsxs)("h1",{className:"main-menu-title",children:["\uc2e4\ud328\uac00 \uc131\uc7a5\uc758 \uc790\uc0b0\uc774 \ub418\ub294 \uacf5\uac04, ",(0,Co.jsx)(wo.GradientText,{children:"FailLog"})]}),(0,Co.jsxs)("p",{className:"main-menu-subtitle",children:["\uc2e4\ud328\ub97c \uae30\ub85d\ud558\uace0, \ub098\ub9cc\uc758 \uc131\uacf5 \ub370\uc774\ud130\ub97c \ub9cc\ub4e4\uc5b4 \ubcf4\uc138\uc694.",(0,Co.jsx)("br",{}),"\ubb34\uc5c7\uc744 \ub3c4\uc804\ud588\ub098\uc694?"]})]}),(0,Co.jsx)(wo.CardWrapper,{children:yo.map(t=>(0,Co.jsxs)(wo.Card,{onClick:()=>e(t.path),children:[(0,Co.jsx)(wo.CardIconBox,{$iconBg:t.iconBg,children:(0,Co.jsx)("img",{src:t.icon,alt:t.label})}),(0,Co.jsx)(wo.CardLabel,{children:t.label}),(0,Co.jsx)(wo.CardDesc,{children:t.desc.split("\n").map((e,n)=>(0,Co.jsxs)(r.Fragment,{children:[e,n<t.desc.split("\n").length-1&&(0,Co.jsx)("br",{})]},n))})]},t.label))})]})};const jo=n.p+"static/media/chatbot_10541415.750cbc333762b0ae534f3a52eb068cb5.svg";const So=n.p+"static/media/repeat_238888.69dc087d7c0c55466410455ea6c0bd59.svg";const ko=n.p+"static/media/wash-time_103937.c719a8e768a60c92934360d027b7736f.svg";const Ao=n.p+"static/media/arrow_90418.2892c55c11157786e013a6d637ddbfeb.svg";const To=n.p+"static/media/file_1324039.e7fb08dc067d5316833c5225b5e8379b.svg";const Lo=n.p+"static/media/bar-chart_347779.a0f98ce1032197041fa28ed494d7e5ff.svg";const Fo=n.p+"static/media/teamwork_484616.41a6b4dd05d8ecd03d6387fe2895e412.svg";const Io=n.p+"static/media/cross-out_2586312.8a84a1fcc366500ef261e7c65c3edd32.svg";const Oo=n.p+"static/media/pie-chart_744334.0742d7eea1ff2f1f408cc137af19ed2c.svg";const Ro=n.p+"static/media/share_683175.ae608075bbc33d5285d03e55315c0bc3.svg";const No=n.p+"static/media/registration-mark_1203943.b4bb42fd3708f021218ee746452ca793.svg";const Po=n.p+"static/media/ph--heart-light.1b4f410f3525a6bdf5d42355e0b97243.svg";const zo=n.p+"static/media/hugeicons--view.472198bf674adb70d85605ddf299cfdc.svg",$o=e=>{let{icon:t,$variant:n,stat:r,label:i}=e;return(0,Co.jsxs)(_o.StatCard,{children:[(0,Co.jsx)(_o.StatCardIcon,{$variant:n,children:(0,Co.jsx)("img",{src:t,alt:i})}),(0,Co.jsx)(_o.StatCardStat,{$variant:n,children:r}),(0,Co.jsx)(_o.StatCardLabel,{children:i})]})},Do=[{icon:So,$variant:"red",stat:"73%",label:"\uac19\uc740 \uc720\ud615\uc758 \uc2e4\ud328\ub97c 2\ud68c \uc774\uc0c1 \uacbd\ud5d8"},{icon:ko,$variant:"blue",stat:"2\uc8fc",label:"\uc2e4\ud328\uc758 \ub9e5\ub77d\uc744 \uae30\uc5b5\ud558\ub294 \ud3c9\uade0 \uc2dc\uac04"},{icon:Ao,$variant:"green",stat:"6\ubc30",label:"\uae30\ub85d\ub41c \uc2e4\ud328\ub97c \ubd84\uc11d\ud560 \ub54c \uac1c\uc120\uc728"}],Bo=e=>{let{icon:t,$variant:n,title:r,desc:i}=e;return(0,Co.jsxs)(_o.MethodCard,{children:[(0,Co.jsx)(_o.MethodCardIcon,{$variant:n,children:(0,Co.jsx)("img",{src:t,alt:r})}),(0,Co.jsx)(_o.MethodCardTitle,{children:r}),(0,Co.jsx)(_o.MethodCardDesc,{children:i})]})},Mo=[{icon:To,$variant:"left",title:"\uad6c\uc870\ud654\ub41c \uc2e4\ud328 \uae30\ub85d",desc:"\uac10\uc815\uc774 \uc544\ub2cc \uc120\ud0dd \uadfc\uac70, \ubb34\uc2dc\ud55c \uc2e0\ud638 \ub4f1 \ub2f9\uc2dc \uc81c\uc57d\uc744 \uccb4\uacc4\uc801\uc73c\ub85c \uae30\ub85d\ud569\ub2c8\ub2e4."},{icon:Lo,$variant:"center",title:"\ud328\ud134 \ubd84\uc11d \ub300\uc2dc\ubcf4\ub4dc",desc:"\uac1c\uc778\uc758 \uc2e4\ud328 \ud328\ud134\uc744 \uc2dc\uac01\ud654\ud558\uace0, \ubc18\ubcf5\ub418\ub294 \uc120\ud0dd\uc758 \uc624\ub958\ub97c \uac1d\uad00\uc801\uc73c\ub85c \ud30c\uc545\ud569\ub2c8\ub2e4."},{icon:Fo,$variant:"right",title:"\ud0c0\uc778\uc758 \uc2e4\ud328\ub85c\ubd80\ud130 \ud559\uc2b5",desc:"\ub2e4\uc591\ud55c \ubd84\uc57c\uc758 \uc2e4\ud328 \uc0ac\ub840\ub97c \uc77d\uace0, \uacf5\uac10, \uc9c0\uc2dd, \uacbd\ud5d8\uc744 \uacf5\uc720\ud558\uc138\uc694."}],Ho=e=>{let{step:t,icon:n,name:r,desc:i,tags:o,side:a}=e;const l="left"===a,s=l?(0,Co.jsxs)(_o.StepCardTop,{$side:"left",children:[(0,Co.jsxs)(_o.StepLabel,{$step:t,children:["Step ",t]}),(0,Co.jsx)(_o.StepCardIcon,{$step:t,children:(0,Co.jsx)("img",{src:n,alt:`step${t}`})})]}):(0,Co.jsxs)(_o.StepCardTop,{$side:"right",children:[(0,Co.jsx)(_o.StepCardIcon,{$step:t,children:(0,Co.jsx)("img",{src:n,alt:`step${t}`})}),(0,Co.jsxs)(_o.StepLabel,{$step:t,children:["Step ",t]})]}),c=(0,Co.jsxs)(_o.StepCard,{children:[s,(0,Co.jsx)(_o.StepCardName,{$side:a,children:r}),(0,Co.jsx)(_o.StepCardDesc,{$side:a,children:i}),(0,Co.jsx)(_o.StepTags,{$side:a,children:o.map(e=>(0,Co.jsx)(_o.StepTag,{$step:t,children:e},e))})]}),d=(0,Co.jsx)(_o.StepDot,{$step:t,children:t});return(0,Co.jsx)(_o.StepRow,{$side:a,children:l?(0,Co.jsxs)(Co.Fragment,{children:[c,d]}):(0,Co.jsxs)(Co.Fragment,{children:[d,c]})})},Go=[{step:1,icon:Io,name:"\uae30\ub85d",desc:"\uc2e4\ud328\ub97c \uad6c\uc870\ud654\ub41c \ud15c\ud50c\ub9bf\uc73c\ub85c \uae30\ub85d\ud558\uc138\uc694.",tags:["\uc0c1\ud669","\uc120\ud0dd","\uacb0\uacfc"],side:"left"},{step:2,icon:Oo,name:"\ubd84\uc11d",desc:"\ubd84\uc11d \ub9ac\ud3ec\ud2b8\ub97c \ud655\uc778\ud558\uc138\uc694.",tags:["\ud328\ud134","\ud0a4\uc6cc\ub4dc"],side:"right"},{step:3,icon:Ro,name:"\uacf5\uc720",desc:"\ub85c\uadf8\uc640 \uacbd\ud5d8\uc744 \uacf5\uc720\ud574\ubcf4\uc138\uc694.",tags:["\ucee4\ubba4\ub2c8\ud2f0","\ub2e4\uc591\ud55c \ub85c\uadf8"],side:"left"},{step:4,icon:No,name:"\uac1c\uc120",desc:"\ub2e4\uc74c \ub3c4\uc804\uc5d0 \uc778\uc0ac\uc774\ud2b8\ub97c \uc801\uc6a9\ud558\uc138\uc694.",tags:["\uc561\uc158\ud50c\ub79c","\ub9ac\ub9c8\uc778\ub4dc"],side:"right"}],Wo=e=>{let{$variant:t,category:n,title:r,desc:i,nickname:o,avatar:a,views:l,likes:s}=e;return(0,Co.jsxs)(_o.LogCard,{children:[(0,Co.jsx)(_o.LogCategory,{$variant:t,children:n}),(0,Co.jsx)(_o.LogCardTitle,{children:r}),(0,Co.jsx)(_o.LogCardDesc,{children:i}),(0,Co.jsxs)(_o.LogCardBottom,{children:[(0,Co.jsxs)(_o.LogProfile,{children:[(0,Co.jsx)(_o.LogAvatarWrap,{children:(0,Co.jsx)(_o.LogAvatar,{src:a,alt:o})}),(0,Co.jsx)(_o.LogNickname,{children:o})]}),(0,Co.jsxs)(_o.LogStats,{children:[(0,Co.jsxs)(_o.LogStat,{children:[(0,Co.jsx)("img",{src:zo,alt:"views",width:"16",height:"16"}),l]}),(0,Co.jsxs)(_o.LogStat,{children:[(0,Co.jsx)("img",{src:Po,alt:"likes",width:"16",height:"16"}),s]})]})]})]})},Uo=[{$variant:"blue",category:"\uacf5\ubd80/\ucde8\uc5c5",title:"\uba74\uc811\uc5d0\uc11c \ubc18\ubcf5\ub41c \uc9c8\ubb38\uc5d0 \ub2f5\ubcc0\uc744 \ubabb\ud55c \uc774\uc720",desc:"\uba74\uc811\uc5d0\uc11c \ubc18\ubcf5\ub41c \uc9c8\ubb38\uc5d0 \ub2f5\ubcc0\uc744 \ubabb\ud55c \uc774\uc720",nickname:"\ucde8\uc900\ud0c8\ucd9c\ub118\ubc84\uc6d0",avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABS9JREFUeAHNWc1LI0kUf4nfIhpRQVCY6D+wLiJ+XeKoCCqsiye97A47twR2LuJt3aMouNmLcxLXu4IIqx7EuIjgQcke1YOJyI4KSswqfuubepVUTXWnu5OOcZwfPKrT9arq9169etVVcUCaQEQXK+qY9DF5E392xYVwziQcL/9hsuZwONbga4ER9DDxM4mgfVCbaSZ18FKIEwxg5hBg4oZMgXXmYvIHvhyobxc8B2QxkxC+PEKYrndZwzpMLw6fQ9Ze7L4CSYGIGVmHAUk3KwJM3PA6oHT2PUtlYfWlhijGgjoIr0dSIAwxsufihVOnMAIpknx8fOTl0tISHITD8rcRmANga2sLZmdnNW0t4I5zMezMjTbR29uL1JRke3sbn56eEnTo3eLiotQbGBhAG/AYEQ2gTeTk5CCbHi7vfn5nqtfV1SX1ioqK0AYCgp8zTpJWmgdsgrWT8vD4YKqXm5sr9bKyssAGPMKrIkY/QBpgHuLCO3I6TfWIoICVngn6eLv4jx8gDdCggkSqBBBs4yc2hssZd21Key1bGJa/zUCrXHrekZC6NR5Xn+Pgn5PkBo9QEErR6P+w+Pci+Lw+aGhogNraWuju7uZeU1OLw2BQI7BFZ0SA4+HhAQ4ODsDn88HU1BRcX19L4xT0wf39fYBSyOXlJY6MjGBpaalMJapkZ2djU1NTwqoX9e9/eW+6dDs7O6Ue9a+CxqX3lBGETltbGzLCyMiKlDdPlgZ7enqkstpAiHj/GzNERWFhIbJVzHU2NjZMiVLuZLPBdaurqzV1t7e3vL2T1ZUUF8eemS6Vfr+f69zd3YWgqqoqQh0IMiyVaLxYUVGBlZWVODo6yhuJpE7WrqysIIs5HBsbMyVJeoS67+qwvLwcT05O5DsCm3rc3d3l+VUQVMm2tLSQWgRUr+Xl5XFRG9zc3EiC6s5Dz2JAfZ0eLLwSiOuNYdtrwkzSjBEXCjkoKCiQFRSjOzs7min3er2WJJ4LMuLi4kITp6JUHUYxGgkGg1xZEBKWiDAgi4088VzQtBPKyspkrFPZ3NyscRiTCBENq42J7PT0NI9PYRUtNlGXaZLt7e1yLFESaJERlpeX8fz8PEhv5/VECSUlJbyhmIa5ubmMeVXEbH9/v1zEwqPHx8fSCMUxa0TUb9TR0dGRnArRyerqatKFkwx393e8bGxslCSFMzY3NzULT8Hv4ryeACIzMzPDOyhm+U2QHR8f5/XC6lQh9EOhENIC/pISYwtmYWHBygkecW5POMiJaaZMIGKVhDp3u924t7cnDbLysKg7PT3Ft2/bNbEoSopDi34iciNFg+lXyU5MTGg6plxLZU1NDX6c/IiHh4cJg9AUfvrvE05OTnLDRBip052fn89DjLxtYey0StRjpiX2262tbT6Ymnf12y0NTDsMlfotWJQihLw+rzQoCbTHZ0xyFBExNjg4KEPB6LtAv7PovyE6OjowGo1qdjYLrIEeVl7Vk6VtdXh4GF0ulylJ9ZuBUt3Q0BAnqPaTAtyCn/5c72fFr5AE9MEsjiFnZ2fAdjZYX1+H/f19uLq6AmYAsPiF1tZWqK+vB5Y15PeujaPIn6z/D2ZEbV9A0OBWH9DJ6k0QBqsLiHhFG8SuVVJCMhJpkmxTSRKcBh1zRbBBNoOgMX/U3ztZAmM3eiH8ejC9yUuF7Ld/kauQpS3Wjy8H6vt5V+M6wuTdNcwcqC8PvBQwFrt/Yfp/3/jTIWg7d+hIeyB2gUFC0/cGtH+IRZn8C7GUM0/P+rSTKj4DZcsPZwaHi1YAAAAASUVORK5CYII=",views:45,likes:35},{$variant:"orange",category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"\uccab \uc0ac\uc5c5 \uc544\uc774\ud15c\uc744 3\ubc88 \ubc14\uafbc \uc774\uc720",desc:"\uc2dc\uc7a5 \uc870\uc0ac \uc5c6\uc774 \uc2dc\uc791\ud588\ub2e4\uac00 \ud53c\ubc97\uc744 \ubc18\ubcf5\ud55c \uc774\uc57c\uae30",nickname:"\ucc3d\uc5c5\ub3c4\uc804\uc655",avatar:"data:image/png;base64,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",views:45,likes:35},{$variant:"pink",category:"\uc778\uac04\uad00\uacc4",title:"\ub9d0\uc744 \uc5b8\uc81c\ub098 \uc0dd\uac01\ud558\uace0 \uc870\uc2ec\ud788 \ub9d0\ud558\uae30",desc:"\ud55c \uc21c\uac04\uc758 \uc2e4\uc218\ub85c \uba40\uc5b4\uc838\ubc84\ub9b0 \uc6b0\ub9ac \uc0ac\uc774",nickname:"\ub9d0\uc870\uc2ec\uc5f0\uc2b5",avatar:"data:image/png;base64,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",views:45,likes:35}],_o={},Zo=cn`
    0%   { opacity: 1; transform: translateY(0); }
    50%  { opacity: 0.4; transform: translateY(6px); }
    100% { opacity: 1; transform: translateY(0); }
`,Yo="\n    background: linear-gradient(90deg, #027df0, #ab47ff);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n",Qo={1:"#027df0",2:"#ab47ff",3:"#ff34c5",4:"#f53102"},Vo={1:"#dbeafe",2:"#ede9fe",3:"#fce7f3",4:"#ffe4e6"},qo={blue:{bg:"#dbeafe",color:"#027df0"},orange:{bg:"#ede9fe",color:"#ab47ff"},pink:{bg:"#ffe4e6",color:"#f53102"}};_o.Wrap=rn.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
`,_o.ColorGradient=rn.span`
    ${Yo}
`,_o.Section1Wrapper=rn.section`
    width: 100%;
    height: 900px;
    background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 60px;
        width: 100%;
    }

    .intro-section1-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .intro-section1-heading {
        font-size: ${xn.FONT_SIZE.h1};
        font-weight: ${xn.FONT_WEIGHT.bold};
        color: ${xn.PALETTE.black};
        line-height: 1.35;
        margin: 0;
        letter-spacing: -1.5px;
    }

    .intro-section1-sub {
        font-size: ${xn.FONT_SIZE.h3_2};
        font-weight: ${xn.FONT_WEIGHT.regular};
        color: ${xn.GRAYSCALE[10]};
        line-height: 1.7;
        margin: 0;
    }

    .intro-section1-sub:first-of-type {
        margin-top: 28px;
    }

    .intro-section1-scroll-arrows {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
    }
`,_o.StartButton=rn.button`
    margin-top: 36px;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    background-size: 200% 200%;
    background-position: 0% 50%;
    transition: background-position 0.6s ease;
    color: ${xn.PALETTE.white};
    font-size: ${xn.FONT_SIZE.h5};
    font-weight: ${xn.FONT_WEIGHT.bold};
    border: none;
    cursor: pointer;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);

    &:hover {
        background-position: 100% 50%;
    }
`,_o.Section1Scroll=rn.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`,_o.ScrollMouse=rn.div`
    width: 22px;
    height: 36px;
    border: 2px solid ${xn.GRAYSCALE[4]};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    padding-top: 6px;
    box-sizing: border-box;
`,_o.ScrollDot=rn.div`
    width: 4px;
    height: 8px;
    background-color: ${xn.GRAYSCALE[4]};
    border-radius: 2px;
    animation: ${Zo} 1.6s ease-in-out infinite;
`,_o.Section2Wrapper=rn.section`
    width: 100%;
    height: 1000px;
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section2 {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    .intro-section2-title {
        font-size: ${xn.FONT_SIZE.h4};
        font-weight: ${xn.FONT_WEIGHT.bold};
        color: ${xn.PALETTE.black};
        line-height: 1.45;
        margin: 0 0 24px;
        letter-spacing: -0.3px;
    }

    .intro-section2-sub {
        font-size: ${xn.FONT_SIZE.h7};
        font-weight: ${xn.FONT_WEIGHT.regular};
        color: ${xn.GRAYSCALE[10]};
        line-height: 1.7;
        margin: 0;
    }

    .intro-section2-sub-mt {
        margin-top: 20px;
    }
`,_o.Section2Left=rn.div`
    width: 536px;
    height: 442px;
    background-color: ${xn.PALETTE.white};
    border: 1px solid ${xn.GRAYSCALE[4]};
    border-radius: 15px;
    padding: 48px 44px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`,_o.Section2BadgeWrap=rn.div`
    width: 112px;
    height: 40px;
    padding: 0 16px;
    background-color: ${xn.PALETTE.primary.light};
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`,_o.Section2Badge=rn.span`
    font-size: ${xn.FONT_SIZE.h7};
    font-weight: ${xn.FONT_WEIGHT.bold};
    ${Yo}
`,_o.Section2Right=rn.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`,_o.StatCard=rn.div`
    width: 536px;
    height: 184px;
    background-color: ${xn.PALETTE.white};
    border: 1px solid ${xn.GRAYSCALE[4]};
    border-radius: 20px;
    padding: 20px 36px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`,_o.StatCardIcon=rn.div`
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
    flex-shrink: 0;

    background-color: ${e=>{let{$variant:t}=e;return"red"===t?xn.PALETTE.fourth.light:"blue"===t?xn.PALETTE.primary.light:"green"===t?xn.PALETTE.secondary.light:"transparent"}};

    img { width: 24px; height: 24px; }
`,_o.StatCardStat=rn.p`
    font-size: ${xn.FONT_SIZE.h4};
    font-weight: ${xn.FONT_WEIGHT.bold};
    margin: 0;
    line-height: 1.2;

    color: ${e=>{let{$variant:t}=e;return"red"===t?xn.PALETTE.fourth.main:"blue"===t?xn.PALETTE.primary.main:"green"===t?xn.PALETTE.secondary.main:xn.PALETTE.black}};
`,_o.StatCardLabel=rn.p`
    font-size: ${xn.FONT_SIZE.h7};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: ${xn.PALETTE.black};
    margin: 0;
`,_o.Section3Wrapper=rn.section`
    width: 100%;
    height: 800px;
    background-color: ${xn.PALETTE.white};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
        width: 100%;
    }

    .intro-section3-header {
        text-align: center;
    }

    .intro-section3-title {
        font-size: ${xn.FONT_SIZE.h3};
        font-weight: ${xn.FONT_WEIGHT.bold};
        color: ${xn.PALETTE.black};
        line-height: 1.4;
        margin: 0;
        letter-spacing: -0.5px;
    }
`,_o.Section3Cards=rn.div`
    display: flex;
    align-items: center;
    gap: 26px;
`,_o.MethodCard=rn.div`
    width: 424px;
    height: 279px;
    background-color: ${xn.PALETTE.white};
    border: 1px solid ${xn.GRAYSCALE[4]};
    border-radius: 20px;
    padding: 37px 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 12px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`,_o.MethodCardIcon=rn.div`
    width: 80px;
    height: 80px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    background: ${e=>{let{$variant:t}=e;return"left"===t?"linear-gradient(135deg, #027df0, #ab47ff)":"center"===t?"linear-gradient(135deg, #ab47ff, #ff34c5)":"right"===t?"linear-gradient(135deg, #ff34c5, #f53102)":"transparent"}};

    img { width: 50px; height: 50px; }
`,_o.MethodCardTitle=rn.div`
    font-size: ${xn.FONT_SIZE.h5};
    font-weight: ${xn.FONT_WEIGHT.bold};
    color: ${xn.PALETTE.black};
    margin: 0;
    letter-spacing: -0.5px;
    line-height: 1.3;
`,_o.MethodCardDesc=rn.div`
    font-size: ${xn.FONT_SIZE.h7};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: ${xn.GRAYSCALE[10]};
    margin: 0;
    line-height: 1.6;
    word-break: keep-all;
`,_o.Section4Wrapper=rn.section`
    width: 100%;
    height: 1512px;
    background-color: #f8f9fa;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 100px;

    .intro-section4 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 80px;
    }

    .intro-section4-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .intro-section4-title {
        font-size: ${xn.FONT_SIZE.h3};
        font-weight: ${xn.FONT_WEIGHT.bold};
        color: ${xn.PALETTE.black};
        text-align: center;
    }
`,_o.Section4BadgeWrap=rn.div`
    width: 136px;
    height: 40px;
    background-color: ${xn.PALETTE.primary.light};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`,_o.Section4Badge=rn.span`
    font-size: ${xn.FONT_SIZE.h6};
    font-weight: ${xn.FONT_WEIGHT.bold};
    ${Yo}
`,_o.StepByStep=rn.div`
    position: relative;
    width: 1038px;
    display: flex;
    flex-direction: column;
    gap: 60px;
`,_o.TimelineLine=rn.div`
    position: absolute;
    top: 12px;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: linear-gradient(to bottom, #027df0 0%, #ab47ff 33%, #ff34c5 66%, #f53102 100%);
    z-index: 0;
`,_o.StepRow=rn.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 1;

    ${e=>{let{$side:t}=e;return"left"===t?"justify-content: flex-start; padding-right: calc(50% + 48px);":"justify-content: flex-end;  padding-left:  calc(50% + 48px);"}}
`,_o.StepDot=rn.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${xn.FONT_SIZE.h7};
    font-weight: ${xn.FONT_WEIGHT.bold};
    color: ${xn.PALETTE.white};
    z-index: 2;
    flex-shrink: 0;
    background: ${e=>{let{$step:t}=e;return Qo[t]||"#333"}};
`,_o.StepCard=rn.div`
    background-color: ${xn.PALETTE.white};
    border: 1px solid ${xn.GRAYSCALE[4]};
    border-radius: 15px;
    padding: 28px 32px;
    box-sizing: border-box;
    width: 312px;
    height: 210px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`,_o.StepCardTop=rn.div`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: ${e=>{let{$side:t}=e;return"left"===t?"flex-end":"flex-start"}};
`,_o.StepLabel=rn.span`
    font-size: ${xn.FONT_SIZE.h7};
    font-weight: ${xn.FONT_WEIGHT.bold};
    color: ${e=>{let{$step:t}=e;return Qo[t]||"#333"}};
`,_o.StepCardIcon=rn.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: ${e=>{let{$step:t}=e;return Qo[t]||"#333"}};

    img { width: 20px; height: 20px; filter: brightness(0) invert(1); }
`,_o.StepCardName=rn.p`
    font-size: ${xn.FONT_SIZE.h7};
    font-weight: ${xn.FONT_WEIGHT.bold};
    color: ${xn.PALETTE.black};
    margin: 0;
    text-align: ${e=>{let{$side:t}=e;return"left"===t?"right":"left"}};
`,_o.StepCardDesc=rn.p`
    font-size: ${xn.FONT_SIZE.h8};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: ${xn.GRAYSCALE[10]};
    margin: 0;
    text-align: ${e=>{let{$side:t}=e;return"left"===t?"right":"left"}};
    line-height: 1.5;
`,_o.StepTags=rn.div`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: ${e=>{let{$side:t}=e;return"left"===t?"flex-end":"flex-start"}};
`,_o.StepTag=rn.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    height: 28px;
    padding: 0 10px;
    border-radius: 14px;
    font-size: ${xn.FONT_SIZE.h8};
    font-weight: ${xn.FONT_WEIGHT.bold};
    background-color: ${e=>{let{$step:t}=e;return Vo[t]||"#f0f0f0"}};
    color: ${e=>{let{$step:t}=e;return Qo[t]||"#333"}};
`,_o.Section5Wrapper=rn.section`
    width: 100%;
    height: 980px;
    background-color: ${xn.PALETTE.white};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section5 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        width: 100%;
    }

    .intro-section5-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        text-align: center;
    }

    .intro-section5-title {
        font-size: 40px;
        font-weight: ${xn.FONT_WEIGHT.bold};
        color: ${xn.PALETTE.black};
        margin: 0;
        line-height: 1.4;
        letter-spacing: -0.5px;
    }

    .intro-section5-sub {
        font-size: ${xn.FONT_SIZE.h7};
        font-weight: ${xn.FONT_WEIGHT.regular};
        color: ${xn.GRAYSCALE[10]};
        margin: 0;
    }
`,_o.Section5Badges=rn.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
`,_o.Section5Badge=rn.div`
    width: 136px;
    height: 40px;
    border-radius: 10px;
    font-size: ${xn.FONT_SIZE.h7};
    font-weight: ${xn.FONT_WEIGHT.bold};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${xn.PALETTE.primary.light};

    span {
        background: linear-gradient(90deg, #027df0, #ab47ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`,_o.Section5Cards=rn.div`
    display: flex;
    gap: 24px;
`,_o.LogCard=rn.div`
    width: 352px;
    height: 198px;
    background-color: ${xn.PALETTE.white};
    border: 1px solid ${xn.GRAYSCALE[4]};
    border-radius: 15px;
    padding: 20px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`,_o.LogCategory=rn.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 24px;
    border-radius: 5px;
    font-size: ${xn.FONT_SIZE.h9};
    font-weight: ${xn.FONT_WEIGHT.regular};
    flex-shrink: 0;
    background-color: ${e=>{var t;let{$variant:n}=e;return(null===(t=qo[n])||void 0===t?void 0:t.bg)||"#f0f0f0"}};
    color:            ${e=>{var t;let{$variant:n}=e;return(null===(t=qo[n])||void 0===t?void 0:t.color)||"#333"}};
`,_o.LogCardTitle=rn.p`
    font-size: ${xn.FONT_SIZE.h7};
    font-weight: ${xn.FONT_WEIGHT.bold};
    color: ${xn.PALETTE.black};
    margin: 0;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,_o.LogCardDesc=rn.p`
    font-size: ${xn.FONT_SIZE.h9};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: ${xn.GRAYSCALE[10]};
    margin: 0;
    line-height: 1.5;
    flex: 1;
`,_o.LogCardBottom=rn.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`,_o.LogProfile=rn.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,_o.LogAvatarWrap=rn.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 1.5px;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,_o.LogAvatar=rn.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`,_o.LogNickname=rn.span`
    font-size: ${xn.FONT_SIZE.h9};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: ${xn.GRAYSCALE[10]};
`,_o.LogStats=rn.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,_o.LogStat=rn.span`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${xn.FONT_SIZE.h9};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: ${xn.GRAYSCALE[10]};
`,_o.ChatbotFab=rn.button`
    position: fixed;
    bottom: 36px;
    right: 36px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(2, 125, 240, 0.35);
    transition: transform 0.2s, box-shadow 0.2s;
    z-index: 200;

    &:hover {
        transform: scale(1.08);
        box-shadow: 0 8px 28px rgba(2, 125, 240, 0.45);
    }
`,_o.ChatbotFabIcon=rn.img`
    width: 32px;
    height: 32px;
    filter: invert(1);
`;const Jo=()=>{const e=vi();return(0,Co.jsxs)(_o.Wrap,{children:[(0,Co.jsx)(_o.Section1Wrapper,{children:(0,Co.jsxs)("div",{className:"intro-section1",children:[(0,Co.jsxs)("div",{className:"intro-section1-text",children:[(0,Co.jsx)("h1",{className:"intro-section1-heading",children:"\uc9c0\ub098\uac04 \uc2e4\ud328\ub4e4\uc774 \ubaa8\uc5ec"}),(0,Co.jsxs)("h1",{className:"intro-section1-heading",children:[(0,Co.jsx)(_o.ColorGradient,{children:"\uc131\uacf5\uc758 \ud55c \ud328"}),"\uac00 \ub429\ub2c8\ub2e4."]}),(0,Co.jsx)("p",{className:"intro-section1-sub",children:"\uc2e4\ud328\ub97c \uc678\uba74\ud558\uc9c0 \uc54a\uace0 \uae30\ub85d\ud560 \ub54c,"}),(0,Co.jsx)("p",{className:"intro-section1-sub",children:"\ub2f9\uc2e0\uc758 \uac15\ub825\ud55c \uc131\uc7a5 \ub370\uc774\ud130\uac00 \ub429\ub2c8\ub2e4."}),(0,Co.jsx)(_o.StartButton,{onClick:()=>e("/join"),children:"\uc2dc\uc791\ud558\uae30"})]}),(0,Co.jsxs)(_o.Section1Scroll,{children:[(0,Co.jsx)(_o.ScrollMouse,{children:(0,Co.jsx)(_o.ScrollDot,{})}),(0,Co.jsxs)("div",{className:"intro-section1-scroll-arrows",children:[(0,Co.jsx)("svg",{width:"20",height:"12",viewBox:"0 0 20 12",fill:"none",children:(0,Co.jsx)("path",{d:"M2 2L10 10L18 2",stroke:"#cccccc",strokeWidth:"2",strokeLinecap:"round"})}),(0,Co.jsx)("svg",{width:"20",height:"12",viewBox:"0 0 20 12",fill:"none",children:(0,Co.jsx)("path",{d:"M2 2L10 10L18 2",stroke:"#cccccc",strokeWidth:"2",strokeLinecap:"round",strokeOpacity:"0.45"})})]})]})]})}),(0,Co.jsx)(_o.Section2Wrapper,{children:(0,Co.jsxs)("div",{className:"intro-section2",children:[(0,Co.jsxs)(_o.Section2Left,{children:[(0,Co.jsx)(_o.Section2BadgeWrap,{children:(0,Co.jsx)(_o.Section2Badge,{children:"\uc2e4\ud328 \uae30\ub85d"})}),(0,Co.jsxs)("h2",{className:"intro-section2-title",children:["\uac19\uc740 \uc2e4\uc218\ub97c \ubc18\ubcf5\ud558\ub294 \ub2f9\uc2e0,",(0,Co.jsx)("br",{}),"\ub9e5\ub77d\uc744 \uc78a\uace0 \uc788\uc9c0 \uc54a\ub098\uc694?"]}),(0,Co.jsxs)("p",{className:"intro-section2-sub",children:["\uc0ac\ub78c\ub4e4\uc740 \uc2e4\ud328 \ud6c4 \ud6c4\ud68c\ud558\uace0 \ubc18\uc131\ud558\uc9c0\ub9cc, \uc2dc\uac04\uc774 \uc9c0\ub098\uba74",(0,Co.jsx)("br",{}),"\ud310\ub2e8 \uadfc\uac70, \uc81c\uc57d \uc0ac\ud56d, \ubb34\uc2dc\ud588\ub358 \uc2e0\ud638\ub97c \uc78a\uc2b5\ub2c8\ub2e4.",(0,Co.jsx)("br",{}),"\uacb0\uad6d \uac19\uc740 \ud328\ud134\uc758 \uc2e4\uc218\ub97c \ubc18\ubcf5\ud558\uac8c \ub429\ub2c8\ub2e4."]}),(0,Co.jsxs)("p",{className:"intro-section2-sub intro-section2-sub-mt",children:["FailLog\ub294 \uc2e4\ud328\uc758 \ub9e5\ub77d\uc744 \uad6c\uc870\ud654\ud558\uc5ec",(0,Co.jsx)("br",{}),"\uae30\ub85d\ud558\uace0, \ud328\ud134\uc744 \uc2dc\uac01\ud654\ud558\uc5ec \uac1d\uad00\uc801\uc778",(0,Co.jsx)("br",{}),"\uc790\uae30 \uc778\uc2dd\uacfc \uac1c\uc120\uc744 \ub3c4\uc640\uc90d\ub2c8\ub2e4."]})]}),(0,Co.jsx)(_o.Section2Right,{children:Do.map(e=>(0,Co.jsx)($o,{...e},e.stat))})]})}),(0,Co.jsx)(_o.Section3Wrapper,{children:(0,Co.jsxs)("div",{className:"intro-section3",children:[(0,Co.jsx)("div",{className:"intro-section3-header",children:(0,Co.jsxs)("h2",{className:"intro-section3-title",children:["\uc2e4\ud328\ub97c \ub370\uc774\ud130\ub85c,",(0,Co.jsx)("br",{}),"\uc131\uc7a5\uc73c\ub85c \uc5f0\uacb0\ud558\ub294 ",(0,Co.jsx)(_o.ColorGradient,{children:"3\uac00\uc9c0 \ubc29\ubc95"})]})}),(0,Co.jsx)(_o.Section3Cards,{children:Mo.map(e=>(0,Co.jsx)(Bo,{...e},e.title))})]})}),(0,Co.jsx)(_o.Section4Wrapper,{children:(0,Co.jsxs)("div",{className:"intro-section4",children:[(0,Co.jsxs)("div",{className:"intro-section4-header",children:[(0,Co.jsx)(_o.Section4BadgeWrap,{children:(0,Co.jsx)(_o.Section4Badge,{children:"\uc0ac\uc6a9 \ubc29\ubc95"})}),(0,Co.jsxs)("h2",{className:"intro-section4-title",children:["4\ub2e8\uacc4\ub85c \uc644\uc131\ud558\ub294 ",(0,Co.jsx)(_o.ColorGradient,{children:"\uc2e4\ud328\ubd84\uc11d"})]})]}),(0,Co.jsxs)(_o.StepByStep,{children:[(0,Co.jsx)(_o.TimelineLine,{}),Go.map(e=>(0,Co.jsx)(Ho,{...e},e.step))]})]})}),(0,Co.jsx)(_o.Section5Wrapper,{children:(0,Co.jsxs)("div",{className:"intro-section5",children:[(0,Co.jsxs)("div",{className:"intro-section5-header",children:[(0,Co.jsxs)("h2",{className:"intro-section5-title",children:["\ud63c\uc790\uac00 \uc544\ub2cc,",(0,Co.jsx)("br",{}),(0,Co.jsx)(_o.ColorGradient,{children:"\ud568\uaed8 \ub9cc\ub4dc\ub294 \uc131\uc7a5"})]}),(0,Co.jsx)("p",{className:"intro-section5-sub",children:"\ub2e4\uc591\ud55c \ubd84\uc57c\uc758 \uc2e4\ud328 \uc0ac\ub840\ub97c \uacbd\ud5d8\ud558\uc138\uc694."})]}),(0,Co.jsxs)(_o.Section5Badges,{children:[(0,Co.jsx)(_o.Section5Badge,{children:(0,Co.jsx)("span",{children:"\ub2e4\uc591\ud55c \ub85c\uadf8"})}),(0,Co.jsx)(_o.Section5Badge,{children:(0,Co.jsx)("span",{children:"\ucee4\ubba4\ub2c8\ud2f0"})})]}),(0,Co.jsx)(_o.Section5Cards,{children:Uo.map(e=>(0,Co.jsx)(Wo,{...e},e.category))}),(0,Co.jsx)(_o.StartButton,{onClick:()=>e("/join"),children:"\uc2dc\uc791\ud558\uae30"})]})}),(0,Co.jsx)(_o.ChatbotFab,{"aria-label":"\ucc57\ubd07 \uc5f4\uae30",children:(0,Co.jsx)(_o.ChatbotFabIcon,{src:jo,alt:"chatbot"})})]})},Xo=()=>{const{isAuthenticated:e}=xo();return(0,Co.jsx)(Co.Fragment,{children:e?(0,Co.jsx)(Eo,{}):(0,Co.jsx)(Jo,{})})},Ko={};Ko.Wrapper=rn.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #F8F9FA;
  min-height: 100vh;
`,Ko.Header=rn.div`
  text-align: left;
  width: 100%;
  width: 1298px;
  margin-bottom: 100px;
`,Ko.Title=rn.h1`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  margin-bottom: 12px;
`,Ko.SubTitle=rn.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,Ko.ContentWrapper=rn.div`
  width: 100%;
  width: 1320px;
`,Ko.TabBar=rn.div`
  display: flex;
  gap: 24px;
  margin-bottom: 0;
  width: 1320px;
  margin: 0 auto;
  padding-left: 101px;
  box-sizing: border-box;
  flex-shrink: 0;
`,Ko.Tab=rn(io)`
  width: 200px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[3]}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}}; /* Default bottom border to match card */
  border-radius: 12px 12px 0 0;
  transition: all 0.2s;
  background: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  position: relative;
  top: 1px;
  z-index: 5;

  &.active {
    color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}}; /* Same as background to look merged */
    z-index: 10;
  }

  &:hover:not(.active) {
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[1]}};
  }
`,Ko.CardWrapper=rn.div`
  position: relative;
  width: 1320px;
  padding-right: 22px;
  z-index: 1;
`,Ko.PurpleShadow=rn.div`
  position: absolute;
  top: 0;
  left: 22px;
  right: 0;
  bottom: 0;
  background: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  border-radius: 12px;
  z-index: 0;
`,Ko.Card=rn.div`
  background: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  border-radius: 12px;
  padding: 83px 80px 80px;
  position: relative;
  z-index: 1;
  width: 1298px;
  box-sizing: border-box;
`,Ko.VisionLinkWrapper=rn.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  margin-top: 24px;
  padding-right: 22px;
`,Ko.VisionLinkText=rn.p`
  font-size: 12px;
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  text-align: right;
  line-height: 1.4;
`,Ko.VisionLink=rn.a`
  font-size: 12px;
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,Ko.CarouselSection=rn.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ko.CarouselTitle=rn.h2`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  margin-bottom: 12px;
`,Ko.CarouselSubTitle=rn.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[6]}};
  margin-bottom: 60px;
`,Ko.CarouselContainer=rn.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  justify-content: center;
`,Ko.CardList=rn.div`
  display: flex;
  gap: 20px;
`,Ko.RelatedCard=rn.div`
  position: relative;
  background: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};
  border-radius: 16px;
  padding: 32px 24px;
  width: 320px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`,Ko.RelatedBadge=rn.span`
  background: #E6FFF1;
  color: #00B53F;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 16px;
`,Ko.RelatedDate=rn.span`
  font-size: 11px;
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
  position: absolute;
  right: 24px;
  top: 36px;
`,Ko.RelatedTitle=rn.h4`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  margin-bottom: 12px;
  line-height: 1.4;
`,Ko.RelatedSub=rn.p`
  font-size: 13px;
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[7]}};
  margin-bottom: 32px;
  flex: 1;
`,Ko.RelatedFooter=rn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
`,Ko.RelatedAuthor=rn.span`
  font-size: 13px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};
    border-radius: 50%;
    display: inline-block;
  }
`,Ko.RelatedStats=rn.div`
  display: flex;
  gap: 12px;
  font-size: 12px;
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[6]}};
`,Ko.NavButton=rn.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
  transition: color 0.2s;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[8]}};
  }
`;const ea=()=>{const e=vi(),{id:t}=wi(),n=Ci(),r="my"===t;return(0,Co.jsxs)(Ko.Wrapper,{children:[(0,Co.jsxs)(Ko.Header,{children:[(0,Co.jsx)(Ko.Title,{children:r?"My Fail Log":"View Fail Log"}),(0,Co.jsx)(Ko.SubTitle,{children:r?"\ub0b4\uac00 \uc791\uc131\ud55c \ud398\uc77c\ub85c\uadf8\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694.":"\ub2e4\ub978 \uc0ac\ub78c\uc758 \ud398\uc77c\ub85c\uadf8\ub97c \uacbd\ud5d8\ud574\ubcf4\uc138\uc694."})]}),(0,Co.jsxs)(Ko.ContentWrapper,{children:[(0,Co.jsxs)(Ko.TabBar,{children:[(0,Co.jsx)(Ko.Tab,{to:`/logs/result/${t}/detail`,children:"\uc791\uc131 \ub0b4\uc6a9"}),(0,Co.jsx)(Ko.Tab,{to:`/logs/result/${t}/report/patterns`,className:n.pathname.includes("/report")?"active":"",children:"\ubd84\uc11d \uacb0\uacfc"})]}),(0,Co.jsxs)(Ko.CardWrapper,{children:[(0,Co.jsx)(Ko.PurpleShadow,{}),(0,Co.jsx)(Ko.Card,{children:(0,Co.jsx)($i,{context:{isMyLog:r}})})]}),(0,Co.jsxs)(Ko.CarouselSection,{children:[(0,Co.jsx)(Ko.CarouselTitle,{children:"\ub098\uc640 \uac19\uc740 \ubaa9\ud45c\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud574 \ub3c4\uc804\ud558\ub294 \uc0ac\ub78c\ub4e4"}),(0,Co.jsx)(Ko.CarouselSubTitle,{children:"\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc758 \uc0dd\uc0dd\ud55c \ub178\ub825/\ubcf5\uae30 \uc0ac\ub840\ub97c \ud1b5\ud574 \uc778\uc0ac\uc774\ud2b8\ub97c \uc5bb\uc5b4\ubcf4\uc138\uc694."}),(0,Co.jsxs)(Ko.CarouselContainer,{children:[(0,Co.jsx)(Ko.NavButton,{className:"left",children:"\u3008"}),(0,Co.jsx)(Ko.CardList,{children:[{id:1,category:"\uac74\uac15/\ucde8\uc5c5",date:"2026.03.03",title:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc2e4\uae30 \ud569\uaca9\ud558\uae30!",sub:"\uae08\uc5f0 \uc131\uacf5\ud574\uc11c \uc81c \uac74\uac15 \ud68c\ubcf5\ud558\uae30",author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:45,likes:38},{id:2,category:"\uac74\uac15/\ucde8\uc5c5",date:"2026.03.03",title:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc2e4\uae30 \ud569\uaca9\ud558\uae30!",sub:"\uae08\uc5f0 \uc131\uacf5\ud574\uc11c \uc81c \uac74\uac15 \ud68c\ubcf5\ud558\uae30",author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:45,likes:38},{id:3,category:"\uac74\uac15/\ucde8\uc5c5",date:"2026.03.03",title:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc2e4\uae30 \ud569\uaca9\ud558\uae30!",sub:"\uae08\uc5f0 \uc131\uacf5\ud574\uc11c \uc81c \uac74\uac15 \ud68c\ubcf5\ud558\uae30",author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:45,likes:38}].map(t=>(0,Co.jsxs)(Ko.RelatedCard,{onClick:()=>e(`/logs/result/${t.id}/detail`),children:[(0,Co.jsx)(Ko.RelatedBadge,{children:t.category}),(0,Co.jsx)(Ko.RelatedDate,{children:t.date}),(0,Co.jsx)(Ko.RelatedTitle,{children:t.title}),(0,Co.jsx)(Ko.RelatedSub,{children:t.sub}),(0,Co.jsxs)(Ko.RelatedFooter,{children:[(0,Co.jsx)(Ko.RelatedAuthor,{children:t.author}),(0,Co.jsxs)(Ko.RelatedStats,{children:[(0,Co.jsxs)("span",{children:["\ud83d\udc41\ufe0f ",t.views]}),(0,Co.jsxs)("span",{children:["\ud83e\udd0d ",t.likes]})]})]})]},t.id))}),(0,Co.jsx)(Ko.NavButton,{className:"right",children:"\u3009"})]})]})]})]})},ta={id:1,badges:[{label:"\ubd84\uc11d \uc644\ub8cc",color:"#22C55E",bg:"#F0FDF4"},{label:"\uacf5\ubd80/\ucde8\uc5c5",color:"#027DF0",bg:"#DBEAFE"}],title:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc790\uaca9\uc99d \ud544\uae30 \ub3c4\uc804\uae30",date:"2026.03.15",author:{name:"\ud544\uae30\ub9c8\uc2a4\ud130",avatar:"https://api.dicebear.com/7.x/thumbs/svg?seed=faillog"},likes:24,vision:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \ud569\uaca9",content:"\uc774\ub860\uc11c(\uae30\ubcf8\uae30) \ud559\uc2b5\uc744 \uc644\uc804\ud788 \uc0dd\ub7b5\ud558\uace0, \ucd5c\uadfc 5\uac1c\ub144 \uae30\ucd9c\ubb38\uc81c \ub2ec\uce58\uae30(\ubb38\uc81c-\ub2f5 \uc554\uae30)\uc5d0\ub9cc \uc9d1\uc911\ud558\uae30\ub85c \ud588\ub2e4. 1\uacfc\ubaa9 (\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc124\uacc4)\uacfc 2\uacfc\ubaa9 (\uc18c\ud504\ud2b8 \uc6e8\uc5b4 \uac1c\ubc1c)\uc740 \uc6a9\uc5b4 \uc704\uc8fc\ub77c \uc554\uae30\ub85c \ubc84\ud17c\uc73c\ub098, 4\uacfc\ubaa9 (\ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4 \ud65c\uc6a9)\uacfc 5\uacfc\ubaa9 (\uc815\ubcf4\uc2dc\uc2a4\ud15c \uad6c\ucd95 \uad00\ub9ac)\uc758 \uc2e0\uc720\ud615 \ubb38\uc81c\uc5d0\uc11c \uc644\uc804\ud788 \ubb34\ub108\uc84c\ub2e4. \ubb38\uc81c\ub97c \uc870\uae08\ub9cc \uaf2c\uc544\ub0b4\ub3c4 \uc6d0\ub9ac\ub97c \ubab0\ub77c\uc11c \uc751\uc6a9\uc774 \ubd88\uac00\ub2a5\ud588\ub2e4.\n\n\uc815\uce58\uae30\ub294 \uae30\ucd9c\ub9cc \ub3cc\ub9ac\uba74 \ubb34\uc870\uac74 \ud569\uaca9\ud55c\ub2e4\"\ub294 \ucee4\ubba4\ub2c8\ud2f0\uc758 \uc218\ub9ce\uc740 \ud6c4\uae30 \uc911 \ub0b4 \uc785\ub9db\uc5d0 \ub9de\ub294 \uae00\ub9cc \uace8\ub77c \uc77d\uc5c8\ub2e4. \ubcf8\uc778\uc774 \ube44\uc804\uacf5\uc790\uc774\uac70\ub098 \uae30\ucd08\uac00 \ubd80\uc871\ud55c \uc0c1\ud0dc\uc784\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0, \ub0a8\ub4e4\uacfc \ub611\uac19\uc740 \ub2e8\uae30 \ud569\uaca9 \uc804\ub7b5\uc774 \ud1b5\ud560 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud588\ub2e4. \ubc29\ub300\ud55c \uc591\uc758 \uc774\ub860 \uacf5\ubd80\uac00 \uc8fc\ub294 \uc555\ubc15\uac10\uc744 \ud53c\ud558\uae30 \uc704\ud574 '\ud6a8\uc728\uc131'\uc774\ub77c\ub294 \ud551\uacc4\ub85c '\uc554\uae30'\ub77c\ub294 \uc26c\uc6b4 \uae38\uc744 \uc120\ud0dd\ud588\ub2e4.\n\n\ud68c\uc0ac \ubcd1\uc2dc \uc900\ube44 \uae30\uac04\uacfc \uc2dc\ud5d8 \uae30\uac04\uc774 \uacb9\uce58\uba74\uc11c \uc808\ub300\uc801\uc778 \ud559\uc2b5 \uc2dc\uac04\uc774 \ubd80\uc871\ud588\ub2e4. \ud574\ub2f9 \ud68c\ucc28\ubd80\ud130 \uc2e0\uaddc \uc720\ud615 \ubc0f \uc2e4\ubb34 \uc704\uc8fc\uc758 \uc8fc\uad00\uc2dd \uc2a4\ud0c0\uc77c \uac1d\uad00\uc2dd \ubb38\uc81c\uac00 \ub300\uac70 \ucd9c\uc81c\ub418\uc5b4, \ub2e8\uc21c \uae30\ucd9c \uc554\uae30\ubc95\uc758 \uc720\ud6a8\uae30\uac04\uc774 \ub05d\ub0ac\ub2e4.\n\n\uc774\ubc88 \uc2e4\ud328\ub97c \uacc4\uae30\ub85c \ub2e8\uc21c\ud788 \uc9c0\uc2dd\uc744 \uc554\uae30\ud558\ub294 \uac83\uacfc \uc6d0\ub9ac\ub97c \uc644\uc804\ud788 \uc774\ud574\ud558\ub294 \uac83\uc758 \ucc28\uc774\ub97c \ubf08\uc800\ub9ac\uac8c \ub290\uaf08\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \ub3c4\uc804\uc5d0\uc11c\ub294 \uae30\ubcf8\uc11c \uc704\uc8fc\ub85c \uc804\uccb4\uc801\uc778 \ud750\ub984\uc744 \uba3c\uc800 \ud30c\uc545\ud55c \ub4a4, \uae30\ucd9c\ubb38\uc81c\ub97c \uc751\uc6a9 \ud480\uc774\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ud559\uc2b5 \uc804\ub7b5\uc744 \uc804\uba74 \uc218\uc815\ud560 \uacc4\ud68d\uc785\ub2c8\ub2e4.\n\n\ubd80\uc871\ud55c \ud559\uc2b5 \uc2dc\uac04\uc744 \ubcf4\uc644\ud558\uae30 \uc704\ud574 \ud1f4\uadfc \ud6c4 \ucd5c\uc18c 3\uc2dc\uac04 \uc774\uc0c1\uc758 \ubab0\uc785 \ud559\uc2b5 \uc2dc\uac04\uc744 \uace0\uc815\uc801\uc73c\ub85c \ud655\ubcf4\ud558\uace0, \uc8fc\ub9d0\uc5d0\ub294 \uc2e0\uaddc \uc720\ud615 \ubb38\uc81c\ub4e4\uc744 \uc9d1\uc911\uc801\uc73c\ub85c \ubd84\uc11d\ud558\ub294 \uc2dc\uac04\uc744 \uac00\uc9c8 \uc608\uc815\uc785\ub2c8\ub2e4. \ub0a8\ub4e4\uc774 \ub9d0\ud558\ub294 '\uc9c0\ub984\uae38'\ubcf4\ub2e4\ub294 \ub098\uc5d0\uac8c \ub9de\ub294 '\ubc14\ub978 \uae38'\uc744 \uc120\ud0dd\ud558\ub294 \uac83\uc774 \uacb0\uad6d \uac00\uc7a5 \ube60\ub978 \ubc29\ubc95\uc774\ub77c\ub294 \uac83\uc744 \uae68\ub2ec\uc558\uc2b5\ub2c8\ub2e4."},na={};na.Container=rn.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 1096px;
  margin: 0 auto;
`,na.BadgeRow=rn.div`
  display: flex;
  gap: 8px;
`,na.Badge=rn.span`
  width: 100px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0;
  border-radius: 10px;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{$color:t}=e;return t}};
  background-color: ${e=>{let{$bg:t}=e;return t}};
`,na.TitleRow=rn.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,na.LogTitle=rn.h2`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3_2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  line-height: 1.3;
  letter-spacing: -0.5px;
`,na.Date=rn.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
  flex-shrink: 0;
  margin-left: 20px;
`,na.MetaRow=rn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
`,na.AuthorInfo=rn.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,na.Avatar=rn.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};
`,na.AuthorName=rn.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,na.LikeButton=rn.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;

  span {
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.medium}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  }

  &:hover {
    opacity: 0.7;
  }
`,na.HeartIcon=rn.div`
  width: 18px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,na.VisionBox=rn.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};
  border-radius: 8px;
  background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[1]}};
`,na.VisionLabel=rn.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
  white-space: nowrap;
`,na.VisionValue=rn.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,na.ContentBox=rn.div`
  padding: 24px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};
  border-radius: 12px;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
`,na.ContentText=rn.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  line-height: 2;
  white-space: pre-line;
  letter-spacing: -0.2px;
`,na.ActionGroup=rn.div`
  display: flex;
  gap: 12px;
`,na.ActionButton=rn.button`
  padding: 10px 20px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[3]}};
  border-radius: 12px;
  background: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.medium}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.GRAYSCALE[1]}};
    border-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
  }

  &.delete {
    color: #FF4B4B;
    border-color: #FF4B4B1A;
    background: #FF4B4B05;

    &:hover {
      background: #FF4B4B10;
    }
  }
`;const ra=()=>{const{isMyLog:e}=r.useContext(yi),[t,n]=(0,r.useState)(!1),[i,o]=(0,r.useState)(ta.likes);return(0,Co.jsxs)(na.Container,{children:[(0,Co.jsx)(na.BadgeRow,{children:ta.badges.map((e,t)=>(0,Co.jsxs)(na.Badge,{$color:e.color,$bg:e.bg,children:["\ubd84\uc11d \uc644\ub8cc"===e.label&&(0,Co.jsx)("svg",{width:"17",height:"17",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M11.25 1.25C11.8023 1.25 12.25 1.69772 12.25 2.25C12.25 2.80228 11.8023 3.25 11.25 3.25H3.375C3.34185 3.25 3.30958 3.26269 3.28613 3.28613C3.26269 3.30958 3.25 3.34185 3.25 3.375V14.625C3.25 14.6582 3.26269 14.6904 3.28613 14.7139C3.30958 14.7373 3.34185 14.75 3.375 14.75H14.625C14.6582 14.75 14.6904 14.7373 14.7139 14.7139C14.7373 14.6904 14.75 14.6582 14.75 14.625V7.5C14.75 6.94772 15.1977 6.5 15.75 6.5C16.3023 6.5 16.75 6.94772 16.75 7.5V14.625C16.75 15.1886 16.5264 15.7294 16.1279 16.1279C15.7294 16.5264 15.1886 16.75 14.625 16.75H3.375C2.81141 16.75 2.27058 16.5264 1.87207 16.1279C1.47356 15.7294 1.25 15.1886 1.25 14.625V3.375C1.25 2.81141 1.47356 2.27059 1.87207 1.87207C2.27059 1.47356 2.81141 1.25 3.375 1.25H11.25ZM14.5615 2.04395C14.8825 1.59453 15.5066 1.49051 15.9561 1.81152C16.4055 2.13253 16.5095 2.75664 16.1885 3.20605L10.5635 11.0811C10.4039 11.3045 10.1597 11.4524 9.8877 11.4902C9.61563 11.528 9.33948 11.4528 9.125 11.2812L5.375 8.28125C4.94374 7.93624 4.87374 7.30626 5.21875 6.875C5.56376 6.44374 6.19374 6.37374 6.625 6.71875L9.5498 9.05859L14.5615 2.04395Z",fill:"#00B53F"})}),e.label]},t))}),(0,Co.jsxs)(na.TitleRow,{children:[(0,Co.jsx)(na.LogTitle,{children:ta.title}),(0,Co.jsx)(na.Date,{children:ta.date})]}),(0,Co.jsxs)(na.MetaRow,{children:[(0,Co.jsx)(na.AuthorInfo,{children:(0,Co.jsx)(na.AuthorName,{children:ta.author.name})}),e?(0,Co.jsxs)(na.ActionGroup,{children:[(0,Co.jsx)(na.ActionButton,{onClick:()=>alert("\uc218\uc815 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9"),children:"\uc218\uc815\ud558\uae30"}),(0,Co.jsx)(na.ActionButton,{className:"delete",onClick:()=>alert("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),children:"\uc0ad\uc81c\ud558\uae30"})]}):(0,Co.jsxs)(na.LikeButton,{onClick:()=>{n(e=>!e),o(e=>t?e-1:e+1)},$liked:t,children:[(0,Co.jsx)(na.HeartIcon,{$liked:t,children:(0,Co.jsx)("svg",{width:"18",height:"16",viewBox:"0 0 25 22",fill:t?"#FF4B4B":"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M7.19401 0.777345C3.65026 0.777345 0.777344 3.65026 0.777344 7.19401C0.777344 13.6107 8.36068 19.444 12.444 20.8008C16.5273 19.444 24.1107 13.6107 24.1107 7.19401C24.1107 3.65026 21.2378 0.777345 17.694 0.777345C15.524 0.777345 13.6048 1.85476 12.444 3.50384C11.8522 2.66115 11.0661 1.97342 10.1523 1.49883C9.23846 1.02424 8.22374 0.776763 7.19401 0.777345Z",stroke:"#FF4B4B",strokeWidth:"1.55556",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,Co.jsx)("span",{children:i})]})]}),(0,Co.jsxs)(na.VisionBox,{children:[(0,Co.jsx)(na.VisionLabel,{children:"\uc774\ub8e8\uace0 \uc2f6\uc740 \ube44\uc804"}),(0,Co.jsx)(na.VisionValue,{children:ta.vision})]}),(0,Co.jsx)(na.ContentBox,{children:(0,Co.jsx)(na.ContentText,{children:ta.content})})]})},ia={};ia.MenuWrapper=rn.div`
    display: flex;
    gap: 12px;
    margin-bottom: 32px;
    margin-left: 21px;
`,ia.TabLink=rn(io)`
    width: 131px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 10px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    
    border: 1px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};

    &.active {
        background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
        color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    }

    &:hover:not(.active) {
        background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.light}};
    }
`;const oa=()=>{const{id:e}=wi();return(0,Co.jsxs)(ia.MenuWrapper,{children:[(0,Co.jsx)(ia.TabLink,{to:`/logs/result/${e}/report/patterns`,children:"\ud328\ud134 \ubd84\uc11d"}),(0,Co.jsx)(ia.TabLink,{to:`/logs/result/${e}/report/action-plan`,children:"\ud589\ub3d9 \uacc4\ud68d"})]})},aa=()=>(0,Co.jsxs)("div",{children:[(0,Co.jsx)(oa,{}),(0,Co.jsx)("div",{children:(0,Co.jsx)($i,{})})]}),la=rn.div`
    width: ${e=>{let{size:t}=e;return t}}px;
    height: ${e=>{let{size:t}=e;return t}}px;
    display: flex;
    justify-content: center;
    align-items: center;
`,sa=e=>{let{data:t,size:n=300}=e;const r=n/2,i=n/2*.7,o=2*Math.PI/t.length,a=t.map((e,t)=>{const n=e.value||0;return`${r+i*(n/100)*Math.sin(t*o)},${r-i*(n/100)*Math.cos(t*o)}`}).join(" "),l=[25,50,75,100].map(e=>t.map((t,n)=>`${r+i*(e/100)*Math.sin(n*o)},${r-i*(e/100)*Math.cos(n*o)}`).join(" "));return(0,Co.jsx)(la,{size:n,children:(0,Co.jsxs)("svg",{width:n,height:n,viewBox:`0 0 ${n} ${n}`,children:[t.map((e,t)=>{const n=r+i*Math.sin(t*o),a=r-i*Math.cos(t*o);return(0,Co.jsx)("line",{x1:r,y1:r,x2:n,y2:a,stroke:"#E0E0E0",strokeWidth:"1"},`axis-${t}`)}),l.map((e,t)=>(0,Co.jsx)("polygon",{points:e,fill:"none",stroke:"#E0E0E0",strokeWidth:"1"},`grid-${t}`)),(0,Co.jsx)("polygon",{points:a,fill:"rgba(171, 71, 255, 0.2)",stroke:"#AB47FF",strokeWidth:"2",strokeLinejoin:"round"}),t.map((e,t)=>{const n=r+(i+20)*Math.sin(t*o),a=r-(i+20)*Math.cos(t*o);let l="middle";return Math.sin(t*o)>.1&&(l="start"),Math.sin(t*o)<-.1&&(l="end"),(0,Co.jsx)("text",{x:n,y:a,textAnchor:l,dominantBaseline:"middle",fontSize:"13",fontWeight:"600",fill:"#333",children:e.label},`label-${t}`)})]})})},ca=rn.div`
    position: relative;
    width: ${e=>{let{size:t}=e;return t}}px;
    height: ${e=>{let{size:t}=e;return t}}px;
    display: flex;
    justify-content: center;
    align-items: center;
`,da=rn.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,ua=rn.div`
    font-size: 28px;
    font-weight: 800;
    color: ${e=>{let{color:t}=e;return t}};
    line-height: 1;
`,ha=rn.div`
    font-size: 14px;
    font-weight: 700;
    color: #333;
    margin-top: 4px;
`,pa=e=>{let{externalValue:t=70,internalValue:n=30,size:r=200}=e;const i=r/2,o=(r-35)/2,a=2*Math.PI*o,l=t/100*a;return(0,Co.jsxs)(ca,{size:r,children:[(0,Co.jsxs)("svg",{width:r,height:r,viewBox:`0 0 ${r} ${r}`,style:{transform:"rotate(-90deg)"},children:[(0,Co.jsx)("circle",{cx:i,cy:i,r:o,fill:"none",stroke:"url(#purpleGradient)",strokeWidth:35}),(0,Co.jsx)("circle",{cx:i,cy:i,r:o,fill:"none",stroke:"url(#blueGradient)",strokeWidth:35,strokeDasharray:`${l} ${a}`,strokeDashoffset:0,strokeLinecap:"butt"}),(0,Co.jsxs)("defs",{children:[(0,Co.jsxs)("linearGradient",{id:"blueGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,Co.jsx)("stop",{offset:"0%",stopColor:"#0075FF"}),(0,Co.jsx)("stop",{offset:"100%",stopColor:"#00C2FF"})]}),(0,Co.jsxs)("linearGradient",{id:"purpleGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,Co.jsx)("stop",{offset:"0%",stopColor:"#AB47FF"}),(0,Co.jsx)("stop",{offset:"100%",stopColor:"#7B39FD"})]})]})]}),(0,Co.jsxs)(da,{children:[(0,Co.jsxs)(ua,{color:"#F53102",children:[t,"%"]}),(0,Co.jsx)(ha,{children:"\uc678\ubd80\uc694\uc778"})]})]})},fa={};fa.Container=rn.div`
    display: flex;
    flex-direction: column;
    width: 1096px;
    margin: 0 auto;
`,fa.SummaryHeader=rn.div`
    margin-bottom: 45px;
`,fa.Badge=rn.span`
    height: 40px;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    background-color: transparent;
    color: #F53102;
    border: 2px solid #F53102;
    border-radius: 10px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    margin-bottom: 20px;
`,fa.MetaRow=rn.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    margin-bottom: 50px;
`,fa.AuthorInfo=rn.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,fa.AuthorName=rn.span`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,fa.LikeButton=rn.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    border: none;
    background: transparent;

    span {
        font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
        font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.medium}};
        color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    }
`,fa.HeartIcon=rn.div`
    width: 18px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`,fa.MainTitle=rn.h2`
    margin: 0;
    margin-bottom: 13px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,fa.Description=rn.p`
    margin: 0;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    line-height: 1.6;
`,fa.SectionHeader=rn.h3`
    display: flex;
    align-items: center;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    margin-bottom: 16px;

    &::before {
        content: '';
        display: block;
        width: 4px;
        height: 30px;
        background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
        margin-right: 10px;
    }
`,fa.QuoteBox=rn.div`
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    border-radius: 12px;
    padding: 24px 28px;
    margin-bottom: 45px;
`,fa.QuoteText=rn.p`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    margin-bottom: 8px;
    text-align: left;
`,fa.QuoteSubText=rn.p`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    color: #F53102;
    text-align: left;
`,fa.AccordionList=rn.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,fa.AccordionItem=rn.div`
    border: ${e=>{let{$isOpen:t,theme:n}=e;return t?`2px solid ${n.PALETTE.third.main}`:`1px solid ${n.GRAYSCALE[4]}`}};
    border-radius: 12px;
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: ${e=>{let{$isOpen:t}=e;return t?"0px 4px 20px rgba(171, 71, 255, 0.1)":"none"}};

    &:hover {
        border-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    }
`,fa.AccordionHeader=rn.div`
    display: flex;
    align-items: center;
    padding: 0 28px;
    height: 120px;
`,fa.IconWrapper=rn.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    background-color: transparent;
`,fa.AccordionTitle=rn.span`
    flex: 1;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,fa.Chevron=rn.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-right: 2px solid ${e=>{let{$isOpen:t,theme:n}=e;return t?n.PALETTE.third.main:n.GRAYSCALE[5]}};
    border-bottom: 2px solid ${e=>{let{$isOpen:t,theme:n}=e;return t?n.PALETTE.third.main:n.GRAYSCALE[5]}};
    transform: ${e=>{let{$isOpen:t}=e;return t?"rotate(-135deg) translateY(3px)":"rotate(45deg) translateY(-3px)"}};
    transition: transform 0.3s ease, border-color 0.2s;
    flex-shrink: 0;
    margin-bottom: ${e=>{let{$isOpen:t}=e;return t?"-4px":"4px"}};
`,fa.AccordionContent=rn.div`
    padding: 30px;
    background: #FFFFFF;
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};
    overflow: hidden; /* 삐져나옴 방지 */
`,fa.ContentRow=rn.div`
    display: flex;
    margin: -30px; /* padding과 동일하게 설정하여 선을 끝까지 연결 */
`,fa.ContentCol=rn.div`
    flex: 1;
    padding: 40px; /* 내부 여백 확보 */

    &:first-child {
        padding-right: 50px;
        border-right: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    }

    &:last-child {
        padding-left: 50px;
    }
`,fa.ContentSubTitle=rn.h4`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    margin-bottom: 24px;
    text-align: left;
`,fa.PlaceholderImage=rn.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FAFAFA;
    border-radius: 8px;
    padding: 20px;
`,fa.DoughnutWrapper=rn.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 20px;
    background-color: #FFF;
    border-radius: 12px;
`,fa.ChartHeaderInfo=rn.div`
    position: absolute;
    top: 20px;
    right: 0px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`,fa.InfoItem=rn.div`
    font-size: 14px;
    font-weight: 700;
    color: #666;
    text-align: right;

    span {
        margin-left: 8px;
    }
`,fa.LegendWrapper=rn.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 30px;
`,fa.LegendItem=rn.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #555;
    font-weight: 600;
`,fa.Dot=rn.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${e=>{let{color:t}=e;return t}};
`,fa.ChartWrapper=rn.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #FFF;
    border-radius: 12px;
`,fa.ListItem=rn.div`
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
`,fa.ListNum=rn.span`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{color:t}=e;return t||"#F53102"}};
`,fa.ListBody=rn.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,fa.ListTitle=rn.div`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,fa.ListDesc=rn.div`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[10]}};
    line-height: 1.5;
`,fa.FlowWrapper=rn.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`,fa.FlowStep=rn.div`
    width: 120px;
    height: 60px;
    border: 2px solid ${e=>{let{borderColor:t}=e;return t||"#E6E6E6"}};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
`,fa.StepLabel=rn.div`
    font-size: 12px;
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[6]}};
    margin-bottom: 4px;
`,fa.StepValue=rn.div`
    font-size: 14px;
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
`,fa.ArrowDown=rn.div`
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    font-size: 12px;
`,fa.LogSection=rn.div`
    margin-bottom: 24px;
`,fa.LogLabel=rn.div`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{color:t}=e;return t}};
    margin-bottom: 8px;
`,fa.LogText=rn.div`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    line-height: 1.6;
`,fa.BottomLinkWrapper=rn.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;
`,fa.BottomLink=rn.a`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    text-decoration: none;
    padding-bottom: 4px;

    &:hover {
        color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
        border-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    }
`;const ga=()=>{const[e,t]=(0,r.useState)([]),n=e=>{t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},i=t=>e.includes(t),o=70,a=30,l={habits:[{title:"\uc815\ubcf4 \uc218\uc9d1\uc5d0\ub9cc \uc2dc\uac04\uc744 \uacfc\ub3c4\ud558\uac8c \uc3df\uc74c",description:"\uacb0\uc815\uc744 \ubbf8\ub8e8\uace0 \ud0c0\uc778\uc758 \uc758\uacac(\ucee4\ubba4\ub2c8\ud2f0 \ub4f1)\uc744 \ub9f9\uc2e0\ud558\ub294 \uacbd\ud5a5\uc774 \ubc1c\uc0dd\ud568."},{title:"\ube44\ud604\uc2e4\uc801\uc778 \ub2e8\uae30 \ubaa9\ud45c",description:"\ub9c8\uac10 \uae30\ud55c \uc555\ubc15(\uc678\ubd80\uc694\uc778)\uc744 \ubc1b\uc744 \ub54c, \uc790\uc2e0\uc758 \uc5ed\ub7c9\uc744 \ucd08\uacfc\ud558\ub294 \uacc4\ud68d\uc744 \uc138\uc6c0."}],classification:{internal:[{title:"\uc758\uc695 \uacfc\ub2e4 \ubc0f \uc870\uae09\ud568",description:"\uc2a4\uc2a4\ub85c\ub97c \ubab0\uc544\ubd99\uc774\ub294 \uc131\uaca9\uc774 \uc2e4\ud328\uc758 \uc8fc\uc694 \uc6d0\uc778"}],external:[{title:"\ud658\uacbd\uc801 \uc555\ubc15",description:"\ud0c0\uc774\ud2b8\ud55c \ub9c8\uac10 \uae30\ud55c\uacfc \uc8fc\ubcc0\uc758 \uae30\ub300\uce58"}]}},s={flow:[{label:"\uc0c1\ud669",value:"\uc678\ubd80 \uc555\ubc15 \uc99d\uac00",color:"#FF4B4B"},{label:"\uacb0\uc815 \ud328\ud134",value:"\ud68c\ud53c \ub610\ub294 \ud3ec\uae30",color:"#34C759"},{label:"\ubc18\ubcf5 \uacb0\uacfc",value:"\ubaa9\ud45c \ubbf8\ub2ec\uc131",color:"#AB47FF"}],logAnalysis:[{label:"\uc8fc\uc694 \uacb0\uc815",content:"\ud300\uc6d0\uacfc \uac08\ub4f1\uc774 \uc0dd\uaca8\uc11c \ud300\uc6d0\uacfc\uc758 \uc0c1\uc758\ub97c \ud558\uc9c0 \uc54a\uace0 \ud63c\uc790 \ubc29\ud5a5\uc744 \uc815\ud574\uc11c \ub9d8\ub300\ub85c \ubc14\uafb8\uc5c8\ub2e4.",color:"#AB47FF"},{label:"\uc678\ubd80 \uc694\uc778",content:"\ub9c8\uac10 \uc77c\uc815 \uc555\ubc15, \ud300\uc6d0\uacfc \ub2e4\ub978 \uc758\uacac\uacfc \uadf8\ub85c \uc778\ud55c \uc758\uacac \ucda9\ub3cc",color:"#F53102"},{label:"\ub0b4\ubd80 \uc694\uc778",content:"\uac08\ub4f1\uc744 \ud574\uacb0\ud558\ub824\ud558\uc9c0 \uc54a\uace0 \ud68c\ud53c\ud558\ub824\ub294 \uc2ec\ub9ac, \ud63c\uc790\uc11c\ub3c4 \ub2e4 \ud574\uacb0\ud560 \uc218 \uc788\ub2e4\ub294 \uacfc\uc2e0",color:"#0075FF"}]},c={badge:`\ud658\uacbd \uc801\uc751\ud615 \uc2e4\ud328 (\uc678\ubd80 \uc694\uc778 ${o}%)`,title:"\uc678\ubd80 \ud658\uacbd \ubcc0\ud654\uc5d0 \ud729\uc4f8\ub9b0 \uc2e4\ud328",description:"\uc2dc\uc7a5 \uc0c1\ud669\uc774\ub098 \ud0c0\uc778\uc758 \uc555\ubc15 \uac19\uc740 \uc678\ubd80 \uc694\uc778\uc5d0 \uc601\ud5a5\uc744 \ub9ce\uc774 \ubc1b\uc558\uc2b5\ub2c8\ub2e4. \uc2a4\uc2a4\ub85c \uc8fc\ub3c4\uad8c\uc744 \uc7a1\uc9c0 \ubabb\ud558\uace0 \ud658\uacbd\uc5d0 \uc801\uc751\ud558\uc9c0 \ubabb\ud55c \ucc44 \ub0b4\ub9b0 \uacb0\uc815\ub4e4\uc774 \ubc18\ubcf5\uc801\uc778 \uc2e4\ud328 \ud328\ud134\uc744 \ub9cc\ub4e4\uace0 \uc788\uc2b5\ub2c8\ub2e4.",quote:"\ud658\uacbd\uc774 \uc5b4\ub824\uc6cc\uc9c8 \ub54c, \ub2f9\uc2e0\uc740 \uc8fc\ub85c \uc9d1\uc911\ub825\uc744 \uc783\uace0 \ud68c\ud53c\ud558\ub294 \uacb0\uc815\uc744 \ub0b4\ub9bd\ub2c8\ub2e4.",quoteSubText:"\uc774 \ub85c\uadf8\uc5d0\uc11c \ucc3e\uc740 \ud575\uc2ec \uc2e4\ud328 \uadfc\uac70\uc600\uc5b4\uc694. \ub2e4\uc74c \uc2e4\ucc9c\uc5d0\uc11c \ub0b4\ub9ac\ub294 \uacb0\uc815\uc744 \ud55c \ubc88 \ub354 \uc810\uac80\ud574\ubcf4\uc138\uc694."};return(0,Co.jsxs)(fa.Container,{children:[(0,Co.jsxs)(fa.MetaRow,{children:[(0,Co.jsx)(fa.AuthorInfo,{children:(0,Co.jsx)(fa.AuthorName,{children:"\ud544\uae30\ub9c8\uc2a4\ud130"})}),(0,Co.jsxs)(fa.LikeButton,{children:[(0,Co.jsx)(fa.HeartIcon,{children:(0,Co.jsx)("svg",{width:"18",height:"16",viewBox:"0 0 25 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M7.19401 0.777345C3.65026 0.777345 0.777344 3.65026 0.777344 7.19401C0.777344 13.6107 8.36068 19.444 12.444 20.8008C16.5273 19.444 24.1107 13.6107 24.1107 7.19401C24.1107 3.65026 21.2378 0.777345 17.694 0.777345C15.524 0.777345 13.6048 1.85476 12.444 3.50384C11.8522 2.66115 11.0661 1.97342 10.1523 1.49883C9.23846 1.02424 8.22374 0.776763 7.19401 0.777345Z",stroke:"#FF4B4B",strokeWidth:"1.55556",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,Co.jsx)("span",{children:"24"})]})]}),(0,Co.jsxs)(fa.SummaryHeader,{children:[(0,Co.jsx)(fa.Badge,{children:c.badge}),(0,Co.jsx)(fa.MainTitle,{children:c.title}),(0,Co.jsx)(fa.Description,{children:c.description})]}),(0,Co.jsx)(fa.SectionHeader,{children:"\ud55c \uc904 \uc694\uc57d"}),(0,Co.jsxs)(fa.QuoteBox,{children:[(0,Co.jsxs)(fa.QuoteText,{children:['"',c.quote,'"']}),(0,Co.jsx)(fa.QuoteSubText,{children:c.quoteSubText})]}),(0,Co.jsx)(fa.SectionHeader,{children:"\ubd84\uc11d \uc138\ubd80 \uc0ac\ud56d"}),(0,Co.jsxs)(fa.AccordionList,{children:[(0,Co.jsxs)(fa.AccordionItem,{$isOpen:i(0),children:[(0,Co.jsxs)(fa.AccordionHeader,{onClick:()=>n(0),children:[(0,Co.jsx)(fa.IconWrapper,{children:(0,Co.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Co.jsx)("rect",{width:"30",height:"30",rx:"8",fill:"url(#paint0_linear_4593_3117)"}),(0,Co.jsx)("path",{d:"M6.79374 5.88781C6.95823 6.04398 7.06397 6.19597 7.07249 6.426C7.07266 6.47809 7.07263 6.53019 7.07245 6.58228C7.07249 6.61109 7.07253 6.63991 7.07258 6.66959C7.07267 6.76695 7.07251 6.8643 7.07235 6.96166C7.07236 7.03184 7.07239 7.10201 7.07244 7.17219C7.07252 7.36566 7.07238 7.55914 7.07219 7.75261C7.07204 7.96101 7.07209 8.16941 7.07212 8.37781C7.07214 8.73909 7.07202 9.10037 7.07182 9.46164C7.07152 9.98399 7.07142 10.5063 7.07138 11.0287C7.0713 11.8761 7.07105 12.7235 7.07071 13.5709C7.07037 14.3943 7.07011 15.2176 7.06996 16.041C7.06995 16.079 7.06995 16.079 7.06994 16.1178C7.0699 16.3726 7.06985 16.6274 7.0698 16.8822C7.06942 19.0195 7.06877 21.1568 7.06795 23.2942C7.45404 23.2942 7.84013 23.2942 8.23792 23.2942C8.23755 23.1673 8.23755 23.1673 8.23718 23.0379C8.23494 22.2416 8.23331 21.4453 8.23224 20.649C8.23167 20.2396 8.2309 19.8302 8.22964 19.4208C8.22855 19.064 8.22784 18.7072 8.2276 18.3504C8.22746 18.1614 8.22712 17.9725 8.22632 17.7836C8.22558 17.6057 8.22535 17.4278 8.22551 17.2499C8.22548 17.1847 8.22527 17.1195 8.22484 17.0542C8.2243 16.965 8.22443 16.8758 8.22473 16.7866C8.22441 16.7609 8.22409 16.7352 8.22376 16.7088C8.22584 16.478 8.2848 16.3145 8.43672 16.1393C8.60568 15.9952 8.73254 15.9754 8.95157 15.9757C8.97905 15.9755 9.00653 15.9752 9.03485 15.975C9.12559 15.9743 9.21632 15.9741 9.30706 15.974C9.37026 15.9738 9.43347 15.9736 9.49667 15.9733C9.62913 15.9729 9.7616 15.9727 9.89406 15.9728C10.0636 15.9728 10.233 15.9718 10.4025 15.9705C10.5331 15.9697 10.6636 15.9696 10.7942 15.9696C10.8566 15.9695 10.9191 15.9692 10.9816 15.9686C11.0691 15.9679 11.1566 15.9681 11.2441 15.9686C11.2697 15.9682 11.2954 15.9677 11.3218 15.9673C11.5045 15.9696 11.6066 16.0192 11.7478 16.1325C11.9087 16.315 11.936 16.4214 11.935 16.6592C11.9351 16.7016 11.9351 16.7016 11.9351 16.7449C11.9352 16.8401 11.935 16.9353 11.9348 17.0305C11.9348 17.0985 11.9348 17.1666 11.9348 17.2346C11.9348 17.4198 11.9346 17.605 11.9343 17.7902C11.9341 17.9835 11.9341 18.1769 11.934 18.3702C11.9339 18.7366 11.9336 19.1029 11.9333 19.4693C11.9329 19.8863 11.9327 20.3033 11.9325 20.7203C11.9321 21.5782 11.9314 22.4362 11.9306 23.2942C12.3288 23.2942 12.7269 23.2942 13.1372 23.2942C13.1368 23.1474 13.1364 23.0007 13.1359 22.8495C13.1323 21.5038 13.1296 20.1581 13.1278 18.8125C13.1276 18.6361 13.1274 18.4598 13.1271 18.2834C13.1271 18.2307 13.1271 18.2307 13.127 18.177C13.1262 17.6085 13.1247 17.0399 13.1231 16.4714C13.1214 15.8881 13.1203 15.3047 13.12 14.7214C13.1197 14.3614 13.1189 14.0014 13.1174 13.6415C13.1165 13.3947 13.1162 13.1478 13.1164 12.901C13.1165 12.7586 13.1164 12.6162 13.1154 12.4738C13.1145 12.3433 13.1144 12.2128 13.1151 12.0824C13.1152 12.013 13.1144 11.9436 13.1136 11.8742C13.1158 11.6166 13.144 11.4324 13.32 11.2362C13.5079 11.0942 13.6755 11.0854 13.9066 11.0842C13.9322 11.084 13.9579 11.0838 13.9843 11.0836C14.0689 11.0831 14.1535 11.0829 14.2382 11.0827C14.2972 11.0824 14.3562 11.0822 14.4152 11.082C14.5389 11.0816 14.6626 11.0814 14.7863 11.0813C14.9444 11.0811 15.1025 11.0802 15.2606 11.0792C15.3825 11.0785 15.5044 11.0783 15.6264 11.0783C15.6846 11.0781 15.7429 11.0778 15.8011 11.0774C15.8829 11.0767 15.9646 11.0768 16.0463 11.077C16.0927 11.0769 16.1391 11.0768 16.1869 11.0766C16.3639 11.0948 16.5093 11.143 16.6456 11.2625C16.6627 11.284 16.6798 11.3054 16.6973 11.3276C16.715 11.3491 16.7326 11.3705 16.7508 11.3927C16.8328 11.5137 16.8344 11.6201 16.8344 11.7617C16.8345 11.8028 16.8345 11.8439 16.8346 11.8862C16.8345 11.9315 16.8344 11.9769 16.8343 12.0235C16.8343 12.0955 16.8343 12.0955 16.8344 12.169C16.8345 12.3025 16.8343 12.4359 16.8341 12.5694C16.834 12.7133 16.834 12.8571 16.834 13.0009C16.8341 13.2502 16.834 13.4995 16.8337 13.7488C16.8335 14.1093 16.8334 14.4698 16.8333 14.8302C16.8332 15.415 16.833 15.9998 16.8326 16.5846C16.8323 17.1527 16.832 17.7208 16.8319 18.289C16.8319 18.3415 16.8319 18.3415 16.8319 18.3951C16.8318 18.5707 16.8318 18.7463 16.8317 18.9219C16.8313 20.3793 16.8307 21.8367 16.8299 23.2942C17.216 23.2942 17.6021 23.2942 17.9999 23.2942C17.9995 23.1221 17.9995 23.1221 17.9991 22.9466C17.9969 21.8944 17.9953 20.8422 17.9942 19.79C17.9941 19.6521 17.994 19.5141 17.9938 19.3762C17.9938 19.3487 17.9938 19.3213 17.9937 19.293C17.9933 18.8485 17.9924 18.404 17.9914 17.9595C17.9904 17.5033 17.9898 17.0472 17.9895 16.591C17.9894 16.3096 17.9889 16.0282 17.988 15.7467C17.9874 15.5309 17.9873 15.315 17.9874 15.0991C17.9874 15.0106 17.9872 14.9221 17.9868 14.8336C17.9862 14.7127 17.9864 14.5919 17.9867 14.471C17.9863 14.436 17.986 14.4011 17.9857 14.365C17.9873 14.1264 18.0135 13.9089 18.1724 13.7188C18.1939 13.7021 18.2154 13.6855 18.2375 13.6684C18.259 13.6511 18.2805 13.6338 18.3026 13.616C18.4411 13.5251 18.5801 13.5326 18.7392 13.5323C18.766 13.5321 18.7927 13.5319 18.8203 13.5318C18.9089 13.5312 18.9974 13.531 19.086 13.5308C19.1476 13.5306 19.2092 13.5304 19.2708 13.5301C19.4001 13.5298 19.5293 13.5295 19.6586 13.5294C19.8239 13.5292 19.9893 13.5283 20.1546 13.5273C20.2819 13.5266 20.4092 13.5264 20.5366 13.5264C20.5975 13.5263 20.6584 13.526 20.7194 13.5255C20.8048 13.5249 20.8902 13.5249 20.9756 13.5252C21.0006 13.5248 21.0256 13.5245 21.0514 13.5242C21.2185 13.5256 21.3311 13.5607 21.4732 13.6478C21.7195 13.8996 21.74 14.127 21.7379 14.4622C21.738 14.5189 21.738 14.5189 21.7381 14.5767C21.7382 14.7033 21.7378 14.8299 21.7374 14.9564C21.7374 15.0472 21.7374 15.1379 21.7375 15.2287C21.7375 15.424 21.7373 15.6194 21.7369 15.8147C21.7363 16.0972 21.7361 16.3796 21.736 16.662C21.7358 17.1203 21.7353 17.5786 21.7346 18.0368C21.734 18.482 21.7335 18.9271 21.7331 19.3722C21.7331 19.3996 21.7331 19.4271 21.7331 19.4553C21.733 19.593 21.7329 19.7307 21.7328 19.8684C21.732 21.0103 21.7308 22.1522 21.7291 23.2942C21.7578 23.2938 21.7865 23.2935 21.816 23.2932C22.0871 23.2902 22.3582 23.288 22.6292 23.2866C22.7686 23.2858 22.9079 23.2848 23.0473 23.2831C23.1819 23.2815 23.3166 23.2807 23.4512 23.2803C23.5024 23.28 23.5536 23.2795 23.6048 23.2787C23.8966 23.2744 24.1145 23.2767 24.3616 23.4403C24.5416 23.634 24.5575 23.7643 24.5544 24.0231C24.5395 24.1887 24.5034 24.2608 24.3981 24.3903C24.2031 24.5249 24.0657 24.5577 23.8316 24.5549C23.7859 24.5552 23.7859 24.5552 23.7393 24.5555C23.6372 24.5561 23.5351 24.5555 23.433 24.555C23.3591 24.5552 23.2851 24.5554 23.2112 24.5557C23.008 24.5563 22.8048 24.556 22.6016 24.5556C22.3825 24.5553 22.1634 24.5558 21.9443 24.5562C21.5398 24.5568 21.1354 24.5567 20.7309 24.5563C20.3573 24.556 19.9836 24.5559 19.61 24.556C19.5728 24.5561 19.5728 24.5561 19.5349 24.5561C19.4343 24.5561 19.3337 24.5562 19.2331 24.5562C18.2894 24.5567 17.3457 24.5563 16.4019 24.5555C15.5634 24.5548 14.725 24.5548 13.8865 24.5555C12.9445 24.5563 12.0025 24.5566 11.0605 24.5562C10.9601 24.5561 10.8596 24.5561 10.7592 24.556C10.7345 24.556 10.7098 24.556 10.6843 24.556C10.3109 24.5558 9.93749 24.556 9.56409 24.5564C9.13951 24.5568 8.71495 24.5567 8.29037 24.5559C8.07368 24.5555 7.85699 24.5554 7.64029 24.5559C7.44201 24.5563 7.24374 24.5561 7.04546 24.5553C6.97365 24.5551 6.90183 24.5552 6.83002 24.5556C6.73253 24.556 6.63509 24.5556 6.5376 24.5549C6.5096 24.5552 6.48161 24.5556 6.45276 24.5559C6.26229 24.5533 6.11804 24.5161 5.9711 24.3903C5.82276 24.2172 5.80375 24.045 5.80645 23.8242C5.80624 23.7937 5.80603 23.7633 5.80581 23.7319C5.80528 23.6299 5.80578 23.5279 5.80629 23.4258C5.80612 23.3519 5.80589 23.278 5.8056 23.2041C5.80498 23.0011 5.80529 22.798 5.80574 22.5949C5.80607 22.376 5.80556 22.157 5.80516 21.938C5.80454 21.5338 5.8046 21.1296 5.805 20.7254C5.80537 20.3519 5.80546 19.9785 5.80529 19.6051C5.80528 19.5804 5.80527 19.5556 5.80525 19.5301C5.80521 19.4295 5.80516 19.329 5.80511 19.2285C5.80467 18.2853 5.80507 17.3422 5.80586 16.399C5.80655 15.5611 5.80649 14.7231 5.80579 13.8851C5.80501 12.9437 5.8047 12.0023 5.80515 11.0608C5.8052 10.9605 5.80524 10.8601 5.80529 10.7598C5.8053 10.7351 5.80531 10.7104 5.80532 10.6849C5.80549 10.3117 5.80529 9.93855 5.80492 9.56537C5.80451 9.14106 5.80463 8.71675 5.8054 8.29244C5.80579 8.07588 5.80594 7.85932 5.80546 7.64276C5.80502 7.4446 5.80526 7.24645 5.80604 7.04829C5.8062 6.97652 5.80612 6.90475 5.80576 6.83298C5.80532 6.73555 5.80577 6.63817 5.80645 6.54074C5.80611 6.51276 5.80577 6.48478 5.80542 6.45595C5.80821 6.25617 5.85714 6.13948 5.9711 5.97459C6.20952 5.78099 6.5151 5.75852 6.79374 5.88781ZM14.3803 12.3689C14.3803 15.9743 14.3803 19.5796 14.3803 23.2942C14.7784 23.2942 15.1766 23.2942 15.5868 23.2942C15.5868 19.6888 15.5868 16.0835 15.5868 12.3689C15.1886 12.3689 14.7905 12.3689 14.3803 12.3689ZM19.2795 14.7805C19.2795 17.59 19.2795 20.3995 19.2795 23.2942C19.6656 23.2942 20.0517 23.2942 20.4495 23.2942C20.4495 20.4847 20.4495 17.6752 20.4495 14.7805C20.0634 14.7805 19.6773 14.7805 19.2795 14.7805ZM9.51757 17.2287C9.51757 19.2303 9.51757 21.2319 9.51757 23.2942C9.90366 23.2942 10.2898 23.2942 10.6875 23.2942C10.6875 21.2925 10.6875 19.2909 10.6875 17.2287C10.3015 17.2287 9.91536 17.2287 9.51757 17.2287Z",fill:"white"}),(0,Co.jsx)("defs",{children:(0,Co.jsxs)("linearGradient",{id:"paint0_linear_4593_3117",x1:"1.02273",y1:"1.02273",x2:"28.9773",y2:"28.9773",gradientUnits:"userSpaceOnUse",children:[(0,Co.jsx)("stop",{"stop-color":"#AB47FF"}),(0,Co.jsx)("stop",{offset:"1","stop-color":"#FF34C5"})]})})]})}),(0,Co.jsx)(fa.AccordionTitle,{children:"\uc694\uc778\ubcc4 \uc601\ud5a5\ub3c4 & \ub098\uc758 \uc2e4\ud328 \ud328\ud134"}),(0,Co.jsx)(fa.Chevron,{$isOpen:i(0)})]}),i(0)&&(0,Co.jsx)(fa.AccordionContent,{children:(0,Co.jsxs)(fa.ContentRow,{children:[(0,Co.jsxs)(fa.ContentCol,{children:[(0,Co.jsx)(fa.ContentSubTitle,{children:"\uc694\uc778\ubcc4 \uc601\ud5a5\ub3c4 \ube44\uc728"}),(0,Co.jsxs)(fa.DoughnutWrapper,{children:[(0,Co.jsxs)(fa.ChartHeaderInfo,{children:[(0,Co.jsxs)(fa.InfoItem,{children:["\uc678\ubd80\uc694\uc778 ",(0,Co.jsxs)("span",{style:{color:"#0075FF"},children:[o,"%"]})]}),(0,Co.jsxs)(fa.InfoItem,{children:["\ub0b4\ubd80\uc694\uc778 ",(0,Co.jsxs)("span",{style:{color:"#AB47FF"},children:[a,"%"]})]})]}),(0,Co.jsx)(pa,{externalValue:o,internalValue:a,size:220}),(0,Co.jsxs)(fa.LegendWrapper,{children:[(0,Co.jsxs)(fa.LegendItem,{children:[(0,Co.jsx)(fa.Dot,{color:"#0075FF"}),"\uc678\ubd80\uc694\uc778 (\ud658\uacbd/\ud0c0\uc778)"]}),(0,Co.jsxs)(fa.LegendItem,{children:[(0,Co.jsx)(fa.Dot,{color:"#AB47FF"}),"\ub0b4\ubd80\uc694\uc778 (\ub9c8\uc778\ub4dc/\uc9c0\uc2dd)"]})]})]})]}),(0,Co.jsxs)(fa.ContentCol,{children:[(0,Co.jsx)(fa.ContentSubTitle,{children:"\ub098\uc758 \uc2e4\ud328 \ud328\ud134"}),(0,Co.jsx)(fa.ChartWrapper,{children:(0,Co.jsx)(sa,{data:[{label:"\uc870\uae09\ud568",value:85},{label:"\uc2e4\ud589\ub825",value:45},{label:"\ud0c0\uc778 \uc758\uc874\ub3c4",value:70},{label:"\uc815\ubcf4 \uc218\uc9d1\ub7c9",value:90},{label:"\ud658\uacbd \ud1b5\uc81c\ub825",value:40},{label:"\ube44\ud604\uc2e4\uc801 \ubaa9\ud45c",value:75}],size:320})})]})]})})]}),(0,Co.jsxs)(fa.AccordionItem,{$isOpen:i(1),children:[(0,Co.jsxs)(fa.AccordionHeader,{onClick:()=>n(1),children:[(0,Co.jsx)(fa.IconWrapper,{children:(0,Co.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Co.jsx)("rect",{width:"30",height:"30",rx:"8",fill:"#AB47FF"}),(0,Co.jsx)("path",{d:"M7.62813 14.6522C7.63564 14.6153 7.63564 14.6153 7.64331 14.5777C7.95303 13.0696 8.79697 11.6451 10.0217 10.7026C10.0493 10.6813 10.0493 10.6813 10.0774 10.6596C10.9614 9.98454 11.963 9.54936 13.0574 9.35679C13.0939 9.35019 13.1303 9.34359 13.1679 9.33679C13.4235 9.29772 13.6785 9.29067 13.9367 9.28731C13.971 9.28654 14.0053 9.28578 14.0407 9.28499C14.0695 9.28493 14.0957 9.28488 14.1196 9.28494C14.3916 9.28558 14.5889 9.53046 14.5858 9.80243C14.5859 9.82657 14.5859 9.85071 14.586 9.87558C14.5862 9.95639 14.5857 10.0372 14.5852 10.118C14.5852 10.176 14.5852 10.2339 14.5852 10.2919C14.5853 10.4492 14.5848 10.6065 14.5841 10.7639C14.5836 10.9283 14.5835 11.0927 14.5834 11.2572C14.5832 11.5685 14.5824 11.8799 14.5816 12.1912C14.5806 12.5457 14.5801 12.9002 14.5797 13.2546C14.5788 13.9534 14.5773 14.6522 14.5755 15.351C14.5754 15.4013 14.6162 15.442 14.6664 15.4418C15.398 15.4392 16.1295 15.4373 16.8611 15.4361C17.2149 15.4355 17.5687 15.4347 17.9225 15.4333C18.2308 15.4322 18.5391 15.4314 18.8475 15.4312C19.0107 15.431 19.174 15.4306 19.3373 15.4298C19.491 15.429 19.6446 15.4288 19.7983 15.4289C19.8547 15.4289 19.9111 15.4287 19.9675 15.4282C20.0446 15.4276 20.1216 15.4278 20.1986 15.4281C20.2321 15.4276 20.2321 15.4276 20.2662 15.4271C20.2858 15.4273 20.3043 15.4281 20.3219 15.4295C20.5397 15.4471 20.7155 15.6463 20.7177 15.8648C20.7182 15.9114 20.7182 15.9114 20.7188 15.959C20.7185 15.9924 20.7182 16.0258 20.7179 16.0602C20.7176 16.0951 20.7174 16.1301 20.7171 16.1661C20.6983 17.1897 20.3971 18.1721 19.917 19.07C19.9076 19.0875 19.8983 19.1051 19.8887 19.1232C19.3286 20.1684 18.4332 21.06 17.4067 21.6446C17.3867 21.656 17.3667 21.6674 17.3461 21.6792C16.4842 22.1656 15.4736 22.4935 14.4781 22.499C14.4529 22.4992 14.4277 22.4994 14.4018 22.4996C13.3733 22.5061 13.3733 22.5061 12.9115 22.4052C12.884 22.3997 12.8566 22.3942 12.8284 22.3886C11.6756 22.1551 10.6165 21.6223 9.74284 20.834C9.70382 20.799 9.66415 20.7647 9.62442 20.7305C9.50129 20.6241 9.39052 20.5139 9.28578 20.3893C9.25018 20.3475 9.21348 20.3067 9.17586 20.2668C8.35969 19.3981 7.869 18.2649 7.62813 17.1098C7.62285 17.0858 7.61757 17.0618 7.61213 17.0371C7.45388 16.2943 7.46668 15.393 7.62813 14.6522ZM8.56219 17.139C8.56876 17.1655 8.57533 17.1919 8.58209 17.2191C8.82275 18.167 9.27351 19.0196 9.93548 19.7388C9.98166 19.7895 10.0249 19.8408 10.0673 19.8947C10.1604 20.0023 10.2626 20.091 10.372 20.1817C10.3874 20.1947 10.4028 20.2076 10.4188 20.2209C10.7688 20.5124 11.1328 20.7649 11.5395 20.9717C11.5568 20.9805 11.574 20.9894 11.5918 20.9985C12.0926 21.2533 12.6216 21.4271 13.1742 21.5275C13.2007 21.5327 13.2273 21.5379 13.2547 21.5432C13.5375 21.5933 13.8165 21.5977 14.1028 21.597C14.1278 21.597 14.1529 21.597 14.1787 21.597C14.5928 21.596 14.9885 21.5656 15.3926 21.469C15.4158 21.4637 15.439 21.4584 15.4629 21.4529C16.3821 21.2374 17.1985 20.7733 17.9029 20.1525C17.9237 20.1352 17.9445 20.1179 17.9659 20.1001C18.4217 19.7193 18.7718 19.2279 19.0705 18.7189C19.0809 18.7012 19.0914 18.6835 19.1022 18.6652C19.3569 18.2282 19.5308 17.7457 19.6543 17.2561C19.6623 17.2264 19.6703 17.1967 19.6785 17.1661C19.7275 16.9735 19.7541 16.7828 19.7735 16.5853C19.7761 16.5597 19.7787 16.5341 19.7814 16.5077C19.7847 16.4752 19.788 16.4427 19.7912 16.4102C19.7961 16.3618 19.7581 16.3198 19.7094 16.3197C18.981 16.3179 18.2527 16.3157 17.5243 16.313C17.172 16.3117 16.8198 16.3105 16.4675 16.3097C16.1605 16.3091 15.8536 16.3081 15.5466 16.3067C15.384 16.306 15.2215 16.3055 15.0589 16.3053C14.9059 16.3051 14.7529 16.3045 14.6 16.3036C14.5438 16.3034 14.4876 16.3033 14.4314 16.3033C14.3547 16.3034 14.2781 16.3029 14.2015 16.3023C14.168 16.3025 14.168 16.3025 14.1339 16.3027C13.9071 16.2997 13.7207 16.1112 13.7172 15.8844C13.7169 15.8626 13.717 15.8401 13.7171 15.8168C13.7169 15.7928 13.7167 15.7688 13.7165 15.744C13.716 15.6636 13.7161 15.5832 13.7161 15.5028C13.7159 15.4451 13.7156 15.3875 13.7152 15.3298C13.7144 15.1733 13.7142 15.0167 13.714 14.8602C13.7137 14.6966 13.713 14.533 13.7122 14.3694C13.711 14.0596 13.7101 13.7497 13.7095 13.4399C13.7087 13.0872 13.7074 12.7345 13.7061 12.3818C13.7037 11.7457 13.7018 11.1096 13.7002 10.4734C13.6999 10.3298 13.5756 10.2178 13.4328 10.2326C13.3952 10.2364 13.3952 10.2364 13.3569 10.2403C13.1815 10.2585 13.0113 10.2841 12.8403 10.3277C12.8152 10.334 12.79 10.3402 12.7641 10.3467C11.3034 10.7226 10.0184 11.6572 9.23812 12.9566C8.87816 13.5678 8.62727 14.2155 8.50382 14.9155C8.49844 14.9454 8.49307 14.9753 8.48754 15.0061C8.44028 15.2975 8.43379 15.5848 8.43449 15.8792C8.43451 15.9169 8.43451 15.9169 8.43454 15.9553C8.43571 16.3599 8.46232 16.7454 8.56219 17.139Z",fill:"white"}),(0,Co.jsx)("path",{d:"M15.4378 14.0372C15.4376 14.0105 15.4374 13.9839 15.4373 13.9564C15.4369 13.8671 15.4371 13.7778 15.4373 13.6885C15.4371 13.6245 15.4369 13.5605 15.4367 13.4965C15.4361 13.3226 15.4362 13.1487 15.4363 12.9748C15.4364 12.8296 15.4363 12.6845 15.4361 12.5394C15.4357 12.1775 15.4358 11.8156 15.4361 11.4537C15.4364 11.1395 15.436 10.8253 15.4353 10.511C15.4346 10.1883 15.4343 9.86557 15.4345 9.54283C15.4346 9.36168 15.4346 9.18053 15.4341 8.99938C15.4336 8.82905 15.4337 8.65873 15.4343 8.4884C15.4344 8.42586 15.4343 8.36333 15.434 8.3008C15.4336 8.21547 15.4339 8.13017 15.4344 8.04484C15.4342 8.02006 15.4339 7.99529 15.4336 7.96977C15.4339 7.94598 15.4348 7.92376 15.4364 7.90275C15.4539 7.6813 15.6547 7.50284 15.8769 7.50206C15.9248 7.50179 15.9248 7.50179 15.9736 7.50151C16.0076 7.50192 16.0416 7.50233 16.0767 7.50275C16.112 7.50305 16.1473 7.50334 16.1836 7.50365C16.4995 7.50904 16.8032 7.53994 17.1129 7.60149C17.1409 7.60699 17.169 7.61249 17.1978 7.61816C18.3497 7.85197 19.4085 8.38496 20.2815 9.17269C20.3205 9.20771 20.3602 9.24199 20.3999 9.2762C20.523 9.38264 20.6338 9.49281 20.7386 9.61745C20.7742 9.65921 20.8109 9.70003 20.8485 9.73997C21.889 10.8473 22.4782 12.4234 22.4965 13.9337C22.4975 13.9845 22.4975 13.9845 22.4985 14.0362C22.4985 14.0508 22.4984 14.065 22.4983 14.079C22.4957 14.3663 22.245 14.5779 21.9576 14.5759C21.931 14.5761 21.9044 14.5762 21.877 14.5764C21.7879 14.5768 21.6988 14.5766 21.6097 14.5764C21.5459 14.5766 21.482 14.5768 21.4181 14.577C21.2446 14.5775 21.0711 14.5775 20.8976 14.5773C20.7528 14.5772 20.608 14.5774 20.4632 14.5776C20.1022 14.578 19.7411 14.5779 19.38 14.5776C19.0665 14.5773 18.753 14.5776 18.4395 14.5783C18.1175 14.5791 17.7955 14.5793 17.4735 14.5791C17.2928 14.579 17.1121 14.5791 16.9313 14.5796C16.7614 14.5801 16.5915 14.58 16.4215 14.5794C16.3591 14.5793 16.2967 14.5794 16.2344 14.5797C16.1492 14.5801 16.0641 14.5797 15.979 14.5792C15.9543 14.5795 15.9295 14.5798 15.9041 14.5801C15.637 14.5767 15.4351 14.3365 15.4375 14.0694C15.4376 14.0588 15.4377 14.0481 15.4378 14.0372ZM16.3248 11.1923C16.3248 12.57 17.4416 13.6869 18.8193 13.6869C19.4462 13.6869 20.0764 13.6869 20.7122 13.6869C21.1775 13.6869 21.5454 13.2863 21.4585 12.8293C21.4493 12.7917 21.4493 12.7917 21.4398 12.7534C21.3187 12.2821 21.1414 11.8311 20.9075 11.4048C20.8901 11.373 20.8726 11.3412 20.8546 11.3084C20.7466 11.118 20.6286 10.9374 20.4989 10.7612C20.4878 10.7461 20.4767 10.7309 20.4652 10.7153C20.3146 10.5112 20.1586 10.321 19.9735 10.1468C19.8275 10.0005 19.8275 10.0005 19.7726 9.94236C19.0962 9.23893 18.1522 8.79492 17.2205 8.55416C17.1815 8.54386 17.1815 8.54386 17.1416 8.53334C16.713 8.42926 16.3248 8.80491 16.3248 9.24601C16.3248 9.89271 16.3248 10.5406 16.3248 11.1923Z",fill:"white"})]})}),(0,Co.jsx)(fa.AccordionTitle,{children:"\uc790\uc8fc \ubc18\ubcf5\ub418\ub294 \uc2b5\uad00 & \uc694\uc778\uc5d0 \ub530\ub978 \uc2e4\ud328 \ubd84\ub958"}),(0,Co.jsx)(fa.Chevron,{$isOpen:i(1)})]}),i(1)&&(0,Co.jsx)(fa.AccordionContent,{children:(0,Co.jsxs)(fa.ContentRow,{children:[(0,Co.jsxs)(fa.ContentCol,{children:[(0,Co.jsx)(fa.ContentSubTitle,{children:"\uc790\uc8fc \ubc18\ubcf5\ub418\ub294 \uc704\ud5d8\ud55c \uc2b5\uad00"}),l.habits.map((e,t)=>(0,Co.jsxs)(fa.ListItem,{children:[(0,Co.jsxs)(fa.ListNum,{color:"#F53102",children:[t+1,"."]}),(0,Co.jsxs)(fa.ListBody,{children:[(0,Co.jsx)(fa.ListTitle,{children:e.title}),(0,Co.jsx)(fa.ListDesc,{children:e.description})]})]},`habit-${t}`))]}),(0,Co.jsxs)(fa.ContentCol,{children:[(0,Co.jsx)(fa.ContentSubTitle,{children:"\uc694\uc778\uc5d0 \ub530\ub978 \uc2e4\ud328 \ubd84\ub958"}),l.classification.internal.map((e,t)=>(0,Co.jsxs)(fa.ListItem,{children:[(0,Co.jsxs)(fa.ListNum,{color:"#F53102",children:[t+1,"."]}),(0,Co.jsxs)(fa.ListBody,{children:[(0,Co.jsx)(fa.ListTitle,{children:e.title}),(0,Co.jsx)(fa.ListDesc,{children:e.description})]})]},`internal-${t}`)),l.classification.external.map((e,t)=>{const n=l.classification.internal.length;return(0,Co.jsxs)(fa.ListItem,{children:[(0,Co.jsxs)(fa.ListNum,{color:"#F53102",children:[n+t+1,"."]}),(0,Co.jsxs)(fa.ListBody,{children:[(0,Co.jsx)(fa.ListTitle,{children:e.title}),(0,Co.jsx)(fa.ListDesc,{children:e.description})]})]},`external-${t}`)})]})]})})]}),(0,Co.jsxs)(fa.AccordionItem,{$isOpen:i(2),children:[(0,Co.jsxs)(fa.AccordionHeader,{onClick:()=>n(2),children:[(0,Co.jsx)(fa.IconWrapper,{children:(0,Co.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Co.jsx)("rect",{width:"30",height:"30",rx:"8",fill:"#FF34C5"}),(0,Co.jsx)("path",{d:"M21.4237 8.10172C21.4475 8.1182 21.4713 8.13467 21.4957 8.15164C22.0188 8.53053 22.4218 9.17497 22.4887 9.76866C22.5455 10.5507 22.3985 11.2275 21.8231 11.845C21.8043 11.8659 21.7856 11.8868 21.7663 11.9083C21.3351 12.3679 20.6018 12.7221 19.9262 12.7808C19.033 12.831 18.27 12.6999 17.5634 12.196C17.5426 12.1817 17.5218 12.1675 17.5003 12.1529C17.3413 12.0417 17.1373 11.9688 16.9653 12.0587C16.9575 12.0628 16.9497 12.0669 16.9419 12.0711C16.912 12.0871 16.8821 12.1031 16.8514 12.1196C16.8193 12.137 16.7873 12.1543 16.7543 12.1722C16.7205 12.1904 16.6868 12.2085 16.652 12.2273C16.3802 12.3738 16.1098 12.5222 15.8396 12.6711C15.5557 12.8274 15.2704 12.982 14.9849 13.1361C14.757 13.2592 14.5294 13.3826 14.3021 13.5065C14.1048 13.6139 13.9071 13.7208 13.7092 13.8272C13.5059 13.9366 13.3874 14.1632 13.4555 14.3838C13.5771 14.8788 13.5371 15.399 13.3703 15.8808C13.3504 15.9491 13.3813 16.0218 13.4439 16.0557C13.8511 16.2764 14.2589 16.4964 14.6681 16.7142C15.0037 16.8929 15.3383 17.073 15.6722 17.254C15.9874 17.4247 16.3037 17.5936 16.6204 17.7621C16.6571 17.7816 16.6938 17.8012 16.7317 17.8213C16.7834 17.8486 16.7834 17.8486 16.8362 17.8765C16.8957 17.9087 16.9545 17.942 17.0122 17.9766C17.1268 18.0476 17.2745 18.0579 17.3795 17.9733C17.4188 17.9416 17.456 17.9061 17.4968 17.8694C18.0198 17.4111 18.7686 17.2192 19.4873 17.2132C20.2184 17.217 20.853 17.4002 21.4237 17.8109C21.4475 17.8274 21.4713 17.8439 21.4957 17.8608C22.0188 18.2397 22.4218 18.8841 22.4887 19.4778C22.5455 20.2599 22.3985 20.9367 21.8231 21.5542C21.8043 21.5751 21.7856 21.596 21.7663 21.6175C21.3351 22.0771 20.6018 22.4312 19.9262 22.49C19.0363 22.54 18.2661 22.4108 17.5634 21.9051C17.5396 21.8887 17.5159 21.8722 17.4914 21.8552C16.9683 21.4763 16.5654 20.8319 16.4985 20.2382C16.4417 19.4573 16.1521 18.6133 15.4614 18.2446C15.4189 18.2218 15.3763 18.1991 15.3337 18.1765C14.9981 17.9978 14.6636 17.8177 14.3296 17.6367C14.0145 17.466 13.6981 17.2971 13.3814 17.1286C13.3447 17.1091 13.308 17.0895 13.2702 17.0694C13.2357 17.0512 13.2012 17.033 13.1656 17.0142C13.1061 16.982 13.0473 16.9487 12.9897 16.9141C12.8751 16.8431 12.7282 16.8337 12.621 16.9154C12.5828 16.9446 12.5463 16.9769 12.5071 17.0103C11.8711 17.5261 11.1266 17.6956 10.2822 17.676C9.49739 17.6429 8.79506 17.2956 8.25506 16.8068C7.66068 16.1999 7.4628 15.4975 7.5056 14.7116C7.5654 14.0139 7.98328 13.4232 8.55314 12.9527C9.25024 12.4261 10.0502 12.2903 10.9409 12.3422C11.3704 12.3829 11.7636 12.523 12.1143 12.7262C12.5455 12.9761 13.0677 13.0854 13.5026 12.8419C13.733 12.7129 13.9652 12.5866 14.1981 12.461C14.2723 12.4209 14.3465 12.3809 14.4207 12.3408C14.4749 12.3116 14.4749 12.3116 14.5301 12.2818C14.77 12.1522 15.0093 12.0217 15.2487 11.8913C15.3358 11.8439 15.423 11.7966 15.5101 11.7493C15.8707 11.5536 16.23 11.356 16.588 11.1567C16.6326 11.1319 16.6531 11.0789 16.6369 11.0305C16.6249 10.9941 16.6128 10.9577 16.6004 10.9202C16.5884 10.8842 16.5764 10.8482 16.5641 10.8112C16.3543 10.1197 16.5009 9.38797 16.8978 8.77435C16.9795 8.66128 17.0675 8.55622 17.164 8.45266C17.1828 8.43177 17.2015 8.41089 17.2208 8.38937C18.251 7.29117 20.2089 7.22746 21.4237 8.10172ZM17.9625 9.04417C17.5768 9.45934 17.4777 9.91742 17.5301 10.4413C17.598 10.849 17.8411 11.1482 18.1624 11.4356C18.1906 11.4609 18.1906 11.4609 18.2193 11.4868C18.6179 11.8148 19.1364 11.8976 19.6614 11.8844C20.2212 11.8582 20.6559 11.6128 21.0246 11.2535C21.4103 10.8383 21.5094 10.3803 21.457 9.85639C21.3811 9.40058 21.0761 9.03682 20.677 8.75059C19.7978 8.18147 18.6746 8.35015 17.9625 9.04417ZM9.07728 13.7752C8.64493 14.2361 8.48313 14.7037 8.54482 15.2959C8.57378 15.43 8.61771 15.5505 8.67794 15.6761C8.69486 15.7135 8.69486 15.7135 8.71212 15.7518C8.93304 16.1891 9.34409 16.4972 9.84477 16.6704C10.3003 16.8129 10.8285 16.8168 11.2737 16.6411C11.8418 16.393 12.2289 16.0061 12.4322 15.475C12.5376 15.1002 12.5089 14.6852 12.3386 14.3308C12.3269 14.3055 12.3153 14.2801 12.3032 14.254C12.0846 13.8271 11.6815 13.5216 11.1993 13.3357C10.4588 13.1068 9.61944 13.2649 9.07728 13.7752ZM17.9625 18.7534C17.5768 19.1685 17.4777 19.6266 17.5301 20.1505C17.606 20.6063 17.911 20.97 18.3101 21.2563C18.7821 21.5618 19.3212 21.6484 19.8966 21.5744C20.4129 21.485 20.8319 21.1996 21.1399 20.8321C21.452 20.4177 21.5434 19.9346 21.434 19.4471C21.2914 18.9675 20.9279 18.5777 20.4453 18.3246C19.5765 17.9182 18.6074 18.1249 17.9625 18.7534Z",fill:"white"})]})}),(0,Co.jsx)(fa.AccordionTitle,{children:"\ub098\uc758 \uc2e4\ud328 \ud750\ub984 & \ub85c\uadf8\uc5d0 \ub098\ud0c0\ub09c \ub0b4\uc6a9"}),(0,Co.jsx)(fa.Chevron,{$isOpen:i(2)})]}),i(2)&&(0,Co.jsx)(fa.AccordionContent,{children:(0,Co.jsxs)(fa.ContentRow,{children:[(0,Co.jsxs)(fa.ContentCol,{children:[(0,Co.jsx)(fa.ContentSubTitle,{children:"\ub098\uc758 \uc2e4\ud328 \ud750\ub984"}),(0,Co.jsx)(fa.FlowWrapper,{children:s.flow.map((e,t)=>(0,Co.jsxs)(r.Fragment,{children:[(0,Co.jsxs)(fa.FlowStep,{borderColor:e.color,children:[(0,Co.jsx)(fa.StepLabel,{children:e.label}),(0,Co.jsx)(fa.StepValue,{children:e.value})]}),t<s.flow.length-1&&(0,Co.jsx)(fa.ArrowDown,{children:"\u2228"})]},`flow-${t}`))})]}),(0,Co.jsxs)(fa.ContentCol,{children:[(0,Co.jsx)(fa.ContentSubTitle,{children:"\uc774 \ub85c\uadf8\uc5d0\uc11c \ub098\ud0c0\ub09c \ub0b4\uc6a9"}),s.logAnalysis.map((e,t)=>(0,Co.jsxs)(fa.LogSection,{children:[(0,Co.jsx)(fa.LogLabel,{color:e.color,children:e.label}),(0,Co.jsx)(fa.LogText,{children:e.content})]},`log-${t}`))]})]})})]})]}),(0,Co.jsx)(fa.BottomLinkWrapper,{children:(0,Co.jsxs)(fa.BottomLink,{href:"#",children:["\ud504\ub85c\uc81d\ud2b8 \uc791\uc131\ud558\ub7ec \uac00\uae30",(0,Co.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M21.9795 12.5L3.22949 12.5M15.7295 18.75L21.9795 12.5L15.7295 6.25",stroke:"#A6A6A6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})},ma={};ma.Container=rn.div`
    display: flex;
    flex-direction: column;
    width: 1096px;
    margin: 0 auto;
`,ma.MetaRow=rn.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    margin-bottom: 50px;
`,ma.AuthorInfo=rn.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,ma.AuthorName=rn.span`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ma.LikeButton=rn.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    border: none;
    background: transparent;

    span {
        font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
        font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.medium}};
        color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    }
`,ma.HeartIcon=rn.div`
    width: 18px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`,ma.SummaryHeader=rn.div`
    margin-bottom: 45px;
`,ma.Badge=rn.span`
    height: 40px;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    background-color: transparent;
    color: #F53102;
    border: 2px solid #F53102;
    border-radius: 10px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    margin-bottom: 20px;
`,ma.MainTitle=rn.h2`
    margin: 0;
    margin-bottom: 13px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ma.Description=rn.p`
    margin: 0;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
    color: ${e=>{let{theme:t}=e;return t.PALETTE.black}};
    line-height: 1.6;
    max-width: 900px;
`,ma.Section=rn.div`
    margin-bottom: 60px;
`,ma.SectionTitle=rn.h3`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    margin-bottom: 12px;
`,ma.SectionDesc=rn.p`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
    margin-bottom: 18px;
`,ma.Grid=rn.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: start;
`,ma.ActionCard=rn.div`
    display: flex;
    flex-direction: column;
    width: 536px;
    min-height: 60px;
    background-color: #FFF;
    border: 1px solid ${e=>{let{theme:t,$isOpen:n}=e;return n?t.PALETTE.third.main:t.GRAYSCALE[3]}};
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    overflow: hidden;

    &:hover {
        border-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    }
`,ma.CardHeader=rn.div`
    display: flex;
    align-items: center;
    height: 60px;
    padding: 12px 20px;
`,ma.Divider=rn.div`
    width: calc(100% - 40px);
    height: 1px;
    background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[3]}};
    margin: 0 auto;
`,ma.CardContent=rn.div`
    padding: 20px;
    padding-left: 70px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
    line-height: 1.6;
    word-break: keep-all;
`,ma.IconCircle=rn.div`
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background-color: ${e=>{let{color:t}=e;return t}};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-right: 14px;
    color: white;
`,ma.CardTitle=rn.span`
    flex: 1;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ma.NumberIcon=rn.div`
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background-color: ${e=>{let{color:t}=e;return t}};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: white;
    margin-right: 14px;
`,ma.Chevron=rn.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-right: 2px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
    transform: ${e=>{let{$isOpen:t}=e;return t?"rotate(-135deg)":"rotate(45deg)"}};
    transition: transform 0.3s ease;
    margin-left: 10px;
`,ma.BottomLinkWrapper=rn.div`
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
`,ma.BottomLink=rn.a`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    text-decoration: none;
    padding-bottom: 4px;

    &:hover {
        color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    }
`;const xa=()=>{const[e,t]=(0,r.useState)([]),[n,i]=(0,r.useState)([]),o={badge:"\ud658\uacbd \uc801\uc751\ud615 \uc2e4\ud328 (\uc678\ubd80 \uc694\uc778 70%)",title:"\uc678\ubd80 \ud658\uacbd \ubcc0\ud654\uc5d0 \ud729\uc4f8\ub9b0 \uc2e4\ud328",description:"\uc2dc\uc7a5 \uc0c1\ud669\uc774\ub098 \ud0c0\uc778\uc758 \uc555\ubc15 \uac19\uc740 \uc678\ubd80 \uc694\uc778\uc5d0 \uc601\ud5a5\uc744 \ub9ce\uc774 \ubc1b\uc558\uc2b5\ub2c8\ub2e4. \uc2a4\uc2a4\ub85c \uc8fc\ub3c4\uad8c\uc744 \uc7a1\uc9c0 \ubabb\ud558\uace0 \ud658\uacbd\uc5d0 \uc801\uc751\ud558\uc9c0 \ubabb\ud55c \ucc44 \ub0b4\ub9b0 \uacb0\uc815\ub4e4\uc774 \ubc18\ubcf5\uc801\uc778 \uc2e4\ud328 \ud328\ud134\uc744 \ub9cc\ub4e4\uace0 \uc788\uc2b5\ub2c8\ub2e4.",attempts:{title:"\ub2e4\uc74c\uc5d0\ub294 \uc774\ub807\uac8c \uc2dc\ub3c4\ud574\ubcf4\uc790!",description:"\ud658\uacbd\uc5d0 \ud718\ub458\ub9ac\uc9c0 \uc54a\uae30 \uc704\ud574 '\ud1b5\uc81c\ud560 \uc218 \uc788\ub294 \uac83'\uc5d0 \uc9d1\uc911\ud574\uc57c \ud569\ub2c8\ub2e4. \uc544\ub798\uc758 \uc804\ub7b5\uc744 \ub2e4\uc74c\uc5d0 \uc801\uc6a9\ud574\ubcf4\uc138\uc694.",items:[{id:1,title:"\ubaa9\ud45c \ud06c\uae30 \uc904\uc774\uae30",color:"transparent",content:"\ucc98\uc74c\ubd80\ud130 \uac70\ucc3d\ud55c \ubaa9\ud45c\ub97c \uc138\uc6b0\uae30\ubcf4\ub2e4, \ub2f9\uc7a5 \uc2e4\ucc9c \uac00\ub2a5\ud55c \uc544\uc8fc \uc791\uc740 \ub2e8\uc704\ub85c \ubaa9\ud45c\ub97c \ucabc\uac1c\uc5b4 \uc2dc\uc791\ud574\ubcf4\uc138\uc694. \uc791\uc740 \uc131\uacf5\uc758 \uacbd\ud5d8\uc774 \ud070 \ubcc0\ud654\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.",icon:(0,Co.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Co.jsx)("rect",{width:"36",height:"36",rx:"10",fill:"#027DF0"}),(0,Co.jsx)("path",{d:"M18 28C23.5228 28 28 23.5228 28 18C28 12.4772 23.5228 8 18 8C12.4772 8 8 12.4772 8 18C8 23.5228 12.4772 28 18 28Z",stroke:"white",strokeWidth:"1.97531",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Co.jsx)("path",{d:"M18 24C21.3137 24 24 21.3137 24 18C24 14.6863 21.3137 12 18 12C14.6863 12 12 14.6863 12 18C12 21.3137 14.6863 24 18 24Z",stroke:"white",strokeWidth:"1.97531",strokeLinecap:"round",strokeLinejoin:"round"}),(0,Co.jsx)("path",{d:"M18 19.9922C19.1046 19.9922 20 19.0968 20 17.9922C20 16.8876 19.1046 15.9922 18 15.9922C16.8954 15.9922 16 16.8876 16 17.9922C16 19.0968 16.8954 19.9922 18 19.9922Z",stroke:"white",strokeWidth:"1.97531",strokeLinecap:"round",strokeLinejoin:"round"})]})},{id:2,title:"\ud658\uacbd \ub610\ub294 \uacf5\uac04\uc5d0 \ubcc0\ud654 \uc8fc\uae30",color:"transparent",content:"\uc9d1\uc911\uc774 \uc798 \ub418\uc9c0 \uc54a\ub294 \ud658\uacbd\uc774\ub77c\uba74 \uc7a5\uc18c\ub97c \uc62e\uae30\uac70\ub098, \uc8fc\ubcc0 \ubb3c\uac74\uc744 \uc815\ub9ac\ud558\uc5ec \uc2dc\uac01\uc801 \uc790\uadf9\uc744 \uc904\uc5ec\ubcf4\uc138\uc694. \ub0af\uc120 \uacf5\uac04\uc774 \uc0c8\ub85c\uc6b4 \uc601\uac10\uc744 \uc90d\ub2c8\ub2e4.",icon:(0,Co.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Co.jsx)("rect",{width:"36",height:"36",rx:"10",fill:"#00B53F"}),(0,Co.jsx)("path",{d:"M17.9689 8.00579C18.0069 8.00388 18.0449 8.00197 18.0841 8C18.4099 8.04888 18.7025 8.2728 18.9706 8.44191C19.0227 8.4745 19.0227 8.4745 19.0759 8.50775C19.1508 8.55459 19.2257 8.60149 19.3006 8.64845C19.5041 8.77611 19.708 8.90324 19.912 9.03032C19.9752 9.0697 19.9752 9.0697 20.0397 9.10988C20.4744 9.38029 20.9124 9.64594 21.3509 9.9111C22.0051 10.3068 22.6556 10.7074 23.3036 11.1116C23.9729 11.5291 24.6465 11.9402 25.3226 12.3484C25.5363 12.4775 25.7496 12.6072 25.9626 12.7374C26.0184 12.7715 26.0184 12.7715 26.0754 12.8063C26.1866 12.8743 26.2974 12.9428 26.4081 13.0115C26.4417 13.032 26.4753 13.0525 26.5099 13.0736C26.7216 13.2059 26.8941 13.3244 26.978 13.556C26.9823 13.6729 26.9842 13.7888 26.9842 13.9057C26.9843 13.9419 26.9845 13.9781 26.9847 14.0154C26.9851 14.1372 26.9853 14.2591 26.9854 14.3809C26.9857 14.468 26.986 14.5552 26.9863 14.6423C26.987 14.8794 26.9875 15.1166 26.9878 15.3537C26.988 15.5018 26.9883 15.6499 26.9886 15.7979C26.9893 16.208 26.9899 16.6181 26.9902 17.0281C26.9903 17.1345 26.9904 17.2409 26.9904 17.3473C26.9905 17.3738 26.9905 17.4002 26.9905 17.4274C26.9909 17.8558 26.9919 18.2842 26.9933 18.7125C26.9947 19.1524 26.9955 19.5922 26.9956 20.0321C26.9957 20.279 26.9961 20.526 26.9971 20.7729C26.9981 21.0052 26.9983 21.2375 26.9979 21.4698C26.9979 21.555 26.9981 21.6403 26.9987 21.7255C26.9994 21.842 26.9992 21.9584 26.9986 22.0748C26.9993 22.1253 26.9993 22.1253 27 22.1769C26.9974 22.4018 26.9482 22.5316 26.8087 22.7171C26.7201 22.7939 26.7201 22.7939 26.6183 22.858C26.5771 22.8842 26.5358 22.9104 26.4932 22.9374C26.4433 22.968 26.3933 22.9985 26.3433 23.029C26.2998 23.0558 26.2998 23.0558 26.2553 23.0831C26.0432 23.2134 25.8302 23.3423 25.6168 23.4709C24.9317 23.8841 24.2501 24.3017 23.5721 24.7248C22.9615 25.1057 22.3481 25.4823 21.7317 25.8553C20.9777 26.3115 20.2285 26.7739 19.4815 27.2398C19.3467 27.3238 19.2119 27.4078 19.077 27.4917C19.0134 27.5313 18.9499 27.5709 18.8863 27.6106C18.7977 27.6658 18.709 27.7209 18.6202 27.776C18.5812 27.8004 18.5812 27.8004 18.5414 27.8253C18.2813 27.986 18.0634 28.0312 17.7547 27.9799C17.6478 27.9284 17.5518 27.8767 17.4518 27.8157C17.4227 27.7984 17.3935 27.7811 17.3635 27.7633C17.2678 27.7062 17.1727 27.6482 17.0778 27.59C17.0298 27.5606 17.0298 27.5606 16.9808 27.5306C16.7717 27.4022 16.5636 27.2724 16.3558 27.1422C15.6834 26.7211 15.0074 26.3053 14.3278 25.8943C13.6737 25.4986 13.0233 25.0982 12.3754 24.6939C11.6964 24.2703 11.0126 23.8535 10.3264 23.4398C9.07976 22.6875 9.07976 22.6875 9.01947 22.4417C9.01171 22.3449 9.01061 22.2498 9.01178 22.1528C9.01139 22.1159 9.011 22.079 9.0106 22.041C9.00956 21.9174 9.01003 21.7939 9.0105 21.6704C9.01003 21.5817 9.00956 21.4931 9.00896 21.4045C9.00764 21.1638 9.00766 20.9232 9.00801 20.6825C9.00819 20.4816 9.00772 20.2806 9.00727 20.0797C9.00614 19.5786 9.00633 19.0774 9.00711 18.5763C9.00775 18.1414 9.00673 17.7066 9.00491 17.2717C9.00306 16.8248 9.00234 16.3779 9.00275 15.9311C9.00297 15.6803 9.00275 15.4296 9.00144 15.1788C9.00025 14.943 9.0005 14.7072 9.00185 14.4714C9.0021 14.3849 9.00186 14.2984 9.00106 14.2119C9.00006 14.0937 9.00089 13.9756 9.00218 13.8573C9.00146 13.8232 9.00074 13.7891 9 13.7539C9.00528 13.5196 9.07936 13.4013 9.25474 13.2329C9.39563 13.1163 9.54792 13.0215 9.70755 12.9282C9.74348 12.9066 9.77941 12.8851 9.81642 12.8629C9.89385 12.8165 9.97142 12.7703 10.0491 12.7243C10.2599 12.5995 10.4695 12.4731 10.6793 12.3471C10.7441 12.3083 10.7441 12.3083 10.8103 12.2686C11.2459 12.0073 11.6764 11.7393 12.1066 11.4704C12.7554 11.0655 13.4078 10.6661 14.0629 10.2698C14.6592 9.90894 15.252 9.54364 15.8429 9.17529C17.7048 8.01469 17.7048 8.01469 17.9689 8.00579ZM18.6432 9.73567C18.6432 10.4689 18.6432 11.2022 18.6432 11.9577C18.8247 12.022 19.0062 12.0864 19.1932 12.1526C19.8827 12.5176 20.2634 12.9992 20.4855 13.7074C20.6176 14.2727 20.5226 14.9253 20.1954 15.4151C20.1729 15.445 20.1504 15.4749 20.1271 15.5057C20.1121 15.5312 20.0971 15.5568 20.0817 15.5832C20.1103 15.7025 20.1103 15.7025 20.2025 15.7473C20.2351 15.7623 20.2676 15.7773 20.3012 15.7927C20.6947 15.9875 20.9519 16.2414 21.0992 16.6385C21.1663 16.8971 21.1854 17.1144 21.1394 17.3766C21.084 17.7294 21.0427 18.1005 21.224 18.4289C21.6066 18.8747 22.2541 19.1443 22.7802 19.4188C23.1745 19.6264 23.5491 19.8617 23.9259 20.0949C24.1148 20.2113 24.3052 20.3258 24.4955 20.4405C24.7929 20.6202 25.0872 20.8035 25.3774 20.9929C25.5093 21.0873 25.5093 21.0873 25.6664 21.1188C25.7101 20.2134 25.7428 19.3082 25.7628 18.4022C25.7724 17.9813 25.7854 17.5609 25.8068 17.1404C26.0186 15.3048 26.0186 15.3048 25.3881 13.6598C25.0339 13.362 24.6217 13.1769 24.1739 13.0277C23.7357 12.8813 23.3768 12.6476 23.0011 12.3977C22.8177 12.2771 22.6303 12.162 22.4432 12.0463C22.4011 12.0202 22.3591 11.994 22.3157 11.967C21.851 11.6787 21.3825 11.3956 20.9142 11.1123C20.3078 10.7454 19.7051 10.3738 19.1059 9.99692C19.0776 9.97912 19.0492 9.96131 19.02 9.94297C18.9673 9.9099 18.9147 9.87675 18.8621 9.84352C18.7612 9.76812 18.7612 9.76812 18.6432 9.73567ZM17.1 9.86049C17.0695 9.87952 17.039 9.89855 17.0076 9.91816C16.9574 9.94986 16.9574 9.94986 16.9063 9.98221C16.8711 10.0042 16.8359 10.0262 16.7997 10.0489C16.723 10.0969 16.6463 10.1449 16.5697 10.1931C16.3623 10.3234 16.1543 10.4531 15.9464 10.5828C15.9033 10.6097 15.8603 10.6365 15.8159 10.6642C15.3788 10.9365 14.9381 11.2037 14.497 11.4704C13.8018 11.891 13.1104 12.3165 12.4218 12.7464C12.3899 12.7662 12.358 12.7859 12.3251 12.8063C12.2557 12.8499 12.1867 12.894 12.1184 12.939C11.9161 13.0701 11.7136 13.1841 11.4916 13.2836C10.7486 13.6091 10.7486 13.6091 10.2725 14.192C10.1476 14.6291 10.1857 15.0967 10.2092 15.5435C10.218 15.74 10.2188 15.9365 10.2204 16.1331C10.2247 16.5042 10.2361 16.8747 10.2502 17.2456C10.2659 17.6683 10.2735 18.091 10.2805 18.5138C10.295 19.3824 10.3195 20.2506 10.3508 21.1188C10.4105 21.0886 10.4702 21.0584 10.5299 21.0281C10.5631 21.0112 10.5964 20.9944 10.6306 20.9771C10.7931 20.8914 10.9468 20.7947 11.1013 20.6973C11.1535 20.6646 11.1535 20.6646 11.2068 20.6313C11.2817 20.5844 11.3567 20.5375 11.4316 20.4905C11.6331 20.3641 11.835 20.2382 12.037 20.1124C12.0788 20.0863 12.1207 20.0602 12.1638 20.0334C12.8159 19.6278 13.474 19.2305 14.1319 18.8328C14.1944 18.795 14.2567 18.7569 14.3187 18.7185C14.384 18.6797 14.4511 18.6433 14.5192 18.6088C14.71 18.5126 14.71 18.5126 14.8262 18.3516C14.8385 18.2597 14.8383 18.174 14.8336 18.0814C14.8336 18.0483 14.8336 18.0151 14.8336 17.9809C14.8334 17.8752 14.8306 17.7696 14.8275 17.6639C14.8062 16.5358 14.8062 16.5358 15.2585 16.09C15.4581 15.9038 15.6839 15.7799 15.9355 15.6611C15.9125 15.622 15.8896 15.5828 15.8659 15.5425C15.4783 14.8668 15.3496 14.2137 15.5863 13.4674C15.7286 13.0776 15.9606 12.7927 16.2739 12.5035C16.2978 12.481 16.3217 12.4586 16.3463 12.4354C16.6219 12.197 16.978 12.0663 17.3317 11.9577C17.3317 11.2373 17.3317 10.5169 17.3317 9.77465C17.2241 9.77465 17.1885 9.80483 17.1 9.86049ZM16.9679 13.5455C16.7707 13.8397 16.6905 14.1281 16.7578 14.4682C16.8437 14.7896 17.0308 15.0458 17.3317 15.2299C17.6399 15.388 17.9489 15.4364 18.2922 15.3642C18.6215 15.2684 18.8942 15.1063 19.0836 14.835C19.2546 14.5285 19.2984 14.208 19.2036 13.8717C19.0635 13.535 18.8575 13.3397 18.5163 13.1662C17.9498 12.9607 17.3463 13.0997 16.9679 13.5455ZM16.147 16.9476C16.106 17.0609 16.0987 17.1356 16.0972 17.2536C16.0967 17.292 16.0961 17.3304 16.0956 17.37C16.0953 17.4114 16.095 17.4528 16.0946 17.4955C16.0943 17.5381 16.0939 17.5808 16.0936 17.6247C16.093 17.7149 16.0926 17.8052 16.0922 17.8954C16.0915 18.0334 16.0896 18.1714 16.0878 18.3094C16.0873 18.3971 16.087 18.4847 16.0867 18.5724C16.086 18.6137 16.0852 18.6549 16.0845 18.6974C16.0846 18.928 16.0846 18.928 16.184 19.1358C16.2828 19.2158 16.3606 19.2501 16.4855 19.2866C16.7023 19.359 16.8049 19.4463 16.9086 19.6374C16.913 19.72 16.9147 19.8026 16.9152 19.8853C16.9156 19.9234 16.9156 19.9234 16.9159 19.9623C16.9163 20.0177 16.9167 20.073 16.917 20.1283C16.9175 20.216 16.9183 20.3036 16.9192 20.3913C16.9219 20.6407 16.9241 20.8901 16.9256 21.1394C16.9264 21.2919 16.9279 21.4444 16.9298 21.5969C16.9304 21.6549 16.9308 21.7129 16.9309 21.7709C16.9311 21.8524 16.9321 21.9338 16.9333 22.0152C16.9338 22.0846 16.9338 22.0846 16.9343 22.1554C16.9556 22.3262 17.0005 22.5012 17.149 22.6164C17.2952 22.6503 17.4395 22.6518 17.5893 22.6522C17.6389 22.6526 17.6389 22.6526 17.6895 22.653C17.7593 22.6534 17.8291 22.6536 17.8989 22.6536C18.0054 22.6538 18.1119 22.6552 18.2184 22.6567C18.2863 22.6569 18.3543 22.657 18.4222 22.6571C18.4698 22.658 18.4698 22.658 18.5183 22.6588C18.6748 22.6576 18.7622 22.6438 18.895 22.5649C19.0397 22.4285 19.0296 22.3406 19.0307 22.1532C19.0309 22.1273 19.0311 22.1014 19.0313 22.0748C19.0318 22.0185 19.0321 21.9623 19.0324 21.906C19.0329 21.8168 19.0337 21.7277 19.0347 21.6385C19.0373 21.385 19.0396 21.1315 19.041 20.878C19.0419 20.7229 19.0434 20.5679 19.0452 20.4129C19.0458 20.3539 19.0462 20.2949 19.0463 20.2359C19.0465 20.1531 19.0475 20.0704 19.0487 19.9876C19.049 19.9406 19.0494 19.8936 19.0497 19.8451C19.0734 19.66 19.1403 19.5303 19.2831 19.3987C19.4174 19.318 19.5525 19.2634 19.7014 19.2097C19.7994 19.171 19.7994 19.171 19.8702 19.0527C19.8841 18.9588 19.8841 18.9588 19.8838 18.8528C19.8846 18.8121 19.8854 18.7714 19.8863 18.7294C19.8868 18.6635 19.8868 18.6635 19.8873 18.5962C19.8881 18.5283 19.8881 18.5283 19.8888 18.4591C19.8896 18.3633 19.8902 18.2676 19.8905 18.1718C19.8913 18.0253 19.8939 17.8789 19.8966 17.7324C19.8971 17.6394 19.8976 17.5464 19.8979 17.4535C19.899 17.4096 19.9 17.3658 19.9011 17.3207C19.9008 17.2797 19.9006 17.2387 19.9003 17.1965C19.9006 17.1606 19.9009 17.1247 19.9012 17.0877C19.8637 16.9657 19.8009 16.9048 19.6915 16.8293C19.5614 16.7641 19.4424 16.7671 19.2963 16.767C19.2654 16.7668 19.2344 16.7665 19.2024 16.7662C19.1006 16.7655 18.9989 16.7663 18.8971 16.7671C18.8259 16.7671 18.7548 16.767 18.6837 16.7668C18.5349 16.7667 18.3861 16.7673 18.2373 16.7684C18.047 16.7697 17.8566 16.7695 17.6663 16.7687C17.5195 16.7683 17.3727 16.7687 17.2259 16.7693C17.1558 16.7695 17.0856 16.7695 17.0154 16.7692C16.9172 16.769 16.819 16.7698 16.7208 16.7709C16.6371 16.7712 16.6371 16.7712 16.5518 16.7716C16.3755 16.795 16.2832 16.8432 16.147 16.9476ZM14.8624 19.8012C14.832 19.8203 14.8015 19.8393 14.7701 19.8589C14.7364 19.88 14.7027 19.9012 14.668 19.923C14.5949 19.9687 14.5217 20.0144 14.4485 20.0601C14.4094 20.0845 14.3704 20.1089 14.3302 20.1341C13.5348 20.6315 12.7347 21.122 11.9308 21.6077C11.7282 21.7302 11.5258 21.853 11.3239 21.9764C11.2858 21.9997 11.2858 21.9997 11.2469 22.0235C11.1842 22.062 11.1219 22.1009 11.0596 22.14C11.0279 22.1598 10.9963 22.1796 10.9637 22.2C10.9325 22.2244 10.9325 22.2244 10.9008 22.2493C10.9008 22.275 10.9008 22.3008 10.9008 22.3273C10.9614 22.3754 10.9614 22.3754 11.0428 22.422C11.0743 22.441 11.1057 22.46 11.1382 22.4796C11.1906 22.5107 11.1906 22.5107 11.244 22.5424C11.2804 22.5643 11.3167 22.5862 11.3542 22.6088C11.4334 22.6565 11.5128 22.7041 11.5922 22.7516C11.8067 22.8799 12.0205 23.009 12.2343 23.1382C12.2785 23.1648 12.3226 23.1914 12.3681 23.2188C12.8055 23.4831 13.239 23.7526 13.672 24.0231C14.3655 24.4557 15.0625 24.8831 15.7631 25.3059C16.1415 25.5345 16.5181 25.7649 16.8914 26.0005C16.9967 26.0667 17.1021 26.1327 17.2074 26.1988C17.2738 26.2407 17.34 26.2828 17.406 26.3252C17.4962 26.3832 17.587 26.4402 17.6779 26.4971C17.7042 26.5144 17.7305 26.5317 17.7576 26.5495C17.9009 26.6382 17.9009 26.6382 18.068 26.6387C18.2251 26.5497 18.3789 26.4575 18.531 26.3613C18.566 26.3394 18.601 26.3175 18.637 26.295C18.713 26.2474 18.7889 26.1998 18.8647 26.1522C19.0705 26.0229 19.2767 25.8942 19.4829 25.7656C19.5469 25.7257 19.5469 25.7257 19.6122 25.6849C20.0482 25.4133 20.4878 25.1467 20.9279 24.8807C21.63 24.4559 22.3281 24.0258 23.0237 23.592C23.3818 23.3687 23.7403 23.1461 24.1008 22.926C24.134 22.9058 24.1671 22.8856 24.2012 22.8647C24.3562 22.7701 24.5112 22.6756 24.6666 22.5815C24.7205 22.5486 24.7745 22.5157 24.8285 22.4828C24.8653 22.4606 24.8653 22.4606 24.9029 22.438C25.031 22.3623 25.031 22.3623 25.1164 22.2493C25.0971 22.2377 25.0778 22.226 25.058 22.214C23.9362 21.5359 22.8191 20.8518 21.7085 20.1583C21.6481 20.1205 21.5875 20.0829 21.7085 20.1583C21.6481 20.1205 21.5875 20.0829 21.5268 20.0455C21.4618 20.0047 21.3976 19.963 21.3339 19.9206C21.3005 19.8988 21.2671 19.877 21.2326 19.8545C21.2026 19.8344 21.1726 19.8143 21.1416 19.7936C21.0571 19.7466 21.0571 19.7466 20.9636 19.7635C20.8585 19.8037 20.813 19.8601 20.7428 19.942C20.6498 20.0501 20.5991 20.1014 20.4591 20.1568C20.3134 20.2798 20.3157 20.3087 20.3049 20.4838C20.304 20.5778 20.3044 20.6718 20.306 20.7658C20.3055 20.8421 20.3051 20.9184 20.3046 20.9946C20.3043 21.1015 20.3051 21.2084 20.3059 21.3153C20.3072 21.5014 20.3072 21.6875 20.3064 21.8736C20.3061 21.9725 20.3065 22.0714 20.3076 22.1703C20.3074 22.6578 20.1891 23.027 19.8262 23.3876C19.532 23.6467 19.1679 23.8114 18.756 23.8149C18.7021 23.8155 18.7021 23.8155 18.6472 23.8161C18.5894 23.8163 18.5894 23.8163 18.5305 23.8166C18.4904 23.8168 18.4503 23.817 18.4091 23.8172C18.3242 23.8176 18.2393 23.8179 18.1545 23.818C18.0258 23.8184 17.8971 23.8196 17.7685 23.8208C17.6858 23.8211 17.6031 23.8213 17.5204 23.8214C17.4634 23.8222 17.4634 23.8222 17.4052 23.8229C16.9294 23.8229 16.9294 23.8229 17.4052 23.8229C16.9294 23.8214 16.5072 23.6786 16.1467 23.3897C15.8178 23.0743 15.6725 22.6539 15.6797 22.2222C15.6802 22.1795 15.6807 22.1369 15.6812 22.0929C15.6819 22.0473 15.6825 22.0018 15.6831 21.9548C15.6834 21.8575 15.6835 21.7602 15.6835 21.6629C15.6836 21.5101 15.6843 21.3574 15.687 21.2045C15.6894 21.0566 15.6892 20.9089 15.6884 20.7609C15.6898 20.7155 15.6912 20.6701 15.6926 20.6233C15.6887 20.3718 15.6887 20.3718 15.5457 20.1657C15.4339 20.0818 15.4339 20.0818 15.3176 20.0133C15.1845 19.9293 15.1263 19.8425 15.047 19.7154C14.9735 19.7154 14.9219 19.764 14.8624 19.8012Z",fill:"white"})]})},{id:3,title:"\ud30c\ud2b8\ub108 \uad6c\ud558\uae30",color:"transparent",icon:(0,Co.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Co.jsx)("rect",{width:"36",height:"36",rx:"10",fill:"#FF34C5"}),(0,Co.jsx)("path",{d:"M15.4263 8.802C15.4708 8.83494 15.4708 8.83494 15.5162 8.86854C16.1694 9.37353 16.6727 10.2325 16.7562 11.0238C16.8295 12.0992 16.6252 12.9901 15.8834 13.8302C15.8532 13.8667 15.8532 13.8667 15.8224 13.9039C15.7054 14.0431 15.5737 14.1496 15.4263 14.259C15.5321 14.337 15.6321 14.4093 15.7587 14.4539C15.9011 14.4331 16.009 14.3747 16.1328 14.3077C17.013 13.8518 18.0317 13.7118 19.0148 13.9532C19.3591 14.048 19.6796 14.1863 19.9773 14.3735C20.0934 14.4444 20.0934 14.4444 20.2318 14.4539C20.351 14.4068 20.4659 14.3551 20.5799 14.2979C20.4971 14.1972 20.4135 14.1029 20.3176 14.0129C19.8659 13.5893 19.5726 13.1135 19.3746 12.5439C19.3547 12.4901 19.3547 12.4901 19.3344 12.4352C19.0586 11.5466 19.2468 10.572 19.7043 9.7718C19.8133 9.59195 19.9417 9.42951 20.0812 9.26974C20.1046 9.24191 20.128 9.21407 20.1521 9.18539C20.6906 8.57278 21.6065 8.10079 22.4502 8.02244C23.5616 7.95582 24.5235 8.12801 25.4011 8.802C25.4308 8.82396 25.4605 8.84592 25.491 8.86854C26.1443 9.37353 26.6475 10.2325 26.7311 11.0238C26.7982 12.0092 26.6555 12.9823 25.9349 13.7519C25.9096 13.7778 25.8843 13.8036 25.8583 13.8302C25.814 13.8805 25.7699 13.9308 25.7258 13.9812C25.6297 14.0896 25.5196 14.1727 25.4011 14.259C25.4383 14.2807 25.4755 14.3024 25.5138 14.3247C25.8245 14.508 26.1175 14.6993 26.3986 14.9216C26.4261 14.9417 26.4535 14.9618 26.4819 14.9825C27.0488 15.4122 27.4691 16.0623 27.7234 16.6951C27.7348 16.7233 27.7462 16.7514 27.7579 16.7804C27.9837 17.3777 27.9971 17.9589 27.996 18.5857C27.9961 18.6752 27.9964 18.7647 27.9966 18.8542C27.997 19.0405 27.9969 19.2269 27.9965 19.4133C27.996 19.652 27.9968 19.8906 27.998 20.1293C27.9988 20.3136 27.9988 20.4978 27.9986 20.6821C27.9986 20.7702 27.9988 20.8582 27.9993 20.9462C27.9999 21.069 27.9995 21.1917 27.9988 21.3144C27.9992 21.3506 27.9996 21.3867 28 21.424C27.9974 21.6396 27.9707 21.7701 27.8117 21.9377C27.6652 22.0347 27.5651 22.0693 27.3864 22.0702C27.322 22.0709 27.322 22.0709 27.2562 22.0716C27.1862 22.0716 27.1862 22.0716 27.1148 22.0715C27.0653 22.0719 27.0158 22.0723 26.9649 22.0727C26.8295 22.0737 26.6942 22.0741 26.5589 22.0744C26.4174 22.0747 26.2758 22.0757 26.1342 22.0767C25.8664 22.0784 25.5985 22.0795 25.3306 22.0804C25.0255 22.0815 24.7205 22.0832 24.4154 22.0849C23.7881 22.0886 23.1607 22.0914 22.5333 22.0936C22.5506 22.1336 22.568 22.1737 22.5858 22.2149C22.6086 22.2681 22.6315 22.3212 22.6543 22.3743C22.6657 22.4006 22.6771 22.4269 22.6888 22.454C22.7682 22.639 22.8309 22.8199 22.8788 23.0145C22.8885 23.0527 22.8885 23.0527 22.8984 23.0917C22.9159 23.1616 22.9325 23.2318 22.9489 23.3019C22.9563 23.3332 22.9637 23.3644 22.9713 23.3966C22.9896 23.492 22.9961 23.5788 22.9966 23.6755C22.9971 23.7276 22.9971 23.7276 22.9975 23.7807C22.9976 23.8182 22.9978 23.8558 22.9979 23.8945C22.9981 23.9345 22.9984 23.9744 22.9987 24.0156C22.9995 24.1475 23 24.2795 23.0004 24.4114C23.0006 24.4566 23.0008 24.5017 23.0009 24.5481C23.0018 24.7867 23.0024 25.0253 23.0028 25.2639C23.0032 25.5104 23.0047 25.7568 23.0063 26.0033C23.0074 26.1929 23.0078 26.3824 23.0079 26.572C23.0081 26.6628 23.0086 26.7537 23.0094 26.8446C23.0104 26.9717 23.0103 27.0987 23.01 27.2258C23.0108 27.282 23.0108 27.282 23.0117 27.3394C23.0098 27.5585 22.9869 27.6926 22.8243 27.8624C22.6366 28.0007 22.4713 27.996 22.2429 27.9944C22.2052 27.9946 22.1675 27.9949 22.1287 27.9951C22.0024 27.9956 21.8761 27.9954 21.7498 27.9951C21.6593 27.9953 21.5688 27.9956 21.4782 27.9959C21.2323 27.9966 20.9864 27.9965 20.7404 27.9963C20.5352 27.9962 20.33 27.9964 20.1247 27.9967C19.6406 27.9972 19.1565 27.9972 18.6724 27.9967C18.1728 27.9963 17.6731 27.9968 17.1735 27.9979C16.7447 27.9987 16.3159 27.999 15.887 27.9988C15.6308 27.9986 15.3747 27.9987 15.1185 27.9994C14.8776 28 14.6367 27.9998 14.3959 27.9991C14.3074 27.999 14.219 27.9991 14.1306 27.9995C14.0099 28 13.8893 27.9996 13.7686 27.9989C13.716 27.9994 13.716 27.9994 13.6624 28C13.4411 27.9974 13.3167 27.9599 13.1404 27.8234C12.9782 27.6488 12.9978 27.4583 12.9989 27.2383C12.9986 27.1991 12.9983 27.1599 12.998 27.1195C12.9972 26.9898 12.9974 26.8601 12.9976 26.7303C12.9975 26.6397 12.9972 26.549 12.997 26.4583C12.9966 26.2679 12.9967 26.0775 12.9971 25.8871C12.9976 25.6449 12.9968 25.4027 12.9956 25.1605C12.9948 24.9729 12.9948 24.7853 12.995 24.5977C12.995 24.5086 12.9948 24.4194 12.9943 24.3302C12.9906 23.5978 13.0823 22.9661 13.3897 22.2885C13.4175 22.2236 13.4452 22.1586 13.4728 22.0936C13.4471 22.0935 13.4214 22.0934 13.3949 22.0933C12.7688 22.091 12.1426 22.0881 11.5165 22.0844C11.2137 22.0827 10.9109 22.0811 10.6082 22.0801C10.3442 22.0792 10.0803 22.0779 9.81638 22.0761C9.67664 22.0752 9.53692 22.0745 9.39718 22.0742C9.24114 22.0738 9.08513 22.0727 8.9291 22.0715C8.88282 22.0715 8.83654 22.0716 8.78886 22.0716C8.74626 22.0712 8.70366 22.0707 8.65977 22.0702C8.62288 22.07 8.58598 22.0698 8.54797 22.0696C8.34606 22.0405 8.19347 21.9247 8.06895 21.7756C7.98701 21.6311 7.99985 21.4763 8.00201 21.3163C8.00172 21.2778 8.00142 21.2394 8.00111 21.1998C8.00041 21.0728 8.00122 20.9459 8.0021 20.8189C8.00207 20.73 8.00197 20.6412 8.0018 20.5523C8.00168 20.3658 8.00229 20.1793 8.00343 19.9928C8.00484 19.7556 8.0046 19.5184 8.00382 19.2812C8.00338 19.0974 8.00376 18.9136 8.00438 18.7298C8.00459 18.6425 8.00458 18.5552 8.00431 18.4678C8.00209 17.2787 8.3163 16.263 9.15041 15.3504C9.18256 15.3118 9.18256 15.3118 9.21535 15.2724C9.58382 14.8439 10.1108 14.5443 10.6051 14.259C10.5446 14.2143 10.5446 14.2143 10.483 14.1688C10.1523 13.902 9.89468 13.5662 9.69072 13.2066C9.66934 13.169 9.64796 13.1315 9.62594 13.0928C9.21299 12.3154 9.11823 11.3523 9.38355 10.5154C9.54723 10.0577 9.77974 9.64375 10.1063 9.26974C10.1297 9.24191 10.1532 9.21407 10.1773 9.18539C11.4638 7.72167 13.9091 7.63675 15.4263 8.802ZM11.1035 10.0581C10.6219 10.6115 10.4981 11.222 10.5635 11.9203C10.6583 12.5278 11.0393 13.0126 11.5376 13.3941C12.1271 13.8013 12.8004 13.9168 13.5191 13.8182C14.1638 13.6989 14.6871 13.3186 15.0718 12.8288C15.4615 12.2764 15.5757 11.6325 15.4391 10.9828C15.261 10.3435 14.807 9.82404 14.2042 9.48671C13.1192 8.94498 11.9089 9.22047 11.1035 10.0581ZM21.0783 10.0581C20.5967 10.6115 20.4729 11.222 20.5384 11.9203C20.6332 12.5278 21.0141 13.0126 21.5125 13.3941C22.102 13.8013 22.7753 13.9168 23.4939 13.8182C24.1387 13.6989 24.662 13.3186 25.0467 12.8288C25.4363 12.2764 25.5505 11.6325 25.4139 10.9828C25.2359 10.3435 24.7818 9.82404 24.1791 9.48671C23.0941 8.94498 21.8838 9.22047 21.0783 10.0581ZM10.231 16.052C10.2003 16.0804 10.1695 16.1088 10.1378 16.1381C9.65161 16.6154 9.38996 17.2331 9.31165 17.8831C9.30816 17.9116 9.30468 17.9402 9.30109 17.9696C9.2668 18.273 9.26453 18.5745 9.26698 18.8793C9.26714 18.9377 9.26725 18.9962 9.26734 19.0547C9.26765 19.2061 9.26846 19.3575 9.26939 19.5089C9.27025 19.6644 9.27062 19.8199 9.27104 19.9755C9.27192 20.2787 9.27333 20.582 9.2751 20.8853C9.94529 20.8926 10.6155 20.8981 11.2857 20.9014C11.5969 20.903 11.9081 20.9052 12.2193 20.9088C12.4907 20.9119 12.7621 20.9139 13.0335 20.9146C13.1771 20.915 13.3207 20.916 13.4643 20.9182C13.6249 20.9208 13.7855 20.9208 13.9462 20.9207C13.9933 20.9218 14.0404 20.9229 14.0889 20.9241C14.4521 20.9206 14.6255 20.8004 14.8859 20.5735C14.9779 20.5129 15.072 20.4613 15.1691 20.4078C15.3349 20.3161 15.4863 20.2215 15.6341 20.1057C15.5938 20.076 15.5535 20.0462 15.512 20.0156C15.1813 19.7488 14.9237 19.413 14.7197 19.0533C14.6876 18.997 14.6876 18.997 14.6549 18.9396C14.2356 18.1501 14.1492 17.1838 14.4203 16.3367C14.4949 16.1445 14.5789 15.9611 14.6781 15.7791C14.7076 15.7233 14.7076 15.7233 14.7376 15.6663C14.7864 15.5737 14.8359 15.4814 14.8859 15.3893C13.3507 14.733 11.4329 14.9117 10.231 16.052ZM21.1202 15.3893C21.1328 15.4125 21.1454 15.4357 21.1584 15.4595C21.2156 15.5657 21.2718 15.6724 21.328 15.7791C21.3459 15.8119 21.3638 15.8447 21.3823 15.8785C21.7845 16.6506 21.8671 17.6459 21.5684 18.4651C21.3892 18.9133 21.1761 19.3216 20.8293 19.6769C20.7927 19.7198 20.7563 19.7629 20.7202 19.8061C20.6121 19.9208 20.5 20.0109 20.3721 20.1057C20.4997 20.2094 20.6319 20.292 20.7773 20.3713C21.0169 20.5033 21.2355 20.658 21.4444 20.8299C21.5564 20.8977 21.6205 20.8997 21.7531 20.8993C21.797 20.8995 21.841 20.8997 21.8862 20.8998C21.9342 20.8994 21.9822 20.8990 22.0316 20.8986C22.0823 20.8986 22.133 20.8986 22.1852 20.8986C22.3241 20.8985 22.4629 20.898 22.6018 20.8971C22.7469 20.8964 22.8921 20.8963 23.0373 20.8962C23.3121 20.8958 23.5869 20.8949 23.8617 20.8937C24.1746 20.8924 24.4875 20.8917 24.8004 20.8912C25.4439 20.8899 26.0875 20.8879 26.7311 20.8853C26.733 20.5511 26.7345 20.217 26.7354 19.8829C26.7358 19.7276 26.7364 19.5724 26.7373 19.4172C26.7383 19.2668 26.7387 19.1164 26.739 18.966C26.7391 18.9092 26.7394 18.8525 26.7399 18.7957C26.7422 18.4892 26.7317 18.1878 26.6945 17.8831C26.6913 17.8567 26.6882 17.8302 26.6849 17.803C26.5837 17.0502 26.217 16.4602 25.6505 15.935C25.6201 15.9062 25.5898 15.8774 25.5586 15.8476C24.8166 15.1828 23.817 15.0165 22.826 15.0312C22.2265 15.0532 21.6683 15.1503 21.1202 15.3893ZM16.0909 15.9049C15.6093 16.4582 15.4855 17.0688 15.5509 17.767C15.6457 18.3745 16.0267 18.8594 16.525 19.2409C17.1145 19.6481 17.7878 19.7635 18.5065 19.6649C19.1512 19.5457 19.6746 19.1654 20.0593 18.6755C20.4489 18.1232 20.5631 17.4792 20.4265 16.8296C20.2484 16.1903 19.7944 15.6708 19.1917 15.3335C18.1067 14.7917 16.8964 15.0672 16.0909 15.9049ZM15.2184 21.8987C15.1877 21.9272 15.1569 21.9556 15.1253 21.9849C13.856 23.2308 14.2625 25.317 14.2625 26.81C16.7313 26.81 19.2001 26.81 21.7437 26.81C21.9424 24.1452 21.9424 24.1452 20.7757 21.8862C20.7385 21.8518 20.7014 21.8173 20.663 21.7818C20.6176 21.7385 20.6176 21.7385 20.5712 21.6944C19.8294 21.0298 18.8289 20.8626 17.8381 20.8781C16.7958 20.9165 15.9573 21.1977 15.2184 21.8987Z",fill:"white"})]})},{id:4,title:"\uccb4\ud06c\ub9ac\uc2a4\ud2b8 \uc124\uc815 \ubc0f \uad00\ub9ac\ud558\uae30",color:"transparent",icon:(0,Co.jsxs)("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Co.jsx)("rect",{width:"36",height:"36",rx:"10",fill:"#AB47FF"}),(0,Co.jsx)("path",{d:"M12.3196 8.0153C12.3522 8.01507 12.3849 8.01485 12.4185 8.01461C12.472 8.01483 12.472 8.01483 12.5266 8.01506C12.5836 8.01484 12.5836 8.01484 12.6418 8.01461C12.7697 8.0142 12.8975 8.01436 13.0253 8.01452C13.1168 8.01435 13.2083 8.01414 13.2998 8.01391C13.5487 8.01339 13.7976 8.01337 14.0465 8.01347C14.2806 8.01351 14.5146 8.01327 14.7486 8.01306C15.2407 8.01264 15.7328 8.01272 16.2248 8.01296C16.6745 8.01316 17.1242 8.01272 17.5738 8.01198C18.0358 8.01122 18.4978 8.0109 18.9598 8.01105C18.9598 8.01105 18.9598 8.01105 18.9598 8.01105C19.2191 8.01112 19.4784 8.01102 19.7376 8.01048C19.9816 8.00999 20.2256 8.01006 20.4696 8.01057C20.559 8.01066 20.6484 8.01056 20.7378 8.01023C20.8602 8.00983 20.9825 8.01014 21.1049 8.01064C21.14 8.01035 21.1752 8.01006 21.2114 8.00977C21.7042 8.01393 22.1131 8.20923 22.4723 8.54392C22.8414 8.93956 22.9907 9.41704 22.9912 9.94946C22.9913 9.97774 22.9914 10.006 22.9915 10.0351C22.9917 10.1299 22.9916 10.2247 22.9916 10.3195C22.9917 10.3881 22.9918 10.4567 22.9919 10.5254C22.9922 10.714 22.9923 10.9026 22.9923 11.0912C22.9924 11.2947 22.9927 11.4981 22.993 11.7015C22.9935 12.1464 22.9937 12.5913 22.9939 13.0361C22.994 13.3139 22.9942 13.5918 22.9943 13.8696C22.9948 14.6389 22.9952 15.4082 22.9954 16.1776C22.9954 16.2268 22.9954 16.276 22.9954 16.3268C22.9954 16.3761 22.9954 16.4255 22.9954 16.4763C22.9954 16.5763 22.9954 16.6763 22.9955 16.7764C22.9955 16.826 22.9955 16.8756 22.9955 16.9267C22.9956 17.7303 22.9963 18.5339 22.9972 19.3376C22.9982 20.1628 22.9986 20.9881 22.9987 21.8133C22.9987 22.2766 22.9989 22.7399 22.9996 23.2031C23.0002 23.5978 23.0004 23.9922 23.0001 24.3867C23 24.5879 23 24.7892 23.0006 24.9904C23.0011 25.1748 23.001 25.3592 23.0005 25.5436C23.0005 25.6101 23.0006 25.6766 23.0009 25.7431C23.0042 26.4303 22.9061 26.9764 22.422 27.4927C22.0035 27.8852 21.5648 27.9923 21.0052 27.9898C20.9561 27.99 20.9069 27.9902 20.8563 27.9905C20.7209 27.9911 20.5855 27.991 20.4501 27.9908C20.3037 27.9907 20.1573 27.9913 20.0109 27.9917C19.7244 27.9926 19.4379 27.9927 19.1515 27.9927C18.9185 27.9926 18.6855 27.9928 18.4526 27.9931C18.3853 27.9931 18.3181 27.9932 18.2509 27.9933C18.2007 27.9934 18.2007 27.9934 18.1495 27.9934C17.5172 27.9942 16.885 27.9941 16.2527 27.9939C15.675 27.9936 15.0974 27.9945 14.5197 27.9957C13.9257 27.9971 13.3318 27.9976 12.7378 27.9975C12.4047 27.9974 12.0716 27.9976 11.7384 27.9986C11.4548 27.9994 11.1712 27.9995 10.8875 27.9988C10.743 27.9984 10.5985 27.9984 10.4539 27.9992C10.2968 28 10.1397 27.9994 9.98262 27.9986C9.93752 27.9991 9.89242 27.9996 9.84596 28.0001C9.34349 27.9947 8.90326 27.8065 8.5323 27.4679C8.12025 27.0163 7.99609 26.5258 8.00136 25.9276C8.00116 25.868 8.00088 25.8084 8.00052 25.7489C7.99979 25.5865 8.00026 25.4242 8.00094 25.2619C8.00146 25.0863 8.00086 24.9107 8.0004 24.7351C7.99969 24.3918 8.00001 24.0484 8.00071 23.7051C8.00126 23.4261 8.00141 23.1471 8.00128 22.8681C8.00126 22.8283 8.00124 22.7885 8.00123 22.7476C8.00119 22.6668 8.00114 22.586 8.0011 22.5052C8.00077 21.7917 8.00142 21.0782 8.00258 20.3647C8.0037 19.6724 8.00397 18.9801 8.00337 18.2878C8.00272 17.5335 8.00256 16.7791 8.00325 16.0247C8.00332 15.9443 8.00339 15.8639 8.00346 15.7835C8.0035 15.7439 8.00353 15.7044 8.00357 15.6636C8.00379 15.3848 8.00366 15.106 8.0034 14.8272C8.0031 14.4876 8.00336 14.1481 8.00434 13.8086C8.00483 13.6353 8.00507 13.4621 8.00463 13.2888C8.00424 13.1303 8.00457 12.9718 8.00547 12.8132C8.00568 12.7558 8.00561 12.6984 8.00526 12.6411C8.00483 12.5631 8.00544 12.4852 8.00611 12.4072C8.00616 12.3639 8.0062 12.3206 8.00625 12.276C8.04229 12.0539 8.18974 11.9037 8.3443 11.749C8.39248 11.7005 8.39248 11.7005 8.44162 11.651C8.49396 11.5989 8.49396 11.5989 8.54737 11.5457C8.58477 11.5082 8.62215 11.4707 8.65952 11.4331C8.7606 11.3317 8.86192 11.2305 8.9633 11.1294C9.06952 11.0233 9.17555 10.9171 9.2816 10.8109C9.45962 10.6327 9.63781 10.4547 9.81608 10.2768C10.0221 10.0711 10.2279 9.86522 10.4335 9.65915C10.6103 9.48204 10.7871 9.30508 10.9642 9.12824C11.0698 9.0227 11.1754 8.91712 11.2809 8.81139C11.3799 8.71207 11.4792 8.61294 11.5786 8.51396C11.6325 8.46029 11.6861 8.40643 11.7397 8.35256C11.7879 8.30472 11.7879 8.30472 11.837 8.2559C11.8648 8.22812 11.8926 8.20034 11.9213 8.17171C12.0479 8.06094 12.1514 8.0155 12.3196 8.0153ZM13.597 9.19411C13.5967 9.22742 13.5963 9.26072 13.596 9.29504C13.593 9.61028 13.5896 9.92552 13.5858 10.2408C13.5838 10.4028 13.582 10.5648 13.5805 10.7269C13.5791 10.8835 13.5773 11.0401 13.5752 11.1968C13.5745 11.2563 13.5739 11.3157 13.5735 11.3752C13.57 11.8125 13.5524 12.2031 13.3486 12.5961C13.3258 12.6409 13.303 12.6858 13.2795 12.732C13.0494 13.1296 12.6778 13.3791 12.2366 13.5006C11.9223 13.5721 11.6077 13.5717 11.2871 13.5741C11.2265 13.5749 11.166 13.5756 11.1054 13.5764C10.9472 13.5784 10.789 13.58 10.6308 13.5814C10.4689 13.583 10.3069 13.585 10.145 13.5869C9.8282 13.5907 9.5114 13.594 9.1946 13.597C9.19193 15.1893 9.18987 16.7816 9.18863 18.374C9.18849 18.562 9.18834 18.75 9.18818 18.938C9.18815 18.9754 9.18812 19.0128 9.18809 19.0514C9.18758 19.6574 9.18666 20.2634 9.18559 20.8693C9.18449 21.4911 9.18384 22.113 9.18361 22.7348C9.18345 23.1185 9.18294 23.5021 9.18199 23.8858C9.18137 24.1489 9.18118 24.4121 9.18134 24.6752C9.18141 24.827 9.1813 24.9788 9.18067 25.1305C9.1801 25.2696 9.18007 25.4087 9.18047 25.5478C9.18054 25.6217 9.18004 25.6956 9.17952 25.7695C9.18115 26.0808 9.20531 26.3501 9.39427 26.6058C9.67644 26.8144 9.98438 26.8224 10.3244 26.8201C10.3705 26.8202 10.4165 26.8204 10.464 26.8205C10.591 26.8208 10.7179 26.8206 10.8449 26.8202C10.9822 26.8199 11.1195 26.8202 11.2567 26.8204C11.5253 26.8208 11.7939 26.8205 12.0624 26.8201C12.3754 26.8195 12.6883 26.8196 13.0013 26.8197C13.5598 26.8198 14.1182 26.8194 14.6767 26.8186C15.2182 26.8178 15.7598 26.8176 16.3014 26.8178C16.8916 26.818 17.4817 26.818 18.0719 26.8176C18.1349 26.8175 18.1978 26.8175 18.2608 26.8174C18.2918 26.8174 18.3227 26.8174 18.3547 26.8174C18.5727 26.8172 18.7907 26.8172 19.0087 26.8173C19.2744 26.8174 19.5402 26.8172 19.8059 26.8166C19.9414 26.8163 20.0769 26.8162 20.2125 26.8164C20.3595 26.8165 20.5065 26.8161 20.6535 26.8156C20.6962 26.8158 20.7388 26.8159 20.7828 26.8161C21.0675 26.8145 21.3128 26.8035 21.5568 26.6423C21.7521 26.4379 21.793 26.2461 21.7932 25.9693C21.7934 25.9412 21.7935 25.9131 21.7937 25.8841C21.7942 25.7901 21.7938 25.6961 21.7935 25.6021C21.7936 25.534 21.7938 25.4658 21.7941 25.3977C21.7947 25.2105 21.7945 25.0234 21.7942 24.8362C21.794 24.6343 21.7945 24.4325 21.7949 24.2306C21.7956 23.8351 21.7956 23.4397 21.7954 23.0442C21.7953 22.7229 21.7953 22.4015 21.7955 22.0801C21.7956 22.0344 21.7956 21.9887 21.7956 21.9416C21.7957 21.8487 21.7957 21.7558 21.7958 21.6629C21.7963 20.7917 21.7961 19.9205 21.7958 19.0493C21.7954 18.2521 21.7959 17.4548 21.7967 16.6576C21.7977 15.8392 21.7981 15.0208 21.7978 14.2024C21.7978 13.7428 21.7977 13.2833 21.7984 12.8237C21.799 12.4325 21.799 12.0414 21.7984 11.6502C21.798 11.4506 21.798 11.251 21.7985 11.0514C21.7991 10.8686 21.799 10.6859 21.7982 10.5032C21.798 10.4371 21.7982 10.371 21.7985 10.3049C21.8047 9.77733 21.8047 9.77733 21.5349 9.33536C21.303 9.19832 21.0558 9.18264 20.7931 9.18474C20.7622 9.18468 20.7312 9.18461 20.6993 9.18454C20.5963 9.18441 20.4934 9.18484 20.3905 9.18527C20.3163 9.18529 20.2422 9.18528 20.1681 9.18523C19.9674 9.18521 19.7668 9.18567 19.5661 9.18621C19.3562 9.1867 19.1463 9.18675 18.9364 9.18684C18.5392 9.18708 18.142 9.18772 17.7447 9.1885C17.2924 9.18937 16.8401 9.1898 16.3877 9.19019C15.4575 9.19101 14.5272 9.19238 13.597 9.19411ZM12.2362 9.57605C12.1997 9.61236 12.1997 9.61236 12.1625 9.6494C12.1357 9.6763 12.1088 9.7032 12.0812 9.73091C12.0531 9.75897 12.025 9.78703 11.996 9.81594C11.9025 9.90927 11.8092 10.0027 11.7158 10.0962C11.6513 10.1608 11.5867 10.2253 11.5221 10.2899C11.3865 10.4254 11.251 10.561 11.1156 10.6966C10.9415 10.8709 10.7673 11.045 10.593 11.2191C10.4595 11.3525 10.7673 11.045 10.593 11.2191C10.4595 11.3525 10.3262 11.4859 10.1928 11.6193C10.1286 11.6836 10.0643 11.7478 10 11.812C9.91038 11.9016 9.82085 11.9913 9.73135 12.081C9.70445 12.1079 9.67755 12.1347 9.64984 12.1623C9.62564 12.1866 9.60144 12.2109 9.5765 12.236C9.55529 12.2572 9.53408 12.2784 9.51223 12.3003C9.46297 12.3438 9.46297 12.3438 9.46732 12.3891C9.77821 12.3918 10.0891 12.3939 10.4 12.3952C10.5444 12.3958 10.6888 12.3966 10.8331 12.3979C10.9726 12.3992 11.112 12.3999 11.2515 12.4002C11.3046 12.4004 11.3576 12.4008 11.4107 12.4015C11.4853 12.4023 11.5599 12.4024 11.6345 12.4024C11.6769 12.4026 11.7193 12.4029 11.763 12.4032C11.9665 12.3793 12.1171 12.2938 12.2456 12.1358C12.2647 12.1129 12.2838 12.09 12.3036 12.0664C12.3982 11.9307 12.394 11.8075 12.3937 11.6476C12.3937 11.5992 12.3937 11.5508 12.3937 11.501C12.3935 11.4483 12.3933 11.3955 12.393 11.3427C12.393 11.2887 12.3929 11.2347 12.3929 11.1807C12.3927 11.0387 12.3923 10.8967 12.3919 10.7547C12.3915 10.6098 12.3913 10.4648 12.3911 10.3199C12.3907 10.0355 12.3901 9.75119 12.3892 9.46686C12.3202 9.46686 12.2829 9.52933 12.2362 9.57605Z",fill:"white"}),(0,Co.jsx)("path",{d:"M27.1556 8.28576C27.5868 8.57213 27.8344 8.97226 27.9755 9.46531C28.0007 9.65554 28.0016 9.84247 27.9997 10.0342C27.9999 10.0898 28.0002 10.1455 28.0005 10.2011C28.0011 10.3526 28.0006 10.5041 27.9998 10.6556C27.9992 10.8196 27.9998 10.9835 28.0001 11.1475C28.0007 11.4683 28.0002 11.7891 27.9994 12.1099C27.9985 12.4844 27.9985 12.8589 27.9986 13.2335C27.9988 13.9026 27.998 14.5718 27.9966 15.241C27.9954 15.8883 27.9948 16.5355 27.995 17.1828C27.9953 17.8892 27.9952 18.5955 27.9944 19.3019C27.9944 19.3394 27.9944 19.3769 27.9943 19.4156C27.9942 19.4908 27.9942 19.5661 27.9941 19.6414C27.9938 19.9015 27.9938 20.1617 27.9938 20.4218C27.9939 20.7398 27.9935 21.0579 27.9926 21.376C27.9921 21.5378 27.9918 21.6996 27.9921 21.8614C27.9932 22.7816 27.9513 23.6901 27.7564 24.5928C27.7465 24.6389 27.7367 24.6851 27.7266 24.7327C27.5327 25.6104 27.2563 26.4534 26.8847 27.2715C26.8726 27.2985 26.8604 27.3256 26.848 27.3534C26.746 27.5787 26.6533 27.7793 26.4561 27.9339C26.3399 27.9726 26.254 27.9818 26.1323 27.985C26.0963 27.9865 26.0603 27.9879 26.0232 27.9894C25.8707 27.9669 25.7946 27.9163 25.6769 27.817C25.6132 27.7262 25.5671 27.6304 25.5211 27.5296C25.5093 27.5052 25.4974 27.4807 25.4852 27.4555C25.4438 27.3688 25.4044 27.2814 25.3653 27.1936C25.3474 27.1536 25.3295 27.1136 25.311 27.0724C25.1619 26.7325 25.0342 26.3889 24.9172 26.0369C24.908 26.0092 24.8988 25.9816 24.8893 25.9531C24.7102 25.4132 24.5746 24.8695 24.4692 24.3103C24.4628 24.2778 24.4564 24.2452 24.4498 24.2117C24.2604 23.2362 24.2625 22.2313 24.2642 21.2413C24.2644 21.0871 24.2641 20.9329 24.2639 20.7787C24.2636 20.4786 24.2636 20.1785 24.2639 19.8783C24.2641 19.6343 24.2641 19.3903 24.264 19.1463C24.264 19.1114 24.264 19.0764 24.264 19.0403C24.2639 18.9693 24.2639 18.8982 24.2639 18.8271C24.2637 18.1643 24.2639 17.5015 24.2643 16.8386C24.2647 16.2708 24.2646 15.703 24.2643 15.1352C24.2638 14.4734 24.2637 13.8115 24.2639 13.1497C24.2639 13.0791 24.264 13.0085 24.264 12.9379C24.264 12.9032 24.264 12.8685 24.264 12.8327C24.2641 12.5889 24.264 12.345 24.2638 12.1012C24.2636 11.8043 24.2636 11.5074 24.2641 11.2105C24.2643 11.0593 24.2643 10.908 24.2641 10.7568C24.2638 10.6181 24.264 10.4795 24.2644 10.3408C24.2645 10.2674 24.2643 10.194 24.264 10.1206C24.267 9.46822 24.4241 8.92171 24.8978 8.45227C25.5567 7.90535 26.4277 7.86018 27.1556 8.28576ZM25.5844 9.50428C25.4782 9.70041 25.4768 9.87022 25.4783 10.0905C25.4784 10.1206 25.4785 10.1506 25.4785 10.1816C25.4787 10.2773 25.4792 10.3729 25.4797 10.4686C25.4799 10.5336 25.4801 10.5986 25.4802 10.6636C25.4806 10.8226 25.4814 10.9817 25.4821 11.1407C25.9193 11.1407 26.3564 11.1407 26.8068 11.1407C26.8092 10.9358 26.8116 10.7309 26.8141 10.5198C26.8151 10.4558 26.8162 10.3919 26.8173 10.326C26.823 9.82495 26.823 9.82495 26.5949 9.38982C26.4125 9.24295 26.28 9.2139 26.0484 9.21936C25.8389 9.24518 25.7159 9.33821 25.5844 9.50428ZM25.4821 12.3486C25.4821 15.4602 25.4821 18.5718 25.4821 21.7777C25.9193 21.7777 26.3564 21.7777 26.8068 21.7777C26.8068 18.6661 26.8068 15.5545 26.8068 12.3486C26.3696 12.3486 25.9325 12.3486 25.4821 12.3486ZM25.5211 22.9855C25.6252 23.9552 25.82 24.859 26.1055 25.7909C26.2013 25.7542 26.2013 25.7542 26.2353 25.6078C26.2549 25.5431 26.2758 25.4783 26.293 25.4134C26.3032 25.3787 26.3134 25.3439 26.3239 25.308C26.4766 24.7772 26.5982 24.2401 26.6826 23.6942C26.6874 23.6633 26.6922 23.6324 26.6972 23.6005C26.7036 23.5561 26.7036 23.5561 26.7101 23.5108C26.7138 23.4854 26.7174 23.4601 26.7212 23.434C26.7328 23.2849 26.7288 23.135 26.7288 22.9855C26.3303 22.9855 25.9317 22.9855 25.5211 22.9855Z",fill:"white"}),(0,Co.jsx)("path",{d:"M11.883 20.5263C11.9151 20.5261 11.9472 20.526 11.9802 20.5258C12.0881 20.5254 12.1959 20.5253 12.3038 20.5251C12.3809 20.5249 12.4581 20.5246 12.5353 20.5243C12.7452 20.5237 12.9551 20.5233 13.1651 20.5229C13.2962 20.5227 13.4273 20.5225 13.5584 20.5223C13.9684 20.5215 14.3785 20.5210 14.7885 20.5206C15.2621 20.5203 15.7357 20.5192 16.2093 20.5177C16.5753 20.5165 16.9412 20.5159 17.3071 20.5158C17.5257 20.5157 17.7443 20.5153 17.9629 20.5143C18.1686 20.5134 18.3742 20.5133 18.5799 20.5137C18.6553 20.5137 18.7308 20.5134 18.8063 20.5129C18.9094 20.5122 19.0124 20.5125 19.1154 20.5130C19.1453 20.5126 19.1751 20.5122 19.2059 20.5117C19.4554 20.5147 19.5909 20.6058 19.7654 20.7755C19.866 20.9395 19.89 21.0907 19.8542 21.2769C19.7897 21.4805 19.6941 21.5808 19.5194 21.7009C19.3762 21.7487 19.244 21.7456 19.0948 21.7456C19.0472 21.7458 19.0472 21.7458 18.9987 21.7460C18.8921 21.7465 18.7856 21.7466 18.679 21.7468C18.6027 21.7470 18.5264 21.7473 18.4501 21.7476C18.2426 21.7482 18.0351 21.7486 17.8276 21.7490C17.6979 21.7492 17.5683 21.7494 17.4386 21.7496C17.0331 21.7504 16.6275 21.7509 16.2219 21.7513C15.7536 21.7516 15.2854 21.7527 14.8172 21.7542C14.4553 21.7554 14.0934 21.7560 13.7316 21.7561C13.5154 21.7562 13.2993 21.7566 13.0831 21.7575C12.8797 21.7585 12.6763 21.7586 12.4729 21.7582C12.3984 21.7582 12.3238 21.7584 12.2492 21.7590C12.1472 21.7597 12.0453 21.7594 11.9432 21.7589C11.9139 21.7593 11.8846 21.7597 11.8544 21.7602C11.6429 21.7576 11.4743 21.7049 11.2991 21.5840C11.1553 21.4206 11.1198 21.2593 11.1308 21.0440C11.1575 20.8652 11.2265 20.7579 11.3575 20.6367C11.5291 20.5209 11.6835 20.5262 11.883 20.5263Z",fill:"white"}),(0,Co.jsx)("path",{d:"M11.9546 15.5C12.0014 15.4999 12.0014 15.4999 12.0493 15.4997C12.1541 15.4993 12.259 15.4993 12.3638 15.4992C12.439 15.4990 12.5141 15.4988 12.5892 15.4986C12.7934 15.4981 12.9977 15.4979 13.2019 15.4977C13.3295 15.4976 13.4571 15.4974 13.5847 15.4973C13.9839 15.4967 14.3832 15.4963 14.7825 15.4962C15.2433 15.4960 15.7041 15.4953 16.1649 15.4942C16.5212 15.4934 16.8774 15.4930 17.2337 15.4929C17.4464 15.4929 17.6592 15.4927 17.8719 15.4920C18.0721 15.4913 18.2723 15.4912 18.4724 15.4916C18.5458 15.4916 18.6192 15.4914 18.6926 15.4910C18.7929 15.4905 18.8933 15.4908 18.9937 15.4912C19.0225 15.4909 19.0514 15.4906 19.0811 15.4902C19.322 15.4925 19.5411 15.5401 19.7257 15.7052C19.839 15.9057 19.8792 16.0855 19.845 16.3140C19.772 16.4790 19.6786 16.5783 19.5297 16.6791C19.3952 16.7296 19.2627 16.7244 19.1209 16.7238C19.0887 16.7240 19.0564 16.7241 19.0232 16.7243C18.9149 16.7248 18.8066 16.7247 18.6984 16.7247C18.6208 16.7249 18.5433 16.7252 18.4657 16.7255C18.2549 16.7262 18.0441 16.7263 17.8333 16.7264C17.6573 16.7265 17.4814 16.7268 17.3055 16.7270C16.8905 16.7277 16.4755 16.7279 16.0605 16.7278C15.6322 16.7278 15.204 16.7286 14.7757 16.7298C14.4081 16.7308 14.0406 16.7312 13.673 16.7312C13.4534 16.7312 13.2339 16.7314 13.0143 16.7322C12.8078 16.7330 12.6013 16.7330 12.3947 16.7324C12.319 16.7323 12.2432 16.7325 12.1674 16.7330C12.0639 16.7336 11.9605 16.7332 11.857 16.7326C11.827 16.7330 11.797 16.7334 11.7661 16.7338C11.5648 16.7313 11.4515 16.6837 11.2959 16.5575C11.1498 16.3912 11.1263 16.2382 11.1291 16.0230C11.1518 15.8386 11.2621 15.7316 11.3933 15.6102C11.5714 15.4900 11.745 15.4998 11.9546 15.5Z",fill:"white"}),(0,Co.jsx)("path",{d:"M11.8578 18.0173C11.9065 18.0169 11.9065 18.0169 11.9562 18.0165C12.0648 18.0159 12.1734 18.0164 12.2819 18.0169C12.3599 18.0167 12.4378 18.0164 12.5158 18.0161C12.7273 18.0154 12.9389 18.0156 13.1504 18.0161C13.3718 18.0165 13.5932 18.0162 13.8146 18.0159C14.1864 18.0156 14.5581 18.0160 14.9299 18.0168C15.3597 18.0176 15.7895 18.0173 16.2194 18.0165C16.5884 18.0158 16.9575 18.0157 17.3265 18.0161C17.5469 18.0163 17.7673 18.0163 17.9877 18.0158C18.195 18.0154 18.4022 18.0157 18.6094 18.0166C18.6854 18.0168 18.7615 18.0167 18.8375 18.0164C18.9413 18.0160 19.0451 18.0165 19.1489 18.0173C19.194 18.0168 19.194 18.0168 19.2401 18.0162C19.4415 18.0191 19.5556 18.0660 19.7109 18.1929C19.8271 18.3412 19.8605 18.4729 19.8668 18.6605C19.8331 18.8379 19.7855 18.9726 19.6622 19.1061C19.4394 19.2328 19.217 19.2564 18.9650 19.2551C18.9342 19.2552 18.9033 19.2554 18.8715 19.2555C18.7687 19.2559 18.6660 19.2558 18.5632 19.2556C18.4892 19.2558 18.4153 19.2560 18.3414 19.2562C18.1409 19.2568 17.9405 19.2568 17.7401 19.2567C17.5726 19.2566 17.4051 19.2568 17.2376 19.2570C16.8424 19.2574 16.4472 19.2575 16.0519 19.2572C15.6446 19.2570 15.2372 19.2575 14.8299 19.2583C14.4798 19.2590 14.1297 19.2592 13.7796 19.2591C13.5707 19.2590 13.3617 19.2591 13.1528 19.2597C12.9562 19.2602 12.7597 19.2601 12.5632 19.2596C12.4912 19.2595 12.4192 19.2596 12.3473 19.2599C11.5223 19.2633 11.5223 19.2633 11.3116 19.0715C11.1516 18.8881 11.1261 18.7616 11.1291 18.5256C11.1504 18.3309 11.2512 18.2291 11.3979 18.1098C11.5556 18.0227 11.6825 18.0153 11.8578 18.0173Z",fill:"white"}),(0,Co.jsx)("path",{d:"M12.0061 23.0051C12.0448 23.0048 12.0835 23.0046 12.1233 23.0043C12.2504 23.0036 12.3775 23.0040 12.5046 23.0046C12.5933 23.0045 12.6821 23.0043 12.7709 23.0041C12.9566 23.0039 13.1424 23.0042 13.3281 23.0050C13.5658 23.0058 13.8034 23.0053 14.0410 23.0044C14.2242 23.0038 14.4075 23.0040 14.5907 23.0044C14.6783 23.0045 14.7659 23.0044 14.8535 23.0040C14.9761 23.0036 15.0987 23.0042 15.2213 23.0051C15.2572 23.0048 15.2931 23.0045 15.3301 23.0042C15.5595 23.0071 15.7424 23.0458 15.9317 23.1811C16.0753 23.3450 16.1111 23.5056 16.1001 23.7211C16.0733 23.9000 16.0043 24.0073 15.8733 24.1284C15.7430 24.2164 15.6451 24.2380 15.4915 24.2389C15.4573 24.2391 15.4231 24.2394 15.3879 24.2397C15.3505 24.2398 15.3131 24.2399 15.2746 24.2400C15.2351 24.2403 15.1956 24.2405 15.1550 24.2408C15.0241 24.2416 14.8932 24.2420 14.7624 24.2424C14.7177 24.2426 14.6730 24.2427 14.6270 24.2429C14.3905 24.2437 14.1540 24.2443 13.9175 24.2446C13.6732 24.2451 13.4290 24.2464 13.1848 24.2480C12.9969 24.2490 12.8091 24.2493 12.6213 24.2494C12.5312 24.2496 12.4412 24.2501 12.3512 24.2508C12.2251 24.2518 12.0990 24.2517 11.9730 24.2514C11.9359 24.2519 11.8988 24.2524 11.8606 24.2530C11.6256 24.2511 11.4884 24.2137 11.2956 24.0773C11.1481 23.9150 11.1255 23.7580 11.1293 23.5453C11.1466 23.3944 11.1962 23.2947 11.2956 23.1811C11.5199 23.0208 11.7378 23.0027 12.0061 23.0051Z",fill:"white"})]})}]},transformations:{title:"\uc774\ub807\uac8c \ubc14\ub014 \uc218 \uc788\uc5b4\uc694!",description:"\ud328\ud134\uc744 \ubc1c\uacac\ud558\ub294 \uac83\ub9cc\uc73c\ub85c\ub3c4 \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc5b4\uc694. \uac01 \ud56d\ubaa9\uc744 \ub20c\ub7ec \ubcc0\ud654\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694.",items:[{id:1,title:"\uac08\ub4f1 \uc0c1\ud669\uc5d0\uc11c\uc758 \uacb0\uc815",color:"#F44336",content:"\uc678\ubd80\uc758 \uc555\ubc15\uc5d0 \ubabb \uc774\uaca8 \ub0b4\ub9b0 \uacb0\uc815 \ub300\uc2e0, \ub098\uc758 \uac00\uce58\uad00\uacfc \uae30\uc900\uc744 \uba3c\uc800 \uace0\ub824\ud558\uac8c \ub429\ub2c8\ub2e4. \uac70\uc808\uc774 \ud544\uc694\ud55c \uc21c\uac04\uc5d0\ub294 \ub2e8\ud638\ud558\uac8c \uc758\uc0ac\ub97c \ud45c\ud604\ud560 \uc218 \uc788\ub294 \uc6a9\uae30\uac00 \uc0dd\uae41\ub2c8\ub2e4."},{id:2,title:"\uc77c\uc744 \ucc98\ub9ac\ud558\ub294 \ubc29\uc2dd",color:"#FF9800",content:"\ub0a8\ub4e4\uc758 \uc18d\ub3c4\uc5d0 \ub9de\ucd94\ub290\ub77c \uae09\uae09\ud574\ud558\uae30\ubcf4\ub2e4, \ub098\ub9cc\uc758 \ud398\uc774\uc2a4\ub97c \uc720\uc9c0\ud558\uba70 \ud575\uc2ec\uc801\uc778 \uc5c5\ubb34\uc5d0 \uc9d1\uc911\ud558\uac8c \ub429\ub2c8\ub2e4. \ubd88\ud544\uc694\ud55c \uc8fc\ubcc0 \uc0c1\ud669\uc5d0 \uc5d0\ub108\uc9c0\ub97c \ube8f\uae30\uc9c0 \uc54a\uac8c \ub429\ub2c8\ub2e4."}]}};return(0,Co.jsxs)(ma.Container,{children:[(0,Co.jsxs)(ma.MetaRow,{children:[(0,Co.jsx)(ma.AuthorInfo,{children:(0,Co.jsx)(ma.AuthorName,{children:"\ud544\uae30\ub9c8\uc2a4\ud130"})}),(0,Co.jsxs)(ma.LikeButton,{children:[(0,Co.jsx)(ma.HeartIcon,{children:(0,Co.jsx)("svg",{width:"18",height:"16",viewBox:"0 0 25 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M7.19401 0.777345C3.65026 0.777345 0.777344 3.65026 0.777344 7.19401C0.777344 13.6107 8.36068 19.444 12.444 20.8008C16.5273 19.444 24.1107 13.6107 24.1107 7.19401C24.1107 3.65026 21.2378 0.777345 17.694 0.777345C15.524 0.777345 13.6048 1.85476 12.444 3.50384C11.8522 2.66115 11.0661 1.97342 10.1523 1.49883C9.23846 1.02424 8.22374 0.776763 7.19401 0.777345Z",stroke:"#FF4B4B",strokeWidth:"1.55556",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,Co.jsx)("span",{children:"24"})]})]}),(0,Co.jsxs)(ma.SummaryHeader,{children:[(0,Co.jsx)(ma.Badge,{children:o.badge}),(0,Co.jsx)(ma.MainTitle,{children:o.title}),(0,Co.jsx)(ma.Description,{children:o.description})]}),(0,Co.jsxs)(ma.Section,{children:[(0,Co.jsx)(ma.SectionTitle,{children:o.attempts.title}),(0,Co.jsx)(ma.SectionDesc,{children:o.attempts.description}),(0,Co.jsx)(ma.Grid,{children:o.attempts.items.map(n=>{const r=e.includes(n.id);return(0,Co.jsxs)(ma.ActionCard,{$isOpen:r,children:[(0,Co.jsxs)(ma.CardHeader,{onClick:()=>{return e=n.id,void t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);var e},children:[(0,Co.jsx)(ma.IconCircle,{color:n.color,children:n.icon}),(0,Co.jsx)(ma.CardTitle,{children:n.title}),(0,Co.jsx)(ma.Chevron,{$isOpen:r})]}),r&&(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(ma.Divider,{}),(0,Co.jsx)(ma.CardContent,{children:n.content})]})]},n.id)})})]}),(0,Co.jsxs)(ma.Section,{children:[(0,Co.jsx)(ma.SectionTitle,{children:o.transformations.title}),(0,Co.jsx)(ma.SectionDesc,{children:o.transformations.description}),(0,Co.jsx)(ma.Grid,{children:o.transformations.items.map(e=>{const t=n.includes(e.id);return(0,Co.jsxs)(ma.ActionCard,{$isOpen:t,children:[(0,Co.jsxs)(ma.CardHeader,{onClick:()=>{return t=e.id,void i(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]);var t},children:[(0,Co.jsx)(ma.NumberIcon,{color:e.color,children:e.id}),(0,Co.jsx)(ma.CardTitle,{children:e.title}),(0,Co.jsx)(ma.Chevron,{$isOpen:t})]}),t&&(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(ma.Divider,{}),(0,Co.jsx)(ma.CardContent,{children:e.content})]})]},e.id)})})]}),(0,Co.jsx)(ma.BottomLinkWrapper,{children:(0,Co.jsxs)(ma.BottomLink,{href:"#",children:["\ud504\ub85c\uc81d\ud2b8 \uc791\uc131\ud558\ub7ec \uac00\uae30",(0,Co.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M21.9795 12.5L3.22949 12.5M15.7295 18.75L21.9795 12.5L15.7295 6.25",stroke:"#A6A6A6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})},Ca=en`
  display: flex;
  justify-content: center;
  align-items: center;
`,ba=en`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`,va=en`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,ya=en`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`,wa=(en`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`,en`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`),Ea=(en`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`,en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h1}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h1}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`),ja=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h1}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h1}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Sa=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h1}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h1}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,ka=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h2}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,Aa=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h2}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Ta=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h2}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,La=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h3}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,Fa=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h3}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Ia=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h3}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,Oa=(en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3_2}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h3_2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3_2}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h3_2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3_2}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h3_2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h4}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h4}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`),Ra=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h4}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h4}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Na=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h4}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h4}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,Pa=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h5}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,za=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h5}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,$a=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h5}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,Da=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h6}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,Ba=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h6}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Ma=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h6}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,Ha=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h7}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,Ga=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h7}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Wa=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h7}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,Ua=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,_a=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Za=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,Ya=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,Qa=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Va=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,qa=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h10}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,Ja=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h10}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Xa=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h10}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,Ka=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h11}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,el=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h11}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,tl=en`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h11}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,nl={},rl={h1Regular:Sa,h2Regular:Ta,h3Regular:Ia,h4Regular:Na,h5Regular:$a,h6Regular:Ma,h7Regular:Wa,h8Regular:Za,h9Regular:Va,h10Regular:Xa,h11Regular:tl,h1Bold:ja,h2Bold:Aa,h3Bold:Fa,h4Bold:Ra,h5Bold:za,h6Bold:Ba,h7Bold:Ga,h8Bold:_a,h9Bold:Qa,h10Bold:Ja,h11Bold:el,h1Extrabold:Ea,h2Extrabold:ka,h3Extrabold:La,h4Extrabold:Oa,h5Extrabold:Pa,h6Extrabold:Da,h7Extrabold:Ha,h8Extrabold:Ua,h9Extrabold:Ya,h10Extrabold:qa,h11Extrabold:Ka,"h7-regular":en`
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.03em;
  `,"h8-regular":en`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.03em;
  `,"h9-regular":en`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.03em;
  `,"h10-regular":en`
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.03em;
  `,"h2-bold":en`
    font-size: 60px;
    font-weight: 700;
    line-height: 78px;
    letter-spacing: -0.03em;
  `,"h4-bold":en`
    font-size: 32px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: -0.03em;
  `,"h6-bold":en`
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: -0.03em;
  `,"h7-bold":en`
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.03em;
  `,"h8-bold":en`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.03em;
  `,"h9-bold":en`
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.03em;
  `,"h11-bold":en`
    font-size: 10px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: -0.03em;
  `,"h7-exBold1":en`
    font-size: 80px;
    font-weight: 800;
    line-height: 98px;
    letter-spacing: -0.03em;
  `,"h7-exBold7":en`
    font-size: 20px;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: -0.03em;
  `,"h8-exBold8":en`
    font-size: 16px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: -0.03em;
  `},il={"faillog-red":"#F53102","faillog-black":"#333333",faillog_blue:"#027DF0",faillog_green:"#00B53F",faillog_purple:"#AB47FF",faillog_white:"#FFFFFF",faillog_light_blue:"#DBEAFE",faillog_light_green:"#D1FFE1",faillog_light_purple:"#F3E8FF",faillog_light_red:"#FFE4E6",faillog_gray1:"#F2F2F2",faillog_gray2:"#E6E6E6",faillog_gray4:"#CCCCCC",faillog_gray8:"#999999",faillog_gray9:"#8D8D8D",faillog_gray10:"#555555","faillog-sector-gray":"#F8F9FA"},ol=en`
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
  `;nl.Span=rn.span`
  ${e=>{let{size:t}=e;return rl[t]}}
  color: ${e=>{let{color:t}=e;return il[t]?il[t]:"#333333"}};
  display: ${e=>{let{display:t}=e;return t||"inline"}};
  /* overflow: ${e=>{let{isvisible:t}=e;return t?"visible":"hidden"}}; */
  overflow: visible;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  /* margin-top: ${e=>{let{marginTop:t}=e;return t}}; */
`,nl.Span2=rn.span`
  ${e=>{let{size:t}=e;return rl[t]}}
  color: ${e=>{let{color:t}=e;return il[t]?il[t]:"#333333"}};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${e=>{let{lineclamp:t}=e;return t||2}};
  overflow: ${e=>{let{isvisible:t}=e;return t?"visible":"hidden"}};
  text-overflow: ellipsis;
`,nl.Img=rn.img`
  width: ${e=>{let{width:t}=e;return t||"50px"}};
  height: ${e=>{let{height:t}=e;return t||"50px"}};
`,nl.Wrapper=rn.div`
  ${ba}

  margin-top: ${e=>{let{margintop:t}=e;return t}};
`;const al=nl,ll={};ll.WriteButton=rn.button`
  border-radius: 10px;
  width: 200px;
  height: 60px;
  background-color: ${il.faillog_purple};
`,ll.MainHeaderWrap=rn.div`
  margin-top: 65px;
  width: 100dvw;
  ${ba}  
  /* background-color: red; */
`,ll.MainHeader=rn.div`
  width: 1320px;
  /* background-color: blue; */

  display: flex;
  justify-content: space-between;
`,ll.MainHeaderLeftDiv=rn.div`
  /* background-color: yellow; */
`,ll.MainHeaderLeftTextTopDiv=rn.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,ll.headerImg=rn.img`
  width: 60px;
  height: 60px;
`,ll.MainHeaderLeftTextBottomDiv=rn.div`
  margin-top: 13px;
`,ll.MainHeaderRightButtonDiv=rn.div`
  /* background-color: green; */
  display: flex;
  align-items: center;
`;const sl=ll;const cl=n.p+"static/media/internet.b6ec54e69a016888c4bd39fea1a08070.svg",dl=()=>{const e=sl;return(0,Co.jsx)("div",{children:(0,Co.jsx)(e.MainHeaderWrap,{children:(0,Co.jsxs)(e.MainHeader,{children:[(0,Co.jsxs)(e.MainHeaderLeftDiv,{children:[(0,Co.jsxs)(e.MainHeaderLeftTextTopDiv,{children:[(0,Co.jsx)(e.headerImg,{src:cl}),(0,Co.jsx)(al.Span,{size:"h2Bold",color:"faillog-black",children:"Community"})]}),(0,Co.jsx)(e.MainHeaderLeftTextBottomDiv,{children:(0,Co.jsx)(al.Span,{size:"h8Bold",color:"faillog_gray9",display:"block",children:"\uc2e4\ud328\ub97c \uc228\uae30\uc9c0 \ub9c8\uc138\uc694. \uc6b0\ub9ac\ub294 \uc11c\ub85c\uc758 \uc624\ub2f5\ub178\ud2b8\uc5d0\uc11c \uac00\uc7a5 \ud06c\uac8c \ubc30\uc6c1\ub2c8\ub2e4."})})]}),(0,Co.jsx)(e.MainHeaderRightButtonDiv,{children:(0,Co.jsx)(e.WriteButton,{children:(0,Co.jsx)(al.Span,{size:"h7Bold",color:"faillog_white",children:"\uc0c8 \uae00 \uc791\uc131\ud558\uae30"})})})]})})})},ul={};ul.BestPostWrap=rn.div`
  margin-top: 95px;
  margin-bottom: 132px;
  width: 100dvw;
  ${ba}
`,ul.BestPost=rn.div`
  position: relative;
  width: 1320px;
  height: 608px;
  border: 1px, solid, ${il.faillog_light_purple};
  border-radius: 10px;
  overflow: hidden;
  ${ya}
  ${ol}

  transform: scale(1);
`,ul.BestPostLeftLine=rn.div`
  position: absolute;
  left: 0px;
  bottom: 93px;
  width: 6px;
  height: 420px;
  border-radius: 100px;
  background-color: ${il.faillog_purple};
`,ul.BestPostMainWrapDiv=rn.div`
  width: 788px;
  height: 606px;
  /* background-color: yellow; */
`,ul.BestPostImgWrapDiv=rn.div`
  width: 530px;
  height: 606px;
  background-color: ${il.faillog_gray1};
  ${ba}
`,ul.BestPostMainDiv=rn.div`
  margin-left: 110px;
  margin-top: 91px;
  width: 536px;
  height: 420px;
  /* background-color: red; */

  display: flex;
  flex-direction: column;
  gap: 30px;
`,ul.BestPostMainHeader=rn.div`
  height: 40px;
  ${ya}
`,ul.BestPostMainHeaderTitle=rn.div`
  width: 256px;
  height: 40px;
  background-color: ${il.faillog_light_purple};
  ${ba}
  border-radius: 15px;
`,ul.BestPostMainTitle=rn.div`
  height: 92px;
  /* background-color: green; */
`,ul.BestPostMainContent=rn.div`
  height: 60px;
  /* background-color: green; */
`,ul.BestPostMainInfo=rn.div`
  height: 22px;
  /* background-color: green; */
`,ul.UserInfo=rn.div`
  display: flex;
  align-items: center;
  gap: 9px;
`,ul.PostInfo=rn.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`,ul.infoElement=rn.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,ul.UserImg=rn.img`
  width: 20px;
  height: 20px;
`,ul.BestPostMainButton=rn.div`
  height: 44px;
  /* background-color: green; */
`,ul.GoPostInfoButton=rn.button`
  width: 172px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid ${il.faillog_purple};

  display: flex;
  ${ba}
  gap: 8px;
`,ul.BestPostMainHr=rn.hr`
  width: 536px;
  background-color: ${il["faillog-black"]};
`;const hl=ul,pl="data:image/png;base64,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",fl=n.p+"static/media/study.f45019f8916a5a510c39.jpg";const gl=n.p+"static/media/eye.2b57ba042b99c8a68e212257da470897.svg";const ml=n.p+"static/media/like.fe9a6239f2bb852130f420288a1d61ad.svg";const xl=n.p+"static/media/post.d238f942547292f5e1eeae193ae6375d.svg";const Cl=n.p+"static/media/like-fill2.2bdcccd0ebcb131a49d60f8e5d389443.svg",bl=e=>{let{id:t,title:n,content:r,date:i,thumbnail:o,profile:a,author:l,views:s,likes:c,isLike:d,comments:u}=e;const h=vi(),p=hl;return(0,Co.jsx)("div",{children:(0,Co.jsx)(p.BestPostWrap,{children:(0,Co.jsxs)(p.BestPost,{children:[(0,Co.jsx)(p.BestPostLeftLine,{}),(0,Co.jsx)(p.BestPostMainWrapDiv,{children:(0,Co.jsxs)(p.BestPostMainDiv,{children:[(0,Co.jsxs)(p.BestPostMainHeader,{children:[(0,Co.jsx)(p.BestPostMainHeaderTitle,{children:(0,Co.jsx)(al.Span,{size:"h8Bold",color:"faillog_purple",children:"\uc774\ubc88\ub2ec \uc88b\uc544\uc694 \ucd5c\ub2e4 \uac8c\uc2dc\uae00"})}),(0,Co.jsx)(al.Span,{size:"h9Regular",color:"faillog_gray9",children:i})]}),(0,Co.jsx)(p.BestPostMainTitle,{children:(0,Co.jsxs)(al.Span2,{size:"h4Bold",color:"faillog-black",lineclamp:2,children:[n,(0,Co.jsx)("br",{}),"\uacf5\ubd80 \ud658\uacbd\ubd80\ud130 \ubc14\uafb8\uace0 \ub098\uc11c\ub2c8 \ubcc0\ud654\uac00\uc0dd\uae34 \uc370"]})}),(0,Co.jsx)(p.BestPostMainContent,{children:(0,Co.jsx)(al.Span2,{size:"h7Bold",color:"faillog_gray9",lineclamp:2,children:r})}),(0,Co.jsx)(p.BestPostMainHr,{}),(0,Co.jsx)(p.BestPostMainInfo,{children:(0,Co.jsxs)(p.UserInfo,{children:[(0,Co.jsx)(p.UserImg,{src:a}),(0,Co.jsx)(al.Span,{size:"h9Regular",color:"faillog_black",children:l}),(0,Co.jsxs)(p.PostInfo,{children:[(0,Co.jsxs)(p.infoElement,{children:[(0,Co.jsx)("img",{src:gl,width:16,height:12}),(0,Co.jsx)(al.Span,{size:"h9Regular",color:"faillog_black",children:s})]}),(0,Co.jsxs)(p.infoElement,{children:[(0,Co.jsx)("img",{src:d?Cl:ml,width:16,height:16}),(0,Co.jsx)(al.Span,{size:"h9Regular",color:"faillog_black",children:c})]}),(0,Co.jsxs)(p.infoElement,{children:[(0,Co.jsx)("img",{src:xl,width:16,height:16}),(0,Co.jsx)(al.Span,{size:"h9Regular",color:"faillog_black",children:u})]})]})]})}),(0,Co.jsx)(p.BestPostMainButton,{children:(0,Co.jsxs)(p.GoPostInfoButton,{onClick:()=>h("detail/"+t),children:[(0,Co.jsx)(al.Span,{size:"h8ExBold8",color:"faillog_purple",children:"\uac8c\uc2dc\uae00 \uc0c1\uc138\ubcf4\uae30"}),(0,Co.jsx)(al.Span,{size:"h8ExBold8",color:"faillog_purple",children:"\u2192"})]})})]})}),(0,Co.jsx)(p.BestPostImgWrapDiv,{children:(0,Co.jsx)(al.Img,{width:"100%",height:"100%",src:o})})]})})})},vl={};vl.containerWrap=rn.div`
  height: 1172px;
  background-color: #F1F0F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`,vl.headerWrap=rn.div`
  padding-top: 118px;
  width: 100%;
  ${ba}
`,vl.header=rn.div`
  width: 1320px;
`,vl.headerTestOneDiv=rn.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,vl.headerTextTwoDiv=rn.div`
  margin-top: 13px;
`,vl.CarouselWrapper=rn.div`
  margin-top: 60px;
  width: 100dvw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${648}px;
  flex-shrink: 0;
`,vl.Track=rn.div`
  display: flex;
  align-items: center;
  gap: 20px;
  /* flex-shrink: 0; */
`,vl.CardOuter=rn.div`
  flex: 0 0 ${420}px;
  height: ${568}px;
  position: relative;
`,vl.Card=rn.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${ol}
`,vl.CardImageWrap=rn.div`
  width: 100%;
  height: 44%;
  background: ${il.faillog_gray4};
  flex-shrink: 0;

  ${ba}
`,vl.CardImage=rn.img`
  width: ${e=>{let{width:t}=e;return t}};
  height: ${e=>{let{height:t}=e;return t}};
  /* object-fit: cover; */
`,vl.CardBody=rn.div`
  flex: 1;
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
`,vl.CardMeta=rn.div`
  ${ya}
`,vl.CategoryBadge=rn.span`
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  color: ${il.faillog_purple};
  background-color: ${il.faillog_light_purple};
  padding: 5px 10px;
  border-radius: 100px;
`,vl.CategoryWrap=rn.div`
  width: 52px;
  height: 20px;
  border-radius: 15px;

  background-color: ${e=>{let{bgColor:t}=e;return il[t]}};
  ${ba}
`,vl.CardTitle=rn.div`
  flex-shrink: 0;
`,vl.CardContent=rn.div`
  flex: 1;
  overflow: hidden;
`,vl.CardDivider=rn.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${il.faillog_gray1};
  margin: 0;
`,vl.CardFooter=rn.div`
  ${ya}
  flex-shrink: 0;
`,vl.AuthorInfo=rn.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,vl.AuthorAvatar=rn.img`
  width: 20px;
  height: 20px;
  /* border-radius: 50%; */
  /* background-color: ${il.faillog_gray1};
  border: 1px solid #e0e0e0; */
`,vl.Stats=rn.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,vl.postInfo=rn.span`
  display: flex;
  align-items: center;
  gap: 5px;
`,vl.StatItem=rn.span`
  font-size: 12px;
  color: ${il.faillog_black};
  display: flex;
  align-items: center;
  gap: 3px;
`,vl.PaginationWrap=rn.div`
  margin-top: 36px;
  ${ba}
  gap: 15px;
`,vl.PageLine=rn.div`
  width: 396px;
  height: 2px;
  background: linear-gradient(to right, ${il["faillog-black"]} var(--rate), #E6E6E6 var(--rate));
`,vl.PageNav=rn.div`
  display: flex;
  align-items: center;
  gap: 9px;
`,vl.NavBtn=rn.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: ${il.faillog_gray9};
  padding: 4px 8px;
  line-height: 1;
  &:hover {
    color: ${il["faillog-black"]};
  }
`;const yl=vl;const wl=n.p+"static/media/trumpet.d9ef6daedb96d76d85bb289a0e282cd2.svg",El=e=>{const t={};switch(e){case 0:t.name="\uacf5\ubd80/\ucde8\uc5c5",t.textColor="faillog_blue",t.bgColor="faillog_light_blue";break;case 1:t.name="\uc0ac\uc5c5/\ucc3d\uc5c5",t.textColor="faillog_purple",t.bgColor="faillog_light_purple";break;case 2:t.name="\uc778\uac04\uad00\uacc4",t.textColor="faillog-red",t.bgColor="faillog_light_red";break;case 3:t.name="\uac74\uac15/\ub8e8\ud2f4",t.textColor="faillog_green",t.bgColor="faillog_light_green";break;case 4:t.name="\uae30\ud0c0",t.textColor="faillog-black",t.bgColor="faillog_gray2";break;default:t.name="\uc5c6\uc74c",t.textColor="faillog-black",t.bgColor="faillog_gray2"}return t},jl=e=>{let{posts:t}=e;const n=t.length,[i,o]=(0,r.useState)(0),a=(0,r.useRef)(!1),l=(0,r.useRef)(null),s=(0,r.useRef)([]),c=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=s.current[4];e&&(e.style.transition="none",e.style.flexBasis="480px",e.style.height="648px")},[]);const d=(0,r.useCallback)(e=>{if(a.current||!l.current)return;a.current=!0;const t=l.current,r="next"===e?5:3;s.current.forEach(e=>{e&&(e.style.transition="flex-basis 300ms ease, height 300ms ease")});const i=s.current[4];i&&(i.style.flexBasis="420px",i.style.height="568px");const c=s.current[r];c&&(c.style.flexBasis="480px",c.style.height="648px"),t.style.transition="transform 500ms ease",t.style.transform=`translateX(${"next"===e?-440:440}px)`,setTimeout(()=>{s.current.forEach(e=>{e&&(e.style.transition="none")}),t.style.transition="none",t.getBoundingClientRect(),s.current.forEach((e,t)=>{e&&(e.style.flexBasis=4===t?"480px":"420px",e.style.height=4===t?"648px":"568px")}),t.style.transform="translateX(0px)",o(t=>"next"===e?(t+1)%n:(t-1+n)%n),a.current=!1},500)},[]),u=e=>{clearInterval(c.current),d(e),c.current=setInterval(()=>d("next"),5e3)};return(0,r.useEffect)(()=>(c.current=setInterval(()=>d("next"),5e3),()=>clearInterval(c.current)),[d]),(0,Co.jsxs)(yl.containerWrap,{children:[(0,Co.jsx)(yl.headerWrap,{children:(0,Co.jsxs)(yl.header,{children:[(0,Co.jsxs)(yl.headerTestOneDiv,{children:[(0,Co.jsx)("img",{src:wl,width:80,height:80}),(0,Co.jsx)(al.Span,{size:"h2-bold",color:"faillog-black",children:"\uc2e4\uc2dc\uac04 \uc778\uae30\uae00"})]}),(0,Co.jsx)(yl.headerTextTwoDiv,{children:(0,Co.jsx)(al.Span,{size:"h8-bold",color:"faillog_gray9",children:"\ub9ce\uc774 \uacf5\uac10\ubc1b\uc740 \ubcf5\uae30 \uae00\uc744 \ud55c\ub208\uc5d0 \ud655\uc778\ud574\ubcf4\uc138\uc694."})})]})}),(0,Co.jsx)(yl.CarouselWrapper,{children:(0,Co.jsx)(yl.Track,{ref:l,children:Array.from({length:9},(e,r)=>{const o=t[((i+(r-4))%n+n)%n];const{name:a,textColor:l,bgColor:c}=El(o.category);return(0,Co.jsx)(yl.CardOuter,{ref:e=>{s.current[r]=e},children:(0,Co.jsxs)(yl.Card,{children:[(0,Co.jsx)(yl.CardImageWrap,{children:(0,Co.jsx)(yl.CardImage,{src:o.thumbnail,width:"100%",height:"100%"})}),(0,Co.jsxs)(yl.CardBody,{children:[(0,Co.jsxs)(yl.CardMeta,{children:[(0,Co.jsx)(yl.CategoryWrap,{bgColor:c,children:(0,Co.jsx)(al.Span,{color:l,size:"h11Bold",children:a})}),(0,Co.jsx)(al.Span,{size:"h10Regular",color:"faillog_gray9",children:o.date})]}),(0,Co.jsx)(yl.CardTitle,{children:(0,Co.jsx)(al.Span2,{size:"h6Bold",color:"faillog-black",lineclamp:2,children:o.title})}),(0,Co.jsx)(yl.CardContent,{children:(0,Co.jsx)(al.Span2,{size:"h9Bold",color:"faillog_gray9",lineclamp:3,children:o.content})}),(0,Co.jsx)(yl.CardDivider,{}),(0,Co.jsxs)(yl.CardFooter,{children:[(0,Co.jsxs)(yl.AuthorInfo,{children:[(0,Co.jsx)(yl.AuthorAvatar,{src:o.profile}),(0,Co.jsx)(al.Span,{size:"h10Regular",color:"faillog_gray9",children:o.author})]}),(0,Co.jsxs)(yl.Stats,{children:[(0,Co.jsxs)(yl.postInfo,{children:[(0,Co.jsx)("img",{src:gl,width:12,height:8}),(0,Co.jsx)(al.Span,{size:"h11Regular",color:"faillog-black",isvisible:!0,children:o.views})]}),(0,Co.jsxs)(yl.postInfo,{children:[(0,Co.jsx)("img",{src:ml,width:14,height:14}),(0,Co.jsx)(al.Span,{size:"h11Regular",color:"faillog-black",children:o.likes})]}),(0,Co.jsxs)(yl.postInfo,{children:[(0,Co.jsx)("img",{src:xl,width:14,height:14}),(0,Co.jsx)(al.Span,{size:"h11Regular",color:"faillog-black",children:o.comments})]})]})]})]})]})},r)})})}),(0,Co.jsxs)(yl.PaginationWrap,{children:[(0,Co.jsx)(yl.PageLine,{style:{"--rate":(i+1)/n*100+"%"}}),(0,Co.jsxs)(yl.PageNav,{children:[(0,Co.jsx)(yl.NavBtn,{onClick:()=>u("prev"),children:"\u2039"}),(0,Co.jsxs)(al.Span,{size:"h9Regular",color:"faillog_gray9",children:[i+1," / ",n]}),(0,Co.jsx)(yl.NavBtn,{onClick:()=>u("next"),children:"\u203a"})]})]})]})},Sl={};Sl.wrap=rn.div`
  width: 100dvw;
  /* background-color: ${il["faillog-sector-gray"]}; */
`,Sl.headerWrap=rn.div`
  padding-top: 93px;
  ${ba}
`,Sl.header=rn.div`
  width: 1320px;
`,Sl.headerTitle=rn.div`
  width: 1320px;
  padding: 0px 112px;
  ${ba}
  gap: 35px;
`,Sl.headerSub=rn.div`
  padding-top: 16px;
  width: 1320px;
  ${ba}
`,Sl.searchWrap=rn.div`
  padding-top: 31px;
  ${ba}
  gap: 16px;
`,Sl.search=rn.input`
  width: 300px;
  border: none;
`,Sl.categoryAndPostOrderWrap=rn.div`
  width: 100dvw;
  padding-top: 56px;
  ${ba}
`,Sl.categoryAndPostOrder=rn.div`
  width: 1320px;
  ${ya}
`;const kl=Sl;const Al=n.p+"static/media/community_header.4f8f5b243bc65b23d736d2988d178bd2.svg",Tl={};Tl.component=rn.div`
  display: flex;
  ${ba}
  gap: 16px;
`;const Ll=Tl,Fl={};Fl.component=rn.div`
  width: 958px;
  height: 62px;
background: linear-gradient(white, white) padding-box,
            linear-gradient(to right, ${il.faillog_blue}, ${il.faillog_purple}) border-box;
border: 1.78px solid transparent;
border-radius: 15px;

display: flex;
justify-content: space-between;
align-items: center;

padding-left: 26px;
padding-right: 23px;
`,Fl.contentLeft=rn.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Fl.image1=rn.img`
  width: 20px;
  height: 20px;
`,Fl.buttonImage=rn.img`
  width: 20px;
  height: 20px;
`,Fl.search=rn.input`
  width: 812px;
  height: 32px;
  border: none;
  ${rl["h7-regular"]}

    &:focus {
    outline: none;
  }
`,Fl.searchButton=rn.button`
  width: 32px;
  height: 32px;
  background: linear-gradient(to right, ${il.faillog_blue}, ${il.faillog_purple});
  border-radius: 999px;

  ${ba}
`;const Il=Fl;const Ol=n.p+"static/media/shine.46d7193404c9ed9b58862a741407d6c7.svg";const Rl=n.p+"static/media/arrow-up.a5b9918d158fedffca8198d894275aa0.svg",Nl=e=>{let{onSubmit:t}=e;const n=(0,r.useRef)([]);return(0,Co.jsx)("div",{children:(0,Co.jsxs)(Il.component,{children:[(0,Co.jsxs)(Il.contentLeft,{children:[(0,Co.jsx)(Il.image1,{src:Ol}),(0,Co.jsx)(Il.search,{maxLength:"100",placeholder:"\uc778\uae30\uc788\ub294 \uac8c\uc2dc\uae00\uc744 \uac80\uc0c9\ud574\ubcf4\uc138\uc694",ref:e=>{n.current[0]=e},onKeyDown:e=>{""!==e.target.value&&"Enter"===e.key&&(null===t||void 0===t||t(e.target.value),e.target.value="")}})]}),(0,Co.jsx)(Il.searchButton,{onClick:()=>{""!==n.current[0].value&&(null===t||void 0===t||t(n.current[0].value),n.current[0].value="")},children:(0,Co.jsx)(Il.buttonImage,{src:Rl})})]})})},Pl={};Pl.Wrapper=rn.div`
  position: relative;
  width: 200px;
  user-select: none;
`,Pl.Trigger=rn.div`
  width: 200px;
  height: 48px;
  padding: 0 11px 0px 26px;
  border: 1px solid #D9D9D9;
  border-radius: 15px;
  background: ${il.faillog_white};
  cursor: pointer;
  ${ya}
`,Pl.ChevronImg=rn.img`
  display: inline-block;
  transform: ${e=>{let{isOpen:t}=e;return t?"rotate(180deg)":"rotate(0deg)"}};
  transition: transform 200ms ease;
  flex-shrink: 0;
`,Pl.OptionBox=rn.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 200px;
  height: 240px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 999;
  border: 1px solid ${il.faillog_gray9};
  background-color: ${il.faillog_white};
`,Pl.OptionItem=rn.div`
  width: 100%;
  height: 48px;
  padding: 0 26px 0 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${e=>{let{$selected:t}=e;return t?il.faillog_light_purple:"transparent"}};
  border-top: ${e=>{let{$selected:t,$isfirst:n}=e;return t&&!n?`1px solid ${il.faillog_purple}`:"none"}};
  border-bottom: ${e=>{let{$selected:t}=e;return t?`1px solid ${il.faillog_purple}`:"none"}};

  &:hover {
    background-color: ${e=>{let{$selected:t}=e;return t?il.faillog_light_purple:il.faillog_gray1}};
  }
`;const zl=Pl;const $l=n.p+"static/media/down.9b822cb22e4535818323d406e8abfec7.svg",Dl=["\uc81c\ubaa9","\uc81c\ubaa9+\ub0b4\uc6a9","\ub0b4\uc6a9","\uc791\uc131\uc790","\ub313\uae00"],Bl=e=>{let{defaultValue:t="\uc81c\ubaa9",onChange:n}=e;const[i,o]=(0,r.useState)(!1),[a,l]=(0,r.useState)(t),s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,Co.jsxs)(zl.Wrapper,{ref:s,children:[(0,Co.jsxs)(zl.Trigger,{onClick:()=>o(e=>!e),children:[(0,Co.jsx)(al.Span,{size:"h8Regular",color:"faillog-black",children:a}),(0,Co.jsx)(zl.ChevronImg,{isOpen:i,src:$l})]}),i&&(0,Co.jsx)(zl.OptionBox,{children:Dl.map(e=>(0,Co.jsx)(zl.OptionItem,{$isfirst:"\uc81c\ubaa9"===e,$selected:e===a,onClick:()=>(e=>{l(e),o(!1),null===n||void 0===n||n(e)})(e),children:(0,Co.jsx)(al.Span,{size:"h8Regular",color:"faillog-black",children:e})},e))})]})},Ml=ho(po({order1:0,order2:0,category:0,content:"",page:1},e=>({setOrder1:t=>e(e=>({order1:t})),setOrder2:t=>e(e=>({order2:t})),setCategory:t=>e(e=>({category:t})),setContent:t=>e(e=>({content:t})),setPage:t=>e(e=>({page:t}))}))),Hl=Ml,Gl=()=>{const{setContent:e,setOrder1:t,setPage:n}=Hl();let r=0;return(0,Co.jsx)("div",{children:(0,Co.jsxs)(Ll.component,{children:[(0,Co.jsx)(Nl,{onSubmit:i=>{e(i),t(r),n(1)}}),(0,Co.jsx)(Bl,{onChange:e=>{switch(e){case"\uc81c\ubaa9":r=0;break;case"\uc81c\ubaa9+\ub0b4\uc6a9":r=1;break;case"\ub0b4\uc6a9":r=2;break;case"\uc791\uc131\uc790":r=3;break;case"\ub313\uae00":r=4}}})]})})},Wl={},Ul=en`
    background-color: ${il.faillog_purple};
    border: none;
`,_l=en`
    background-color: ${il.faillog_white};
    border: solid 1px ${il.faillog_gray4};
`;Wl.button=rn.button`
  width: 88px;
  height: 40px;
  border-radius: 10px;

  ${ba}

  ${e=>{let{selected:t}=e;return t?Ul:_l}}

`;const Zl=Wl,Yl=e=>{let{selected:t,content:n,onClick:r}=e;return(0,Co.jsx)("div",{children:(0,Co.jsx)(Zl.button,{selected:t,onClick:r,children:t?(0,Co.jsx)(al.Span,{size:"h8Bold",color:"faillog_white",children:n}):(0,Co.jsx)(al.Span,{size:"h8Bold",color:"faillog_gray10",children:n})})})},Ql={};Ql.container=rn.div`
  ${ba}
  gap: 24px;
`;const Vl=Ql,ql=()=>{const e=["\uc804\uccb4","\uacf5\ubd80/\ucde8\uc5c5","\uc0ac\uc5c5/\ucc3d\uc5c5","\uc778\uac04\uad00\uacc4","\uac74\uac15/\ub8e8\ud2f4","\uae30\ud0c0"],[t,n]=(0,r.useState)("\uc804\uccb4"),{setCategory:i,setPage:o}=Hl();return(0,Co.jsx)(Vl.container,{children:e.map(r=>(0,Co.jsx)(Yl,{content:r,selected:t===r,onClick:()=>{const t=e.indexOf(r);n(r),i(t),o(1)}},r))})},Jl={};Jl.Wrapper=rn.div`
  position: relative;
  width: 88px;
  user-select: none;
`,Jl.Trigger=rn.div`
  width: 88px;
  height: 40px;
  border: 1px solid #D9D9D9;
  border-radius: 15px;
  background: ${il.faillog_white};
  cursor: pointer;
  ${ba}
`,Jl.ChevronImg=rn.img`
  display: inline-block;
  transform: ${e=>{let{isOpen:t}=e;return t?"rotate(180deg)":"rotate(0deg)"}};
  transition: transform 200ms ease;
  flex-shrink: 0;
`,Jl.OptionBox=rn.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 88px;
  height: 100px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 999;
  border: 1px solid ${il.faillog_gray9};
  background-color: ${il.faillog_white};
`,Jl.OptionItem=rn.div`
  width: 100%;
  height: 33px;
  cursor: pointer;
  ${ba}

  &:hover {
    background-color: ${il.faillog_gray1};
  }
`;const Xl=Jl,Kl=["\ucd5c\uc2e0\uc21c","\uc88b\uc544\uc694 \uc21c","\uc870\ud68c \uc21c"],es=e=>{let{defaultValue:t="\ucd5c\uc2e0\uc21c",onChange:n}=e;const[i,o]=(0,r.useState)(!1),[a,l]=(0,r.useState)(t),s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,Co.jsxs)(Xl.Wrapper,{ref:s,children:[(0,Co.jsxs)(Xl.Trigger,{onClick:()=>o(e=>!e),children:[(0,Co.jsx)(al.Span,{size:"h8Regular",color:"faillog-black",children:a}),(0,Co.jsx)(Xl.ChevronImg,{isOpen:i,src:$l})]}),i&&(0,Co.jsx)(Xl.OptionBox,{children:Kl.map(e=>(0,Co.jsx)(Xl.OptionItem,{$isfirst:"\uc81c\ubaa9"===e,$selected:e===a,onClick:()=>{(e=>{e!==a?(l(e),o(!1),null===n||void 0===n||n(e)):o(!1)})(e)},children:(0,Co.jsx)(al.Span,{size:"h8Regular",color:e===a?"faillog_purple":"faillog-black",children:e})},e))})]})},ts=()=>{const{setOrder2:e,setPage:t}=Hl();return(0,Co.jsx)("div",{children:(0,Co.jsx)(es,{onChange:n=>{switch(n){case"\ucd5c\uc2e0\uc21c":e(0),t(1);break;case"\uc88b\uc544\uc694 \uc21c":e(1),t(1);break;case"\uc870\ud68c \uc21c":e(2),t(1)}}})})},ns=()=>(0,Co.jsx)("div",{children:(0,Co.jsxs)(kl.wrap,{children:[(0,Co.jsx)(kl.headerWrap,{children:(0,Co.jsxs)(kl.header,{children:[(0,Co.jsxs)(kl.headerTitle,{children:[(0,Co.jsx)(al.Span,{size:"h1Extrabold",color:"faillog-black",children:"FIND"}),(0,Co.jsx)("img",{src:Al,width:"216px",height:"144px"}),(0,Co.jsx)(al.Span,{size:"h1Extrabold",color:"faillog-black",children:"POST YOU WANT"})]}),(0,Co.jsx)(kl.headerSub,{children:(0,Co.jsx)(al.Span,{size:"h7Regular",color:"faillog_gray9",children:"\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc758 \uc2e4\ud328\uc640 \uacbd\ud5d8 \uc18d\uc5d0\uc11c \uc6d0\ud558\ub294 \uac8c\uc2dc\uae00\uc744 \uc27d\uace0 \ube60\ub974\uac8c \ucc3e\uc544\ubcf4\uc138\uc694."})})]})}),(0,Co.jsx)(kl.searchWrap,{children:(0,Co.jsx)(Gl,{})}),(0,Co.jsx)(kl.categoryAndPostOrderWrap,{children:(0,Co.jsxs)(kl.categoryAndPostOrder,{children:[(0,Co.jsx)(ql,{}),(0,Co.jsx)(ts,{})]})})]})}),rs={};rs.PostListAndAiRecommandPostWrapper=rn.div`
    width: 1320px;
    display: flex;
    gap: 24px;
`,rs.ListBgWrap=rn.div`
    width: 100dvw;
    background-color: ${il["faillog-sector-gray"]};
`;const is=rs,os=rn.div`
  width: 984px;
  padding: 27px
`,as=rn.div`
  display: flex;
  gap: 27px;
  align-items: flex-start;
`,ls=rn.img`
  width: 324px;
  height: 184px;
  /* object-fit: cover; */
  border-radius: 15px 0px 15px 0px

  /* flex-shrink: 0; */
`,ss=rn.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
  /* height: 184px; */
`,cs=rn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ds=rn.div`
  /* ${el}
  color: #ffffff; */
  background-color: ${e=>{let{bgcolor:t}=e;return il[t]}};
  width: 52px;
  height: 20px;
  padding-top: 1px;
  ${ba}
  border-radius: 15px;
`,us=(rn.span`
  ${Xa}
  color: ${e=>{var t;let{theme:n}=e;return(null===(t=n.GRAYSCALE)||void 0===t?void 0:t[8])||"#999999"}};
`,rn.h2`
  ${Ua}
  margin: 0;
  color: ${e=>{var t;let{theme:n}=e;return(null===(t=n.PALETTE)||void 0===t?void 0:t.black)||"#333333"}};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,rn.p`
  ${Va}
  margin: 0;
  flex: 1;
  color: ${e=>{var t;let{theme:n}=e;return(null===(t=n.GRAYSCALE)||void 0===t?void 0:t[10])||"#555555"}};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,rn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`),hs=rn.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,ps=rn.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  /* object-fit: cover; */
`,fs=rn.span`
  ${tl}
  color: ${e=>{var t;let{theme:n}=e;return(null===(t=n.PALETTE)||void 0===t?void 0:t.black)||"#333333"}};
`,gs=rn.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,ms=rn.span`
  display: flex;
  align-items: center;
  gap: 5px;
`,xs=rn.hr`
  /* padding-bottom: 27px; */
  margin: 0px;
  border: none;
  border-top: 1px solid ${e=>{var t;let{theme:n}=e;return(null===(t=n.GRAYSCALE)||void 0===t?void 0:t[2])||"#E6E6E6"}};
`,Cs=e=>{let{category:t,title:n,content:r,date:i,thumbnail:o,profile:a,author:l,views:s,likes:c,comments:d,isHrHidden:u}=e;const{name:h,textColor:p,bgColor:f}=El(t);return(0,Co.jsxs)("div",{children:[(0,Co.jsx)(os,{children:(0,Co.jsxs)(as,{children:[(0,Co.jsx)(ls,{src:o,alt:n}),(0,Co.jsxs)(ss,{children:[(0,Co.jsxs)(cs,{children:[(0,Co.jsx)(ds,{bgcolor:f,children:(0,Co.jsx)(al.Span,{size:"h11Bold",color:p,children:h})}),(0,Co.jsx)(al.Span,{size:"h10Regular",color:"faillog_gray9",children:i})]}),(0,Co.jsx)(al.Span2,{size:"h8Extrabold",color:"faillog-black",lineclamp:1,children:n}),(0,Co.jsx)(al.Span2,{size:"h9Regular",color:"faillog_black",children:r}),(0,Co.jsxs)(us,{children:[(0,Co.jsxs)(hs,{children:[(0,Co.jsx)(ps,{src:a,alt:l}),(0,Co.jsx)(fs,{children:l})]}),(0,Co.jsxs)(gs,{children:[(0,Co.jsxs)(ms,{children:[(0,Co.jsx)("img",{src:gl,width:12,height:8}),(0,Co.jsx)(al.Span,{size:"h10Regular",color:"faillog-black",isvisible:!0,children:s})]}),(0,Co.jsxs)(ms,{children:[(0,Co.jsx)("img",{src:ml,width:14,height:14}),(0,Co.jsx)(al.Span,{size:"h10Regular",color:"faillog-black",isvisible:!0,children:c})]}),(0,Co.jsxs)(ms,{children:[(0,Co.jsx)("img",{src:xl,width:14,height:14}),(0,Co.jsx)(al.Span,{size:"h10Regular",color:"faillog-black",isvisible:!0,children:d})]})]})]})]})]})}),u||(0,Co.jsx)(xs,{})]})};const bs=n.p+"static/media/file.28cbf376df5ae96114fb7429a5a610fb.svg",vs=rn.div`
  width: 984px;
  height: 1434px;
  ${ba}
`,ys=rn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
`,ws=rn.img`
  margin-bottom: 39px;
`,Es=rn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`,js=e=>{let{search:t}=e;return t="sss",(0,Co.jsx)(vs,{children:(0,Co.jsxs)(ys,{children:[(0,Co.jsx)(ws,{src:bs,alt:"empty",width:200,height:124}),(0,Co.jsx)(al.Span,{size:"h10Bold",color:"faillog_purple",children:"SEARCH EMPTY"}),(0,Co.jsx)(al.Span,{size:"h4Bold",color:"faillog-black",children:"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc5b4\uc694"}),(0,Co.jsxs)(Es,{children:[(0,Co.jsxs)(al.Span,{size:"h8Regular",color:"faillog_gray9",children:[(0,Co.jsxs)(al.Span,{size:"h8Regular",color:"faillog_purple",children:['"',t,'"']})," ","\uc640 \uc77c\uce58\ud558\ub294 \uac8c\uc2dc\uae00\uc744 \ucc3e\uc9c0 \ubabb\ud588\uc5b4\uc694."]}),(0,Co.jsx)(al.Span,{size:"h8Regular",color:"faillog_gray9",children:"\ub2e4\ub978 \uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uac70\ub098 \uce74\ud14c\uace0\ub9ac\ub97c \ubcc0\uacbd\ud574\ubcf4\uc138\uc694."})]})]})})},Ss={};Ss.wrapper=rn.div`
    width: 984px;
    background-color: ${il.faillog_white};
    border-radius: 15px;
    ${ol}
`;const ks=e=>{let{postData:t}=e;return(0,Co.jsx)("div",{children:(0,Co.jsx)(Ss.wrapper,{children:0!==t.length?t.map((e,n)=>(0,Co.jsx)(Cs,{category:e.category,title:e.title,content:e.content,date:e.date,profile:e.profile,author:e.author,views:e.views,likes:e.likes,comments:e.comments,thumbnail:e.thumbnail,isHrHidden:t.length-1===n},e.id)):(0,Co.jsx)(js,{})})})},As=rn.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ts=rn.button`
  ${ba}
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: ${e=>{let{disabled:t}=e;return t?"default":"pointer"}};
  padding: 0;
`,Ls=rn.button`
  ${ba}
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: none;
  background-color: ${e=>{let{isActive:t}=e;return t?il.faillog_purple:"transparent"}};
  cursor: pointer;
  padding: 0;
`,Fs=e=>{let{minPage:t,maxPage:n,onPageChange:i,page:o}=e;const[a,l]=(0,r.useState)(null!==o&&void 0!==o?o:t);(0,r.useEffect)(()=>{void 0!==o&&l(o)},[o]);const s=5*Math.floor((a-t)/5)+t,c=[];for(let r=s;r<=Math.min(s+4,n);r++)c.push(r);const d=s>t,u=s+5<=n,h=e=>{l(e),null===i||void 0===i||i(e)};return(0,Co.jsxs)(As,{children:[(0,Co.jsx)(Ts,{onClick:()=>{d&&h(s-1)},disabled:!d,children:(0,Co.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",children:(0,Co.jsx)("path",{d:"M7 1L1 7L7 13",stroke:d?il.faillog_gray9:il.faillog_gray4,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.map(e=>(0,Co.jsx)(Ls,{isActive:e===a,onClick:()=>{e!==a&&h(e)},children:(0,Co.jsx)(al.Span,{size:"h9Regular",color:e===a?"faillog_white":"faillog-black",children:e})},e)),(0,Co.jsx)(Ts,{onClick:()=>{u&&h(s+5)},disabled:!u,children:(0,Co.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",children:(0,Co.jsx)("path",{d:"M1 1L7 7L1 13",stroke:u?il.faillog_gray9:il.faillog_gray4,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},Is={};Is.wrapper=rn.div`
    width: 984px;
    /* height: 1434px;
    background-color: ${il.faillog_white};
    border-radius: 15px; */
`,Is.pageWrapper=rn.div`
    width: 100%;
    height: 136px;
    ${ba}
`;const Os=()=>{const{order1:e,order2:t,category:n,page:i,content:o,setPage:a}=Hl(),l=(0,r.useRef)(!1);(0,r.useEffect)(()=>{console.log("a")},[]),(0,r.useEffect)(()=>{l.current?console.log("b"):l.current=!0},[e,t,n,i,o]);return(0,Co.jsxs)(Is.wrapper,{children:[(0,Co.jsx)(ks,{postData:[{id:1,category:0,title:"\ub9ac\uc561\ud2b8 \ud504\ub85c\uc81d\ud2b8 \ucc98\uc74c \uc2dc\uc791\ud558\ub294 \ubd84\ub4e4\uaed8 \ub4dc\ub9ac\ub294 \ud301",content:"\ub9ac\uc561\ud2b8\ub97c \ucc98\uc74c \ubc30\uc6b0\ub294 \ubd84\ub4e4\uc774 \uc790\uc8fc \uacaa\ub294 \uc5b4\ub824\uc6c0\uacfc \uadf8 \ud574\uacb0 \ubc29\ubc95\uc744 \uacf5\uc720\ud569\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8 \uad6c\uc870 \uc124\uacc4\ubd80\ud130 \uc0c1\ud0dc \uad00\ub9ac\uae4c\uc9c0 \ub2e8\uacc4\ubcc4\ub85c \uc124\uba85\ud574 \ub4dc\ub9b4\uac8c\uc694.",date:"2026.05.08",thumbnail:"https://i.pravatar.cc/150?img=1",profile:"https://i.pravatar.cc/150?img=5",author:"\ud64d\uae38\ub3d9",views:1240,likes:87,comments:34},{id:2,category:1,title:"styled-components\uc5d0\uc11c theme\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc774 \uad81\uae08\ud569\ub2c8\ub2e4",content:"ThemeProvider\ub97c \uc774\uc6a9\ud574\uc11c \uc804\uc5ed \ud14c\ub9c8\ub97c \uc124\uc815\ud558\uace0 \uc2f6\uc740\ub370 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud558\ub294\uc9c0 \uc798 \ubaa8\ub974\uaca0\uc5b4\uc694. \uc608\uc2dc \ucf54\ub4dc\uc640 \ud568\uaed8 \uc124\uba85\ud574 \uc8fc\uc2dc\uba74 \uac10\uc0ac\ud558\uaca0\uc2b5\ub2c8\ub2e4.",date:"2026.05.07",thumbnail:"https://i.pravatar.cc/150?img=2",profile:"https://i.pravatar.cc/150?img=5",author:"\uae40\ucca0\uc218",views:538,likes:22,comments:11},{id:3,category:2,title:"2026\ub144 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \ucde8\uc5c5 \ud2b8\ub80c\ub4dc \uc815\ub9ac",content:"\uc62c\ud574 \ucc44\uc6a9 \uacf5\uace0\ub97c \ubd84\uc11d\ud55c \uacb0\uacfc, React\uc640 TypeScript \uc5ed\ub7c9\uc774 \ud575\uc2ec \uc694\uad6c\uc0ac\ud56d\uc73c\ub85c \uc790\ub9ac\uc7a1\uc558\uc2b5\ub2c8\ub2e4. \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uad6c\uc131 \uc804\ub7b5\ub3c4 \ud568\uaed8 \uc18c\uac1c\ud569\ub2c8\ub2e4.",date:"2026.05.06",thumbnail:"https://i.pravatar.cc/150?img=3",profile:"https://i.pravatar.cc/150?img=5",author:"\uc774\uc601\ud76c",views:3021,likes:215,comments:98},{id:4,category:3,title:"\ud300 \ud504\ub85c\uc81d\ud2b8 \uba64\ubc84 \ubaa8\uc9d1\ud569\ub2c8\ub2e4 \u2014 \ucee4\ubba4\ub2c8\ud2f0 \ud50c\ub7ab\ud3fc \uac1c\ubc1c",content:"React, Node.js \uae30\ubc18\uc758 \ucee4\ubba4\ub2c8\ud2f0 \uc11c\ube44\uc2a4\ub97c \ud568\uaed8 \ub9cc\ub4e4\uc5b4 \uac08 \ud300\uc6d0\uc744 \ubaa8\uc9d1\ud569\ub2c8\ub2e4. \ud504\ub860\ud2b8 2\uba85, \ubc31\uc5d4\ub4dc 1\uba85\uc744 \ucc3e\uace0 \uc788\uc73c\uba70 \uc8fc 2\ud68c \uc628\ub77c\uc778 \ubbf8\ud305\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4.",date:"2026.05.05",thumbnail:"https://i.pravatar.cc/150?img=4",profile:"https://i.pravatar.cc/150?img=5",author:"\ubc15\ubbfc\uc900",views:892,likes:56,comments:27},{id:5,category:4,title:"\ubd80\ud2b8\ucea0\ud504 6\uac1c\uc6d4 \uc218\ub8cc \ud6c4\uae30 \u2014 \uc194\uc9c1\ud558\uac8c \uc801\uc5b4\ubd24\uc2b5\ub2c8\ub2e4",content:"\ube44\uc804\uacf5\uc790\ub85c \uc2dc\uc791\ud574\uc11c 6\uac1c\uc6d4\uac04 \ubd80\ud2b8\ucea0\ud504\ub97c \ub9c8\uce58\uace0 \ub290\ub080 \uc810\uc744 \uc194\uc9c1\ud558\uac8c \uacf5\uc720\ud569\ub2c8\ub2e4. \ud798\ub4e4\uc5c8\ub358 \uc21c\uac04\uacfc \ubcf4\ub78c\ucc3c\ub358 \uc21c\uac04 \ubaa8\ub450 \ub2f4\uc558\uc2b5\ub2c8\ub2e4.",date:"2026.05.04",thumbnail:"https://i.pravatar.cc/150?img=5",profile:"https://i.pravatar.cc/150?img=5",author:"\ucd5c\uc218\uc5f0",views:4780,likes:341,comments:152},{id:6,category:0,title:"\uac1c\ubc1c\ud558\uba74\uc11c \ub4e4\uc73c\uba74 \uc88b\uc740 \ud50c\ub808\uc774\ub9ac\uc2a4\ud2b8 \ucd94\ucc9c",content:"\uc9d1\uc911\ub825\uc744 \ub192\uc5ec\uc8fc\ub294 Lo-Fi, \uc7ac\uc988, \ud074\ub798\uc2dd \ub4f1 \ub2e4\uc591\ud55c \uc7a5\ub974\uc758 \ucf54\ub529 BGM \ud50c\ub808\uc774\ub9ac\uc2a4\ud2b8\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4. \uac01\uc790 \uc990\uaca8 \ub4e3\ub294 \uc74c\uc545\ub3c4 \ub313\uae00\ub85c \ucd94\ucc9c\ud574 \uc8fc\uc138\uc694!",date:"2026.05.03",thumbnail:"https://i.pravatar.cc/150?img=6",profile:"https://i.pravatar.cc/150?img=5",author:"\uc815\ub2e4\uc740",views:2103,likes:178,comments:63}]}),(0,Co.jsx)(Is.pageWrapper,{children:(0,Co.jsx)(Fs,{minPage:1,maxPage:12,onPageChange:e=>{console.log(e),a(e)},page:i})})]})},Rs=rn.div`
  width: 300px;
  height: 148px;
  border-radius: 15px;
  border: 1px solid ${il.faillog_gray2};
  background-color: #ffffff;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`,Ns=rn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ps=rn.div`
  background-color: ${e=>{let{bgcolor:t}=e;return il[t]}};
  padding-top: 1px;
  width: 60px;
  height: 20px;
  ${ba}
  border-radius: 15px;
`,zs=rn.div`
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
`,$s=rn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ds=rn.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Bs=rn.img`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`,Ms=rn.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Hs=rn.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Gs=e=>{let{date:t,category:n,title:r,profile:i,author:o,views:a,likes:l,comments:s}=e;const{name:c,textColor:d,bgColor:u}=El(n);return(0,Co.jsxs)(Rs,{children:[(0,Co.jsxs)(Ns,{children:[(0,Co.jsx)(al.Span,{size:"h11Bold",color:"faillog_gray8",children:t}),(0,Co.jsx)(Ps,{bgcolor:u,children:(0,Co.jsx)(al.Span,{size:"h11Extrabold",color:d,children:c})})]}),(0,Co.jsx)(zs,{children:(0,Co.jsx)(al.Span2,{size:"h10Bold",color:"faillog-black",display:"block",children:r})}),(0,Co.jsxs)($s,{children:[(0,Co.jsxs)(Ds,{children:[(0,Co.jsx)(Bs,{src:i,alt:o}),(0,Co.jsx)(al.Span,{size:"h10Regular",color:"faillog-black",children:o})]}),(0,Co.jsxs)(Ms,{children:[(0,Co.jsxs)(Hs,{children:[(0,Co.jsx)("img",{src:gl,width:12,height:8}),(0,Co.jsx)(al.Span,{size:"h11Regular",color:"faillog-black",children:a})]}),(0,Co.jsxs)(Hs,{children:[(0,Co.jsx)("img",{src:ml,width:12,height:12}),(0,Co.jsx)(al.Span,{size:"h11Regular",color:"faillog-black",children:l})]}),(0,Co.jsxs)(Hs,{children:[(0,Co.jsx)("img",{src:xl,width:12,height:12}),(0,Co.jsx)(al.Span,{size:"h11Regular",color:"faillog-black",children:s})]})]})]})]})};const Ws=n.p+"static/media/ai_image.78ea3e8d9ae21bfd7c000004843510a1.svg",Us=[{id:1,date:"2026\ub144 03\uc6d4 03\uc77c",category:0,title:"\ucc98\uc74c\ubd80\ud130 \uc11c\ube44\uc2a4 \ubc29\ud5a5\uc744 \ub108\ubb34 \ub113\uac8c \uc7a1\uc544\uc11c \uc2e4\ud328\ud588\ub358 \uae30\ub85d\uae30\ub85d\uc758 \uae30\ub85d\uc774\ub2e4\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147",profile:"https://i.pravatar.cc/150?img=5",author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:1240,likes:35,comments:6},{id:2,date:"2026\ub144 03\uc6d4 03\uc77c",category:1,title:"\uc2dc\ud5d8 \uc9c1\uc804 \ubd88\uc548\uc774 \uc2ec\ud574\uc9c8 \ub54c \ub0b4\uac00 \ud588\ub358 \ubcf5\uae30 \ub8e8\ud2f4 3\uac00\uc9c0",profile:"https://i.pravatar.cc/150?img=5",author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:45,likes:35,comments:6},{id:3,date:"2026\ub144 03\uc6d4 03\uc77c",category:2,title:"\uc2dc\ud5d8 \uc9c1\uc804 \ubd88\uc548\uc774 \uc2ec\ud574\uc9c8 \ub54c \ub0b4\uac00 \ud588\ub358 \ubcf5\uae30 \ub8e8\ud2f4 3\uac00\uc9c0",profile:"https://i.pravatar.cc/150?img=5",author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:45,likes:35,comments:6}],_s=rn.div`
  width: 312px;
  height: 536px;
  background-color: ${il.faillog_white};
  border-radius: 15px;
  padding: 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${ol}
`,Zs=rn.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 7px;
`,Ys=rn.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Qs=rn.div`
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Vs=()=>(0,Co.jsxs)(_s,{children:[(0,Co.jsxs)(Zs,{children:[(0,Co.jsxs)(Ys,{children:[(0,Co.jsx)(al.Span,{size:"h7Bold",color:"faillog-black",children:"\ub9de\ucda4 \uac8c\uc2dc\uae00"}),(0,Co.jsx)("img",{src:Ws,alt:"ai",height:24})]}),(0,Co.jsx)(al.Span,{size:"h10Regular",color:"faillog_gray9",children:"\ucd5c\uadfc \uc791\uc131 \uae00\uc744 \ubc14\ud0d5\uc73c\ub85c, \ub2f9\uc2e0\uacfc \uc720\uc0ac\ud55c \uae00\uc744 \uc120\ubcc4\ud588\uc2b5\ub2c8\ub2e4."})]}),(0,Co.jsx)(Qs,{children:Us.map(e=>(0,Co.jsx)(Gs,{date:e.date,category:e.category,title:e.title,profile:e.profile,author:e.author,views:e.views,likes:e.likes,comments:e.comments},e.id))})]}),qs=[{id:1,category:0,date:"2026\ub144 3\uc6d4 1\uc77c",title:"\ucc98\uc74c\ubd80\ud130 \uc11c\ube44\uc2a4 \ubc29\ud5a5\uc744 \ub108\ubb34 \ub113\uac8c \uc7a1\uc544\uc11c \uc2e4\ud328\ud588\ub358 \uae30\ub85d",content:"\ubaa8\ub4e0 \uc0ac\ub78c\uc744 \ub9cc\uc871\uc2dc\ud0a4\ub824\ub2e4 \ud575\uc2ec \uace0\uac1d\uc744 \uc783\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 \ubb38\uc81c \uc815\uc758\ub97c \ub2e4\uc2dc \ud558\uace0, \ud55c \uac00\uc9c0 \ub2c8\uc988\uc5d0 \uc9d1\uc911\ud558\uba74\uc11c \uc11c\ube44\uc2a4 \uad6c\uc870\ub97c \uc7ac\ud3b8\ud588\uc2b5\ub2c8\ub2e4.",thumbnail:fl,profile:pl,author:"\ud0c8\uae30\ub9c8\uc2a4\ud130",views:99,likes:35,comments:6},{id:2,category:1,date:"2026\ub144 3\uc6d4 1\uc77c",title:"\ucde8\uc5c5 \uba74\uc811 5\ubc88 \ud0c8\ub77d \ud6c4 \uc54c\uac8c \ub41c \uac83",content:"\ub300\uae30\uc5c5 \uacf5\ucc44\uc5d0 5\ubc88 \uc5f0\uc18d\uc73c\ub85c \ucd5c\uc885 \uba74\uc811\uc5d0\uc11c \ub5a8\uc5b4\uc84c\uc2b5\ub2c8\ub2e4. \ub9e4\ubc88 \uc798 \ub410\ub2e4 \uc2f6\uc5c8\ub294\ub370 \uacb0\uacfc\ub294 \ud56d\uc0c1 \ubd88\ud569\uaca9\uc774\uc5c8\uc5b4\uc694.",thumbnail:fl,profile:pl,author:"\ud0c8\uae30\ub9c8\uc2a4\ud130",views:99,likes:35,comments:6},{id:3,category:2,date:"2026\ub144 3\uc6d4 1\uc77c",title:"\ub3c5\ud559\uc73c\ub85c \uac1c\ubc1c \uacf5\ubd80 6\uac1c\uc6d4, \ud3ec\uae30\ud588\ub358 \uc774\uc720",content:"\ube44\uc804\uacf5\uc790\ub85c \ud63c\uc790 \uc6f9 \uac1c\ubc1c\uc744 \uacf5\ubd80\ud588\uc2b5\ub2c8\ub2e4. 6\uac1c\uc6d4\uc744 \ubc84\ud2f0\ub2c8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2a4\uc2a4\ub85c \ub9cc\ub4dc\ub294 \ub2e8\uacc4\uc5d0\uc11c \ub9c9\ud600\ubc84\ub838\uc2b5\ub2c8\ub2e4.",thumbnail:fl,profile:pl,author:"\ud0c8\uae30\ub9c8\uc2a4\ud130",views:99,likes:35,comments:6},{id:4,category:3,date:"2026\ub144 3\uc6d4 1\uc77c",title:"\uc2a4\ud0c0\ud2b8\uc5c5 3\ubc88 \uc2e4\ud328\ud558\uace0 \ubc30\uc6b4 \uac83\ub4e4",content:"\ucc3d\uc5c5\uc5d0 \ub3c4\uc804\ud55c \uc9c0 3\ub144\uc774 \ub410\uc2b5\ub2c8\ub2e4. \uadf8\ub3d9\uc548 \uc138 \ubc88\uc758 \ucc3d\uc5c5\uc744 \uc2dc\ub3c4\ud588\uace0, \uc138 \ubc88 \ubaa8\ub450 \uc2e4\ud328\ub85c \ub05d\ub0ac\uc2b5\ub2c8\ub2e4.",thumbnail:fl,profile:pl,author:"\ud0c8\uae30\ub9c8\uc2a4\ud130",views:99,likes:35,comments:6},{id:5,category:4,date:"2026\ub144 3\uc6d4 1\uc77c",title:"\uae30\ucd9c\ub9cc \ubcf4\ub2e4 \uc2e4\uc804\uc5d0\uc11c \ubb34\ub108\uc84c\ub358 \uc774\uc720\uc640 \uacf5\ubd80 \ub8e8\ud2f4 \uc7ac\uc124\uacc4",content:"\uc775\uc219\ud55c \ud658\uacbd\uc5d0\ub9cc \ub9e4\ub2ec\ub9b0 \uacf5\ubd80 \ubc29\uc2dd\uc774 \ubb38\uc81c\uc600\uc2b5\ub2c8\ub2e4. \uc7a5\uc18c, \uc2dc\uac04, \ubcf5\uc2b5 \ubc29\ubc95\uc744 \ubc14\uafb8\uba74\uc11c \uc2e4\uc804 \uac10\uac01\uc744 \ud68c\ubcf5\ud588\ub358 \uacfc\uc815\uc744 \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4.",thumbnail:fl,profile:pl,author:"\ud0c8\uae30\ub9c8\uc2a4\ud130",views:99,likes:35,comments:6},{id:6,category:3,date:"2026\ub144 3\uc6d4 1\uc77c",title:"\uc2a4\ud0c0\ud2b8\uc5c5 3\ubc88 \uc2e4\ud328\ud558\uace0 \ubc30\uc6b4 \uac83\ub4e4",content:"\ucc3d\uc5c5\uc5d0 \ub3c4\uc804\ud55c \uc9c0 3\ub144\uc774 \ub410\uc2b5\ub2c8\ub2e4. \uadf8\ub3d9\uc548 \uc138 \ubc88\uc758 \ucc3d\uc5c5\uc744 \uc2dc\ub3c4\ud588\uace0, \uc138 \ubc88 \ubaa8\ub450 \uc2e4\ud328\ub85c \ub05d\ub0ac\uc2b5\ub2c8\ub2e4.",thumbnail:fl,profile:pl,author:"\ud0c8\uae30\ub9c8\uc2a4\ud130",views:99,likes:35,comments:6}],Js=()=>{const e={title:"\uae30\ucd9c\ub9cc \ud30c\ub2e4\uac00 \uc2e4\uc804\uc5d0\uc11c \ubc31\uc9c0 \ub41c \uc370."};return e.content=(0,Co.jsxs)(Co.Fragment,{children:["\uc775\uc219\ud55c \ud658\uacbd\uc5d0\ub9cc \ub9e4\ub2ec\ub9b0 \uacf5\ubd80 \ubc29\uc2dd\uc774 \ubb38\uc81c\uc600\uc2b5\ub2c8\ub2e4. \uc7a5\uc18c, \uc2dc\uac04, \ubcf5\uc2b5 ",(0,Co.jsx)("br",{})," \ubc29\ubc95\uc744 \ubc14\uafb8\uba74\uc11c \uc810\uc810 \uc2e4\uc804 \uac10\uac01\uc744 \ud68c\ubcf5\ud5c0\ub358 \uacfc\uc815\uc744 \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4."]}),e.date="2026\ub144 3\uc6d4 1\uc77c",e.thumbnail=fl,e.profile=pl,e.author="\ud544\uae30\ub9c8\uc2a4\ud130",e.views=99,e.likes=777,e.comments=999,e.isLike=!1,e.id=3,(0,Co.jsxs)("div",{children:[(0,Co.jsx)(dl,{}),(0,Co.jsx)(bl,{title:e.title,content:e.content,date:e.date,thumbnail:e.thumbnail,profile:e.profile,author:e.author,views:e.views,likes:e.likes,comments:e.comments,isLike:e.isLike,id:e.id}),(0,Co.jsx)(jl,{posts:qs}),(0,Co.jsxs)(is.ListBgWrap,{children:[(0,Co.jsx)(ns,{}),(0,Co.jsx)(al.Wrapper,{margintop:"55px",children:(0,Co.jsxs)(is.PostListAndAiRecommandPostWrapper,{children:[(0,Co.jsx)(Os,{}),(0,Co.jsx)(Vs,{})]})})]})]})},Xs=()=>(0,Co.jsx)("div",{children:"\ucee4\ubba4\ub2c8\ud2f0 \uc791\uc131\ud398\uc774\uc9c0"});const Ks=n.p+"static/media/callendar.a713cd48eaaed4a65ee2a7f17f213e8f.svg";const ec=n.p+"static/media/clock.4e896b7335d7bc7c649b377a69945971.svg",tc=rn.div`
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  width: 1320px;
  padding-bottom: 11px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,nc=rn.div`
  background-color: ${e=>{let{bgcolor:t}=e;return il[t]}};
  width: 68px;
  height: 24px;
  border-radius: 15px;
  ${ba}
`,rc=rn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ic=rn.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,oc=rn.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,ac=rn.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,lc=rn.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,sc=e=>{let{category:t,title:n,profile:r,author:i,views:o,date:a,timeAgo:l}=e;const{name:s,textColor:c,bgColor:d}=El(t);return(0,Co.jsxs)(tc,{children:[(0,Co.jsx)(nc,{bgcolor:d,children:(0,Co.jsx)(al.Span,{size:"h11Bold",color:c,children:s})}),(0,Co.jsx)(al.Span2,{size:"h5Bold",color:"faillog-black",lineclamp:2,children:n}),(0,Co.jsxs)(rc,{children:[(0,Co.jsxs)(ic,{children:[(0,Co.jsx)(oc,{src:r,alt:i}),(0,Co.jsx)(al.Span,{size:"h10Regular",color:"faillog_gray9",children:i})]}),(0,Co.jsxs)(ac,{children:[(0,Co.jsxs)(lc,{children:[(0,Co.jsx)("img",{src:gl,width:16,height:12,alt:"views"}),(0,Co.jsx)(al.Span,{size:"h10Bold",color:"faillog_gray9",children:o})]}),(0,Co.jsxs)(lc,{children:[(0,Co.jsx)("img",{src:Ks,width:16,height:16,alt:"date"}),(0,Co.jsx)(al.Span,{size:"h10Bold",color:"faillog_gray9",children:a})]}),(0,Co.jsxs)(lc,{children:[(0,Co.jsx)("img",{src:ec,width:16,height:16,alt:"time"}),(0,Co.jsx)(al.Span,{size:"h10Bold",color:"faillog_gray9",children:l})]})]})]})]})},cc=n.p+"static/media/detail1.467ddceb980017135f43.png",dc=n.p+"static/media/detail2.228a7731dbd06afb7896.png",uc=rn.div`
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  width: 1320px;
  padding-bottom: 11px;
  display: flex;
  flex-direction: column;
`,hc=rn.img`
  display: block;
  width: ${e=>{let{$width:t}=e;return t}};
  height: ${e=>{let{$height:t}=e;return t}};
  margin-top: ${e=>{let{$margintop:t}=e;return t||"0px"}};
  margin-bottom: ${e=>{let{$marginbottom:t}=e;return t||"0px"}};
`,pc=()=>(0,Co.jsxs)(uc,{children:[(0,Co.jsx)(hc,{src:cc,$width:"1268px",$height:"414px",$marginbottom:"23px"}),(0,Co.jsxs)(al.Span,{size:"h8Regular",color:"faillog-black",children:["\uc775\uc219\ud55c \ub0b4 \ubc29\uc5d0\uc11c\ub9cc \uacf5\ubd80\ud558\ub358 \uac8c \ub3c5\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uc2e4\uc804\uc5d0\uc11c\ub294 \ub0af\uc120 \ud658\uacbd\uacfc \uc791\uc740 \uc18c\uc74c\uc5d0\ub3c4 \uc27d\uac8c \ud754\ub4e4\ub838\uace0, \uc54c\uace0 \uc788\ub358 \uac83\ub3c4 \uc81c\ub300\ub85c \uaebc\ub0b4\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uacf5\ubd80\ub7c9\uc744 \ub354 \ub298\ub9ac\ub294 \ub300\uc2e0",(0,Co.jsx)("br",{}),"\ud658\uacbd\ubd80\ud130 \ubc14\uafb8\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4.",(0,Co.jsx)("br",{}),(0,Co.jsx)("br",{}),"\uc9d1\uc774 \uc544\ub2cc \ub3c4\uc11c\uad00, \uce74\ud398, \uc2a4\ud130\ub514\uce74\ud398\ub97c \ubc88\uac08\uc544 \uc774\uc6a9\ud588\uace0 \ucc98\uc74c\uc5d4 \ubd88\ud3b8\ud588\uc9c0\ub9cc \uc810\uc810 \ub0af\uc120 \uacf5\uac04\uc5d0\uc11c\ub3c4 \uc9d1\uc911\uc744 \uc720\uc9c0\ud558\ub294 \uc2dc\uac04\uc774 \uae38\uc5b4\uc84c\uc2b5\ub2c8\ub2e4. \uc774\uc804\uc5d0\ub294 \uae34\uc7a5\ud558\uba74 \uc190\uc774 \uad73\uace0 \uba38\ub9ac\uac00 \uba4d\ud574",(0,Co.jsx)("br",{}),"\uc84c\ub294\ub370, \uc774\uc81c\ub294 \ub2e4\uc2dc \ud750\ub984\uc744 \uc7a1\ub294 \uc5f0\uc2b5\uc774 \ub418\uae30 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.",(0,Co.jsx)(hc,{src:dc,$width:"1268px",$height:"360px",$marginbottom:"23px",$margintop:"23px"}),"\uacf5\ubd80 \ub8e8\ud2f4\ub3c4 \ubc14\uafe8\uc2b5\ub2c8\ub2e4. \uc608\uc804\uc5d0\ub294 \uc624\ub798 \uc549\uc544 \uc788\ub294 \uac83 \uc790\uccb4\uc5d0 \uc758\ubbf8\ub97c \ub480\uc9c0\ub9cc, \uc9c0\uae08\uc740 30\ubd84 \uc9d1\uc911 \ud6c4 \uc9e7\uac8c \uc26c\ub294 \ubc29\uc2dd\uc73c\ub85c \uad6c\uc870\ub97c \ubc14\uafe8\uc2b5\ub2c8\ub2e4. \ud2c0\ub9b0 \ubb38\uc81c\ub294 \uadf8\ub0e5 \ub118\uc5b4\uac00\uc9c0 \uc54a\uace0 \uc65c \ud2c0\ub838\ub294",(0,Co.jsx)("br",{}),"\uc9c0\ub97c \uc801\uc73c\uba74\uc11c \uc2e4\uc218\uc758 \ud328\ud134\uc744 \ucd94\uc801\ud588\uc2b5\ub2c8\ub2e4. ",(0,Co.jsx)("br",{}),(0,Co.jsx)("br",{}),"\uacb0\uad6d \uc2e4\uc804\uc740 \ub9ce\uc774 \uc544\ub294 \uac83\ubcf4\ub2e4 \ud754\ub4e4\ub824\ub3c4 \ub2e4\uc2dc \uaebc\ub0bc \uc218 \uc788\ub294 \ud798\uc774 \ub354 \uc911\uc694\ud558\ub2e4\ub294 \uac78 \ub290\uaf08\uc2b5\ub2c8\ub2e4. \ud658\uacbd\uc744 \ubc14\uafb8\uace0, \ub8e8\ud2f4\uc744 \ubc14\uafb8\uace0, \uc2e4\uc218\uc758 \uc6d0\uc778\uc744 \uc801\uae30 \uc2dc\uc791\ud55c \ub4a4\ubd80\ud130 \uc2e4\uc804\uc5d0\uc11c\uc758 \uc548\uc815\uac10",(0,Co.jsx)("br",{}),"\uc774 \ub2ec\ub77c\uc84c\uc2b5\ub2c8\ub2e4."]})]}),fc=rn.div`
  width: 144px;
  height: 132px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid ${il.faillog_gray4};
  overflow: hidden;
`,gc=rn.div`
  width: 144px;
  height: 96px;
  background-color: ${il.faillog_gray2};
  flex-shrink: 0;

  /* img {
    width: 144px;
    height: 96px;
    object-fit: cover;
    display: block;
  } */
`,mc=rn.img`
    width: 144px;
    height: 96px;
    object-fit: cover;
    display: block;
`,xc=rn.div`
  width: 144px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  background-color: #ffffff;
  box-sizing: border-box;

  cursor: pointer;

  span {
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${il.faillog_blue};
    text-decoration: underline;
  }
`,Cc=e=>{let{src:t,name:n}=e;return(0,Co.jsxs)(fc,{children:[(0,Co.jsx)(gc,{children:(0,Co.jsx)(mc,{src:t,alt:n})}),(0,Co.jsx)(xc,{onClick:async()=>{try{const e=await fetch(t),r=await e.blob(),i=window.URL.createObjectURL(r),o=document.createElement("a");o.href=i,o.download=n,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(i)}catch(e){console.error("\ub2e4\uc6b4\ub85c\ub4dc \uc2e4\ud328:",e)}},children:(0,Co.jsx)(al.Span,{size:"h11Regular",isvisible:"true",children:n})})]})},bc=[{src:"https://picsum.photos/seed/img1/144/96",name:"screenshot_01.png"},{src:"https://picsum.photos/seed/img2/144/96",name:"screenshot_02.png"},{src:"https://picsum.photos/seed/img3/144/96",name:"diagram_03.jpg"},{src:"https://picsum.photos/seed/img4/144/96",name:"design_04.jpg"},{src:"https://picsum.photos/seed/img5/144/96",name:"mockup_05.png"}],vc=rn.div`
  width: 1320px;
  padding: 71px 24px 41px 24px;
  display: flex;
  flex-direction: column;
`,yc=rn.div`
  width: 1270px;
  height: 162px;
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
`,wc=e=>{let{images:t=bc}=e;return(0,Co.jsxs)(vc,{children:[(0,Co.jsx)(al.Span,{size:"h7Bold",isvisible:"true",children:"\ucca8\ubd80\uc774\ubbf8\uc9c0 \ubaa9\ub85d"}),(0,Co.jsx)(yc,{children:t.map((e,t)=>(0,Co.jsx)(Cc,{src:e.src,name:e.name},t))})]})},Ec=rn.div`
  width: 1320px;
  padding: 46px 41px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`,jc=rn.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Sc=rn.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
`,kc=rn.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Ac=rn.div`
  width: 140px;
  height: 72px;
  background-color: ${il.faillog_gray1};
  border: 1px solid ${il.faillog_gray2};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 16px 6px;
  box-sizing: border-box;
`,Tc=e=>{let{profile:t,author:n,postCount:r,faillogCount:i,commentCount:o}=e;return(0,Co.jsxs)(Ec,{children:[(0,Co.jsxs)(jc,{children:[(0,Co.jsx)(Sc,{src:t,alt:n}),(0,Co.jsx)(al.Span,{size:"h7Bold",color:"faillog-black",children:n})]}),(0,Co.jsxs)(kc,{children:[(0,Co.jsxs)(Ac,{children:[(0,Co.jsx)(al.Span,{size:"h10Bold",color:"faillog_gray9",children:"\uc791\uc131\ud55c \uac8c\uc2dc\uae00 \uc218"}),(0,Co.jsx)(al.Span,{size:"h6Bold",color:"faillog-black",children:r})]}),(0,Co.jsxs)(Ac,{children:[(0,Co.jsx)(al.Span,{size:"h10Bold",color:"faillog_gray9",children:"\uc791\uc131\ud55c \ud398\uc77c \ub85c\uadf8 \uc218"}),(0,Co.jsx)(al.Span,{size:"h6Bold",color:"faillog-black",children:i})]}),(0,Co.jsxs)(Ac,{children:[(0,Co.jsx)(al.Span,{size:"h10Bold",color:"faillog_gray9",children:"\uc791\uc131\ud55c \ub313\uae00 \uc218"}),(0,Co.jsx)(al.Span,{size:"h6Bold",color:"faillog-black",children:o})]})]})]})},Lc=rn.div`
  width: 1270px;
  padding-top: 26px;
  padding-bottom: 31px;
`,Fc=()=>(0,Co.jsx)(Lc,{children:"\ud14c\uc2a4\ud2b8"}),Ic=0,Oc="\uae30\ucd9c\ub9cc \ud30c\ub2e4\uac00 \uc2e4\uc804\uc5d0\uc11c \ubc31\uc9c0 \ub41c \uc370. \uacf5\ubd80 \ud658\uacbd\ubd80\ud130 \ubc14\uafb8\uace0 \ub098\uc11c\ub2c8 \ubcc0\ud654\uac00 \uc0dd\uae34 \uc370",Rc=pl,Nc="\ucde8\uc900\ub9c8\uc2a4\ud130",Pc=4579,zc="2026-03-05",$c="10\ubd84 \uc804",Dc=rn.div`
    width: 100%;
    background-color: ${il["faillog-sector-gray"]};
    display: flex;
    flex-direction: column;
    align-items: center;
`,Bc=rn.hr`
    width: 1268px;
    border: none;
    border-top: 1px solid ${il.faillog_gray4};
    margin: 0;
`,Mc=rn.div`
    width: 1320px;
    margin-top: 63px;
    margin-bottom: 101px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${il.faillog_white};
    border-radius: 15px;
    ${ol}
`,Hc=()=>{const{id:e}=wi();return(0,Co.jsx)(Dc,{children:(0,Co.jsxs)(Mc,{children:[(0,Co.jsx)(sc,{category:Ic,title:Oc,profile:Rc,author:Nc,views:Pc,date:zc,timeAgo:$c}),(0,Co.jsx)(Bc,{}),(0,Co.jsx)(pc,{}),(0,Co.jsx)(wc,{}),(0,Co.jsx)(Bc,{}),(0,Co.jsx)(Tc,{profile:Rc,author:"\ucde8\uc900\ub9c8\uc2a4\ud130",postCount:24,faillogCount:18,commentCount:136}),(0,Co.jsx)(Bc,{}),(0,Co.jsx)(Fc,{})]})})},Gc=()=>{const{id:e}=wi();return(0,Co.jsxs)("div",{children:["\ucee4\ubba4\ub2c8\ud2f0 \uc218\uc815 \ud398\uc774\uc9c0",(0,Co.jsxs)("h1",{children:[e,"\ubc88 \uc218\uc815 \uac8c\uc2dc\uae00"]})]})},Wc=[{id:1,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"B \ud22c\uc790\uc0ac \ubbf8\ud305 \uac70\uc808",date:"2024.03.15 \uc791\uc131"},{id:2,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"A \ud22c\uc790\uc0ac \ubbf8\ud305 \uac70\uc808",date:"2023.11.02 \uc791\uc131"},{id:3,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"C \ud22c\uc790\uc0ac \ubbf8\ud305 \uac70\uc808",date:"2023.11.02 \uc791\uc131"},{id:4,category:"\uacf5\ubd80/\ucde8\uc5c5",title:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc2e4\uae30 \ubd88\ud569\uaca9",date:"2023.09.10 \uc791\uc131"},{id:5,category:"\uc778\uac04\uad00\uacc4",title:"\ud300 \ud504\ub85c\uc81d\ud2b8 \uac08\ub4f1",date:"2023.07.01 \uc791\uc131"}],Uc=["\uc0ac\uc5c5/\ucc3d\uc5c5","\uacf5\ubd80/\ucde8\uc5c5","\uc778\uac04\uad00\uacc4","\uac74\uac15/\ub8e8\ud2f4","\uae30\ud0c0"],_c=[{id:"warm",icon:(0,Co.jsxs)("div",{style:{position:"relative",width:"40px",height:"40px"},children:[(0,Co.jsx)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M13.3862 1.91698C13.9868 2.42694 14.5209 3.00324 15.0381 3.59633C15.0991 3.51712 15.0991 3.51712 15.1613 3.4363C16.5866 1.63392 18.6644 0.393596 20.9571 0.0913606C21.337 0.066587 21.7154 0.061646 22.0961 0.0621525C22.1475 0.062169 22.1988 0.0621854 22.2518 0.0622024C23.085 0.0648637 23.8288 0.137398 24.6175 0.402914C24.7491 0.445234 24.7491 0.445234 24.8834 0.488408C26.8155 1.16862 28.3078 2.5556 29.2179 4.37746C30.1455 6.34442 30.2471 8.53448 29.5483 10.5819C29.1908 11.5676 28.6544 12.3859 27.9664 13.1766C27.898 13.2573 27.8297 13.3381 27.7616 13.4191C27.5086 13.7199 27.254 14.0194 26.9994 14.3189C26.6304 14.7533 26.2625 15.1881 25.9025 15.6301C25.4709 16.16 25.0277 16.68 24.5851 17.2008C24.2175 17.6334 23.8511 18.0665 23.4931 18.5071C23.1849 18.8859 22.8679 19.2563 22.5493 19.6262C22.2537 19.97 21.9654 20.3192 21.6796 20.6712C21.4443 20.9582 21.2039 21.2408 20.9636 21.5236C20.7393 21.7879 20.5184 22.0545 20.3 22.3236C19.9917 22.7024 19.6747 23.073 19.356 23.4429C19.1199 23.7175 18.8878 23.9945 18.6596 24.2757C18.3535 24.6527 18.0385 25.0213 17.7213 25.389C17.4756 25.6743 17.2359 25.9636 16.9997 26.257C16.1261 27.3259 16.1261 27.3259 15.5833 27.4302C14.4108 27.535 14.4108 27.535 13.949 27.2519C13.3394 26.7344 12.8329 26.0892 12.3339 25.4683C12.1356 25.2234 11.9324 24.983 11.7282 24.743C11.4669 24.4356 11.2085 24.1264 10.9542 23.8132C10.646 23.4344 10.329 23.0638 10.0102 22.6939C9.71624 22.352 9.43011 22.0044 9.14592 21.6543C8.93278 21.3956 8.71486 21.1414 8.4961 20.8875C8.15971 20.4971 7.83014 20.102 7.50525 19.7019C7.30592 19.4588 7.10313 19.2188 6.89954 18.9793C6.63829 18.6719 6.3799 18.3627 6.1256 18.0495C5.81737 17.6707 5.50037 17.3001 5.18161 16.9302C4.88761 16.5883 4.60148 16.2406 4.31729 15.8905C4.10415 15.6319 3.88623 15.3777 3.66747 15.1238C3.33511 14.7377 3.00715 14.3488 2.68696 13.9524C2.54473 13.7777 2.40096 13.6049 2.25557 13.4328C1.38339 12.3931 0.726256 11.3613 0.318587 10.0611C0.292083 9.98044 0.26558 9.89982 0.238272 9.81675C-0.307407 7.80311 0.123995 5.59636 1.1266 3.80566C2.13412 2.16005 3.55829 1.00884 5.38086 0.402914C5.43325 0.385431 5.48564 0.367949 5.53962 0.349936C8.1634 -0.476531 11.26 0.206728 13.3862 1.91698ZM5.84814 2.81745C5.76713 2.85139 5.68611 2.88532 5.60264 2.92029C4.27357 3.53376 3.32282 4.61321 2.7831 5.96341C2.29463 7.39544 2.35726 8.92414 3.00548 10.2899C3.29692 10.87 3.6744 11.3378 4.10951 11.8153C4.26567 11.9896 4.41159 12.1716 4.55824 12.3539C4.86646 12.7327 5.18346 13.1033 5.50222 13.4732C5.79622 13.8151 6.08235 14.1628 6.36654 14.5129C6.57968 14.7715 6.7976 15.0257 7.01636 15.2796C7.35294 15.6703 7.68262 16.0656 8.00782 16.4659C8.34696 16.8798 8.69476 17.2864 9.04127 17.6941C9.50563 18.2405 9.96655 18.789 10.4194 19.345C10.7599 19.7594 11.1082 20.1673 11.4556 20.576C11.86 21.0518 12.2641 21.5274 12.6579 22.0121C12.9657 22.3904 13.2821 22.7606 13.6007 23.1298C13.9044 23.4828 14.1994 23.8417 14.4902 24.2054C14.6627 24.4091 14.8471 24.5956 15.0381 24.782C15.4869 24.2975 15.9199 23.8069 16.335 23.293C16.5356 23.0466 16.7404 22.8041 16.9462 22.5621C17.2075 22.2548 17.4658 21.9455 17.7201 21.6323C18.0284 21.2535 18.3454 20.883 18.6641 20.513C18.9002 20.2385 19.1323 19.9614 19.3605 19.6803C19.6278 19.351 19.9014 19.0279 20.1783 18.7067C20.5148 18.316 20.8445 17.9206 21.1697 17.5204C21.5448 17.0626 21.9302 16.6133 22.3135 16.1624C22.6825 15.728 23.0504 15.2931 23.4103 14.8512C23.8419 14.3212 24.2852 13.8013 24.7278 13.2805C26.9787 10.6978 26.9787 10.6978 27.577 7.41286C27.3787 5.85678 26.6842 4.52633 25.4742 3.51845C24.1447 2.57736 22.6037 2.31909 21.0043 2.53054C20.666 2.59541 20.3454 2.69916 20.0225 2.81745C19.9424 2.84476 19.8623 2.87207 19.7797 2.90021C19.1437 3.13813 18.6141 3.50367 18.0755 3.90789C17.9988 3.96271 17.9988 3.96271 17.9206 4.01864C17.1785 4.59254 16.6437 5.43913 16.2628 6.28299C16.1034 6.63213 15.9265 6.89952 15.6612 7.1792C15.4289 7.25662 15.2571 7.27503 15.0138 7.28143C14.9058 7.28579 14.9058 7.28579 14.7956 7.29025C14.4828 7.24409 14.3428 7.15527 14.1035 6.94553C13.9429 6.69493 13.8175 6.43034 13.6898 6.16178C13.3675 5.5181 13.0521 4.97146 12.5459 4.45311C12.4832 4.38734 12.4204 4.32158 12.3558 4.25382C11.0705 2.99522 9.45611 2.48349 7.69046 2.48122C7.02371 2.48901 6.4682 2.55712 5.84814 2.81745Z",fill:"#00B53F"})}),(0,Co.jsx)("svg",{width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{position:"absolute",right:"-8px",bottom:"2px"},children:(0,Co.jsx)("path",{d:"M8.79434 1.1166C8.96064 1.2442 9.12002 1.37597 9.27775 1.51395C9.37013 1.59034 9.46261 1.66662 9.5552 1.74275C9.61784 1.79576 9.68049 1.84878 9.74503 1.9034C9.8125 1.82789 9.87996 1.75239 9.94947 1.6746C11.0421 0.586329 12.5681 0.0194508 14.0918 0C15.5644 0.00901075 16.8443 0.49071 17.9225 1.51395C18.9234 2.5373 19.4503 3.8795 19.4412 5.30614C19.4408 5.38749 19.4404 5.46883 19.44 5.55264C19.4242 6.26382 19.2936 6.86067 19.0129 7.51135C18.9809 7.58656 18.9488 7.66176 18.9158 7.73924C18.6197 8.34643 18.1698 8.82881 17.7246 9.32922C17.5634 9.51279 17.4094 9.70188 17.2557 9.89182C16.9656 10.2491 16.6695 10.6007 16.3714 10.9514C16.1472 11.2157 15.9263 11.4823 15.7078 11.7514C15.3996 12.1302 15.0826 12.5008 14.7638 12.8707C14.5278 13.1452 14.2956 13.4223 14.0674 13.7035C13.8001 14.0328 13.5265 14.3558 13.2497 14.6771C12.9137 15.0671 12.5846 15.4616 12.26 15.8612C11.9858 16.1957 11.7056 16.525 11.4256 16.8546C11.3234 16.9752 11.2213 17.0959 11.1223 17.2191C10.7847 17.6373 10.5038 17.8388 9.96347 17.8976C9.38342 17.9128 8.99604 17.8718 8.55248 17.4762C8.48341 17.4007 8.41434 17.3252 8.34317 17.2474C8.29187 17.1919 8.24057 17.1363 8.18772 17.0791C7.8214 16.6785 7.4735 16.2661 7.13206 15.8442C6.91654 15.5815 6.69588 15.3238 6.47403 15.0665C6.13915 14.6779 5.81166 14.2843 5.48835 13.886C5.2752 13.6274 5.05729 13.3732 4.83853 13.1193C4.50195 12.7286 4.17227 12.3333 3.84706 11.933C3.50792 11.5191 3.16013 11.1125 2.81362 10.7048C1.15666 8.7551 -0.126134 7.21801 0.00990025 4.5516C0.140866 3.33219 0.828704 2.04937 1.76511 1.25686C3.86741 -0.397475 6.61925 -0.361984 8.79434 1.1166ZM2.9563 3.58225C2.43394 4.27954 2.36095 5.02607 2.42421 5.8757C2.5583 6.50581 2.86437 6.95493 3.28091 7.43347C3.35379 7.5187 3.42659 7.60399 3.49934 7.68934C3.66015 7.87763 3.82159 8.06535 3.98336 8.25281C4.24101 8.55239 4.49049 8.8583 4.73965 9.16496C5.07879 9.57885 5.42659 9.9855 5.7731 10.3932C6.23746 10.9396 6.69839 11.4881 7.15123 12.0441C7.52814 12.5028 7.9141 12.954 8.29895 13.4061C8.76415 13.9526 9.22295 14.5026 9.66715 15.0665C10.2443 14.5079 10.7628 13.8977 11.2677 13.2739C11.4832 13.0112 11.7039 12.7535 11.9257 12.4962C12.2025 12.175 12.4762 11.8519 12.7435 11.5226C13.0107 11.1933 13.2844 10.8703 13.5612 10.549C13.8978 10.1583 14.2275 9.76297 14.5527 9.36272C14.7488 9.12331 14.948 8.88661 15.148 8.65047C15.1837 8.60821 15.2194 8.56594 15.2561 8.5224C15.4402 8.30473 15.6258 8.08882 15.8146 7.87524C16.6556 6.91667 17.0616 6.13964 17.0026 4.8595C16.9343 4.15008 16.4766 3.5296 15.9807 3.04647C15.2463 2.45088 14.4696 2.39763 13.5612 2.44861C12.7209 2.59285 11.9406 3.0565 11.3805 3.69483C11.109 4.0919 10.8732 4.52276 10.6793 4.96264C10.526 5.22774 10.2626 5.32346 9.97868 5.40837C9.58548 5.43983 9.29121 5.38143 8.94675 5.18931C8.73941 4.98945 8.63551 4.75664 8.51354 4.49805C8.07822 3.57632 7.37171 2.94008 6.42535 2.57518C5.08223 2.16793 3.86006 2.53497 2.9563 3.58225Z",fill:"#00B53F"})})]}),title:"\ub530\ub73b\ud55c \uc704\ub85c\uc640 \uacf5\uac10",desc:"\uc9c0\uae08\uc740 \uc790\ucc45\ubcf4\ub2e8 \ub2e4\ub3c5\uc784\uc774 \ud544\uc694\ud574\uc694.\n\uae0d\uc815\uc801\uc73c\ub85c \ubd80\ub4dc\ub7fd\uac8c \ubd84\uc11d\uacfc \ubc29\ud5a5\uc131\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",badge:"\uc21c\ud55c\ub9db",badgeColor:"#22C55E",badgeBg:"#F0FDF4"},{id:"objective",icon:(0,Co.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Co.jsx)("path",{d:"M17.3329 0.661733C17.8127 1.03779 18.1349 1.39126 18.4028 1.94108C18.4369 2.01087 18.4711 2.08066 18.5063 2.15256C18.5319 2.20555 18.5576 2.25853 18.584 2.31313C18.6684 2.31422 18.6684 2.31422 18.7544 2.31533C19.0145 2.31957 19.2745 2.32608 19.5345 2.33261C19.6671 2.33427 19.6671 2.33427 19.8024 2.33596C20.903 2.36737 21.724 2.70509 22.529 3.46064C22.7586 3.70956 22.9099 3.97504 23.0582 4.27933C23.0923 4.34912 23.1265 4.41891 23.1617 4.49082C23.1874 4.5438 23.213 4.59679 23.2394 4.65138C23.2939 4.65166 23.3484 4.65195 23.4045 4.65224C23.9215 4.65521 24.4385 4.65966 24.9555 4.66571C25.2212 4.66878 25.4869 4.67129 25.7526 4.6725C26.059 4.67392 26.3654 4.67782 26.6719 4.68183C26.8129 4.68197 26.8129 4.68197 26.9568 4.68212C27.9501 4.69907 28.7002 5.00576 29.4467 5.66462C30.0461 6.30479 30.4742 7.08597 30.4753 7.97742C30.4756 8.02798 30.4758 8.07853 30.4761 8.13061C30.4768 8.29977 30.4765 8.46892 30.4761 8.63808C30.4764 8.76068 30.4767 8.88329 30.4771 9.00589C30.4781 9.34265 30.4781 9.6794 30.4779 10.0162C30.4779 10.3794 30.4787 10.7427 30.4795 11.1059C30.4807 11.8176 30.4812 12.5293 30.4813 13.241C30.4813 13.8196 30.4816 14.3981 30.4821 14.9767C30.4835 16.6172 30.4842 18.2577 30.4841 19.8982C30.4841 19.9866 30.4841 20.0751 30.4841 20.1662C30.4841 20.2548 30.4841 20.3433 30.4841 20.4345C30.484 21.8694 30.4855 23.3042 30.4877 24.739C30.4899 26.2124 30.491 27.6859 30.4908 29.1593C30.4908 29.9864 30.4912 30.8136 30.4929 31.6407C30.4943 32.3451 30.4946 33.0494 30.4936 33.7537C30.4931 34.113 30.4931 34.4722 30.4944 34.8314C30.4956 35.1606 30.4954 35.4898 30.4941 35.819C30.4938 35.9377 30.4941 36.0565 30.495 36.1752C30.5025 37.2847 30.2625 38.1019 29.5242 38.9458C28.9192 39.5176 28.1429 39.9778 27.2946 39.9791C27.2072 39.9796 27.1197 39.9801 27.0296 39.9806C26.9344 39.9804 26.8391 39.9801 26.7409 39.9799C26.6391 39.9802 26.5373 39.9806 26.4324 39.9809C26.1502 39.9819 25.8681 39.9819 25.5859 39.9817C25.2814 39.9817 24.9769 39.9825 24.6724 39.9833C24.076 39.9846 23.4795 39.985 22.8831 39.9851C22.3981 39.9851 21.9131 39.9855 21.4282 39.986C20.0527 39.9873 18.6772 39.9881 17.3017 39.9879C17.2276 39.9879 17.1535 39.9879 17.0771 39.9879C16.9657 39.9879 16.9657 39.9879 16.8521 39.9879C15.6496 39.9878 14.447 39.9893 13.2444 39.9915C12.0091 39.9938 10.7738 39.9948 9.53847 39.9947C8.84515 39.9947 8.15184 39.9951 7.45852 39.9968C6.8681 39.9982 6.2777 39.9985 5.68729 39.9975C5.38624 39.997 5.08522 39.9969 4.78418 39.9983C4.50814 39.9995 4.23214 39.9993 3.95611 39.9979C3.80989 39.9976 3.66367 39.9988 3.51746 40C2.53324 39.992 1.78677 39.6753 1.04856 39.0237C0.449093 38.3836 0.0210094 37.6024 0.0199243 36.7109C0.0196522 36.6604 0.0193793 36.6098 0.0190991 36.5577C0.0183779 36.3886 0.0187584 36.2194 0.0191358 36.0503C0.0188458 35.9277 0.0184885 35.8051 0.0180702 35.6825C0.0171208 35.3457 0.0171414 35.0089 0.0173243 34.6722C0.017356 34.3089 0.0164999 33.9457 0.0157639 33.5824C0.0144748 32.8707 0.0140485 32.159 0.013962 31.4474C0.0138882 30.8688 0.0135696 30.2902 0.0130776 29.7117C0.0117108 28.0712 0.0109947 26.4307 0.011111 24.7902C0.0111172 24.7017 0.0111236 24.6133 0.01113 24.5222C0.0111363 24.4336 0.0111424 24.345 0.0111489 24.2538C0.011212 22.819 0.0097274 21.3842 0.00753911 19.9494C0.00530967 18.4759 0.00423922 17.0025 0.00437326 15.5291C0.00442477 14.7019 0.00399813 13.8748 0.00232742 13.0476C0.000913892 12.3433 0.000578126 11.639 0.00163127 10.9346C0.00213769 10.5754 0.00214739 10.2162 0.000800144 9.85695C-0.000421786 9.52775 -0.00019728 9.19857 0.00115414 8.86936C0.00139204 8.75061 0.00111177 8.63186 0.000244878 8.51312C-0.00731477 7.40364 0.232766 6.58649 0.970971 5.74257C1.58719 5.16029 2.36092 4.7158 3.22151 4.70447C3.31157 4.70292 3.40164 4.70137 3.49443 4.69978C3.59046 4.69888 3.6865 4.69798 3.78544 4.69705C3.93429 4.69479 3.93429 4.69479 4.08614 4.69248C4.34864 4.68861 4.61114 4.68539 4.87366 4.68249C5.14206 4.67936 5.41044 4.67538 5.67883 4.67147C6.20448 4.664 6.73013 4.65737 7.2558 4.65138C7.28213 4.59756 7.30847 4.54373 7.33561 4.48828C7.37032 4.41784 7.40503 4.3474 7.44079 4.27482C7.47513 4.20492 7.50947 4.13502 7.54485 4.063C7.93885 3.30188 8.66937 2.76864 9.46712 2.49611C9.95692 2.3559 10.4446 2.34741 10.951 2.33748C11.0438 2.33482 11.1365 2.33216 11.232 2.32941C11.4584 2.32305 11.6848 2.31764 11.9112 2.31313C11.9483 2.23509 11.9483 2.23509 11.9862 2.15547C12.4525 1.19346 13.1085 0.514371 14.1274 0.135626C15.2372 -0.148854 16.3921 0.00848282 17.3329 0.661733ZM14.3941 2.78078C14.1894 3.07322 14.1173 3.32727 14.0547 3.67711C13.9642 4.10212 13.8924 4.31974 13.5406 4.57344C13.2997 4.69446 13.0431 4.66689 12.7784 4.67056C12.654 4.67313 12.5297 4.67572 12.4054 4.67833C12.2096 4.68201 12.0138 4.68547 11.818 4.68854C11.6289 4.69166 11.4399 4.69567 11.2508 4.69979C11.1641 4.70077 11.1641 4.70077 11.0756 4.70178C10.6071 4.71275 10.1968 4.75661 9.83083 5.07519C9.29415 5.70672 9.42833 6.18909 9.42833 7.06758C13.2691 7.06758 17.1098 7.06758 21.0669 7.06758C21.1379 6.02134 21.1379 6.02134 20.7226 5.13365C20.2525 4.73055 19.8673 4.71878 19.2678 4.71288C19.1435 4.71069 19.0192 4.70846 18.895 4.70618C18.7004 4.70296 18.5058 4.70009 18.3111 4.69804C18.1224 4.69588 17.9338 4.69231 17.7451 4.68852C17.6872 4.68827 17.6293 4.68802 17.5697 4.68776C17.2225 4.67955 16.9986 4.63145 16.7218 4.41755C16.5071 4.1326 16.4447 3.86953 16.3824 3.52122C16.2613 2.95451 16.1095 2.78638 15.6356 2.46901C15.1436 2.39585 14.7738 2.43661 14.3941 2.78078ZM2.7701 7.41344C2.4029 7.84553 2.35797 8.16827 2.35762 8.72378C2.35737 8.8225 2.35712 8.92122 2.35686 9.02294C2.35697 9.13231 2.3571 9.24168 2.35722 9.35105C2.35708 9.46737 2.3569 9.5837 2.35669 9.70003C2.35622 10.0198 2.35623 10.3396 2.35632 10.6593C2.35633 11.0041 2.35591 11.349 2.35554 11.6938C2.35489 12.3694 2.35468 13.045 2.35464 13.7205C2.3546 14.2696 2.35444 14.8187 2.35419 15.3677C2.35351 16.924 2.35315 18.4803 2.35321 20.0366C2.35322 20.1624 2.35322 20.1624 2.35322 20.2909C2.35322 20.3749 2.35323 20.4589 2.35323 20.5455C2.35326 21.9074 2.35252 23.2694 2.35143 24.6313C2.35031 26.0293 2.34977 27.4274 2.34984 28.8254C2.34987 29.6105 2.34965 30.3955 2.34882 31.1806C2.34811 31.8489 2.34794 32.5173 2.34847 33.1856C2.34872 33.5266 2.34873 33.8677 2.34806 34.2087C2.34745 34.5209 2.34755 34.8331 2.34823 35.1453C2.34835 35.2583 2.34821 35.3712 2.34778 35.4841C2.31347 36.4154 2.31347 36.4154 2.71191 37.2164C3.11686 37.5637 3.42233 37.6304 3.94363 37.6308C4.02569 37.6311 4.10775 37.6313 4.1923 37.6316C4.32681 37.6314 4.32681 37.6314 4.46403 37.6312C4.55967 37.6314 4.6553 37.6315 4.75384 37.6317C5.01908 37.6321 5.28432 37.6322 5.54956 37.6321C5.8357 37.6321 6.12185 37.6325 6.40799 37.6329C6.96851 37.6335 7.52902 37.6338 8.08954 37.6338C8.54513 37.6338 9.00073 37.634 9.45632 37.6342C10.748 37.6349 12.0396 37.6353 13.3312 37.6352C13.4009 37.6352 13.4705 37.6352 13.5422 37.6352C13.6468 37.6352 13.6468 37.6352 13.7535 37.6352C14.8835 37.6352 16.0136 37.6359 17.1436 37.637C18.3039 37.6381 19.4641 37.6387 20.6244 37.6386C21.2758 37.6386 21.9272 37.6388 22.5786 37.6396C23.1332 37.6403 23.6878 37.6405 24.2424 37.64C24.5253 37.6397 24.8082 37.6397 25.0912 37.6404C25.3979 37.6411 25.7047 37.6406 26.0115 37.64C26.1455 37.6406 26.1455 37.6406 26.2822 37.6413C27.0618 37.6441 27.0618 37.6441 27.7251 37.2749C28.0923 36.8428 28.1372 36.5201 28.1376 35.9646C28.1378 35.8658 28.1381 35.7671 28.1384 35.6654C28.1382 35.556 28.1381 35.4467 28.138 35.3373C28.1381 35.221 28.1383 35.1046 28.1385 34.9883C28.139 34.6686 28.139 34.3488 28.1389 34.029C28.1389 33.6842 28.1393 33.3394 28.1397 32.9946C28.1403 32.319 28.1405 31.6434 28.1406 30.9678C28.1406 30.4187 28.1408 29.8697 28.141 29.3206C28.1417 27.7643 28.1421 26.2081 28.142 24.6518C28.142 24.5679 28.142 24.4839 28.142 24.3975C28.142 24.3135 28.142 24.2295 28.142 24.1429C28.142 22.7809 28.1427 21.419 28.1438 20.057C28.1449 18.659 28.1454 17.261 28.1454 15.8629C28.1453 15.0779 28.1456 14.2928 28.1464 13.5078C28.1471 12.8394 28.1473 12.1711 28.1467 11.5027C28.1465 11.1617 28.1465 10.8207 28.1472 10.4796C28.1478 10.1674 28.1477 9.85522 28.147 9.543C28.1469 9.43008 28.147 9.31715 28.1474 9.20423C28.1818 8.27291 28.1817 8.27291 27.7833 7.4719C27.393 7.13723 27.0957 7.05733 26.5921 7.05873C26.5207 7.05873 26.4492 7.05874 26.3756 7.05875C26.2996 7.05915 26.2235 7.05955 26.1451 7.05997C26.0665 7.06008 25.9878 7.06019 25.9067 7.0603C25.6561 7.06074 25.4055 7.06171 25.1549 7.06271C24.9848 7.0631 24.8146 7.06345 24.6444 7.06377C24.2278 7.06463 23.8112 7.06593 23.3946 7.06758C23.3935 7.11512 23.3923 7.16266 23.3912 7.21164C23.3854 7.42835 23.3779 7.64496 23.3704 7.86161C23.3686 7.93641 23.3669 8.01121 23.3651 8.08828C23.3379 8.80436 23.3379 8.80436 23.0842 9.09406C22.7608 9.33965 22.4791 9.3612 22.0867 9.35758C21.9953 9.35813 21.9953 9.35813 21.9022 9.35869C21.6984 9.35962 21.4946 9.35888 21.2909 9.35815C21.1447 9.35846 20.9985 9.35888 20.8523 9.35939C20.4554 9.36045 20.0584 9.36004 19.6615 9.3593C19.2462 9.35871 18.831 9.35926 18.4157 9.35962C17.7183 9.36005 17.0209 9.35949 16.3235 9.35837C15.5171 9.3571 14.7106 9.35751 13.9042 9.3588C13.212 9.35986 12.5198 9.36001 11.8275 9.3594C11.414 9.35904 11.0005 9.35899 10.587 9.35976C10.1983 9.36043 9.80955 9.35997 9.42081 9.35861C9.27809 9.35831 9.13537 9.35839 8.99264 9.35891C8.79792 9.35955 8.60325 9.35875 8.40853 9.35758C8.35196 9.3581 8.29539 9.35863 8.23711 9.35916C7.89613 9.3552 7.68377 9.30118 7.41098 9.09406C7.09975 8.73864 7.13538 8.3113 7.12486 7.86161C7.12221 7.7853 7.11956 7.70899 7.11683 7.63037C7.11045 7.44278 7.10508 7.25522 7.10061 7.06758C6.60226 7.06361 6.10391 7.06089 5.60554 7.05901C5.43614 7.05823 5.26674 7.05717 5.09734 7.05582C4.85331 7.05392 4.60929 7.05304 4.36525 7.05235C4.28998 7.05155 4.21471 7.05075 4.13716 7.04992C3.61645 7.04983 3.17947 7.05705 2.7701 7.41344Z",fill:"#FF34C5"}),(0,Co.jsx)("path",{d:"M37.9048 5.11907C38.6914 5.59796 39.2625 6.20809 39.6118 7.06762C39.638 7.13039 39.6642 7.19315 39.6912 7.25782C39.7948 7.63715 39.7957 7.99877 39.8013 8.39057C39.803 8.47705 39.8048 8.56353 39.8066 8.65262C39.8124 8.94285 39.8169 9.23308 39.8215 9.52332C39.8243 9.67851 39.8271 9.83371 39.83 9.9889C39.8663 11.9689 39.8851 13.9492 39.9003 15.9295C39.9023 16.1894 39.9044 16.4493 39.9065 16.7091C39.907 16.7737 39.9076 16.8382 39.9081 16.9048C39.9161 17.8697 39.9315 18.8344 39.9511 19.7992C39.9809 21.2934 39.9998 22.7873 39.9997 24.2818C39.9997 24.3729 39.9997 24.3729 39.9997 24.4658C39.9974 28.4853 39.8821 33.9188 37.1867 37.1783C36.8829 37.4759 36.7135 37.569 36.2948 37.5818C35.9718 37.5752 35.7565 37.5555 35.4995 37.3529C35.3322 37.1705 35.2231 37.004 35.1282 36.7757C34.9995 36.4725 34.8635 36.174 34.7241 35.8756C32.9946 32.1042 32.5639 28.435 32.5607 24.3412C32.5607 24.2806 32.5606 24.22 32.5606 24.1576C32.5599 22.6601 32.5791 21.163 32.6063 19.6658C32.6239 18.6986 32.6351 17.7315 32.641 16.7642C32.6414 16.6998 32.6418 16.6354 32.6422 16.5691C32.6438 16.3101 32.6454 16.0511 32.6469 15.7921C32.6538 14.6164 32.6649 13.4407 32.6771 12.2651C32.6777 12.206 32.6783 12.147 32.6789 12.0862C32.6865 11.3522 32.6961 10.6183 32.709 9.88431C32.7123 9.68093 32.7152 9.47755 32.7176 9.27416C32.7209 8.99625 32.7261 8.71845 32.7319 8.44058C32.7324 8.36081 32.733 8.28104 32.7336 8.19885C32.7579 7.26309 33.1034 6.51956 33.7149 5.82055C34.1044 5.45249 34.5386 5.16626 35.0339 4.96319C35.1013 4.93536 35.1687 4.90753 35.2382 4.87885C36.0668 4.65194 37.1532 4.69159 37.9048 5.11907ZM35.4219 7.53527C35.1531 7.89833 35.1015 8.25106 35.1027 8.69521C35.1027 8.76852 35.1027 8.84183 35.1027 8.91736C35.1031 8.99548 35.1035 9.0736 35.1039 9.15408C35.104 9.23484 35.1042 9.3156 35.1043 9.39881C35.1047 9.6561 35.1057 9.91339 35.1067 10.1707C35.1071 10.3454 35.1074 10.5201 35.1077 10.6948C35.1086 11.1225 35.1099 11.5502 35.1115 11.978C35.2164 11.959 35.2164 11.959 35.3234 11.9396C35.5253 11.9081 35.7084 11.89 35.9117 11.8897C35.9711 11.8896 36.0305 11.8895 36.0917 11.8894C36.1523 11.8897 36.2129 11.89 36.2754 11.8903C36.336 11.89 36.3966 11.8897 36.459 11.8894C36.5185 11.8895 36.5779 11.8896 36.6391 11.8897C36.7187 11.8898 36.7187 11.8898 36.8 11.8899C37.0166 11.9025 37.2259 11.9394 37.4392 11.978C37.4432 11.4662 37.4459 10.9545 37.4478 10.4428C37.4485 10.2689 37.4496 10.0949 37.4509 9.92096C37.4528 9.67041 37.4537 9.41987 37.4544 9.16931C37.4552 9.09199 37.456 9.01468 37.4568 8.93502C37.4569 8.40773 37.4527 7.96454 37.0949 7.54988C36.737 7.24293 36.5399 7.18878 36.082 7.19884C35.7949 7.23523 35.6346 7.34241 35.4219 7.53527ZM35.4219 14.55C35.1298 14.9446 35.1018 15.3248 35.1022 15.8054C35.1021 15.901 35.102 15.9966 35.1019 16.0952C35.1021 16.2005 35.1024 16.3058 35.1027 16.4111C35.1027 16.5225 35.1027 16.6339 35.1027 16.7453C35.1026 17.0473 35.1031 17.3492 35.1036 17.6511C35.1041 17.9668 35.1042 18.2825 35.1043 18.5982C35.1045 19.1958 35.1051 19.7934 35.1059 20.391C35.1068 21.0715 35.1072 21.752 35.1076 22.4324C35.1084 23.8319 35.1098 25.2315 35.1115 26.631C35.2365 26.612 35.2365 26.612 35.364 26.5927C35.6696 26.551 35.9678 26.5416 36.2754 26.5433C36.3276 26.543 36.3798 26.5427 36.4336 26.5424C36.7757 26.5431 37.1015 26.5797 37.4392 26.631C37.4429 25.1669 37.4456 23.7028 37.4473 22.2387C37.4481 21.5588 37.4492 20.879 37.4509 20.1992C37.4525 19.6065 37.4535 19.0139 37.4538 18.4213C37.454 18.1076 37.4545 17.7939 37.4556 17.4801C37.4567 17.1846 37.457 16.8892 37.4568 16.5937C37.4568 16.4854 37.4571 16.3772 37.4577 16.269C37.4905 15.3523 37.4905 15.3523 37.0949 14.5646C36.737 14.2577 36.5399 14.2035 36.082 14.2136C35.7949 14.25 35.6346 14.3572 35.4219 14.55ZM35.3677 29.2322C35.3343 29.274 35.301 29.3159 35.2667 29.359C35.3533 30.0157 35.608 30.6477 35.8195 31.2734C35.8562 31.3829 35.8929 31.4923 35.9295 31.6018C36.0186 31.8676 36.1081 32.1332 36.1978 32.3987C36.249 32.3987 36.3002 32.3987 36.353 32.3987C36.488 32.0052 36.622 31.6113 36.755 31.217C36.8004 31.083 36.8461 30.949 36.8921 30.8151C36.9582 30.6227 37.0231 30.4299 37.0879 30.237C37.1191 30.1474 37.1191 30.1474 37.1509 30.0559C37.2805 29.6685 37.2805 29.6685 37.2065 29.281C36.8595 28.9601 36.5986 28.8679 36.125 28.874C35.8249 28.9065 35.5986 29.0447 35.3677 29.2322Z",fill:"#FF34C5"}),(0,Co.jsx)("path",{d:"M9.32637 21.428C9.43967 21.4966 9.55155 21.5677 9.66097 21.6424C9.7666 21.7075 9.7666 21.7075 9.87435 21.7739C10.1971 22.1071 10.4458 22.5265 10.5921 22.9674C10.5885 23.0437 10.5849 23.1201 10.5811 23.1988C10.5594 23.7177 10.5594 23.7177 10.7595 24.1833C10.9971 24.4282 11.2696 24.627 11.5476 24.8229C11.7304 24.953 11.9026 25.095 12.076 25.2374C12.137 25.286 12.198 25.3345 12.2609 25.3845C12.5546 25.6199 12.8437 25.861 13.1331 26.1018C13.2972 26.2423 13.2972 26.2423 13.4629 26.3189C13.644 26.2615 13.644 26.2615 13.8412 26.1727C14.6376 25.8312 15.6591 25.7714 16.4889 26.0461C16.8829 26.2125 17.1875 26.4781 17.4979 26.7695C17.768 26.8798 17.806 26.8628 18.0671 26.761C18.2142 26.6931 18.3605 26.6235 18.5063 26.5527C18.6013 26.5094 18.6964 26.4664 18.7917 26.4236C19.1671 26.2549 19.541 26.0829 19.9148 25.9106C20.0756 25.8366 20.2366 25.7629 20.3976 25.6893C20.4469 25.6664 20.4963 25.6435 20.5472 25.6199C20.894 25.4615 20.894 25.4615 21.0668 25.4615C21.0782 25.4181 21.0896 25.3747 21.1013 25.33C21.3239 24.5694 21.6782 24.1457 22.3649 23.7569C22.9093 23.4849 23.6774 23.4841 24.2559 23.667C24.4448 23.7605 24.617 23.8618 24.7911 23.9806C24.8615 24.024 24.9319 24.0674 25.0045 24.1122C25.5571 24.6827 25.7467 25.2888 25.7526 26.0641C25.7434 26.5613 25.6135 26.9191 25.3342 27.3321C25.291 27.4029 25.2478 27.4736 25.2033 27.5465C24.7006 28.0378 24.1366 28.2824 23.443 28.3015C23.3416 28.3063 23.2401 28.311 23.1356 28.3158C22.7998 28.3032 22.5935 28.1664 22.307 27.9974C21.9963 27.8446 21.7914 27.7675 21.4604 27.8684C21.1247 28.0006 20.8103 28.1717 20.4945 28.3454C20.3302 28.4311 20.1653 28.5157 20.0003 28.6002C19.8985 28.6528 19.7971 28.7063 19.6964 28.761C19.3805 28.9305 19.0839 29.0373 18.7391 29.1248C18.7427 29.1936 18.7463 29.2624 18.75 29.3333C18.7818 30.3966 18.5094 31.1289 17.808 31.9307C17.4185 32.2988 16.9843 32.585 16.4889 32.7881C16.4215 32.8159 16.3541 32.8437 16.2847 32.8724C15.4457 33.1022 14.3841 33.049 13.6181 32.6322C13.5563 32.5812 13.4946 32.5302 13.431 32.4777C13.2114 32.3004 13.0312 32.1805 12.7646 32.0866C12.3723 32.1644 12.0519 32.3552 11.7123 32.5591C11.6205 32.6108 11.5285 32.6621 11.4363 32.713C11.2687 32.8062 11.1019 32.9011 10.9365 32.9982C10.7472 33.0998 10.7472 33.0998 10.5921 33.0998C10.5889 33.1995 10.5857 33.2992 10.5824 33.4019C10.5222 33.9277 10.2774 34.3596 9.8992 34.7256C9.20368 35.2748 8.50453 35.3743 7.64362 35.2822C7.35414 35.1894 7.11831 35.0635 6.86772 34.8925C6.79731 34.8491 6.72689 34.8057 6.65435 34.761C6.10169 34.1904 5.91216 33.5844 5.90625 32.809C5.9154 32.3118 6.04535 31.954 6.32459 31.541C6.3894 31.4349 6.3894 31.4349 6.45552 31.3267C6.97286 30.821 7.53328 30.5914 8.24495 30.5862C8.29856 30.5846 8.35217 30.583 8.4074 30.5813C8.69629 30.5792 8.90981 30.6032 9.1724 30.7287C9.51452 30.8769 9.68757 30.8081 10.0299 30.6842C11.0069 30.3299 11.0069 30.3299 11.7712 29.6828C11.8682 29.3621 11.8085 29.0585 11.7559 28.7351C11.7729 28.6532 11.7899 28.5713 11.8074 28.4869C11.8583 28.2667 11.8583 28.2667 11.7265 28.1155C11.6706 28.0708 11.6147 28.0261 11.5571 27.98C11.4926 27.9272 11.4281 27.8743 11.3616 27.8199C11.2869 27.7618 11.2122 27.7037 11.1352 27.6439C11.0062 27.542 10.8775 27.4399 10.7487 27.3378C10.6564 27.2651 10.5635 27.1932 10.4701 27.1219C10.2333 26.9398 10.0126 26.7555 9.80403 26.5411C9.32907 26.0583 9.32907 26.0583 8.69382 25.8893C8.51027 25.8907 8.32884 25.8999 8.14571 25.9121C7.62918 25.9459 7.29556 25.8422 6.86772 25.5395C6.79731 25.4961 6.72689 25.4527 6.65435 25.4079C6.10169 24.8374 5.91216 24.2313 5.90625 23.456C5.9154 22.9588 6.04535 22.601 6.32459 22.188C6.36779 22.1172 6.411 22.0465 6.45552 21.9736C7.19954 21.2464 8.36836 20.9541 9.32637 21.428ZM14.2485 28.8228C14.1174 29.1594 14.11 29.4698 14.1612 29.8263C14.329 30.1697 14.5024 30.3874 14.8595 30.5277C15.2508 30.5811 15.5447 30.5725 15.9022 30.3962C16.1628 30.16 16.31 30.0023 16.3583 29.6445C16.3789 29.1989 16.3313 28.922 16.0234 28.5792C15.7257 28.3153 15.4311 28.3054 15.0487 28.318C14.6869 28.3704 14.4831 28.5557 14.2485 28.8228Z",fill:"#FF34C5"}),(0,Co.jsx)("path",{d:"M37.9048 5.11907C38.6914 5.59796 39.2625 6.20809 39.6118 7.06762C39.638 7.13039 39.6642 7.19315 39.6912 7.25782C39.7948 7.63715 39.7957 7.99877 39.8013 8.39057C39.803 8.47705 39.8048 8.56353 39.8066 8.65262C39.8124 8.94285 39.8169 9.23308 39.8215 9.52332C39.8243 9.67851 39.8271 9.83371 39.83 9.9889C39.8663 11.9689 39.8851 13.9492 39.9003 15.9295C39.9023 16.1894 39.9044 16.4493 39.9065 16.7091C39.907 16.7737 39.9076 16.8382 39.9081 16.9048C39.9161 17.8697 39.9315 18.8344 39.9511 19.7992C39.9809 21.2934 39.9998 22.7873 39.9997 24.2818C39.9997 24.3729 39.9997 24.3729 39.9997 24.4658C39.9974 28.4853 39.8821 33.9188 37.1867 37.1783C36.8829 37.4759 36.7135 37.569 36.2948 37.5818C35.9718 37.5752 35.7565 37.5555 35.4995 37.3529C35.3322 37.1705 35.2231 37.004 35.1282 36.7757C34.9995 36.4725 34.8635 36.174 34.7241 35.8756C32.9946 32.1042 32.5639 28.435 32.5607 24.3412C32.5607 24.2806 32.5606 24.22 32.5606 24.1576C32.5599 22.6601 32.5791 21.163 32.6063 19.6658C32.6239 18.6986 32.6351 17.7315 32.641 16.7642C32.6414 16.6998 32.6418 16.6354 32.6422 16.5691C32.6438 16.3101 32.6454 16.0511 32.6469 15.7921C32.6538 14.6164 32.6649 13.4407 32.6771 12.2651C32.6777 12.206 32.6783 12.147 32.6789 12.0862C32.6865 11.3522 32.6961 10.6183 32.709 9.88431C32.7123 9.68093 32.7152 9.47755 32.7176 9.27416C32.7209 8.99625 32.7261 8.71845 32.7319 8.44058C32.7324 8.36081 32.733 8.28104 32.7336 8.19885C32.7579 7.26309 33.1034 6.51956 33.7149 5.82055C34.1044 5.45249 34.5386 5.16626 35.0339 4.96319C35.1013 4.93536 35.1687 4.90753 35.2382 4.87885C36.0668 4.65194 37.1532 4.69159 37.9048 5.11907ZM35.4219 7.53527C35.1531 7.89833 35.1015 8.25106 35.1027 8.69521C35.1027 8.76852 35.1027 8.84183 35.1027 8.91736C35.1031 8.99548 35.1035 9.0736 35.1039 9.15408C35.104 9.23484 35.1042 9.3156 35.1043 9.39881C35.1047 9.6561 35.1057 9.91339 35.1067 10.1707C35.1071 10.3454 35.1074 10.5201 35.1077 10.6948C35.1086 11.1225 35.1099 11.5502 35.1115 11.978C35.2164 11.959 35.2164 11.959 35.3234 11.9396C35.5253 11.9081 35.7084 11.89 35.9117 11.8897C35.9711 11.8896 36.0305 11.8895 36.0917 11.8894C36.1523 11.8897 36.2129 11.89 36.2754 11.8903C36.336 11.89 36.3966 11.8897 36.459 11.8894C36.5185 11.8895 36.5779 11.8896 36.6391 11.8897C36.7187 11.8898 36.7187 11.8898 36.8 11.8899C37.0166 11.9025 37.2259 11.9394 37.4392 11.978C37.4432 11.4662 37.4459 10.9545 37.4478 10.4428C37.4485 10.2689 37.4496 10.0949 37.4509 9.92096C37.4528 9.67041 37.4537 9.41987 37.4544 9.16931C37.4552 9.09199 37.456 9.01468 37.4568 8.93502C37.4569 8.40773 37.4527 7.96454 37.0949 7.54988C36.737 7.24293 36.5399 7.18878 36.082 7.19884C35.7949 7.23523 35.6346 7.34241 35.4219 7.53527ZM35.4219 14.55C35.1298 14.9446 35.1018 15.3248 35.1022 15.8054C35.1021 15.901 35.102 15.9966 35.1019 16.0952C35.1021 16.2005 35.1024 16.3058 35.1027 16.4111C35.1027 16.5225 35.1027 16.6339 35.1027 16.7453C35.1026 17.0473 35.1031 17.3492 35.1036 17.6511C35.1041 17.9668 35.1042 18.2825 35.1043 18.5982C35.1045 19.1958 35.1051 19.7934 35.1059 20.391C35.1068 21.0715 35.1072 21.752 35.1076 22.4324C35.1084 23.8319 35.1098 25.2315 35.1115 26.631C35.2365 26.612 35.2365 26.612 35.364 26.5927C35.6696 26.551 35.9678 26.5416 36.2754 26.5433C36.3276 26.543 36.3798 26.5427 36.4336 26.5424C36.7757 26.5431 37.1015 26.5797 37.4392 26.631C37.4429 25.1669 37.4456 23.7028 37.4473 22.2387C37.4481 21.5588 37.4492 20.879 37.4509 20.1992C37.4525 19.6065 37.4535 19.0139 37.4538 18.4213C37.454 18.1076 37.4545 17.7939 37.4556 17.4801C37.4567 17.1846 37.457 16.8892 37.4568 16.5937C37.4568 16.4854 37.4571 16.3772 37.4577 16.269C37.4905 15.3523 37.4905 15.3523 37.0949 14.5646C36.737 14.2577 36.5399 14.2035 36.082 14.2136C35.7949 14.25 35.6346 14.3572 35.4219 14.55ZM35.3677 29.2322C35.3343 29.274 35.301 29.3159 35.2667 29.359C35.3533 30.0157 35.608 30.6477 35.8195 31.2734C35.8562 31.3829 35.8929 31.4923 35.9295 31.6018C36.0186 31.8676 36.1081 32.1332 36.1978 32.3987C36.249 32.3987 36.3002 32.3987 36.353 32.3987C36.488 32.0052 36.622 31.6113 36.755 31.217C36.8004 31.083 36.8461 30.949 36.8921 30.8151C36.9582 30.6227 37.0231 30.4299 37.0879 30.237C37.1191 30.1474 37.1191 30.1474 37.1509 30.0559C37.2805 29.6685 37.2805 29.6685 37.2065 29.281C36.8595 28.9601 36.5986 28.8679 36.125 28.874C35.8249 28.9065 35.5986 29.0447 35.3677 29.2322Z",fill:"#FF34C5"}),(0,Co.jsx)("path",{d:"M6.25676 11.7924C6.3366 11.7919 6.41645 11.7915 6.49872 11.7911C6.76665 11.79 7.03455 11.7905 7.30248 11.7911C7.49441 11.7906 7.68635 11.7901 7.87829 11.7895C8.34574 11.7882 8.81318 11.7881 9.28063 11.7885C9.66058 11.7888 10.0405 11.7887 10.4205 11.7883C10.4746 11.7882 10.5286 11.7881 10.5844 11.7881C10.6942 11.788 10.8041 11.7878 10.9139 11.7877C11.9442 11.7867 12.9744 11.7871 14.0046 11.788C14.9471 11.7887 15.8895 11.7877 16.8319 11.7859C17.7997 11.784 18.7675 11.7832 19.7354 11.7837C20.2787 11.784 20.822 11.7838 21.3653 11.7825C21.8761 11.7812 22.3869 11.7816 22.8977 11.783C23.0853 11.7833 23.2729 11.7831 23.4605 11.7823C23.7164 11.7812 23.9722 11.7821 24.2281 11.7835C24.3025 11.7828 24.377 11.782 24.4537 11.7812C24.8895 11.7861 25.1452 11.8386 25.4893 12.1344C25.804 12.5414 25.7821 12.9647 25.722 13.4594C25.5536 13.8166 25.3787 13.9971 25.0237 14.1608C24.7618 14.1953 24.5018 14.1927 24.2379 14.1911C24.1181 14.1917 24.1181 14.1917 23.9959 14.1923C23.728 14.1934 23.4601 14.1929 23.1922 14.1923C23.0002 14.1928 22.8083 14.1933 22.6164 14.194C22.1489 14.1952 21.6815 14.1954 21.214 14.1949C20.8341 14.1946 20.4541 14.1947 20.0742 14.1952C20.0201 14.1952 19.966 14.1953 19.9103 14.1953C19.8004 14.1955 19.6906 14.1956 19.5807 14.1957C18.5505 14.1968 17.5203 14.1963 16.49 14.1955C15.5476 14.1947 14.6052 14.1957 13.6627 14.1976C12.6949 14.1995 11.7271 14.2002 10.7593 14.1997C10.216 14.1994 9.6727 14.1996 9.1294 14.2009C8.61857 14.2022 8.10777 14.2018 7.59694 14.2004C7.40933 14.2001 7.22172 14.2003 7.03411 14.2011C6.77825 14.2022 6.52247 14.2013 6.26661 14.1999C6.15492 14.201 6.15492 14.201 6.04098 14.2022C5.60512 14.1973 5.34947 14.1448 5.00539 13.8491C4.69066 13.442 4.71257 13.0187 4.77262 12.5241C5.09761 11.8349 5.56739 11.788 6.25676 11.7924Z",fill:"#FF34C5"}),(0,Co.jsx)("path",{d:"M6.08002 16.4681C6.14085 16.4677 6.20169 16.4673 6.26437 16.4669C6.46797 16.4658 6.67152 16.4663 6.87512 16.4669C7.02119 16.4664 7.16727 16.4659 7.31334 16.4653C7.70995 16.4639 8.10654 16.4639 8.50315 16.4644C8.83423 16.4646 9.16531 16.4642 9.49639 16.4637C10.2774 16.4626 11.0584 16.4627 11.8395 16.4636C12.6453 16.4645 13.4511 16.4634 14.2569 16.4613C14.9487 16.4596 15.6406 16.4591 16.3324 16.4595C16.7456 16.4598 17.1588 16.4596 17.572 16.4583C17.9606 16.4571 18.3491 16.4574 18.7376 16.4588C18.8802 16.4591 19.0228 16.4589 19.1653 16.4581C19.36 16.457 19.5547 16.4579 19.7494 16.4593C19.8057 16.4586 19.8621 16.4578 19.9201 16.457C20.3112 16.4627 20.5319 16.5647 20.8338 16.8101C21.1486 17.2172 21.1267 17.6405 21.0666 18.1351C20.8977 18.4933 20.7203 18.6662 20.3683 18.8366C20.1591 18.8588 19.9681 18.8686 19.7592 18.8668C19.6984 18.8673 19.6375 18.8677 19.5749 18.8681C19.3713 18.8692 19.1677 18.8687 18.9641 18.8681C18.818 18.8686 18.672 18.8691 18.5259 18.8697C18.1293 18.8711 17.7327 18.871 17.3361 18.8706C17.005 18.8704 16.6739 18.8708 16.3428 18.8713C15.5618 18.8724 14.7808 18.8723 13.9998 18.8714C13.1939 18.8705 12.3882 18.8716 11.5823 18.8737C10.8905 18.8754 10.1987 18.8759 9.50684 18.8755C9.09363 18.8752 8.68044 18.8754 8.26723 18.8767C7.87868 18.8779 7.49015 18.8776 7.1016 18.8762C6.95903 18.8759 6.81646 18.8761 6.6739 18.8769C6.47919 18.878 6.28458 18.8771 6.08987 18.8757C6.03353 18.8764 5.97718 18.8772 5.91913 18.878C5.52801 18.8723 5.30737 18.7703 5.00539 18.5249C4.69066 18.1178 4.71257 17.6945 4.77262 17.1998C5.05466 16.6017 5.45175 16.4629 6.08002 16.4681Z",fill:"#FF34C5"})]}),title:"\uac1d\uad00\uc801\uc778 \uc6d0\uc778 \ubd84\uc11d\uac00",desc:"\ubb38\uc81c\uc758 \ubcf8\uc9c8\ub9cc\uc744 \ud30c\uc545\ud574\uc11c \ubd84\uc11d\ud574\uc694.\n\ub17c\ub9ac\uc801\uc774\uace0 \uba85\ud655\ud55c \ubd84\uc11d\uacfc \ubc29\ud5a5\uc131\uc744 \uc5bb\uc2b5\ub2c8\ub2e4.",badge:"\uc57d\uac04 \ub9e4\uc6b4\ub9db",badgeColor:"#EC4899",badgeBg:"#FFF0F7"},{id:"cold",icon:(0,Co.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,Co.jsx)("path",{d:"M22.4954 0.388831C22.6286 0.432509 22.6286 0.432509 22.7644 0.477069C23.7965 0.845527 25.0103 1.43232 25.7182 2.30842C25.9091 2.46296 26.0485 2.4357 26.291 2.42593C26.4234 2.42232 26.4234 2.42232 26.5585 2.41864C26.6993 2.41397 26.6993 2.41397 26.843 2.40919C28.6099 2.38217 29.9742 2.91681 31.2606 4.15145C32.0422 4.96417 32.6484 6.04212 32.7891 7.16557C32.8591 7.16195 32.9291 7.15834 33.0011 7.15461C34.8734 7.10052 36.5595 7.87233 37.9192 9.13376C39.2176 10.3925 39.9472 12.0988 39.9948 13.8946C40.0179 16.042 39.3471 17.7179 37.858 19.2683C36.3282 20.7348 34.4638 21.2316 32.3913 21.2074C30.5921 21.1579 28.8804 20.3062 27.6423 19.0054C27.6423 18.954 27.6423 18.9026 27.6423 18.8496C27.5016 18.9158 27.3621 18.9845 27.2231 19.0541C27.1453 19.092 27.0675 19.13 26.9874 19.1691C26.5946 19.4553 26.5778 20.0074 26.4963 20.4629C26.478 20.5627 26.478 20.5627 26.4593 20.6646C26.4193 20.8834 26.3798 21.1023 26.3403 21.3212C26.3126 21.4736 26.2849 21.6261 26.2571 21.7786C26.1991 22.0974 26.1413 22.4164 26.0837 22.7353C26.0097 23.1446 25.9353 23.5537 25.8608 23.9628C25.8035 24.2773 25.7464 24.5918 25.6894 24.9064C25.662 25.0573 25.6346 25.2082 25.6071 25.3591C25.5688 25.5695 25.5308 25.7801 25.4929 25.9906C25.4814 26.0531 25.47 26.1156 25.4582 26.1801C25.4163 26.4143 25.3808 26.6341 25.3808 26.8726C25.4326 26.8191 25.4843 26.7656 25.5377 26.7104C25.641 26.6052 25.641 26.6052 25.7463 26.4978C25.8142 26.4282 25.882 26.3586 25.952 26.2869C26.3846 25.8863 26.6811 25.817 27.2615 25.8326C27.5659 25.8697 27.7325 25.9615 27.9542 26.1716C28.1962 26.4954 28.2168 26.7346 28.2147 27.1344C28.2148 27.1907 28.2148 27.2469 28.2148 27.3049C28.2147 27.49 28.2128 27.675 28.211 27.86C28.2106 27.9887 28.2102 28.1173 28.21 28.246C28.2091 28.584 28.2068 28.9219 28.2042 29.2598C28.2018 29.6049 28.2008 29.9501 28.1996 30.2952C28.1971 30.9719 28.1931 31.6485 28.1882 32.3252C28.2535 32.3027 28.3188 32.2803 28.3861 32.2572C29.0051 32.0448 29.6245 31.8338 30.2444 31.6244C30.563 31.5167 30.8814 31.4085 31.1994 31.299C31.507 31.1932 31.8149 31.0889 32.1232 30.9854C32.2402 30.9459 32.3569 30.9059 32.4735 30.8654C34.0501 30.3185 34.0501 30.3185 34.7826 30.6651C35.088 30.9545 35.2442 31.2258 35.27 31.6485C35.2517 32.0883 35.11 32.3786 34.8709 32.7378C34.819 32.8182 34.819 32.8182 34.766 32.9002C34.654 33.0728 34.5406 33.2443 34.4268 33.4157C34.3709 33.5004 34.3709 33.5004 34.3139 33.5869C34.0434 33.997 33.77 34.4052 33.4958 34.8129C33.3763 34.9909 33.2569 35.1689 33.1375 35.347C33.0644 35.4561 32.9911 35.5652 32.9177 35.6742C32.5031 36.2924 32.1012 36.9188 31.6974 37.544C31.7911 37.5443 31.8848 37.5446 31.9814 37.5449C32.8649 37.5478 33.7484 37.5523 34.6319 37.5584C35.0861 37.5614 35.5403 37.5639 35.9946 37.5651C36.433 37.5663 36.8713 37.569 37.3097 37.5727C37.4769 37.5739 37.6441 37.5745 37.8113 37.5746C38.0457 37.5747 38.2799 37.5768 38.5142 37.5794C38.5832 37.579 38.6523 37.5786 38.7234 37.5782C39.148 37.5854 39.3929 37.6509 39.7296 37.9335C40.0459 38.3403 40.0239 38.7633 39.9635 39.2577C39.7939 39.6154 39.6161 39.7899 39.2617 39.9587C39.0397 39.9808 38.8351 39.9903 38.6134 39.9884C38.548 39.9887 38.4827 39.9891 38.4153 39.9895C38.1954 39.9904 37.9754 39.9897 37.7554 39.9889C37.5965 39.9893 37.4376 39.9897 37.2787 39.9902C36.8413 39.9913 36.4039 39.991 35.9664 39.9904C35.4949 39.9901 35.0235 39.991 34.552 39.9918C33.6815 39.9931 32.811 39.9933 31.9405 39.9929C31.1364 39.9925 30.3322 39.9926 29.528 39.993C29.4202 39.9931 29.3124 39.9932 29.2046 39.9932C29.0421 39.9933 28.8797 39.9934 28.7172 39.9935C27.2066 39.9943 25.696 39.9947 24.1854 39.9941C24.1285 39.994 24.0715 39.994 24.0128 39.994C23.5502 39.9938 23.0876 39.9936 22.625 39.9934C20.8204 39.9926 19.0158 39.9933 17.2112 39.9951C15.1843 39.9971 13.1574 39.9981 11.1305 39.9975C10.9145 39.9975 10.6985 39.9974 10.4824 39.9974C10.4292 39.9974 10.376 39.9974 10.3212 39.9974C9.51757 39.9972 8.7139 39.9978 7.91024 39.9988C6.99647 40 6.08271 40 5.16894 39.9987C4.70249 39.998 4.23606 39.9978 3.76961 39.999C3.34289 40.0001 2.91621 39.9997 2.48949 39.9982C2.33484 39.9979 2.18019 39.9982 2.02555 39.999C1.81581 40 1.60617 39.9991 1.39644 39.9977C1.33597 39.9985 1.27551 39.9992 1.21321 40C0.809834 39.9945 0.58135 39.9012 0.270425 39.6472C-0.0458961 39.2403 -0.0238794 38.8173 0.0364771 38.323C0.205918 37.9657 0.382481 37.7877 0.73832 37.6219C0.984499 37.5871 1.22864 37.5878 1.47696 37.5882C1.5508 37.5875 1.62464 37.5867 1.70071 37.5858C1.94417 37.5835 2.18761 37.5828 2.43109 37.5821C2.60013 37.5808 2.76916 37.5793 2.9382 37.5778C3.38267 37.5741 3.82714 37.5718 4.27162 37.5698C4.72535 37.5675 5.17907 37.5638 5.63279 37.5603C6.52273 37.5536 7.41267 37.5484 8.30262 37.544C7.83131 36.815 7.35931 36.0866 6.88005 35.3627C6.78156 35.2137 6.68306 35.0646 6.58457 34.9156C6.43368 34.6874 6.28276 34.4593 6.13183 34.2311C5.98314 34.0063 5.83454 33.7814 5.68594 33.5566C5.64118 33.489 5.59642 33.4214 5.5503 33.3517C5.42739 33.1657 5.30514 32.9793 5.18332 32.7925C5.145 32.7341 5.10668 32.6756 5.06719 32.6153C5.03182 32.5604 4.99646 32.5054 4.96002 32.4488C4.92893 32.4007 4.89785 32.3526 4.86582 32.3031C4.68707 31.9729 4.73885 31.5935 4.79341 31.2347C4.9643 30.8743 5.14498 30.7132 5.49525 30.5336C6.26293 30.3919 6.98621 30.6777 7.69948 30.9255C7.81874 30.9658 7.93804 31.006 8.05738 31.046C8.36856 31.1508 8.67915 31.2573 8.98963 31.3641C9.30768 31.4732 9.62627 31.5807 9.94483 31.6883C10.5677 31.899 11.19 32.1115 11.8118 32.3252C11.8111 32.254 11.8105 32.1828 11.8097 32.1095C11.8035 31.4379 11.7987 30.7663 11.7957 30.0947C11.794 29.7495 11.7918 29.4042 11.7883 29.059C11.7849 28.7257 11.783 28.3924 11.7822 28.059C11.7817 27.932 11.7805 27.805 11.7789 27.678C11.7766 27.4997 11.7763 27.3215 11.7764 27.1432C11.7757 27.0419 11.775 26.9405 11.7743 26.8361C11.8284 26.4396 11.9947 26.193 12.3099 25.9504C12.6835 25.7847 13.0503 25.7967 13.4495 25.86C13.6982 25.9784 13.8782 26.135 14.0733 26.3274C14.1259 26.3777 14.1785 26.428 14.2326 26.4798C14.3641 26.6085 14.4921 26.7396 14.6192 26.8726C14.4521 25.6496 14.2431 24.434 14.0293 23.2184C13.9637 22.8456 13.8994 22.4726 13.8376 22.0991C13.7774 21.7348 13.7142 21.371 13.649 21.0075C13.6248 20.8698 13.6016 20.7319 13.5796 20.5938C13.4821 19.8465 13.4821 19.8465 13.1255 19.2071C12.8773 19.0372 12.6418 18.9442 12.3577 18.8496C12.3416 18.8924 12.3255 18.9351 12.309 18.9792C12.1613 19.2299 11.9554 19.3967 11.7339 19.5798C11.6881 19.6178 11.6424 19.6558 11.5952 19.6949C9.9693 21.0215 8.09107 21.3226 6.04113 21.1864C5.60477 21.1359 5.20688 21.025 4.79341 20.8748C4.74236 20.8564 4.6913 20.838 4.6387 20.8191C2.80578 20.1406 1.4083 18.8172 0.585191 17.0545C0.561738 17.0026 0.538284 16.9508 0.51412 16.8974C0.482031 16.8273 0.482031 16.8273 0.449293 16.7558C0.0964142 15.9293 -0.00554998 15.0822 0.00235979 14.1906C0.00306346 14.095 0.00376713 13.9993 0.00449213 13.9008C0.0422472 11.9195 0.899173 10.2821 2.31868 8.91513C3.26236 8.06678 4.42099 7.52778 5.65122 7.24346C5.71314 7.2282 5.77506 7.21293 5.83886 7.19721C6.10966 7.15484 6.37715 7.1573 6.65037 7.1607C6.7044 7.16105 6.75843 7.1614 6.8141 7.16176C6.94636 7.16267 7.07861 7.16407 7.21087 7.16557C7.21489 7.1238 7.21891 7.08202 7.22305 7.03899C7.41273 5.72996 8.31248 4.40785 9.33498 3.60042C10.6097 2.6683 11.8323 2.33661 13.3934 2.45974C13.9105 2.48306 14.1832 2.43989 14.5723 2.08484C14.6924 1.96134 14.812 1.83744 14.9311 1.71302C16.9776 0.0917003 20.0218 -0.444766 22.4954 0.388831ZM15.711 4.28351C15.6177 4.38698 15.5262 4.49209 15.438 4.59995C15.238 4.83468 15.1505 4.92091 14.8532 4.98455C14.5202 5.00601 14.2984 5.00589 13.9789 4.90726C13.1559 4.68861 12.1748 4.73025 11.4219 5.14033C10.5975 5.65856 9.95391 6.40131 9.62833 7.32135C9.64653 7.64368 9.64653 7.64368 9.34658 7.32135ZM9.62833 7.32135C9.5578 7.65088 9.52527 7.98384 9.48972 8.3186C9.43809 8.73468 9.37014 9.02232 9.08245 9.34658C8.68175 9.63322 8.34007 9.59013 7.87372 9.54619C6.39246 9.44255 5.07853 9.77396 3.91885 10.7362C3.10529 11.4989 2.48309 12.6153 2.43535 13.7403C2.41804 14.5329 2.44502 15.2281 2.76587 15.9675C2.79713 16.0398 2.82839 16.1121 2.8606 16.1866C3.44334 17.3744 4.45547 18.1744 5.68899 18.6153C6.9363 18.9725 8.14404 18.8756 9.3164 18.3043C9.79092 18.0237 10.19 17.6949 10.5641 17.2917C10.459 16.9829 10.3247 16.788 10.1011 16.5517C9.73776 16.1664 9.51693 15.889 9.5211 15.3444C9.5202 15.2263 9.5202 15.2263 9.51927 15.1058C9.56675 14.7562 9.68604 14.5635 9.96463 14.3482C10.2063 14.2394 10.3778 14.2226 10.6421 14.2247C10.7209 14.2241 10.7997 14.2235 10.8809 14.2228C11.2134 14.2679 11.4131 14.3886 11.6333 14.6397C11.6762 14.6987 11.719 14.7578 11.7631 14.8186C12.5444 15.8196 13.4549 16.6362 14.5412 17.2917C14.5933 17.3232 14.6453 17.3547 14.6989 17.3872C16.9963 18.7491 19.7804 19.1902 22.3819 18.5672C24.6362 17.9798 26.9834 16.712 28.3164 14.7374C28.4989 14.4892 28.6091 14.3728 28.89 14.2539C29.1191 14.2228 29.1191 14.2228 29.3579 14.2247C29.4367 14.2241 29.5155 14.2235 29.5967 14.2228C29.8636 14.259 30.0031 14.3233 30.2157 14.4876C30.4806 14.8368 30.5073 15.1339 30.4978 15.5622C30.41 16.0173 30.124 16.3266 29.8258 16.6686C29.7478 16.7643 29.6698 16.86 29.5918 16.9558C29.5404 17.0152 29.4889 17.0747 29.4359 17.1359C29.7484 17.8599 30.5352 18.2532 31.2295 18.538C32.5287 18.9975 33.8075 18.8955 35.0506 18.3043C36.2782 17.6446 37.0141 16.6524 37.4681 15.3444C37.7228 14.4078 37.615 13.2622 37.2341 12.3844C37.2029 12.3121 37.1716 12.2398 37.1394 12.1654C36.5565 10.9773 35.5439 10.1768 34.3098 9.73635C33.4918 9.50199 32.7025 9.47499 31.8623 9.56509C31.4753 9.60075 31.2381 9.57 30.9176 9.34658C30.5835 8.96918 30.5501 8.61961 30.5033 8.13923C30.3824 7.15882 30.0358 6.30174 29.2833 5.62656C28.5762 5.10614 27.9108 4.80046 27.0233 4.80929C26.963 4.80868 26.9028 4.80808 26.8407 4.80746C26.457 4.80876 26.1394 4.86855 25.7707 4.98455C25.3492 5.04153 25.0452 4.96581 24.679 4.75087C24.5126 4.5823 24.5126 4.5823 24.3573 4.39061C23.3461 3.23417 21.9643 2.59423 20.4484 2.42867C18.6106 2.32314 17.0289 3.04013 15.711 4.28351ZM16.0229 20.6411C16.3174 22.4513 16.6361 24.2568 16.9625 26.0615C17.0191 26.3752 17.0754 26.689 17.1312 27.0029C17.1997 27.3881 17.269 27.7731 17.3389 28.158C17.3651 28.3031 17.391 28.4482 17.4166 28.5934C17.4522 28.7945 17.4888 28.9953 17.5256 29.1962C17.5358 29.2552 17.546 29.3143 17.5566 29.3751C17.6396 29.8188 17.7869 30.1354 18.1072 30.4522C18.168 30.5129 18.168 30.5129 18.2301 30.5749C18.2733 30.6172 18.3164 30.6595 18.3608 30.7031C18.4279 30.7697 18.4279 30.7697 18.4962 30.8376C18.6381 30.9785 18.7805 31.1187 18.9229 31.259C19.0195 31.3548 19.1161 31.4506 19.2127 31.5464C19.4487 31.7804 19.6852 32.014 19.922 32.2473C20.3856 32.0522 20.7417 31.6621 21.1023 31.3214C21.1943 31.2359 21.2879 31.152 21.383 31.0699C22.2588 30.3115 22.4382 29.5742 22.5998 28.455C22.6584 28.0612 22.7311 27.6701 22.8039 27.2787C22.8179 27.2029 22.832 27.1272 22.8465 27.0491C22.8759 26.891 22.9053 26.7329 22.9347 26.5748C23.01 26.1676 23.0834 25.7601 23.1569 25.3526C23.187 25.1858 23.2171 25.0191 23.2472 24.8523C23.2697 24.7274 23.2697 24.7274 23.2927 24.6001C23.3546 24.2576 23.4167 23.9152 23.4788 23.5728C23.5386 23.2427 23.5983 22.9125 23.658 22.5824C23.6864 22.4249 23.715 22.2674 23.7435 22.1099C23.783 21.8919 23.8223 21.6739 23.8616 21.4558C23.8734 21.391 23.8852 21.3262 23.8973 21.2593C23.9558 20.9522 23.9558 20.9522 23.9771 20.6411C23.4136 20.7388 22.8552 20.8521 22.2971 20.9774C21.79 21.0775 21.2944 21.121 20.778 21.1243C20.7203 21.1249 20.6626 21.1254 20.6032 21.126C20.4184 21.1273 20.2336 21.1278 20.0487 21.128C19.9858 21.1281 19.9228 21.1282 19.858 21.1283C18.9484 21.128 18.0796 21.0926 17.1926 20.8748C17.0528 20.8414 17.0528 20.8414 16.9102 20.8073C16.7514 20.768 16.5929 20.7273 16.435 20.684C16.2495 20.632 16.2495 20.632 16.0229 20.6411ZM14.1513 29.9884C14.1506 30.072 14.1506 30.072 14.1499 30.1573C14.1454 30.6833 14.1398 31.2093 14.1329 31.7353C14.1294 32.0057 14.1264 32.2762 14.1243 32.5466C14.1219 32.8577 14.1176 33.1688 14.1132 33.4799C14.1127 33.5767 14.1122 33.6735 14.1117 33.7732C14.1102 33.8637 14.1086 33.9541 14.107 34.0472C14.1062 34.1266 14.1053 34.206 14.1044 34.2878C14.0682 34.5421 13.9892 34.6886 13.8394 34.8957C13.4118 35.2142 13.028 35.2024 12.5137 35.1293C11.9419 34.9838 11.3874 34.777 10.8322 34.5792C10.6074 34.5001 10.3826 34.4214 10.1574 34.3434C10.0181 34.2952 9.87903 34.2461 9.74028 34.1963C9.67775 34.1744 9.61521 34.1526 9.55078 34.1301C9.49594 34.1105 9.4411 34.091 9.38459 34.0709C9.22193 34.0221 9.22193 34.0221 9.00447 34.1167C9.50065 34.9372 10.0298 35.7339 10.569 36.5265C10.6027 36.5762 10.6364 36.6258 10.6712 36.6769C10.9803 37.1724 10.9803 37.1724 11.3439 37.6219C11.5653 37.6315 11.7849 37.6359 12.0064 37.6371C12.0767 37.6377 12.147 37.6384 12.2195 37.6391C12.457 37.6412 12.6945 37.6428 12.9321 37.6444C13.1017 37.6457 13.2712 37.6471 13.4408 37.6486C14.9904 37.661 16.54 37.6675 18.0897 37.6727C19.2357 37.6766 20.3816 37.6833 21.5276 37.6936C22.3327 37.7006 23.1378 37.7044 23.943 37.7057C24.4242 37.7066 24.9052 37.709 25.3863 37.7149C25.8392 37.7204 26.292 37.7219 26.7449 37.7203C26.911 37.7204 27.0771 37.722 27.2432 37.7251C28.1197 37.7728 28.1197 37.7728 28.8888 37.4359C29.0501 37.218 29.1665 37.0104 29.2799 36.7651C29.3512 36.6563 29.4241 36.5485 29.4998 36.4427C29.5656 36.3434 29.4241 36.5485 29.4998 36.4427ZM29.5656 36.3434 29.6311 36.244 29.6963 36.1444C29.7316 36.0908 29.7669 36.0373 29.8032 35.9821C29.8764 35.8709 29.9494 35.7597 30.0224 35.6483C30.1342 35.4777 30.2466 35.3075 30.359 35.1372C30.4306 35.0283 30.5021 34.9194 30.5736 34.8105C30.6071 34.7598 30.6406 34.7092 30.675 34.657C30.8089 34.4521 30.9177 34.2721 30.9955 34.0388C30.531 34.1325 30.0897 34.2547 29.6439 34.4143C29.5226 34.4564 29.4012 34.4985 29.2798 34.5406C29.0922 34.6059 28.9048 34.6716 28.7178 34.7385C27.0162 35.345 27.0162 35.345 26.345 35.0341C26.0739 34.8305 25.9436 34.6254 25.8956 34.2878C25.8947 34.2084 25.8938 34.129 25.893 34.0472C25.8914 33.9568 25.8899 33.8664 25.8883 33.7732C25.8875 33.628 25.8875 33.628 25.8868 33.4799C25.8854 33.3801 25.884 33.2804 25.8825 33.1777C25.8788 32.9135 25.8765 32.6493 25.8745 32.3852C25.8721 32.1152 25.8685 31.8452 25.865 31.5753C25.8584 31.0463 25.853 30.5174 25.8487 29.9884C25.3441 30.399 24.8912 30.8589 24.4338 31.3203C24.2884 31.4668 24.1428 31.6131 23.997 31.7593C23.5831 32.1747 23.1695 32.5906 22.7563 33.0068C22.5027 33.2622 22.2487 33.5172 21.9945 33.772C21.898 33.8688 21.8017 33.9658 21.7055 34.063C21.5712 34.1987 21.4364 34.3339 21.3014 34.469C21.2425 34.5289 21.2425 34.5289 21.1823 34.59C20.8206 34.9504 20.5332 35.163 20.0146 35.1731C19.9005 35.1781 19.9005 35.1781 19.784 35.1832C19.0139 35.0185 18.363 34.1355 17.8265 33.594C17.7228 33.4898 17.6189 33.3857 17.5151 33.2816C17.2434 33.0092 16.9721 32.7364 16.701 32.4634C16.2652 32.0247 16.0229 20.6411 16.3174 22.4513 16.6361 24.2568 16.9625 26.0615 17.0191 26.3752 17.0754 26.689 17.1312 27.0029 17.1997 27.3881 17.269 27.7731 17.3389 28.158 17.3651 28.3031 17.391 28.4482 17.4166 28.5934 17.4522 28.7945 17.4888 28.9953 17.5256 29.1962 17.5358 29.2552 17.546 29.3143 17.5566 29.3751 17.6396 29.8188 17.7869 30.1354 18.1072 30.4522 18.168 30.5129 18.168 30.5129 18.2301 30.5749 18.2733 30.6172 18.3164 30.6595 18.3608 30.7031 18.4279 30.7697 18.4279 30.7697 18.4962 30.8376 18.6381 30.9785 18.7805 31.1187 18.9229 31.259 19.0195 31.3548 19.1161 31.4506 19.2127 31.5464 19.4487 31.7804 19.6852 32.014 19.922 32.2473 20.3856 32.0522 20.7417 31.6621 21.1023 31.3214 21.1943 31.2359 21.2879 31.152 21.383 31.0699 22.2588 30.3115 22.4382 29.5742 22.5998 28.455C22.6584 28.0612 22.7311 27.6701 22.8039 27.2787C22.8179 27.2029 22.832 27.1272 22.8465 27.0491C22.8759 26.891 22.9053 26.7329 22.9347 26.5748C23.01 26.1676 23.0834 25.7601 23.1569 25.3526C23.187 25.1858 23.2171 25.0191 23.2472 24.8523C23.2697 24.7274 23.2697 24.7274 23.2927 24.6001C23.3546 24.2576 23.4167 23.9152 23.4788 23.5728C23.5386 23.2427 23.5983 22.9125 23.658 22.5824C23.6864 22.4249 23.715 22.2674 23.7435 22.1099C23.783 21.8919 23.8223 21.6739 23.8616 21.4558C23.8734 21.391 23.8852 21.3262 23.8973 21.2593C23.9558 20.9522 23.9558 20.9522 23.9771 20.6411C23.4136 20.7388 22.8552 20.8521 22.2971 20.9774C21.79 21.0775 21.2944 21.121 20.778 21.1243C20.7203 21.1249 20.6626 21.1254 20.6032 21.126C20.4184 21.1273 20.2336 21.1278 20.0487 21.128C19.9858 21.1281 19.9228 21.1282 19.858 21.1283C18.9484 21.128 18.0796 21.0926 17.1926 20.8748C17.0528 20.8414 17.0528 20.8414 16.9102 20.8073C16.7514 20.768 16.5929 20.7273 16.435 20.684C16.2495 20.632 16.2495 20.632 16.0229 20.6411Z",fill:"#F53102"}),(0,Co.jsx)("path",{d:"M20.468 23.5247C20.8258 23.694 21.0039 23.8703 21.1699 24.2258C21.2046 24.4716 21.2045 24.7151 21.2037 24.963C21.2041 25.034 21.2045 25.1049 21.2049 25.178C21.2054 25.3278 21.2053 25.4775 21.2047 25.6272C21.204 25.8556 21.2062 26.0839 21.2087 26.3123C21.2088 26.4581 21.2088 26.6039 21.2086 26.7497C21.2099 26.8516 21.2099 26.8516 21.2112 26.9555C21.2064 27.3817 21.1426 27.6269 20.8579 27.9646C20.4507 28.2806 20.0272 28.2586 19.5322 28.1983C19.1745 28.0291 18.9964 27.8527 18.8304 27.4973C18.7957 27.2515 18.7958 27.008 18.7966 26.76C18.7962 26.6891 18.7958 26.6181 18.7954 26.545C18.7949 26.3953 18.795 26.2456 18.7956 26.0958C18.7963 25.8674 18.794 25.6391 18.7916 25.4107C18.7914 25.2649 18.7915 25.1191 18.7917 24.9734C18.7908 24.9054 18.79 24.8375 18.7891 24.7675C18.7939 24.3413 18.8577 24.0961 19.1423 23.7584C19.5496 23.4424 19.9731 23.4644 20.468 23.5247Z",fill:"#F53102"})]}),title:"\ub0c9\ucca0\ud55c \ud329\ud2b8 \ud3ed\uaca9\uae30",desc:"\ubcc0\uba85\uc5c6\uc774 \ud55c\uacc4\ub97c \uc9c1\uc2dc\ud574\uc694.\n\uc544\ud504\uc9c0\ub9cc \ub0c9\ucca0\ud558\uac8c \ubb38\uc81c\uc810\uc744 \ubd84\uc11d\ud558\uace0 \ubc29\ud5a5\uc131\uc744 \uc5bb\uc2b5\ub2c8\ub2e4.",badge:"\ub9e4\uc6b4\ub9db",badgeColor:"#EF4444",badgeBg:"#FFF5F5"}],Zc=cn`
  to { transform: rotate(360deg); }
`,Yc=cn`
  from { opacity: 0.6; }
  to { opacity: 1; }
`,Qc=cn`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,Vc={};Vc.Overlay=rn.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
  animation: ${Qc} 0.2s ease;
`,Vc.Modal=rn.div`
  width: 648px;
  height: 799px;
  background-color: ${xn.PALETTE.white};
  border-radius: 20px;
  padding: 40px 50px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  border: 1px solid ${xn.GRAYSCALE[4]};
`,Vc.HeaderNav=rn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,Vc.ModalHeader=rn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`,Vc.CloseButtonWrapper=rn.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
`,Vc.CloseButton=rn.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -10px;
`,Vc.BackButton=rn.button`
  background: none;
  border: none;
  font-size: 20px;
  color: ${xn.GRAYSCALE[5]};
  cursor: pointer;
  padding: 4px;
  margin-left: -10px;
  &:hover { color: ${xn.TEXT_COLOR.basic}; }
`,Vc.TitleSection=rn.div`
  margin-bottom: 40px;
`,Vc.ModalTitle=rn.h2`
  font-size: ${xn.FONT_SIZE.h5};
  font-weight: ${xn.FONT_WEIGHT.bold};
  color: ${xn.TEXT_COLOR.basic};
`,Vc.ModalSub=rn.p`
  font-size: ${xn.FONT_SIZE.h9};
  color: ${xn.GRAYSCALE[6]};
`,Vc.SectionRow=rn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Vc.SectionLabel=rn.span`
  font-size: ${xn.FONT_SIZE.h8};
  font-weight: ${xn.FONT_WEIGHT.bold};
  color: ${xn.TEXT_COLOR.basic};
`,Vc.SelectedCount=rn.span`
  font-size: ${xn.FONT_SIZE.h10};
  color: ${xn.PALETTE.third.main};
  font-weight: ${xn.FONT_WEIGHT.bold};
`,Vc.CategoryTabs=rn.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${xn.GRAYSCALE[2]};
`,Vc.CategoryTab=rn.button`
  padding: 8px 20px;
  border-radius: 10px;
  font-size: ${xn.FONT_SIZE.h9};
  cursor: pointer;
  border: 1px solid ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[3]}};
  background-color: ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.PALETTE.white}};
  color: ${e=>{let{$active:t}=e;return t?xn.PALETTE.white:xn.TEXT_COLOR.basic}};
  font-weight: ${e=>{let{$active:t}=e;return t?xn.FONT_WEIGHT.bold:xn.FONT_WEIGHT.regular}};
  transition: all 0.2s;
`,Vc.LogList=rn.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding-right: 8px;
  margin-bottom: 24px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${xn.GRAYSCALE[3]};
    border-radius: 10px;
  }
`,Vc.EmptyList=rn.div`
  text-align: center;
  color: ${xn.GRAYSCALE[5]};
  font-size: ${xn.FONT_SIZE.h9};
  padding: 30px 0;
`,Vc.LogItem=rn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 12px;
  border: 1.5px solid ${e=>{let{$selected:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[3]}};
  background-color: ${xn.PALETTE.white};
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
`,Vc.LogItemContent=rn.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Vc.LogItemCategory=rn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #F8EDFF;
  color: ${xn.PALETTE.third.main};
  font-size: ${xn.FONT_SIZE.h11};
  font-weight: ${xn.FONT_WEIGHT.bold};
  padding: 4px 10px;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 4px;
`,Vc.LogItemTitle=rn.p`
  font-size: ${xn.FONT_SIZE.h8};
  font-weight: ${xn.FONT_WEIGHT.bold};
  color: ${xn.TEXT_COLOR.basic};
`,Vc.LogItemDate=rn.span`
  font-size: ${xn.FONT_SIZE.h10};
  color: ${xn.GRAYSCALE[5]};
`,Vc.LogRadio=rn.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid ${e=>{let{$selected:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[3]}};
  background-color: ${e=>{let{$selected:t}=e;return t?xn.PALETTE.third.main:"transparent"}};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: all 0.2s;
`,Vc.BottomSection=rn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: auto;
`,Vc.PrimaryButton=rn.button`
  width: 100%;
  padding: 20px;
  background-color: ${xn.PALETTE.third.main};
  color: ${xn.PALETTE.white};
  border: none;
  border-radius: 12px;
  font-size: ${xn.FONT_SIZE.h8};
  font-weight: ${xn.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #9E35C0;
  }
`,Vc.SkipLink=rn.button`
  background: none;
  border: none;
  font-size: ${xn.FONT_SIZE.h9};
  color: ${xn.GRAYSCALE[6]};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover { color: ${xn.TEXT_COLOR.basic}; }
`,Vc.StyleList=rn.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding-right: 8px;
  margin-bottom: 24px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${xn.GRAYSCALE[3]};
    border-radius: 10px;
  }
`,Vc.StyleCard=rn.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 135px;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1.5px solid ${e=>{let{$selected:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[2]}};
  border-radius: 12px;
  cursor: pointer;
  background-color: ${e=>{let{$selected:t}=e;return t?"#FDF6FF":xn.PALETTE.white}};
  position: relative;
  transition: all 0.2s;
  flex-shrink: 0;
  &:hover { border-color: ${xn.PALETTE.third.light}; }
`,Vc.StyleIcon=rn.div`
  font-size: 28px;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Vc.StyleContent=rn.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`,Vc.StyleTitle=rn.p`
  font-size: ${xn.FONT_SIZE.h7};
  font-weight: ${xn.FONT_WEIGHT.bold};
  color: ${xn.TEXT_COLOR.basic};
`,Vc.StyleDesc=rn.p`
  font-size: ${xn.FONT_SIZE.h10};
  color: ${xn.GRAYSCALE[6]};
  line-height: 1.5;
  white-space: pre-line;
`,Vc.StyleBadge=rn.span`
  position: absolute;
  top: 36px;
  right: 24px;
  font-size: ${xn.FONT_SIZE.h11};
  font-weight: ${xn.FONT_WEIGHT.bold};
  color: ${e=>{let{$color:t}=e;return t}};
  background-color: ${e=>{let{$bg:t}=e;return t}};
  padding: 4px 8px;
  border-radius: 4px;
`,Vc.LoadingWrapper=rn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 16px;
  padding: 20px 0;
`,Vc.SpinnerRing=rn.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid ${xn.PALETTE.third.light};
  border-top-color: ${xn.PALETTE.third.main};
  animation: ${Zc} 1s linear infinite;
`,Vc.LoadingTitle=rn.p`
  font-size: ${xn.FONT_SIZE.h8};
  font-weight: ${xn.FONT_WEIGHT.bold};
  color: ${xn.TEXT_COLOR.basic};
  text-align: center;
  line-height: 1.5;
`,Vc.LoadingSub=rn.p`
  font-size: ${xn.FONT_SIZE.h10};
  color: ${xn.GRAYSCALE[5]};
`,Vc.ProgressBarWrapper=rn.div`
  width: 100%;
  height: 6px;
  background-color: ${xn.GRAYSCALE[1]};
  border-radius: 99px;
  overflow: hidden;
  margin-top: 8px;
  animation: ${Yc} 0.5s ease;
`,Vc.ProgressBar=rn.div`
  height: 100%;
  width: ${e=>{let{$progress:t}=e;return t}}%;
  background: linear-gradient(90deg, ${xn.PALETTE.third.light}, ${xn.PALETTE.third.main});
  border-radius: 99px;
  transition: width 0.08s linear;
`,Vc.CompleteWrapper=rn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 16px;
  padding: 20px 0;
  animation: ${Qc} 0.4s ease;
`,Vc.CompleteCircle=rn.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${xn.PALETTE.third.light};
  display: flex;
  justify-content: center;
  align-items: center;
`,Vc.CompleteCheck=rn.span`
  font-size: 32px;
  color: ${xn.PALETTE.third.main};
  font-weight: bold;
`,Vc.CompleteTitle=rn.p`
  font-size: ${xn.FONT_SIZE.h8};
  font-weight: ${xn.FONT_WEIGHT.bold};
  color: ${xn.TEXT_COLOR.basic};
  text-align: center;
  line-height: 1.5;
`,Vc.CompleteSub=rn.p`
  font-size: ${xn.FONT_SIZE.h10};
  color: ${xn.GRAYSCALE[5]};
`;const qc=e=>{let{onClose:t}=e;const n=vi(),[i,o]=(0,r.useState)(1),[a,l]=(0,r.useState)("\uc0ac\uc5c5/\ucc3d\uc5c5"),[s,c]=(0,r.useState)([]),[d,u]=(0,r.useState)(null),[h,p]=(0,r.useState)(0),f=Wc.filter(e=>e.category===a);(0,r.useEffect)(()=>{if(3===i){p(0);const e=setInterval(()=>{p(t=>t>=100?(clearInterval(e),setTimeout(()=>o(4),300),100):t+2)},40);return()=>clearInterval(e)}},[i]),(0,r.useEffect)(()=>{if(4===i){const e=setTimeout(()=>{n("/logs/result/my/detail")},2e3);return()=>clearTimeout(e)}},[i,n]),(0,r.useEffect)(()=>{const e=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${e}px`,()=>{document.body.style.overflow="",document.body.style.paddingRight=""}},[]);return(0,Co.jsx)(Vc.Overlay,{onClick:e=>{e.target===e.currentTarget&&i<3&&t()},children:(0,Co.jsxs)(Vc.Modal,{$step:i,children:[1===i&&(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(Vc.CloseButtonWrapper,{children:(0,Co.jsx)(Vc.CloseButton,{onClick:t,children:(0,Co.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M18 6L6 18M6 6L18 18",stroke:"#A6A6A6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),(0,Co.jsxs)(Vc.TitleSection,{children:[(0,Co.jsx)(Vc.ModalTitle,{children:"\uacfc\uac70\uc758 \ube44\uc2b7\ud55c \uc2e4\ud328 \uae30\ub85d"}),(0,Co.jsx)(Vc.ModalSub,{children:"\uc120\ud0dd\ud558\uc2dc\uba74 \ub354 \uae4a\uc740 \ud328\ud134\uc744 \ucc3e\uc744 \uc218 \uc788\uc5b4\uc694."})]}),(0,Co.jsxs)(Vc.SectionRow,{children:[(0,Co.jsx)(Vc.SectionLabel,{children:"\ud568\uaed8 \ubd84\uc11d\ud560\uae4c\uc694?"}),(0,Co.jsx)(Vc.SelectedCount,{children:s.length>0?`${s.length}\uac1c \uc120\ud0dd\ub428`:""})]}),(0,Co.jsx)(Vc.CategoryTabs,{children:Uc.map(e=>(0,Co.jsx)(Vc.CategoryTab,{$active:a===e,onClick:()=>l(e),children:e},e))}),(0,Co.jsx)(Vc.LogList,{children:0===f.length?(0,Co.jsx)(Vc.EmptyList,{children:"\uc774 \uce74\ud14c\uace0\ub9ac\uc5d0\ub294 \ub85c\uadf8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}):f.map(e=>{const t=s.some(t=>t.id===e.id);return(0,Co.jsxs)(Vc.LogItem,{$selected:t,onClick:()=>{c(t=>t.some(t=>t.id===e.id)?t.filter(t=>t.id!==e.id):[...t,e])},children:[(0,Co.jsxs)(Vc.LogItemContent,{children:[(0,Co.jsx)(Vc.LogItemCategory,{children:e.category}),(0,Co.jsx)(Vc.LogItemTitle,{children:e.title}),(0,Co.jsx)(Vc.LogItemDate,{children:e.date})]}),(0,Co.jsx)(Vc.LogRadio,{$selected:t,children:t&&(0,Co.jsx)("svg",{width:"14",height:"10",viewBox:"0 0 14 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M1 5L5 9L13 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]},e.id)})}),(0,Co.jsxs)(Vc.BottomSection,{children:[(0,Co.jsx)(Vc.PrimaryButton,{onClick:()=>o(2),children:s.length>0?`${s.length}\uac1c\uc758 \ub85c\uadf8\uc640 \ud568\uaed8 \ubd84\uc11d\ud558\uae30`:"\uc120\ud0dd \uc5c6\uc774 \ubd84\uc11d\ud558\uae30"}),(0,Co.jsx)(Vc.SkipLink,{onClick:()=>o(2),children:"\uac74\ub108\ub6f0\uace0 \uc774\ubc88 \ub85c\uadf8\ub9cc \ubd84\uc11d \u2192"})]})]}),2===i&&(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsxs)(Vc.HeaderNav,{children:[(0,Co.jsx)(Vc.BackButton,{onClick:()=>o(1),children:(0,Co.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M19 12H5M5 12L12 19M5 12L12 5",stroke:"#A6A6A6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,Co.jsx)(Vc.CloseButton,{onClick:t,children:(0,Co.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M18 6L6 18M6 6L18 18",stroke:"#A6A6A6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,Co.jsxs)(Vc.TitleSection,{children:[(0,Co.jsx)(Vc.ModalTitle,{children:"\ubd84\uc11d \uc2a4\ud0c0\uc77c \uc124\uc815"}),(0,Co.jsx)(Vc.ModalSub,{children:"\ub098\uc5d0\uac8c \ud544\uc694\ud55c \ubd84\uc11d \uc2a4\ud0c0\uc77c\uc758 \uc628\ub3c4\ub97c \uace8\ub77c\uc8fc\uc138\uc694."})]}),(0,Co.jsx)(Vc.StyleList,{children:_c.map(e=>(0,Co.jsxs)(Vc.StyleCard,{$selected:d===e.id,onClick:()=>u(e.id),children:[(0,Co.jsx)(Vc.StyleIcon,{children:e.icon}),(0,Co.jsxs)(Vc.StyleContent,{children:[(0,Co.jsx)(Vc.StyleTitle,{children:e.title}),(0,Co.jsx)(Vc.StyleDesc,{children:e.desc})]}),(0,Co.jsx)(Vc.StyleBadge,{$color:e.badgeColor,$bg:e.badgeBg,children:e.badge})]},e.id))}),(0,Co.jsx)(Vc.BottomSection,{children:(0,Co.jsx)(Vc.PrimaryButton,{disabled:!d,onClick:()=>d&&o(3),children:"\uc120\ud0dd\ud55c \uc2a4\ud0c0\uc77c\ub85c \ubd84\uc11d \uc2dc\uc791"})})]}),3===i&&(0,Co.jsxs)(Vc.LoadingWrapper,{children:[(0,Co.jsx)(Vc.SpinnerRing,{}),(0,Co.jsxs)(Vc.LoadingTitle,{children:["\uc785\ub825\ud558\uc2e0 \ub370\uc774\ud130\ub97c \uae30\ubc18\uc73c\ub85c",(0,Co.jsx)("br",{}),"\ud328\ud134\uc744 \ubd84\uc11d\ud558\uace0 \uc788\uc5b4\uc694"]}),(0,Co.jsx)(Vc.LoadingSub,{children:"\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694..."}),(0,Co.jsx)(Vc.ProgressBarWrapper,{children:(0,Co.jsx)(Vc.ProgressBar,{$progress:h})})]}),4===i&&(0,Co.jsxs)(Vc.CompleteWrapper,{children:[(0,Co.jsx)(Vc.CompleteCircle,{children:(0,Co.jsx)(Vc.CompleteCheck,{children:"\u2713"})}),(0,Co.jsxs)(Vc.CompleteTitle,{children:["\ubd84\uc11d\uc774 \uc644\ub8cc\ub418\uc5b4",(0,Co.jsx)("br",{}),"\uc815\uc0c1 \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."]}),(0,Co.jsx)(Vc.CompleteSub,{children:"\uacb0\uacfc \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."})]})]})})},Jc={};Jc.Wrapper=rn.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #F8F9FA;
`,Jc.Header=rn.div`
  text-align: left;
  margin-bottom: 50px;
`,Jc.Title=rn.h1`
  font-size: 60px;
  font-weight: ${xn.FONT_WEIGHT.regular};
  color: ${xn.TEXT_COLOR.basic};
`,Jc.SubTitle=rn.p`
  font-size: ${xn.FONT_SIZE.h8};
  font-weight: ${xn.FONT_WEIGHT.regular};
  color: ${xn.TEXT_COLOR.basic};
`,Jc.ContentWrapper=rn.div`
  width: 100%;
  max-width: 872px;
`,Jc.StepInfo=rn.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
`,Jc.ButtonRow=rn.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`,Jc.StepBadgeRow=rn.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,Jc.StepBadge=rn.span`
  color: ${xn.PALETTE.primary.main};
  font-size: ${xn.FONT_SIZE.h5};
  font-weight: ${xn.FONT_WEIGHT.bold};
  white-space: nowrap;
`,Jc.StepTitle=rn.h2`
  font-size: ${xn.FONT_SIZE.h5};
  font-weight: ${xn.FONT_WEIGHT.bold};
  color: ${xn.TEXT_COLOR.basic};
`,Jc.StepDesc=rn.p`
  font-size: ${xn.FONT_SIZE.h9};
  font-weight: ${xn.FONT_WEIGHT.regular};
  color: ${xn.GRAYSCALE[9]};
`,Jc.PrevButton=rn.button`
  padding: 10px 28px;
  background-color: ${xn.PALETTE.white};
  color: ${xn.GRAYSCALE[9]};
  border: 1px solid ${xn.GRAYSCALE[4]};
  border-radius: 8px;
  font-size: ${xn.FONT_SIZE.h9};
  font-weight: ${xn.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: ${xn.PALETTE.primary.main};
    color: ${xn.PALETTE.white};
    border-color: ${xn.PALETTE.primary.main};
  }
`,Jc.FormContainer=rn.div`
  position: relative;
  width: 100%;
  background-color: ${xn.PALETTE.white};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  border: 1px solid ${xn.GRAYSCALE[2]};

  &::before {
    content: '';
    position: absolute;
    top: 24px;
    bottom: 24px;
    left: 0px;
    width: 5px;
    background-color: ${xn.PALETTE.primary.main};
    border-radius: 0 4px 4px 0;
  }
`,Jc.LogHeader=rn.div`
  margin-bottom: 20px;
`,Jc.LogTitleRow=rn.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,Jc.Badges=rn.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Jc.BadgeOrange=rn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 67px;
  height: 20px;
  background-color: #FFF8F1;
  color: ${xn.TEXT_COLOR.warning};
  border-radius: 6px;
  font-size: 11px;
  font-weight: ${xn.FONT_WEIGHT.bold};
  box-sizing: border-box;
`,Jc.BadgeBlue=rn.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 20px;
  background-color: ${xn.PALETTE.primary.light};
  color: ${xn.PALETTE.primary.main};
  border-radius: 6px;
  font-size: 11px;
  font-weight: ${xn.FONT_WEIGHT.bold};
  box-sizing: border-box;
`,Jc.Date=rn.span`
  color: ${xn.GRAYSCALE[5]};
  font-size: ${xn.FONT_SIZE.h9};
`,Jc.LogTitle=rn.h3`
  font-size: ${xn.FONT_SIZE.h7};
  font-weight: ${xn.FONT_WEIGHT.bold};
  color: ${xn.TEXT_COLOR.basic};
`,Jc.TextArea=rn.textarea`
  width: 100%;
  min-height: 380px;
  padding: 24px;
  border: 1px solid ${xn.GRAYSCALE[4]};
  border-radius: 12px;
  font-family: inherit;
  font-size: ${xn.FONT_SIZE.h9};
  line-height: 1.6;
  outline: none;
  background-color: ${xn.PALETTE.white};
  resize: none;
  margin-bottom: 24px;

  &::placeholder {
    color: ${xn.GRAYSCALE[5]};
  }

  &:focus {
    border-color: ${xn.PALETTE.primary.main};
  }
`,Jc.TipBox=rn.div`
  width: 782px;
  min-height: 60px;
  height: auto;
  background-color: ${xn.PALETTE.primary.light}; 
  padding: 12px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  margin-bottom: 24px;
  box-sizing: border-box;
`,Jc.TipTitleRow=rn.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`,Jc.TipTitle=rn.span`
  color: ${xn.PALETTE.primary.main};
  font-size: ${xn.FONT_SIZE.h9};
  font-weight: ${xn.FONT_WEIGHT.bold};
  white-space: nowrap;
`,Jc.TipDesc=rn.p`
  color: ${xn.PALETTE.primary.main};
  font-size: ${xn.FONT_SIZE.h10}; 
  line-height: 1.4;
  margin: 0;
  word-break: keep-all;
  word-wrap: break-word;
`,Jc.ButtonContainer=rn.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`,Jc.TempSaveButton=rn.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 38px;
  background-color: ${xn.PALETTE.white};
  color: ${xn.PALETTE.primary.main};
  border: 1px solid ${xn.PALETTE.primary.main};
  border-radius: 8px;
  font-size: ${xn.FONT_SIZE.h9};
  font-weight: ${xn.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${xn.PALETTE.primary.light};
  }
`,Jc.AnalyzeButton=rn.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 38px;
  background-color: ${xn.PALETTE.primary.main};
  color: ${xn.PALETTE.white};
  border: none;
  border-radius: 8px;
  font-size: ${xn.FONT_SIZE.h9};
  font-weight: ${xn.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;const Xc=()=>{const e=vi(),[t,n]=(0,r.useState)(""),[i,o]=(0,r.useState)(!1);return(0,Co.jsxs)(Jc.Wrapper,{children:[(0,Co.jsxs)(Jc.ContentWrapper,{children:[(0,Co.jsxs)(Jc.Header,{children:[(0,Co.jsx)(Jc.Title,{children:"Write Fail Log"}),(0,Co.jsx)(Jc.SubTitle,{children:"\ub85c\uadf8 \uc791\uc131 \uac00\uc774\ub4dc\uc5d0 \ub9de\uac8c \ud398\uc77c \ub85c\uadf8 \uc791\uc131"})]}),(0,Co.jsxs)(Jc.StepInfo,{children:[(0,Co.jsxs)(Jc.StepBadgeRow,{children:[(0,Co.jsx)(Jc.StepBadge,{children:"Step 2"}),(0,Co.jsx)(Jc.StepTitle,{children:"\ubaa9\ud45c \ub2ec\uc131\uc744 \uc704\ud574 \uc9c0\ub098\uc628 \uc2e4\ud328 \uacfc\uc815"})]}),(0,Co.jsx)(Jc.StepDesc,{children:"\ubaa9\ud45c\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud55c \uc5ec\uc815\uc744 \uc77c\uae30 \uc791\uc131\ud558\ub4ef \ud3b8\ud558\uac8c \uc791\uc131\ud574\uc8fc\uc138\uc694."})]}),(0,Co.jsx)(Jc.ButtonRow,{children:(0,Co.jsx)(Jc.PrevButton,{onClick:()=>{e("/logs/new/step1")},children:"\uc774\uc804"})}),(0,Co.jsxs)(Jc.FormContainer,{children:[(0,Co.jsxs)(Jc.LogHeader,{children:[(0,Co.jsxs)(Jc.Badges,{children:[(0,Co.jsxs)(Jc.BadgeOrange,{children:[(0,Co.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M4.08317 5.6875V6.5625M6.99984 5.6875V6.5625M9.9165 5.6875V6.5625M12.8332 1.75H1.1665V10.5H3.7915V11.9583L6.70817 10.5H12.8332V1.75Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"\uc791\uc131 \uc911"]}),(0,Co.jsx)(Jc.BadgeBlue,{children:"\uacf5\ubd80/\ucde8\uc5c5"})]}),(0,Co.jsxs)(Jc.LogTitleRow,{children:[(0,Co.jsx)(Jc.LogTitle,{children:"\ube45\ub370\uc774\ud130\ubd84\uc11d\uae30\uc0ac \uc790\uaca9\uc99d \uc2e4\uae30 \ub3c4\uc804\uae30"}),(0,Co.jsx)(Jc.Date,{children:"2026.04.23"})]})]}),(0,Co.jsx)(Jc.TextArea,{placeholder:"\ubaa9\ud45c\ub97c \uc774\ub8e8\uae30 \uc704\ud574\uc11c \uc9c0\uae08\uae4c\uc9c0 \uc5b4\ub5a4 \uc77c\uc774 \uc788\uc5c8\ub098\uc694?\n\n\uc608\uc2dc) \uae30\ucd9c\ubb38\uc81c\ub9cc \uacc4\uc18d \ud480\uba74\uc11c \ud328\ud134\uc744 \uc678\uc6b0\uba74 \ub420 \uac70\ub77c \uc0dd\uac01\ud588\ub2e4. \ucc98\uc74c \ub450 \ub2ec\uc740 \uc21c\uc870\ub85c\uc6e0\uace0, \uc815\ub2f5\ub960\ub3c4 \uc62c\ub77c\uac00\ub294 \uac83 \uac19\uc544\uc11c \uc790\uc2e0\uac10\uc774 \uc0dd\uacbc\ub2e4.\n\uadf8\ub7f0\ub370 \uc2e4\uc81c \uc2dc\ud5d8 \ub0a0, \uc751\uc6a9 \ubb38\uc81c\ub4e4\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ub9ce\uc774 \ub098\uc654\uace0 \ub098\ub294 \uc644\uc804\ud788 \ub9c9\ud600\ubc84\ub838\ub2e4. \uc544\ub294 \uac1c\ub150\uc778\ub370 \uc870\uae08\ub9cc \ube44\ud2c0\uba74 \ud480\uc9c0 \ubabb\ud588\ub2e4.\n\uae30\ucd9c\ubb38\uc81c\ub9cc \uacc4\uc18d \ud480\uba74\uc11c \ud328\ud134\uc744 \uc678\uc6b0\uba74 \ub420 \uac70\ub77c \uc0dd\uac01\ud588\ub2e4. \ucc98\uc74c \ub450 \ub2ec\uc740 \uc21c\uc870\ub85c\uc6e0\uace0, \uc815\ub2f5\ub960\ub3c4 \uc62c\ub77c\uac00\ub294 \uac83 \uac19\uc544\uc11c \uc790\uc2e0\uac10\uc774 \uc0dd\uacbc\ub2e4.\n\uadf8\ub7f0\ub370 \uc2e4\uc81c \uc2dc\ud5d8 \ub0a0, \uc751\uc6a9 \ubb38\uc81c\ub4e4\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ub9ce\uc774 \ub098\uc654\uace0 \ub098\ub294 \uc644\uc804\ud788 \ub9c9\ud600\ubc84\ub838\ub2e4. \uc544\ub294 \uac1c\ub150\uc778\ub370 \uc870\uae08\ub9cc \ube44\ud2c0\uba74 \ud480\uc9c0 \ubabb\ud588\ub2e4.\n\uae30\ucd9c\ubb38\uc81c\ub9cc \uacc4\uc18d \ud480\uba74\uc11c \ud328\ud134\uc744 \uc678\uc6b0\uba74 \ub420 \uac70\ub77c \uc0dd\uac01\ud588\ub2e4. \ucc98\uc74c \ub450 \ub2ec\uc740 \uc21c\uc870\ub85c\uc6e0\uace0, \uc815\ub2f5\ub960\ub3c4 \uc62c\ub77c\uac00\ub294 \uac83 \uac19\uc544\uc11c \uc790\uc2e0\uac10\uc774 \uc0dd\uacbc\ub2e4.\n\uadf8\ub7f0\ub370 \uc2e4\uc81c \uc2dc\ud5d8 \ub0a0, \uc751\uc6a9 \ubb38\uc81c\ub4e4\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ub9ce\uc774 \ub098\uc654\uace0 \ub098\ub294 \uc644\uc804\ud788 \ub9c9\ud600\ubc84\ub838\ub2e4. \uc544\ub294 \uac1c\ub150\uc778\ub370 \uc870\uae08\ub9cc \ube44\ud2c0\uba74 \ud480\uc9c0 \ubabb\ud588\ub2e4.",value:t,onChange:e=>n(e.target.value)}),(0,Co.jsxs)(Jc.TipBox,{children:[(0,Co.jsxs)(Jc.TipTitleRow,{children:[(0,Co.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.50023 3.6875C9.21669 3.68754 10.6875 4.73619 11.3088 6.22754C11.411 5.87153 11.7077 5.58621 12.0969 5.51758L13.0198 5.35449C13.5636 5.25871 14.0831 5.62218 14.1789 6.16602C14.2748 6.7098 13.9112 7.22821 13.3674 7.32422L12.4436 7.4873C12.1191 7.5444 11.8043 7.43715 11.5823 7.22656C11.6095 7.41803 11.6252 7.61351 11.6252 7.8125V11.8125H13.4377C13.9899 11.8126 14.4377 12.2603 14.4377 12.8125C14.4377 13.3647 13.9899 13.8124 13.4377 13.8125H1.87523C1.32298 13.8125 0.875233 13.3648 0.875233 12.8125C0.875233 12.2602 1.32298 11.8125 1.87523 11.8125H3.37523V7.8125C3.37523 7.6135 3.39096 7.41804 3.4182 7.22656C3.19618 7.43726 2.8814 7.5444 2.55687 7.4873L1.63305 7.32422C1.08928 7.22821 0.726618 6.70983 0.822499 6.16602C0.918459 5.6222 1.43685 5.25861 1.9807 5.35449L2.90355 5.51758C3.29276 5.58627 3.58951 5.87154 3.69164 6.22754C4.31298 4.7362 5.78376 3.6875 7.50023 3.6875ZM7.50023 5.6875C6.32658 5.6875 5.37523 6.63885 5.37523 7.8125V11.8125H9.62523V7.8125C9.62523 6.63888 8.67384 5.68756 7.50023 5.6875ZM10.4504 2.27246C10.8055 1.84954 11.4366 1.79436 11.8596 2.14941C12.2822 2.50445 12.3373 3.13473 11.9827 3.55762L11.3801 4.27637C11.0251 4.69925 10.3939 4.75416 9.97094 4.39941C9.54793 4.04433 9.49281 3.41324 9.84789 2.99023L10.4504 2.27246ZM3.14183 2.14844C3.5649 1.79391 4.19518 1.8496 4.55004 2.27246L5.15258 2.99023C5.50744 3.4133 5.4525 4.04445 5.02953 4.39941C4.60646 4.75423 3.9753 4.69836 3.62035 4.27539L3.01781 3.55762C2.66312 3.13452 2.71884 2.50333 3.14183 2.14844ZM7.50023 0.5625C8.05243 0.562598 8.50023 1.01028 8.50023 1.5625V2.5C8.50023 3.05222 8.05243 3.4999 7.50023 3.5C6.94798 3.49996 6.50023 3.05226 6.50023 2.5V1.5625C6.50023 1.01024 6.94798 0.562542 7.50023 0.5625Z",fill:xn.PALETTE.fourth.main})}),(0,Co.jsx)(Jc.TipTitle,{children:"\uc791\uc131 \ud301!!"})]}),(0,Co.jsx)(Jc.TipDesc,{children:"\uacfc\uc815 \uc18d\uc5d0\uc11c \uc5b4\ub5a4 \uacb0\uc815\uc744 \ud558\uc168\ub294\uc9c0 \uc65c \uadf8\ub7f0 \uacb0\uc815\uc744 \ud558\uc168\ub294\uc9c0 \uadf8\ub54c \ub9c8\uc74c\uc18d\uc758 \uac10\uc815\ub4e4 \uc678\ubd80 \ud658\uacbd\uc774\ub098 \ud658\uacbd \ubcc0\ud654\ub4e4, \uc9c0\uae08 \ub3cc\uc544\ubcf4\uba74 \uc5b4\ub5a4 \uc0dd\uac01\uc774 \ub4dc\uc2dc\ub294\uc9c0 \ub4f1\uc744 \uc790\uc720\ub86d\uac8c \uc368\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4."})]}),(0,Co.jsxs)(Jc.ButtonContainer,{children:[(0,Co.jsx)(Jc.TempSaveButton,{onClick:()=>{alert("\uc784\uc2dc\uc800\uc7a5 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.")},children:"\uc784\uc2dc\uc800\uc7a5"}),(0,Co.jsx)(Jc.AnalyzeButton,{onClick:()=>{o(!0)},children:"\ubd84\uc11d\ud558\uae30"})]})]})]}),i&&(0,Co.jsx)(qc,{onClose:()=>o(!1)})]})},Kc={};Kc.Wrapper=rn.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #F8F9FA;
`,Kc.ContentWrapper=rn.div`
  width: 100%;
  max-width: 872px;
`,Kc.Header=rn.div`
  text-align: left;
  margin-bottom: 50px;
`,Kc.Title=rn.h1`
  font-size: 60px;
  font-weight: ${xn.FONT_WEIGHT.regular};
  color: ${xn.TEXT_COLOR.basic};
`,Kc.SubTitle=rn.p`
  font-size: ${xn.FONT_SIZE.h8};
  font-weight: ${xn.FONT_WEIGHT.regular};
  color: ${xn.TEXT_COLOR.basic};
`,Kc.StepInfo=rn.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
`,Kc.ButtonRow=rn.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`,Kc.StepBadgeRow=rn.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,Kc.StepBadge=rn.span`
  color: ${xn.PALETTE.third.main};
  font-size: ${xn.FONT_SIZE.h5};
  font-weight: ${xn.FONT_WEIGHT.bold};
  white-space: nowrap;
`,Kc.StepTitle=rn.h2`
  font-size: ${xn.FONT_SIZE.h5};
  font-weight: ${xn.FONT_WEIGHT.bold};
  color: ${xn.TEXT_COLOR.basic};
`,Kc.StepDesc=rn.p`
  font-size: ${xn.FONT_SIZE.h9};
  font-weight: ${xn.FONT_WEIGHT.regular};
  color: ${xn.GRAYSCALE[9]};
`,Kc.NextButton=rn.button`
  padding: 10px 28px;
  background-color: ${xn.PALETTE.white};
  color: ${xn.GRAYSCALE[9]};
  border: 1px solid ${xn.GRAYSCALE[4]};
  border-radius: 8px;
  font-size: ${xn.FONT_SIZE.h9};
  font-weight: ${xn.FONT_WEIGHT.bold};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: ${xn.PALETTE.third.main};
    color: ${xn.PALETTE.white};
    border-color: ${xn.PALETTE.third.main};
  }
`,Kc.FormContainer=rn.div`
  position: relative;
  width: 100%;
  background-color: ${xn.PALETTE.white};
  border-radius: 16px;
  padding: 40px 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 36px;
  border: 1px solid ${xn.GRAYSCALE[4]};

  /* The left purple bar */
  &::before {
    content: '';
    position: absolute;
    top: 24px;
    bottom: 24px;
    left: 0px;
    width: 5px;
    background-color: ${xn.PALETTE.third.main};
    border-radius: 0 4px 4px 0;
  }
`,Kc.FormRow=rn.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Kc.FormGroup=rn.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: ${e=>{let{$flex:t}=e;return t||1}};
  position: relative;
`,Kc.LabelRow=rn.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,Kc.Label=rn.label`
  font-size: ${xn.FONT_SIZE.h8};
  font-weight: ${xn.FONT_WEIGHT.bold};
  color: ${xn.TEXT_COLOR.basic};
`,Kc.Input=rn.input`
  width: 100%;
  padding: 18px 24px;
  border: 1px solid ${xn.GRAYSCALE[3]};
  border-radius: 8px;
  font-family: inherit;
  font-size: ${xn.FONT_SIZE.h9};
  font-weight: ${xn.FONT_WEIGHT.regular};
  color: ${xn.TEXT_COLOR.basic};
  outline: none;
  background-color: ${xn.PALETTE.white};

  &::placeholder {
    color: ${xn.GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${xn.PALETTE.third.main};
  }
`,Kc.DropdownWrapper=rn.div`
  position: relative;
  width: 100%;
`,Kc.DropdownHeader=rn.div`
  width: 100%;
  padding: 18px 24px;
  border: 1px solid ${e=>{let{$isOpen:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[3]}};
  border-radius: 8px;
  font-size: ${xn.FONT_SIZE.h9};
  font-weight: ${xn.FONT_WEIGHT.regular};
  background-color: ${xn.PALETTE.white};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.2s;
`,Kc.DropdownText=rn.span`
  color: ${e=>{let{$hasValue:t}=e;return t?xn.TEXT_COLOR.basic:xn.GRAYSCALE[9]}};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Kc.ArrowIcon=rn.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 2px solid ${e=>{let{$isOpen:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[5]}};
  border-bottom: 2px solid ${e=>{let{$isOpen:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[5]}};
  transform: ${e=>{let{$isOpen:t}=e;return t?"rotate(-135deg) translateY(3px)":"rotate(45deg) translateY(-3px)"}};
  transition: transform 0.3s ease, border-color 0.2s;
  flex-shrink: 0;
  margin-bottom: ${e=>{let{$isOpen:t}=e;return t?"-4px":"4px"}};
`,Kc.FloatingList=rn.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${xn.PALETTE.white};
  border: 1px solid ${xn.GRAYSCALE[3]};
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`,Kc.FloatingItem=rn.li`
  padding: 14px 20px;
  font-size: ${xn.FONT_SIZE.h9};
  font-weight: ${xn.FONT_WEIGHT.regular};
  color: ${xn.TEXT_COLOR.basic};
  cursor: pointer;
  background-color: ${e=>{let{$isSelected:t}=e;return t?xn.PALETTE.third.light:"transparent"}};
  
  /* Prevent layout shift by using a transparent border initially */
  border: 1.5px solid transparent;
  border-bottom: 1px solid ${xn.GRAYSCALE[2]};
  position: relative;
  transition: border-color 0.1s ease;

  &:last-child {
    border-bottom: 1.5px solid transparent;
  }

  &:hover {
    border: 1.5px solid ${xn.PALETTE.third.main};
    border-radius: 8px;
    z-index: 1;
    /* Maintain background color as per user request */
    background-color: ${e=>{let{$isSelected:t}=e;return t?xn.PALETTE.third.light:"transparent"}};
  }

  /* Apply the same border for selected items as seen in the photo */
  ${e=>{let{$isSelected:t}=e;return t&&`\n    border: 1.5px solid ${xn.PALETTE.third.main};\n    border-radius: 8px;\n    z-index: 1;\n  `}}
`,Kc.LoadVisionButton=rn.button`
  padding: 10px 16px;
  border: 1px solid ${e=>{let{$isOpen:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[3]}};
  background-color: ${xn.PALETTE.white};
  border-radius: 6px;
  font-size: ${xn.FONT_SIZE.h9};
  font-weight: ${xn.FONT_WEIGHT.regular};
  color: ${e=>{let{$isOpen:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[9]}};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;

  &:hover {
    background-color: ${xn.PALETTE.white};
  }

  &:active {
    border-color: ${xn.PALETTE.third.main};
    color: ${xn.PALETTE.third.main};
  }
`,Kc.EmptyVision=rn.li`
  padding: 50px 20px;
  text-align: center;
  color: ${xn.GRAYSCALE[5]};
  font-size: ${xn.FONT_SIZE.h9};
  line-height: 1.6;
`,Kc.ThumbnailRow=rn.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
`,Kc.UploadButtonArea=rn.div`
  flex: 2; /* aligns width with Title input */
  height: 64px;
  border: 1px solid ${xn.GRAYSCALE[3]};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${xn.PALETTE.white};
  cursor: pointer;
  gap: 10px;
  transition: border-color 0.2s, background-color 0.2s;

  &:hover {
    background-color: ${xn.PALETTE.white};
  }

  &:active {
    border-color: ${xn.PALETTE.third.main};
    background-color: ${xn.PALETTE.white};
  }
`,Kc.UploadIcon=rn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${xn.GRAYSCALE[9]};
`,Kc.UploadIcon=rn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${xn.GRAYSCALE[9]};
`,Kc.UploadText=rn.span`
  font-size: ${xn.FONT_SIZE.h8};
  font-weight: ${xn.FONT_WEIGHT.regular};
  color: ${xn.GRAYSCALE[9]};
`,Kc.PreviewWrapper=rn.div`
  flex: 1; /* aligns with category input area */
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 200px;
  border: 1.5px solid ${xn.GRAYSCALE[2]};
  border-radius: 12px;
  background-color: ${xn.PALETTE.white};
`,Kc.PreviewImage=rn.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 11px 11px 0 0;
`,Kc.FileNameContainer=rn.div`
  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
`,Kc.PreviewFileName=rn.span`
  font-size: ${xn.FONT_SIZE.h11};
  color: ${xn.PALETTE.primary.main};
  text-decoration: underline;
  text-underline-offset: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
`,Kc.DeleteIcon=rn.div`
  position: absolute;
  top: -24px;
  right: 0;
  cursor: pointer;
  z-index: 10;
  color: ${xn.TEXT_COLOR.basic};
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.1);
    color: ${xn.PALETTE.fourth.main};
  }
`;const ed=()=>{const e=vi(),[t,n]=(0,r.useState)(""),[i,o]=(0,r.useState)(""),[a,l]=(0,r.useState)(""),[s,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1),[h,p]=(0,r.useState)(null),f=(0,r.useRef)(null),g=["\uc62c\ud574 \uc548\uc5d0 \uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc790\uaca9\uc99d \ub530\uae30","\ub124\uc774\ubc84 \uc785\uc0ac\ud558\uae30","\uc0b4 15\ud0a4\ub85c \ube7c\uae30","\ud55c\ub2ec\uc5d0 \ucc45 2\uad8c\uc529 \uc77d\uae30"],m=(0,r.useRef)(null),x=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&c(!1),x.current&&!x.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);return(0,Co.jsx)(Kc.Wrapper,{children:(0,Co.jsxs)(Kc.ContentWrapper,{children:[(0,Co.jsxs)(Kc.Header,{children:[(0,Co.jsx)(Kc.Title,{children:"Write Fail Log"}),(0,Co.jsx)(Kc.SubTitle,{children:"\ub85c\uadf8 \uc791\uc131 \uac00\uc774\ub4dc\uc5d0 \ub9de\uac8c \ud398\uc77c \ub85c\uadf8 \uc791\uc131"})]}),(0,Co.jsxs)(Kc.StepInfo,{children:[(0,Co.jsxs)(Kc.StepBadgeRow,{children:[(0,Co.jsx)(Kc.StepBadge,{children:"Step 1"}),(0,Co.jsx)(Kc.StepTitle,{children:"\ube44\uc804, \uc81c\ubaa9, \uce74\ud14c\uace0\ub9ac, \uc378\ub124\uc77c \uc124\uc815\ud558\uae30"})]}),(0,Co.jsx)(Kc.StepDesc,{children:"\ub85c\uadf8\uc758 \uc81c\ubaa9\uacfc \ub2ec\uc131\ud558\uace0 \uc2f6\uc740 \ucd5c\uc885 \ubaa9\ud45c, \ubaa9\ud45c \ud0dc\uadf8, \ub85c\uadf8 \uc378\ub124\uc77c \uc0ac\uc9c4\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694."})]}),(0,Co.jsx)(Kc.ButtonRow,{children:(0,Co.jsx)(Kc.NextButton,{onClick:()=>{e("/logs/new/step2")},children:"\ub2e4\uc74c"})}),(0,Co.jsxs)(Kc.FormContainer,{children:[(0,Co.jsxs)(Kc.FormRow,{children:[(0,Co.jsxs)(Kc.FormGroup,{$flex:1.5,children:[(0,Co.jsx)(Kc.Label,{children:"\ub85c\uadf8 \uc81c\ubaa9"}),(0,Co.jsx)(Kc.Input,{placeholder:"\uc608) \uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc790\uaca9\uc99d \ud544\uae30 \ub3c4\uc804\uae30",value:t,onChange:e=>n(e.target.value)})]}),(0,Co.jsxs)(Kc.FormGroup,{$flex:1.2,ref:m,children:[(0,Co.jsx)(Kc.Label,{children:"\uce74\ud14c\uace0\ub9ac"}),(0,Co.jsxs)(Kc.DropdownWrapper,{children:[(0,Co.jsxs)(Kc.DropdownHeader,{$isOpen:s,onClick:()=>c(!s),children:[(0,Co.jsx)(Kc.DropdownText,{$hasValue:!!i,children:i||"\uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."}),(0,Co.jsx)(Kc.ArrowIcon,{$isOpen:s})]}),s&&(0,Co.jsx)(Kc.FloatingList,{children:["\uc0ac\uc5c5/\ucc3d\uc5c5","\uacf5\ubd80/\ucde8\uc5c5","\uc778\uac04\uad00\uacc4","\uac74\uac15/\ub8e8\ud2f4","\uae30\ud0c0"].map((e,t)=>(0,Co.jsx)(Kc.FloatingItem,{$isSelected:i===e,onClick:()=>{o(e),c(!1)},children:e},t))})]})]})]}),(0,Co.jsxs)(Kc.FormGroup,{ref:x,children:[(0,Co.jsxs)(Kc.LabelRow,{children:[(0,Co.jsx)(Kc.Label,{children:"\uc774\ub8e8\uace0 \uc2f6\uc740 \ube44\uc804"}),(0,Co.jsxs)(Kc.LoadVisionButton,{$isOpen:d,type:"button",onClick:()=>u(!d),children:[(0,Co.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M2.6499 3.98242H13.3166M2.6499 7.98242H13.3166M2.6499 11.9824H13.3166",stroke:"currentColor",strokeWidth:"1.88235",strokeLinecap:"round",strokeLinejoin:"round"})}),"\uae30\uc874 \ube44\uc804 \ubd88\ub7ec\uc624\uae30"]})]}),(0,Co.jsx)(Kc.Input,{placeholder:"\uc608) \uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \ucde8\ub4dd\ud558\uae30",value:a,onChange:e=>l(e.target.value)}),d&&(0,Co.jsx)(Kc.FloatingList,{children:g.length>0?g.map((e,t)=>(0,Co.jsx)(Kc.FloatingItem,{$isSelected:a===e,onClick:()=>(l(e),void u(!1)),children:e},t)):(0,Co.jsxs)(Kc.EmptyVision,{children:["\uc544\uc9c1 \uc791\uc131\ub41c \ube44\uc804\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",(0,Co.jsx)("br",{}),"\uc0c8\ub85c\uc6b4 \ube44\uc804\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694."]})})]}),(0,Co.jsxs)(Kc.FormGroup,{children:[(0,Co.jsx)(Kc.Label,{children:"\ub85c\uadf8 \uc378\ub124\uc77c \uc0ac\uc9c4 \ucca8\ubd80"}),(0,Co.jsxs)(Kc.ThumbnailRow,{children:[(0,Co.jsxs)(Kc.UploadButtonArea,{onClick:()=>{var e;return null===(e=f.current)||void 0===e?void 0:e.click()},children:[(0,Co.jsx)(Kc.UploadIcon,{children:(0,Co.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M14.5001 9.51076C14.6327 9.51076 14.7599 9.56857 14.8536 9.67147C14.9473 9.77437 15 9.91394 15 10.0595V12.2543C15 12.9819 14.7371 13.6809 14.2682 14.1967C13.7993 14.7114 13.1685 15 12.4987 15H2.50133C1.83851 15 1.20168 14.7114 0.731806 14.1967C0.499498 13.9416 0.315288 13.6388 0.189717 13.3055C0.0641453 12.9722 -0.00032275 12.615 1.21494e-06 12.2543V10.0595C1.21494e-06 9.91394 0.0526656 9.77437 0.146409 9.67147C0.240152 9.56857 0.367295 9.51076 0.499868 9.51076C0.632441 9.51076 0.759584 9.56857 0.853327 9.67147C0.94707 9.77437 0.999735 9.91394 0.999735 10.0595V12.2543C0.999999 12.6905 1.15797 13.1087 1.43896 13.4172C1.71994 13.7256 2.10096 13.899 2.49833 13.8993H12.4957C12.893 13.899 13.2741 13.7256 13.555 13.4172C13.836 13.1087 13.994 12.6905 13.9943 12.2543V10.0595C13.9943 9.91394 14.0469 9.77437 14.1407 9.67147C14.2344 9.56857 14.3616 9.51076 14.4941 9.51076H14.5001ZM7.50963 12.066C7.37706 12.066 7.24991 12.0082 7.15617 11.9053C7.06243 11.8024 7.00976 11.6628 7.00976 11.5173L7.00976 1.87108L4.86033 4.23051C4.81386 4.28153 4.75868 4.32199 4.69796 4.3496C4.63724 4.37721 4.57216 4.39142 4.50643 4.39142C4.4407 4.39142 4.37562 4.37721 4.3149 4.3496C4.25417 4.32199 4.199 4.28153 4.15252 4.23051C4.10605 4.17949 4.06918 4.11893 4.04403 4.05227C4.01888 3.98562 4.00593 3.91417 4.00593 3.84203C4.00593 3.76988 4.01888 3.69844 4.04403 3.63178C4.06918 3.56513 4.10605 3.50456 4.15252 3.45354L7.15172 0.16132C7.19815 0.1102 7.25331 0.0696368 7.31403 0.0419549C7.37476 0.0142729 7.43987 1.52858e-05 7.50563 0C7.57139 1.52984e-05 7.6365 0.014273 7.69722 0.0419549C7.75795 0.0696369 7.81311 0.1102 7.85953 0.16132L10.8587 3.45354C10.9054 3.50549 10.9417 3.56475 10.9677 3.63133C11.0067 3.73119 11.0057 3.7696 11.0057 3.84203C11.0059 3.95079 10.9766 4.05716 10.9216 4.14763C10.8666 4.2381 10.7883 4.30858 10.6968 4.35013C10.6359 4.3779 10.5707 4.39219 10.5048 4.39219C10.4389 4.39219 10.3737 4.3779 10.3129 4.35013C10.2523 4.32233 10.1972 4.28168 10.1509 4.23051L8.0015 1.87108L8.0015 11.5173C8.0015 11.6628 7.94883 11.8024 7.85509 11.9053C7.76135 12.0082 7.6342 12.066 7.50163 12.066H7.50963Z",fill:"currentColor"})})}),(0,Co.jsx)(Kc.UploadText,{children:"\ud074\ub9ad\ud574\uc11c \uc0ac\uc9c4 \uc5c5\ub85c\ub4dc (JPG, PNG / \ucd5c\ub300 5MB)"})]}),(0,Co.jsx)("input",{type:"file",accept:"image/*",ref:f,style:{display:"none"},onChange:e=>{const t=e.target.files[0];if(!t)return;const n=URL.createObjectURL(t);p({url:n,name:t.name})}}),h&&(0,Co.jsxs)(Kc.PreviewWrapper,{children:[(0,Co.jsx)(Kc.PreviewImage,{src:h.url,alt:"thumbnail"}),(0,Co.jsx)(Kc.FileNameContainer,{children:(0,Co.jsx)(Kc.PreviewFileName,{children:h.name})}),(0,Co.jsx)(Kc.DeleteIcon,{onClick:()=>{p(null),f.current&&(f.current.value="")},children:(0,Co.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Co.jsx)("path",{d:"M1 1L13 13M1 13L13 1",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})})})]})]})]})]})]})})},td=()=>(0,Co.jsx)($i,{}),nd="#F53102",rd="#333333",id="#AB47FF",od="#FFFFFF",ad="#F3E8FF",ld="#F2F2F2",sd="#E6E6E6",cd="#CCCCCC",dd="#999999",ud="#555555",hd=en`box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);`,pd={};pd.Wrapper=rn.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
`,pd.LeftPanel=rn.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  justify-content: center;
  padding: 80px 60px;
`,pd.Logo=rn.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 64px;
`,pd.Tagline=rn.h1`
  ${Aa}
  color: ${rd};
  margin-bottom: 24px;
`,pd.Description=rn.p`
  ${Za}
  color: ${ud};
  margin-bottom: 40px;
`,pd.BulletList=rn.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,pd.BulletItem=rn.li`
  ${Za}
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${rd};

  &::before {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${id};
    flex-shrink: 0;
  }
`,pd.RightPanel=rn.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 40px;
`,pd.Card=rn.div`
  background: ${od};
  border-radius: 16px;
  ${hd}
  padding: 48px 44px;
  width: 100%;
  max-width: 440px;
`;const fd=pd,gd=()=>(0,Co.jsxs)(fd.Wrapper,{children:[(0,Co.jsxs)(fd.LeftPanel,{children:[(0,Co.jsx)(fd.Logo,{children:(0,Co.jsx)("img",{src:"assets\\picture\\logo.png",alt:"FailLog",style:{height:"211px",width:"auto"}})}),(0,Co.jsx)(fd.Tagline,{children:"\uc2e4\ud328\ub294 \uc131\uacf5\uc758 \uc5b4\uba38\ub2c8"}),(0,Co.jsxs)(fd.Description,{children:["\ub098\uc758 \uc2e4\ud328\ub97c \uc228\uae30\uc9c0 \uc54a\uace0 \uc815\ub9ac\ud560 \ub54c, \ub354 \uc120\uba85\ud55c \ubc29\ud5a5\uacfc \ub2e4\uc74c \uc120\ud0dd\uc774",(0,Co.jsx)("br",{}),"\ubcf4\uc785\ub2c8\ub2e4. Fail Log\uc5d0\uc11c \ub2f9\uc2e0\uc758 \uc131\uc7a5 \ub370\uc774\ud130\ub97c \ub2e4\uc2dc \uc2dc\uc791\ud574 \ubcf4\uc138\uc694."]}),(0,Co.jsxs)(fd.BulletList,{children:[(0,Co.jsx)(fd.BulletItem,{children:"\uc2e4\ud328 \uacbd\ud5d8 \uae30\ub85d \ubc0f \ubcf5\uae30"}),(0,Co.jsx)(fd.BulletItem,{children:"\ucee4\ubba4\ub2c8\ud2f0 \uae30\ubc18 \uc778\uc0ac\uc774\ud2b8 \uacf5\uc720"}),(0,Co.jsx)(fd.BulletItem,{children:"\uc131\uc7a5 \uc5f0\ub300\uae30 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uad00\ub9ac"})]})]}),(0,Co.jsx)(fd.RightPanel,{children:(0,Co.jsx)(fd.Card,{children:(0,Co.jsx)($i,{})})})]}),md={};md.Title=rn.h2`
  ${Pa}
  color: ${rd};
  margin-bottom: 8px;
`,md.Subtitle=rn.p`
  ${Va}
  color: ${dd};
  margin-bottom: 24px;
`,md.AgreementBox=rn.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`,md.AgreementAll=rn.label`
  display: flex;
  align-items: center;
  gap: 10px;
  ${_a}
  color: ${rd};
  cursor: pointer;
`,md.Separator=rn.hr`
  border: none;
  border-top: 1px solid ${ld};
`,md.AgreementRow=rn.div`
  display: flex;
  align-items: ${e=>{let{$column:t}=e;return t?"flex-start":"center"}};
  flex-direction: ${e=>{let{$column:t}=e;return t?"column":"row"}};
  gap: 4px;
`,md.AgreementRowInner=rn.div`
  display: flex;
  align-items: center;
  width: 100%;
`,md.AgreementLabel=rn.span`
  flex: 1;
  ${Va}
  color: #444;
`,md.Required=rn.span`
  ${Xa}
  color: ${id};
`,md.Optional=rn.span`
  ${Xa}
  color: ${dd};
`,md.Arrow=rn.span`
  color: ${cd};
  font-size: 18px;
  cursor: pointer;
  padding: 2px 4px;

  &:hover {
    color: ${id};
  }
`,md.AgreementDesc=rn.p`
  ${tl}
  color: ${dd};
  padding-left: 28px;
`,md.Checkbox=rn.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  accent-color: ${id};
  cursor: pointer;
  flex-shrink: 0;
`,md.OrDivider=rn.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
`,md.OrLine=rn.div`
  flex: 1;
  height: 1px;
  background: ${ld};
`,md.OrText=rn.span`
  ${Xa}
  color: ${dd};
`,md.SocialButton=rn.button`
  width: 100%;
  padding: 13px 16px;
  background: ${od};
  border: 1px solid ${sd};
  border-radius: 8px;
  ${Va}
  color: ${rd};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;

  &:hover {
    background: ${ld};
  }
`,md.SocialIcon=rn.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${e=>{let{$bg:t}=e;return t}};
  color: ${e=>{let{$color:t}=e;return t}};
  border: ${e=>{let{$border:t}=e;return t||"none"}};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`,md.PrimaryButton=rn.button`
  width: 100%;
  padding: 15px;
  background: ${e=>{let{$disabled:t}=e;return t?"#d8a8ff":id}};
  color: ${od};
  ${_a}
  border: none;
  border-radius: 8px;
  cursor: ${e=>{let{$disabled:t}=e;return t?"not-allowed":"pointer"}};
  margin-top: 16px;
  margin-bottom: 16px;

  &:hover {
    background: ${e=>{let{$disabled:t}=e;return t?"#d8a8ff":"#9333ea"}};
  }
`,md.FieldLabel=rn.p`
  ${Qa}
  color: #444;
  margin-bottom: 6px;
`,md.Input=rn.input`
  width: 100%;
  padding: 13px 16px;
  border: 1px solid ${sd};
  border-radius: 8px;
  ${Va}
  color: ${rd};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${cd};
  }

  &:focus {
    border-color: ${id};
  }

  &:disabled {
    background: ${ld};
    color: ${dd};
  }
`,md.InputRow=rn.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 12px;
`,md.InputWithTimer=rn.div`
  flex: 1;
  position: relative;
`,md.Timer=rn.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  ${Qa}
  color: ${id};
`,md.SmallButton=rn.button`
  padding: 13px 14px;
  background: ${e=>{let{$verified:t}=e;return t?sd:id}};
  color: ${e=>{let{$verified:t}=e;return t?dd:od}};
  border: none;
  border-radius: 8px;
  ${Qa}
  cursor: ${e=>{let{disabled:t}=e;return t?"not-allowed":"pointer"}};
  white-space: nowrap;
`,md.ValidationMsg=rn.p`
  ${Xa}
  color: ${nd};
  margin-top: 4px;
`,md.HintMsg=rn.p`
  ${Xa}
  color: ${dd};
  margin-top: 4px;
`,md.BottomLink=rn.p`
  text-align: center;
  ${Va}
  color: ${dd};
  margin-bottom: 12px;
`,md.PurpleLink=rn(ro)`
  color: ${id};
  font-weight: 600;
  text-decoration: none;
`,md.Copyright=rn.p`
  text-align: center;
  ${tl}
  color: ${cd};
`,md.SuccessBox=rn.div`
  ${va}
  gap: 32px;
  padding: 20px 0;
`,md.SuccessText=rn.p`
  ${Ga}
  color: ${rd};
  text-align: center;
`;const xd=md,Cd={};Cd.Overlay=rn.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Cd.ModalCard=rn.div`
  background: ${od};
  border-radius: 16px;
  padding: 40px 36px 32px;
  width: 90%;
  max-width: 480px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);
`,Cd.ModalTitle=rn.h2`
  ${Ha}
  color: ${rd};
  margin-bottom: 6px;
`,Cd.ModalSubtitle=rn.p`
  ${Va}
  color: ${dd};
  margin-bottom: 16px;
`,Cd.ContentBox=rn.div`
  flex: 1;
  overflow-y: auto;
  border: 1px solid ${sd};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  ${Va}
  color: #444;
  line-height: 1.8;

  ol, ul {
    padding-left: 18px;
    margin: 4px 0;
  }

  li {
    margin-bottom: 4px;
  }
`,Cd.Section=rn.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Cd.SectionTitle=rn.p`
  ${Qa}
  color: ${rd};
`,Cd.Article=rn.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Cd.ArticleTitle=rn.p`
  ${Qa}
  color: ${rd};
`,Cd.ConfirmButton=rn.button`
  width: 100%;
  padding: 15px;
  background: ${id};
  color: ${od};
  ${_a}
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    background: #9333ea;
  }
`,Cd.Copyright=rn.p`
  text-align: center;
  ${tl}
  color: ${cd};
`;const bd=Cd,vd={terms:{title:"[\ud544\uc218] \uc774\uc6a9\uc57d\uad00 \ubc0f \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68 \ub3d9\uc758",subtitle:"Fail Log \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub2e4\uc74c \uc57d\uad00\uc5d0 \ub3d9\uc758\ud558\uc154\uc57c \ud569\ub2c8\ub2e4.",content:(0,Co.jsxs)(bd.Section,{children:[(0,Co.jsx)(bd.SectionTitle,{children:"1. \uc774\uc6a9\uc57d\uad00"}),(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"\uc81c1\uc870 (\ubaa9\uc801)"}),(0,Co.jsx)("p",{children:'\ubcf8 \uc57d\uad00\uc740 FailLog(\uc774\ud558 "\uc11c\ube44\uc2a4")\uac00 \uc81c\uacf5\ud558\ub294 \ubaa8\ub4e0 \uc11c\ube44\uc2a4\uc758 \uc774\uc6a9 \uc870\uac74 \ubc0f \uc808\ucc28, \uc774\uc6a9\uc790\uc640 \uc11c\ube44\uc2a4 \uc6b4\uc601\uc790\uc758 \uad8c\ub9ac, \uc758\ubb34 \ubc0f \ucc45\uc784 \uc0ac\ud56d\uc744 \uaddc\uc815\ud568\uc744 \ubaa9\uc801\uc73c\ub85c \ud569\ub2c8\ub2e4.'})]}),(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"\uc81c2\uc870 (\uc6a9\uc5b4\uc758 \uc815\uc758)"}),(0,Co.jsxs)("ol",{children:[(0,Co.jsx)("li",{children:'"\uc774\uc6a9\uc790"\ub780 \uc11c\ube44\uc2a4\uc5d0 \uc811\uc18d\ud558\uc5ec \ubcf8 \uc57d\uad00\uc5d0 \ub530\ub77c \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\ub294 \ud68c\uc6d0 \ubc0f \ube44\ud68c\uc6d0\uc744 \ub9d0\ud569\ub2c8\ub2e4.'}),(0,Co.jsx)("li",{children:'"\uc2e4\ud328 \ub85c\uadf8(Fail Log)"\ub780 \uc774\uc6a9\uc790\uac00 \uc11c\ube44\uc2a4 \ub0b4\uc5d0 \uc791\uc131\ud55c \uc2e4\ud328 \uc0ac\ub840, \uc6d0\uc778 \ubd84\uc11d, \ud53c\ub4dc\ubc31 \ub4f1\uc758 \uac8c\uc2dc\ubb3c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.'})]})]}),(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"\uc81c3\uc870 (\uc11c\ube44\uc2a4\uc758 \uc81c\uacf5 \ubc0f \ubcc0\uacbd)"}),(0,Co.jsxs)("ol",{children:[(0,Co.jsx)("li",{children:"\ubcf8 \uc11c\ube44\uc2a4\ub294 \uc774\uc6a9\uc790\uc758 \uc758\uc0ac\uacb0\uc815 \ubd84\uc11d \ubc0f \uc2e4\ud328 \uc790\uc0b0\ud654\ub97c \ub3d5\ub294 \ud234\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."}),(0,Co.jsx)("li",{children:"\uc11c\ube44\uc2a4\ub294 \uc6b4\uc601\uc0c1, \uae30\uc220\uc0c1\uc758 \ud544\uc694\uc5d0 \ub530\ub77c \uc81c\uacf5\ud558\ub294 \uc11c\ube44\uc2a4\uc758 \uc77c\ubd80 \ub610\ub294 \uc804\ubd80\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"\uc81c4\uc870 (\uac8c\uc2dc\ubb3c\uc758 \uad8c\ub9ac\uc640 \ucc45\uc784)"}),(0,Co.jsxs)("ol",{children:[(0,Co.jsx)("li",{children:"\uc774\uc6a9\uc790\uac00 \uc791\uc131\ud55c '\uc2e4\ud328 \ub85c\uadf8' \ubc0f \uac8c\uc2dc\ubb3c\uc5d0 \ub300\ud55c \uc800\uc791\uad8c\uc740 \uc791\uc131\uc790 \ubcf8\uc778\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."}),(0,Co.jsx)("li",{children:"FailLog\ub294 \uc774\uc6a9\uc790\uac00 \uc791\uc131\ud55c \ub0b4\uc6a9\uc744 \uc11c\ube44\uc2a4\uc758 \uac1c\uc120 \ubc0f \ud1b5\uacc4\uc801 \ubd84\uc11d\uc744 \uc704\ud574 \uc775\uba85\ud654\ud558\uc5ec \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"\uc81c5\uc870 (\uba74\ucc45 \uc870\ud56d)"}),(0,Co.jsx)("p",{children:"\uc11c\ube44\uc2a4\ub294 \ucc9c\uc7ac\uc9c0\ubcc0, \ubd88\uac00\ud56d\ub825\uc801 \uc0ac\uc720\ub85c \uc778\ud55c \uc11c\ube44\uc2a4 \uc911\ub2e8\uc5d0 \ub300\ud574 \ucc45\uc784\uc744 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})]})]})},marketing:{title:"[\uc120\ud0dd] \uac1c\uc778\uc815\ubcf4 \ub9c8\ucf00\ud305 \ud65c\uc6a9 \ub3d9\uc758",subtitle:"Fail Log \uc11c\ube44\uc2a4\uc758 \ubc1c\uc804\uc744 \uc704\ud574 \ub2e4\uc74c \uc57d\uad00\uc5d0 \ub3d9\uc758 \ubc14\ub78d\ub2c8\ub2e4.",content:(0,Co.jsxs)(bd.Section,{children:[(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"1. \uc218\uc9d1 \ubc0f \uc774\uc6a9 \ubaa9\uc801"}),(0,Co.jsxs)("ul",{children:[(0,Co.jsx)("li",{children:"\uac1c\uc778 \ub9de\ucda4\ud615 \uc11c\ube44\uc2a4 \uc81c\uacf5: \uc0ac\uc6a9\uc790\uc758 \uc2e4\ud328 \uae30\ub85d \ud328\ud134\uc744 \ubd84\uc11d\ud558\uc5ec \ub9de\ucda4\ud615 \uc778\uc0ac\uc774\ud2b8 \ubc0f \ubd84\uc11d \ub9ac\ud3ec\ud2b8 \ubc1c\uc1a1"}),(0,Co.jsx)("li",{children:"\ud61c\ud0dd \ubc0f \uc774\ubca4\ud2b8 \uc815\ubcf4 \uc548\ub0b4: FailLog\uc758 \uc2e0\uaddc \uae30\ub2a5 \uc5c5\ub370\uc774\ud2b8, \uc720\ub8cc \ud50c\ub79c \ud504\ub85c\ubaa8\uc158, \uc774\ubca4\ud2b8 \uc815\ubcf4 \uc548\ub0b4 (\uc774\uba54\uc77c, \uc571 \ud478\uc2dc \ub4f1)"}),(0,Co.jsx)("li",{children:"\uc11c\ube44\uc2a4 \uac1c\uc120 \ubc0f \ud1b5\uacc4: \uc2e0\uaddc \uc11c\ube44\uc2a4 \uac1c\ubc1c \ubc0f \uc778\uad6c\ud1b5\uacc4\ud559\uc801 \ud2b9\uc131\uc5d0 \ub530\ub978 \uc11c\ube44\uc2a4 \ucd5c\uc801\ud654"})]})]}),(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"2. \uc218\uc9d1 \ud56d\ubaa9"}),(0,Co.jsx)("ul",{children:(0,Co.jsx)("li",{children:"\uc774\uba54\uc77c \uc8fc\uc18c, \uc11c\ube44\uc2a4 \uc774\uc6a9 \uae30\ub85d, \uc811\uc18d \ube48\ub3c4, \ub2c9\ub124\uc784"})})]}),(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"3. \ubcf4\uc720 \ubc0f \uc774\uc6a9 \uae30\uac04"}),(0,Co.jsx)("ul",{children:(0,Co.jsx)("li",{children:"\ud68c\uc6d0 \ud0c8\ud1f4 \uc2dc \ub610\ub294 \ub3d9\uc758 \ucca0\ud68c \uc2dc\uae4c\uc9c0 (\ub2e8, \uad00\ub828 \ubc95\ub839\uc5d0 \ub530\ub77c \ubcf4\uc874\uc774 \ud544\uc694\ud55c \uacbd\uc6b0 \ud574\ub2f9 \ubc95\ub839\uc774 \uc815\ud55c \uae30\uac04\uae4c\uc9c0 \ubcf4\uad00)"})})]}),(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"4. \ub3d9\uc758 \uac70\ubd80 \uad8c\ub9ac \ubc0f \ubd88\uc774\uc775"}),(0,Co.jsxs)("ul",{children:[(0,Co.jsx)("li",{children:"\uadc0\ud558\ub294 \ubcf8 \uac1c\uc778\uc815\ubcf4 \ub9c8\ucf00\ud305 \ud65c\uc6a9 \ub3d9\uc758\ub97c \uac70\ubd80\ud560 \uad8c\ub9ac\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),(0,Co.jsx)("li",{children:"\uac70\ubd80 \uc2dc\uc5d0\ub3c4 FailLog\uc758 \uae30\ubcf8 \uc11c\ube44\uc2a4 \uc774\uc6a9\uc740 \ub3d9\uc77c\ud558\uac8c \uac00\ub2a5\ud558\ub098, \ub9de\ucda4\ud615 \ubd84\uc11d \ub9ac\ud3ec\ud2b8\ub098 \ud504\ub85c\ubaa8\uc158 \ud61c\ud0dd \uc548\ub0b4 \ub4f1\uc774 \uc81c\ud55c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})]})},notification:{title:"[\uc120\ud0dd] \ub9c8\ucf00\ud305 \uc815\ubcf4 \uc218\uc2e0 \ub3d9\uc758",subtitle:"Fail Log \uc11c\ube44\uc2a4\uc758 \ubc1c\uc804\uc744 \uc704\ud574 \ub2e4\uc74c \uc57d\uad00\uc5d0 \ub3d9\uc758 \ubc14\ub78d\ub2c8\ub2e4.",content:(0,Co.jsxs)(bd.Section,{children:[(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"1. \uc218\uc2e0 \ub3d9\uc758\uc758 \ubaa9\uc801"}),(0,Co.jsxs)("ul",{children:[(0,Co.jsx)("li",{children:"\ub9de\ucda4\ud615 \ubd84\uc11d \uc54c\ub9bc: \uc0ac\uc6a9\uc790\uc758 \uc2e4\ud328 \uae30\ub85d\uc744 \ubc14\ud0d5\uc73c\ub85c \ud55c \uc8fc\uac04/\uc6d4\uac04 \ubd84\uc11d \ub9ac\ud3ec\ud2b8 \ubc0f \uc778\uc0ac\uc774\ud2b8 \uc81c\uacf5"}),(0,Co.jsx)("li",{children:"\uc11c\ube44\uc2a4 \ud61c\ud0dd \uc548\ub0b4: \uc2e0\uaddc \uae30\ub2a5 \ucd9c\uc2dc, \uc774\ubca4\ud2b8, \ud504\ub85c\ubaa8\uc158(\ud560\uc778 \ucfe0\ud3f0 \ub4f1) \uc815\ubcf4 \uc548\ub0b4"}),(0,Co.jsx)("li",{children:"\ucf58\ud150\uce20 \uc81c\uacf5: \uc2e4\ud328\ub97c \uc790\uc2e0\uc73c\ub85c \ub9cc\ub4dc\ub294 \ubc95 \ub4f1 \uc11c\ube44\uc2a4 \uad00\ub828 \uc720\uc6a9\ud55c \ud301 \uacf5\uc720"})]})]}),(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"2. \uc218\uc9d1\ud558\ub294 \uac1c\uc778\uc815\ubcf4 \ud56d\ubaa9"}),(0,Co.jsx)("ul",{children:(0,Co.jsx)("li",{children:"\uc774\uba54\uc77c, \uc11c\ube44\uc2a4 \ub0b4 \uc54c\ub9bc(Push), \ub2c9\ub124\uc784"})})]}),(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"3. \uc804\uc1a1 \ubc29\ubc95"}),(0,Co.jsx)("ul",{children:(0,Co.jsx)("li",{children:"\uc774\uba54\uc77c, \uc571 \ud478\uc2dc(Push), \uc54c\ub9bc\ud1a1 \ub4f1"})})]}),(0,Co.jsxs)(bd.Article,{children:[(0,Co.jsx)(bd.ArticleTitle,{children:"4. \ub3d9\uc758 \ucca0\ud68c \ubc0f \ubd88\uc774\uc775"}),(0,Co.jsxs)("ul",{children:[(0,Co.jsx)("li",{children:"\uadc0\ud558\ub294 \ub9c8\ucf00\ud305 \uc815\ubcf4 \uc218\uc2e0 \ub3d9\uc758\ub97c \uc5b8\uc81c\ub4e0\uc9c0 \uc11c\ube44\uc2a4 \ub0b4 [\uc124\uc815 > \uc54c\ub9bc \uc124\uc815] \uba54\ub274\uc5d0\uc11c \ucca0\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,Co.jsx)("li",{children:"\uc218\uc2e0\uc5d0 \ub3d9\uc758\ud558\uc9c0 \uc54a\uc73c\uc154\ub3c4 FailLog\uc758 \uae30\ubcf8 \uc11c\ube44\uc2a4 \uc774\uc6a9\uc5d0\ub294 \uc81c\ud55c\uc774 \uc5c6\uc73c\ub098, \ub9de\ucda4\ud615 \ub9ac\ud3ec\ud2b8 \ubc0f \uc720\uc6a9\ud55c \ud61c\ud0dd \uc548\ub0b4\ub97c \ubc1b\uc73c\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."})]})]})]})}},yd=e=>{let{type:t,onClose:n}=e;const r=vd[t];return r?(0,Co.jsx)(bd.Overlay,{onClick:n,children:(0,Co.jsxs)(bd.ModalCard,{onClick:e=>e.stopPropagation(),children:[(0,Co.jsx)(bd.ModalTitle,{children:r.title}),(0,Co.jsx)(bd.ModalSubtitle,{children:r.subtitle}),(0,Co.jsx)(bd.ContentBox,{children:r.content}),(0,Co.jsx)(bd.ConfirmButton,{onClick:n,children:"\ud655\uc778"}),(0,Co.jsx)(bd.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]})}):null},wd=300,Ed=()=>{const e=vi(),[t,n]=(0,r.useState)(1),[i,o]=(0,r.useState)(null),[a,l]=(0,r.useState)({all:!1,terms:!1,marketing:!1,notification:!1}),[s,c]=(0,r.useState)(""),[d,u]=(0,r.useState)(""),[h,p]=(0,r.useState)(!1),[f,g]=(0,r.useState)(!1),[m,x]=(0,r.useState)(wd),C=(0,r.useRef)(null),[b,v]=(0,r.useState)(""),[y,w]=(0,r.useState)(""),[E,j]=(0,r.useState)(""),[S,k]=(0,r.useState)(""),[A,T]=(0,r.useState)(""),[L,F]=(0,r.useState)(""),[I,O]=(0,r.useState)(!1),[R,N]=(0,r.useState)(!1),[P,z]=(0,r.useState)(wd),$=(0,r.useRef)(null);(0,r.useEffect)(()=>()=>{clearInterval(C.current),clearInterval($.current)},[]);const D=e=>`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`,B=(e,t)=>{const n={...a,[e]:t};n.all=n.terms&&n.marketing&&n.notification,l(n)};return 1===t?(0,Co.jsxs)(Co.Fragment,{children:[i&&(0,Co.jsx)(yd,{type:i,onClose:()=>o(null)}),(0,Co.jsx)(xd.Title,{children:"\ud68c\uc6d0\uac00\uc785"}),(0,Co.jsx)(xd.Subtitle,{children:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud68c\uc6d0\uac00\uc785\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694."}),(0,Co.jsxs)(xd.AgreementBox,{children:[(0,Co.jsxs)(xd.AgreementAll,{children:[(0,Co.jsx)(xd.Checkbox,{type:"checkbox",checked:a.all,onChange:e=>{return t=e.target.checked,void l({all:t,terms:t,marketing:t,notification:t});var t}}),(0,Co.jsx)("span",{children:"\uc804\uccb4 \ub3d9\uc758\ud558\uae30"})]}),(0,Co.jsx)(xd.Separator,{}),(0,Co.jsxs)(xd.AgreementRow,{children:[(0,Co.jsx)(xd.Checkbox,{type:"checkbox",checked:a.terms,onChange:e=>B("terms",e.target.checked)}),(0,Co.jsxs)(xd.AgreementLabel,{children:["\uc774\uc6a9\uc57d\uad00 \ubc0f \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68 \ub3d9\uc758 ",(0,Co.jsx)(xd.Required,{children:"(\ud544\uc218)"})]}),(0,Co.jsx)(xd.Arrow,{onClick:()=>o("terms"),children:"\u203a"})]}),(0,Co.jsxs)(xd.AgreementRow,{children:[(0,Co.jsx)(xd.Checkbox,{type:"checkbox",checked:a.marketing,onChange:e=>B("marketing",e.target.checked)}),(0,Co.jsxs)(xd.AgreementLabel,{children:["\uac1c\uc778\uc815\ubcf4 \ub9c8\ucf00\ud305 \ud65c\uc6a9 \ub3d9\uc758 ",(0,Co.jsx)(xd.Optional,{children:"(\uc120\ud0dd)"})]}),(0,Co.jsx)(xd.Arrow,{onClick:()=>o("marketing"),children:"\u203a"})]}),(0,Co.jsxs)(xd.AgreementRow,{$column:!0,children:[(0,Co.jsxs)(xd.AgreementRowInner,{children:[(0,Co.jsx)(xd.Checkbox,{type:"checkbox",checked:a.notification,onChange:e=>B("notification",e.target.checked)}),(0,Co.jsxs)(xd.AgreementLabel,{children:["\ub9c8\ucf00\ud305 \uc815\ubcf4 \uc218\uc2e0 \ub3d9\uc758 ",(0,Co.jsx)(xd.Optional,{children:"(\uc120\ud0dd)"})]}),(0,Co.jsx)(xd.Arrow,{onClick:()=>o("notification"),children:"\u203a"})]}),(0,Co.jsx)(xd.AgreementDesc,{children:"\ub9de\ucda4 \ucd94\ucc9c, \ub274\uc2a4\ub808\ud130 \ub4f1 \uc720\uc6a9\ud55c \ud61c\ud0dd\uc744 \uc81c\uacf5\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,Co.jsxs)(xd.OrDivider,{children:[(0,Co.jsx)(xd.OrLine,{}),(0,Co.jsx)(xd.OrText,{children:"\ub610\ub294"}),(0,Co.jsx)(xd.OrLine,{})]}),(0,Co.jsxs)(xd.SocialButton,{children:[(0,Co.jsx)(xd.SocialIcon,{$bg:"#fff",$color:"#4285F4",$border:"1.5px solid #ddd",children:"G"}),"\uad6c\uae00\ub85c \ud68c\uc6d0\uac00\uc785"]}),(0,Co.jsxs)(xd.SocialButton,{children:[(0,Co.jsx)(xd.SocialIcon,{$bg:"#03C75A",$color:"#fff",children:"N"}),"\ub124\uc774\ubc84\ub85c \ud68c\uc6d0\uac00\uc785"]}),(0,Co.jsxs)(xd.SocialButton,{children:[(0,Co.jsx)(xd.SocialIcon,{$bg:"#FEE500",$color:"#000",children:"K"}),"\uce74\uce74\uc624\ud1a1\uc73c\ub85c \ud68c\uc6d0\uac00\uc785"]}),(0,Co.jsx)(xd.PrimaryButton,{onClick:()=>{a.terms&&n(2)},$disabled:!a.terms,children:"Fail Log \uacc4\uc815 \ub9cc\ub4e4\uae30"}),(0,Co.jsxs)(xd.BottomLink,{children:["\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694? ",(0,Co.jsx)(xd.PurpleLink,{to:"/login",children:"\ub85c\uadf8\uc778"})]}),(0,Co.jsx)(xd.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]}):2===t?(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(xd.Title,{children:"\ud68c\uc6d0\uac00\uc785"}),(0,Co.jsx)(xd.Subtitle,{children:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud68c\uc6d0\uac00\uc785\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694."}),(0,Co.jsx)(xd.FieldLabel,{children:"\uc774\uba54\uc77c"}),(0,Co.jsxs)(xd.InputRow,{children:[(0,Co.jsx)(xd.Input,{type:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:s,onChange:e=>c(e.target.value),disabled:f}),(0,Co.jsx)(xd.SmallButton,{onClick:()=>{s&&(p(!0),clearInterval(C.current),x(wd),C.current=setInterval(()=>{x(e=>e<=1?(clearInterval(C.current),0):e-1)},1e3))},disabled:f,children:"\uc774\uba54\uc77c \uc778\uc99d"})]}),h&&(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(xd.FieldLabel,{children:"\uc778\uc99d\ubc88\ud638"}),(0,Co.jsxs)(xd.InputRow,{children:[(0,Co.jsxs)(xd.InputWithTimer,{children:[(0,Co.jsx)(xd.Input,{placeholder:"\uc778\uc99d\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:d,onChange:e=>u(e.target.value),disabled:f}),!f&&(0,Co.jsx)(xd.Timer,{children:D(m)})]}),(0,Co.jsx)(xd.SmallButton,{onClick:()=>{d&&(g(!0),clearInterval(C.current))},disabled:f,$verified:f,children:f?"\uc778\uc99d \uc644\ub8cc":"\uc778\uc99d \ud655\uc778"})]})]}),(0,Co.jsx)(xd.PrimaryButton,{onClick:()=>{f&&n(3)},$disabled:!f,children:"\ub2e4\uc74c \ub2e8\uacc4\ub85c"}),(0,Co.jsxs)(xd.BottomLink,{children:["\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694? ",(0,Co.jsx)(xd.PurpleLink,{to:"/login",children:"\ub85c\uadf8\uc778"})]}),(0,Co.jsx)(xd.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]}):3===t?(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(xd.Title,{children:"\ud68c\uc6d0\uac00\uc785"}),(0,Co.jsx)(xd.Subtitle,{children:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud68c\uc6d0\uac00\uc785\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694."}),(0,Co.jsx)(xd.FieldLabel,{children:"\uc774\ub984"}),(0,Co.jsx)(xd.Input,{placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",value:b,onChange:e=>v(e.target.value)}),b.length>0&&b.length<2&&(0,Co.jsx)(xd.ValidationMsg,{children:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),(0,Co.jsx)(xd.FieldLabel,{style:{marginTop:16},children:"\ub2c9\ub124\uc784"}),(0,Co.jsx)(xd.Input,{placeholder:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud558\uc138\uc694",value:y,onChange:e=>w(e.target.value)}),y.length>0&&y.length<2&&(0,Co.jsx)(xd.ValidationMsg,{children:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),(0,Co.jsx)(xd.PrimaryButton,{onClick:()=>{b.length>=2&&y.length>=2&&n(4)},$disabled:b.length<2||y.length<2,style:{marginTop:24},children:"\ub2e4\uc74c \ub2e8\uacc4\ub85c"}),(0,Co.jsxs)(xd.BottomLink,{children:["\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694? ",(0,Co.jsx)(xd.PurpleLink,{to:"/login",children:"\ub85c\uadf8\uc778"})]}),(0,Co.jsx)(xd.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]}):4===t?(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(xd.Title,{children:"\ud68c\uc6d0\uac00\uc785"}),(0,Co.jsx)(xd.Subtitle,{children:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud68c\uc6d0\uac00\uc785\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694."}),(0,Co.jsx)(xd.FieldLabel,{children:"\ube44\ubc00\ubc88\ud638"}),(0,Co.jsx)(xd.Input,{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:E,onChange:e=>j(e.target.value)}),(0,Co.jsx)(xd.HintMsg,{children:"\ubc18\ub4dc\uc2dc \ud2b9\uc218 \ubb38\uc790 \uc774\uc0c1 \uc785\ub825\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."}),(0,Co.jsx)(xd.FieldLabel,{style:{marginTop:16},children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),(0,Co.jsx)(xd.Input,{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \uc785\ub825\ud558\uc138\uc694",value:S,onChange:e=>k(e.target.value)}),S&&E!==S&&(0,Co.jsx)(xd.ValidationMsg,{children:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),(0,Co.jsx)(xd.PrimaryButton,{onClick:()=>{E&&E===S&&n(5)},$disabled:!E||E!==S,style:{marginTop:24},children:"\ub2e4\uc74c \ub2e8\uacc4\ub85c"}),(0,Co.jsxs)(xd.BottomLink,{children:["\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694? ",(0,Co.jsx)(xd.PurpleLink,{to:"/login",children:"\ub85c\uadf8\uc778"})]}),(0,Co.jsx)(xd.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]}):5===t?(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(xd.Title,{children:"\ud68c\uc6d0\uac00\uc785"}),(0,Co.jsx)(xd.Subtitle,{children:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud68c\uc6d0\uac00\uc785\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694."}),(0,Co.jsx)(xd.FieldLabel,{children:"\uc804\ud654\ubc88\ud638"}),(0,Co.jsxs)(xd.InputRow,{children:[(0,Co.jsx)(xd.Input,{type:"tel",placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:A,onChange:e=>T(e.target.value),disabled:R}),(0,Co.jsx)(xd.SmallButton,{onClick:()=>{A&&(O(!0),clearInterval($.current),z(wd),$.current=setInterval(()=>{z(e=>e<=1?(clearInterval($.current),0):e-1)},1e3))},disabled:R,children:"\uc804\ud654\ubc88\ud638 \uc778\uc99d"})]}),I&&(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(xd.FieldLabel,{children:"\uc778\uc99d\ubc88\ud638"}),(0,Co.jsxs)(xd.InputRow,{children:[(0,Co.jsxs)(xd.InputWithTimer,{children:[(0,Co.jsx)(xd.Input,{placeholder:"\uc778\uc99d\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:L,onChange:e=>F(e.target.value),disabled:R}),!R&&(0,Co.jsx)(xd.Timer,{children:D(P)})]}),(0,Co.jsx)(xd.SmallButton,{onClick:()=>{L&&(N(!0),clearInterval($.current))},disabled:R,$verified:R,children:R?"\uc778\uc99d \uc644\ub8cc":"\uc778\uc99d \ud655\uc778"})]})]}),(0,Co.jsx)(xd.PrimaryButton,{onClick:()=>{n(6)},$disabled:!R,style:{marginTop:8},children:"\ud68c\uc6d0\uac00\uc785"}),(0,Co.jsxs)(xd.BottomLink,{children:["\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694? ",(0,Co.jsx)(xd.PurpleLink,{to:"/login",children:"\ub85c\uadf8\uc778"})]}),(0,Co.jsx)(xd.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]}):(0,Co.jsxs)(xd.SuccessBox,{children:[(0,Co.jsxs)(xd.SuccessText,{children:["\ud68c\uc6d0\uac00\uc785\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4!",(0,Co.jsx)("br",{}),"\ub2f9\uc2e0\ub9cc\uc758 \uc774\uc57c\uae30\ub97c \uc791\uc131\ud574\ubcf4\uc138\uc694!"]}),(0,Co.jsx)(xd.PrimaryButton,{onClick:()=>e("/login"),children:"\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c"})]})},jd={};jd.Title=rn.h2`
  ${Pa}
  color: ${rd};
  margin-bottom: 8px;
`,jd.Subtitle=rn.p`
  ${Va}
  color: ${dd};
  margin-bottom: 28px;
`,jd.InputGroup=rn.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`,jd.Input=rn.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${e=>{let{$error:t}=e;return t?nd:sd}};
  border-radius: 8px;
  ${Va}
  color: ${rd};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${cd};
  }

  &:focus {
    border-color: ${e=>{let{$error:t}=e;return t?nd:id}};
  }
`,jd.ErrorText=rn.p`
  ${Xa}
  color: ${nd};
  margin-bottom: 6px;
`,jd.CheckRow=rn.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`,jd.CheckLabel=rn.label`
  ${Xa}
  color: ${ud};
  cursor: pointer;
`,jd.PrimaryButton=rn.button`
  width: 100%;
  padding: 15px;
  background: ${id};
  color: ${od};
  ${_a}
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  opacity: ${e=>{let{disabled:t}=e;return t?.6:1}};

  &:hover {
    background: #9333ea;
  }
`,jd.LinksRow=rn.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
`,jd.LinkText=rn(ro)`
  ${Xa}
  color: ${ud};
  text-decoration: none;

  &:hover {
    color: ${id};
  }
`,jd.Divider=rn.span`
  ${Xa}
  color: ${cd};
`,jd.SocialIcons=rn.div`
  display: flex;
  gap: 6px;
`,jd.SocialIcon=rn.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${e=>{let{$bg:t}=e;return t}};
  color: ${e=>{let{$color:t}=e;return t}};
  border: ${e=>{let{$border:t}=e;return t||"none"}};
  ${Xa}
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,jd.JoinPrompt=rn.p`
  text-align: center;
  ${Xa}
  color: ${dd};
  margin-bottom: 12px;
`,jd.OutlineButton=rn.button`
  width: 100%;
  padding: 14px;
  background: transparent;
  color: ${id};
  ${Qa}
  border: 1.5px solid #d9a8ff;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 24px;

  &:hover {
    background: ${ad};
  }
`,jd.Copyright=rn.p`
  text-align: center;
  ${tl}
  color: ${cd};
`;const Sd=jd,kd=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,Ad=/^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/,Td=()=>{const e=vi(),{setUser:t,setIsAuthenticated:n}=xo(),[i,o]=(0,r.useState)(""),[a,l]=(0,r.useState)(""),[s,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)({}),[h,p]=(0,r.useState)(!1);return(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(Sd.Title,{children:"\ub85c\uadf8\uc778"}),(0,Co.jsx)(Sd.Subtitle,{children:"\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574 \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\uc138\uc694."}),(0,Co.jsxs)(Sd.InputGroup,{children:[(0,Co.jsx)(Sd.Input,{type:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:i,onChange:e=>o(e.target.value),$error:!!d.memberEmail}),d.memberEmail&&(0,Co.jsx)(Sd.ErrorText,{children:d.memberEmail}),(0,Co.jsx)(Sd.Input,{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:a,onChange:e=>l(e.target.value),$error:!!d.memberPassword}),d.memberPassword&&(0,Co.jsx)(Sd.ErrorText,{children:d.memberPassword})]}),(0,Co.jsxs)(Sd.CheckRow,{children:[(0,Co.jsx)("input",{type:"checkbox",id:"keepLogin",checked:s,onChange:e=>c(e.target.checked)}),(0,Co.jsx)(Sd.CheckLabel,{htmlFor:"keepLogin",children:"\ub85c\uadf8\uc778 \uc0c1\ud0dc \uc720\uc9c0"})]}),(0,Co.jsx)(Sd.PrimaryButton,{onClick:async()=>{const r=(()=>{const e={};return i?kd.test(i)||(e.memberEmail="\uc774\uba54\uc77c \uc591\uc2dd\uc5d0 \ub9de\uac8c \uc785\ub825\ud574\uc8fc\uc138\uc694."):e.memberEmail="\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.",a?Ad.test(a)||(e.memberPassword="\uc18c\ubb38\uc790, \uc22b\uc790, \ud2b9\uc218\ubb38\uc790(!@#)\ub97c \uac01 \ud558\ub098\uc529 \ud3ec\ud568\ud55c 8\uc790\ub9ac \uc774\uc0c1\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4."):e.memberPassword="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",e})();if(u(r),!(Object.keys(r).length>0)){p(!0);try{const r=await fetch("http://localhost:10000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({memberEmail:i,memberPassword:a})});if(!r.ok){const e=await r.json();throw new Error(null===e||void 0===e?void 0:e.message)}const o=await fetch("http://localhost:10000/api/members/me",{credentials:"include"});if(!o.ok)throw new Error("Access Token Expired");const{success:l,data:s}=await o.json();l&&(t(s),n(!0),e("/"))}catch(o){alert(o.message)}finally{p(!1)}}},disabled:h,children:"\ub85c\uadf8\uc778"}),(0,Co.jsxs)(Sd.LinksRow,{children:[(0,Co.jsx)(Sd.LinkText,{to:"/find-id",children:"\uc544\uc774\ub514 \ucc3e\uae30"}),(0,Co.jsx)(Sd.Divider,{children:"|"}),(0,Co.jsx)(Sd.LinkText,{to:"/reset-password",children:"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30"}),(0,Co.jsx)(Sd.Divider,{children:"|"}),(0,Co.jsxs)(Sd.SocialIcons,{children:[(0,Co.jsx)(Sd.SocialIcon,{$bg:"#FEE500",$color:"#000",onClick:()=>{window.location.href="http://localhost:10000/oauth2/authorization/kakao"},children:"K"}),(0,Co.jsx)(Sd.SocialIcon,{$bg:"#fff",$color:"#4285F4",$border:"1px solid #ddd",onClick:()=>{window.location.href="http://localhost:10000/oauth2/authorization/google"},children:"G"}),(0,Co.jsx)(Sd.SocialIcon,{$bg:"#03C75A",$color:"#fff",onClick:()=>{window.location.href="http://localhost:10000/oauth2/authorization/naver"},children:"N"})]})]}),(0,Co.jsx)(Sd.JoinPrompt,{children:"\uc544\uc9c1 \uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?"}),(0,Co.jsx)(Sd.OutlineButton,{onClick:()=>e("/join"),children:"\ud68c\uc6d0\uac00\uc785"}),(0,Co.jsx)(Sd.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]})},Ld=()=>(0,Co.jsx)(Td,{}),Fd={};Fd.Title=rn.h2`
  ${Pa}
  color: ${rd};
  margin-bottom: 8px;
`,Fd.Subtitle=rn.p`
  ${Va}
  color: ${dd};
  margin-bottom: 24px;
`,Fd.FieldLabel=rn.p`
  ${Qa}
  color: #444;
  margin-bottom: 6px;
`,Fd.Input=rn.input`
  width: 100%;
  padding: 13px 16px;
  border: 1px solid ${sd};
  border-radius: 8px;
  ${Va}
  color: ${rd};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${cd};
  }

  &:focus {
    border-color: ${id};
  }
`,Fd.HintBox=rn.div`
  padding: 16px;
  background: ${ad};
  border-radius: 8px;
  ${Va}
  color: ${ud};
  text-align: center;
`,Fd.HintValue=rn.span`
  ${Qa}
  color: ${id};
`,Fd.PrimaryButton=rn.button`
  width: 100%;
  padding: 15px;
  background: ${e=>{let{$disabled:t}=e;return t?"#d8a8ff":id}};
  color: ${od};
  ${_a}
  border: none;
  border-radius: 8px;
  cursor: ${e=>{let{$disabled:t}=e;return t?"not-allowed":"pointer"}};
  margin-bottom: 16px;

  &:hover {
    background: ${e=>{let{$disabled:t}=e;return t?"#d8a8ff":"#9333ea"}};
  }
`,Fd.Copyright=rn.p`
  text-align: center;
  ${tl}
  color: ${cd};
  margin-top: 8px;
`;const Id=Fd,Od=()=>{const e=vi(),[t,n]=(0,r.useState)(""),[i,o]=(0,r.useState)(null);return i?(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(Id.Title,{children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),(0,Co.jsx)(Id.Subtitle,{children:"\ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud558\uc138\uc694."}),(0,Co.jsxs)(Id.HintBox,{children:["\uace0\uac1d\ub2d8\uc758 \ube44\ubc00\ubc88\ud638\ub294 : ",(0,Co.jsx)(Id.HintValue,{children:i}),"\uc785\ub2c8\ub2e4."]}),(0,Co.jsx)(Id.PrimaryButton,{onClick:()=>e("/login"),style:{marginTop:24},children:"\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c"})]}):(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(Id.Title,{children:"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30"}),(0,Co.jsx)(Id.Subtitle,{children:"\uac00\uc785\ud55c \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud574 \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud558\uc138\uc694."}),(0,Co.jsx)(Id.FieldLabel,{children:"\uc774\uba54\uc77c"}),(0,Co.jsx)(Id.Input,{type:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:t,onChange:e=>n(e.target.value)}),(0,Co.jsx)(Id.PrimaryButton,{onClick:()=>{o("Se**put**790")},$disabled:!t,style:{marginTop:24},children:"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30"}),(0,Co.jsx)(Id.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]})},Rd={};Rd.Title=rn.h2`
  ${Pa}
  color: ${rd};
  margin-bottom: 8px;
`,Rd.Subtitle=rn.p`
  ${Va}
  color: ${dd};
  margin-bottom: 24px;
`,Rd.FieldLabel=rn.p`
  ${Qa}
  color: #444;
  margin-bottom: 6px;
`,Rd.Input=rn.input`
  width: 100%;
  padding: 13px 16px;
  border: 1px solid ${sd};
  border-radius: 8px;
  ${Va}
  color: ${rd};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${cd};
  }

  &:focus {
    border-color: ${id};
  }
`,Rd.ResultBox=rn.div`
  margin-top: 24px;
  padding: 16px;
  background: ${ad};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
`,Rd.ResultLabel=rn.span`
  ${Va}
  color: ${ud};
`,Rd.ResultValue=rn.span`
  ${_a}
  color: ${id};
`,Rd.PrimaryButton=rn.button`
  width: 100%;
  padding: 15px;
  background: ${e=>{let{$disabled:t}=e;return t?"#d8a8ff":id}};
  color: ${od};
  ${_a}
  border: none;
  border-radius: 8px;
  cursor: ${e=>{let{$disabled:t}=e;return t?"not-allowed":"pointer"}};
  margin-bottom: 16px;

  &:hover {
    background: ${e=>{let{$disabled:t}=e;return t?"#d8a8ff":"#9333ea"}};
  }
`,Rd.Copyright=rn.p`
  text-align: center;
  ${tl}
  color: ${cd};
  margin-top: 8px;
`;const Nd=Rd,Pd=()=>{const e=vi(),[t,n]=(0,r.useState)(""),[i,o]=(0,r.useState)(""),[a,l]=(0,r.useState)(null);return(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(Nd.Title,{children:"\uc544\uc774\ub514 \ucc3e\uae30"}),(0,Co.jsx)(Nd.Subtitle,{children:"\uc774\ub984\uacfc \uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574 \uc544\uc774\ub514\ub97c \ucc3e\uc73c\uc138\uc694."}),(0,Co.jsx)(Nd.FieldLabel,{children:"\uc774\ub984"}),(0,Co.jsx)(Nd.Input,{placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",value:t,onChange:e=>n(e.target.value)}),(0,Co.jsx)(Nd.FieldLabel,{style:{marginTop:16},children:"\uc804\ud654\ubc88\ud638"}),(0,Co.jsx)(Nd.Input,{type:"tel",placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:i,onChange:e=>o(e.target.value)}),a&&(0,Co.jsxs)(Nd.ResultBox,{children:[(0,Co.jsx)(Nd.ResultLabel,{children:"\uace0\uac1d\ub2d8\uc758 \uc544\uc774\ub514\ub294"}),(0,Co.jsx)(Nd.ResultValue,{children:a}),(0,Co.jsx)(Nd.ResultLabel,{children:"\uc785\ub2c8\ub2e4."})]}),a?(0,Co.jsx)(Nd.PrimaryButton,{onClick:()=>e("/login"),style:{marginTop:24},children:"\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c"}):(0,Co.jsx)(Nd.PrimaryButton,{onClick:()=>{l("user****@example.com")},$disabled:!t||!i,style:{marginTop:24},children:"\uc544\uc774\ub514 \ucc3e\uae30"}),(0,Co.jsx)(Nd.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]})};const zd={};zd.MainWrapper=rn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
  background-color: #ffffff;
  
  /* 반응형 대응: 화면이 작아질 때 좌우 여백 확보 */
  @media (max-width: 1200px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`,zd.SectionDivider=rn.div`
  margin-bottom: 60px;
  width: 100%;
`;const $d=zd,Dd={};Dd.InfoManagementSection=rn.section`
  padding: 60px 20px;
  max-width: 1200px; /* 전체 중앙 정렬을 위해 추가 */
  margin: 0 auto;

.info-header {
    margin-bottom: 40px; 
    
    h2 {
      font-size: 45px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 12px;
    }
    
    p {
      font-size: 24px;
      color: #64748B;
      font-weight: 400;
    }
  }
`,Dd.TopCardGrid=rn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 1:1:1 비율로 3개 배치 */
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* 모바일/태블릿에선 세로로 나열 */
  }
`,Dd.BottomAccountArea=rn.div`
  width: 100%;
`,Dd.AccountDataCard=rn.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 50px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  /* 상단 카드들과의 독립성을 위해 margin-top 제거하거나 조정 */
`,Dd.ProfileCard=rn.div`
  background: #ffffff;
  border-radius: 24px; /* 좀 더 둥글게 */
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #F1F5F9; /* 기획안처럼 얇은 테두리 추가 */
  height: 100%; /* 그리드 높이 통일 */

  .profileImageContainer {
    position: relative;
    margin-bottom: 30px;
  }

  .profileImageCircle { 
    width: 140px; /* 기획안 비율에 맞춰 조금 키움 */
    height: 140px; 
    border-radius: 50%; 
    overflow: hidden;
    border: 4px solid #F0F3FF;
    img { width: 100%; height: 100%; object-fit: cover; }
  }

  /* 닉네임 영역 강조 */
  .nickname-area {
    width: 100%;
    text-align: center;
    .nickname-display {
      font-size: 24px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 10px;
    }
  }

  .profile-card-footer-text {
    font-size: 13px;
    color: #94A3B8;
    margin-top: 20px;
  }
`,Dd.AccountItem=rn.div`
  display: grid;
  grid-template-columns: 140px 1fr 100px; /* 라벨 너비 살짝 조정 */
  align-items: center; /* 텍스트 중앙 정렬 */
  padding: 25px 0;
  border-bottom: 1px solid #f1f1f1;
  &:last-child { border-bottom: none; }

  .ItemLabel { font-size: 15px; font-weight: 700; color: #64748B; }
  .ItemContent { 
    padding-left: 20px;
    .EmailText, .UserInfoText { font-size: 16px; font-weight: 700; color: #1E293B; }
    .StatusBadge { 
      background: #7E3AF2; 
      color: white; 
      padding: 4px 12px; 
      border-radius: 6px; 
      font-size: 12px; 
      margin-right: 10px;
    }
  }
  .ItemBtn { 
    background: #F8FAFC; 
    border: 1px solid #E2E8F0;
    padding: 6px 12px;
    border-radius: 8px;
    color: #64748B; 
    cursor: pointer; 
    font-size: 13px;
    transition: all 0.2s;
    &:hover { background: #F1F5F9; color: #1E293B; }
  }
`;const Bd=Dd,Md={};Md.CommunitySection=rn.div` padding: 0 20px 50px; border-top: 1px solid #f5f5f5; margin-top: 40px; `,Md.PostGrid=rn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,Md.CardWrapper=rn.div`
  border: 1px solid ${e=>e.isSelected?"#8b5cf6":"#eee"};
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  transition: all 0.2s ease;
  &:hover { transform: translateY(-4px); }
`,Md.EmptyStateWrapper=rn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
`,Md.EmptyTitle=rn.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  color: #1e293b;
  margin-bottom: 10px;
  strong {
    color: #5d5fef;
  }
`,Md.EmptySubText=rn.p`
  font-size: 16px;
  color: #64748b;
  margin-bottom: 40px;
  line-height: 1.6;
`,Md.StartButton=rn.button`
  background: #5d5fef;
  color: white;
  padding: 12px 40px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  &:hover {
    background: #4a4cd9;
  }
`;const Hd=Md,Gd=n.p+"static/media/fail-logs.f31efadb8bf99d92512e.png";var Wd=n(985),Ud=n(495),_d=n(872);const Zd={};Zd.MyPageWrapper=rn.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
  background-color: #ffffff;
`,Zd.HeroSectionContainer=rn.section`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
`,Zd.HeroGrid=rn.div`
  display: grid;
  grid-template-columns: 648px 424px; 
  gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0 20px;
  }
`,Zd.HeroBanner=rn.div`
  width: 648px;
  height: 730px;
  background-color: #E8EBFD;
  border-radius: 30px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  .TextGroup {
    h3 { font-size: 18px; color: #5D5FEF; margin-bottom: 8px; font-weight: 600; }
    h2 { font-size: 40px; font-weight: 800; color: #2D3494; margin-bottom: 12px; }
    p { font-size: 18px; color: #4B5563; font-weight: 500; }
  }

  @media (max-width: 1100px) {
    width: 100%;
    height: auto;
    aspect-ratio: 648 / 730;
  }
`,Zd.GraphicPlaceholder=rn.div`
  margin-top: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  .Box { aspect-ratio: 1; background: rgba(255, 255, 255, 0.5); border-radius: 15px; }
`,Zd.QuickMenuGroup=rn.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`,Zd.QuickCard=rn.div`
  width: 424px;
  height: 236px;
  background-color: ${e=>e.bgColor||"#F1F5F9"};
  border-radius: 24px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;

  .CardText {
    h3 { font-size: 14px; color: #4B5563; margin-bottom: 4px; }
    h2 { font-size: 22px; font-weight: 800; color: #1E293B; margin-bottom: 8px; }
    span { font-size: 14px; color: #64748B; line-height: 1.4; }
  }

  .IconCircle {
    position: absolute;
    right: 25px;
    width: 65px;
    height: 65px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }

  @media (max-width: 1100px) {
    width: 100%;
    height: auto;
    aspect-ratio: 424 / 236;
  }
`,Zd.InfoManagementSection=rn.section` 
  padding: 40px 20px; 
`,Zd.InfoGridContainer=rn.div` 
  display: grid; 
  grid-template-columns: 1fr 2fr; 
  gap: 30px; 

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Zd.AccountDataCard=rn.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 50px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
`,Zd.AccountList=rn.div`
  display: flex;
  flex-direction: column;
`,Zd.AccountItem=rn.div`
  display: grid;
  /* 버튼이 가장 오른쪽 끝에 붙도록 1fr 할당 */
  grid-template-columns: 120px 1fr 100px; 
  align-items: flex-start;
  padding: 30px 0;
  border-bottom: 1px solid #f1f1f1;

  &:last-child { border-bottom: none; }

  .ItemLabel {
    font-size: 15px;
    color: #333; 
    font-weight: 700;
    margin-top: 2px;
  }

  .ItemContent {
    display: flex;
    flex-direction: column;
    padding-left: 20px;

    .EmailText, .UserInfoText {
      font-size: 16px;
      font-weight: 800;
      color: #333;
    }

    .VerifiedStatus {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .StatusBadge {
      background: #7E3AF2;
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }

    .SubNotice {
      font-size: 13px;
      color: #94A3B8;
      margin-top: 10px;
      line-height: 1.6;
      letter-spacing: -0.3px;
    }
  }

  .ItemBtn {
    background: none;
    border: none;
    color: #94A3B8;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-align: right;
    margin-top: 2px;
    white-space: nowrap;

    &:hover {
      color: #5D5FEF;
      text-decoration: underline;
    }
    
    &.UnregisterBtn:hover {
      color: #ef4444;
    }
  }
`,Zd.ProfileCard=rn.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  height: fit-content;

  .profileImageContainer {
    position: relative;
    margin-bottom: 25px;

    .profileImageCircle {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #F0F3FF;
      img { width: 100%; height: 100%; object-fit: cover; }
    }

    .image-edit-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      background: #ffffff;
      border: 1px solid #ddd;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      cursor: pointer;
    }
  }

  .nickname-area {
    width: 100%;
    margin-bottom: 15px;

    .display-mode {
      display: flex;
      gap: 10px;
      
      .nickname-input {
        flex: 1;
        border: none;
        background: #F8FAFC;
        padding: 10px 15px;
        border-radius: 10px;
        font-weight: 700;
        color: #333;
        outline: none;
      }

      .nickname-change-btn {
        background: none;
        border: 1px solid #E2E8F0;
        padding: 0 15px;
        border-radius: 10px;
        font-size: 13px;
        color: #64748B;
        cursor: pointer;
        &:hover { background: #F1F5F9; }
      }
    }
  }

  .profile-card-footer-text {
    font-size: 12px;
    color: #aaa;
    text-align: center;
  }
`,Zd.NicknameInputGroup=rn.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .edit-input {
    width: 100%;
    border: 2px solid #5D5FEF;
    padding: 10px 15px;
    border-radius: 10px;
    font-weight: 700;
    outline: none;
  }

  .EditActions {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    
    button {
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
    }
    .SaveBtn { background: #5D5FEF; color: white; border: none; }
    .CancelBtn { background: #f1f1f1; color: #666; border: none; }
  }
`,Zd.CommunitySection=rn.div` 
  padding: 0 20px 50px; 
  border-top: 1px solid #f5f5f5; 
  margin-top: 40px; 
`,Zd.PostGrid=rn.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,Zd.CardWrapper=rn.div`
  border: 1px solid ${e=>e.isSelected?"#8b5cf6":"#eee"};
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  box-shadow: ${e=>e.isSelected?"0 4px 12px rgba(139, 92, 246, 0.15)":"none"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  }
`,Zd.ImageSection=rn.div`
  position: relative;
  width: 100%;
  height: 180px;
  background: #f5f5f5;
`,Zd.Thumbnail=rn.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Zd.CheckboxOverlay=rn.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #8b5cf6; /* 체크박스 포인트 컬러 */
  }
`,Zd.TagLabel=rn.span`
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(93, 95, 239, 0.9); /* 서비스 테마색으로 변경 */
  color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
`,Zd.PostContentSection=rn.div`
  padding: 18px;
`,Zd.PostTime=rn.span`
  font-size: 12px;
  color: #94a3b8;
  display: block;
  margin-bottom: 8px;
  text-align: right;
`,Zd.PostTitle=rn.h4`
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 10px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Zd.PostSummary=rn.p`
  font-size: 13px;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 18px;
  height: 39px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Zd.CardFooter=rn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f1f5f9;
`,Zd.AuthorInfo=rn.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Zd.AuthorIcon=rn.div`
  width: 24px;
  height: 24px;
  background: #e2e8f0;
  border-radius: 50%;
  border: 1px solid #f1f5f9;
`,Zd.AuthorName=rn.span`
  font-size: 13px;
  font-weight: 500;
  color: #475569;
`,Zd.PostStats=rn.div`
  display: flex;
  gap: 12px;
`,Zd.StatItem=rn.span`
  font-size: 12px;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 4px;
`,Zd.CommunityContainer=rn.div`
  width: 100%;
  margin-top: 60px;
`,Zd.HeaderSection=rn.div`
  margin-bottom: 250px;
  h3 { font-size: 45px; font-weight: 800; color: #1e293b; margin-bottom: 12px; }
  p { font-size: 24px; color: #64748b; }
`,Zd.ControlBar=rn.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #f1f5f9;
  margin-bottom: 25px;
`,Zd.ControlLeft=rn.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .all-check-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    input { width: 18px; height: 18px; accent-color: #5d5fef; }
    label { font-size: 14px; font-weight: 600; color: #475569; }
  }
`,Zd.DeleteBtn=rn.button`
  background: #fff1f2;
  color: #f43f5e;
  border: 1px solid #ffe4e6;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  &:hover { background: #ffe4e6; }
`,Zd.ControlRight=rn.div` display: flex; gap: 12px; `,Zd.SearchInput=rn.input`
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  font-size: 14px;
  width: 220px;
  &:focus { border-color: #5d5fef; outline: none; }
`,Zd.EmptyStateWrapper=rn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
`,Zd.EmptyTitle=rn.h4`
  font-size: 45px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 20px;
  strong { color: #5d5fef; } /* FailLog 포인트 컬러로 통일 */
`,Zd.EmptySubText=rn.p`
  font-size: 32px;
  color: #888;
  line-height: 1.6;
  margin-bottom: 40px;
`,Zd.StartButton=rn.button`
  background: #5d5fef;
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 8px;
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover { transform: scale(1.05); }
  margin-bottom: 506px
`;const Yd=Zd,Qd=n.p+"static/media/default.7cccaa1b2ed76c11e2ec.png",Vd=e=>{let{memberNickname:t,memberProfileImageUrl:n,onNicknameChange:i,onImageChange:o}=e;const[a,l]=(0,r.useState)(!1),[s,c]=(0,r.useState)(t||""),d=(0,r.useRef)(null),u=n||Qd;return(0,Co.jsxs)(Yd.ProfileCard,{children:[(0,Co.jsxs)("div",{className:"profileImageContainer",children:[(0,Co.jsx)("div",{className:"profileImageCircle",children:(0,Co.jsx)("img",{src:u,alt:"\ud504\ub85c\ud544"})}),(0,Co.jsx)("input",{type:"file",ref:d,style:{display:"none"},accept:"image/*",onChange:e=>{const t=e.target.files[0];t&&o&&o(t)}}),(0,Co.jsx)("button",{className:"image-edit-btn",onClick:()=>{d.current.click()},type:"button",children:"\ud83d\udcf8"})]}),(0,Co.jsx)("div",{className:"nickname-area",children:a?(0,Co.jsxs)(Yd.NicknameInputGroup,{children:[(0,Co.jsx)("input",{type:"text",className:"edit-input",value:s,onChange:e=>c(e.target.value),autoFocus:!0}),(0,Co.jsxs)("div",{className:"EditActions",children:[(0,Co.jsx)("button",{className:"SaveBtn",onClick:()=>{i&&i(s),l(!1)},children:"\uc800\uc7a5"}),(0,Co.jsx)("button",{className:"CancelBtn",onClick:()=>{c(t),l(!1)},children:"\ucde8\uc18c"})]})]}):(0,Co.jsxs)("div",{className:"display-mode",children:[(0,Co.jsx)("input",{type:"text",className:"nickname-input",value:t?`${t}\ub2d8`:"\ub2c9\ub124\uc784\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694.",readOnly:!0}),(0,Co.jsx)("button",{className:"nickname-change-btn",onClick:()=>l(!0),type:"button",children:"\ubcc0\uacbd"})]})}),(0,Co.jsx)("p",{className:"profile-card-footer-text",children:"* FailLog\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub0b4 \ud504\ub85c\ud544 \uc774\ubbf8\uc9c0\ub97c \uc124\uc815\ud574\uc8fc\uc138\uc694."})]})},qd=e=>{let{memberEmail:t,memberName:n,memberPhone:r,memberPhoneVerified:i,onEmailChange:o,onPhoneVerify:a,onPasswordChange:l,onUnregister:s}=e;return(0,Co.jsx)(Yd.AccountDataCard,{children:(0,Co.jsxs)(Yd.AccountList,{children:[(0,Co.jsxs)(Yd.AccountItem,{children:[(0,Co.jsx)("div",{className:"ItemLabel",children:"\uc544\uc774\ub514"}),(0,Co.jsxs)("div",{className:"ItemContent",children:[(0,Co.jsx)("span",{className:"EmailText",children:t||"test@example.com"}),(0,Co.jsxs)("p",{className:"SubNotice",children:["\u2022 \uc18c\uc15c \uacc4\uc815\uc73c\ub85c \uac00\uc785\ub41c \uc720\uc800\uc758 \uacbd\uc6b0, \uc774\uba54\uc77c\uc740 \ubcc4\ub3c4\ub85c \ubcc0\uacbd \uc548\ub428\uc744 \uc54c\ub824\ub4dc\ub9bd\ub2c8\ub2e4.",(0,Co.jsx)("br",{}),"\u2022 \ubcf8\uc778\uc758 \uc5f0\ub3d9\ub41c \uacc4\uc815 \uc18c\uc15c \uacc4\uc815\uc5d0\uc11c \ubcc0\uacbd\ud574 \uc8fc\uc138\uc694."]})]}),(0,Co.jsx)("button",{className:"ItemBtn",onClick:o,children:"\uc5f0\ub77d\ucc98 \ubcc0\uacbd"})]}),(0,Co.jsxs)(Yd.AccountItem,{children:[(0,Co.jsx)("div",{className:"ItemLabel",children:"\ubcf8\uc778\uc778\uc99d"}),(0,Co.jsxs)("div",{className:"ItemContent",children:[1===i?(0,Co.jsxs)("div",{className:"VerifiedStatus",children:[(0,Co.jsx)("span",{className:"StatusBadge",children:"\uc778\uc99d\ub428"}),(0,Co.jsxs)("span",{className:"UserInfoText",children:[n," / ",r]})]}):(0,Co.jsx)("span",{className:"UnverifiedText",children:"\uc778\uc99d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),(0,Co.jsx)("p",{className:"SubNotice",children:"\u2022 \ubcf8\uc778 \uba85\uc758 \ud734\ub300\ud3f0 \ubc88\ud638\ub97c \ubcc0\uacbd\ud558\ub824\uba74, \ub2e4\uc2dc \ubcf8\uc778\uc778\uc99d\uc744 \uc9c4\ud589\ud558\uc154\uc57c \ud569\ub2c8\ub2e4."})]}),(0,Co.jsx)("button",{className:"ItemBtn",onClick:a,children:1===i?"\uc2e4\uba85\uc218\uc815":"\uc778\uc99d\ud558\uae30"})]}),(0,Co.jsxs)(Yd.AccountItem,{children:[(0,Co.jsx)("div",{className:"ItemLabel",children:"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd"}),(0,Co.jsx)("div",{className:"ItemContent"}),(0,Co.jsx)("button",{className:"ItemBtn",onClick:l,children:"\ubcc0\uacbd"})]}),(0,Co.jsxs)(Yd.AccountItem,{children:[(0,Co.jsx)("div",{className:"ItemLabel",children:"\ud68c\uc6d0\ud0c8\ud1f4"}),(0,Co.jsx)("div",{className:"ItemContent"}),(0,Co.jsx)("button",{className:"ItemBtn UnregisterBtn",onClick:s,children:"\ud0c8\ud1f4\ud558\uae30"})]})]})})},Jd=e=>{let{post:t,isSelected:n,onSelect:r}=e;const{tag:i,title:o,summary:a,author:l,date:s,likes:c,comments:d,imageUrl:u}=t;return(0,Co.jsxs)(Yd.CardWrapper,{isSelected:n,children:[(0,Co.jsxs)(Yd.ImageSection,{children:[(0,Co.jsx)(Yd.Thumbnail,{src:u||"/default-thumbnail.png",alt:o}),(0,Co.jsx)(Yd.CheckboxOverlay,{children:(0,Co.jsx)("input",{type:"checkbox",checked:n,onChange:r})}),(0,Co.jsx)(Yd.TagLabel,{children:i})]}),(0,Co.jsxs)(Yd.PostContentSection,{onClick:r,children:[(0,Co.jsx)(Yd.PostTime,{children:s}),(0,Co.jsx)(Yd.PostTitle,{children:o}),(0,Co.jsx)(Yd.PostSummary,{children:a}),(0,Co.jsxs)(Yd.CardFooter,{children:[(0,Co.jsxs)(Yd.AuthorInfo,{children:[(0,Co.jsx)(Yd.AuthorIcon,{}),(0,Co.jsx)(Yd.AuthorName,{children:l})]}),(0,Co.jsxs)(Yd.PostStats,{children:[(0,Co.jsxs)(Yd.StatItem,{children:["\u2764\ufe0f ",c]}),(0,Co.jsxs)(Yd.StatItem,{children:["\ud83d\udcac ",d]})]})]})]})]})},Xd=()=>{const[e,t]=(0,r.useState)([]),[n,i]=(0,r.useState)([]),o=vi();(0,r.useEffect)(()=>{t([])},[]);return(0,Co.jsxs)(Yd.CommunityContainer,{children:[(0,Co.jsxs)(Yd.HeaderSection,{children:[(0,Co.jsx)("h3",{children:"\ub0b4 \ucee4\ubba4\ub2c8\ud2f0 \uac8c\uc2dc\uae00 \uad00\ub9ac"}),(0,Co.jsx)("p",{children:"\ub0b4\uac00 \uc791\uc131\ud55c \ucee4\ubba4\ub2c8\ud2f0 \uac8c\uc2dc\uae00\uc744 \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),e.length>0?(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsxs)(Yd.ControlBar,{children:[(0,Co.jsxs)(Yd.ControlLeft,{children:[(0,Co.jsxs)("div",{className:"all-check-wrapper",children:[(0,Co.jsx)("input",{type:"checkbox",id:"all-check",onChange:t=>{t.target.checked?i(e.map(e=>e.id)):i([])},checked:n.length===e.length&&e.length>0}),(0,Co.jsx)("label",{htmlFor:"all-check",children:"\uc804\uccb4 \uc120\ud0dd"})]}),(0,Co.jsx)(Yd.DeleteBtn,{onClick:()=>{if(0===n.length)return alert("\uc0ad\uc81c\ud560 \uac8c\uc2dc\uae00\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");window.confirm(`${n.length}\uac1c\uc758 \uac8c\uc2dc\uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?`)&&(t(e.filter(e=>!n.includes(e.id))),i([]))},children:"\uc120\ud0dd \uc0ad\uc81c"})]}),(0,Co.jsx)(Yd.ControlRight,{children:(0,Co.jsx)(Yd.SearchInput,{placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694."})})]}),(0,Co.jsx)(Yd.PostGrid,{children:e.map(e=>(0,Co.jsx)(Jd,{post:e,isSelected:n.includes(e.id),onSelect:()=>{return t=e.id,void i(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]);var t}},e.id))})]}):(0,Co.jsxs)(Yd.EmptyStateWrapper,{children:[(0,Co.jsxs)(Yd.EmptyTitle,{children:["\uc544\uc9c1 \uc791\uc131\ud55c \uac8c\uc2dc\uae00\uc774 \uc5c6\ub124\uc694.",(0,Co.jsx)("br",{}),(0,Co.jsx)("strong",{children:"\ud398\uc77c\ub85c\uadf8"}),"\uc758 \ucee4\ubba4\ub2c8\ud2f0\ub97c \uc774\uc6a9\ud574\ubcfc\uae4c\uc694?"]}),(0,Co.jsxs)(Yd.EmptySubText,{children:["\uc2e4\ud328\ub97c \uc678\uba74\ud558\uc9c0 \uc54a\uace0 \uae30\ub85d\ud560 \ub54c,",(0,Co.jsx)("br",{}),"\ub2f9\uc2e0\uc758 \uac15\ub825\ud55c \uc131\uc7a5 \ub370\uc774\ud130\uac00 \ub429\ub2c8\ub2e4."]}),(0,Co.jsx)(Yd.StartButton,{onClick:()=>o("/community"),children:"\uc2dc\uc791\ud558\uae30"})]})]})},Kd={};Kd.HeroSectionContainer=rn.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: center;
`,Kd.HeroGrid=rn.div`
  display: grid;
  grid-template-columns: 648px 424px; 
  gap: 20px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0 20px;
  }
`,Kd.HeroBanner=rn.div`
  width: 648px;
  height: 730px;
  background-color: #E8EBFD;
  border-radius: 25px;
  padding: 60px 56px; 
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  .TextGroup {
    position: relative;
    z-index: 2;
    font-family: 'Pretendard', sans-serif;
    & > * { margin: 0; white-space: nowrap; }
    h3 { font-size: 24px; font-weight: 400; color: #5D5FEF; line-height: 34px; }
    h2 { font-size: 45px; font-weight: 800; color: #2D3494; line-height: 60px; letter-spacing: -0.02em; }
    p { font-size: 24px; font-weight: 400; color: #4B5563; line-height: 34px; }
  }
    transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px); /* 위로 8px 이동 */
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1); /* 더 진한 그림자 */
  }
`,Kd.MainGraphic=rn.div`
  position: absolute;
  right: 0px;
  bottom: -155px;
  width: 600px;
  height: 600px;
  z-index: 1;
  img { width: 100%; height: 100%; object-fit: contain; }
  
  `,Kd.QuickMenuGroup=rn.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;const eu=rn.div`
  width: 424px;
  height: 236px;
  border-radius: 24px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: visible; 
  padding: 40px;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px); /* 위로 8px 이동 */
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1); /* 더 진한 그림자 */
  }
  
  .CardText {
    position: relative;
    z-index: 2;
    & > * { margin: 0; white-space: nowrap; }
    h3 { font-size: 20px; font-weight: 400; color: #5D5FEF; }
    h2 { font-size: 36px; font-weight: 700; color: #1E293B; }
    span { font-size: 20px; color: #64748B; }
  }
`;Kd.MyLogCard=rn(eu)`
  background-color: #F0F3FF;
`,Kd.LikesCard=rn(eu)`
  background-color: #EBF8FF;
  padding-top: 50px;
  padding-right: 45px;
  align-items: flex-end;

  .CardText {
    text-align: right;
    
    & > * {
      white-space: nowrap;
    }
`,Kd.GuestBookCard=rn(eu)`
  background-color: #EEF2FF;
`,Kd.CardIcon=rn.div`
  position: absolute;
  right: -15px;
  bottom: -10px;
  width: 180px;
  height: 180px;
  z-index: 5;
  img { width: 100%; height: 100%; object-fit: contain; }

  /* 좋아요 카드(LikesCard) 내부 아이콘 전용 수치 */
  ${Kd.LikesCard} & {
    right: 273px;
    bottom: -22px;
    width: 150px;
  }
`;const tu=Kd,nu=e=>{let{mainContent:t}=e;const r=vi();return t?(0,Co.jsx)(tu.HeroSectionContainer,{children:(0,Co.jsxs)(tu.HeroGrid,{children:[(0,Co.jsxs)(tu.HeroBanner,{onClick:()=>r(t.path),style:{backgroundColor:t.bgColor},children:[(0,Co.jsxs)("div",{className:"TextGroup",children:[(0,Co.jsx)("h3",{children:t.subTitle}),(0,Co.jsx)("h2",{children:t.title}),(0,Co.jsx)("p",{children:t.description})]}),(0,Co.jsx)(tu.MainGraphic,{children:(0,Co.jsx)("img",{src:t.img,alt:"\uba54\uc778 \ubc30\ub108 \uc774\ubbf8\uc9c0"})})]}),(0,Co.jsxs)(tu.QuickMenuGroup,{children:[(0,Co.jsxs)(tu.MyLogCard,{onClick:()=>r("/my-page/fail-logs"),children:[(0,Co.jsxs)("div",{className:"CardText",children:[(0,Co.jsx)("h3",{children:"\ub0b4\uac00 \uc791\uc131\ud55c \ub85c\uadf8\ub97c \ubcf4\uace0 \uc2f6\ub2e4\uba74"}),(0,Co.jsx)("h2",{children:"\ub9c8\uc774 \ud398\uc77c\ub85c\uadf8"}),(0,Co.jsx)("span",{children:"\ub0b4\uac00 \uc791\uc131\ud55c \ub85c\uadf8\ub97c \ubcfc \uc218 \uc788\uc5b4\uc694."})]}),(0,Co.jsx)(tu.CardIcon,{children:(0,Co.jsx)("img",{src:n(985),alt:"\ub9c8\uc774 \ud398\uc77c\ub85c\uadf8"})})]}),(0,Co.jsxs)(tu.LikesCard,{onClick:()=>r("/my-page/likes"),children:[(0,Co.jsxs)("div",{className:"CardText",children:[(0,Co.jsx)("h3",{children:"\ucc38\uace0\ud558\uace0 \uc2f6\uc740 \uac8c\uc2dc\uae00\uc744 \ubaa8\uc544\ub454"}),(0,Co.jsx)("h2",{children:"\uc88b\uc544\uc694 \ud55c \ud398\uc77c\ub85c\uadf8"}),(0,Co.jsx)("span",{children:"\uc88b\uc544\uc694 \ud55c \uac8c\uc2dc\uae00\uc744 \ubaa8\uc544 \ubcfc \uc218 \uc788\uc5b4\uc694."})]}),(0,Co.jsx)(tu.CardIcon,{children:(0,Co.jsx)("img",{src:n(495),alt:"\uc88b\uc544\uc694 \ud55c \ud398\uc77c\ub85c\uadf8"})})]}),(0,Co.jsxs)(tu.GuestBookCard,{onClick:()=>r("/my-page/guestbook"),children:[(0,Co.jsxs)("div",{className:"CardText",children:[(0,Co.jsx)("h3",{children:"\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \uc18c\ud1b5\ud558\ub294"}),(0,Co.jsx)("h2",{children:"\ud398\uc77c\ub85c\uadf8 \ubc29\uba85\ub85d"}),(0,Co.jsx)("span",{children:"\ub0b4\uac8c \ub0a8\uae34 \ub9d0\uc744 \ud655\uc778\ud574\ubcf4\uc138\uc694."})]}),(0,Co.jsx)(tu.CardIcon,{children:(0,Co.jsx)("img",{src:n(872),alt:"\ubc29\uba85\ub85d"})})]})]})]})}):null},ru=()=>{const e=Ci(),t=vi(),[n,i]=(0,r.useState)({memberNickname:"test",memberProfileImageUrl:null,memberEmail:"test@example.com",memberName:"test",memberPhone:"010-1234-5678",memberPhoneVerified:1}),o=[{id:"fail-logs",path:"/fail-logs",subTitle:"\ud398\uc77c\ub85c\uadf8\ub97c \uc791\uc131\ud574\ubcf4\uace0 \uc2f6\ub2e4\uba74",title:"\ud398\uc77c\ub85c\uadf8 \ubc14\ub85c\uac00\uae30",description:"\uc2e4\ud328\ub97c \uae30\ub85d\ud558\uace0 \uc131\uc7a5\uc758 \ubc1c\ud310\uc73c\ub85c \uc0bc\uc73c\uc138\uc694.",bgColor:"#E8EBFD",img:Gd},{id:"my-fail-log",path:"/my-page/fail-logs",subTitle:"\ub0b4\uac00 \uc791\uc131\ud55c \ub85c\uadf8\ub97c \ubcf4\uace0 \uc2f6\ub2e4\uba74",title:"\ub9c8\uc774 \ud398\uc77c\ub85c\uadf8",description:"\ub0b4\uac00 \uc791\uc131\ud55c \ub85c\uadf8\ub97c \ubcfc \uc218 \uc788\uc5b4\uc694.",bgColor:"#F0F3FF",img:Wd},{id:"likes",path:"/my-page/likes",subTitle:"\ucc38\uace0\ud558\uace0 \uc2f6\uc740 \uac8c\uc2dc\uae00\uc744 \ubaa8\uc544\ub454",title:"\uc88b\uc544\uc694 \ud55c \ud398\uc77c\ub85c\uadf8",description:"\uc88b\uc544\uc694 \ud55c \uac8c\uc2dc\uae00\uc744 \ubaa8\uc544 \ubcfc \uc218 \uc788\uc5b4\uc694.",bgColor:"#EBF8FF",img:Ud},{id:"guestbook",path:"/my-page/guestbook",subTitle:"\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \uc18c\ud1b5\ud558\ub294",title:"\ud398\uc77c\ub85c\uadf8 \ubc29\uba85\ub85d",description:"\ub0b4\uac8c \ub0a8\uae34 \ub9d0\uc744 \ud655\uc778\ud574\ubcf4\uc138\uc694.",bgColor:"#EEF2FF",img:_d}],a=o.find(t=>t.path===e.pathname)||o[0],l=o.filter(e=>e.id!==a.id);return(0,Co.jsxs)($d.MainWrapper,{children:[(0,Co.jsx)(nu,{mainContent:a,quickMenus:l}),(0,Co.jsxs)(Bd.InfoManagementSection,{children:[(0,Co.jsxs)("div",{className:"info-header",children:[(0,Co.jsx)("h2",{children:"\ub0b4 \uc815\ubcf4 \uad00\ub9ac"}),(0,Co.jsx)("p",{children:"\ub0b4 \uc815\ubcf4\uc758 \uc218\uc815 \ubc0f \ud68c\uc6d0 \uc11c\ube44\uc2a4\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,Co.jsxs)(Bd.TopCardGrid,{children:[(0,Co.jsx)(Vd,{memberNickname:n.memberNickname,memberProfileImageUrl:n.memberProfileImageUrl,onNicknameChange:e=>{i(t=>({...t,memberNickname:e})),console.log("\ub2c9\ub124\uc784 \ubcc0\uacbd \uc644\ub8cc:",e)},onImageChange:e=>{const t=new FileReader;t.readAsDataURL(e),t.onloadend=()=>{i(e=>({...e,memberProfileImageUrl:t.result}))}}}),(0,Co.jsx)(Bd.ProfileCard,{children:(0,Co.jsx)("div",{children:"\ucc28\ud2b8 \uce74\ub4dc (\uc900\ube44 \uc911)"})}),(0,Co.jsx)(Bd.ProfileCard,{children:(0,Co.jsx)("div",{children:"\ud65c\ub3d9\ub7c9 \uce74\ub4dc (\uc900\ube44 \uc911)"})})]}),(0,Co.jsx)(Bd.BottomAccountArea,{children:(0,Co.jsx)(qd,{memberEmail:n.memberEmail,memberName:n.memberName,memberPhone:n.memberPhone,memberPhoneVerified:n.memberPhoneVerified,onPasswordChange:()=>{t("/change-password")}})})]}),(0,Co.jsx)(Hd.CommunitySection,{children:(0,Co.jsx)(Xd,{})})]})};const iu=()=>(0,Co.jsx)("div",{className:"MyGuestbookContainer",children:(0,Co.jsxs)("div",{className:"HeroSection",children:[(0,Co.jsx)("div",{className:"BannerCard",children:"\ud398\uc77c\ub85c\uadf8 \ubc29\uba85\ub85d"}),(0,Co.jsxs)("div",{className:"SubCardsContainer",children:[(0,Co.jsx)("div",{className:"SubCardItem",children:"\ud398\uc77c\ub85c\uadf8 \ubc14\ub85c\uac00\uae30"}),(0,Co.jsx)("div",{className:"SubCardItem",children:"\ub9c8\uc774 \ud398\uc77c\ub85c\uadf8"}),(0,Co.jsx)("div",{className:"SubCardItem",children:"\uc88b\uc544\uc694 \ud55c \ud398\uc77c\ub85c\uadf8"})]})]})}),ou=()=>(0,Co.jsx)("div",{className:"MyLikesContainer",children:(0,Co.jsxs)("div",{className:"HeroSection",children:[(0,Co.jsx)("div",{className:"BannerCard",children:"\uc88b\uc544\uc694 \ud55c \ud398\uc77c\ub85c\uadf8"}),(0,Co.jsxs)("div",{className:"SubCardsContainer",children:[(0,Co.jsx)("div",{className:"SubCardItem",children:"\ud398\uc77c\ub85c\uadf8 \ubc29\uba85\ub85d"}),(0,Co.jsx)("div",{className:"SubCardItem",children:"\ub9c8\uc774 \ud398\uc77c\ub85c\uadf8"}),(0,Co.jsx)("div",{className:"SubCardItem",children:"\ud398\uc77c\ub85c\uadf8 \ubc14\ub85c\uac00\uae30"})]})]})}),au={};au.DraftSection=rn.section`
  padding: 60px 0;
  h2 {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 40px;
    span { color: #5D5FEF; }
  }
`,au.DraftGrid=rn.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`,au.DraftCard=rn.div`
  background: ${e=>e.bgColor||"#94A3B8"};
  border-radius: 25px;
  padding: 40px 30px;
  min-height: 450px;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover { transform: translateY(-10px); }

  .CardHeader {
    h3 { font-size: 22px; font-weight: 700; margin-bottom: 20px; }
    p { font-size: 15px; line-height: 1.6; opacity: 0.9; font-weight: 500; }
  }

  .CardImage {
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    img { width: 140px; height: auto; } // 3D 아이콘 이미지 영역
  }

  .CardFooter {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    .InfoText {
      font-size: 13px;
      opacity: 0.8;
      div { margin-top: 4px; }
    }

    .StatusTag {
      background: rgba(255, 255, 255, 0.9);
      color: #FF7A7A;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 700;
    }
  }
`;const lu=au,su=e=>{let{draftLogs:t}=e;return(0,Co.jsxs)(lu.DraftSection,{children:[(0,Co.jsxs)("h2",{children:["\uc544\uc9c1 ",(0,Co.jsx)("span",{children:"\uc791\uc131 \uc911\uc778 \ud398\uc77c\ub85c\uadf8"}),"\uac00 \uc788\uc5b4\uc694."]}),(0,Co.jsx)(lu.DraftGrid,{children:t.map(e=>(0,Co.jsxs)(lu.DraftCard,{bgColor:e.color,children:[(0,Co.jsxs)("div",{className:"CardHeader",children:[(0,Co.jsx)("h3",{children:e.title}),(0,Co.jsx)("p",{children:e.content})]}),(0,Co.jsx)("div",{className:"CardImage",children:(0,Co.jsx)("div",{style:{width:"120px",height:"120px",background:"rgba(255,255,255,0.2)",borderRadius:"20px"}})}),(0,Co.jsxs)("div",{className:"CardFooter",children:[(0,Co.jsxs)("div",{className:"InfoText",children:[(0,Co.jsxs)("div",{children:["\uc9c4\ud589\ub3c4: ",e.progress,"%"]}),(0,Co.jsxs)("div",{children:["\ub9c8\uc9c0\ub9c9 \uc218\uc815: ",e.date]})]}),(0,Co.jsx)("div",{className:"StatusTag",children:"\ubbf8\uc644\uc131"})]})]},e.id))})]})},cu=()=>{const e=vi(),t=[{id:1,title:"\ub2f9\uc2e0\uc758 \uac00\uc7a5 \ube5b\ub0ac\ub358 \uc2e4\ud328 \uc774\uc57c\uae30",content:"\uc2e4\ud328\ub294 \uc131\uacf5\uc758 \uc5b4\uba38\ub2c8\ub77c\ub294 \ub9d0\uc774 \uc788\ub4ef\uc774...",createdAt:"2026-05-10"},{id:2,title:"\ub9ac\uc561\ud2b8 \uacbd\ub85c \uc5d0\ub7ec \ud574\uacb0\uae30",content:"\ud30c\uc77c\uc744 \ubd84\ub9ac\ud558\uba74\uc11c \uacaa\uc5c8\ub358 \uc218\ub9ce\uc740 \uc5d0\ub7ec\ub4e4...",createdAt:"2026-05-09"}];return(0,Co.jsxs)($d.MainWrapper,{children:[(0,Co.jsx)(nu,{}),(0,Co.jsx)(su,{draftLogs:[{id:1,title:"\uc791\uc131\uc911\uc778 \ud398\uc77c\ub85c\uadf8 1",content:'"\uc2e0\uae30\uc2dc\ud5d8 \uc2e4\ud328\uc758 \uc6d0\uc778\uc744 \ucc3e\uc544\uc11c" \uc5ed\uc2dc \uc220\uc744 \ub9c8\uc2dc\uba74 \uc548\ub410\ub358 \uac78\uae4c?',progress:80,date:"3\uc77c \uc804",color:"#A5B4C3"},{id:2,title:"\uc791\uc131\uc911\uc778 \ud398\uc77c\ub85c\uadf8 2",content:'"\uc2e0\uae30\uc2dc\ud5d8 \uc2e4\ud328\uc758 \uc6d0\uc778\uc744 \ucc3e\uc544\uc11c" \uc5ed\uc2dc \uc220\uc744 \ub9c8\uc2dc\uba74 \uc548\ub410\ub358 \uac78\uae4c?',progress:60,date:"3\uc6d4 \uc804",color:"#94A3B8"},{id:3,title:"\uc791\uc131\uc911\uc778 \ud398\uc77c\ub85c\uadf8 3",content:'"\uc2e0\uae30\uc2dc\ud5d8 \uc2e4\ud328\uc758 \uc6d0\uc778\uc744 \ucc3e\uc544\uc11c" \uc5ed\uc2dc \uc220\uc744 \ub9c8\uc2dc\uba74 \uc548\ub410\ub358 \uac78\uae4c?',progress:80,date:"3\uc6d4 \uc804",color:"#8E9EB1"}]}),(0,Co.jsxs)("div",{style:{padding:"40px 0"},children:[(0,Co.jsxs)("h2",{style:{fontSize:"24px",fontWeight:"800",marginBottom:"30px"},children:["\ub098\uc758 ",(0,Co.jsx)("span",{style:{color:"#5D5FEF"},children:"\ud398\uc77c\ub85c\uadf8"})]}),0===t.length?(0,Co.jsxs)(Hd.EmptyStateWrapper,{children:[(0,Co.jsxs)(Hd.EmptyTitle,{children:["\uc544\uc9c1 \uae30\ub85d\ub41c \uc2e4\ud328\uac00 \uc5c6\ub124\uc694.",(0,Co.jsx)("br",{}),(0,Co.jsx)("strong",{children:"\uccab \ubc88\uc9f8 \ud398\uc77c\ub85c\uadf8"}),"\ub97c \uc801\uc5b4\ubcfc\uae4c\uc694?"]}),(0,Co.jsx)(Hd.EmptySubText,{children:"\uc2e4\ud328\ub97c \uc678\uba74\ud558\uc9c0 \uc54a\uace0 \uae30\ub85d\ud560 \ub54c, \ub2f9\uc2e0\uc758 \uac15\ub825\ud55c \uc131\uc7a5 \ub370\uc774\ud130\uac00 \ub429\ub2c8\ub2e4."}),(0,Co.jsx)(Hd.StartButton,{onClick:()=>e("/fail-logs"),children:"\uc2dc\uc791\ud558\uae30"})]}):(0,Co.jsx)(Hd.PostGrid,{children:t.map(t=>(0,Co.jsx)(Hd.CardWrapper,{onClick:()=>e(`/fail-logs/${t.id}`),children:(0,Co.jsxs)("div",{style:{padding:"20px"},children:[(0,Co.jsx)("h3",{style:{fontSize:"18px",fontWeight:"700",marginBottom:"10px"},children:t.title}),(0,Co.jsx)("p",{style:{fontSize:"14px",color:"#666",lineHeight:"1.5"},children:t.content}),(0,Co.jsx)("div",{style:{marginTop:"20px",fontSize:"12px",color:"#999"},children:t.createdAt})]})},t.id))})]})]})},du=()=>(0,Co.jsx)("div",{children:(0,Co.jsx)($i,{})});const uu=n.p+"static/media/internet_2282299.e04308009aed7ddb21e7548586a88c90.svg";const hu=n.p+"static/media/bitcoin-icons--arrow-up-filled.06b36772b47e37722bbcec9211d090d9.svg",pu={};pu.Wrapper=rn.section`
    width: 100%;
    background-color: #f8f9fa;
    padding: 100px 0 0 0;
`,pu.Inner=rn.div`
    max-width: 1320px;  /* 1200px → 1320px */
    margin: 0 auto;
    padding: 0 20px;    /* 0 60px → 0 20px */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .hero-title {
        font-size: ${xn.FONT_SIZE.h2};
        font-weight: ${xn.FONT_WEIGHT.bold};
        color: #1a1a1a;
        margin: 0;
        line-height: 1.2;
        letter-spacing: -1px;
    }

    .btn-text {
        font-size: ${xn.FONT_SIZE.h5};
        font-weight: ${xn.FONT_WEIGHT.bold};
        color: ${xn.PALETTE.white};
        line-height: 1;
    }
`,pu.TitleWrap=rn.div`
    display: flex;
    align-items: center;
    gap: 16px;
`,pu.GlobeIcon=rn.img`
    flex-shrink: 0;
    width: 52px;
    height: 52px;
`,pu.StartBtn=rn.button`
    width: 180px;
    height: 60px;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    background-size: 200% 100%;
    background-position: 0% 50%;
    transition: background-position 0.4s ease, transform 0.2s ease;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.1);
    color: ${xn.PALETTE.white};
    border: none;

    &:hover {
        background-position: 100% 50%;
        transform: translateY(-5px);
    }
`,pu.ArrowIcon=rn.img`
    width: 28px;
    height: 28px;
    transform: rotate(90deg);
    filter: brightness(0) invert(1);
`;const fu=()=>(0,Co.jsx)(pu.Wrapper,{children:(0,Co.jsxs)(pu.Inner,{children:[(0,Co.jsxs)(pu.TitleWrap,{children:[(0,Co.jsx)(pu.GlobeIcon,{src:uu,alt:"globe"}),(0,Co.jsx)("h1",{className:"hero-title",children:"\ub2e4\ub978 \uc0ac\ub78c\uc758 \uacbd\ud5d8\uc744 \ub9cc\ub098\ubcf4\uc138\uc694."})]}),(0,Co.jsxs)(pu.StartBtn,{children:[(0,Co.jsx)("span",{className:"btn-text",children:"\uc2dc\uc791\ud558\uae30"}),(0,Co.jsx)(pu.ArrowIcon,{src:hu,alt:"arrow"})]})]})});const gu=n.p+"static/media/chatbot_10541415.750cbc333762b0ae534f3a52eb068cb5.svg";const mu=n.p+"static/media/uiw--right.09212a3c5213a08364e89b1c68c1b7db.svg",xu="data:image/png;base64,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",Cu="data:image/png;base64,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",bu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAD3xJREFUeAHFWWmUVdWV/u705qr3Xs1lMTwkgqjdgkZlUKxSV5bDsqOdoU2wFaNZxiECUbNUokAHxQgKLJM4tAZN2zTEMAhiesVWigCS2AIFiMgkj2ooXk1vqDfde98d+ru3SqhCRvtHH9Zb9YZzz9ln729/+9sHAV9z2LYd4Z/RfN3C19C+95G+lzPSnBU3IaQlYJ2hqs2K39+MrzkEnOVYP3dyozcUvaW8YsSd37jljojtCUCDhSAMGu+BzRVFzrNsm6sLSO5pxrb/XAMlU4TfG0hbYd/KisHnLxxx06SWs9n3jA1d/dhtjbHK0AwLYmNJkCGWimgvFDH2+/ei7MLxNFCB7BpnwIQHkm2h9a+r0LpiKarrypEXNGiSjEhJQCJbRCFU33zTgw/fJfjr42ey/2kNXTFzauRcuXNGyOufmqWBwUgF7Ew3crIGRZeQ6ixhwtOvQpe98LlP6PzngdGTxN/+5YeIDDoPUqkHkmDB4hzYMg+hoWgChUAlrnpg3gJiZFZUENJf29AjBzbFdr46f211dSDm0WR8oQuY/vo7ePSfrsFFtRUwGdps0ULDVRMgSWEIegmmpcITrkHHnk8hHdmNomxDNCxU1A7Gui1xjB3mh6XnCBYgrxoYet1k1F9xbVxU1SbB74+ftaFMltGbV/1+bWjPh5G0EoTfFNCulbAjo+PhX72BQ4vnInVkG3RRhlECynJpqL5yFEUR4XwOgjeAYsBCRAsA9UNx4V3TccHwBqx+4p+RSHYTyBIUuwTrnFG46LaH6WXEBaN0q+DxnBC78om+1Gkk/6y1cl0RWyhBoUcMhq6WkRs0NILwg99BR08ChhhCGHmEGobjYCKFhWv+CpgaHv/+dSjZftQEksh0Z1HI5fCzmxvx0KTr0XZwLyRZcRwB04G0qbtG6JYdkyVpLb9vEgSh5bQe5cRYwcbagIDYxlefQDB/iN8FnV96H7BNZq+MPL0rSRI+TQi4+4XXuSl/tyUYlsRFVdeQW785FnPvGYuOrIbqcAhqdwIlb9DZpG83ztd0WJEorrjvORQsGwFRSKuqOsZ/HAyE44yMcI2thF5s3StPIZBtgygqXM6GffQB5j0z2nL8wDB/kUjTpzKuH1ONDS2teHH1J/jDL+9CGz1sZ1Mw5ABEgTi1DGc6Spwr9K1m26KTdjAZhUNiFW565HlYNJb7x+nVMUK/BBP7G0qAz3CM3PDSDJT3HEaQi1um5Ljx6ByTG+lCkHQkMGwWRjb4MX5IGZSCD8s+zyFaV4mAbqCK3hbrK7iB7VKVyQMX+ZzoplHfoQknnRZYsh/nWBmsWzSPhxGcH2L8dsYJPWoX7ZjpxYHWvyxH9/q3IQXC3EJwN7L7e53fOR6RLY24khAdEsPCpR+iq70DKYLub3s6cFG9j35iUgXDePQfr0JYMaCI1gBvDjTBduFQYEKe/4NHUH7eZZxZoiOEJkFRmgd61IdFqcRetL67FAo36F3CPsGytutgHQpqz70AI3/wJN7ZtAsqk2dXW9oJGy49fxguv2AktFwP3lj+PukqTAyzmHLzr6aF/aV7ES4vw8Y35wPFtOMKpro8Y4BHdd0erSj21uZ5U9FAxGVFyfXbyYbA0zv5oHuY8/kMaYelvjuO9/dn8PKK9Vg950dIdPQgFAggywOpqQ4oDDP96mL8ZEOyDRYGGx1COZqmzXePQCscFmh2PUqQT80c3oaarm4kld6An2zYDhgEieVSQ9BIoTqoINHainyuCClSh/OGNLgwKJU0JFNpSF3tCJn0pMm0IXucytCSwNJLSCmpA9BzSdcZVq/o6XUbsz3VPPfHkYjC8lYSYUgmTjvso0+7YXM+eHi+YNCP7nSemS6ciPxwqmIoUtF4HOxLAroDtbjmJ88gRxUWAoaJNLIx2RaPiGoRTHJYgoUzGkK/N7Z7WuhMplRPoS9zT/nQCYdJaJhMFp+Dz4P7YBS6GTlHNqqjWYatxs6WDagKeCGQUlzawf/XsFkBRffAtdEg9jevhFdwwi/dIsqieHVixyfwsmCbtnSCPD/xgsJJPx0/88zmOUMQCrBEqi+Z5ESldeSzrb3kZYsxsefQ7oiYS6BH8RMjmkvupzJVtJhqFhdy841kRf3pY7026QnJEh1xMcBIxaVIyTVSZlafOvyKyzYCC4SLpnQ39PQhwlG6WCy2t8a8AZ+7gHAGMbcE0VXxHkvnEwbKw1WsXrKbzaqEgTlN3EpeLxPLdPnXJFvgtBE7Br0Q4ZhLdrCEIyKmEoeZ7DLOdFh9me6lRTkE8ORvVsJH/elkuc3qY/ft4giWgFfB4k17oSle2BZ/s898H+c4AUVA276djuERsaN1HxcVj5skHKvJwlcricgQRiK1eHDB21iyZTdK1KEitaWv5PzWu5ZpmogEfXh68Z8w5YWlqKiIMPQWvuJRZ31XTR1HXYycQqrKpHp1iaio+bRpHnvYpktkq4jQ4PPoHRtKSXeZ4OjzzoKiiYxexPDBDW77URKyvdTCvskprgI/OUsaJHBnRCnxHIVVkjT0r9oUSpBYDELlLNkSVZZpEJ8Ozukq4j1P5RXOJh3z00Lz7LvjEZ801DpqjICqihCu/dlLeG/efSgk8ywAVj8BJbg12y2j0aFQDRbGIvnOUBkDhWYYLo4FyQOnbKh2GDVeD4qZBASKE6cx/FKYiGz2JJbFN1dtwrXXjEODknObRMHBF2FkEJy2GMYlD81tEUt6qWVgdG2olHZ7U3l4iTOLpzomdPu4nUkhWCbEdCuUHMHOjlShe3ycrxOHjs606B2bbFCpJqAXDlMwU2vQMLFf6G16U/b70Ly/HVv2t0GRBTd6OiskF3DX0EsOUyBDSIlx+0tDaIDzXjGLruciYhGGMTBcrqLidFPyuaFzNhaoNS2+UhkVPelkb2XiJEcUF70iqY9VSzLIFNYAhEpkDg+j5SsrQ6I7w3UsZG0v2pKETyDktiym6RraLApGbqXzVuQJfEYnsS274sDxXZEXCh6G0WsX3JA6FORwoeiIBWJBdvsepwVWkO3J4dybJ+HqR1+EXlFHIwqQBS+cXqBMB8IaE5RSz4GHI2xcEuKB6mQRW3cdwI1XjUKOjeA3Bpfje3MWgfcVMEt5BL2RXkPlnNHCk6dtfwRapJ73BwYqy0KI8pR//izFDUsosInTBD8PoDBBvG4bYrD71JgAHrbHtpZHw5XXo+6Sa2CFa3H5nU8h54lC1As8hJ8q3oe86IUmBtxMdg7oYN6gUt9XUJAndC6OKiwiHvgdzepAjtbJTmRC0bQr85oWrEzLovbmxq0HcMfcP6E2EmQbvBffGncpZr+1BhWDa50uCX561W+rxGaRHs6yGmnkRo1/07CCIaxvs/AfS5Zi0/t/xtr1H2H1fqog8mhIYwMnqPDKJeLV4OZs5izNZaKa6jrcOP23uP3GRigqE1TqQXtWgaZpqKv1U5syP+oqVjoudRlY0wIrLxtRPuXhf/sfeENhJPJZPDe5CZfcuxm/ea8Fk684Bxa7xc6eEvEWRnmoDEImjUC5B4XoKLz03ma8tuzXwHH8eM3S1+D9ogXVsgS1pxttzKhske1LUGaisl/Sk+Q2E/MmNbFJTICdL9Z8sgt10RAqeKDdHTlUN9Us7M2NvpF7a8bayrvnNH749L2szyJqtC+wTjwXdz6xEH/8xR2oCFZi3I9+Cm9NzH0o/sEfseOj93Hzk6+gsytJ71S56/i8hImeB9tdZHN5glnHu9N/gsu+dQPKL5vg6t1C+z7s37AGmQM7cP4FY2G0fo59oaEYV6egftJsvPjE/RgX7EJHxrfuqmcWNaJ/Oqey5qwbx4/BT3+7ArWxcnT66zAx6se7Uybj/CtvRuNjc7Fr+yZ88NRkNM+ahMzGP2Dk5Ve6BSIaCbuVaMmSJVC1HJYtW8YWhfyra2QHD/5u9AgkE234bNVyJDYsR0pT8fe3T8eVjy/Gvngb0sR6lZHAlt0p5LjO94ZVIuthg+ixJx9jm36j43dzFgy596kpD0z8Jm81rsOhroNoGDsRg8bfjuYnHkRdUIUZIt3r7PWNAiKN38WgCd9x+/5SqeRSm+NJizTkfBaYDBK5c/eqF9Cx42NUMk9yZVUwi1loRVa2CddiyI33Yufz9yM2yIMRDyzGz797CW4+dwy6pfaFlz+yaOqXtg0o8vlM+8xNbzwXf/6DTVi7fSdG1Q+GmCEhz/k5/A0m8l6JZW0ELn3sdWTZo7dv+4gURIzruvv89u3be4nc4WJFga7prif2bd+DMbc9iMCV34ZNSVnDChWurMKh7duw/uUpCA6/EI+8tJX3rBpum3gFcmImfvhQamZ/2wYYOmzagnSsY3fTO7MfTk9esBxNs5ci1/oB6oM51Gd7oNaNxLiHfoHVc+9DlZfs29WFw59/Slx6UVZejgnjx+PpX84i4YsIMeEC7EI7d/0Xhqjd2LziXVRcPAEX3LcQ+1IULGQLO5DFcDLJtGf+Fa+s+wt2/uoetLV1xdvkVNOtZKOTGuqM6LSX48ODxaZD//7rdMDQUSjVkQdttBUimHjn4/howSzegxepPf2UdwEcWPosNi6aC01VmcU6Hpv+JDqYXN3JLvz3e69h/+KXYdfUIiolsWXOfbyIUHDxPdNQ7FHYxUbR7a/EQWrOnb+bha5kMS3Y6VtvmLYkfrxdJ5XKnz7949GeWP2KwpGOmFHMIPbDKcjynqlt4+/hF8soKCTehfLCzGbYWUGScgUuv38uZJY+mwS+/sUncU6+1cUkXC1KLUBPJxIZTHz2dax/dgqGUXykfLwYq6pGqaszLWjppoumv33Ca8dTavqt8yfHvCXv2pyZi0Wa/gHpdZuheOLcuJLp06stdVYthdXJzx7fubXz1Q7irV03ynjbYjt3TULm6DY2lb4lG8geCqC8nuJDZIegsc7JVjwlKE3jGM2T2XLa5uMAr8Y7q4szlY7uKQgNYYbnWOqctkXo9RJ77KJTXqmyAnqCZbKcYkTlvBIvdf299/p9w+nGFOpMkbjM+/ifD1oDCnZ2obfQOXPMzJVf/2q8/9g1Z3JMFdU3KCeuFpzbPKcL8LDuE5eC4HhWcrtHj+XQVG934HwvGX44YlrmpYJWzLEUUiGxlOq2dx0l+cwbZr/VfCb7n3UL//H8R0cbXs9U4vDbsqlG1J4ulDG7PW4XSlSIdl/L3bu0aBSRUoEkxcnICY1pw1f+ZrSmbmX9qHHNOIvxf7prsO1SY8fnHzcmdnzc2H3gQEQuaUMNSYqIEpWQrqcVn5IJDRnVMuSSsfFobWylHIq0CKf534+Tjf8FTfIE60OlMVcAAAAASUVORK5CYII=",vu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABS9JREFUeAHNWc1LI0kUf4nfIhpRQVCY6D+wLiJ+XeKoCCqsiye97A47twR2LuJt3aMouNmLcxLXu4IIqx7EuIjgQcke1YOJyI4KSswqfuubepVUTXWnu5OOcZwfPKrT9arq9169etVVcUCaQEQXK+qY9DF5E392xYVwziQcL/9hsuZwONbga4ER9DDxM4mgfVCbaSZ18FKIEwxg5hBg4oZMgXXmYvIHvhyobxc8B2QxkxC+PEKYrndZwzpMLw6fQ9Ze7L4CSYGIGVmHAUk3KwJM3PA6oHT2PUtlYfWlhijGgjoIr0dSIAwxsufihVOnMAIpknx8fOTl0tISHITD8rcRmANga2sLZmdnNW0t4I5zMezMjTbR29uL1JRke3sbn56eEnTo3eLiotQbGBhAG/AYEQ2gTeTk5CCbHi7vfn5nqtfV1SX1ioqK0AYCgp8zTpJWmgdsgrWT8vD4YKqXm5sr9bKyssAGPMKrIkY/QBpgHuLCO3I6TfWIoICVngn6eLv4jx8gDdCggkSqBBBs4yc2hssZd21Key1bGJa/zUCrXHrekZC6NR5Xn+Pgn5PkBo9QEErR6P+w+Pci+Lw+aGhogNraWuju7uZeU1OLw2BQI7BFZ0SA4+HhAQ4ODsDn88HU1BRcX19L4xT0wf39fYBSyOXlJY6MjGBpaalMJapkZ2djU1NTwqoX9e9/eW+6dDs7O6Ue9a+CxqX3lBGETltbGzLCyMiKlDdPlgZ7enqkstpAiHj/GzNERWFhIbJVzHU2NjZMiVLuZLPBdaurqzV1t7e3vL2T1ZUUF8eemS6Vfr+f69zd3YWgqqoqQh0IMiyVaLxYUVGBlZWVODo6yhuJpE7WrqysIIs5HBsbMyVJeoS67+qwvLwcT05O5DsCm3rc3d3l+VUQVMm2tLSQWgRUr+Xl5XFRG9zc3EiC6s5Dz2JAfZ0eLLwSiOuNYdtrwkzSjBEXCjkoKCiQFRSjOzs7min3er2WJJ4LMuLi4kITp6JUHUYxGgkGg1xZEBKWiDAgi4088VzQtBPKyspkrFPZ3NyscRiTCBENq42J7PT0NI9PYRUtNlGXaZLt7e1yLFESaJERlpeX8fz8PEhv5/VECSUlJbyhmIa5ubmMeVXEbH9/v1zEwqPHx8fSCMUxa0TUb9TR0dGRnArRyerqatKFkwx393e8bGxslCSFMzY3NzULT8Hv4ryeACIzMzPDOyhm+U2QHR8f5/XC6lQh9EOhENIC/pISYwtmYWHBygkecW5POMiJaaZMIGKVhDp3u924t7cnDbLysKg7PT3Ft2/bNbEoSopDi34iciNFg+lXyU5MTGg6plxLZU1NDX6c/IiHh4cJg9AUfvrvE05OTnLDRBip052fn89DjLxtYey0StRjpiX2262tbT6Ymnf12y0NTDsMlfotWJQihLw+rzQoCbTHZ0xyFBExNjg4KEPB6LtAv7PovyE6OjowGo1qdjYLrIEeVl7Vk6VtdXh4GF0ulylJ9ZuBUt3Q0BAnqPaTAtyCn/5c72fFr5AE9MEsjiFnZ2fAdjZYX1+H/f19uLq6AmYAsPiF1tZWqK+vB5Y15PeujaPIn6z/D2ZEbV9A0OBWH9DJ6k0QBqsLiHhFG8SuVVJCMhJpkmxTSRKcBh1zRbBBNoOgMX/U3ztZAmM3eiH8ejC9yUuF7Ld/kauQpS3Wjy8H6vt5V+M6wuTdNcwcqC8PvBQwFrt/Yfp/3/jTIWg7d+hIeyB2gUFC0/cGtH+IRZn8C7GUM0/P+rSTKj4DZcsPZwaHi1YAAAAASUVORK5CYII=",yu=[{nickname:"\ud544\uae30\ub9c8\uc2a4\ud130",profileImg:xu,failText:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc2e4\uae30\ub3c4 \ud544\uae30\ucc98\ub7fc \uae30\ucd9c\ubb38\uc81c \uc704\uc8fc\ub85c \ud588\ub354\ub2c8 \ub5a8\uc5b4\uc838\ubc84\ub838\ub2e4.",solution:"\uc2e4\uae30\ub3c4 \ubb38\uc81c\uac00 \uc911\uc694\ud558\uc9c0\ub9cc, \uc804\uccb4 \uac1c\ub150\uacfc \ucf54\ub4dc\ub97c \uc77d\uace0 \uc774\ud574\ud560 \uc218 \uc788\ub294 \ub2a5\ub825\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."},{nickname:"\ud558\uc6cc\ub4dc\uc290\uce20",profileImg:Cu,failText:"\uce74\ud398 \ucc28\ub9ac\uace0 \uc2f6\uc5b4\uc11c \ucc3d\uc5c5 \uc900\ube44\ub97c 1\ub144 \ud588\ub294\ub370, \ub3c8\uc774 \uba3c\uc800 \ubc14\ub2e5\ub0ac\ub2e4.",solution:"\uc644\ubcbd\ud55c \uc900\ube44\ubcf4\ub2e4 \uc791\uc740 \uc2dc\uc791\uc774 \uba3c\uc800\uc608\uc694. \uc9c0\uae08 \ud560 \uc218 \uc788\ub294 \ucd5c\uc18c\ud55c\uc758 \uccab \ubc1c\uac78\uc74c\uc744 \ucc3e\uc544\ubcf4\uc138\uc694."},{nickname:"\uc870\uc6a9\ud55c\uad00\ucc30\uc790",profileImg:bu,failText:"\uc624\ub79c\ub9cc\uc5d0 \ub9cc\ub098\uac70\ub098 \ub2e4\ub978 \ubaa8\uc784\uc5d0 \ub098\uac00\uba74 \ub298 \uad6c\uc11d\uc5d0\ub9cc \uc788\ub2e4\uac00 \uc624\uac8c \ub418\ubc84\ub9b0\ub2e4.",solution:"\ub098\uc5d0\uac8c \ub9d0\uc744 \uac78\uc5b4\uc8fc\ub294 \uc0c1\ud669\uc744 \uae30\ub2e4\ub9ac\uae30\ubcf4\ub2e4, \uc791\uc740 \uc9c8\ubb38 \ud558\ub098\uac00 \ub300\ud654\uc758 \ubb38\uc744 \uc5f4\uc5b4\uc904 \uc218 \uc788\uc744 \uac70\uc5d0\uc694!"},{nickname:"\ube44\uc804\uacf5\uc758\ud76c\ub9dd",profileImg:vu,failText:"\ud30c\uc774\uc36c \ub3c5\ud559\ud558\ub2e4\uac00 \ud06c\ub864\ub9c1\uc5d0\uc11c \ubc30\uc6b0\uc9c0 \uc54a\uc740 \ub9e5\ub77d\uc774 \uc788\uc5b4\uc11c \ub9c9\ud600\ubc84\ub838\uc5b4\uc694.",solution:"\uac15\uc758\uc5d0\uc11c \ubcf4\uc774\ub358 \ucf54\ub4dc\uac00 \ub9c9\ud614\uc744 \ub54c, \uacf5\uc2dd \ubb38\uc11c\uc640 \uc5d0\ub7ec \uba54\uc2dc\uc9c0\ub97c \uc77d\ub294 \uc2b5\uad00\uc774 \ud070 \ub3c4\uc6c0\uc774 \ub3fc\uc694."}],wu={};wu.Wrapper=rn.section`
    width: 100%;
    background-color: #f1f0f6;
    padding: 60px 0 80px;
`,wu.Inner=rn.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;

    .solutions-title {
        font-size: ${xn.FONT_SIZE.h3};
        font-weight: ${xn.FONT_WEIGHT.bold};
        color: ${xn.PALETTE.black};
        margin: 0;
    }
`,wu.TitleWrap=rn.div`
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 48px;
`,wu.TrumpetIcon=rn.img`
    width: 52px;
    height: 52px;
    flex-shrink: 0;
`,wu.Viewport=rn.div`
    overflow: hidden;
`,wu.Track=rn.div`
    display: flex;
    gap: 20px;
    transition: transform 0.4s ease;
    align-items: flex-start;
`,wu.Card=rn.div`
    min-width: 280px;
    max-width: 280px;
    border-radius: 20px;
    background: ${xn.PALETTE.white};
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
`,wu.Profile=rn.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,wu.ProfileCircle=rn.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,wu.ProfileImg=rn.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
`,wu.Nickname=rn.span`
    font-size: ${xn.FONT_SIZE.h7};
    font-weight: ${xn.FONT_WEIGHT.bold};
    color: ${xn.PALETTE.black};
`,wu.FailTextBox=rn.div`
    background: #f1f0f6;
    border-radius: 15px;
    min-height: 88px;
    padding: 14px 16px;
    width: 100%;
`,wu.FailText=rn.p`
    font-size: ${xn.FONT_SIZE.h8};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: #7c6faa;
    line-height: 1.6;
    margin: 0;
`,wu.SolLabel=rn.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`,wu.SolLabelText=rn.span`
    font-size: ${xn.FONT_SIZE.h7};
    font-weight: ${xn.FONT_WEIGHT.bold};
    color: ${xn.PALETTE.black};
`,wu.SolIconWrap=rn.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    display: flex;
    align-items: center;
    justify-content: center;
`,wu.SolIcon=rn.img`
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
`,wu.SolSummaryBox=rn.div`
    background: #eeeaff;
    border-radius: 15px;
    padding: 14px 16px;
    width: 100%;
`,wu.SolSummary=rn.p`
    font-size: ${xn.FONT_SIZE.h8};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: #4419ff;
    line-height: 1.6;
    margin: 0;
`,wu.NavButtons=rn.div`
    display: flex;
    gap: 12px;
    margin-top: 36px;
`,wu.NavBtn=rn.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${xn.PALETTE.white};
    border: 1px solid ${xn.GRAYSCALE[4]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
        background: #ede9f8;
    }
`,wu.NavIcon=rn.img`
    width: 24px;
    color: ${xn.PALETTE.black};
`,wu.NavIconLeft=rn.img`
    width: 24px;
    color: ${xn.PALETTE.black};
    transform: rotate(180deg);
`;const Eu=()=>{const[e,t]=(0,r.useState)(0);return(0,Co.jsx)(wu.Wrapper,{children:(0,Co.jsxs)(wu.Inner,{children:[(0,Co.jsxs)(wu.TitleWrap,{children:[(0,Co.jsx)(wu.TrumpetIcon,{src:"data:image/png;base64,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",alt:"trumpet"}),(0,Co.jsx)("h2",{className:"solutions-title",children:"\uc778\uae30\uc788\ub294 \uc194\ub8e8\uc158"})]}),(0,Co.jsx)(wu.Viewport,{children:(0,Co.jsx)(wu.Track,{style:{transform:`translateX(-${300*e}px)`},children:yu.map((e,t)=>(0,Co.jsxs)(wu.Card,{children:[(0,Co.jsxs)(wu.Profile,{children:[(0,Co.jsx)(wu.ProfileCircle,{children:(0,Co.jsx)(wu.ProfileImg,{src:e.profileImg,alt:e.nickname})}),(0,Co.jsx)(wu.Nickname,{children:e.nickname})]}),(0,Co.jsx)(wu.FailTextBox,{children:(0,Co.jsx)(wu.FailText,{children:e.failText})}),(0,Co.jsxs)(wu.SolLabel,{children:[(0,Co.jsx)(wu.SolLabelText,{children:"\ud398\ub85c"}),(0,Co.jsx)(wu.SolIconWrap,{children:(0,Co.jsx)(wu.SolIcon,{src:gu,alt:"fero"})})]}),(0,Co.jsx)(wu.SolSummaryBox,{children:(0,Co.jsx)(wu.SolSummary,{children:e.solution})})]},t))})}),(0,Co.jsxs)(wu.NavButtons,{children:[(0,Co.jsx)(wu.NavBtn,{onClick:()=>t(e=>Math.max(0,e-1)),children:(0,Co.jsx)(wu.NavIconLeft,{src:mu,alt:"prev"})}),(0,Co.jsx)(wu.NavBtn,{onClick:()=>t(e=>Math.min(yu.length-3,e+1)),children:(0,Co.jsx)(wu.NavIcon,{src:mu,alt:"next"})})]})]})})},ju=()=>(0,Co.jsxs)("div",{children:[(0,Co.jsx)(Eu,{}),(0,Co.jsx)($i,{})]});const Su=n.p+"static/media/material-icon-theme_gemini-ai.beda6b37e6f531187a7f5ad16d21d4e6.svg";const ku=n.p+"static/media/la_arrow-up.94ec16c355fdde75489ec5c3ac297700.svg";const Au=n.p+"static/media/down.1fbac26917224788be1f2358cdfae24f.svg",Tu=["\uc804\uccb4","\uacf5\ubd80/\ucde8\uc5c5","\uc0ac\uc5c5/\ucc3d\uc5c5","\uc778\uac04\uad00\uacc4","\uac74\uac15/\ub8e8\ud2f4","\uae30\ud0c0"],Lu=["\ucd5c\uc2e0\uc21c","\uc88b\uc544\uc694\uc21c","\uc870\ud68c\uc21c"],Fu={};Fu.Wrapper=rn.div`
    width: 100%;
    background-color: #f8f9fa;
    padding: 100px 0;
`,Fu.Inner=rn.div`
    max-width: 1320px;  /* 1200px → 1320px */
    margin: 0 auto;
    padding: 0 20px;    /* 0 60px → 0 20px */
    display: flex;
    flex-direction: column;
    gap: 100px;
`,Fu.SearchBoxWrap=rn.div`
    width: 872px;
    height: 60px;
    border-radius: 15px;
    padding: 2px;
    background: linear-gradient(90deg, ${xn.PALETTE.primary.main}, ${xn.PALETTE.third.main});
    box-sizing: border-box;
    align-self: center;
`,Fu.SearchBox=rn.div`
    width: 100%;
    height: 100%;
    border-radius: 13px;
    background: ${xn.PALETTE.white};
    display: flex;
    align-items: center;
    padding: 0 12px 0 16px;
    gap: 10px;
    box-sizing: border-box;
`,Fu.SearchIcon=rn.img`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
`,Fu.SearchInput=rn.input`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: ${xn.FONT_SIZE.h7};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: ${xn.GRAYSCALE[10]};
    font-family: inherit;

    &::placeholder {
        color: ${xn.GRAYSCALE[10]};
    }
`,Fu.SearchBtn=rn.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${xn.PALETTE.primary.main}, ${xn.PALETTE.third.main});
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,Fu.ArrowIcon=rn.img`
    width: 18px;
    height: 18px;
    filter: brightness(0) invert(1);
`,Fu.CategoryRow=rn.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,Fu.CategoryList=rn.div`
    display: flex;
    gap: 24px;
`,Fu.CategoryBtn=rn.button`
    width: 88px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[4]}};
    background: ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.PALETTE.white}};
    color: ${e=>{let{$active:t}=e;return t?xn.PALETTE.white:xn.GRAYSCALE[9]}};
    font-size: ${xn.FONT_SIZE.h8};
    font-weight: ${xn.FONT_WEIGHT.bold};
    font-family: inherit;
    cursor: pointer;

    &:hover {
        border: 1.5px solid ${xn.PALETTE.third.main};
    }
`,Fu.SortWrap=rn.div`
    position: relative;
`,Fu.SortBtn=rn.button`
    width: 88px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${xn.GRAYSCALE[4]};
    background: ${xn.PALETTE.white};
    color: ${xn.GRAYSCALE[10]};
    font-size: ${xn.FONT_SIZE.h8};
    font-weight: ${xn.FONT_WEIGHT.regular};
    font-family: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    white-space: nowrap;

    &:hover {
        border: 1.5px solid ${xn.PALETTE.third.main};
    }
`,Fu.DownIcon=rn.img`
    width: ${xn.FONT_SIZE.h8};
    height: ${xn.FONT_SIZE.h8};
    transform: ${e=>{let{$open:t}=e;return t?"rotate(180deg)":"rotate(0deg)"}};
    transition: transform 0.2s;
    filter: brightness(0) saturate(100%) invert(35%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%);
`,Fu.DropdownList=rn.ul`
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    width: 88px;
    background: ${xn.PALETTE.white};
    border: 1px solid ${xn.GRAYSCALE[4]};
    border-radius: 10px;
    overflow: hidden;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    list-style: none;
    padding: 0;
    margin: 0;
`,Fu.DropdownItem=rn.li`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${xn.FONT_SIZE.h8};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[10]}};
    cursor: pointer;

    &:hover {
        color: ${xn.PALETTE.third.main};
        background: ${xn.PALETTE.third.light};
    }
`;const Iu=()=>{const[e,t]=(0,r.useState)(""),[n,i]=(0,r.useState)("\uc804\uccb4"),[o,a]=(0,r.useState)("\ucd5c\uc2e0\uc21c"),[l,s]=(0,r.useState)(!1),c=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const e=e=>{c.current&&!c.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,Co.jsx)(Fu.Wrapper,{children:(0,Co.jsxs)(Fu.Inner,{children:[(0,Co.jsx)(Fu.SearchBoxWrap,{children:(0,Co.jsxs)(Fu.SearchBox,{children:[(0,Co.jsx)(Fu.SearchIcon,{src:Su,alt:"search"}),(0,Co.jsx)(Fu.SearchInput,{placeholder:"\uc5b4\ub5a4 \ud398\uc77c\ub85c\uadf8\ub97c \ucc3e\uace0 \uacc4\uc138\uc694?",value:e,onChange:e=>t(e.target.value)}),(0,Co.jsx)(Fu.SearchBtn,{children:(0,Co.jsx)(Fu.ArrowIcon,{src:ku,alt:"submit"})})]})}),(0,Co.jsxs)(Fu.CategoryRow,{children:[(0,Co.jsx)(Fu.CategoryList,{children:Tu.map(e=>(0,Co.jsx)(Fu.CategoryBtn,{$active:n===e,onClick:()=>i(e),children:e},e))}),(0,Co.jsxs)(Fu.SortWrap,{ref:c,children:[(0,Co.jsxs)(Fu.SortBtn,{onClick:()=>s(!l),children:[(0,Co.jsx)("span",{children:o}),(0,Co.jsx)(Fu.DownIcon,{src:Au,alt:"down",$open:l})]}),l&&(0,Co.jsx)(Fu.DropdownList,{children:Lu.map(e=>(0,Co.jsx)(Fu.DropdownItem,{$active:o===e,onClick:()=>{a(e),s(!1)},children:e},e))})]})]})]})})};const Ou=n.p+"static/media/hugeicons--view.472198bf674adb70d85605ddf299cfdc.svg";const Ru=n.p+"static/media/ph--heart-light.1b4f410f3525a6bdf5d42355e0b97243.svg",Nu="data:image/png;base64,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",Pu=[{id:1,category:"\uc778\uac04\uad00\uacc4",categoryVariant:"pink",date:"2026.03.03",title:"\uc791\uc740 \uc2e4\uc218\ub85c \uba40\uc5b4\uc838\ubc84\ub9b0 \uc6b0\ub9ac \uc0ac\uc774",vision:"\ub9d0\uc740 \uc5b8\uc81c\ub098 \uc0dd\uac01\ud558\uace0 \uc870\uc2ec\ud574\uc11c \ub9d0\ud558\uae30",nickname:"\uce5c\uad6c\uac00\ud544\uc694\ud55c\ub098",profileImg:Nu,views:45,likes:35,thumbnail:n.p+"static/media/image 277.e235b91c91ec1e5c7d96.png"},{id:2,category:"\uacf5\ubd80/\ucde8\uc5c5",categoryVariant:"blue",date:"2026.03.03",title:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc2e4\uae30, \ud544\uae30 \ubd99\uace0 \ub098\uc11c \ubc29\uc2ec\ud588\ub2e4\uac00 \ub610 \ub5a8\uc5b4\uc84c\ub2e4.",vision:"\uc62c\ud574 \uc548\uc5d0 \uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \ucd5c\uc885 \ud569\uaca9\ud558\uae30",nickname:"\ud544\uae30\ub9c8\uc2a4\ud130",profileImg:xu,views:45,likes:35,thumbnail:n.p+"static/media/image 340.92ae91d7c428356c3ecc.png"},{id:3,category:"\uae30\ud0c0",categoryVariant:"gray",date:"2026.03.03",title:"\uc720\ub7fd \ubc30\ub0ad\uc5ec\ud589 \ud63c\uc790 \ub3c4\uc804\uae30",vision:"\uc720\ub7fd\uc5d0\uc11c \ud63c\uc790 1\ub144 \uc0b4\uae30 \uc131\uacf5\ud558\uae30",nickname:"\uc720\ub7fd\ud0d0\ud5d8\uac00",profileImg:bu,views:45,likes:35,thumbnail:n.p+"static/media/image 343.456efb626036ebb24805.png"},{id:4,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",categoryVariant:"purple",date:"2026.03.03",title:"\uce74\ud398 \ucc3d\uc5c5 \uc900\ube44\ud558\ub2e4\uac00 \ub3c8\uc774 \uba3c\uc800 \ubc14\ub2e5\ub0ac\ub2e4.",vision:"\ub2e8\uace8\uc190\ub2d8\uc774 \uc0dd\uae30\ub294 \ub0b4 \uac1c\uc778\uce74\ud398 \ud558\ub098 \ucc28\ub9ac\uae30",nickname:"\ud558\uc6cc\ub4dc\uc290\uce20",profileImg:Cu,views:45,likes:35,thumbnail:n.p+"static/media/image 352.158f3fce8ffe5e1eb45c.png"},{id:5,category:"\uacf5\ubd80/\ucde8\uc5c5",categoryVariant:"blue",date:"2026.03.03",title:"\ud30c\uc774\uc36c \ub3c5\ud559\ud558\ub2e4\uac00 \ud06c\ub864\ub9c1\uc5d0\uc11c \ub9c9\ud614\ub2e4.",vision:"\ube44\uc804\uacf5\uc790\uc9c0\ub9cc \uc9c1\uc811 \ubb54\uac00 \ub9cc\ub4e4\uc5b4\ubcf4\uae30",nickname:"\ube44\uc804\uacf5\uc758\ud76c\ub9dd",profileImg:"data:image/png;base64,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",views:45,likes:35,thumbnail:n.p+"static/media/image 342.2190e937801aa30816b2.png"},{id:6,category:"\uc778\uac04\uad00\uacc4",categoryVariant:"pink",date:"2026.03.03",title:"\ubaa8\uc784 \ub098\uac00\uba74 \uad6c\uc11d\uc5d0\ub9cc \uc788\ub2e4\uac00 \uc624\ub294 \ub098",vision:"\uc0ac\ub78c\ub4e4\uacfc \ub300\ud654\ub97c \ud3b8\ud558\uac8c \ud560 \uc218 \uc788\ub294 \ub0b4\uac00 \ub418\uae30",nickname:"\ub300\ud654\uac00\ud544\uc694\ud574",profileImg:Nu,views:45,likes:35,thumbnail:n.p+"static/media/image 351.4786d8835e0abedf9a1a.png"},{id:7,category:"\uac74\uac15/\ub8e8\ud2f4",categoryVariant:"green",date:"2026.03.03",title:"\ud5ec\uc2a4\uc7a5 3\uac1c\uc6d4 \ub04a\uc5c8\ub294\ub370 \uc5f4 \ubc88 \ubc16\uc5d0 \uc548\uac14\ub2e4.",vision:"\uafb8\uc900\ud788 \uc6b4\ub3d9\ud574\uc11c \ubbf8\ub798\uc5d0\ub3c4 \uac74\uac15\ud55c \ubab8 \uc720\uc9c0\ud558\uae30",nickname:"\ubc14\ub514\uc9f1\uc9f1\ub9e8",profileImg:vu,views:45,likes:35,thumbnail:n.p+"static/media/image 350.dd7d00555e5e1e06bbc6.png"},{id:8,category:"\uacf5\ubd80/\ucde8\uc5c5",categoryVariant:"blue",date:"2026.03.03",title:"\ub124\uc774\ubc84 \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790 \ucde8\uc5c5 \ub3c4\uc804",vision:"\uad6d\ub0b4 \ub300\ud615 IT \uae30\uc5c5 \uac1c\ubc1c\uc790\ub85c \uc785\uc0ac\ud558\uae30",nickname:"\ubc31\uc5d4\ub4dc\ub85c\ucde8\uc5c5\ud558\uae30",profileImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABK5JREFUeAGtVl1MW1Uc/597b7/WdhQ7GE0Ab91QiQotUzNqHK0P28hc7GKiwURXtsQ3H4gvLiabzgcTo/HZF0GUYDId6MYMQqBssQzZ1rJlA02xl43ZAgPaMfp5Pzz3thRou3EZ/m7a3HP+5/y/Py4CGWgdP2O/Sk46Bx5cawinwnQceAMCAZQCEd6uLPLtU9aO1ah2d39Q1eTeiBd6FPErf7vrk9CXp5a4BRpRJhCQChCBRQlC5rL4zgMSEiAkQ7Ad6ZlTT5349MPK99o2JTAQHKdtgaNdweSshVBVYlt4EGBjkIgELsZAGWlkfqvqcFhN1UzuGSJ345fp/qPmcZt3FiktSFWBRckTJoITOEDqCphTaGjrxKveC/5+Z+6ZdRZ67nudtpGGLkpvBRZf3goobC0buw7nq866Xi93fJcnMLgYpE1Xqr2U3mJgBRb+D1CIAjZ6PRyw3rSai03MOoG7/rQHGC5Jc/le3hIInGAVBOWb2jtkldbiX3uwxzW55Kd5IHM0xOToJED8dvoX+wcAZyTK6KlECoDE3VW6eJZfpYsQEIKp6KSl897vrqyFJZ49gQVCR3M5cVOmIjBW9zNE2Ji0Llbo4N2Jj+FKIgC8KAyXQu9z34JBUQRipRgoLbj8n8Hl6F+YM5XlQ2LFdckHTGTfNTPVGThnb2Lep0G9q4A7WHhWW7WqLX6GLd8DOVAGlP55YLkE1OiegTJVafaMgdJLJ9eCw7UaSd2lB+eG7cQfiZtOUOyEwkA5K/zg7BvYcx7Y5QkpIhwum7XghcJFhDTl0D7d4yS67rtrgdSCXAhIAEfxXthvPIy5R0E+1DDE+RqIaHLRgjaRmQR+xLLprfkGJ8qytJanKIKFxBxNRMmEQZDZS1LZpELYkQh+euks+GO3QS5iEDcQKCW/yMUJsX/suNRFcMeGN0sPQH2RRf59ngdCSerDci+IneNi6ByMRLywkhvUmvTfCGqkCRNPqIwMCHLbM4BGb4ZXRhulyG2m34re0SgMY8RBXf0Q2kS28ThheG0ldu0xybVy4y+wy/BO6UEf8bbxtW4h8e/DjuXt4NDhWtRA/2If9M5fyqOLM7Eg2Bl4Eaq6KUdJvbto+GVmCRE0L6wvYoFQgzs8CrNsOsxGqgiSmKE4I6ltT8OhG8egz9KB6RGpRRgVBgix85A7ZsXSKVE/yTSZD7ulVvL13+2ultDJVqQoX2cTKXaS+B1sUkZrHDNCg4dyRrH0hBfpGQHivmoH9oBqvauTd+Dz4pPNJ2qOt2V7185LNu89Clm4R3/mbBokVqIcgJmyecxpazO4vLvjCBe7FX5oDB4DYslw0Vthd3WHY2UvK9BsMjOd5T+0cMtj6cLeIhTitI9chUFLb7O52Mys7Of5r3fG4zxwo7GV0r5geNwPDRKz5ZZ84Z66X1sO7XC0raUVDNj4YoC2j781OJPCzVZZKWWlPEE4yVLTYKJKfJ7qH4+stWwFBVt9NT44Yxs1f2E+3azj5hmI+qWP3fy6TOsr0eKToBbCzOmyj5qDthFrIWGrNzbAmbk++4WQx3kx7rMkhOXaKM8axKvbCCqsJXRTDl2d+w2jrbuxxOHeiNd/SBXf2NtxLYEAAAAASUVORK5CYII=",views:45,likes:35,thumbnail:n.p+"static/media/image 348.081fc99699ac0f8ca930.png"},{id:9,category:"\uac74\uac15/\ub8e8\ud2f4",categoryVariant:"green",date:"2026.03.03",title:"\uae08\uc5f0 30\uc77c, \uae08\ub2e8\ud604\uc0c1 \uadf9\ubcf5\ud558\uae30",vision:"\uae08\uc5f0 \uc131\uacf5\ud574\uc11c \ud3d0 \uac74\uac15 \ud68c\ubcf5\ud558\uae30",nickname:"\ub2f4\ubc30\uc5d0\uc11c\uc0b4\uc544\ub0a8\uae30",profileImg:vu,views:45,likes:35,thumbnail:n.p+"static/media/Group 2956.5c1431b825f917d25d79.png"}],zu={pink:{bg:xn.PALETTE.fourth.light,color:xn.PALETTE.fourth.main},blue:{bg:xn.PALETTE.primary.light,color:xn.PALETTE.primary.main},green:{bg:xn.PALETTE.secondary.light,color:xn.PALETTE.secondary.main},purple:{bg:xn.PALETTE.third.light,color:xn.PALETTE.third.main},gray:{bg:xn.GRAYSCALE[2],color:xn.GRAYSCALE[10]}},$u={};$u.ListWrapper=rn.div`
    width: 100%;
    background-color: #f8f9fa;
    padding: 0 0 100px;
`,$u.CardGrid=rn.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 50px;
`,$u.Card=rn.div`
    width: 424px;
    min-width: 424px;
    max-width: 424px;
    height: 500px;
    border-radius: 20px;
    background: ${xn.PALETTE.white};
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        transform: translateY(-8px);
        border: 2px solid ${xn.PALETTE.third.main};
        box-shadow: 0 16px 40px rgba(171, 71, 255, 0.15);
    }
`,$u.CardBody=rn.div`
    flex: 1;
    padding: 40px 40px 40px;
    display: flex;
    flex-direction: column;
    gap: 0;
`,$u.CardTop=rn.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;   /* 10px → 30px */
`,$u.Category=rn.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 28px;
    border-radius: 8px;
    font-size: ${xn.FONT_SIZE.h9};
    font-weight: ${xn.FONT_WEIGHT.bold};
    background-color: ${e=>{var t;let{$variant:n}=e;return(null===(t=zu[n])||void 0===t?void 0:t.bg)||xn.GRAYSCALE[2]}};
    color: ${e=>{var t;let{$variant:n}=e;return(null===(t=zu[n])||void 0===t?void 0:t.color)||xn.GRAYSCALE[10]}};
`,$u.Date=rn.span`
    font-size: ${xn.FONT_SIZE.h10};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: ${xn.GRAYSCALE[9]};
`,$u.Title=rn.p`
    font-size: ${xn.FONT_SIZE.h7};
    font-weight: ${xn.FONT_WEIGHT.bold};
    color: ${xn.PALETTE.black};
    margin: 0 0 20px 0;    /* 8px → 20px */
    line-height: 1.4;
    word-break: keep-all;
    overflow-wrap: break-word;
`,$u.Vision=rn.p`
    font-size: ${xn.FONT_SIZE.h8};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: ${xn.GRAYSCALE[10]};
    margin: 0;
    line-height: 1.5;
    flex: 1;
`,$u.CardBottom=rn.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 12px;
`,$u.Profile=rn.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,$u.AvatarWrap=rn.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, ${xn.PALETTE.primary.main}, ${xn.PALETTE.third.main});
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,$u.Avatar=rn.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
`,$u.Nickname=rn.span`
    font-size: ${xn.FONT_SIZE.h8};
    font-weight: ${xn.FONT_WEIGHT.bold};
    color: ${xn.PALETTE.black};
`,$u.Stats=rn.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,$u.Stat=rn.span`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${xn.FONT_SIZE.h9};
    font-weight: ${xn.FONT_WEIGHT.regular};
    color: ${xn.GRAYSCALE[10]};
`,$u.Thumbnail=rn.img`
    width: 424px;
    height: 200px;
    object-fit: cover;
    flex-shrink: 0;
`;const Du=()=>(0,Co.jsxs)("div",{children:[(0,Co.jsx)(fu,{}),(0,Co.jsx)(Iu,{}),(0,Co.jsx)($u.ListWrapper,{children:(0,Co.jsx)($u.CardGrid,{children:Pu.map(e=>(0,Co.jsx)(ro,{to:`/logs/result/${e.id}/detail`,style:{textDecoration:"none"},children:(0,Co.jsxs)($u.Card,{children:[(0,Co.jsxs)($u.CardBody,{children:[(0,Co.jsxs)($u.CardTop,{children:[(0,Co.jsx)($u.Category,{$variant:e.categoryVariant,children:e.category}),(0,Co.jsx)($u.Date,{children:e.date})]}),(0,Co.jsx)($u.Title,{children:e.title}),(0,Co.jsx)($u.Vision,{children:e.vision}),(0,Co.jsxs)($u.CardBottom,{children:[(0,Co.jsxs)($u.Profile,{children:[(0,Co.jsx)($u.AvatarWrap,{children:(0,Co.jsx)($u.Avatar,{src:e.profileImg,alt:e.nickname})}),(0,Co.jsx)($u.Nickname,{children:e.nickname})]}),(0,Co.jsxs)($u.Stats,{children:[(0,Co.jsxs)($u.Stat,{children:[(0,Co.jsx)("img",{src:Ou,alt:"views",width:"16",height:"16"}),e.views]}),(0,Co.jsxs)($u.Stat,{children:[(0,Co.jsx)("img",{src:Ru,alt:"likes",width:"16",height:"16"}),e.likes]})]})]})]}),(0,Co.jsx)($u.Thumbnail,{src:e.thumbnail,alt:e.title})]})},e.id))})})]}),Bu=e=>{let{vision:t,projects:n,timeline:i,selectedProject:o,onSelectProject:a,onStartAnalysis:l}=e;const[s,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)({}),h=e=>{var t;return null!==(t=d[e])&&void 0!==t?t:0},p=(e,t,n)=>{u(r=>{var i;const o=((null!==(i=r[e])&&void 0!==i?i:0)+t+n)%n;return{...r,[e]:o}})},f=(()=>{const e=[];let t=null;return i.forEach(n=>{n.year!==t?(e.push({year:n.year,items:[n]}),t=n.year):e[e.length-1].items.push(n)}),e})(),g=f.flatMap(e=>e.items),m=new Map(g.map((e,t)=>[e.id,t]));return(0,Co.jsxs)(Mu,{children:[(0,Co.jsxs)(Hu,{children:[(0,Co.jsxs)(Gu,{children:[(0,Co.jsx)(Wu,{children:"TIME LINE"}),(0,Co.jsx)(Uu,{children:"\ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud558\uae30\uae4c\uc9c0 \uc2e4\ud328\uc640 \uc131\uc7a5\uc758 \ud750\ub984\uc744 \ud55c\ub208\uc5d0 \ud655\uc778\ud558\uc138\uc694."})]}),(0,Co.jsx)(_u,{children:(0,Co.jsx)("select",{value:o.id,onChange:e=>{const t=n.find(t=>t.id===Number(e.target.value));t&&a(t)},children:n.map(e=>(0,Co.jsx)("option",{value:e.id,children:e.title},e.id))})})]}),(0,Co.jsxs)(Zu,{children:[(0,Co.jsx)(Yu,{children:"VISION"}),(0,Co.jsx)(Qu,{children:t.title})]}),(0,Co.jsx)(Vu,{children:f.map(e=>(0,Co.jsxs)(qu,{children:[(0,Co.jsx)(Ju,{children:e.year}),(0,Co.jsx)(Xu,{children:e.items.map((e,t)=>{const n=m.get(e.id)%2===1;return(0,Co.jsxs)(Ku,{children:[(0,Co.jsxs)(eh,{children:[0===t&&(0,Co.jsx)(th,{children:e.year}),(0,Co.jsx)(nh,{children:e.month})]}),(0,Co.jsx)(rh,{children:(0,Co.jsx)(ih,{})}),(0,Co.jsx)(oh,{$reverse:n,children:(0,Co.jsxs)(ah,{children:[(0,Co.jsxs)(lh,{children:[(0,Co.jsx)(sh,{src:e.images[h(e.id)],alt:"timeline"}),e.images.length>1&&(0,Co.jsxs)(Co.Fragment,{children:[(0,Co.jsx)(ch,{$left:!0,onClick:()=>p(e.id,-1,e.images.length),children:"\u2039"}),(0,Co.jsx)(ch,{onClick:()=>p(e.id,1,e.images.length),children:"\u203a"})]}),(0,Co.jsx)(dh,{children:"\xd7"})]}),(0,Co.jsxs)(uh,{children:[(0,Co.jsx)(hh,{children:e.description}),(0,Co.jsx)(ph,{children:e.bullets.map((e,t)=>(0,Co.jsx)(fh,{children:e},t))})]})]})})]},e.id)})})]},e.year))}),(0,Co.jsxs)(gh,{children:[(0,Co.jsx)(mh,{onClick:()=>c(e=>!e),children:"+ \uc0c8 \ud56d\ubaa9 \ucd94\uac00"}),s&&(0,Co.jsx)(xh,{children:n.map(e=>(0,Co.jsxs)(Ch,{$active:e.id===o.id,onClick:()=>{a(e),c(!1)},children:[(0,Co.jsxs)(bh,{children:[(0,Co.jsx)(vh,{children:e.title}),(0,Co.jsxs)(yh,{children:[e.startDate," ~ ",e.endDate]})]}),(0,Co.jsxs)(wh,{$active:e.id===o.id,children:["D + ",e.dDay]})]},e.id))})]}),(0,Co.jsx)(Eh,{onClick:l,children:"\uc131\uacfc\ub7ad\ud06c \ubd84\uc11d\ud558\uae30"})]})},Mu=rn.div`
  padding: 40px 60px 80px;
`,Hu=rn.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`,Gu=rn.div``,Wu=rn.h1`
  font-size: 42px;
  font-weight: 800;
  color: #222;
  letter-spacing: -0.02em;
`,Uu=rn.p`
  font-size: 14px;
  color: #888;
  margin-top: 6px;
`,_u=rn.div`
  select {
    padding: 8px 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    color: #333;
    background: #fff;
    cursor: pointer;
    outline: none;
  }
`,Zu=rn.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 40px;
  width: fit-content;
  margin-left: auto;
`,Yu=rn.p`
  font-size: 13px;
  font-weight: 700;
  color: #888;
  margin-bottom: 6px;
`,Qu=rn.p`
  font-size: 15px;
  font-weight: 700;
  color: #ab47ff;
`,Vu=rn.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 92px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #ab47ff, #4caf50);
  }
`,qu=rn.div``,Ju=rn.div`
  display: none;
`,Xu=rn.div``,Ku=rn.div`
  display: flex;
  gap: 0;
  margin-bottom: 40px;
`,eh=rn.div`
  width: 80px;
  text-align: right;
  padding-right: 12px;
  flex-shrink: 0;
`,th=rn.p`
  font-size: 20px;
  font-weight: 800;
  color: #222;
  line-height: 1;
`,nh=rn.p`
  font-size: 16px;
  font-weight: 700;
  color: #222;
`,rh=rn.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24px;
  flex-shrink: 0;
`,ih=rn.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ab47ff;
  flex-shrink: 0;
  margin-top: 4px;
`,oh=(rn.div`
  width: 2px;
  flex: 1;
  background: linear-gradient(to bottom, #ab47ff, #4caf50);
  min-height: 40px;
`,rn.div`
  width: 460px;
  flex-shrink: 0;
  padding-left: 20px;
  margin-left: ${e=>{let{$reverse:t}=e;return t?"160px":"0"}};
`),ah=rn.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
`,lh=rn.div`
  position: relative;
`,sh=rn.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`,ch=rn.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${e=>{let{$left:t}=e;return t?"left: 8px;":"right: 8px;"}}
  background: rgba(255,255,255,0.85);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,dh=rn.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255,255,255,0.85);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,uh=rn.div`
  padding: 16px;
  background: #fff;
`,hh=rn.p`
  font-size: 14px;
  font-weight: 700;
  color: #222;
  margin-bottom: 12px;
  line-height: 1.5;
`,ph=rn.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
`,fh=rn.p`
  font-size: 12px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ab47ff;
    flex-shrink: 0;
  }
`,gh=rn.div`
  margin-bottom: 32px;
`,mh=rn.button`
  width: 100%;
  padding: 16px;
  background: #fff;
  border: 1.5px dashed #ccc;
  border-radius: 10px;
  font-size: 15px;
  color: #888;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    border-color: #ab47ff;
    color: #ab47ff;
  }
`,xh=rn.div`
  margin-top: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  max-height: 320px;
  overflow-y: auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
`,Ch=rn.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: ${e=>{let{$active:t}=e;return t?"#f3e8ff":"#fff"}};
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${e=>{let{$active:t}=e;return t?"#f3e8ff":"#fafafa"}};
  }
`,bh=rn.div``,vh=rn.p`
  font-size: 15px;
  font-weight: 600;
  color: #222;
`,yh=rn.p`
  font-size: 12px;
  color: #aaa;
  margin-top: 3px;
`,wh=rn.p`
  font-size: 15px;
  font-weight: 700;
  color: ${e=>{let{$active:t}=e;return t?"#ab47ff":"#555"}};
`,Eh=rn.button`
  width: 100%;
  padding: 20px;
  background: #ab47ff;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #9333ea;
  }
`,jh=["\uc9c0\uac01 \ubcc0\ubcc4 \ubd84\uc11d \uc911","\uc720\ucd94\ube44\uad50 \ucc98\ub9ac \uc911","\ube44\uad50\ucd94\ub860 \uacc4\uc0b0 \uc911","\ud328\ud134 \ud559\uc2b5 \uc644\ub8cc","\uc131\uacfc \ub370\uc774\ud130 \uc9d1\uacc4 \uc911","\ub7ad\ud06c \uc0b0\ucd9c \uc644\ub8cc"],Sh=1e4,kh=e=>{let{vision:t,analysis:n,onDone:i}=e;const[o,a]=(0,r.useState)(0),[l,s]=(0,r.useState)([]);return(0,r.useEffect)(()=>{const e=Date.now();let t=0;const n=setInterval(()=>{const r=Date.now()-e,i=Math.min(r/Sh,1),o=Math.floor(100*i),l=Math.floor(8*Math.random())-3,s=Math.min(100,Math.max(t,o+l));t=s,a(s),i>=1&&(clearInterval(n),a(100))},200),r=Sh/(jh.length+1),o=jh.map((e,t)=>setTimeout(()=>{s(e=>[...e,t])},r*(t+1))),l=setTimeout(()=>{i()},10400);return()=>{clearInterval(n),o.forEach(clearTimeout),clearTimeout(l)}},[i]),(0,Co.jsxs)(Th,{children:[(0,Co.jsxs)(Lh,{children:[(0,Co.jsx)(Fh,{children:"TIME LINE"}),(0,Co.jsx)(Ih,{children:"\ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud558\uae30\uae4c\uc9c0 \uc2e4\ud328\uc640 \uc131\uc7a5\uc758 \ud750\ub984\uc744 \ud55c\ub208\uc5d0 \ud655\uc778\ud558\uc138\uc694."})]}),(0,Co.jsxs)(Oh,{children:[(0,Co.jsx)(Rh,{children:"VISION"}),(0,Co.jsx)(Nh,{children:t.title})]}),(0,Co.jsxs)(Ph,{children:[(0,Co.jsxs)(zh,{children:[(0,Co.jsx)($h,{children:n.nickname})," \ub2d8\uc758 \ubaa9\ud45c \ub2ec\uc131\ub960 \ubd84\uc11d \uc911..."]}),(0,Co.jsxs)(Dh,{children:[(0,Co.jsxs)(Bh,{children:[(0,Co.jsx)("span",{children:"\ubd84\uc11d \uc9c4\ud589\ub960"}),(0,Co.jsxs)(Mh,{children:[o,"%"]})]}),(0,Co.jsx)(Hh,{children:(0,Co.jsx)(Gh,{style:{width:`${o}%`}})})]}),(0,Co.jsx)(Wh,{children:jh.map((e,t)=>(0,Co.jsxs)(Uh,{$done:l.includes(t),children:[(0,Co.jsx)(_h,{$done:l.includes(t),children:l.includes(t)?"\u2713":(0,Co.jsx)(Zh,{})}),(0,Co.jsx)(Yh,{$done:l.includes(t),children:e})]},t))})]})]})},Ah=cn`
  to { transform: rotate(360deg); }
`,Th=rn.div`
  padding: 40px 60px 80px;
`,Lh=rn.div`
  margin-bottom: 32px;
`,Fh=rn.h1`
  font-size: 42px;
  font-weight: 800;
  color: #222;
  letter-spacing: -0.02em;
`,Ih=rn.p`
  font-size: 14px;
  color: #888;
  margin-top: 6px;
`,Oh=rn.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 48px;
  display: inline-block;
  min-width: 220px;
`,Rh=rn.p`
  font-size: 13px;
  font-weight: 700;
  color: #888;
  margin-bottom: 6px;
`,Nh=rn.p`
  font-size: 15px;
  font-weight: 700;
  color: #ab47ff;
`,Ph=rn.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,zh=rn.h2`
  font-size: 22px;
  font-weight: 700;
  color: #222;
  text-align: center;
`,$h=rn.span`
  color: #4359fc;
  font-weight: 800;
`,Dh=rn.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Bh=rn.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
`,Mh=rn.span`
  font-weight: 700;
  color: #ab47ff;
`,Hh=rn.div`
  width: 100%;
  height: 16px;
  background: #f0f0f0;
  border-radius: 999px;
  overflow: hidden;
`,Gh=rn.div`
  height: 100%;
  background: linear-gradient(90deg, #ab47ff, #4359fc);
  border-radius: 999px;
  transition: width 0.15s ease-out;
`,Wh=rn.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  background: #fafafa;
  border-radius: 12px;
  border: 1px solid #eee;
`,Uh=rn.div`
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: ${e=>{let{$done:t}=e;return t?1:.45}};
  transition: opacity 0.3s;
`,_h=rn.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${e=>{let{$done:t}=e;return t?"#ab47ff":"transparent"}};
  border: ${e=>{let{$done:t}=e;return t?"none":"2px solid #ccc"}};
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Zh=rn.div`
  width: 12px;
  height: 12px;
  border: 2px solid #ddd;
  border-top-color: #ab47ff;
  border-radius: 50%;
  animation: ${Ah} 0.7s linear infinite;
`,Yh=rn.p`
  font-size: 14px;
  font-weight: ${e=>{let{$done:t}=e;return t?"600":"400"}};
  color: ${e=>{let{$done:t}=e;return t?"#222":"#999"}};
`,Qh=[{stanine:1,percent:4,percentile:4},{stanine:2,percent:7,percentile:11},{stanine:3,percent:12,percentile:23},{stanine:4,percent:17,percentile:40},{stanine:5,percent:20,percentile:60},{stanine:6,percent:17,percentile:77},{stanine:7,percent:12,percentile:89},{stanine:8,percent:7,percentile:96},{stanine:9,percent:4,percentile:100}],Vh=()=>{const e=120,t=[];for(let n=0;n<=540;n+=2){const r=n/540*6-3,i=Math.exp(-.5*r*r);t.push(`${n},${e-i*e*.9}`)}return(0,Co.jsxs)("svg",{viewBox:"0 0 540 120",width:"100%",height:"100%",children:[(0,Co.jsx)("polyline",{points:t.join(" "),fill:"none",stroke:"#333",strokeWidth:"2"}),[72,144,216,288,360,432,504].map((t,n)=>(0,Co.jsx)("line",{x1:t,y1:0,x2:t,y2:e,stroke:"#888",strokeWidth:"1",strokeDasharray:"3,3"},n))]})},qh=e=>{let{vision:t,analysis:n,onBack:r}=e;return(0,Co.jsxs)(Jh,{children:[(0,Co.jsxs)(Xh,{children:[(0,Co.jsx)(Kh,{children:"TIME LINE"}),(0,Co.jsx)(ep,{children:"\ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud558\uae30\uae4c\uc9c0 \uc2e4\ud328\uc640 \uc131\uc7a5\uc758 \ud750\ub984\uc744 \ud55c\ub208\uc5d0 \ud655\uc778\ud558\uc138\uc694."})]}),(0,Co.jsxs)(tp,{children:[(0,Co.jsx)(np,{children:"VISION"}),(0,Co.jsx)(rp,{children:t.title})]}),(0,Co.jsxs)(ip,{children:[(0,Co.jsx)(op,{children:n.nickname})," \ub2d8\uc758 \ubaa9\ud45c \ub2ec\uc131\ub960\uc740 \uc0c1\uc704"," ",(0,Co.jsxs)(ap,{children:[n.percentile,"%"]})," \uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4 !"]}),(0,Co.jsx)(lp,{children:"\uc544\uc8fc \ud0c1\uc6d4\ud569\ub2c8\ub2e4. \ubaa9\ud45c\ub97c \uc704\ud574 \ub9dd\uc124\uc774\uace0 \ub2ec\ub824\uc654\uad70\uc694. \uadf8\uac04 \uc790\uc2e0\uc744 \uc704\ud574 \uc624\ub298\ud558\ub8e8\ub97c \ud22c\uc790\ud558\ub294\uac74 \uc5b4\ub5a8\uae4c\uc694 ?"}),(0,Co.jsxs)(sp,{children:[(0,Co.jsx)(Vh,{}),(0,Co.jsxs)(cp,{children:[(0,Co.jsx)(dp,{children:Qh.map(e=>(0,Co.jsxs)(hp,{children:[e.percent,"%"]},e.stanine))}),(0,Co.jsx)(dp,{$label:!0,children:(0,Co.jsx)(up,{colSpan:9,children:"Stanine"})}),(0,Co.jsx)(dp,{children:Qh.map(e=>(0,Co.jsx)(hp,{$bold:!0,children:e.stanine},e.stanine))}),(0,Co.jsx)(dp,{$label:!0,children:(0,Co.jsx)(up,{colSpan:9,children:"Percentile"})}),(0,Co.jsx)(dp,{children:Qh.map(e=>(0,Co.jsx)(hp,{children:e.percentile},e.stanine))})]})]}),(0,Co.jsxs)(pp,{children:["\uc774 \ube44\uc804\uc744 \ub2ec\uc131\ud558\uba74\uc11c \ucd1d ",(0,Co.jsx)(fp,{children:n.totalChecklists})," \uac1c\uc758 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub97c \ub2ec\uc131 \ud588\uc2b5\ub2c8\ub2e4"]}),(0,Co.jsxs)(gp,{children:[(0,Co.jsx)(op,{children:n.nickname})," \ub2d8\uc740 \ud3c9\uade0 \uc774\uc6a9\uc790\ub4e4\uc5d0 \ube44\ud574"," ",(0,Co.jsx)(fp,{children:n.totalChecklists-n.avgUserChecklists}),"\uac1c \ub9ce\uc740 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub97c \ub2ec\uc131 \ud588\uc2b5\ub2c8\ub2e4."]}),(0,Co.jsxs)(mp,{children:[(0,Co.jsxs)(xp,{children:[(0,Co.jsx)(Cp,{children:"\ud83d\udd14 \ucd5c\ub2e4 \ub2ec\uc131 \uccb4\ud06c\ub9ac\uc2a4\ud2b8"}),(0,Co.jsx)(bp,{children:"Top 3"}),n.top3Checklists.map((e,t)=>(0,Co.jsxs)(vp,{children:[(0,Co.jsx)(yp,{}),(0,Co.jsx)(wp,{children:e.text}),(0,Co.jsxs)(Ep,{children:[e.count,"\ud68c"]})]},t))]}),(0,Co.jsx)(jp,{}),(0,Co.jsxs)(xp,{children:[(0,Co.jsx)(Cp,{children:"\ud3c9\uade0 \ubaa9\ud45c\ub2ec\uc131 \uae30\uac04"}),(0,Co.jsxs)(Sp,{children:[(0,Co.jsx)(kp,{}),(0,Co.jsxs)("span",{children:["\uc774\uc6a9\uc790\ub4e4\uc740 \ud3c9\uade0\uc801\uc73c\ub85c ",(0,Co.jsxs)(Ap,{children:[n.avgDays,"\uc77c"]})," \ub9cc\uc5d0 \ubaa9\ud45c\ub97c \ub2ec\uc131 \ud588\uc2b5\ub2c8\ub2e4."]})]})]}),(0,Co.jsx)(jp,{}),(0,Co.jsxs)(xp,{children:[(0,Co.jsx)(Cp,{children:"AI \uc0ac\uc6a9 \uc5ec\ubd80"}),(0,Co.jsxs)(Sp,{children:[(0,Co.jsx)(kp,{}),(0,Co.jsxs)("span",{children:["\uc774\uc6a9\uc790\ub4e4\uc740 \ud3c9\uade0\uc801\uc73c\ub85c ",(0,Co.jsxs)(Ap,{children:[n.aiUsageRate,"%"]})," \uac00 \uc9c1\uc811 \ud504\ub85c\uc81d\ud2b8\ub97c \uc791\uc131 \ud588\uc2b5\ub2c8\ub2e4."]})]})]}),(0,Co.jsx)(jp,{}),(0,Co.jsxs)(xp,{children:[(0,Co.jsx)(Cp,{children:"\ud504\ub85c\uc81d\ud2b8 \uac1c\uc218"}),(0,Co.jsxs)(Sp,{children:[(0,Co.jsx)(kp,{}),(0,Co.jsxs)("span",{children:["\uc774\uc6a9\uc790\ub4e4\uc740 \ud3c9\uade0\uc801\uc73c\ub85c ",(0,Co.jsxs)(Ap,{children:[n.projectCount,"\uac1c"]})," \uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \uc791\uc131 \ud588\uc2b5\ub2c8\ub2e4."]})]})]})]}),(0,Co.jsx)(Tp,{onClick:r,children:"\u2190 \ud0c0\uc784\ub77c\uc778\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})},Jh=rn.div`
  padding: 40px 60px 80px;
`,Xh=rn.div`
  margin-bottom: 32px;
`,Kh=rn.h1`
  font-size: 42px;
  font-weight: 800;
  color: #222;
  letter-spacing: -0.02em;
`,ep=rn.p`
  font-size: 14px;
  color: #888;
  margin-top: 6px;
`,tp=rn.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 48px;
  display: inline-block;
  min-width: 220px;
`,np=rn.p`
  font-size: 13px;
  font-weight: 700;
  color: #888;
  margin-bottom: 6px;
`,rp=rn.p`
  font-size: 15px;
  font-weight: 700;
  color: #ab47ff;
`,ip=rn.h2`
  font-size: 24px;
  font-weight: 700;
  color: #222;
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.4;
`,op=rn.span`
  color: #4359fc;
  font-weight: 800;
`,ap=rn.span`
  color: #f53102;
  font-weight: 800;
`,lp=rn.p`
  font-size: 13px;
  color: #888;
  text-align: center;
  margin-bottom: 36px;
`,sp=rn.div`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,cp=rn.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
`,dp=rn.tr`
  background: ${e=>{let{$label:t}=e;return t?"#f8f8f8":"transparent"}};
`,up=rn.td`
  text-align: left;
  font-weight: 700;
  color: #333;
  padding: 6px 4px;
  font-size: 13px;
`,hp=rn.td`
  text-align: center;
  padding: 5px 2px;
  color: #555;
  font-weight: ${e=>{let{$bold:t}=e;return t?"700":"400"}};
`,pp=rn.p`
  font-size: 18px;
  font-weight: 700;
  color: #222;
  text-align: center;
  margin-bottom: 10px;
`,fp=rn.span`
  color: #f53102;
  font-weight: 800;
  font-size: 20px;
`,gp=rn.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`,mp=rn.div`
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 32px;
`,xp=rn.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Cp=rn.p`
  font-size: 15px;
  font-weight: 700;
  color: #333;
`,bp=rn.p`
  font-size: 13px;
  font-weight: 600;
  color: #888;
`,vp=rn.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,yp=rn.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ab47ff;
  flex-shrink: 0;
`,wp=rn.p`
  flex: 1;
  font-size: 14px;
  color: #333;
`,Ep=rn.p`
  font-size: 14px;
  font-weight: 700;
  color: #f53102;
`,jp=rn.hr`
  border: none;
  border-top: 1px solid #f0f0f0;
  margin: 0;
`,Sp=rn.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #555;
  line-height: 1.6;
`,kp=rn.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ab47ff;
  flex-shrink: 0;
  margin-top: 5px;
`,Ap=rn.span`
  color: #f53102;
  font-weight: 700;
`,Tp=rn.button`
  background: none;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  color: #666;
  cursor: pointer;

  &:hover {
    border-color: #ab47ff;
    color: #ab47ff;
  }
`,Lp={id:1,title:"9\uae09 \uacf5\ubb34\uc6d0 \ud569\uaca9\ud558\uae30"},Fp=[{id:1,title:"9\uae09\uacf5\ubb34\uc6d0 \ud569\uaca9\ud558\uae30",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70},{id:2,title:"\uac74\uac15\ud558\uac8c \uc0b4\uae30",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70},{id:3,title:"\uc131\uacf5\uc801\uc778 \uc0b6 \uc0b4\uae30",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70},{id:4,title:"\ubcf4\ub514\ube4c\ub529 \ub300\ud68c \uc900\ube44",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70},{id:5,title:"\ubc25 \uba39\uae30",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70},{id:6,title:"\ud558\ud558",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70},{id:7,title:"\uc9c4\uc9dc\uc6c3\uaca8",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70}],Ip=[{id:1,year:"2026",month:"1\uc6d4",projectTitle:"1\ubc88 \ud504\ub85c\uc81d\ud2b8",description:"\uc778\uac15 \uc2dc\uccad 50% \ub2e8\ucd95 & \ub2e8\uc6d0\ubcc4 \uae30\ucd9c \ud480\uc774 \ubcd1\ud589\ud574\uc11c \ud558\uae30\ub97c \ub178\ub825. \ub450\ubc88\uc9f8 \uc904\uae4c\uc9c0 \ud45c\uc2dc \ub420\uac70\uc5d0\uc694",bullets:["\uc2e4\ud328 \ubd84\uc11d \ubcf4\uae30","\uc2e4\ub0b4 \ub300\uccb4\uacc4\ud68d \ucd94\uac00","\uc8fc\ub9d0 \uae30\uc900 \uc644\ud654","\ubb50\ub4e0 \ud589\ub3d9 \ucd94\ucc9c"],images:["https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop"]},{id:2,year:"2026",month:"2\uc6d4",projectTitle:"2\ubc88 \ud504\ub85c\uc81d\ud2b8",description:"\uc778\uac15 \uc2dc\uccad 50% \ub2e8\ucd95 & \ub2e8\uc6d0\ubcc4 \uae30\ucd9c \ud480\uc774 \ubcd1\ud589\ud574\uc11c \ud558\uae30\ub97c \ub178\ub825. \ub450\ubc88\uc9f8 \uc904\uae4c\uc9c0 \ud45c\uc2dc \ub420\uac70\uc5d0\uc694",bullets:["\uc2e4\ud328 \ubd84\uc11d \ubcf4\uae30","\uc2e4\ub0b4 \ub300\uccb4\uacc4\ud68d \ucd94\uac00","\uc8fc\ub9d0 \uae30\uc900 \uc644\ud654","\ubb50\ub4e0 \ud589\ub3d9 \ucd94\ucc9c"],images:["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"]},{id:3,year:"2025",month:"5\uc6d4",projectTitle:"3\ubc88 \ud504\ub85c\uc81d\ud2b8",description:"\uc778\uac15 \uc2dc\uccad 50% \ub2e8\ucd95 & \ub2e8\uc6d0\ubcc4 \uae30\ucd9c \ud480\uc774 \ubcd1\ud589\ud574\uc11c \ud558\uae30\ub97c \ub178\ub825. \ub450\ubc88\uc9f8 \uc904\uae4c\uc9c0 \ud45c\uc2dc \ub420\uac70\uc5d0\uc694",bullets:["\uc2e4\ud328 \ubd84\uc11d \ubcf4\uae30","\uc2e4\ub0b4 \ub300\uccb4\uacc4\ud68d \ucd94\uac00","\uc8fc\ub9d0 \uae30\uc900 \uc644\ud654","\ubb50\ub4e0 \ud589\ub3d9 \ucd94\ucc9c"],images:["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop"]}],Op={nickname:"\ube68\uac15\uc774",percentile:1.7,totalChecklists:176,avgUserChecklists:104,top3Checklists:[{text:"\uc6b4\ub3d9\ubcf5\uacfc \ubb3c\uc744 \uc790\uae30 \uc804\uc5d0 \ubbf8\ub9ac \uc900\ube44\ud558\uae30",count:15},{text:"\uac08\ub4f1 \uc0c1\ud669\uc5d0\uc11c 24\uc2dc\uac04 \ud6c4 \uacb0\uc815\ud558\uae30",count:7},{text:"\uc77c\uc744 3\uac1c \ub2e8\uc704\ub85c \ub098\ub220\uc11c \uc2dc\uac04 \ubc30\ubd84\ud558\uae30",count:5}],avgDays:197,aiUsageRate:23,projectCount:15},Rp=()=>{const[e,t]=(0,r.useState)("timeline"),[n,i]=(0,r.useState)(Fp[0]),o=()=>t("result");return"loading"===e?(0,Co.jsx)(kh,{vision:Lp,analysis:Op,onDone:o}):"result"===e?(0,Co.jsx)(qh,{vision:Lp,analysis:Op,onBack:()=>t("timeline")}):(0,Co.jsx)(Bu,{vision:Lp,projects:Fp,timeline:Ip,selectedProject:n,onSelectProject:i,onStartAnalysis:()=>t("loading")})},Np=()=>(0,Co.jsx)(Rp,{}),Pp=()=>(0,Co.jsx)($i,{});const zp=n.p+"static/media/la_arrow-up.94ec16c355fdde75489ec5c3ac297700.svg";const $p=n.p+"static/media/check-small.d4615b72df3b3bb062fca9a0ec8faca5.svg",Dp=[{id:1,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"B \ud22c\uc790\uc0ac \ubbf8\ud305 \uac70\uc808",desc:"\ubbf8\ud305 \uc131\uacf5\uc73c\ub85c \uc218\ucd9c\uc561 \uc62c\ub9ac\uae30",date:"2024.03.15 \uc791\uc131"},{id:2,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"A \ud22c\uc790\uc0ac \ubbf8\ud305 \uac70\uc808",desc:"\ubbf8\ud305 \uc131\uacf5\uc73c\ub85c \uc218\ucd9c\uc561 \uc62c\ub9ac\uae30",date:"2023.11.02 \uc791\uc131"},{id:3,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"C \ud22c\uc790\uc0ac \ubbf8\ud305 \uac70\uc808",desc:"\ubbf8\ud305 \uc131\uacf5\uc73c\ub85c \uc218\ucd9c\uc561 \uc62c\ub9ac\uae30",date:"2023.11.02 \uc791\uc131"}],Bp=["\uc0ac\uc5c5/\ucc3d\uc5c5","\uacf5\ubd80/\ucde8\uc5c5","\uc778\uac04\uad00\uacc4","\uac74\uac15/\ub8e8\ud2f4","\uae30\ud0c0"],Mp={};Mp.Overlay=rn.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    ${Ca}
`,Mp.ModalWrap=rn.div`
    width: 520px;
    background: ${xn.PALETTE.white};
    border-radius: 15px;
    padding: 40px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`,Mp.CloseBtn=rn.button`
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 20px;
    color: ${xn.GRAYSCALE[7]};
`,Mp.TitleRow=rn.div`
    margin-bottom: 24px;
`,Mp.Title=rn.h2`
    ${Ra}
    color: ${xn.PALETTE.black};
`,Mp.CategoryRow=rn.div`
    ${wa}
    gap: 8px;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${xn.GRAYSCALE[3]};
`,Mp.CategoryChip=rn.button`
    padding: 8px 16px;
    border-radius: 10px;
    ${Qa}
    background: ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.PALETTE.white}};
    color: ${e=>{let{$active:t}=e;return t?xn.PALETTE.white:xn.GRAYSCALE[9]}};
    border: 1px solid ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[4]}};
`,Mp.LogList=rn.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
`,Mp.LogCard=rn.div`
    ${ya}
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[4]}};
    background: ${xn.PALETTE.white};
`,Mp.LogCategory=rn.span`
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    ${tl}
    background: ${xn.PALETTE.third.light};
    color: ${xn.PALETTE.third.main};
    margin-bottom: 8px;
`,Mp.LogTitle=rn.p`
    ${Za}
    color: ${xn.GRAYSCALE[9]};
    margin-bottom: 8px;

    strong {
        ${_a}
        color: ${xn.PALETTE.black};
    }
`,Mp.LogDate=rn.p`
    ${Va}
    color: ${xn.GRAYSCALE[7]};
`,Mp.RadioCircle=rn.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    ${Ca}
    border: 1px solid ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[4]}};
    background-color: ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.PALETTE.white}};
`,Mp.CheckIcon=rn.img`
    width: 14px;
    height: 14px;
    filter: brightness(0) invert(1);
`,Mp.SubmitBtn=rn.button`
    width: 100%;
    height: 52px;
    border-radius: 10px;
    background: ${xn.PALETTE.third.main};
    color: ${xn.PALETTE.white};
    ${_a}

    &:hover {
        background: #9333ea;
    }
`;const Hp=e=>{let{onClose:t,onNext:n}=e;const[i,o]=(0,r.useState)("\uc0ac\uc5c5/\ucc3d\uc5c5"),[a,l]=(0,r.useState)(1);return(0,Co.jsx)(Mp.Overlay,{children:(0,Co.jsxs)(Mp.ModalWrap,{children:[(0,Co.jsx)(Mp.CloseBtn,{onClick:t,children:"\u2715"}),(0,Co.jsx)(Mp.TitleRow,{children:(0,Co.jsx)(Mp.Title,{children:"\uc5b4\ub5a4 \ud398\uc77c\ub85c\uadf8\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud560 \uacc4\ud68d\uc778\uac00\uc694?"})}),(0,Co.jsx)(Mp.CategoryRow,{children:Bp.map(e=>(0,Co.jsx)(Mp.CategoryChip,{$active:i===e,onClick:()=>o(e),children:e},e))}),(0,Co.jsx)(Mp.LogList,{children:Dp.map(e=>(0,Co.jsxs)(Mp.LogCard,{$active:a===e.id,onClick:()=>l(e.id),children:[(0,Co.jsxs)("div",{children:[(0,Co.jsx)(Mp.LogCategory,{children:e.category}),(0,Co.jsxs)(Mp.LogTitle,{children:[(0,Co.jsx)("strong",{children:e.title})," - ",e.desc]}),(0,Co.jsx)(Mp.LogDate,{children:e.date})]}),(0,Co.jsx)(Mp.RadioCircle,{$active:a===e.id,children:a===e.id&&(0,Co.jsx)(Mp.CheckIcon,{src:$p,alt:"check"})})]},e.id))}),(0,Co.jsx)(Mp.SubmitBtn,{onClick:()=>{n({faillogId:a})},children:"\uc774 \ub85c\uadf8\uc758 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30"})]})})},Gp={};Gp.Overlay=rn.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.4);
	z-index: 1000;
	${Ca}
`,Gp.ModalWrap=rn.div`
	width: 480px;
	background: ${xn.PALETTE.white};
	border-radius: 15px;
	padding: 40px;
	position: relative;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`,Gp.CloseBtn=rn.button`
	position: absolute;
	top: 24px;
	right: 24px;
	font-size: 20px;
	color: ${xn.GRAYSCALE[7]};
`,Gp.Header=rn.div`
	margin-bottom: 32px;
`,Gp.Title=rn.h2`
	${Ra}
	color: ${xn.PALETTE.black};
	margin-bottom: 12px;
`,Gp.Subtitle=rn.p`
	${Va}
	color: ${xn.GRAYSCALE[8]};
	line-height: 1.4;
`,Gp.OptionList=rn.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 32px;
`,Gp.OptionCard=rn.div`
	${ya}
	padding: 24px 20px;
	border-radius: 10px;
	cursor: pointer;
	border: 1px solid ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[4]}};
	background: ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.light:xn.PALETTE.white}};
`,Gp.OptionLabel=rn.p`
	${Qa}
	color: ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[8]}};
	margin-bottom: 6px;
`,Gp.OptionDesc=rn.p`
	${_a}
	color: ${xn.PALETTE.black};
`,Gp.RadioCircle=rn.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	${Ca}
	border: 1px solid ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.GRAYSCALE[4]}};
	background-color: ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:xn.PALETTE.white}};
`,Gp.CheckIcon=rn.img`
	width: 14px;
	height: 14px;
	filter: brightness(0) invert(1);
`,Gp.SubmitBtn=rn.button`
	width: 100%;
	height: 52px;
	border-radius: 10px;
	background: ${xn.PALETTE.third.main};
	color: ${xn.PALETTE.white};
	${_a}

	&:hover {
		background: #9333ea;
	}
`;const Wp=e=>{let{onClose:t,onNext:n}=e;const[i,o]=(0,r.useState)("ai");return(0,Co.jsx)(Gp.Overlay,{children:(0,Co.jsxs)(Gp.ModalWrap,{children:[(0,Co.jsx)(Gp.CloseBtn,{onClick:t,children:"\u2715"}),(0,Co.jsxs)(Gp.Header,{children:[(0,Co.jsx)(Gp.Title,{children:"CREATE PROJECT"}),(0,Co.jsxs)(Gp.Subtitle,{children:["\uc0c8\ub85c\uc6b4 \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4\uc5b4 \ub4dc\ub9b4\uac8c\uc694.",(0,Co.jsx)("br",{}),"\uc544\ub798\uc5d0\uc11c \uc120\ud0dd\uc0ac\ud56d\uc5d0 \uccb4\ud06c \ud574\uc8fc\uc138\uc694"]})]}),(0,Co.jsxs)(Gp.OptionList,{children:[(0,Co.jsxs)(Gp.OptionCard,{$active:"ai"===i,onClick:()=>o("ai"),children:[(0,Co.jsxs)("div",{children:[(0,Co.jsx)(Gp.OptionLabel,{$active:"ai"===i,children:"AI \uae30\ub2a5"}),(0,Co.jsx)(Gp.OptionDesc,{children:"AI \ub3c4\uc6c0\uc744 \ubc1b\uc544 \ud504\ub85c\uc81d\ud2b8 \uc791\uc131\ud558\uae30"})]}),(0,Co.jsx)(Gp.RadioCircle,{$active:"ai"===i,children:"ai"===i&&(0,Co.jsx)(Gp.CheckIcon,{src:$p,alt:"check"})})]}),(0,Co.jsxs)(Gp.OptionCard,{$active:"direct"===i,onClick:()=>o("direct"),children:[(0,Co.jsx)("div",{children:(0,Co.jsx)(Gp.OptionDesc,{children:"\uc9c1\uc811 \ud504\ub85c\uc81d\ud2b8 \uc791\uc131\ud558\uae30"})}),(0,Co.jsx)(Gp.RadioCircle,{$active:"direct"===i,children:"direct"===i&&(0,Co.jsx)(Gp.CheckIcon,{src:$p,alt:"check"})})]})]}),(0,Co.jsx)(Gp.SubmitBtn,{onClick:()=>{n({creationType:i})},children:"\ud504\ub85c\uc81d\ud2b8 \uc791\uc131\ud558\uae30"})]})})},Up={};Up.Overlay=rn.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    ${Ca}
`,Up.ModalWrap=rn.div`
    width: 480px;
    background: ${xn.PALETTE.white};
    border-radius: 15px;
    padding: 40px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`,Up.CloseBtn=rn.button`
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 20px;
    color: ${xn.GRAYSCALE[7]};
`,Up.Header=rn.div`
    margin-bottom: 32px;
`,Up.Title=rn.h2`
    ${Ra}
    color: ${xn.PALETTE.black};
    margin-bottom: 12px;
`,Up.Subtitle=rn.p`
    ${Va}
    color: ${xn.GRAYSCALE[8]};
    line-height: 1.4;
`,Up.Form=rn.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 36px;
`,Up.InputGroup=rn.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Up.Label=rn.label`
    ${_a}
    color: ${xn.PALETTE.black};
`,Up.InputWrapper=rn.div`
    position: relative;
    width: 100%;
`,Up.Input=rn.input`
    width: 100%;
    height: 48px;
    border-radius: 10px;
    border: 1px solid ${xn.GRAYSCALE[4]};
    padding: 0 16px;
    ${Va}
    color: ${xn.PALETTE.black};
    outline: none;
    font-family: 'pretendard', sans-serif;

    &::placeholder {
        color: ${xn.GRAYSCALE[6]};
    }

    &:focus {
        border-color: ${xn.PALETTE.third.main};
    }
`,Up.SubmitBtn=rn.button`
    width: 100%;
    height: 52px;
    border-radius: 10px;
    background: ${xn.PALETTE.third.main};
    color: ${xn.PALETTE.white};
    ${_a}

    &:hover {
        background: #9333ea;
    }
`;const _p=e=>{let{onClose:t,onSubmit:n,projectName:i,isActive:o}=e;const[a,l]=(0,r.useState)(i||""),[s,c]=(0,r.useState)(""),[d,u]=(0,r.useState)(""),[h,p]=(0,r.useState)(null===o||void 0===o||o);return(0,Co.jsx)(Up.Overlay,{children:(0,Co.jsxs)(Up.ModalWrap,{children:[(0,Co.jsx)(Up.CloseBtn,{onClick:t,children:"\u2715"}),(0,Co.jsxs)(Up.Header,{children:[(0,Co.jsx)(Up.Title,{children:"CREATE PROJECT"}),(0,Co.jsxs)(Up.Subtitle,{children:["AI\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",(0,Co.jsx)("br",{}),"\uc6d0\ud65c\ud55c \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\uc744 \uc704\ud574 \ud504\ub85c\uc81d\ud2b8\uc758 \uc774\ub984\uc744 \uae30\uc785\ud574 \uc8fc\uc138\uc694"]})]}),(0,Co.jsxs)(Up.Form,{children:[(0,Co.jsxs)(Up.InputGroup,{children:[(0,Co.jsx)(Up.Label,{children:"\ud504\ub85c\uc81d\ud2b8 \uc774\ub984"}),(0,Co.jsx)(Up.Input,{type:"text",placeholder:"\ud504\ub85c\uc81d\ud2b8 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:a,onChange:e=>l(e.target.value)})]}),(0,Co.jsxs)(Up.InputGroup,{children:[(0,Co.jsx)(Up.Label,{children:"\uc2dc\uc791\uc77c"}),(0,Co.jsx)(Up.InputWrapper,{children:(0,Co.jsx)(Up.Input,{type:"date",value:s,onChange:e=>c(e.target.value)})})]}),(0,Co.jsxs)(Up.InputGroup,{children:[(0,Co.jsx)(Up.Label,{children:"\uc885\ub8cc\uc77c"}),(0,Co.jsx)(Up.InputWrapper,{children:(0,Co.jsx)(Up.Input,{type:"date",value:d,onChange:e=>u(e.target.value)})})]})]}),(0,Co.jsx)(Up.SubmitBtn,{onClick:()=>{n({projectName:a,startDate:s,endDate:d,isActive:h})},children:"\uc0dd\uc131\ud558\uae30"})]})})},Zp=e=>{var t;let{onClose:n,onSubmit:i,initialData:o={}}=e;const[a,l]=(0,r.useState)(o.projectName||""),[s,c]=(0,r.useState)(null===(t=o.isActive)||void 0===t||t),[d,u]=(0,r.useState)(o.startDate||""),[h,p]=(0,r.useState)(o.endDate||"");return(0,Co.jsx)("div",{children:(0,Co.jsxs)("div",{children:[(0,Co.jsx)("button",{onClick:n,children:"\u2715"}),(0,Co.jsx)("h2",{children:"EDIT PROJECT"}),(0,Co.jsxs)("p",{children:["\ud504\ub85c\uc81d\ud2b8\ub97c \uc218\uc815\ud569\ub2c8\ub2e4.",(0,Co.jsx)("br",{}),"\uc218\uc815\ud560 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"]}),(0,Co.jsxs)("div",{children:[(0,Co.jsx)("label",{children:"\ud504\ub85c\uc81d\ud2b8 \uc774\ub984"}),(0,Co.jsx)("input",{type:"text",placeholder:"\ud504\ub85c\uc81d\ud2b8 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:a,onChange:e=>l(e.target.value)})]}),(0,Co.jsxs)("div",{children:[(0,Co.jsx)("label",{children:"\uc2dc\uc791\uc77c"}),(0,Co.jsx)("input",{type:"date",placeholder:"\uc2dc\uc791 \ub0a0\uc9dc\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",value:d,onChange:e=>u(e.target.value)})]}),(0,Co.jsxs)("div",{children:[(0,Co.jsx)("label",{children:"\uc885\ub8cc\uc77c"}),(0,Co.jsx)("input",{type:"date",placeholder:"\uc885\ub8cc \ub0a0\uc9dc\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",value:h,onChange:e=>p(e.target.value)})]}),(0,Co.jsxs)("div",{children:[(0,Co.jsx)("label",{children:"\ud65c\uc131\ud654 \uc0c1\ud0dc"}),(0,Co.jsx)("input",{type:"checkbox",checked:s,onChange:e=>c(e.target.checked)})]}),(0,Co.jsx)("button",{onClick:()=>{i({projectName:a,isActive:s,startDate:d,endDate:h}),n()},children:"\uc218\uc815\ud558\uae30"})]})})},Yp=ho(mo(po({projects:[{id:1,name:"\ub9e4\uc77c \uc544\uce68 20\ubd84 \ub8e8\ud2f4 \ub9cc\ub4e4\uae30",startDate:"2026-03-01",endDate:"2027-03-14",description:"\ubaa9\ud45c\ub97c \uc704\ud574 \ub2ec\ub9b0\uc9c0",isActive:!0,checklists:[{id:1,title:"\uc6b4\ub3d9\ubcf5\uacfc \ubb3c\uc744 \uc790\uae30 \uc804\uc5d0 \ubbf8\ub9ac \uc900\ube44\ud558\uae30",desc:"\uc544\uce68 \uc2e4\ud589 \uc804 \uc0dd\uac01\ud560 \uc694\uc18c\ub97c \uc904\uc5ec \uc2dc\uc791 \ud5c8\ub4e4\uc744 \ub0ae\ucda5\ub2c8\ub2e4.",priority:"\uc6b0\uc120\uc21c\uc704 \ub192\uc74c"},{id:2,title:"\uac08\ub4f1 \uc0c1\ud669\uc5d0\uc11c 24\uc2dc\uac04 \ud6c4 \uacb0\uc815\ud558\uae30",desc:"\uc989\uac01 \ubc18\uc751 \ub300\uc2e0 \ud558\ub8e8 \ub4a4 \ub2e4\uc2dc \uc0dd\uac01\ud558\ub294 \uaddc\uce59\uc744 \ub9cc\ub4e4\uace0 \uc9c0\ud0b5\ub2c8\ub2e4.",priority:"\uc6b0\uc120\uc21c\uc704 \uc911\uac04"},{id:3,title:"\uc77c\uc744 3\uac1c \ub2e8\uc704\ub85c \ub098\ub220\uc11c \uc2dc\uac04 \ubc30\ubd84\ud558\uae30",desc:"\uc989\uac01 \ubc18\uc751 \ub300\uc2e0 \ud558\ub8e8 \ub4a4 \ub2e4\uc2dc \uc0dd\uac01\ud558\ub294 \uaddc\uce59\uc744 \ub9cc\ub4e4\uace0 \uc9c0\ud0b5\ub2c8\ub2e4.",priority:"\uc6b0\uc120\uc21c\uc704 \ub0ae\uc74c"}]}]},e=>({addProject:t=>e(e=>({projects:[...e.projects,{...t,id:Date.now(),checklists:[]}]})),updateProject:(t,n)=>e(e=>({projects:e.projects.map(e=>e.id===t?{...e,...n}:e)}))})),{name:"project-storage"})),Qp=Yp,Vp=[{id:1,name:"\ud558\ub8e8 1\uc2dc\uac04 \uc601\uc5b4 \ub4e3\uae30 \ud6c8\ub828",owner:"\uc601\uc5b4\uc6d0\uc8fc\ubbfc",ownerInitial:"\uc601",ownerColor:xn.PALETTE.third.main,dDay:"D+45",tags:["\ubbf8\ub4dc \ud31f\uce90\uc2a4\ud2b8 \uc815\ubcf5","\uc790\uae30 \uc804 \uc100\ub3c4\uc789\ud558\uae30"],accentColor:xn.PALETTE.third.main},{id:2,name:"\ub9e4\uc77c \uc0c8\ubcbd 5\uc2dc \uae30\uc0c1 \ud504\ub85c\uc81d\ud2b8",owner:"\uc601\uc5b4\uc6d0\uc8fc\ubbfc",ownerInitial:"\uc601",ownerColor:xn.PALETTE.fifth.main,dDay:"D+45",tags:["\uc0c8\ubcbd \uae30\uc0c1 \uc2a4\ud130\ub514 \ucc38\uc5ec","\ubaa8\ub2dd \uc2a4\ud2b8\ub808\uce6d"],accentColor:xn.PALETTE.fifth.main},{id:3,name:"\uc624\uc804 6\uc2dc \uae30\uc0c1 + 1\uc2dc\uac04 \uacf5\ubd80 \ub8e8\ud2f4",owner:"\uc601\uc5b4\uc6d0\uc8fc\ubbfc",ownerInitial:"\uc601",ownerColor:xn.PALETTE.yellow,dDay:"D+45",tags:["\uae30\uc0c1 \uc9c1\ud6c4 \ub8e8\ud2f4 \ud504\ub85c\uadf8\ub7a8","\uc544\uce68 \uacf5\ubd80\ubc95"],accentColor:xn.PALETTE.yellow},{id:4,name:"\uc8fc 5\uc77c \uc6b4\ub3d9 + \uc2dd\ub2e8 \uae30\ub85d",owner:"\uc601\uc5b4\uc6d0\uc8fc\ubbfc",ownerInitial:"\uc601",ownerColor:xn.PALETTE.secondary.main,dDay:"D+45",tags:["\uae30\uc0c1 \uc9c1\ud6c4 \ub8e8\ud2f4 \ud504\ub85c\uadf8\ub7a8","\uc544\uce68 \uacf5\ubd80\ubc95"],accentColor:xn.PALETTE.secondary.main},{id:5,name:"\ud55c \ub2ec\uc5d0 \ucc45 4\uad8c \uc77d\uae30",owner:"\uc601\uc5b4\uc6d0\uc8fc\ubbfc",ownerInitial:"\uc601",ownerColor:xn.PALETTE.primary.main,dDay:"D+45",tags:["\uc8fc\ub9d0 \ub3c4\uc11c\uad00 \ud22c\uc5b4","\uc790\ud22c\ub9ac \uc2dc\uac04 \ub3c5\uc11c \uc2b5\uad00\ud654"],accentColor:xn.PALETTE.primary.main},{id:6,name:"\ub9e4\uc77c \ubc24 10\ubd84 \uc601\uc0c1 \ub8e8\ud2f4",owner:"\uc601\uc5b4\uc6d0\uc8fc\ubbfc",ownerInitial:"\uc601",ownerColor:xn.PALETTE.fourth.main,dDay:"D+45",tags:["\uc218\uba74 \ud658\uacbd \ucd5c\uc801\ud654 \uc138\ud305","\uc601\uc0c1 100\uc77c \ucc4c\ub9b0\uc9c0"],accentColor:xn.PALETTE.fourth.main}],qp=()=>(0,Co.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,Co.jsx)("path",{d:"M2.5 5C2.5 4.45 2.95 4 3.5 4H6.5L7.5 5H12.5C13.05 5 13.5 5.45 13.5 6V11.5C13.5 12.05 13.05 12.5 12.5 12.5H3.5C2.95 12.5 2.5 12.05 2.5 11.5V5Z",stroke:xn.GRAYSCALE[10],strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"})}),Jp=e=>{let{project:t,$community:n,onClick:r}=e;return(0,Co.jsx)(Kp.CardWrapper,{children:(0,Co.jsxs)(Kp.Card,{onClick:()=>!n&&(null===r||void 0===r?void 0:r(t)),children:[(0,Co.jsx)(Kp.AccentBar,{$color:t.accentColor||xn.PALETTE.third.main}),(0,Co.jsxs)(Kp.CardContent,{children:[(0,Co.jsxs)(Kp.CardTop,{children:[(0,Co.jsxs)(Kp.OwnerRow,{children:[(0,Co.jsx)(Kp.OwnerAvatar,{$color:t.ownerColor||xn.PALETTE.third.main,children:t.ownerInitial||"\ub098"}),(0,Co.jsx)(Kp.OwnerName,{children:t.owner||"\ub098\uc758 \ud504\ub85c\uc81d\ud2b8"})]}),!n&&(0,Co.jsx)(Kp.DDay,{children:t.dDay||"D-Day"})]}),(0,Co.jsx)(Kp.CardTitle,{children:t.name}),(0,Co.jsx)(Kp.TagRow,{children:(t.tags||[]).map((e,t)=>(0,Co.jsxs)(Kp.Tag,{children:[(0,Co.jsx)(qp,{}),e]},t))})]})]})})},Xp=e=>{let{minPage:t=1,maxPage:n=10,currentPage:r,onPageChange:i}=e;const o=5*Math.floor((r-t)/5)+t,a=[];for(let c=o;c<=Math.min(o+4,n);c++)a.push(c);const l=o>t,s=o+5<=n;return(0,Co.jsxs)(Kp.PaginationWrapper,{children:[(0,Co.jsx)(Kp.NavButton,{onClick:()=>l&&i(o-1),disabled:!l,children:(0,Co.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",children:(0,Co.jsx)("path",{d:"M7 1L1 7L7 13",stroke:l?xn.GRAYSCALE[9]:xn.GRAYSCALE[4],strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.map(e=>(0,Co.jsx)(Kp.PageButton,{$active:e===r,onClick:()=>i(e),children:(0,Co.jsx)("span",{style:{color:e===r?xn.PALETTE.white:xn.PALETTE.black,fontWeight:e===r?700:400},children:e})},e)),(0,Co.jsx)(Kp.NavButton,{onClick:()=>s&&i(o+5),disabled:!s,children:(0,Co.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",children:(0,Co.jsx)("path",{d:"M1 1L7 7L1 13",stroke:s?xn.GRAYSCALE[9]:xn.GRAYSCALE[4],strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},Kp={};Kp.PageWrapper=rn.div`
	min-height: 100vh;
	background-color: ${xn.PALETTE.white};
`,Kp.Inner=rn.div`
	max-width: 1320px;
	margin: 0 auto;
	padding: 0 60px;
`,Kp.PageHeader=rn.div`
	padding-top: 80px;
	padding-bottom: 28px;
`,Kp.PageTitle=rn.h2`
	${Fa}
	color: ${xn.PALETTE.black};
	margin-bottom: 10px;
`,Kp.SubtitleRow=rn.div`
	${ya}
	align-items: center;
`,Kp.PageSubtitle=rn.p`
	${$a}
	color: ${xn.GRAYSCALE[9]};
`,Kp.BtnCreate=rn.button`
	${_a}
	width: 120px;
	height: 40px;
	border-radius: 10px;
	border: 1px solid ${xn.GRAYSCALE[4]};
	background: ${xn.PALETTE.white};
	color: ${xn.GRAYSCALE[10]};
	transition: all 0.15s ease;
	&:hover {
		border-color: ${xn.PALETTE.third.main};
		color: ${xn.PALETTE.third.main};
	}
	&:active {
		background: ${xn.PALETTE.third.main};
		color: ${xn.PALETTE.white};
		transform: scale(0.98);
	}
`,Kp.MyProjectsSection=rn.div`
	position: relative;
	padding: 40px 0 120px;
`,Kp.CarouselWrap=rn.div`
	position: relative;
`,Kp.CardGrid=rn.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 24px;
	row-gap: 50px;
`,Kp.ArrowBtn=rn.button`
	${Ca}
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 1px solid ${xn.GRAYSCALE[3]};
	background: ${xn.PALETTE.white};
	color: ${xn.GRAYSCALE[10]};
	font-size: 40px;
	z-index: 1;
	transition: all 0.15s ease;
	&:first-child { left: -100px; }
	&:last-child { right: -100px; }
	&:hover:not(:disabled) {
		background: ${xn.GRAYSCALE[1]};
		border-color: ${xn.GRAYSCALE[6]};
	}
	&:disabled { opacity: 0.3; cursor: default; }
`,Kp.CardWrapper=rn.div`
	position: relative;
`,Kp.Card=rn.div`
	display: flex;
	flex-direction: row;
	height: 180px;
	background: ${xn.PALETTE.white};
	border-radius: 15px;
	border: 1px solid ${xn.GRAYSCALE[4]};
	box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
	cursor: pointer;
	overflow: hidden;
	transition: transform 0.2s, box-shadow 0.2s;
	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 16px 40px rgba(171, 71, 255, 0.15);
	}
`,Kp.AccentBar=rn.div`
	width: 4px;
	min-width: 4px;
	background: ${e=>{let{$color:t}=e;return t}};
	flex-shrink: 0;
`,Kp.CardContent=rn.div`
	flex: 1;
	padding: 18px 30px 16px 26px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`,Kp.CardTop=rn.div`
	${ya}
`,Kp.OwnerRow=rn.div`
	${wa}
	gap: 7px;
`,Kp.OwnerAvatar=rn.div`
	${Ca}
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 2px solid ${e=>{let{$color:t}=e;return t}};
	color: ${e=>{let{$color:t}=e;return t}};
	font-size: ${xn.FONT_SIZE.h11};
	font-weight: 700;
	background: ${xn.PALETTE.white};
`,Kp.OwnerName=rn.span`
	${Qa}
	color: ${xn.PALETTE.black};
`,Kp.DDay=rn.span`
	${Ba}
	color: ${xn.PALETTE.black};
`,Kp.CardTitle=rn.p`
	${Ba}
	color: ${xn.PALETTE.black};
	line-height: 1.4;
	display: flex;
	align-items: center;
	flex: 1;
`,Kp.TagRow=rn.div`
	${wa}
	gap: 8px;
	flex-wrap: wrap;
`,Kp.Tag=rn.span`
	${wa}
	gap: 4px;
	height: 28px;
	padding: 0 8px;
	border-radius: 5px;
	background: ${xn.GRAYSCALE[1]};
	font-size: ${xn.FONT_SIZE.h10};
	color: ${xn.GRAYSCALE[10]};
`,Kp.CommunitySection=rn.div`
	background-color: ${xn.GRAYSCALE[1]};
	padding: 120px 0 80px;
`,Kp.SearchRow=rn.div`
	${ya}
	margin-bottom: 100px;
`,Kp.CommunityTitle=rn.h3`
	${Ra}
	color: ${xn.PALETTE.black};
	line-height: 1.4;
`,Kp.SearchBoxWrap=rn.div`
	width: 536px;
	height: 60px;
	border-radius: 15px;
	padding: 2px;
	background: linear-gradient(90deg, ${xn.PALETTE.primary.main}, ${xn.PALETTE.third.main});
`,Kp.SearchBox=rn.div`
	${wa}
	width: 100%;
	height: 100%;
	border-radius: 13px;
	background: ${xn.PALETTE.white};
	padding: 0 12px 0 20px;
	gap: 10px;
`,Kp.SearchInput=rn.input`
	border: none;
	outline: none;
	${Za}
	flex: 1;
	background: transparent;
`,Kp.SearchBtn=rn.button`
	${Ca}
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: linear-gradient(135deg, ${xn.PALETTE.primary.main}, ${xn.PALETTE.third.main});
`,Kp.ArrowIcon=rn.img`
	width: 18px;
	height: 18px;
	filter: brightness(0) invert(1);
`,Kp.CommunityGrid=rn.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 24px;
	row-gap: 50px;
	margin-bottom: 50px;
`,Kp.PaginationWrapper=rn.div`
	${ba}
	gap: 8px;
`,Kp.NavButton=rn.button`
	${Ca}
	width: 36px;
	height: 36px;
	&:disabled { opacity: 0.3; }
`,Kp.PageButton=rn.button`
	${Ca}
	width: 36px;
	height: 36px;
	border-radius: 10px;
	background-color: ${e=>{let{$active:t}=e;return t?xn.PALETTE.third.main:"transparent"}};
`;const ef=()=>{const{projects:e,addProject:t,updateProject:n}=Qp(),[i,o]=(0,r.useState)(null),[a,l]=(0,r.useState)({}),[s,c]=(0,r.useState)(null),[d,u]=(0,r.useState)(1),[h,p]=(0,r.useState)(0),f=e.length>0?e:Vp,g=[...Vp,...Vp].slice(0,12),m=()=>{o(null),c(null),l({})},x=e=>{c(e),o("edit")};return(0,Co.jsxs)(Kp.PageWrapper,{children:["select"===i&&(0,Co.jsx)(Hp,{onClose:m,onNext:e=>{l(t=>({...t,...e})),o("step1")}}),"step1"===i&&(0,Co.jsx)(Wp,{onClose:m,onNext:e=>{l(t=>({...t,...e})),o("step2")}}),"step2"===i&&(0,Co.jsx)(_p,{onClose:m,onSubmit:e=>{t({...a,...e}),m()},projectName:a.projectName}),"edit"===i&&(0,Co.jsx)(Zp,{onClose:m,onSubmit:e=>{s&&n(s.id,{name:e.projectName,startDate:e.startDate,endDate:e.endDate,isActive:e.isActive}),m()},initialData:s?{projectName:s.name,startDate:s.startDate,endDate:s.endDate,isActive:s.isActive}:{}}),(0,Co.jsxs)(Kp.Inner,{children:[(0,Co.jsxs)(Kp.PageHeader,{children:[(0,Co.jsx)(Kp.PageTitle,{children:"Project"}),(0,Co.jsxs)(Kp.SubtitleRow,{children:[(0,Co.jsx)(Kp.PageSubtitle,{children:"\ub098\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \ubaa8\uc544\ubcf4\uc138\uc694."}),(0,Co.jsx)(Kp.BtnCreate,{onClick:()=>o("select"),children:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"})]})]}),(0,Co.jsx)(Kp.MyProjectsSection,{children:(0,Co.jsxs)(Kp.CarouselWrap,{children:[(0,Co.jsx)(Kp.ArrowBtn,{onClick:()=>p(e=>Math.max(e-3,0)),disabled:0===h,children:"\u2039"}),(0,Co.jsx)(Kp.CardGrid,{children:f.slice(h,h+6).map(e=>(0,Co.jsx)(Jp,{project:e,onClick:x},e.id))}),(0,Co.jsx)(Kp.ArrowBtn,{onClick:()=>p(e=>Math.min(e+3,Math.max(0,f.length-6))),disabled:h+6>=f.length,children:"\u203a"})]})})]}),(0,Co.jsx)(Kp.CommunitySection,{children:(0,Co.jsxs)(Kp.Inner,{children:[(0,Co.jsxs)(Kp.SearchRow,{children:[(0,Co.jsx)(Kp.CommunityTitle,{children:"\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \uc131\uc7a5\uacfc\uc815\uc744 \uacf5\uc720\ud558\uace0 \uacbd\ud5d8\ud574\ubcf4\uc138\uc694."}),(0,Co.jsx)(Kp.SearchBoxWrap,{children:(0,Co.jsxs)(Kp.SearchBox,{children:[(0,Co.jsx)(Kp.SearchInput,{placeholder:"\ub2e4\uc591\ud55c \uc131\uc7a5 \uacfc\uc815\uc744 \ud0d0\uc0c9\ud574\ubcf4\uc138\uc694."}),(0,Co.jsx)(Kp.SearchBtn,{children:(0,Co.jsx)(Kp.ArrowIcon,{src:zp,alt:"search"})})]})})]}),(0,Co.jsx)(Kp.CommunityGrid,{children:g.map((e,t)=>(0,Co.jsx)(Jp,{project:{...e,id:t},$community:!0},t))}),(0,Co.jsx)(Xp,{currentPage:d,onPageChange:u,maxPage:10})]})})]})},tf=()=>(0,Co.jsx)("div",{children:"\ube44\uc804\ucee8\ud14c\uc774\ub108"}),nf=function(e,t){return vr({basename:null==t?void 0:t.basename,future:Mi({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(n={window:null==t?void 0:t.window},void 0===n&&(n={}),Ln(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return kn("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:An(t)},null,n)),hydrationData:(null==t?void 0:t.hydrationData)||Ui(),routes:e,mapRouteProperties:Bi,dataStrategy:null==t?void 0:t.dataStrategy,patchRoutesOnNavigation:null==t?void 0:t.patchRoutesOnNavigation,window:null==t?void 0:t.window}).initialize();var n}([{path:"/",element:(0,Co.jsx)(bo,{}),children:[{path:"",element:(0,Co.jsx)(Xo,{})},{path:"fail-logs",element:(0,Co.jsx)(ju,{}),children:[{path:"",element:(0,Co.jsx)(Du,{})}]},{path:"logs",element:(0,Co.jsx)(vo,{}),children:[{path:"new",element:(0,Co.jsx)(td,{}),children:[{path:"step1",element:(0,Co.jsx)(ed,{})},{path:"step2",element:(0,Co.jsx)(Xc,{})}]},{path:"result/:id",element:(0,Co.jsx)(ea,{}),children:[{path:"detail",element:(0,Co.jsx)(ra,{})},{path:"report",element:(0,Co.jsx)(aa,{}),children:[{path:"patterns",element:(0,Co.jsx)(ga,{})},{path:"action-plan",element:(0,Co.jsx)(xa,{})}]}]}]},{path:"community",element:(0,Co.jsx)(Js,{}),children:[{path:"",element:(0,Co.jsx)(Os,{})}]},{path:"community/new",element:(0,Co.jsx)(Xs,{})},{path:"community/detail/:id",element:(0,Co.jsx)(Hc,{})},{path:"community/edit/:id",element:(0,Co.jsx)(Gc,{})},{element:(0,Co.jsx)(gd,{}),children:[{path:"join",element:(0,Co.jsx)(Ed,{})},{path:"login",element:(0,Co.jsx)(Ld,{})},{path:"reset-password",element:(0,Co.jsx)(Od,{})},{path:"find-id",element:(0,Co.jsx)(Pd,{})}]},{path:"my-page",element:(0,Co.jsx)(du,{}),children:[{path:"profile",element:(0,Co.jsx)(ru,{})},{path:"fail-logs",element:(0,Co.jsx)(cu,{})},{path:"likes",element:(0,Co.jsx)(ou,{})},{path:"guestbook",element:(0,Co.jsx)(iu,{})}]},{path:"chronology",element:(0,Co.jsx)(Np,{}),children:[]},{path:"projects",element:(0,Co.jsx)(Pp,{}),children:[{path:"",element:(0,Co.jsx)(ef,{})}]},{path:"vision",element:(0,Co.jsx)(tf,{}),children:[]}]}]),rf=nf;var of={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},af=new class{#e=(()=>of)();#t=!1;setTimeoutProvider(e){this.#e=e}setTimeout(e,t){return this.#e.setTimeout(e,t)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,t){return this.#e.setInterval(e,t)}clearInterval(e){this.#e.clearInterval(e)}};var lf="undefined"===typeof window||"Deno"in globalThis;function sf(){}function cf(e,t){return"function"===typeof e?e(t):e}function df(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:a,stale:l}=e;if(a)if(r){if(t.queryHash!==hf(a,t.options))return!1}else if(!ff(t.queryKey,a))return!1;if("all"!==n){const e=t.isActive();if("active"===n&&!e)return!1;if("inactive"===n&&e)return!1}return("boolean"!==typeof l||t.isStale()===l)&&((!i||i===t.state.fetchStatus)&&!(o&&!o(t)))}function uf(e,t){const{exact:n,status:r,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(pf(t.options.mutationKey)!==pf(o))return!1}else if(!ff(t.options.mutationKey,o))return!1}return(!r||t.state.status===r)&&!(i&&!i(t))}function hf(e,t){return(t?.queryKeyHashFn||pf)(e)}function pf(e){return JSON.stringify(e,(e,t)=>Cf(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}function ff(e,t){return e===t||typeof e===typeof t&&(!(!e||!t||"object"!==typeof e||"object"!==typeof t)&&Object.keys(t).every(n=>ff(e[n],t[n])))}var gf=Object.prototype.hasOwnProperty;function mf(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e===t)return e;if(n>500)return t;const r=xf(e)&&xf(t);if(!r&&(!Cf(e)||!Cf(t)))return t;const i=(r?e:Object.keys(e)).length,o=r?t:Object.keys(t),a=o.length,l=r?new Array(a):{};let s=0;for(let c=0;c<a;c++){const a=r?c:o[c],d=e[a],u=t[a];if(d===u){l[a]=d,(r?c<i:gf.call(e,a))&&s++;continue}if(null===d||null===u||"object"!==typeof d||"object"!==typeof u){l[a]=u;continue}const h=mf(d,u,n+1);l[a]=h,h===d&&s++}return i===a&&s===i?e:l}function xf(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Cf(e){if(!bf(e))return!1;const t=e.constructor;if(void 0===t)return!0;const n=t.prototype;return!!bf(n)&&(!!n.hasOwnProperty("isPrototypeOf")&&Object.getPrototypeOf(e)===Object.prototype)}function bf(e){return"[object Object]"===Object.prototype.toString.call(e)}function vf(e,t,n){return"function"===typeof n.structuralSharing?n.structuralSharing(e,t):!1!==n.structuralSharing?mf(e,t):t}function yf(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=[...e,t];return n&&r.length>n?r.slice(1):r}function wf(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Ef=Symbol();function jf(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:e.queryFn&&e.queryFn!==Ef?e.queryFn:()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))}var Sf=function(e){setTimeout(e,0)};var kf=function(){let e=[],t=0,n=e=>{e()},r=e=>{e()},i=Sf;const o=r=>{t?e.push(r):i(()=>{n(r)})};return{batch:o=>{let a;t++;try{a=o()}finally{t--,t||(()=>{const t=e;e=[],t.length&&i(()=>{r(()=>{t.forEach(e=>{n(e)})})})})()}return a},batchCalls:e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];o(()=>{e(...n)})},schedule:o,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{r=e},setScheduler:e=>{i=e}}}(),Af=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Tf=new class extends Af{#n;#r;#i;constructor(){super(),this.#i=e=>{if("undefined"!==typeof window&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#r||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#r?.(),this.#r=void 0)}setEventListener(e){this.#i=e,this.#r?.(),this.#r=e(e=>{"boolean"===typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.#n!==e&&(this.#n=e,this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return"boolean"===typeof this.#n?this.#n:"hidden"!==globalThis.document?.visibilityState}},Lf=new class extends Af{#o=!0;#r;#i;constructor(){super(),this.#i=e=>{if("undefined"!==typeof window&&window.addEventListener){const t=()=>e(!0),n=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",n)}}}}onSubscribe(){this.#r||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#r?.(),this.#r=void 0)}setEventListener(e){this.#i=e,this.#r?.(),this.#r=e(this.setOnline.bind(this))}setOnline(e){this.#o!==e&&(this.#o=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#o}};var Ff=(()=>{let e=()=>lf;return{isServer:()=>e(),setIsServer(t){e=t}}})();function If(e){return Math.min(1e3*2**e,3e4)}function Of(e){return"online"!==(e??"online")||Lf.isOnline()}var Rf=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function Nf(e){let t,n=!1,r=0;const i=function(){let e,t;const n=new Promise((n,r)=>{e=n,t=r});function r(e){Object.assign(n,e),delete n.resolve,delete n.reject}return n.status="pending",n.catch(()=>{}),n.resolve=t=>{r({status:"fulfilled",value:t}),e(t)},n.reject=e=>{r({status:"rejected",reason:e}),t(e)},n}(),o=()=>"pending"!==i.status,a=()=>Tf.isFocused()&&("always"===e.networkMode||Lf.isOnline())&&e.canRun(),l=()=>Of(e.networkMode)&&e.canRun(),s=e=>{o()||(t?.(),i.resolve(e))},c=e=>{o()||(t?.(),i.reject(e))},d=()=>new Promise(n=>{t=e=>{(o()||a())&&n(e)},e.onPause?.()}).then(()=>{t=void 0,o()||e.onContinue?.()}),u=()=>{if(o())return;let t;const i=0===r?e.initialPromise:void 0;try{t=i??e.fn()}catch(l){t=Promise.reject(l)}Promise.resolve(t).then(s).catch(t=>{if(o())return;const i=e.retry??(Ff.isServer()?0:3),l=e.retryDelay??If,s="function"===typeof l?l(r,t):l,h=!0===i||"number"===typeof i&&r<i||"function"===typeof i&&i(r,t);var p;!n&&h?(r++,e.onFail?.(r,t),(p=s,new Promise(e=>{af.setTimeout(e,p)})).then(()=>a()?void 0:d()).then(()=>{n?c(t):u()})):c(t)})};return{promise:i,status:()=>i.status,cancel:t=>{if(!o()){const n=new Rf(t);c(n),e.onCancel?.(n)}},continue:()=>(t?.(),i),cancelRetry:()=>{n=!0},continueRetry:()=>{n=!1},canStart:l,start:()=>(l()?u():d().then(u),i)}}var Pf=class{#a;destroy(){this.clearGcTimeout()}scheduleGc(){var e;this.clearGcTimeout(),"number"===typeof(e=this.gcTime)&&e>=0&&e!==1/0&&(this.#a=af.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Ff.isServer()?1/0:3e5))}clearGcTimeout(){void 0!==this.#a&&(af.clearTimeout(this.#a),this.#a=void 0)}};function zf(e){return{onFetch:(t,n)=>{const r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,o=t.state.data?.pages||[],a=t.state.data?.pageParams||[];let l={pages:[],pageParams:[]},s=0;const c=async()=>{let n=!1;const c=e=>{!function(e,t,n){let r,i=!1;Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(r??=t(),i||(i=!0,r.aborted?n():r.addEventListener("abort",n,{once:!0})),r)})}(e,()=>t.signal,()=>n=!0)},d=jf(t.options,t.fetchOptions),u=async(e,r,i)=>{if(n)return Promise.reject(t.signal.reason);if(null==r&&e.pages.length)return Promise.resolve(e);const o=(()=>{const e={client:t.client,queryKey:t.queryKey,pageParam:r,direction:i?"backward":"forward",meta:t.options.meta};return c(e),e})(),a=await d(o),{maxPages:l}=t.options,s=i?wf:yf;return{pages:s(e.pages,a,l),pageParams:s(e.pageParams,r,l)}};if(i&&o.length){const e="backward"===i,t={pages:o,pageParams:a},n=(e?Df:$f)(r,t);l=await u(t,n,e)}else{const t=e??o.length;do{const e=0===s?a[0]??r.initialPageParam:$f(r,l);if(s>0&&null==e)break;l=await u(l,e),s++}while(s<t)}return l};t.options.persister?t.fetchFn=()=>t.options.persister?.(c,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=c}}}function $f(e,t){let{pages:n,pageParams:r}=t;const i=n.length-1;return n.length>0?e.getNextPageParam(n[i],n,r[i],r):void 0}function Df(e,t){let{pages:n,pageParams:r}=t;return n.length>0?e.getPreviousPageParam?.(n[0],n,r[0],r):void 0}var Bf=class extends Pf{#l;#s;#c;#d;#u;#h;#p;#f;constructor(e){super(),this.#f=!1,this.#p=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#u=e.client,this.#d=this.#u.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#s=Gf(this.options),this.state=e.state??this.#s,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#l}get promise(){return this.#h?.promise}setOptions(e){if(this.options={...this.#p,...e},e?._type&&(this.#l=e._type),this.updateGcTime(this.options.gcTime),this.state&&void 0===this.state.data){const e=Gf(this.options);void 0!==e.data&&(this.setState(Hf(e.data,e.dataUpdatedAt)),this.#s=e)}}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#d.remove(this)}setData(e,t){const n=vf(this.state.data,e,this.options);return this.#g({data:n,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),n}setState(e){this.#g({type:"setState",state:e})}cancel(e){const t=this.#h?.promise;return this.#h?.cancel(e),t?t.then(sf).catch(sf):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#s}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>{return!1!==(t=e.options.enabled,n=this,"function"===typeof t?t(n):t);var t,n})}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Ef||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0&&this.observers.some(e=>"static"===cf(e.options.staleTime,this))}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):void 0===this.state.data||this.state.isInvalidated}isStaleByTime(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return void 0===this.state.data||"static"!==e&&(!!this.state.isInvalidated||!function(e,t){return Math.max(e+(t||0)-Date.now(),0)}(this.state.dataUpdatedAt,e))}onFocus(){const e=this.observers.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#h?.continue()}onOnline(){const e=this.observers.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#h?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#d.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#h&&(this.#f||this.#m()?this.#h.cancel({revert:!0}):this.#h.cancelRetry()),this.scheduleGc()),this.#d.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}#m(){return"paused"===this.state.fetchStatus&&"pending"===this.state.status}invalidate(){this.state.isInvalidated||this.#g({type:"invalidate"})}async fetch(e,t){if("idle"!==this.state.fetchStatus&&"rejected"!==this.#h?.status())if(void 0!==this.state.data&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#h)return this.#h.continueRetry(),this.#h.promise;if(e&&this.setOptions(e),!this.options.queryFn){const e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}const n=new AbortController,r=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#f=!0,n.signal)})},i=()=>{const e=jf(this.options,t),n=(()=>{const e={client:this.#u,queryKey:this.queryKey,meta:this.meta};return r(e),e})();return this.#f=!1,this.options.persister?this.options.persister(e,n,this):e(n)},o=(()=>{const e={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#u,state:this.state,fetchFn:i};return r(e),e})(),a="infinite"===this.#l?zf(this.options.pages):this.options.behavior;a?.onFetch(o,this),this.#c=this.state,"idle"!==this.state.fetchStatus&&this.state.fetchMeta===o.fetchOptions?.meta||this.#g({type:"fetch",meta:o.fetchOptions?.meta}),this.#h=Nf({initialPromise:t?.initialPromise,fn:o.fetchFn,onCancel:e=>{e instanceof Rf&&e.revert&&this.setState({...this.#c,fetchStatus:"idle"}),n.abort()},onFail:(e,t)=>{this.#g({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#g({type:"pause"})},onContinue:()=>{this.#g({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0});try{const e=await this.#h.start();if(void 0===e)throw new Error(`${this.queryHash} data is undefined`);return this.setData(e),this.#d.config.onSuccess?.(e,this),this.#d.config.onSettled?.(e,this.state.error,this),e}catch(l){if(l instanceof Rf){if(l.silent)return this.#h.promise;if(l.revert){if(void 0===this.state.data)throw l;return this.state.data}}throw this.#g({type:"error",error:l}),this.#d.config.onError?.(l,this),this.#d.config.onSettled?.(this.state.data,l,this),l}finally{this.scheduleGc()}}#g(e){this.state=(t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,...Mf(t.data,this.options),fetchMeta:e.meta??null};case"success":const n={...t,...Hf(e.data,e.dataUpdatedAt),dataUpdateCount:t.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#c=e.manual?n:void 0,n;case"error":const r=e.error;return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),kf.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),this.#d.notify({query:this,type:"updated",action:e})})}};function Mf(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Of(t.networkMode)?"fetching":"paused",...void 0===e&&{error:null,status:"pending"}}}function Hf(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Gf(e){const t="function"===typeof e.initialData?e.initialData():e.initialData,n=void 0!==t,r=n?"function"===typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Wf=class extends Af{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),this.config=e,this.#x=new Map}#x;build(e,t,n){const r=t.queryKey,i=t.queryHash??hf(r,t);let o=this.get(i);return o||(o=new Bf({client:e,queryKey:r,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){this.#x.has(e.queryHash)||(this.#x.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=this.#x.get(e.queryHash);t&&(e.destroy(),t===e&&this.#x.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){kf.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#x.get(e)}getAll(){return[...this.#x.values()]}find(e){const t={exact:!0,...e};return this.getAll().find(e=>df(t,e))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=this.getAll();return Object.keys(e).length>0?t.filter(t=>df(e,t)):t}notify(e){kf.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){kf.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){kf.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Uf=class extends Pf{#u;#C;#b;#h;constructor(e){super(),this.#u=e.client,this.mutationId=e.mutationId,this.#b=e.mutationCache,this.#C=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#C.includes(e)||(this.#C.push(e),this.clearGcTimeout(),this.#b.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#C=this.#C.filter(t=>t!==e),this.scheduleGc(),this.#b.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#C.length||("pending"===this.state.status?this.scheduleGc():this.#b.remove(this))}continue(){return this.#h?.continue()??this.execute(this.state.variables)}async execute(e){const t=()=>{this.#g({type:"continue"})},n={client:this.#u,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#h=Nf({fn:()=>this.options.mutationFn?this.options.mutationFn(e,n):Promise.reject(new Error("No mutationFn found")),onFail:(e,t)=>{this.#g({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#g({type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#b.canRun(this)});const r="pending"===this.state.status,i=!this.#h.canStart();try{if(r)t();else{this.#g({type:"pending",variables:e,isPaused:i}),this.#b.config.onMutate&&await this.#b.config.onMutate(e,this,n);const t=await(this.options.onMutate?.(e,n));t!==this.state.context&&this.#g({type:"pending",context:t,variables:e,isPaused:i})}const o=await this.#h.start();return await(this.#b.config.onSuccess?.(o,e,this.state.context,this,n)),await(this.options.onSuccess?.(o,e,this.state.context,n)),await(this.#b.config.onSettled?.(o,null,this.state.variables,this.state.context,this,n)),await(this.options.onSettled?.(o,null,e,this.state.context,n)),this.#g({type:"success",data:o}),o}catch(o){try{await(this.#b.config.onError?.(o,e,this.state.context,this,n))}catch(Xf){Promise.reject(Xf)}try{await(this.options.onError?.(o,e,this.state.context,n))}catch(Xf){Promise.reject(Xf)}try{await(this.#b.config.onSettled?.(void 0,o,this.state.variables,this.state.context,this,n))}catch(Xf){Promise.reject(Xf)}try{await(this.options.onSettled?.(void 0,o,e,this.state.context,n))}catch(Xf){Promise.reject(Xf)}throw this.#g({type:"error",error:o}),o}finally{this.#b.runNext(this)}}#g(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),kf.batch(()=>{this.#C.forEach(t=>{t.onMutationUpdate(e)}),this.#b.notify({mutation:this,type:"updated",action:e})})}};var _f=class extends Af{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),this.config=e,this.#v=new Set,this.#y=new Map,this.#w=0}#v;#y;#w;build(e,t,n){const r=new Uf({client:e,mutationCache:this,mutationId:++this.#w,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){this.#v.add(e);const t=Zf(e);if("string"===typeof t){const n=this.#y.get(t);n?n.push(e):this.#y.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#v.delete(e)){const t=Zf(e);if("string"===typeof t){const n=this.#y.get(t);if(n)if(n.length>1){const t=n.indexOf(e);-1!==t&&n.splice(t,1)}else n[0]===e&&this.#y.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=Zf(e);if("string"===typeof t){const n=this.#y.get(t),r=n?.find(e=>"pending"===e.state.status);return!r||r===e}return!0}runNext(e){const t=Zf(e);if("string"===typeof t){const n=this.#y.get(t)?.find(t=>t!==e&&t.state.isPaused);return n?.continue()??Promise.resolve()}return Promise.resolve()}clear(){kf.batch(()=>{this.#v.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#v.clear(),this.#y.clear()})}getAll(){return Array.from(this.#v)}find(e){const t={exact:!0,...e};return this.getAll().find(e=>uf(t,e))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.getAll().filter(t=>uf(e,t))}notify(e){kf.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(e=>e.state.isPaused);return kf.batch(()=>Promise.all(e.map(e=>e.continue().catch(sf))))}};function Zf(e){return e.options.scope?.id}var Yf=class{#E;#b;#p;#j;#S;#k;#A;#T;constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.#E=e.queryCache||new Wf,this.#b=e.mutationCache||new _f,this.#p=e.defaultOptions||{},this.#j=new Map,this.#S=new Map,this.#k=0}mount(){this.#k++,1===this.#k&&(this.#A=Tf.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#E.onFocus())}),this.#T=Lf.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#E.onOnline())}))}unmount(){this.#k--,0===this.#k&&(this.#A?.(),this.#A=void 0,this.#T?.(),this.#T=void 0)}isFetching(e){return this.#E.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#b.findAll({...e,status:"pending"}).length}getQueryData(e){const t=this.defaultQueryOptions({queryKey:e});return this.#E.get(t.queryHash)?.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=this.#E.build(this,t),r=n.state.data;return void 0===r?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(cf(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#E.findAll(e).map(e=>{let{queryKey:t,state:n}=e;return[t,n.data]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=this.#E.get(r.queryHash),o=i?.state.data,a=function(e,t){return"function"===typeof e?e(t):e}(t,o);if(void 0!==a)return this.#E.build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return kf.batch(()=>this.#E.findAll(e).map(e=>{let{queryKey:r}=e;return[r,this.setQueryData(r,t,n)]}))}getQueryState(e){const t=this.defaultQueryOptions({queryKey:e});return this.#E.get(t.queryHash)?.state}removeQueries(e){const t=this.#E;kf.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){const n=this.#E;return kf.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e){const t={revert:!0,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}},n=kf.batch(()=>this.#E.findAll(e).map(e=>e.cancel(t)));return Promise.all(n).then(sf).catch(sf)}invalidateQueries(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return kf.batch(()=>(this.#E.findAll(e).forEach(e=>{e.invalidate()}),"none"===e?.refetchType?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t)))}refetchQueries(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n={...t,cancelRefetch:t.cancelRefetch??!0},r=kf.batch(()=>this.#E.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(sf)),"paused"===e.state.fetchStatus?Promise.resolve():t}));return Promise.all(r).then(sf)}fetchQuery(e){const t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);const n=this.#E.build(this,t);return n.isStaleByTime(cf(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(sf).catch(sf)}fetchInfiniteQuery(e){return e._type="infinite",this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(sf).catch(sf)}ensureInfiniteQueryData(e){return e._type="infinite",this.ensureQueryData(e)}resumePausedMutations(){return Lf.isOnline()?this.#b.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#E}getMutationCache(){return this.#b}getDefaultOptions(){return this.#p}setDefaultOptions(e){this.#p=e}setQueryDefaults(e,t){this.#j.set(pf(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...this.#j.values()],n={};return t.forEach(t=>{ff(e,t.queryKey)&&Object.assign(n,t.defaultOptions)}),n}setMutationDefaults(e,t){this.#S.set(pf(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...this.#S.values()],n={};return t.forEach(t=>{ff(e,t.mutationKey)&&Object.assign(n,t.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...this.#p.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=hf(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Ef&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#p.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#E.clear(),this.#b.clear()}},Qf=r.createContext(void 0),Vf=e=>{let{client:t,children:n}=e;return r.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),(0,Co.jsx)(Qf.Provider,{value:t,children:n})};const qf=function(){const e=new Yf;return(0,Co.jsx)(Co.Fragment,{children:(0,Co.jsx)(Vf,{client:e,children:(0,Co.jsxs)(Zt,{theme:xn,children:[(0,Co.jsx)(gn,{}),(0,Co.jsx)(Xi,{router:rf})]})})})},Jf=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then(t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:o,getTTFB:a}=t;n(e),r(e),i(e),o(e),a(e)})};o.createRoot(document.getElementById("root")).render((0,Co.jsx)(qf,{})),Jf()})();
//# sourceMappingURL=main.640a4dd9.js.map