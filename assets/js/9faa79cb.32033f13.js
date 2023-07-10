"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[4789],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2076:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2,title:"Saisie d'un d\xe9cimal"},l=void 0,o={unversionedId:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputDecimal",id:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputDecimal",title:"Saisie d'un d\xe9cimal",description:"Le composant InputDecimal permet de saisir un Decimal.",source:"@site/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputDecimal.md",sourceDirName:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants",slug:"/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputDecimal",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputDecimal",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Saisie d'un d\xe9cimal"},sidebar:"tutorialSidebar",previous:{title:"S\xe9lection d'une date",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputDate"},next:{title:"Saisie d'un entier",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputInteger"}},p={},s=[{value:"Gestion des data annotations",id:"gestion-des-data-annotations",level:2},{value:"Saisie d&#39;un decimal via un Slider",id:"saisie-dun-decimal-via-un-slider",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Le composant InputDecimal permet de saisir un Decimal."),(0,r.kt)("admonition",{title:"Information",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Le format de saisie est d\xe9fini par la culture courante de la session BeSwarmEnvironment. ")),(0,r.kt)("p",null,"Il se place dans une page razor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Test\n    {\n        [Range(50, 150)]\n        public Decimal Poids { get; set; } =default!;\n    }\n    Test Model = new Test();\n    <BeSwarm.CoreBlazorApp.Components.InputDecimal @bind-Value="@model.Poids" Label="Poids" ValidateProperty="@(()=>model.Poids)" />\n\n')),(0,r.kt)("p",null,"Il accepte les attributs suivants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Format\t: Format de la saisie"),(0,r.kt)("li",{parentName:"ul"},"Min\t\t: Valeur minimale"),(0,r.kt)("li",{parentName:"ul"},"Max\t\t: Valeur maximale"),(0,r.kt)("li",{parentName:"ul"},"Step      :Pas de la saisie"),(0,r.kt)("li",{parentName:"ul"},"ReadOnly  : Indique si le composant est en lecture seule"),(0,r.kt)("li",{parentName:"ul"},"ValidateProperty : Indique la propri\xe9t\xe9 \xe0 valider"),(0,r.kt)("li",{parentName:"ul"},"ValidateStrict : D\xe9finit les bornes possibles de saisie"),(0,r.kt)("li",{parentName:"ul"},"Label         :Le label du composant")),(0,r.kt)("h2",{id:"gestion-des-data-annotations"},"Gestion des data annotations"),(0,r.kt)("p",null,"Si la propri\xe9t\xe9 poss\xe8de des data annotations elles peuvent \xeatre automatiquement prises en compte et contr\xf4l\xe9es par le composant.\nPour cela il faut utiliser l'attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidateProperty")," qui prend en param\xe8tre une lambda qui retourne la propri\xe9t\xe9 \xe0 valider.\nLa propri\xe9t\xe9 ValidateStrict lorsqu'elle est d\xe9finie limite automatiquement la possibilit\xe9 de saisie aux bornes d\xe9finies par les data annotations.\nEx:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Test\n    {\n        [Range(50, 150)]\n        public Decimal Poids { get; set; } =default!;\n    }\n    Test Model = new Test();\n    <BeSwarm.CoreBlazorApp.Components.InputDecimal @bind-Value="@model.Poids" Label="Poids" ValidateProperty="@(()=>model.Poids)" ValidateStrict=true />\n\n')),(0,r.kt)("p",null,"Dans ce cas la saisie sera automatiquement limit\xe9e \xe0 50 \xe0 150."),(0,r.kt)("h3",{id:"saisie-dun-decimal-via-un-slider"},"Saisie d'un decimal via un Slider"),(0,r.kt)("p",null,"Le composant ",(0,r.kt)("inlineCode",{parentName:"p"},"<InputSliderDecimal>")," permet avec les m\xeames param\xe8tres que ",(0,r.kt)("inlineCode",{parentName:"p"},"<InputDecimal>")," de saisir un decimal via un slider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'    <BeSwarm.CoreBlazorApp.Components.InputSliderDecimal @bind-Value="@model.Weight" Label=@_rm.GetString("Weight") Step="0.5m" ValidateProperty="@(()=>model.Weight)" ValidateStrict="true" />\n')))}c.isMDXComponent=!0}}]);