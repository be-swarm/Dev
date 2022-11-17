---
sidebar_position: 4
title: Popup de message d'erreur

---
Affiche une boite de dialogue avec un titre, un messsage

```csharp
[Inject] ErrorDialogService errorDialogService { get; set; } = default!;
async Task ShowError()
	{
		await errorDialogService.Show("Titre", "Message");
	}
``` 

