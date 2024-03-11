const express = require("express");
const { handleGenerateNewShortURL,
        handleGetAnaytics } = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:shortId",handleGetAnaytics);
module.exports = router; 