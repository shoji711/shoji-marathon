const express = require('express');
const router = express.Router();
const pool = require('../db');

// 一覧取得
router.get('/customers', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM customers ORDER BY id ASC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// 追加
router.post('/add-customer', async (req, res) => {
  try {
    const { companyName, industry, contact, location } = req.body;

    await pool.query(
      'INSERT INTO customers (company_name, industry, contact, location) VALUES ($1,$2,$3,$4)',
      [companyName, industry, contact, location]
    );

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
});

module.exports = router;

