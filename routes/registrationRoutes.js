const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Registration = require("../models/Registration");

// إعداد Multer لتخزين الملفات
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });

// 🟢 معالجة طلب التسجيل
router.post("/register", upload.single("image"), async (req, res) => {
    try {
        console.log("📩 البيانات المستلمة:", req.body); // ✅ طباعة البيانات للتحقق

        const { name, type, date_start, date_end, description, organization } = req.body;

        // التحقق من صحة البيانات
        if (!name || !type || !date_start || !description || !organization) {
            return res.status(400).json({ success: false, message: "جميع الحقول مطلوبة" });
        }

        // إنشاء مستند جديد في قاعدة البيانات
        const newRegistration = new Registration({
            name,
            type,
            date_start,
            date_end,
            description,
            organization,
        });

        await newRegistration.save();
        res.status(201).json({ success: true, message: "تم التسجيل بنجاح!" });

    } catch (error) {
        console.error("❌ خطأ أثناء الحفظ:", error);
        res.status(500).json({ success: false, message: "خطأ في الخادم" });
    }
});

module.exports = router;
