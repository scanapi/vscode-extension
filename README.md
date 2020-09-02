![](https://github.com/scanapi/design/raw/master/images/github-hero-dark.png)

# ScanAPI

An extension that provides code completion for the [ScanAPI](https://github.com/scanapi/scanapi) specification.

Check ScanAPI's [documentation](https://github.com/scanapi/scanapi) for futher information about the specification.

## Installing

Preferably, install it from the VSCode Marketplace, but if for some reason you can't, you can download the latest stable version [here](https://github.com/scanapi/vscode-extension/releases).

Install it using:

`code --install-extension file_name_here.vsix`

## Snippets

|     Name | Result                                           |
| -------: | ------------------------------------------------ |
|   `cvar` | `Produces a custom var / ENV var interpolation.` |
| `pycode` | `Produces a python code interpolation.`          |

### `cvar`

```
${custom_var} or ${ENV_VAR}
```

### `pycode`

```python
${{ assert 1 + 1 == 2 }}
```
