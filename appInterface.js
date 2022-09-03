const prompt = require('prompt-sync')({ sigint: true });

let appInterface = () => {
    console.log("*----------------------------------*")
    console.log("*--- Welcome to CRUD on console ---*")
    console.log("*----------------------------------*")
    console.log("\n1.  List movies")
    console.log("2.  Create movie")
    console.log("3.  Edit movie")
    console.log("4.  Delete movie")
    console.log("\n5. Exit app")
    console.log("\n__If you want to exit the app at any time type ctl + c")
    console.log("\n")
    return prompt("Please type the option number that you want ---> ")
}


module.exports = appInterface;