import{d as r,j as p,a as c,c as _,k as m,F as f,l as h,w as g,m as d,v as y,h as e,t as l,f as b,n as x,r as S,i as u,q as k,b as C,p as w,g as B,e as E}from"./index-64bef312.js";import{p as I}from"./posts-f41f5125.js";const V={class:"description"},L={class:"container"},N={class:"letter"},$=r({__name:"ListComponents",props:{categorySelected:{type:String,default:"all"}},setup(a){const s=(o,n)=>o==="all"||o===n,i=p(I);return(o,n)=>{const v=S("router-link");return c(!0),_(f,null,m(i.value,t=>(c(),h(v,{key:t.id,class:"link-example",to:t.link},{default:g(()=>[d(e("div",{class:x(["element",t.category])},[e("div",V,[e("h2",null,l(t.name),1),e("p",null,l(t.description),1)]),e("div",L,[e("div",N,[e("p",null,[b(l(t.category.slice(0,1).toUpperCase()),1),e("span",null,l(t.category.slice(1)),1)])])])],2),[[y,s(a.categorySelected,t.category)]])]),_:2},1032,["to"]))),128)}}});const A=u($,[["__scopeId","data-v-37f5c0a3"]]),D=a=>(w("data-v-4b4545a3"),a=a(),B(),a),F={class:"examples-container page-container"},M={class:"form-container"},P=D(()=>e("label",{for:"selection"},"Selecciona la categoría",-1)),T=E('<option value="all" data-v-4b4545a3>Todos</option><option value="basic" data-v-4b4545a3>Básicos</option><option value="console" data-v-4b4545a3>Consola</option><option value="data" data-v-4b4545a3>Datos</option><option value="math" data-v-4b4545a3>Matemáticas</option><option value="web" data-v-4b4545a3>Web</option>',6),U=[T],j=r({__name:"ExamplesApp",setup(a){const s=p("all");return(i,o)=>(c(),_("div",F,[e("div",M,[P,d(e("select",{"onUpdate:modelValue":o[0]||(o[0]=n=>s.value=n),name:"selection",id:"selection"},U,512),[[k,s.value]])]),C(A,{"category-selected":s.value},null,8,["category-selected"])]))}});const W=u(j,[["__scopeId","data-v-4b4545a3"]]);export{W as default};
