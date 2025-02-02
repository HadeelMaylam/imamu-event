document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const messageDiv = document.getElementById("form-message");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة

        const formData = new FormData(form);

        try {
            console.log("🚀 إرسال البيانات إلى السيرفر...");
            const response = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                body: formData,
            });

            console.log("📥 استجابة السيرفر:", response);

            const data = await response.json();
            console.log("📄 بيانات الاستجابة:", data);

            if (data.success) {
                showMessage("✅ تم التسجيل بنجاح!", "success");
                form.reset();
            } else {
                showMessage(`❌ ${data.message}`, "error");
            }
        } catch (error) {
            console.error("❌ خطأ أثناء إرسال البيانات:", error);
            showMessage("❌ تعذر إرسال البيانات، حاول مرة أخرى!", "error");
        }
    });

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = `message ${type}`;
        setTimeout(() => {
            messageDiv.textContent = "";
        }, 4000);
    }
});
