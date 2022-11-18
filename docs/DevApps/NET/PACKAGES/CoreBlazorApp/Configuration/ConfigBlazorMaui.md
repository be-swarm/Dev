---
sidebar_position: 4
title: Blazor MAUI

---

### Configuration d'une application Blazor Maui

```csharp title="wwwroot/index.html
<head>
...
 // highlight-start
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
	<link href="_content/MudBlazor/MudBlazor.min.css" rel="stylesheet" />
	 // highlight-end
</head>
<body>

...

	
	 // highlight-start
	<script src="_content/MudBlazor/MudBlazor.min.js"></script>
	 // highlight-end

</body>
```

```csharp title="MauiProgram.cs"
// highlight-start
builder.Services.AddCoreBlazorApp();
// highlight-end
```
### Configuration de  la persistance
Elle permet de stocker l'état de la session soit dans le local storage soit dans le session storage
```csharp title="MauiProgram.cs"
// highlight-start
builder.Services.AddScoped<ISessionPersistence, SessionPersistenceMaui>();
// highlight-end
```
:::info Information
CoreBlazorApp ne propose pas en standard la classe de stockage pour .NET MAUI
Il faut la développer avec un code comme celui-ci par exemple:
```csharp
	public class SessionPersistenceMaui : ISessionPersistence
	{
		

		public SessionPersistenceMaui()
		{
		}
		public async Task Save(string key, string value)
		{
			await SecureStorage.Default.SetAsync(key, value);
		}

		public async Task<string> Get(string key)
		{
			return await SecureStorage.Default.GetAsync(key);

		}
	}
```
:::


### Configuration du chiffrement.
C'est le chiffrement qui est utilisé pour les données stockées dans le local storage ou le session storage
```csharp title="program.cs"
// highlight-start
builder.Services.AddScoped<ICryptoService, CryptoFromNativeNetCore>();
// highlight-end
```
### Configuration de  l'url de rappel 
La gestion des urls de rappel étant spécifique, CoreBlazorApp ne propose pas cette fonctionnalité.
Il faut donc créer une classe comme cela
```csharp title="program.cs"
public class MauiAuthenticator : ILoginBeSwarmService
{
	public async Task<LoginAction> Login(string url, string callbackurl)
	{
		LoginAction result = new();

		try
		{
			WebAuthenticatorResult res = await WebAuthenticator.Default.AuthenticateAsync(
				new Uri(url),
				new Uri(callbackurl));

			result.CallBackUrl = new RequestUrl(callbackurl).Create(new Parameters(res.Properties));
			result.Action = LoginActions.gettokens;
		}
		catch (TaskCanceledException)
		{
		}
		return result;
	}

}
```
rajouter le code suivant dans MainApplication.cs
```csharp title="MainApplication.cs"
[Activity(NoHistory = true, LaunchMode = LaunchMode.SingleTop, Exported = true)]
	[IntentFilter(new[] { Android.Content.Intent.ActionView },
				  Categories = new[] { Android.Content.Intent.CategoryDefault, Android.Content.Intent.CategoryBrowsable },
				  DataScheme = CALLBACK_SCHEME)]
	public class WebAuthenticationCallbackActivity : Microsoft.Maui.Authentication.WebAuthenticatorCallbackActivity
	{
		const string CALLBACK_SCHEME = "com.beswarm.testmauiblazor";

	}
```
```csharp title="Plateformes/Android/AndroidManifest.xml"
<queries>
  <intent>
    <action android:name="android.support.customtabs.action.CustomTabsService" />
  </intent>
</queries>
```


### Configuration de  l'authentification oauth2.
```csharp 
public class SecureConfig : ISecureConfig
	{
		public string ServiceEntryPoint { get; set; } = "https://dev.beswarm.net";
		public string UserSwarm { get; set; } = "testdev";
		// highlight-start
		public string ApplicationId { get; set; } = "....";
		public string ClientSecret { get; set; } = "....";
		// highlight-end
		public string CallBackUri { get; set; } = "com.beswarm.testmauiblazor://";
	}
```
:::info Information
La valeur ApplicationId et ClientSecret sont les informations obtenues après l'inscription de l'application sur la plateforme BeSwarm.

La valeur de CallBackUri soit être la même que celle indiquée dans CALLBACK_SCHEME 
:::
:::warning Attention
Ces informations sont des informations sensibles. L'application devra être en mesure de les protéger.
:::

```csharp title="program.cs"
builder.Services.AddSingleton<ISecureConfig, SecureConfig>();

```
