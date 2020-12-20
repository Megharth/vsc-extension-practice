"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const ColorsViewProvider_1 = require("./ColorsViewProvider");
function activate(context) {
    const provider = new ColorsViewProvider_1.default(context.extensionUri);
    const subscriptions = [
        vscode.commands.registerCommand('practice.helloWorld', () => {
            vscode.window.showInformationMessage('Hello World from practice!');
        }),
        vscode.commands.registerCommand('practice.newCommand', () => {
            vscode.window.showInformationMessage('Testing new command!');
        }),
        vscode.window.registerWebviewViewProvider(ColorsViewProvider_1.default.viewType, provider),
    ];
    subscriptions.forEach((subscription) => {
        context.subscriptions.push(subscription);
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map