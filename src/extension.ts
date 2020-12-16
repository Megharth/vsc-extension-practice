import * as vscode from 'vscode';
import ColorsViewProvider from './ColorsViewProvider';

export function activate(context: vscode.ExtensionContext) {

	const provider = new ColorsViewProvider(context.extensionUri); 

	const subscriptions = [
		vscode.commands.registerCommand('practice.helloWorld', () => {
			vscode.window.showInformationMessage('Hello World from practice!');
		}),
		vscode.commands.registerCommand('practice.newCommand', () => {
			vscode.window.showInformationMessage('Testing new command!');
		}),
		vscode.window.registerWebviewViewProvider(ColorsViewProvider.viewType, provider),
	];	

	subscriptions.forEach((subscription) => {
		context.subscriptions.push(subscription);
	});
}

export function deactivate() {}
