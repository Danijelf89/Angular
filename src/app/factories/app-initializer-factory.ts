import { TranslateService } from "@ngx-translate/core";
import { LANGUAGE_STORAGE_KEY, LOCALIZATIO_LANGUAGE_CODE_ENG, LOCALIZATIO_LANGUAGE_CODE_SRP } from "../shared/app-constants";

export function loadDefaultLanguage(service : TranslateService)
{
    return () => {
    let langs: string[] = [LOCALIZATIO_LANGUAGE_CODE_ENG, LOCALIZATIO_LANGUAGE_CODE_SRP];
    service.addLangs(langs);

    if(localStorage.getItem(LANGUAGE_STORAGE_KEY))
    {
        const lang = localStorage.getItem(LANGUAGE_STORAGE_KEY) || '';
        service.use(lang);
        return;
    }

    const browLanguage = service.getBrowserLang();
    service.use(
        browLanguage?.match(langs.join('|')) ? browLanguage : LOCALIZATIO_LANGUAGE_CODE_ENG
    );

    localStorage.setItem(LANGUAGE_STORAGE_KEY,service.currentLang);

    

    return Promise.resolve();
};
}