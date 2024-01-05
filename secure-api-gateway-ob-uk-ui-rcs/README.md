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

## Test RCS ui app
This task must be mandatory before push any change to avoid get failures from git actions.
```shell
npm ci # (only if necessary)
```
```shell
npm run lint
```
```shell
npm run test
```
## RCS Docker image
### Build
```bash
# Build
docker build -t europe-west4-docker.pkg.dev/sbat-gcr-develop/sapig-docker-artifact/securebanking/ui/rcs:local -f projects/rcs/docker/Dockerfile .
```
### Run
> Update the values on `./projects/rcs/docker/local.env` if necessary before `docker run`
```shell
docker run -p 80:80 --env-file ./projects/rcs/docker/local.env europe-west4-docker.pkg.dev/sbat-gcr-develop/sapig-docker-artifact/securebanking/ui/rcs:local
```
Open http://localhost
