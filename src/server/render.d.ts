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
}

export interface RenderOptions {
    template: string;
    bodyClass?: string;
    assets?: {
        css?: string[];
        js?: string[];
        preload?: Assets[ 'preload' ];
    };
    meta?: Partial< GlobalContext[ 'meta' ] >;
    data?: Record< string, any >;
}
