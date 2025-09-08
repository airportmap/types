export interface ServerConfig {
    server: {
        host: string;
        port: number;
        https: boolean;
        debug: boolean;
    };
    statics?: Record< string, string >;
    mods?: {
        i18n?: {
            enabled: boolean;
            configPath: string;
            lookupPath: string;
        };
        session?: {
            enabled: boolean;
        };
        views?: {
            enabled: boolean;
            viewEngine?: string;
            viewBase?: string;
        };
        router?: {
            enabled: boolean;
            configPath: string;
            cntrlBase: string;
        };
    };
}
