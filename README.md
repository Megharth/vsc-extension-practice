# VSCode Extension practice

Here I will be going through the steps I went through to create an extension in the vscode. The best way to learn about vscode extension is to go over the [documentation](https://code.visualstudio.com/api/get-started/your-first-extension).

### How to setup the project.

clone the project and run `npm install` to install all the dependencies. If you are using vscode you just need to press `F5` to build the project and open the output. 

### Step 1: Understanding subscriptions

Every command or view will be exposed as a subscription. So, I have stored them in an array and then I pushed them in subscriptions array of the context provided by `vscode`. You  can checkout the code at that point with [subscriptions](https://github.com/Megharth/vsc-extension-practice/releases/tag/subscriptions) tag. This will contain two command `helloWorld` and `newCommand`.

### Step 2: Understanding webview view

Here I added a new class that will generate HTML Content for our webview view. And then I created an instance of it in `extension.ts` to create a subscription (in this case we register our webview view). Checkout the code with [webviewView](https://github.com/Megharth/vsc-extension-practice/releases/tag/webviewView) tag.

### Step 3: Creating an item in the sidebar

I created an item in the sidebar with the help of [this](https://code.visualstudio.com/api/extension-guides/tree-view) documentation (head down to **View Container** section).

Tag: [viewContainer](https://github.com/Megharth/vsc-extension-practice/releases/tag/viewContainer)
