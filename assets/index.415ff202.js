import{r as e,R as t,a as r}from"./vendor.4b77d966.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,n)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return r(self[t].moduleMap[o]);const c=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){n(new Error(`Failed to import: ${e}`)),l(s)},onload(){r(self[t].moduleMap[o]),l(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/react-rotate/assets/");function a(){const[r,a]=e.useState(0);return e.createElement("div",{className:"App"},e.createElement("header",{className:"App-header"},e.createElement("div",null,e.createElement(t,{width:"400px",back:e.createElement("img",{src:"/react-rotate/assets/logo.72d6d137.svg",className:"App-logo",alt:"logo"})},e.createElement("img",{src:"/react-rotate/assets/vue.51e1c06b.svg",alt:"vue"}))),e.createElement("p",null,"Hello Vite + React!"),e.createElement("p",null,e.createElement("button",{onClick:()=>a((e=>e+1))},"count is: ",r)),e.createElement("p",null,"Edit ",e.createElement("code",null,"App.tsx")," and save to test HMR updates."),e.createElement("p",null,e.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",e.createElement("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs"))))}r.render(e.createElement(e.StrictMode,null,e.createElement(a,null)),document.getElementById("root"));
