// GOAL: Passing Data from the server into the template file
// User opens: http://localhost:3000/
// Server checks what day of the week it is.
//If it’s Saturday or Sunday → treat it as weekend
// Otherwise → weekday.

import express from "express";
const app = express(); // our server
const port = 3000;


// The main route!
// When the user goes to local host: 3000 , run this call back function
app.get("/", (req, res) =>{

    const d = new Date();
    let day = d.getDay();

    console.log(day);

    let type = "a weekday";
    let adv = "Its time to work hard";

    if(day == 0 || day ==2)
        // 0 is sunday and 6 is saturday!
    {
        type = "a weekend";
        adv = "Party!!!"
    }
    res.render("index.ejs", {
        dayType: type, advice: adv
    });
})

app.listen(port , ()=>
{
    console.log("Server loading on port" + port);
});