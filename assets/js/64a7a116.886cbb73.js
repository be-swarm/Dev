"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[2972],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),c=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=c(e.components);return o.createElement(i.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=n,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return t?o.createElement(m,p(p({ref:r},l),{},{components:t})):o.createElement(m,p({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[u]="string"==typeof e?e:n,p[1]=s;for(var c=2;c<a;c++)p[c]=t[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3778:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:4,title:"Popup de message d'erreur"},p=void 0,s={unversionedId:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants/ErrorMessageBox",id:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants/ErrorMessageBox",title:"Popup de message d'erreur",description:"Affiche une boite de dialogue avec un titre, un messsage",source:"@site/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/ErrorMessageBox.md",sourceDirName:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants",slug:"/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/ErrorMessageBox",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/ErrorMessageBox",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Popup de message d'erreur"},sidebar:"tutorialSidebar",previous:{title:"Boite de dialogue",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/ConfirmDialog"},next:{title:"WebApi",permalink:"/Dev/docs/category/webapi"}},i={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Affiche une boite de dialogue avec un titre, un messsage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'[Inject] ErrorDialogService errorDialogService { get; set; } = default!;\nasync Task ShowError()\n    {\n        await errorDialogService.Show("Titre", "Message");\n    }\n')))}u.isMDXComponent=!0}}]);