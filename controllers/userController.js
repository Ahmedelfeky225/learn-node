const MydataUser = require("../models/customersSchema")
// Format Date & Time
var moment = require('moment'); // require

const user_index_get = (req, res) => {
    MydataUser.find().then((result) => {
        res.render("index", { dataResult: result, moment: moment })
    }).catch((err) => {
        console.log(err)
    })
}


const user_view_get = (req, res) => {
    MydataUser.findById(req.params.id)
        .then((result) => {
            console.log(result)
            res.render("user/view", { dataUserr: result, moment: moment })
        }).catch((err) => {
            console.log(err)
        })
}


const user_edit_get = (req, res) => {
    MydataUser.findById(req.params.id)
        .then((result) => {
            res.render("user/edit", { obj: result })
        }).catch((error) => {
            console.log(error)
        })
}

const user_search_post = (req, res) => {
    console.log(req.body.search)
    let searchInput = req.body.searchText.trim();
    MydataUser.find({ $or: [{ firstName: searchInput }, { lastName: searchInput }] })
        .then((result) => {
            res.render("user/search", { searchResult: result })
            console.log(result)
        }).catch((err) => {
            console.log(err)
        })
}
const user_delete_inEditPage = (req, res) => {
    console.log(req.params.id)
    MydataUser.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect("/")
        }).catch((err) => {
            console.log("aha")
            console.log(err)
        })
}
const user_delete = (req, res) => {
    console.log(req.query.id)
    MydataUser.deleteOne({ _id: req.query.id })
        .then((result) => {
            console.log("________________________________")
            console.log(result)
            console.log("________________________________")
            res.redirect("/?_method=DELETE")
        }).catch((err) => {
            console.log(err)
        })
}

const edit_put = (req, res) => {
    MydataUser.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            console.log(result)
            res.redirect("/");
        });
}
const user_add_get = (req, res) => {
    res.render("user/add")
}
const user_post = (req, res) => {
    console.log(req.body)
    MydataUser.create(req.body)
        .then(() => {
            res.redirect("/")
        })
        .catch((error) => {
            console.log(error)
        })
}
module.exports = {
    user_index_get,
    user_view_get,
    user_edit_get,
    user_search_post,
    user_delete_inEditPage,
    user_delete,
    edit_put,
    user_add_get,
    user_post
}