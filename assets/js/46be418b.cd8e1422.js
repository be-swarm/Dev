"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[6453],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2,title:"S\xe9lection d'une date"},p=void 0,i={unversionedId:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputDate",id:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputDate",title:"S\xe9lection d'une date",description:"Le composant InputDate permet de choisir une date.",source:"@site/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputDate.md",sourceDirName:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants",slug:"/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputDate",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputDate",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"S\xe9lection d'une date"},sidebar:"tutorialSidebar",previous:{title:"Bouton Login",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/Login"},next:{title:"Saisie d'un d\xe9cimal",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputDecimal"}},s={},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Le composant InputDate permet de choisir une date."),(0,o.kt)("admonition",{title:"Information",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"La date est affich\xe9e et  saisie dans la culture courante de la session BeSwarmEnvironment.")),(0,o.kt)("p",null,"Il se place dans une page razor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'  <BeSwarm.CoreBlazorApp.Components.InputDate @bind-Value="@model.Date" Label="Date" ValidateProperty="@(()=>model.Date)"  />\n')),(0,o.kt)("admonition",{title:"Information",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Les dates sont de type ",(0,o.kt)("inlineCode",{parentName:"p"},"DateTimeOffset"),".")))}m.isMDXComponent=!0}}]);