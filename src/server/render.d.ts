import { Assets } from './assets';

export interface GlobalContext {
    fn: {
        i18n: ( key: string, options?: any ) => string;
    };
    app: {
        env: string;
        host: string;
        protocol: string;
        lang: string;
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
    htmlClasses?: string;
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
    bodyClasses?: string;
    data?: Record< string, any >;
}
