const router = require('express').Router();
const Blog = require('../models/Blog');
const { protect } = require('../middleware/auth');

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const docs = await Blog.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET published only
router.get('/published/list', async (req, res) => {
  try {
    const docs = await Blog.find({ status: 'published' }).sort({ date: -1 });
    res.json(docs);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET by slug
router.get('/slug/:slug', async (req, res) => {
  try {
    const doc = await Blog.findOne({ slug: req.params.slug });
    if (!doc) return res.status(404).json({ error: 'Post not found' });
    res.json(doc);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET one by ID
router.get('/:id', async (req, res) => {
  try {
    const doc = await Blog.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// POST create — PROTECTED
router.post('/', protect, async (req, res) => {
  try {
    const doc = await Blog.create(req.body);
    res.status(201).json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// PUT update — PROTECTED
router.put('/:id', protect, async (req, res) => {
  try {
    const doc = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// DELETE — PROTECTED
router.delete('/:id', protect, async (req, res) => {
  try {
    const doc = await Blog.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) { res.status(400).json({ error: err.message }); }
});

module.exports = router;
