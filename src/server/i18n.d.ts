export interface I18nConfig {
    path: string;
    pattern: string;
    fallbackLng: string;
    preload: string[];
    matrix: {
        lngs: string[];
        ns: string[];
    };
}

export interface I18nLookup {
    supportedLngs: string[];
    namespaces: string[];
}
