const router = require('express').Router();
const { Project } = require('../models');
const { protect } = require('../middleware/auth');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const docs = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(docs);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET featured projects
router.get('/featured/list', async (req, res) => {
  try {
    const docs = await Project.find({ featured: true }).sort({ order: 1 });
    res.json(docs);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET one project
router.get('/:id', async (req, res) => {
  try {
    const doc = await Project.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// POST create — PROTECTED
router.post('/', protect, async (req, res) => {
  try {
    const doc = await Project.create(req.body);
    res.status(201).json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// PUT update — PROTECTED
router.put('/:id', protect, async (req, res) => {
  try {
    const doc = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// DELETE — PROTECTED
router.delete('/:id', protect, async (req, res) => {
  try {
    const doc = await Project.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) { res.status(400).json({ error: err.message }); }
});

module.exports = router;
