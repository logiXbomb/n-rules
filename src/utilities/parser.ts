class Parser {
  constructor(config: string | string[]) {
    console.log(config);
    const strings = [].concat(config);
    // const temp = /(.*?)}/gi.exec(strings[0]);
    const temp = strings[0].replace(/\n/g, '').match(/(.*?)}/gi);
    console.log(temp);
    const objVals = temp[0].match(/^\s*(\w+[,\s]+\w+)/)[0].trim().split(' ');
    console.log(objVals);
    const obj = {};
    obj[objVals[0]] = objVals[1];
    console.log(obj);

    this.tasks.push(obj);
  }
  tasks = [];
  protected parseTasks = (tasks: string | string[]) => {
    console.log(this.tasks);
  }
  protected returnType = (vals: string) => {
    const val = vals.match(/:.*$/);
    if (val && val.length > 0) {
      return val[0].substring(1).trim();
    }
    return 'Success';
  }
}

export default Parser;
