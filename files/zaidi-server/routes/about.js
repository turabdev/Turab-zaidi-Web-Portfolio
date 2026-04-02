const router = require('express').Router();
const About = require('../models/About');
const { protect } = require('../middleware/auth');

// GET about (singleton)
router.get('/', async (req, res) => {
  try {
    let doc = await About.findOne();
    if (!doc) {
      doc = await About.create({});
    }
    res.json(doc);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// PUT update — PROTECTED
router.put('/', protect, async (req, res) => {
  try {
    let existing = await About.findOne();
    let doc;
    if (!existing) {
      doc = await About.create(req.body);
    } else {
      doc = await About.findByIdAndUpdate(existing._id, req.body, { new: true, runValidators: true });
    }
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

module.exports = router;
