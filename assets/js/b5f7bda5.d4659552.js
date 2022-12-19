"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[9297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:3,title:"Blazor WebAssembly"},a=void 0,l={unversionedId:"DevApps/NET/PACKAGES/CoreBlazorApp/Configuration/ConfigBlazorWASM",id:"DevApps/NET/PACKAGES/CoreBlazorApp/Configuration/ConfigBlazorWASM",title:"Blazor WebAssembly",description:"Configuration d'une application Blazor WebAssembly",source:"@site/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Configuration/ConfigBlazorWASM.md",sourceDirName:"DevApps/NET/PACKAGES/CoreBlazorApp/Configuration",slug:"/DevApps/NET/PACKAGES/CoreBlazorApp/Configuration/ConfigBlazorWASM",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Configuration/ConfigBlazorWASM",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Blazor WebAssembly"},sidebar:"tutorialSidebar",previous:{title:"Blazor Server",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Configuration/ConfigBlazorServer"},next:{title:"Blazor MAUI",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Configuration/ConfigBlazorMaui"}},s={},p=[{value:"Configuration d&#39;une application Blazor WebAssembly",id:"configuration-dune-application-blazor-webassembly",level:3},{value:"Configuration de  la persistance",id:"configuration-de--la-persistance",level:3},{value:"Configuration du chiffrement.",id:"configuration-du-chiffrement",level:3},{value:"Configuration de  l&#39;url de rappel",id:"configuration-de--lurl-de-rappel",level:3},{value:"Configuration de  l&#39;authentification oauth2",id:"configuration-de--lauthentification-oauth2",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"configuration-dune-application-blazor-webassembly"},"Configuration d'une application Blazor WebAssembly"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="wwwroot/index.html"',title:'"wwwroot/index.html"'},'<head>\n...\n // highlight-start\n    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />\n    <link href="_content/MudBlazor/MudBlazor.min.css" rel="stylesheet" />\n     // highlight-end\n</head>\n<body>\n    \n...\n\n     <script src="_framework/blazor.webassembly.js"><\/script>\n     // highlight-start\n     <script src="_content/MudBlazor/MudBlazor.min.js"><\/script>\n     <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"><\/script>\n     <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/pbkdf2.js"><\/script>\n     <script src="_content/BeSwarm.CoreBlazorApp/coreblazorapp.js"><\/script>\n     // highlight-end\n\n</body>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="program.cs"',title:'"program.cs"'},"// highlight-start\nbuilder.Services.AddCoreBlazorApp();\n// highlight-end\n")),(0,i.kt)("h3",{id:"configuration-de--la-persistance"},"Configuration de  la persistance"),(0,i.kt)("p",null,"Elle permet de stocker l'\xe9tat de la session soit dans le local storage soit dans le session storage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="program.cs"',title:'"program.cs"'},"// highlight-start\nbuilder.Services.AddScoped<ISessionPersistence,SessionPersistenceToSessionWeb>();\nou\nbuilder.Services.AddScoped<ISessionPersistence, SessionPersistenceToLocalWeb>();\n// highlight-end\n")),(0,i.kt)("h3",{id:"configuration-du-chiffrement"},"Configuration du chiffrement."),(0,i.kt)("p",null,"C'est le chiffrement qui est utilis\xe9 pour les donn\xe9es stock\xe9es dans le local storage ou le session storage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="program.cs"',title:'"program.cs"'},"// highlight-start\nbuilder.Services.AddScoped<ICryptoService, CryptoFromJS>();\n// highlight-end\n")),(0,i.kt)("admonition",{title:"Information",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"BlazorWebAssembly ne proposant pas de chiffrement en natif, ce dernier est r\xe9alis\xe9 avec des librairies JS.\nIl convient donc d'utiliser obligatoirement ",(0,i.kt)("inlineCode",{parentName:"p"},"CryptoFromJS"))),(0,i.kt)("h3",{id:"configuration-de--lurl-de-rappel"},"Configuration de  l'url de rappel"),(0,i.kt)("p",null,"CoreBlazorApp propose en standard une url de rappel nomm\xe9e Login. Elle peut donc \xeatre utilis\xe9e lors de l'inscription de l'application sur la plateforme BeSwarm."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="program.cs"',title:'"program.cs"'},"// highlight-start\nbuilder.Services.AddScoped<ILoginBeSwarmService, BlazorLoginBeSwarmService>();\n// highlight-end\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="App.razor"',title:'"App.razor"'},'    <Router AppAssembly="@typeof(App).Assembly" \n    // highlight-start\n    AdditionalAssemblies="new[] { typeof(BeSwarm.CoreBlazorApp.Pages.Login).Assembly}"\n    // highlight-end\n    >\n')),(0,i.kt)("h3",{id:"configuration-de--lauthentification-oauth2"},"Configuration de  l'authentification oauth2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public class SecureConfig : ISecureConfig\n    {\n        public string ServiceEntryPoint { get; set; } = "https://dev.beswarm.net";\n        public string UserSwarm { get; set; } = "testdev";\n        // highlight-start\n        public string ApplicationId { get; set; } = "....";\n        public string ClientSecret { get; set; } = "....";\n        // highlight-end\n        public string CallBackUri { get; set; } = "https://....";\n    }\n')),(0,i.kt)("admonition",{title:"Information",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"La valeur ApplicationId et ClientSecret sont les informations obtenues apr\xe8s l'inscription de l'application sur la plateforme BeSwarm.")),(0,i.kt)("admonition",{title:"Attention",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Ces informations sont des informations sensibles. L'application devra \xeatre en mesure de les prot\xe9ger.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="program.cs"',title:'"program.cs"'},"builder.Services.AddSingleton<ISecureConfig, SecureConfig>();\n\n")))}u.isMDXComponent=!0}}]);