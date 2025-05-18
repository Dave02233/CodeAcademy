const sinon = require('sinon');

const robot = {
  greet(name){  // Unit being tested
    return 'Hello ' + name;
  }
};

test('greet should return hello codey', () => {
  sinon.spy(robot, 'greet'); // Initialize the spy
  robot.greet('codey'); // Call the method
  expect(robot.greet.called).to.be.true;
  expect(robot.greet.calledWith('codey')).to.be.true;
  expect(robot.greet.returned('Hello codey')).to.be.true;
  robot.greet.restore(); // Remove spy from wrapped method
});