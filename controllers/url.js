const { urlDb } = require("../models/url");
const { randomUUID } = require("crypto");

async function shortUrl(req, res) {
 try{
   const body = req.body;
   const uuid = randomUUID();
   console.log(body);
   await urlDb.create({
     url: body.url,
     shortUrl: uuid,
   });
   return res.status(201).json({
     shortUrl: `http://localhost:8001/url/${uuid}`,
     success: "true",
   });

 }catch(err){
    return res.json({err: 'error happened'})
 }
}

async function getUrlbyId(req, res) {
  const url = await urlDb.findOne({ shortUrl: req.params.id });
  if (!url) {
    return res.status(404).json({ success: false, message: "Url not found" });
  }
  return res.redirect(`https://${url.url}`);
} 

module.exports = {
  shortUrl,
  getUrlbyId,
};
