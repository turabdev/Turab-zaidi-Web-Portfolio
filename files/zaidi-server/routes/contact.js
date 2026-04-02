const router = require('express').Router();
const About = require('../models/About');
const { protect } = require('../middleware/auth');

// GET contact info
router.get('/', async (req, res) => {
  try {
    const doc = await About.findOne() || {};
    res.json({
      email: doc.email,
      github: doc.github,
      linkedin: doc.linkedin,
      htb: doc.htb,
      twitter: doc.twitter,
      location: doc.location,
    });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// PUT update contact info — PROTECTED
router.put('/', protect, async (req, res) => {
  try {
    const allowed = ['email', 'github', 'linkedin', 'htb', 'twitter', 'location'];
    const update = {};
    allowed.forEach(k => { if (req.body[k] !== undefined) update[k] = req.body[k]; });

    let existing = await About.findOne();
    let doc;
    if (!existing) {
      doc = await About.create(update);
    } else {
      doc = await About.findByIdAndUpdate(existing._id, update, { new: true, runValidators: true });
    }
    res.json(doc);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// POST contact form submission
router.post('/message', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: 'Name, email and message required' });
    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    console.log(`Contact form: [${name} <${email}>]: ${message}`);
    res.json({ message: 'Message received' });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
