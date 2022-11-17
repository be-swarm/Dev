---
sidebar_position: 2
title: Saisie d'un décimal

---


Le composant InputDecimal permet de saisir un Decimal.
 
Il gère automatiquement la valeur minimale et maximale si un attribut les définit au niveau de la propriété.

:::info Information
Le format de saisie est défini par la culture courante de la session BeSwarmEnvironment. 
:::



Il se place dans une page razor:
```csharp 
public class Test
	{
		[Range(1, 99)]
		public Decimal Poids { get; set; } =default!;
	}
	Test Model = new Test();
 	<BeSwarm.CoreBlazorApp.Components.InputDecimal @bind-Value="@model.Poids" Label="Poids" ValidateProperty="@(()=>model.Poids)" />

```
Il accepte les attributs suivants:
* Format	: Format de la saisie
* Min		: Valeur minimale
* Max		: Valeur maximale
* Step      :Pas de la saisie
* ReadOnly  : Indique si le composant est en lecture seule

### Saisie d'un decimal via un Slider
Le composant `<InputSliderDecimal>` permet avec les mêmes paramètres que `<InputDecimal>` de saisir un decimal via un slider.

```csharp
	<BeSwarm.CoreBlazorApp.Components.InputSliderDecimal @bind-Value="@model.Weight" Label=@_rm.GetString("Weight") Step="0.5m" ValidateProperty="@(()=>model.Weight)" ValidateStrict="true" />
```

