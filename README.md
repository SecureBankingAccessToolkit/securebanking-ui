# Tools
- https://github.com/nvm-sh/nvm (.nvmrc) Node Version Manager

# Stack tech versions
| tech        | version      |
|-------------|--------------|
| Angular CLI | 9.0.1        |
| Node        | " >=14 <16 " |
| npm         | " >=6 <8 "   |
| Angular     | 9.0.0        |
> engine-strict=true (@See the .npmrc file)

> Scope @Securebanking that allows you to seamlessly use a mix of packages from the public npm registry and one or more private registries

| Package                          | cli-ui   | common-ui        | rcs-ui        |
|----------------------------------|----------|------------------|---------------|
| @angular-devkit/architect        | 0.803.20 | 0.900.1          | 0.900.1       |
| @angular-devkit/build-angular    | .        | 0.900.1          | 0.900.1       |
| @angular-devkit/build-ng-packagr | .        | 0.900.1          | 0.900.1       |
| @angular-devkit/build-optimizer  | .        | 0.900.1          | 0.900.1       |
| @angular-devkit/build-webpack    | .        | 0.900.1          | 0.900.1       |
| @angular-devkit/core             | 8.3.20   | 9.0.1            | 8.0.0         |
| @angular-devkit/schematics       | 8.3.20   | 9.0.1            | 8.0.0         |
| @angular/cli                     | 8.3.20   | 9.0.1            | 9.0.1         |
| @angular/flex-layout             | .        | 7.0.0-beta.19    | 7.0.0-beta.19 |
| @ngtools/webpack                 | .        | 9.0.1            | 9.0.1         |
| @nguniversal/common              | .        | .                | 9.0.0         |
| @nguniversal/express-engine      | .        | 7.1.1            | 9.0.0         |
| @schematics/angular              | 8.3.20   | 9.0.1            | 8.0.0         |
| @schematics/update               | 0.803.20 | 0.900.1          | 0.900.1       |
| ng-packagr                       | .        | 9.0.0            | 9.0.0         |
| rxjs                             | 6.4.0    | 6.3.3            | 6.5.4         |
| typescript                       | .        | 3.7.5            | 3.7.5         |
| webpack                          | .        | 4.41.2           | 4.41.2        |

# securebanking-ui

Secure banking User interfaces

## Subprojects

### Secure Banking cli UI package

[securebanking-cli-ui readme](securebanking-cli-ui/README.md)

### Secure Banking common UI package

[securebanking-common-ui readme](securebanking-common-ui/README.md)

### Secure Banking RCS UI application

- Bank simulation (Resource Consent Service)

[securebanking-rcs-ui readme](securebanking-rcs-ui/README.md)

## Publish npm package manually

The npm securebanking packages are published in the private forgerock repository, you will need the proper settings per-user config to publish a npm package.

- Prepare your environment
  ```shell
  curl -u${username:password} https://maven.forgerock.org/repo/api/npm/auth >> ~/.npmrc
  ```
- Reponse content
  ```shell
  _auth = ZnJvcGxxxxxxxxxxxxxQ==
  always-auth = true
  email = youremail@forgerock.com
  ```

#### Publish a npm package
> We use the scope @securebanking

We need publish only those packages that we need use like as dependencies in other UI projects:

- `securebanking-cli-ui`: first change the version in package.json
  ```shell
  cd securebanking-cli-ui
  npm ci
  npm publish
  ```
  > check the published package: [Forgerock npm](https://maven.forgerock.org/repo/webapp/#/artifacts/browse/tree/General/npm-local/@securebanking/securebanking-cli-ui/-/@securebanking)
- `securebanking-common-ui`:first change the version in package.json
  ```shell
  cd securebanking-common-ui
  npm ci
  npm build
  npm publish ./dist
  ```
  > check the published package: [Forgerock npm](https://maven.forgerock.org/repo/webapp/#/artifacts/browse/tree/General/npm-local/@securebanking/securebanking-common-ui/-/@securebanking)

### Release shared npm packages
#### Shared npm packages
- Securebanking-common-ui [more info](securebanking-common-ui/README.md)
- Securebanking-cli-ui [more info](securebanking-cli-ui/README.md)

Release the shared packages is the process to delivery a new version of shared packages and this process is delegate to a github action (release.yml)
- Create a new tag with the new version: github UI
- Publish the release: github UI
  - The release action will be triggered and will create the new tarball pack version and publish the tarball to forgerock npm repository.
