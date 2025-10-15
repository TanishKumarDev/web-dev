const express = require("express");
const router = express.Router();
const { getAllBooks, deleteImage } = require("../controllers/bookController");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

router.get("/", getAllBooks);
router.delete("/:id/image", verifyToken, isAdmin, deleteImage);

module.exports = router;
