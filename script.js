// رقم الواتساب الحقيقي المستقبل للطلبات
const RESTAURANT_WHATSAPP = "962785522491"; 

// قائمة الوجبات
const menuItems = [
    // --- قسم البرجر ---
    {
        id: 1,
        title: "برجر كلاسيك لحم",
        category: "burger",
        price: 3.50,
        desc: "شريحة لحم بلدي مع جبنة شيدر، خس، طماطم وصلصة خاصة.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "سوبر كريسبي برجر",
        category: "burger",
        price: 3.00,
        desc: "صدر دجاج مقرمش حار، مع مخلل وصوص المايونيز والتركية.",
        image: "https://images.deliveryhero.io/image/talabat/MenuItems/_SUPER_CRISPY_BURGER_32638429355473123600.jpg"
    },
    {
        id: 3,
        title: "دبل دبل برجر لحم",
        category: "burger",
        price: 4.80,
        desc: "شريحتين لحم أنجوس مع مضاعفة الجبن والصوص الملكي الخاص.",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "مشروم آند سويس برجر",
        category: "burger",
        price: 4.20,
        desc: "لحم مشوي مع شرائح المشروم الطازج وجبنة سويسرية ذائبة.",
        image: "https://www.elbalad.news/UploadCache/libfiles/783/6/600x338o/204.jpg"
    },

    // --- قسم الوجبات ---
    {
        id: 5,
        title: "وجبة بروستد 4 قطع",
        category: "meals",
        price: 4.50,
        desc: "4 قطع دجاج مقرمش + بطاطا + مثومة + خبز + كولسلو.",
        image: "https://tse4.mm.bing.net/th/id/OIP.1uyXUFpnR18V8ZJHJ_IuSAHaFj?r=0&pid=Api&h=220&P=0"
    },
    {
        id: 6,
        title: "وجبة بروستد عائلية (8 قطع)",
        category: "meals",
        price: 8.50,
        desc: "8 قطع دجاج حار أو عادي + بطاطا حجم عائلي + 2 مثومة + لتر بيبسي.",
        image: "https://cdn.moshtare.com/images/originals/01-20-2022_0518pm8873d491097f1e61a524.jpg"
    },
    {
        id: 7,
        title: "وجبة ستريپس دجاج (5 قطع)",
        category: "meals",
        price: 3.80,
        desc: "5 قطع أصابع الدجاج المقرمشة بدون عظم + بطاطا + صوص العسل والخردل.",
        image: "https://www.atyabtabkha.com/tachyon/sites/2/2023/09/crispy-chicken.jpg"
    },

    // --- قسم السندويشات ---
    {
        id: 8,
        title: "سندويش زنجر ",
        category: "sandwiches",
        price: 2.50,
        desc: "زنجر حار في خبز التورتيلا مع الجبن والصوص الملكي.",
        image: "https://i.ytimg.com/vi/iZHP_zlnqaA/maxresdefault.jpg"
    },
    {
        id: 9,
        title: "سندويش فاهيتا دجاج",
        category: "sandwiches",
        price: 2.80,
        desc: "شرائح الدجاج المتبلة مع الفلفل الرومي، البصل وجبنة الموزاريلا.",
        image: "https://damaskmart.com/cdn/shop/products/2800_02f5b2de-02b6-4b3b-b501-5bc4bd7c251e_1200x1200.jpg?v=1599940232"
    },
    {
        id: 10,
        title: "سندويش فرانسيسكو دجاج",
        category: "sandwiches",
        price: 2.70,
        desc: "دجاج مع ذرة، مخلل، وجبنة ذائبة في الخبز الفرنسي المقرمش.",
        image: "https://kitchen.sayidaty.net/uploads/small/9f/9f8eff1810694a7429d046fb393f4dde_w750_h500.JPG"
    },

    // --- قسم المقبلات والمشروبات ---
    {
        id: 11,
        title: "بطاطا ودجز مع الجبن",
        category: "sides",
        price: 1.75,
        desc: "أصابع البطاطا المتبلة والمغطاة بجبن الشيدر الذائب.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        title: "حلقات البصل المقرمشة",
        category: "sides",
        price: 1.50,
        desc: "8 قطع من حلقات البصل الذهبية مع صوص الباربكيو.",
        image: "https://tse2.mm.bing.net/th/id/OIP.MxA10MaVijROS_-9jIBeEQHaFA?r=0&pid=Api&h=220&P=0"
    },
    {
        id: 13,
        title: "أصابع الموزاريلا (4 قطع)",
        category: "sides",
        price: 2.00,
        desc: "أصابع الموزاريلا المقلية والمقرمشة تقدم مع صوص المارينارا.",
        image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        title: "مشروب غازي ",
        category: "sides",
        price: 0.50,
        desc: "علبة باردة 330 مل.",
        image: "https://images.deliveryhero.io/image/talabat/MenuItems/mmw_638524834512003184"
    }
];

let cart = [];

// عرض المنتجات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    renderMenu(menuItems);
});

function renderMenu(items) {
    const menuGrid = document.getElementById("menu-grid");
    menuGrid.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${item.image}" alt="${item.title}" class="product-img">
            </div>
            <div class="product-info">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-desc">${item.desc}</p>
                <div class="product-bottom">
                    <span class="product-price">${item.price.toFixed(2)} د.أ</span>
                    <button class="add-btn" onclick="addToCart(${item.id})">
                        <i class="fa-solid fa-plus"></i> إضافة
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

// تصفية المنتجات حسب القسم
function filterCategory(category, button) {
    document.querySelectorAll(".cat-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    if (category === "all") {
        renderMenu(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

// التحكم بالسلة
function toggleCart() {
    document.getElementById("cart-drawer").classList.toggle("active");
    document.getElementById("cart-overlay").classList.toggle("active");
}

function addToCart(id) {
    const product = menuItems.find(p => p.id === id);
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
}

function updateQuantity(id, change) {
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const cartContainer = document.getElementById("cart-items-container");
    const cartBadge = document.getElementById("cart-badge");
    const cartTotal = document.getElementById("cart-total-price");

    cartContainer.innerHTML = "";
    let total = 0;
    let totalCount = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        totalCount += item.quantity;

        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <div class="item-details">
                <h4>${item.title}</h4>
                <p>${(item.price * item.quantity).toFixed(2)} د.أ</p>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        `;
        cartContainer.appendChild(itemElement);
    });

    cartBadge.innerText = totalCount;
    cartTotal.innerText = `${total.toFixed(2)} د.أ`;
}

// تبديل تفاصيل CliQ
function toggleCliqDetails() {
    const cliqSelected = document.querySelector('input[name="payment_method"]:checked').value.includes("كليك");
    const cliqBox = document.getElementById("cliq-details");
    if (cliqSelected) {
        cliqBox.classList.remove("hidden");
    } else {
        cliqBox.classList.add("hidden");
    }
}

// نسخ رقم كليك
function copyCliqNumber() {
    const cliqNum = document.getElementById("cliq-number").innerText;
    navigator.clipboard.writeText(cliqNum).then(() => {
        alert("تم نسخ رقم CliQ بنجاح: " + cliqNum);
    }).catch(err => {
        console.error("خطأ في النسخ: ", err);
    });
}

// إرسال الطلب عبر الواتساب مطابِق للتصميم المطلوب تماماً
function sendOrderToWhatsApp() {
    if (cart.length === 0) {
        alert("سلة الطلبات فارغة! يرجى إضافة وجبات أولاً.");
        return;
    }

    const selectedPayment = document.querySelector('input[name="payment_method"]:checked').value;
    const isCliq = selectedPayment.includes("كليك");
    const notes = document.getElementById("order-notes").value.trim();
    let total = 0;

    // بداية التنسيق طبق الأصل من الصورة
    let message = `*تفاصيل الطلب:*\n`;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.title} (عدد: ${item.quantity}) - ${itemTotal.toFixed(2)} د.أ\n`;
    });

    message += `\n💰 *المجموع الكلي:* ${total.toFixed(2)} د.أ\n`;

    if (isCliq) {
        message += `💳 *طريقة الدفع:* 📱 كليك (CliQ)\n\n`;
        message += `📌 *ملاحظة:* تم اختيار الدفع عبر CliQ. (يرجى إرفاق صورة وصل التحويل هنا لتأكيد الطلب/الحجز).\n`;
    } else {
        message += `💳 *طريقة الدفع:* 💵 نقداً عند الاستلام\n`;
    }

    if (notes) {
        message += `\n📝 *ملاحظات إضافية:* ${notes}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank");
}