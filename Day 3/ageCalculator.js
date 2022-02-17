let students = [
    {
        name: "Subash",
        surname: "Adhikari",
        dob: new Date("1996-01-01"),
        age: function (){
            return new Date()-this.dob;
        } 
    },
    {
        name: "Ram",
        surname: "Gautam",
        dob: new Date("1995-03-01"),
        age : function (){
            return new Date()-this.dob;
        }
    },
    {
        name: "Hari",
        surname: "Sharma",
        dob: new Date("1992-11-04"),
        age : function (){
            return new Date()-this.dob;
        }
    }
];

students.forEach((student)=>{
    console.log(Math.floor(student.age()/(3600*24*365*1000)));
})