/**
 * 
 * @param {*} ua 
 * 判断手机浏览器是否是华为、小米、OPPO、vivo
 */
function getPhoneBrand (ua) {
  const oppoReg = /p[a-zA-Z]{2}m[0-9]{1}0|oppo/ig
  const vivoReg = /v[0-9]{4}[a-zA-Z]?a?|vivo/ig
  const miReg = /m.{7,8}c|mi.*?build/ig
  const huaweiReg = /huawei|honor/ig
  const iosReg = /iphone/ig
  if (iosReg.test(ua)) return 'ios'
  else {
    if (huaweiReg.test(ua)) return 'huawei'
    else if (miReg.test(ua)) return 'xiaomi'
    else if (oppoReg.test(ua)) return 'oppo'
    else if (vivoReg.test(ua)) return 'vivo'
    else return 'otherAndroid'
  }
}