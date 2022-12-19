"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[3775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3,title:"Boite de dialogue"},i=void 0,p={unversionedId:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants/ConfirmDialog",id:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants/ConfirmDialog",title:"Boite de dialogue",description:"Affiche une boite de dialogue avec un titre, un messsage, un bouton de confirmation et un bouton d'annulation",source:"@site/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/ConfirmDialog.md",sourceDirName:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants",slug:"/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/ConfirmDialog",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/ConfirmDialog",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Boite de dialogue"},sidebar:"tutorialSidebar",previous:{title:"Select ReferentialItem",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/SelectReferentialItem"},next:{title:"Popup de message d'erreur",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/ErrorMessageBox"}},s={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Affiche une boite de dialogue avec un titre, un messsage, un bouton de confirmation et un bouton d'annulation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'[Inject] ConfirmDialogService confirmDialogService { get; set; } = default!;\nasync Task ShowDialog()\n    {\n        await confirmDialogService.Show("Question", "Delete items", "YES", "NO", OnYes, OnNo);\n    }\n    private async Task OnYes()\n    {\n        // appel\xe9 sur clic bouton YES\n    }\n    private async Task OnNo()\n    {\n        // appel\xe9 sur clic bouton NO\n    }\n')))}u.isMDXComponent=!0}}]);