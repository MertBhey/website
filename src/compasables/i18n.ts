/**
 * This file keeps the translation strings
 *
 * Could be replaced with solid-i18n but I don't think it's necessary for something this small.
 */

const Language = {
  en: {
    pageTitle: "Mert Karaduman | Backend Developer",
    title: "Backend Developer",
    page404: "404 | Not Found",
    oss: "This website is open source!"
  },

  /**
   * .cat domains have a rule that the website should either be
   * promoting Catalan culture or carrying online communications in Catalan.
   *
   * Sending catalan version of the website to catalan users seems to be OK as
   * [http.cat](https://github.com/httpcats/http.cat/) seems to be doing this for years.
   */
  cat: {
    pageTitle: "Mert Karaduman | Desenvolupador Backend",
    title: "Desenvolupador Backend",
    page404: "404 | No trobat",
    oss: "Aquest lloc web és de codi obert!"
  },
};

export function langHandler(language: string) {
  if (language.startsWith("ca")) {
    return Language.cat;
  }

  return Language.en;
}
