import{a as ee,c as Z,g as ae}from"./_commonjsHelpers-042e6b4d.js";import{B as te,C as ne,E as re,F as se,K as ie,R as oe,S as le,s as ue,T as ce,x as de,y as ge,z as pe,V as fe,A as he,D as me,G as ve,H as be,I as ye,J as we,L as xe,M as Ae,N as Fe,l as Se,O as ke,c as Ee,h as Ce,P as $e,Q as _e,U as Te,W as Pe,X as Re,e as Le,f as ze,b as Me,Y as He,Z as Ne,d as De,$ as Ie,a0 as je,a1 as Be,a2 as Oe,a3 as qe,a4 as Ue,a5 as We,a6 as Ge,a7 as Ve,a8 as Ze,a9 as Ke,aa as Xe,ab as Ye,ac as Je,ad as Qe,ae as ea,af as aa,ag as ta,ah as na,ai as ra,aj as sa,ak as ia,al as oa,am as la,an as ua,ao as ca,ap as da,aq as ga,ar as pa,as as fa,n as ha,at as ma,au as va,av as ba,aw as ya,ax as wa,ay as xa,az as Aa,aA as Fa,o as Sa,aB as ka,aC as Ea,aD as Ca,aE as $a,aF as _a,aG as Ta,a as Pa,g as Ra,aH as La,aI as za,p as Ma,aJ as Ha,aK as Na,aL as Da,j as Ia,aM as ja,aN as Ba,k as Oa,aO as qa,r as Ua,aP as Wa,aQ as Ga,aR as Va,aS as Za,aT as Ka,aU as Xa,aV as Ya,aW as Ja,aX as Qa,aY as et,aZ as at,a_ as tt,a$ as nt,t as rt,b0 as st,b1 as it,b2 as ot,b3 as lt,b4 as ut,b5 as ct,b6 as dt,u as gt,b7 as pt,b8 as ft,b9 as ht,ba as mt,bb as vt,bc as bt,bd as yt,be as wt,bf as xt,q as At,bg as Ft,v as St,bh as kt,bi as Et,bj as Ct,bk as $t,bl as _t,bm as Tt,bn as Pt,w as Rt,bo as Lt,m as zt,bp as Mt,bq as Ht,br as Nt,bs as Dt}from"./index-64bef312.js";const It=()=>{},jt=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:te,Comment:ne,EffectScope:re,Fragment:se,KeepAlive:ie,ReactiveEffect:oe,Static:le,Suspense:ue,Teleport:ce,Text:de,Transition:ge,TransitionGroup:pe,VueElement:fe,assertNumber:he,callWithAsyncErrorHandling:me,callWithErrorHandling:ve,camelize:be,capitalize:ye,cloneVNode:we,compatUtils:xe,compile:It,computed:Ae,createApp:Fe,createBlock:Se,createCommentVNode:ke,createElementBlock:Ee,createElementVNode:Ce,createHydrationRenderer:$e,createPropsRestProxy:_e,createRenderer:Te,createSSRApp:Pe,createSlots:Re,createStaticVNode:Le,createTextVNode:ze,createVNode:Me,customRef:He,defineAsyncComponent:Ne,defineComponent:De,defineCustomElement:Ie,defineEmits:je,defineExpose:Be,defineProps:Oe,defineSSRCustomElement:qe,get devtools(){return Ue},effect:We,effectScope:Ge,getCurrentInstance:Ve,getCurrentScope:Ze,getTransitionRawChildren:Ke,guardReactiveProps:Xe,h:Ye,handleError:Je,hydrate:Qe,initCustomFormatter:ea,initDirectivesForSSR:aa,inject:ta,isMemoSame:na,isProxy:ra,isReactive:sa,isReadonly:ia,isRef:oa,isRuntimeOnly:la,isShallow:ua,isVNode:ca,markRaw:da,mergeDefaults:ga,mergeProps:pa,nextTick:fa,normalizeClass:ha,normalizeProps:ma,normalizeStyle:va,onActivated:ba,onBeforeMount:ya,onBeforeUnmount:wa,onBeforeUpdate:xa,onDeactivated:Aa,onErrorCaptured:Fa,onMounted:Sa,onRenderTracked:ka,onRenderTriggered:Ea,onScopeDispose:Ca,onServerPrefetch:$a,onUnmounted:_a,onUpdated:Ta,openBlock:Pa,popScopeId:Ra,provide:La,proxyRefs:za,pushScopeId:Ma,queuePostFlushCb:Ha,reactive:Na,readonly:Da,ref:Ia,registerRuntimeCompiler:ja,render:Ba,renderList:Oa,renderSlot:qa,resolveComponent:Ua,resolveDirective:Wa,resolveDynamicComponent:Ga,resolveFilter:Va,resolveTransitionHooks:Za,setBlockTracking:Ka,setDevtoolsHook:Xa,setTransitionHooks:Ya,shallowReactive:Ja,shallowReadonly:Qa,shallowRef:et,ssrContextKey:at,ssrUtils:tt,stop:nt,toDisplayString:rt,toHandlerKey:st,toHandlers:it,toRaw:ot,toRef:lt,toRefs:ut,transformVNodeArgs:ct,triggerRef:dt,unref:gt,useAttrs:pt,useCssModule:ft,useCssVars:ht,useSSRContext:mt,useSlots:vt,useTransitionState:bt,vModelCheckbox:yt,vModelDynamic:wt,vModelRadio:xt,vModelSelect:At,vModelText:Ft,vShow:St,version:kt,warn:Et,watch:Ct,watchEffect:$t,watchPostEffect:_t,watchSyncEffect:Tt,withAsyncContext:Pt,withCtx:Rt,withDefaults:Lt,withDirectives:zt,withKeys:Mt,withMemo:Ht,withModifiers:Nt,withScopeId:Dt},Symbol.toStringTag,{value:"Module"})),Bt=ee(jt);var K={exports:{}};(function(k){var _=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var i=function(d){var v=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,w=0,c={},n={manual:d.Prism&&d.Prism.manual,disableWorkerMessageHandler:d.Prism&&d.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof u?new u(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++w}),a.__id},clone:function a(e,t){t=t||{};var r,s;switch(n.util.type(e)){case"Object":if(s=n.util.objId(e),t[s])return t[s];r={},t[s]=r;for(var l in e)e.hasOwnProperty(l)&&(r[l]=a(e[l],t));return r;case"Array":return s=n.util.objId(e),t[s]?t[s]:(r=[],t[s]=r,e.forEach(function(g,o){r[o]=a(g,t)}),r);default:return e}},getLanguage:function(a){for(;a;){var e=v.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(v,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(r){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var t in e)if(e[t].src==a)return e[t]}return null}},isActive:function(a,e,t){for(var r="no-"+e;a;){var s=a.classList;if(s.contains(e))return!0;if(s.contains(r))return!1;a=a.parentElement}return!!t}},languages:{plain:c,plaintext:c,text:c,txt:c,extend:function(a,e){var t=n.util.clone(n.languages[a]);for(var r in e)t[r]=e[r];return t},insertBefore:function(a,e,t,r){r=r||n.languages;var s=r[a],l={};for(var g in s)if(s.hasOwnProperty(g)){if(g==e)for(var o in t)t.hasOwnProperty(o)&&(l[o]=t[o]);t.hasOwnProperty(g)||(l[g]=s[g])}var b=r[a];return r[a]=l,n.languages.DFS(n.languages,function(F,T){T===b&&F!=a&&(this[F]=l)}),l},DFS:function a(e,t,r,s){s=s||{};var l=n.util.objId;for(var g in e)if(e.hasOwnProperty(g)){t.call(e,g,e[g],r||g);var o=e[g],b=n.util.type(o);b==="Object"&&!s[l(o)]?(s[l(o)]=!0,a(o,t,null,s)):b==="Array"&&!s[l(o)]&&(s[l(o)]=!0,a(o,t,g,s))}}},plugins:{},highlightAll:function(a,e){n.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,t){var r={callback:t,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),n.hooks.run("before-all-elements-highlight",r);for(var s=0,l;l=r.elements[s++];)n.highlightElement(l,e===!0,r.callback)},highlightElement:function(a,e,t){var r=n.util.getLanguage(a),s=n.languages[r];n.util.setLanguage(a,r);var l=a.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(l,r);var g=a.textContent,o={element:a,language:r,grammar:s,code:g};function b(T){o.highlightedCode=T,n.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,n.hooks.run("after-highlight",o),n.hooks.run("complete",o),t&&t.call(o.element)}if(n.hooks.run("before-sanity-check",o),l=o.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code){n.hooks.run("complete",o),t&&t.call(o.element);return}if(n.hooks.run("before-highlight",o),!o.grammar){b(n.util.encode(o.code));return}if(e&&d.Worker){var F=new Worker(n.filename);F.onmessage=function(T){b(T.data)},F.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else b(n.highlight(o.code,o.grammar,o.language))},highlight:function(a,e,t){var r={code:a,grammar:e,language:t};if(n.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=n.tokenize(r.code,r.grammar),n.hooks.run("after-tokenize",r),u.stringify(n.util.encode(r.tokens),r.language)},tokenize:function(a,e){var t=e.rest;if(t){for(var r in t)e[r]=t[r];delete e.rest}var s=new p;return x(s,s.head,a),h(a,s,e,s.head,0),R(s)},hooks:{all:{},add:function(a,e){var t=n.hooks.all;t[a]=t[a]||[],t[a].push(e)},run:function(a,e){var t=n.hooks.all[a];if(!(!t||!t.length))for(var r=0,s;s=t[r++];)s(e)}},Token:u};d.Prism=n;function u(a,e,t,r){this.type=a,this.content=e,this.alias=t,this.length=(r||"").length|0}u.stringify=function a(e,t){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";return e.forEach(function(b){r+=a(b,t)}),r}var s={type:e.type,content:a(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(s.classes,l):s.classes.push(l)),n.hooks.run("wrap",s);var g="";for(var o in s.attributes)g+=" "+o+'="'+(s.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+g+">"+s.content+"</"+s.tag+">"};function f(a,e,t,r){a.lastIndex=e;var s=a.exec(t);if(s&&r&&s[1]){var l=s[1].length;s.index+=l,s[0]=s[0].slice(l)}return s}function h(a,e,t,r,s,l){for(var g in t)if(!(!t.hasOwnProperty(g)||!t[g])){var o=t[g];o=Array.isArray(o)?o:[o];for(var b=0;b<o.length;++b){if(l&&l.cause==g+","+b)return;var F=o[b],T=F.inside,U=!!F.lookbehind,W=!!F.greedy,X=F.alias;if(W&&!F.pattern.global){var Y=F.pattern.toString().match(/[imsuy]*$/)[0];F.pattern=RegExp(F.pattern.source,Y+"g")}for(var G=F.pattern||F,S=r.next,C=s;S!==e.tail&&!(l&&C>=l.reach);C+=S.value.length,S=S.next){var L=S.value;if(e.length>a.length)return;if(!(L instanceof u)){var M=1,E;if(W){if(E=f(G,C,a,U),!E||E.index>=a.length)break;var H=E.index,J=E.index+E[0].length,P=C;for(P+=S.value.length;H>=P;)S=S.next,P+=S.value.length;if(P-=S.value.length,C=P,S.value instanceof u)continue;for(var z=S;z!==e.tail&&(P<J||typeof z.value=="string");z=z.next)M++,P+=z.value.length;M--,L=a.slice(C,P),E.index-=C}else if(E=f(G,0,L,U),!E)continue;var H=E.index,N=E[0],j=L.slice(0,H),V=L.slice(H+N.length),B=C+L.length;l&&B>l.reach&&(l.reach=B);var D=S.prev;j&&(D=x(e,D,j),C+=j.length),$(e,D,M);var Q=new u(g,T?n.tokenize(N,T):N,X,N);if(S=x(e,D,Q),V&&x(e,S,V),M>1){var O={cause:g+","+b,reach:B};h(a,e,t,S.prev,C,O),l&&O.reach>l.reach&&(l.reach=O.reach)}}}}}}function p(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function x(a,e,t){var r=e.next,s={value:t,prev:e,next:r};return e.next=s,r.prev=s,a.length++,s}function $(a,e,t){for(var r=e.next,s=0;s<t&&r!==a.tail;s++)r=r.next;e.next=r,r.prev=e,a.length-=s}function R(a){for(var e=[],t=a.head.next;t!==a.tail;)e.push(t.value),t=t.next;return e}if(!d.document)return d.addEventListener&&(n.disableWorkerMessageHandler||d.addEventListener("message",function(a){var e=JSON.parse(a.data),t=e.language,r=e.code,s=e.immediateClose;d.postMessage(n.highlight(r,n.languages[t],t)),s&&d.close()},!1)),n;var y=n.util.currentScript();y&&(n.filename=y.src,y.hasAttribute("data-manual")&&(n.manual=!0));function m(){n.manual||n.highlightAll()}if(!n.manual){var A=document.readyState;A==="loading"||A==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",m):window.requestAnimationFrame?window.requestAnimationFrame(m):window.setTimeout(m,16)}return n}(_);k.exports&&(k.exports=i),typeof Z<"u"&&(Z.Prism=i),i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(d){d.type==="entity"&&(d.attributes.title=d.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(v,w){var c={};c["language-"+w]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[w]},c.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:c}};n["language-"+w]={pattern:/[\s\S]+/,inside:i.languages[w]};var u={};u[v]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return v}),"i"),lookbehind:!0,greedy:!0,inside:n},i.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(d,v){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+d+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[v,"language-"+v],inside:i.languages[v]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,function(d){var v=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;d.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+v.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+v.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+v.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+v.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:v,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},d.languages.css.atrule.inside.rest=d.languages.css;var w=d.languages.markup;w&&(w.tag.addInlined("style","css"),w.tag.addAttribute("style","css"))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),i.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),i.languages.js=i.languages.javascript,function(){if(typeof i>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var d="Loading…",v=function(y,m){return"✖ Error "+y+" while fetching file: "+m},w="✖ Error: File does not exist or is empty",c={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",u="loading",f="loaded",h="failed",p="pre[data-src]:not(["+n+'="'+f+'"]):not(['+n+'="'+u+'"])';function x(y,m,A){var a=new XMLHttpRequest;a.open("GET",y,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?m(a.responseText):a.status>=400?A(v(a.status,a.statusText)):A(w))},a.send(null)}function $(y){var m=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(m){var A=Number(m[1]),a=m[2],e=m[3];return a?e?[A,Number(e)]:[A,void 0]:[A,A]}}i.hooks.add("before-highlightall",function(y){y.selector+=", "+p}),i.hooks.add("before-sanity-check",function(y){var m=y.element;if(m.matches(p)){y.code="",m.setAttribute(n,u);var A=m.appendChild(document.createElement("CODE"));A.textContent=d;var a=m.getAttribute("data-src"),e=y.language;if(e==="none"){var t=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=c[t]||t}i.util.setLanguage(A,e),i.util.setLanguage(m,e);var r=i.plugins.autoloader;r&&r.loadLanguages(e),x(a,function(s){m.setAttribute(n,f);var l=$(m.getAttribute("data-range"));if(l){var g=s.split(/\r\n?|\n/g),o=l[0],b=l[1]==null?g.length:l[1];o<0&&(o+=g.length),o=Math.max(0,Math.min(o-1,g.length)),b<0&&(b+=g.length),b=Math.max(0,Math.min(b,g.length)),s=g.slice(o,b).join(`
`),m.hasAttribute("data-start")||m.setAttribute("data-start",String(o+1))}A.textContent=s,i.highlightElement(A)},function(s){m.setAttribute(n,h),A.textContent=s})}}),i.plugins.fileHighlight={highlight:function(m){for(var A=(m||document).querySelectorAll(p),a=0,e;e=A[a++];)i.highlightElement(e)}};var R=!1;i.fileHighlight=function(){R||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),R=!0),i.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(K);var Ot=K.exports;function qt(k){return k&&typeof k=="object"&&"default"in k?k.default:k}var I=Bt,q=qt(Ot),Ut=I.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(_,i){var d=i.slots,v=i.attrs,w=d&&d.default&&d.default()||[],c=_.code||w&&w.length?w[0].children:"",n=_.inline,u=_.language,f=q.languages[u],h="language-".concat(u);return function(){return n?I.h("code",{class:[h],innerHTML:q.highlight(c,f)}):I.h("pre",Object.assign({},v,{class:[v.class,h]}),[I.h("code",Object.assign({},v,{class:[v.class,h],innerHTML:q.highlight(c,f)}))])}}}),Wt=Ut;const Zt=ae(Wt);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(){if(typeof Prism>"u"||typeof document>"u")return;var k="line-numbers",_=/\n(?!$)/g,i=Prism.plugins.lineNumbers={getLine:function(c,n){if(!(c.tagName!=="PRE"||!c.classList.contains(k))){var u=c.querySelector(".line-numbers-rows");if(u){var f=parseInt(c.getAttribute("data-start"),10)||1,h=f+(u.children.length-1);n<f&&(n=f),n>h&&(n=h);var p=n-f;return u.children[p]}}},resize:function(c){d([c])},assumeViewportIndependence:!0};function d(c){if(c=c.filter(function(u){var f=v(u),h=f["white-space"];return h==="pre-wrap"||h==="pre-line"}),c.length!=0){var n=c.map(function(u){var f=u.querySelector("code"),h=u.querySelector(".line-numbers-rows");if(!(!f||!h)){var p=u.querySelector(".line-numbers-sizer"),x=f.textContent.split(_);p||(p=document.createElement("span"),p.className="line-numbers-sizer",f.appendChild(p)),p.innerHTML="0",p.style.display="block";var $=p.getBoundingClientRect().height;return p.innerHTML="",{element:u,lines:x,lineHeights:[],oneLinerHeight:$,sizer:p}}}).filter(Boolean);n.forEach(function(u){var f=u.sizer,h=u.lines,p=u.lineHeights,x=u.oneLinerHeight;p[h.length-1]=void 0,h.forEach(function($,R){if($&&$.length>1){var y=f.appendChild(document.createElement("span"));y.style.display="block",y.textContent=$}else p[R]=x})}),n.forEach(function(u){for(var f=u.sizer,h=u.lineHeights,p=0,x=0;x<h.length;x++)h[x]===void 0&&(h[x]=f.children[p++].getBoundingClientRect().height)}),n.forEach(function(u){var f=u.sizer,h=u.element.querySelector(".line-numbers-rows");f.style.display="none",f.innerHTML="",u.lineHeights.forEach(function(p,x){h.children[x].style.height=p+"px"})})}}function v(c){return c?window.getComputedStyle?getComputedStyle(c):c.currentStyle||null:null}var w=void 0;window.addEventListener("resize",function(){i.assumeViewportIndependence&&w===window.innerWidth||(w=window.innerWidth,d(Array.prototype.slice.call(document.querySelectorAll("pre."+k))))}),Prism.hooks.add("complete",function(c){if(c.code){var n=c.element,u=n.parentNode;if(!(!u||!/pre/i.test(u.nodeName))&&!n.querySelector(".line-numbers-rows")&&Prism.util.isActive(n,k)){n.classList.remove(k),u.classList.add(k);var f=c.code.match(_),h=f?f.length+1:1,p,x=new Array(h+1).join("<span></span>");p=document.createElement("span"),p.setAttribute("aria-hidden","true"),p.className="line-numbers-rows",p.innerHTML=x,u.hasAttribute("data-start")&&(u.style.counterReset="linenumber "+(parseInt(u.getAttribute("data-start"),10)-1)),c.element.appendChild(p),d([u]),Prism.hooks.run("line-numbers",c)}}}),Prism.hooks.add("line-numbers",function(c){c.plugins=c.plugins||{},c.plugins.lineNumbers=!0})})();export{Zt as P};
