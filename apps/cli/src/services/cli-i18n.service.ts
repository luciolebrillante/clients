import * as fs from "fs";
import * as path from "path";

import { I18nService } from "@bitwarden/common/services/i18n.service";

export class CliI18nService extends I18nService {
  constructor(systemLanguage: string, localesDirectory: string) {
    super(systemLanguage, localesDirectory, (formattedLocale: string) => {
      const filePath = path.join(
        __dirname,
        this.localesDirectory + "/" + formattedLocale + "/messages.json"
      );
      const localesJson = fs.readFileSync(filePath, "utf8");
      const locales = JSON.parse(localesJson.replace(/^\uFEFF/, "")); // strip the BOM
      return Promise.resolve(locales);
    });

    this.supportedTranslationLocales = ["en"];
  }
}
