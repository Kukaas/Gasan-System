import mongoose from "mongoose";

const BarangayIndigencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    monthlyIncome: {
        type: Number,
        required: true,
    },
    purpose: {
        type: String,
        required: true,
    },
    dateOfIssuance: {
        type: Date,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
});

const BarangayIndigency = mongoose.model("BarangayIndigency", BarangayIndigencySchema);

export default BarangayIndigency;
