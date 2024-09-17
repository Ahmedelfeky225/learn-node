const MydataUser = require("../models/customersSchema")
// Format Date & Time
var moment = require('moment'); // require
// Format Date & Time
const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")

// GET REQUEST    
router.get("/", userController.user_index_get)

router.get("/view/:id", userController.user_view_get)

router.get("/edit/:id", userController.user_edit_get)
// POST REQUEST


router.post("/search", userController.user_search_post)


// DELETE REQUEST
router.delete("/edit/delete/:id", userController.user_delete_inEditPage)
router.delete("/delete", userController.user_delete)
// PUT Request
router.put("/edit/:id", userController.edit_put);
module.exports = router