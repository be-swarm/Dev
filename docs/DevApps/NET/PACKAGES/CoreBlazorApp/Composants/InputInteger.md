---
sidebar_position: 2
title: Saisie d'un entier

---


Le composant InputInteger permet de saisir un entier.
 

Il se place dans une page razor:
```csharp 
public class Test
	{
		[Range(1, 99)]
		public int Age { get; set; } =default!;
	}
	Test Model = new Test();
 	<BeSwarm.CoreBlazorApp.Components.InputInteger @bind-Value="@model.Age" Label="Age" ValidateProperty="@(()=>model.Age)" />

```
Il accepte les attributs suivants:
* Format	: Format de la saisie
* Min		: Valeur minimale
* Max		: Valeur maximale
* Step      :Pas de la saisie
* ReadOnly  : Indique si le composant est en lecture seule
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
		[Range(1, 99)]
		public int Age { get; set; } =default!;
	}
	Test Model = new Test();
 	<BeSwarm.CoreBlazorApp.Components.InputInteger @bind-Value="@model.Age" Label="Age" ValidateProperty="@(()=>model.Age)" ValidateStrict=true />
```
Dans ce cas la saisie sera automatiquement limitée à 1 à 99.



### Saisie d'un integer via un Slider
Le composant `<InputSliderInteger>` permet avec les mêmes paramètres que `<InputInteger>` de saisir un entier via un slider.

```csharp
	<BeSwarm.CoreBlazorApp.Components.InputSliderInteger @bind-Value="@model.Age" Label="Age" ValidateProperty="@(()=>model.Age)" ValidateStrict="true" />
```
