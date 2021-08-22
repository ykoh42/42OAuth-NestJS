# 42oauth example with NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Passport-42 example with NestJS

- This example use [`ejs` template engine](https://ejs.co/).
  While [the original example](https://github.com/pandark/passport-42-example)
  is based on [`hbs`](https://handlebarsjs.com/).
- This example demonstrates how to use [NestJS](https://nestjs.com/) 8.x and
  [Passport-42](http://www.passportjs.org/packages/passport-42/) to authenticate
  users using [42 OAuth 2.0 API](https://api.intra.42.fr/apidoc).
  Use this example as a starting point for your own web applications.

## Instructions

To install this example on your computer, clone the repository and install
dependencies.

```bash
$ git clone git@github.com:innovationacademy-kr/42oauth.git
$ cd 42oauth
$ npm install
```

Register [an app](https://profile.intra.42.fr/oauth/applications) on 42 intra
and set the redirect URI to `http://localhost:3000/login/42/return`.

Copy `.env.sample` to `.env` and edit CLIENT_ID and CLIENT_SECRET info.

Start the server.

```bash
$ npm run start
```

Open a web browser and navigate to
[http://localhost:3000/](http://127.0.0.1:3000/)
to see the example in action.

## 42 API List

- [API List](./docs/42api.md)

## 이 문서의 저작권

<img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/cc-zero.png" width="80px"></img>
이 문서는 [CC0 (Public Domain, 크리에이티브 커먼즈 권리 포기)](LICENSE)로 누구나 영리적인 목적을 포함한 어떤 목적으로든 그리고 어떤 방법으로든 마음대로 사용할 수 있습니다.
