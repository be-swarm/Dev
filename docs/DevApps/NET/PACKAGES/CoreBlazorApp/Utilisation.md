---
sidebar_position: 3

---

L'utilisation de CoreBlazorApp se fait en ajoutant le composant BeSwarmEnvironment au plus haut de la hiérarchie de la page.


```csharp title="App.razor"
// highlight-start
<BeSwarmEnvironment >
// highlight-end
    <Found Context="routeData">
        <RouteView RouteData="@routeData" DefaultLayout="@typeof(MainLayout)" />
        <FocusOnNavigate RouteData="@routeData" Selector="h1" />
    </Found>
    <NotFound>
        <PageTitle>Not found</PageTitle>
        <LayoutView Layout="@typeof(MainLayout)">
            <p role="alert">Sorry, there's nothing at this address.</p>
        </LayoutView>
    </NotFound>
</Router>
// highlight-start
</BeSwarmEnvironment>>
// highlight-end
```

Dès lors il est possible d'avoir accès à l'environnement dans les pages razor en injectant la classe.
```csharp 
[CascadingParameter] BeSwarmEnvironment Session { get; set; } = default!;
```
### Services offerts par BeSwarmEnvironment
#### Verifier si la sessione est active
```csharp 
bool IsActive=Session.SessionIsActive;
```
retourne true si l'utilisateur est connecté
#### Récupérer le jeton utilisateur pour le passer aux webapi
```csharp 
var userToken=Session.UserToken;
```
#### Invoquer la fenêtre de login
```csharp 
await Session.Login();
```
Effectue un routage vers l'authentification BeSwarm et récupère le jeton utilisateur.
:::info Information
Si l'authentification est réealisée, le message ChangeEvents.Login est envoyé.
:::

#### Deconnecter l'utilisateur
```csharp 
await Session.Logout();
```
:::info Information
Le message ChangeEvents.Logout est envoyé.
:::
#### Récupérer un client http afin d'invoquer une webapi
```csharp 
var client=Session.GetUserHttpClient();
```
#### Obtenir le détail d'un message d'erreur retourné par l'appel d'une webapi
```csharp 
var error=Session.GetInternalErrorFromException(e);
```
#### Changer la langue
```csharp 
await Session.SetLang("FR");
```
:::info Information
Les messages ChangeEvents.Lang et ChangeEvents.AmPm sont envoyés.
:::

#### Changer le format de l'heure
```csharp 
await Session.SetAmPm(true);
```
:::info Information
Le message ChangeEvents.AmPm est envoyé.
:::

#### Connaître la langue en cours
```csharp 
var currentLang=Session.Lang;
```
#### Connaître le format de l'heure en cours
```csharp 
bool AmPm=Session.AmPm;
```
retourne true si le format de l'heure courant est AMPM

#### Gérer le mode sombre
```csharp 
await Session.SetDarkMode(true);
```
:::info Information
Le message ChangeEvents.DarkMode est envoyé.
:::
#### Récupérer le mode en cours
```csharp 
var darkMode=Session.GetDarkMode;
```

### S'abonner aux messages de notification
Afin de reçevoir les messages de notification,il suffit de s'abonner.
```csharp
[CascadingParameter] BeSwarmEnvironment Session { get; set; } = default!;
protected override async Task OnAfterRenderAsync(bool FirstTime)
	{
		if (FirstTime)
		{   
			Session.EnvironmentHasChanged += async (ChangeEvents e) => await Refresh(e);
			
			await Refresh(0);
		}
		await base.OnAfterRenderAsync(FirstTime);
	}
    private async Task Refresh(ChangeEvents e)
	{   
		if (e == ChangeEvents.Lang)
		{
			....
		}
	}
	
```
:::warning Attention
Ne pas oublier de se désabonner lors de la destruction du composant.

```csharp
void IDisposable.Dispose()
	{
		Session.EnvironmentHasChanged -= async (ChangeEvents e) => await Refresh(e);
	}
```
:::

:::info Information
Le composant BeSwarmEnvironment peut effectuer des actions lors de son initialisation que le composant voudrait connaître.
Cependant il est possible que le composant ne soit pas encore initialisé lors de l'envoi du message.
Pour cela le composant peut forcer le déclenchement de la gestion des messages lors de son initialisation.
Ex: `await Refresh(0)`
:::







