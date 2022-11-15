---
sidebar_position: 1
---

### Package BeSwarm.Validator
[![NuGet](https://img.shields.io/nuget/v/BeSwarm.Validator.svg)](https://www.nuget.org/packages/BeSwarm.Validator/)
[![NuGet](https://img.shields.io/nuget/dt/BeSwarm.Validator.svg)](https://www.nuget.org/packages/BeSwarm.Validator/)

https://github.com/be-swarm/Validator

Ce package permet d'effectuer des validations d'attributs de manière localisée.

Les attributs pris en charge sont les suivants:

- [Required]
- [Range]
- [MaxLength]
- [MinLength]
- [StringLength]

#### Utilisation


Exemple de code:
```csharp showLineNumbers
public class Model
{
    [Required]
    [MaxLength(6)]
    public string Name { get; set; }
}

class Program
{


    public static async Task Main(string[] args)
    {

        Model t= new();
		 // highlight-start
        ValidateContext context = new ValidateContext(false);
        var listvalidationfailure = await Validate.ValidateObject(t, context);
         // highlight-end
        foreach (var item in listvalidationfailure)
        {
           Console.WriteLine($"*** error **** Field: {item.PropertyName} value={item.Obj} attribute:{item.AttributeType} message:{item.ErrorMessage}");
        }
        t.Name = "11";
		// highlight-next-line
        listvalidationfailure = await Validate.ValidateObject(t, context);
        foreach (var item in listvalidationfailure)
        {
            Console.WriteLine($"*** error **** Field: {item.PropertyName} value={item.Obj} attribute:{item.AttributeType} message:{item.ErrorMessage}");
        }
        t.Name = "LPLOKUAAA";
		// highlight-next-line
        listvalidationfailure = await Validate.ValidateObject(t, context);
        foreach (var item in listvalidationfailure)
        {
            Console.WriteLine($"*** error **** Field: {item.PropertyName} value={item.Obj} attribute:{item.AttributeType} message:{item.ErrorMessage}");
        }
		Console.ReadKey();
    }
}

```

### Vérifier la présence d'un attribut sur une propriété
ex: vérifier si l'attribut [Required] est présent sur la propriété Name de l'instance t

```csharp 

RequiredAttribute? ra=Validate.GetAttributeIfExist<RequiredAttribute>(t, nameof(t.Name));

```

### Utilisation avec Blazor dans un EditForm

```csharp
EditForm Model="@_model" OnValidSubmit="@SubmitValidForm">
// highlight-next-line
	<BeSwarm.Validator.BlazorValidator @ref="_BlazorValidationValidator" ValidateContext="mycontext" />
	...
</EditForm>
	
```

### Ajouter des Fluent Validation
Il est possible de rajouter des validations de type fluent validation. 
Ex: Rajout d'une règle fluent
```csharp
public class FluentValidatorModel : AbstractValidator<Model>
 {
	public FluentValidatorModel()
	{
			RuleFor(x => x.Name).NotEmpty().WithMessage("controlled by fluent: not empty");
	}
 }
```
puis dans le code:
```csharp
ValidateContext context = new ValidateContext(false);
context.FluentValidator = new FluentValidatorModel();
var listvalidationfailure = await Validate.ValidateObject(t, context);
```