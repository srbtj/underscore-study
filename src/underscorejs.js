// const hasOwnProperty = Object.hasOwnProperty;
// const underscorejs = {
//   isObject (obj) {
//     const type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
//   }
// };
// module.exports = underscorejs;
/**
 *
 * @description Underscore 类
 * @class Underscore
 */
class Underscore {
  /**
   * @description 构造函数, 返回 Underscore实例
   * @memberof Underscore
   * @example const _ = new Underscore()
   */
  constructor () {
    /** @description 获取实例属性方法别名 */
    this._hasOwnProperty = Object.hasOwnProperty;
    /** @description 获取实例属性 */
    this._keys = Obj.keys;
  }

  /**
   * @description 判断传入的参数是否是对象
   * @param {Object | Function} obj - 对象或函数
   * @returns Boolean: true || false
   * @memberof Underscore
   */
  isObject (obj) {
    const type = typeof obj;
    return Object.is(type, 'function') || Object.is(type, 'object') && !!obj;
  }
  /**
   *
   * @description 获取目标对象中是否包含指定的key
   * @param {*} object
   * @param {*} key
   * @memberof Underscore
   */
  hasKey (object, key) {
    return object && this.hasOwnProperty.call(object, key);
  }
  /**
   * @description 获取传入的对象的实例属性，不包括继承属性
   * @param {Object} object
   * @memberof Underscore
   */
  keys (object) {
    if (this._keys) return this._keys(object);
    const fields = [];
    for (let key in object) {
      if (this.hasKey(object, key)) fields.push(key);
    }
    return fields;
  }
  
}

module.exports = Underscore;