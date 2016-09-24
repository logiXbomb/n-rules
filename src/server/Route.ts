import * as express from "express";

function doThis(d: any) {
  console.log(d, 'did it');
  return d;
}
@doThis
class Test {
  constructor() {
    console.log('built')
  }
}

class Route {

  bind(app) {
    console.log(this.config.verb)
    app.router[this.config.verb]('/' + this.config.name, this.execute);
    console.log(app.router.stack[0].route)
  }

  execute = (req, res) => {
    (async () => {
      const reply = await this.resolver(req);
      console.log(reply);
      if (reply.error) {
        res.status(500);
      } else {
        res.status(200).json(reply);
      }
    })();
  }

  constructor(private config: any, private resolver: any) {
    // console.log(config);
  }
}

class RouteBuilder {
  //get router
  router: express.Router = express.Router();

  build(): express.Router {
    //home page
    const test = new Test();
    this.routes.forEach(config => {
      if (config.type === 'userTask') {
        const resolver = this.resolvers[config.name];
        if (resolver) {
          const route = new Route(config, resolver);
          route.bind(this);
        } else {
          throw new Error(`No resolver for ${config.name}`);
        }
      }
    });
    return this.router;
  }

  constructor(private routes: Array<any>, private resolvers: any) {}
}

export default RouteBuilder;
