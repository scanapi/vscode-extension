# Contributing

Thanks for taking the time to contribute! 🙇‍♀️🙇‍♂️ Every little bit of help counts!

As one of the repositories under the `scanapi` GitHub organization, this repository follows the
[ScanAPI Contributing Guideline](https://github.com/scanapi/contributors/blob/master/CONTRIBUTING.md).

## Install

### Requirements:

- [node.js](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/download)

Clone the repository and enter into the project's folder:

```shell
$ git clone git@github.com:scanapi/vscode-extension.git
$ cd vscode-extension
```

Install the dependencies:

```shell
$ npm install
```

## Run

```shell
$ npm run vscode:prepublish
```

Then, open the vscode-extension folder inside the editor:

```shell
$ code .
```

Select the file `src/extension.ts` and press `F5`. Select the option `VS Code Extension Development (Preview)`.

This will compile and run the extension in a new Extension Development Host window. There you can test the extension running locally.
