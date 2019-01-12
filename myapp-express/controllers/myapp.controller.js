//pull in Service 
var MyAppService = require('../services/myapp.service.js');

// context of module inside the _this variable
_this = this

exports.getMyApps = async function (req, res, next) {

    // ternary to check query parameters
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;

    try {

        var myapps = await MyAppService.getMyApps(req.query, page, limit)

        // return workout list w/HTTP Status Code and Message.
        return res.status(200).json({ status: 200, data: myapps, message: "Succesfully Recieved" });

    } catch (e) {

        //Return error res message w/code.
        return res.status(400).json({ status: 400, message: e.message });

    }
}

exports.createMyApp = async function (req, res, next) {

    // Req.Body has form submit values.
    var myapp = {
        name: req.body.name,
        city: req.body.city,
        status: req.body.status
    }

    try {

        // calls Service function w/new object from req b
        var createdMyApp = await MyAppService.createMyApp(myapp)
        return res.status(201).json({ status: 201, data: createdMyApp, message: "Succesfully Created" })
    } catch (e) {

        //Return error res message w/code.
        return res.status(400).json({ status: 400, message: "Creation was Unsuccesfull, I am sorry :( " })
    }
}


