// 1. تفاعل زر الوضع الداكن والفاتح
const themeBtn = document.getElementById('themeBtn');
const rootElement = document.documentElement;

if (themeBtn) {
    themeBtn.addEventListener('click', function () {
        const currentTheme = rootElement.getAttribute('data-bs-theme');
        if (currentTheme === 'light') {
            rootElement.setAttribute('data-bs-theme', 'dark');
            themeBtn.textContent = 'الوضع الفاتح';
        } else {
            rootElement.setAttribute('data-bs-theme', 'light');
            themeBtn.textContent = 'الوضع الداكن';
        }
    });
}

// 2. تفاعل صفحة المدونة (قراءة المزيد)
const readMoreButtons = document.querySelectorAll('.read-more-btn');

if (readMoreButtons.length > 0) {
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            const content = this.getAttribute('data-content');

            document.getElementById('modalArticleTitle').textContent = title;
            document.getElementById('modalArticleBody').textContent = content;

            const articleModal = new bootstrap.Modal(document.getElementById('articleModal'));
            articleModal.show();
        });
    });
}

// 3. تفاعل صفحة المتجر (إضافة منتج للسلة وتحديث العداد)
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartCountElement = document.getElementById('cartCount');

if (addToCartButtons.length > 0 && cartCountElement) {
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            cartCount++;
            cartCountElement.textContent = cartCount;

            this.textContent = 'تمت الإضافة ✓';
            this.classList.replace('btn-primary', 'btn-success');

            setTimeout(() => {
                this.textContent = 'أضف إلى السلة';
                this.classList.replace('btn-success', 'btn-primary');
            }, 1000);
        });
    });
}

// 4. دالة صفحة الحاسبة البسيطة
function calculate(operation) {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultBox = document.getElementById('calcResult');

    if (!num1Input || !num2Input || !resultBox) return;

    const val1 = parseFloat(num1Input.value);
    const val2 = parseFloat(num2Input.value);

    if (isNaN(val1) || isNaN(val2)) {
        resultBox.className = "alert alert-danger text-center fs-5 mb-0";
        resultBox.textContent = "الرجاء إدخال أرقام صحيحة في الحقلين!";
        return;
    }

    let result = 0;

    switch (operation) {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/':
            if (val2 === 0) {
                resultBox.className = "alert alert-danger text-center fs-5 mb-0";
                resultBox.textContent = "خطأ: لا يمكن القسمة على الصفر!";
                return;
            }
            result = val1 / val2;
            break;
    }

    resultBox.className = "alert alert-success text-center fs-5 mb-0";
    resultBox.textContent = `النتيجة هي: ${result}`;
}

// 5. تفاعل نموذج صفحة التواصل (إظهار رسالة النجاح عند الإرسال)
const contactForm = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

if (contactForm && successMsg) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // منع إعادة تحميل الصفحة الافتراضي

        // إظهار رسالة النجاح
        successMsg.classList.remove('d-none');

        // تفريغ حقول النموذج
        contactForm.reset();

        // إخفاء رسالة النجاح تلقائياً بعد 4 ثوانٍ
        setTimeout(() => {
            successMsg.classList.add('d-none');
        }, 4000);
    });
}