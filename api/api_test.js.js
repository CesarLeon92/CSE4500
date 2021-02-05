
const fetch = require('node-fetch');

fetch('https://api.sunrise-sunset.org/json')
	.then(res => res.json())
	.then(json => {
		console.log("first array");
		console.log(json[0]);
		console.log("name of first user");
		console.log(lat(30));

	 })
