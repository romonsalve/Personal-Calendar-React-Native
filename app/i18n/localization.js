import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import es_CL from './es-CL';

export default function initI18n() {
  i18n.fallback = true;
  i18n.defaultLocale = 'es_CL';
  i18n.translations = { es_CL };
  i18n.locale = Localization.locale;
}
