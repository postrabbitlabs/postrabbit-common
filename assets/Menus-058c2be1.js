import{r as o,A as h,_ as m,a as r,I as i,R as f,j as d,b as g,D as q,T as O}from"./index-be1cce96.js";import{c as u}from"./emotion-react.browser.esm-30ad76c0.js";import{R as x,t as l}from"./RequestItemDisplay-9ef518e1.js";var v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const y=v;var T=function(t,e){return o.createElement(h,m({},t,{ref:e,icon:y}))};const k=o.forwardRef(T);var D={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"}}]},name:"filter",theme:"outlined"};const w=D;var E=function(t,e){return o.createElement(h,m({},t,{ref:e,icon:w}))};const M=o.forwardRef(E);function p(s,t=[]){const e=s;return Object.keys(e).forEach((n,a)=>{t.push({id:e[n].infoId,children:[],key:e[n].name,request:e[n].request,name:e[n].name}),e[n].item&&Object.keys(e[n].item).length>0&&p(e[n].item,t[a].children)}),console.log(t),t}function R({data:s}){var e,n;const t=s;return r("div",{children:r(x,{itemType:t.request?i.REQUEST:i.FOLDER,name:t.name,request:{method:((e=t.request)==null?void 0:e.method)||f.PATCH,header:(n=t.request)==null?void 0:n.header}})})}const b=()=>{const s=(e,n)=>{console.log("selected",e,n)},t=o.useMemo(()=>{const e=n=>n.map(a=>{const c=r(R,{data:a});return a.children?{title:c,key:a.key,children:e(a.children)}:{title:c,key:a.key}});return console.log(l,"treeData"),e(p(l))},[l]);return d("div",{children:[d("div",{className:"collection-header",css:u`
          display: flex;
          padding-top: 12px;
          padding-bottom: 12px;
        `,children:[r("span",{onClick:()=>{},css:u`
            cursor: pointer;
            width: 24px;
          `,children:r(k,{})}),r(g,{className:"collection-header-search",size:"small",placeholder:"",prefix:r(M,{}),onChange:()=>{}})]}),r(O,{blockNode:!0,motion:!1,showLine:!0,switcherIcon:r(q,{}),defaultExpandAll:!0,onSelect:s,treeData:t})]})},F=()=>r("div",{children:r(b,{})});export{F as default};