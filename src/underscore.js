const _ = {};

var nativeKeys = Object.keys;
var hasOwnPrototype = Object.hasOwnPrototype;
_.isNull = function (obj) {
  return [null, undefined].indexOf(obj) > -1;
}

/**
 * @param {*} func
 * @param {*} context
 * @param {*} argCount
 * @returns
 */
const createCallback = function (func, context, argCount) {
  if (_.isNull(context)) return func;
  switch (_.isNull(argCount) ? 3 : argCount) {
    case 1: return function (value) {
      return func.call(context, value);
    };
    case 2: return function (value, other) {
      return func.call(context, value, other);
    };
    case 3: return function (value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4: return function (accumulator, value, index, collection) { // accumulator 累加器
      return func.call(context, accumulator, value, index, collection);
    };
  }
  return function () {
    return func.call(context, arguments);
  };
}

_.isObject = function (obj) {
  var type = typeof obj; // typeof null === 'object'  !!null -> false;
  return type === 'function' || type === 'object' && !!obj;
}

_.has = function (obj, key) {
  return obj && hasOwnPrototype.call(obj, key);
}
/**
 * 
 */
_.keys = function (obj) { // 获取元素自有属性
  if (!_.isObject(obj)) return [];
  if (nativeKeys) return nativeKeys(obj);
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}

_.each = function (obj, iteratee, context) {
  if (_.isNull(obj)) return obj;
  iteratee = createCallback(iteratee, context);
  var i, length = obj.length;
  if (length === +length) {
    for (i = 0; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    var keys = _.keys(obj);
    for (i = 0, length = keys.length; i < length; i++) {
      iteratee(obj[keys[i]], keys[i], obj);
    }
  }
  return obj;
}