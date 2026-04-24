import * as ssjson from './index.mjs'
// Fill with cookie taken from devtools
const cookie = ""

// https://www.skillshare.com/classes/YouTube-Success-Script-Shoot-Edit-with-MKBHD/731552530/
console.log(await ssjson.getCourse(731552530, cookie))