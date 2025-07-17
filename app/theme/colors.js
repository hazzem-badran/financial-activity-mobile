const youthfulTheme = {
  primary: "#6366F1",        // Indigo 500 - لون رئيسي شبابي
  background: "#F9FAFB",     // رمادي فاتح جداً
  text: "#111827",           // رمادي غامق - لكتابة واضحة
  textLight: "#6B7280",      // رمادي متوسط - للنصوص الثانوية
  border: "#E5E7EB",         // حدود خفيفة
  card: "#FFFFFF",           // بطاقات
  white: "#FFFFFF",
  expense: "#F87171",        // أحمر وردي شبابي (للمصاريف)
  income: "#34D399",         // أخضر فريش (للدخل)
  shadow: "rgba(0,0,0,0.05)" // ظل ناعم
};

const youthfulDarkTheme = {
  primary: "#818CF8",        // Indigo 400 - يبقى شبابي وواضح على الخلفية الداكنة
  background: "#0F172A",     // رمادي كحلي غامق (Slate 900)
  text: "#F1F5F9",           // أبيض مائل للرمادي الفاتح (للنص الأساسي)
  textLight: "#94A3B8",      // رمادي أزرق فاتح (للنصوص الثانوية)
  border: "#1E293B",         // حدود خفيفة وواضحة في الوضع الداكن
  card: "#1E293B",           // خلفية البطاقات (أغمق من الخلفية العامة)
  white: "#FFFFFF",
  expense: "#FB7185",        // وردي فاقع لكن واضح على الخلفية الداكنة
  income: "#4ADE80",         // أخضر فريش ساطع (واضح على الخلفية الداكنة)
  shadow: "rgba(0,0,0,0.3)"  // ظل أغمق قليلاً ليظهر في الداكن
};


export const THEMES = {
  youthful: youthfulTheme,
  youthfulDarkTheme: youthfulDarkTheme,
};

// 👇 change this to switch theme
export const COLORS = THEMES.youthful;