# README

## Table of contents

1. [Prerequisites](#prerequisites)
1. [Installation](#installation)
1. [Scripts](#scripts)
1. [Contribute - Git](#contribute-git)
1. [Configuration](#configuration)
1. [Documentation](#documentation)
1. [Styling](#styling)

## Prerequisites

These modules must be globally installed:

* [`eslint`](https://www.npmjs.com/package/eslint): Code analysis for JavaScript & AngularJS.
* [`htmlhint`](https://www.npmjs.com/package/htmlhint): Code analysis for HTML.
* [`sass-lint`](https://github.com/sasstools/sass-lint): Code analysis for Sass.

## Installation

```sh
$ npm install               # Development
$ npm install --production  # Production (only `dependencies`)
```

## Scripts

- `npm start` to launch `npm run server` and `json-server` (if checked) in parallel
- `npm run serve` to launch a webpack-dev-server server on your source files
- `npm run serve:prod` to launch a webpack-dev-server server on your source files in a **production** environment
- `npm run build` to build an optimized version of your application in /dist
- `npm run build:prod` to build an optimized version of your application in /dist in a **production** environment
- `npm run test` to launch your unit tests with Karma
- `npm run lint` to launch linting process

## Contribute - Git

Chandan Gupta
