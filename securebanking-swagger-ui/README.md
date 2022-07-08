## Running app via CLI
```shell
cd securebanking-swagger-ui
```
```shell
npm ci
```
```shell
npm run build.swagger.themes
```

> Update the environment values `./projects/swagger/src/environments/environment.local.ts`

```shell
npm run serve.swagger.local
```

> Angular Live Development Server is listening on localhost:4205, open your browser on https://localhost:4205/

## Building the app with your theme

Create a new theme: <https://github.com/OpenBankingToolkit/openbanking-toolkit/wiki/Create-a-new-Theme>

Then build the docker image

## Swagger Docker image
### Build
```bash
# Build
# docker build -t <IMAGE_NAME> -f projects/swagger/docker/Dockerfile .
docker build -t eu.gcr.io/sbat-gcr-develop/securebanking/ui/swagger:local -f projects/swagger/docker/Dockerfile .
```
### Run
> Update the values on `./projects/swagger/docker/local.env` if necessary before `docker run`
```shell
# docker run -p 80:80 --env-file ./projects/swagger/docker/local.env <IMAGE_NAME>
docker run -p 80:80 --env-file ./projects/swagger/docker/local.env eu.gcr.io/sbat-gcr-develop/securebanking/ui/swagger:local
```
Open http://localhost
