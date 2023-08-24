

 import English from "../languages/En"
 import Farsi from "./../languages/fa"
// === import additional language files here === //

// input: language code in string
// returns an object of translated strings in the language
export const getTranslations = (langCode) => {
  if (langCode === 'en') return English;
  if (langCode === 'fa') return Farsi;
 
  // === add conditionals here for additional languages here === //
};

// input: language code in string & phrase key in string
// returns an corresponding phrase value in string
export const localize = (langCode, phraseKey) => {
  const lang = getTranslations(langCode);
  return lang[phraseKey] || 'Translation Not Found';
};
