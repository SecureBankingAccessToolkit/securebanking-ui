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
> Update the environment values `./projects/rcs/src/environments/environment.local.ts`

```shell
npm run serve.rcs.local
```
> Angular Live Development Server is listening on localhost:4201, open your browser on https://localhost:4201/

### Tests endpoints

| endpoint       | description                 | component                 | Extras                                      |
|----------------|-----------------------------|---------------------------|---------------------------------------------|
| `/dev/consent` | consent mock list view      | src/app/pages/consent-dev | Mock files: src/app/pages/consent-dev/mocks |
| `/dev/info`    | application properties view | It is a app route         | N/A                                         |

## RCS Docker image
### Build
```bash
# Build
# docker build -t <IMAGE_NAME> -f projects/swagger/docker/Dockerfile .
docker build -t eu.gcr.io/sbat-gcr-develop/securebanking/ui/rcs:local -f projects/rcs/docker/Dockerfile .
```
### Run
> Update the values on `./projects/swagger/docker/local.env` if necessary before `docker run`
```shell
# docker run -p 80:80 --env-file ./projects/swagger/docker/local.env <IMAGE_NAME>
docker run -p 80:80 --env-file ./projects/rcs/docker/local.env eu.gcr.io/sbat-gcr-develop/securebanking/ui/rcs:local
```
Open http://localhost
