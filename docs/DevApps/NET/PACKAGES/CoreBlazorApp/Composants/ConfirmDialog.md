---
sidebar_position: 3
title: Boite de dialogue

---
Affiche une boite de dialogue avec un titre, un messsage, un bouton de confirmation et un bouton d'annulation

```csharp
[Inject] ConfirmDialogService confirmDialogService { get; set; } = default!;
async Task ShowDialog()
	{
		await confirmDialogService.Show("Question", "Delete items", "YES", "NO", OnYes, OnNo);
	}
	private async Task OnYes()
	{
		// appelé sur clic bouton YES
	}
	private async Task OnNo()
	{
		// appelé sur clic bouton NO
	}
```

