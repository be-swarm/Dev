---
sidebar_position: 4
title: Bonnes pratiques
---

Les classes d'accès aux webapi sont générées à partir des spécifications OpenApi.
Les objets à passer aux webapi sont générés avec les annotations de validation de données.
Les status sont aussi générés en fonction des status retournés par les webapi.

Le développeur a donc toutes les informations disponibles afin de s'affanchir de toute cette gestion 
fastidieuses.

## Validation des données
Il est important de s'assurer que les objets envoyés aux webapi sont valides.
Dans tous les cas un appel d'api avec des données invalides retournera un status 400.

## Gestion des erreurs
Une exception est générée pour tout status différent de 200.
Il convient donc de s'assurer que les appels aux webapi sont dans un bloc try/catch.
Le bloc catch peut-être exploité afin de déterminer la gravité de l'erreur.
Ex: Une webapi qui retourne rien va retourner un status 404 qui va ainsi généré une exception.
Ce n'est pas pour autant une erreur grave.



```csharp 

var httpclient = Session.GetUserHttpClient();
BeSwarm.WebApi.Planner.Planner plan = new("", httpclient);

BeSwarm.WebApi.Planner.CreatePlanner create = new();
create.Description = "....";
try
{
	var result = await plan.AddPlannerAsync(Session.UserToken, create);
}
catch (Exception e)
{
}

```
:::info Information
Les exceptions retournées par les classes générées sont relativement complexes à exploiter.
Pour cela BeSwarmEnvironment propose une fonction qui permet de normaliser les erreurs avec
un seul et unique format.
:::

```csharp 

var httpclient = Session.GetUserHttpClient();
BeSwarm.WebApi.Planner.Planner plan = new("", httpclient);

BeSwarm.WebApi.Planner.CreatePlanner create = new();
create.Description = "....";
try
{
	var result = await plan.AddPlannerAsync(Session.UserToken, create);
}
catch (Exception e)
{
   // highlight-start
   ResultAction err=Session.GetInternalErrorFromException(e)
   if (err.Error == StatusAction.Notfound)
   {
   }
   // highlight-end
}

```
Dès lors il est facile de dénir les actions à effectuer en fonction de l'erreur.

ResultAction dispose d'une variable IsError qui si elle est à vrai indique que l'erreur est grave.
Il est donc possible de définir des actions à effectuer en fonction de cette variable.
ex:
```csharp 
catch (Exception e)
{
   ResultAction err=Session.GetInternalErrorFromException(e)
   // highlight-start
   if (err.IsError)
   {
 	 // problème
   }
   // highlight-end
}
```


