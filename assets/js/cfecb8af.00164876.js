"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[1775],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return t?n.createElement(g,l(l({ref:r},p),{},{components:t})):n.createElement(g,l({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=d;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9024:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const s={sidebar_position:2},l=void 0,o={unversionedId:"DevApps/NET/PACKAGES/ResxSourceGenerator",id:"DevApps/NET/PACKAGES/ResxSourceGenerator",title:"ResxSourceGenerator",description:"Package BeSwarm.ResxSourceGenerator",source:"@site/docs/DevApps/NET/PACKAGES/ResxSourceGenerator.md",sourceDirName:"DevApps/NET/PACKAGES",slug:"/DevApps/NET/PACKAGES/ResxSourceGenerator",permalink:"/Dev/docs/DevApps/NET/PACKAGES/ResxSourceGenerator",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Validator",permalink:"/Dev/docs/DevApps/NET/PACKAGES/Validator"},next:{title:"CoreBlazorApp",permalink:"/Dev/docs/category/coreblazorapp"}},i={},u=[{value:"Package BeSwarm.ResxSourceGenerator",id:"package-beswarmresxsourcegenerator",level:3},{value:"Utilisation",id:"utilisation",level:4},{value:"Exemple de code",id:"exemple-de-code",level:3},{value:"Culture utilis\xe9e",id:"culture-utilis\xe9e",level:3}],p={toc:u},c="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"package-beswarmresxsourcegenerator"},"Package BeSwarm.ResxSourceGenerator"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/BeSwarm.ResxSourceGenerator/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/v/BeSwarm.ResxSourceGenerator.svg",alt:"NuGet"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/BeSwarm.ResxSourceGenerator/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/nuget/dt/BeSwarm.ResxSourceGenerator.svg",alt:"NuGet"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/be-swarm/ResxSourceGenerator"},"https://github.com/be-swarm/ResxSourceGenerator")),(0,a.kt)("p",null,"Ce package permet de g\xe9n\xe9rer des variables fortement typ\xe9es afin d'acc\xe9der aux items des ressources."),(0,a.kt)("p",null,"Le probl\xe8me majeur lors de la manipulation des ressources est que ces derni\xe8res sont accessibles via des dictionnaires \xe0 l'aide du texte de l'identifiant\nde la ressource.\nCela est sujet \xe0 de nombreuses erreurs dans la mesure o\xf9 il est possible de faire des fautes de frappe dans le texte de l'identifiant de la ressource\nsans que le compilateur ne d\xe9tecte l'erreur."),(0,a.kt)("p",null,"Il semble donc plus judicieux de manipuler des variables qui elles seront contr\xf4l\xe9es et sur lesquelles il y aura \xe9galement l'intellisense de disponible."),(0,a.kt)("p",null,"Le but de ce package est donc de g\xe9n\xe9rer des variables typ\xe9es correspondant aux items des ressources."),(0,a.kt)("p",null,"Classiquement les ressources se manipulent avec une instance du RessourceManager:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'ressourcemanager.GetString("Item");\n')),(0,a.kt)("p",null,"Avec le package activ\xe9, les ressources se manipuleront comme cela:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"ResClass.Item();\n")),(0,a.kt)("h4",{id:"utilisation"},"Utilisation"),(0,a.kt)("p",null,"Ajout du package au projet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'<PropertyGroup>\n   ...\n    <EmitCompilerGeneratedFiles>true</EmitCompilerGeneratedFiles>\n    <CompilerGeneratedFilesOutputPath>$(BaseIntermediateOutputPath)\\GeneratedFiles</CompilerGeneratedFilesOutputPath>\n   ...\n  </PropertyGroup>\n\n <ItemGroup>\n   <PackageReference Include="BeSwarm.ResxSourceGenerator" Version="1.0.0" /> \n // highlight-next-line\n   <AdditionalFiles Include="**/*.resx" />\n  </ItemGroup>\n')),(0,a.kt)("admonition",{title:"Attention",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Ne pas oublier ",(0,a.kt)("inlineCode",{parentName:"p"},"<AdditionalFiles...>")," afin que le g\xe9n\xe9rateur de source soit appel\xe9 pour les fichiers ressources du projet.")),(0,a.kt)("h3",{id:"exemple-de-code"},"Exemple de code"),(0,a.kt)("p",null,'Le projet a des ressources appel\xe9es App.resx et App.fr.resx\nIl y a un item Item1 avec le texte "Texte"\net un Item2 avec le texte "Confirmer la suppression de {0}?"\nLors de l\'enregistrement des ressources il sera g\xe9n\xe9r\xe9 le code suivant:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'namespace LibPages.Resources;\npublic partial class AppRes\n{      ....\n       public global::System.Globalization.CultureInfo? Culture { get; set; }\n       public  string? Item1()=>GetString("Item1","<?Item1?>",null);\n       public  string? Item2(object? arg0)=>GetString("Item2","<?Item2?>",arg0);\n}\n')),(0,a.kt)("p",null,"Il suffira alors d'instancier la classe AppRes afin de pouvoir invoquer les fonctions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'\nvar res = new AppRes();\nvar text = res.Item1();\nvar text2 = res.Item2("test");\n')),(0,a.kt)("p",null,"L'instanciation de la classe peut \xe9galement se faire par injection de d\xe9pendance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddScoped<AppRes>();\n")),(0,a.kt)("h3",{id:"culture-utilis\xe9e"},"Culture utilis\xe9e"),(0,a.kt)("p",null,"Par d\xe9faut la culture courante est utilis\xe9e.\nIl est cependant possible de sp\xe9cifier une culture particuli\xe8re."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var res = new AppRes();\nres.Culture = new CultureInfo("fr");\n')))}m.isMDXComponent=!0}}]);