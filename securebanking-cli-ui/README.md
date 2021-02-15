# Commands

## addTheme

`securebanking-cli-ui addTheme --name <themeName> --customizationPath <pathToCustomizationJSON> --outputFolder <pathToOutputFolder>`

### params

| name              | default value | description                |
| ----------------- | ------------- | -------------------------- |
| name              | none          | theme name                 |
| customizationPath | none          | path to the customer json  |
| outputFolder      | `themes`      | Folder to output the theme |

---

## buildThemes

`securebanking-cli-ui buildThemes --project <projectName>`

### params

| name    | default value | description                                            |
| ------- | ------------- | ------------------------------------------------------ |
| project | none          | The app in the angular monorepo that you want to build |

---

## appSize

`securebanking-cli-ui appSize --theme <themeName> --project <projectName>`

### params

| name    | default value | description                                                       |
| ------- | ------------- | ----------------------------------------------------------------- |
| theme   | none          | the location of the app in the dist folder dist/\${options.theme} |
| project | none          | The app in the angular monorepo that you want to build            |
