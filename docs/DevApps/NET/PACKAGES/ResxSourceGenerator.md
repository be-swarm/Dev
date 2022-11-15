---
sidebar_position: 2
---

### Package BeSwarm.ResxSourceGenerator

[![NuGet](https://img.shields.io/nuget/v/BeSwarm.ResxSourceGenerator.svg)](https://www.nuget.org/packages/BeSwarm.ResxSourceGenerator/)
[![NuGet](https://img.shields.io/nuget/dt/BeSwarm.ResxSourceGenerator.svg)](https://www.nuget.org/packages/BeSwarm.ResxSourceGenerator/)


https://github.com/be-swarm/ResxSourceGenerator

Ce package permet de générer des variables fortement typées afin d'accéder aux items des ressources.

Le problème majeur lors de la manipulation des ressources est que ces dernières sont accessibles via des dictionnaires à l'aide du texte de l'identifiant 
de la ressource.
Cela est sujet à de nombreuses erreurs dans la mesure où il est possible de faire des fautes de frappe dans le texte de l'identifiant de la ressource
sans que le compilateur ne détecte l'erreur.

Il semble donc plus judicieux de manipuler des variables qui elles seront contrôlées et sur lesquelles il y aura également l'intellisense de disponible.

Le but de ce package est donc de générer des variables typées correspondant aux items des ressources.

Classiquement les ressources se manipulent avec une instance du RessourceManager:

```csharp 
ressourcemanager.GetString("Item");
```
Avec le package activé, les ressources se manipuleront comme cela:
```csharp showLineNumbers
ResClass.Item();
```


#### Utilisation
Ajout du package au projet:

```csharp showLineNumbers
<PropertyGroup>
   ...
    <EmitCompilerGeneratedFiles>true</EmitCompilerGeneratedFiles>
    <CompilerGeneratedFilesOutputPath>$(BaseIntermediateOutputPath)\GeneratedFiles</CompilerGeneratedFilesOutputPath>
   ...
  </PropertyGroup>

 <ItemGroup>
   <PackageReference Include="BeSwarm.ResxSourceGenerator" Version="1.0.0" /> 
 // highlight-next-line
   <AdditionalFiles Include="**/*.resx" />
  </ItemGroup>
```
:::caution Attention
Ne pas oublier `<AdditionalFiles...>` afin que le générateur de source soit appelé pour les fichiers ressources du projet.
:::


### Exemple de code
Le projet a des ressources appelées App.resx et App.fr.resx
Il y a un item Item1 avec le texte "Texte"
et un Item2 avec le texte "Confirmer la suppression de {0}?"
Lors de l'enregistrement des ressources il sera généré le code suivant:

```csharp showLineNumbers
namespace LibPages.Resources;
public partial class AppRes
{      ....
       public global::System.Globalization.CultureInfo? Culture { get; set; }
       public  string? Item1()=>GetString("Item1","<?Item1?>",null);
       public  string? Item2(object? arg0)=>GetString("Item2","<?Item2?>",arg0);
}
```
Il suffira alors d'instancier la classe AppRes afin de pouvoir invoquer les fonctions.
```csharp showLineNumbers

var res = new AppRes();
var text = res.Item1();
var text2 = res.Item2("test");
```
L'instanciation de la classe peut également se faire par injection de dépendance.
```csharp showLineNumbers
services.AddScoped<AppRes>();
```
### Culture utilisée
Par défaut la culture courante est utilisée.
Il est cependant possible de spécifier une culture particulière.
```csharp 
var res = new AppRes();
res.Culture = new CultureInfo("fr");
```

