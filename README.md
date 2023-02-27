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

> Scope @secureapigateway that allows you to seamlessly use a mix of packages from the public npm registry and one or more private registries

| Package                          | cli-ui   | common-ui        | rcs-ui        | swagger-ui    |
|----------------------------------|----------|------------------|---------------|---------------|
| @angular-devkit/architect        | 0.803.20 | 0.900.1          | 0.900.1       | 0.900.2       |
| @angular-devkit/build-angular    | .        | 0.900.1          | 0.900.1       | 0.900.2       |
| @angular-devkit/build-ng-packagr | .        | 0.900.1          | 0.900.1       | .             |
| @angular-devkit/build-optimizer  | .        | 0.900.1          | 0.900.1       | 0.900.2       |
| @angular-devkit/build-webpack    | .        | 0.900.1          | 0.900.1       | 0.900.2       |
| @angular-devkit/core             | 8.3.20   | 9.0.1            | 8.0.0         | 8.0.0         |
| @angular-devkit/schematics       | 8.3.20   | 9.0.1            | 8.0.0         | 8.0.0         |
| @angular/cli                     | 8.3.20   | 9.0.1            | 9.0.1         | 9.0.1         |
| @angular/flex-layout             | .        | 7.0.0-beta.19    | 7.0.0-beta.19 | 7.0.0-beta.19 |
| @ngtools/webpack                 | .        | 9.0.1            | 9.0.1         | 9.0.1         |
| @nguniversal/common              | .        | .                | 9.0.0         | 9.0.0         |
| @nguniversal/express-engine      | .        | 7.1.1            | 9.0.0         | 9.0.0         |
| @schematics/angular              | 8.3.20   | 9.0.1            | 8.0.0         | 8.0.0         |
| @schematics/update               | 0.803.20 | 0.900.1          | 0.900.1       | 0.900.1       |
| ng-packagr                       | .        | 9.0.0            | 9.0.0         | 9.0.0         |
| rxjs                             | 6.4.0    | 6.3.3            | 6.5.4         | 6.5.4         |
| typescript                       | .        | 3.7.5            | 3.7.5         | 3.7.5         |
| webpack                          | .        | 4.41.2           | 4.41.2        | 4.41.2        |

# secure-api-gateway-ob-uk-ui

Secure API Gateway User interfaces

## Subprojects

### Secure API Gateway cli UI package

[secure-api-gateway-ob-uk-ui-cli readme]secure-api-gateway-ob-uk-ui-cli/README.md)

### Secure API Gateway common UI package

[secure-api-gateway-ob-uk-ui-common readme](secure-api-gateway-ob-uk-ui-common/README.md)

### Secure API Gateway RCS UI application

- Bank simulation (Resource Consent Service)

[secure-api-gateway-ob-uk-ui-rcs readme](secure-api-gateway-ob-uk-ui-rcs/README.md)

### Secure API Gateway Swagger UI application

- API documentation

[secure-api-gateway-ob-uk-ui-swagger readme](secure-api-gateway-ob-uk-ui-swagger/README.md)

## Publish npm package manually

The npm securebanking packages are published in the private forgerock repository, you will need the proper settings per-user config to publish a npm package.

> log on in https://maven.forgerock.org/ to get from your profile the `encrypted password` (base64password)

- Prepare your environment

  ```shell
  # Get the _auth access token
  curl -u${username:base64password} https://maven.forgerock.org/repo/api/npm/auth
  # response
  _auth = ZnJvcGxxxxxxxxxxxxxQ==
  always-auth = true
  email = jorge.sanchez-perez@forgerock.com
  ```
- create `~/.npmrc` file with the below content
  ```shell
  @secureapigateway:registry=https://maven.forgerock.org/artifactory/api/npm/npm-local/
  //maven.forgerock.org/artifactory/api/npm/npm-local/:_auth="ZnJvcGxxxxxxxxxxxxxQ=="
  ```
#### Publish a npm package
> We use the scope @secureapigateway and the basic auth to publish the tarball in forgerock npm repository

We need publish only those packages that we need use like as dependencies in other UI projects:

- `secure-api-gateway-ob-uk-ui-cli`: first change the version in package.json
  ```shell
  cd secure-api-gateway-ob-uk-ui-cli
  npm ci
  npm publish
  ```
  > check the published package: [Forgerock npm](https://maven.forgerock.org/repo/webapp/#/artifacts/browse/tree/General/npm-local/@secureapigateway/secure-api-gateway-ob-uk-ui-cli/-/@secureapigateway)
- `secure-api-gateway-ob-uk-ui-common`:first change the version in package.json
  ```shell
  cd secure-api-gateway-ob-uk-ui-common
  npm ci
  npm build
  npm publish ./dist
  ```
  > check the published package: [Forgerock npm](https://maven.forgerock.org/repo/webapp/#/artifacts/browse/tree/General/npm-local/@secureapigateway/secure-api-gateway-ob-uk-ui-common/-/@secureapigateway)

## Troubleshooting 

### troubleshooting
Using node 14 `npm` will raise an error when `npm install <package>` runs
because the npm version of node 14 is more restrictive with the peer dependencies
and attempt to update the package-lock.json file, this will cause future issues.
To build the project properly:
```shell
cd ${ui-module}
rm -rf node_modules
```
```shell
npx npm@v6 ci
Need to install the following packages:
  npm@6.14.18
Ok to proceed? (y)
```

- Bad .npmrc configuration
```shell
npm ERR! code E401
npm ERR! Incorrect or missing password.
```
> fix the configuration following the `prepare your environment` section
- The package version currently exist in the repository
```shell
npm ERR! code E403
npm ERR! 403 403 Forbidden - PUT https://maven.forgerock.org/artifactory/api/npm/npm-local/@secureapigateway%2fsecure-api-gateway-ob-uk-ui-cli - forbidden
```
> Change the version in the package.json descriptor and run: `npm install`, `npm ci` and `npm publish` again

### Release shared npm packages
#### Shared npm packages
- secure-api-gateway-ob-uk-ui-common [more info](secure-api-gateway-ob-uk-ui-common/README.md)
- secure-api-gateway-ob-uk-ui-cli [more info](secure-api-gateway-ob-uk-ui-cli/README.md)

Release the shared packages is the process to delivery a new version of shared packages and this process is delegate to a github action (release.yml)
- Create a new tag with the new version: github UI
- Publish the release: github UI
  - The release action will be triggered and will create the new tarball pack version and publish the tarball to forgerock npm repository.
