class Security {
  run = (req, res, next) => {
    const clientid = req.headers['clientid'];
    if (!clientid) return res.status(401).json('Client Not Authorized');
    const userTask = this.getTask(req.url);
    this.decorators(userTask, req);
    next();
  }

  private decorators = (userTask, req) => {
    (async () => {
      if (userTask.decorators.Secure) {
        const user = await this.checkUser(req);
        
      }
      return
    })();
  }

  private checkUser = (req): any => {
    const valid = Math.floor(Math.random() * 10) < 8;
    if (valid) {
      return { id: '2wq3r2w13ewsd2' }
    } else {
      return { error: 'Not a valid user' }
    }
  }

  private getTask = name => {
    return this.config.filter(t => t.name === name.substring(1))[0];
  }

  constructor(private config: any) {

  }
}

export default Security;
