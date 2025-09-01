const briefRoute = require("express").Router();
const { processFiles } = require('../controllers/BriefController');
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
briefRoute.post("/processFiles" , upload.single("file") , processFiles);
module.exports = briefRoute;