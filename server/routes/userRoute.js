const {
  login,
  register,
  setAvatar,
} = require("../controllers/userController.js");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.post("/setAvatar/:id", setAvatar);
router.get("/allusers/:id");

module.exports = router;
