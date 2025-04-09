(()=>{"use strict";const e=window.wp.blocks,t=window.wp.i18n,r=window.wp.blockEditor;function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}const n=function(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n},i=window.ReactJSXRuntime;function l({linkUrl:e,children:t,...r}){return e?(0,i.jsx)("a",{...r,href:e,target:"_blank",children:t}):(0,i.jsx)("div",{...r,children:t})}const o=window.wp.components,s=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gravatar/block-name","version":"0.4.1","title":"Name","description":"The Name block for the Gravatar block.","category":"layout","parent":[],"attributes":{"name":{"type":"string","default":""},"linkUrl":{"type":"string","default":""},"text":{"type":"string","default":""},"className":{"type":"string","default":""}},"supports":{"html":false,"inserter":false},"textdomain":"gravatar-enhanced","editorScript":"file:../../../block-name.js"}'),c={...s,icon:function(){return(0,i.jsx)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","aria-hidden":"true",focusable:"false",children:(0,i.jsx)(o.Path,{d:"M10 4.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm2.25 7.5v-1A2.75 2.75 0 0011 8.25H7A2.75 2.75 0 004.25 11v1h1.5v-1c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v1h1.5zM4 20h9v-1.5H4V20zm16-4H4v-1.5h16V16z","fill-rule":"evenodd","clip-rule":"evenodd"})})},title:(0,t.__)("Name","gravatar-enhanced"),description:(0,t.__)("The Name block for the Gravatar block.","gravatar-enhanced"),edit:function({attributes:e}){const{linkUrl:t,text:a,className:o}=e,s=(0,r.useBlockProps)();return(0,i.jsx)(l,{...s,className:n("gravatar-block__child","gravatar-block-name",s.className,o),linkUrl:t,children:(0,i.jsx)("h4",{className:"gravatar-block-name__text",children:a})})}};(0,e.registerBlockType)(s.name,c)})();