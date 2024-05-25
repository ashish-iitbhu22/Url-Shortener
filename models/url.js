const mongo = require("mongoose")

const urlscemma = mongo.Schema({
    url:{
        type: String,
        require: true,
    },
    shortUrl:{
        type: String,
        unique:true
    }
})

const urlDb = mongo.model("urlShortener",urlscemma);

module.exports = {
  urlDb,
};