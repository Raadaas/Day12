var collection = {
    2548: {
        album:"Slippery When Wet",
        artist: "Bon Jovi",
        track: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album:"1999",
        artist: "Prince",
        track: [
            "1999",
            "Little Red Corvette"
        ]
    },
    2548: {
        album:"Robert Palmer",
        track: []
    },
    5439: {
        album: "ABBA Gold"
    }
};
//Keep a copy of the collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));
function updateRecords(object, id, prop, value){
    //Only change code below this line

    //Only change code above this line
}
console.log(updateRecords(object, id, prop, value));
module.exports = updateRecords;