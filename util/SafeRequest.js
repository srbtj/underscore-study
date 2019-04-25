const fetch = require('node-fetch');
const config = require('../config');
class SafeRequest {
  constructor (url) {
    this.url = url;
    this.baseUrl = config.baseUrl;
  }
  fetch (options) {
    const urls = this.baseUrl + this.url;
    // console.log('请求url==========>>>>>>>>>>', urls);
    // const resPromise = fetch(urls, options ? {
    //   method: options.method,
    //   body: options.params
    // } : '');
    const resPromise = options
      ? fetch(urls, {method: options.method, body: options.params})
      : fetch(urls);

    // console.log('返回数据=>>>>>>>>>>>>>>', resPromise);
    return new Promise((resolve, reject) => {
      let result = {
        code: 0,
        message: '',
        data: []
      };
      resPromise
        .then(res => {
          let _json = {};
          try {
            _json = res.json();
          } catch(err) {
            // TODO
          }
          return _json;
        })
        .then(json => {
          result.data = json;
          resolve(result);
        })
        .catch(err => {
          // TODO 错误处理
          result.code = 1;
          result.message = '调用后台接口出错了，查看日志...';
          reject(result);
        });
    })
  }
}

module.exports = SafeRequest;
