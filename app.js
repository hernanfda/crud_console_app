const appInterface = require("./appInterface");
const crud = require("./crud");

let input = appInterface();

switch (input) {
    case "1":
        crud.list();
        break;
    case "2":
        crud.create();
        break;
    case "3":
        crud.edit();
        break;
    case "4":
        crud.delete();
        break;
    case "5":
        process.exit();
        break;
    default:
        console.log("Action not recognized");
        break;
}
