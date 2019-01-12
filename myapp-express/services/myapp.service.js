// Access our newly created Mongoose Model
var MyApp = require('../models/myapp.model.js')

// Let's use an Async function to get the To Do List
exports.getMyApps = async function(query, page, limit){

    // We also want to set up options for the mongoose paginate

    var options = {
        page,
        limit
    }

    //Let's create a Try and Catch function that way we have some error handling set. Waiting for the promise
        
    try {
        var myapps = await MyApp.paginate(query, options)
        
        //Once the Mongoose promise is returned we're going to go ahead and return the To Do List it has produced 

        return myapps;

    } catch (e) {

        //If the try didn't work we're going to go ahead and let the users know what kind of error we have

        throw Error('Oh No! We got an error while Paginating our To-Do Tasks, so sorry!' )
    }
}

exports.createMyApp = async function(myapp){
    
    // Creating a new Mongoose Object by using the new keyword

    var newMyApp = new MyApp({
        name: myapp.name,
        city: myapp.city
    })

    try{

        // Let's go ahead and save the Workout 

        var savedMyApp = await newMyApp.save()

        return savedMyApp;
    }catch(e){
      
        //if we can't create a Workout we want to throw an error 

        throw Error("Error while Creating Workout")
    }
}