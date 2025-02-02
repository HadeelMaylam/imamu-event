// const allowedOrigins = require("./allowedOrigins");
// const corsOptions = { 
//     origin: (origin, callback) =>{ 
//         // علشان لو كان الاراي فاضي بيكون عدد الانكس بياوي -1
//         if(allowedOrigins.indexOf(origin) !== -1 || !origin) { 
//             callback(null, true); 
//         } else { 
//             callback(new Error("Not allowed by CORS"));
//     }
// },
//     credentials: true,
//     optionsSuccessStatus: 200,
// };
// module.exports = corsOptions;

const allowedOrigins = [
    "http://localhost:3000", // السماح للـ Frontend على نفس السيرفر
    "http://127.0.0.1:5500", // إذا كنت تستخدم Live Server
    "http://your-frontend-domain.com" // أضف أي نطاق آخر تحتاجه
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true, // السماح بإرسال الكوكيز والتوكن
    optionsSuccessStatus: 200
};

module.exports = corsOptions;
