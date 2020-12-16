import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const subscriptions = [
		vscode.commands.registerCommand('practice.helloWorld', () => {
			vscode.window.showInformationMessage('Hello World from practice!');
		}),
		vscode.commands.registerCommand('practice.newCommand', () => {
			vscode.window.showInformationMessage('Testing new command!');
		})
	];	

	subscriptions.forEach((subscription) => {
		context.subscriptions.push(subscription);
	});
}

export function deactivate() {}
