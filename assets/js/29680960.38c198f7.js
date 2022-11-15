"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,v=d["".concat(o,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:5,title:"Le jeton JWT"},l=void 0,s={unversionedId:"DevApps/NotionsDeBase/LejetonJWT",id:"DevApps/NotionsDeBase/LejetonJWT",title:"Le jeton JWT",description:"Lorsque l'application a re\xe7u un jeton d'acc\xe8s elle devra le fournir dans les requ\xeates HTTP pour acc\xe9der aux donn\xe9es de l'utilisateur.",source:"@site/docs/DevApps/NotionsDeBase/LejetonJWT.md",sourceDirName:"DevApps/NotionsDeBase",slug:"/DevApps/NotionsDeBase/LejetonJWT",permalink:"/Dev/docs/DevApps/NotionsDeBase/LejetonJWT",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Le jeton JWT"},sidebar:"tutorialSidebar",previous:{title:"Authentification",permalink:"/Dev/docs/DevApps/NotionsDeBase/Authentification"},next:{title:"Les Web API",permalink:"/Dev/docs/category/les-web-api"}},o={},u=[{value:"Comment utiliser le jeton utilisateur",id:"comment-utiliser-le-jeton-utilisateur",level:2},{value:"Renouveler le jeton utilisateur",id:"renouveler-le-jeton-utilisateur",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Lorsque l'application a re\xe7u un jeton d'acc\xe8s elle devra le fournir dans les requ\xeates HTTP pour acc\xe9der aux donn\xe9es de l'utilisateur."),(0,i.kt)("p",null,"Les donn\xe9es retourn\xe9es sont d'une part le jeton d'acc\xe8s JWT mais aussi d'autres informations n\xe9cessaires afin d'appeler correctement\nles urls des services concern\xe9s."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Jwt",src:n(2567).Z,width:"1420",height:"571"})),(0,i.kt)("p",null,"la strucure de donn\xe9es contient:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"le jeton utilisateur (userotken)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"sa dur\xe9e de validit\xe9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"la ou les urls de services utilisables avec ce jeton")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"le jeton applicatif (applicationtotken)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"sa dur\xe9e de validit\xe9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"la ou les urls de services utilisables avec ce jeton"))),(0,i.kt)("p",null,"Le jeton applicatif permet d'acc\xe9der aux informations relatives \xe0 l'application."),(0,i.kt)("h2",{id:"comment-utiliser-le-jeton-utilisateur"},"Comment utiliser le jeton utilisateur"),(0,i.kt)("p",null,"Il est \xe0 passer via le header Authorize de la requ\xeate HTTP sous la forme suivante:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Authorization: Bearer <uid_token>\n")),(0,i.kt)("p",null,"La liste des Hosts est la liste des services sur lesquels le jeton est utilisable.\nTypiquement ce sont les services qui g\xe8rent l'essaim ou sont stock\xe9es les donn\xe9es de l'utilisateur."),(0,i.kt)("p",null,"L'application peut exploiter cette liste afin de faire du load balancing sur les diff\xe9rents services pour ses requ\xeates\net/ou pour changer de service si un venait \xe0 \xeatre indisponible."),(0,i.kt)("h2",{id:"renouveler-le-jeton-utilisateur"},"Renouveler le jeton utilisateur"),(0,i.kt)("p",null,"Tout jeton utilisateur a une dur\xe9e de validit\xe9 limit\xe9e. Cette dur\xe9e est indiqu\xe9e dans le champ expires_in et expires_at.\nElle est variable et est sp\xe9cifi\xe9e par l'utilisateur.\nSi ce dernier a autoris\xe9 le renouvellement de jeton, l'application peut renouveler un jeton p\xe9rim\xe9 en appelant l'url suivante:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<url de service>/api/access/v1/refreshtoken\n")),(0,i.kt)("p",null,"L'appel est en faire en post avec le corps suivant:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'{ "Token": "<uid_token>",\n  "Code_challenge":"<code_challenge>"\n}\n')))}c.isMDXComponent=!0},2567:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/jwt-25ed01a3f4ce680126d348227a2bb1df.png"}}]);