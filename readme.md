# Apollo Keanu Monorepo

This is a Lerna MonoRepo to fetch data from https://placekeanu.com/ and process it and expose it through an Apollo Server backend and to be consumed in in a React App implementing Apollo Client.

## Installation

This is a lerna monorepo, so recommended usage is:

Install dependencies

```sh
yarn
```

Start both backend and frontend

```sh
yarn dev
```

Frontend is available in http://localhost:5173/
Backend is available in http://localhost:4000/

## Dockerize Backend

In order to dockerize backend first run

```sh
yarn dockerize
```

And to start

```sh
yarn start:docker
```

Backend is available in http://localhost:4000/
