---
sidebar_position: 2
title: Saisie d'un entier

---


Le composant InputInteger permet de saisir un entier.
 
Il gère automatiquement la valeur minimale et maximale si un attribut les définit au niveau de la propriété.

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


### Saisie d'un integer via un Slider
Le composant `<InputSliderInteger>` permet avec les mêmes paramètres que `<InputInteger>` de saisir un entier via un slider.

```csharp
	<BeSwarm.CoreBlazorApp.Components.InputSliderInteger @bind-Value="@model.Age" Label="Age" ValidateProperty="@(()=>model.Age)" ValidateStrict="true" />
```
