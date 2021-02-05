const employee={
	id: 1,
	name: 'Cesar',
	department :'yahoo'
}

console.log(employee)

const empJsonStr = JSON.stringify(employee)

console.log(empJsonStr)
console.log(empJsonStr.name)

//--------------------

var empObject = JSON.parse(empJsonStr)
console.log(empObject.name)