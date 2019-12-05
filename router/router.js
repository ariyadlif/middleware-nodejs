const adminController = require('../controller/adminController')
const middleware = require('../middleware/middleware')

module.exports = app => {
	app.get('/kalkulator', adminController.kalkulator) 
	app.post('/proses', middleware.validate_user, adminController.proses)
}