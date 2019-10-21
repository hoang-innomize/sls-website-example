# sls-website-example

An example of using Serverless Component to deploy a website that allow you to deploy website with multiple stages/environments.

## CLI

Run this command will deploy a website for `dev` environment

```sh
sls --env=dev
```

or you can change to another environment

```sh
sls --env=prod
```

you also can remove the website

```sh
sls remove --env=dev
```
