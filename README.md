[![Actions Status](https://github.com/developer239/react-apollo-graphql/workflows/CI/badge.svg)](https://github.com/developer239/react-apollo-graphql/actions?query=workflow%3A%22CI%22)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8b605e0fb1af6dc86063/test_coverage)](https://codeclimate.com/github/developer239/react-apollo-graphql/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/8b605e0fb1af6dc86063/maintainability)](https://codeclimate.com/github/developer239/react-apollo-graphql/maintainability)
[![Dependabot](https://badgen.net/dependabot/developer239/react-apollo-graphql/84358471?icon=dependabot)](https://dependabot.com/)
[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/developer239/react-apollo-graphql&style=flat)](https://mergify.io)

## React Apollo GraphQL [from scratch]


Today you have basically two ways how to start new React application: [NextJs](https://github.com/zeit/next.js/) or [Create React App](https://github.com/facebook/create-react-app). 

However, there is no fun in using other peoples frameworks so I created this application from scratch. If you ever wondered how to set up your own boilerplate. This is a good place to start.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Demo

You can try the application [here](https://react-apollo-graphql.herokuapp.com) (it might take a while before the free server wakes up)
 
📘 Backend API is running [here](https://node-type-orm-graphql.herokuapp.com/graphql). You can find the source code of the backend application [here](https://github.com/developer239/node-type-orm-graphql).

# Development

System Dependencies:

1. `brew install node`
2. `brew install yarn`

Run development server:

1. `yarn install`
2. `yarn apollo:generate-types:watch`
3. `yarn watch`

## Useful Commands

- `yarn lint:ts` lint TS files
- `yarn lint:css` lint CSS
- `yarn lint:circular-dependencies` detect circular dependencies
- `yarn apollo:generate-types` generate TS definitions from GraphQL schema
- `yarn apollo:remove-all-types` remove all automatically generated TS definitions
- `yarn test` run jest
- `docker-compose up` run the application in Docker 🐳 container

## TODO

- [ ] Optimize [antd](https://ant.design/docs/react/introduce) package with [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
- [ ] Create custom vendors config with [DllPlugin](https://webpack.js.org/plugins/dll-plugin/)
- [x] Implement _request password reset_ + _request password change_
- [x] Implement _automatic token refresh_

# Production

Keep in mind that `main` and `vendors` packages **are huge**. I plan to implement [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import) and [DllPlugin](https://webpack.js.org/plugins/dll-plugin/) in the future.

1. `SERVER_URL=https://node-type-orm-graphql.herokuapp.com/graphql yarn build`
2. `yarn prod`
