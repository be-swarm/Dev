---
sidebar_position: 3
title: Client Http
---


BeSwarmEnvironment offre une factory de client http qui permet de créer un client http avec les paramètres de base de BeSwarm.
Ce client Http n'est pas un simple client Http.
Il se charge de beacoup de choses de manière totalement transparente pour le développeur.

* Il choisit automatiquement le sevice BeSwarm.
* Il retente les requêtes sur des erreurs réseaux.
* Il renouvelle automatiquement le jeton JWT si celui-ci est périmé.
* Il loggue les requêtes et les réponses.
* Etc.

Pour récupérer une instance de client:
```csharp
[CascadingParameter] BeSwarmEnvironment Session { get; set; } = default!;
...
var httpclient = Session.GetUserHttpClient();
...
```

