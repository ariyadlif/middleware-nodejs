const express = require('express')
const path = require('path')
const app = express();
const bodyParser = require('body-parser');


app.set('view engine','ejs')
app.set('views','views')

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
		extended : true
	})
)

// app.get('/', (req, res) => {
// 	res.render('login')
// })

require('./router/router')(app)
var port = 8003;
app.listen(port, function() {
	console.log('server di 8003' + port);
});