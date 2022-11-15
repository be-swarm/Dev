---
sidebar_position: 5
title: Le jeton JWT
---

Lorsque l'application a reçu un jeton d'accès elle devra le fournir dans les requêtes HTTP pour accéder aux données de l'utilisateur.

Les données retournées sont d'une part le jeton d'accès JWT mais aussi d'autres informations nécessaires afin d'appeler correctement
les urls des services concernés.


![Jwt](img/jwt.png)

la strucure de données contient:
* le jeton utilisateur (userotken)
* sa durée de validité
* la ou les urls de services utilisables avec ce jeton

* le jeton applicatif (applicationtotken)
* sa durée de validité
* la ou les urls de services utilisables avec ce jeton

Le jeton applicatif permet d'accéder aux informations relatives à l'application.


## Comment utiliser le jeton utilisateur
Il est à passer via le header Authorize de la requête HTTP sous la forme suivante:
```
Authorization: Bearer <uid_token>
```

La liste des Hosts est la liste des services sur lesquels le jeton est utilisable.
Typiquement ce sont les services qui gèrent l'essaim ou sont stockées les données de l'utilisateur.

L'application peut exploiter cette liste afin de faire du load balancing sur les différents services pour ses requêtes
et/ou pour changer de service si un venait à être indisponible.


## Renouveler le jeton utilisateur
Tout jeton utilisateur a une durée de validité limitée. Cette durée est indiquée dans le champ expires_in et expires_at.
Elle est variable et est spécifiée par l'utilisateur.
Si ce dernier a autorisé le renouvellement de jeton, l'application peut renouveler un jeton périmé en appelant l'url suivante:

```
<url de service>/api/access/v1/refreshtoken
```



L'appel est en faire en post avec le corps suivant:
```csharp
{ "Token": "<uid_token>",
  "Code_challenge":"<code_challenge>"
}
```

