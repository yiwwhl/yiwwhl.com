import{d as l,r as g,c as a,F as p,b as o,R as v,a as m}from"./index-3d7cdaef.js";const b="_contentWrapper_pbb7f_1",_="_footer_pbb7f_5",c={contentWrapper:b,footer:_},i="_contentWrapper_bag53_1",f="_navBarWrapper_bag53_15",h="_avatar_bag53_24",W="_navBar_bag53_15",B="_headerImg_bag53_44",t={contentWrapper:i,navBarWrapper:f,avatar:h,navBar:W,headerImg:B},I="/assets/avatar-2927f7e0.png",N="/assets/cyberpunkCoder-45aa2639.jpg",y="/assets/city-8c7baaba.png",x="/assets/grass-44943d82.png",C="/assets/cloud-36b5fcc5.jpg",j=l({setup(){const n=[{routerName:"HomePage",label:"Home",headerImg:N},{routerName:"ProjectsList",label:"Project",headerImg:y},{routerName:"About",label:"About",headerImg:x}],s=g(0),u=(e,r)=>{try{s.value=r,o.push({name:e.routerName})}catch{s.value=-1,o.push({name:"NotFound"})}},d=e=>{var r;return((r=n[e])==null?void 0:r.headerImg)??C};return()=>a(p,null,[a("div",{class:t.contentWrapper},[a("div",{class:t.navBarWrapper},[n.map((e,r)=>a("div",{class:t.navBar,onClick:()=>u(e,r)},[e.label]))]),a("img",{src:I,class:t.avatar},null)]),a("img",{src:d(s.value),class:t.headerImg},null)])}}),w=l({setup(){return()=>{const n=()=>a("div",{class:c.footer},[a("div",null,[m("yiwwhl © "),new Date().getFullYear()])]);return a(p,null,[a(j,null,null),a("div",{class:c.contentWrapper},[a(v,null,null)]),n()])}}});export{w as default};
