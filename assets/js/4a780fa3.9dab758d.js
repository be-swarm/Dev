"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[8650],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:3},i=void 0,s={unversionedId:"DevApps/NET/PACKAGES/CoreBlazorApp/Utilisation",id:"DevApps/NET/PACKAGES/CoreBlazorApp/Utilisation",title:"Utilisation",description:"L'utilisation de CoreBlazorApp se fait en ajoutant le composant BeSwarmEnvironment au plus haut de la hi\xe9rarchie de la page.",source:"@site/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Utilisation.md",sourceDirName:"DevApps/NET/PACKAGES/CoreBlazorApp",slug:"/DevApps/NET/PACKAGES/CoreBlazorApp/Utilisation",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Utilisation",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Blazor MAUI",permalink:"/Dev/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Configuration/ConfigBlazorMaui"},next:{title:"Composants",permalink:"/Dev/docs/category/composants"}},l={},p=[{value:"Services offerts par BeSwarmEnvironment",id:"services-offerts-par-beswarmenvironment",level:3},{value:"Verifier si la sessione est active",id:"verifier-si-la-sessione-est-active",level:4},{value:"R\xe9cup\xe9rer le jeton utilisateur pour le passer aux webapi",id:"r\xe9cup\xe9rer-le-jeton-utilisateur-pour-le-passer-aux-webapi",level:4},{value:"Invoquer la fen\xeatre de login",id:"invoquer-la-fen\xeatre-de-login",level:4},{value:"Deconnecter l&#39;utilisateur",id:"deconnecter-lutilisateur",level:4},{value:"R\xe9cup\xe9rer un client http afin d&#39;invoquer une webapi",id:"r\xe9cup\xe9rer-un-client-http-afin-dinvoquer-une-webapi",level:4},{value:"Obtenir le d\xe9tail d&#39;un message d&#39;erreur retourn\xe9 par l&#39;appel d&#39;une webapi",id:"obtenir-le-d\xe9tail-dun-message-derreur-retourn\xe9-par-lappel-dune-webapi",level:4},{value:"Changer la langue",id:"changer-la-langue",level:4},{value:"Changer le format de l&#39;heure",id:"changer-le-format-de-lheure",level:4},{value:"Conna\xeetre la langue en cours",id:"conna\xeetre-la-langue-en-cours",level:4},{value:"Conna\xeetre le format de l&#39;heure en cours",id:"conna\xeetre-le-format-de-lheure-en-cours",level:4},{value:"G\xe9rer le mode sombre",id:"g\xe9rer-le-mode-sombre",level:4},{value:"R\xe9cup\xe9rer le mode en cours",id:"r\xe9cup\xe9rer-le-mode-en-cours",level:4},{value:"S&#39;abonner aux messages de notification",id:"sabonner-aux-messages-de-notification",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"L'utilisation de CoreBlazorApp se fait en ajoutant le composant BeSwarmEnvironment au plus haut de la hi\xe9rarchie de la page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="App.razor"',title:'"App.razor"'},'// highlight-start\n<BeSwarmEnvironment >\n    <Router AppAssembly="@typeof(App).Assembly" AdditionalAssemblies="new[] { typeof(BeSwarm.CoreBlazorApp.Pages.Login).Assembly}">\n// highlight-end\n    <Found Context="routeData">\n        <RouteView RouteData="@routeData" DefaultLayout="@typeof(MainLayout)" />\n        <FocusOnNavigate RouteData="@routeData" Selector="h1" />\n    </Found>\n    <NotFound>\n        <PageTitle>Not found</PageTitle>\n        <LayoutView Layout="@typeof(MainLayout)">\n            <p role="alert">Sorry, there\'s nothing at this address.</p>\n        </LayoutView>\n    </NotFound>\n</Router>\n// highlight-start\n</BeSwarmEnvironment>>\n// highlight-end\n')),(0,r.kt)("p",null,"D\xe8s lors il est possible d'avoir acc\xe8s \xe0 l'environnement dans les pages razor en injectant la classe."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"[CascadingParameter] BeSwarmEnvironment Session { get; set; } = default!;\n")),(0,r.kt)("h3",{id:"services-offerts-par-beswarmenvironment"},"Services offerts par BeSwarmEnvironment"),(0,r.kt)("h4",{id:"verifier-si-la-sessione-est-active"},"Verifier si la sessione est active"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"bool IsActive=Session.SessionIsActive;\n")),(0,r.kt)("p",null,"retourne true si l'utilisateur est connect\xe9"),(0,r.kt)("h4",{id:"r\xe9cup\xe9rer-le-jeton-utilisateur-pour-le-passer-aux-webapi"},"R\xe9cup\xe9rer le jeton utilisateur pour le passer aux webapi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var userToken=Session.UserToken;\n")),(0,r.kt)("h4",{id:"invoquer-la-fen\xeatre-de-login"},"Invoquer la fen\xeatre de login"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"await Session.Login();\n")),(0,r.kt)("p",null,"Effectue un routage vers l'authentification BeSwarm et r\xe9cup\xe8re le jeton utilisateur."),(0,r.kt)("admonition",{title:"Information",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Si l'authentification est r\xe9ealis\xe9e, le message ChangeEvents.Login est envoy\xe9.")),(0,r.kt)("h4",{id:"deconnecter-lutilisateur"},"Deconnecter l'utilisateur"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"await Session.Logout();\n")),(0,r.kt)("admonition",{title:"Information",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Le message ChangeEvents.Logout est envoy\xe9.")),(0,r.kt)("h4",{id:"r\xe9cup\xe9rer-un-client-http-afin-dinvoquer-une-webapi"},"R\xe9cup\xe9rer un client http afin d'invoquer une webapi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var client=Session.GetUserHttpClient();\n")),(0,r.kt)("h4",{id:"obtenir-le-d\xe9tail-dun-message-derreur-retourn\xe9-par-lappel-dune-webapi"},"Obtenir le d\xe9tail d'un message d'erreur retourn\xe9 par l'appel d'une webapi"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var error=Session.GetInternalErrorFromException(e);\n")),(0,r.kt)("h4",{id:"changer-la-langue"},"Changer la langue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'await Session.SetLang("FR");\n')),(0,r.kt)("admonition",{title:"Information",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Les messages ChangeEvents.Lang et ChangeEvents.AmPm sont envoy\xe9s.")),(0,r.kt)("h4",{id:"changer-le-format-de-lheure"},"Changer le format de l'heure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"await Session.SetAmPm(true);\n")),(0,r.kt)("admonition",{title:"Information",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Le message ChangeEvents.AmPm est envoy\xe9.")),(0,r.kt)("h4",{id:"conna\xeetre-la-langue-en-cours"},"Conna\xeetre la langue en cours"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var currentLang=Session.Lang;\n")),(0,r.kt)("h4",{id:"conna\xeetre-le-format-de-lheure-en-cours"},"Conna\xeetre le format de l'heure en cours"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"bool AmPm=Session.AmPm;\n")),(0,r.kt)("p",null,"retourne true si le format de l'heure courant est AMPM"),(0,r.kt)("h4",{id:"g\xe9rer-le-mode-sombre"},"G\xe9rer le mode sombre"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"await Session.SetDarkMode(true);\n")),(0,r.kt)("admonition",{title:"Information",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Le message ChangeEvents.DarkMode est envoy\xe9.")),(0,r.kt)("h4",{id:"r\xe9cup\xe9rer-le-mode-en-cours"},"R\xe9cup\xe9rer le mode en cours"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var darkMode=Session.GetDarkMode;\n")),(0,r.kt)("h3",{id:"sabonner-aux-messages-de-notification"},"S'abonner aux messages de notification"),(0,r.kt)("p",null,"Afin de re\xe7evoir les messages de notification,il suffit de s'abonner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"[CascadingParameter] BeSwarmEnvironment Session { get; set; } = default!;\nprotected override async Task OnAfterRenderAsync(bool FirstTime)\n    {\n        if (FirstTime)\n        {   \n            Session.EnvironmentHasChanged += async (ChangeEvents e) => await Refresh(e);\n            \n            await Refresh(0);\n        }\n        await base.OnAfterRenderAsync(FirstTime);\n    }\n    private async Task Refresh(ChangeEvents e)\n    {   \n        if (e == ChangeEvents.Lang)\n        {\n            ....\n        }\n    }\n    \n")),(0,r.kt)("admonition",{title:"Attention",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Ne pas oublier de se d\xe9sabonner lors de la destruction du composant."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"void IDisposable.Dispose()\n    {\n        Session.EnvironmentHasChanged -= async (ChangeEvents e) => await Refresh(e);\n    }\n"))),(0,r.kt)("admonition",{title:"Information",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Le composant BeSwarmEnvironment peut effectuer des actions lors de son initialisation que le composant voudrait conna\xeetre.\nCependant il est possible que le composant ne soit pas encore initialis\xe9 lors de l'envoi du message.\nPour cela le composant peut forcer le d\xe9clenchement de la gestion des messages lors de son initialisation.\nEx: ",(0,r.kt)("inlineCode",{parentName:"p"},"await Refresh(0)"))))}c.isMDXComponent=!0}}]);