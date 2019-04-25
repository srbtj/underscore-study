const Underscore = require('../src/underscorejs');
const expect = require('chai').expect;

describe('测试isObject方法', function () {
  it('判断传入的参数是否是对象并返回执行结果：true / false', done => {
    const obj = {a: 1};
    const underscore = new Underscore();
    expect(underscore.isObject(obj)).to.be.true;
    done();
  })
});
