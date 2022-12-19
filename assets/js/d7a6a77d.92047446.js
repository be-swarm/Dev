"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[8800],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||p;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<p;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const p={sidebar_position:3,title:"Client Http"},a=void 0,i={unversionedId:"DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/ClientHttp",id:"DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/ClientHttp",title:"Client Http",description:"BeSwarmEnvironment offre une factory de client http qui permet de cr\xe9er un client http avec les param\xe8tres de base de BeSwarm.",source:"@site/docs/DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/ClientHttp.md",sourceDirName:"DevApps/NET/PACKAGES/CoreBlazorApp/WebApi",slug:"/DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/ClientHttp",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/ClientHttp",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Client Http"},sidebar:"tutorialSidebar",previous:{title:"Convention de nommage",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/Nommage"},next:{title:"Bonnes pratiques",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/Bonnespatiques"}},l={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"BeSwarmEnvironment offre une factory de client http qui permet de cr\xe9er un client http avec les param\xe8tres de base de BeSwarm.\nCe client Http n'est pas un simple client Http.\nIl se charge de beacoup de choses de mani\xe8re totalement transparente pour le d\xe9veloppeur."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Il choisit automatiquement le sevice BeSwarm."),(0,o.kt)("li",{parentName:"ul"},"Il retente les requ\xeates sur des erreurs r\xe9seaux."),(0,o.kt)("li",{parentName:"ul"},"Il renouvelle automatiquement le jeton JWT si celui-ci est p\xe9rim\xe9."),(0,o.kt)("li",{parentName:"ul"},"Il loggue les requ\xeates et les r\xe9ponses."),(0,o.kt)("li",{parentName:"ul"},"Etc.")),(0,o.kt)("p",null,"Pour r\xe9cup\xe9rer une instance de client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"[CascadingParameter] BeSwarmEnvironment Session { get; set; } = default!;\n...\nvar httpclient = Session.GetUserHttpClient();\n...\n")))}u.isMDXComponent=!0}}]);