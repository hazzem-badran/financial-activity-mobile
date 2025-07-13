// constants/colors.js
const coffeeTheme = {
  primary: "#8B593E",
  background: "#FFF8F3",
  text: "#4A3428",
  border: "#E5D3B7",
  white: "#FFFFFF",
  textLight: "#9A8478",
  expense: "#E74C3C",
  income: "#2ECC71",
  card: "#FFFFFF",
  shadow: "#000000",
};

const forestTheme = {
  primary: "#2E7D32",
  background: "#E8F5E9",
  text: "#1B5E20",
  border: "#C8E6C9",
  white: "#FFFFFF",
  textLight: "#66BB6A",
  expense: "#C62828",
  income: "#388E3C",
  card: "#FFFFFF",
  shadow: "#000000",
};

const purpleTheme = {
  primary: "#6A1B9A",
  background: "#F3E5F5",
  text: "#4A148C",
  border: "#D1C4E9",
  white: "#FFFFFF",
  textLight: "#BA68C8",
  expense: "#D32F2F",
  income: "#388E3C",
  card: "#FFFFFF",
  shadow: "#000000",
};

const oceanTheme = {
  primary: "#0277BD",
  background: "#E1F5FE",
  text: "#01579B",
  border: "#B3E5FC",
  white: "#FFFFFF",
  textLight: "#4FC3F7",
  expense: "#EF5350",
  income: "#26A69A",
  card: "#FFFFFF",
  shadow: "#000000",
};

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


export const THEMES = {
  coffee: coffeeTheme,
  forest: forestTheme,
  purple: purpleTheme,
  ocean: oceanTheme,
  youthful: youthfulTheme,
};

// 👇 change this to switch theme
export const COLORS = THEMES.youthful;