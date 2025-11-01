/*
Name: Week 1 HW CS233W
Author: Derek Trost
Date: Orig. 10/25/25 (scrapped and restarted a couple times)
*/

//Importing modules and libraries
const express = require('express');
const app = express();

//Set listening port
const PORT = 3000;

//Creating variable for date and time
const currentDate = new Date();

//Route configuration
app.get('/', (req, res) => {
    res.send('<h1>Welcome to ShopShare!</h1><p>The current time is: ' + currentDate +'</p>');
});

app.get('/about', (req, res) => {
    res.send('<p>Name: ShopShare</p><p>Author: Derek Trost</p><p>Fall Term 2025</p>');
});

//Starting the server and success message
app.listen(PORT, () => {
    console.log("ShopShare is up and running! Live from port", PORT);
});