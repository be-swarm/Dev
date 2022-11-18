---
sidebar_position: 2
title: Saisie d'un texte

---


Le composant InputText permet de saisir un texte.
 



Il se place dans une page razor:
```csharp 
public class Test
	{
		[Required]
		[MaxLength(10), MinLength(4)]
		public string Name { get; set; } = default!;
	}
	Test Model = new Test();
	<BeSwarm.CoreBlazorApp.Components.InputText @bind-Value="@model.Name" Label=@app.Name() ValidateProperty="@(()=>model.Name)" />

```
Il accepte les attributs suivants:

* MaxLength		: Nombre max de caractères
* ReadOnly      : Indique si le composant est en lecture seule
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
		[Required]
		[MaxLength(10), MinLength(4)]
		public string Name { get; set; } = default!;
	}
	Test Model = new Test();
	<BeSwarm.CoreBlazorApp.Components.InputText @bind-Value="@model.Name" Label=@app.Name() ValidateProperty="@(()=>model.Name)" ValidateStrict=true />

```
Dans ce cas la saisie sera automatiquement limitée à 10 caractères .

