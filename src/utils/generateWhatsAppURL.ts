export default function generateWhatsAppURL(phone: string, message?: string) {
  const cleanedPhone = phone.replace(/\D/g, "");

  const baseUrl = "https://api.whatsapp.com/send/";
  const text = message;

  if (!text) {
    return `${baseUrl}?phone=${cleanedPhone}&type=phone_number&app_absent=0`;
  }

  const encodedText = encodeURIComponent(text);

  return `${baseUrl}?phone=${cleanedPhone}&text=${encodedText}&type=phone_number&app_absent=0`;
}
