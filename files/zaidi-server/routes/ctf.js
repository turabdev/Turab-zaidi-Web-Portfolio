const router = require('express').Router();
const CTF = require('../models/CTF');
const { protect } = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const docs = await CTF.find().sort({ date: -1 });
    res.json(docs);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.get('/platform/:name', async (req, res) => {
  try {
    const docs = await CTF.find({ platform: req.params.name }).sort({ date: -1 });
    res.json(docs);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.get('/stats/summary', async (req, res) => {
  try {
    const all = await CTF.find();
    res.json({
      total: all.length,
      easy: all.filter(x => x.difficulty === 'easy').length,
      medium: all.filter(x => x.difficulty === 'medium').length,
      hard: all.filter(x => x.difficulty === 'hard').length,
      insane: all.filter(x => x.difficulty === 'insane').length,
      htb: all.filter(x => x.platform === 'HTB').length,
      thm: all.filter(x => x.platform === 'THM').length,
    });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.get('/:id', async (req, res) => {
  try {
    const doc = await CTF.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

router.post('/', protect, async (req, res) => {
  try {
    const doc = await CTF.create(req.body);
    res.status(201).json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

router.put('/:id', protect, async (req, res) => {
  try {
    const doc = await CTF.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const doc = await CTF.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) { res.status(400).json({ error: err.message }); }
});

module.exports = router;
