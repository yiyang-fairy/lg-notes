//point free
//Hello   World => hello_world
const fp = require('lodash/fp')

const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower) // 将字符串转换为小写  并全局匹配空格，用'_'取代空格 

console.log(f('Hello   World'))

//案例
//把一个字符串的首字母提取并换成大写， 使用. 作为分隔符
// world wild web => w. w. w
//const firstLetterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.first), fp.map(fp.toUpper), fp.split(' '))    使用两次map 繁琐
const firstLetterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '))


console.log(firstLetterToUpper('world wild web'))