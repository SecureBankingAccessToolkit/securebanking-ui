## Run app via CLI
```shell
cd securebanking-rcs-ui
```
```shell
npm ci
```
```shell
npm run build.rcs.themes
```
```shell
npm run serve.rcs.local
```
> Angular Live Development Server is listening on localhost:4201, open your browser on https://localhost:4201/

### Tests endpoints

| endpoint       | description                 | component                 | Extras                                      |
|----------------|-----------------------------|---------------------------|---------------------------------------------|
| `/dev/consent` | consent mock list view      | src/app/pages/consent-dev | Mock files: src/app/pages/consent-dev/mocks |
| `/dev/info`    | application properties view | It is a app route         | N/A                                         |
