const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    date_start: { type: Date, required: true },
    date_end: { type: Date },
    description: { type: String, required: true },
    organization: { type: String, required: true },
    imagePath: { type: String }, // مسار الصورة بعد الحفظ
});

const Registration = mongoose.model("Registration", registrationSchema);
module.exports = Registration;
