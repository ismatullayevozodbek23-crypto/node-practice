const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use('/api', productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
