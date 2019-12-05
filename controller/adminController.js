// exports.login = (req, res) => {
// 	let message = "";
// 	res.render("login", { message : message})
// }

// exports.proses = (req, res) => {
// 	let data = req.body
// 	console.log(data)
// 	res.send(data)
// }

exports.kalkulator = (req, res) => {
	let message = "";
	res.render("kalkulator", {message : message})
}

exports.proses = (req, res) => {
	let nilai1 = parseInt(req.body.nilai1)
	let nilai2 = parseInt(req.body.nilai2)
	let operator = req.body.operator

	switch (operator) {
		case '+':
		hasil = nilai1 + nilai2;
		break;
		case '-':
		hasil = nilai1 - nilai2;
		break;
		case 'x':
		hasil = nilai1 * nilai2;
		break;
		case '/':
		hasil = nilai1 / nilai2;
		break;
	}
	console.log(hasil)
	res.send(`hasil dari ${nilai1} ${operator} ${nilai2} adalah ${hasil}`)
}