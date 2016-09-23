import Parser from '../src/utilities/parser';

const config = `
  userTask AnswerInitialReservation: Success {
    time: number
    numberOfGuests: number
  }
`;

describe('Config Language Parser', () => {
  it('should accept a single string', () => {
    expect(new Parser(config)).to.not.throw;
  });

  it('should accept an array of string', () => {
    expect(new Parser([config, config])).to.not.throw;
  });

  it('should generate a list of tasks', () => {
    const parser = new Parser(config);
    expect(parser.tasks).to.not.be.empty;
  });

  it('should get the output type', () => {
    const parser = new Parser(config);
    expect(parser.returnType('userTask AnswerInitialReservation: Success')).to.equal('Success');
  });

  it('should return success if there is no return type', () => {
    const parser = new Parser(config);
    expect(parser.returnType('userTask AnswerInitialReservation')).to.equal('Success');
  })
});
