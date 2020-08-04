import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const provider = vscode.languages.registerCompletionItemProvider('yaml', {
    provideCompletionItems(
      document: vscode.TextDocument,
      position: vscode.Position,
      token: vscode.CancellationToken,
      context: vscode.CompletionContext,
    ) {
      const customVarSnippet = new vscode.CompletionItem('cvar');
      customVarSnippet.insertText = new vscode.SnippetString('${${1}}');
      customVarSnippet.documentation = new vscode.MarkdownString(
        'Snippet for custom vars or ENV vars:\n`${custom_var}`\n`${ENV_VAR}`',
      );

      const pythonCodeSnippet = new vscode.CompletionItem('pycode');
      pythonCodeSnippet.insertText = new vscode.SnippetString('${{${1}}}');
      customVarSnippet.documentation = new vscode.MarkdownString(
        'Snippet for python code, used for the tests section:\n`${{assert 1 + 1 == 2}}`',
      );

      const mainFileSnippets: Array<vscode.CompletionItem> = [
        customVarSnippet,
        pythonCodeSnippet,
      ];

      const mainFileCompletion: Array<vscode.CompletionItem> = [
        new vscode.CompletionItem('endpoints:\n\t- name:'),
        new vscode.CompletionItem('requests:\n\t- name:'),
        new vscode.CompletionItem('tests:\n\t- name:'),
        new vscode.CompletionItem('headers:\n\t- '),
        new vscode.CompletionItem('vars:\n\t'),
        new vscode.CompletionItem('name: '),
        new vscode.CompletionItem('path: '),
        new vscode.CompletionItem('method: '),
        new vscode.CompletionItem('assert: '),
        new vscode.CompletionItem('params: '),
      ];

      const configFileCompletion: Array<vscode.CompletionItem> = [
        new vscode.CompletionItem('report:\n\t'),
        new vscode.CompletionItem('hide-request\n\t'),
        new vscode.CompletionItem('project_name: '),
        new vscode.CompletionItem('spec_path: '),
        new vscode.CompletionItem('output_path: '),
        new vscode.CompletionItem('template: '),
      ];

      return [
        ...mainFileCompletion,
        ...mainFileSnippets,
        ...configFileCompletion,
      ];
    },
  });

  context.subscriptions.push(provider);
}
