export interface I18nConfig {
    i18n: {
        path: string;
        pattern: string;
        fallbackLng: string;
        preload: string[];
    };
    matrix: {
        lngs: string[];
        ns: string[];
    };
}

export interface I18nLookup {
    supportedLngs: string[];
    namespaces: string[];
}
