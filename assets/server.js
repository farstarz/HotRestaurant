var express = require("express");
var path = require("path");




var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

// creating object constructor
function Guest(name, phone, email, uniqueID ){
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.uniqueID = uniqueID;
}
// creating array of guests
let guests = [{}];

// getting reservation data from user
app.post('/api/reserve', (req, res)=>{
    let guestInfo = req.body;
    console.log(guestInfo);
    let newGuest = new Guest(guestInfo.name, guestInfo.phone, guestInfo.email, guestInfo.uniqueID);
    guests.push(newGuest);    
});

// sending reservation data to client
app.get('/api/table', (req, res)=>{
    return (res.json.guests);
});

app.post('/api/table/:clear', (req,res)=>{
    guests.length = 0;
    return (res.json.guests);
})
