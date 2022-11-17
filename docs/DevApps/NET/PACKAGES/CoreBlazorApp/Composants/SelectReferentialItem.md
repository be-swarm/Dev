---
sidebar_position: 2
title: Select ReferentialItem

---


Le composant SelectReferentialItem permet de choisir un item d'un ReferentialItem de BeSwarm.
 
:::info Information
Le texte de des items est affiché dans la langue courante de la session BeSwarmEnvironment. 
:::



Il se place dans une page razor:
```csharp 
 List<ReferentialItemLang> items { get; set; } = new();
 ReferentialItemLang selected = new();
...
<BeSwarm.CoreBlazorApp.Components.SelectReferentialItem Items="@items" @bind-Value="@selected" Caption="Items(s)"/>
```
Il est possible de capturer le changement de selection avec l'attribut `SelectChanged`

Ex:
```csharp 
 List<ReferentialItemLang> items { get; set; } = new();
 ReferentialItemLang selected = new();
...
<BeSwarm.CoreBlazorApp.Components.SelectReferentialItem Items="@items" @bind-Value="@selected" SelectChanged="OnSelectedLangChanged" Caption="Items(s)"/>

  private async Task OnSelectedLangChanged(ReferentialItemLang value)
    {
        .....

    }

```


