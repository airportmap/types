import { Assets } from './assets';

export interface CookieContext {
    theme?: string;
    locale?: string;
}

export interface GlobalContext {
    fn: {
        i18n?: ( key: string, options?: any ) => string;
    };
    app: {
        env: string;
        host: string;
        protocol: string;
        supportedLngs?: Array< {
            code: string;
            label: string;
        } >;
        locale?: string;
        theme?: string;
    };
    site: {
        originalUrl: string;
        path: string;
        query: any;
        params: any;
    };
    meta: {
        title?: string;
        description?: string;
        canonical?: string;
        robots?: string;
    };
}

export interface RenderOptions {
    template: string;
    htmlClasses?: string;
    bodyClasses?: string;
    assets?: {
        css?: string[];
        js?: string[];
        preload?: Assets[ 'preload' ];
    };
    meta?: Partial< GlobalContext[ 'meta' ] >;
    data?: Record< string, any >;
}

export interface RenderContext extends GlobalContext {
    assets: Assets;
    htmlClasses?: string;
    bodyClasses?: string;
    data?: Record< string, any >;
}
