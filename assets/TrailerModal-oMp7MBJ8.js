const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YouTube-Cuw3YV0x.js","assets/index-Cek9NrmT.js","assets/index-BSecy2zs.css","assets/SoundCloud-Dbfilxb_.js","assets/Vimeo-DZBf-HjX.js","assets/Mux-CzZcaGaY.js","assets/Facebook-j9ByjChg.js","assets/Streamable-zSf3D8Ib.js","assets/Wistia-HxE8-4Ey.js","assets/Twitch-BovuwZCX.js","assets/DailyMotion-UVJ2-nw2.js","assets/Mixcloud-1Exj7L-C.js","assets/Vidyard-D8rbvCNj.js","assets/Kaltura-mYGlWpgA.js","assets/FilePlayer-EG-0Azli.js","assets/Preview--0UlOCh7.js"])))=>i.map(i=>d[i]);
import{r as w,_ as g,i as Ge,k as J,m as et,j as E}from"./index-Cek9NrmT.js";import{p as tt}from"./logo-DvKZwPeE.js";import{a as rt,P as at}from"./Layout-Cx7DDjne.js";const nt=e=>{const t=rt(),[r,a]=w.useState(!1),[n,o]=w.useState(!0),c=w.useRef(null),i=w.useRef(null),s=w.useRef(null),h=w.useRef(null),_=()=>{a(v=>v=!v)},T=()=>{var v;o(!1),(v=s.current)==null||v.classList.add("visually-hidden","active")},q=()=>{var v,I,C,j,$,D,ce;(v=s.current)==null||v.classList.remove("visually-hidden"),(I=i.current)==null||I.classList.remove("visually-hidden"),(C=h.current)==null||C.classList.remove("visually-hidden"),(j=h.current)==null||j.classList.add("on-play"),t<1024&&(($=s.current)==null||$.classList.add("active"),(D=h.current)==null||D.classList.remove("paused"),(ce=i.current)==null||ce.classList.add("active"))},S=()=>{var v,I,C,j,$,D;a(!1),(v=s.current)==null||v.classList.remove("visually-hidden"),(I=h.current)==null||I.classList.remove("on-play"),(C=i.current)==null||C.classList.remove("visually-hidden"),t<1024&&((j=s.current)==null||j.classList.remove("active"),($=h.current)==null||$.classList.add("paused"),(D=i.current)==null||D.classList.remove("active"))};return w.useEffect(()=>{e&&c.current?a(!0):a(!1)},[e,c]),{isPlaying:r,loading:n,playerRef:c,titleBlockRef:i,closeButtonRef:s,playButtonRef:h,playTrailer:_,handleOnReady:T,handleOnPlay:q,handleOnPause:S}};var ot=function(t,r,a){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&st(o,r.attrs),r.text&&(o.text=""+r.text);var c="onload"in o?pe:it;c(o,a),o.onload||pe(o,a),n.appendChild(o)};function st(e,t){for(var r in t)e.setAttribute(r,t[r])}function pe(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function it(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var lt=function(t){return ut(t)&&!ct(t)};function ut(e){return!!e&&typeof e=="object"}function ct(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||dt(e)}var pt=typeof Symbol=="function"&&Symbol.for,ft=pt?Symbol.for("react.element"):60103;function dt(e){return e.$$typeof===ft}function yt(e){return Array.isArray(e)?[]:{}}function k(e,t){return t.clone!==!1&&t.isMergeableObject(e)?L(yt(e),e,t):e}function ht(e,t,r){return e.concat(t).map(function(a){return k(a,r)})}function _t(e,t){if(!t.customMerge)return L;var r=t.customMerge(e);return typeof r=="function"?r:L}function mt(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function fe(e){return Object.keys(e).concat(mt(e))}function Pe(e,t){try{return t in e}catch{return!1}}function Pt(e,t){return Pe(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function vt(e,t,r){var a={};return r.isMergeableObject(e)&&fe(e).forEach(function(n){a[n]=k(e[n],r)}),fe(t).forEach(function(n){Pt(e,n)||(Pe(e,n)&&r.isMergeableObject(t[n])?a[n]=_t(n,r)(e[n],t[n],r):a[n]=k(t[n],r))}),a}function L(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||ht,r.isMergeableObject=r.isMergeableObject||lt,r.cloneUnlessOtherwiseSpecified=k;var a=Array.isArray(t),n=Array.isArray(e),o=a===n;return o?a?r.arrayMerge(e,t,r):vt(e,t,r):k(t,r)}L.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return L(a,n,r)},{})};var Ot=L,ve=Ot,gt=Object.create,F=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,wt=Object.getOwnPropertyNames,Tt=Object.getPrototypeOf,Et=Object.prototype.hasOwnProperty,St=(e,t)=>{for(var r in t)F(e,r,{get:t[r],enumerable:!0})},Oe=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of wt(t))!Et.call(e,n)&&n!==r&&F(e,n,{get:()=>t[n],enumerable:!(a=bt(t,n))||a.enumerable});return e},ne=(e,t,r)=>(r=e!=null?gt(Tt(e)):{},Oe(!e||!e.__esModule?F(r,"default",{value:e,enumerable:!0}):r,e)),At=e=>Oe(F({},"__esModule",{value:!0}),e),ge={};St(ge,{callPlayer:()=>Bt,getConfig:()=>Vt,getSDK:()=>Ht,isBlobUrl:()=>Wt,isMediaStream:()=>Ft,lazy:()=>It,omit:()=>zt,parseEndTime:()=>xt,parseStartTime:()=>Nt,queryString:()=>kt,randomString:()=>Ut,supportsWebKitPresentationMode:()=>Kt});var W=At(ge),Rt=ne(w),Mt=ne(ot),Lt=ne(ve);const It=e=>Rt.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),Ct=/[?&#](?:start|t)=([0-9hms]+)/,jt=/[?&#]end=([0-9hms]+)/,ee=/(\d+)(h|m|s)/g,$t=/^\d+$/;function be(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const a=r[1];if(a.match(ee))return Dt(a);if($t.test(a))return parseInt(a)}}function Dt(e){let t=0,r=ee.exec(e);for(;r!==null;){const[,a,n]=r;n==="h"&&(t+=parseInt(a,10)*60*60),n==="m"&&(t+=parseInt(a,10)*60),n==="s"&&(t+=parseInt(a,10)),r=ee.exec(e)}return t}function Nt(e){return be(e,Ct)}function xt(e){return be(e,jt)}function Ut(){return Math.random().toString(36).substr(2,5)}function kt(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function Z(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const A={},Ht=function(t,r,a=null,n=()=>!0,o=Mt.default){const c=Z(r);return c&&n(c)?Promise.resolve(c):new Promise((i,s)=>{if(A[t]){A[t].push({resolve:i,reject:s});return}A[t]=[{resolve:i,reject:s}];const h=_=>{A[t].forEach(T=>T.resolve(_))};if(a){const _=window[a];window[a]=function(){_&&_(),h(Z(r))}}o(t,_=>{_?(A[t].forEach(T=>T.reject(_)),A[t]=null):a||h(Z(r))})})};function Vt(e,t){return(0,Lt.default)(t.config,e.config)}function zt(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const o of n)r.indexOf(o)===-1&&(a[o]=e[o]);return a}function Bt(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function Ft(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Wt(e){return/^blob:/.test(e)}function Kt(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var oe=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Yt=Object.getOwnPropertyNames,qt=Object.prototype.hasOwnProperty,Jt=(e,t)=>{for(var r in t)oe(e,r,{get:t[r],enumerable:!0})},Zt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Yt(t))!qt.call(e,n)&&n!==r&&oe(e,n,{get:()=>t[n],enumerable:!(a=Xt(t,n))||a.enumerable});return e},Qt=e=>Zt(oe({},"__esModule",{value:!0}),e),we={};Jt(we,{AUDIO_EXTENSIONS:()=>se,DASH_EXTENSIONS:()=>xe,FLV_EXTENSIONS:()=>Ue,HLS_EXTENSIONS:()=>le,MATCH_URL_DAILYMOTION:()=>je,MATCH_URL_FACEBOOK:()=>Ae,MATCH_URL_FACEBOOK_WATCH:()=>Re,MATCH_URL_KALTURA:()=>Ne,MATCH_URL_MIXCLOUD:()=>$e,MATCH_URL_MUX:()=>Se,MATCH_URL_SOUNDCLOUD:()=>Te,MATCH_URL_STREAMABLE:()=>Me,MATCH_URL_TWITCH_CHANNEL:()=>Ce,MATCH_URL_TWITCH_VIDEO:()=>Ie,MATCH_URL_VIDYARD:()=>De,MATCH_URL_VIMEO:()=>Ee,MATCH_URL_WISTIA:()=>Le,MATCH_URL_YOUTUBE:()=>te,VIDEO_EXTENSIONS:()=>ie,canPlay:()=>er});var Gt=Qt(we),de=W;const te=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Te=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,Ee=/vimeo\.com\/(?!progressive_redirect).+/,Se=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Ae=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,Re=/^https?:\/\/fb\.watch\/.+$/,Me=/streamable\.com\/([a-z0-9]+)$/,Le=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,Ie=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,Ce=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,je=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,$e=/mixcloud\.com\/([^/]+\/[^/]+)/,De=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Ne=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,se=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,ie=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,le=/\.(m3u8)($|\?)/i,xe=/\.(mpd)($|\?)/i,Ue=/\.(flv)($|\?)/i,re=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&re(t)||re(t.src))return!0;return!1}return(0,de.isMediaStream)(e)||(0,de.isBlobUrl)(e)?!0:se.test(e)||ie.test(e)||le.test(e)||xe.test(e)||Ue.test(e)},er={youtube:e=>e instanceof Array?e.every(t=>te.test(t)):te.test(e),soundcloud:e=>Te.test(e)&&!se.test(e),vimeo:e=>Ee.test(e)&&!ie.test(e)&&!le.test(e),mux:e=>Se.test(e),facebook:e=>Ae.test(e)||Re.test(e),streamable:e=>Me.test(e),wistia:e=>Le.test(e),twitch:e=>Ie.test(e)||Ce.test(e),dailymotion:e=>je.test(e),mixcloud:e=>$e.test(e),vidyard:e=>De.test(e),kaltura:e=>Ne.test(e),file:re};var ue=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,rr=Object.getOwnPropertyNames,ar=Object.prototype.hasOwnProperty,nr=(e,t)=>{for(var r in t)ue(e,r,{get:t[r],enumerable:!0})},or=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of rr(t))!ar.call(e,n)&&n!==r&&ue(e,n,{get:()=>t[n],enumerable:!(a=tr(t,n))||a.enumerable});return e},sr=e=>or(ue({},"__esModule",{value:!0}),e),ke={};nr(ke,{default:()=>lr});var ir=sr(ke),O=W,m=Gt,lr=[{key:"youtube",name:"YouTube",canPlay:m.canPlay.youtube,lazyPlayer:(0,O.lazy)(()=>g(()=>import("./YouTube-Cuw3YV0x.js").then(e=>e.Y),__vite__mapDeps([0,1,2])))},{key:"soundcloud",name:"SoundCloud",canPlay:m.canPlay.soundcloud,lazyPlayer:(0,O.lazy)(()=>g(()=>import("./SoundCloud-Dbfilxb_.js").then(e=>e.S),__vite__mapDeps([3,1,2])))},{key:"vimeo",name:"Vimeo",canPlay:m.canPlay.vimeo,lazyPlayer:(0,O.lazy)(()=>g(()=>import("./Vimeo-DZBf-HjX.js").then(e=>e.V),__vite__mapDeps([4,1,2])))},{key:"mux",name:"Mux",canPlay:m.canPlay.mux,lazyPlayer:(0,O.lazy)(()=>g(()=>import("./Mux-CzZcaGaY.js").then(e=>e.M),__vite__mapDeps([5,1,2])))},{key:"facebook",name:"Facebook",canPlay:m.canPlay.facebook,lazyPlayer:(0,O.lazy)(()=>g(()=>import("./Facebook-j9ByjChg.js").then(e=>e.F),__vite__mapDeps([6,1,2])))},{key:"streamable",name:"Streamable",canPlay:m.canPlay.streamable,lazyPlayer:(0,O.lazy)(()=>g(()=>import("./Streamable-zSf3D8Ib.js").then(e=>e.S),__vite__mapDeps([7,1,2])))},{key:"wistia",name:"Wistia",canPlay:m.canPlay.wistia,lazyPlayer:(0,O.lazy)(()=>g(()=>import("./Wistia-HxE8-4Ey.js").then(e=>e.W),__vite__mapDeps([8,1,2])))},{key:"twitch",name:"Twitch",canPlay:m.canPlay.twitch,lazyPlayer:(0,O.lazy)(()=>g(()=>import("./Twitch-BovuwZCX.js").then(e=>e.T),__vite__mapDeps([9,1,2])))},{key:"dailymotion",name:"DailyMotion",canPlay:m.canPlay.dailymotion,lazyPlayer:(0,O.lazy)(()=>g(()=>import("./DailyMotion-UVJ2-nw2.js").then(e=>e.D),__vite__mapDeps([10,1,2])))},{key:"mixcloud",name:"Mixcloud",canPlay:m.canPlay.mixcloud,lazyPlayer:(0,O.lazy)(()=>g(()=>import("./Mixcloud-1Exj7L-C.js").then(e=>e.M),__vite__mapDeps([11,1,2])))},{key:"vidyard",name:"Vidyard",canPlay:m.canPlay.vidyard,lazyPlayer:(0,O.lazy)(()=>g(()=>import("./Vidyard-D8rbvCNj.js").then(e=>e.V),__vite__mapDeps([12,1,2])))},{key:"kaltura",name:"Kaltura",canPlay:m.canPlay.kaltura,lazyPlayer:(0,O.lazy)(()=>g(()=>import("./Kaltura-mYGlWpgA.js").then(e=>e.K),__vite__mapDeps([13,1,2])))},{key:"file",name:"FilePlayer",canPlay:m.canPlay.file,canEnablePIP:e=>m.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,O.supportsWebKitPresentationMode)())&&!m.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,O.lazy)(()=>g(()=>import("./FilePlayer-EG-0Azli.js").then(e=>e.F),__vite__mapDeps([14,1,2])))}],ye=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ur(e,t){return!!(e===t||ye(e)&&ye(t))}function cr(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!ur(e[r],t[r]))return!1;return!0}function pr(e,t){t===void 0&&(t=cr);var r,a=[],n,o=!1;function c(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return o&&r===this&&t(i,a)||(n=e.apply(this,i),o=!0,r=this,a=i),n}return c}const fr=Object.freeze(Object.defineProperty({__proto__:null,default:pr},Symbol.toStringTag,{value:"Module"})),dr=Ge(fr);var yr=typeof Element<"u",hr=typeof Map=="function",_r=typeof Set=="function",mr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function B(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!B(e[a],t[a]))return!1;return!0}var o;if(hr&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;for(o=e.entries();!(a=o.next()).done;)if(!B(a.value[1],t.get(a.value[0])))return!1;return!0}if(_r&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(mr&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[a]))return!1;if(yr&&e instanceof Element)return!1;for(a=r;a--!==0;)if(!((n[a]==="_owner"||n[a]==="__v"||n[a]==="__o")&&e.$$typeof)&&!B(e[n[a]],t[n[a]]))return!1;return!0}return e!==e&&t!==t}var He=function(t,r){try{return B(t,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},Pr=Object.create,K=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,Or=Object.getOwnPropertyNames,gr=Object.getPrototypeOf,br=Object.prototype.hasOwnProperty,wr=(e,t)=>{for(var r in t)K(e,r,{get:t[r],enumerable:!0})},Ve=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Or(t))!br.call(e,n)&&n!==r&&K(e,n,{get:()=>t[n],enumerable:!(a=vr(t,n))||a.enumerable});return e},Tr=(e,t,r)=>(r=e!=null?Pr(gr(e)):{},Ve(!e||!e.__esModule?K(r,"default",{value:e,enumerable:!0}):r,e)),Er=e=>Ve(K({},"__esModule",{value:!0}),e),ze={};wr(ze,{defaultProps:()=>Rr,propTypes:()=>Ar});var Be=Er(ze),Sr=Tr(tt);const{string:f,bool:P,number:R,array:Q,oneOfType:N,shape:b,object:y,func:p,node:he}=Sr.default,Ar={url:N([f,Q,y]),playing:P,loop:P,controls:P,volume:R,muted:P,playbackRate:R,width:N([f,R]),height:N([f,R]),style:y,progressInterval:R,playsinline:P,pip:P,stopOnUnmount:P,light:N([P,f,y]),playIcon:he,previewTabIndex:R,previewAriaLabel:f,fallback:he,oEmbedUrl:f,wrapper:N([f,p,b({render:p.isRequired})]),config:b({soundcloud:b({options:y}),youtube:b({playerVars:y,embedOptions:y,onUnstarted:p}),facebook:b({appId:f,version:f,playerId:f,attributes:y}),dailymotion:b({params:y}),vimeo:b({playerOptions:y,title:f}),mux:b({attributes:y,version:f}),file:b({attributes:y,tracks:Q,forceVideo:P,forceAudio:P,forceHLS:P,forceSafariHLS:P,forceDisableHls:P,forceDASH:P,forceFLV:P,hlsOptions:y,hlsVersion:f,dashVersion:f,flvVersion:f}),wistia:b({options:y,playerId:f,customControls:Q}),mixcloud:b({options:y}),twitch:b({options:y,playerId:f}),vidyard:b({options:y})}),onReady:p,onStart:p,onPlay:p,onPause:p,onBuffer:p,onBufferEnd:p,onEnded:p,onError:p,onDuration:p,onSeek:p,onPlaybackRateChange:p,onPlaybackQualityChange:p,onProgress:p,onClickPreview:p,onEnablePIP:p,onDisablePIP:p},d=()=>{},Rr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:d},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:d,onStart:d,onPlay:d,onPause:d,onBuffer:d,onBufferEnd:d,onEnded:d,onError:d,onDuration:d,onSeek:d,onPlaybackRateChange:d,onPlaybackQualityChange:d,onProgress:d,onClickPreview:d,onEnablePIP:d,onDisablePIP:d};var Mr=Object.create,H=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,Ir=Object.getOwnPropertyNames,Cr=Object.getPrototypeOf,jr=Object.prototype.hasOwnProperty,$r=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Dr=(e,t)=>{for(var r in t)H(e,r,{get:t[r],enumerable:!0})},Fe=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ir(t))!jr.call(e,n)&&n!==r&&H(e,n,{get:()=>t[n],enumerable:!(a=Lr(t,n))||a.enumerable});return e},We=(e,t,r)=>(r=e!=null?Mr(Cr(e)):{},Fe(!e||!e.__esModule?H(r,"default",{value:e,enumerable:!0}):r,e)),Nr=e=>Fe(H({},"__esModule",{value:!0}),e),u=(e,t,r)=>($r(e,typeof t!="symbol"?t+"":t,r),r),Ke={};Dr(Ke,{default:()=>X});var xr=Nr(Ke),_e=We(w),Ur=We(He),Xe=Be,kr=W;const Hr=5e3;class X extends _e.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"isReady",!1),u(this,"isPlaying",!1),u(this,"isLoading",!0),u(this,"loadOnReady",null),u(this,"startOnPlay",!0),u(this,"seekOnPlay",null),u(this,"onDurationCalled",!1),u(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),u(this,"getInternalPlayer",t=>this.player?this.player[t]:null),u(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),a=this.getDuration();if(a){const n={playedSeconds:t,played:t/a};r!==null&&(n.loadedSeconds=r,n.loaded=r/a),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),u(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:a,muted:n}=this.props;t(),!n&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),u(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),u(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),u(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:a}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,a())}),u(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),u(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),u(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:a,volume:n,muted:o,playbackRate:c,pip:i,loop:s,activePlayer:h,disableDeferredLoading:_}=this.props;if(!(0,Ur.default)(t.url,r)){if(this.isLoading&&!h.forceLoad&&!_&&!(0,kr.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==n&&n!==null&&this.player.setVolume(n),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),n!==null&&setTimeout(()=>this.player.setVolume(n)))),t.playbackRate!==c&&this.player.setPlaybackRate&&this.player.setPlaybackRate(c),t.loop!==s&&this.player.setLoop&&this.player.setLoop(s)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},Hr));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?_e.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}u(X,"displayName","Player");u(X,"propTypes",Xe.propTypes);u(X,"defaultProps",Xe.defaultProps);var Vr=Object.create,V=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,Br=Object.getOwnPropertyNames,Fr=Object.getPrototypeOf,Wr=Object.prototype.hasOwnProperty,Kr=(e,t,r)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Xr=(e,t)=>{for(var r in t)V(e,r,{get:t[r],enumerable:!0})},Ye=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Br(t))!Wr.call(e,n)&&n!==r&&V(e,n,{get:()=>t[n],enumerable:!(a=zr(t,n))||a.enumerable});return e},z=(e,t,r)=>(r=e!=null?Vr(Fr(e)):{},Ye(!e||!e.__esModule?V(r,"default",{value:e,enumerable:!0}):r,e)),Yr=e=>Ye(V({},"__esModule",{value:!0}),e),l=(e,t,r)=>(Kr(e,typeof t!="symbol"?t+"":t,r),r),qe={};Xr(qe,{createReactPlayer:()=>aa});var qr=Yr(qe),M=z(w),Jr=z(ve),G=z(dr),me=z(He),U=Be,Je=W,Zr=z(xr);const Qr=(0,Je.lazy)(()=>g(()=>import("./Preview--0UlOCh7.js").then(e=>e.P),__vite__mapDeps([15,1,2]))),Gr=typeof window<"u"&&window.document&&typeof document<"u",ea=typeof J<"u"&&J.window&&J.window.document,ta=Object.keys(U.propTypes),ra=Gr||ea?M.Suspense:()=>null,x=[],aa=(e,t)=>{var r;return r=class extends M.Component{constructor(){super(...arguments),l(this,"state",{showPreview:!!this.props.light}),l(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),l(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),l(this,"showPreview",()=>{this.setState({showPreview:!0})}),l(this,"getDuration",()=>this.player?this.player.getDuration():null),l(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),l(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),l(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),l(this,"seekTo",(a,n,o)=>{if(!this.player)return null;this.player.seekTo(a,n,o)}),l(this,"handleReady",()=>{this.props.onReady(this)}),l(this,"getActivePlayer",(0,G.default)(a=>{for(const n of[...x,...e])if(n.canPlay(a))return n;return t||null})),l(this,"getConfig",(0,G.default)((a,n)=>{const{config:o}=this.props;return Jr.default.all([U.defaultProps.config,U.defaultProps.config[n]||{},o,o[n]||{}])})),l(this,"getAttributes",(0,G.default)(a=>(0,Je.omit)(this.props,ta))),l(this,"renderActivePlayer",a=>{if(!a)return null;const n=this.getActivePlayer(a);if(!n)return null;const o=this.getConfig(a,n.key);return M.default.createElement(Zr.default,{...this.props,key:n.key,ref:this.references.player,config:o,activePlayer:n.lazyPlayer||n,onReady:this.handleReady})})}shouldComponentUpdate(a,n){return!(0,me.default)(this.props,a)||!(0,me.default)(this.state,n)}componentDidUpdate(a){const{light:n}=this.props;!a.light&&n&&this.setState({showPreview:!0}),a.light&&!n&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:n,playIcon:o,previewTabIndex:c,oEmbedUrl:i,previewAriaLabel:s}=this.props;return M.default.createElement(Qr,{url:a,light:n,playIcon:o,previewTabIndex:c,previewAriaLabel:s,oEmbedUrl:i,onClick:this.handleClickPreview})}render(){const{url:a,style:n,width:o,height:c,fallback:i,wrapper:s}=this.props,{showPreview:h}=this.state,_=this.getAttributes(a),T=typeof s=="string"?this.references.wrapper:void 0;return M.default.createElement(s,{ref:T,style:{...n,width:o,height:c},..._},M.default.createElement(ra,{fallback:i},h?this.renderPreview(a):this.renderActivePlayer(a)))}},l(r,"displayName","ReactPlayer"),l(r,"propTypes",U.propTypes),l(r,"defaultProps",U.defaultProps),l(r,"addCustomPlayer",a=>{x.push(a)}),l(r,"removeCustomPlayers",()=>{x.length=0}),l(r,"canPlay",a=>{for(const n of[...x,...e])if(n.canPlay(a))return!0;return!1}),l(r,"canEnablePIP",a=>{for(const n of[...x,...e])if(n.canEnablePIP&&n.canEnablePIP(a))return!0;return!1}),r};var na=Object.create,Y=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,sa=Object.getOwnPropertyNames,ia=Object.getPrototypeOf,la=Object.prototype.hasOwnProperty,ua=(e,t)=>{for(var r in t)Y(e,r,{get:t[r],enumerable:!0})},Ze=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of sa(t))!la.call(e,n)&&n!==r&&Y(e,n,{get:()=>t[n],enumerable:!(a=oa(t,n))||a.enumerable});return e},ca=(e,t,r)=>(r=e!=null?na(ia(e)):{},Ze(!e||!e.__esModule?Y(r,"default",{value:e,enumerable:!0}):r,e)),pa=e=>Ze(Y({},"__esModule",{value:!0}),e),Qe={};ua(Qe,{default:()=>ha});var fa=pa(Qe),ae=ca(ir),da=qr;const ya=ae.default[ae.default.length-1];var ha=(0,da.createReactPlayer)(ae.default,ya);const _a=et(fa),ma=({film:e,active:t,handleModalCall:r})=>{const{isPlaying:a,loading:n,playerRef:o,titleBlockRef:c,closeButtonRef:i,playButtonRef:s,playTrailer:h,handleOnReady:_,handleOnPlay:T,handleOnPause:q}=nt(t);return E.jsx("div",{className:t?"trailer-modal is-active":"trailer-modal",onClick:S=>{const v=S.target;v instanceof HTMLElement&&v.className==="trailer-modal is-active"&&r()},children:E.jsxs("div",{className:"trailer-modal__inner",children:[E.jsx("button",{className:"trailer-modal__play visually-hidden",ref:s,onClick:h,"aria-label":"Проиграть трейлер"}),E.jsx("button",{className:"trailer-modal__close",ref:i,onClick:()=>{var S;(S=o.current)==null||S.seekTo(0),r()},"aria-label":"Закрыть окно"}),E.jsx("div",{className:"trailer-modal__title active visually-hidden",ref:c,children:E.jsx("p",{children:e.title})}),t&&n&&E.jsx(at,{}),E.jsx(_a,{className:"player",url:e.trailerUrl,ref:o,width:"100%",height:"100%",volume:.5,controls:!1,playing:a,onReady:()=>_(),onPlay:()=>T(),onPause:()=>q(),onEnded:()=>r(),onDisablePIP:()=>r(),config:{youtube:{playerVars:{showinfo:0,rel:0,modestBranding:1}}}})]})})},ga=Object.freeze(Object.defineProperty({__proto__:null,default:ma},Symbol.toStringTag,{value:"Module"}));export{ga as T,Gt as p,W as u};
