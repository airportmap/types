export interface ServerConfig {
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
}
