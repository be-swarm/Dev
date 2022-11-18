---
sidebar_position: 3
title: Blazor WebAssembly

---

### Configuration d'une application Blazor WebAssembly

```csharp title="wwwroot/index.html"
<head>
...
 // highlight-start
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
	<link href="_content/MudBlazor/MudBlazor.min.css" rel="stylesheet" />
	 // highlight-end
</head>
<body>
	
...

	 <script src="_framework/blazor.webassembly.js"></script>
     // highlight-start
	 <script src="_content/MudBlazor/MudBlazor.min.js"></script>
	 <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/pbkdf2.js"></script>
     <script src="_content/BeSwarm.CoreBlazorApp/coreblazorapp.js"></script>
	 // highlight-end

</body>
```

```csharp title="program.cs"
// highlight-start
builder.Services.AddCoreBlazorApp();
// highlight-end
```
### Configuration de  la persistance
Elle permet de stocker l'état de la session soit dans le local storage soit dans le session storage
```csharp title="program.cs"
// highlight-start
builder.Services.AddScoped<ISessionPersistence,SessionPersistenceToSessionWeb>();
ou
builder.Services.AddScoped<ISessionPersistence, SessionPersistenceToLocalWeb>();
// highlight-end
```
### Configuration du chiffrement.
C'est le chiffrement qui est utilisé pour les données stockées dans le local storage ou le session storage
```csharp title="program.cs"
// highlight-start
builder.Services.AddScoped<ICryptoService, CryptoFromJS>();
// highlight-end
```
:::info Information
BlazorWebAssembly ne proposant pas de chiffrement en natif, ce dernier est réalisé avec des librairies JS.
Il convient donc d'utiliser obligatoirement `CryptoFromJS`
:::

### Configuration de  l'url de rappel 
CoreBlazorApp propose en standard une url de rappel nommée Login. Elle peut donc être utilisée lors de l'inscription de l'application sur la plateforme BeSwarm.
```csharp title="program.cs"
// highlight-start
builder.Services.AddScoped<ILoginBeSwarmService, BlazorLoginBeSwarmService>();
// highlight-end
```
```csharp title="App.razor"
    <Router AppAssembly="@typeof(App).Assembly" 
	// highlight-start
	AdditionalAssemblies="new[] { typeof(BeSwarm.CoreBlazorApp.Pages.Login).Assembly}"
	// highlight-end
	>
```

### Configuration de  l'authentification oauth2
```csharp 
public class SecureConfig : ISecureConfig
	{
		public string ServiceEntryPoint { get; set; } = "https://dev.beswarm.net";
		public string UserSwarm { get; set; } = "testdev";
		// highlight-start
		public string ApplicationId { get; set; } = "....";
		public string ClientSecret { get; set; } = "....";
		// highlight-end
		public string CallBackUri { get; set; } = "https://....";
	}
```
:::info Information
La valeur ApplicationId et ClientSecret sont les informations obtenues après l'inscription de l'application sur la plateforme BeSwarm.
:::
:::warning Attention
Ces informations sont des informations sensibles. L'application devra être en mesure de les protéger.
:::

```csharp title="program.cs"
builder.Services.AddSingleton<ISecureConfig, SecureConfig>();

```
