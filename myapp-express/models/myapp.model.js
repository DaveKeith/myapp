var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var MyAppSchema = new mongoose.Schema({
    name: String,
    city: String,
    date: Date,
    status: String
})

MyAppSchema.plugin(mongoosePaginate)
const MyApp = mongoose.model('Myapp', MyAppSchema)

module.exports = MyApp;