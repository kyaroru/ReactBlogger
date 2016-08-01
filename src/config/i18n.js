import I18n from 'react-native-i18n';

import zh_CN from './locales/zh-CN';
import en_US from './locales/en-US';

I18n.fallbacks = true;

I18n.translations = {
  'en': en_US,
  'zh': zh_CN,
};

export default I18n;
