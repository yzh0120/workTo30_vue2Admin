<1> 123.6666666666.toFixed(2)
	以数字的形式返回: 根据参数保留的新数字,
	

<2> Number(其他类型)
	以数字的形式返回: 其他类型转化为数字类型,
	
	
<3> Number.parent("123.45.67")
	以数字的形式返回: 将参数转化为整数,遇到非数字字符则返回NaN
	衍生:
	(1) Number.parseFloat("123.45.67")
	以数字的形式返回: 将参数转化为整数,
	
	
<4> Number.isNaN(1) 只对数字有效
	以布尔值的形式返回: 一个数字是不是NaN,
	衍生
	isNaN('1') 先通过Number()将其他类型转化为数字类型
	以布尔值的形式返回: 一个数字是不是NaN,
	

<5> Number.isInteger(1) 只对数字有效
	以布尔值的形式返回: 一个数字是不是整数,
	衍生
	isInteger('1') 先通过Number()将其他类型转化为数字类型
	以布尔值的形式返回: 一个数字是不是整数NaN,