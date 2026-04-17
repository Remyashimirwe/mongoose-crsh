const mongoose = require('mongoose');
const carsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        autoGenerate: false
    },
    type: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    manufacturingYear: {
        type: Number,
        required: true,
    },
    driverPhone: {
        type: String,
        required: true,
    },
    mechanicName: {
        type: String,
        required: true,
    }
})
const Cars = mongoose.model('Cars', carsSchema)
const paymentsSchema = new mongoose.Schema({
    _id: {
      type: String,
      required: true,
      autoGenerate: false
    },
    amountPayed: {
        type: Number,
        required: true,
    },
    paymentDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    plateNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cars',
        required: true
    },
    serviceRecord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Services',
        required: true
    }
})
const Payments = mongoose.model('Payments', paymentsSchema)
const serviceSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        autoGenerate: false
    },
    serviceName: {
        type: String,
        required: true,
    },
    servicePrice: {
        type: Number,
        required: true,
    }
})
const Services = mongoose.model('Services', serviceSchema)
const serviceRecordSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        autoGenerate: false
    },
    serviceDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    plateNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cars',
        required: true
    },
    serviceCode:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Services',
        required: true
    }
})
const ServiceRecords = mongoose.model('ServiceRecords', serviceRecordSchema)
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true,
    }
})
const User = mongoose.model('User', userSchema)
module.exports = {Cars, Payments, Services, ServiceRecords, User};
