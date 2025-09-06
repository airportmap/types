export interface ServerConfig {
    server: {
        host: string;
        port: number;
        https: boolean;
        debug: boolean;
    };
    paths: {
        static: Record< string, string >;
    };
}
