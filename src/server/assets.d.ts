export interface Assets {
    css: Array< {
        href: string;
        media?: string;
        rel?: string;
    } >;
    js: Array< {
        src: string;
        type?: 'module' | 'text/javascript';
        defer?: boolean;
        async?: boolean;
    } >;
    preload?: Array< {
        href: string;
        as: string;
        type?: string;
        crossOrigin?: string;
    } >;
}

export interface AssetManifest {
    assets: {
        css: Record< string, {
            href: string;
            dependencies?: string[];
            media?: string;
            rel?: string;
            global?: boolean;
        } >;
        js: Record< string, {
            src: string;
            dependencies?: string[];
            type?: 'module' | 'script';
            defer?: boolean;
            async?: boolean;
            global?: boolean;
        } >;
    };
    preload?: Assets[ 'preload' ];
}
