import * as express from 'express';
import * as path from 'path';
import Route from './Route';
import Security from './Security';

class Server {
  public app: express.Application;
  private resolvers: any;

  constructor(config: any, resolvers: any) {
    this.app = express();
    this.resolvers = resolvers;
    this.config(config);
    this.routes(config);
  }

  private config(config: any) {
    // CONFIG THE SERVER
    // this.app.use(middleWare())
    const security = new Security(config);
    this.app.use(security.run);
  }

  private routes(config: any) {
    //create routes

    var router: Route = new Route(config, this.resolvers);
    //use router middleware
    this.app.use(router.build());
  }
}

export default Server;
// var server = Server.bootstrap();
// export = server.app;
