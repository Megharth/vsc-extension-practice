import * as vscode from 'vscode';

export default class ColorsViewProvider implements vscode.WebviewViewProvider {
    public static readonly viewType:string = 'practice.colorView';
    private _view?: vscode.WebviewView;
    private _extensionUri: vscode.Uri;

    constructor(extensionUri: vscode.Uri) {
        this._extensionUri = extensionUri;
        console.log('colorview initialized');
    }

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken
    ) {
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri]
        };

        webviewView.webview.html = this._getHTMLContent(webviewView.webview);
    }

    private _getHTMLContent(webview: vscode.Webview) {
        const reactAppPath = vscode.Uri.joinPath(this._extensionUri, "reactApp", "reactApp.js");
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
                <div id="root"></div>
                <script src="${reactAppPath}" nonce=${nonce}></script>
            </body>
        </html>
        `;
    }

}

const getNonce = () => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
    return text;
};