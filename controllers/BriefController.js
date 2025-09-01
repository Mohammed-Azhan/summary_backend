const fs = require("fs");
processFiles = async (req, res) => {
    const file = req.file.buffer;
    res.status(200).json({status : true});
    // fs.writeFileSync(req.file.originalname, req.file.buffer);
}
module.exports = {processFiles}