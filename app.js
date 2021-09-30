var express = require("express");
const discord = require("discord.js");
const client = new discord.Client()
const { TOKEN } = require("./config");
var app = express();
var http = require('http');
app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://plus--bot.glitch.me/`);
}, 280000); 
console.log("on");








app.get("/", (req, res) => {
    res.render("index", {
        client: client
    });
});

app.get("/2", (req, res) => {
    res.render("devs", {
        client: client
    });
});


app.get("/cmds", (req, res) => {
    res.render("cmds", {
        client: client
    });
});

client.on("ready", () => {
    console.log("Done ")
});


client.login(`NjUzNzQ1OTgzNTAyNDE3OTQw.XfaO4Q.23f-3QCtHg2WmgTmBZUSi8N0JL0`)