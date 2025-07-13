
// دالة التحقق من صحة البيانات
export const validateForm = (email: string, password: string): { isValid: boolean; message?: string } => {
  // التحقق من البريد الإلكتروني
  if (!email.trim()) {
    return { isValid: false, message: "Please enter your email address." };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { isValid: false, message: "Please enter a valid email address." };
  }
  
  // التحقق من كلمة المرور
  if (!password.trim()) {
    return { isValid: false, message: "Please enter your password." };
  }
  
  return { isValid: true };
};
