# Node-Rules

## Beginnings of a rule engine for NodeJS
    - Your rules should be a first class citizen of your API
    - This is being built with some ideas taken from GraphQL

## Examples
```javascript
import nRules from 'n-rules';

const types = `
  @Secure(LoggedIn)
  userTask checkItOut(create: Chicken) {

  }

  serverTask updateSomeStuff: Banana {

  }
`;

const resolvers = {
  checkItOut: () => "winning"
}

/*
  Just declare your task and resolvers.
  userTasks will be turned into RESTful endpoints
*/
nRules(types, resolvers);
```
