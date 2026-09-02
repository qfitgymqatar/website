(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,9071,t=>{"use strict";var e=t.i(43476),a=t.i(71645),o=t.i(22016),s=t.i(18566),i=t.i(56420);let r=(0,i.default)("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);var n=t.i(82303);let l=(0,i.default)("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);var c=t.i(61479);let f=(0,i.default)("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),d=(0,i.default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),m=(0,i.default)("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);var u=t.i(93583);let y=function(){for(var t,e,a=0,o="",s=arguments.length;a<s;a++)(t=arguments[a])&&(e=function t(e){var a,o,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(a=0;a<i;a++)e[a]&&(o=t(e[a]))&&(s&&(s+=" "),s+=o)}else for(o in e)e[o]&&(s&&(s+=" "),s+=o);return s}(t))&&(o&&(o+=" "),o+=e);return o};var p=t=>"number"==typeof t&&!isNaN(t),g=t=>"string"==typeof t||"function"==typeof t?t:null,_=t=>(0,a.isValidElement)(t)||"string"==typeof t||"function"==typeof t||p(t);function h({enter:t,exit:e,appendPosition:o=!1,collapse:s=!0,collapseDuration:i=300}){return function({children:r,position:n,preventExitTransition:l,done:c,nodeRef:f,isIn:d,playToast:m}){let u=o?`${t}--${n}`:t,y=o?`${e}--${n}`:e,p=(0,a.useRef)(0);return(0,a.useLayoutEffect)(()=>{let t=f.current,e=u.split(" "),a=o=>{o.target===f.current&&(m(),t.removeEventListener("animationend",a),t.removeEventListener("animationcancel",a),0===p.current&&"animationcancel"!==o.type&&t.classList.remove(...e))};t.classList.add(...e),t.addEventListener("animationend",a),t.addEventListener("animationcancel",a)},[]),(0,a.useEffect)(()=>{let t=f.current,e=()=>{t.removeEventListener("animationend",e),s?function(t,e,a=300){let{scrollHeight:o,style:s}=t;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${a}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,a)})})}(t,c,i):c()};d||(l?e():(p.current=1,t.className+=` ${y}`,t.addEventListener("animationend",e)))},[d]),a.default.createElement(a.default.Fragment,null,r)}}function b(t,e){return{content:v(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function v(t,e,o=!1){return(0,a.isValidElement)(t)&&"string"!=typeof t.type?(0,a.cloneElement)(t,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:o}):"function"==typeof t?t({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:o}):t}function T({delay:t,isRunning:e,closeToast:o,type:s="default",hide:i,className:r,controlledProgress:n,progress:l,rtl:c,isIn:f,theme:d}){let m=i||n&&0===l,u={animationDuration:`${t}ms`,animationPlayState:e?"running":"paused"};n&&(u.transform=`scaleX(${l})`);let p=y("Toastify__progress-bar",n?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":c}),g="function"==typeof r?r({rtl:c,type:s,defaultClassName:p}):y(p,r);return a.default.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},a.default.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${s}`}),a.default.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer","aria-valuenow":n?Math.round(100*l):void 0,"aria-valuemin":0,"aria-valuemax":100,className:g,style:u,...{[n&&l>=1?"onTransitionEnd":"onAnimationEnd"]:n&&l<1?null:()=>{f&&o()}}}))}var x=1,k=()=>`${x++}`,w=new Map,E=[],I=new Set,N=t=>I.forEach(e=>e(t));function C(t,e){var a;if(e)return!!(null!=(a=w.get(e))&&a.isToastActive(t));let o=!1;return w.forEach(e=>{e.isToastActive(t)&&(o=!0)}),o}function L(t,e){_(t)&&(w.size>0||E.push({content:t,options:e}),w.forEach(a=>{a.buildToast(t,e)}))}function j(t,e){w.forEach(a=>{null!=e&&null!=e&&e.containerId&&(null==e?void 0:e.containerId)!==a.id||a.toggle(t,null==e?void 0:e.id)})}function z(t,e){return L(t,e),e.toastId}function A(t,e){var a;return{...e,type:e&&e.type||t,toastId:(a=e)&&("string"==typeof a.toastId||p(a.toastId))?a.toastId:k()}}function O(t){return(e,a)=>z(e,A(t,a))}function P(t,e){return z(t,A("default",e))}P.loading=(t,e)=>z(t,A("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),P.promise=function(t,{pending:e,error:a,success:o},s){let i;e&&(i="string"==typeof e?P.loading(e,s):P.loading(e.render,{...s,...e}));let r={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},n=(t,e,a)=>{if(null==e)return void P.dismiss(i);let o={type:t,...r,...s,data:a},n="string"==typeof e?{render:e}:e;return i?P.update(i,{...o,...n}):P(n.render,{...o,...n}),a},l="function"==typeof t?t():t;return l.then(t=>n("success",o,t)).catch(t=>n("error",a,t)),l},P.success=O("success"),P.info=O("info"),P.error=O("error"),P.warning=O("warning"),P.warn=P.warning,P.dark=(t,e)=>z(t,A("default",{theme:"dark",...e})),P.dismiss=function(t){!function(t){let e;if(!(w.size>0)){E=E.filter(e=>null!=t&&e.options.toastId!==t);return}if(null==t||"string"==typeof(e=t)||p(e))w.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=w.get(t.containerId);e?e.removeToast(t.id):w.forEach(e=>{e.removeToast(t.id)})}}(t)},P.clearWaitingQueue=(t={})=>{w.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})},P.isActive=C,P.update=(t,e={})=>{let a=((t,{containerId:e})=>{var a;return null==(a=w.get(e||1))?void 0:a.toasts.get(t)})(t,e);if(a){let{props:o,content:s}=a,i={delay:100,...o,...e,toastId:e.toastId||t,updateId:k()};i.toastId!==t&&(i.staleId=t);let r=i.render||s;delete i.render,z(r,i)}},P.done=t=>{P.update(t,{progress:1})},P.onChange=function(t){return I.add(t),()=>{I.delete(t)}},P.play=t=>j(!0,t),P.pause=t=>j(!1,t);var M="u">typeof window?a.useLayoutEffect:a.useEffect,$=({theme:t,type:e,isLoading:o,...s})=>a.default.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${e})`,...s}),D={info:function(t){return a.default.createElement($,{...t},a.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return a.default.createElement($,{...t},a.default.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return a.default.createElement($,{...t},a.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return a.default.createElement($,{...t},a.default.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.default.createElement("div",{className:"Toastify__spinner"})}},R=t=>{let{isRunning:e,preventExitTransition:o,toastRef:s,eventHandlers:i,playToast:r}=function(t){var e,o;let[s,i]=(0,a.useState)(!1),[r,n]=(0,a.useState)(!1),l=(0,a.useRef)(null),c=(0,a.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:f,pauseOnHover:d,closeToast:m,onClick:u,closeOnClick:y}=t;function p(){i(!0)}function g(){i(!1)}function _(e){let a=l.current;if(c.canDrag&&a){c.didMove=!0,s&&g(),"x"===t.draggableDirection?c.delta=e.clientX-c.start:c.delta=e.clientY-c.start,c.start!==e.clientX&&(c.canCloseOnClick=!1);let o="x"===t.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`;a.style.transform=`translate3d(${o},0)`,a.style.opacity=`${1-Math.abs(c.delta/c.removalDistance)}`}}function h(){document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",h);let e=l.current;if(c.canDrag&&c.didMove&&e){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance){n(!0),t.closeToast(!0),t.collapseAll();return}e.style.transition="transform 0.2s, opacity 0.2s",e.style.removeProperty("transform"),e.style.removeProperty("opacity")}}e={id:t.toastId,containerId:t.containerId,fn:i},null==(o=w.get(e.containerId||1))||o.setToggle(e.id,e.fn),(0,a.useEffect)(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||g(),window.addEventListener("focus",p),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",p),window.removeEventListener("blur",g)}},[t.pauseOnFocusLoss]);let b={onPointerDown:function(e){if(!0===t.draggable||t.draggable===e.pointerType){c.didMove=!1,document.addEventListener("pointermove",_),document.addEventListener("pointerup",h);let a=l.current;c.canCloseOnClick=!0,c.canDrag=!0,a.style.transition="none","x"===t.draggableDirection?(c.start=e.clientX,c.removalDistance=a.offsetWidth*(t.draggablePercent/100)):(c.start=e.clientY,c.removalDistance=a.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(e){let{top:a,bottom:o,left:s,right:i}=l.current.getBoundingClientRect();"mouse"===e.pointerType&&t.pauseOnHover&&e.clientX>=s&&e.clientX<=i&&e.clientY>=a&&e.clientY<=o?g():p()}};return f&&d&&(b.onMouseEnter=g,t.stacked||(b.onMouseLeave=p)),y&&(b.onClick=t=>{u&&u(t),c.canCloseOnClick&&m(!0)}),{playToast:p,pauseToast:g,isRunning:s,preventExitTransition:r,toastRef:l,eventHandlers:b}}(t),{closeButton:n,children:l,autoClose:c,onClick:f,type:d,hideProgressBar:m,closeToast:u,transition:p,position:g,className:_,style:h,progressClassName:b,updateId:x,role:k,progress:E,rtl:I,toastId:N,deleteToast:C,isIn:L,isLoading:j,closeOnClick:z,theme:A,ariaLabel:O}=t,P=y("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":I},{"Toastify__toast--close-on-click":z}),M="function"==typeof _?_({rtl:I,position:g,type:d,defaultClassName:P}):y(P,_),$=function({theme:t,type:e,isLoading:o,icon:s}){let i=null,r={theme:t,type:e};return!1===s||("function"==typeof s?i=s({...r,isLoading:o}):(0,a.isValidElement)(s)?i=(0,a.cloneElement)(s,r):o?i=D.spinner():e in D&&(i=D[e](r))),i}(t),R=!!E||!c,S={closeToast:u,type:d,theme:A},B=null;return!1===n||(B="function"==typeof n?n(S):(0,a.isValidElement)(n)?(0,a.cloneElement)(n,S):function({closeToast:t,theme:e,ariaLabel:o="close"}){return a.default.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:e=>{e.stopPropagation(),t(!0)},"aria-label":o},a.default.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.default.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(S)),a.default.createElement(p,{isIn:L,done:C,position:g,preventExitTransition:o,nodeRef:s,playToast:r},a.default.createElement("div",{id:N,tabIndex:0,onClick:f,"data-in":L,className:M,...i,style:h,ref:s,...L&&{role:k,"aria-label":O}},null!=$&&a.default.createElement("div",{className:y("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},$),v(l,t,!e),B,!t.customProgressBar&&a.default.createElement(T,{...x&&!R?{key:`p-${x}`}:{},rtl:I,theme:A,delay:c,isRunning:e,isIn:L,closeToast:u,hide:m,type:d,className:b,controlledProgress:R,progress:E||0})))},S=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),B=h(S("bounce",!0));h(S("slide",!0)),h(S("zoom")),h(S("flip"));var H={position:"top-right",transition:B,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&"KeyT"===t.code};function U(t){let e={...H,...t},o=t.stacked,[s,i]=(0,a.useState)(!0),r=(0,a.useRef)(null),{getToastToRender:n,isToastActive:l,count:c}=function(t){var e;let o,{subscribe:s,getSnapshot:i,setProps:r}=(0,a.useRef)((o=t.containerId||1,{subscribe(e){let a,s,i,r,n,l,c,f,d,m,u,y=(a=1,s=0,i=[],r=[],n=t,l=new Map,c=new Set,f=()=>{r=Array.from(l.values()),c.forEach(t=>t())},d=t=>{var e,a;t.isActive&&(null==(a=null==(e=t.props)?void 0:e.onClose)||a.call(e,t.removalReason),t.isActive=!1,N(b(t,"removed")))},m=t=>{if(null==t)l.forEach(d);else{let e=l.get(t);e&&d(e)}f()},u=t=>{var e,a;let{toastId:o,updateId:s}=t.props,i=null==s;t.staleId&&l.delete(t.staleId),t.isActive=!0,l.set(o,t),f(),N(b(t,i?"added":"updated")),i&&(null==(a=(e=t.props).onOpen)||a.call(e))},{id:o,props:n,observe:t=>(c.add(t),()=>c.delete(t)),toggle:(t,e)=>{l.forEach(a=>{var o;(null==e||e===a.props.toastId)&&(null==(o=a.toggle)||o.call(a,t))})},removeToast:m,toasts:l,clearQueue:()=>{s-=i.length,i=[]},buildToast:(t,e)=>{let r,c;if((({containerId:t,toastId:e,updateId:a})=>{let s=l.has(e)&&null==a;return(t?t!==o:1!==o)||s})(e))return;let{toastId:d,updateId:y,data:h,staleId:b,delay:v}=e,T=null==y;T&&s++;let x={...n,style:n.toastStyle,key:a++,...Object.fromEntries(Object.entries(e).filter(([t,e])=>null!=e)),toastId:d,updateId:y,data:h,isIn:!1,className:g(e.className||n.toastClassName),progressClassName:g(e.progressClassName||n.progressClassName),autoClose:!e.isLoading&&(r=e.autoClose,c=n.autoClose,!1===r||p(r)&&r>0?r:c),closeToast(t){let e=l.get(d);e&&(e.removalReason=t,m(d))},deleteToast(){if(null!=l.get(d)){if(l.delete(d),--s<0&&(s=0),i.length>0)return void u(i.shift());f()}}};x.closeButton=n.closeButton,!1===e.closeButton||_(e.closeButton)?x.closeButton=e.closeButton:!0===e.closeButton&&(x.closeButton=!_(n.closeButton)||n.closeButton);let k={content:t,props:x,staleId:b};n.limit&&n.limit>0&&s>n.limit&&T?i.push(k):p(v)?setTimeout(()=>{u(k)},v):u(k)},setProps(t){n=t},setToggle:(t,e)=>{let a=l.get(t);a&&(a.toggle=e)},isToastActive:t=>{var e;return null==(e=l.get(t))?void 0:e.isActive},getSnapshot:()=>r});w.set(o,y);let h=y.observe(e);return E.forEach(t=>L(t.content,t.options)),E=[],()=>{h(),w.delete(o)}},setProps(t){var e;null==(e=w.get(o))||e.setProps(t)},getSnapshot(){var t;return null==(t=w.get(o))?void 0:t.getSnapshot()}})).current;r(t);let n=null==(e=(0,a.useSyncExternalStore)(s,i,i))?void 0:e.slice();return{getToastToRender:function(e){if(!n)return[];let a=new Map;return t.newestOnTop&&n.reverse(),n.forEach(t=>{let{position:e}=t.props;a.has(e)||a.set(e,[]),a.get(e).push(t)}),Array.from(a,t=>e(t[0],t[1]))},isToastActive:C,count:null==n?void 0:n.length}}(e),{className:f,style:d,rtl:m,containerId:u,hotKeys:h}=e;function v(){o&&(i(!0),P.play())}return M(()=>{var t;if(o){let a=r.current.querySelectorAll('[data-in="true"]'),o=null==(t=e.position)?void 0:t.includes("top"),i=0,n=0;Array.from(a).reverse().forEach((t,e)=>{t.classList.add("Toastify__toast--stacked"),e>0&&(t.dataset.collapsed=`${s}`),t.dataset.pos||(t.dataset.pos=o?"top":"bot");let a=i*(s?.2:1)+(s?0:12*e),r=Math.max(.5,1-(s?n:0));t.style.setProperty("--y",`${o?a:-1*a}px`),t.style.setProperty("--g","12"),t.style.setProperty("--s",`${r}`),i+=t.offsetHeight,n+=.025})}},[s,c,o]),(0,a.useEffect)(()=>{function t(t){var e;let a=r.current;h(t)&&(null==(e=null==a?void 0:a.querySelector('[tabIndex="0"]'))||e.focus(),i(!1),P.pause()),"Escape"===t.key&&(document.activeElement===a||null!=a&&a.contains(document.activeElement))&&(i(!0),P.play())}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[h]),a.default.createElement("section",{ref:r,className:"Toastify",id:u,onMouseEnter:()=>{o&&(i(!1),P.pause())},onMouseLeave:v,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},n((t,e)=>{var s;let i,r=e.length?{...d}:{...d,pointerEvents:"none"};return a.default.createElement("div",{tabIndex:-1,className:(s=t,i=y("Toastify__toast-container",`Toastify__toast-container--${s}`,{"Toastify__toast-container--rtl":m}),"function"==typeof f?f({position:s,rtl:m,defaultClassName:i}):y(i,g(f))),"data-stacked":o,style:r,key:`c-${t}`},e.map(({content:t,props:e})=>a.default.createElement(R,{...e,stacked:o,collapseAll:v,isIn:l(e.toastId,e.containerId),key:`t-${e.key}`},t)))}))}var X=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,q=new Map;function F(t){var e;return M(()=>{if(!X||"u"<typeof document)return;let t=document,a=q.get(t);if(a){e&&a.setAttribute("nonce",e);return}let o=t.createElement("style");o.textContent=X,e&&o.setAttribute("nonce",e),t.head.appendChild(o),q.set(t,o)},[e=t.nonce]),a.default.createElement(U,{...t})}var V=t.i(19591);t.i(73474),t.i(79490),t.i(25981),t.i(12796),t.i(62368),t.i(2773),t.i(49882);var K=t.i(47167);let Q=(0,i.default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),W=(0,i.default)("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),Y=({onLogin:t})=>{let[o,s]=(0,a.useState)(""),[i,r]=(0,a.useState)(""),[n,l]=(0,a.useState)(!1);return(0,e.jsx)("div",{className:"admin-login-container",children:(0,e.jsxs)("div",{className:"admin-login-card animate-fade-in",children:[(0,e.jsxs)("div",{className:"admin-login-header",children:[(0,e.jsx)("img",{src:"/logo.png",alt:"QFit Gym Logo",className:"admin-login-logo"}),(0,e.jsx)("h2",{children:"Admin Portal"}),(0,e.jsx)("p",{children:"Please enter your master password to continue."})]}),(0,e.jsxs)("form",{onSubmit:e=>{e.preventDefault(),o===(K.default.env.NEXT_PUBLIC_ADMIN_PASSWORD||"Qfit@2026")?(r(""),t()):(r("Incorrect password. Please try again."),s(""))},className:"admin-login-form",children:[(0,e.jsxs)("div",{className:"form-group password-group",children:[(0,e.jsx)("input",{type:n?"text":"password",placeholder:"Enter Password",value:o,onChange:t=>s(t.target.value),autoFocus:!0,required:!0}),(0,e.jsx)("button",{type:"button",className:"password-toggle-btn",onClick:()=>l(!n),children:n?(0,e.jsx)(W,{size:20}):(0,e.jsx)(Q,{size:20})})]}),i&&(0,e.jsx)("div",{className:"admin-login-error",children:i}),(0,e.jsx)("button",{type:"submit",className:"btn-primary",style:{width:"100%",marginTop:"10px"},children:"Access Portal"})]}),(0,e.jsx)("div",{className:"admin-login-footer",children:(0,e.jsx)("a",{href:"/",children:"← Back to Website"})})]})})},G=({children:t})=>{let[i,y]=(0,a.useState)(!1),[p,g]=(0,a.useState)(!1),[_,h]=(0,a.useState)(0);(0,a.useEffect)(()=>{"true"===localStorage.getItem("qfit_admin_auth")&&y(!0)},[]);let b=(0,s.usePathname)(),{data:v}=(0,V.useAdmin)();(0,a.useEffect)(()=>{if("/admin/bookings"===b)localStorage.setItem("last_read_bookings",new Date().toISOString()),h(0);else if(v.bookings&&v.bookings.length>0){let t=localStorage.getItem("last_read_bookings");if(t){let e=new Date(t);h(v.bookings.filter(t=>t.created_at&&new Date(t.created_at)>e).length)}else h(v.bookings.length)}},[b,v.bookings]),(0,a.useEffect)(()=>{"Notification"in window&&"granted"!==Notification.permission&&Notification.requestPermission();let t=t=>{let e=t.detail;try{let t=new(window.AudioContext||window.webkitAudioContext),e=t.createOscillator(),a=t.createGain();e.connect(a),a.connect(t.destination),e.type="sine",e.frequency.setValueAtTime(880,t.currentTime),a.gain.setValueAtTime(.1,t.currentTime),e.start(),a.gain.exponentialRampToValueAtTime(1e-5,t.currentTime+.5),e.stop(t.currentTime+.5)}catch(t){console.error("Audio play failed:",t)}"Notification"in window&&"granted"===Notification.permission&&new Notification("New Booking Request!",{body:`${e.email} (${e.mobile})`,icon:"/logo.png"}),P.info(`New Booking: ${e.email} (${e.mobile})`,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"})};return window.addEventListener("new-booking",t),()=>window.removeEventListener("new-booking",t)},[]);let T=[{path:"/admin",icon:(0,e.jsx)(r,{size:20}),label:"Dashboard"},{path:"/admin/gallery",icon:(0,e.jsx)(f,{size:20}),label:"Gallery"},{path:"/admin/trainers",icon:(0,e.jsx)(n.Users,{size:20}),label:"Trainers"},{path:"/admin/services",icon:(0,e.jsx)(c.Dumbbell,{size:20}),label:"Services"},{path:"/admin/careers",icon:(0,e.jsx)(l,{size:20}),label:"Careers"},{path:"/admin/blogs",icon:(0,e.jsx)(d,{size:20}),label:"Blogs"},{path:"/admin/bookings",icon:(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)(d,{size:20}),_>0&&(0,e.jsx)("span",{style:{position:"absolute",top:"-5px",right:"-8px",background:"red",color:"white",fontSize:"0.65rem",padding:"2px 5px",borderRadius:"10px",fontWeight:"bold"},children:_})]}),label:"Bookings"}];return i?(0,e.jsxs)("div",{className:"admin-layout",children:[(0,e.jsx)(F,{}),p&&(0,e.jsx)("div",{className:"admin-overlay",onClick:()=>g(!1)}),(0,e.jsxs)("aside",{className:`admin-sidebar ${p?"open":""}`,children:[(0,e.jsxs)("div",{className:"admin-brand",children:[(0,e.jsx)("img",{src:"/logo.png",alt:"QFit Admin"}),(0,e.jsx)("span",{children:"Admin Portal"})]}),(0,e.jsx)("nav",{className:"admin-nav",children:T.map(t=>(0,e.jsxs)(o.default,{href:t.path,className:`admin-nav-link ${b===t.path?"active":""}`,onClick:()=>g(!1),children:[t.icon,(0,e.jsx)("span",{children:t.label})]},t.path))}),(0,e.jsx)("div",{className:"admin-logout",children:(0,e.jsxs)("a",{href:"/",onClick:t=>{t.preventDefault(),localStorage.removeItem("qfit_admin_auth"),y(!1),window.location.href="/"},children:[(0,e.jsx)(m,{size:20}),(0,e.jsx)("span",{children:"Logout & Exit"})]})})]}),(0,e.jsxs)("main",{className:"admin-main",children:[(0,e.jsxs)("header",{className:"admin-header",children:[(0,e.jsx)("button",{className:"mobile-toggle-btn",onClick:()=>g(!0),children:(0,e.jsx)(u.Menu,{size:24})}),(0,e.jsx)("h2",{children:T.find(t=>t.path===b)?.label||"Admin Panel"})]}),(0,e.jsx)("div",{className:"admin-content-scroll",children:t})]})]}):(0,e.jsx)(Y,{onLogin:()=>{localStorage.setItem("qfit_admin_auth","true"),y(!0)}})};t.s(["default",0,function({children:t}){return(0,e.jsx)(G,{children:t})}],9071)}]);