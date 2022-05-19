/*
 * @Author: yz
 * @Date: 2022-05-05 16:13:01
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\tools\fn\base\type.js
 * 
 */
export default function (data) {
	// return Object.prototype.toString.call(data).slice(8,-1)
	let res = Object.prototype.toString.call(data).slice(8, -1)
	if (res == 'String') {
		return "str"
	} else if (res == 'Number') {
		return "num"
	} else if (res == 'Boolean') {
		return "boo"
	}
	// else if (res == 'Null'){
	// 	return "null"
	// }
	else if (res == 'Undefined' || res == 'Null') {
		return "und"
	} else if (res == 'Object') {
		return "obj"
	} else if (res == 'Function') {
		return "fn"
	} else if (res == 'Date') {
		return "date"
	} else if (res == 'RegExp') {
		return "reg"
	} else if (res == 'Array') {
		return "arr"
	}

}
