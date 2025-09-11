exports.getUser = (req, res) => {
  res.json({ id: req.params.id, name: `User ${req.params.id}` });
};