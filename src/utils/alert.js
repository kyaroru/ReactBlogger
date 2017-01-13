import { Alert } from 'react-native';
import I18n from '../config/i18n';

export const alert = (title, content, callback) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: I18n.t('ok'),
        onPress: () => {
          if (callback) {
            callback();
          }
        },
      },
    ],
  );
};

export const confirmation = (title, content, callback) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: I18n.t('ok'),
        onPress: () => {
          if (callback) {
            callback();
          }
        },
      },
      { text: I18n.t('cancel'), onPress: () => {} },
    ],
  );
};

export const confirmCustomButton = (title, content, okText, callback) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: okText,
        onPress: () => {
          if (callback) {
            callback();
          }
        },
      },
      { text: I18n.t('cancel'), onPress: () => {} },
    ],
  );
};
