const express = require('express');
require('dotenv').config();
const { sequelize } = require('./models');
const productRoutes = require('./routes/productRoutes');
const saleRoutes = require('./routes/salesRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('✅ Express + Sequelize + JWT API Running'));

app.use('/api/products', productRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true })
    .then(() => {
        console.log('✅ Database synced');
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch(err => console.error('❌ Sync error:', err));
module.exports = app;