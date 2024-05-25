const express = require("express")
const { shortUrl, getUrlbyId } = require("../controllers/url");

const router = express.Router()


router.route("/").post(shortUrl)
router.route("/:id").get(getUrlbyId);
module.exports = router