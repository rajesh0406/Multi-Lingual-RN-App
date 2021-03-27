import I18n from 'react-native-i18n';



import english from './english';
import tamil from './tamil';
I18n.fallbacks = true;
I18n.translations = {
    tamil,
    english,
    
  };
  export default I18n;