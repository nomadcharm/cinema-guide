import{r as V}from"./index-CccpuDcG.js";function ge(r,e){if(r==null)return{};var i={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;i[n]=r[n]}return i}function N(){return N=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)({}).hasOwnProperty.call(i,n)&&(r[n]=i[n])}return r},N.apply(null,arguments)}function Y(r,e){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},Y(r,e)}function we(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Y(r,e)}function Z(r,e,i){if(i||arguments.length===2)for(var n=0,t=e.length,o;n<t;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return r.concat(o||Array.prototype.slice.call(e))}/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var K=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,Se=/\\([\u000b\u0020-\u00ff])/g,be=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,Ae=xe;function xe(r){if(!r)throw new TypeError("argument string is required");var e=typeof r=="object"?Re(r):r;if(typeof e!="string")throw new TypeError("argument string is required to be a string");var i=e.indexOf(";"),n=i!==-1?e.slice(0,i).trim():e.trim();if(!be.test(n))throw new TypeError("invalid media type");var t=new je(n.toLowerCase());if(i!==-1){var o,a,s;for(K.lastIndex=i;a=K.exec(e);){if(a.index!==i)throw new TypeError("invalid parameter format");i+=a[0].length,o=a[1].toLowerCase(),s=a[2],s.charCodeAt(0)===34&&(s=s.slice(1,-1),s.indexOf("\\")!==-1&&(s=s.replace(Se,"$1"))),t.parameters[o]=s}if(i!==e.length)throw new TypeError("invalid parameter format")}return t}function Re(r){var e;if(typeof r.getHeader=="function"?e=r.getHeader("content-type"):typeof r.headers=="object"&&(e=r.headers&&r.headers["content-type"]),typeof e!="string")throw new TypeError("content-type header is missing from object");return e}function je(r){this.parameters=Object.create(null),this.type=r}var W=new Map,oe=function(e){return e.cloneNode(!0)},ee=function(){return window.location.protocol==="file:"},ae=function(e,i,n){var t=new XMLHttpRequest;t.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&t.readyState===2){var o=t.getResponseHeader("Content-Type");if(!o)throw new Error("Content type not found");var a=Ae(o).type;if(!(a==="image/svg+xml"||a==="text/plain"))throw new Error("Invalid content type: ".concat(a))}if(t.readyState===4){if(t.status===404||t.responseXML===null)throw new Error(ee()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(t.status===200||ee()&&t.status===0)n(null,t);else throw new Error("There was a problem injecting the SVG: "+t.status+" "+t.statusText)}}catch(s){if(t.abort(),s instanceof Error)n(s,t);else throw s}},t.open("GET",e),t.withCredentials=i,t.overrideMimeType&&t.overrideMimeType("text/xml"),t.send()},x={},te=function(e,i){x[e]=x[e]||[],x[e].push(i)},Ce=function(e){for(var i=function(a,s){setTimeout(function(){if(Array.isArray(x[e])){var c=W.get(e),p=x[e][a];c instanceof SVGSVGElement&&p(null,oe(c)),c instanceof Error&&p(c),a===x[e].length-1&&delete x[e]}},0)},n=0,t=x[e].length;n<t;n++)i(n)},qe=function(e,i,n){if(W.has(e)){var t=W.get(e);if(t===void 0){te(e,n);return}if(t instanceof SVGSVGElement){n(null,oe(t));return}}W.set(e,void 0),te(e,n),ae(e,i,function(o,a){var s;o?W.set(e,o):((s=a.responseXML)===null||s===void 0?void 0:s.documentElement)instanceof SVGSVGElement&&W.set(e,a.responseXML.documentElement),Ce(e)})},Ie=function(e,i,n){ae(e,i,function(t,o){var a;t?n(t):((a=o.responseXML)===null||a===void 0?void 0:a.documentElement)instanceof SVGSVGElement&&n(null,o.responseXML.documentElement)})},Te=0,Oe=function(){return++Te},w=[],re={},Ge="http://www.w3.org/2000/svg",$="http://www.w3.org/1999/xlink",ne=function(e,i,n,t,o,a,s){var c=e.getAttribute("data-src")||e.getAttribute("src");if(!c){s(new Error("Invalid data-src or src attribute"));return}if(w.indexOf(e)!==-1){w.splice(w.indexOf(e),1),e=null;return}w.push(e),e.setAttribute("src","");var p=t?qe:Ie;p(c,o,function(T,u){if(!u){w.splice(w.indexOf(e),1),e=null,s(T);return}var R=e.getAttribute("id");R&&u.setAttribute("id",R);var A=e.getAttribute("title");A&&u.setAttribute("title",A);var j=e.getAttribute("width");j&&u.setAttribute("width",j);var C=e.getAttribute("height");C&&u.setAttribute("height",C);var m=Array.from(new Set(Z(Z(Z([],(u.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(e.getAttribute("class")||"").split(" "),!0))).join(" ").trim();u.setAttribute("class",m);var d=e.getAttribute("style");d&&u.setAttribute("style",d),u.setAttribute("data-src",c);var y=[].filter.call(e.attributes,function(v){return/^data-\w[\w-]*$/.test(v.name)});if(Array.prototype.forEach.call(y,function(v){v.name&&v.value&&u.setAttribute(v.name,v.value)}),n){var E={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]},O,h,S,f,b;Object.keys(E).forEach(function(v){O=v,S=E[v],h=u.querySelectorAll(O+"[id]");for(var he=function(D,Xe){f=h[D].id,b=f+"-"+Oe();var P;Array.prototype.forEach.call(S,function(Q){P=u.querySelectorAll("["+Q+'*="'+f+'"]');for(var k=0,Ee=P.length;k<Ee;k++){var J=P[k].getAttribute(Q);J&&!J.match(new RegExp('url\\("?#'+f+'"?\\)'))||P[k].setAttribute(Q,"url(#"+b+")")}});for(var H=u.querySelectorAll("[*|href]"),F=[],L=0,me=H.length;L<me;L++){var B=H[L].getAttributeNS($,"href");B&&B.toString()==="#"+h[D].id&&F.push(H[L])}for(var z=0,ye=F.length;z<ye;z++)F[z].setAttributeNS($,"href","#"+b);h[D].id=b},X=0,ve=h.length;X<ve;X++)he(X)})}u.removeAttribute("xmlns:a");for(var g=u.querySelectorAll("script"),q=[],G,I,_=0,le=g.length;_<le;_++)I=g[_].getAttribute("type"),(!I||I==="application/ecmascript"||I==="application/javascript"||I==="text/javascript")&&(G=g[_].innerText||g[_].textContent,G&&q.push(G),u.removeChild(g[_]));if(q.length>0&&(i==="always"||i==="once"&&!re[c])){for(var U=0,pe=q.length;U<pe;U++)new Function(q[U])(window);re[c]=!0}var de=u.querySelectorAll("style");if(Array.prototype.forEach.call(de,function(v){v.textContent+=""}),u.setAttribute("xmlns",Ge),u.setAttribute("xmlns:xlink",$),a(u),!e.parentNode){w.splice(w.indexOf(e),1),e=null,s(new Error("Parent node is null"));return}e.parentNode.replaceChild(u,e),w.splice(w.indexOf(e),1),e=null,s(null,u)})},_e=function(e,i){var n=i===void 0?{}:i,t=n.afterAll,o=t===void 0?function(){}:t,a=n.afterEach,s=a===void 0?function(){}:a,c=n.beforeEach,p=c===void 0?function(){}:c,T=n.cacheRequests,u=T===void 0?!0:T,R=n.evalScripts,A=R===void 0?"never":R,j=n.httpRequestWithCredentials,C=j===void 0?!1:j,m=n.renumerateIRIElements,d=m===void 0?!0:m;if(e&&"length"in e)for(var y=0,E=0,O=e.length;E<O;E++)ne(e[E],A,d,u,C,p,function(h,S){s(h,S),e&&"length"in e&&e.length===++y&&o(y)});else e?ne(e,A,d,u,C,p,function(h,S){s(h,S),o(1),e=null}):o(0)},se={exports:{}},We="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Pe=We,Le=Pe;function ue(){}function ce(){}ce.resetWarningCache=ue;var ke=function(){function r(n,t,o,a,s,c){if(c!==Le){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function e(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ce,resetWarningCache:ue};return i.PropTypes=i,i};se.exports=ke();var l=se.exports,Ve=function(e){var i=(e==null?void 0:e.ownerDocument)||document;return i.defaultView||window},Me=function(e,i){for(var n in e)if(!(n in i))return!0;for(var t in i)if(e[t]!==i[t])return!0;return!1},Ne=["afterInjection","beforeInjection","desc","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","title","useRequestCache","wrapper"],M="http://www.w3.org/2000/svg",ie="http://www.w3.org/1999/xlink",fe=function(r){function e(){for(var n,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return n=r.call.apply(r,[this].concat(o))||this,n.initialState={hasError:!1,isLoading:!0},n.state=n.initialState,n._isMounted=!1,n.reactWrapper=void 0,n.nonReactWrapper=void 0,n.refCallback=function(s){n.reactWrapper=s},n}we(e,r);var i=e.prototype;return i.renderSVG=function(){var t=this;if(this.reactWrapper instanceof Ve(this.reactWrapper).Node){var o=this.props,a=o.desc,s=o.evalScripts,c=o.httpRequestWithCredentials,p=o.renumerateIRIElements,T=o.src,u=o.title,R=o.useRequestCache,A=this.props.onError,j=this.props.beforeInjection,C=this.props.afterInjection,m=this.props.wrapper,d,y;m==="svg"?(d=document.createElementNS(M,m),d.setAttribute("xmlns",M),d.setAttribute("xmlns:xlink",ie),y=document.createElementNS(M,m)):(d=document.createElement(m),y=document.createElement(m)),d.appendChild(y),y.dataset.src=T,this.nonReactWrapper=this.reactWrapper.appendChild(d);var E=function(f){if(t.removeSVG(),!t._isMounted){A(f);return}t.setState(function(){return{hasError:!0,isLoading:!1}},function(){A(f)})},O=function(f,b){if(f){E(f);return}t._isMounted&&t.setState(function(){return{isLoading:!1}},function(){try{C(b)}catch(g){E(g)}})},h=function(f){if(f.setAttribute("role","img"),a){var b=f.querySelector(":scope > desc");b&&f.removeChild(b);var g=document.createElement("desc");g.innerHTML=a,f.prepend(g)}if(u){var q=f.querySelector(":scope > title");q&&f.removeChild(q);var G=document.createElement("title");G.innerHTML=u,f.prepend(G)}try{j(f)}catch(I){E(I)}};_e(y,{afterEach:O,beforeEach:h,cacheRequests:R,evalScripts:s,httpRequestWithCredentials:c,renumerateIRIElements:p})}},i.removeSVG=function(){var t;(t=this.nonReactWrapper)!=null&&t.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},i.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},i.componentDidUpdate=function(t){var o=this;Me(N({},t),this.props)&&this.setState(function(){return o.initialState},function(){o.removeSVG(),o.renderSVG()})},i.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},i.render=function(){var t=this.props;t.afterInjection,t.beforeInjection,t.desc,t.evalScripts;var o=t.fallback;t.httpRequestWithCredentials;var a=t.loading;t.renumerateIRIElements,t.src,t.title,t.useRequestCache;var s=t.wrapper,c=ge(t,Ne),p=s;return V.createElement(p,N({},c,{ref:this.refCallback},s==="svg"?{xmlns:M,xmlnsXlink:ie}:{}),this.state.isLoading&&a&&V.createElement(a,null),this.state.hasError&&o&&V.createElement(o,null))},e}(V.Component);fe.defaultProps={afterInjection:function(){},beforeInjection:function(){},desc:"",evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,onError:function(){},renumerateIRIElements:!0,title:"",useRequestCache:!0,wrapper:"div"};fe.propTypes={afterInjection:l.func,beforeInjection:l.func,desc:l.string,evalScripts:l.oneOf(["always","once","never"]),fallback:l.oneOfType([l.func,l.object,l.string]),httpRequestWithCredentials:l.bool,loading:l.oneOfType([l.func,l.object,l.string]),onError:l.func,renumerateIRIElements:l.bool,src:l.string.isRequired,title:l.string,useRequestCache:l.bool,wrapper:l.oneOf(["div","span","svg"])};const He="/cinema-guide/assets/logo-CmcEnWyf.svg";export{fe as R,He as l,l as p};
