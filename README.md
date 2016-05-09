# Api Blueprint Docker
[![Docker Stars](https://img.shields.io/docker/stars/dozer47528/api-blueprint-docker.svg)](https://hub.docker.com/r/dozer47528/api-blueprint-docker/)
[![Docker Pulls](https://img.shields.io/docker/pulls/dozer47528/api-blueprint-docker.svg)](https://hub.docker.com/r/dozer47528/api-blueprint-docker/)
[![Image Size](https://img.shields.io/imagelayers/image-size/dozer47528/api-blueprint-docker/latest.svg)](https://imagelayers.io/?images=dozer47528/api-blueprint-docker:latest)
[![Image Layers](https://img.shields.io/imagelayers/layers/dozer47528/api-blueprint-docker/latest.svg)](https://imagelayers.io/?images=dozer47528/api-blueprint-docker:latest)

## How to use?
`docker run --name test -e "repository=https://github.com/dozer47528/api-blueprint-test.git" -p 80:80 -p 8080:8080 -p 3000:3000 -d dozer47528/api-blueprint-docker`

Replace the `https://github.com/dozer47528/api-blueprint-test.git` with your own repository.

&nbsp;

#### How change `aglio` parameter
Add this parameter like this:`-e "aglio=--theme-template triple"`

Full command like this:

`docker run --name test -e "aglio=--theme-template triple" -e "repository=https://github.com/dozer47528/api-blueprint-test.git" -p 80:80 -p 8080:8080 -p 3000:3000 -d dozer47528/api-blueprint-docker`

aglio document: [https://github.com/danielgtaylor/aglio#executable](https://github.com/danielgtaylor/aglio#executable)

&nbsp;

#### How to support private repositiry?
Create ssh keys in your host and add parameter like this:`-v ~/.ssh:/root/.ssh`

Full command like this:

`docker run --name test -v ~/.ssh:/root/.ssh -e "repository=https://github.com/dozer47528/api-blueprint-test.git" -p 80:80 -p 8080:8080 -p 3000:3000 -d dozer47528/api-blueprint-docker`

&nbsp;

#### Ports explain:

* `80` : document server
* `3000` : mock server
* `8080` : webhook server

&nbsp;

#### How does it work?

When you first run or call the webhook:

1. use `aglio` convert all file like `*.apib` to `*.html`.
2. copy all the files (include origin html file in the repository) to `nginx` root.
3. restart `nginx` (auto reload).
4. restart `drakov` (by script).

&nbsp;

## How to config auto deploy
The server will auto reload every 5 minutes.

And you can add webhook in your repository settings.

![settings](https://raw.githubusercontent.com/dozer47528/api-blueprint-docker/master/images/webhook.png)
