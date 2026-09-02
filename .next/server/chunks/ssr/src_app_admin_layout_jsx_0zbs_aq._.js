module.exports=[35176,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246),e=a.i(50944),f=a.i(64831);let g=(0,f.default)("layout-dashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);var h=a.i(85888);let i=(0,f.default)("briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);var j=a.i(99371);let k=(0,f.default)("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),l=(0,f.default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),m=(0,f.default)("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);var n=a.i(69648);let o=function(){for(var a,b,c=0,d="",e=arguments.length;c<e;c++)(a=arguments[c])&&(b=function a(b){var c,d,e="";if("string"==typeof b||"number"==typeof b)e+=b;else if("object"==typeof b)if(Array.isArray(b)){var f=b.length;for(c=0;c<f;c++)b[c]&&(d=a(b[c]))&&(e&&(e+=" "),e+=d)}else for(d in b)b[d]&&(e&&(e+=" "),e+=d);return e}(a))&&(d&&(d+=" "),d+=b);return d};var p=a=>"number"==typeof a&&!isNaN(a),q=a=>"string"==typeof a||"function"==typeof a?a:null,r=a=>(0,c.isValidElement)(a)||"string"==typeof a||"function"==typeof a||p(a);function s({enter:a,exit:b,appendPosition:d=!1,collapse:e=!0,collapseDuration:f=300}){return function({children:g,position:h,preventExitTransition:i,done:j,nodeRef:k,isIn:l,playToast:m}){let n=d?`${a}--${h}`:a,o=d?`${b}--${h}`:b,p=(0,c.useRef)(0);return(0,c.useLayoutEffect)(()=>{let a=k.current,b=n.split(" "),c=d=>{d.target===k.current&&(m(),a.removeEventListener("animationend",c),a.removeEventListener("animationcancel",c),0===p.current&&"animationcancel"!==d.type&&a.classList.remove(...b))};a.classList.add(...b),a.addEventListener("animationend",c),a.addEventListener("animationcancel",c)},[]),(0,c.useEffect)(()=>{let a=k.current,b=()=>{a.removeEventListener("animationend",b),e?function(a,b,c=300){let{scrollHeight:d,style:e}=a;requestAnimationFrame(()=>{e.minHeight="initial",e.height=d+"px",e.transition=`all ${c}ms`,requestAnimationFrame(()=>{e.height="0",e.padding="0",e.margin="0",setTimeout(b,c)})})}(a,j,f):j()};l||(i?b():(p.current=1,a.className+=` ${o}`,a.addEventListener("animationend",b)))},[l]),c.default.createElement(c.default.Fragment,null,g)}}function t(a,b){return{content:u(a.content,a.props),containerId:a.props.containerId,id:a.props.toastId,theme:a.props.theme,type:a.props.type,data:a.props.data||{},isLoading:a.props.isLoading,icon:a.props.icon,reason:a.removalReason,status:b}}function u(a,b,d=!1){return(0,c.isValidElement)(a)&&"string"!=typeof a.type?(0,c.cloneElement)(a,{closeToast:b.closeToast,toastProps:b,data:b.data,isPaused:d}):"function"==typeof a?a({closeToast:b.closeToast,toastProps:b,data:b.data,isPaused:d}):a}function v({delay:a,isRunning:b,closeToast:d,type:e="default",hide:f,className:g,controlledProgress:h,progress:i,rtl:j,isIn:k,theme:l}){let m=f||h&&0===i,n={animationDuration:`${a}ms`,animationPlayState:b?"running":"paused"};h&&(n.transform=`scaleX(${i})`);let p=o("Toastify__progress-bar",h?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${l}`,`Toastify__progress-bar--${e}`,{"Toastify__progress-bar--rtl":j}),q="function"==typeof g?g({rtl:j,type:e,defaultClassName:p}):o(p,g);return c.default.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},c.default.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${l} Toastify__progress-bar--${e}`}),c.default.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer","aria-valuenow":h?Math.round(100*i):void 0,"aria-valuemin":0,"aria-valuemax":100,className:q,style:n,...{[h&&i>=1?"onTransitionEnd":"onAnimationEnd"]:h&&i<1?null:()=>{k&&d()}}}))}var w=1,x=()=>`${w++}`,y=new Map,z=[],A=new Set,B=a=>A.forEach(b=>b(a));function C(a,b){var c;if(b)return!!(null!=(c=y.get(b))&&c.isToastActive(a));let d=!1;return y.forEach(b=>{b.isToastActive(a)&&(d=!0)}),d}function D(a,b){r(a)&&(y.size>0||z.push({content:a,options:b}),y.forEach(c=>{c.buildToast(a,b)}))}function E(a,b){y.forEach(c=>{null!=b&&null!=b&&b.containerId&&(null==b?void 0:b.containerId)!==c.id||c.toggle(a,null==b?void 0:b.id)})}function F(a,b){return D(a,b),b.toastId}function G(a,b){var c;return{...b,type:b&&b.type||a,toastId:(c=b)&&("string"==typeof c.toastId||p(c.toastId))?c.toastId:x()}}function H(a){return(b,c)=>F(b,G(a,c))}function I(a,b){return F(a,G("default",b))}I.loading=(a,b)=>F(a,G("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...b})),I.promise=function(a,{pending:b,error:c,success:d},e){let f;b&&(f="string"==typeof b?I.loading(b,e):I.loading(b.render,{...e,...b}));let g={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},h=(a,b,c)=>{if(null==b)return void I.dismiss(f);let d={type:a,...g,...e,data:c},h="string"==typeof b?{render:b}:b;return f?I.update(f,{...d,...h}):I(h.render,{...d,...h}),c},i="function"==typeof a?a():a;return i.then(a=>h("success",d,a)).catch(a=>h("error",c,a)),i},I.success=H("success"),I.info=H("info"),I.error=H("error"),I.warning=H("warning"),I.warn=I.warning,I.dark=(a,b)=>F(a,G("default",{theme:"dark",...b})),I.dismiss=function(a){!function(a){let b;if(!(y.size>0)){z=z.filter(b=>null!=a&&b.options.toastId!==a);return}if(null==a||"string"==typeof(b=a)||p(b))y.forEach(b=>{b.removeToast(a)});else if(a&&("containerId"in a||"id"in a)){let b=y.get(a.containerId);b?b.removeToast(a.id):y.forEach(b=>{b.removeToast(a.id)})}}(a)},I.clearWaitingQueue=(a={})=>{y.forEach(b=>{b.props.limit&&(!a.containerId||b.id===a.containerId)&&b.clearQueue()})},I.isActive=C,I.update=(a,b={})=>{let c=((a,{containerId:b})=>{var c;return null==(c=y.get(b||1))?void 0:c.toasts.get(a)})(a,b);if(c){let{props:d,content:e}=c,f={delay:100,...d,...b,toastId:b.toastId||a,updateId:x()};f.toastId!==a&&(f.staleId=a);let g=f.render||e;delete f.render,F(g,f)}},I.done=a=>{I.update(a,{progress:1})},I.onChange=function(a){return A.add(a),()=>{A.delete(a)}},I.play=a=>E(!0,a),I.pause=a=>E(!1,a);var J=c.useEffect,K=({theme:a,type:b,isLoading:d,...e})=>c.default.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===a?"currentColor":`var(--toastify-icon-color-${b})`,...e}),L={info:function(a){return c.default.createElement(K,{...a},c.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(a){return c.default.createElement(K,{...a},c.default.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(a){return c.default.createElement(K,{...a},c.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(a){return c.default.createElement(K,{...a},c.default.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.default.createElement("div",{className:"Toastify__spinner"})}},M=a=>{let{isRunning:b,preventExitTransition:d,toastRef:e,eventHandlers:f,playToast:g}=function(a){var b,d;let[e,f]=(0,c.useState)(!1),[g,h]=(0,c.useState)(!1),i=(0,c.useRef)(null),j=(0,c.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:k,pauseOnHover:l,closeToast:m,onClick:n,closeOnClick:o}=a;function p(){f(!0)}function q(){f(!1)}function r(b){let c=i.current;if(j.canDrag&&c){j.didMove=!0,e&&q(),"x"===a.draggableDirection?j.delta=b.clientX-j.start:j.delta=b.clientY-j.start,j.start!==b.clientX&&(j.canCloseOnClick=!1);let d="x"===a.draggableDirection?`${j.delta}px, var(--y)`:`0, calc(${j.delta}px + var(--y))`;c.style.transform=`translate3d(${d},0)`,c.style.opacity=`${1-Math.abs(j.delta/j.removalDistance)}`}}function s(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",s);let b=i.current;if(j.canDrag&&j.didMove&&b){if(j.canDrag=!1,Math.abs(j.delta)>j.removalDistance){h(!0),a.closeToast(!0),a.collapseAll();return}b.style.transition="transform 0.2s, opacity 0.2s",b.style.removeProperty("transform"),b.style.removeProperty("opacity")}}b={id:a.toastId,containerId:a.containerId,fn:f},null==(d=y.get(b.containerId||1))||d.setToggle(b.id,b.fn),(0,c.useEffect)(()=>{if(a.pauseOnFocusLoss)return document.hasFocus()||q(),window.addEventListener("focus",p),window.addEventListener("blur",q),()=>{window.removeEventListener("focus",p),window.removeEventListener("blur",q)}},[a.pauseOnFocusLoss]);let t={onPointerDown:function(b){if(!0===a.draggable||a.draggable===b.pointerType){j.didMove=!1,document.addEventListener("pointermove",r),document.addEventListener("pointerup",s);let c=i.current;j.canCloseOnClick=!0,j.canDrag=!0,c.style.transition="none","x"===a.draggableDirection?(j.start=b.clientX,j.removalDistance=c.offsetWidth*(a.draggablePercent/100)):(j.start=b.clientY,j.removalDistance=c.offsetHeight*(80===a.draggablePercent?1.5*a.draggablePercent:a.draggablePercent)/100)}},onPointerUp:function(b){let{top:c,bottom:d,left:e,right:f}=i.current.getBoundingClientRect();"mouse"===b.pointerType&&a.pauseOnHover&&b.clientX>=e&&b.clientX<=f&&b.clientY>=c&&b.clientY<=d?q():p()}};return k&&l&&(t.onMouseEnter=q,a.stacked||(t.onMouseLeave=p)),o&&(t.onClick=a=>{n&&n(a),j.canCloseOnClick&&m(!0)}),{playToast:p,pauseToast:q,isRunning:e,preventExitTransition:g,toastRef:i,eventHandlers:t}}(a),{closeButton:h,children:i,autoClose:j,onClick:k,type:l,hideProgressBar:m,closeToast:n,transition:p,position:q,className:r,style:s,progressClassName:t,updateId:w,role:x,progress:z,rtl:A,toastId:B,deleteToast:C,isIn:D,isLoading:E,closeOnClick:F,theme:G,ariaLabel:H}=a,I=o("Toastify__toast",`Toastify__toast-theme--${G}`,`Toastify__toast--${l}`,{"Toastify__toast--rtl":A},{"Toastify__toast--close-on-click":F}),J="function"==typeof r?r({rtl:A,position:q,type:l,defaultClassName:I}):o(I,r),K=function({theme:a,type:b,isLoading:d,icon:e}){let f=null,g={theme:a,type:b};return!1===e||("function"==typeof e?f=e({...g,isLoading:d}):(0,c.isValidElement)(e)?f=(0,c.cloneElement)(e,g):d?f=L.spinner():b in L&&(f=L[b](g))),f}(a),M=!!z||!j,N={closeToast:n,type:l,theme:G},O=null;return!1===h||(O="function"==typeof h?h(N):(0,c.isValidElement)(h)?(0,c.cloneElement)(h,N):function({closeToast:a,theme:b,ariaLabel:d="close"}){return c.default.createElement("button",{className:`Toastify__close-button Toastify__close-button--${b}`,type:"button",onClick:b=>{b.stopPropagation(),a(!0)},"aria-label":d},c.default.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.default.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(N)),c.default.createElement(p,{isIn:D,done:C,position:q,preventExitTransition:d,nodeRef:e,playToast:g},c.default.createElement("div",{id:B,tabIndex:0,onClick:k,"data-in":D,className:J,...f,style:s,ref:e,...D&&{role:x,"aria-label":H}},null!=K&&c.default.createElement("div",{className:o("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!E})},K),u(i,a,!b),O,!a.customProgressBar&&c.default.createElement(v,{...w&&!M?{key:`p-${w}`}:{},rtl:A,theme:G,delay:j,isRunning:b,isIn:D,closeToast:n,hide:m,type:l,className:t,controlledProgress:M,progress:z||0})))},N=(a,b=!1)=>({enter:`Toastify--animate Toastify__${a}-enter`,exit:`Toastify--animate Toastify__${a}-exit`,appendPosition:b}),O=s(N("bounce",!0));s(N("slide",!0)),s(N("zoom")),s(N("flip"));var P={position:"top-right",transition:O,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:a=>a.altKey&&"KeyT"===a.code};function Q(a){let b={...P,...a},d=a.stacked,[e,f]=(0,c.useState)(!0),g=(0,c.useRef)(null),{getToastToRender:h,isToastActive:i,count:j}=function(a){var b;let d,{subscribe:e,getSnapshot:f,setProps:g}=(0,c.useRef)((d=a.containerId||1,{subscribe(b){let c,e,f,g,h,i,j,k,l,m,n,o=(c=1,e=0,f=[],g=[],h=a,i=new Map,j=new Set,k=()=>{g=Array.from(i.values()),j.forEach(a=>a())},l=a=>{var b,c;a.isActive&&(null==(c=null==(b=a.props)?void 0:b.onClose)||c.call(b,a.removalReason),a.isActive=!1,B(t(a,"removed")))},m=a=>{if(null==a)i.forEach(l);else{let b=i.get(a);b&&l(b)}k()},n=a=>{var b,c;let{toastId:d,updateId:e}=a.props,f=null==e;a.staleId&&i.delete(a.staleId),a.isActive=!0,i.set(d,a),k(),B(t(a,f?"added":"updated")),f&&(null==(c=(b=a.props).onOpen)||c.call(b))},{id:d,props:h,observe:a=>(j.add(a),()=>j.delete(a)),toggle:(a,b)=>{i.forEach(c=>{var d;(null==b||b===c.props.toastId)&&(null==(d=c.toggle)||d.call(c,a))})},removeToast:m,toasts:i,clearQueue:()=>{e-=f.length,f=[]},buildToast:(a,b)=>{let g,j;if((({containerId:a,toastId:b,updateId:c})=>{let e=i.has(b)&&null==c;return(a?a!==d:1!==d)||e})(b))return;let{toastId:l,updateId:o,data:s,staleId:t,delay:u}=b,v=null==o;v&&e++;let w={...h,style:h.toastStyle,key:c++,...Object.fromEntries(Object.entries(b).filter(([a,b])=>null!=b)),toastId:l,updateId:o,data:s,isIn:!1,className:q(b.className||h.toastClassName),progressClassName:q(b.progressClassName||h.progressClassName),autoClose:!b.isLoading&&(g=b.autoClose,j=h.autoClose,!1===g||p(g)&&g>0?g:j),closeToast(a){let b=i.get(l);b&&(b.removalReason=a,m(l))},deleteToast(){if(null!=i.get(l)){if(i.delete(l),--e<0&&(e=0),f.length>0)return void n(f.shift());k()}}};w.closeButton=h.closeButton,!1===b.closeButton||r(b.closeButton)?w.closeButton=b.closeButton:!0===b.closeButton&&(w.closeButton=!r(h.closeButton)||h.closeButton);let x={content:a,props:w,staleId:t};h.limit&&h.limit>0&&e>h.limit&&v?f.push(x):p(u)?setTimeout(()=>{n(x)},u):n(x)},setProps(a){h=a},setToggle:(a,b)=>{let c=i.get(a);c&&(c.toggle=b)},isToastActive:a=>{var b;return null==(b=i.get(a))?void 0:b.isActive},getSnapshot:()=>g});y.set(d,o);let s=o.observe(b);return z.forEach(a=>D(a.content,a.options)),z=[],()=>{s(),y.delete(d)}},setProps(a){var b;null==(b=y.get(d))||b.setProps(a)},getSnapshot(){var a;return null==(a=y.get(d))?void 0:a.getSnapshot()}})).current;g(a);let h=null==(b=(0,c.useSyncExternalStore)(e,f,f))?void 0:b.slice();return{getToastToRender:function(b){if(!h)return[];let c=new Map;return a.newestOnTop&&h.reverse(),h.forEach(a=>{let{position:b}=a.props;c.has(b)||c.set(b,[]),c.get(b).push(a)}),Array.from(c,a=>b(a[0],a[1]))},isToastActive:C,count:null==h?void 0:h.length}}(b),{className:k,style:l,rtl:m,containerId:n,hotKeys:s}=b;function u(){d&&(f(!0),I.play())}return J(()=>{var a;if(d){let c=g.current.querySelectorAll('[data-in="true"]'),d=null==(a=b.position)?void 0:a.includes("top"),f=0,h=0;Array.from(c).reverse().forEach((a,b)=>{a.classList.add("Toastify__toast--stacked"),b>0&&(a.dataset.collapsed=`${e}`),a.dataset.pos||(a.dataset.pos=d?"top":"bot");let c=f*(e?.2:1)+(e?0:12*b),g=Math.max(.5,1-(e?h:0));a.style.setProperty("--y",`${d?c:-1*c}px`),a.style.setProperty("--g","12"),a.style.setProperty("--s",`${g}`),f+=a.offsetHeight,h+=.025})}},[e,j,d]),(0,c.useEffect)(()=>{function a(a){var b;let c=g.current;s(a)&&(null==(b=null==c?void 0:c.querySelector('[tabIndex="0"]'))||b.focus(),f(!1),I.pause()),"Escape"===a.key&&(document.activeElement===c||null!=c&&c.contains(document.activeElement))&&(f(!0),I.play())}return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[s]),c.default.createElement("section",{ref:g,className:"Toastify",id:n,onMouseEnter:()=>{d&&(f(!1),I.pause())},onMouseLeave:u,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":b["aria-label"]},h((a,b)=>{var e;let f,g=b.length?{...l}:{...l,pointerEvents:"none"};return c.default.createElement("div",{tabIndex:-1,className:(e=a,f=o("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":m}),"function"==typeof k?k({position:e,rtl:m,defaultClassName:f}):o(f,q(k))),"data-stacked":d,style:g,key:`c-${a}`},b.map(({content:a,props:b})=>c.default.createElement(M,{...b,stacked:d,collapseAll:u,isIn:i(b.toastId,b.containerId),key:`t-${b.key}`},a)))}))}var R=`:root {
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
`,S=new Map;function T(a){var b;return J(()=>{if(!R||"u"<typeof document)return;let a=document,c=S.get(a);if(c){b&&c.setAttribute("nonce",b);return}let d=a.createElement("style");d.textContent=R,b&&d.setAttribute("nonce",b),a.head.appendChild(d),S.set(a,d)},[b=a.nonce]),c.default.createElement(Q,{...a})}var U=a.i(22255);a.i(80180),a.i(94057),a.i(1661),a.i(11559),a.i(36670),a.i(21612),a.i(70944);let V=(0,f.default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),W=(0,f.default)("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),X=({onLogin:a})=>{let[d,e]=(0,c.useState)(""),[f,g]=(0,c.useState)(""),[h,i]=(0,c.useState)(!1);return(0,b.jsx)("div",{className:"admin-login-container",children:(0,b.jsxs)("div",{className:"admin-login-card animate-fade-in",children:[(0,b.jsxs)("div",{className:"admin-login-header",children:[(0,b.jsx)("img",{src:"/logo.png",alt:"QFit Gym Logo",className:"admin-login-logo"}),(0,b.jsx)("h2",{children:"Admin Portal"}),(0,b.jsx)("p",{children:"Please enter your master password to continue."})]}),(0,b.jsxs)("form",{onSubmit:b=>{b.preventDefault(),d===(process.env.NEXT_PUBLIC_ADMIN_PASSWORD||"Qfit@2026")?(g(""),a()):(g("Incorrect password. Please try again."),e(""))},className:"admin-login-form",children:[(0,b.jsxs)("div",{className:"form-group password-group",children:[(0,b.jsx)("input",{type:h?"text":"password",placeholder:"Enter Password",value:d,onChange:a=>e(a.target.value),autoFocus:!0,required:!0}),(0,b.jsx)("button",{type:"button",className:"password-toggle-btn",onClick:()=>i(!h),children:h?(0,b.jsx)(W,{size:20}):(0,b.jsx)(V,{size:20})})]}),f&&(0,b.jsx)("div",{className:"admin-login-error",children:f}),(0,b.jsx)("button",{type:"submit",className:"btn-primary",style:{width:"100%",marginTop:"10px"},children:"Access Portal"})]}),(0,b.jsx)("div",{className:"admin-login-footer",children:(0,b.jsx)("a",{href:"/",children:"← Back to Website"})})]})})},Y=({children:a})=>{let[f,o]=(0,c.useState)(!1),[p,q]=(0,c.useState)(!1),[r,s]=(0,c.useState)(0);(0,c.useEffect)(()=>{"true"===localStorage.getItem("qfit_admin_auth")&&o(!0)},[]);let t=(0,e.usePathname)(),{data:u}=(0,U.useAdmin)();(0,c.useEffect)(()=>{if("/admin/bookings"===t)localStorage.setItem("last_read_bookings",new Date().toISOString()),s(0);else if(u.bookings&&u.bookings.length>0){let a=localStorage.getItem("last_read_bookings");if(a){let b=new Date(a);s(u.bookings.filter(a=>a.created_at&&new Date(a.created_at)>b).length)}else s(u.bookings.length)}},[t,u.bookings]),(0,c.useEffect)(()=>{"Notification"in window&&"granted"!==Notification.permission&&Notification.requestPermission();let a=a=>{let b=a.detail;try{let a=new(window.AudioContext||window.webkitAudioContext),b=a.createOscillator(),c=a.createGain();b.connect(c),c.connect(a.destination),b.type="sine",b.frequency.setValueAtTime(880,a.currentTime),c.gain.setValueAtTime(.1,a.currentTime),b.start(),c.gain.exponentialRampToValueAtTime(1e-5,a.currentTime+.5),b.stop(a.currentTime+.5)}catch(a){console.error("Audio play failed:",a)}"Notification"in window&&"granted"===Notification.permission&&new Notification("New Booking Request!",{body:`${b.email} (${b.mobile})`,icon:"/logo.png"}),I.info(`New Booking: ${b.email} (${b.mobile})`,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"})};return window.addEventListener("new-booking",a),()=>window.removeEventListener("new-booking",a)},[]);let v=[{path:"/admin",icon:(0,b.jsx)(g,{size:20}),label:"Dashboard"},{path:"/admin/gallery",icon:(0,b.jsx)(k,{size:20}),label:"Gallery"},{path:"/admin/trainers",icon:(0,b.jsx)(h.Users,{size:20}),label:"Trainers"},{path:"/admin/services",icon:(0,b.jsx)(j.Dumbbell,{size:20}),label:"Services"},{path:"/admin/careers",icon:(0,b.jsx)(i,{size:20}),label:"Careers"},{path:"/admin/blogs",icon:(0,b.jsx)(l,{size:20}),label:"Blogs"},{path:"/admin/bookings",icon:(0,b.jsxs)("div",{style:{position:"relative"},children:[(0,b.jsx)(l,{size:20}),r>0&&(0,b.jsx)("span",{style:{position:"absolute",top:"-5px",right:"-8px",background:"red",color:"white",fontSize:"0.65rem",padding:"2px 5px",borderRadius:"10px",fontWeight:"bold"},children:r})]}),label:"Bookings"}];return f?(0,b.jsxs)("div",{className:"admin-layout",children:[(0,b.jsx)(T,{}),p&&(0,b.jsx)("div",{className:"admin-overlay",onClick:()=>q(!1)}),(0,b.jsxs)("aside",{className:`admin-sidebar ${p?"open":""}`,children:[(0,b.jsxs)("div",{className:"admin-brand",children:[(0,b.jsx)("img",{src:"/logo.png",alt:"QFit Admin"}),(0,b.jsx)("span",{children:"Admin Portal"})]}),(0,b.jsx)("nav",{className:"admin-nav",children:v.map(a=>(0,b.jsxs)(d.default,{href:a.path,className:`admin-nav-link ${t===a.path?"active":""}`,onClick:()=>q(!1),children:[a.icon,(0,b.jsx)("span",{children:a.label})]},a.path))}),(0,b.jsx)("div",{className:"admin-logout",children:(0,b.jsxs)("a",{href:"/",onClick:a=>{a.preventDefault(),localStorage.removeItem("qfit_admin_auth"),o(!1),window.location.href="/"},children:[(0,b.jsx)(m,{size:20}),(0,b.jsx)("span",{children:"Logout & Exit"})]})})]}),(0,b.jsxs)("main",{className:"admin-main",children:[(0,b.jsxs)("header",{className:"admin-header",children:[(0,b.jsx)("button",{className:"mobile-toggle-btn",onClick:()=>q(!0),children:(0,b.jsx)(n.Menu,{size:24})}),(0,b.jsx)("h2",{children:v.find(a=>a.path===t)?.label||"Admin Panel"})]}),(0,b.jsx)("div",{className:"admin-content-scroll",children:a})]})]}):(0,b.jsx)(X,{onLogin:()=>{localStorage.setItem("qfit_admin_auth","true"),o(!0)}})};a.s(["default",0,function({children:a}){return(0,b.jsx)(Y,{children:a})}],35176)}];

//# sourceMappingURL=src_app_admin_layout_jsx_0zbs_aq._.js.map