// JavaScript Object Notation (JSON)
let newJSONObj = {
    name:"Subash",
    surname:"Adhikari",
    age:25,
    2:"Hello World",
    "permanent Address":"Kathmandu",
    "temporary Address":"Bhaktapur",
    "best Friends":["Hari","Shyam","Mohan","Sita"],
    addBestFriend:function(name){
        this["best Friends"].push(name);
    }
};

newJSONObj.name = "Ram";
newJSONObj["permanent Address"] = "Lalitpur";

console.log(newJSONObj.age);
console.log(newJSONObj[2]);
console.log(newJSONObj["age"]);
console.log(newJSONObj["permanent Address"]);
console.log(newJSONObj["best Friends"][0]);
newJSONObj.addBestFriend("Rita");
console.log(newJSONObj["best Friends"]);


let students=[
    {
        name:"Subash",
        surname:"Adhikari",
        "roll Number":10,
        dob: new Date("1996-01-01"),
        getAge: function(){
            return new Date()-dob
        }
    },
    {
        name:"Hari",
        surname:"Giri",
        address:{
            "city":"Kathmandu",
            "country":"Nepal"
        }
    }
]

console.log(students[1].address.city);