import I18n from 'react-native-i18n';

import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

I18n.fallbacks = true;

I18n.translations = {
  en: enUS,
  zh: zhCN,
};

export default I18n;
