---
sidebar_position: 2
title: Saisie d'un décimal

---


Le composant InputDecimal permet de saisir un Decimal.
 

:::info Information
Le format de saisie est défini par la culture courante de la session BeSwarmEnvironment. 
:::



Il se place dans une page razor:
```csharp 
public class Test
	{
		[Range(50, 150)]
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
* ValidateProperty : Indique la propriété à valider
* ValidateStrict : Définit les bornes possibles de saisie
* Label         :Le label du composant

## Gestion des data annotations
Si la propriété possède des data annotations elles peuvent être automatiquement prises en compte et contrôlées par le composant.
Pour cela il faut utiliser l'attribut `ValidateProperty` qui prend en paramètre une lambda qui retourne la propriété à valider.
La propriété ValidateStrict lorsqu'elle est définie limite automatiquement la possibilité de saisie aux bornes définies par les data annotations.
Ex:
```csharp 
public class Test
	{
		[Range(50, 150)]
		public Decimal Poids { get; set; } =default!;
	}
	Test Model = new Test();
 	<BeSwarm.CoreBlazorApp.Components.InputDecimal @bind-Value="@model.Poids" Label="Poids" ValidateProperty="@(()=>model.Poids)" ValidateStrict=true />

```
Dans ce cas la saisie sera automatiquement limitée à 50 à 150.




### Saisie d'un decimal via un Slider
Le composant `<InputSliderDecimal>` permet avec les mêmes paramètres que `<InputDecimal>` de saisir un decimal via un slider.

```csharp
	<BeSwarm.CoreBlazorApp.Components.InputSliderDecimal @bind-Value="@model.Weight" Label=@_rm.GetString("Weight") Step="0.5m" ValidateProperty="@(()=>model.Weight)" ValidateStrict="true" />
```

