"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[6996],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),s=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=n,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(f,p(p({ref:r},c),{},{components:t})):a.createElement(f,p({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3903:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_position:1},p=void 0,l={unversionedId:"DevApps/NET/PACKAGES/CoreBlazorApp/Introduction",id:"DevApps/NET/PACKAGES/CoreBlazorApp/Introduction",title:"Introduction",description:"Package BeSwarm.CoreBlazorApp",source:"@site/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Introduction.md",sourceDirName:"DevApps/NET/PACKAGES/CoreBlazorApp",slug:"/DevApps/NET/PACKAGES/CoreBlazorApp/Introduction",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CoreBlazorApp",permalink:"/Dev/docs/category/coreblazorapp"},next:{title:"Configuration",permalink:"/Dev/docs/category/configuration"}},i={},s=[{value:"Package BeSwarm.CoreBlazorApp",id:"package-beswarmcoreblazorapp",level:3}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"package-beswarmcoreblazorapp"},"Package BeSwarm.CoreBlazorApp"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/BeSwarm.CoreBlazorApp/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/BeSwarm.CoreBlazorApp.svg",alt:"NuGet"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/BeSwarm.CoreBlazorApp/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/BeSwarm.CoreBlazorApp.svg",alt:"NuGet"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/be-swarm/CoreBlazorApp"},"https://github.com/be-swarm/CoreBlazorApp")),(0,n.kt)("p",null,"Ce package est LE package permettant de d\xe9velopper des applications autour de la plateforme BeSwarm."),(0,n.kt)("p",null,"Il contient tout ce qui est n\xe9cessaire \xe0 savoir:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"des wrappers pour les webapi"),(0,n.kt)("li",{parentName:"ul"},"la gestion des logins ,des jetons, des renouvellements de jeton,etc."),(0,n.kt)("li",{parentName:"ul"},"la gestion de la persistance de l'\xe9tat"),(0,n.kt)("li",{parentName:"ul"},"des composants pour la saisie des donn\xe9es.")),(0,n.kt)("p",null,"Ce package fonctionne avec les frameworks suivants:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Blazor Server"),(0,n.kt)("li",{parentName:"ul"},"Blazor WebAssembly"),(0,n.kt)("li",{parentName:"ul"},".NET Maui Blazor")),(0,n.kt)("p",null,"Installation du package:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},' <ItemGroup>\n   <PackageReference Include="BeSwarm.CoreBlazorApp" Version="1.0.0" /> \n  </ItemGroup>\n')))}u.isMDXComponent=!0}}]);