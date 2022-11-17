---
sidebar_position: 2
title: Sélection d'une date

---


Le composant InputDate permet de choisir une date.
:::info Information
La date est affichée et  saisie dans la culture courante de la session BeSwarmEnvironment.
:::

Il se place dans une page razor:
```csharp 
  <BeSwarm.CoreBlazorApp.Components.InputDate @bind-Value="@model.Date" Label="Date" ValidateProperty="@(()=>model.Date)"  />
```

:::info Information
Les dates sont de type `DateTimeOffset`.
:::