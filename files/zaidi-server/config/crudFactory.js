const { protect } = require('../middleware/auth');

module.exports = (Model, options = {}) => {
  const router = require('express').Router();
  const {
    sortField = 'order',
    extraRoutes = {},
  } = options;

  // GET all — PUBLIC
  router.get('/', (req, res) => {
    try {
      let docs = Model.findAll();
      if (sortField && typeof docs[0]?.[sortField] !== 'undefined') {
        docs.sort((a, b) => {
          if (a[sortField] !== b[sortField]) return a[sortField] - b[sortField];
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        });
      }
      res.json(docs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // GET one — PUBLIC
  router.get('/:id', (req, res) => {
    try {
      const doc = Model.findById(parseInt(req.params.id));
      if (!doc) return res.status(404).json({ error: 'Not found' });
      res.json(doc);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // POST create — PROTECTED
  router.post('/', protect, (req, res) => {
    try {
      const doc = Model.create(req.body);
      res.status(201).json(doc);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // PUT update — PROTECTED
  router.put('/:id', protect, (req, res) => {
    try {
      const doc = Model.update(parseInt(req.params.id), req.body);
      if (!doc) return res.status(404).json({ error: 'Not found' });
      res.json(doc);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // DELETE — PROTECTED
  router.delete('/:id', protect, (req, res) => {
    try {
      const result = Model.delete(parseInt(req.params.id));
      if (!result) return res.status(404).json({ error: 'Not found' });
      res.json({ message: 'Deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Add extra routes
  if (extraRoutes) {
    for (const [path, handler] of Object.entries(extraRoutes)) {
      router.use(path, handler);
    }
  }

  return router;
};
