"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class ColorsViewProvider {
    constructor(extensionUri) {
        this._extensionUri = extensionUri;
        console.log('colorview initialized');
    }
    resolveWebviewView(webviewView, context, _token) {
        this._view = webviewView;
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri]
        };
        webviewView.webview.html = this._getHTMLContent(webviewView.webview);
    }
    _getHTMLContent(webview) {
        const reactAppPath = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'reactApp', 'reactApp.js'));
        const nonce = getNonce();
        return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'unsafe-eval' 'nonce-${nonce}';">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
                <div id="root">
                    <button>button</button>
                </div>
                <script src="${reactAppPath}" nonce="${nonce}"></script>
            </body>
        </html>
        `;
    }
}
exports.default = ColorsViewProvider;
ColorsViewProvider.viewType = 'practice.colorView';
const getNonce = () => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
//# sourceMappingURL=ColorsViewProvider.js.map