import{r as e,R as t,a as r}from"./vendor.4b77d966.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const l=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,n)=>{const o=new URL(e,l);if(self[t].moduleMap[o])return r(self[t].moduleMap[o]);const s=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){n(new Error(`Failed to import: ${e}`)),a(c)},onload(){r(self[t].moduleMap[o]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");function l(){const[r,l]=e.useState(0);return e.createElement("div",{className:"App"},e.createElement("header",{className:"App-header"},e.createElement("div",null,e.createElement(t,{width:"400px",back:e.createElement("img",{src:"/assets/logo.72d6d137.svg",className:"App-logo",alt:"logo"})},e.createElement("img",{src:"/assets/vue.51e1c06b.svg",alt:"vue"}))),e.createElement("p",null,"Hello Vite + React!"),e.createElement("p",null,e.createElement("button",{onClick:()=>l((e=>e+1))},"count is: ",r)),e.createElement("p",null,"Edit ",e.createElement("code",null,"App.tsx")," and save to test HMR updates."),e.createElement("p",null,e.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",e.createElement("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs"))))}r.render(e.createElement(e.StrictMode,null,e.createElement(l,null)),document.getElementById("root"));
