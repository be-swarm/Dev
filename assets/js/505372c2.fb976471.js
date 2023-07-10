"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[1104],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,p(p({ref:n},c),{},{components:t})):r.createElement(f,p({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2,title:"Convention de nommage"},p=void 0,i={unversionedId:"DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/Nommage",id:"DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/Nommage",title:"Convention de nommage",description:"Toutes les classes sont g\xe9n\xe9r\xe9s dans des namespaces diff\xe9rents.",source:"@site/docs/DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/Nommage.md",sourceDirName:"DevApps/NET/PACKAGES/CoreBlazorApp/WebApi",slug:"/DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/Nommage",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/Nommage",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Convention de nommage"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/Introduction"},next:{title:"Client Http",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/WebApi/ClientHttp"}},s={},l=[],c={toc:l},u="wrapper";function d(e){let{components:n,...a}=e;return(0,o.kt)(u,(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Toutes les classes sont g\xe9n\xe9r\xe9s dans des namespaces diff\xe9rents.\nChaque namespace corrspond \xe0 au type d'objet manipul\xe9 par les webapi correspondantes.\nLe nom du namespace ainsi que le nom de la fonction est disponible dans l'interface swagger."),(0,o.kt)("p",null,"Ex:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Swagger",src:t(7335).Z,width:"1113",height:"1002"})),(0,o.kt)("p",null,"Le code correspondant afin d'ajouter une t\xe2che dans le planning sera:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'\nvar httpclient = Session.GetUserHttpClient();\nBeSwarm.WebApi.Planner.Planner plan = new("", httpclient);\n\nBeSwarm.WebApi.Planner.CreatePlanner create = new();\ncreate.Description = "....";\ntry\n{\n    var result = await plan.AddPlannerAsync(Session.UserToken, create);\n}\ncatch (Exception e)\n{\n}\n\n')))}d.isMDXComponent=!0},7335:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/swagger-411de1372de1b801b7c781aa0d25793c.png"}}]);