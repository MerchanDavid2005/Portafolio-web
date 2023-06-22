import{p as L,a5 as E,z as C,a0 as ue,N as W,A as le,a4 as Z,a9 as X,i as N,f as r,a8 as z,y as T,O as k,l as G,D as ie,aA as re,aB as ce,G as M,at as ve,g as de,a as q}from"./index-1430c321.js";const fe=L({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function ye(e){const s=E("useRender");s.render=e}function me(e){const s=C(),n=C();if(ue){const u=new ResizeObserver(t=>{e==null||e(t,u),t.length&&(n.value=t[0].contentRect)});W(()=>{u.disconnect()}),le(s,(t,l)=>{l&&(u.unobserve(Z(l)),n.value=void 0),t&&u.observe(Z(t))},{flush:"post"})}return{resizeRef:s,contentRect:X(n)}}const B=Symbol.for("vuetify:layout"),Y=Symbol.for("vuetify:layout-item"),F=1e3,Re=L({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),we=L({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function pe(){const e=N(B);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function ze(e){const s=N(B);if(!s)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${ie()}`,u=E("useLayoutItem");G(Y,{id:n});const t=T(!1);re(()=>t.value=!0),ce(()=>t.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:c}=s.register(u,{...e,active:r(()=>t.value?!1:e.active.value),id:n});return W(()=>s.unregister(n)),{layoutItemStyles:l,layoutRect:s.layoutRect,layoutItemScrimStyles:c}}const ge=(e,s,n,u)=>{let t={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...t}}];for(const c of e){const m=s.get(c),g=n.get(c),$=u.get(c);if(!m||!g||!$)continue;const h={...t,[m.value]:parseInt(t[m.value],10)+($.value?parseInt(g.value,10):0)};l.push({id:c,layer:h}),t=h}return l};function Le(e){const s=N(B,null),n=r(()=>s?s.rootZIndex.value-100:F),u=C([]),t=z(new Map),l=z(new Map),c=z(new Map),m=z(new Map),g=z(new Map),{resizeRef:$,contentRect:h}=me(),J=r(()=>{const a=new Map,d=e.overlaps??[];for(const o of d.filter(v=>v.includes(":"))){const[v,i]=o.split(":");if(!u.value.includes(v)||!u.value.includes(i))continue;const y=t.get(v),p=t.get(i),x=l.get(v),R=l.get(i);!y||!p||!x||!R||(a.set(i,{position:y.value,amount:parseInt(x.value,10)}),a.set(v,{position:p.value,amount:-parseInt(R.value,10)}))}return a}),b=r(()=>{const a=[...new Set([...c.values()].map(o=>o.value))].sort((o,v)=>o-v),d=[];for(const o of a){const v=u.value.filter(i=>{var y;return((y=c.get(i))==null?void 0:y.value)===o});d.push(...v)}return ge(d,t,l,m)}),j=r(()=>!Array.from(g.values()).some(a=>a.value)),I=r(()=>b.value[b.value.length-1].layer),Q=r(()=>({"--v-layout-left":M(I.value.left),"--v-layout-right":M(I.value.right),"--v-layout-top":M(I.value.top),"--v-layout-bottom":M(I.value.bottom),...j.value?void 0:{transition:"none"}})),S=r(()=>b.value.slice(1).map((a,d)=>{let{id:o}=a;const{layer:v}=b.value[d],i=l.get(o),y=t.get(o);return{id:o,...v,size:Number(i.value),position:y.value}})),H=a=>S.value.find(d=>d.id===a),A=E("createLayout"),_=T(!1);k(()=>{_.value=!0}),G(B,{register:(a,d)=>{let{id:o,order:v,position:i,layoutSize:y,elementSize:p,active:x,disableTransitions:R,absolute:oe}=d;c.set(o,v),t.set(o,i),l.set(o,y),m.set(o,x),R&&g.set(o,R);const D=ve(Y,A==null?void 0:A.vnode).indexOf(a);D>-1?u.value.splice(D,0,o):u.value.push(o);const K=r(()=>S.value.findIndex(w=>w.id===o)),O=r(()=>n.value+b.value.length*2-K.value*2),ne=r(()=>{const w=i.value==="left"||i.value==="right",V=i.value==="right",se=i.value==="bottom",U={[i.value]:0,zIndex:O.value,transform:`translate${w?"X":"Y"}(${(x.value?0:-110)*(V||se?-1:1)}%)`,position:oe.value||n.value!==F?"absolute":"fixed",...j.value?void 0:{transition:"none"}};if(!_.value)return U;const f=S.value[K.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${o}"`);const P=J.value.get(o);return P&&(f[P.position]+=P.amount),{...U,height:w?`calc(100% - ${f.top}px - ${f.bottom}px)`:p.value?`${p.value}px`:void 0,left:V?void 0:`${f.left}px`,right:V?`${f.right}px`:void 0,top:i.value!=="bottom"?`${f.top}px`:void 0,bottom:i.value!=="top"?`${f.bottom}px`:void 0,width:w?p.value?`${p.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),ae=r(()=>({zIndex:O.value-1}));return{layoutItemStyles:ne,layoutItemScrimStyles:ae,zIndex:O}},unregister:a=>{c.delete(a),t.delete(a),l.delete(a),m.delete(a),g.delete(a),u.value=u.value.filter(d=>d!==a)},mainRect:I,mainStyles:Q,getLayoutItem:H,items:S,layoutRect:h,rootZIndex:n});const ee=r(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),te=r(()=>({zIndex:n.value,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:ee,layoutStyles:te,getLayoutItem:H,items:S,layoutRect:h,layoutRef:$}}function he(){const e=T(!1);return k(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:r(()=>e.value?void 0:{transition:"none !important"}),isBooted:X(e)}}const be=L({tag:{type:String,default:"div"}},"tag"),Ie=L({scrollable:Boolean,...fe(),...be({tag:"main"})},"VMain"),$e=de()({name:"VMain",props:Ie(),setup(e,s){let{slots:n}=s;const{mainStyles:u}=pe(),{ssrBootStyles:t}=he();return ye(()=>q(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[u.value,t.value,e.style]},{default:()=>{var l,c;return[e.scrollable?q("div",{class:"v-main__scroller"},[(l=n.default)==null?void 0:l.call(n)]):(c=n.default)==null?void 0:c.call(n)]}})),{}}});export{$e as V,Re as a,be as b,Le as c,he as d,me as e,we as f,ze as g,fe as m,ye as u};