# within3-ui

## setup

1. Before to run `within3-ui`, please, make the within3-api is up and running.

2. If you are running the app locally, please, create a file named `.env.local` with the following config in the project root folder.
```
REACT_APP_API_URI=http://localhost:3001/graphql
```
note: you can update the port depending the you have defined on the `within3-api`

3. Run `within3-ui`

```sh
$ yarn install
$ yarn start
```

## test

There's only one test defined, you can find it running the following command.

```sh
$ yarn test
```
