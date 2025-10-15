const User = require("../models/user");

exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.user._id);
    if (!user || !(await user.comparePassword(oldPassword))) {
      return res.status(400).json({ error: "Invalid old password" });
    }
    user.password = newPassword; // hashed by pre-save hook
    await user.save();
    res.json({ message: "Password changed successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
