const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/Users');
const serviceControl = require('./routes/Services');
const serviceRecordControl = require('./routes/ServiceRecord');
const paymentsControl = require('./routes/payments');
const carsControl = require('./routes/Cars');
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use('/users', userRoutes);
app.use('/services', serviceControl);
app.use('/cars', carsControl);
app.use('/payments', paymentsControl);
app.use('/services/records', serviceRecordControl);
app.get('/', (req, res) => {
    res.send('Server is running and connected to database')
})
app.listen(process.env.PORT,
    () => console.log(`Server started on port ${process.env.PORT}`)
);