---
sidebar_position: 4
title: Exemple d'application
---


Cette application multi-plateforme donne un exemple d'une application développée avec les packages BeSwarm.

[Sources](https://github.com/be-swarm/SampleToDoApp)

:::warning Attention
Cette application est un exemple d'utilisation des packages BeSwarm. Elle n'est pas destinée à être utilisée en production telle quelle.
Notamment au niveau de la gestion de secrets qui n'est pas suffisante.
:::

:::info Information
Pour tester cette application vous devez posséder un compte utilisateur BeSwarm afin de pouvoir vous authentifier via cette application.
:::

Cette application montre comment développer une application multi-plateforme avec les packages BeSwarm.
L'interface utilisateur est minimaliste afin de ne pas complexifier l'exemple.

Elle contient trois projets 
* L'application Blazor Server
* L'application Blazor Wasm
* L'aplication .NET MAUI

Chaque projet met en évidence de manière concrête la configuation nécessaire afin d'utiliser les packages BeSwarm.
Tous les projets exploitent une librairie commune ou sont placés la ou les pages de l'application.

### Points abordés
Les exemples d'applications permettent de voir comment utiliser:
* La gestion de la session BeSwarm (point central de toute application) via le package BeSwarm.CoreBlazorApp.
* L'accès aux Web Api simplifié via le package BeSwarm.WebApiClient (intégré avec le package BeSwarm.CoreBlazorApp).
* Gérer la localisation et les ressources facilement avec le package BeSwarm.ResxSourceGenerator.
* Gérer la validation des data annotation avec le package BeSwarm.Validator.
* Implémenter une architecture MVVM afin de séparer la logique de la vue.