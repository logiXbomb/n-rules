class Parser {
  constructor(config: string | string[]) {
    console.log(config);
    const strings = [].concat(config);
    console.log(strings[0])
    // const temp = /(.*?)}/gi.exec(strings[0]);
    strings.forEach(str => {
      const temp = str.replace(/\n/g, '').match(/(.*?)}/gi);
      temp.forEach(item => {
        const decorators = item.match(/@(.*?)\)/gi) || [];
        item = item.replace(/@(.*?)\)/gi, '');
        const objVals = item.match(/^\s*(\w+[,\s]+\w+)/)[0].trim().split(' ');
        console.log(objVals);
        const obj = {
          name: '',
          type: '',
          decorators: {},
          verb: '',
          returnType: ''
        };
        obj.name= objVals[1];
        obj.type = objVals[0];
        obj.decorators = {};
        if (obj.type === 'userTask') {
          console.log(objVals)
          obj.verb = mapVerb(item.match(/\((.*?)(?=\:)/gi).toString().substring(1));
          obj.returnType = item.match(/\:(.*?)(?=\))/gi).toString().substring(1);
        } else if (obj.type === 'serverTask') {
          obj.returnType = item.match(/\:(.*?)(?=\{)/gi).toString().substring(1).trim();
        }
        decorators.map(val => {
          obj['decorators']
          [val.match(/@(.*?)(?=\()/gi).toString().substring(1)] =
          val.match(/\((.*?)(?=\))/gi).toString().substring(1)
        })
        console.log(obj);

        this.tasks.push(obj);
      });
    });
  }
  tasks = [];
  protected parseTasks = (tasks: string | string[]) => {
    // console.log(this.tasks);
  }
  protected returnType = (vals: string) => {
    const val = vals.match(/:.*$/);
    if (val && val.length > 0) {
      return val[0].substring(1).trim();
    }
    return 'Success';
  }
}

const mapVerb = verb => {
  switch(verb) {
    case 'create':
      return 'post';
    case 'update':
      return 'put';
    case 'read':
      return 'get';
    case 'delete':
      return 'delete';
    default:
      throw new Error('invalid userTask category specified');
  }
}

export default Parser;
