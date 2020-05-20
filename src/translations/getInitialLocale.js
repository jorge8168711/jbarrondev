import { defaultLocale, locales } from './config';

export function isLocale(tested) {
  return locales.some((locale) => locale === tested);
}

export function getInitialLocale() {
  const localSetting = localStorage.getItem('locale');

  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  }

  const [browserSetting] = navigator.language.split('-');
  if (isLocale(browserSetting)) {
    return browserSetting;
  }

  return defaultLocale;
}
