const SafeRequest = require('../util/SafeRequest');
const expect = require('chai').expect;

describe('测试SafeRequest接口', function () {
  it('调用后台查询所有书籍接口: actionIndex', async () => {
    const url = 'book';
    const safeRequest = new SafeRequest(url);
    // const result = safeRequest.fetch();
    // result.then(res => {
    //   // console.log(res);
    //   done()
    // }).catch(err => {
    //   done(err);
    // });
    const result = await safeRequest.fetch();
    console.log(result);
    expect(result).to.be.an('object').to.have.property('data').with.length.gt(0);
    // done();
  });
})