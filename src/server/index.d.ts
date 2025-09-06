export * from './i18n';

export interface ServerConfig {
    cfgBase: string;
    host: string;
    port: number;
    https: boolean;
    debug: boolean;
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
        viewPath?: string;
    };
    router?: {
        enabled: boolean;
        configPath: string;
    };
}
