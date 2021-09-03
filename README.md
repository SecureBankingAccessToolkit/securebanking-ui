# Tools
- https://github.com/nvm-sh/nvm
# securebanking-ui

Secure banking User interfaces

## Subprojects

### Secure Banking cli UI

[securebanking-cli-ui readme](securebanking-cli-ui/README.md)

### Secure Banking common UI

[securebanking-common-ui readme](securebanking-common-ui/README.md)

### Secure Banking RCS UI

- Bank simulation (Resource Consent Service)

[securebanking-rcs-ui readme](securebanking-rcs-ui/README.md)

### Requirements
Several requirements are required to install secure banking rcs ui:

- cairo
- pango
- pixman
- jpeg

```
brew install pkg-config pixman cairo pango libpng jpeg giflib
```

### Secure Banking Auth UI

- OIDC Login/Register pages

[securebanking-auth-ui readme](securebanking-auth-ui/README.md)

### Secure Banking Swagger UI

- API documentation

[securebanking-swagger-ui readme](securebanking-swagger-ui/README.md)

## Publish npm package manually

The npm securebanking packages are published in the private forgerock repository, you will need the proper settings per-user config to publish a npm package.

- Prepare your environment
  ```shell
  echo "@securebanking:registry=https://maven.forgerock.org/repo/api/npm/npm-local/" >> ~/.npmrc
  curl -u${username:password} https://maven.forgerock.org/repo/api/npm/auth >> ~/.npmrc
  ```
- Reponse content
  ```shell
  _auth = ZnJvcGxxxxxxxxxxxxxQ==
  always-auth = true
  email = youremail@forgerock.com
  ```
> The scope @securebanking allows you to seamlessly use a mix of packages from the public npm registry and one or more private registries

#### Publish a npm package

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

