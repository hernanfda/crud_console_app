const fs = require("fs");
const rawList = JSON.parse(fs.readFileSync("./dataBase.JSON", "utf8"));
const prompt = require("prompt-sync")({ sigint: true });

const crud = {
    list: function () {
        console.log("Listed movies");
        console.log("--------------------------------");
        rawList.forEach((element) => {
            console.log(`.Id: ${element.id}\n.Title: ${element.title}\n.Length: ${element.length}\n.Rating: ${element.rating}\n`);
        });
    },
    findMovie: function (id) {
        const movie = rawList.find((element) => {
            return element.id == id;
        });
        return movie;
    },
    create: function () {
        const newMovie = {
            id: rawList.length + 1,
            title: prompt("--Title:"),
            length: parseInt(prompt("--Length:")),
            rating: parseInt(prompt("--Rating:")),
        };
        rawList.push(newMovie);
        fs.writeFileSync("./dataBase.JSON", JSON.stringify(rawList, null, 2), "utf-8");
        console.log(`${newMovie.title} was created succesfully with the id# ${newMovie.id}`);
    },
    edit: function () {
        const id = parseInt(prompt("--Please add the id of the movie you want to edit  --> "));
        const updatedList = rawList.map((element) => {
            if (element.id === id) {
                console.log(`You are editing ${element.title}`);
                element.title = prompt("--Title:", element.title);
                element.rating = parseInt(prompt("--Rating:", element.rating));
                element.length = parseInt(prompt("--Length:", element.length));
                console.log(`${element.title} was updated!`);
                return element;
            }
            return element;
        });
        writeJson(updatedList);
    },
    delete: function () {
        const id = prompt("--Please add the id of the movie you want to delete  --> ");
        const movieToDelete = this.findMovie(id);
        const updatedList = rawList.filter((element) => {
            return element.id != movieToDelete.id;
        });
        console.log(`The movie ${movieToDelete.title} was deleted from the database`);
        writeJson(updatedList);
    },
};

//----support functions----
const writeJson = (newDB) => {
    fs.writeFileSync("./dataBase.JSON", JSON.stringify(newDB, null, 2), "utf-8");
};

module.exports = crud;
