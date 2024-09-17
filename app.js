const express = require("express");
const app = express();
const port = process.env.PORT || 3005;
const mongoose = require("mongoose")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const allRoutes = require("./routes/allRoutes")
const addRouter = require("./routes/addUser")
app.set('view engine', 'ejs')
app.use(express.static('public'))
var methodOverride = require('method-override')
app.use(methodOverride('_method'))// autoReload
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

mongoose.connect("mongodb+srv://elfekyahmed337:Mai01005845202@cluster0.l0dpr.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        app.listen(port, () => {
            // console.log(`I am Listening in port ${port}`)
            console.log(`http://localhost:${port}/`)
        })
    }).catch((err) => {
        console.log("connection error", err)
    })
app.use(allRoutes)
app.use("/user/add.html", addRouter)