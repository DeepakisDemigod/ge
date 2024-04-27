import{b as l,_ as c,r as t,j as e}from"./index-CKXAyjzf.js";import{_ as a}from"./HashLoader-C4EeIlX8.js";const i=l.lazy(()=>c(()=>import("./Template-DPh-6sOi.js"),__vite__mapDeps([0,1,2]))),x=()=>{const[r,n]=t.useState(!0);return t.useEffect(()=>{const s=setInterval(()=>{n(!1),clearInterval(s)},3800);return()=>clearInterval(s)},[]),e.jsx(e.Fragment,{children:r?e.jsxs("div",{className:"h-[87vh] flex flex-col items-center justify-center gap-4",children:[e.jsx(a,{color:"#2563eb"}),e.jsx("span",{children:"Brewing Console..."})]}):e.jsx("div",{className:"m-2 font-dm",children:e.jsx(l.Suspense,{fallback:e.jsxs("div",{className:"h-[87vh] flex flex-col items-center justify-center gap-4 ",children:[e.jsx(a,{color:"#2563eb"}),e.jsx("span",{children:"Almost Ready..."})]}),children:e.jsx(i,{template:"vanilla"})})})})};export{x as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Template-DPh-6sOi.js","assets/index-CKXAyjzf.js","assets/index-CwYWxW-A.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
