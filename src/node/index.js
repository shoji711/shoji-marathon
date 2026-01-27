const express = require('express');
const customerRoutes = require('./routes/customerRoutes');

const app = express();

// ===== 本番(marathon)用 CORS =====
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://marathon.rplearn.net');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});
// ===============================

const port = 5425;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルーティング
app.use('/', customerRoutes);
app.use('/customers', customerRoutes);
app.use('/add-customer', customerRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

