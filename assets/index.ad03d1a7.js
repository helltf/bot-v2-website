const Dt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};Dt();function $(){}function D(t,e){for(const n in e)t[n]=e[n];return t}function Tt(t){return t()}function yt(){return Object.create(null)}function K(t){t.forEach(Tt)}function jt(t){return typeof t=="function"}function L(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Bt(t){return Object.keys(t).length===0}function Ot(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function H(t,e,n){t.$$.on_destroy.push(Ot(e,n))}function dt(t,e,n,r){if(t){const o=Rt(t,e,n,r);return t[0](o)}}function Rt(t,e,n,r){return t[1]&&r?D(n.ctx.slice(),t[1](r(e))):n.ctx}function pt(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const i=[],s=Math.max(e.dirty.length,o.length);for(let l=0;l<s;l+=1)i[l]=e.dirty[l]|o[l];return i}return e.dirty|o}return e.dirty}function ht(t,e,n,r,o,i){if(o){const s=Rt(e,n,r,i);t.p(s,o)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function at(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function kt(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function j(t,e){t.appendChild(e)}function z(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode.removeChild(t)}function O(t){return document.createElement(t)}function mt(t){return document.createTextNode(t)}function I(){return mt(" ")}function gt(){return mt("")}function Ft(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function R(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:R(t,r,e[r])}function Kt(t){return Array.from(t.childNodes)}function qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Qt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,r,e),o}let G;function Y(t){G=t}function J(){if(!G)throw new Error("Function called outside component initialization");return G}function Yt(t){J().$$.on_mount.push(t)}function Gt(t){J().$$.on_destroy.push(t)}function Wt(){const t=J();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const i=Qt(e,n,{cancelable:r});return o.slice().forEach(s=>{s.call(t,i)}),!i.defaultPrevented}return!0}}function vt(t,e){return J().$$.context.set(t,e),e}function F(t){return J().$$.context.get(t)}const q=[],St=[],Z=[],Nt=[],Jt=Promise.resolve();let lt=!1;function Vt(){lt||(lt=!0,Jt.then(Lt))}function ct(t){Z.push(t)}const rt=new Set;let V=0;function Lt(){const t=G;do{for(;V<q.length;){const e=q[V];V++,Y(e),Xt(e.$$)}for(Y(null),q.length=0,V=0;St.length;)St.pop()();for(let e=0;e<Z.length;e+=1){const n=Z[e];rt.has(n)||(rt.add(n),n())}Z.length=0}while(q.length);for(;Nt.length;)Nt.pop()();lt=!1,rt.clear(),Y(t)}function Xt(t){if(t.fragment!==null){t.update(),K(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ct)}}const tt=new Set;let U;function bt(){U={r:0,c:[],p:U}}function _t(){U.r||K(U.c),U=U.p}function _(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function y(t,e,n,r){if(t&&t.o){if(tt.has(t))return;tt.add(t),U.c.push(()=>{tt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Mt(t,e){const n={},r={},o={$$scope:1};let i=t.length;for(;i--;){const s=t[i],l=e[i];if(l){for(const a in s)a in l||(r[a]=1);for(const a in l)o[a]||(n[a]=l[a],o[a]=1);t[i]=l}else for(const a in s)o[a]=1}for(const s in r)s in n||(n[s]=void 0);return n}function $t(t){return typeof t=="object"&&t!==null?t:{}}function N(t){t&&t.c()}function v(t,e,n,r){const{fragment:o,on_mount:i,on_destroy:s,after_update:l}=t.$$;o&&o.m(e,n),r||ct(()=>{const a=i.map(Tt).filter(jt);s?s.push(...a):K(a),t.$$.on_mount=[]}),l.forEach(ct)}function S(t,e){const n=t.$$;n.fragment!==null&&(K(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Zt(t,e){t.$$.dirty[0]===-1&&(q.push(t),Vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(t,e,n,r,o,i,s,l=[-1]){const a=G;Y(t);const c=t.$$={fragment:null,ctx:null,props:i,update:$,not_equal:o,bound:yt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:yt(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};s&&s(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(w,m,...p)=>{const b=p.length?p[0]:m;return c.ctx&&o(c.ctx[w],c.ctx[w]=b)&&(!c.skip_bound&&c.bound[w]&&c.bound[w](b),u&&Zt(t,w)),m}):[],c.update(),u=!0,K(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const w=Kt(e.target);c.fragment&&c.fragment.l(w),w.forEach(E)}else c.fragment&&c.fragment.c();e.intro&&_(t.$$.fragment),v(t,e.target,e.anchor,e.customElement),Lt()}Y(a)}class A{$destroy(){S(this,1),this.$destroy=$}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class te extends A{constructor(e){super(),M(this,e,null,null,L,{})}}const B=[];function ee(t,e){return{subscribe:Q(t,e).subscribe}}function Q(t,e=$){let n;const r=new Set;function o(l){if(L(t,l)&&(t=l,n)){const a=!B.length;for(const c of r)c[1](),B.push(c,t);if(a){for(let c=0;c<B.length;c+=2)B[c][0](B[c+1]);B.length=0}}}function i(l){o(l(t))}function s(l,a=$){const c=[l,a];return r.add(c),r.size===1&&(n=e(o)||$),l(t),()=>{r.delete(c),r.size===0&&(n(),n=null)}}return{set:o,update:i,subscribe:s}}function ne(t,e,n){const r=!Array.isArray(t),o=r?[t]:t,i=e.length<2;return ee(n,s=>{let l=!1;const a=[];let c=0,u=$;const w=()=>{if(c)return;u();const p=e(r?a[0]:a,s);i?s(p):u=jt(p)?p:$},m=o.map((p,b)=>Ot(p,g=>{a[b]=g,c&=~(1<<b),l&&w()},()=>{c|=1<<b}));return l=!0,w(),function(){K(m),u()}})}const et={},nt={};function ot(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}function re(t,e){const n=[];let r=ot(t);return{get location(){return r},listen(o){n.push(o);const i=()=>{r=ot(t),o({location:r,action:"POP"})};return t.addEventListener("popstate",i),()=>{t.removeEventListener("popstate",i);const s=n.indexOf(o);n.splice(s,1)}},navigate(o,{state:i,replace:s=!1}={}){i={...i,key:Date.now()+""};try{s?t.history.replaceState(i,null,o):t.history.pushState(i,null,o)}catch{t.location[s?"replace":"assign"](o)}r=ot(t),n.forEach(l=>l({location:r,action:"PUSH"}))}}}function oe(t="/"){let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(o,i){},removeEventListener(o,i){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(o,i,s){const[l,a=""]=s.split("?");e++,n.push({pathname:l,search:a}),r.push(o)},replaceState(o,i,s){const[l,a=""]=s.split("?");n[e]={pathname:l,search:a},r[e]=o}}}}const ie=Boolean(typeof window!="undefined"&&window.document&&window.document.createElement),ut=re(ie?window:oe()),{navigate:se}=ut,At=/^:(.+)/,Et=4,ae=3,le=2,ce=1,ue=1;function ft(t,e){return t.substr(0,e.length)===e}function fe(t){return t===""}function de(t){return At.test(t)}function It(t){return t[0]==="*"}function W(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function it(t){return t.replace(/(^\/+|\/+$)/g,"")}function pe(t,e){const n=t.default?0:W(t.path).reduce((r,o)=>(r+=Et,fe(o)?r+=ue:de(o)?r+=le:It(o)?r-=Et+ce:r+=ae,r),0);return{route:t,score:n,index:e}}function he(t){return t.map(pe).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function Ut(t,e){let n,r;const[o]=e.split("?"),i=W(o),s=i[0]==="",l=he(t);for(let a=0,c=l.length;a<c;a++){const u=l[a].route;let w=!1;if(u.default){r={route:u,params:{},uri:e};continue}const m=W(u.path),p={},b=Math.max(i.length,m.length);let g=0;for(;g<b;g++){const f=m[g],k=i[g];if(f!==void 0&&It(f)){const C=f==="*"?"*":f.slice(1);p[C]=i.slice(g).map(decodeURIComponent).join("/");break}if(k===void 0){w=!0;break}let P=At.exec(f);if(P&&!s){const C=decodeURIComponent(k);p[P[1]]=C}else if(f!==k){w=!0;break}}if(!w){n={route:u,params:p,uri:"/"+i.slice(0,g).join("/")};break}}return n||r||null}function we(t,e){return Ut([t],e)}function st(t,e){return t+(e?`?${e}`:"")}function me(t,e){if(ft(t,"/"))return t;const[n,r]=t.split("?"),[o]=e.split("?"),i=W(n),s=W(o);if(i[0]==="")return st(o,r);if(!ft(i[0],".")){const c=s.concat(i).join("/");return st((o==="/"?"":"/")+c,r)}const l=s.concat(i),a=[];return l.forEach(c=>{c===".."?a.pop():c!=="."&&a.push(c)}),st("/"+a.join("/"),r)}function zt(t,e){return`${it(e==="/"?t:`${it(t)}/${it(e)}`)}/`}function ge(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function be(t){let e;const n=t[9].default,r=dt(n,t,t[8],null);return{c(){r&&r.c()},m(o,i){r&&r.m(o,i),e=!0},p(o,[i]){r&&r.p&&(!e||i&256)&&ht(r,n,o,o[8],e?pt(n,o[8],i,null):wt(o[8]),null)},i(o){e||(_(r,o),e=!0)},o(o){y(r,o),e=!1},d(o){r&&r.d(o)}}}function _e(t,e,n){let r,o,i,{$$slots:s={},$$scope:l}=e,{basepath:a="/"}=e,{url:c=null}=e;const u=F(et),w=F(nt),m=Q([]);H(t,m,d=>n(6,o=d));const p=Q(null);let b=!1;const g=u||Q(c?{pathname:c}:ut.location);H(t,g,d=>n(5,r=d));const f=w?w.routerBase:Q({path:a,uri:a});H(t,f,d=>n(7,i=d));const k=ne([f,p],([d,x])=>{if(x===null)return d;const{path:h}=d,{route:T,uri:Ht}=x;return{path:T.default?h:T.path.replace(/\*.*$/,""),uri:Ht}});function P(d){const{path:x}=i;let{path:h}=d;if(d._path=h,d.path=zt(x,h),typeof window=="undefined"){if(b)return;const T=we(d,r.pathname);T&&(p.set(T),b=!0)}else m.update(T=>(T.push(d),T))}function C(d){m.update(x=>{const h=x.indexOf(d);return x.splice(h,1),x})}return u||(Yt(()=>ut.listen(x=>{g.set(x.location)})),vt(et,g)),vt(nt,{activeRoute:p,base:f,routerBase:k,registerRoute:P,unregisterRoute:C}),t.$$set=d=>{"basepath"in d&&n(3,a=d.basepath),"url"in d&&n(4,c=d.url),"$$scope"in d&&n(8,l=d.$$scope)},t.$$.update=()=>{if(t.$$.dirty&128){const{path:d}=i;m.update(x=>(x.forEach(h=>h.path=zt(d,h._path)),x))}if(t.$$.dirty&96){const d=Ut(o,r.pathname);p.set(d)}},[m,g,f,a,c,r,o,i,l,s]}class ye extends A{constructor(e){super(),M(this,e,_e,be,L,{basepath:3,url:4})}}const ke=t=>({params:t&4,location:t&16}),Pt=t=>({params:t[2],location:t[4]});function Ct(t){let e,n,r,o;const i=[ve,xe],s=[];function l(a,c){return a[0]!==null?0:1}return e=l(t),n=s[e]=i[e](t),{c(){n.c(),r=gt()},m(a,c){s[e].m(a,c),z(a,r,c),o=!0},p(a,c){let u=e;e=l(a),e===u?s[e].p(a,c):(bt(),y(s[u],1,1,()=>{s[u]=null}),_t(),n=s[e],n?n.p(a,c):(n=s[e]=i[e](a),n.c()),_(n,1),n.m(r.parentNode,r))},i(a){o||(_(n),o=!0)},o(a){y(n),o=!1},d(a){s[e].d(a),a&&E(r)}}}function xe(t){let e;const n=t[10].default,r=dt(n,t,t[9],Pt);return{c(){r&&r.c()},m(o,i){r&&r.m(o,i),e=!0},p(o,i){r&&r.p&&(!e||i&532)&&ht(r,n,o,o[9],e?pt(n,o[9],i,ke):wt(o[9]),Pt)},i(o){e||(_(r,o),e=!0)},o(o){y(r,o),e=!1},d(o){r&&r.d(o)}}}function ve(t){let e,n,r;const o=[{location:t[4]},t[2],t[3]];var i=t[0];function s(l){let a={};for(let c=0;c<o.length;c+=1)a=D(a,o[c]);return{props:a}}return i&&(e=new i(s())),{c(){e&&N(e.$$.fragment),n=gt()},m(l,a){e&&v(e,l,a),z(l,n,a),r=!0},p(l,a){const c=a&28?Mt(o,[a&16&&{location:l[4]},a&4&&$t(l[2]),a&8&&$t(l[3])]):{};if(i!==(i=l[0])){if(e){bt();const u=e;y(u.$$.fragment,1,0,()=>{S(u,1)}),_t()}i?(e=new i(s()),N(e.$$.fragment),_(e.$$.fragment,1),v(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(l){r||(e&&_(e.$$.fragment,l),r=!0)},o(l){e&&y(e.$$.fragment,l),r=!1},d(l){l&&E(n),e&&S(e,l)}}}function Se(t){let e,n,r=t[1]!==null&&t[1].route===t[7]&&Ct(t);return{c(){r&&r.c(),e=gt()},m(o,i){r&&r.m(o,i),z(o,e,i),n=!0},p(o,[i]){o[1]!==null&&o[1].route===o[7]?r?(r.p(o,i),i&2&&_(r,1)):(r=Ct(o),r.c(),_(r,1),r.m(e.parentNode,e)):r&&(bt(),y(r,1,1,()=>{r=null}),_t())},i(o){n||(_(r),n=!0)},o(o){y(r),n=!1},d(o){r&&r.d(o),o&&E(e)}}}function Ne(t,e,n){let r,o,{$$slots:i={},$$scope:s}=e,{path:l=""}=e,{component:a=null}=e;const{registerRoute:c,unregisterRoute:u,activeRoute:w}=F(nt);H(t,w,f=>n(1,r=f));const m=F(et);H(t,m,f=>n(4,o=f));const p={path:l,default:l===""};let b={},g={};return c(p),typeof window!="undefined"&&Gt(()=>{u(p)}),t.$$set=f=>{n(13,e=D(D({},e),at(f))),"path"in f&&n(8,l=f.path),"component"in f&&n(0,a=f.component),"$$scope"in f&&n(9,s=f.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&r&&r.route===p&&n(2,b=r.params);{const{path:f,component:k,...P}=e;n(3,g=P)}},e=at(e),[a,r,b,g,o,w,m,p,l,s,i]}class $e extends A{constructor(e){super(),M(this,e,Ne,Se,L,{path:8,component:0})}}function Ee(t){let e,n,r,o;const i=t[16].default,s=dt(i,t,t[15],null);let l=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],a={};for(let c=0;c<l.length;c+=1)a=D(a,l[c]);return{c(){e=O("a"),s&&s.c(),xt(e,a)},m(c,u){z(c,e,u),s&&s.m(e,null),n=!0,r||(o=Ft(e,"click",t[5]),r=!0)},p(c,[u]){s&&s.p&&(!n||u&32768)&&ht(s,i,c,c[15],n?pt(i,c[15],u,null):wt(c[15]),null),xt(e,a=Mt(l,[(!n||u&1)&&{href:c[0]},(!n||u&4)&&{"aria-current":c[2]},u&2&&c[1],u&64&&c[6]]))},i(c){n||(_(s,c),n=!0)},o(c){y(s,c),n=!1},d(c){c&&E(e),s&&s.d(c),r=!1,o()}}}function ze(t,e,n){let r;const o=["to","replace","state","getProps"];let i=kt(e,o),s,l,{$$slots:a={},$$scope:c}=e,{to:u="#"}=e,{replace:w=!1}=e,{state:m={}}=e,{getProps:p=()=>({})}=e;const{base:b}=F(nt);H(t,b,h=>n(14,l=h));const g=F(et);H(t,g,h=>n(13,s=h));const f=Wt();let k,P,C,d;function x(h){if(f("click",h),ge(h)){h.preventDefault();const T=s.pathname===k||w;se(k,{state:m,replace:T})}}return t.$$set=h=>{e=D(D({},e),at(h)),n(6,i=kt(e,o)),"to"in h&&n(7,u=h.to),"replace"in h&&n(8,w=h.replace),"state"in h&&n(9,m=h.state),"getProps"in h&&n(10,p=h.getProps),"$$scope"in h&&n(15,c=h.$$scope)},t.$$.update=()=>{t.$$.dirty&16512&&n(0,k=u==="/"?l.uri:me(u,l.uri)),t.$$.dirty&8193&&n(11,P=ft(s.pathname,k)),t.$$.dirty&8193&&n(12,C=k===s.pathname),t.$$.dirty&4096&&n(2,r=C?"page":void 0),t.$$.dirty&15361&&n(1,d=p({location:s,href:k,isPartiallyCurrent:P,isCurrent:C}))},[k,d,r,b,g,x,i,u,w,m,p,P,C,s,l,c,a]}class Pe extends A{constructor(e){super(),M(this,e,ze,Ee,L,{to:7,replace:8,state:9,getProps:10})}}function Ce(t){let e;return{c(){e=mt(t[0])},m(n,r){z(n,e,r)},p(n,r){r&1&&qt(e,n[0])},d(n){n&&E(e)}}}function Te(t){let e,n,r;return n=new Pe({props:{to:t[1],$$slots:{default:[Ce]},$$scope:{ctx:t}}}),{c(){e=O("li"),N(n.$$.fragment),R(e,"class","hover:text-green-800 transition-all")},m(o,i){z(o,e,i),v(n,e,null),r=!0},p(o,[i]){const s={};i&2&&(s.to=o[1]),i&5&&(s.$$scope={dirty:i,ctx:o}),n.$set(s)},i(o){r||(_(n.$$.fragment,o),r=!0)},o(o){y(n.$$.fragment,o),r=!1},d(o){o&&E(e),S(n)}}}function je(t,e,n){let{linkName:r}=e,{linkTo:o}=e;return t.$$set=i=>{"linkName"in i&&n(0,r=i.linkName),"linkTo"in i&&n(1,o=i.linkTo)},[r,o]}class X extends A{constructor(e){super(),M(this,e,je,Te,L,{linkName:0,linkTo:1})}}function Oe(t){let e,n,r,o,i,s,l,a,c,u,w,m,p,b,g;return s=new X({props:{linkName:"Home",linkTo:"/"}}),a=new X({props:{linkName:"Info",linkTo:"/info"}}),u=new X({props:{linkName:"Commands",linkTo:"/commands"}}),m=new X({props:{linkName:"Stats",linkTo:"/stats"}}),{c(){e=O("nav"),n=O("div"),n.innerHTML='<span class="text-4xl text-red-900">helltf</span>',r=I(),o=O("div"),i=O("ul"),N(s.$$.fragment),l=I(),N(a.$$.fragment),c=I(),N(u.$$.fragment),w=I(),N(m.$$.fragment),p=I(),b=O("div"),b.innerHTML=`<a href="https://twitter.com/helltfx"><img class="w-16 rounded-full border-2 border-neutral-700 shadow-md shadow-gray-900" src="../../../twitter-logo.png" alt="twitter logo link"/></a> 
		<a href="https://github.com/helltf"><img class="w-16 rounded-full border-2 border-neutral-700 shadow-md shadow-gray-900" src="../../../github-logo.png" alt="github logo link"/></a> 
		<a href="https://twitch.tv/helltf"><img class="w-16 rounded-full border-2 border-neutral-700 shadow-md shadow-gray-900" src="../../../twitch-logo.png" alt="twitch logo link"/></a>`,R(n,"class","left-nav pl-48"),R(i,"class","flex flex-row justify-center gap-6 "),R(o,"class","mid-nav flex w-full h-full justify-center items-center "),R(b,"class","right-nav flex flex-row justify-between items-center gap-2 pr-48"),R(e,"class","shadow-[0_4px_2px_-2px] shadow-neutral-700 w-full h-20 bg-neutral-800 flex flex-row justify-between items-center min-w-[600px]")},m(f,k){z(f,e,k),j(e,n),j(e,r),j(e,o),j(o,i),v(s,i,null),j(i,l),v(a,i,null),j(i,c),v(u,i,null),j(i,w),v(m,i,null),j(e,p),j(e,b),g=!0},p:$,i(f){g||(_(s.$$.fragment,f),_(a.$$.fragment,f),_(u.$$.fragment,f),_(m.$$.fragment,f),g=!0)},o(f){y(s.$$.fragment,f),y(a.$$.fragment,f),y(u.$$.fragment,f),y(m.$$.fragment,f),g=!1},d(f){f&&E(e),S(s),S(a),S(u),S(m)}}}class Re extends A{constructor(e){super(),M(this,e,null,Oe,L,{})}}function Le(t){let e;return{c(){e=O("h1"),e.textContent="Home"},m(n,r){z(n,e,r)},p:$,i:$,o:$,d(n){n&&E(e)}}}class Me extends A{constructor(e){super(),M(this,e,null,Le,L,{})}}function Ae(t){let e,n;return e=new Me({}),{c(){N(e.$$.fragment)},m(r,o){v(e,r,o),n=!0},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){S(e,r)}}}function Ie(t){let e,n,r,o,i;return e=new Re({}),o=new $e({props:{path:"/",$$slots:{default:[Ae]},$$scope:{ctx:t}}}),{c(){N(e.$$.fragment),n=I(),r=O("div"),N(o.$$.fragment),R(r,"class","svelte-nlytyc")},m(s,l){v(e,s,l),z(s,n,l),z(s,r,l),v(o,r,null),i=!0},p(s,l){const a={};l&2&&(a.$$scope={dirty:l,ctx:s}),o.$set(a)},i(s){i||(_(e.$$.fragment,s),_(o.$$.fragment,s),i=!0)},o(s){y(e.$$.fragment,s),y(o.$$.fragment,s),i=!1},d(s){S(e,s),s&&E(n),s&&E(r),S(o)}}}function Ue(t){let e,n,r,o,i;return n=new te({}),o=new ye({props:{url:t[0],$$slots:{default:[Ie]},$$scope:{ctx:t}}}),{c(){e=O("main"),N(n.$$.fragment),r=I(),N(o.$$.fragment),R(e,"class","svelte-nlytyc")},m(s,l){z(s,e,l),v(n,e,null),j(e,r),v(o,e,null),i=!0},p(s,[l]){const a={};l&1&&(a.url=s[0]),l&2&&(a.$$scope={dirty:l,ctx:s}),o.$set(a)},i(s){i||(_(n.$$.fragment,s),_(o.$$.fragment,s),i=!0)},o(s){y(n.$$.fragment,s),y(o.$$.fragment,s),i=!1},d(s){s&&E(e),S(n),S(o)}}}function He(t,e,n){let{url:r=""}=e;return t.$$set=o=>{"url"in o&&n(0,r=o.url)},[r]}class De extends A{constructor(e){super(),M(this,e,He,Ue,L,{url:0})}}new De({target:document.getElementById("app")});
