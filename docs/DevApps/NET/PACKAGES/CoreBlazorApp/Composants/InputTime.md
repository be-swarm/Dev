---
sidebar_position: 2
title: Sélection d'une heure

---


Le composant InputTime permet de choisir une date.
:::info Information
L'heure est affichée et  saisie dans la culture courante de la session BeSwarmEnvironment.
:::

Il se place dans une page razor:
```csharp 
 	<BeSwarm.CoreBlazorApp.Components.InputTime @bind-Value="@model.Date" Label="Time" ValidateProperty="@(()=>model.Date)" />
```

:::info Information
Les dates sont de type `DateTimeOffset`.

Le composant met à jout la partie heure de la date passée en paramètre.
:::