export * from './i18n';
export * from './render';
export * from './routes';

export interface ServerConfig {
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
        viewBase?: string;
    };
    router?: {
        enabled: boolean;
        configPath: string;
        cntrlBase: string;
    };
}
