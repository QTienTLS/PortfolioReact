import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'vi'], // Danh sách các ngôn ngữ được hỗ trợ
    fallbackLng: 'vi', // Ngôn ngữ mặc định nếu không tìm thấy ngôn ngữ phù hợp
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'], // Thứ tự ưu tiên phát hiện ngôn ngữ
      caches: ['cookie'], // Lưu ngôn ngữ đã chọn vào cookie
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Đường dẫn đến các tệp dịch
    },
    react: { 
      useSuspense: false // Tắt Suspense nếu bạn không muốn sử dụng nó
    }
  });

export default i18n;