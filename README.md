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

### Logging

All server-side logging is gated with the [`debug`](https://www.npmjs.com/package/debug) module, so to get the full breadth of the, be sure the enable the following prefixes when starting up the server

```sh
DEBUG=api-entry,cards,express,blackjack,roulette npm start
```

This is providing as an alias via:

```sh
npm run start:verbose
```

## Directory Structure

The repo is organized into 3 [`npm` workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces), which are located in the `packages` directory
  - `packages/client` - The client-side of the application that is served to browsers
  - `packages/deployment` - Resources that define how this application is deployed
  - `packages/server` - The server-side of the application that governs game state
