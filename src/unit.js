
'use strict'
// const URL = ''
const URL = 'http://test.sirchina.cn'
const myformatter = function (times) {
  var date = new Date(times * 1000)
  var strDate = date.getFullYear() + '-'
  if (date.getMonth() < 9) {
    var s = date.getMonth() + 1 + '-'
    strDate += '0' + s
  } else {
    strDate += date.getMonth() + 1 + '-'
  }
  if (date.getDate() < 10) {
    strDate += '0' + date.getDate()
  } else {
    strDate += date.getDate()
  }
  return strDate
}
// 替换所有的回车换行
const TransferString = function (content) {
  var string = content
  try {
    string = string.replace(/\r\n/g, '&')
    string = string.replace(/\n/g, '&')
  } catch (e) {
    alert(e.message)
  }
  return string.split('&')
}
export default {
  URL,
  myformatter,
  TransferString
}
