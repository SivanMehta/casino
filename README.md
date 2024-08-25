# Casino

This is an attempt for me to practice my development and build a basic game server. I may or may not try to deploy it somewhere.

## Install Dependencies

```sh
npm ci
```

## Start app

```sh
npm start
```

## Directory Structure

The repo is organized into 3 [`npm` workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces), which are located in the `packages` directory
  - `packages/client` - The client-side of the application that is served to browsers
  - `packages/deployment` - Resources that define how this application is deployed
  - `packages/server` - The server-side of the application that governs game state
